import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import "../index.css";

const MainContainer = () => {
  return (
    <div className="flex flex-col overflow-auto scrollbar-hide">
      <div className="overflow-x-auto">
        <ButtonList />
      </div>
      <div className="m-2 justify-center">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
