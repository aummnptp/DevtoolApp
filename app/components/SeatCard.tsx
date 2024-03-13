import React, { useState } from "react";
import { FaRegSquare } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";
import { FaSquareXmark } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
const SeatCard = () => {
  // blank ,selected , already
  const [seatA, setSeatA] = useState("blank");
  const [seatB, setSeatB] = useState("blank");
  const [seatC, setSeatC] = useState("blank");
  const [seatD, setSeatD] = useState("blank");
  // เก็บที่นั่งที่เราจะกด
  const [MySelect, setMySelect] = useState([]);

  const handleSeatClick = (seat: any) => {
    switch (seat) {
      case "A":
        setSeatA(seatA === "blank" ? "selected" : "blank");
        break;
      case "B":
        setSeatB(seatB === "blank" ? "selected" : "blank");
        break;
      case "C":
        setSeatC(seatC === "blank" ? "selected" : "blank");
        break;
      case "D":
        setSeatD(seatD === "blank" ? "selected" : "blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex items-center justify-center col-span-1">
        <h1 className="text-3xl">1</h1>
      <div className="card w-96 bg-base-100 shadow-xl items-center">
        <div className="flex col-span-4">
          <div onClick={() => handleSeatClick("A")} className="mx-4 ">
            <text className="text-3xl ml-2">A</text>
            {seatA === "blank" && <FaRegSquare  className="text-4xl " />}
            {seatA === "selected" && <FaCheckSquare  className="text-4xl" />}
            {seatA === "already" && <FaSquareXmark className="text-4xl" />}
          </div>
          <div onClick={() => handleSeatClick("B")} className="mx-4 mr-16">
            <text className="text-3xl ml-2">B</text>
            {seatB === "blank" && <FaRegSquare  className="text-4xl" />}
            {seatB === "selected" && <FaCheckSquare  className="text-4xl" />}
            {seatB === "already" && <FaSquareXmark className="text-4xl" />}
          </div>
          <div onClick={() => handleSeatClick("C")} className="mx-4 ml-16">
            <text className="text-3xl ml-2">C</text>
            {seatC === "blank" && <FaRegSquare  className="text-4xl" />}
            {seatC === "selected" && <FaCheckSquare className="text-4xl" />}
            {seatC === "already" && <FaSquareXmark className="text-4xl" />}
          </div>
          <div onClick={() => handleSeatClick("D")} className="mx-4">
            <text className="text-3xl ml-2">D</text>
            {seatD === "blank" && <FaRegSquare  className="text-4xl" />}
            {seatD === "selected" && <FaCheckSquare className="text-4xl" />}
            {seatD === "already" && <FaSquareXmark className="text-4xl" />}
          </div>
        </div>
      </div>



      
    </div>
  );
};

export default SeatCard;
