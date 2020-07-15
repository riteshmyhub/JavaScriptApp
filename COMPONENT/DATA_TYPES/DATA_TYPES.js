// ====================================================================
// =====================binding source code============================
// ====================================================================
export default class DataType {
  constructor(id) {
    this.id = id;
  }
  source_code(file, code) {
    let InCode = document.querySelector(this.id);
    InCode.innerHTML = `
  <section class="source-code" data-doc="${file}">
     <span class="material-icons code_dot">fiber_manual_record</span>
     <span class="material-icons code_dot">fiber_manual_record</span>
     <span class="material-icons code_dot">fiber_manual_record</span>
  </section>
  <pre>
    <code class="language-js">
       ${code}
    </code>
  </pre>`;
    return InCode;
  }
  Dstring() {
    return `${str}`;
  }
  Dnumber() {
    return `${num}`;
  }
  DBoolean() {
    return `${Bool}`;
  }
  DArray(){
    return `${Arr}`;
  }
  DObj(){
    return `${Objc}`;
  }
  DNull(){
    return `${nu}`;
  }
  DUndefined(){
    return `${un}`;
  }
  Dtypeof(){
    return `${typeo}`;
  }
}

const str = `var test = "lorem"`;

const Bool = `var test = true;
var test = false;
`;

const num = `var test = 123;`;

let arrEX = ["raj","rajesh","raju"];
const Arr = `var test = ["raj","rajesh","raju"];
 
${typeof arrEX}// this output`;

const Objc = `var test = {name:'raj',phone:989452348};`;

const nu = `var test = null;`;

const un = `var test = undefined;
//or
var test;
document.write(test);

undefined //this in output`;

var test =  123;
const typeo = `var test = 123;
document.write(typeof test);

${ typeof test}//this is output`;

