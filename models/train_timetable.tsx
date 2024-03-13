import mongoose,{Schema} from "mongoose";

const train_timetableSchema = new Schema(
    {
        tripName:String,
        startPoint:String,
        endPoint:String,
        timeLeave:String,
        timeArrive:String,
        day:Date,
        // 
        seatRow:Number,
        ticketCost:Number,
        seatBooking:[]
    
    }
);

const Train_Timetable = mongoose.models.Train_Timetable || mongoose.model("Train_Timetable", train_timetableSchema)

export default Train_Timetable;