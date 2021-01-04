@include "base.ne"
@include "where.ne"
@lexer lexer

delete_statement -> kw_delete %ws kw_from %ws table_name %ws where_statement {% d => {
    return{
        "type":"delete",
        "params":{
            "where" : d[6],
            "table": d[4]
        }        
    }
} %}