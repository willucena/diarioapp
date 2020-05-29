import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

import Login from './pages/Login'
import User from './pages/User'
import Felling from './pages/Feeling'
import Diary from './pages/Diary'
import Response from './pages/Response'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
               <AppStack.Screen  name="Login"   component={Login}   />
               <AppStack.Screen  name="User"    component={User}    />
               <AppStack.Screen  name="Felling" component={Felling} />
               <AppStack.Screen  name="Diary"   component={Diary}   />
            </AppStack.Navigator>
        </NavigationContainer>

    )
}

export  function RoutesDrawer(){
    return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Sair" >
            <Drawer.Screen  name="Questões do Dia" component={Diary} />
            <Drawer.Screen  name="Respostas Anteriores" component={Response} />
            <Drawer.Screen  name="Acompanhamento" component={Response} />
            <Drawer.Screen  name="Sair" component={Login} />

        </Drawer.Navigator>
    </NavigationContainer>
    )

}
