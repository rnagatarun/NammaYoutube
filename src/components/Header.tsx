import { useDispatch } from "react-redux";
import HamBurgerIcon from "../assets/HamBurgerIcon.png";
import YoutubeIconWithText from "../assets/YoutubeIconWithText.png";
import userIcon from "../assets/userIcon.png";
import { toggleMenu } from "../store/appSlice";
import { useYoutubeSearchApi } from "../hooks/useYoutubeSearchApi";

const Header = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleMenu());
  };
  const { searchQuery, setSearchQuery } = useYoutubeSearchApi();
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          src={HamBurgerIcon}
          alt="menu"
          onClick={() => toggleHandler()}
        />
        <img className="h-8 ml-2" src={YoutubeIconWithText} alt="Youtube" />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="border border-gray-400 w-1/2 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full px-5    bg-gray-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" src={userIcon} alt="User" />
      </div>
    </div>
  );
};

export default Header;
