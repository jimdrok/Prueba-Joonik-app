import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

export default function CusttomButton({
  children,
  onPress,
  loadingButtom
}) {
  return (
    <>
      {
        loadingButtom
          ? (<>
            <ActivityIndicator
              style={{ alignSelf: 'center', marginTop: 50, }}
              size="large"
              color={'#888888'}
            />
          </>)
          : (<>
            <TouchableOpacity style={styles.cont} onPress={onPress}>
              <Text style={styles.textButton}>{children}</Text>
            </TouchableOpacity>
          </>)
      }

    </>

  )
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#888888',
    width: 200,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    marginTop: 50,
    borderRadius: 100,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
  }
});