import connectMongoDB from "@/lib/mongodb";
import Train_Timetable from "@/models/train_timetable";
import { NextResponse } from "next/server";


// create room api
export async function POST(request:Request) {

    const formData = await request.formData();
    const tripName = formData.get("tripName");
    const startPoint = formData.get("startPoint");
    const endPoint = formData.get("endPoint");
    const timeLeave = formData.get("tripName");
    const day = formData.get("day");
  
    await connectMongoDB();
    await Train_Timetable.create({tripName,startPoint,endPoint,timeLeave,day});
    
    return NextResponse.json({message:"TrainTable created"},{status:201});
} 

// get all room api
export async function GET(){
    await connectMongoDB();
    const response = await Train_Timetable.find();
    return NextResponse.json(response);
}

