import React from "react";
import { StyleSheet } from "react-native";

const stylesHS = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#00c69e',
    },
    texts:{
        alignItems:'center',
        justifyContent:"center",
    },
    h1:{
        fontSize:50,
        fontFamily:"Segoe Ui",
        fontWeight:'bold',
        marginTop:37,
        marginLeft:35,
        color:'white',
    },
    p:{
        fontSize:35,
        fontFamily:'Segoe Ui',
        color:'white',
        marginTop:100,
        marginLeft:35,
    },
    buttons:{
        marginTop:100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    btn:{
        width:356,
        height:68,
        backgroundColor:'white',
        marginTop:25,
        borderRadius:10,
    },
    btnTxt:{
        textAlign:'center',
        marginTop:10,
        fontSize:30,
        fontFamily:'Segoe Ui',
        fontWeight:"bold",
        color:'#00c69e',
    },
});

export default stylesHS;