import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Logout } from '../../store/action';
function Setting() {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout())
  }
  return (
    <View style={{ flex: 1}}>
    <TouchableOpacity style ={{flexDirection: 'row', top: 20}}>
      <MaterialIcons name="logout" size={24} color="black" style ={{left: 15}}/>
      <Text style ={{fontWeight:'600',fontSize: 20,left: 30}} onPress={submit}>Logout</Text>
      <MaterialIcons name="arrow-forward-ios" size={16} color="black" style ={{left: 245,top: 4}} />
    </TouchableOpacity>
    </View>
  );
}



export default Setting;