import React from "react";
import { Text, TouchableOpacity, FlatList } from "react-native";

import { styles } from "./styles";

export type SkillCardProps = {
  skills: String[];
};

const SkillCard = ({ skills }: SkillCardProps) => {
  return (
    <>
      <Text style={styles.title}>My Skills</Text>

      <FlatList
        data={skills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default SkillCard;
