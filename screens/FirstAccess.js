import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import stylesFA from "../styles/stylesFA";



export default function FirstAccess({navigation}){
    return(
        <View style={stylesFA.container}>
            <Text style={stylesFA.h1}>|Interpreta.</Text>
            <Text style={stylesFA.p}>Como o INTERPRETA funciona?</Text>
            <View style={stylesFA.info}>
                <TouchableOpacity style={stylesFA.div}>
                    <Text style={stylesFA.divTxt}>CICLOS</Text>
                </TouchableOpacity>
                <Text style={stylesFA.infoTxt}>São 5 ciclos de aprendizado!</Text>
                <TouchableOpacity style={stylesFA.div}>
                    <Text style={stylesFA.divTxt}>GRUPOS</Text>
                </TouchableOpacity>
                <Text style={stylesFA.infoTxt}>Cada ciclo tem 3 grupos de tarefas</Text>
                <TouchableOpacity style={stylesFA.div}>
                    <Text style={stylesFA.divTxt}>NÍVEIS</Text>
                </TouchableOpacity>
                <Text style={stylesFA.infoTxt}>Conforme o ciclo aumenta, os níveis de dificuldade aumentam também!</Text>
            </View>
            <TouchableOpacity style={stylesFA.btn} onPress={()=>navigation.navigate("HomePage")}>
                <Text style={stylesFA.btnTxt}>Entendi!</Text>
            </TouchableOpacity>
        </View>
    )
}