import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CusttomButton from '../../common/CusttomButton';
import InputText from '../../common/InputText';
import Title from '../../common/Title';
import HeaderAuth from '../components/HeaderAuth';
import TextGeneric from '../../common/TextGeneric';
import CheckBoxPassword from '../components/CheckBoxPassword';
import Toast from 'react-native-toast-message';
import { handleData, handlePassword } from '../../helpers/endpoints';



export default function AuthPassword({
  navigation,
  route
}) {
  const [isSelected, setSelection] = useState(true);
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { token , email } = route.params

  function toastMessage(text) {
    Toast.show({
      text1: 'Error',
      text2: text,
      type: 'error',
    });
  }



  async function onSubmit() {
    setLoading(true)
    if (password) {
      
      try {
        const result = (await handlePassword(password , token))
        navigation.push('HomeScreen', { data: result})
        setLoading(false)
        
      }
      catch(e) {
        console.log(e)
        toastMessage('contraseña invalida')
         setLoading(false)
      }
    } else {
      toastMessage('Debe ingresar una contraseña')
      setLoading(false)
    }


  }
  return (
    <View style={styles.cont}>
      <HeaderAuth
        navigation={navigation}
      />

      <View style={styles.section}>
        <TextGeneric>{email}</TextGeneric>
        <Title>PASSWORD</Title>
        <InputText
          viewPassword={isSelected}
          onChangeText={setPassword}
        />


        <CheckBoxPassword
          isSelected={isSelected}
          setSelection={setSelection}
        />

        <CusttomButton
          // onPress={() => navigation.navigate('HomeScreen') }
          onPress={() => onSubmit()}
          loadingButtom={loading}
        >
          SIGN IN
        </CusttomButton>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  cont: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },


  section: {
    width: '80%',
    alignSelf: 'center',
  },




});