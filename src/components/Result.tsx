import React, { FC, Fragment } from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/GlobalStyles";
import { resultStyles } from "../styles/Result";

interface Props {
  tipAmountPerPerson: number;
  totalPerPerson: number;
}

export const Result: FC<Props> = ({ tipAmountPerPerson, totalPerPerson }) => {
  return (
    <Fragment>
      <View style={resultStyles.singleResult}>
        <View>
          <Text style={{ ...styles.font, color: "#fff" }}>Tip Amount</Text>
          <Text style={{ ...styles.font, color: "#fff" }}>/ person</Text>
        </View>
        {/* Ternary Operator */}
        <View>
          {tipAmountPerPerson > 0 ? (
            <Text style={{ ...styles.font, color: "#fff" }}>
              ${tipAmountPerPerson.toFixed(2)}
            </Text>
          ) : (
            <Text style={{ ...styles.font, color: "#fff" }}>$0</Text>
          )}
        </View>
        {/* Ternary Operator */}
      </View>
      <View style={resultStyles.singleResult}>
        <View>
          <Text style={{ ...styles.font, color: "#fff" }}>Total</Text>
          <Text style={{ ...styles.font, color: "#fff" }}>/ person</Text>
        </View>
        {/* Ternary Operator */}
        <View>
          {totalPerPerson > 0 ? (
            <Text style={{ ...styles.font, color: "#fff" }}>
              ${totalPerPerson}
            </Text>
          ) : (
            <Text style={{ ...styles.font, color: "#fff" }}>$0</Text>
          )}
        </View>
        {/* Ternary Operator */}
      </View>
    </Fragment>
  );
};
{
  /*
<View style={inputStyles.input}>
  <Text style={{ ...styles.font, paddingHorizontal: 15, color: "#7f9c9f" }}>
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
*/
}
