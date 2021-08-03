import Product from "../model/productSchema.js";

// Provide a list of products
export const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    response.json(products);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

// Provide the product with the given Id
export const getProductById = async (request, response) => {
  try {
    const product = await Product.findOne({ id: request.params.id });
    response.json(product);
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
