import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native';

const Id = () => {
  const [number, setNumber] = useState();

  const handleSubmit = () => {
    console.log(number);
  };

  return (
    <View style={styles.container}>
     <TextInput
        keyboardType="numeric"
        onChangeText={setNumber}
        value={number}
        style={styles.input}
        placeholder="enter your ID"
        placeholderTextColor="gray"
        color="white"
        required={true}
      />
      

<TouchableOpacity onPress={handleSubmit}
  style={{borderRadius: 10,
    backgroundColor: "#3498db",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    height: 48,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',}
  }>
      <Text style={{ color: 'white', fontSize: 20 }}>Submit</Text>
  </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14082b',
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

export default Id;