import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BsYoutube } from "react-icons/bs";
import { PiMicrophone } from "react-icons/pi";
import { BiVideoPlus } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { changeSearchTerm, clearVideos } from "../features/youtube/youtubeSlice";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  const handleSearch = () => {
    if(location.pathname !== "/search") {
      navigate("/search");
    }
    else{
      dispatch(clearVideos);
      dispatch(getSearchPageVideos(false));
    }
  
  };

  return (
    <div className="flex justify-between px-8 h-14 items-center bg-[#212121] opacity-95 sticky">
      <div className="flex gap-8 items-center text-2xl  px-3">
        <div className="hover:rounded-full hover:bg-zinc-700 h-10 w-10 items-center justify-center px-2 py-2 hover:cursor-pointer ">
          <RxHamburgerMenu />
        </div>
        <div className="flex gap-1 items-center justify-center px-6 "onClick={() => navigate("/")}>
          <div className="text-red-600">
            <BsYoutube className="text-3xl" />
          </div>
          <span className="text-2xl font-sans-serif cursor-pointer">
            Youtube
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 ">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        >
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-2xl hover:shadow-[0_0_8px_3px_rgba(59,130,246,0.6)]">
            <div className="flex gap-5 item center pr-5 ">
              <input
                type="text"
                placeholder="Search"
                className="w-96 bg-zinc-900 focus:outline-none border-none "
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-2xl hover:bg-zinc-700 hover:rounded-r-2xl">
              <CiSearch className=" text-xl " />
            </button>
            </div>
        </form>
        <div className=" rounded-full bg-zinc-900 h-10 w-10 items-center justify-center flex cursor-pointer hover:bg-zinc-600 hover:rounded-full">
          <PiMicrophone className=" text-xl " />
        </div>
      </div>
      <div className="flex gap-6 items-center text-2xl justify-between">
        <div className="cursor-pointer hover:rounded-full hover:bg-zinc-700 px-2 py-2 hover:cursor-pointer ">
          <BiVideoPlus />
        </div>

        <div className="relative hover:rounded-full hover:bg-zinc-700 px-2 py-2 hover:cursor-pointer mr-2">
          <FaRegBell />
          <span className="absolute bottom-5 left-5 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <img
          src="Screenshot 2023-04-08 105708.jpg"
          alt="Profile photo"
          className=" rounded-full w-9 h-9 cursor-pointer "
        />
      </div>
    </div>
  );
}

export default Navbar;
