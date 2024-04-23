import React from "react";
import { ArrowBack, DoneAll, WbIncandescent, MeetingRoom, GroupWork, Bathtub } from "@mui/icons-material";
import { useNavigate } from "zmp-ui";

const Message = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="h-[10vh] bg-[#0A182E]">
        <div className="flex place-content-between items-center pt-8 px-8">
          <button
            className="text-white"
            onClick={() => {
              navigate("/setting");
            }}
          >
            <ArrowBack />
          </button>
          <div className="text-white text-xl font-bold">My message</div>
          <button className = "text-white hover:cursor-pointer">
            <DoneAll />
          </button>
        </div>
      </div>
      <div className = "h-[90vh] px-8 pt-4 overflow-auto space-y-4">
        <div className = "space-y-2">
          <label className="font-bold text-3xl">Today</label>
          <ul className = "flex flex-col space-y-2">
            <li className="flex bg-white items-center p-4 space-x-8">
              <WbIncandescent fontSize="large" />
              <div className = "flex flex-col justify-center">
                <div className="font-bold text-xl">Lighting will soon fail</div>
                <div>Kitchen</div>
              </div>
            </li>
            <li className="flex bg-white items-center p-4 space-x-8">
              <MeetingRoom fontSize="large" />
              <div className = "flex flex-col justify-center">
                <div className="font-bold text-xl">The door still open</div>
                <div>Garage</div>
              </div>
            </li>
            <li className="flex bg-white items-center p-4 space-x-8">
              <GroupWork fontSize="large" />
              <div className = "flex flex-col justify-center">
                <div className="font-bold text-xl">Fan 3 works too long</div>
                <div>Kitchen</div>
              </div>
            </li>
            <li className="flex bg-white items-center p-4 space-x-8">
              <Bathtub fontSize="large" />
              <div className = "flex flex-col justify-center">
                <div className="font-bold text-xl">Did you forget turn off the water</div>
                <div>Bathroom</div>
              </div>
            </li>
          </ul>
        </div>
        <div className = "space-y-2">
          <label className="font-bold text-3xl">Yesterday</label>
          <ul className = "flex flex-col space-y-2">
            <li className="flex bg-white items-center p-4 space-x-8 text-gray-400">
              <WbIncandescent fontSize="large" />
              <div className = "flex flex-col justify-center">
                <div className="font-bold text-xl">Lighting will soon fail</div>
                <div>Kitchen</div>
              </div>
            </li>
            <li className="flex bg-white items-center p-4 space-x-8 text-gray-400">
              <WbIncandescent fontSize="large" />
              <div className = "flex flex-col justify-center">
                <div className="font-bold text-xl">Lighting will soon fail</div>
                <div>Kitchen</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Message;
