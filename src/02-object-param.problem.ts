import { expect, it } from "vitest";

// solution 1

type Params = {
  first : number;
  second : number;
}

/* export const addTwoNumbers = (params : Params) => {
  return params.first + params.second;
};
 */

// solution 2 
/* export const addTwoNumbers = (params : { first: number, second: number }) => {
  return params.first + params.second;
}; */

// solution 3

interface Params3 {
  first : number,
  second : number
}
export const addTwoNumbers = (params : Params3) => {
  return params.first + params.second;
};



it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
