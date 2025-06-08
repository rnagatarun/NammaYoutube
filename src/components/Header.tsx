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
  const { searchQuery, setSearchQuery, searchSuggestions, showSuggestions, setShowSuggestions } =
    useYoutubeSearchApi();
  return (
    <div className="grid grid-flow-col p-4 shadow-lg fixed top-0 left-0 right-0 bg-white z-10">
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
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full px-5 bg-gray-200">
          🔍
        </button>
        {showSuggestions && (
          <div className="fixed bg-white px-2 py-2 w-[36rem] shadow-lg rounded-lg border border-gray-200">
            <ul>
              {searchSuggestions.map((s) => (
                <li key={s} className="px-3 py-1 hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-8" src={userIcon} alt="User" />
      </div>
    </div>
  );
};

export default Header;
