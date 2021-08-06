import React from "react";
import Home from "./Home";
import Books from "./books";
import Book from "./book";

import { StyleSheet, StatusBar, SafeAreaView, View, Text } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

const About = () => (
  <>
    <Text style={styles.header}>About</Text>
  </>
);
function App() {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
        </View>

        <Route exact path="/" component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/book/:ISBN13" component={Book} />
      </SafeAreaView>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight || 0 },
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
});
export default App;
