import React, { useState } from "react";
import { Page, Swiper, Box, Text, useNavigate, Button } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";


const HomePage: React.FunctionComponent = () => {
  
  
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <Page className="section-container">

      <Box
        mt={6}
        flex
        flexDirection="column"
        justifyContent="space-between"

        alignItems="center"
        className="section-container"
      >
        <Swiper duration={3000} loop className="h-full" afterChange={(curentIndex: number) => {console.log(curentIndex); setCurrentSlide(curentIndex) }}>
          <Swiper.Slide >
            <img
              className="w-full block h-1/2"
              src="slider-art-1.png"
              alt="slide-1"
            />
            <Box className="">
              <Text.Title className="mt-16 text-center">
                Manage your home by using
              </Text.Title>
              <Text.Title className="text-center">
                your phone everywhere
              </Text.Title>
            </Box>


          </Swiper.Slide>
          <Swiper.Slide className="grid">
            <img
              className="w-full block h-1/2"
              src="slider-art-2.png"
              alt="slide-2"
            />
            {/* <Text.Title >Manage your home by using your </Text.Title>
            <Text.Title> phone everywhere</Text.Title> */}
            <Box className="">
              <Text.Title className="mt-16 text-center ">
                Link your home by plugging them
              </Text.Title>
              <Text.Title className="text-center">
                and connect to Wi-fi
              </Text.Title>
            </Box>
          </Swiper.Slide>
          <Swiper.Slide className="grid">
            <img
              className="w-full block h-1/2"
              src="slider-art-3.png"
              alt="slide-3"
            />
            <Box className="">
              <Text.Title className="mt-16 text-center">
                Instant notification of you about
              </Text.Title>
              <Text.Title className="text-center">
                any incident
              </Text.Title>
            </Box>
          </Swiper.Slide>


        </Swiper>

      </Box>
      {currentSlide!=2?<Box mt={2} flex justifyContent="space-between">
        <Button size="small" type="neutral" variant="tertiary">Skip</Button>
        <Button size="small" type="neutral" variant="tertiary">Next</Button>
      </Box>:<Button className="get-started-button">Get Started</Button>}
      

    </Page>
  );
};

export default HomePage;