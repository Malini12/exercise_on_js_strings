var fruitBasket = [
    "banana",
    "cherry",
    "orange",
    "apple",
    "cherry",
    "orange",
    "apple",
    "banana",
    "cherry",
    "orange",
    "fig"
];
var count = fruitBasket.reduce(function (tally, fruit) {
    tally[fruit] = (tally[fruit] || 0) + 1;
    console.log(tally[fruit]);
    return tally;
}, {});
console.log(count);
