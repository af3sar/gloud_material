let num = 42;

let str1 = String(num);
console.log("Using string():", str1);

let str2 = num.toString();
console.log("using .toString():", str2);

let str3 = `${num}`;
console.log("Using Template Literals:", str3);
