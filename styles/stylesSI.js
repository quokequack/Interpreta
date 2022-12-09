import React from "react";
import { StyleSheet } from "react-native";

const stylesSI = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FD7A39',
    },
    h1:{
        color:"white",
        fontSize:50,
        fontFamily:"Segoe Ui",
        fontWeight:'bold',
        marginTop:40,
        marginLeft:25,
    },
    form:{
        marginTop:50,
    },
    inputTxt:{
        fontFamily:'Segoe Ui',
        color:'white',
        fontWeight:'bold',
        fontSize:25,
        marginLeft:32,
        marginTop:20,
    },
    inputBox:{
        width:350,
        height:61,
        backgroundColor:'white',
        marginLeft:32,
        borderRadius:10,
        marginTop:20,
        fontFamily:'Segoe Ui',
        fontSize:25,
        color:"#feccb4",
        fontWeight:'bold',
    },
    buttons:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:60,
    },
    btn:{
        width:250,
        height:68,
        backgroundColor:'white',
        borderRadius:10,
    },
    p:{
        fontFamily:"Segoe Ui",
        color:'white',
        fontSize:25,
        textAlign:'center',
        marginTop:100,
        marginBottom:20,
    },
    btnTxt:{
        color:'#FD7A39',
        fontFamily:"Segoe Ui",
        fontSize:25,
        textAlign:'center',
        marginTop:15,
        fontWeight:"bold",
    }
});

export default stylesSI;