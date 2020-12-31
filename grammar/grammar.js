// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const lexer = require("./lexer")
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "kw_from", "symbols": [(lexer.has("keywords") ? {type: "keywords"} : keywords)]},
    {"name": "kw_select", "symbols": [(lexer.has("keywords") ? {type: "keywords"} : keywords)]},
    {"name": "word", "symbols": [(lexer.has("word") ? {type: "word"} : word)], "postprocess": d => d[0].value},
    {"name": "word", "symbols": [(lexer.has("wordNumber") ? {type: "wordNumber"} : wordNumber)], "postprocess": d => d[0].value},
    {"name": "word", "symbols": [(lexer.has("quotationWord") ? {type: "quotationWord"} : quotationWord)], "postprocess": d => d[0].value.replaceAll('"', '')},
    {"name": "select_statement", "symbols": ["kw_select", (lexer.has("ws") ? {type: "ws"} : ws), "select_what", (lexer.has("ws") ? {type: "ws"} : ws), "kw_from", (lexer.has("ws") ? {type: "ws"} : ws), "table_name"], "postprocess":  d => {
            return{
                "type":"select",
                "columns" : d[2],
                "table": d[6]
            }
        } },
    {"name": "select_what", "symbols": [(lexer.has("star") ? {type: "star"} : star)], "postprocess": d => "star"},
    {"name": "select_what", "symbols": [(lexer.has("lBracket") ? {type: "lBracket"} : lBracket), "select_what_option", (lexer.has("rBracket") ? {type: "rBracket"} : rBracket)], "postprocess": d =>  d[1][0]},
    {"name": "select_what", "symbols": ["column_name"], "postprocess": d => [d[0]]},
    {"name": "select_what_option", "symbols": ["selection_array"]},
    {"name": "select_what_option", "symbols": []},
    {"name": "selection_array", "symbols": ["column_name"], "postprocess": d => [d[0]]},
    {"name": "selection_array", "symbols": ["selection_array", (lexer.has("comma") ? {type: "comma"} : comma), (lexer.has("ws") ? {type: "ws"} : ws), "column_name"], "postprocess":  d =>{ 
            let array = d[0];
        
            array.push(d[3])
        
            return array
        } },
    {"name": "table_name", "symbols": ["word"], "postprocess": d => d[0]},
    {"name": "column_name", "symbols": ["word"], "postprocess": d => d[0]},
    {"name": "statement", "symbols": ["select_statement"], "postprocess": d => d[0]}
]
  , ParserStart: "statement"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
