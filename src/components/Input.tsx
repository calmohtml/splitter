import React, { FC } from "react";
import { View, Text, TextInput } from "react-native";

interface Props {
  text: string;
  onChangeText: (text: string) => void;
}

export const Input: FC<Props> = ({ text, onChangeText }) => {
  return (
    <View>
      <Text>{text}</Text>
      <TextInput onChangeText={onChangeText} keyboardType="numeric" />
    </View>
  );
};
