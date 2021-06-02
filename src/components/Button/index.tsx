import React, { ReactNode } from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";

import { styles } from "./styles";

export type ButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
  children: ReactNode;
};

const Button = ({ onPress, children, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}
      {...props}
    >
      <Text style={styles.textButton}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
