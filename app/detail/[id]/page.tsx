"use client";
import React, { useState, useEffect } from "react";
import MyCalendar from "@/app/components/MyCalendar";
import Clock from "react-live-clock";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";
import { RiMegaphoneLine } from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";<IoTicketOutline />
import SeatCard from "@/app/components/SeatCard";

interface Booking {
  _id: string;
  roomId: string;
  studentName: string;
  tel: string;
  date: Date;
  timeStart: string;
  timeEnd: string;
  reason: string;
}

const DetailPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const initialSeats = [
    { seatNumber: 'A1', isAvailable: true },
    { seatNumber: 'A2', isAvailable: false },
    // เพิ่มที่นั่งต่อไปตามต้องการ
  ];
  const [seats, setSeats] = useState(initialSeats);




  const { data: session, status } = useSession();
  const CurrentUserId = session?.user.id;
  const [room, setRoom] = useState<any>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const [selectedDate, setSelectedDate] = useState(
    formatDate(new Date().toDateString())
  );
  console.log(selectedDate);
  const [formData, setFormData] = useState({
    studentId: "",
    studentName: "",
    userId: CurrentUserId,
    tel: "",
    reason: "",
    date: "",
    timeStart: "",
    timeEnd: "",
  });

  useEffect(() => {
    const fetchRoom = async () => {
      const res = await fetch(`http://localhost:3000/api/room/${params.id}`);
      const data = await res.json();
      setRoom(data);
    };

    const fetchBookings = async () => {
      const res = await fetch(`http://localhost:3000/api/booking/${params.id}`);
      const data = await res.json();
      setBookings(data);
    };

    fetchRoom();
    fetchBookings();
  }, [params.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/booking/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", response.data);
      setFormData({
        studentId: "",
        studentName: "",
        userId: CurrentUserId,
        tel: "",
        reason: "",
        date: "",
        timeStart: "",
        timeEnd: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleDateClick = (selectedDateString: Date) => {
    // Handle the selected date in the parent component
    console.log(
      "Selected date in parent:",
      // setSelectedDate(selectedDateString)
      setSelectedDate(formatDate(selectedDateString.toDateString()))
    );
  };

  function formatDate(inputDate: string): string {
    // Create a new Date object for the current date
    const dateObject = new Date(inputDate);

    // Define options for formatting the date
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    // Format the current date using the options
    const formattedDate = dateObject.toLocaleDateString("en-US", options);

    return formattedDate;
  }
  return (
    <div>
      {/*  -------------------------------- ปฎิทิน -------------------------------------------*/}
      <div className="flex my-3">
        <div className="border-solid shadow-xl border-2 w-full rounded-md bg-base-100 mx-1 p-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-end mb-4">
              <Link href={`../admin/ticket/manage/${params.id}`}>
                <button className="btn">
                  <IoTicketOutline />
                  จัดการตั๋วที่นั่ง
                </button>
              </Link>
            </div>
            <div>
            <div>
      <h1>Train Seat Booking</h1>

     
          <SeatCard  />
     
    </div>

            </div>
          </div>
        </div>
      </div>
      <div className="flex my-3">
        <div className="border-solid shadow-xl border-2 w-full rounded-md bg-base-100 mx-1 p-6 ">
          <div className="flex justify-end mb-4">
            <Link href={`/report/${params.id}`}>
              <button className="btn">
                <RiMegaphoneLine />
                แจ้งปัญหา
              </button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold my-6">{room?.name}</h1>
          <p className="">รายละเอียด: {room?.description}</p>

          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white my-4">
            ข้อควรปฎิบัติ:
          </h2>
          <ul className="space-y-1 list-disc list-inside">
            <li>นักศึกษาจองห้องใช้ห้องได้ไม่เกิน 2 ชม./ครั้ง</li>
            <li>จำนวนต่อการใช้ห้อง ไม่เกิน 10 คน/ห้อง</li>
            <li>
              ทุกห้องจะเปิดให้บริการทุกวันจันทร์ ถึง ศุกร์ ตั้งแต่เวลา
              8.00-19.00 น.
            </li>
            <li>ใช้งานได้เฉพาะห้องที่ได้ทำการจองไว้เท่านั้น</li>
            <li>ทำการจองห้องก่อนใช้งาน 1 วัน</li>
            <li>รักษาความสะอาดของห้อง</li>
            <li>หากพบปัญหาสามารถกดแจ้งปัญหาพร้อมระบุปัญหาที่พบเจอได้</li>
            <li>ไม่ส่งเสียงดังรบกวนห้องอื่น</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
