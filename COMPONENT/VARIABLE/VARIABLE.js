const Topic = [
  { name: 'variable' },
  { name: 'let' },
  { name: 'const' },
];
(function () {
  const apply = document.querySelector('#var_topic');
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
export default class Variables {
  constructor() {}
  c_header() {
    return `${header}`;
  }
  bockStetment() {
    return `${BS}`;
  }
  const() {
    return `${constjs}`;
  }
  js() {
    return `${js}`;
  }
}

const js = `var text = "hello";
//---------or-------------
var text;
text="hello";

documet.write(text);//show in browser
 
//overwrite two variable value
var text = "hi";
documet.write(text);`;

const BS = `let y = "data";//(Globle variable)
{
  //y is access in this block;

  let x = "hello";//(Local variable)
  //x is only access in this block;
  
}
//x can not access here

//y is also access here;`;

const constjs = `const y;
y="lorem";//wrong way

const x = "hello";//this const only reserved for x
x = "data"; //overwrite not allow`;

const header = `<span class="material-icons code_dot">
  fiber_manual_record 
  </span>
  <span class="material-icons code_dot">
  fiber_manual_record 
  </span>
  <span class="material-icons code_dot">
  fiber_manual_record 
  </span>`;
