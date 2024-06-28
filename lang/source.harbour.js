// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ch', '.hb', '.prg', '.prw'],
  names: ['advpl', 'clipper', 'foxpro', 'harbour', 'xbase'],
  patterns: [
    {include: '#block_doc_comment'},
    {include: '#block_comment'},
    {include: '#line_doc_comment'},
    {include: '#line_comment'},
    {include: '#line_Ampersand_comment'},
    {include: '#line_asterisk_comment'},
    {include: '#line_note_comment'},
    {include: '#sigils'},
    {
      begin: '#\\!?\\[',
      end: '\\]',
      name: 'meta.attribute.harbour',
      patterns: [{include: '#string_literal'}]
    },
    {begin: "'", end: "'", name: 'string.quoted.single.harbour'},
    {
      begin: '(?<=\\s|,|\\(|=)\\[',
      end: '\\]',
      name: 'string.quoted.square.harbour'
    },
    {include: '#string_literal'},
    {
      match: '\\b[0-9][0-9_]*\\.[0-9][0-9_]*([eE][+-][0-9_]+)?(f32|f64)?\\b',
      name: 'constant.numeric.float.harbour'
    },
    {
      match: '\\b[0-9][0-9_]*(\\.[0-9][0-9_]*)?[eE][+-][0-9_]+(f32|f64)?\\b',
      name: 'constant.numeric.float.harbour'
    },
    {
      match: '\\b[0-9][0-9_]*(\\.[0-9][0-9_]*)?([eE][+-][0-9_]+)?(f32|f64)\\b',
      name: 'constant.numeric.float.harbour'
    },
    {
      match: '\\b[0-9][0-9_]*([ui](8|16|32|64)?)?\\b',
      name: 'constant.numeric.integer.decimal.harbour'
    },
    {
      match: '\\b0x[a-fA-F0-9_]+([ui](8|16|32|64)?)?\\b',
      name: 'constant.numeric.integer.hexadecimal.harbour'
    },
    {
      match: '\\b0o[0-7_]+([ui](8|16|32|64)?)?\\b',
      name: 'constant.numeric.integer.octal.harbour'
    },
    {
      match: '\\b0b[01_]+([ui](8|16|32|64)?)?\\b',
      name: 'constant.numeric.integer.binary.harbour'
    },
    {
      match: '\\b(static|STATIC|THREAD STATIC)\\b',
      name: 'storage.modifier.static.harbour'
    },
    {
      match: '(TRUE|FALSE|\\.T\\.|\\.F\\.)',
      name: 'constant.language.boolean.harbour'
    },
    {
      match:
        '(K_DOWN|K_PGDN|K_CTRL_PGDN|K_UP|K_PGUP|K_CTRL_PGUP|K_RIGHT|K_LEFT|K_HOME|K_END|K_CTRL_LEFT|K_CTRL_RIGHT|K_CTRL_HOME|K_CTRL_END)',
      name: 'constant.language.keyboard.harbour'
    },
    {
      match: '\\b(s_)?(mtx)?[a,b,c,d,h,l,n,o,u,x][A-Z][A-Za-z0-9_]*\\b',
      name: 'variable.name.hungary.harbour'
    },
    {
      match: '\\b_[a-z][A-Za-z0-9_]*|\\s(i|j)\\s\\b',
      name: 'variable.name.special.harbour'
    },
    {
      match:
        '\\b(?i)(EXIT|ELSEIF|ELSE|IF|ENDIF|FOR|EACH|IN|TO|STEP|DESCEND|NEXT|LOOP|DO CASE|ENDCASE|SWITCH|CASE|OTHERWISE|ENDSWITCH|RETURN|ENDCLASS|VAR|DATA|INIT|WHILE|DO WHILE|ENDDO|BEGIN SEQUENCE|END SEQUENCE|RECOVER USING|WITH|BREAK|PARAMETERS|END|REQUEST|ANNOUNCE)\\b',
      name: 'keyword.control.harbour'
    },
    {
      match:
        '\\b(?i)(GO TOP|SELECT|SAY|GET|PICTURE|SEEK|REPLACE|APPEND BLANK|USE|INDEX ON|TAG)\\b',
      name: 'keyword.command.xbase.harbour'
    },
    {
      match: '\\b(?i)(HSEEK|RREPLACE|START PRINT|ENDPRINT)\\b',
      name: 'keyword.command.xbase.harbour'
    },
    {
      match: '\\b(?i)(LOCAL|PRIVATE|PROTECTED|PUBLIC|FIELD|field|MEMVAR)\\b',
      name: 'keyword.other.harbour'
    },
    {include: '#types'},
    {include: '#std_types'},
    {include: '#self'},
    {include: '#nil'},
    {include: '#lifetime'},
    {include: '#ref_lifetime'},
    {
      begin: '^\\s*#\\s*(error|warning|stdout)\\b',
      captures: {1: {name: 'keyword.control.import.error.harbour'}},
      end: '(?<!\\\\)(?=\\n)',
      name: 'meta.preprocessor.diagnostic.harbour',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.harbour'
        }
      ]
    },
    {
      begin: '^\\s*#\\s*(include|require)\\b\\s+',
      captures: {1: {name: 'keyword.control.import.include.harbour'}},
      end: '(?=(?://|/\\*))|(?<!\\\\)(?=\\n)',
      name: 'meta.preprocessor.harbour.include',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.harbour'
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.harbour'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.harbour'}},
          name: 'string.quoted.double.include.harbour'
        }
      ]
    },
    {
      begin:
        '(?i)^\\s*#\\s*(define|defined|elif|else|if|ifdef|ifndef|endif|line|pragma|undef|command|xcommand|translate|xtranslate)\\b',
      captures: {1: {name: 'keyword.control.import.harbour'}},
      end: '(?=(?://|/\\*))|(?<!\\\\)(?=\\n)',
      name: 'meta.preprocessor.harbour',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.harbour'
        }
      ]
    },
    {match: '(:=|-\\>|\\+=|-=)', name: 'keyword.operator.assignment.harbour'},
    {
      match:
        '(\\<|\\<=|\\>=|==|!=|!|\\<\\>|\\>|\\$|\\s\\.OR\\.\\s|\\s\\.AND\\.\\s|\\s\\.NOT\\.\\s)',
      name: 'keyword.operator.comparison.harbour'
    },
    {
      match:
        '\\b(?i)(log_write|pp|to_str|RTrim|TRIM|Trim|PadR|Padr|PADR|PadC|PadL|Space)!',
      name: 'support.function.std.harbour'
    },
    {
      captures: {1: {name: 'entity.name.function.harbour'}},
      match: '\\b([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\('
    },
    {
      captures: {1: {name: 'entity.name.method.harbour'}},
      match: '\\b([a-zA-Z_][a-zA-Z0-9_]*):([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\('
    },
    {
      captures: {
        1: {name: 'variable.name.object.harbour'},
        2: {name: 'variable.name.member.harbour'}
      },
      match: '\\b([a-zA-Z_][a-zA-Z0-9_]*):([a-zA-Z_][a-zA-Z0-9_]*)'
    },
    {
      begin:
        '\\b(?i)((?:(?:static|init|exit)\\s+)?(?:func(?:t(?:i(?:o(?:n)?)?)?)?|PROC(?:E(?:D(?:U(?:R(?:E)?)?)?)?)?))\\s+([a-zA-Z_][a-zA-Z0-9_]*)',
      beginCaptures: {
        1: {name: 'keyword.other.fn.harbour'},
        2: {name: 'entity.name.function.harbour'}
      },
      end: '[\\n]',
      patterns: [{include: '#type_params'}, {include: '$self'}]
    },
    {
      begin:
        '\\b(?i)((?:CREATE\\s+)?(?:CLASS))\\s+([a-zA-Z_][a-zA-Z0-9_]*)(?:\\s+(INHERIT)\\s+([a-zA-Z_][a-zA-Z0-9_]*))?',
      beginCaptures: {
        1: {name: 'keyword.class.harbour'},
        2: {name: 'entity.name.class.harbour'},
        3: {name: 'keyword.class.inherit.harbour'},
        4: {name: 'entity.name.parent.class.harbour'}
      },
      end: '[\\n]',
      patterns: [{include: '#type_params'}, {include: '$self'}]
    },
    {
      begin:
        '\\b(?i)(METHOD|STATIC METHOD|METHOD PROCEDURE)\\s+((?:(?:[a-zA-Z_][a-zA-Z0-9_]*):)?(?:[a-zA-Z_][a-zA-Z0-9_]*))',
      beginCaptures: {
        1: {name: 'keyword.method.fn.harbour'},
        2: {name: 'entity.name.method.harbour'}
      },
      end: '[\\n]',
      patterns: [{include: '#type_params'}, {include: '$self'}]
    },
    {
      begin: ':',
      end: '[=;,\\)\\|]',
      patterns: [{include: '#type_params'}, {include: '$self'}]
    }
  ],
  repository: {
    block_comment: {
      begin: '/\\*',
      end: '\\*/',
      name: 'comment.block.harbour',
      patterns: [{include: '#block_doc_comment'}, {include: '#block_comment'}]
    },
    block_doc_comment: {
      begin: '/\\*[!\\*][^\\*]',
      end: '\\*/',
      name: 'comment.block.documentation.harbour',
      patterns: [{include: '#block_doc_comment'}, {include: '#block_comment'}]
    },
    escaped_character: {
      match:
        '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)',
      name: 'constant.character.escape.harbour'
    },
    line_Ampersand_comment: {
      match: '&&.*$',
      name: 'comment.line.double-slash.harbour'
    },
    line_asterisk_comment: {
      match: '^\\s*\\*.*$',
      name: 'comment.line.star.harbour'
    },
    line_comment: {match: '//.*$', name: 'comment.line.double-slash.harbour'},
    line_doc_comment: {
      match: '//[!/][^/].*$',
      name: 'comment.line.documentation.harbour'
    },
    line_note_comment: {
      match: '^\\s*NOTE\\s.*$',
      name: 'comment.line.note.harbour'
    },
    nil: {match: '\\b(NIL|nil)\\b', name: 'variable.nil.language.harbour'},
    self: {
      match: '\\b(Self|SELF|self)\\b',
      name: 'variable.self.language.harbour'
    },
    sigils: {
      match: '[@]|[:]{2}|[+]{2}(?=[a-zA-Z0-9_\\(\\[\\|\\"]+)',
      name: 'keyword.operator.sigil.harbou'
    },
    std_types: {
      match:
        '\\b(Vec|StrBuf|Path|Option|Result|Reader|Writer|Stream|Seek|Buffer|IoError|IoResult|Sender|SyncSender|Receiver|Cell|RefCell|Any)\\b',
      name: 'support.class.std.harbour'
    },
    string_literal: {begin: '"', end: '"', name: 'string.quoted.double.harbour'}
  },
  scopeName: 'source.harbour'
}

export default grammar
