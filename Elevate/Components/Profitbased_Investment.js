import react, { useState, useEffect, useContext } from "react";
import { Keyboard } from "react-native";

import { View, Text, Button, TextInput } from "react-native";
import AppContext from "./forms/AppContext";
import axios from "axios";
import { Platform } from "react-native";
function Profitbased_Investment() {
  const [amount, setamount] = useState("");
  const profit = "The profit will be 30% of the Invested amount";

  const [text, settext] = useState(true);
  const [errprompt, seterrprompt] = useState({});
  function checkcredentials(e1) {
    let errors = {};
    if (e1 === "") {
      errors.amount = "Investment amount is required";
      settext(false);
    }
    return errors;
  }
  const save = () => {
    let temp = amount * 0.3;
    settext(true);
    seterrprompt(checkcredentials(amount));
    Keyboard.dismiss();
    if (Object.keys(checkcredentials(amount)).length === 0) {
      alert("Your profit is:- " + temp + " rupees");
      //   edit();
    }
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
        {profit}
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
          placeholder="Enter your investment amount"
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
export default Profitbased_Investment;
