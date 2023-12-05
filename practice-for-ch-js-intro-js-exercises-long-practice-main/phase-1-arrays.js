// Your code here

Array.prototype.uniq = function () {
  return Array.from(new Set(this));
};

// console.log([1, 2, 2, 3, 3, 3].uniq());

// Array.prototype.twoSum = function () {
//   const sums = [];
//   this.forEach((n1, i) => {
//     this.slice(i + 1).forEach((n2, j) => {
//       if (n1 + n2 === 0) {
//         sums.push([i, j + i + 1]);
//       }
//     });
//   });
//   return sums;
// };

Array.prototype.twoSum = function () {
  const sums = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) sums.push([i, j]);
    }
  }
  return sums;
};

// console.log([-1, 0, 2, -2, 1].twoSum());

Array.prototype.transpose = function () {
  const transposed = [];
  this[0].forEach((_, i) => {
    transposed.push(
      this.map((e) => {
        return e[i];
      })
    );
  });
  return transposed;
};

console.log(
  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ].transpose()
);
