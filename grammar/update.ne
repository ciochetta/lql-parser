@include "base.ne"
@include "where.ne"
@lexer lexer

update_statement -> kw_update %ws table_name %ws set %ws set_key_value_array %ws where_statement {% d => {
    return{
        "type":"update",
        "params":{
            "where" : d[8],
            "set": d[6],
            "table": d[2]
        }        
    }
} %}

set_key_value_array -> set_key_value_array %comma %ws set_key_value {%
    d => {
        let array = d[0];

        array = [...array, d[3]]

        return array;
    }
%}
set_key_value_array -> set_key_value {% d => [d[0]] %}

set_key_value -> word %ws %equal %ws word {% d => {
    return{
        "key": d[0],
        "value" :d[4],
    }
} %}