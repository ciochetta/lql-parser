// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "select_statement", "symbols": ["kw_select", {"literal":" "}, "select_what", {"literal":" "}, "kw_from", {"literal":" "}, "table_name"]},
    {"name": "select_what", "symbols": [{"literal":"*"}]},
    {"name": "select_what", "symbols": [{"literal":"["}, "select_what_option", {"literal":"]"}]},
    {"name": "select_what", "symbols": ["column_name"]},
    {"name": "select_what_option", "symbols": ["selection_array"]},
    {"name": "select_what_option", "symbols": []},
    {"name": "selection_array", "symbols": ["table_name"]},
    {"name": "selection_array$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "selection_array", "symbols": ["selection_array", "selection_array$string$1", "table_name"]},
    {"name": "table_name", "symbols": ["string"]},
    {"name": "column_name", "symbols": ["string"]},
    {"name": "string$ebnf$1", "symbols": [/[a-zA-Z0-9]/]},
    {"name": "string$ebnf$1", "symbols": ["string$ebnf$1", /[a-zA-Z0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "string", "symbols": ["string$ebnf$1"]},
    {"name": "kw_from$string$1", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "kw_from", "symbols": ["kw_from$string$1"]},
    {"name": "kw_from$string$2", "symbols": [{"literal":"F"}, {"literal":"R"}, {"literal":"O"}, {"literal":"M"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "kw_from", "symbols": ["kw_from$string$2"]},
    {"name": "kw_select$string$1", "symbols": [{"literal":"S"}, {"literal":"E"}, {"literal":"L"}, {"literal":"E"}, {"literal":"C"}, {"literal":"T"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "kw_select", "symbols": ["kw_select$string$1"]},
    {"name": "kw_select$string$2", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "kw_select", "symbols": ["kw_select$string$2"]},
    {"name": "statement", "symbols": ["select_statement"]}
]
  , ParserStart: "statement"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
