
import * as React from 'react';
import { Image,TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../Drawer_Screen/Profile';
import Search_Screen from '../Bottom_Screen/Search_Screen';
import Setting from '../Drawer_Screen/Setting';
import CustomDrawer from '../Drawer_Screen/CustomDrawer';
import { FontAwesome,Feather,SimpleLineIcons,MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();


function Messages() {
  return (
    <Drawer.Navigator  
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
        drawerStyle: {
          width: 318,
        },
      }}
    initialRouteName="Search"
    tabBarOptions ={{showLabel: false,}}
    
    >        
      <Drawer.Screen name="Search" component={Search_Screen}
       options={({navigation}) =>({
                headerTitle: ()=> (<Ionicons name="ios-logo-twitter" size={30} color="#179cf0" />),
                headerRight: ()=> (<MaterialCommunityIcons name="star-four-points-outline" size={26} color="black" 
                style ={{marginRight: 15}}/>),
                headerLeft: ()=> (
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Image source={require("../../assets/avatar/62568983_2323957391206381_435966728464236544_n.jpg")}
                  style ={{height: 40,width :40,borderRadius:50,marginTop: -8,marginLeft: 15}}/>
                </TouchableOpacity>),
                drawerIcon: () => (<Feather name="search"  size={24} color="black" style ={{left: 5}} />)
                , drawerLabelStyle: {
                    fontSize: 17,
                    right: 8
                }
                
                
                
                } )
        }
        
                /> 
                
      <Drawer.Screen name="Profile" component={Profile} screenOptions={{headerShown:false}}
         options={{drawerIcon: () => (<Ionicons name="person-outline" size={24} color="black"  style ={{left: 5}}
           
         />), drawerLabelStyle: {
                    fontSize: 17,
                    right: 8
                }}}
      /> 
      <Drawer.Screen name="Lists" component={Profile} 
         options={{drawerIcon: () => (<Ionicons name="ios-list-circle-outline" size={24} color="black" style ={{left: 5}} />), drawerLabelStyle: {
                    fontSize: 17,
                    right: 8
                }}}
      /> 
      <Drawer.Screen name="Topics" component={Profile} 
         options={{drawerIcon: () => (<MaterialCommunityIcons name="message-text-outline" size={24} color="black" style ={{left: 5}} />), drawerLabelStyle: {
                    fontSize: 17,
                    right: 10
                }}}
      /> 
      <Drawer.Screen name="Bookmarks" component={Profile} 
         options={{drawerIcon: () => (<FontAwesome name="bookmark-o" size={24} color="black" style ={{left: 5}} />), drawerLabelStyle: {
                    fontSize: 17,
                    right: 2
                }}}
      /> 
      <Drawer.Screen name="Moments" component={Profile} 
         options={{drawerIcon: () => (<Feather name="battery-charging" size={24} color="black"  style ={{left: 5}}/>), drawerLabelStyle: {
                    fontSize: 17,
                    right: 7
                }}}
      /> 
      <Drawer.Screen name="Purchases" component={Profile} 
         options={{drawerIcon: () => (<SimpleLineIcons name="basket" size={24} color="black" style ={{left: 5}} />), drawerLabelStyle: {
                    fontSize: 17,
                    right: 5
                }}}
      /> 
      <Drawer.Screen name="Monetization" component={Profile} 
         options={{drawerIcon: () => (<MaterialCommunityIcons name="cash-multiple" size={24} color="black" style ={{left: 5}} />), drawerLabelStyle: {
                    fontSize: 17,
                    right: 5
                }}}
      />
      <Drawer.Screen name="Twitter for Professionals" component={Profile} 
         options={{drawerIcon: () => (<Ionicons name="md-rocket-outline" size={24} color="black" style ={{left: 21}}/>), 
         drawerLabelStyle: {
                    fontSize: 17,
                    left: 10
                    
                },
                drawerItemStyle:{borderTopWidth:0.2,borderBottomWidth:0.2,width: '110%',right: 15,paddingTop:10,paddingBottom:15,
                borderColor:'#c7bebe'}
                }}
      /> 
      <Drawer.Screen name="Settings and privacy" component={Setting} 
         options={{ drawerLabelStyle: {
                    fontSize: 17,
                    left: 4
                }}}
                
      /> 
      <Drawer.Screen name="Help Center" component={Profile} 
         options={{ drawerLabelStyle: {
                    fontSize: 17,
                    left: 4
                }}}
                
      /> 
      
      
    </Drawer.Navigator>
  );
}


export default Messages;