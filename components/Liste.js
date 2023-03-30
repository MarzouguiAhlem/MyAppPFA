import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground} from 'react-native';


export default function Liste  () {
  
  const Items = [{name:'personel informations'}, {name:'2'},{name:'3'}, 
  {name:'4'},{name:'5'}, {name:'6'},{name:'7'}, 
  {name:'8'},{name:'9'}, {name:'10'}];

  const renderItem = ({ item }) => <Item name={item.name} />;
  
  const Item = ({ name }) => (
    <View style={menuStyles.innerContainer}>
      <TouchableOpacity style={menuStyles.button}>
        <Text style={menuStyles.itemText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <ImageBackground
      style={menuStyles.background}
      source={require('./img/back4.png')}
    >
      <View style={menuStyles.container}>
      <FlatList
        data={Items}
        renderItem={renderItem}>
      </FlatList>
    </View>
    </ImageBackground>
    
  );
};


const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#3A506B'
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'column',
   justifyContent: 'space-between',
  
  },
  itemText: {
    color: '#c2bccf',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  button: {
  //backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});;