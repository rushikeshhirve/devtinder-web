import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";


const Chat = () => {
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("");
    const { targetUserId } = useParams();
    const user = useSelector((store) => store.user);
    const userId = user?._id;

    const getExistingMessages = async () => {
        try {
            const OldMessages = await axios.get(BASE_URL + `/chat/${targetUserId}`, { withCredentials: true});
            setMessages(OldMessages.data.data || [])
        } catch (error) {
            console.error("[getExistingMessages] fetch error: ", error);
        }
    }

    useEffect(() => {
        getExistingMessages();
    }, []);

    useEffect(() => {
        if (!userId) return;

        // As soon as component loads, the socket connection is made and "joinChat" event is emitted
        console.log("Emitting event")
        const socket = createSocketConnection();
        socket.emit("joinChat", { firstName: user?.firstName, targetUserId })

        socket.on("receivedMessage", ({ firstName, lastName, text, userId }) => {
            console.log(firstName + " " + text)
            setMessages((messages) => [...messages, { firstName, lastName, text, userId }])
        })

        return (() => {
            socket.disconnect();
        })
    }, [userId, targetUserId]);

    const handleSubmit = () => {
        const socket = createSocketConnection();
        socket.emit(
            "sendMessage",
            {
                firstName: user?.firstName,
                lastName: user?.lastName,
                targetUserId,
                text: newMessage
            }
        );
        setNewMessage("");
    }

    return (
        <div className="flex items-center justify-center p-4">
            <div className="flex flex-col border w-full max-w-3xl h-[60vh] min-h-[400px]">
                <div className="border-b p-3 text-2xl font-medium">
                    Conversation
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((obj, index) => (
                        <div className={`chat  ${user._id === obj.userId ? "chat-end" : "chat-start"}`} key={index}>
                            <div className="chat-header text-xs">
                                {obj.firstName + " " + obj.lastName} <time className="opacity-50">2h ago</time>
                            </div>
                            <div className="chat-bubble text-sm">{obj.text}</div>
                        </div>
                    ))}

                </div>

                <div className="border-t p-2 flex gap-2">
                    <input
                        type="text"
                        className="flex-1 border p-2 text-sm outline-none"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button className="btn btn-soft btn-secondary" onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;