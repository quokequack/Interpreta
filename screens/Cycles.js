import 'react-native-gesture-handler';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';


export default function Cycles({navigation}){
  return(
    <View style={styles.view}>
      <View style={styles.texts}>
        <Text style={styles.h1}>|INTERPRETA</Text>
        <Text style={styles.cyclesTxt}>CICLOS</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity name="lock"style={styles.cycleBtn} onPress={()=> navigation.navigate('Cycle1')}>
        <Text style={styles.btnTxt}>Ciclo 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cycleBtn}>
        <Text style={styles.btnTxt}>Ciclo 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cycleBtn}>
        <Text style={styles.btnTxt}>Ciclo 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cycleBtn}>
        <Text style={styles.btnTxt}>Ciclo 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cycleBtn}>
          <Text style={styles.btnTxt}>Ciclo 5</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

