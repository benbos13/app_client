import { Pressable , Text, TextInput, View, SafeAreaView, Button} from 'react-native';
import {styles} from '../Styles';



export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style ={styles.login}>
      <View style={styles.login}>
        <TextInput
          style={styles.input}
          placeholder="email"
        />
        <TextInput
          style={styles.input}
          placeholder="mot de passe"
        />
      </View>
      <Pressable 
        style={styles.button} 
        onPress={() => navigation.navigate('MyTabs')}  
      >
        <Text style ={{color:"white"}}>Se connecter</Text>
    </Pressable> 
    </SafeAreaView> 
  );
}