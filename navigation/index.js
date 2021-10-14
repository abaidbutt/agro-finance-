import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useSelector } from "react-redux";
import { HeaderIcon, Text } from "../components";
import AllFieldsScreen from "../screens/AllFieldsScreen";
import FieldSettingsScreen from "../screens/FieldSettingsScreen";
import PricesScreen from "../screens/PricesScreen";
import InfoScreen from "../screens/InfoScreen";
import ProductInfoScreen from "../screens/ProductInfoScreen";
import Login from "../screens/AuthScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../theme";

import { View } from "react-native";
import Toast from "react-native-toast-message";
const Stack = createStackNavigator();

function Navigation() {
  const { auth } = useSelector((state) => state);
  return (
    <NavigationContainer>
        <Toast ref={(ref) => Toast.setRef(ref)} />

      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#FFFFFF",
          headerBackground: () => (
            <LinearGradient
              colors={[theme.colors.primary, theme.colors.secondary]}
              style={{ flex: 1 }}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
            />
          ),
        }}
      >

        {auth.isSigned ? (
          <>
            <Stack.Screen
              name="AllFieldsScreen"
              component={AllFieldsScreen}
              options={({ navigation }) => ({
                headerTitle: () => null,
                headerRight: () => (
                  <HeaderIcon
                    imageSource={require("../assets/icons/settings.svg.png")}
                    position="Right"
                    label="Settings"
                    navigate={navigation.navigate}
                    location="SettingsScreen"
                  />
                ),
              })}
            />
            <Stack.Screen
              name="FieldSettingsScreen"
              component={FieldSettingsScreen}
              options={({ navigation }) => ({
                headerTitle: () => null,
                headerRight: () => (
                  <HeaderIcon
                    imageSource={require("../assets/icons/settings.svg.png")}
                    position="Right"
                    label="Field Settings"
                    navigate={navigation.navigate}
                    location="SettingsScreen"
                  />
                ),
              })}
            />

            <Stack.Screen
              name="SettingsScreen"
              component={SettingsScreen}
              options={() => ({
                headerTitle: () => (
                  <Text white title>
                    Settings
                  </Text>
                ),
              })}
            />
            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={() => ({
                headerTitle: () => (
                  <Text white title>
                    Profile
                  </Text>
                ),
              })}
            />
            <Stack.Screen
              name="InfoScreen"
              component={InfoScreen}
              options={() => ({
                headerTitle: () => null,
              })}
            />
            <Stack.Screen
              name="PricesScreen"
              component={PricesScreen}
              options={() => ({
                headerTitle: () => null,
              })}
            />
            <Stack.Screen
              name="ProductInfoScreen"
              component={ProductInfoScreen}
              options={() => ({
                headerTitle: () => null,
              })}
            />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={() => ({
              headerTitle: () => (
                <Text h1 white>
                  Login
                </Text>
              ),
            })}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
