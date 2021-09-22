import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import CusttomButton from '../../common/CusttomButton';
import InputText from '../../common/InputText';
import Title from '../../common/Title';
import { handleEmail } from '../../helpers/endpoints';
import Toast from 'react-native-toast-message';


export default function AuthEmail({ navigation }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  function toastMessage(text) {
    Toast.show({
      text1: 'Error',
      text2: text,
      type: 'error',
    });
  }

  async function onSubmit() {
    setLoading(true)
    if (email) {
      try {
        const result = (await handleEmail(email))
        setLoading(false)
        console.log(result?.result)
        navigation.push('AuthPassword', { token: result?.result , email: email })
      }
      catch {
        toastMessage('Email invalido')
        setLoading(false)
      }

    } else {
      toastMessage('Debe ingresar un email')
      setLoading(false)
    }

  }


  return (
    <View style={styles.cont}>
      <View style={styles.section}>
        <Title>EMAIL</Title>
        <InputText
          onChangeText={setEmail}
          value={email}
        />


        <CusttomButton 
          onPress={() => { onSubmit() }}
          loadingButtom={loading}
        >
          NEXT
        </CusttomButton>


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  section: {
    width: '80%',
    alignSelf: 'center',
  },


});