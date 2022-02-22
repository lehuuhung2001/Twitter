import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Alert,
} from "react-native";
import newsApiRequest from "../API-service/apiservice_newsfeed";
import Tweet_Create from "../../Screens/OtherScreens/Tweet_Create";
import { getMediaData } from "./handle_data";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import moment from "moment";
import Tweet from "../../Screens/OtherScreens/Tweet";
import IconTweet from "../Footer/icontweet";
import styles from "./style";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Apidata = () => {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  const handleDeleteTask = (index) => {
    Alert.alert(
      "Bạn có muốn xóa ko!",
      "Really",

      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index, 1);
            setTaskList(taskListTmp);
          },
        },
      ]
    );
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);

  const [twitter, setTwitter] = React.useState(null);
  React.useEffect(() => {
    newsApiRequest({}).then((response) => {
      setTwitter(response.data);
    });
  }, []);

  if (!twitter) return null;

  return (
    <View
      style={{ backgroundColor: "white", flex: 1, justifyContent: "center"}}
    >
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
      <View style = {{flexDirection: 'column-reverse'}}>
        {taskList.map((item, index) => {
          return (
            <Tweet_Create
              key={index}
              title={item}
              number={index + 1}
              OnDeleteTask={() => handleDeleteTask(index)}
            />
            
          );
        })}
        </View>
        <View>
          <FlatList
            data={twitter.data}
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    borderBottomWidth: 0.5,
                    borderTopWidth: 0.1,
                    borderColor: "#dddddd",
                  }}
                >
                  {twitter.includes.users.map((item) => (
                    <Image
                      style={styles.avatar}
                      source={{ uri: item.profile_image_url }}
                    />
                  ))}
                  <View style={styles.main}>
                    <View style={{ flexDirection: "row" }}>
                      {twitter.includes.users.map((item) => (
                        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                      ))}
                      {twitter.includes.users.map((item) => (
                        <Text style={{ left: 8, color: "#8e8a8a" }}>
                          @{item.username}
                        </Text>
                      ))}

                      <Text style={{ left: 17, color: "#8e8a8a" }}>
                        {moment(item.created_at)
                          .fromNow()
                          .replace(" hours ago", "h")
                          .replace("a day ago", "1d")
                          .replace("an hour ago", "1h")
                          .replace(" days ago", "d")
                          .replace(" minutes ago", "min")}
                      </Text>
                      <MaterialCommunityIcons
                        name="dots-horizontal"
                        size={24}
                        color="#a6a0a0"
                        style={{ left: 55, bottom: 3 }}
                      />
                    </View>
                    <Text>{item.text}</Text>
                    {getMediaData(item.attachments, twitter.includes).map(
                      (item) => {
                        return (
                          <View style={{ flexDirection: "row" }}>
                            {item.type == "photo" ? (
                              <Image
                                style={styles.image}
                                source={{ uri: item.url }}
                              />
                            ) : (
                              <Image
                                style={styles.image}
                                source={{ uri: item.preview_image_url }}
                              />
                            )}
                          </View>
                        );
                      }
                    )}

                    <IconTweet item={item} />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
      <Tweet onAddTask1={handleAddTask} />
    </View>
  );
};

export default Apidata;
