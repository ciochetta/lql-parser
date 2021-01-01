@include "base.ne"
@lexer lexer

where_statement -> kw_where %ws comparison {% d => {
    return [d[2]]
} %}

where_statement -> where_statement %ws and %ws comparison {%
    d => {
        let arr = d[0]

        arr.push(d[4])

        return arr

    }   
%}

comparison -> word %ws operator %ws word {% d => {
    return{
        "key": d[0],
        "value" :d[4],
        "operator": d[2]
    }
} %}