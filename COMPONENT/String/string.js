import SourceCode from '../../source_code_render.js';
export default class StringTopic extends SourceCode {
  Conc() {
    return Concatenation;
  }
}
// _________source code_________
const Concatenation = `
const test = 'if you happy and ';
const data = test.concat('you ', 'know ', 'say ', 'meow '); //must declare in variable
document.write(data);`;
