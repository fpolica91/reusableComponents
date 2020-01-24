import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import logo from "../pages/images/instagram.png";
import { createAppContainer } from "react-navigation";
import Feed from "../pages/feed/index";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Feed
    },
    {
      headerLayoutPreset: "center",
      defaultNavigationOptions: {
        headerTitle: <Image source={logo} />,
        headerStyle: {
          backgroundColor: "#f5f5f5"
        }
      }
    }
  )
);
export default Routes;
