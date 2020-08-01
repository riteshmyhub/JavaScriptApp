import SourceCode from '../../source_code_render.js';

export default class Arrays extends SourceCode {
  arithm() {
    return `${what_arr}`;
  }
  Arr_Literal() {
    return `${Array_Literal}`;
  }
  // array constructor
  Co_arr() {
    return `${co_arr_syntax}`;
  }
  // Mode_Array
  ModeArr() {
    return `${Mode_Array}`;
  }
  Remove_A() {
    return `${Remove_arr}`;
  }
  // length of array
  ALength() {
    return `${arrayL}`;
  }
  // for loop
  AFor() {
    return `${ArrFor}`;
  }
  // for Each loop
  FELoop() {
    return `${forEachLoop}`;
  }
  forOfL() {
    return `${forOfLoop}`;
  }
  InFoUser() {
    return `${input_from_arr}`;
  }
  // mulit D array
  MDA() {
    return `${MultiArr}`;
  }
  // empty 2D Array
  empty2DArray() {
    return `${empty2DArr}`;
  }
  // empty 2D Array Inputs
  empty2DArrInputs() {
    return `${empty2DArrInput}`;
  }
  // concat method
  concM() {
    return `${ConC}`;
  }
  concArray() {
    return `${concArr}`;
  }
  joinMethood() {
    return `${Joi}`;
  }
  revs() {
    return `${rev}`;
  }
  sliceArray() {
    return `${sliceArr}`;
  }
  isArr() {
    return `${ISarr}`;
  }
  Spc() {
    return `${spliceM}`;
  }
  IndOf() {
    return `${InOf}`;
  }
  fillmet(){
    return `${fillM}`
  }
}
// ====================================================================
// ============================source code============================
// ====================================================================
const what_arr = `
 let Framework = ["angular","react","vue"];
 document.write(Framework);// output - angularr,react,vue`;
const Array_Literal = `
  let mobile = [];
  mobile[0]="htc";
  mobile[1]="Lg";
  mobile[2]="mi";
  mobile[3]="vivo";

  document.write(mobile);
  document.write(mobile[1]);//mobile[0][1]....

        //-------or-----------
  let a="htc",b="Lg",c="mi",d="vivo";
  let mobile = [a,b,c,d];`;

const co_arr_syntax = `
const name = new Array();
name[0]="abc";
name[1]="xyz";
name[2]=123;
name[3]=true;
// ------or------
const name = new Array("abc","xyz",123,true);

document.write(name[0])//...[1]....n`;

const Mode_Array = `
let FirstYear = ['raj',"akash",'abhishek'];
FirstYear[0]="rajesh";// raj is Modifying in rajesh
// -----or---------
let FirstYear = ['raj',"akash",'abhishek'];
let test = FirstYear;
test[0]="rajesh";`;

const Remove_arr = `
let FirstYear = ['raj',"akash",'abhishek'];
delete FirstYear[0];// raj is remove`;

const arrayL = `
let day = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.write(day.length);//output in 7`;

const ArrFor = `
let day = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

for(let i=0; i&lt;day.length;i++){
    document.write(day[i]+'&ltbr&gt');
    //output sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday
}`;

const forEachLoop = `
let name = ['one','two','three'];
name.forEach(function (V, I){
document.write(V+I);//output- one,two,three
}); `;

const forOfLoop = `
const myArr = ['a','b','c','d','e'];
for (const iterator of myArr) {
  console.log(iterator);
}`;

const input_from_arr = `
let arrays = [];
let forUserRes = prompt('how much product item number');

for (let i = 0; i < forUserRes; i++) {
  arrays[i] = prompt('Enter product item');
}

for (let i = 0; i < forUserRes; i++) {
  document.write(arrays[i]);
}`;

const MultiArr = `
const frontend = [
  ['framwork', 'angular', 'version 10.0'],
  ['library', 'react', 'version 17.0'],
  ['framwork', 'vue', 'version 2.3'],
];// this MultiDimensional Array

  // parent loop
  for (let i = 0; i < 3; i++) {
    // parent loop
    for (let j = 0; j < 3; j++) {
      document.write(fronend[i] [j]+ " ");
    }
    document.write('&lt;br&gt');
  }`;
const empty2DArr = `
let blankArr = [];
let Row = 3;
let col = 4;
for (let i = 0; i < Row; i++) {
  blankArr[i] = [];
}//this is increases array in array like - [[],[]...]

for (let i = 0; i < Row; i++) {
  for (let j = 0; j < col; j++) {
    document.write([i] + [j] + '|');
  }
  document.write('&lt;br&gt');
}`;
const empty2DArrInput = `
let blankArr = [];
let Row = 3;
let col = 4;
for (let i = 0; i < Row; i++) {
  blankArr[i] = [];
}

for (let i = 0; i < Row; i++) {
  for (let j = 0; j < col; j++) {
    blankArr[i][j]=prompt('Enter names');
    document.write(blankArr[i][j]+ '|' );
  }
  document.write('&lt;br&gt');
}`;
const ConC = `
const testArr = ['one', 'two', 'three'];

const Mergre = testArr.concat('four', 'five', 'six');
console.log(Mergre);`;

const concArr = `
const FirstArr = ['one', 'two', 'three'];
const SecArr = ['four', 'five', 'six'];

const Mergre = testArr.concat(SecArr);
console.log(Mergre);`;
// join method
const Joi = `
const test = ['one', 'two', 'three'];
let somes = test.join(' (or) ');
document.write('select any number : - '+somes);
//output is - select any number :  one (or) two (or) three (or)`;

const rev = `
const arr = ['one', 'two', 'three'];
arr.reverse()// output in ["three","two","one"]`;

const sliceArr = `
const arr = ['one', 'two', 'three', 'four', 'five', 'six'];
const ssss = arr.slice(1,5);
console.log(ssss);// output : 'two', 'three', 'four', 'five'`;

const ISarr = `
const check_o = ['one', 'two', 'three'];
const check_t = 'str';
const checkingTo = Array.isArray(check_o);

console.log(checkingTo); //output is true`;
const spliceM = `
const TestArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
TestArr.splice(6,5,'New_X','New_Y','New_Z');
console.log(TestArr);// output a,b,c,d,e,New_X,New_Y,New_Z; `;

const InOf = `
const TestArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const search = TestArr.indexOf('c');
console.log(search)//output in 2 ;

const search = TestArr.indexOf('c',1);// 1 is in index of array
console.log(search)//output in 2 ;`;

const fillM = `
const outputD = ['A', 'B', 'C', 'D', 'E', 'F'];
outputD.fill('😂', 1, 4);
console.log(outputD);
// output = "A", "😂", "😂", "😂", "E", "F"

//-----------------------with one argument-----------------
const outputD = ['A', 'B', 'C', 'D', 'E', 'F'];
outputD.fill('😃');
console.log(outputD);
//output =  "😃", "😃", "😃", "😃", "😃", "😃";

// -----------------------fill method with array constructor
let dataEpmty = new Array(3);
dataEpmty.fill("🤣")
document.write(dataEpmty)//output 🤣🤣🤣`;

const unshiftme = [];

