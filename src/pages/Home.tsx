import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
      />

      <TouchableOpacity style={styles.button} activeOpacity={.8}>
        <Text style={styles.textButton}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 50}]}>My Skills</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#121015",

    paddingHorizontal: 30,
    paddingVertical: 80,
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",

    color: "#ffffff",
    fontSize: 18,

    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  textButton: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
