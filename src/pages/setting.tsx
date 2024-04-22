import React from "react";
import { Avatar } from "zmp-ui";
import {
  Edit,
  PowerSettingsNew,
  LockOutlined,
  VpnKeyOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import Navigator from "../components/Navigator";

const Setting = () => {
  return (
    <div className="h-screen">
      <div className="h-1/4 bg-[#0A182E]">
        <div className="text-white text-3xl font-bold pl-4 pt-4 mb-8">
          Setting
        </div>
        <div className="flex px-4 place-content-between">
          <div className="flex items-center space-x-4">
            <Avatar
              size={80}
              online
              story="default"
              src="http://h5.zdn.vn/static/images/avatar.png"
            />
            <div className="text-white">
              <div>Good Morning!</div>
              <div className="font-bold text-xl">
                <div>Nguyen Tran Khoi</div>
                <div>Ho Chi Minh City</div>
              </div>
            </div>
          </div>
          <div className="bg-slate-500/[.4] rounded-full flex items-center px-7">
            <Edit className=" text-white" />
          </div>
        </div>
      </div>
      <div className="h-3/4 overflow-scroll">
        <div className="flex place-content-around mt-4 mx-4">
          <button className="flex flex-col text-center">
            <div className="grid bg-[#dad2d1] hover:bg-[#EF3024] w-24 h-24 place-items-center rounded-2xl">
              <PowerSettingsNew
                fontSize="large"
                className="text-slate-200 hover:text-white"
              />
            </div>
            <div className="text-xl font-bold">Off energy</div>
          </button>
          <button className="flex flex-col text-center">
            <div className="grid bg-[#dad2d1] hover:bg-[#EF3024] w-24 h-24 place-items-center rounded-2xl">
              <LockOutlined
                fontSize="large"
                className="text-slate-200 hover:text-white"
              />
            </div>
            <div className="text-xl font-bold">Left home</div>
          </button>
          <button className="flex flex-col text-center">
            <div className="grid bg-[#dad2d1] hover:bg-[#EF3024] w-24 h-24 place-items-center rounded-2xl">
              <VpnKeyOutlined
                fontSize="large"
                className="text-slate-200 hover:text-white"
              />
            </div>
            <div className="text-xl font-bold">Came home</div>
          </button>
        </div>
        <div>
          <div className="flex place-content-between m-8 text-2xl items-center border-solid">
            <div>My Home</div>
            <KeyboardArrowRightOutlined />
          </div>
          <div className="flex place-content-between m-8 text-2xl items-center border-solid">
            <div>My Home</div>
            <KeyboardArrowRightOutlined />
          </div>
          <div className="flex place-content-between m-8 text-2xl items-center border-solid">
            <div>My Home</div>
            <KeyboardArrowRightOutlined />
          </div>
        </div>
        <div>
          <div className="flex place-content-between m-8 text-2xl items-center border-solid">
            <div>My Home</div>
            <KeyboardArrowRightOutlined />
          </div>
          <div className="flex place-content-between m-8 text-2xl items-center border-solid">
            <div>My Home</div>
            <KeyboardArrowRightOutlined />
          </div>
        </div>
        <div>
          <div className="flex place-content-between m-8 text-2xl items-center border-solid">
            <div>My Home</div>
            <KeyboardArrowRightOutlined />
          </div>
        </div>
      </div>
      <Navigator />
    </div>
  );
};

export default Setting;
