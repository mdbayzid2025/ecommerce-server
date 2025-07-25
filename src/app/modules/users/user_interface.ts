import mongoose, {Types, Model} from "mongoose";
import { USER_ROLE } from "./user_const";


export type TUserRole = keyof typeof USER_ROLE;

export type TUser = {
    _id: Types.ObjectId,
    email: string,
    password: string,
    role: TUserRole
}

export interface UserModal extends Model<TUser>{
    isUserAlreadyExistsBy_id(_id: mongoose.Types.ObjectId): Promise<TUser>;
    isUserAlreadyExistsBy_email(email: string): Promise<TUser>;
    isUserBlockedOrDeletedFindBy_id(_id: mongoose.Types.ObjectId): Promise<TUser | null>;
    isPasswordMatched(
        plainTextPassword: string,
        hashedPassword: string
    ): Promise<boolean>

    isJWTIssuedAtBeforePasswordChanged(
        passwordChangedTimestamp: Date,
        jwtIssuedTimestamp: number,
    ): boolean;
}