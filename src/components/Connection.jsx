import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";

const Connection = () => {
    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connection);

    const connection = async () => {
        try {
            if (connections) return true;
            const resp = await axios.get(BASE_URL + "/user/connections", { withCredentials: true });
            dispatch(addConnection(resp.data.data));
        } catch (error) {
            console.error("[connection] fetch error: ", error);
        }
    }

    useEffect(() => {
        connection();
    }, [])

    if (connections && connections.length === 0) {
        return <label>
            <h1 className="text-3xl font-bold my-10">Connections</h1>
             <h1 className="text-1xl font-bold my-10">No Connections</h1>
        </label>
    }

    return (
        <div className="flex flex-col items-center">
            <label>
                <h1 className="text-3xl font-bold my-10">Connections</h1>
            </label>
            <ul className="list bg-base-100 rounded-box shadow-md w-200 space-y-2">
                {connections && connections.map((list) => {
                    return (
                        <li key={list._id} className="list-row bg-base-300">
                            <div><img className="size-15 rounded-box" src={list.photoUrl} /></div>
                            <div>
                                <div>{list.firstName + " " + list.lastName}</div>
                                {list.gender && list.age && <div>{list.gender + " " + list.age}</div>}
                                <div className="text-xs font-semibold opacity-60 line-clamp-1">{list.about}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Connection;