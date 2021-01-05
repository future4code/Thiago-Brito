1)
```ts
const findFirstRecurringCharacter = (input: string): string | null => {
  const charHashMap: { [index: string]: boolean } = {};
  for (const char of input) {
    if (charHashMap[char] === true) {
      return char;
    }
    charHashMap[char] = true;
  }
  return null;
};
```
A complexidade é O(n) visto que por possuir um loop For onde  possui index indeterminado o tempo é N

2)
```ts

export const func = (
  source: string,
  comparison: string
): boolean => {
  if (
    comparison.length > source.length + 1 ||
    comparison.length < source.length - 1
  ) {
    return false;
  }
  let commonCharQuantity = 0;

  for (const char of comparison) {
    if (source !== comparison) {
      commonCharQuantity++;
    }
  }
  return (
    commonCharQuantity <= source.length + 1 &&
    commonCharQuantity >= source.length - 1
  );
}
```
A complexidade é O(n) visto que por possuir um loop For o seu tempo é N

3)
```ts
export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz");
  }

  matrix[rowIndex][columnIndex] = value;
};
```
A complexidade é O(1).

4)
```ts
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}
```
A complexidade é O(n²)

5)
O(1) > O(n)=O(n) O(n²)

6) 
```ts
function product(a: number, b: number): number {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum
}
```
A complexidade é O(b)

7)
```ts
function mod(a: number, b: number): number {
  if (b <= a) {
    return -1;
  }
  let div = a / b;
  return a - div * b;
}
```
A compleexidade é O(1)

8)
a)
```ts
function copyArray(array: number[]): number[] {
  let copy: number[] = [];
  for (const value of array) {
    copy = appendToNew(copy, value);
  }
  return copy;
}
```
b)
```ts
function appendToNew(array: number[], value: number) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  newArray.push(value);
  return newArray;
}
```
a) A complexidade é O(N)
b)A complexidade é O(N²)