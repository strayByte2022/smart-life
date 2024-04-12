import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import About from "../pages/about";
import Form from "../pages/form";
import User from "../pages/user";
import WelcomePage from "../pages/WelcomePage";
import HomePage from "../pages/HomePage";
import AddNewDevicePage from "../pages/AddNewDevice";

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
              <Route path="/home" element={<HomePage></HomePage>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/form" element={<Form></Form>}></Route>
              <Route path="/user" element={<User></User>}></Route>
              <Route path="/newdevice" element={<AddNewDevicePage/>}></Route>
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
