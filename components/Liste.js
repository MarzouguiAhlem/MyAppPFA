import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const Items = [{name:'1'}, {name:'2'},{name:'3'}, 
{name:'4'},{name:'5'}, {name:'6'},{name:'7'}, 
{name:'8'},{name:'9'}, {name:'10'}];

const Item = ({ name}) => (
  <View style={menuStyles.innerContainer}>
    <TouchableOpacity style={menuStyles.button} >
        <Text style={menuStyles.itemText} >{name}</Text>
    </TouchableOpacity>
  </View>
);


const Liste = () => {
  const renderItem = ({ item }) =>
 <Item name={item.name} />;


  return (
    <View style={menuStyles.container}>
      <FlatList 
        data={Items}
        renderItem={renderItem}>
      </FlatList>
    </View>
  );
};


const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A506B'
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
    backgroundColor: '#14082b',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
  }
});
  

export default Liste;