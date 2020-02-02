var str = "aab";
if (str.length == 3) {
  if (
    str.charCodeAt(0) !== str.charCodeAt(1) &&
    str.charCodeAt(0) !== str.charCodeAt(2) &&
    str.charCodeAt(1) !== str.charCodeAt(2)
  ) {
    console.log("beautiful");
  } else {
    console.log("not beautiful");
  }
} else {
  console.log("not beautiful");
}
