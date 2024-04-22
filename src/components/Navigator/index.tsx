import React from "react";
import { Box, IconButton } from "@mui/material";
import { BarChart, Home, Cyclone, Settings } from "@mui/icons-material";
import { useNavigate } from "zmp-ui";

const Navigator = () => {
  const navigate = useNavigate();
  return (
    <Box className="bg-white flex place-content-between pl-[30px] pr-[30px] w-full fixed bottom-0">
      <IconButton onClick={() => navigate("/home")}>
        <div className="flex flex-col items-center text-lg">
          <Home />
          <div>Home</div>
        </div>
      </IconButton>

      <IconButton>
        <div className="flex flex-col items-center text-lg">
          <BarChart />
          <div>Statistics</div>
        </div>
      </IconButton>

      <IconButton onClick={() => navigate("/home")}>
        <div className="flex flex-col items-center text-lg">
          <Cyclone />
          <div>Routines</div>
        </div>
      </IconButton>

      <IconButton onClick={() => navigate("/setting")}>
        <div className="flex flex-col items-center text-lg">
          <Settings />
          <div>Setting</div>
        </div>
      </IconButton>
    </Box>
  );
};

export default Navigator;
