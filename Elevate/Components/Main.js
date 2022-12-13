import react, { useState, useEffect } from "react";
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    SafeAreaView,
} from "react-native";
import AppContext from "./forms/AppContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import Edit_Profile_Screen from "./Edit_Profile_Screen";
import Search_Screen from "../screens/Search_Screen";
import Change_Password from "./Change_Password";
import axios from "axios";
const Stack = createNativeStackNavigator();
export default function Main() {



    // useEffect(() => {
    //   console.log(temp);

    // }, [temp]);

    return (
        // <AppContext.Provider value={imagesettings}>
        <Stack.Navigator
            initialRouteName="Profilee"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Profilee" component={Profile}></Stack.Screen>
            <Stack.Screen
                options={{
                    headerShown: false,
                    headerShadowVisible: false, // applied here
                    headerBackTitleVisible: false,
                    contentStyle: { backgroundColor: "#ffffff" },
                    headerStyle: { backgroundColor: "#ffffff" },
                }}
                name="Search"
                component={Search_Screen}
            ></Stack.Screen>
            <Stack.Screen
                options={{
                    headerShown: false,
                    headerShadowVisible: false, // applied here
                    headerBackTitleVisible: false,
                    contentStyle: { backgroundColor: "#ffffff" },
                    headerStyle: { backgroundColor: "#ffffff" },
                }}
                name="Edit_Profile"
                component={Edit_Profile_Screen}
            ></Stack.Screen>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerShadowVisible: false, // applied here
                    headerBackTitleVisible: false,
                    contentStyle: { backgroundColor: "#ffffff" },
                    headerStyle: { backgroundColor: "#ffffff" },
                }}
                name="Change Password"
                component={Change_Password}
            ></Stack.Screen>
        </Stack.Navigator>
        // </AppContext.Provider>
    );
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: "#ffffff",
        flex: 1,
        //justifyContent: "space-evenly",
    },
});
