import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
import SkillCard from "../components/SkillCard";
import Input from "../components/Input";

export default function Home() {
  const [skill, setSkill] = useState("");
  const [allSkills, setAllSkills] = useState<String[]>([]);

  function handleAddNewSkill() {
    if (skill.length === 0) return;
    setAllSkills(prev => [...prev, skill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Caio!</Text>

      <Input onChangeText={setSkill} placeholder="New Skill" />
      <Button onPress={handleAddNewSkill}>Add</Button>

      {!allSkills.length ? (
        <Text style={[styles.title, { marginTop: 70, textAlign: "center" }]}>
          Try to add a new skill!
        </Text>
      ) : (
        <SkillCard skills={allSkills} />
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
});
