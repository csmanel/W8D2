// Your code here

// Array.prototype.bubbleSort = function () {
//   let sorted = false;

//   while (!sorted) {
//     sorted = true;
//     this.slice(0, -1).forEach((e, i) => {
//       if (e > this[i + 1]) {
//         sorted = false;
//         [this[i], this[i + 1]] = [this[i + 1], this[i]];

//         // let temp = this[i];
//         // this[i] = this[j];
//         // this[j] = temp;
//       }
//     });
//   }
//   return this;
// };

// console.log([4, 2, 3, 1, 4, 6, 7, 8, 6].bubbleSort());

Array.prototype.bubbleSort = function (callback) {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    this.slice(0, -1).forEach((e, i) => {
      if (callback(e, this[i + 1])) {
        sorted = false;
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
      }
    });
  }
  return this;
};

console.log([4, 2, 3, 1, 4, 6, 7, 8, 6].bubbleSort((l, r) => l > r));

String.prototype.subStrings = function () {
  const substr = [];
  this.split('').forEach((_, i) => {
    let j, k;
    for (j = 0, k = i + 1; k <= this.length; j++, k++) {
      substr.push(this.slice(j, k));
    }
  });
  return substr;
};

// console.log('bigger'.subStrings());
function range(start, end) {
  if (end <= start) return [];

  return range(start, end - 1).concat([end - 1]);
}

// console.log(range(4, 7));

function sumRec(arr) {
  if (!arr.length) return 0;
  if (arr.length === 1) return arr[0];

  return sumRec(arr.slice(1)) + arr[0];
}

// console.log(sumRec([1, 2, 3, 4]));

function exponent(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;

  return exponent(base, exp - 1) * base;
}

// console.log(exponent(2, 3));

function fibonacci(n) {
  if (n < 2) return n;

  return fibonacci(n - 2) + fibonacci(n - 1);
}

// console.log(fibonacci(4));

function deepDup(arr) {
  return arr.map((el) => (el instanceof Array ? deepDup(el) : el));
}

// console.log(deepDup([[1, 2, 3, 4, 5]]));

function bsearch(arr, target) {
  const mid = Math.floor(arr.length / 2);
  if (target === arr[mid]) return mid;
  if (target < arr[mid]) return bsearch(arr.slice(0, mid), target);
  if (target > arr[mid]) return bsearch(arr.slice(mid + 1), target) + mid + 1;
  return -1;
}

// console.log(bsearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const leftSort = mergeSort(left);
  const rightSort = mergeSort(right);

  return merge(leftSort, rightSort);
}

function merge(l, r) {
  const merged = [];
  // while neither are empty
  while (l.length && r.length) {
    if (l[0] > r[0]) {
      merged.push(r.shift());
    } else {
      merged.push(l.shift());
    }
  }
  return merged.concat(l, r);
}

// console.log(mergeSort([9, 11, 1, 2, 5, 4, 3, 6]));

function subsets(a) {
  const s = [];
  a.forEach((_, i) => {
    let j, k;
    for (j = 0, k = i + 1; k <= a.length; j++, k++) {
      s.push(a.slice(j, k));
    }
  });
  return s;
}

console.log(subsets([1, 42, 46, 57]));
