import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import stylesPa from "../styles/stylesPa";
 
 
let color = "#ffffff";
export default function Parafrasis(props) {
  const [Num, setNum] = useState(5);
function muda() {
  return color="#ff0000";
}
  return (
<View style={stylesPa.container}>
    <Text style={stylesPa.h1}>|Interpreta.</Text>
    <Text style={stylesPa.p}>PARÁFRASE</Text>
    <View style={stylesPa.linha}>
      <Text style={stylesPa.infoTxt}>Qual palavra pode substituir a destacada?</Text>
    </View>
    <Text style={stylesPa.infoTxt}>"João é <Text style={stylesPa.negrito}>ferrenho</Text> no futebol."</Text>
    <View style={stylesPa.container2}>
      <TouchableOpacity style={[{backgroundColor: !(Num==1)?"#ffffff":"#FF2C2C"}, stylesPa.BtWord1]}  onPress={() => {(true)?setNum(1):setNum(Num);}}>
        <Text style={[stylesPa.choice,{color: !(Num==1)?"#FD7A39":"#ffffff"}]}>Alegre</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[{backgroundColor: !(Num==2||Num==1||Num==3||Num==4)?"#ffffff":"#00C69E"}, stylesPa.BtWord1]} onPress={() => {(true)?setNum(2):setNum(Num);}}>
        <Text style={[stylesPa.choice,{color: !(Num==2||Num==1||Num==3||Num==4)?"#FD7A39":"#ffffff"}]}>Implacável</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[{backgroundColor: !(Num==3)?"#ffffff":"#FF2C2C"}, stylesPa.BtWord3]} onPress={() => {(true)?setNum(3):setNum(Num);}}>
        <Text style={[stylesPa.choice,{color: !(Num==3)?"#FD7A39":"#ffffff"}]}>Bom</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[{backgroundColor: !(Num==4)?"#ffffff":"#FF2C2C"}, stylesPa.BtWord4]} onPress={() => {(true)?setNum(4):setNum(Num);}}>
        <Text style={[stylesPa.choice,{color: !(Num==4)?"#FD7A39":"#ffffff"}]}> Ruim</Text>
      </TouchableOpacity>
    </View>
</View>
  );
}