import * as React from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  Image,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import newsApiRequest from "../../data/API-service/apiservice_private";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const Tweet = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState("");
  const handleAddTask2 = () => {
    if (task.length === 0) {
      alert("Vui lòng nhập !");
      return false;
    }
    console.log(props.onAddTask1);
    props.onAddTask1(task);
    setTask("");
    Keyboard.dismiss();
  };
  const [twitter, setTwitter] = React.useState(null);
  React.useEffect(() => {
    newsApiRequest({}).then((response) => {
      setTwitter(response.data);
    });
  }, []);

  if (!twitter) return null;

  return (
    <>
      <AntDesign
        onPress={() => setModalVisible(true)}
        name="pluscircle"
        size={55}
        color="#179cf0"
        style={{ position: "absolute", top: 575, left: 300 }}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        presentationStyle="fullScreen"
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", flex: 0.12 }}>
            <Pressable
              style={{ borderRadius: 20, padding: 20, elevation: 2 }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{ fontSize: 16, top: 40 }}>Cancel</Text>
            </Pressable>
            <TouchableOpacity
              onPress={handleAddTask2}
              style={{
                flex: 0.3,
                backgroundColor: "#8ecdf9",
                left: 184,
                top: 50,
                borderRadius: 18,
                height: 35,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#f2ebeb",
                  top: 9,
                }}
              >
                Tweet
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image
              source={{ uri: twitter.data.profile_image_url }}
              style={{
                height: 36,
                width: 36,
                borderRadius: 40,
                marginBottom: 20,
                left: 20,
                top: 10,
              }}
            />
            <View style={{ left: 28, top: 13 }}>
              <TextInput
                placeholder="What's happening?"
                multiline={true}
                onChangeText={(text) => setTask(text)}
                autoFocus={true}
              ></TextInput>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Tweet;
