  // ====================================================================
  // =====================binding source code============================
  // ====================================================================
  export default class Arrays {
    constructor() {}
     c_header() {
      return `${header}`;
    }
    arithm(){
      return `${what_arr}`;
    }
    Arr_Literal(){
      return `${Array_Literal}`;
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
  const what_arr =`
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