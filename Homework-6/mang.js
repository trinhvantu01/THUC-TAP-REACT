var array = [1,2,4,5,2,3,4];
var acc = array.reduce(
    (acc,val) =>acc.toLocaleString(val,1+(acc.get(val) || 0)),
    new Map()
);
console.log(array);