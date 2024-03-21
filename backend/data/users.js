import bcrypt from "bcryptjs"

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('12345',10),
        isAdmin: true
    },
    {
        name: 'John Smith',
        email: 'john@email.com',
        password: bcrypt.hashSync('12345',10),
        isAdmin: false
    },
    {
        name: 'Virat Kohli',
        email: 'virat@email.com',
        password: bcrypt.hashSync('12345',10),
        isAdmin: false
    },
    {
        name: 'MS Dhoni',
        email: 'ms@email.com',
        password: bcrypt.hashSync('12345',10),
        isAdmin: false
    },
    {
        name: 'Rohit Sharma',
        email: 'rohit@email.com',
        password: bcrypt.hashSync('12345',10),
        isAdmin: false
    },
    {
        name: 'KL Rahul',
        email: 'kl@email.com',
        password: bcrypt.hashSync('12345',10),
        isAdmin: true
    }
];

export default users;