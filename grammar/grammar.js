// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const lexer = require("./lexer")
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "kw_from", "symbols": [(lexer.has("from") ? {type: "from"} : from)]},
    {"name": "kw_select", "symbols": [(lexer.has("select") ? {type: "select"} : select)]},
    {"name": "kw_using", "symbols": [(lexer.has("using") ? {type: "using"} : using)]},
    {"name": "kw_create", "symbols": [(lexer.has("create") ? {type: "create"} : create)]},
    {"name": "kw_insert", "symbols": [(lexer.has("insert") ? {type: "insert"} : insert)]},
    {"name": "kw_where", "symbols": [(lexer.has("where") ? {type: "where"} : where)]},
    {"name": "kw_update", "symbols": [(lexer.has("update") ? {type: "update"} : update)]},
    {"name": "kw_delete", "symbols": [(lexer.has("deletekw") ? {type: "deletekw"} : deletekw)]},
    {"name": "kw_bulk", "symbols": [(lexer.has("bulk") ? {type: "bulk"} : bulk)]},
    {"name": "kw_table", "symbols": [(lexer.has("table") ? {type: "table"} : table)]},
    {"name": "kw_index", "symbols": [(lexer.has("index") ? {type: "index"} : index)]},
    {"name": "kw_on", "symbols": [(lexer.has("on") ? {type: "on"} : on)]},
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
    {"name": "index_name", "symbols": ["word"], "postprocess": d => d[0]},
    {"name": "column_name", "symbols": ["word"], "postprocess": d => d[0]},
    {"name": "database_name", "symbols": ["word"], "postprocess": d => d[0]},
    {"name": "operator", "symbols": [(lexer.has("equal") ? {type: "equal"} : equal)], "postprocess": d => "equal"},
    {"name": "operator", "symbols": [(lexer.has("bigger") ? {type: "bigger"} : bigger)], "postprocess": d => "bigger"},
    {"name": "operator", "symbols": [(lexer.has("smaller") ? {type: "smaller"} : smaller)], "postprocess": d => "smaller"},
    {"name": "operator", "symbols": [(lexer.has("biggerEqual") ? {type: "biggerEqual"} : biggerEqual)], "postprocess": d => "biggerEqual"},
    {"name": "operator", "symbols": [(lexer.has("smallerEqual") ? {type: "smallerEqual"} : smallerEqual)], "postprocess": d => "smallerEqual"},
    {"name": "operator", "symbols": [(lexer.has("like") ? {type: "like"} : like)], "postprocess": d => "like"},
    {"name": "and", "symbols": [(lexer.has("and") ? {type: "and"} : and)]},
    {"name": "set", "symbols": [(lexer.has("set") ? {type: "set"} : set)]},
    {"name": "where_statement", "symbols": ["kw_where", (lexer.has("ws") ? {type: "ws"} : ws), "comparison"], "postprocess":  d => {
            return [d[2]]
        } },
    {"name": "where_statement", "symbols": ["where_statement", (lexer.has("ws") ? {type: "ws"} : ws), "and", (lexer.has("ws") ? {type: "ws"} : ws), "comparison"], "postprocess": 
        d => {
            let arr = d[0]
        
            arr.push(d[4])
        
            return arr
        
        }   
        },
    {"name": "comparison", "symbols": ["word", (lexer.has("ws") ? {type: "ws"} : ws), "operator", (lexer.has("ws") ? {type: "ws"} : ws), "word"], "postprocess":  d => {
            return{
                "key": d[0],
                "value" :d[4],
                "operator": d[2]
            }
        } },
    {"name": "select_statement", "symbols": ["kw_select", (lexer.has("ws") ? {type: "ws"} : ws), "select_what", (lexer.has("ws") ? {type: "ws"} : ws), "kw_from", (lexer.has("ws") ? {type: "ws"} : ws), "table_name"], "postprocess":  d => {
            return{
                "type":"select",
                "params":{
                    "columns" : d[2],
                    "table": d[6]
                }        
            }
        } },
    {"name": "select_statement", "symbols": ["kw_select", (lexer.has("ws") ? {type: "ws"} : ws), "select_what", (lexer.has("ws") ? {type: "ws"} : ws), "kw_from", (lexer.has("ws") ? {type: "ws"} : ws), "table_name", (lexer.has("ws") ? {type: "ws"} : ws), "where_statement"], "postprocess":  d => {
            return{
                "type":"select",
                "params":{
                    "columns" : d[2],
                    "table": d[6],
                    "where":d[8]
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
    {"name": "create_table_statement", "symbols": ["kw_create", (lexer.has("ws") ? {type: "ws"} : ws), "kw_table", (lexer.has("ws") ? {type: "ws"} : ws), "table_name", (lexer.has("ws") ? {type: "ws"} : ws), "column_name_array"], "postprocess":  d => {
            return{
                "type":"create table",
                "params":{
                    "columns" : d[6],
                    "table": d[4]
                }
            }
        } },
    {"name": "create_index_statement", "symbols": ["kw_create", (lexer.has("ws") ? {type: "ws"} : ws), "kw_index", (lexer.has("ws") ? {type: "ws"} : ws), "index_name", (lexer.has("ws") ? {type: "ws"} : ws), "kw_on", (lexer.has("ws") ? {type: "ws"} : ws), "table_name", (lexer.has("ws") ? {type: "ws"} : ws), "column_name_array"], "postprocess":  d => {
            return{
                "type":"create index",
                "params":{
                    "table" : d[8],
                    "name": d[4],
                    "columns" : d[10]
                }
            }
        } },
    {"name": "insert_statement", "symbols": ["kw_insert", (lexer.has("ws") ? {type: "ws"} : ws), "table_name", (lexer.has("ws") ? {type: "ws"} : ws), "insert_table_columns"], "postprocess":  d => {
            return{
                "type":"insert",
                "params":{
                    "document" : d[4],
                    "table": d[2]
                }
            }
        } },
    {"name": "bulk_insert_statement", "symbols": ["kw_bulk", (lexer.has("ws") ? {type: "ws"} : ws), "kw_insert", (lexer.has("ws") ? {type: "ws"} : ws), "table_name", (lexer.has("ws") ? {type: "ws"} : ws), "column_object_array"], "postprocess":  d => {
            return{
                "type":"bulk insert",
                "params":{
                    "documents" : d[6],
                    "table": d[4]
                }
            }
        } },
    {"name": "insert_table_columns", "symbols": ["column_name_array"], "postprocess": d => d[0]},
    {"name": "insert_table_columns", "symbols": ["column_object"], "postprocess": d=> d[0]},
    {"name": "column_object_array", "symbols": [(lexer.has("lBracket") ? {type: "lBracket"} : lBracket), "column_object", (lexer.has("rBracket") ? {type: "rBracket"} : rBracket)], "postprocess": d => [d[1]]},
    {"name": "column_object_array", "symbols": ["column_object"], "postprocess": d => [d[0]]},
    {"name": "column_object_array", "symbols": [(lexer.has("lBracket") ? {type: "lBracket"} : lBracket), "column_object_array", (lexer.has("comma") ? {type: "comma"} : comma), (lexer.has("ws") ? {type: "ws"} : ws), "column_object", (lexer.has("rBracket") ? {type: "rBracket"} : rBracket)], "postprocess":  d => {
            let array = d[1]
        
            let newArray = [...array, d[4]]
        
            return newArray
        } },
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
    {"name": "update_statement", "symbols": ["kw_update", (lexer.has("ws") ? {type: "ws"} : ws), "table_name", (lexer.has("ws") ? {type: "ws"} : ws), "set", (lexer.has("ws") ? {type: "ws"} : ws), "set_key_value_array", (lexer.has("ws") ? {type: "ws"} : ws), "where_statement"], "postprocess":  d => {
            return{
                "type":"update",
                "params":{
                    "where" : d[8],
                    "set": d[6],
                    "table": d[2]
                }        
            }
        } },
    {"name": "set_key_value_array", "symbols": ["set_key_value_array", (lexer.has("comma") ? {type: "comma"} : comma), (lexer.has("ws") ? {type: "ws"} : ws), "set_key_value"], "postprocess": 
        d => {
            let array = d[0];
        
            array = [...array, d[3]]
        
            return array;
        }
        },
    {"name": "set_key_value_array", "symbols": ["set_key_value"], "postprocess": d => [d[0]]},
    {"name": "set_key_value", "symbols": ["word", (lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("equal") ? {type: "equal"} : equal), (lexer.has("ws") ? {type: "ws"} : ws), "word"], "postprocess":  d => {
            return{
                "key": d[0],
                "value" :d[4],
            }
        } },
    {"name": "delete_statement", "symbols": ["kw_delete", (lexer.has("ws") ? {type: "ws"} : ws), "kw_from", (lexer.has("ws") ? {type: "ws"} : ws), "table_name", (lexer.has("ws") ? {type: "ws"} : ws), "where_statement"], "postprocess":  d => {
            return{
                "type":"delete",
                "params":{
                    "where" : d[6],
                    "table": d[4]
                }        
            }
        } },
    {"name": "statement", "symbols": ["select_statement"], "postprocess": d => d[0]},
    {"name": "statement", "symbols": ["using_statement"], "postprocess": d => d[0]},
    {"name": "statement", "symbols": ["create_table_statement"], "postprocess": d => d[0]},
    {"name": "statement", "symbols": ["insert_statement"], "postprocess": d => d[0]},
    {"name": "statement", "symbols": ["update_statement"], "postprocess": d => d[0]},
    {"name": "statement", "symbols": ["delete_statement"], "postprocess": d => d[0]},
    {"name": "statement", "symbols": ["bulk_insert_statement"], "postprocess": d => d[0]},
    {"name": "statement", "symbols": ["create_index_statement"], "postprocess": d => d[0]},
    {"name": "statement_array", "symbols": ["statement"], "postprocess": d => d[0]}
]
  , ParserStart: "statement_array"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
