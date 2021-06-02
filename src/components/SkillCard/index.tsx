import React from "react";
import { Text, TouchableOpacity, FlatList } from "react-native";

import { DataProps } from "../../pages/Home";

import { styles } from "./styles";

export type SkillCardProps = {
  skills: DataProps[];
};

const SkillCard = ({ skills }: SkillCardProps) => {
  return (
    <>
      <Text style={styles.title}>My Skills</Text>

      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.buttonSkill}>
            <Text style={styles.textSkill}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default SkillCard;
