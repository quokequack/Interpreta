import React from "react";
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#00c69e'
    },
    h1:{
        fontSize:40,
        fontFamily:'Segoe Ui',
        fontWeight:'bold',
        marginTop:30,
        marginLeft:10,
        color:'white',

    },
    cyclesTxt:{
        color:'white',
        fontSize:40,
        fontFamily:'Segoe Ui',
        marginTop:30,
        marginLeft:30,
        fontWeight:'bold',
    },
    buttons:{
        justifyContent:'center',
        alignItems:'center',
    },
    cycleBtn:{
        backgroundColor:'#b2eee2',
        marginTop:40,
        width:350,
        height:100,
        borderRadius:10,
    },
    btnTxt:{
        color:'white',
        fontSize:35,
        fontFamily:'Segoe Ui',
        fontWeight:'bold',
        marginTop:25,
        marginLeft:15,
    },
    backBtn:{
        backgroundColor:'white',
        flex: "row",
        width:60,
        height:38,
        marginTop: 38,
        marginLeft:340,
        position:'absolute',
        borderRadius: 100,
        alignItems: "Center",
        alignContent: "center",
        justifyContent: "center"
    },
    backBtnTxt:{
        fontFamily: "Segoe Ui",
        fontWeight: "bold",
        color: "#00c69e"
    },
    errorMessage:{
        fontFamily:"Segoe Ui",
        fontWeight:'bold',
        color:'#ff9ca1',
        textAlign:'center',
        fontSize:25,
    },
})

export default styles;