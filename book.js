import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, Button } from "react-native";
import { useHistory } from "react-router-native";

function Book({ match }) {
  const [book, setBook] = useState([]);
  const history = useHistory();

  useEffect(fetchBook, []);

  function fetchBook() {
    (async () => {
      setBooks(
        (await axios(`http://localhost:4000/books/${match.params.ISBN13}`)).data
          .book
      );
    })();
  }

  return (
    <View style={styles.imgHolder}>
      <Text style={styles.title}>{book.Title}</Text>
      <Image
        style={styles.img}
        source={{
          uri: `https://image.bokus.com/images/${match.params.ISBN13}`,
        }}
      />
      <Button
        style={styles.button}
        title="Back"
        onPress={() => history.push("/books")}
        color="#FF8C00"
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
    color: "black",
  },
  imgHolder: {
    backgroundColor: "#122335",
    height: 1000,
  },
  button: {},
});

export default Book;
