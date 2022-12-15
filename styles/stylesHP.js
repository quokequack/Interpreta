import React from "react";
import { StyleSheet } from "react-native";

const stylesHP = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f5e45f"
    },
    h1:{
        fontFamily:'Segoe Ui',
        fontWeight:'bold',
        fontSize:50,
        color:'white',
        marginLeft:33,
        marginTop:30,
    },
    p:{
        fontFamily:"Segoe Ui",
        fontSize:35,
        color:'white',
        marginLeft:33,
        marginTop:10,
    },
    txtCycle:{
        color:'white',
        fontSize:35,
        fontFamily:"Segoe Ui",
        fontWeight:'bold',
        marginLeft:33,
        marginTop:27,
    },
    allCycles:{
    },
    txtCycles:{
        fontSize:20,
        fontFamily:"Segoe Ui",
        color:'white',
        marginLeft:33,
    },
    cycle:{
        display:'flex',
        flexDirection:'row',
    },
    CurrCycle:{
        marginTop:20,
        marginLeft:50,
        backgroundColor:'white',
        width:110,
        height:110,
        borderRadius:50,
    },
    txtCycleBtn:{
        fontSize:50,
        color:"#f5e45f",
        fontFamily:"Segoe Ui",
        fontWeight:'bold',
        textAlign:"center",
        marginTop:20,
    },
    lessons:{
        marginTop:30,
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
    },
    txtLessons:{
        marginTop:10,
        fontFamily:'Segoe Ui',
        fontWeight:'bold',
        fontSize:30,
        color:'white',

    },
    btnLessons:{
        width:330,
        height:74,
        backgroundColor:'white',
        marginTop:20,
        borderRadius:10,
    },
    btnTxt:{
        fontSize:30,
        fontFamily:'Segoe Ui',
        fontWeight:'bold',
        textAlign:'center',
        marginTop:15,
        color:"#f5e45f",
    },
    logout:{
        backgroundColor:'white',
        width:200,
        height:60,
        alignSelf:'center',
        marginTop:20,
        marginBottom:10,
        borderRadius:10,
    },
    btnLogTxt:{
        fontSize:25,
        textAlign:'center',
        marginTop:10,
        color:"#f5e45f",
    }
});

export default stylesHP;