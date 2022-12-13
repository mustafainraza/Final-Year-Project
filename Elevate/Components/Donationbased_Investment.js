import react, { useState, useEffect, useContext } from "react";
import { Keyboard } from "react-native";
import { View, Text, Button, TextInput } from "react-native";
import { Platform } from "react-native";
function Donationbased_Investment() {
  const [amount, setamount] = useState("");
  const [text, settext] = useState(true);
  const [errprompt, seterrprompt] = useState({});
  function checkcredentials(e1) {
    let errors = {};
    if (e1 === "") {
      errors.amount = "Donation amount is required";
      settext(false);
    }
    return errors;
  }
  const save = () => {
    settext(true);
    seterrprompt(checkcredentials(amount));
    Keyboard.dismiss();
    alert("Your donated amount is: " + amount);
    // if (
    //   Object.keys(checkcredentials(amount))
    //     .length === 0
    // ) {
    //   edit();
    // }
  };

  return (
    <View>
      <Text
        style={{
          marginTop: "3%",
          fontFamily: Platform.OS === "ios" ? "Arial" : "serif",
          marginHorizontal: "5%",
          fontSize: 17,
          color: "#808080",
          textAlign: "center",
        }}
      >
        Actions speak louder than words! Donate today.
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: "7%",
        }}
      >
        <Text style={{ marginLeft: "3%", fontSize: 17 }}>Amount</Text>
        <TextInput
          value={amount}
          onChangeText={(element) => {
            setamount(element);
          }}
          placeholder="Enter your Donation amount"
          keyboardType="number-pad"
          style={{
            marginLeft: "6%",
            backgroundColor: "#ffffff",
            width: "80%",
            height: 40,
            borderBottomWidth: 1,
            borderColor: "#dcdcdc",
          }}
        />
      </View>
      <View style={{ marginLeft: "23%", marginTop: "1%" }}>
        <Text style={{ color: "red", fontSize: 14, fontWeight: "bold" }}>
          {errprompt.amount}
        </Text>
      </View>
      {Platform.OS === "ios" ? (
        <View style={{ marginTop: "7%" }}>
          <Button title="Submit" color={"#D6252E"} onPress={save}></Button>
        </View>
      ) : (
        <View style={{ width: "20%", alignSelf: "center" }}>
          <Button title="Submit" color={"#D6252E"} onPress={save}></Button>
        </View>
      )}
    </View>
  );
}
export default Donationbased_Investment;
