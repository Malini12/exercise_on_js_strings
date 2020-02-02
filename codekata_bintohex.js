var num = "1100100";
var len = num.length;
var myarr = num.split("");
if (len % 2 !== 0) {
  myarr.unshift("0");
}
var udpnum = "".concat(...myarr);
console.log(udpnum);
var count = len / 4;
var newarr = [];
var iter = 1;
//while (iter <= count) {
//for (var i = 0; i < udpnum.length; i + 4) {

newarr.push(udpnum.slice(0, 4));
newarr.push(udpnum.slice(4, 9));

//}
//iter = iter + 1;
//}
console.log(newarr);
var table = {
  "0000": "0",
  "0001": "1",
  "0010": "2",

  "0011": "3",
  "0100": "4",
  "0101": "5",
  "0110": "6",
  "0111": "7",
  "1000": "8",
  "1001": "9",
  "1010": "A",
  "1011": "B",
  "1100": "C",
  "1101": "D",
  "1110": "E",
  "1111": "F"
};
var udparr = [];
for (i of newarr) {
  for (var j in table) {
    if (j == i) {
      udparr.push(table[j]);
    }
  }
}
var hexstr = "".concat(...udparr);
console.log(hexstr);
