const Topic = [
  { name: 'introduction' },
  { name: 'development requirement' },
  { name: 'Implementation' },
  { name: 'hello word' },
];
(function () {
  const apply = document.querySelector('#Get_topic');
  for (let i = 0; i < Topic.length; i++) {
    //  template

    let template = `<a class="nav-link mb-2"  data-toggle="tab" href="#tab${
      i + 1
    }">${Topic[i].name}</a>`;

    //  template output
    apply.innerHTML += template;
  }
})();
// ====================================================================
// =====================binding source code============================
// ====================================================================
export default class Tests {
  constructor() {}
  c_header() {
    return `${header}`;
  }
  Ijs() {
    return `${internaljs}`;
  }
  Ejs(){
    return `${externaljs}`
  }
  js() {
    return `${js}`;
  }
}

const js = 'p { color: red }';
const internaljs = `
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;script&gt;
        // # java script code here
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        // # java script code here (but always in body)
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;`;

const externaljs= `
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script src=&quot;main.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;`;

const header = `<span class="material-icons code_dot">
fiber_manual_record 
</span>
<span class="material-icons code_dot">
fiber_manual_record 
</span>
<span class="material-icons code_dot">
fiber_manual_record 
</span>`;
