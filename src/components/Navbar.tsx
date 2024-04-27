import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeSearchTerm, clearSearchTerm, clearVideos } from "../store";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import { Button } from "./Button";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Navbar() {
    const [showFullWidth, setShowFullWidth] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  return (
    <div className="flex justify-between items-center  px-5 h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
      <div className={`gap-5 items-center text-2xl ${showFullWidth? "hidden" : "flex h-8 md:h-7"} `}>
        <Button variant="dark" size="icon">
          <GiHamburgerMenu />
        </Button>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium">YouTube</span>
          </div>
        </Link>
      </div>
      <div className={`items-center flex-grow justify-center gap-2 ${showFullWidth? "flex" : "hidden md:flex "}`}>
        {showFullWidth && (<div onClick={()=>setShowFullWidth(false)} >
        <FaArrowLeft/>
        </div>)}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex bg-zinc-900 items-center h-10 rounded-l-full rounded-r-full max-w-[600] flex-grow justify-center">
            <div className="flex gap-4 items-center h-10 rounded-l-full max-w-[600px] flex-grow justify-center">
              <div className="rounded-l-full flex items-center justify-center w-10">
                <AiOutlineSearch className="text-2xl pl-1" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="bg-zinc-900 outline-none border-black px-4 py-1 w-full focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />

              <AiOutlineClose
                className={`text-xl cursor-pointer ${
                  !searchTerm ? "invisible" : "visible"
                }`}
                onClick={() => dispatch(clearSearchTerm())}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-full">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <TiMicrophone />
        </div>
      </div>
      <div className={`flex gap-5 items-center text-xl ${showFullWidth? "hidden" : "flex"}`}>
        <AiOutlineSearch className="md:hidden flex" onClick={()=>setShowFullWidth(true)}/>
        <TiMicrophone className="md:hidden flex"/>
        <BsCameraVideo className="hidden md:flex"/>
        <div className="relative">
          <BsBell className="hidden md:flex"/>
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <div className="w-7 h-7 bg-white rounded-full"></div>
      </div>
    </div>
  );
}