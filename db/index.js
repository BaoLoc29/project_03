const mongoose = require("mongoose");

const url = "mongodb+srv://loctranbao111:12345@cluster0.jm3fscb.mongodb.net/project";

const connectToDb = async () => {
    try {
        await mongoose.connect(url);
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectToDb;
