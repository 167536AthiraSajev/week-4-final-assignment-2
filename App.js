
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen,GeoLocationScreen,ImagePickerScreen,AddNewGoalScreen } from './src/screens'
import {decode, encode} from 'base-64'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


import { auth, createUserProfileDocument } from './src/firebase/config';


if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { 
        
        user ? (
          <>
          <Stack.Screen name="Home">
          {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
          </>
        ) : (
        
        
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} /> 
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="GeoLocationScreen" component={GeoLocationScreen} />
            <Stack.Screen name="AddNewGoalScreen" component={AddNewGoalScreen} />
            <Stack.Screen name="ImagePickerScreen" component={ImagePickerScreen} />        
          </>

        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
