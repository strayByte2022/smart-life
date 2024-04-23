import React from "react";
import { useNavigate, Avatar } from "zmp-ui";
import { ArrowBack } from "@mui/icons-material";

const EditProfile = () => {
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
          <div className="text-white text-xl font-bold">Edit Profile</div>
          <div className="text-white ">SAVE</div>
        </div>
        <div className="flex flex-col items-center mt-4 space-y-4">
          <Avatar
            online
            size={125}
            story="default"
            src="http://h5.zdn.vn/static/images/avatar.png"
          />
          <label className="text-white text-xl">Ted Castillo</label>
        </div>
      </div>
      <div className = "h-2/3">
        <form className="flex flex-col m-8 space-y-8">
          <div className="flex flex-col">
            <label className="">Username</label>
            <input
              className="font-bold text-2xl border-solid border-b-2 border-black"
              disabled
              value="Ly Gioi An"
            />
          </div>
          <div className="flex flex-col">
            <label className="">Email</label>
            <input
              className="font-bold text-2xl border-solid border-b-2 border-black"
              disabled
              value="lygioian@gmail.com"
            />
          </div>
          <div className="flex flex-col">
            <label className="">Phone</label>
            <input
              className="font-bold text-2xl border-solid border-b-2 border-black"
              disabled
              value="+84 937501230"
            />
          </div>
          <div className="flex flex-col">
            <label className="">Gender</label>
            <input
              className="font-bold text-2xl border-solid border-b-2 border-black"
              disabled
              value="Male"
            />
          </div>
          <div className="flex flex-col">
            <label className="">Date of birth</label>
            <input
              className="font-bold text-2xl border-solid border-b-2 border-black"
              disabled
              value="30/12/2000"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
