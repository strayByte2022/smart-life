import React from "react";
import { useNavigate } from "zmp-ui";
import { ArrowBack } from "@mui/icons-material";
import backgroundImage from "../../asset/background.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="h-1/4 bg-[#0A182E]">
        <div className="flex place-content-between items-center pt-8 px-8">
          <button
            className="text-white"
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowBack />
          </button>
          <div className="text-white text-xl font-bold">Home</div>
          <div className="text-[#EB4034] text-xl font-bold">SOS</div>
        </div>
        <div className="pt-[40px] mx-8">
          <img className="h-[200px]" src={backgroundImage}></img>
        </div>
      </div>
      <div className="h-3/4 ">
        <form className="mt-[120px] flex flex-col m-8 space-y-8">
          <div className="flex flex-col">
            <label className="">Home Name</label>
            <input
              className="font-bold text-2xl border-solid border-b-2 border-black"
              disabled
              value="An's home"
            />
          </div>
          <div className="flex flex-col">
            <label className="">Address</label>
            <input
              className="font-bold text-2xl border-solid border-b-2 border-black"
              disabled
              value="268 Ly Thuong Kiet"
            />
          </div>
          <div className="flex flex-col">
            <label className="">Password</label>
            <input
              type="password"
              className="font-bold text-2xl border-solid border-b-2 border-black"
              disabled
              value="268 Ly Thuong Kiet"
            />
          </div>
        </form>
        <div className="bg-[#EB4034] m-8 py-6 text-center mt-32">
          <button className="hover:cursor-pointer text-white text-2xl">Access this home</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
