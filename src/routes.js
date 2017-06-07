// import {
//   StackNavigator,
// } from 'react-navigation';
import React, { Component } from 'react';
import {
  DrawerNavigator,
} from 'react-navigation';

import Home from './scenes/home';
import CameraScene from './scenes/camera';
import Menu from './components/menu';

const routes = DrawerNavigator(
{
  Home: {screen: Home},
  Camera: {screen: CameraScene}
},
{
  contentComponent: (props) => {
    return <Menu {...props} />
  }
}
);

export default routes;
