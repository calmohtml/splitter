import React, { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/GlobalStyles";

interface Props {
  text: string;
}

export const Footer: FC<Props> = ({ text }) => {
  return (
    <View>
      <Text style={{ ...styles.font, textAlign: "center", marginVertical: 10 }}>
        {text}
      </Text>
    </View>
  );
};
