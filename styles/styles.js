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
})

export default styles;