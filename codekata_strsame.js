var s1 = "guvi";
var s2 = "guvi";
var count = 0;
for (var i = 0; i < s1.length; i++) {
  if (s1.charCodeAt(i) == s2.charCodeAt(i)) {
    count = count + 1;
  }
}
console.log(count);
if (count == s1.length) {
  console.log("yes");
} else {
  console.log("no");
}
