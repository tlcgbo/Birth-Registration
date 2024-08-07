import { useEffect, useState } from "react";
import { db, auth } from "../firebase-config";
import { Navigate, useNavigate } from "react-router-dom";

const Birth = ({isAuth}) => {

  

  return (
    <div className=" min-h-screen flex items-center justify-center">
      
      <div className="bg-indigo-950 p-8 rounded-lg shadow-lg w-1/3 ">
        <h2 className="text-3xl font-semibold text-purple-500 mb-6 text-center">Register Your Baby</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" >Mother's Name</label>
            <input
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              id="motherName"
              name="motherName"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" >Father's Name</label>
            <input
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              id="fatherName"
              name="fatherName"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" >Child's Name</label>
            <input
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              id="childName"
              name="childName"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" >Child's Weight (kg)</label>
            <input
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="number"
              id="childWeight"
              name="childWeight"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" >Address</label>
            <input
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              id="address"
              name="address"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-lg font-bold hover:bg-purple-500 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Birth;
