import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';



export default function LoginPage() {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

  const handleSubmit = () => {
    if (Email === '' || password === '') {
      alert('Please enter both email and password');} 
      else if (!/\S+@\S+\.\S+/.test(Email)) {
        alert('Please enter a valid email address');}
      else alert('You are now connected!');}
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back !</Text>
      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="gray"
        value={Email}
        textContentType="emailAddress"
        onChangeText={setEmail}
        color="white"
        required={true}

      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="gray"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        color="white"
        required={true}
      />
      
<Pressable
  onPress={handleSubmit}
  style={{borderRadius: 10,
    backgroundColor: "#3498db",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    height: 48,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',}
  }
>
  <Text style={{ color: 'white', fontSize: 20 }}>Log in</Text>
</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#14082b',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: 'white',
  },
 
  input: {
    width: '80%',
    height: 48,
    borderWidth: 1,
    borderColor: '#c2bccf',
    borderRadius: 4,
    paddingLeft: 16,
    marginBottom: 16,
  },
});