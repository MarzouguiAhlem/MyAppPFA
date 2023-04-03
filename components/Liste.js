import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground} from 'react-native';


export default function Liste  () {
  
  const Items = [{name:'Basic information'}, {name:'Diseases'}, {name:'Allergies'}, {name:'Specialties'}, 
  {name:'Vaccination'},{name:'Doctors'},{name:'Instuctions to follow'},{name:'Medicines'},
  {name:'Files importation'},{name:'ChatBox'},{name:'Logout'},];

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
      //source={require('./img/back7.jpg')}
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
    color: '#14082b',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});;