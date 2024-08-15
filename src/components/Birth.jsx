import { useEffect, useState } from "react";
import { db, auth } from "../firebase-config";
import { Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";

const Birth = () => {

  const [motherName, setMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [childName, setChildName] = useState("");
  const [childWeight, setChildWeight] = useState("");
  const [fundalHeight, setFundalHeight] = useState("");
  const [address, setAddress] = useState("");

  let navigate = useNavigate()

  const birthCollectionRef = collection(db, "birth")
  const registerBirth = async () => {
    await addDoc(birthCollectionRef, {
      motherName,
      fatherName,
      childName,
      childWeight,
      fundalHeight,
      address,
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid }
    })
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 75 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="bg-indigo-950 p-10 rounded-lg shadow-lg w-[600px]">
          <h2 className="text-3xl font-semibold text-purple-500 mb-6 text-center">
            Register Your Baby
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Mother's Name</label>
              <input
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                id="motherName"
                name="motherName"
                required

                onChange={(e) => {
                  setMotherName(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Father's Name</label>
              <input
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                id="fatherName"
                name="fatherName"
                required

                onChange={(e) => {
                  setFatherName(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Child's Name</label>
              <input
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                id="childName"
                name="childName"
                required

                onChange={(e) => {
                  setChildName(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Child's Weight (kg)</label>
              <input
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="number"
                id="childWeight"
                name="childWeight"
                required

                onChange={(e) => {
                  setChildWeight(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Fundal Height (cm)</label>
              <input
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="number"
                id="fundalHeight"
                name="fundalHeight"
                required

                onChange={(e) => {
                  setFundalHeight(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Address</label>
              <input
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                id="address"
                name="address"
                required

                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-lg font-bold hover:bg-purple-500 transition duration-300"
              onClick={registerBirth}
            >
              Register
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Birth;
