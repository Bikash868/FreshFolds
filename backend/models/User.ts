import mongoose, { Schema, Document, Model } from "mongoose";

interface UserDoc extends Document {
    name: string,
    email: string,
    phone: string,
    address: string,
}

const UserSchema = new Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: false},
    address: {type: String, required: true},
},{
    timestamps: true
})

const User = mongoose.model<UserDoc>('user', UserSchema);

export { User };