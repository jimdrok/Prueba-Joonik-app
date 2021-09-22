import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Title({children}){
  return (
    <View style={styles.cont}>
      <Text style={styles.textTitle}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cont:{
    marginVertical: 5,
  },
  textTitle: {
    color: '#707070',
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
    letterSpacing: 1.5 ,
  }
});