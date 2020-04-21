function utf8Encoding(str) {
  return str
    .split("")
    .map((s) => `\\u${s.charCodeAt().toString(16)}`)
    .join("");
}

console.log(utf8Encoding("极客大学——前端训练营"));
