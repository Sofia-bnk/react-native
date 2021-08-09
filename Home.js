import { StyleSheet, Text, Button, ImageBackground, View } from "react-native";
import React, { useContext } from "react";
import themeContext from "./config/themeContext";

function Home({ navigation }) {
  const theme = useContext(themeContext);
  return (
    <>
      <ImageBackground
        source={{
          uri: "https://ychef.files.bbci.co.uk/976x549/p03gg1dp.jpg",
        }}
        style={styles.image}
      >
        <Text style={styles.title}>Join Us Today!</Text>
      </ImageBackground>

      <View style={[styles.view, { backgroundColor: theme.background }]}>
        <Text style={[styles.text, { color: theme.color }]}>
          Tree month free{" "}
        </Text>
        <Text style={[styles.text, { color: theme.color }]}>
          Join us to be a part of recycling 1000 papers every day{" "}
        </Text>
        <Text style={[styles.text, { color: theme.color }]}>
          Let us to have a green World!{" "}
        </Text>

        <Button
          style={styles.button}
          title="Shop"
          onPress={() => navigation.navigate("Books")}
          color="#FF8C00"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    paddingBottom: 30,
    fontSize: 15,
  },
  view: { height: 350, paddingTop: 50 },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    height: 410,
    width: 500,
  },
  title: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    textAlign: "center",
    backgroundColor: "#000000c0",
    margin: 20,
    marginLeft: 60,
    marginRight: 160,
  },
});
export default Home;
