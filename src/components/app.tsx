import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import User from "../pages/user";
import WelcomePage from "../pages/WelcomePage";
import HomePage from "../pages/HomePage";
import AddNewDevicePage from "../pages/AddNewDevice";
import Setting from "../pages/setting";
import AddNewRoomPage from "../pages/AddNewRoom";
import PrototypeKitchenRoomDetail from "../pages/PrototypeKitchenRoomDetail";
import StatisticsPage from "../pages/StatisticsPage";
import Home from "../pages/SettingPage/home";
import Message from "../pages/SettingPage/message";
import FamilyAccess from "../pages/SettingPage/familyAccess";
import ChangePassword from "../pages/SettingPage/changePassword";
import EditProfile from "../pages/SettingPage/editProfile";
const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
              <Route path="/home" element={<HomePage></HomePage>}></Route>
              
              
              <Route path="/user" element={<User></User>}></Route>
              <Route path="/newdevice" element={<AddNewDevicePage/>}></Route>
              <Route path="/newroom" element={<AddNewRoomPage/>}></Route>
              <Route path="/test" element={<PrototypeKitchenRoomDetail/>}></Route>
              <Route path="/stats" element={<StatisticsPage/>}/>
              <Route path="/setting" element={<Setting />}></Route>
              <Route path="/setting/home" element = {<Home />} />
              <Route path="/setting/message" element = {<Message />} />
              <Route path="/setting/familyaccess" element = {<FamilyAccess />} />
              <Route path="/setting/changepassword" element = {<ChangePassword />} />
              <Route path="/setting/editprofile" element = {<EditProfile />} />
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
