import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./styles.css"

const Signup = () => {
  const [userName, setUserName] = useState('')
  const [userSurname, setUserSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [failValidation, setFailValidation] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = () => {
    if(!userName || !userSurname || !email || !password) {
      setFailValidation(true);
      return;
    }
    setFailValidation(false);

    navigate('/signin')
    // try {

    // } catch (error) {
    //   console.log('salió un error');
    // }
  }

  return(
    <div className="cardSignUp">
      <h2>Sing up</h2>
      <div className="userName">
        <label
          htmlFor="userName"
        >
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="userName"
          onChange={e => setUserName(e.target.value)}
          value={userName}
        />
      </div>
      <div className="userSurname">
        <label
          htmlFor="userSurname"
        >
          Surname:
        </label>
        <input
          type="text"
          name="surname"
          id="userSurname"
          onChange={e => setUserSurname(e.target.value)}
          value={userSurname}
        />
      </div>
      <div className="userEmail">
        <label
          htmlFor="email"
        >
          Email:
        </label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="userPassword">
        <label
          htmlFor="userPassword"
        >
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="userPassword"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button
          className='register'
          type="submit"
          onClick={handleSubmit}
        >
          Create Account
      </button>
      <button
        className="register"
        onClick={() => navigate('/signin')}
      >
        Log in
      </button>
      {failValidation && <p className="errorValidation">All fields are required</p>}
    </div>
  )
}

export default Signup