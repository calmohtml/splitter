import React, { FC } from "react";
import { SafeAreaView, Text, View, TextInput } from "react-native";
import { useBill } from "./src/hooks/useBill";
import { Input } from "./src/components/Input";
import { Button } from "./src/components/Button";
import { Result } from "./src/components/Result";
import { Footer } from "./src/components/Footer";

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
    <SafeAreaView>
      <Text>Splitter</Text>
      <Input
        text={"Bill"}
        onChangeText={(billValue) => setBill(Number(billValue))}
      />
      <View>
        <Text>Select Tip %</Text>
        <Button onPress={() => setTipPercentage(Number(5))} text={"5%"} />
        <Button onPress={() => setTipPercentage(Number(10))} text={"10%"} />
        <Button onPress={() => setTipPercentage(Number(15))} text={"15%"} />
        <Button onPress={() => setTipPercentage(Number(25))} text={"25%"} />
        <Button onPress={() => setTipPercentage(Number(50))} text={"50%"} />
        <TextInput
          onChangeText={(tipValue) => setTipPercentage(Number(tipValue))}
          keyboardType="numeric"
        />
      </View>
      <Input
        text={"Number of People"}
        onChangeText={(peopleValue) => setPeople(Number(peopleValue))}
      />
      <View>
        <Result
          tipAmountPerPerson={tipAmountPerPerson}
          totalPerPerson={totalPerPerson}
        />
        <Button onPress={reset} text={"Reset"} />
      </View>
      <Footer text={"Challenge by Frontend Mentor. Coded by @calmohtml"} />
    </SafeAreaView>
  );
};
