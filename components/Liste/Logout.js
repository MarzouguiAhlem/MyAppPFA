import React from 'react';
import {ImageBackground, TouchableOpacity, View, StyleSheet, Text} from 'react-native';

const Logout = ({onPress}) => {
    return (
        <ImageBackground style={styles.background}
        //source={require('./img/back11.jpg')}
      >
  <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={{borderRadius: 10,
            backgroundColor: "#c2bccf",
            flexDirection: "row",
            padding: 5,
            height: 70,
            width: '45%',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
          }
          }>
              <Text style={{ color: '#14082b', fontSize: 38, fontWeight:'bold' }}>Logout</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
  )};
  
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
      margin: 14,
      color: 'white',
    },
    background: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
    },
  });

  export default Logout;