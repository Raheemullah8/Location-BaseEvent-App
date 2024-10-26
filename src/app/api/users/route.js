import { connectDB } from "@/lib/db/connectDB";
import { UserModel } from "@/lib/model/Users";

export async function GET(request) {
  connectDB();

  const users = await UserModel.find();
  
  return Response.json({
   msg:"User featching Sucessfull",
   users
  },
     { status: 200 });
}

export async function POST(request) {
  connectDB();

  const obj = await request.json();
  let newUser = await new UserModel(obj);
  await newUser.save();

  return Response.json({
    msg:"user Added Sucessfull",
    users:newUser}, { status: 201 });
}

export async function PUT(request) {}

export async function DELETE(request) {}
