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
      <p className="text-2xl  text-black">Sign in with Google</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
      </motion.div>
    </div>
  )
}

export default Login