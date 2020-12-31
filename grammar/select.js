// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    function unwrap(e) {
        if (Array.isArray(e) && e.length === 1) {
            e = unwrap(e[0]);
        }
        if (Array.isArray(e) && !e.length) {
            return null;
        }
        return e;
    }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "string$ebnf$1", "symbols": [/[a-zA-Z0-9]/]},
    {"name": "string$ebnf$1", "symbols": ["string$ebnf$1", /[a-zA-Z0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "string", "symbols": ["string$ebnf$1"], "postprocess": unwrap},
    {"name": "select_statement", "symbols": ["kw_select", {"literal":" "}, "select_what", {"literal":" "}, "kw_from", {"literal":" "}, "table_name"]},
    {"name": "select_what", "symbols": [{"literal":"*"}]},
    {"name": "select_what", "symbols": [{"literal":"["}, "select_what_option", {"literal":"]"}]},
    {"name": "select_what", "symbols": ["column_name"]},
    {"name": "select_what_option", "symbols": ["selection_array"]},
    {"name": "select_what_option", "symbols": []},
    {"name": "selection_array", "symbols": ["column_name"]},
    {"name": "selection_array$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "selection_array", "symbols": ["selection_array", "selection_array$string$1", "column_name"]},
    {"name": "table_name", "symbols": ["string"], "postprocess":  d => {
            return {
                "table_name": unwrap(d[0])
            }
        } },
    {"name": "column_name", "symbols": ["string"]},
    {"name": "kw_from$subexpression$1", "symbols": [/[fF]/, /[rR]/, /[oO]/, /[mM]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "kw_from", "symbols": ["kw_from$subexpression$1"]},
    {"name": "kw_select$subexpression$1", "symbols": [/[sS]/, /[eE]/, /[lL]/, /[eE]/, /[cC]/, /[tT]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "kw_select", "symbols": ["kw_select$subexpression$1"]}
]
  , ParserStart: "select_statement"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
