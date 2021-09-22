import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


export default function HeaderAuth({navigation}){
  return (
    <View style={styles.header}>
        <Feather 
          name={'chevron-left'} 
          onPress={() => navigation.push('AuthEmail',)} 
          style={styles.iconHeader}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    position: 'absolute',
    top: 0,

  },
  iconHeader:{
    color: '#888888',
    fontSize: 30,
  },
});