"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { FormEvent, useEffect } from "react";
import provinces from "@/models/dummydata/thai_provinces";
const CreatePage = () => {
  async function createRoom(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // สร้าง ตารางรถไฟ
    const response = await fetch("http://localhost:3000/api/traintable", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
    if (response.ok) {
      // redirect(url:"/")
      document.getElementById("create_modal").showModal();
    } else {
      console.error("Failed to create room");
    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form
        className="max-w-lg w-full p-8 bg-white shadow-lg rounded-lg"
        onSubmit={createRoom}
        style={{ marginBottom: "5%" }}
      >
        <h1 className="text-3xl font-bold text-[#002D74] mb-8">สร้างเที่ยวรถไฟ</h1>
        <label className="form-control">
          <div className="label">
            <span className="label-text">ชื่อขบวน</span>
          </div>
          <input
            type="text"
            name="tripName"
            id="name"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </label>
        <div className="label">
          <label>
            สถานีเริ่ม
          <select name="startPoint">
            {provinces.map((province)=>(
              <option value={province.name_th}>{province.name_th}</option>
            ))}
          </select>
          </label>
        </div>
        <div className="label">
          <label>
            สถานีปลายทาง
          <select name="endPoint">
            {provinces.map((province)=>(
              <option value={province.name_th}>{province.name_th}</option>
            ))}
          </select>
          </label>
        </div>

        <div className="label">
          <label>
            เวลาออกรถ
          <input type="time" name="timeLeave"/>
          </label>
        </div>
        {/* <div className="label">
          <label>
            
          <select>
            {provinces.map((province)=>(
              <option value={province.name_th}>{province.name_th}</option>
            ))}
          </select>
          </label>
        </div> */}


        <div className="label"></div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="px-20 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Create
          </button>
          <Link href={"/admin"}>
            <button className="px-10 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">
              Back to console
            </button>
          </Link>
        </div>
      </form>
      <dialog id="create_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Successfully created!!!</h3>
          <p className="py-4">The room was created successfully.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={() => window.location.reload()}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default CreatePage;
