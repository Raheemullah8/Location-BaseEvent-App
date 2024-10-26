import mongoose from "mongoose";

const {Schema} = mongoose
const subcategorySchema = new Schema({
    tilte: String,
    description: String,
    thumbnil: String,
    category: {type: mongoose.Types.ObjectId, ref: "Category"}
})
export const SubCateoryModel = mongoose.model("SubCategory",subcategorySchema)