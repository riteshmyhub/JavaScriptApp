// ----------------Source code render class-------------------
export default class SourceCode {
  constructor(id) {
    this.id = id;
  }
  source_code(fileName, code, extension) {
    let InCode = document.querySelector(this.id);
    InCode.innerHTML = `
    <section class="source-code" data-doc="${fileName}.${extension}">
       <span class="material-icons code_dot">fiber_manual_record</span>
       <span class="material-icons code_dot">fiber_manual_record</span>
       <span class="material-icons code_dot">fiber_manual_record</span>
    </section>
    <pre>
      <code class="language-${extension}">${code}</code>
    </pre>`;
    return InCode;
  }
}


