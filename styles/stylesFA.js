import React from "react";
import { StyleSheet } from "react-native";

const stylesFA = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fe51b0",
    },
    h1:{
        fontFamily:"Segoe Ui",
        fontSize:50,
        fontWeight:'bold',
        color:'white',
        marginTop:40,
        marginLeft:25,
    },
    p:{
        color:'white',
        fontSize:30,
        fontFamily:'Segoe Ui',
        fontWeight:'bold',
        marginTop:20,
        marginLeft:25,
    },
    info:{
        justifyContent:'center',
        alignItems:'center',
    },
    div:{
        width:180,
        height:64,
        backgroundColor:"#ffbbe0",
        borderRadius:30,
        marginTop:30,
    },
    divTxt:{
        fontFamily:"Segoe Ui",
        color:'white',
        textAlign:'center',
        marginTop:15,
        fontSize:25,
        fontWeight:'bold',
    },
    infoTxt:{
        fontFamily:"Segoe Ui",
        color:"white",
        fontSize:30,
        marginTop:10,
        textAlign:"center",
    },
    btn:{
        width:380,
        height:60,
        backgroundColor:'white',
        borderRadius:10,
        marginTop:50,
        alignSelf:'center',
        alignItems:'center',
    },
    btnTxt:{
        fontSize:25,
        fontFamily:"Segoe Ui",
        fontWeight:"bold",
        marginTop:12,
        color:"#fe51b0",
    }
})

export default stylesFA;