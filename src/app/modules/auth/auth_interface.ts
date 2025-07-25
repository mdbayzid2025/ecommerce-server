import mongoose from "mongoose";


export type TLoginUser = {
    email: string,
    password: String
}

export type TJwtPayload = {
    user_id: mongoose.Types.ObjectId;
    role: 
}