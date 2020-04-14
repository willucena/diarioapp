import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login'
import User from './pages/User'
import Felling from './pages/Feeling'
import Diary from './pages/Diary'


export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen  name="Login" component={Login} />
                <AppStack.Screen  name="User" component={User} />
                <AppStack.Screen  name="Felling" component={Felling} />
                <AppStack.Screen  name="Diary" component={Diary} />

            </AppStack.Navigator>
        </NavigationContainer>
    )
}
