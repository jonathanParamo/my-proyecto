import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import "./styles.css"

const LogOut = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  useEffect(() => {
    if(!token) navigate("/")
  }, [])

  return (
    <p onClick={e =>{
      localStorage.removeItem("token")
      navigate("/signin")
    }}
    className="logOut">
      Log out
    </p>
  )
}

export default LogOut