import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import type { RootState } from "../store/store";
import {
  generateRandomMessage,
  generateRandomName,
} from "../utils/helperFunctions";

const LiveChat = () => {
  const [liveChatMessage, setLiveChatMessage] = useState<string>("");
  const dispatch = useDispatch();
  const liveMessages = useSelector(
    (store: RootState) => store.livechat.messages
  );

  useEffect(() => {
    const data = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1200);
    return () => clearInterval(data);
  }, []);

  return (
    <>
      <div className="w-full h-[430px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {liveMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="w-full h-[70px] p-2 border border-gray-300 bg-white rounded-lg flex items-center gap-2 shadow-sm"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "NagaTarun",
              message: liveChatMessage,
            })
          );
          setLiveChatMessage("");
        }}
      >
        <input
          className="flex-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          type="text"
          value={liveChatMessage}
          onChange={(e) => setLiveChatMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition cursor-pointer">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
