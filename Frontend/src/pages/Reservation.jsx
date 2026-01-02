import React, { useState } from "react";
import bg2 from "../assets/img/bg2.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState("");
  const [players, setPlayers] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleConfirm = () => {
    if (!selectedDate || !time || !players || !paymentMethod) {
      alert("Please complete all fields before confirming");
      return;
    }
    alert(
      `The field has been booked on ${selectedDate.toLocaleDateString()} at ${time} for ${players} player(s). Payment method: ${paymentMethod}`
    );
  };

  const paymentOptions = [
    "Syrtel Cash",
    "MTN Cash",
    "Sham Cash",
    "Manual Payment",
  ];

  return (
    <div
      className="w-full min-h-screen flex justify-center pl-[10%] items-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease forwards; }
        .animate-slideIn { animation: slideIn 0.8s ease forwards; }
        input:focus, select:focus {
          outline: none;
          box-shadow: 0 0 8px rgba(255, 165, 0, 0.8);
          border-color: orange;
          transition: 0.3s;
        }
      `}</style>

      <div className="flex w-full max-w-5xl ml-[15%] rounded-lg shadow-lg p-8 animate-fadeIn">
        <div className="w-1/2 pr-4 pt-[12%] animate-slideIn scale-[1.1]">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
            inline
          />
        </div>

        <div className="w-1/2 pl-4 flex flex-col justify-between">
          <div className="mb-6">
            <label className="block mb-3 font-semibold text-black text-lg">
              Select Time:
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-4 border border-gray-400 rounded text-lg mb-6"
            />

            <label className="block mb-3 font-semibold text-black text-lg">
              Number of Players:
            </label>
            <input
              type="number"
              value={players}
              onChange={(e) => setPlayers(e.target.value)}
              min={1}
              className="w-full p-4 border border-gray-400 rounded text-lg mb-6"
              placeholder="Enter number of players"
            />

            <label className="block mb-3 font-semibold text-black text-lg">
              Payment Method:
            </label>
            <div className="flex flex-wrap gap-3 mb-6">
              {paymentOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setPaymentMethod(option)}
                  className={`px-4 py-3 rounded-lg border transition ${
                    paymentMethod === option
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-white text-black border-gray-400 hover:bg-orange-100"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleConfirm}
            className="w-full bg-orange-500 text-white font-bold py-4 px-6 rounded-lg hover:bg-orange-600 hover:scale-105 transition transform text-lg"
          >
            Confirm Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
