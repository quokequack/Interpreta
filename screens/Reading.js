import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import stylesRe from '../styles/stylesRe';
 
export default function Reading({navigation}) {
  const [num, setNum] = useState(4);
 
  return (
 
<View style={stylesRe.container}>
    <Text style={stylesRe.h1}>|Interpreta.</Text>
    <Text style={stylesRe.p}>INTERPRETAÇÃO</Text>
    <View style={stylesRe.linha}>
      <Text style={stylesRe.infoTxt}>O que o autor quis mencionar no texto abaixo?</Text>
    </View>
    <Text style={stylesRe.txt}>"O choro é livre."</Text>
    <View style={stylesRe.container2}>
      <TouchableOpacity style={[{backgroundColor: (num==1)?"#FF2C2C":"#ffffff"}, stylesRe.BtWord1]} onPress={() => {(num==4)?setNum(1):setNum(num);}}>
        <Text style={[{color: (num==1)?"#ffffff":"#FD7A39"},stylesRe.choice]}>Satisfação com a tristeza alheia.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[{backgroundColor: (num==2)?"#FF2C2C":"#ffffff"}, stylesRe.BtWord2]}>
        <Text style={[{color: (num==2)?"#ffffff":"#FD7A39"},stylesRe.choice]} onPress={() => {(num==4)?setNum(2):setNum(num);}} >Sofra sozinho.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[{backgroundColor: (num==3||num==1||num==2)?"#00C69E":"#ffffff"}, stylesRe.BtWord3]}>
        <Text style={[{color: (num==3||num==1||num==2)?"#ffffff":"#FD7A39"},stylesRe.choice]} onPress={() => {(num==4)?setNum(3):setNum(num);}} >Todos podem chorar.</Text>
      </TouchableOpacity>
    </View>
    
    <View style={stylesRe.bottomBtn}>
      <TouchableOpacity style={stylesRe.btn} onPress={()=> navigation.navigate('Dictionary')}>
        <Text style={stylesRe.btnTxt}>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesRe.btn} onPress={()=> navigation.navigate('Cycles')}>
        <Text style={stylesRe.btnTxt}>Próximo</Text>
      </TouchableOpacity>
    </View>
</View>
  );
}