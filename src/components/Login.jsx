import { useState } from 'react';
import axios from 'axios';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

  const [email, setEmail] = useState("rushi@gmail.com");
  const [password, setPassword] = useState("rushi@Dev123");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const loginHandler = async () => {
    try {
      const loginResponse = await axios.post(
        BASE_URL + "/login",
        {
          emailId: email,
          password
        },
        { withCredentials: true }
      );

      console.info("User login is successfull")
      dispatch(addUser(loginResponse.data.data))
      setLoginError(null)
      return navigate("/")
    } catch (error) {
      console.error("[loginHandler] Login failed", error);
      setLoginError(error.response.data.message || "Something went wrong!")
    }

  }

  return (
    <div className="flex justify-center mt-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title">User Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={email}
            className="input input-bordered w-full max-w-xs mb-4"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative w-full max-w-xs mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              className="input input-bordered w-full pr-10"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <p className='text-red-500 my-0'>{loginError}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={loginHandler}>Click to login</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login