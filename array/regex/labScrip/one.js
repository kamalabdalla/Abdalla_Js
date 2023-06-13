 
// let reg1 = /^\$\d/;
// let res1 = reg1.test("$14.99")
// console.log(res1);
// document.write(res1);

// let reg2 = /^\$\d/;
// let res2 = reg2.test("$1234567.00")
// console.log(res2);
// document.write(res2);
 
// let reg4 = /^\$[\d]*[\.][0-9]{2}$/;
// let res4 = reg4.test("$.90")
// console.log(res4);
// document.write(res4);

let reg4 = /\s*(`.`)\/;
let res4 = reg4.test('<img src="foo.jpg" />')
console.log(res4);
document.write(res4);
