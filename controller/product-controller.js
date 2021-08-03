import Product from "../model/productSchema.js";

export const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    response.json(products);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
