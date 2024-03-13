
import React from "react";
import RoomAdd from "./RoomAdd";
import Link from "next/link";
import roomsdum from "../data/dummydata";

interface trainTime {
  _id: string;
  tripName: string;
  startPoint: string;
  endPoint: string;
  timeLeave: string;
  day:[];
}


 

const TrainCard = async ({ data }: { data: trainTime }) => {

  return (
        <Link  href={`/detail/${data._id}`}>
          <div className="card w-96 bg-base-100 shadow-xl hover:bg-gray-200">
            <figure>
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {data.tripName}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <p>{data.startPoint}</p>
              <p>{data.endPoint}</p>
              <p>{data.timeLeave}</p>
              {/* <div className="card-actions justify-end">
                <div className="badge badge-outline">creative</div>
                <div className="badge badge-outline">knineZ</div>
              </div> */}
            </div>
          </div>
        </Link>
   
 
    // <div>dd</div>
  );
};


export default TrainCard;
