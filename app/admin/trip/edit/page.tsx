"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import React from "react";

interface TrainTable {
  _id: string;
  tripName: string;
  startPoint: string;
  endPoint: string;
  timeLeave: string;
  day: string;
}

const EditPage = async () => {
  const res = await fetch("http://localhost:3000/api/traintable", {
    next: { revalidate: 10 },
  });
  const posts: TrainTable[] = await res.json();
  
  return (
    <div className="flex flex-col items-center">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Trip Name</th>
              <th>Start Point</th>
              <th>End Point</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item, i) => {
              return (
                <tr>
                  <th>{i + 1}</th>
                  <td>{item.tripName}</td>
                  <td>{item.startPoint}</td>
                  <td>{item.endPoint}</td>
                  <td>
                    <Link key={item._id} href={`/admin/trip/edit/${item._id}`}>
                      <button
                        className="btn btn-info"
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="label"></div>
      <Link href={"/admin"}>
        <button className="btn btn-warning">Back to console</button>
      </Link>
    </div>
  );
};

export default EditPage;
