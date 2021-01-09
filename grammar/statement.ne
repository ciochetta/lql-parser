@include "select.ne"
@include "using.ne"
@include "create.ne"
@include "insert.ne"
@include "update.ne"
@include "delete.ne"


statement -> select_statement {% d => d[0] %}
statement -> using_statement {% d => d[0] %}
statement -> create_table_statement {% d => d[0] %}
statement -> insert_statement {% d => d[0] %}
statement -> update_statement {% d => d[0] %}
statement -> delete_statement {% d => d[0] %}
statement -> bulk_insert_statement {% d => d[0] %}
statement -> create_index_statement {% d => d[0] %}

