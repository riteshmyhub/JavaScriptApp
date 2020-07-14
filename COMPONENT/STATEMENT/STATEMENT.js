// ====================================================================
// =====================binding source code============================
// ====================================================================
export default class Statements {
  constructor() {}
  c_header() {
    return `${header}`;
  }
  syntax() {
    return `${syntax}`;
  }
  examlpe() {
    return `${classEx}`;
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

const syntax = `
            if(100 == 100){
            document.write('hello');//output is show ,becouse condtion true
            }`;

const classEx = `
            class Data (){
                constructor() {
                    this.a = 100;
                    // if want make properties of constructor private 
                    // so write -> var a = 100; 
                    // so new obj can not access it's properties
                }
                method(){
                    return 'this method';
                }  
            }
            const name = new data();
            document.write(name.a); // output -> 100
            document.write(name.method()); // output -> this method
            `;
