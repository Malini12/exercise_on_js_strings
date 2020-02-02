var str = "Aakjiimlojjzz";
len = str.length;
mid = parseInt(len / 2);
if (str.startsWith("a") || str.startsWith("A")) {
  if (str.endsWith("z") || str.endsWith("Z")) {
    if (str.charAt(mid) == "m" || str.charAt(mid) == "M") {
      console.log("beauiful");
    } else {
      console.log("no");
    }
  }
}
