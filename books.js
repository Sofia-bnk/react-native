import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import themeContext from "./config/themeContext";

import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

function Books({ navigation }) {
  const [books, setBooks] = useState([]);
  const theme = useContext(themeContext);
  useEffect(fetchBooks, []);

  function fetchBooks() {
    (async () => {
      setBooks((await axios("http://192.168.100.78:4000/books")).data.books);
    })();
  }

  return (
    <>
      <ScrollView
        style={[styles.scrollView, { backgroundColor: theme.background }]}
      >
        {books.map((book) => (
          <View key={book.ISBN13} style={styles.item}>
            <Text style={[styles.title, { color: theme.color }]}>
              {book.Title}
            </Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Book", { ISBN13: book.ISBN13 })
              }
            >
              <Image
                style={styles.img}
                source={{
                  uri: `https://image.bokus.com/images/${book.ISBN13}`,
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    flexDirection: "column",
    flex: 1,
  },
  img: {
    marginLeft: 10,
    padding: 50,
    width: 100,
    height: 150,
  },
});

export default Books;
