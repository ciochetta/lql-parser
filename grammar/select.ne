@include "base.ne"
@lexer lexer

select_statement -> kw_select %ws select_what %ws kw_from %ws table_name {% d => {
    return{
        "type":"select",
        "columns" : d[2],
        "table": d[6]
    }
} %}

select_what -> %star {% d => "star" %}
select_what -> %lBracket select_what_option %rBracket {% d =>  d[1][0] %}
select_what -> column_name {% d => [d[0]] %}

select_what_option -> selection_array
select_what_option -> null

selection_array -> column_name {% d => [d[0]] %}
selection_array -> selection_array %comma %ws column_name {% d =>{ 
    let array = d[0];

    array.push(d[3])

    return array
} %}


table_name -> word {% d => d[0] %}

column_name -> word {% d => d[0] %}