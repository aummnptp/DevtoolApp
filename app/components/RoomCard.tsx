
import React from "react";
import RoomAdd from "./RoomAdd";
import Link from "next/link";
import roomsdum from "../data/dummydata";
import { GoArrowRight } from "react-icons/go";

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
          <div className="card w-full bg-base-100 shadow-xl hover:bg-gray-200">
            
            <div className="card-body w-[70rem]">
              
              <h2  className="card-title flex justify-center">
                {data.tripName}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <div className="grid grid-cols-6 gap-6 text-lg">
                <div className="col-start-1 flex justify-center items-center">
              <p>{data.startPoint}</p>
              </div>
              <div className="col-start-2 text-5xl flex justify-center items-center">
              {/* <div className="col-start-2 text-5xl"> */}
              <GoArrowRight/>
              </div>
              {/* </div> */}
              <div className="col-start-3 flex justify-center items-center">
              <p>{data.endPoint}</p>
              </div>
              <p>{data.timeLeave}</p>
              {/* <div className="card-actions justify-end">
                <div className="badge badge-outline">creative</div>
                <div className="badge badge-outline">knineZ</div>
              </div> */}
              </div>
              
            </div>
          </div>
        </Link>
   
 
    // <div>dd</div>
  );
};


export default TrainCard;
