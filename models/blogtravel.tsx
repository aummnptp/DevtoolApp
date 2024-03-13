import mongoose,{Schema} from "mongoose";

const roomSchema = new Schema(
    {
        blogName: String,
        detail: String,
    },{
        timestamps:true,
    }
);

const Room = mongoose.models.Room || mongoose.model("Room", roomSchema)

export default Room;