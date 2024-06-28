// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/spacestation13/dm-syntax>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.dm'],
  names: ['dm', 'byond'],
  patterns: [
    {include: '#preprocessor-rule-enabled'},
    {include: '#preprocessor-rule-disabled'},
    {include: '#preprocessor-rule-other'},
    {include: '#comments'},
    {
      captures: {
        1: {name: 'storage.type.dm'},
        2: {name: 'storage.modifier.dm'},
        3: {name: 'support.class.dm'},
        5: {name: 'variable.other.dm'}
      },
      match:
        '\\b(var)[\\/ ](?:(static|global|tmp|const)\\/)?(?:(area|atom(?:/movable)?|client|database(?:/query)?|datum|exception|generator|icon|image|list|matrix|mob|mutable_appearance|obj|particles|regex|savefile|sound|turf|world)\\/)?(?:([a-zA-Z0-9_\\-$]*)\\/)*([A-Za-z0-9_$]*)\\b',
      name: 'meta.initialization.dm'
    },
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)\\b',
      name: 'constant.numeric.dm'
    },
    {
      match:
        '\\b(sleep|spawn|break|continue|do|else|for|goto|if|return|switch|while|try|catch|throw)\\b',
      name: 'keyword.control.dm'
    },
    {match: '\\b(del|new)\\b', name: 'keyword.other.dm'},
    {match: '\\b(proc|verb|operator)\\b', name: 'storage.type.dm'},
    {
      match: '\\b(as|const|global|set|static|tmp)\\b',
      name: 'storage.modifier.dm'
    },
    {
      captures: {
        1: {name: 'keyword.operator.dm'},
        2: {name: 'support.class.dm'}
      },
      match:
        '(/)(area|atom(/movable)?|client|database(/query)?|datum|exception|generator|icon|image|list|matrix|mob|mutable_appearance|obj|particles|regex|savefile|sound|turf|world)\\b'
    },
    {
      captures: {
        1: {name: 'keyword.operator.dm'},
        2: {name: 'support.class.dm'}
      },
      match:
        '(\\(|,)\\s*(area|atom(/movable)?|client|database(/query)?|datum|exception|generator|icon|image|list|matrix|mob|mutable_appearance|obj|particles|regex|savefile|sound|turf|world)(?=/)'
    },
    {
      captures: {1: {name: 'support.function.dm'}},
      match:
        '\\b(list|call|input|locate|pick|arglist|CRASH|ASSERT|EXCEPTION|REGEX_QUOTE|REGEX_QUOTE_REPLACEMENT)(?>\\s*\\()'
    },
    {match: '\\b(usr|world|src|args|vars)\\b', name: 'variable.language.dm'},
    {
      match:
        '(\\?|(>|<)(=)?|\\.|:|/(=)?|~|\\+(\\+|=)?|-(-|=)?|\\*(\\*|=)?|%|>>|<<|=(=)?|!(=)?|<>|&|&&|\\^|\\||\\|\\||\\b(to|in|step)\\b)',
      name: 'keyword.operator.dm'
    },
    {
      match:
        '\\b(DM_BUILD|DM_VERSION|__FILE__|__LINE__|__MAIN__|DEBUG|FILE_DIR|TRUE|FALSE)\\b',
      name: 'constant.language.dm'
    },
    {match: '\\b([A-Z_][A-Z_0-9]+)\\b', name: 'constant.language.dm'},
    {match: '\\bnull\\b', name: 'constant.language.dm'},
    {
      begin: '@{"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.dm'}},
      end: '"}',
      endCaptures: {0: {name: 'punctuation.definition.string.end.dm'}},
      name: 'string.quoted.other.dm'
    },
    {
      begin: '@\\(([^)]+)\\)',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.dm'}},
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.definition.string.end.dm'}},
      name: 'string.unquoted.dm'
    },
    {
      begin: '@(.)',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.dm'}},
      end: '\\1|$',
      endCaptures: {0: {name: 'punctuation.definition.string.end.dm'}},
      name: 'string.quoted.other.dm'
    },
    {
      begin: '({")',
      beginCaptures: {
        0: {name: 'string.quoted.triple.dm'},
        1: {name: 'punctuation.definition.string.begin.dm'}
      },
      end: '("})',
      endCaptures: {
        0: {name: 'string.quoted.triple.dm'},
        1: {name: 'punctuation.definition.string.end.dm'}
      },
      name: 'meta.interpstring.dm',
      patterns: [
        {include: '#string_escaped_char'},
        {include: '#string_embedded_expression'},
        {match: '.', name: 'string.quoted.triple.dm'}
      ]
    },
    {
      begin: '(")',
      beginCaptures: {
        0: {name: 'string.quoted.double.dm'},
        1: {name: 'punctuation.definition.string.begin.dm'}
      },
      end: '("|[^\\\\]$)',
      endCaptures: {
        0: {name: 'string.quoted.double.dm'},
        1: {name: 'punctuation.definition.string.end.dm'}
      },
      name: 'meta.interpstring.dm',
      patterns: [
        {include: '#string_escaped_char'},
        {include: '#string_embedded_expression'},
        {match: '.', name: 'string.quoted.double.dm'}
      ]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.dm'}},
      end: "'|[^\\\\]$",
      endCaptures: {0: {name: 'punctuation.definition.string.end.dm'}},
      name: 'string.quoted.single.dm',
      patterns: [{match: '\\\\(.|\\n)', name: 'constant.character.escape.dm'}]
    },
    {
      begin:
        '(?x)\n^\\s* ((\\#)\\s*define) \\s+     # define\n((?<id>[a-zA-Z_][a-zA-Z0-9_]*))  # macro name\n(?:\n\t(\\()\n\t\t(\n\t\t\t\\s* \\g<id> \\s*         # first argument\n\t\t\t((,) \\s* \\g<id> \\s*)*  # additional arguments\n\t\t\t(?:\\.\\.\\.)?            # varargs ellipsis?\n\t\t)\n\t(\\))\n)',
      beginCaptures: {
        1: {name: 'keyword.control.directive.define.dm'},
        2: {name: 'punctuation.definition.directive.dm'},
        3: {name: 'entity.name.function.preprocessor.dm'},
        5: {name: 'punctuation.definition.parameters.begin.dm'},
        6: {name: 'variable.parameter.preprocessor.dm'},
        8: {name: 'punctuation.separator.parameters.dm'},
        9: {name: 'punctuation.definition.parameters.end.dm'}
      },
      end: '(?=(?://|/\\*))|(?<!\\\\)(?=\\n)',
      name: 'meta.preprocessor.macro.dm',
      patterns: [{include: '$base'}]
    },
    {
      begin:
        '(?x)\n^\\s* ((\\#)\\s*define) \\s+     # define\n((?<id>[a-zA-Z_][a-zA-Z0-9_]*))  # macro name',
      beginCaptures: {
        1: {name: 'keyword.control.directive.define.dm'},
        2: {name: 'punctuation.definition.directive.dm'},
        3: {name: 'variable.other.preprocessor.dm'}
      },
      end: '(?=(?://|/\\*))|(?<!\\\\)(?=\\n)',
      name: 'meta.preprocessor.macro.dm',
      patterns: [{include: '$base'}]
    },
    {
      begin: '^\\s*(#\\s*(error|warn))\\b',
      captures: {1: {name: 'keyword.control.import.error.dm'}},
      end: '$',
      name: 'meta.preprocessor.diagnostic.dm',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.dm'
        }
      ]
    },
    {
      begin:
        '^\\s*(?:((#)\\s*(?:elif|else|if|ifdef|ifndef))|((#)\\s*(undef|include)))\\b',
      beginCaptures: {
        1: {name: 'keyword.control.directive.conditional.dm'},
        2: {name: 'punctuation.definition.directive.dm'},
        3: {name: 'keyword.control.directive.$5.dm'},
        4: {name: 'punctuation.definition.directive.dm'}
      },
      end: '(?=(?://|/\\*))|(?<!\\\\)(?=\\n)',
      name: 'meta.preprocessor.dm',
      patterns: [
        {
          match: '(?>\\\\\\s*\\n)',
          name: 'punctuation.separator.continuation.dm'
        }
      ]
    },
    {include: '#block'},
    {
      begin:
        '(?x)\n\t\t\t\t(?:  ^                                 # begin-of-line\n\t\t\t\t\t|\n\t\t\t\t\t\t (?: (?= \\s )           (?<!else|new|return) (?<=\\w)      #  or word + space before name\n\t\t\t\t\t\t\t | (?= \\s*[A-Za-z_] ) (?<!&&)       (?<=[*&>])   #  or type modifier before name\n\t\t\t\t\t\t )\n\t\t\t\t)\n\t\t\t\t(\\s*) (?!(while|for|do|if|else|switch|catch|enumerate|return|r?iterate)\\s*\\()\n\t\t\t\t(\n\t\t\t\t\t(?: [A-Za-z_][A-Za-z0-9_]*+ | :: )++ |                  # actual name\n\t\t\t\t\t(?: (?<=operator) (?: [-*&<>=+!]+ | \\(\\) | \\[\\] ) )  # if it is a C++ operator\n\t\t\t\t)\n\t\t\t\t \\s*(?=\\()',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.function.leading.dm'},
        3: {name: 'entity.name.function.dm'},
        4: {name: 'punctuation.definition.parameters.dm'}
      },
      end: '(?<=\\})|(?=#)|(;)?',
      name: 'meta.function.dm',
      patterns: [
        {include: '#comments'},
        {include: '#parens'},
        {match: '\\bconst\\b', name: 'storage.modifier.dm'},
        {include: '#block'}
      ]
    }
  ],
  repository: {
    access: {
      match: '\\.[a-zA-Z_][a-zA-Z_0-9]*\\b(?!\\s*\\()',
      name: 'variable.other.dot-access.dm'
    },
    block: {
      begin: '\\{',
      end: '\\}',
      name: 'meta.block.dm',
      patterns: [{include: '#block_innards'}]
    },
    block_innards: {
      patterns: [
        {include: '#preprocessor-rule-enabled-block'},
        {include: '#preprocessor-rule-disabled-block'},
        {include: '#preprocessor-rule-other-block'},
        {include: '#access'},
        {
          captures: {
            1: {name: 'punctuation.whitespace.function-call.leading.dm'},
            2: {name: 'support.function.any-method.dm'},
            3: {name: 'punctuation.definition.parameters.dm'}
          },
          match:
            '(?x) (?: (?= \\s )  (?:(?<=else|new|return) | (?<!\\w)) (\\s+))?\n\t\t\t(\\b\n\t\t\t\t(?!(while|for|do|if|else|switch|catch|enumerate|return|r?iterate)\\s*\\()(?:(?!NS)[A-Za-z_][A-Za-z0-9_]*+\\b | :: )++                  # actual name\n\t\t\t)\n\t\t\t \\s*(\\()',
          name: 'meta.function-call.dm'
        },
        {include: '#block'},
        {include: '$base'}
      ]
    },
    comments: {
      patterns: [
        {
          captures: {1: {name: 'meta.toc-list.banner.block.dm'}},
          match: '^/\\* =(\\s*.*?)\\s*= \\*/$\\n?',
          name: 'comment.block.dm'
        },
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.dm'}},
          end: '\\*/',
          name: 'comment.block.dm',
          patterns: [{include: '#comments'}]
        },
        {match: '\\*/.*\\n', name: 'invalid.illegal.stray-comment-end.dm'},
        {
          captures: {1: {name: 'meta.toc-list.banner.line.dm'}},
          match: '^// =(\\s*.*?)\\s*=\\s*$\\n?',
          name: 'comment.line.banner.dm'
        },
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.dm'}},
          end: '[^\\\\]$',
          name: 'comment.line.double-slash.dm',
          patterns: [
            {
              match: '(?>\\\\\\s*\\n)',
              name: 'punctuation.separator.continuation.dm'
            }
          ]
        }
      ]
    },
    disabled: {
      begin: '^\\s*#\\s*if(n?def)?\\b.*$',
      end: '^\\s*#\\s*endif\\b',
      patterns: [{include: '#disabled'}]
    },
    parens: {
      begin: '\\(',
      end: '\\)',
      name: 'meta.parens.dm',
      patterns: [{include: '$base'}]
    },
    'preprocessor-rule-disabled': {
      begin: '^\\s*(#(if)\\s+(0+|FALSE)\\b).*',
      captures: {
        1: {name: 'meta.preprocessor.dm'},
        2: {name: 'keyword.control.import.if.dm'},
        3: {name: 'constant.numeric.preprocessor.dm'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b)',
          captures: {
            1: {name: 'meta.preprocessor.dm'},
            2: {name: 'keyword.control.import.else.dm'}
          },
          end: '(?=^\\s*#\\s*endif\\b)',
          patterns: [{include: '$base'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b)',
          name: 'comment.block.preprocessor.if-branch',
          patterns: [{include: '#disabled'}]
        }
      ]
    },
    'preprocessor-rule-disabled-block': {
      begin: '^\\s*(#(if)\\s+(0+|FALSE)\\b).*',
      captures: {
        1: {name: 'meta.preprocessor.dm'},
        2: {name: 'keyword.control.import.if.dm'},
        3: {name: 'constant.numeric.preprocessor.dm'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b)',
          captures: {
            1: {name: 'meta.preprocessor.dm'},
            2: {name: 'keyword.control.import.else.dm'}
          },
          end: '(?=^\\s*#\\s*endif\\b)',
          patterns: [{include: '#block_innards'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b)',
          name: 'comment.block.preprocessor.if-branch.in-block',
          patterns: [{include: '#disabled'}]
        }
      ]
    },
    'preprocessor-rule-enabled': {
      begin: '^\\s*(#(if)\\s+(0*1|TRUE)\\b)',
      captures: {
        1: {name: 'meta.preprocessor.dm'},
        2: {name: 'keyword.control.import.if.dm'},
        3: {name: 'constant.numeric.preprocessor.dm'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b).*',
          captures: {
            1: {name: 'meta.preprocessor.dm'},
            2: {name: 'keyword.control.import.else.dm'}
          },
          contentName: 'comment.block.preprocessor.else-branch',
          end: '(?=^\\s*#\\s*endif\\b)',
          patterns: [{include: '#disabled'}]
        },
        {end: '(?=^\\s*#\\s*(else|endif)\\b)', patterns: [{include: '$base'}]}
      ]
    },
    'preprocessor-rule-enabled-block': {
      begin: '^\\s*(#(if)\\s+(0*1|TRUE)\\b)',
      captures: {
        1: {name: 'meta.preprocessor.dm'},
        2: {name: 'keyword.control.import.if.dm'},
        3: {name: 'constant.numeric.preprocessor.dm'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [
        {
          begin: '^\\s*(#\\s*(else)\\b).*',
          captures: {
            1: {name: 'meta.preprocessor.dm'},
            2: {name: 'keyword.control.import.else.dm'}
          },
          contentName: 'comment.block.preprocessor.else-branch.in-block',
          end: '(?=^\\s*#\\s*endif\\b)',
          patterns: [{include: '#disabled'}]
        },
        {
          end: '(?=^\\s*#\\s*(else|endif)\\b)',
          patterns: [{include: '#block_innards'}]
        }
      ]
    },
    'preprocessor-rule-other': {
      begin: '^\\s*((#\\s*(if(n?def)?))\\b.*?(?:(?=(?://|/\\*))|$))',
      captures: {
        1: {name: 'meta.preprocessor.dm'},
        2: {name: 'keyword.control.import.dm'}
      },
      end: '^\\s*((#\\s*(endif))\\b)',
      patterns: [{include: '$base'}]
    },
    'preprocessor-rule-other-block': {
      begin: '^\\s*(#\\s*(if(n?def)?)\\b.*?(?:(?=(?://|/\\*))|$))',
      captures: {
        1: {name: 'meta.preprocessor.dm'},
        2: {name: 'keyword.control.import.dm'}
      },
      end: '^\\s*(#\\s*(endif)\\b)',
      patterns: [{include: '#block_innards'}]
    },
    string_embedded_expression: {
      patterns: [
        {
          begin: '(\\[)',
          beginCaptures: {
            0: {name: 'string.quoted.other.dm'},
            1: {name: 'punctuation.definition.string.end.dm'}
          },
          end: '(\\])',
          endCaptures: {
            0: {name: 'string.quoted.other.dm'},
            1: {name: 'punctuation.definition.string.begin.dm'}
          },
          name: 'meta.interpolation.dm',
          patterns: [
            {include: '#string_embedded_expression_2'},
            {include: '$base'}
          ]
        }
      ]
    },
    string_embedded_expression_2: {
      begin: '(\\[)',
      end: '(\\])',
      patterns: [{include: '#string_embedded_expression_2'}, {include: '$base'}]
    },
    string_escaped_char: {
      patterns: [
        {
          match:
            '\\\\([Tt]he|[Aa]|[Aa]n|[Hh]e|[Ss]he|[Hh]is|him|himself|herself|hers|proper|improper|th|s|(icon|ref|[Rr]oman)(?=\\[)|\\.\\.\\.|t|n|"|\\\\|<|>| |\n|\\[|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{6})',
          name: 'constant.character.escape.dm'
        },
        {match: '\\\\.', name: 'invalid.illegal.unknown-escape.dm'}
      ]
    }
  },
  scopeName: 'source.dm'
}

export default grammar
