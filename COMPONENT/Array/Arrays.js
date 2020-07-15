// ====================================================================
// =====================binding source code============================
// ====================================================================
export default class Arrays {
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
}

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
