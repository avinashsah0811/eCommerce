import mongoose from "mongoose";
import colors from "colors";

import dotenv from "dotenv";
import connectDB from './config/db.js';

import users from './data/users.js';
import products from "./data/products.js";

import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import User from './models/userModel.js';

dotenv.config();

connectDB();

// import all the data
const importData = async () => {
    try {
        // delete all models
        await Product.deleteMany();
        await Order.deleteMany();
        await User.deleteMany();

        // create users
        const createUsers = await User.insertMany(users);

        // get admin users id
        const adminUsers = createUsers[0]._id;

        // create products
        const sampleProducts = products.map((product) => {
            return {...product, user: adminUsers};
        });

        await Product.insertMany(sampleProducts);

        console.log('Data Imported!'.green.inverse);
        process.exit()

    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1)
    }
}

// delete all the data
const destroyData = async () => {
    try {
        // delete all models
        await Product.deleteMany();
        await Order.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!'.red.inverse);
        process.exit()

    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData();
} else {
    importData();
}



