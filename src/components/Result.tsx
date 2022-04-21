import React, { FC, Fragment } from "react";
import { Text } from "react-native";

interface Props {
  tipAmountPerPerson: number;
  totalPerPerson: number;
}

export const Result: FC<Props> = ({ tipAmountPerPerson, totalPerPerson }) => {
  return (
    <Fragment>
      <Text>Tip Amount / person</Text>
      {tipAmountPerPerson > 0 ? (
        <Text>${tipAmountPerPerson.toFixed(2)}</Text>
      ) : (
        <Text>0</Text>
      )}
      <Text>Total / person</Text>
      {totalPerPerson > 0 ? <Text>${totalPerPerson}</Text> : <Text>$0</Text>}
    </Fragment>
  );
};
