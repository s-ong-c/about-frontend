import { injectGlobal } from 'emotion';

export const codeStyles = injectGlobal`
@import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css);

.gatsby-highlight-code-line {
  background-color: hsla(207, 95%, 15%, 1);
  display: block;
  margin-right: -1.2em;
  margin-left: -1.2em;
  padding-right: 1em;
  padding-left: 0.75em;
  border-left: 0.35em solid #0687f0;
}

blockquote {
  color: #999;
}

code[class*='language-'],
pre[class*='language-'] {
  color: #e0e0e0;
  background: none;
  font-family: 'Fira Code', 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono',
    monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.6;
  font-size: 13px;

  -moz-tab-size: 2;
  -o-tab-size: 2;
  tab-size: 2;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;

  -ms-overflow-style: none; // IE 10+
  overflow: -moz-scrollbars-none; // Firefox
}

pre[class*='language-']::-webkit-scrollbar {
  display: none; // Safari and Chrome
}

/* Code blocks */
pre[class*='language-'] {
  padding: 1.2em;
  margin: 1.5em 0;
  overflow: auto;
  border-radius: 0.6em;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #212121;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.11em 0.3em;
  margin: 0em 0.1em;
  border-radius: 0.3em;
  white-space: normal;
  background: #fffbfe;
  color: #547196;
  border: 1.2px solid #547196;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #616161;
}

.token.punctuation {
  color: #e0e0e0;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color: #e2777a;
}

.token.function-name {
  color: #6196cc;
}

.token.boolean,
.token.number,
.token.function {
  color: #ff9100;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: #ffff00;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: #b388ff;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
  color: #00e676;
}

.token.operator,
.token.entity,
.token.url {
  color: #67cdcc;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
`;
