 
import userIcon from '../assets/userIcon.png';

type ChatMessageProps = {
  name: string;
  message: string;
};

const ChatMessage = ({ name, message }: ChatMessageProps) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img className="w-12 h-12" src={userIcon} alt="User" />
      <span className='font-bold px-2 '>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
