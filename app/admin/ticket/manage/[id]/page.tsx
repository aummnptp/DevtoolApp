import React from 'react'
import Link from "next/link";
const manageSeatPage = () => {
  return (
    <div className="flex items-center justify-center">
    <form
        className="max-w-lg w-full p-8 bg-white shadow-lg rounded-lg"
        style={{ marginBottom: "5%" }}
      >
        <h1 className="text-3xl font-bold text-[#002D74] mb-8">ปรับตั๋วรถไฟ</h1>
        <label className="form-control">
          <div className="label">
            <span className="label-text">จำนวนแถวที่นั่ง</span>
            
          </div>
          <input
            type="number"
            name="rowSeat"
            id="name"
            placeholder='แถว'
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            
            required
          />
        </label>


          <label>
        <div className="label">
          <span className="label-text">ค่าตั๋วรถไฟ</span>
          <input type="number" name="ticketCost" className='mt-1 p-2 border border-gray-300 rounded-md w-4/12' placeholder='บาท'/>
        </div>
          </label>

        <div className="label"></div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="px-20 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Create
          </button>
        </div>
      </form>

            </div>
  )
}

export default manageSeatPage