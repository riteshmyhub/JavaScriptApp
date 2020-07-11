const Topic = [
  { name: 'string' },
  { name: 'Number' },
  { name: 'Boolean' },
  { name: 'Array' },
  { name: 'Object' },
  { name: 'Null' },
  { name: 'Undefined ' },
  { name: 'typeof' },
];
(function () {
  const apply = document.querySelector('#dataType_topic');
  for (let i = 0; i < Topic.length; i++) {
    //  template
    let template = `<a class="nav-link mb-2" onclick="closeList()" data-toggle="tab" href="#tab${
      i + 1
    }">${Topic[i].name}</a>`;
    //  template output
    apply.innerHTML += template;
    
  }
})();
// ====================================================================
// =====================binding source code============================
// ====================================================================
export default class DataType {
  constructor() {}
  c_header() {
    return `${header}`;
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

const header = `<span class="material-icons code_dot">
  fiber_manual_record 
  </span>
  <span class="material-icons code_dot">
  fiber_manual_record 
  </span>
  <span class="material-icons code_dot">
  fiber_manual_record 
  </span>`;

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

