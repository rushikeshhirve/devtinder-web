const UserCard = (prop) => {
  const { firstName, lastName, age, gender, about, photoUrl} = prop.user;
  return (
    <div className="card bg-base-300 w-60 shadow-lg">
      <figure>
        <img
          src={photoUrl}
          alt="Profile Photo"
          className="w-full h-60 object-cover rounded-t-lg" 
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <h3>Age: {age || "Not mentioned"}</h3>
        <h3>Gender: {gender}</h3>
        <p className="line-clamp-3 wrap-break-word">{about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Ignor</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  )
}

export default UserCard