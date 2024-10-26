    import mongoose from "mongoose";

    const {Schema} = mongoose
    const categorySchema = new Schema({
        tilte: String,
        description: String,
        thumbnil: String,
    })
    export const CateoryModel = mongoose.model("Category",categorySchema)