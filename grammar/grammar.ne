@include "select.ne"
@include "using.ne"
@include "create.ne"
@include "insert.ne"

statement -> select_statement {% d => d[0] %}
statement -> using_statement {% d => d[0] %}
statement -> create_statement {% d => d[0] %}
statement -> insert_statement {% d => d[0] %}