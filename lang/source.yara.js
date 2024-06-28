// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/infosec-intern/vscode-yara>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.yar', '.yara'],
  names: ['yara'],
  patterns: [
    {include: '#includes'},
    {include: '#imports'},
    {include: '#rules'},
    {include: '#comments'},
    {include: '#unmatched-characters'}
  ],
  repository: {
    'arithmetic-operators': {
      match:
        '(?<=[0-9A-Z_a-z()\\[\\]\\s]|^)([+*\\\\%])(?=[-0-9A-Z_a-z()\\s]|[!@#$]|$)',
      name: 'keyword.operator.arithmetic.yara'
    },
    'arithmetic-unary-operators': {
      match: '(?<=[0-9A-Z_a-z()\\[\\]\\s]|^)(-)(?=[-0-9A-Z_a-z()\\s]|[!@#$]|$)',
      name: 'keyword.operator.arithmetic.yara'
    },
    'array-subscripting': {
      match: '(\\[|\\])',
      name: 'punctuation.definition.array.access.yara'
    },
    'base64-modifier': {
      begin: '\\b(base64)\\s*(\\()(?=\\s*")',
      beginCaptures: {
        1: {name: 'keyword.other.modifier.yara'},
        2: {name: 'punctuation.parenthesis.begin.yara'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.parenthesis.end.yara'}},
      patterns: [
        {include: '#quoted-strings-64'},
        {include: '#unmatched-characters'}
      ]
    },
    'bitwise-operators': {
      match:
        '(?<=[0-9A-Z_a-z()\\[\\]\\s]|^)([&|^]|<<|>>)(?=[-0-9A-Z_a-z()\\s]|[!@#$]|$)',
      name: 'keyword.operator.bitwise.yara'
    },
    'bitwise-unary-operators': {
      match: '(?<=[0-9A-Z_a-z()\\[\\]\\s]|^)(~)(?=[-0-9A-Z_a-z()\\s]|[!@#$]|$)',
      name: 'keyword.operator.bitwise.yara'
    },
    'boolean-operators': {
      match: '\\b(not|defined|and|or)\\b',
      name: 'keyword.operator.logical.yara'
    },
    booleans: {match: '\\b(false|true)\\b', name: 'constant.language.yara'},
    comments: {
      name: 'meta.comment.yara',
      patterns: [
        {match: '//.*$', name: 'comment.line.double-slash.yara'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.yara'}
      ]
    },
    'condition-expression': {
      patterns: [
        {include: '#comments'},
        {include: '#condition-nested-expression'},
        {include: '#boolean-operators'},
        {include: '#struct-member-access'},
        {include: '#array-subscripting'},
        {include: '#relational-operators'},
        {include: '#relational-operators-text'},
        {include: '#relational-operators-regexp'},
        {include: '#arithmetic-unary-operators'},
        {include: '#arithmetic-operators'},
        {include: '#bitwise-unary-operators'},
        {include: '#bitwise-operators'},
        {include: '#regexp-strings'},
        {include: '#quoted-strings'},
        {include: '#numbers'},
        {include: '#separator'},
        {include: '#range-operator'},
        {include: '#string-identifiers'},
        {include: '#booleans'},
        {
          match: '\\b(all|any|none|filesize)\\b',
          name: 'constant.numeric.keyword.yara'
        },
        {
          match: '\\b(entrypoint)\\b',
          name: 'constant.numeric.keyword.yara invalid.deprecated.keyword.yara'
        },
        {
          match: '\\b(them)\\b',
          name: 'variable.language.string.identifier.wildcard.yara'
        },
        {match: '\\b(at|for|in|of)\\b', name: 'keyword.other.yara'},
        {
          match: '\\b((?:u?int)(?:8|16|32)(?:be)?)(?=\\s*(\\(|\n))',
          name: 'support.function.other.yara'
        },
        {
          match: '([!@#$])(?![0-9A-Z_a-z])',
          name: 'variable.language.loop.variable.yara'
        },
        {name: 'variable.language.loop.enter.yara'},
        {include: '#identifiers'},
        {include: '#unmatched-characters'}
      ]
    },
    'condition-nested-expression': {
      begin: '(:\\s*)?\\(',
      end: '\\)',
      patterns: [{include: '#condition-expression'}]
    },
    'hex-alternate-values': {
      begin: '\\(',
      end: '\\)',
      patterns: [
        {include: '#hex-values'},
        {match: '\\|', name: 'entity.other.special.pipe.hex.yara'},
        {include: '#hex-alternate-values'},
        {include: '#unmatched-characters'}
      ]
    },
    'hex-jump': {
      begin:
        '\\[\\s*(?=([1-9][0-9]*|[0-9]*\\s*-|[0-9]+\\s*-\\s*[0-9]*)\\s*\\])',
      end: '\\]',
      name: 'entity.name.jump.hex.yara',
      patterns: [
        {match: '[0-9]', name: 'constant.numeric.jump.hex.yara'},
        {match: '-', name: 'entity.other.dash.jump.hex.yara'},
        {include: '#unmatched-characters'}
      ]
    },
    'hex-string-value': {
      begin: '\\{',
      contentName: 'entity.name.hex.yara',
      end: '\\}|(?=[^?0-9A-Fa-f\\[\\-\\]()/\\s\\n])(.*)',
      endCaptures: {1: {name: 'invalid.illegal.newline.yara'}},
      patterns: [
        {include: '#comments'},
        {include: '#hex-jump'},
        {include: '#hex-values'},
        {include: '#hex-alternate-values'},
        {include: '#unmatched-characters'}
      ]
    },
    'hex-values': {
      begin: '(?=[0-9?A-Fa-f])',
      contentName: 'string.other.hex.yara',
      end: '(?=[\\s\\[()}/|])',
      patterns: [
        {
          match:
            '(?<![0-9?A-Fa-f])[0-9?A-Fa-f]([0-9?A-Fa-f]{2})*(?![0-9?A-Fa-f])',
          name: 'invalid.illegal.hex.missingchar.yara'
        },
        {match: '[0-9A-Fa-f]', name: 'string.other.hex.yara'},
        {match: '\\?', name: 'constant.other.placeholder.hex.yara'},
        {include: '#unmatched-characters'}
      ]
    },
    identifiers: {
      name: 'variable.other.identifier.yara',
      patterns: [
        {include: '#reserved-identifiers'},
        {
          match: '\\b[A-Z_a-z][0-9A-Z_a-z]{0,127}\\b',
          name: 'variable.other.identifier.yara'
        },
        {include: '#unmatched-characters'}
      ]
    },
    imports: {
      begin: '\\b(import)(?=\\s+")',
      end: '(?<=")',
      name: 'keyword.control.directive.yara',
      patterns: [{include: '#quoted-strings'}]
    },
    includes: {
      begin: '\\b(include)(?=\\s+")',
      end: '(?<=")',
      name: 'keyword.control.directive.yara',
      patterns: [{include: '#quoted-strings'}]
    },
    integers: {
      patterns: [
        {
          captures: {1: {name: 'storage.type.number.postfix.yara'}},
          match: '\\b[0-9]+(KB|MB)?\\b',
          name: 'constant.numeric.dec.yara'
        },
        {match: '\\b0x[0-9A-Fa-f]+\\b', name: 'constant.numeric.hex.yara'},
        {
          captures: {1: {name: 'storage.type.number.yara'}},
          match: '\\b(0o)([0-7]+)\\b',
          name: 'constant.numeric.oct.yara'
        }
      ]
    },
    'meta-value-bool': {
      captures: {
        1: {name: 'entity.other.meta.identifier.yara'},
        2: {name: 'keyword.operator.assignment.yara'},
        3: {name: 'constant.language.yara'}
      },
      match: '\\b([A-Z_a-z][0-9A-Z_a-z]{0,127})\\s*(=)\\s*(true|false)',
      name: 'support.other.meta-name.strings.yara'
    },
    'meta-value-int': {
      captures: {
        1: {name: 'entity.other.meta.identifier.yara'},
        2: {name: 'keyword.operator.assignment.yara'},
        3: {name: 'constant.numeric.yara'},
        4: {name: 'storage.type.number.postfix.yara'}
      },
      match: '\\b([A-Z_a-z][0-9A-Z_a-z]{0,127})\\s*(=)\\s*([0-9]+)(KB|MB)?',
      name: 'support.other.meta-name.strings.yara'
    },
    'meta-value-string': {
      begin: '\\b([A-Z_a-z][0-9A-Z_a-z]{0,127})\\s*(=)\\s*(?=")',
      beginCaptures: {
        1: {name: 'entity.other.meta.identifier.yara'},
        2: {name: 'keyword.operator.assignment.yara'}
      },
      end: '(?<=")',
      name: 'support.other.meta-name.strings.yara',
      patterns: [{include: '#quoted-strings'}]
    },
    numbers: {
      patterns: [
        {match: '\\b([0-9]+\\.[0-9]+)\\b', name: 'constant.numeric.yara'},
        {include: '#integers'}
      ]
    },
    'quoted-strings': {
      begin: '(?<!")(")(?!\\n)',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.yara'}},
      end: '(")|((?:\\\\")?[^"]*\\n)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.yara'},
        2: {name: 'invalid.illegal.newline.yara'}
      },
      name: 'string.quoted.double.yara',
      patterns: [
        {
          match: '\\\\([nrt\\\\"]|x[0-9A-Fa-f]{2})',
          name: 'constant.character.escape.yara'
        },
        {
          match: '[\\x20\\x21\\x23-\\x5B\\x5D-\\x7E]',
          name: 'string.quoted.double.ascii.yara'
        },
        {match: '[^\\x00-\\x7F]', name: 'string.quoted.double.unicode.yara'},
        {match: '["\\\\\\n\\r]', name: 'invalid.illegal.character.yara'}
      ]
    },
    'quoted-strings-64': {
      begin:
        '(")(?=(\\\\([nrt\\\\"]|x[0-9A-Fa-f]{2})|[\\x20\\x21\\x23-\\x5B\\x5D-\\x7E]){64}")',
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.yara'},
        2: {name: 'invalid.illegal.character.length.yara'}
      },
      end: '(")|(\\n)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.yara'},
        2: {name: 'invalid.illegal.newline.yara'}
      },
      name: 'string.quoted.double.yara',
      patterns: [
        {
          match: '\\\\([nrt\\\\"]|x[0-9A-Fa-f]{2})',
          name: 'constant.character.escape.yara'
        },
        {
          match: '[\\x20\\x21\\x23-\\x5B\\x5D-\\x7E]',
          name: 'string.double.quoted.ascii.yara'
        }
      ]
    },
    'range-operator': {
      match: '(?<!\\.)\\.\\.(?!\\.)',
      name: 'keyword.operator.range.yara'
    },
    'regexp-base-expression': {
      patterns: [
        {match: '\\.', name: 'constant.character.class.regexp'},
        {match: '\\^', name: 'constant.character.assertion.regexp'},
        {match: '\\$', name: 'constant.character.assertion.regexp'},
        {match: '[+*?]\\??', name: 'keyword.operator.quantifier.regexp'},
        {match: '\\|', name: 'keyword.operator.disjunction.regexp'},
        {
          captures: {1: {name: 'constant.numeric.yara'}},
          match: '\\{([0-9]+|[0-9]+,(?:[0-9]+)?|,[0-9]+)\\}',
          name: 'keyword.operator.quantifier.regexp'
        },
        {include: '#regexp-escape-sequence'},
        {
          match: '[\\x20!"#%&\',\\-0-9:->@A-Z\\]_`a-z{}~]',
          name: 'string.regexp.yara'
        },
        {include: '#unmatched-characters'}
      ]
    },
    'regexp-character-set': {
      patterns: [
        {
          begin: '(\\[)(\\^)?(\\])?(-)?',
          beginCaptures: {
            1: {
              name: 'constant.other.set.regexp punctuation.character.set.begin.regexp'
            },
            2: {name: 'keyword.operator.negation.regexp'},
            3: {name: 'constant.character.set.regexp'},
            4: {name: 'constant.character.set.regexp'}
          },
          end: '(-?)(\\])|([^\\]]*)(?=\\n)',
          endCaptures: {
            1: {name: 'constant.character.set.regexp'},
            2: {
              name: 'constant.other.set.regexp punctuation.character.set.end.regexp'
            },
            3: {name: 'invalid.illegal.newline.yara'}
          },
          name: 'meta.character.set.regexp',
          patterns: [
            {include: '#regexp-character-set-escapes'},
            {include: '#regexp-escape-sequence'},
            {
              match: '[\\x20-\\x2E\\x30-\\x5B\\x5E-\\x7E]',
              name: 'constant.character.set.regexp'
            }
          ]
        }
      ]
    },
    'regexp-character-set-escapes': {
      patterns: [
        {match: '\\\\([\\]bB])', name: 'constant.character.escape.regexp'},
        {
          captures: {
            1: {name: 'constant.character.set.regexp'},
            2: {name: 'constant.character.class.range.regexp'},
            3: {name: 'constant.character.set.regexp'}
          },
          match: '(-)(-)(-)'
        },
        {
          captures: {1: {name: 'constant.character.class.range.regexp'}},
          match: '(-)'
        }
      ]
    },
    'regexp-escape-sequence': {
      patterns: [
        {match: '\\\\[./afnrt\\\\]', name: 'constant.character.escape.regexp'},
        {
          captures: {
            1: {name: 'constant.character.escape.regexp'},
            2: {name: 'invalid.illegal.character.escape.regex'}
          },
          match: '(\\\\x[0-9A-Fa-f]{2})|(\\\\x[^\\]/]{0,2})'
        },
        {match: '\\\\([wWsSdD])', name: 'constant.character.class.regexp'},
        {match: '\\\\([bB])', name: 'constant.character.assertion.regexp'},
        {match: '\\\\(.)', name: 'constant.character.escape.regexp'}
      ]
    },
    'regexp-expression': {
      patterns: [
        {include: '#regexp-parentheses'},
        {include: '#regexp-character-set'},
        {include: '#regexp-base-expression'},
        {match: '/', name: 'invalid.illegal.regexp.end.yara'}
      ]
    },
    'regexp-parentheses': {
      begin: '(\\()([+*?])?',
      beginCaptures: {
        1: {
          name: 'punctuation.parenthesis.begin.regexp support.other.parenthesis.regexp'
        },
        2: {name: 'invalid.illegal.group.construct.regexp'}
      },
      end: '(\\))|([^)]*)(?=\\n)',
      endCaptures: {
        1: {
          name: 'punctuation.parenthesis.end.regexp support.other.parenthesis.regexp'
        },
        2: {name: 'invalid.illegal.newline.yara'}
      },
      patterns: [{include: '#regexp-expression'}]
    },
    'regexp-strings': {
      begin: '(?<!/)(/)(?!/|\\n)',
      beginCaptures: {1: {name: 'punctuation.definition.regexp.begin.yara'}},
      end: '(?<!\\\\)(/)(i?s?)|((?:\\\\/)?[^/]*\\n)',
      endCaptures: {
        1: {name: 'punctuation.definition.regexp.end.yara'},
        2: {name: 'storage.modifier.flag.regexp'},
        3: {name: 'invalid.illegal.newline.yara'}
      },
      name: 'string.regexp.yara',
      patterns: [{include: '#regexp-expression'}]
    },
    'relational-operators': {
      match:
        '(?<=[0-9A-Z_a-z()\\[\\]\\s]|^)(>=?|<=?|==|!=)(?=[-0-9A-Z_a-z()\\s]|[!@#$]|$)',
      name: 'keyword.operator.comparison.yara'
    },
    'relational-operators-regexp': {
      match: '\\b(matches)(?=\\s*/)',
      name: 'keyword.operator.comparison.yara'
    },
    'relational-operators-text': {
      match:
        '\\b(contains|icontains|startswith|istartswith|endswith|iendswith|iequals)(?=\\s*")',
      name: 'keyword.operator.comparison.yara'
    },
    'reserved-identifiers': {
      match:
        '\\b(all|and|any|ascii|at|base64|base64wide|condition|contains|endswith|entrypoint|false|filesize|for|fullword|global|import|icontains|iendswith|iequals|in|include|int16|int16be|int32|int32be|int8|int8be|istartswith|matches|meta|nocase|none|not|of|or|private|rule|startswith|strings|them|true|uint16|uint16be|uint32|uint32be|uint8|uint8be|wide|xor|defined)\\b',
      name: 'invalid.illegal.identifier.yara'
    },
    'rule-conditions': {
      begin: '\\b(condition)\\s*:',
      beginCaptures: {1: {name: 'keyword.other.condition.yara'}},
      end: '(?=\\})',
      name: 'entity.name.section.condition.yara',
      patterns: [
        {include: '#comments'},
        {include: '#condition-expression'},
        {include: '#reserved-identifiers'},
        {include: '#unmatched-characters'}
      ]
    },
    'rule-declaration': {
      begin: '\\b(rule)\\b',
      beginCaptures: {1: {name: 'storage.type.function.yara'}},
      end: '(?=[{:])',
      name: 'meta.function.yara',
      patterns: [
        {include: '#reserved-identifiers'},
        {
          match: '\\b[A-Z_a-z][0-9A-Z_a-z]{0,127}\\b',
          name: 'entity.name.function.yara'
        },
        {include: '#unmatched-characters'}
      ]
    },
    'rule-end': {match: '\\}', name: 'punctuation.definition.rule.end.yara'},
    'rule-meta': {
      begin: '\\b(meta)\\s*:',
      beginCaptures: {1: {name: 'keyword.other.meta.yara'}},
      end: '(?=\\b(strings|condition)\\b)',
      patterns: [
        {include: '#reserved-identifiers'},
        {include: '#comments'},
        {include: '#meta-value-bool'},
        {include: '#meta-value-int'},
        {include: '#meta-value-string'},
        {include: '#unmatched-characters'}
      ]
    },
    'rule-restrictions': {
      patterns: [
        {
          match: '\\b(global|private)\\b',
          name: 'entity.name.type.restrictions.yara'
        }
      ]
    },
    'rule-start': {
      match: '\\{',
      name: 'punctuation.definition.rule.start.yara'
    },
    'rule-strings': {
      begin: '\\b(strings)\\s*:',
      beginCaptures: {1: {name: 'keyword.other.strings.yara'}},
      end: '(?=\\b(condition)\\b)',
      name: 'entity.name.section.strings.yara',
      patterns: [
        {include: '#reserved-identifiers'},
        {include: '#comments'},
        {include: '#string-assignment-text'},
        {include: '#string-assignment-regex'},
        {include: '#string-assignment-hex'},
        {include: '#unmatched-characters'}
      ]
    },
    'rule-tags': {
      begin: ':',
      end: '(?=\\{)',
      name: 'entity.name.tag.yara',
      patterns: [{include: '#identifiers'}]
    },
    rules: {
      patterns: [
        {include: '#rule-restrictions'},
        {include: '#rule-declaration'},
        {include: '#rule-tags'},
        {include: '#rule-start'},
        {include: '#rule-meta'},
        {include: '#rule-strings'},
        {include: '#rule-conditions'},
        {include: '#comments'},
        {include: '#rule-end'}
      ]
    },
    separator: {match: ',', name: 'punctuation.separator.arguments.yara'},
    'string-assignment-hex': {
      begin: '(\\$)([0-9A-Z_a-z]+\\b)?+\\s*+([^\\n\\s=][^=]*)?(=)',
      beginCaptures: {
        1: {name: 'variable.language.string.identifier.yara'},
        2: {name: 'variable.other.string.identifier.yara'},
        3: {name: 'invalid.illegal.string.identifier.yara'},
        4: {name: 'keyword.operator.assignment.yara'}
      },
      end: '(?=\\b(condition)\\b|\\$)',
      name: 'support.other.attribute-name.strings.yara',
      patterns: [
        {include: '#comments'},
        {include: '#hex-string-value'},
        {match: '\\b(private)\\b', name: 'keyword.other.modifier.yara'},
        {include: '#reserved-identifiers'},
        {include: '#unmatched-characters'}
      ]
    },
    'string-assignment-regex': {
      begin: '(\\$)([0-9A-Z_a-z]+\\b)?+\\s*+([^\\n\\s=][^=]*)?(=)(?=\\s*/)',
      beginCaptures: {
        1: {name: 'variable.language.string.identifier.yara'},
        2: {name: 'variable.other.string.identifier.yara'},
        3: {name: 'invalid.illegal.string.identifier.yara'},
        4: {name: 'keyword.operator.assignment.yara'}
      },
      end: '(?=\\b(condition)\\b|\\$)',
      name: 'support.other.attribute-name.strings.yara',
      patterns: [
        {include: '#comments'},
        {include: '#regexp-strings'},
        {
          match: '\\b(nocase|wide|ascii|fullword|private)\\b',
          name: 'keyword.other.modifier.yara'
        },
        {include: '#reserved-identifiers'},
        {include: '#unmatched-characters'}
      ]
    },
    'string-assignment-text': {
      begin: '(\\$)([0-9A-Z_a-z]+\\b)?+\\s*+([^\\n\\s=][^=]*)?(=)(?=\\s*")',
      beginCaptures: {
        1: {name: 'variable.language.string.identifier.yara'},
        2: {name: 'variable.other.string.identifier.yara'},
        3: {name: 'invalid.illegal.string.identifier.yara'},
        4: {name: 'keyword.operator.assignment.yara'}
      },
      end: '(?=\\b(condition)\\b|\\$)',
      name: 'support.other.attribute-name.strings.yara',
      patterns: [
        {include: '#comments'},
        {include: '#text-strings'},
        {include: '#reserved-identifiers'},
        {include: '#unmatched-characters'}
      ]
    },
    'string-identifiers': {
      captures: {
        1: {name: 'variable.language.string.identifier.yara'},
        2: {name: 'variable.other.string.identifier.yara'},
        3: {name: 'string.interpolated.string.identifier.yara'}
      },
      match: '([!@#$])([0-9A-Z_a-z]+|(?=[*]))([*]?)',
      name: 'variable.other.string_identifier.yara'
    },
    'struct-member-access': {
      match: '(?!<\\.\\s*)\\.\\s*(?!\\.)',
      name: 'meta.struct.access.yara'
    },
    'text-strings': {
      patterns: [
        {include: '#quoted-strings'},
        {include: '#xor-modifier'},
        {include: '#base64-modifier'},
        {
          match:
            '\\b(nocase|wide|ascii|xor|base64|base64wide|fullword|private)\\b(?!\\()',
          name: 'keyword.other.modifier.yara'
        },
        {include: '#comments'},
        {include: '#unmatched-characters'}
      ]
    },
    'unmatched-characters': {
      match: '\\S',
      name: 'invalid.illegal.character.yara'
    },
    'xor-modifier': {
      captures: {
        1: {name: 'keyword.other.modifier.yara'},
        2: {name: 'punctuation.parenthesis.begin.yara'},
        3: {name: 'constant.numeric.yara'},
        4: {name: 'constant.character.hyphen.yara'},
        5: {name: 'constant.numeric.yara'},
        6: {name: 'punctuation.parenthesis.end.yara'}
      },
      match:
        '\\b(xor)\\s*(\\()\\s*(0x[0-9A-Fa-f]{1,2}|0o[0-7]{1,3}|[0-9]{1,3})(?:\\s*(-)\\s*(0x[0-9A-Fa-f]{1,2}|0o[0-7]{1,3}|[0-9]{1,3}))?\\s*(\\))'
    }
  },
  scopeName: 'source.yara'
}

export default grammar
