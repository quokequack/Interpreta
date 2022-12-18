import React from "react";
import { StyleSheet } from "react-native";

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
    backgroundColor: '#ffffff',
    textAlign:"center",
    borderRadius: 10,
  }, BtWord2:{
    width:260,
    height:64,
    backgroundColor: '#ffffff',
    textAlign:"center",
    borderRadius: 10,
  },BtWord3:{
    width:260,
    height:64,
    backgroundColor: '#ffffff',
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

export default stylesRe;