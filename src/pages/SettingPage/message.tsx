import React, { useEffect, useState } from "react";

import { Page, useNavigate } from "zmp-ui";
import { Box } from '@mui/material'
import PageWithToolbar from "../../components/PageWithToolbar";
import { Notifications } from "@mui/icons-material";
import CustomNotification from "../../components/Layout/CustomNotification";
const Message = () => {
  const navigate = useNavigate();
  const [messages, setMesssages] = useState([])
  const fetchMessages = async () => {
    const myHeaders = new Headers();
    myHeaders.append("X-AIO-Key", "aio_yGID980zvglJif4Ld8TCBTuZhaB4");

    const requestOptions: Object = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const response = await fetch("https://io.adafruit.com/api/v2/phuc12082003/feeds/smarthome-welcome/data?limit=5", requestOptions)
    const result = await response.json()
    setMesssages(result)
    console.log(result)
  }
  useEffect(() => {
    fetchMessages()
  }, [])
  useEffect(() => {
    const intervalID = setInterval(() => {
      fetchMessages()
    }, 5000)
    return () => clearInterval(intervalID)
  }, [])
  return (
    // <div className="h-screen w-full overflow-hidden">
    //   <div className="h-[10vh] bg-[#0A182E]">
    //     <div className="flex place-content-between items-center pt-8 px-8">
    //       <button
    //         className="text-white"
    //         onClick={() => {
    //           navigate("/setting");
    //         }}
    //       >
    //         <ArrowBack />
    //       </button>
    //       <div className="text-white text-xl font-bold">My message</div>
    //       <button className = "text-white hover:cursor-pointer">
    //         <DoneAll />
    //       </button>
    //     </div>
    //   </div>
    //   <div className = "h-[90vh] px-8 pt-4 overflow-auto space-y-4">
    //     <div className = "space-y-2">
    //       <label className="font-bold text-3xl">Today</label>
    //       <ul className = "flex flex-col space-y-2">
    //         <li className="flex bg-white items-center p-4 space-x-8">
    //           <WbIncandescent fontSize="large" />
    //           <div className = "flex flex-col justify-center">
    //             <div className="font-bold text-xl">Lighting will soon fail</div>
    //             <div>Kitchen</div>
    //           </div>
    //         </li>
    //         <li className="flex bg-white items-center p-4 space-x-8">
    //           <MeetingRoom fontSize="large" />
    //           <div className = "flex flex-col justify-center">
    //             <div className="font-bold text-xl">The door still open</div>
    //             <div>Garage</div>
    //           </div>
    //         </li>
    //         <li className="flex bg-white items-center p-4 space-x-8">
    //           <GroupWork fontSize="large" />
    //           <div className = "flex flex-col justify-center">
    //             <div className="font-bold text-xl">Fan 3 works too long</div>
    //             <div>Kitchen</div>
    //           </div>
    //         </li>
    //         <li className="flex bg-white items-center p-4 space-x-8">
    //           <Bathtub fontSize="large" />
    //           <div className = "flex flex-col justify-center">
    //             <div className="font-bold text-xl">Did you forget turn off the water</div>
    //             <div>Bathroom</div>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className = "space-y-2">
    //       <label className="font-bold text-3xl">Yesterday</label>
    //       <ul className = "flex flex-col space-y-2">
    //         <li className="flex bg-white items-center p-4 space-x-8 text-gray-400">
    //           <WbIncandescent fontSize="large" />
    //           <div className = "flex flex-col justify-center">
    //             <div className="font-bold text-xl">Lighting will soon fail</div>
    //             <div>Kitchen</div>
    //           </div>
    //         </li>
    //         <li className="flex bg-white items-center p-4 space-x-8 text-gray-400">
    //           <WbIncandescent fontSize="large" />
    //           <div className = "flex flex-col justify-center">
    //             <div className="font-bold text-xl">Lighting will soon fail</div>
    //             <div>Kitchen</div>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    <Page>
      <PageWithToolbar title={"Messages"} behavior={<Notifications />} />
      <Box sx={{ display: 'grid', paddingLeft: '10px', paddingRight: '10px', paddingTop: '20px', gap: '20px' }}>
        {messages.map((element: any) => {
          const message = element.value
          const time = element.created_epoch*1000
          let myDate = new Date(time);

          // using various methods of Date class to get year, date, month, hours, minutes, and seconds.

          let dateStr = myDate.getFullYear() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate() + " " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds()
          return <CustomNotification message={message} time={dateStr} />
        })}
      </Box>
    </Page>
  );
};

export default Message;
