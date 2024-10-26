import mongoose from "mongoose";

export async function connectDB() {
    try {
        let connection = await mongoose.connect(process.env.MONGODB_URI)
        console.info("connection Sucessfull",connection)
    
    } catch (error) { 
        console.log("Error in connection=>",error)
    } 
}


// import mongoose from "mongoose"


// export async function connectDB() {
//     const isConnect =  false
//     if(isConnect) return "Db already connect"
//     try {
//         let connected = await mongoose.connect(process.env.MONGODB_URI)
//         if(connected.connection.readyState == 1) isConnect = true;
//     } catch (error) {
//         console.log("DB-CONNECTION=>" ,error)
//     }
// }