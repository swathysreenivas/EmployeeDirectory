import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as React from 'react';
import {EmployeeDetails} from '../screens/employeeDetails';
import {Home} from '../screens/home';
import navigationConfig from './config';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{...navigationConfig}}
      initialRouteName={'Home'}>
      <Stack.Screen
        name="Employee List"
        component={Home}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="EmployeeDetails"
        component={EmployeeDetails}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
