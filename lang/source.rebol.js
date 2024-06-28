// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Oldes/Sublime-REBOL>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.reb', '.r2', '.r3', '.rebol'],
  names: ['rebol'],
  patterns: [
    {include: '#comments'},
    {include: '#type-literal'},
    {include: '#strings'},
    {include: '#values'},
    {include: '#words'}
  ],
  repository: {
    'binary-base-sixteen': {
      begin: '(16)?#\\{',
      beginCaptures: {0: {name: 'string.binary.prefix'}},
      end: '\\}',
      endCaptures: {0: {name: 'string.binary.prefix'}},
      name: 'binary.base16.rebol',
      patterns: [
        {match: ';.*?$', name: 'comment.line.rebol'},
        {match: '[0-9a-fA-F\\s]*', name: 'string.binary.base16.rebol'},
        {match: '.', name: 'invalid.illegal.rebol'}
      ]
    },
    'binary-base-sixtyfour': {
      begin: '64#\\{',
      beginCaptures: {0: {name: 'string.binary.prefix'}},
      end: '\\}',
      endCaptures: {0: {name: 'string.binary.prefix'}},
      name: 'binary.base64.rebol',
      patterns: [
        {match: ';.*?$', name: 'comment.line.rebol'},
        {match: '[0-9a-zA-Z+/=\\s]*', name: 'string.binary.base64.rebol'},
        {match: '.', name: 'invalid.illegal.rebol'}
      ]
    },
    'binary-base-two': {
      begin: '2#\\{',
      beginCaptures: {0: {name: 'string.binary.prefix'}},
      end: '\\}',
      endCaptures: {0: {name: 'string.binary.prefix'}},
      name: 'binary.base2.rebol',
      patterns: [
        {match: ';.*?$', name: 'comment.line.rebol'},
        {match: '[01\\s]*', name: 'string.binary.base2.rebol'},
        {match: '.', name: 'invalid.illegal.rebol'}
      ]
    },
    character: {
      match: '#"(\\^(\\(([0-9a-fA-F]+|del)\\)|.)|[^\\^\\"])"',
      name: 'string.character.rebol'
    },
    'character-html': {
      captures: {
        0: {name: 'punctuation.definition.entity.html'},
        2: {name: 'punctuation.definition.entity.html'}
      },
      match: '(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)',
      name: 'constant.character.entity.html'
    },
    'character-inline': {
      match: '\\^(\\(([0-9a-fA-F]+|del)\\)|.)',
      name: 'string.escaped.rebol'
    },
    'comment-docline': {
      match: ';-.*?(?=\\%>|$)',
      name: 'comment.docline.rebol'
    },
    'comment-line': {match: ';.*?(?=\\%>|$)', name: 'comment.line.rebol'},
    'comment-multiline-block': {
      begin: 'comment\\s*\\[',
      end: '\\]',
      name: 'comment.multiline.rebol',
      patterns: [
        {include: '#comment-multiline-block-string'},
        {include: '#comment-multiline-string-nested'},
        {include: '#comment-multiline-block-nested'}
      ]
    },
    'comment-multiline-block-nested': {
      begin: '\\[',
      end: '\\]',
      name: 'comment.multiline.rebol',
      patterns: [
        {include: '#comment-multiline-block-string'},
        {include: '#comment-multiline-string-nested'},
        {include: '#comment-multiline-block-nested'}
      ]
    },
    'comment-multiline-block-string': {
      begin: '"',
      end: '"',
      name: 'comment.multiline.rebol',
      patterns: [{match: '\\^.'}]
    },
    'comment-multiline-string': {
      begin: 'comment\\s*\\{',
      end: '\\}',
      name: 'comment.multiline.rebol',
      patterns: [{match: '\\^.'}, {include: '#comment-multiline-string-nested'}]
    },
    'comment-multiline-string-nested': {
      begin: '\\{',
      end: '\\}',
      name: 'comment.multiline.rebol',
      patterns: [{match: '\\^.'}, {include: '#comment-multiline-string-nested'}]
    },
    'comment-todo': {match: ';@@.*?(?=\\%>|$)', name: 'comment.todo.rebol'},
    comments: {
      patterns: [
        {include: '#comment-docline'},
        {include: '#comment-todo'},
        {include: '#comment-line'},
        {include: '#comment-multiline-string'},
        {include: '#comment-multiline-block'}
      ]
    },
    doublequotedString: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.xml'
    },
    'function-definition': {
      begin:
        '([A-Za-z=\\!\\?\\*_\\+][A-Za-z0-9=_\\-\\!\\?\\*\\+\\.]*):\\s+(?i)(function|func|funct|routine|has)\\s*(\\[)',
      beginCaptures: {
        1: {name: 'support.variable.function.rebol'},
        2: {name: 'keyword.function'},
        3: {name: 'support.strong'}
      },
      end: ']',
      endCaptures: {0: {name: 'support.strong'}},
      name: 'function.definition',
      patterns: [
        {include: '#function-definition-block'},
        {include: '#comments'},
        {include: '#strings'},
        {include: '#word-setword'},
        {include: '#word-datatype'},
        {include: '#word-refinement'}
      ]
    },
    'function-definition-block': {
      begin: '\\[',
      end: ']',
      name: 'function.definition.block',
      patterns: [{include: '#comments'}, {include: '#word-datatype'}]
    },
    'function-definition-does': {
      captures: {
        1: {name: 'support.variable.function.rebol'},
        2: {name: 'keyword.function'}
      },
      match:
        '([A-Za-z=\\!\\?\\*_\\+][A-Za-z0-9=_\\-\\!\\?\\*\\+\\.]*):\\s+(?i)(does|context)(?=\\s*|\\[)',
      name: 'function.definition.does'
    },
    parens: {match: '(\\[|\\]|\\(|\\))', name: 'keyword.operator.comparison'},
    'rsp-tag': {
      begin: '<%=',
      end: '%>',
      name: 'source.rebol',
      patterns: [{include: 'source.rebol'}]
    },
    singlequotedString: {
      begin: "'",
      end: "'",
      name: 'string.quoted.single.xml'
    },
    'string-email': {
      match: '[^\\s\\n:/\\[\\]\\(\\)]+@[^\\s\\n:/\\[\\]\\(\\)]+',
      name: 'string.email.rebol'
    },
    'string-file': {
      match: '%[^\\s\\n\\[\\]\\(\\)]+',
      name: 'string.file.rebol'
    },
    'string-file-quoted': {
      begin: '%"',
      beginCaptures: {0: {name: 'string.file.quoted.rebol'}},
      end: '"',
      endCaptures: {0: {name: 'string.file.quoted.rebol'}},
      name: 'string.file.quoted.rebol',
      patterns: [{match: '%[A-Fa-f0-9]{2}', name: 'string.escape.ssraw'}]
    },
    'string-issue': {
      match: '#[^\\s\\n\\[\\]\\(\\)\\/]*',
      name: 'string.issue.rebol'
    },
    'string-multiline': {
      begin: '\\{',
      end: '\\}',
      name: 'string.multiline.rebol',
      patterns: [
        {include: '#rsp-tag'},
        {include: '#character-inline'},
        {include: '#character-html'},
        {include: '#string-nested-multiline'}
      ]
    },
    'string-nested-multiline': {
      begin: '\\{',
      end: '\\}',
      name: 'string.multiline.rebol',
      patterns: [{include: '#string-nested-multiline'}]
    },
    'string-quoted': {
      begin: '"',
      end: '"',
      name: 'string.rebol',
      patterns: [
        {include: '#rsp-tag'},
        {include: '#character-inline'},
        {include: '#character-html'}
      ]
    },
    'string-tag': {
      begin: '<(?:\\/|%\\=?\\ )?(?:([-_a-zA-Z0-9]+):)?([-_a-zA-Z0-9:]+)',
      beginCaptures: {
        0: {name: 'entity.other.namespace.xml'},
        1: {name: 'entity.name.tag.xml'}
      },
      end: '(?:\\s/|\\ %)?>',
      name: 'entity.tag.rebol',
      patterns: [
        {
          captures: {
            0: {name: 'entity.other.namespace.xml'},
            1: {name: 'entity.other.attribute-name.xml'}
          },
          match: ' (?:([-_a-zA-Z0-9]+):)?([_a-zA-Z-]+)'
        },
        {include: '#singlequotedString'},
        {include: '#doublequotedString'}
      ]
    },
    'string-url': {
      match: '[A-Za-z][\\w]{1,9}:(/{0,3}[^\\s\\n\\[\\]\\(\\)]+|//)',
      name: 'string.url.rebol'
    },
    strings: {
      patterns: [
        {include: '#character'},
        {include: '#string-quoted'},
        {include: '#string-multiline'},
        {include: '#string-tag'},
        {include: '#string-file-quoted'},
        {include: '#string-file'},
        {include: '#string-url'},
        {include: '#string-email'},
        {include: '#binary-base-two'},
        {include: '#binary-base-sixtyfour'},
        {include: '#binary-base-sixteen'},
        {include: '#string-issue'}
      ]
    },
    'type-literal': {
      begin: '#\\[(?:(\\w+!)|(true|false|none))',
      beginCaptures: {
        0: {name: 'native.datatype.rebol'},
        1: {name: 'logic.rebol'}
      },
      end: ']',
      name: 'series.literal.rebol',
      patterns: [{include: '$self'}]
    },
    'value-date': {
      captures: {1: {name: 'time.rebol'}},
      match:
        '\\d{1,2}\\-([A-Za-z]{3}|January|Febuary|March|April|May|June|July|August|September|October|November|December)\\-\\d{4}(/\\d{1,2}[:]\\d{1,2}([:]\\d{1,2}(\\.\\d{1,5})?)?([+-]\\d{1,2}[:]\\d{1,2})?)?',
      name: 'date.rebol'
    },
    'value-money': {
      match: '(?<!\\w)-?[a-zA-Z]*\\$\\d+(\\.\\d*)?',
      name: 'number.money.rebol'
    },
    'value-number': {
      match:
        '(?<!\\w|\\.)([-+]?((\\d+\\.?\\d*)|(\\.\\d+))((e|E)(\\+|-)?\\d+)?)(?=\\W)',
      name: 'constant.numeric.rebol'
    },
    'value-number-hex': {
      captures: {1: {name: 'constant.numeric.rebol'}},
      match:
        '(?<=^|\\s|\\[|\\]|\\)|\\()([0-9A-F]+)h(?=\\s|\\)|\\]|/|;|\\"|{\\[|\\()',
      name: 'number.rebol'
    },
    'value-pair': {
      match:
        '(?<!\\w)([-+]?((\\d+\\.?\\d*)|(\\.\\d+))((e|E)(\\+|-)?\\d+)?)x([-+]?((\\d+\\.?\\d*)|(\\.\\d+))((e|E)(\\+|-)?\\d+)?)',
      name: 'constant.pair.rebol'
    },
    'value-time': {
      match:
        '([-+]?[:]\\d{1,2}([aApP][mM])?)|([-+]?[:]\\d{1,2}[.]\\d{0,9})|([-+]?\\d{1,2}[:]\\d{1,2}([aApP][mM])?)|([-+]?\\d{1,2}[:]\\d{1,2}[.]\\d{0,9})|([-+]?\\d{1,2}[:]\\d{1,2}[:]\\d{1,2}([.]\\d{0,9})?([aApP][mM])?)(?!\\w)',
      name: 'time.rebol'
    },
    'value-tuple': {
      match:
        '([[:digit:]]{0,3}[.][[:digit:]]{0,3}[.][[:digit:]]{0,3}([.][[:digit:]]{0,3}){0,7})',
      name: 'tuple.rebol'
    },
    values: {
      patterns: [
        {include: '#value-tuple'},
        {include: '#value-pair'},
        {include: '#value-money'},
        {include: '#value-number-hex'},
        {include: '#value-date'},
        {include: '#value-time'},
        {include: '#value-number'}
      ]
    },
    word: {
      match:
        '(?<=^|\\s|\\[|\\]|\\)|\\()[A-Za-z_\\*\\?=_-]+[A-Za-z_0-9=_\\-\\!\\?\\*\\+\\.~:\']*(?=\\s|\\)|\\]|/|;|\\"|{)',
      name: 'word.rebol'
    },
    'word-datatype': {
      match:
        "(?<=^|\\s|\\[|\\]|\\)|\\()([A-Za-z_0-9=_\\-\\?\\*\\+\\.~:']+\\!|as|to)(?=\\s|\\)|\\])",
      name: 'support.type.rebol'
    },
    'word-getword': {
      match:
        "(?<=^|\\s|\\[|\\]|\\)|\\():[A-Za-z_0-9=_\\-\\!\\?\\*\\+\\.~:']+(?=\\s|\\)|\\])",
      name: 'support.variable.getword.rebol'
    },
    'word-group1': {
      match:
        '(?<=^|\\s|\\[|\\]|\\)|\\()(?i)(native|alias|all|any|as-string|as-binary|bind|bound\\?|case|catch|checksum|comment|debase|dehex|exclude|difference|disarm|enbase|form|free|get|get-env|in|intersect|minimum-of|maximum-of|mold|new-line|new-line\\?|not|now|prin|print|reduce|compose|construct|reverse|save|script\\?|set|shift|throw|to-hex|trace|try|type\\?|union|charset|unique|unprotect|unset|use|value\\?|compress|decompress|secure|open|close|read|read-io|write-io|write|update|query|wait|input\\?|exp|log-10|log-2|log-e|square-root|cosine|sine|tangent|arccosine|arcsine|arctangent|protect|lowercase|uppercase|entab|detab|connected\\?|browse|launch|stats|get-modes|set-modes|to-local-file|to-rebol-file|encloak|decloak|create-link|do-browser|bind\\?|hide|draw|show|size-text|textinfo|offset-to-caret|caret-to-offset|local-request-file|rgb-to-hsv|hsv-to-rgb|crypt-strength\\?|dh-make-key|dh-generate-key|dh-compute-key|dsa-make-key|dsa-generate-key|dsa-make-signature|dsa-verify-signature|rsa-make-key|rsa-generate-key|rsa-encrypt)(?=\\s|\\(|\\[|/|;|\\"|{)',
      name: 'support.function.rebol'
    },
    'word-group2': {
      match:
        '(?<=^|\\s|\\[|\\]|\\)|\\()(?i)(if|either|unless|else|for|foreach|forall|remove-each|until|while|case|loop|repeat|switch)(?=\\s|\\(|\\[|/|;|\\"|{)',
      name: 'support.function.group2.rebol'
    },
    'word-group3': {
      match:
        '(?<=^|\\s|\\[|\\]|\\)|\\()(?i)(at|insert|append|tail|head|back|repend|next)(?=\\s|\\(|\\[|\\)|\\]|/|;|\\"|{)',
      name: 'keyword.series.rebol'
    },
    'word-group4': {
      match:
        '(?<=^|\\s|\\[|\\]|\\)|\\()(?i)(off|false|none|on|true|yes|no|null)(?=\\s|\\(|\\[|\\)|\\]|;|\\"|{)',
      name: 'logic.rebol'
    },
    'word-group5': {
      match:
        '(?<=^|\\s|\\[|\\]|\\)|\\()(?i)(halt|quit|exit|return|break|quit)(?=\\s|\\(|\\[|/|;|\\"|{)',
      name: 'keyword.breaks.rebol'
    },
    'word-litword': {
      match:
        "(?<=^|\\s|\\[|\\]|\\)|\\()'[A-Za-z_0-9=_\\-\\!\\?\\*\\+\\.~:']+(?=\\s|\\)|\\])",
      name: 'keyword.litword.rebol'
    },
    'word-operator': {
      match:
        '(==|!=|<=|>=|<>|<|>|>>|>>>|<<|\\+|-|=|\\*|%|/|\\b(and|or|xor))(?=\\s|\\(|\\[|\\)|\\]|/|;|\\"|{)',
      name: 'keyword.operator.comparison'
    },
    'word-refinement': {
      match: '/[^\\s\\n\\[\\]\\(\\)]*',
      name: 'keyword.refinement.rebol'
    },
    'word-setword': {
      match: '[^:\\s\\n\\[\\]\\(\\)]*:',
      name: 'support.variable.setword.rebol'
    },
    words: {
      name: 'word.rebol',
      patterns: [
        {include: '#function-definition'},
        {include: '#function-definition-does'},
        {include: '#word-refinement'},
        {include: '#word-operator'},
        {include: '#word-getword'},
        {include: '#word-setword'},
        {include: '#word-refinement'},
        {include: '#word-datatype'},
        {include: '#word-group4'},
        {include: '#word-group1'},
        {include: '#word-group2'},
        {include: '#word-group3'},
        {include: '#word-group5'},
        {include: '#word'}
      ]
    }
  },
  scopeName: 'source.rebol'
}

export default grammar
