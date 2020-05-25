let indhu = require("./node_modules/indhu-test/indhu");
let circle = require("./circle");

let result = circle(4);
let expected = 50.24;

indhu.test(result).toBeEqualTo(expected);

result = circle(28);
expected = 2461.76;

indhu.test(result).toBeEqualTo(expected);

/*Fail case*/
result = circle(8);
expected = 200;

indhu.test(result).toBeEqualTo(expected);
