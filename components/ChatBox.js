import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    setMessages([...messages, { text: newMessage, sent: true }]);
    setNewMessage('');
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <Text style={{ alignSelf: item.sent ? 'flex-end' : 'flex-start', backgroundColor: item.sent ? 'green' : 'gray', color: 'white', padding: 10, margin: 5, borderRadius: 10 }}>
            {item.text}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, borderRadius: 10, padding: 10 }}
          placeholder="Type your message here"
          onChangeText={(text) => setNewMessage(text)}
          value={newMessage}
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

export default ChatBox;