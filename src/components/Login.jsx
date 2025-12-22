import { useState } from 'react';
import axios from 'axios';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {

  const [email, setEmail] = useState("rushi@gmail.com");
  const [password, setPassword] = useState("rushi@Dev123");
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const loginHandler = async () => {
    const loginResponse = await axios.post(
      BASE_URL + "/login", 
      {
        emailId: email,
        password
      },
      { withCredentials: true }
    );

    console.info("User login is successfull")
    dispatch(addUser(loginResponse.data))
    return navigate("/")
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
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="input input-bordered w-full max-w-xs mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="card-actions">
            <button className="btn btn-primary" onClick={loginHandler}>Click to login</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login