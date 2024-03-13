"use client";

import React, { useEffect } from "react";
import Link from "next/link";

interface TrainTable {
  _id: string;
  tripName: string;
  startPoint: string;
  endPoint: string;
  timeLeave: string;
  day: string;
}

const DeletePage = () => {
  useEffect(() => {
    fetchTrains();
  }, []);

  async function fetchTrains() {
    try {
      const res = await fetch("http://localhost:3000/api/traintable");
      const posts: TrainTable[] = await res.json();
      renderTable(posts);
    } catch (error) {
      console.error("Error fetching trains:", error);
      // Handle error, show a message, etc.
    }
  }

  function renderTable(trains: TrainTable[]) {
    const tableBody = document.getElementById("trains-table-body");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    trains.forEach((train, index) => {
      const row = document.createElement("tr");

      const indexCell = document.createElement("th");
      indexCell.textContent = (index + 1).toString();
      row.appendChild(indexCell);

      const nameCell = document.createElement("td");
      nameCell.textContent = train.tripName;
      row.appendChild(nameCell);

      const startCell = document.createElement("td");
      startCell.textContent = train.startPoint;
      row.appendChild(startCell);

      const endCell = document.createElement("td");
      endCell.textContent = train.endPoint;
      row.appendChild(endCell);

      const deleteButtonCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "btn btn-error";
      deleteButton.onclick = () => {
        deleteTrain(train._id);
        document.getElementById("delete_modal").showModal();
      };
      deleteButtonCell.appendChild(deleteButton);
      row.appendChild(deleteButtonCell);

      tableBody.appendChild(row);
    });
  }

  async function deleteTrain(trainId: string) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/traintable/` + trainId,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete room");
      }

      fetchTrains();
    } catch (error) {
      console.error("Error deleting room:", error);
      // Handle error, show a message, etc.
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Trip Name</th>
              <th>Time Leave</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody id="trains-table-body"></tbody>
        </table>
      </div>
      <dialog id="delete_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Successfully deleted!!!</h3>
          <p className="py-4">This room has been deleted.</p>
          <div className="modal-action">
            <button className="btn" onClick={() => window.location.reload()}>
              Close
            </button>
          </div>
        </div>
      </dialog>
      <div className="label"></div>
      <Link href={"/admin"}>
        <button className="btn btn-warning">Back to console</button>
      </Link>
    </div>
  );
};

export default DeletePage;
