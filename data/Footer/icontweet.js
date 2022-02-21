import {View,Text, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import {
  Octicons,
  Fontisto,
  AntDesign,
  FontAwesome
} from "@expo/vector-icons";

const IconTweet = ({item}) => {
const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
const unliking = <FontAwesome name="heart" size={17} color="#b9b2b2" />;
const liking = <FontAwesome name="heart" size={17} color="red" />;
 return (
                <View style={{ flexDirection: "row", top: 8 }}>
                  <Octicons name="comment" size={19} color="black" />
                  <Text style={{ left: 10, fontSize: 12 }}>
                    {item.public_metrics.reply_count}
                  </Text>
                  <Fontisto
                    name="arrow-swap"
                    size={16}
                    color="black"
                    style={{ left: 40 }}
                  />
                  <Text style={{ left: 50, fontSize: 12 }}>
                    {item.public_metrics.retweet_count}
                  </Text>
                  <View style={{ left: 80 }}>
                    <TouchableOpacity onPress={toggleSwitch}>
                      {isEnabled ? liking : unliking}
                    </TouchableOpacity>
                  </View>
                  {/* Liking */}
                  <Text style={{ left: 90, fontSize: 12 }}>
                    {isEnabled ? (
                      <Text style={{ color: "red" }}>
                        {item.public_metrics.like_count + 1}
                      </Text>
                    ) : (
                      <Text>{item.public_metrics.like_count}</Text>
                    )}{" "}
                  </Text>
                  <AntDesign
                    name="upload"
                    size={16}
                    color="black"
                    style={{ left: 120 }}
                  />
                </View>

          );
                    
        
    }

export default IconTweet
            