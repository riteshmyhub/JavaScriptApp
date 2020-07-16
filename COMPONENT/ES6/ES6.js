import SourceCode from '../../source_code_render.js';

export default class Ecmascript extends SourceCode {
  syntax() {
    return `${syntax}`;
  }
  examlpe() {
    return `${classEx}`;
  }
  // Parameterized Constructor
  ParaCons() {
    return `${ParaC}`;
  }
  // Inheritance
  Inherit() {
    return `${Inheri}`;
  }
  Inherit_Ex() {
    return `${Inheri_Ex}`;
  }
  // superMethod
  SuperPro() {
    return `${supreM}`;
  }
  //Method Overriding
  Method_Over() {
    return `${Method_Overriding}`;
  }
  // static Methood
  static_m(){
   return `${staticMethood}`
  }
}

const syntax = `
  class Name_Of_class (){
      constructor() {
          //properties here , that's call to instance member
      }
      method(){
          //proto type member here 
      }  
  }
  const name = new Name_Of_class();//this id class ofobject`;

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
 document.write(name.method()); // output -> this method `;
const ParaC = `
  class Data (){
      constructor(a,b) {
          this.name = a;
          this.last_name = b;
      }
      method(){
          return this.name+this.last_name;
      }  
  }
  const name = new data('Robert','Downey');
  document.write(name.method())//output -> Robert Downey;`;
// =========Inheritance===============
const Inheri = `
  class Parent {
    // parent class & property
  }
  class Child extends Parent {
    //child use parent class & property
  }`;
const Inheri_Ex = `
  class Country {
    constructor() {}
    C_population() {
      return '135.26 crores';
    }
  }//parent class

  class State extends Country {
    S_population() {
      return '11.42 crore';
    }
  }//child class

  class City extends State {
    City_pop(){
      return '31.2 lakhs';
    }
  }//Grand child class

  const Pune = new City();
  document.write(Pune.City_pop());
  // Grand child class Object can access owner class methood 

  document.write(Pune.S_population());
  // Grand child class Object can access child class methood 

  document.write(Pune.C_population());
  // Grand child class Object can access parent class methood`;

// ---------------- super method -------
const supreM = `
class products {
  constructor(item1, itemPrice) {
    this.product = item1;
    this.price = itemPrice;
  }
  addItem() {
    return this.product + this.price;
  }
}

class customer extends products {
  constructor(item1, itemPrice) {
    super(item1, itemPrice);
    //In super methood pass same parameter that pass in parent class constructor parameter 
  }
}
const user = new customer('milk', 1000);
document.write(user.addItem());`;

const Method_Overriding = `
class parant {
  method() {
    return "this is method";
  }
}

class child extends parant {
  method() {
    return "this is Overriding method";
  }
}
const user = new parant();
document.write(user.method());`;
const staticMethood = `
class Testing {
  constructor() {}
  static methood() {
    return 'hello';
  }
}
document.write(Testing.methood());`;