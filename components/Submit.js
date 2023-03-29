import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

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
    <View>
      <TextInput
        placeholder="Enter text"
        onChangeText={handleTextChange}
        value={text}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Submit;