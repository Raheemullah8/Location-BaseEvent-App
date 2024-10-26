import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
   fullname: String,
   email: String,
   password: String,
   location: {
    lat: Number,
    lon: Number,
   },
   profileimage: String,
   address: String,
   bio:String
})
export const UserModel = mongoose.models.Users||mongoose.model("Users",userSchema)