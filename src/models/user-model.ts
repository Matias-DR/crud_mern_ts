import { Schema, Document, model } from 'mongoose';

export interface UserModel extends Document {
    id: string,
    name: string,
    email: string,
    phone: string,
    profImg: string,
    location: string
}

const UserSchema: Schema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    profImg: { type: String, required: true },
    location: { type: String, required: true },
})

export const UserModel = model<UserModel>('Product', UserSchema);