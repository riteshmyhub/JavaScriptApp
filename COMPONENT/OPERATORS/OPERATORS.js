
// ====================================================================
// =====================binding source code============================
// ====================================================================
export default class Operators {
  constructor() {}
  assign() {
    let assign_list = [
      { sno:1 , Operators: '=', Example: 'a = b', same_like: 'a = b' },
      { sno:2 , Operators: '+=', Example: 'a += b', same_like: 'a = a+b' },
      { sno:3 , Operators: '-=', Example: 'a -= b', same_like: 'a = a-b' },
      { sno:4 , Operators: '*=', Example: 'a *= b', same_like: 'a = a*b' },
      { sno:5 , Operators: '/=', Example: 'a /= b', same_like: 'a = a/b' },
      { sno:6 , Operators: '%=', Example: 'a %= b', same_like: 'a = a%b' },
      { sno:7 , Operators: '**=', Example: 'a **= b', same_like: 'a = a**b' },
    ];
    return assign_list;
  }
  c_header() {
    return `${header}`;
  }
  arithm() {
    return `${arithmetic}`;
  }
  rela() {
    return `${relational}`;
  }
  logic() {
    return `${logicals}`;
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

const arithmetic = `
     var a = 100;
     var b = 100;
     var c = a+b;//or (a+b ,a-b ,a*b ,a/b ,a%b ,a++,a--);
     
     document.write(c);`;
const relational = `
     var a = 120;
     var b = 100;
     var c = a>b;//or( a>b ,a<b ,a<=b ,a>=b ,a==b ,a!=b,a===b,a!==b)

     document.write(c);//output in - true`;
const logicals = 'ad';
