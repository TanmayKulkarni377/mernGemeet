import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import shopUser from "./models/shopuserModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await shopUser.deleteMany();

    const createdUsers = await shopUser.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
        return {...product, user: adminUser}
    })

    await Product.insertMany(sampleProducts)
    console.log('Data Imported!'.green.inverse);
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1)
  }
};

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await shopUser.deleteMany();

        console.log('Data Destroyed'.red.inverse);
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}