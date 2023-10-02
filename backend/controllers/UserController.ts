import { Request, Response, NextFunction } from "express";
import { CreateUserInput } from '../dto';
import { User } from "../models";

export const CreateUser = async (req: Request, res:Response, next:NextFunction) => {
    const { name, email, phone, address } = <CreateUserInput>req.body;

    //Save the user info in db
    const newUser = await User.create({
        name: name,
        phone: phone,
        email: email,
        address: address,
    })


    return res.json(newUser);
}

export const GetUsers = async (req: Request, res:Response, next:NextFunction) => {
    res.json({})
}

export const GetUserById = async (req: Request, res:Response, next:NextFunction) => {
    res.json({})
}