select_statement -> kw_select " " select_what " " kw_from " " table_name

select_what -> "*"
select_what -> "[" select_what_option "]"
select_what -> column_name

select_what_option -> selection_array
select_what_option -> null

selection_array -> table_name
selection_array -> selection_array ", " table_name



table_name -> string {% d => string %}

column_name -> string {% d => string %}

string ->  [a-zA-Z0-9]:+ 


kw_from -> "from"i

kw_select -> "select"i