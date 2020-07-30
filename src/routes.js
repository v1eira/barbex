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

import Past from './pages/Appointments/Previous/Past';
import Rate from './pages/Appointments/Previous/Rate'
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
                      marginLeft: 10,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Início',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="home" size={22} color={tintColor} />
                ),
              },
            },
            Appointments: {
              screen: createMaterialTopTabNavigator(
                {
                  Anteriores: {
                    screen: createStackNavigator(
                      {
                        Past,
                        Rate,
                      },
                      {
                        defaultNavigationOptions: {
                          headerTransparent: true,
                          headerTintColor: '#FFF',
                          headerLeftContainerStyle: {
                            marginLeft: 10,
                          },
                        },
                      }
                    ),
                  },
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
                    inactiveTintColor: '#666'
                  },
                  initialRouteName: 'Next',
                  backBehavior: 'order',
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Agendamentos',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="event" size={22} color={tintColor} />
                ),
              },
            },
            Profile: {
              screen: Profile,
              navigationOptions: {
                tabBarLabel: 'Perfil',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="person" size={22} color={tintColor} />
                ),
              },
            },
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: '#666',
              style: {
                backgroundColor: '#111',
                borderTopColor: '#111',
                height: 55,
                paddingTop: 5,
                paddingBottom: 2,
              },
              labelStyle: {
                marginBottom: 5,
                fontSize: 11
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
