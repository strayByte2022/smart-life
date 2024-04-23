import {
  Edit,
  KeyboardArrowRightOutlined,
  LockOutlined,
  PowerSettingsNew,
  VpnKeyOutlined,
} from "@mui/icons-material";
import React from "react";
import { Avatar } from "zmp-ui";
import BottomMenu from "../components/Layout/BottomMenu";

import { useNavigate } from "zmp-ui";

const Setting = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div className="h-1/4 bg-[#0A182E]">
        <div className="text-white text-3xl font-bold pl-8 pt-12 mb-8">
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
          <button
            className="bg-slate-500/[.4] rounded-full flex items-center px-7 hover:cursor-pointer"
            onClick={() => {
              navigate("/setting/editprofile");
            }}
          >
            <Edit className=" text-white" />
          </button>
        </div>
      </div>
      <div className="h-[calc(75vh-60px)] overflow-y-auto">
        <div className="flex place-content-around m-4">
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
        <div className="flex flex-col space-y-2">
          <div className="bg-white">
            <button
              className="w-full hover:cursor-pointer hover:bg-slate-300 py-4 border-solid border-2"
              onClick={() => {
                navigate("/setting/home");
              }}
            >
              <div className="flex place-content-between mx-8 text-2xl items-center border-solid font-bold">
                <div>My Home</div>
                <KeyboardArrowRightOutlined />
              </div>
            </button>
            <button
              className="w-full hover:cursor-pointer hover:bg-slate-300 py-4 border-solid border-2"
              onClick={() => {
                navigate("/setting/message");
              }}
            >
              <div className="flex place-content-between mx-8 text-2xl items-center border-solid font-bold">
                <div className="flex space-x-4">
                  <div>Message</div>
                  <div className="bg-[#EF3024] w-[32px] rounded-full text-white font-light">
                    3
                  </div>
                </div>
                <KeyboardArrowRightOutlined />
              </div>
            </button>
            <button
              className="w-full hover:cursor-pointer hover:bg-slate-300 py-4 border-solid border-2"
              onClick={() => {
                navigate("/setting/familyaccess");
              }}
            >
              <div className="flex place-content-between mx-8 text-2xl items-center border-solid font-bold">
                <div>Family access</div>
                <KeyboardArrowRightOutlined />
              </div>
            </button>
          </div>
          <div className="bg-white">
            <button
              className="w-full hover:cursor-pointer hover:bg-slate-300 py-4 border-solid border-2"
              onClick={() => {
                navigate("/setting/changepassword");
              }}
            >
              <div className="flex place-content-between mx-8 text-2xl items-center border-solid font-bold">
                <div>Change password</div>
                <KeyboardArrowRightOutlined />
              </div>
            </button>
            <button className="w-full hover:cursor-pointer hover:bg-slate-300 py-4 border-solid border-2">
              <div className="flex place-content-between mx-8 text-2xl items-center border-solid font-bold">
                <div>Support</div>
                <KeyboardArrowRightOutlined />
              </div>
            </button>
          </div>
          <div className="bg-white ">
            <button className="w-full hover:cursor-pointer hover:bg-slate-300 py-4 border-solid border-2">
              <div className="flex place-content-between mx-8 text-2xl items-center border-solid font-bold text-[#EF3024]">
                <div>Sign out</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
};

export default Setting;
