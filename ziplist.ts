function zipList<T, U>(array1: T[], array2: U[]): Array<T | U> {
  const result: Array<T | U> = [];
  const maxLength = Math.max(array1.length, array2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < array1.length) {
      result.push(array1[i]);
    }
    if (i < array2.length) {
      result.push(array2[i]);
    }
  }

  return result;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

function zipListTheFunctionalWay<T, U>(array1: T[], array2: U[]): Array<T | U> {
  return array1.reduce((acc: Array<T | U>, currentValue: T, index: number) => {
    acc.push(currentValue);
    if (index < array2.length) {
      acc.push(array2[index]);
    }
    return acc;
  }, []);
}

console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
