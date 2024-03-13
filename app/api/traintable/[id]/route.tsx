import connectMongoDB from "@/lib/mongodb";
import Train from "@/models/train_timetable";
import { NextResponse, } from "next/server";

// get by id api
export async function GET(request: Request){
    const id = request.url.slice(request.url.lastIndexOf('/')+1)
    const res = await Train.findById(id)
    return NextResponse.json(res);
}

// update api
// export async function PUT(request: Request ){
//     const id = request.url.slice(request.url.lastIndexOf('/')+1)
    
//     const formData = await request.formData();
//     const name = formData.get('name');
//     const description = formData.get('description');

//     await connectMongoDB();
//     const response = await Train.findByIdAndUpdate(id, {name, description});

//     if (!response) {
//         return NextResponse.json({ message: "Train not found" }, { status: 404 });
//     }

//     return NextResponse.json({ message: "Train updated" }, { status: 200 });
// }

// delete api
export async function DELETE(request: Request ){
    const id = request.url.slice(request.url.lastIndexOf('/')+1)
    await connectMongoDB();
    const response = await Train.findByIdAndDelete(id)
    return NextResponse.json({message:"Train deleted"},{status:201});
}