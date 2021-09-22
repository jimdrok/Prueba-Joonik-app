import React from 'react';
import { StyleSheet, Text, View  , Modal ,TouchableOpacity, TextInput} from 'react-native';
import CusttomButton from '../../common/CusttomButton';
import InputText from '../../common/InputText';
import TextArea from '../../common/TextArea';
import Title from '../../common/Title';
import UploadImage from './UploadImage';

export default function ModalFrom({
  visible,
  onPressClose

}){
  return (
    <View style={styles.cont}>
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
      >
        <TouchableOpacity style={styles.areaClose} onPress={onPressClose} />
        <View style={styles.containerModal}>
          <TouchableOpacity 
            style={styles.ButtonClose} 
            onPress={onPressClose}
          >
            <Text style={{color: '#707070'}}>X</Text>
          </TouchableOpacity>
          <Title>IMAGE</Title>
          <UploadImage/>
          <Title>TITLE</Title>
          <InputText/>
          <Title>CONTENT</Title>
          <TextArea/>
          <CusttomButton>SAVE</CusttomButton>
        </View>
        
        
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  cont:{
    
  },
  areaClose: {
    flex: 1,
    backgroundColor:  'rgba(0,0,0,0.5)',
  },
  containerModal:{
    width: '90%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 10,
    right: 20,
    padding: 20,
    borderRadius: 20.
  },
  
  ButtonClose:{
    position: 'absolute',
    top: 10,
    right: 20,
  }

});