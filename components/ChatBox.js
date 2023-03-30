import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Pressable, ImageBackground } from 'react-native';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    setMessages([...messages, { text: newMessage, sent: false }]);
    setNewMessage('');
  };

  return (
    <ImageBackground style={{flex: 1, resizeMode: 'cover'}}
    source={require('./img/doc.webp')} >
    <View style={{ flex: 1 }}>
    <FlatList
      data={messages}
      renderItem={({ item }) => (
        <Text style={{ alignSelf: item.sent ? 'flex-end' : 'flex-start', backgroundColor: item.sent ? '#80ADA0' : 'gray', color: 'white', padding: 10, margin: 5, borderRadius: 10 }}>
          {item.text}
        </Text>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
      <TextInput
        style={{ flex: 1, height: 40, backgroundColor:'white', borderColor: 'gray', borderWidth: 1, margin: 10, borderRadius: 8, padding: 10 }}
        placeholder="Type your message here"
        onChangeText={(text) => setNewMessage(text)}
        value={newMessage}
      />
      <Pressable onPress={handleSend} style={{backgroundColor: '#c2bccf',borderRadius: 10, padding: 5, margin: 5, height: 38, width: '15%'}}><Text style={{color: 'black', fontSize: 18}}>Send</Text></Pressable>
      
    </View>
  </View>
    
    </ImageBackground>
   
  );
};

export default ChatBox;