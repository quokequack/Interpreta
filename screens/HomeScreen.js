import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../styles/styles";
import stylesHS from "../styles/stylesHS";


export default function HomeScreen({navigation}){
    return(
        <View style={stylesHS.container}>
            <View style={stylesHS.texts}>
                <Text style={stylesHS.h1}>|Bem-vindo ao INTERPRETA!</Text>
                <Text style={stylesHS.p}>O melhor app para te ajudar na interpretação de texto!</Text>
            </View>
            <View style={stylesHS.buttons}>
                <TouchableOpacity style={stylesHS.btn} onPress={()=> navigation.navigate("SignUp")}>
                    <Text style={stylesHS.btnTxt}>Cadastro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHS.btn} onPress={()=> navigation.navigate('SignIn')}>
                    <Text style={stylesHS.btnTxt}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}