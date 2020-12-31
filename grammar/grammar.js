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
    {"name": "kw_using", "symbols": [(lexer.has("keywords") ? {type: "keywords"} : keywords)]},
    {"name": "kw_create", "symbols": [(lexer.has("keywords") ? {type: "keywords"} : keywords)]},
    {"name": "kw_insert", "symbols": [(lexer.has("insert") ? {type: "insert"} : insert)]},
    {"name": "word", "symbols": [(lexer.has("word") ? {type: "word"} : word)], "postprocess": d => d[0].value},
    {"name": "word", "symbols": [(lexer.has("quotationWord") ? {type: "quotationWord"} : quotationWord)], "postprocess": d => d[0].value.replaceAll('"', '')},
    {"name": "word", "symbols": [(lexer.has("quotationWordNumber") ? {type: "quotationWordNumber"} : quotationWordNumber)], "postprocess": d => d[0].value.replaceAll('"', '')},
    {"name": "column_name_array", "symbols": ["column_name"], "postprocess": d => [d[0]]},
    {"name": "column_name_array", "symbols": ["column_name_array", (lexer.has("comma") ? {type: "comma"} : comma), (lexer.has("ws") ? {type: "ws"} : ws), "column_name"], "postprocess":  d =>{ 
            let array = d[0];
        
            array.push(d[3])
        
            return array
        } },
    {"name": "column_name_array", "symbols": ["column_name_array", (lexer.has("ws") ? {type: "ws"} : ws), "column_name"], "postprocess":  d =>{ 
            let array = d[0];
        
            array.push(d[2])
        
            return array
        } },
    {"name": "column_name_array", "symbols": [(lexer.has("lBracket") ? {type: "lBracket"} : lBracket), "column_name_array", (lexer.has("rBracket") ? {type: "rBracket"} : rBracket)], "postprocess": d =>  d[1]},
    {"name": "table_name", "symbols": ["word"], "postprocess": d => d[0]},
    {"name": "column_name", "symbols": ["word"], "postprocess": d => d[0]},
    {"name": "database_name", "symbols": ["word"], "postprocess": d => d[0]},
    {"name": "select_statement", "symbols": ["kw_select", (lexer.has("ws") ? {type: "ws"} : ws), "select_what", (lexer.has("ws") ? {type: "ws"} : ws), "kw_from", (lexer.has("ws") ? {type: "ws"} : ws), "table_name"], "postprocess":  d => {
            return{
                "type":"select",
                "params":{
                    "columns" : d[2],
                    "table": d[6]
                }        
            }
        } },
    {"name": "select_what", "symbols": [(lexer.has("star") ? {type: "star"} : star)], "postprocess": d => "star"},
    {"name": "select_what", "symbols": ["column_name_array"], "postprocess": d => d[0]},
    {"name": "select_what", "symbols": ["column_name"], "postprocess": d => [d[0]]},
    {"name": "using_statement", "symbols": ["kw_using", (lexer.has("ws") ? {type: "ws"} : ws), "database_name"], "postprocess":  d => {
            return{
                "type":"using",
                "params": d[2]
            }
        } },
    {"name": "create_statement", "symbols": ["kw_create", (lexer.has("ws") ? {type: "ws"} : ws), "table_name", (lexer.has("ws") ? {type: "ws"} : ws), "create_table_columns"], "postprocess":  d => {
            return{
                "type":"create",
                "params":{
                    "columns" : d[4],
                    "table": d[2]
                }
            }
        } },
    {"name": "create_table_columns", "symbols": ["column_name_array"], "postprocess": d => d[0]},
    {"name": "insert_statement", "symbols": ["kw_insert", (lexer.has("ws") ? {type: "ws"} : ws), "table_name", (lexer.has("ws") ? {type: "ws"} : ws), "insert_table_columns"], "postprocess":  d => {
            return{
                "type":"insert",
                "params":{
                    "document" : d[4],
                    "table": d[2]
                }
            }
        } },
    {"name": "insert_table_columns", "symbols": ["column_name_array"], "postprocess": d => d[0]},
    {"name": "insert_table_columns", "symbols": ["column_object"], "postprocess": d=> d[0]},
    {"name": "column_object", "symbols": [(lexer.has("lcBracket") ? {type: "lcBracket"} : lcBracket), "property", (lexer.has("rcBracket") ? {type: "rcBracket"} : rcBracket)], "postprocess": d=> d[1]},
    {"name": "column_object", "symbols": [(lexer.has("lcBracket") ? {type: "lcBracket"} : lcBracket), "property_multi", (lexer.has("rcBracket") ? {type: "rcBracket"} : rcBracket)], "postprocess": d=> d[1]},
    {"name": "property_multi", "symbols": ["property_multi", (lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("comma") ? {type: "comma"} : comma), (lexer.has("ws") ? {type: "ws"} : ws), "property"], "postprocess": d=> { 
           let obj = d[0]
           
           obj[d[4][0]] = d[4][1]
        
           return obj
        } },
    {"name": "property_multi", "symbols": ["property_multi", (lexer.has("comma") ? {type: "comma"} : comma), (lexer.has("ws") ? {type: "ws"} : ws), "property"], "postprocess": d=> { 
           let obj = d[0]
           
           obj[d[3][0]] = d[3][1]
        
           return obj
        } },
    {"name": "property_multi", "symbols": ["property_multi", (lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("comma") ? {type: "comma"} : comma), "property"], "postprocess": d=> { 
           let obj = d[0]
           
           obj[d[3][0]] = d[3][1]
        
           return obj
        } },
    {"name": "property_multi", "symbols": ["property"], "postprocess": d=> { 
           let obj = {}
           
           obj[d[0][0]] = d[0][1]
        
           return obj
        } },
    {"name": "property", "symbols": ["key", (lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("twoPoints") ? {type: "twoPoints"} : twoPoints), (lexer.has("ws") ? {type: "ws"} : ws), "value"], "postprocess": d => [d[0], d[4]]},
    {"name": "property", "symbols": ["key", (lexer.has("twoPoints") ? {type: "twoPoints"} : twoPoints), "value"], "postprocess": d => [d[0], d[2]]},
    {"name": "property", "symbols": ["key", (lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("twoPoints") ? {type: "twoPoints"} : twoPoints), "value"], "postprocess": d => [d[0], d[3]]},
    {"name": "property", "symbols": ["key", (lexer.has("twoPoints") ? {type: "twoPoints"} : twoPoints), (lexer.has("ws") ? {type: "ws"} : ws), "value"], "postprocess": d => [d[0], d[3]]},
    {"name": "property", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws), "property", (lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": d => d[1]},
    {"name": "property", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws), "property"], "postprocess": d => d[1]},
    {"name": "property", "symbols": ["property", (lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": d => d[0]},
    {"name": "value", "symbols": ["word"], "postprocess": d => d[0]},
    {"name": "value", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": d => d[0]},
    {"name": "value", "symbols": ["column_object"], "postprocess": d => d[0]},
    {"name": "key", "symbols": ["word"], "postprocess": d => d[0]},
    {"name": "statement", "symbols": ["select_statement"], "postprocess": d => d[0]},
    {"name": "statement", "symbols": ["using_statement"], "postprocess": d => d[0]},
    {"name": "statement", "symbols": ["create_statement"], "postprocess": d => d[0]},
    {"name": "statement", "symbols": ["insert_statement"], "postprocess": d => d[0]}
]
  , ParserStart: "statement"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
