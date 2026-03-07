import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    try {
      if (feed) return true;
      const resp = await axios.get(BASE_URL + "/user/feed",
        { withCredentials: true }
      )
      dispatch(addFeed(resp.data.data))
    } catch (error) {
      console.error("[getFeed] Error while getFeed", error);
    }
  }

  useEffect(() => {
    getFeed();
  }, [])

  if (feed && feed.length === 0) {
    return (
      <h1 className="text-3xl text-center m-10"> No more friends found! Please come again after some time</h1>
    )
  }

  return (
    feed && (
      <div className="flex justify-center items-center min-h-[80vh]">
        <UserCard user={feed[0]} />
      </div>
    )
  );

}

export default Feed;