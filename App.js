import Home from "./Home";
import Books from "./books";
import Book from "./book";
import React, { useState, useEffect } from "react";
import { StyleSheet, StatusBar, Switch, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "./config/themeContext";
import theme from "./config/theme";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

function App() {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });

  const [loaded] = useFonts({
    flower: require("./assets/fonts/IndieFlower-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
        <NavigationContainer>
          <Switch
            style={styles.toggle}
            value={mode}
            onValueChange={(value) => {
              setMode(value);
              EventRegister.emit("changeTheme", value);
            }}
          />

          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Books" component={Books} />
            <Stack.Screen name="Book" component={Book} />
          </Stack.Navigator>
        </NavigationContainer>
      </themeContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "blue",
  },
  button: {
    flex: 1,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  header: {
    fontSize: 20,
    textAlign: "center",
  },
  topic: {
    textAlign: "center",
    fontSize: 15,
  },
  container: {
    flex: 1,
  },
  toggle: {
    marginTop: 60,
  },
});
export default App;
