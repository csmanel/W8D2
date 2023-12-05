// Your code here

Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

Array.prototype.myMap = function (callback) {
    const newArr = [];
    this.myEach(function (e) {
        newArr.push(callback(e));
    });
    return newArr;
};

Array.prototype.myReduce = function (callback, initialValue = this[0]) {
    let acc = initialValue;
    this.myEach((e) => {
        acc = callback(acc, e);
    });
    return acc;
};

