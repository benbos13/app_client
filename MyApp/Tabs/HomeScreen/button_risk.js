import { Pressable, Text} from 'react-native';
import { AntDesign} from '@expo/vector-icons'
import { styles} from '../../Styles';

export default function button_risk({navigation}) {
    return(
        <Pressable
        style={styles.button_risk}
        onPress={() => navigation.navigate('Signaler un risque')}
        // onPress={this.takePicture}
        >
            <Text style={styles.text_button_risk}><AntDesign name="warning" size={16} color={'#fff'} />{"\n"}Signaler un risque </Text>
        </Pressable>)
}