import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  // Initialize state for the counter with an initial value of 0.
  const [count, setCount] = useState(0);

  // Function to increment the count.
  const incrementCount = () => {
    setCount(count + 1);
    // Write your logic here to increment the count
  }

  return (
    <View style={styles.container}>
      {/* 3️⃣ Affichage du compteur */}
      <Text style={styles.title}>The Counter</Text>
      <Text style={styles.countText}>Count: {count}</Text>

      {/* 4️⃣ Bouton d'incrémentation */}
      <View style={styles.container}>
        <Button title="Increment" onPress={incrementCount} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  countText: {
    fontSize: 48,
    fontWeight: "600",
    marginVertical: 20,
  },
});
