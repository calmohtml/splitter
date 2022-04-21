import React, { FC, useState } from "react";
import { SafeAreaView, Text, View, TextInput } from "react-native";
import { Button } from "./src/components/Button";
import { Footer } from "./src/components/Footer";
import { Input } from "./src/components/Input";
import { Result } from "./src/components/Result";

export const App: FC = () => {
  /* 
  We've to handle 3 states:
    1. Bill (user input)
    2. Tip Percentage
    3. Amount of People 
  */

  const [bill, setBill] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);

  /* 
  Case: 
    1. If "Bill" is 142.55
    2. Tip Percentage is 15%
    3. And we've 5 people
  
  Tip per Person is: 4.27
  Total per Person is: 32.79 
  */

  /* 
  Raw Total per Person: 
  142.55 (User Input) / 5 (Amount of People) = 28.55 
  */
  const rawTotalPerPerson: number = bill / people;

  /* 
  Raw Tip Amount per Person: 
  142.55 (User Input) x 0.15 (Tip Percentage) = 21.38 
  */
  const rawTipAmountPerPerson: number = bill * (tipPercentage / 100);

  /* 
  Tip Amount per Person: 
  21.38 (Raw Tip Amount per Person) / 5 (Amount of People) = 4.27 
  */
  const tipAmountPerPerson: number = rawTipAmountPerPerson / people;

  /* 
  Total per Person: 
  28.55 (Raw Total per Person) + 4.27 (Tip Amount per Person) = 32.79 
  */
  const totalPerPerson: number = Number(
    (rawTotalPerPerson + tipAmountPerPerson).toFixed(2)
  );

  const reset = () => {
    setBill(0);
    setTipPercentage(0);
    setPeople(0);
  };

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
      <Footer />
    </SafeAreaView>
  );
};
