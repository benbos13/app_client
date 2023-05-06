import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Mycamera} from './Employe/Tabs/HomeScreen/Report/Report' 
import {ImageScreen}  from './Employe/Tabs/HomeScreen/Report/ImageScreen'
import MyTabs from './Employe/MyTabs';
import LoginScreen from './Employe/LoginScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Signaler un risque" component={Mycamera} />
        <Stack.Screen name="Photo" component={ImageScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
