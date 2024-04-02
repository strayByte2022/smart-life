import React from "react";
import { Page, Swiper, Box, Text, useNavigate, Button } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";

import UserCard from "../components/user-card";

const HomePage: React.FunctionComponent = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  return (
    <Page className="section-container">
      
      <Box
        mt={6}
        flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        
      >
        <Swiper autoplay duration={3000} loop className="">
          <Swiper.Slide className="h-100">
            <img
              className="slide-img"
              src="slider-art-1.png"
              alt="slide-1"
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="slider-art-2.png"
              alt="slide-2"
            />
            <Text.Title >Manage your home by using your </Text.Title>
            <Text.Title> phone everywhere</Text.Title>
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="slider-art-3.png"
              alt="slide-3"
            />
          </Swiper.Slide>
          

        </Swiper>

      </Box>
      <Box mt={2} flex justifyContent="space-between">
        <Button size="small" type="neutral" variant="tertiary">Skip</Button>
        <Button size="small" type="neutral" variant="tertiary">Next</Button>
      </Box>
      
    </Page>
  );
};

export default HomePage;