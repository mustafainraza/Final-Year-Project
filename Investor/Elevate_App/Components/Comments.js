import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  Platform,
  Image,
} from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../store/auth-context";

export default function Comments() {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const [timeout, settimeout] = useState(true);
  const [comment, setcomment] = useState();
  const postt = async () => {
    console.log(comment);
    await axios
      .post(`http://192.168.100.78:3080/Campaign/comment?token=${token}`, {
        msg: comment,
        cid: 1,
        investor_id: 1,
      })
      .then(function (response) {
        console.log(response.data);
        // console.log(comment);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const gett = async () => {
    settimeout(true);
    await axios
      .get(`http://192.168.100.78:3080/Campaign/comments/1?token=${token}`)
      .then(function (response) {
        let tempp = [];
        for (var i = 0; i < response.data.length; i++) {
          tempp.push(response.data[i]);
        }
        setDATA(tempp);
        settimeout(() => {
          settimeout(false);
        }, 4000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [DATA, setDATA] = useState([]);

  const Item = ({ item }) => (
    <View
      style={{
        backgroundColor: "#dcdcdc",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: "row",
      }}
    >
      <View>
        {item.investor_image !== null ? (
          <Image
            style={{
              height: 50,
              borderRadius: 50,
              width: 50,
            }}
            source={{ uri: "data:image/jpeg;base64," + item.investor_image }}
          />
        ) : (
          <Image
            style={{
              borderRadius: 50,
            }}
            source={require("../assets/user.png")}
          />
        )}
      </View>
      <View>
        <Text style={{ color: "grey", marginLeft: "40%" }}>
          {new Date(item.comment_date).toDateString()}
        </Text>
        <Text style={{ fontWeight: "bold", marginLeft: "3%" }}>
          {item.investor_name}
        </Text>
        <Text style={{ fontSize: 16, marginRight: "15%" }}>
          {item.comment_msg}
        </Text>
      </View>
    </View>
  );
  const handlePress = () => {
    if (comment.length > 1) {
      postt();
      setcomment("");
      gett();
    } else {
      Alert.alert("Warning", "Please enter valid comment");
    }
  };
  useEffect(() => {
    gett();
  }, []);
  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: StatusBar.currentHeight || 0, padding: 10 }}
    >
      <View style={{ flex: 12 }}>
        {Platform.OS === "ios" ? (
          <Text
            style={{
              marginTop: "3%",
              fontSize: 23,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Comments
          </Text>
        ) : (
          <Text
            style={{
              marginTop: "10%",
              fontSize: 23,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Comments
          </Text>
        )}
        <FlatList
          data={DATA}
          renderItem={Item}
          keyExtractor={(item, index) => {
            return index;
          }}
          onRefresh={gett}
          refreshing={timeout}
          contentContainerStyle={{ flexDirection: "column-reverse" }}
        />
        <View style={{ marginTop: "5%" }} />
      </View>
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={15}
        >
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={{
                backgroundColor: "#dcdcdc",
                borderWidth: 0.5,
                borderColor: "#dcdcdc",
                height: 40,
                borderRadius: 10,
                marginLeft: "3%",
                width: "85%",
                paddingLeft: "3%",
              }}
              value={comment}
              onChangeText={(element) => {
                setcomment(element);
              }}
              placeholder="Enter your comments here"
              underlineColorAndroid="transparent"
            />
            <Pressable
              style={{ marginLeft: "3%" }}
              onPress={() => {
                handlePress();
              }}
            >
              <Ionicons name="send" size={24} color="black" />
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      ) : (
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={{
              backgroundColor: "#dcdcdc",
              borderWidth: 0.5,
              borderColor: "#dcdcdc",
              height: 40,
              borderRadius: 10,
              marginLeft: "3%",
              width: "85%",
              paddingLeft: "3%",
            }}
            value={comment}
            onChangeText={(element) => {
              setcomment(element);
            }}
            placeholder="Enter your comments here"
            underlineColorAndroid="transparent"
          />
          <Pressable
            style={{ marginLeft: "3%" }}
            onPress={() => {
              handlePress();
            }}
          >
            <Ionicons name="send" size={24} color="black" />
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}
