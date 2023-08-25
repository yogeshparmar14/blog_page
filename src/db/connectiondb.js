const  mongoose = require("mongoose");

const connectDb = async (DATABASE_URL_ATLAS)=>{
    try {
         const DB_OPTION = {
            dbName:"restaurantapp"
        }
   console.log("DATABASE_URL_ATLAS",DATABASE_URL_ATLAS)
       await mongoose.connect(DATABASE_URL_ATLAS, DB_OPTION )
       console.log("connected successfully")

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;