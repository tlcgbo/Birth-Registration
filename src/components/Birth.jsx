import { useEffect, useState } from "react";
import { db, auth } from "../firebase-config";
import { Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";

const Birth = () => {

  const [motherFullName, setMotherFullName] = useState("");
  const [fatherFullName, setFatherFullName] = useState("");
  const [childFullName, setChildFullName] = useState("");
  const [childWeight, setChildWeight] = useState("");
  const [placeBirth, setPlaceBirth] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  let navigate = useNavigate()

  const birthCollectionRef = collection(db, "birth")
  const registerBirth = async (e) => {
    e.preventDefault();
    await addDoc(birthCollectionRef, {
      motherFullName,
      fatherFullName,
      childFullName,
      childWeight,
      placeBirth,
      address,
      gender,
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
          <form onSubmit={registerBirth}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Mother's Full Name</label>
              <input
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                id="motherFullName"
                name="motherFullName"
                required

                onChange={(e) => {
                  setMotherFullName(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Father's Full Name</label>
              <input
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                id="fatherFullName"
                name="fatherFullName"
                required

                onChange={(e) => {
                  setFatherFullName(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Child's Full Name</label>
              <input
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                id="childFullName"
                name="childFullName"
                required

                onChange={(e) => {
                  setChildFullName(e.target.value);
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
              <label className="block text-gray-300 mb-2">Place of Birth</label>
              <input
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                id="placeBirth"
                name="placeBirth"
                required

                onChange={(e) => {
                  setPlaceBirth(e.target.value);
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

            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Gender</label>
              <select className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                 name="gender"
                  id="gender"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  >

                <option value="">-Select Gender-</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
        
                
              </select>

               
             
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-lg font-bold hover:bg-purple-500 transition duration-300"
            
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
