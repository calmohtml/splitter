import React, { FC } from "react";
import { SafeAreaView, Text, View, TextInput } from "react-native";
import { styles } from "./src/styles/GlobalStyles";
import { useBill } from "./src/hooks/useBill";
import { Input } from "./src/components/Input";
import { Button } from "./src/components/Button";
import { Result } from "./src/components/Result";
import { Footer } from "./src/components/Footer";
import { buttonStyles } from "./src/styles/Button";

export const App: FC = () => {
  const {
    setBill,
    setTipPercentage,
    setPeople,
    tipAmountPerPerson,
    totalPerPerson,
    reset,
  } = useBill();

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.title}>
        <Text style={styles.font}>SPLI</Text>
        <Text style={styles.font}>TTER</Text>
      </View>
      <View style={styles.container}>
        <Input
          text={"Bill"}
          onChangeText={(billValue) => setBill(Number(billValue))}
        />
        <Text style={styles.font}>Select Tip %</Text>
        <View style={styles.row}>
          <Button onPress={() => setTipPercentage(Number(5))} text={"5%"} />
          <Button onPress={() => setTipPercentage(Number(10))} text={"10%"} />
        </View>
        <View style={styles.row}>
          <Button onPress={() => setTipPercentage(Number(15))} text={"15%"} />
          <Button onPress={() => setTipPercentage(Number(25))} text={"25%"} />
        </View>
        <View style={styles.row}>
          <Button onPress={() => setTipPercentage(Number(50))} text={"50%"} />
          <TextInput
            onChangeText={(tipValue) => setTipPercentage(Number(tipValue))}
            keyboardType="numeric"
            placeholder="Custom"
            style={{
              ...buttonStyles.button,
              paddingHorizontal: 15,
              backgroundColor: "#c5e4e7",
              fontFamily: "SpaceMono-Bold",
              color: "#00494d",
            }}
          />
        </View>
        <Input
          text={"Number of People"}
          onChangeText={(peopleValue) => setPeople(Number(peopleValue))}
        />
        <View style={styles.resultContainer}>
          <Result
            tipAmountPerPerson={tipAmountPerPerson}
            totalPerPerson={totalPerPerson}
          />
          <Button onPress={reset} text={"Reset"} />
        </View>
        <Footer text={"Challenge by Frontend Mentor. Coded by @calmohtml"} />
      </View>
    </SafeAreaView>
  );
};
