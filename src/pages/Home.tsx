import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";

export default function Home() {
  const [skill, setSkill] = useState("");
  const [allSkills, setAllSkills] = useState<String[]>([]);

  function handleAddNewSkill() {
    setAllSkills(prev => [...prev, skill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Caio!</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setSkill}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.textButton}>Add</Text>
      </TouchableOpacity>

      {!allSkills.length ? (
        <Text style={[styles.title, { marginTop: 70, textAlign: "center" }]}>
          Try to add a new skill!
        </Text>
      ) : (
        <>
          <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
          {allSkills.map((skill, index) => (
            <TouchableOpacity style={styles.buttonSkill} key={`skill-${index}`}>
              <Text style={styles.textSkill}>{skill}</Text>
            </TouchableOpacity>
          ))}
        </>
      )}
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
    alignItems: "center",
    backgroundColor: "#a370f7",

    padding: 15,
    marginTop: 20,

    borderRadius: 7,
  },
  textButton: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 20,
    marginVertical: 10,

    borderRadius: 50,

    alignItems: "center",
  },
  textSkill: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
