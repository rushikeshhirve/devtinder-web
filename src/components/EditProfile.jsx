import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import ToastMsg from "./UI/ToastMsg"

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const dispatch = useDispatch()

  const handleEditProfile = async () => {
    try {
      setError(null);
      const response = await axios.patch(BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          photoUrl,
          about
        },
        { withCredentials: true }
      )
      dispatch(addUser(response.data.data));
      setShowSuccess(true);
      setInterval(() => {
        setShowSuccess(false)
      }, 3000);

    } catch (error) {
      console.error("[handleEditProfile] Error: ", error);
      setError(error.response.data.message);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="card bg-base-300 w-96 shadow-sm mx-20">
        <div className="card-body items-center text-center">
          <h2 className="card-title">User Profile</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="fieldset-legend w-full text-left">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                maxLength={20}
                className="input input-bordered w-full"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label className="fieldset-legend w-full text-left">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                maxLength={20}
                className="input input-bordered w-full"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
            <div>
              <label className="fieldset-legend w-full text-left">Age</label>
              <input
                type="number"
                placeholder="Age"
                value={age}
                min={18}
                max={120}
                className="input input-bordered w-full"
                onChange={(e) => setAge(e.target.value)}
              />
              {age && (Number(age) < 18 || Number(age) > 120) && (
                <p className="text-red-500 text-xs mt-1">
                  Age must be between 18 and 120
                </p>
              )}
            </div>
            <div>
              <label className="fieldset-legend w-full text-left">Gender</label>
              <select
                defaultValue={gender}
                className="select"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <label className="fieldset-legend w-full text-left">Photo URL</label>
          <input
            type="text"
            placeholder="Photo URL"
            value={photoUrl}
            className="input input-bordered w-full"
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
          <label className="fieldset-legend w-full text-left">About</label>

          <textarea
            className="textarea w-full resize-y max-h-40"
            placeholder="Enter about yourself"
            value={about}
            maxLength={250}
            onChange={(e) => setAbout(e.target.value)}
          >
          </textarea>

          <p className='text-red-500 my-0'>{error}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleEditProfile}>Save Profile</button>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, age, gender, photoUrl, about }} />
      {showSuccess && <ToastMsg alertType="success" message="User Profile is updated"/>}
    </div>

  )
}

export default EditProfile;