import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import Modal from "./Modal";

export default function Dictionary(props) {
  const [modal, setModal] = useState(false);
  const [num, setNum] = useState(0);
  let palavras =["SOLITUDE","FERRENHO","MODULAR","INSALUBRE","SALUTAR","EXÍCIO","DETURPAÇÃO","NÓDOA"];
  let classes = ["substantivo","adjetivo","verbo","adjetivo","ajetivo","substantivo","substantivo","substantivo"]
  let definicoes =["Afã e diligência em tratar, alcançar ou conseguir algum fim.",
  "Semelhante à duro, implacável, com severidade.",
  "Cantar ou tocar consoante as regras da harmonia.","Que não é bom para a saúde; malsão, deletério.","1.Benéfico para a saúde; 2.fortificante.","Condição do que ou de quem se arruinou; dano, estrago, prejuízo.","Desfiguração, conspurcação, mancha, adulteração, vício.","Sinal deixado por um corpo que suja mancha."]
  
  return (
 
<View style={stylesDi.container}>
    <Text style={stylesDi.h1}>|Interpreta.</Text>
    <Text style={stylesDi.p}>DICIONÁRIO</Text>
    <Text style={stylesDi.infoTxt}>Aprenda o significado das palavras!</Text>
    <View style={stylesDi.container2}>
        <View style={stylesDi.caixa1}>
        <View style={stylesDi.subcaixa1}>
      <TouchableOpacity style={stylesDi.BtWord1} onPress={() => setModal(true)} onPressOut={() => setNum(0)}>
        <Text style={stylesDi.word}>SOLITUDE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesDi.BtWord3} onPress={() => setModal(true)} onPressOut={() => setNum(2)}>
        <Text style={stylesDi.word}>MODULAR</Text>
      </TouchableOpacity>
      </View>
      <View style={stylesDi.subcaixa2}>
      <TouchableOpacity style={stylesDi.BtWord2} onPress={() => setModal(true)} onPressOut={() => setNum(1)}>
        <Text style={stylesDi.word}>FERRENHO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesDi.BtWord4} onPress={() => setModal(true)} onPressOut={() => setNum(3)}>
        <Text style={stylesDi.word}>INSALUBRE</Text>
      </TouchableOpacity>
      </View>
      </View>
      <View style={stylesDi.caixa2}>
          <View style={stylesDi.subcaixa3}>
      <TouchableOpacity style={stylesDi.BtWord5} onPress={() => setModal(true)} onPressOut={() => setNum(4)}>
        <Text style={stylesDi.word}>SALUTAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesDi.BtWord6} onPress={() => setModal(true)} onPressOut={() => setNum(5)}>
        <Text style={stylesDi.word}>EXÍCIO</Text>
      </TouchableOpacity>
      </View>
      <View style={stylesDi.subcaixa4}>
      <TouchableOpacity style={stylesDi.BtWord7} onPress={() => setModal(true)} onPressOut={() => setNum(6)}>
        <Text style={stylesDi.word}>DETURPAÇÃO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylesDi.BtWord8} onPress={() => setModal(true)} onPressOut={() => setNum(7)}>
        <Text style={stylesDi.word}>NÓDOA</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
    <Modal
    nome={palavras[num]}
    classe={classes[num]}
    definicao={definicoes[num]}
    show={modal}
    close={() => setModal(false)}
    />
</View>
  );
}
 
const stylesDi = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FE51B0',
  },container2: {
    flex: 1,
    marginTop:30,
    justifyContent:"center",
    backgroundColor: '#FE51B0',
  },caixa1:{
      flex: 1,
      flexDirection:"row",
  },subcaixa1:{
    flex: 1,
    flexDirection:"Column",
  },subcaixa2:{
      flex: 2,
      flexDirection:"Column"
  },caixa2:{
    flex: 1,
    flexDirection:"column",
},subcaixa3:{
  flex: 2,
  flexDirection:"row",
},subcaixa4:{
    flex: 1,
    flexDirection:"row"
},
  h1:{
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
    flex: 1,
  backgroundColor:"#F5E45F",
  textAlign:"center",
  justifyContent: "center",
}, BtWord2:{
  flex: 2,
  backgroundColor:"#00C69E",
  textAlign:"center",
  justifyContent: "center",
},BtWord3:{
    flex: 2,
  backgroundColor:"#E2C1F3",
  textAlign:"center",
  justifyContent: "center",
},BtWord4:{
    flex: 1,
  backgroundColor:"#FD7A39",
  textAlign:"center",
  justifyContent: "center",
}, BtWord5:{
    flex:2,
  backgroundColor: "#FFBBE0",
  textAlign:"center",
  justifyContent: "center",
},BtWord6:{
    flex: 1,
 
  backgroundColor:"#F5E45F",
  textAlign:"center",
  justifyContent: "center",
},BtWord7:{
    flex: 1,
  backgroundColor:"#00C69E",
  textAlign:"center",
  justifyContent: "center",
}, BtWord8:{
    flex:1,
  backgroundColor:"#FD7A39",
  textAlign:"center",
  justifyContent: "center",
},word:{
  fontFamily:"Segoe Ui",
  color:'white',
  textAlign:'center',
  marginTop:15,
  fontSize:25,
  fontWeight:'bold',
},
});
