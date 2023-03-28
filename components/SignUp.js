import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Pressable, View } from 'react-native';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState();

  const handleSignup = () => {
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.regularText}> Please note that phone verification is required for signup.
         Your number will only be used to verify your identity for security purposes</Text>
      <TextInput
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}
        placeholder="enter your Full Name"
        placeholderTextColor="gray"
        color="white"
        required={true}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        keyboardType="email-address"
        placeholder="enter your Email-adress"
        placeholderTextColor="gray"
        color="white"
        required={true}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
        placeholder="enter your Password"
        placeholderTextColor="gray"
        color="white"
        required={true}
        secureTextEntry
      />
      <TextInput
        keyboardType="numeric"
        onChangeText={setNumber}
        value={number}
        style={styles.input}
        placeholder="enter your Phone Number"
        placeholderTextColor="gray"
        color="white"
        required={true}
      />
       <Pressable style={styles.button} mode="contained" onPress={handleSignup}>
      <Text style={styles.text}>Create Account</Text>
      </Pressable>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  input: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#c2bccf',
    height: 42,
    padding: 10,
    margin: 10,
  },
  regularText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    height: 42,
    width: '45%',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SignUp;