import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity, ImageBackground} from 'react-native';



export default function Welcome({onPress, onPressLeft, onPressRight}) {
  
  return (
    <ImageBackground
      style={styles.background}
      source={require('./img/back12.jpg')}
    >
     <View style={styles.container}>
      <Text style={styles.regularText}>
      Welcome To MyHealthMate  ...
      </Text>

      <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#888' : '#444',
          borderRadius: 10,
          flexDirection: "row",
          padding: 10,
          height: 45,
          width: '57%',
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
    >
      <Text style={{ color: '#fff',fontSize: 18, textAlign: 'center' }}>Emergency</Text>
    </Pressable> 

    <View style={styles.container1}>
      
  
      <TouchableOpacity onPress={onPressLeft} style={styles.button}>
        <Text style={styles.text}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressRight} style={styles.button}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
      
    </View>  
    
    </View>
       
    </ImageBackground>
   
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container1: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#14082b',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 8,
    margin: 8,
    height: 45,
    width: '25%',
    //borderWidth: 2,
    //borderColor: '#c2bccf',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});