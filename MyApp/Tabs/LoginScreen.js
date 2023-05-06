import { Pressable , Text, TextInput, View, SafeAreaView } from 'react-native';
import { Divider} from 'react-native-paper';
import {styles} from '../Styles';



export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style ={styles.login}>
      <View style ={styles.login_container}>
        {/* <Text style = {{color: "black", fontSize: 100}}>Se connecter</Text>
        <Divider style={{color:"black"}}/> */}
        <TextInput
          style={styles.input}
          placeholder="Adresse email"
          inputMode='email'
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
        />
        <Pressable 
          type="submit"
          style={styles.button} 
          onPress={() => navigation.navigate('MyTabs')}  
        >
          <Text style ={{color:"white"}}>Se connecter</Text>
        </Pressable> 
      </View>
    </SafeAreaView> 
  );
}