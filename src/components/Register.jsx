import { auth, provider } from "../firebase-config"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const Login = ({ setIsAuth }) => {

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true)
      navigate('/')
    })
  }

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
      
      <div className="text-lg bg-indigo-950 p-10 rounded-lg shadow-lg text-white text-center">
        <label htmlFor="fname">Username: </label>
        <input type="text" id="fname" name="fname" />
        <br></br> <br></br>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <br></br> <br></br>
        <label htmlFor="email">Password: </label>
        <input type="password" id="password" name="password" />
        <br></br> <br></br>

        <button
              type="submit"
              className="w-full bg-purple-700 text-white py-3 rounded-lg font-bold hover:bg-purple-500 transition duration-300"
            >
              Login
            </button>
      </div>
      

      <div className="text-center pb-10">
        <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
      </motion.div>
    </div>
  )
}

export default Login