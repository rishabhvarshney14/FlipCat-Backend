import { products } from "./constants/product.js";
import Product from "./model/productSchema.js";

const DefaultData = async () => {
  try {
    // Remove data to reduct duplicacy
    await Product.deleteMany({});
    // Insert data
    await Product.insertMany(products);
    console.log("Data Imported Successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default DefaultData;
