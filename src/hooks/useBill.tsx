import { useState } from "react";

export const useBill = () => {
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

  return {
    setBill,
    setTipPercentage,
    setPeople,
    tipAmountPerPerson,
    totalPerPerson,
    reset,
  };
};
