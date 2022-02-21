
import * as React from 'react';
import { View, Text,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { Fontisto } from '@expo/vector-icons'; 
import newsApiRequest from '../../data/API-service/apiservice_private';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
function CustomDrawer(props) {
  const [twitter, setTwitter] = React.useState(null);
  React.useEffect(() => {
    newsApiRequest({}).then((response) => {
      setTwitter(response.data);
    });
  }, []);

  if (!twitter) return null;

  const navigation = useNavigation();
  return (
    <View style = {{flex: 1}}>
    <View style ={{ top: 45,flex: 0.4}}>
    <View style ={{flexDirection: 'row', top: 18}}>
     <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
     <Image
            source={twitter.data.profile_image_url ? {uri: twitter.data.profile_image_url } : null}
            style={{height: 52, width: 52, borderRadius: 40, marginBottom: 20, left : 20}}
            
      />
      </TouchableOpacity>
      <Fontisto name="photograph" size={26} color="black" style ={{left: 220}} />
      </View>
      <View style = {{left: 22,top: 10}}>
      <Text style = {{fontWeight: 'bold',fontSize: 18}}>{twitter.data.name}</Text>
      <Text style = {{fontSize: 15, fontWeight: '300'}}><Text>@</Text>{twitter.data.username}</Text>
      <View style = {{top: 16}}>
      <Text><Text style = {{fontWeight: 'bold'}}>{twitter.data.public_metrics.following_count}</Text> 
      <Text style = {{fontWeight: '300'}}> Following</Text> <Text>
      <Text style = {{fontWeight: 'bold'}}> {twitter.data.public_metrics.followers_count}</Text>
      <Text style = {{fontWeight: '300'}}> Followers</Text></Text></Text>
      </View>
      </View>
      </View>
    <DrawerContentScrollView {...props}
     >
     <View style = {{bottom: 40}}>
      <DrawerItemList {...props} />
      <View  style = {{top : 10,flexDirection:'row',borderTopWidth:0.2,borderColor:'#c7bebe'}}>
      <FontAwesome5 name="lightbulb" size={26} color="black" style = {{left: 25,top: 20}}/>
      <Ionicons name="qr-code-outline" size={26} color="black" style = {{left: 240,top:20}} />
      </View>
      </View>
    </DrawerContentScrollView>
    </View>
  );
}



export default CustomDrawer;