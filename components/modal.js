import React,{useState} from 'react';
import {View,Text,Button, Modal,StyleSheet} from 'react-native';
import Fl from './flatlist'
export default function(props){

  const[visivel,setVisivel]=useState(false)


  return(
    <View>
    <Modal
      animationType="slide"
      transparent={true}
      visible={visivel}
    >
    <View style={estilos.modal}>
        <Fl/>
        <Button
            title ="Fechar"
            onPress={()=>{setVisivel(false)}}
        />
    </View>
    </Modal>
    <Button
        title="Mostrar"
            onPress={()=>{setVisivel(true)}}
            />
  </View>
  )
}

const estilos =StyleSheet.create({
  modal:{
    backgroundColor:'black',
    margin:20,
    padding: 20,
    borderRadius:20,
    elevation:10
  },
  textoModal:{
    color:'white'

  }


})