import {
  StyleSheet,
  Text,
  Button,
  ImageBackground,
  View,
  Dimensions,
  Image,
} from "react-native";
import React, { useContext } from "react";
import themeContext from "./config/themeContext";
import { SwiperFlatList } from "react-native-swiper-flatlist";

function Home({ navigation }) {
  const theme = useContext(themeContext);

  return (
    <>
      <ImageBackground
        source={{
          uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/book-quotes-1531945007.jpg",
        }}
        style={styles.image}
      >
        <Text style={styles.title}>NEW!</Text>
      </ImageBackground>

      <View style={[styles.view, { backgroundColor: theme.background }]}>
        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination
          style={styles.sf}
        >
          <Image
            style={styles.images}
            source={require("./assets/images/blue.jpg")}
          />
          <Image
            style={styles.images}
            source={require("./assets/images/gray.jpg")}
          />
          <Image
            style={styles.images}
            source={require("./assets/images/yellow.jpg")}
          />
          <Image
            style={styles.images}
            source={require("./assets/images/pink.jpeg")}
          />
        </SwiperFlatList>

        <Button
          style={styles.button}
          title="Shop"
          onPress={() => navigation.navigate("Books")}
          color="orange"
        />
      </View>
    </>
  );
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  child: { width, justifyContent: "center" },
  text: { fontSize: width * 0.5, textAlign: "center" },

  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    height: 350,
    width: 600,
  },
  title: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    textAlign: "center",
    backgroundColor: "orange",
    margin: 20,
    marginLeft: 60,
    marginRight: 160,
    opacity: 0.7,
  },
  images: {
    width: 200,
    height: 300,
  },
});
export default Home;
