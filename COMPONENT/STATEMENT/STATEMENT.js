import SourceCode from '../../source_code_render.js';

export default class Statements extends SourceCode {
  syntax() {
    return `${syntax}`;
  }
  examlpel() {
    return `${classEx}`;
  }
}

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
document.write(name.method()); // output -> this method`;
