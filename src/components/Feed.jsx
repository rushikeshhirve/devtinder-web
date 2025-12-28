import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  console.log("Feed", feed)

  const getFeed = async () => {
    try {
      if (feed) return true;
      const resp = await axios.get(BASE_URL + "/user/feed",
        { withCredentials: true}
      )
      dispatch(addFeed(resp.data.data))
      console.log(resp)
    } catch (error) {
      console.error("[getFeed] Error while getFeed", error);
    }
  }

  useEffect(() => {
    getFeed();
  }, [])

  return (

    feed && (<div className="flex justify-center my-5">
      <UserCard user={feed[0]}/>
    </div>)
  )
}

export default Feed;