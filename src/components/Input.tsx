import React, { FC } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../styles/GlobalStyles";
import { inputStyles } from "../styles/Input";

interface Props {
  text: string;
  onChangeText: (text: string) => void;
}

export const Input: FC<Props> = ({ text, onChangeText }) => {
  return (
    <View style={inputStyles.container}>
      <Text style={styles.font}>{text}</Text>
      <View style={inputStyles.input}>
        <Text
          style={{ ...styles.font, paddingHorizontal: 15, color: "#7f9c9f" }}
        >
          $
        </Text>
        <TextInput
          onChangeText={onChangeText}
          keyboardType="numeric"
          style={{
            ...styles.font,
            writingDirection: "rtl",
            width: "90%",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            textAlign: "right",
          }}
        />
      </View>
    </View>
  );
};
