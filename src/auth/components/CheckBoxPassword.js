import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox'

export default function CheckBoxPassword({
  isSelected,
  setSelection
}){
  return (
    <View style={styles.cont}>
      <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={{color: '#000' }}
          tintColors={{ true: '#888888', false: '#888888' }}
        />

        <View style={styles.stectionBar}/>
    </View>
  )
}

const styles = StyleSheet.create({
  cont:{
    flexDirection: 'row',
    
  },
  stectionBar:{
    width: 150 ,
    height: 7,
    backgroundColor: '#CECECE',
    alignSelf: 'center',
  },
});