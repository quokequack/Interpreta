import React from "react";
import firebase from "../src/firebaseConnection";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import stylesSI from "../styles/stylesSI";
import { useState } from "react";

export default function SignIn({navigation}){

    const [showValue, setShowValue] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function Login(){
        await firebase.auth().signInWithEmailAndPassword(email, password).then((value)=>{
            navigation.reset({
                index:0,
                routes: [{name:"HomePage"}]
            });
        })
        .catch((error)=>{
        setErrorText("Algo deu errado. Tente novamente.");
        setShowValue(true);
        return;
        })
    }
    return(
        <View style={stylesSI.container}>
            <Text style={stylesSI.h1}>|INTERPRETA.</Text>
            {showValue? <Text style={stylesSI.errorMessage}>{errorText}</Text>:null}
            <View style={stylesSI.form}>
                <Text style={stylesSI.inputTxt}>Email</Text>
                <TextInput style={stylesSI.inputBox} onChangeText={(email) => setEmail(email)}></TextInput>
                <Text style={stylesSI.inputTxt}>Senha</Text>
                <TextInput secureTextEntry={true} style={stylesSI.inputBox} onChangeText={(password) => setPassword(password)}></TextInput>
                <View style={stylesSI.buttons}>
                  <TouchableOpacity style={stylesSI.btn} onPress={Login}>
                    <Text style={stylesSI.btnTxt}>Entrar</Text>
                  </TouchableOpacity>
                  <Text style={stylesSI.p}>Ainda não tem uma conta?</Text>
                  <TouchableOpacity style={stylesSI.btn} onPress={()=>navigation.navigate("SignUp")}>
                    <Text style={stylesSI.btnTxt}>Criar Conta</Text>
                  </TouchableOpacity>
                  </View>
            </View>
        </View>
    )
}