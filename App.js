// In App.js in a new project

import * as React from "react";
import { View, Text, TouchableHighlight, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "./theme";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./screens/AuthScreen";
import { store, persistor } from "./redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useAuth from "./hooks/useAuth";
import AllFieldsScreen from "./screens/AllFieldsScreen";
import Toast from "react-native-toast-message";

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>

          <Navigation />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
// import React from "react";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { Text, View } from "react-native";
// import Navigation from "./navigation";
// import { store, persistor } from "./redux/store";

// // delete field functionality

// const App = () => {
//   // persistor.purge();

//   return (
//     <View>
//       <Provider store={store}>
//         <PersistGate persistor={persistor}>
//           <Navigation />
//         </PersistGate>
//       </Provider>
//     </View>
//   );
// };

// export default App;
