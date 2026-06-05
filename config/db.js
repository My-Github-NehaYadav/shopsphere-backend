const mongoose = require("mongoose");

const connectDB = async() =>{
    try {
    console.log(process.env.MONGO_URL, "llllllllllkkkkkkkkk")
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("DB Error:", error);
  }
} 

module.exports = connectDB;


// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("Database connected successfully!");
//   } catch (error) {
//     console.log("DB Error:", error.message);
//   }
// };

// module.exports = connectDB;