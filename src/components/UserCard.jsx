import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeSingleFeed } from "../utils/feedSlice";

const UserCard = (prop) => {
  const dispatch = useDispatch()
  const { firstName, lastName, age, gender, about, photoUrl, _id: userId, skills = [] } = prop.user;

  const handleSendConnections = async (reqStatus) => {
    try {
      const resp = await axios.post(
        BASE_URL + `/request/send/${reqStatus}/${userId}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeSingleFeed(userId))
    } catch (error) {
      console.error("[handleSendConnections] Error while sending connection", error.message);
    }
  }

  return (
    <div className="card w-80 bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

      {/* Image Section */}
      <figure className="relative">
        <img
          src={photoUrl}
          alt="Profile"
          className="h-80 w-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Name on Image */}
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-xl font-bold">
            {firstName} {lastName}
          </h2>
          <p className="text-sm opacity-90">
            {age ? `${age} yrs` : "Age not mentioned"} • {gender ? gender: "Gender not mentioned"}
          </p>
        </div>
      </figure>

      {/* Content */}
      <div className="card-body gap-3">
        {/* Skills Section */}
        {skills.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-base-content/70 mb-1">
              Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 6).map((skill, index) => (
                <span
                  key={index}
                  className="badge badge-outline badge-primary text-xs"
                >
                  {skill}
                </span>
              ))}

              {skills.length > 6 && (
                <span className="badge badge-ghost text-xs">
                  +{skills.length - 6} more
                </span>
              )}
            </div>
          </div>
        )}
        {/* About */}
        <p className="text-sm text-base-content/80 line-clamp-4">
          {about || "This developer prefers to keep an air of mystery 👀"}
        </p>

        {/* Actions */}
        <div className="card-actions justify-between mt-4">
          <button
            className="btn btn-outline btn-error w-[48%]"
            onClick={() => handleSendConnections("ignored")}
          >
            ❌ Ignore
          </button>

          <button
            className="btn btn-primary w-[48%]"
            onClick={() => handleSendConnections("interested")}
          >
            💙 Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard