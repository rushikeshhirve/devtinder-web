import { io } from "socket.io-client"
import { BASE_URL } from "./constants"

export const createSocketConnection = () => {
    if (window.location.hostname === 'localhost') {
        return io(BASE_URL, { withCredentials: true });
    } else {
        return io("/", { withCredentials: true, path: "/api/socket-io"})
    }
}