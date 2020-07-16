import SourceCode from '../../source_code_render.js';
export default class Tests extends SourceCode {
  Ijs() {
    return `${internaljs}`;
  }
  Ejs() {
    return `${externaljs}`;
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

const externaljs = `
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
