import * as React from "react";
import { View, Text,Image} from "react-native";
import newsApiRequest from "../../data/API-service/apiservice_private";
import {
  Octicons,
  Fontisto,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons
} from "@expo/vector-icons";
const Tweet_Create = (props) => {

  const [text, onChangeText] = React.useState("Useless Text");
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
                    flexDirection: "row",
                    borderBottomWidth: 0.5,
                    borderTopWidth: 0.1,
                    borderColor: "#dddddd",
                  }}>
    
        <Image source ={{uri: twitter.data.profile_image_url }} 
          style={{height: 54, width: 54, borderRadius: 40, marginBottom: 20, left : 16,top: 8}}/>
        <Text style = {{left: 23,top:6,fontWeight: 'bold'}}>{twitter.data.name}</Text>
        <Text style = {{left: 33,top:6, color: "#8e8a8a"}}>@{twitter.data.username}</Text>
        <MaterialCommunityIcons
                        name="dots-horizontal"
                        size={24}
                        color="#a6a0a0"
                        style={{ left: 119 }}
                      />
        <Text style = {{top: 28,right:162}}>{props.title}</Text>
        <View>
        <Octicons name="comment" size={19} color="black" style = {{top: 50,right: 195}}/>
        <FontAwesome name="heart" size={17} color="#b9b2b2" style = {{top: 30,right: 50}} />
        <Fontisto
                    name="arrow-swap"
                    size={16}
                    color="black"
                    style={{ right: 128,top: 13 }}
                  />
        <AntDesign
                    name="upload"
                    size={16}
                    color="black"
                    style={{ left: 35,bottom: 3 }}
                  />
        </View>
    </View>
  );
}

export default Tweet_Create;
