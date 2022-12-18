import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import styles from '../Interpreta/styles/styles';
 
export default function Reading() {
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
      <TouchableOpacity style={[{backgroundColor: (num==1)?"#FF2C2C":"#ffffff"},stylesRe.BtWord1]} onPress={() => {(num==4)?setNum(1):setNum(num);}}>
        <Text style={[{color: (num==1)?"#ffffff":"#FD7A39"},stylesRe.choice]}>Satisfação com a tristeza alheia.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[{backgroundColor: (num==2)?"#FF2C2C":"#ffffff"},stylesRe.BtWord2]}>
        <Text style={[{color: (num==2)?"#ffffff":"#FD7A39"},stylesRe.choice]} onPress={() => {(num==4)?setNum(2):setNum(num);}} >Sofra sozinho.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[{backgroundColor: (num==3||num==1||num==2)?"#00C69E":"#ffffff"},stylesRe.BtWord3]}>
        <Text style={[{color: (num==3||num==1||num==2)?"#ffffff":"#FD7A39"},stylesRe.choice]} onPress={() => {(num==4)?setNum(3):setNum(num);}} >Todos podem chorar.</Text>
      </TouchableOpacity>
    </View>
    <View style={stylesRe.move}>
    <TouchableOpacity style={stylesRe.bola}></TouchableOpacity>
    <TouchableOpacity style={stylesRe.bola}></TouchableOpacity>
    <TouchableOpacity style={stylesRe.bola}></TouchableOpacity>
    </View>
</View>
  );
}
 
const stylesRe = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E45F',
    justifyContent: "center",
  },linha:{
    width: "auto",
    height: "auto",
    margin:25,
    paddingBottom: 25,
    borderBottomWidth: 5,
    borderBottomColor: "#ffffff",
  },container2: {
    flex: 1,
    flexWrap: "wrap",
    margin:30,
    justifyContent:"space-between",
    flexDirection: "column",
    backgroundColor: '#F5E45F',
  },h1:{
    fontFamily:"Segoe Ui",
    fontSize:50,
    fontWeight:'bold',
    color:'white',
    marginTop:40,
    marginLeft:25,
},p:{
  color:'white',
  fontSize:30,
  fontFamily:'Segoe Ui',
  fontWeight:'bold',
  marginTop:20,
  marginLeft:25,
},infoTxt:{
  fontFamily:"Segoe Ui",
  color:"white",
  fontSize:30,
  marginTop:10,
  textAlign:"left",
},txt:{
  fontFamily:"Segoe Ui",
  color:"white",
  fontSize:30,
  textAlign:"center",
},
BtWord1:{
  width:260,
  height:"auto",
  //backgroundColor: '#ffffff',
  textAlign:"center",
  borderRadius: 10,
}, BtWord2:{
  width:260,
  height:64,
  //backgroundColor: '#ffffff',
  textAlign:"center",
  borderRadius: 10,
},BtWord3:{
  width:260,
  height:64,
  //backgroundColor: '#ffffff',
  textAlign:"center",
  borderRadius: 10,
},choice:{
  fontFamily:"Segoe Ui",
  //color:'#FD7A39',
  textAlign:'center',
  marginTop:15,
  fontSize:25,
},negrito:{
  fontWeight: "bold",
},bola:{
  height: 10,
  width: 10,
  backgroundColor: "#ffffff",
  borderRadius: 10,
}, move:{
  flex: 0.1,
  justifyContent: "center",
  flexDirection: "row",
}
});
