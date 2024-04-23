import React from "react";
import { ArrowBack, MoreHoriz, ToggleOff, ToggleOn } from "@mui/icons-material";
import { useNavigate, Avatar } from "zmp-ui";

const FamilyAccess = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full">
      <div className="h-1/3 bg-[#0A182E]">
        <div className="flex place-content-between items-start pt-8 px-8">
          <button
            className="text-white"
            onClick={() => {
              navigate("/setting");
            }}
          >
            <ArrowBack />
          </button>
          <div className="flex flex-col items-center space-y-2">
            <div className="text-white text-xl font-bold">Family Access</div>
            <div className="text-white">6 members</div>
          </div>
          <div className="text-white ">
            <MoreHoriz />
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 space-y-4">
          <Avatar
            size={125}
            story="default"
            src="http://h5.zdn.vn/static/images/avatar.png"
          />
          <label className="text-white text-xl">Ted Castillo</label>
        </div>
      </div>
      <div>
        <ul className="grid grid-cols-2 px-8 pt-4 gap-4">
          <li className="flex flex-col bg-white p-4 items-center space-y-2">
            <Avatar
              size={125}
              story="default"
              src="http://h5.zdn.vn/static/images/avatar.png"
            />
            <label className="text-xl font-bold">Ted Castillo</label>
            <button className = "hover:cursor-pointer flex space-x-4 items-center">
              <ToggleOn fontSize = "large" className = "text-[#EB4034]" />
              <label>On</label>
            </button>
          </li>
          <li className="flex flex-col bg-white p-4 items-center space-y-2">
            <Avatar
              size={125}
              story="default"
              src="http://h5.zdn.vn/static/images/avatar.png"
            />
            <label className="text-xl font-bold">Ted Castillo</label>
            <button className = "hover:cursor-pointer flex space-x-4 items-center">
              <ToggleOn fontSize = "large" className = "text-[#EB4034]" />
              <label>On</label>
            </button>
          </li>
          <li className="flex flex-col bg-white p-4 items-center space-y-2">
            <Avatar
              size={125}
              story="default"
              src="http://h5.zdn.vn/static/images/avatar.png"
            />
            <label className="text-xl font-bold">Ted Castillo</label>
            <button className = "hover:cursor-pointer flex space-x-4 items-center">
              <ToggleOn fontSize = "large" className = "text-[#EB4034]" />
              <label>On</label>
            </button>
          </li>
          <li className="flex flex-col bg-white p-4 items-center space-y-2">
            <Avatar
              size={125}
              story="default"
              src="http://h5.zdn.vn/static/images/avatar.png"
            />
            <label className="text-xl font-bold">Ted Castillo</label>
            <button className = "hover:cursor-pointer flex space-x-4 items-center">
              <ToggleOn fontSize = "large" className = "text-[#EB4034]" />
              <label>On</label>
            </button>
          </li>
          <li className="flex flex-col bg-white p-4 items-center space-y-2">
            <Avatar
              size={125}
              story="default"
              src="http://h5.zdn.vn/static/images/avatar.png"
            />
            <label className="text-xl font-bold">Ted Castillo</label>
            <button className = "hover:cursor-pointer flex space-x-4 items-center">
              <ToggleOn fontSize = "large" className = "text-[#EB4034]" />
              <label>On</label>
            </button>
          </li>
          <li className="flex flex-col bg-white p-4 items-center space-y-2">
            <Avatar
              size={125}
              story="default"
              src="http://h5.zdn.vn/static/images/avatar.png"
            />
            <label className="text-xl font-bold">Ted Castillo</label>
            <button className = "hover:cursor-pointer flex space-x-4 items-center">
              <ToggleOn fontSize = "large" className = "text-[#EB4034]" />
              <label>On</label>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FamilyAccess;
