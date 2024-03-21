import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL)
        console.log(`Mongodb connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
    }
}

export default connectDB;