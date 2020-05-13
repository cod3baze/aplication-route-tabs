import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import './config/StatusBar'

import Login from './pages/Login'
import Home from './pages/Home'
import Perfil from './pages/Perfil'


const telasBottom = createBottomTabNavigator({
   Home: { 
      screen: Home,
      navigationOptions: {
         tabBarIcon: <MaterialIcons name="reorder" size={25} color="#000" />,
      }
   },
   Perfil: { 
      screen: Perfil,
      navigationOptions: {
         tabBarIcon: <MaterialIcons name="lock" size={25} color='#000' />,
      }
   }
}, {
   defaultNavigationOptions: {
      headerBackTitleVisible: false,
   },
   tabBarOptions:{
      activeTintColor: 'black',
      activeBackgroundColor: 'white',
      inactiveTintColor: 'grey',
   }
})

const fullScreen = createSwitchNavigator({
   Login: { screen: Login },
   Home: { screen: telasBottom },
}, {
   initialRouteName: 'Login',
})

const routes = createAppContainer(
   fullScreen,
)


export default routes