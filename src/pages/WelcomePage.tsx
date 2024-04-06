import React, { useState, useRef } from "react";
import { Page, Swiper, Box, Text, useNavigate, Button } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";

const WelcomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const swiperRef = useRef<any>(null);
  const [endSlidePassed, setEndlidePassed] = useState(false);

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.next();
    }
  };

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
        <Swiper
          loop
          className="h-full"
          ref={swiperRef}
          afterChange={(currentIndex: number) => {
            if (currentIndex === 2) {
              setEndlidePassed(true);
            }
          }}
        >
          <Swiper.Slide>
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
              <Text.Title className="text-center">any incident</Text.Title>
            </Box>
          </Swiper.Slide>
        </Swiper>
      </Box>
      {!endSlidePassed ? (
        <Box mt={2} flex justifyContent="space-between">
          <Button
            size="small"
            type="neutral"
            variant="tertiary"
            onClick={() => {
              navigate("/home");
            }}
          >
            Skip
          </Button>
          <Button
            size="small"
            type="neutral"
            variant="tertiary"
            onClick={goToNextSlide}
          >
            Next
          </Button>
        </Box>
      ) : (
        <Button
          className="get-started-button"
          onClick={() => {
            navigate("/home");
          }}
        >
          Get Started
        </Button>
      )}
    </Page>
  );
};

export default WelcomePage;
