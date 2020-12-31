@include "base.ne"
@lexer lexer

select_statement -> kw_select %ws select_what %ws kw_from %ws table_name {% d => {
    return{
        "type":"select",
        "params":{
            "columns" : d[2],
            "table": d[6]
        }        
    }
} %}

select_what -> %star {% d => "star" %}
select_what -> column_name_array {% d => d[0]%}
select_what -> column_name {% d => [d[0]] %}
