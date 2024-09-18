import { auth, provider } from "../firebase-config"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import GoogleBtn from "./GoogleBtn"
import { signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"
import { useState } from "react"
import { Link } from "react-router-dom"

const initialState = {
  email: '',
  password: '',
}


const Login = ({ setIsAuth }) => {

  const [formData, setFormData] = useState(initialState);

  const {email, password} = formData;

  let navigate = useNavigate();

  const validateForm = () => {
    if(!email || !password){
      toast.error("Please, fill in all input fields")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    validateForm();
    try{
      if(email && password) {
        const {user} = await signInWithEmailAndPassword(
          auth, email, password
        );
        localStorage.setItem('isAuth', true);
        toast.success('log in successfully');
        setIsAuth(true);
        navigate("/");
      }
    } catch (error) {
      toast.error('invalid credentials');
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
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
      
      <p className="text-4xl p-10 text-center font-semibold text-purple-500">Welcome Back</p>  
      
      <div className="text-lg bg-indigo-950 p-10 rounded-lg shadow-lg  text-center">
        <form onSubmit={handleSubmit} className="text-black">

        <label className="text-white">Email: </label>

        <input 
        className="rounded-lg p-1" 
        placeholder="Email"
        type="email" 
        name="email"
        value={email}
        onChange={handleChange}
        />

        <br></br> <br></br>
        <label className="text-white">Password: </label>

        <input 
        className="rounded-lg p-1" 
        placeholder="password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
         />

        <br></br> <br></br>

        <button
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-lg font-bold hover:bg-purple-500 transition duration-300"
            >
              Login
            </button>
        </form>
       
      </div>
      
      <GoogleBtn setIsAuth={setIsAuth} />

      <p className='my-4'>Don't have an account? <Link className='text-purple-800 underline' to={'/register'}>sign up</Link></p>
     


      </motion.div>
    </div>
  )
}

export default Login