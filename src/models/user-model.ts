import { Schema, Document, model } from 'mongoose';

export interface UserModel extends Document {
    id: String,
    name: String,
    email: String,
    phone: String,
    prof_img: string,
    location: String
}

const UserSchema: Schema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    prof_img: { type: String, required: true },
    location: { type: String, required: true },
})

export const UserModel = model<UserModel>('Product', UserSchema);