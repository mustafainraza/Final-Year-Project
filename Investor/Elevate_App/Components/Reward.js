import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import RewardCard from "./RewardCard";
import Equity_Card from "./Equity_Card";

export default function Rewards({ route }) {
  const [Rewards_data, setRewards_data] = useState(null);
  const [Isdata_loaded, setIsdata_loaded] = useState(false);
  const C_ID = route.params.C_ID;
  const campaign_type = route.params.campaign_type;

  useEffect(() => {
    campaign_type == "reward" ? setRewards_data(Set) : setRewards_data(Set2);
    setIsdata_loaded(true);
  }, []);

  const renderItem = ({ item }) =>
    campaign_type == "reward" ? (
      <RewardCard
        title={item.title}
        disc={item.disc}
        price={item.price}
        reward_id={item.reward_id}
        C_ID={C_ID}
      />
    ) : (
      <Equity_Card
        percentage={item.percentage}
        disc={item.disc}
        Total_price={item.Total_price}
        equity_id={item.equity_id}
        C_ID={C_ID}
      />
    );
  return (
    <View style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
      {!Isdata_loaded ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <ActivityIndicator size={80} color="red" />
        </View>
      ) : (
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          <FlatList data={Rewards_data} renderItem={renderItem} />
        </View>
      )}
    </View>
  );
}

const Set = [
  {
    title: "Reward 1",
    disc: "This is project Reward discription",
    price: 3000,
    reward_id: 1,
  },
  {
    title: "Reward 2",
    disc: "This is project Reward 2 discription",
    price: 6000,
    reward_id: 2,
  },
];

const Set2 = [
  {
    percentage: 30,
    disc: "This is project Equity 1 discription",
    Total_price: 3000,
    equity_id: 1,
  },
  {
    percentage: 10,
    disc: "This is project Equity 2 discription",
    Total_price: 6000,
    equity_id: 2,
  },
];
