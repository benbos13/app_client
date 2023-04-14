import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Accueil</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function NewsScreen() {
  return (
    <View style={styles.news}>
      <Text>Page pour suivre un signalement</Text>
    </View>
  );
}

function HSE() {
  return (
    <View style={styles.hse}>
      <Text>Page lois HSE</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.setting}>
      <Text>Paramètres</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Accueil"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Signalements"
        component={NewsScreen}
        options={{
          tabBarLabel: 'Signalements',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="report-problem" size={size} color={color} />
          ),
        }}/>
      <Tab.Screen
        name="HSE"
        component={HSE}
        options={{
          tabBarLabel: 'HSE',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="open-book" size={size} color={color} />
          ),
        }}/>
      <Tab.Screen
        name="Paramètres"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Paramètres',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setting: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  news: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  hse: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default App;
