import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { moderateScale } from 'react-native-size-matters';

import { ReadQR, ListQR } from '../screens';

import { BottomTabParamList } from './types';
import QR from './svg/QR';
import List from './svg/List';

const HomeTab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <HomeTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: moderateScale(80),
          paddingBottom: moderateScale(20),
          paddingTop: moderateScale(20),
          backgroundColor: '#ffffff',
        },
      }}
    >
      <HomeTab.Screen
        name='ReadQR'
        component={ReadQR}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <QR
              width={moderateScale(44)}
              height={moderateScale(44)}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <HomeTab.Screen
        name='QRList'
        component={ListQR}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <List
              width={moderateScale(44)}
              height={moderateScale(44)}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};
