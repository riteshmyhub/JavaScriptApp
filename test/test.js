//---------------- String Length Property
// String Length Property is return length of string
// sapce is also count in length of string
let str = 'hello , jS';
console.log(str.length);

//---------------charAt Method
// this method is return specifics position (index) of string letter
let str2 = 'hello , JavaScript';
console.log(str2.charAt(10));

// ------------------charCodeAt
// this method is return unicode of string letter
let str3 = 'hello , JavaScript';
console.log(str3.charCodeAt(8));

//_______________toUpperCase and toLowerCase
// toUpperCase : this method is convert to string in UpperCase
// toLowerCase : this method is convert to string in LowerCase
let str4 = 'hello , JavaScript';
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

// __________________trim Method
// trim Method is remove whitespace from string
// this method is only remove whitespace from stating , ending but not between
let str5 = '     hello , JavaScript    ';
console.log(str5.trim());

// _______________replace Method
// IN replace Method pass two argument (old,new)
//  replace Method is replace to string value and add new value
// this method is case sensitive
// it is replace to first match
// let str6 = 'hello , JavaScript JavaScript';

let str6 = 'hello , JavaScript';
console.log(str6.replace('JavaScript', 'Es7'));
//

// --------------------------------------------
// _________split Method_________________
//split Method is break to big string in small string than assign in array
// in split method pass argument and  according argument break to string  i i i i i
let text = 'my name ritesh';
let arr = text.split(' '); //  here argument is space
console.log(arr);
document.write(arr[1]); // here access string in array item

// indexOf Method

let indexTexts = 'in split method pass argument and';
console.log(indexTexts.indexOf('p', 10)); //output 16

// serch method
let TextSemple = 'this string from java script';
let findIt = TextSemple.search('from');
console.log(findIt);// output is 12
