import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';



export default function Welcome({onPress, onPressLeft, onPressRight}) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.regularText}>
      Welcome TO MyHealthMate  ...
      </Text>

      <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#888' : '#444',
          borderRadius: 10,
          flexDirection: "row",
          padding: 10,
          height: 48,
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
    >
      <Text style={{ color: '#fff',fontSize: 18, textAlign: 'center' }}>Emergency</Text>
    </Pressable> 

    <View style={styles.container1}>
      
      <Pressable style={styles.button} onPress={onPressLeft}>
        <Text style={styles.text}>Log In</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={onPressRight}>
        <Text style={styles.text}>Sign Up</Text>
      </Pressable>
      
    </View>  
    
    </View>
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    height: 48,
    width: '25%',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});