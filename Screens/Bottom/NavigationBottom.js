
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './Search';
import Spaces from './Spaces';
import Notifications from './Notifications';
import Messages from './Messages';
import 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Home from './Home'



const Tab = createBottomTabNavigator();


function BottomNavigationMain({navigation}) {
  return (
      <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: 'blue',}}  
      tabBarOptions ={{showLabel: false}}>
      <Tab.Screen
        name='Homee' component={Home}
        options={({navigation}),{tabBarIcon:({color, size}) => 
        (<Ionicons name="ios-home-outline" size={size} color={color}  
        />)}}
      />
      <Tab.Screen
        name='Searchh' component={Search}
        options={{tabBarIcon:({color, size}) => 
        (<Feather name="search" size={size} color={color} />)}} 
      />
      <Tab.Screen
        name='Spacess' component={Spaces}
        options={{tabBarIcon:({color, size}) => 
        (<MaterialIcons name="workspaces-outline" size={size} color={color} />)}}
      />
      <Tab.Screen
        name='Notificationss' component={Notifications}
        options={{tabBarIcon:({color, size}) => 
        (<Ionicons name="md-notifications-outline" size={size} color={color} />)}}
      />
      <Tab.Screen
        name='Messagess' component={Messages}
        options={{tabBarIcon:({color, size}) => 
        (<MaterialCommunityIcons name="email-outline" size={size} color={color} />)}}
      />
      
      </Tab.Navigator>
  );
}


export default BottomNavigationMain;