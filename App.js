import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Mycamera} from './MyApp/Tabs/HomeScreen/Report/Report' 
import {PhotoScreen}  from './MyApp/Tabs/HomeScreen/Report/PhotoScreen'
import MyTabs from './MyApp/MyTabs';
import LoginScreen from './MyApp/Tabs/LoginScreen';
import {styles} from './MyApp/Styles';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Signaler un risque" component={Mycamera} />
        <Stack.Screen name="Photo" component={PhotoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
