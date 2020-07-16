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
