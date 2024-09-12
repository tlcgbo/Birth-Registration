import { auth, provider } from "../firebase-config"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import GoogleBtn from "./GoogleBtn"
import { useState } from "react"
import { toast } from "react-toastify"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = ({ setIsAuth }) => {

  const [formData, setFormData] = useState(initialState);

  const {username, email, password, confirmPassword} = formData;

  let navigate = useNavigate();

  const validateForm = () => {

    if(!username || !email || !password || !confirmPassword){
      toast.error("Please, fill in all input fields")
    }
   
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(validateForm()){
      try {
        if(username && email && password) {
          const {user} = await createUserWithEmailAndPassword(
            auth, email, password
          );
          await updateProfile(user, {displayName: `${username}`})
          toast.success('signup successfully');
          localStorage.setItem('isAuth', true);
          setIsAuth(true);
          navigate("/");
        }
      } catch (error) {
        toast.error('user already exists');
        console.log(error);

      }
    }
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value.trim()});
  };

  return (
    <div className="loginPage">

    <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
            >
      
      <p className="text-4xl p-10 text-center font-semibold text-purple-500">Make an Account</p>  
      
      <div className="text-lg bg-indigo-950 p-10 rounded-lg shadow-lg  text-center">
        <form  onSubmit={handleSubmit} className=" text-black">
          <label className="text-white">Username: </label>
          
          <input 
          className="rounded-lg p-1 text" 
          placeholder="Enter username"
          type="text" 
          name="username"
          value={username}
          onChange={handleChange}
          />

          <br></br> <br></br>
          <label className="text-white"> Email: </label>

          <input 
          className="rounded-lg p-1" 
          placeholder="Enter email"
          type="email" 
          name="email"
          value={email}
          onChange={handleChange}
          />
         

          <br></br> <br></br>
          <label className="text-white">Password: </label>
          
          <input 
          className="rounded-lg p-1"
          placeholder="Enter password"
          type="password"
          name="password" 
          value={password}
          onChange={handleChange}
          />

          <br></br> <br></br>
          <label className="text-white">Confirm Password: </label>
          
          <input 
          className="rounded-lg p-1" 
          placeholder="Confirm password"
          type="password" 
          name="confirmPassword" 
          value={confirmPassword}
          onChange={handleChange}
          />

          <br></br> <br></br>

          <button
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-lg font-bold hover:bg-purple-500 transition duration-300"
            >
              Register
          </button>
        </form>
        

       
      </div>
      
      <GoogleBtn setIsAuth={setIsAuth} />

    
      </motion.div>
    </div>
  )
}

export default Register