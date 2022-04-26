import React, { FC } from "react";
import { Pressable, Text } from "react-native";
import { buttonStyles } from "../styles/Button";
import { styles } from "../styles/GlobalStyles";

interface Props {
  onPress: () => void;
  text: string;
}

export const Button: FC<Props> = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={buttonStyles.button}>
      <Text style={{ ...styles.font, color: "#fff", textAlign: "center" }}>
        {text}
      </Text>
    </Pressable>
  );
};
