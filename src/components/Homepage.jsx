import React, {useEffect, useState} from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { motion } from 'framer-motion';

const Homepage = ({ isAuth }) => {

  const [birthLists, setBirthList] = useState([])

  const birthCollectionRef = collection(db, "birth")

  useEffect(() => {
    const getBirths = async () => {
      const data = await getDocs(birthCollectionRef)
      setBirthList(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }
    getBirths();
  },[])

  const deleteBirth  = async (id) => {
    const birthDoc = doc(db, "birth", id)
    await deleteDoc(birthDoc)
  }

  return (
    <div className='min-h-screen text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap justify-center pt-16 md:pt-24 lg:pt-32'>
          <div className='w-full lg:w-2/3'>

          <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
            >
            <div className='p-10'>
              <h1 className='text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight'>
                Birth <span className='text-purple-500'>Registration</span>
              </h1>
              <p className='mt-6 text-black text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed'>
                Welcome to Birth Registration. Here you can register your baby within 42 days of
                birth in England, Wales, Northern Ireland and 24 days in Scotland. You must register your baby before you can get a birth certificate. It is best to register the birth at the register office in the district where the baby was born. A birth certificate is a vital record that documents the birth of a person.
              </p>
            </div>


            <div className='w-[100%]  min-h-[calc(100vh - 80px)] h-auto flex flex-col items-center py-[120px]'>
              {birthLists.map((birth) => {
                return(
                  <div key={birth.id} className='w-[65vw] h-[auto] max-h-[600px] shadow-2xl  m-[20px] p-[20px] bg-purple-900 text-white'>


                  <div className=''>
                    {isAuth && birth.author.id === auth.currentUser.uid && <button onClick={() => {deleteBirth(birth.id)} }> &#128465; </button>}
                  </div>
              
                    <div className='h-[60%] max-h-[400px] w-[100%] overflow-hidden overflow-y-auto scroll-smooth'>
                      
                      <h1>Mother's Full Name: {birth.motherFullName} </h1>
                      <h1 className=''>Father's Full Name: {birth.fatherFullName} </h1>
                      <h1>Child's Full Name: {birth.childFullName}</h1>
                      <h1 className=''>Child's Weight(kg): {birth.childWeight}</h1>
                      <h1>Place Of Birth: {birth.placeBirth}</h1>
                      <h1>Address: {birth.address}</h1>
                      <h1>Gender: {birth.gender}</h1>

                      <h3>@{birth.author?.name}</h3>
                    </div>
              </div>
                );
              })}
              
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
