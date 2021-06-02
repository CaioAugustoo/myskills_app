import React from "react";
import { Text, TouchableOpacity } from 'react-native'

import { styles } from "./styles";

export type SkillCardProps = {
  skills: String[]
}

const SkillCard = ({ skills }: SkillCardProps) => {
  return (
    <>
      <Text style={styles.title}>My Skills</Text>
      
      {skills.map((skill, index) => (
        <TouchableOpacity style={styles.buttonSkill} key={`skill-${index}`}>
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default SkillCard;
