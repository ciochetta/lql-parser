@{%
const lexer = require("./lexer")
%}

@lexer lexer

kw_from -> %keywords
kw_select -> %keywords
kw_using -> %keywords
kw_create -> %keywords
kw_insert -> %insert


word ->  %word {% d => d[0].value %}

word -> %quotationWord {% d => d[0].value.replaceAll('"', '') %}
word -> %quotationWordNumber {% d => d[0].value.replaceAll('"', '') %}

column_name_array -> column_name {% d => [d[0]] %}
column_name_array -> column_name_array %comma %ws column_name {% d =>{ 
    let array = d[0];

    array.push(d[3])

    return array
} %}
column_name_array -> column_name_array %ws column_name {% d =>{ 
    let array = d[0];

    array.push(d[2])

    return array
} %}
column_name_array -> %lBracket column_name_array %rBracket {% d =>  d[1] %}


table_name -> word {% d => d[0] %}

column_name -> word {% d => d[0] %}

database_name -> word {% d => d[0] %}