
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler'
import LoginScreen from './Login/LoginScreen';
import { store } from '../store';
import { Provider, useSelector } from 'react-redux';
import Greeting from './Login/Greeting';
import BottomNavigationMain from './Bottom/NavigationBottom';
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Greeting" component={Greeting} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

function Container() {
  const token = useSelector(state => state.AuthReducers.authToken);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='black' barStyle="light-content" />
      {
        token === null ?
          <AuthStack/> : <BottomNavigationMain/>
      }
    </NavigationContainer>
  );
}
const MainContainer = () => {
  return (
    <Provider store={store}>
    <StatusBar style="dark"/>
      <Container />
    </Provider>
  )
}
export default MainContainer;