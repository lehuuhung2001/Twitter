import * as React from "react";
import { useState } from "react";
import { View, Text,Image} from "react-native";
import newsApiRequest from "../../data/API-service/apiservice_private";
import moment from 'moment';
import {
  Octicons,
  Fontisto,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";
const Tweet_Create = (props) => {
  const [twitter, setTwitter] = React.useState(null);
  React.useEffect(() => {
    newsApiRequest({}).then((response) => {
      setTwitter(response.data);
    });
  }, []);

  if (!twitter) return null;

  return (
    <View style={{
                    flex: 1,
                    borderBottomWidth: 0.5,
                    borderTopWidth: 0.1,
                    borderColor: "#dddddd",
                    
                  }}>

        <View style = {{flexDirection: 'row'}}>
        <Image source ={{uri: twitter.data.profile_image_url }} 
          style={{height: 54, width: 54, borderRadius: 40, marginBottom: 20, left : 16,top: 8}}/>
        <Text style = {{left: 23,top:6,fontWeight: 'bold'}}>{twitter.data.name}</Text>
        <Text style = {{left: 33,top:6, color: "#8e8a8a"}}>@{twitter.data.username}</Text>
        <Text style={{ left: 17, color: "#8e8a8a" }}>ssssssss
                        {moment().startOf('minute').fromNow()}
                      </Text>
        <MaterialCommunityIcons
                        name="dots-horizontal"
                        size={24}
                        color="#a6a0a0"
                        style={{ left: 119 }}
                      />
        </View>
        <View style = {{left: 77,bottom:45}}>
        <Text>{props.title}</Text>
        </View>
        <View style = {{justifyContent: "space-evenly" ,flexDirection:'row', left :15,bottom:20}}>
        <Octicons name="comment" size={19} color="black" />
        <Fontisto
                    name="arrow-swap"
                    size={16}
                    color="black"
                    
                  />
        <FontAwesome name="heart" size={17} color="#b9b2b2"  />
        <AntDesign
                    name="upload"
                    size={16}
                    color="black"
                    
                  />
        </View>
    </View>
    
  );
}

export default Tweet_Create;
