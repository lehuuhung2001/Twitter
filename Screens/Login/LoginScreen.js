import { StyleSheet, Text, View ,TextInput} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Login } from '../../store/action';

export default function LoginScreen({navigation}) {
  const [username,setusername] = useState('')
  const [password,setpassword] = useState('')
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Login(username,password))
  }
  return (
    <View style ={{flex: 1}}>
    <StatusBar backgroundColor='black' barStyle="light-content" />
    <Ionicons name="ios-logo-twitter" size={30} color="#179cf0" 
    style = {{marginVertical: 50,marginLeft: 175}}/>
    <View style ={{justifyContent: 'center',alignItems: 'center'}}>
      <Text>Login</Text>
    </View>
    <View style ={styles.frame} >
      <TextInput 
        placeholder='Phone, email, or username'
        mode="outlined"
        value={username}
        onChangeText={(text) => setusername(text)}
        />
    </View>
    <View style ={styles.frame} >
      <TextInput 
        value={password}
        mode="outlined"
        onChangeText={setpassword}
        placeholder='Password'
        onChangeText={(text) => setpassword(text)}
        />
    </View>
    <View style ={styles.frame1}>
      <Text style = {{textAlign: 'center'}} onPress={submit}>Log in</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame:{
    flex: 0.08,
    borderBottomWidth:0.9,
    borderColor:'#c4ccd4',
    marginRight:15,
    marginLeft:15,
    justifyContent: 'center',
    top: 16
  },
  frame1:{
    flex: 0.08,
    top: 172,
    backgroundColor:'#8ecdf9',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20
  }
});
