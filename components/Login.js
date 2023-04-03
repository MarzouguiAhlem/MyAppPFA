import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { RadioButton } from 'react-native-paper';


export default function LoginPage() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

  const handleSubmit = () => {
    if (Email === '' || password === '') {
      alert('Please enter both email and password');} 
      else if (!/\S+@\S+\.\S+/.test(Email)) {
        alert('Please enter a valid email address');}
      else {alert('You are now connected!');
      console.log(Email);
      console.log(password);}}
  
      const [checked, setChecked] = useState('');

  return (
    <ImageBackground
      style={styles.background}
      source={require('./img/back11.jpg')}
    >
<View style={styles.container}>
      <Text style={styles.title}>Welcome back !</Text>
      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="white"
        value={Email}
        textContentType="emailAddress"
        onChangeText={setEmail}
        color="white"
        required={true}

      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        color="white"
        required={true}
      />

<RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
        <RadioButton.Item label="Patient" value="first" color={'white'} labelStyle={{color:'white', fontSize:18}}
        uncheckedColor={'#e0e0e0'}/>
        <RadioButton.Item label="Doctor" value="second" labelStyle={{color:'white', fontSize:18}} color={'white'}
        uncheckedColor={'#e0e0e0'}/>
  </RadioButton.Group>
      
    
<TouchableOpacity onPress={handleSubmit} style={{borderRadius: 5,
    backgroundColor: "white",
    flexDirection: "row",
    padding: 5,
    height: 40,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  }
  }>
      <Text style={{ color: '#14082b', fontSize: 18, fontWeight:'bold' }}>Login</Text>
  </TouchableOpacity>
    </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    //backgroundColor: '#14082b',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    color: 'white',
  },
  input: {
    width: '80%',
    height: 48,
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 4,
    paddingLeft: 16,
    margin: 5,
  
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});