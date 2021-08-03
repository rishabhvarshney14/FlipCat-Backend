// Models
import User from "../model/userSchema.js";

// User SignUp method
export const userSignup = async (request, response) => {
  try {
    // Check if username exists or not
    const exist = await User.findOne({ username: request.body.username });
    if (exist) {
      return response.status(401).json("Username already exists");
    }

    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json("User is successfully registered");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

// User Login Method
export const userLogIn = async (request, response) => {
  try {
    const username = request.body.username;
    const password = request.body.password;

    let user = await User.findOne({
      username: username,
      password: password,
    });

    if (user) {
      return response
        .status(200)
        .json(`${request.body.username} login successfull`);
    } else {
      return response.status(401).json("Invalid Login");
    }
  } catch {
    console.log("Error: ", error.message);
  }
};
