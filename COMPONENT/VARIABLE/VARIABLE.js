import SourceCode from '../../source_code_render.js';

export default class Variables extends SourceCode {
 
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
