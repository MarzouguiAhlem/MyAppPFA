import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, ImageBackground } from 'react-native';

const Submit = () => {
  const [text, setText] = useState('');

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleSubmit = () => {
    // Do something with the text value, such as send it to a server or update state
    console.log(text);
  };

  return (
    <ImageBackground
      style={style.background}
      source={require('./img/back5.jpg')}
    >
     <View>
      <TextInput
        placeholder="Enter text"
        onChangeText={handleTextChange}
        value={text}
        style={style.text}
      />
      <TouchableOpacity onPress={handleSubmit} style={style.button}>
        <Text style={style.itemText}>Submit</Text>
      </TouchableOpacity>
      
    </View>
    </ImageBackground>
    
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'white'
  },
  
  button: {
  backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },
  text: {
    color: '#c2bccf',
    fontSize: 18,
    backgroundColor:'white' 
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
})

export default Submit;