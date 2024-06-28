// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ring'],
  names: ['ring'],
  patterns: [
    {include: '#block_doc_comment'},
    {include: '#block_comment'},
    {include: '#line_doc_comment'},
    {include: '#line_comment'},
    {include: '#sigils'},
    {
      begin: '#\\!?\\[',
      end: '\\]',
      name: 'meta.attribute.ring',
      patterns: [{include: '#string_literal'}]
    },
    {
      match:
        "'([^'\\\\]|\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.))'",
      name: 'string.quoted.single.ring'
    },
    {include: '#string_literal'},
    {
      match: '\\b[0-9][0-9_]*\\.[0-9][0-9_]*([eE][+-][0-9_]+)?(f32|f64)?\\b',
      name: 'constant.numeric.float.ring'
    },
    {
      match: '\\b[0-9][0-9_]*([ui](8|16|32|64)?)?\\b',
      name: 'constant.numeric.integer.decimal.ring'
    },
    {
      match: '\\b(PRIVATE|private|Private)\\b',
      name: 'storage.modifier.static.ring'
    },
    {
      match: '(TRUE|true|True|FALSE|false|False)',
      name: 'constant.language.boolean.ring'
    },
    {
      match: '\\b_[a-z][A-Za-z0-9_]*|\\s(i|j)\\s\\b',
      name: 'variable.name.special.ring'
    },
    {
      match:
        '\\b(EXIT|exit|Exit|LOOP|loop|Loop|BUT|but|But|ELSE|else|Else|IF|if|If|FOR|for|For|IN|in|In|TO|to|To|STEP|step|Step|NEXT|next|Next|SWITCH|switch|Switch|OFF|off|Off|ON|on|On|OTHER|other|Other|RETURN|return|Return|WHILE|while|While|DO|do|Do|END|end|End|AGAIN|again|Again|Try|try|Try|CATCH|catch|Catch|DONE|done|Done)\\b',
      name: 'keyword.control.ring'
    },
    {
      match:
        '\\b(IF|if|If|TO|to|To|OR|or|Or|AND|and|And|NOT|not|Not|FOR|for|For|NEW|new|New|FUNC|func|Func|FROM|from|From|NEXT|next|Next|LOAD|load|Load|ELSE|else|Else|SEE|see|See|WHILE|while|While|OK|ok|Ok|CLASS|class|Class|BREAK|break|Break|RETURN|return|Return|BUT|but|But|END|end|End|GIVE|give|Give|BYE|bye|Bye|EXIT|exit|Exit|TRY|try|Try|CATCH|catch|Catch|DONE|done|Done|SWITCH|switch|Switch|ON|on|On|OTHER|other|Other|OFF|off|Off|IN|in|In|LOOP|loop|Loop|PACKAGE|package|Package|IMPORT|import|Import|PRIVATE|private|Private|STEP|step|Step|DO|do|Do|AGAIN|again|Again|CALL|call|Call)\\b',
      name: 'keyword.command.ring'
    },
    {include: '#types'},
    {include: '#self'},
    {include: '#null'},
    {include: '#lifetime'},
    {include: '#ref_lifetime'},
    {match: '(=|\\+=|-=)', name: 'keyword.operator.assignment.ring'},
    {
      match:
        '(\\<=|>=|==|!=|NOT|not|Not|\\<>|\\<|>|\\$|\\sOR\\s|\\sAND\\s|\\sNOT\\s|\\sand\\s|\\sor\\s|\\snot\\s)',
      name: 'keyword.operator.comparison.ring'
    },
    {
      match:
        '\\b(len|add|del|get|clock|lower|upper|input|ascii|char|date|time|filename|getchar|system|random|timelist|adddays|diffdays|isstring|isnumber|islist|type|isnull|isobject|hex|dec|number|string|str2hex|hex2str|str2list|list2str|left|right|trim|copy|substr|lines|strcmp|eval|raise|assert|isalnum|isalpha|iscntrl|isdigit|isgraph|islower|isprint|ispunct|isspace|isupper|isxdigit|locals|globals|functions|cfunctions|islocal|isglobal|isfunction|iscfunction|packages|ispackage|classes|isclass|packageclasses|ispackageclass|classname|objectid|attributes|methods|isattribute|ismethod|isprivateattribute|isprivatemethod|addattribute|addmethod|getattribute|setattribute|mergemethods|list|find|min|max|insert|sort|reverse|binarysearch|sin|cos|tan|asin|acos|atan|atan2|sinh|cosh|tanh|exp|log|log10|ceil|floor|fabs|pow|sqrt|unsigned|decimals|murmur3hash|fopen|fclose|fflush|freopen|tempfile|tempname|fseek|ftell|rewind|fgetpos|fsetpos|clearerr|feof|ferror|perror|rename|remove|fgetc|fgets|fputc|fputs|ungetc|fread|fwrite|dir|read|write|fexists|ismsdos|iswindows|iswindows64|isunix|ismacosx|islinux|isfreebsd|isandroid|windowsnl|mysql_info|mysql_init|mysql_error|mysql_connect|mysql_close|mysql_query|mysql_result|mysql_insert_id|mysql_columns|mysql_result2|mysql_next_result|mysql_escape_string|mysql_autocommit|mysql_commit|mysql_rollback|odbc_init|odbc_drivers|odbc_datasources|odbc_close|odbc_connect|odbc_disconnect|odbc_execute|odbc_colcount|odbc_fetch|odbc_getdata|odbc_tables|odbc_columns|odbc_autocommit|odbc_commit|odbc_rollback|md5|sha1|sha256|sha512|sha384|sha224|encrypt|decrypt|randbytes|download|sendemail|loadlib|closelib|callgc|varptr|intvalue)!',
      name: 'support.function.std.ring'
    },
    {
      captures: {1: {name: 'entity.name.function.ring'}},
      match: '\\b([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\('
    },
    {
      captures: {1: {name: 'entity.name.method.ring'}},
      match: '\\b([a-zA-Z_][a-zA-Z0-9_]*).([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\('
    },
    {
      captures: {
        1: {name: 'variable.name.object.ring'},
        2: {name: 'variable.name.member.ring'}
      },
      match: '\\b([a-zA-Z_][a-zA-Z0-9_]*).([a-zA-Z_][a-zA-Z0-9_]*)'
    },
    {
      begin: '\\b(FUNC|func|Func)\\s+([a-zA-Z_][a-zA-Z0-9_]*)',
      beginCaptures: {
        1: {name: 'keyword.other.fn.ring'},
        2: {name: 'entity.name.function.ring'}
      },
      end: '[\\n]',
      patterns: [{include: '$self'}]
    },
    {
      begin:
        '\\b(CLASS|class|Class)\\s+([a-zA-Z_][a-zA-Z0-9_]*)(?:\\s+(FROM|from|From)\\s+([a-zA-Z_][a-zA-Z0-9_]*))?',
      beginCaptures: {
        1: {name: 'keyword.class.ring'},
        2: {name: 'entity.name.class.ring'},
        3: {name: 'keyword.class.inherit.ring'},
        4: {name: 'entity.name.parent.class.ring'}
      },
      end: '[\\n]',
      patterns: [{include: '$self'}]
    },
    {
      begin:
        '\\b(FUNC|func|Func)\\s+((?:(?:[a-zA-Z_][a-zA-Z0-9_]*):)?(?:[a-zA-Z_][a-zA-Z0-9_]*))',
      beginCaptures: {
        1: {name: 'keyword.method.fn.ring'},
        2: {name: 'entity.name.method.ring'}
      },
      end: '[\\n]',
      patterns: [{include: '$self'}]
    },
    {begin: '=', patterns: [{include: '$self'}]}
  ],
  repository: {
    block_comment: {
      begin: '/\\*',
      end: '\\*/',
      name: 'comment.block.ring',
      patterns: [{include: '#block_doc_comment'}, {include: '#block_comment'}]
    },
    block_doc_comment: {
      begin: '/\\*[!\\*][^\\*]',
      end: '\\*/',
      name: 'comment.block.documentation.ring',
      patterns: [{include: '#block_doc_comment'}, {include: '#block_comment'}]
    },
    escaped_character: {
      match:
        '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)',
      name: 'constant.character.escape.ring'
    },
    line_comment: {match: '//[#].*$', name: 'comment.line.double-slash.ring'},
    line_doc_comment: {
      match: '//[!/][^/].*$',
      name: 'comment.line.documentation.ring'
    },
    null: {
      match: '\\b(NULL|null|Null)\\b',
      name: 'variable.null.language.ring'
    },
    self: {
      match: '\\b(Self|SELF|self)\\b',
      name: 'variable.self.language.ring'
    },
    sigils: {
      match: '[@]|[:]{2}|[+]{2}(?=[a-zA-Z0-9_\\(\\[\\|\\"]+)',
      name: 'keyword.operator.sigil.ring'
    },
    string_literal: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.ring',
      patterns: [{include: '#escaped_character'}]
    }
  },
  scopeName: 'source.ring'
}

export default grammar
