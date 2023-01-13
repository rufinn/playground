import { expect, it } from "vitest";

interface IAmount {
  amount: number
}

const coerceAmount = (amount: number | IAmount) => {
  if (typeof amount === 'number') {
    return amount;
  }
  return amount.amount;
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});
