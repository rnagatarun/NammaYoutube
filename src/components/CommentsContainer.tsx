import { commentsData } from "../utils/commentsData";

import userIcon from "../assets/userIcon.png"; // Adjust the path as needed

interface CommentData {
  name: string;
  text: string;
  replies?: CommentData[];
}

const Comment = ({ data }: { data: CommentData }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-lg p-2 my-2">
      <img className="w-12 h-12" src={userIcon} alt="User" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }: { comments: CommentData[] }) => {
  return (
    <>
      {comments.map((comment: CommentData, idx: number) => (
        <div>
          <Comment key={idx} data={comment} />
          <div className="pl-5 border-l ml-5">
            <CommentsList comments={comment.replies || []} />
          </div>
        </div>
      ))}
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
