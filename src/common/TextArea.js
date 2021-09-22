import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function TextArea({
  onChangeText
}){
  return (
    <View style={styles.cont}>
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        multiline={true}
        numberOfLines={4}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  cont:{
    borderColor: '#d1d1d1',
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    justifyContent: 'center',
  },
  input:{
    width: '95%',
    alignSelf: 'center',
    color: '#707070',
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
    
  }
});