import React from "react";
import firebase from "../src/firebaseConnection";
import { View, TextInput, TouchableOpacity, Text} from "react-native";
import { useState } from "react";
import stylesSU from "../styles/stylesSU";


export default function SignUp({navigation}){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function createAccount(){
        if(name !== " " && email !== " " && password !== " "){
            let users = await firebase.database().ref("users");
            let keys = users.push().key

            users.child(keys).set({
                name: name,
                email: email,
                password: password
            })
            await firebase.auth().createUserWithEmailAndPassword(email, password).then((value)=>{
                alert("Usuário cadastrado com sucesso!");
                navigation.reset({
                    index:0,
                    routes:[{name:"FirstAccess"}]
                });
            })
            .catch((error)=>{
                if(error.code == 'auth/weak-password'){
                    alert("Sua senha deve ser mais forte!");
                    return;
                }else if(error.code === 'auth/invalid-email'){
                    alert("Coloque um email válido!");
                    return;
                }else{
                    alert("Algo deu errado. Tente novamente!!!");
                    return;
                }
            })
        }
    }
    return(
        <View style={stylesSU.container}>
            <Text style={stylesSU.h1}>|INTERPRETA.</Text>
            <View style={stylesSU.form}>
                <Text style={stylesSU.inputTxt}>Nome:</Text>
                <TextInput style={stylesSU.txtBox} onChangeText={(name)=> setName(name)}></TextInput>
                <Text style={stylesSU.inputTxt}>Email:</Text>
                <TextInput style={stylesSU.txtBox} onChangeText={(email)=> setEmail(email)}></TextInput>
                <Text style={stylesSU.inputTxt}>Senha:</Text>
                <TextInput style={stylesSU.txtBox} onChangeText={(password)=> setPassword(password)} placeholder='**********'></TextInput>
                <View style={stylesSU.buttons}>
                  <TouchableOpacity style={stylesSU.signBtn} onPress={createAccount}>
                    <Text style={stylesSU.btnTxt}>Fazer cadastro!</Text>
                  </TouchableOpacity>
                  <Text style={stylesSU.p}>Já possui cadastro?</Text>
                  <TouchableOpacity style={stylesSU.signBtn} onPress={()=> navigation.navigate('SignIn')}>
                    <Text style={stylesSU.btnTxt}>Entre!</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}