import React from "react";
import { StyleSheet, Text, View } from "react-native";

type TodoItemProps = {
  text: string;
};

export default function TodoItem({ text }: TodoItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});

