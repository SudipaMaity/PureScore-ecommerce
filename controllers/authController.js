import { requireSignIn } from "../middlewares/authMiddleware.js";
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import jwt from "jsonwebtoken";

// call back function for register api
export const registerController = async (req, res) => {
  try {
    // const name = req.body.name;
    const { name, email, password, answer, phone, address } = req.body;
    // validations
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "email is required" });
    }
    if (!password) {
      return res.send({ message: "password is required" });
    }
    if (!answer) {
      return res.send({ message: "answer is answer" });
    }
    if (!phone) {
      return res.send({ message: "phone is required" });
    }
    if (!address) {
      return res.send({ message: "address is required" });
    }
    // check user
    const exisitingUser = await userModel.findOne({ email: email });
    //exixting user
    if (exisitingUser) {
      return res.status(200).send({
        success: true,
        message: "Already Registered Please login",
      });
    }
    // register user(store data into database)
    const hashedPassword = await hashPassword(password);
    //save
    // Object is created of userModel
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      answer,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Succcessfully",
      user:{
        name,
      email,
      phone,
      address,
      answer,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in registration",
      error,
    });
  }
};

// LOGIN ||post
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //fetch user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    // token encrypt
    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while login",
      error,
    });
  }
};

// forgot password || post
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, newPassword, answer } = req.body;

    if (!email) {
      return res.status(400).send({ error: "email is required" });
    }
    if (!newPassword) {
      return res.status(400).send({ error: "newPassword is required" });
    }
    if (!answer) {
      return res.status(400).send({ error: "answer is required" });
    }

    // fetch user
    const user = await userModel.findOne({ email, answer });
    // chech
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email or Answer",
      });
    }
    // hashed password
    const hashed = await hashPassword(newPassword);
    // update password
    await userModel.findByIdAndUpdate(user._id, { password: hashed });

    res.status(200).send({
      success: true,
      message: "Password Update Successfully",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "error while changing password",
      error,
    });
  }
};

// user protected route
export const userAuthController = (req, res) => {
  res.status(200).send({
    ok: true,
  });
};

// admin protected route
export const adminDashboard = (req, res) => {
  res.status(200).send({
    ok: true,
    message: "admin dashboard",
  });
};

//update profile
export const updateProfileController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    const user = await userModel.findById(req.user._id);
    if (password && password.length < 6) {
      return res.json({ error: "password is required & 6 character long" });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;

    const updateUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        password: hashedPassword || user.password,
        address: address || user.address,
        phone: phone || user.phone,
      },
      {
        new: true,
      }
    );
    res.status(200).send({
      success: true,
      message: "profile updated successfully",
      updateUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while updating profile",
      error,
    });
  }
};
