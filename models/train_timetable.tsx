import mongoose,{Schema} from "mongoose";

const train_timetableSchema = new Schema(
    {
        travelId: String,
        tripName:String,
        startPoint:String,
        endPoint:String,
        timeLeave:String,
        day:[],
    },{
        timestamps:true,
    }
);

const Train_Timetable = mongoose.models.Train_Timetable || mongoose.model("Train_Timetable", train_timetableSchema)

export default Train_Timetable;