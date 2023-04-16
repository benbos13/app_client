import { StatusBar } from 'expo-status-bar';
import { Text, View, } from 'react-native';
import {styles} from '../Styles'

export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text>Accueil</Text>
        <StatusBar style="auto" />
      </View>
    );
  }