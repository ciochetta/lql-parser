@include "base.ne"
@lexer lexer

insert_statement -> kw_insert %ws table_name %ws insert_table_columns {% d => {
    return{
        "type":"insert",
        "params":{
            "document" : d[4],
            "table": d[2]
        }
    }
} %}

bulk_insert_statement -> kw_bulk %ws kw_insert %ws table_name %ws column_object_array {% d => {
    return{
        "type":"bulk insert",
        "params":{
            "documents" : d[6],
            "table": d[4]
        }
    }
} %}

insert_table_columns -> column_name_array {% d => d[0] %}
insert_table_columns -> column_object {% d=> d[0] %}

column_object_array -> %lBracket column_object %rBracket {% d => [d[1]] %}
column_object_array -> column_object {% d => [d[0]] %}
column_object_array -> %lBracket column_object_array %comma %ws column_object %rBracket {% d => {
    let array = d[1]

    let newArray = [...array, d[4]]

    return newArray
} %}

column_object -> %lcBracket property %rcBracket {% d=> d[1] %}
column_object -> %lcBracket property_multi %rcBracket {% d=> d[1] %}

property_multi -> property_multi %ws %comma %ws property {% d=> { 
    let obj = d[0]
    
    obj[d[4][0]] = d[4][1]

    return obj
 } %}

property_multi -> property_multi %comma %ws property {% d=> { 
    let obj = d[0]
    
    obj[d[3][0]] = d[3][1]

    return obj
 } %}

property_multi -> property_multi %ws %comma property {% d=> { 
    let obj = d[0]
    
    obj[d[3][0]] = d[3][1]

    return obj
 } %}

property_multi -> property {% d=> { 
    let obj = {}
    
    obj[d[0][0]] = d[0][1]

    return obj
 } %}

property -> key %ws %twoPoints %ws value {% d => [d[0], d[4]] %}
property -> key %twoPoints value {% d => [d[0], d[2]] %}
property -> key %ws %twoPoints value {% d => [d[0], d[3]] %}
property -> key %twoPoints %ws value {% d => [d[0], d[3]] %}
property -> %ws property %ws {% d => d[1] %}
property -> %ws property {% d => d[1] %}
property ->  property %ws  {% d => d[0] %}

value -> word {% d => d[0] %}
value -> %number {% d => d[0] %}
value -> column_object {% d => d[0] %}

key -> word {% d => d[0] %}