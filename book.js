import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import themeContext from "./config/themeContext";

function Book({ route, navigation }) {
  const [book, setBook] = useState([]);
  const { ISBN13 } = route.params;

  useEffect(fetchBook, []);
  const theme = useContext(themeContext);

  function fetchBook() {
    (async () => {
      setBook(
        (await axios(`http://192.168.100.78:4000/books/${ISBN13}`)).data.book
      );
    })();
  }

  return (
    <View style={[styles.imgHolder, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.color }]}>{book.Title}</Text>
      <Image
        style={styles.img}
        source={{
          uri: `https://image.bokus.com/images/${book.ISBN13}`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    margin: 100,
    padding: 50,
    width: 200,
    height: 300,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    paddingTop: 30,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  imgHolder: {
    height: 1000,
  },
  button: {},
});

export default Book;
