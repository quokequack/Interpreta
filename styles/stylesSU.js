import React from "react";
import { StyleSheet } from "react-native";

const stylesSU = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#07bdff",
    },
    h1:{
        fontFamily:'Segoe Ui',
        fontWeight:'bold',
        fontSize:50,
        color:'white',
        marginLeft:25,
        marginTop:40,
    },
    form:{
        marginTop:40,
    },
    inputTxt:{
        fontSize:25,
        color:'white',
        fontFamily:'Segoe Ui',
        marginLeft:30,
        marginTop:20,
    },
    txtBox:{
        width:350,
        height:61,
        backgroundColor:'white',
        borderRadius:10,
        marginLeft:30,
        marginTop:20,
        fontSize:25,
        color:"#ade9ff",
        fontWeight:'bold',
    },
    buttons:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
    },
    p:{
        fontSize:25,
        fontFamily:'Segoe Ui',
        color:'white',
        marginTop:60,
    },
    signBtn:{
        width:250,
        height:68,
        backgroundColor:'white',
        borderRadius:10,
        alignItems:'center',
        marginTop:20,
    },
    btnTxt:{
        fontSize:25,
        fontWeight:'bold',
        fontFamily:'Segoe Ui',
        marginTop:15,
        color:'#07bdff',
    }
});

export default stylesSU;