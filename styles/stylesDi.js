import React from "react";
import { StyleSheet } from "react-native";


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
}, bottomBtn:{
  margin:10,
  display:'flex',
  flexDirection:"row",
  justifyContent:'center',
},
btn:{
  backgroundColor:'white',
  width:100,
  height:38,
  marginLeft:10,
  borderRadius:10,
  alignItems:'center',
},
btnTxt:{
  marginTop:10,
  fontFamily:'Segoe Ui',
  fontWeight:'bold',
  color:"#FE51B0",
}
});


export default stylesDi;