import React,{ Component } from 'react';
import {View, Text,StyleSheet} from 'react-native';
import ListaPlana from './components/flatlist';
import Modal from './components/modal';

export default function App(){
  return(
    <View>
      <View style ={estilos.conteiner}>
      <Text style = {estilos.tituloText}> Renan Marcolino Kesper - ADO 1</Text>
      </View>
      <Modal/>
      </View>

    );
}
const estilos = StyleSheet.create({
  tituloText:{
    fontSize:30,
    color:'black',
},
conteiner:{
  flex:1,
  backgroundColor:'white',
  alignItems: 'center',
  justifyContent:'top'
}
})