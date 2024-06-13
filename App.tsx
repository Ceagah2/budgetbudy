import { Lato_300Light, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { PlayfairDisplay_400Regular, PlayfairDisplay_500Medium } from '@expo-google-fonts/playfair-display';
import { RobotoSlab_300Light, RobotoSlab_400Regular, RobotoSlab_500Medium } from '@expo-google-fonts/roboto-slab';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import * as React from "react";
import { ActivityIndicator } from 'react-native';
import "react-native-gesture-handler";
import About from "./src/screens/About";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Setup from "./src/screens/ProfileSetup";
import Slider from "./src/screens/Slider";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    RobotoSlab_300Light,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium
  })

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="IntroSlider">
      <Stack.Screen name="IntroSlider" component={Slider} options={{ headerShown: false }} />
      <Stack.Screen name="ProfileSetup" component={Setup} options={{ headerShown: false }} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}