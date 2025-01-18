import React from "react";
import { SlHome } from "react-icons/sl";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { LiaThumbsUp } from "react-icons/lia";
import { MdKeyboardArrowRight } from "react-icons/md";

function Sidebar({ isOpen }) {
  const mainLinks = [
    {
      icon: <SlHome className="text-xl" />,
      name: "Home",
    },
    {
      icon: <SiYoutubeshorts className="text-xl" />,
      name: "Shorts",
    },
    {
      icon: <MdOutlineSubscriptions className="text-xl" />,
      name: "Subscriptions",
    },
  ];

  const clientLinks = [
    {
      icon: <FaHistory className="text-xl" />,
      name: "History",
    },
    {
      icon: <MdOutlinePlaylistPlay className="text-xl" />,
      name: "Playlists",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch later",
    },
    {
      icon: <LiaThumbsUp className="text-xl" />,
      name: "Liked videos",
    },
  ];

  return (
    <div className="w-[16%] bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen">
      <ul className="flex flex-col border-b-2 border-[#2c2c2c] ">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-600 hover:rounded-2xl ${
                name === "Home" ? "bg-zinc-600 rounded-2xl" : ""
              }`}
            >
              <a href="#" className="flex item-center gap-5 ">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-1 text-lg text-white font-normal px-4 py-2 hover:bg-zinc-600 hover:rounded-2xl cursor-pointer">
        <span className="">You</span>
        <MdKeyboardArrowRight className="text-lg" />
      </div>
      <ul className="flex flex-col border-b-1 border-gray-800">
        {clientLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`pl-6 py-3 hover:bg-zinc-600 hover:rounded-2xl ${
                name === "Home" ? "bg-slate-600 rounded-2xl" : ""
              }`}
            >
              <a href="#" className="flex item-center gap-5 ">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
