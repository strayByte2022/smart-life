import React from "react";
import { ArrowBack, Lock } from "@mui/icons-material";
import { useNavigate } from "zmp-ui";

const ChangePassword = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full">
      <div className="h-[10vh] bg-[#0A182E]">
        <div className="flex place-content-between items-start pt-8 px-8">
          <button
            className="text-white"
            onClick={() => {
              navigate("/setting");
            }}
          >
            <ArrowBack />
          </button>
          <div className="text-white text-xl font-bold">Reset Password</div>
          <div className=" ">.....</div>
        </div>
      </div>
      <div className="h-[90vh]">
        <div className="flex flex-col items-center">
          <div className="bg-white mt-8 w-0 h-0 p-20 flex items-center justify-center rounded-full">
            <div className="bg-gray-200 flex w-0 h-0 p-16 items-center justify-center rounded-full text-gray-500">
              <Lock fontSize="large" />
            </div>
          </div>
          <div className="mx-16 my-4 text-center">
            Enter your new password below, we're just being extra safe
          </div>
        </div>
        <form className="flex flex-col m-8 space-y-4">
          <div className="flex flex-col">
            <label className="py-2 text-center font-bold">New Password</label>
            <input
              type="password"
              className="font-bold text-2xl bg-slate-200 py-3 px-4"
              disabled
              value="An's home"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-center font-bold">Confirm Password</label>
            <input
              type="password"
              className="font-bold text-2xl bg-slate-200 py-3 px-4"
              disabled
              value="An's home"
            />
          </div>
        </form>
        <div className="bg-[#EB4034] m-8 py-4 text-center">
          <button className="hover:cursor-pointer text-white text-2xl">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
