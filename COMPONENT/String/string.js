import SourceCode from '../../source_code_render.js';
export default class StringTopic extends SourceCode {
  Conc() {
    return Concatenation;
  }
  BackT(){
  return interpolation;
  }
}
// _________source code_________
const Concatenation = `
const test = 'if you happy and ';
const data = test.concat('you ', 'know ', 'say ', 'meow '); //must declare in variable
document.write(data);`;

let name = "'Alex'";
let CR = "`$&#123;"
let CL = "&#125;`"

const interpolation = `
const user =  ${name};
console.log(my name is ,${CR}user${CL});// add dynamic string
console.log(add num ,${CR}100+200${CL})// add mathematics expression
console.log(call functions ,${CR}method()${CL})// call functions
console.log(call functions ,${CR}voluptatum assumenda 
quidem dignissimos
 officiis${CL})// multiple line`;