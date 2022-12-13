import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import * as SplashScreen from "expo-splash-screen";
import * as SecureStore from "expo-secure-store";
import IconButton from "./Components/ui/IconButton";
import { AntDesign } from "@expo/vector-icons";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { Pressable } from "react-native";
import Forgotpass from "./Components/forms/forgotpass";

import Start from './screens/start';
import Drawer_Nav from './Components/Drawer_Nav';
import Details from './Components/Details';
import TrackUpdates from './Components/TrackUpdates';
import Rewards from './Components/Reward.js';
import Newscreen from './Components/Newscreen';
import AppContext from './Components/forms/AppContext';
import axios from "axios";

import Profitbased_Investment from "./Components/Profitbased_Investment";
import Donationbased_Investment from "./Components/Donationbased_Investment";

const Stack = createNativeStackNavigator();


function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="forgotpass" component={Forgotpass} />
    </Stack.Navigator>
  );
}
// ------------
function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  const [Is_data, SetIs_data] = useState(true);
  const [imageset, setimageset] = useState(true);
  const [email, setEmail] = useState("");
  const [check, setcheck] = useState("");
  const [pickedImagePath, setPickedImagePath] = useState(null);
  const [name, setname] = useState("");
  const [contactno, setcontactno] = useState("");
  const [cnic, setcnic] = useState("");
  const [password, setpassword] = useState("");
  const [val, setval] = useState("all");
  const imagesettings = {
    val,
    setval,
    imageset,
    setimageset,
    name,
    setname,
    email,
    setEmail,
    check,
    setcheck,
    pickedImagePath,
    setPickedImagePath,
    Is_data,
    SetIs_data,
    contactno,
    setcontactno,
    cnic,
    setcnic,
    password,
    setpassword,
  };
  const integratee = async () => {
    await axios
      .get(`http://192.168.0.109:3080/profile/useprofile`, {
        headers: {
          "x-access-token": token,
        },
      })
      .then(function (response) {
        let tempp = response.data[0];
        // console.log(tempp.first_name);
        setname(tempp.investor_name);
        setEmail(tempp.investor_email);
        setcontactno(tempp.investor_contact);
        setPickedImagePath(tempp.investor_image);
        setcnic(tempp.investor_cnic);
        setpassword(tempp.investor_password);
        SetIs_data(true);
        // console.log(tempp.C_IMAGE);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    integratee();
    // console.log(temp[0]);
  }, [email]);


  return (
    <AppContext.Provider value={imagesettings} >
      <Stack.Navigator
        initialRouteName="Drawer_Nav"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Drawer_Nav' component={Drawer_Nav} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Product Details",
            headerTintColor: "white",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#D6252E",
            },
            headerTitleStyle: {
              fontSize: 20,
              color: "white"
            },
          }}

        ></Stack.Screen>
        <Stack.Screen
          name="Track Progress"
          component={TrackUpdates}
          options={{
            title: "Updates",
            headerTintColor: "white",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#D6252E",
            },
            headerTitleStyle: {
              fontSize: 20,
              color: "white"
            },
          }}
        />
        <Stack.Screen
          options={{
            title: "Invest With Us!",
            headerTintColor: "white",

            headerTitleStyle: {
              color: "white",
            },
            headerShown: true,
            headerStyle: {
              backgroundColor: "#D6252E",
            },
          }}
          name="Rewards"
          component={Rewards}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerShadowVisible: false, // applied here
            headerBackTitleVisible: false,
            contentStyle: { backgroundColor: "#ffffff" },
            headerStyle: { backgroundColor: "#ffffff" },
          }}
          name="Profitbased Investment"
          component={Profitbased_Investment}
        ></Stack.Screen>
        <Stack.Screen
          options={{
            headerShown: true,
            headerShadowVisible: false, // applied here
            headerBackTitleVisible: false,
            contentStyle: { backgroundColor: "#ffffff" },
            headerStyle: { backgroundColor: "#ffffff" },
          }}
          name="Donationbased Investment"
          component={Donationbased_Investment}
        ></Stack.Screen>
      </Stack.Navigator>
    </AppContext.Provider>
  );
}

// ------------
function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, SetIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await SecureStore.getItemAsync("token");
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      SetIsTryingLogin(false);
      await SplashScreen.hideAsync();
    }
    fetchToken();
  }, []);

  if (isTryingLogin) {
    SplashScreen.preventAutoHideAsync();
  }
  return <Navigation />;
}

export default function App() {

  return (
    <>
      <StatusBar style="light" />

      <AuthContextProvider >
        <Root />
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});