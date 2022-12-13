// import { View, Text, } from 'react-native';
// import React, { useState } from 'react';
// const [modalVisible, setModalVisible] = useState(false);


// export default function Newscreen() {
//     return (
//         <Pressable
//             onPress={() => {
//                 setModalVisible(true)
//             }
//             }
//             style={{
//                 height: "55%",
//                 width: "28%",
//                 borderColor: "black",
//                 justifyContent: "center",
//                 marginEnd: 8,
//                 alignSelf: "center",
//                 alignItems: "center",
//                 backgroundColor: "#D6252E",
//             }}
//         >
//             <Text style={{ color: "white", position: "absolute" }}>
//                 View Backers
//             </Text>
//             <View style={styles.centeredView}>
//                 <Modal
//                     animationType="fade"
//                     transparent={true}
//                     visible={modalVisible}
//                     onRequestClose={() => {
//                         setModalVisible(!modalVisible);
//                     }}
//                     style={{ flex: 1 }}
//                 >
//                     <Pressable
//                         style={styles.centeredView}
//                         onPress={() => { setModalVisible(false) }
//                         }
//                     />
//                     <View
//                         style={[
//                             styles.modalView,
//                             {
//                                 position: "absolute",
//                                 alignSelf: "center",
//                                 marginTop: "45%",
//                             },
//                         ]}
//                     >
//                         <View
//                             style={{
//                                 flexDirection: "row",
//                                 justifyContent: "space-between",
//                             }}
//                         >
//                             <Text style={{ fontSize: 18, fontWeight: "bold" }}>
//                                 Name
//                             </Text>
//                             <Text style={{ fontSize: 18, fontWeight: "bold" }}>
//                                 Amount
//                             </Text>
//                         </View>
//                         <View
//                             style={{
//                                 marginTop: "5%",
//                                 height: "5%",
//                                 borderTopWidth: 1,
//                             }}
//                         />
//                         <FlatList
//                             data={set}
//                             renderItem={renderItem}
//                         // keyExtractor={item => item.C_ID}
//                         />
//                     </View>
//                 </Modal>
//             </View>
//         </Pressable>
//     )
// }

// const styles = StyleSheet.create({
//     centeredView: {
//         justifyContent: "center",
//         alignItems: "center",
//         // marginTop: '50%',
//         backgroundColor: "#000000aa",
//         flex: 1,
//     },
//     modalView: {
//         backgroundColor: "white",
//         width: "80%",
//         height: "50%",
//         borderRadius: 20,
//         padding: 20,
//         // alignItems: "center",
//         shadowColor: "#000",
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 10,
//     },

//     modalText: {
//         fontSize: 18,
//         color: "green",
//     },
// });
