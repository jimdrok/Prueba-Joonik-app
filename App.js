import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast  , { BaseToast } from 'react-native-toast-message';

import HomeScreen from './src/home/screens/HomeScreen';
import AuthEmail from './src/auth/screens/AuthEmail';
import AuthPassword from './src/auth/screens/AuthPassword';


const Stack = createNativeStackNavigator();

const toastConfig = {
  error: ({ text1 , text2 , ...rest }) => (
    <BaseToast
      {...rest}
      style={{ 
        borderLeftColor: 'red' ,
        height: 80,
      }}
      contentContainerStyle={{ 
        paddingHorizontal: 10,
      
      }}
      text1Style={{
        fontSize: 15,
        color:  'red',
      }}
      text2Style={{
        fontSize: 15,
        color: '#000'
      }}
      text1={text1}
      text2={text2}
    />
  ),
};

export default function App() {
  return (
    <>
    <NavigationContainer >
      <SafeAreaView
        style={{ flex: 1 }}>
        <StatusBar
          barStyle={'light-content'}
          
        />
        <Stack.Navigator
          initialRouteName="AuthEmail"
          screenOptions={{
            headerShown: false
          }}
          animationTypeForReplace={'push'}
        >
          <Stack.Screen name="AuthEmail" component={AuthEmail} />
          <Stack.Screen name="AuthPassword" component={AuthPassword} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />

        </Stack.Navigator>
      </SafeAreaView>
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>

    

    </>
  )
}

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});