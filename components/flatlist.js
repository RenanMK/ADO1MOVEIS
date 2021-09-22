import React,{useState} from 'react';
import{View,Text,FlatList,StyleSheet,Modal}  from 'react-native';

const produtos=[
    {
      id:'001',
      desc:['Caderno','15.00']
    },
    {
      id:'002',
      desc:['Livro','25.00']
    },    {
      id:'003',
      desc:['Caneta','4.00']
    },    {
      id:'004',
      desc:['Lapiseira','3.00']
    },
    {
      id:'005',
      desc:['Mochila','50.00']
    },
    {
      id:'006',
      desc:['Giz de cera','8.00']
    },    {
      id:'007',
      desc:['Grampeador','4.00']
    },    {
      id:'008',
      desc:['Régua','4.00']
    },
    {
      id:'009',
      desc:['Esquadro','8.00']
    },
    {
      id:'010',
      desc:['Lapis de cor','15.00']
    },    {
      id:'011',
      desc:['Lapis','1.00']
    },    {
      id:'012',
      desc:['Borracha','3.00']
    },

]

export default function(){
  return(
    
    <View>
        <FlatList 
            data={produtos}
            keyExtractor={item=>item.id}
            renderItem={({item})=><View style={estilos.item}><Text style={estilos.prod}>{item.desc[0]} - Valor:{item.desc[1]}</Text></View>}



        />
    </View>
  )
}

const estilos=StyleSheet.create({
  item:{
    backgroundColor:'#008',
    padding:15,
    marginVertical:8,
    marginHorizontal:16
  },
  prod:{
    fontSize:20,
    color:'white'
  }
})
