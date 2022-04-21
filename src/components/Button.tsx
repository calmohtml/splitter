import React, { FC } from "react";
import { Pressable, Text } from "react-native";

interface Props {
  onPress: () => void;
  text: string;
}

export const Button: FC<Props> = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
};
