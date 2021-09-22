import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TextGeneric({children}){
  return (
    <View style={styles.cont}>
      <Text style={styles.userText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cont:{
    
  },
  userText: {
    marginVertical: 30,
    width: 300,
    color: '#707070',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',

  }
});