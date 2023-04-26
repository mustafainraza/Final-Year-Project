// import {
//   Pressable,
//   StyleSheet,
//   View,
//   FlatList,
//   Text,
//   ActivityIndicator,
// } from "react-native";
// import LottieView from "lottie-react-native";
// import React, { useEffect, useState, useRef, useContext } from "react";
// import Project from "./project";
// import axios from "axios";
// import AppContext from "./forms/AppContext";
// import { AuthContext } from "../store/auth-context";

// export default function ENDING_SOON({ navigation }) {
//   const authCtx = useContext(AuthContext);
//   const token = authCtx.token;
//   const myContext = useContext(AppContext);
//   const [set, setData] = useState(null);
//   const [timeout, settime] = useState(true);
//   const [isdata, setisdata] = useState(true);
//   const [likes, setlikes] = useState(null);

//   const animationRef = useRef(null);

//   const sad = async () => {
//     let isUnmounted = false;
//     settime(true);
//     await axios
//       .get(
//         `http://192.168.254.213:3080/Campaign/endingsoonprojectdetails?token=${token}`
//       )
//       .then(function (response) {
//         if (!isUnmounted) {
//           let temp = [];
//           for (var i = 0; i < response.data.length; i++) {
//             temp.push(response.data[i]);
//           }
//           setData(temp);
//           setTimeout(() => {
//             settime(false);
//           }, 2500);
//         }
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     return () => {
//       isUnmounted = true;
//     };
//   };

//   const checklike = async () => {
//     await axios
//       .get(`http://192.168.254.213:3080/favourite/showlikes`, {
//         headers: {
//           investor_id: myContext.investor_id,
//         },
//       })
//       .then(function (response) {
//         setlikes(response.data);
//         console.log(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   const refreshdata = () => {
//     settime(true);
//     sad();
//     checklike();
//     setTimeout(() => {
//       settime(false);
//     }, 2500);
//   };

//   useEffect(() => {
//     animationRef.current?.play();
//     sad();
//   }, []);

//   useEffect(() => {
//     if (myContext.investor_id) {
//       checklike();
//     }
//   }, [myContext.investor_id]);

//   const renderItem = ({ item }) =>
//     myContext.val == item.campaign_type || myContext.val == "all" ? (
//       <Pressable
//         style={styles.container}
//         android_ripple={{ borderless: false, color: "lightgrey" }}
//         onPress={() => {
//           navigation.navigate("Details", {
//             title: item.campaign_title,
//             data: item.campaign_image,
//             disc: item.campaign_description,
//             funded: Math.ceil(
//               (item.campaign_earning / item.campaign_goal) * 100
//             ),
//             C_ID: item.campaigner_id,
//             GOAL: item.campaign_goal,
//             campaign_type: item.campaign_type,
//             hours: item.hours,
//             backed: item.backers,
//             Name: item.campaigner_name,
//             total: item.campaign_earning,
//             campaign_id: item.campaign_id,
//           });
//         }}
//       >
//         <Project
//           title={item.campaign_title}
//           disc={item.campaign_description}
//           funded={Math.ceil((item.campaign_earning / item.campaign_goal) * 100)}
//           backed={item.backers}
//           hours={item.hours}
//           data={item.campaign_image}
//           C_ID={item.campaigner_id}
//           campaign_type={item.campaign_type}
//           campaign_id={item.campaign_id}
//           isLiked={likes.find((Item) =>
//             Item.campaign_id === item.campaign_id ? true : false
//           )}
//         />
//       </Pressable>
//     ) : (
//       ""
//     );
//   return (
//     <View>
//       {timeout ? (
//         <View
//           style={{
//             backgroundColor: "white",
//             height: "100%",
//             width: "100%",
//           }}
//         >
//           <View
//             style={{
//               marginTop: "80%",
//               width: "100%",
//               height: 200,
//             }}
//           >
//             <LottieView
//               autoPlay
//               loop={timeout}
//               duration={4000}
//               ref={(animation) => {
//                 animationRef.current = animation;
//               }}
//               source={require("../assets/business-investor-gaining-profit-from-investment.json")}
//             />
//           </View>
//         </View>
//       ) : isdata == false ? (
//         <View style={styles.empty}>
//           <Text style={styles.textt}>No Projects here...</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={set}
//           renderItem={renderItem}
//           onRefresh={refreshdata}
//           refreshing={false}
//           keyExtractor={(item) => item.campaign_id}
//         />
//       )}
//     </View>
//   );
// }

// export const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#003047",
//     marginTop: 25,
//     marginLeft: 25,
//     width: "86%",
//     height: 400,
//     borderRadius: 30,
//   },
//   empty: {
//     marginTop: "80%",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   textt: {
//     fontSize: 30,
//     fontWeight: "bold",
//   },
// });
