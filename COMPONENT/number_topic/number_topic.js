import SourceCode from '../../source_code_render.js';

export default class NumberTopic extends SourceCode {
  syntax() {
    return numberCode.number_use.Nconstructor;
  }
}
// ------------- source code------------------------
const numberCode = {
  number_use: {
    Nconstructor: `
    // using primitive----------
    const num = 122;
    const num2 = 12.12;
    const num3 = 3e3;

    // using constructor-------
    const name = new Number(122);
    const num2 = new Number(12.12);
    const num3 = new Number(3e3);`,
    primitive: ``,
  },
};
