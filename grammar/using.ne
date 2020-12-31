@include "base.ne"
@lexer lexer

using_statement -> kw_using %ws database_name {% d => {
    return{
        "type":"using",
        "params": d[2]
    }
} %}