import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import ImagePicker from 'react-native-image-crop-picker';


export default function UploadImage() {

  const [imgUrl, setimgUrl] = useState()

  const getPhotoLibrary = () => {

    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: 'photo'
    }).then(e => {
      console.log(e)
      setimgUrl(e.path)
    });

  }

  
  return (
    <>
      {
        imgUrl
          ? (<>
            <View style={styles.containerImg}>
              <Image style={styles.image} source={{ uri: imgUrl }} />
              <Icon
                name='x-circle'
                size={17}
                style={styles.iconDelete}
                onPress={()=>{
                  setimgUrl(null)
                }}
              />
            </View>

          </>)
          : (<>

            <View style={styles.cont}>
              <TouchableOpacity
                style={styles.getPhoto}
                onPress={() => getPhotoLibrary()}
              >
                <View style={{ alignItems: 'center' }}>
                  <Icon
                    name='camera'
                    size={40}
                    color={'#707070'}
                  />
                  <Text style={styles.textGetPhoto}>upload image</Text>
                </View>
              </TouchableOpacity>
            </View>
          </>)
      }
    </>
  )
}

const styles = StyleSheet.create({
  cont: {
    width: 170,
    height: 160,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 10,
    borderColor: '#E3E3E3',
    borderWidth: 2,
  

  },
  getPhoto: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGetPhoto: {
    width: '100%',
    fontFamily: 'Montserrat-regular',
    fontSize: 18,
    color: '#707070',
    marginTop: 10,
  },
  containerImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },
  iconDelete:{
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 5,
    right: 95,
    color: 'red'
  }
});