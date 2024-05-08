import React, { useEffect, useState } from "react";
import { ArrowBack, Lock, Warning } from "@mui/icons-material";
import { Button, Input, Page, useNavigate } from "zmp-ui";
import PageWithToolbar from "../../components/PageWithToolbar";
import { Box, Typography } from "@mui/material";
import { useSnackbar } from 'zmp-ui';
const ChangePassword = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("")
  const [enteredOldPassword, setEnteredOldPassword] = useState("")
  const [enteredNewPassword, setEnteredNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const { openSnackbar, setDownloadProgress, closeSnackbar } = useSnackbar();
  const myHeaders = new Headers();
  myHeaders.append("X-AIO-Key", "aio_yGID980zvglJif4Ld8TCBTuZhaB4");
  myHeaders.append("Content-Type", "application/json");
  const requestOptions: Object = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const fetchOldPassword = async () => {
    const response = await fetch("https://io.adafruit.com/api/v2/phuc12082003/feeds/smarthome-password/data/retain", requestOptions)
    const result = (await response.text()).trim()
    const finalResult = result.replace(/,+$/, "")
    console.log(finalResult)
    setOldPassword(finalResult)
  }
  useEffect(() => {
    fetchOldPassword()
  }, [])
  
  const handlePostPassword = async (newPassword) => {
    const raw = JSON.stringify({
      "value": newPassword
    });
    const requestOptions: Object = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    await fetch("https://io.adafruit.com/api/v2/phuc12082003/feeds/smarthome-password/data", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }
  const handlePasswordError = (oldPassword,enteredOldPassword,enteredNewPassword,confirmNewPassword) => {
    if (oldPassword !== enteredOldPassword) {
      openSnackbar({
        text: "Invalid old password",
        type: "warning",
        duration: 5000,
        prefixIcon: <Warning />
      }
      )
    }
    else if (enteredNewPassword !== confirmNewPassword) {
      openSnackbar({
        text: "Unmatched new password",
        type: "warning",
        duration: 5000,
        prefixIcon: <Warning />
      }
      )
    }
    else if (oldPassword !== enteredOldPassword && enteredNewPassword !== confirmNewPassword) {
      openSnackbar({
        text: "Invalid old password & Unmatched new password",
        type: "warning",
        duration: 5000,
        prefixIcon: <Warning />
      }
      )
    }
    else {
      handlePostPassword(confirmNewPassword)
      navigate(-1)
    }
  }
  return (
    // <div className="h-screen w-full">
    //   <div className="h-[10vh] bg-[#0A182E]">
    //     <div className="flex place-content-between items-start pt-8 px-8">
    //       <button
    //         className="text-white"
    //         onClick={() => {
    //           navigate("/setting");
    //         }}
    //       >
    //         <ArrowBack />
    //       </button>
    //       <div className="text-white text-xl font-bold">Reset Password</div>
    //       <div className=" ">.....</div>
    //     </div>
    //   </div>
    //   <div className="h-[90vh]">
    //     <div className="flex flex-col items-center">
    //       <div className="bg-white mt-8 w-0 h-0 p-20 flex items-center justify-center rounded-full">
    //         <div className="bg-gray-200 flex w-0 h-0 p-16 items-center justify-center rounded-full text-gray-500">
    //           <Lock fontSize="large" />
    //         </div>
    //       </div>
    //       <div className="mx-16 my-4 text-center">
    //         Enter your new password below, we're just being extra safe
    //       </div>
    //     </div>
    //     <form className="flex flex-col m-8 space-y-4">
    //       <div className="flex flex-col">
    //         <label className="py-2 text-center font-bold">New Password</label>
    //         <input
    //           type="password"
    //           className="font-bold text-2xl bg-slate-200 py-3 px-4"
    //           disabled
    //           value="An's home"
    //         />
    //       </div>
    //       <div className="flex flex-col">
    //         <label className="py-2 text-center font-bold">Confirm Password</label>
    //         <input
    //           type="password"
    //           className="font-bold text-2xl bg-slate-200 py-3 px-4"
    //           disabled
    //           value="An's home"
    //         />
    //       </div>
    //     </form>
    //     <div className="bg-[#EB4034] m-8 py-4 text-center">
    //       <button className="hover:cursor-pointer text-white text-2xl">
    //         Save
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <Page>
      <PageWithToolbar title={"Change password"} behavior={<></>} />
      <Box sx={{ display: 'grid', paddingLeft: '20px', paddingTop: '40px', paddingRight: '20px' }}>
        <Box sx={{ display: 'grid' }}>
          <Typography>Enter old password</Typography>
          <Input.Password onChange={(e) => { setEnteredOldPassword(e.target.value) }} />
        </Box>
        <Box sx={{ display: 'grid' }}>
          <Typography>Enter new password</Typography>
          <Input.Password onChange={(e) => { setEnteredNewPassword(e.target.value) }} />
        </Box>
        <Box sx={{ display: 'grid' }}>
          <Typography>Confirm new password</Typography>
          <Input.Password onChange={(e) => { setConfirmNewPassword(e.target.value) }} />
        </Box>
        <Box sx={{ paddingTop: '20px' }}><Button onClick={() => {
          handlePasswordError(oldPassword,enteredOldPassword,enteredNewPassword,confirmNewPassword)
        }}>Submit</Button></Box>
      </Box>
    </Page>
  );
};

export default ChangePassword;
