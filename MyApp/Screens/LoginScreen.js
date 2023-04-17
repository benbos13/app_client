import { Pressable , Text, TextInput, View, SafeAreaView, Button} from 'react-native';
import {styles} from '../Styles';



export default function LoginScreen({ navigation }) {
    return (
      <SafeAreaView>
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
        <Button 
          style={styles.button}
          title="Submit"  
          onPress={() => navigation.navigate('MyTabs')}  
        />
      </SafeAreaView> 
    );
  }