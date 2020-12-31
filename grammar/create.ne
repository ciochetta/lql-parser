@include "base.ne"
@lexer lexer

create_statement -> kw_create %ws table_name %ws create_table_columns {% d => {
    return{
        "type":"create",
        "params":{
            "columns" : d[4],
            "table": d[2]
        }
    }
} %}

create_table_columns -> column_name_array {% d => d[0] %}
