@{%
const lexer = require("./lexer")
%}

@lexer lexer

kw_from -> %from
kw_select -> %select
kw_using -> %using
kw_create -> %create
kw_insert -> %insert
kw_where -> %where
kw_update -> %update
kw_delete -> %deletekw
kw_bulk -> %bulk
kw_table -> %table
kw_index -> %index
kw_on -> %on



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

index_name -> word {% d => d[0] %}

column_name -> word {% d => d[0] %}

database_name -> word {% d => d[0] %}

operator -> %equal {% d => "equal" %}
operator -> %bigger {% d => "bigger" %}
operator -> %smaller {% d => "smaller" %}
operator -> %biggerEqual {% d => "biggerEqual" %}
operator -> %smallerEqual {% d => "smallerEqual" %}
operator -> %like {% d => "like" %}

and -> %and
set -> %set