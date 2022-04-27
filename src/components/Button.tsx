import React, { FC } from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";

interface Props {
  onPress: () => void;
  buttonStyles: {};
  textStyles: {};
  text: string;
}

export const Button: FC<Props> = ({
  onPress,
  buttonStyles,
  textStyles,
  text,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
