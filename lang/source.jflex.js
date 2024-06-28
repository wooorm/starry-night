// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/jflex-de/jflex.tmbundle>
// and licensed `bsd-2-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.java'],
  extensions: ['.jflex'],
  extensionsWithDot: ['.flex'],
  names: ['jflex'],
  patterns: [
    {
      begin: '\\A',
      end: '^%(?=%)',
      endCaptures: {0: {name: 'markup.heading.jflex'}},
      name: 'meta.package.jflex',
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.package.java'},
            2: {name: 'storage.modifier.package.java'},
            3: {name: 'punctuation.terminator.java'}
          },
          match: '^\\s*(package)\\b(?:\\s*([^ ;$]+)\\s*(;)?)?',
          name: 'meta.package.java'
        },
        {
          begin: '(import static)\\b\\s*',
          beginCaptures: {1: {name: 'keyword.other.import.static.java'}},
          captures: {
            1: {name: 'keyword.other.import.java'},
            2: {name: 'storage.modifier.import.java'},
            3: {name: 'punctuation.terminator.java'}
          },
          contentName: 'storage.modifier.import.java',
          end: '\\s*(?:$|(;))',
          endCaptures: {1: {name: 'punctuation.terminator.java'}},
          name: 'meta.import.java',
          patterns: [
            {match: '\\.', name: 'punctuation.separator.java'},
            {
              match: '\\s',
              name: 'invalid.illegal.character_not_allowed_here.java'
            }
          ]
        },
        {
          begin: '(import)\\b\\s*',
          beginCaptures: {1: {name: 'keyword.other.import.java'}},
          captures: {
            1: {name: 'keyword.other.import.java'},
            2: {name: 'storage.modifier.import.java'},
            3: {name: 'punctuation.terminator.java'}
          },
          contentName: 'storage.modifier.import.java',
          end: '\\s*(?:$|(;))',
          endCaptures: {1: {name: 'punctuation.terminator.java'}},
          name: 'meta.import.java',
          patterns: [
            {match: '\\.', name: 'punctuation.separator.java'},
            {
              match: '\\s',
              name: 'invalid.illegal.character_not_allowed_here.java'
            }
          ]
        },
        {include: 'source.java#code'}
      ]
    },
    {
      begin: '%',
      beginCaptures: {0: {name: 'markup.heading.jflex'}},
      end: '^%%',
      endCaptures: {0: {name: 'markup.heading.jflex'}},
      name: 'meta.macros.jflex',
      patterns: [
        {
          match: '^%unicode(\\s+[1-9][0-9]*(\\.[0-9]+){0,2})?',
          name: 'keyword.other.jflex'
        },
        {match: '^%buffer\\s+[1-9][0-9]*', name: 'keyword.other.jflex'},
        {
          match: '^%(eofclose|inputstreamctor)(\\s+(true|false))?',
          name: 'keyword.other.jflex'
        },
        {
          captures: {
            1: {name: 'keyword.other.jflex'},
            2: {name: 'storage.type.jflex'}
          },
          match:
            '^(%(?:class|extends|type|ctorarg|implements|include|initthrow|eofthrow|yylexthrow|throws|scanerror|warn|no-warn|suppress|token_size_limit))\\s+(.+)',
          name: 'meta.somearg.jflex'
        },
        {
          captures: {
            1: {name: 'keyword.other.jflex'},
            2: {name: 'storage.type.jflex'}
          },
          match: '^(%function)\\s+(\\w+)',
          name: 'meta.funarg.jflex'
        },
        {
          captures: {
            1: {name: 'keyword.other.jflex'},
            2: {name: 'storage.type.jflex'}
          },
          match: '^(%cupsym)\\s+(\\w+(\\.w+)*)',
          name: 'meta.cupsym.jflex'
        },
        {
          begin: '^%state',
          beginCaptures: {0: {name: 'keyword.other.jflex'}},
          end: '$',
          name: 'meta.states.jflex',
          patterns: [
            {match: '\\w+', name: 'storage.modifier.jflex'},
            {match: ',', name: 'punctuation.separator.jflex'},
            {match: '\\s+', name: 'meta.whitespace.jflex'},
            {include: 'source.java#comments'},
            {match: '\\S', name: 'invalid.illegal.characater.jflex'}
          ]
        },
        {
          match:
            '^%(char|line|column|byaccj|cup2|cup(debug)?|integer|int(wrap)?|yyeof|notunix|7bit|full|8bit|16bit|caseless|ignorecase|public|apiprivate|final|abstract|debug|standalone|pack|no_suppress_warnings)',
          name: 'keyword.other.jflex'
        },
        {
          begin: '^%(|init|initthrow|eof|eofthrow|yylexthrow|eofval){',
          beginCaptures: {0: {name: 'keyword.other.jflex'}},
          end: '^%(|init|initthrow|eof|eofthrow|yylexthrow|eofval)}',
          endCaptures: {0: {name: 'keyword.other.jflex'}},
          name: 'meta.classcode.jflex',
          patterns: [{include: 'source.java#code'}]
        },
        {
          begin: '(\\w+)\\s*(=)',
          beginCaptures: {
            1: {name: 'variable.other.jflex'},
            2: {name: 'keyword.operator.jflex'}
          },
          end: '(?=^%|\\w+\\s*=)',
          name: 'meta.macro.jflex',
          patterns: [{include: '#regexp'}]
        },
        {match: '^%\\S*', name: 'invalid.illegal.directive.jflex'},
        {include: 'source.java#comments'}
      ]
    },
    {
      contentName: 'meta.rules.jflex',
      end: '\\z',
      patterns: [{include: '#rules'}]
    }
  ],
  repository: {
    charclass: {
      patterns: [
        {
          match:
            '\\[:(jletter|jletterdigit|letter|uppercase|lowercase|digit):\\]',
          name: 'keyword.operator.jflex'
        },
        {
          match: '\\\\(d|D|s|S|w|W|p{[^}]*}|P{[^}]*})',
          name: 'keyword.operator.jflex'
        }
      ]
    },
    class: {
      patterns: [
        {
          begin: '\\[',
          beginCaptures: {0: {name: 'keyword.operator.jflex'}},
          end: '\\]',
          endCaptures: {0: {name: 'keyword.operator.jflex'}},
          name: 'meta.class.jflex',
          patterns: [{include: '#classcontent'}]
        }
      ]
    },
    classcontent: {
      patterns: [
        {match: '\\^|\\-|\\&\\&|\\|\\|', name: 'keyword.operator.jflex'},
        {include: '#charclass'},
        {include: '#numeric'},
        {include: '#escape'},
        {match: '({)(\\w+)(})', name: 'variable.other.macro.jflex'},
        {include: '#string'},
        {include: '#class'}
      ]
    },
    escape: {
      patterns: [
        {match: '\\\\(b|n|t|f|r|R)', name: 'keyword.operator.jflex'},
        {match: '\\\\.', name: 'constant.character.escape.jflex'}
      ]
    },
    macro: {match: '({)(\\s*\\w+\\s*)(})', name: 'variable.other.macro.jflex'},
    numeric: {
      patterns: [
        {match: '\\\\x[0-9a-fA-F]{2}', name: 'constant.numeric.jflex'},
        {match: '\\\\[0-3]?[0-7]{1,2}', name: 'constant.numeric.jflex'},
        {match: '\\\\U[0-9a-fA-F]{6}', name: 'constant.numeric.jflex'},
        {match: '\\\\u[0-9a-fA-F]{4}', name: 'constant.numeric.jflex'},
        {match: '\\\\u{[0-9a-fA-F]{1,6}}', name: 'constant.numeric.jflex'}
      ]
    },
    regexp: {
      patterns: [
        {include: '#repeat'},
        {include: '#macro'},
        {include: '#charclass'},
        {include: '#class'},
        {include: '#numeric'},
        {include: '#escape'},
        {include: '#string'},
        {include: 'source.java#comments'},
        {
          match: '\\.|\\+|\\*|\\(|\\)|\\?|\\||~|!|\\$|\\^|\\\\R|/',
          name: 'keyword.operator.jflex'
        }
      ]
    },
    repeat: {
      patterns: [
        {
          match: '{\\s*\\d+\\s*(\\s*,\\s*\\d+\\s*)?}',
          name: 'keyword.operator.jflex'
        }
      ]
    },
    rules: {
      patterns: [
        {
          begin:
            '(\\<\\s*\\w+\\s*(?:,\\s*\\w+\\s*)*\\>)\\s*({)(?!\\s*\\w+\\s*})',
          beginCaptures: {
            1: {name: 'variable.parameter.jflex'},
            2: {name: 'keyword.operator.jflex'}
          },
          end: '}',
          endCaptures: {0: {name: 'keyword.operator.jflex'}},
          name: 'meta.states.jflex',
          patterns: [{include: '#rules'}]
        },
        {
          match: '\\<\\s*\\w+\\s*(,\\s*\\w+\\s*)*\\>',
          name: 'variable.parameter.jflex'
        },
        {include: '#regexp'},
        {match: '<<EOF>>', name: 'constant.language.jflex'},
        {
          begin: '({)(?!\\s*\\w+\\s*})',
          beginCaptures: {1: {name: 'keyword.operator.jflex'}},
          end: '}',
          endCaptures: {0: {name: 'keyword.operator.jflex'}},
          name: 'meta.code.jflex',
          patterns: [{include: 'source.java#code'}]
        }
      ]
    },
    string: {
      patterns: [
        {
          begin: '"',
          end: '"',
          name: 'string',
          patterns: [{include: '#numeric'}, {include: '#escape'}]
        }
      ]
    }
  },
  scopeName: 'source.jflex'
}

export default grammar
