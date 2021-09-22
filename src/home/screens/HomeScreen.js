import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import CusttomButton from '../../common/CusttomButton';
import { handleData } from '../../helpers/endpoints';
import Card from '../components/Card';
import Header from '../components/Header';
import ModalFrom from '../components/ModalFrom';
import OptionUser from '../components/OptionUser';


export default function HomeScreen({
  navigation,
  route
}) {
  const [optionUser, setOptionUser] = useState(false)
  const [homeData, setHomeData] = useState()
  const { data } = route.params
  const [modalVisible, setModalVisible] = useState(false)

  async function initialFuntion(token) {
    try {
      const result = (await handleData(token))
      setHomeData(result)
    }
    catch {

    }
  }
  useEffect(() => {
    initialFuntion(data?.token)
  }, [data])


  function renderCard(e) {
    const { item } = e

    return (
      <Card
        image={item.image}
        content={item.content}
        title={item.title}
      />
    )


  }

  function statusModal() {
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.cont}>

      <Header
        setOptionUser={() => setOptionUser(!optionUser)}
        optionUser={optionUser}
        user={data?.name}
      />

      {optionUser && (<OptionUser navigation={navigation} />)}

      <View style={styles.section}>

        <FlatList
          data={homeData}
          renderItem={renderCard}
          keyExtractor={(item) => item.title}
        />
      </View>


      <CusttomButton 
        onPress={()=>statusModal()}
      
      >ADD NEW</CusttomButton>

      <ModalFrom
        visible={modalVisible}
        onPressClose={()=>statusModal()}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingBottom: 30,
    paddingTop: 150,
  },

  section: {
    width: '85%',
    height: '80%',
    alignSelf: 'center',

  },




});