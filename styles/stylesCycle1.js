import { StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const stylesCycle1 = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#07bdff',
    },
    h1:{
        fontSize:40,
        fontFamily:"Segoe Ui",
        fontWeight:'bold',
        marginTop:30,
        marginLeft:10,
        color:'white',
    },
    texts:{
        flexDirection: "row",
        marginTop:23,
        display:'inline-block',
    },
    cycle:{
        fontFamily:'Segoe Ui',
        fontSize:30,
        fontWeight:"bold",
        marginTop:30,
        marginLeft:30,
        color:'white',
        flex: 1,
    },
    level:{
        fontFamily:'Segoe Ui',
        fontSize:30,
        fontWeight:'bold',
        marginLeft:150,
        marginRight:30,
        color:'white',
        flex: 1,
    },
    buttons:{
        marginTop:60,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#07bdff',
    },
   
    btn:{
        width:400,
        heigth:200,
    },
    btn2:{
        width:400,
        heigth:200,
    },
    btn3:{
        width:400,
        heigth:200,
    },
    btnTxt:{
        fontSize:40,
        textAlign:'center',
        fontFamily:"Segoe Ui",
        fontWeight:'bold',
        color:'white',
    },linha:{
      width: "90%",
      margin: "20%",
      borderBottomWidth: 3,
      borderBottomColor: "#ffffff",
    }
  });

export default stylesCycle1;