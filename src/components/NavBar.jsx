import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { BASE_URL } from "../utils/constants"
import axios from "axios"
import { removeUser } from "../utils/userSlice"

const Navbar = () => {
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/logout",
        {},
        {
          withCredentials: true
        }
      );
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.error("[logoutHandler] Error while logout", error);
    }
  }

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">🧑‍💻DevTinder</Link>
      </div>
      {user && <div className="flex gap-2">
        <p className="m-1.5">Welcome {user.firstName}</p>
        <div className="dropdown dropdown-end mx-3">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="profile photo"
                src={user.photoUrl} />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><a>Settings</a></li>
            <li>
              <a onClick={logoutHandler}>Logout</a>
            </li>
          </ul>
        </div>
      </div>}
    </div>
  )
}

export default Navbar