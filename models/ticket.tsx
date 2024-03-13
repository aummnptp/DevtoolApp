import {Schema,model,models} from "mongoose";


const ticketSchema = new Schema({
    // trainId:String,
    // seatRow:Number,
	// ticketCost:Number,
	// seatBooking:[]

    
},
);

const Ticket = models.Ticket || model("Ticket", ticketSchema);

export default Ticket;