/* eslint-disable react/prop-types */
import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import SelectBarbershop from './pages/Home/SelectBarbershop';
import SelectService from './pages/Home/SelectService';
import SelectBarber from './pages/Home/SelectBarber';
import SelectDateTime from './pages/Home/SelectDateTime';
import Confirm from './pages/Home/Confirm';

import Previous from './pages/Appointments/Previous';
import Next from './pages/Appointments/Next';
import Profile from './pages/Profile';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Home: {
              screen: createStackNavigator(
                {
                  SelectBarbershop,
                  SelectService,
                  SelectBarber,
                  SelectDateTime,
                  Confirm,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#FFF',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Início',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="home" size={20} color={tintColor} />
                ),
              },
            },
            Appointments: {
              screen: createMaterialTopTabNavigator(
                {
                  Previous,
                  Next,
                },
                {
                  tabBarOptions: {
                    style: {
                      backgroundColor: '#000',
                    },
                    indicatorStyle: {
                      backgroundColor: '#ff7b00',
                    },
                    labelStyle: {
                      fontWeight: 'bold',
                    },
                  },
                  initialRouteName: 'Next',
                  backBehavior: 'order',
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Agendamentos',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="event" size={20} color={tintColor} />
                ),
              },
            },
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.55)',
              style: {
                backgroundColor: '#111',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
