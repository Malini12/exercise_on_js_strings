var str = "helloo";
len = str.length;
oddlen = parseInt(len / 2);
evenlen = len / 2;
nxtlen = evenlen + 1;
console.log(evenlen);
var newstr;
var newstr1;
if (len % 2 == 0) {
  for (var i = 0; i < str.length; i++) {
    if (i == evenlen) {
      newstr1 = str.replace(str[i - 1], "*");
      newstr = newstr1.replace(str[i], "*");
    }
  }
} else {
  for (var i = 0; i < str.length; i++) {
    if (i == oddlen) {
      newstr = str.replace(str[i], "*");
    }
  }
}
console.log(newstr);
