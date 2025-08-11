import mongoose from "mongoose";

export const connectDB = async (mongodb_uri, database_name) => {
    try {
        if(!mongodb_uri || !database_name) {
            //console.log(mongodb_uri); console.log(database_name);
            console.log("Failed to Connect to MongoDB: Forget to set .env File");
            return;
        }

        await mongoose.connect(mongodb_uri, {
            dbName: database_name,
        })

        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log(error.message);
    }
}