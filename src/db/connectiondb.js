const  mongoose = require("mongoose");

const connectDb = async (DATABASE_URL_ATLAS)=>{
    try {
         const DB_OPTION = {
            dbName:"restaurantapp"
        }
   console.log("DATABASE_URL_ATLAS",DATABASE_URL_ATLAS)
       await mongoose.connect("mongodb+srv://mryoraj:pe%40ce&lo%5C%2F3@cluster0.klx3tsg.mongodb.net/", DB_OPTION )
       console.log("connected successfully")

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;