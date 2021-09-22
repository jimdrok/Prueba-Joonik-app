import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


export default function Card({
  image,
  content,
  title
}) {

  
  return (
    <View style={styles.cont}>
      <View style={styles.contImage}>
        {
          image 
          ?(<>
            <Image style={{...styles.image , width: '80%' , height: '80%' , resizeMode: 'cover',}} source={{uri: image}} />
          </>)
          :(<>
            <Image style={styles.image} source={require('../../assets/image.png')} />
          </>)
        }
        
      </View>
      <View style={styles.contInfo}>
        
          {
            title && (<Text style={styles.titleCard}>{title}</Text>)
          }

          {
            content &&(<Text style={styles.textCard}>{content} </Text>)
          }
        
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cont: {
    borderRadius: 10,
    borderColor: '#ACACAC',
    borderWidth: 1,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 20,
  },
  contImage: {
    width: 80,
    height: 80,
    backgroundColor: '#E3E3E3',
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contInfo: {
    flex: 1,
  },
  image: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  textCard: {
    fontFamily: 'Montserrat-Regular',
    color: '#707070',
    marginTop: 5,
  },

  titleCard: {
    color: '#707070',
    fontSize: 21,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
    textAlign: 'left',
  }
});