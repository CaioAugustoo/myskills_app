import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  input: {
    backgroundColor: "#1f1e25",

    color: "#ffffff",
    fontSize: 18,

    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
