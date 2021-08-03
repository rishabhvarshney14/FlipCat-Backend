import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
    trim: true,
    min: 5,
    max: 20,
  },
  lastname: {
    type: String,
    require: true,
    trim: true,
    min: 5,
    max: 20,
  },
  username: {
    type: String,
    require: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
  },
});

const user = mongoose.model("user", userSchema);

export default user;
