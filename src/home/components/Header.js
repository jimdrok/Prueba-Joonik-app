import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function Header({
  optionUser,
  setOptionUser,
  user
}) {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => setOptionUser()}
        >
          <Text style={styles.userText}>{user}</Text>
          <Feather
            name={optionUser ? 'chevron-up' : 'chevron-down'}
            style={styles.iconHeader}
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    position: 'absolute',
    paddingVertical: 15,
    paddingHorizontal: 20,
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',


  },
  iconHeader: {
    color: '#707070',
    fontSize: 20,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },

  userText: {
    color: '#707070',
    fontSize: 18,
    textAlign: 'center',
    opacity: 1,
  },
});