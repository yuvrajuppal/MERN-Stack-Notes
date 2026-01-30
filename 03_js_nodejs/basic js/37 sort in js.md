
In JavaScript, `sort()` is the main method to sort an array in place, and `toSorted()` (newer) returns a new sorted array without changing the original.
## Default sort (strings)

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // → ["Apple", "Banana", "Mango", "Orange"]
```


For numbers, this usually gives wrong results because `"10"` < `"3"` as strings:
```js
const numbers = [3, 1, 4, 1, 5, 9];
numbers.sort();
console.log(numbers); // → [1, 1, 3, 4, 5, 9]? Wait, no:
// Actually → [1, 1, 3, 4, 5, 9] in most modern engines, but this is NOT guaranteed without a compare function.
```

## Sorting numbers correctly
```js
const points = [40, 100, 1, 5, 25, 10];
// Ascending order
points.sort((a, b) => a - b);
console.log(points); // → [1, 5, 10, 25, 40, 100]
// Descending order
points.sort((a, b) => b - a);
console.log(points); // → [100, 40, 25, 10, 5, 1]
```


The compare function returns:
- Negative if `a` should come before `b`
- Positive if `a` should come after `b`
- Zero if `a` and `b` are equal    

```js
(a, b) => a - b;  // ascending (a, b) => b - a;  // descending
```


```js
const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 18 },
  { name: "Charlie", age: 22 }
];
// Sort by age (ascending)
students.sort((a, b) => a.age - b.age);
```

