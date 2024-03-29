import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
import SkillCard from "../components/SkillCard";
import Input from "../components/Input";
import useGrettings from "../hooks/useGrettings";

export type DataProps = {
  id: string;
  title: string;
};

export default function Home() {
  const [skill, setSkill] = useState("");
  const [allSkills, setAllSkills] = useState<DataProps[]>([]);
  const [grettings] = useGrettings();

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      title: skill,
    };
    setAllSkills(prev => [...prev, data]);
  }

  function handleRemoveSkill(id: string) {
    setAllSkills(prev => prev.filter(skill => skill.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Caio.</Text>
      <Text style={styles.grettings}>{grettings}</Text>

      <Input onChangeText={setSkill} placeholder="New Skill" />
      <Button onPress={handleAddNewSkill} disabled={skill.length === 0}>
        Add
      </Button>

      {!allSkills.length ? (
        <Text style={[styles.title, { marginTop: 70, textAlign: "center" }]}>
          Try to add a new skill!
        </Text>
      ) : (
        <SkillCard skills={allSkills} handleRemoveSkill={handleRemoveSkill} />
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
  grettings: {
    color: "#ffffff",
    fontSize: 18,
  },
});
