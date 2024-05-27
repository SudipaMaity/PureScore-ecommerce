import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

// Protected routes token based
// token dcrypt
export const requireSignIn = async (req, res, next) => {
    try {
        const decodetoken = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        // console.log('decodetoken', decodetoken);
        req.user = decodetoken; //only store _id of user , initiation and expiry of token
        // console.log('req.user====>', req.user);
        next();
    } catch (error) {
        console.log(error);
    }
};

// Admin access
// (to check is user is asmin or not)
export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        // console.log("isAdmin user======>", user);
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized Access",
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: true,
            error,
            message: "error in admin middleware"
        })
    }
};