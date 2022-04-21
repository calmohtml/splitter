import React, { FC } from "react";
import { View, Text } from "react-native";

interface Props {
  text: string;
}

export const Footer: FC<Props> = ({ text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};
