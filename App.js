import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function BasicCounter() {
  const [count, setCount] = useState(0);

  const handleCounter = (data) => {
    if (data === 'inc') setCount(count + 1)
    else if (data === 'dec') setCount(count - 1)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handleCounter('dec')}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <View style={styles.counter}>
        <Text style={styles.number}>{count}</Text>
      </View>
      <TouchableOpacity style={styles.button}  onPress={() => handleCounter('inc')}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: 'lightblue',
    height: 60,
    width: 60,
    textAlign: 'center',
    borderRadius: '50%'
  },
  buttonText: {
    fontSize: 40,
    fontWeight: 600,
    lineHeight: 60
  },
  counter: {
    border: '1px solid',
    height: 60,
    width: 150,
    marginHorizontal: 20,
    textAlign: 'center'
  },
  number: {
    lineHeight: 60,
    fontSize: 25
  }
});
