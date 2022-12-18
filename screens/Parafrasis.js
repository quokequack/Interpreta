import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import styles from '../Interpreta/styles/styles';
 
 
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
      <TouchableOpacity style={[{backgroundColor: !(Num==1)?"#ffffff":"#FF2C2C"}, stylesPa.BtWord1]}  onPress={() => {(Num==5)?setNum(1):setNum(Num);}}>
        <Text style={[stylesPa.choice,{color: !(Num==1)?"#FD7A39":"#ffffff"}]}>Alegre</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[{backgroundColor: !(Num==2||Num==1||Num==3||Num==4)?"#ffffff":"#00C69E"}, stylesPa.BtWord1]} onPress={() => {(Num==5)?setNum(2):setNum(Num);}}>
        <Text style={[stylesPa.choice,{color: !(Num==2||Num==1||Num==3||Num==4)?"#FD7A39":"#ffffff"}]}>Implacável</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[{backgroundColor: !(Num==3)?"#ffffff":"#FF2C2C"}, stylesPa.BtWord3]} onPress={() => {(Num==5)?setNum(3):setNum(Num);}}>
        <Text style={[stylesPa.choice,{color: !(Num==3)?"#FD7A39":"#ffffff"}]}>Bom</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[{backgroundColor: !(Num==4)?"#ffffff":"#FF2C2C"}, stylesPa.BtWord4]} onPress={() => {(Num==5)?setNum(4):setNum(Num);}}>
        <Text style={[stylesPa.choice,{color: !(Num==4)?"#FD7A39":"#ffffff"}]}> Ruim</Text>
      </TouchableOpacity>
    </View>
</View>
  );
}
 
 
const stylesPa = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FD7A39',
    justifyContent: "center",
  },linha:{
    width: "auto",
    height: "auto",
    margin:5,
    paddingBottom: 10,
    borderBottomWidth: 5,
    borderBottomColor: "#ffffff",
  },container2: {
    flex: 1,
    flexWrap: "wrap",
    margin:30,
    justifyContent:"space-between",
    flexDirection: "column",
    backgroundColor: '#FD7A39',
    justifyItem: "center",
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
  marginLeft: 25,
  textAlign:"left",
},BtWord1:{
  width:260,
  height:64,
  //backgroundColor: color,
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
  //backgroundColor: color,
  textAlign:"center",
  borderRadius: 10,
},BtWord4:{
  width:260,
  height:64,
  //backgroundColor: color,
  textAlign:"center",
  borderRadius: 10,
  
},choice:{
  fontFamily:"Segoe Ui",
  color:'#FD7A39',
  textAlign:'center',
  marginTop:15,
  fontSize:25,
},negrito:{
  fontWeight: "bold",
}
});
