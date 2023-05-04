import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import React, { useState, useContext } from "react";
import { StripeProvider, useStripe } from "@stripe/stripe-react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { AuthContext } from "../store/auth-context";
export default function RewardCard(props) {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const stripe = useStripe();

  const navigation = useNavigation();
  const pay = async () => {
    try {
      if (props.price < 1) return Alert.alert("You cannot donate below 1 INR");
      const response = await fetch(
        `http://192.168.33.213:3080/payment/pay?token=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: props.price, name: "Ali" }),
        }
      );
      const data = await response.json();
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: "Merchant Name",
      });
      if (initSheet.error) return Alert.alert(initSheet.error.message);
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret: clientSecret,
      });
      if (presentSheet.error) return Alert.alert(presentSheet.error.message);
      await axios
        .post(
          `http://192.168.33.213:3080/Campaign/reward_investment?token=${token}`,
          {
            investor_id: 1,
            C_reward_id: 3,
            cid: 4,
          }
        )
        .then(function (response) {
          console.log(response.data);
          Alert.alert("Payment Complete,thankyou");
        })
        .catch(function (error) {
          console.log(error.msg);
        });
    } catch (err) {
      console.error(err);
      Alert.alert("Something went wrong,try again later");
    }
  };

  return (
    <StripeProvider publishableKey="pk_test_51MyMrzEBgz1Gk70hQ56CokGaRKkUYDWhV16OJlzsIYKxfdPgzEZBQ7FnQlClbQmRecpMBPXCR06bKjif93OfyyPd00cwV5DZYt">
      <View style={styles.card}>
        <View style={{ height: "100%" }}>
          <Text style={styles.title_style}>
            Reward Name:
            <Text style={styles.body_style}>{"  " + props.title}</Text>
          </Text>

          <Text style={styles.title_style}>
            Description:
            <Text style={styles.body_style}>{"  " + props.disc}</Text>
          </Text>

          <Text style={styles.title_style}>
            PRICE:
            <Text style={styles.text}>{"  " + props.price}</Text>
          </Text>
          <Pressable
            android_ripple={{
              color: "lightgreen",
              borderless: false,
              radius: 95,
            }}
            style={styles.Pressable}
            onPress={() => {
              pay();
            }}
          >
            <Text style={styles.text}>SELECT</Text>
          </Pressable>
        </View>
      </View>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  Pressable: {
    backgroundColor: "#D6252E",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
    minHeight: "20%",
    height: "30%",
    borderRadius: 30,
  },
  text: {
    fontSize: 20,
    color: "white",
    fontStyle: "italic",
  },
  card: {
    marginTop: "10%",
    marginBottom: "4%",
    flex: 1,
    backgroundColor: "#003047",
    alignSelf: "center",
    width: "80%",
    height: "70%",
    borderRadius: 20,
    padding: 10,
  },
  title_style: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    fontFamily: Platform.OS === "ios" ? "Arial" : "serif",
  },
  body_style: {
    fontWeight: "400",
    fontSize: 18,
    color: "white",
    fontFamily: Platform.OS === "ios" ? "Arial" : "serif",
  },
});
