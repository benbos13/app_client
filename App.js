import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import MyTabs from './MyApp/MyTabs';






// const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}



export default App;
