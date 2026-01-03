import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice.js";




const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((store) => store.user);

  const getUserDetails = (async () => {
    if (userDetails) return true;
    try {
      let response = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true
      })

      dispatch(addUser(response.data.data));
    } catch (error) {
      console.error("[getUserDetails] Error While viewing user profile: ", error.status, error);
      if (error.status === 401) {
        navigate("/login")
      }
    }
  })

  useEffect(() => {
    getUserDetails()
  }, [])


  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Body