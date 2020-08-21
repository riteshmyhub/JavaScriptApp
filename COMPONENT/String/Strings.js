import SourceCode from '../../source_code_render.js';
export default class StringTopic extends SourceCode {
  Conc() {
    return Concatenation;
  }
  BackT() {
    return interpolation;
  }
  strL() {
    return var_strLength;
  }
  CharAA() {
    return var_CharAA;
  }
  CharCodes() {
    return var_CharCode;
  }
  StrCase() {
    return var_StrCase;
  }
  Strtrim() {
    return var_Strtrim;
  }
  StrReplace() {
    return var_StrReplace;
  }
  StrSplit() {
    return var_StrSplit;
  }
  StrIndexOf() {
    return var_StrIndexOf;
  }
  StrSearch() {
    return var_StrSearch;
  }
  StrSlice() {
    return var_StrSlice;
  }
  StrsubStr() {
    return var_subStr;
  }
}
// _________source code_________
const Concatenation = `
const test = 'if you happy and ';
const data = test.concat('you ', 'know ', 'say ', 'meow '); //must declare in variable
document.write(data);`;

let name = "'Alex'";
let CR = '`$&#123;';
let CL = '&#125;`';

const interpolation = `
const user =  ${name};
console.log(my name is ,${CR}user${CL});// add dynamic string
console.log(add num ,${CR}100+200${CL})// add mathematics expression
console.log(call functions ,${CR}method()${CL})// call functions
console.log(call functions ,${CR}voluptatum assumenda 
quidem dignissimos
 officiis${CL})// multiple line`;

const var_strLength = `
let str = 'hello , jS';
console.log(str.length);`;

const var_CharAA = `
let str2 = 'hello , JavaScript';
console.log(str2.charAt(10));`;

const var_CharCode = `
let str3 = 'hello , JavaScript';
console.log(str3.charCodeAt(8));`;

const var_StrCase = `
let str4 = 'hello , JavaScript';
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());`;

const var_Strtrim = `
let str5 = '     hello , JavaScript    ';
console.log(str5.trim());`;

const var_StrReplace = `
let str6 = 'hello , JavaScript';
console.log(str6.replace('JavaScript', 'Es7'));`;

const var_StrSplit = `
let text = 'my name is alex';
let arr = text.split(' '); //  here argument is space
console.log(arr);
document.write(arr[1]);`;

const var_StrIndexOf = `
let indexTexts = 'in split method pass argument and';
console.log(indexTexts.indexOf('p', 10)); //output 16`;

const var_StrSearch = `
let TextSemple = 'this string from java script';
let findIt = TextSemple.search('from');
console.log(findIt);// output is 12`;

const var_StrSlice = `
let text = 'this new saying be by gone';
let getPart = text.slice(9,15)
console.log(getPart);//output : saying `;

const var_subStr = `
let text = 'this new saying be by gone';
let getPart = text.substr(5,3)
console.log(getPart);//output : new `;
