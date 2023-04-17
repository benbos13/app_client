import { Pressable, Text, View, } from 'react-native';
import {styles} from '../Styles'
import { Entypo } from '@expo/vector-icons';


export default function SettingScreen({navigation}) {
    return (
      <View style={styles.setting}>
        
        <Pressable 
          style={styles.deconnect}
          onPress={() => navigation.navigate('Login')}
        >
          
          <Text style ={styles.text_disconnect} >
            Se déconnecter
          </Text>
          <Entypo name="log-out" size={24} color="red" />
        </Pressable>
      </View>
    );
    }
