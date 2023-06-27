
import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { StatusBar, StyleSheet, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignUpScreen';
import CreateAdsScreen from './screens/CreateAdsScreen';
import HomeScreen from './screens/ListItemScreen';
import AccountScreen from './screens/AccountScreen';
import auth from '@react-native-firebase/auth';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    primary: 'black',
  },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen} options={{ title: "", headerShown: false, }} />
      <Stack.Screen name="signup" component={SignupScreen} options={{ title: "", headerShown: false, }} />
    </Stack.Navigator>
  );
}
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Create') {
          iconName = 'plus-circle';
        } else {
          iconName = 'user'
        }
        return <View style={style.barBar}>
          <Feather name={iconName} size={25} color={color} />
        </View>;
      },
      tabBarActiveTintColor: 'deepskyblue',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "", }} />
      <Tab.Screen name="Create" component={CreateAdsScreen} options={{ title: "" }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{ title: "" }} />
    </Tab.Navigator>
  );
}
const Navigation = () => {
  const [user, setState] = useState("");
  useEffect(() => {
    auth().onAuthStateChanged((userExist) => {
      if (userExist) {
        setState(userExist.email);
      } else {
        setState("");
      }
    })
  }, [])
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="black"></StatusBar>
        <View style={style.container}>
          <Navigation />
        </View>
      </PaperProvider>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  barBar: {
    borderWidth: 15,
    borderColor: "white",
    borderRadius: 30,
    height: 60,
  },
})

export default App;
