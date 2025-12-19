import React from "react";
import {
  MdDashboard,
  MdTaskAlt,
  MdOutlinePendingActions,
  MdOutlineTask,
  MdSettings,
  MdOutlineAddTask,
} from "react-icons/md";
import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { SetOpenSidebar } from "../redux/Slices/authSlice";
import clsx from "clsx";
const linkData = [
  {
    label: "Dashboard",
    link: "dashboard",
    icon: <MdDashboard />,
  },
  {
    label: "Tasks",
    link: "tasks",
    icon: <FaTasks />,
  },
  {
    label: "Completed",
    link: "completed/completed",
    icon: <MdTaskAlt />,
  },
  {
    label: "in progress",
    link: "in-progress/in-progress",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "To do",
    link: "todo/todo",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "Team",
    link: "team",
    icon: <FaUsers />,
  },
  {
    label: "Trash",
    link: "trashed",
    icon: <FaTrashAlt />,
  },
];
const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const sideBarLink = user?.isAdmin ? linkData : linkData.slice(0, 6);
  const closerSidebar = () => {
    dispatch(SetOpenSidebar(false));
  };

  const NavLinks = ({ element }) => {
    return (
      <Link
        to={element.link}
        onClick={closerSidebar}
        className={clsx(
          "w-full lg:w-full flex gap-3 px-5 py-2 rounded-full items-center text-gray-800 text-base hover:bg-[#2564ed2d]",
          path == element.link.split("/")[0] ? "bg-blue-700 text-white" : ""
        )}
      >
        {element.icon}
        <span className="hover:text-[#2564ed]">{element.label}</span>
      </Link>
    );
  };

  return (
    <div className="w-full h-full flex flex-col gap-6 p-5">
      <h1 className="flex gap-1 items-center  ">
        <p className="bg-blue-600 rounded-full p-1">
          <MdOutlineAddTask className="text-white text-2xl font-black" />
        </p>
        <span className="text-2xl font-bold text-black">TaskMe</span>
      </h1>
      <div className="flex-1 flex  flex-col gap-y-5 py-8">
        {linkData.map((link) => (
          <NavLinks element={link} key={link.label} />
        ))}
      </div>
      <div className="">
        <button className="w-full flex gap-2 p-2 items-center text-lg text-gray-800 cursor-pointer">
          <MdSettings />
          <span> Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
