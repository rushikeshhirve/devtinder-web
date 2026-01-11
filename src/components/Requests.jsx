import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addRequest, removeSingleRequest } from "../utils/requestSlice"
import { useEffect } from "react"
import { ImCancelCircle } from "react-icons/im";
import { HiCheckCircle } from "react-icons/hi";



const Request = () => {
    const dispatch = useDispatch()
    const requests = useSelector((store) => store.request);
    const getRequestConnections = async () => {
        try {
            const resp = await axios.get(BASE_URL + "/user/requests/received", { withCredentials: true });
            dispatch(addRequest(resp.data.data));
        } catch (error) {
            console.error("[getRequestConnections] fetch error: ", error)
        }
    }

    const handleReviewRequest = async ( status, requestId) => {
        try {
            const resp = await axios.post(BASE_URL + `/request/review/${status}/${requestId}`, {}, { withCredentials: true });
            dispatch(removeSingleRequest(requestId));
        } catch (error) {
            console.error("[handleReviewRequest] Request review error: ", error)
        }
    }

    useEffect(() => {
        getRequestConnections();
    }, [])

    if (requests && requests.length === 0) {
        return <label className="text-center">
            <h1 className="text-3xl font-bold my-10">People who wants to connect with you</h1>
            <h1 className="text-1xl font-bold my-10">No Requests</h1>
        </label>
    }

    return (
        <div className="flex flex-col items-center">
            <label>
                <h1 className="text-3xl font-bold my-10">People who wants to connect with you</h1>
            </label>
            <ul className="list bg-base-100 rounded-box shadow-md w-200 space-y-2">
                {requests && requests.map((list) => {
                    const { firstName, lastName, about, photoUrl, gender, age } = list.fromUserId
                    return (
                        <li key={list._id} className="list-row bg-base-300 items-center">
                            <div><img className="size-15 rounded-box" src={photoUrl} /></div>
                            <div>
                                <div>{firstName + " " + lastName}</div>
                                {gender && age && <div>{gender + " " + age}</div>}
                                <div className="text-xs font-semibold opacity-60 line-clamp-1">{about}</div>
                            </div>
                            <button 
                                className="text-green-400 text-4xl rotate-5 cursor-pointer hover:text-green-600 hover:text-5xl transition" 
                                title="Accept"
                                onClick={() => handleReviewRequest("accepted", list._id)}
                            >
                                <HiCheckCircle />
                            </button>
                            <button className="text-red-400 text-3xl cursor-pointer hover:text-red-600 hover:text-4xl transition" 
                                title="Reject"
                                onClick={() => handleReviewRequest("rejected", list._id)}
                            >
                                <ImCancelCircle />
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Request

