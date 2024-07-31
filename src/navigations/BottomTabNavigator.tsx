import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Sett01 from '@/pages/Sett01';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="설정" component={Sett01} />
    </Tab.Navigator>
  );
}
