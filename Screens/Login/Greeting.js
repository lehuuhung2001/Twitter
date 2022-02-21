import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import google from '../../assets/avatar/login/google.jpg';
import apple from '../../assets/avatar/login/apple.png';
import * as WebBrowser from 'expo-web-browser';
import data from '../../assets/data/user';
export default function Greeting({navigation}) {
  return (
    <View style = {{flex: 1,}}>
    <StatusBar backgroundColor='black' barStyle="light-content" />
    <Ionicons name="ios-logo-twitter" size={30} color="#179cf0" 
    style = {{marginVertical: 50,marginLeft: 175}}/>
      <TouchableOpacity style = {{marginLeft: 40, marginTop: 100}}>
        <Text style ={styles.text}>See what's</Text>
        <Text style ={styles.text}>happening in the</Text>
        <Text style ={styles.text}>world right now.</Text>
      </TouchableOpacity>
      <View style = {styles.frame}>
        <Image source ={google} style = {styles.logo}  />
        <Text style ={styles.text1}
        onPress={() => WebBrowser.openBrowserAsync(data.url)}>Continue with Google</Text>
      </View>
      <TouchableOpacity style = {styles.frame1}>
        <Image source ={apple} style = {styles.logo1}  />
        <Text style ={styles.text1}>Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {{flex : 0.2, backgroundColor: '#1e9af0',justifyContent: 'center'
      ,top: 8,borderRadius: 27,marginLeft: 38, marginRight: 38}}>
        <Text style = {{textAlign: 'center',fontSize: 17,fontWeight:'800',color: 'white'}}>Create account</Text></TouchableOpacity>
      <View style ={{top: 33,left: 36}}><Text style ={{fontSize: 14,color:'#575d62'}}>By signing up, you agree to our 
      <Text style ={{color :'#3b90d7',fontSize: 14}}> Terms, Privacy</Text></Text>
      <Text style ={{color:'#575d62'}}><Text style ={{color :'#3b90d7',fontSize: 14}}>Policy</Text>, and 
        <Text style ={{color :'#3b90d7',fontSize: 14}}> Cookie Use.</Text></Text></View>
      <View style ={{top: 80, left : 36}}>
        <Text style ={{fontSize: 14,color:'#575d62'}}>Have an account already?
        <Text style ={{fontSize: 14,color :'#3b90d7'}} 
          onPress={() => navigation.navigate('Login')}>Log in</Text></Text>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 28,
        fontWeight: '800',
    },
    text1:{
        left: 80,
        top :-34,
        fontWeight: '800',
        fontSize: 17,
    },
    logo: {
      width: 22,
      height: 22,
      marginLeft:44,
      marginVertical: 13
    },
    logo1: {
      width: 25,
      height: 25,
      marginLeft:44,
      marginVertical: 11
    },
    frame: {
      flex: 0.17, 
      marginTop: 112,
      borderRadius: 27,
      marginLeft: 38,
      marginRight: 38,
      borderColor:'#ececec',
      borderWidth: 1.4
    },
    frame1: {
      flex : 0.17,
      marginTop: 7,
      borderRadius: 27,
      marginLeft: 38,
      marginRight: 38,
      borderColor:'#ececec',
      borderWidth: 1.4

    }
});
