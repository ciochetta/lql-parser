@{%
const lexer = require("./lexer")
%}

@lexer lexer

kw_from -> %keywords
kw_select -> %keywords

word ->  %word {% d => d[0].value %}
word -> %wordNumber {% d => d[0].value %}

word -> %quotationWord {% d => d[0].value.replaceAll('"', '') %}
