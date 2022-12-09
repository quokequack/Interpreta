import 'react-native-gesture-handler';
import {Text, View, TouchableOpacity} from 'react-native';
import stylesCycle1 from '../styles/stylesCycle1';

export default function Cycle1({navigation}){
return(
    <View style={stylesCycle1.view}>
        <Text style={stylesCycle1.h1}>|INTERPRETA</Text>
        <View style={stylesCycle1.texts}>
            <Text style={stylesCycle1.cycle}>Ciclo 1</Text>
            <Text style={stylesCycle1.level}>Nível 1</Text>
        </View>
        <View style={stylesCycle1.buttons}>
            <TouchableOpacity style={stylesCycle1.btn} onPress={()=> navigation.navigate('Parafrasis')}>
                <Text style={stylesCycle1.btnTxt}>PARÁFRASE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesCycle1.btn2}  onPress={()=> navigation.navigate("Dictionary")}>
            <Text style={stylesCycle1.btnTxt}>DICIONÁRIO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesCycle1.btn3}onPress={()=> navigation.navigate("Reading")}>
            <Text style={stylesCycle1.btnTxt}>INTERPRETAÇÃO</Text>
            </TouchableOpacity>
        </View>
    </View>
)
}