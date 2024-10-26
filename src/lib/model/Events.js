
import mongoose from "mongoose";


const { Schema } = mongoose 

const eventsSchema = new Schema(
    {
      title: String,  
      discription: String,  
      starttime: String,  
      endtime: String,  
      startday: String,  
      endday: String,  
      location: {
        lat:Number,
        long:Number,
      },
      address: String,
      createdBy: {type: mongoose.Types.ObjectId, ref: "Users"},
      going: [{type: mongoose.Types.ObjectId, ref: "Users"}],

    }
)
export const EventModel = mongoose.model("Events",eventsSchema)