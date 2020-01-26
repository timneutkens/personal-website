---
title: 'test post'
date: 01/01/2020
---

### example

this is a paragraph `emphasis` another thing

```javascript
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
loadLanguages(['haml']);

// The code snippet you want to highlight, as a string
const code = `= ['hi', 'there', 'reader!'].join " "`;

// Returns a highlighted HTML string
const html = Prism.highlight(code, Prism.languages.haml, 'haml');
```

<pre class="line-numbers language-js" data-line="2-2"><code>const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
loadLanguages(['haml']);

// The code snippet you want to highlight, as a string
const code = `= ['hi', 'there', 'reader!'].join " "`;

// Returns a highlighted HTML string
const html = Prism.highlight(code, Prism.languages.haml, 'haml');</code></pre>

<pre class="language-jsx">
  <code>
    const HomePage = ({ posts }) => {
      const postElements = posts.map((post, idx) => <Post key={idx} {...post} />);
      return &lt;Fragment&gt;{postElements}&lt;/Fragment&gt;;
    };
  </code>
</pre>

<pre class="language-js">
  <code>
    const Prism = require('prismjs');
    const loadLanguages = require('prismjs/components/');
    loadLanguages(['haml']);

    // The code snippet you want to highlight, as a string
    const code = `= ['hi', 'there', 'reader!'].join " "`;

    // Returns a highlighted HTML string
    const html = Prism.highlight(code, Prism.languages.haml, 'haml');
  </code>
</pre>

<pre class="line-numbers language-js">
  <code>
    const Prism = require('prismjs');
    const loadLanguages = require('prismjs/components/');
    loadLanguages(['haml']);

    // The code snippet you want to highlight, as a string
    const code = `= ['hi', 'there', 'reader!'].join " "`;

    // Returns a highlighted HTML string
    const html = Prism.highlight(code, Prism.languages.haml, 'haml');
  </code>
</pre>