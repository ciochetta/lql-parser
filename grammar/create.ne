@include "base.ne"
@lexer lexer

create_table_statement -> kw_create %ws kw_table %ws table_name %ws column_name_array {% d => {
    return{
        "type":"create table",
        "params":{
            "columns" : d[6],
            "table": d[4]
        }
    }
} %}

create_index_statement -> kw_create %ws kw_index %ws index_name %ws kw_on %ws table_name %ws column_name_array {% d => {
    return{
        "type":"create index",
        "params":{
            "table" : d[8],
            "name": d[4],
            "columns" : d[10]
        }
    }
} %}