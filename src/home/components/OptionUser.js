import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OptionUser({
  navigation
}) {
  return (
    <>
      <View style={styles.optionUserCont}>
        <TouchableOpacity onPress={() => navigation.push('AuthEmail')} >
          <Text style={styles.optionUserText}>logout</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  optionUserCont:{
    position: 'absolute',
    top: 50,
    left: 45,
    width: '30%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#888888',
    borderWidth: 1,
    
  },

  optionUserText:{
    color: '#707070',
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
    letterSpacing: 1 ,
  }

});