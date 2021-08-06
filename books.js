import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { Link } from "react-router-native";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(fetchBooks, []);

  function fetchBooks() {
    (async () => {
      setBooks((await axios("http://192.168.100.78:4000/books")).data.books);
    })();
  }

  return (
    <>
      <ScrollView style={styles.scrollView}>
        {books.map((book) => (
          <View key={book.ISBN13} style={styles.item}>
            <Text style={styles.title}>{book.Title}</Text>
            <Link to={`/book/${book.ISBN13}`}>
              <Image
                style={styles.img}
                source={{
                  uri: `https://image.bokus.com/images/${book.ISBN13}`,
                }}
              />
            </Link>
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
    color: "white",
    flexDirection: "column",
    flex: 1,
  },
  img: {
    marginLeft: 10,
    padding: 50,
    width: 100,
    height: 150,
  },
  scrollView: {
    backgroundColor: "#122335",
  },
});

export default Books;
