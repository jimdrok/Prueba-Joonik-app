import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function InputText({
  viewPassword,
  onChangeText,
  multiline,
  numberOfLines
}){
  return (
    <View style={styles.cont}>
      <TextInput 
        style={styles.input}
        secureTextEntry={viewPassword}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cont:{
    borderColor: '#d1d1d1',
    borderWidth: 1,
    borderRadius: 100,
    marginVertical: 10,
    justifyContent: 'center',
    paddingVertical: 2,
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