import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
const { height } = Dimensions.get('window')
 
const Modal = ({ show, close ,nome,classe,definicao}) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  })
 
  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100 }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
    ]).start()
  }
 
  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300 }),
      Animated.timing(state.container, { toValue: height, duration: 100 })
    ]).start()
  }
 
  useEffect(() => {
    if(show){
      openModal()
    }else{
      closeModal()
    }
  }, [show])
 
  return( 
    <Animated.View 
      style={[styles.container, {
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ]
      }]}
    >
      <Animated.View 
        style={[styles.modal, {
          transform: [
            { translateY: state.modal }
          ]
        }]}
      >
        <View style={styles.indicator} />
 
        <Text style={styles.text}>
          <Text style={styles.title}>{nome}</Text> 
          <Text style={styles.sub}>{classe}</Text>
          {definicao}
        </Text>
 
 
        <TouchableOpacity style={styles.btn} onPress={close}>
          <Text style={styles.txtBtn}>Voltar</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    position: 'absolute',
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '50%',
    backgroundColor: '#FE51B0',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 10
  },
  text: {
    marginTop: 50,
    textAlign: 'center',
    color: "#fff",
    fontSize:30,
    fontFamily:'Segoe Ui',
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },txtBtn: {
    color:'#FE51B0',
    fontSize:30,
    fontFamily:'Segoe Ui',
    alignContent:"center"
  },title:{
    color:'#white',
    fontSize:30,
    fontFamily:'Segoe Ui',
    fontWeight:'bold',
    alignContent:"center",
    display:"block",
  },sub: {
    color:'#white',
    fontSize:30,
    fontFamily:'Segoe Ui',
    fontStyle: "italic",
    display:"block",
    alignContent:"center"
    }
})

export default Modal;