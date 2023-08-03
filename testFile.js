function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0].name;
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].name < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), arr[0], ...quickSort(right)];
}

// Example usage:
const arrayOfObjects = [
  { name: "John" },
  { name: "Alice" },
  { name: "Bob" },
  { name: "Eve" },
  { name: "Charlie" },
];

const sortedArray = quickSort(arrayOfObjects);
console.log(sortedArray);
