import { Schema, model } from "mongoose";
import { IEvent } from "./event";
import validator from "validator";

// https://mongoosejs.com/docs/typescript.html

interface IUser {
  email: string;
  events: IEvent[];
  firstName: string;
  lastName: string;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Email address is not valid"],
  },
  events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const User = model<IUser>("User", userSchema);

export default User;
