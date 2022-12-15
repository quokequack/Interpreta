import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import stylesHP from "../styles/stylesHP";

export default function HomePage({navigation}){
    
    async function Logout(){
        await firebase.auth().signOut();
        navigation.reset({
            index:0,
            routes:[{name:'Login'}]
        });
        alert("Deslogado com sucesso!");
    }
    return(
        <View style={stylesHP.container}>
            <Text style={stylesHP.h1}>|Interpreta.</Text>
            <Text style={stylesHP.p}>Bem-vindo!</Text>
            <View style={stylesHP.cycle}>
                <View style={stylesHP.texts}>
                  <Text style={stylesHP.txtCycle}>
                    Ciclo atual:
                  </Text>
                  <TouchableOpacity style={stylesHP.allCycles} onPress={()=>navigation.navigate("Cycles")}>
                    <Text style={stylesHP.txtCycles}>Todos os ciclos</Text>
                  </TouchableOpacity>
                </View>
                <View style={stylesHP.btns}>
                  <TouchableOpacity style={stylesHP.CurrCycle}>
                    <Text style={stylesHP.txtCycleBtn}>1</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={stylesHP.lessons}>
                <Text style={stylesHP.txtLessons}>Últimas Lições:</Text>
                <TouchableOpacity style={stylesHP.btnLessons}>
                    <Text style={stylesHP.btnTxt}>Paráfrase Nv.1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHP.btnLessons}>
                    <Text style={stylesHP.btnTxt}>Dicionário Nv.1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHP.btnLessons}>
                    <Text style={stylesHP.btnTxt}>Interpretação Nv.1</Text>
                </TouchableOpacity>
                <Text style={stylesHP.txtLessons}>Próximas Lições:</Text>
                <TouchableOpacity style={stylesHP.btnLessons}>
                    <Text style={stylesHP.btnTxt}>Paráfrase Nv.2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHP.btnLessons}>
                    <Text style={stylesHP.btnTxt}>Dicionário Nv.2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesHP.btnLessons}>
                    <Text style={stylesHP.btnTxt}>Interpretação Nv.2</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={stylesHP.logout} onPress={Logout}>
                <Text style={stylesHP.btnLogTxt}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}