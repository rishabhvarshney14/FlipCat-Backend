// Models
import { response } from "express";
import User from "../model/userSchema.js";

export const userSignup = async (req, res) => {
  try {
    // Check if username exists or not
    const exist = User.findOne({ username: request.body.username });
    if (exist) {
      return response.status(401).response("Username already exists");
    }

    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    response.status(200).json("User is successfully registered");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
