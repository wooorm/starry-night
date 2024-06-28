// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.zil', '.mud'],
  names: ['zil'],
  patterns: [{include: '#expressions'}],
  repository: {
    argspec: {
      begin: '\\(',
      beginCaptures: {
        0: {name: 'punctuation.definition.list.parameters.begin.zil'}
      },
      end: '\\)',
      endCaptures: {
        0: {name: 'punctuation.definition.list.parameters.end.zil'}
      },
      name: 'meta.parameters.zil',
      patterns: [
        {
          match:
            "(?x)\n# optional quote\n(?:'\\s*)?\n# atom\n(?:\\\\.|[^!. \\t-\\r,#':;%()\\[\\]<>\\{\\}\"])\n(?:\\\\.|[^ \\t-\\r,#':;%()\\[\\]<>\\{\\}\"])*+",
          name: 'variable.parameter.local.symbol.atom.zil'
        },
        {
          begin:
            "(?x)\n(\\()\n\\s*\n# optional quote\n(?:'\\s*)?\n# atom\n((?:\\\\.|[^!. \\t-\\r,#':;%()\\[\\]<>\\{\\}\"])\n (?:\\\\.|[^ \\t-\\r,#':;%()\\[\\]<>\\{\\}\"])*+)",
          beginCaptures: {
            1: {name: 'punctuation.definition.list.parameter.begin.zil'},
            2: {name: 'variable.parameter.local.symbol.atom.zil'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.list.parameter.end.zil'}
          },
          name: 'meta.binding.zil',
          patterns: [{include: '#expressions'}]
        },
        {
          match: '"(?:AUX|EXTRA)"',
          name: 'punctuation.separator.arguments.aux.zil keyword.separator.arguments.aux.zil'
        },
        {
          match: '"(?:OPT|OPTIONAL)"',
          name: 'punctuation.separator.arguments.opt.zil keyword.separator.arguments.opt.zil'
        },
        {
          match: '"(?:ARGS|TUPLE)"',
          name: 'punctuation.separator.arguments.varargs.zil keyword.separator.arguments.varargs.zil'
        },
        {
          match: '"(?:NAME|BIND)"',
          name: 'punctuation.separator.arguments.misc.zil keyword.separator.arguments.misc.zil'
        },
        {include: '#expressions'}
      ]
    },
    atom: {
      match:
        "(?x)\n# atom can start with anything escaped, or any non-delimiter\n(?:\\\\.|[^!. \\t-\\r,#':;%()\\[\\]<>\\{\\}\"])\n# and continue with any of the above as well as '!' and '.'\n(?:\\\\.|[^ \\t-\\r,#':;%()\\[\\]<>\\{\\}\"])*+",
      name: 'meta.symbol.atom.zil'
    },
    binary_num: {
      captures: {
        1: {name: 'punctuation.definition.constant.numeric.binary.zil'}
      },
      match: '(#)\\s*0*2\\s+[01]+(?![^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])',
      name: 'constant.numeric.binary.zil'
    },
    char: {match: '!\\\\.', name: 'constant.character.zil'},
    comment: {
      applyEndPatternLast: true,
      begin: ';',
      beginCaptures: {0: {name: 'punctuation.definition.comment.prefix.zil'}},
      end: '(?<!\\G)',
      name: 'comment.block.zil',
      patterns: [{include: '#unstyled_expressions'}]
    },
    constants: {
      patterns: [
        {include: '#decimal_num'},
        {include: '#octal_num'},
        {include: '#binary_num'},
        {include: '#string'},
        {include: '#char'},
        {include: '#else'},
        {include: '#false'},
        {include: '#true'},
        {include: '#atom'}
      ]
    },
    decimal_num: {
      match: '-?([0-9]+)(?![^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])',
      name: 'constant.numeric.decimal.zil'
    },
    else: {match: '(?<=\\()(?:ELSE|T)\\b', name: 'keyword.control.else.zil'},
    expressions: {
      patterns: [
        {include: '#constants'},
        {include: '#structures'},
        {include: '#prefixes'},
        {include: '#invalid'}
      ]
    },
    false: {match: '<\\s*>', name: 'constant.language.boolean.false.zil'},
    form: {
      begin: '<',
      beginCaptures: {0: {name: 'punctuation.definition.form.begin.zil'}},
      end: '!?>',
      endCaptures: {0: {name: 'punctuation.definition.form.end.zil'}},
      name: 'meta.structure.form.zil',
      patterns: [{include: '#special_form_body'}, {include: '#expressions'}]
    },
    gval: {
      applyEndPatternLast: true,
      begin: '(,)\\s*',
      beginCaptures: {
        1: {name: 'punctuation.definition.variable.global.prefix.zil'}
      },
      end: '(?<!\\G)',
      name: 'variable.other.global.zil',
      patterns: [{include: '#unstyled_expressions'}]
    },
    invalid: {patterns: [{match: '!.', name: 'invalid.illegal.zil'}]},
    list: {
      begin: '!?\\(',
      beginCaptures: {0: {name: 'punctuation.definition.list.begin.zil'}},
      end: '!?\\)',
      endCaptures: {0: {name: 'punctuation.definition.list.end.zil'}},
      name: 'meta.structure.list.zil',
      patterns: [{include: '#expressions'}]
    },
    lval: {
      applyEndPatternLast: true,
      begin: '(\\.)\\s*',
      beginCaptures: {
        1: {name: 'punctuation.definition.variable.local.prefix.zil'}
      },
      end: '(?<!\\G)',
      name: 'variable.other.local.zil',
      patterns: [{include: '#unstyled_expressions'}]
    },
    macro: {
      applyEndPatternLast: true,
      begin: '(%)|(%%)',
      beginCaptures: {
        1: {name: 'punctuation.definition.macro.single.prefix.zil'},
        2: {name: 'punctuation.definition.macro.double.prefix.zil'}
      },
      end: '(?<!\\G)',
      name: 'meta.macro.zil',
      patterns: [{include: '#unstyled_expressions'}]
    },
    octal_num: {
      captures: {
        1: {name: 'punctuation.definition.constant.numeric.octal.zil'},
        3: {name: 'punctuation.definition.constant.numeric.octal.zil'}
      },
      match: '(\\*)([0-7]+)(\\*)(?![^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])',
      name: 'constant.numeric.octal.zil'
    },
    prefixes: {
      patterns: [
        {include: '#comment'},
        {include: '#macro'},
        {include: '#lval'},
        {include: '#gval'},
        {include: '#quote'},
        {include: '#segment'}
      ]
    },
    property: {
      begin:
        '(?xi)\n\\( \\s*\n(?: (IN|LOC|DESC|SYNONYM|ADJECTIVE|FLAGS|\n     GLOBAL|GENERIC|ACTION|DESCFCN|CONTFCN|LDESC|FDESC|\n     NORTH|SOUTH|EAST|WEST|OUT|UP|DOWN|NW|SW|NE|SE)\n|   ((?:\\\\.|[^!. \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])\n     (?:\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])*+)\n)\n\\b',
      beginCaptures: {
        1: {name: 'storage.property.${1:/downcase}.zil'},
        2: {name: 'meta.object-literal.key.zil'}
      },
      end: '\\)',
      name: 'meta.property.zil',
      patterns: [{include: '$self'}]
    },
    quote: {
      applyEndPatternLast: true,
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.quote.prefix.zil'}},
      end: '(?<!\\G)',
      name: 'meta.quoted-expression.zil',
      patterns: [{include: '#unstyled_expressions'}]
    },
    segment: {
      applyEndPatternLast: true,
      begin: '!(?=[.,<])',
      beginCaptures: {0: {name: 'punctuation.definition.segment.prefix.zil'}},
      end: '(?<!\\G)',
      name: 'meta.structure.segment.zil',
      patterns: [{include: '#unstyled_expressions'}]
    },
    skip_ws: {match: '\\s+'},
    special_form_body: {
      patterns: [
        {
          match:
            '(?xi)\n(?<=<) \\s* (?:FORM\\s+)?\n(\\+|-|\\*|/|MOD|MIN|MAX|OR\\?|AND\\?)\n(?!\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])',
          name: 'keyword.operator.arithmetic.${1:/downcase}.zil'
        },
        {
          match:
            '(?xi)\n(?<=<) \\s* (?:FORM\\s+)?\n(BAND|BOR|ANDB|ORB|LSH|XORB|EQVB)\n(?!\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])',
          name: 'keyword.operator.bitwise.${1:/downcase}.zil'
        },
        {
          match:
            '(?xi)\n(?<=<) \\s* (?:FORM\\s+)?\n(==?|N==?|L=?|G=?|[01TF])\\?\n(?!\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])',
          name: 'keyword.operator.comparison.${1:/downcase}.zil'
        },
        {
          match:
            '(?xi) \\s*\n(?<=<) \\s* (?:FORM\\s+)?\n(COND|BIND|PROG|REPEAT|DO|MAP[FR]|MAP-(?:CONTENTS|DIRECTIONS)|\n AGAIN|RETURN|RTRUE|RFALSE|CATCH|THROW|EVAL|AND|OR|NOT)\n(?!\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])',
          name: 'keyword.control.${1:/downcase}.zil'
        },
        {
          match:
            '(?xi) \\s*\n(?<=<) \\s* (?:FORM\\s+)?\n(TELL(?:-TOKENS)?|ADD-TELL-TOKENS|CRLF|PRINT[INR]?|PRIN[C1])\n(?!\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])',
          name: 'keyword.output.${1:/downcase}.zil'
        },
        {
          match:
            '(?xi) \\s*\n(?<=<) \\s* (?:FORM\\s+)?\n(FSET\\??|FCLEAR|MOVE|REMOVE|IN\\?|FIRST\\?|NEXT\\?|\n PUTP|GETP|PROPDEF|GETPT|PTSIZE|INTBL\\?|\n P?L?TABLE|ITABLE|GETB?|GET/B|PUTB?|PUT/B|ZGET|ZPUT|\n VOC|SYNONYM|(?:VERB|PREP|ADJ|DIR|BIT)-SYNONYM|DIRECTIONS|BUZZ)\n(?!\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])',
          name: 'keyword.zmodel.${1:/downcase}.zil'
        },
        {
          match:
            '(?xi) \\s*\n(?<=<) \\s* (?:FORM\\s+)?\n(INSERT-FILE|PACKAGE|ENDPACKAGE|USE|ENTRY|RENTRY|VERSION|\n COMPILATION-FLAG(?:-DEFAULT)?|REPLACE-DEFINITION|DELAY-DEFINITION|DEFAULT-DEFINITION|\n IF-(?:[A-Z0-9][-A-Z0-9]+))\n(?!\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])',
          name: 'keyword.meta.${1:/downcase}.zil'
        },
        {
          begin:
            '(?xi)\n(?<=<) \\s* (?:FORM\\s+)?\n# function type (1)\n(DEFINE|DEFINE20|DEFMAC|ROUTINE)\n\\s+\n# function name atom (2)\n((?:\\\\.|[^!. \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])\n (?:\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])*+)\n\\s*\n# optional activation atom (3)\n(?:\n    (?<=\\s)\n    ((?:\\\\.|[^!. \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])\n     (?:\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])*+)\n     \\s*\n)?\n# followed by paren starting arg spec\n(?=\\()',
          beginCaptures: {
            1: {name: 'keyword.definition.function.${1:/downcase}.zil'},
            2: {name: 'entity.name.function.zil'},
            3: {name: 'entity.name.variable.local.activation-atom.zil'}
          },
          end: '(?<=\\))|(?=\\>)',
          name: 'meta.function.zil',
          patterns: [{include: '#argspec'}]
        },
        {
          begin:
            '(?xi)\n(?<=<) \\s* (?:FORM\\s+)?\n# object type (1)\n(OBJECT|ROOM)\n\\s+\n# object name (2)\n((?:\\\\.|[^!. \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])\n (?:\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])*+)\n\\s*',
          beginCaptures: {
            1: {name: 'keyword.definition.object.${1:/downcase}.zil'},
            2: {name: 'entity.name.object.zil'}
          },
          end: '(?=\\>)',
          name: 'meta.object.zil',
          patterns: [{include: '#property'}]
        },
        {
          captures: {
            1: {name: 'keyword.definition.global.${1:/downcase}.zil'},
            2: {name: 'entity.name.variable.global.zil variable.global.zil'}
          },
          match:
            '(?xi)\n(?<=<) \\s* (?:FORM\\s+)?\n# global type (1)\n(SETG|CONSTANT|GLOBAL|GASSIGNED\\?|GUNASSIGN)\n\\s+\n# global name atom (2)\n((?:\\\\.|[^!. \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])\n (?:\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])*+)?'
        },
        {
          captures: {
            1: {name: 'keyword.definition.local.${1:/downcase}.zil'},
            2: {name: 'entity.name.variable.local.zil variable.local.zil'}
          },
          match:
            '(?xi)\n(?<=<) \\s* (?:FORM\\s+)?\n# local type?\n(SET|ASSIGNED\\?|UNASSIGN)\n\\s+\n# local name atom (2)\n((?:\\\\.|[^!. \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])\n (?:\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])*+)?'
        },
        {
          captures: {1: {name: 'keyword.type.${1:/downcase}.zil'}},
          match:
            '(?xi)\n(?<=<) \\s* (?:FORM\\s+)?\n(CHTYPE|TYPE\\??|PRIMTYPE)\n(?!\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])'
        },
        {
          captures: {
            1: {name: 'keyword.definition.type.${1:/downcase}.zil'},
            2: {name: 'entity.name.type.zil'}
          },
          match:
            '(?xi)\n(?<=<) \\s* (?:FORM\\s+)?\n# keyword (1)\n(NEWTYPE|DEFSTRUCT|APPLYTYPE|EVALTYPE|PRINTTYPE|TYPEPRIM)\n\\s+\n# type name atom (2)\n((?:\\\\.|[^!. \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])\n (?:\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])*+)?\n(?!\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])'
        },
        {
          captures: {
            1: {name: 'keyword.definition.vocab.syntax.zil'},
            10: {name: 'entity.name.function.preaction.zil'},
            11: {name: 'entity.name.verb.zil'},
            2: {name: 'entity.name.verb.zil'},
            3: {name: 'entity.name.preposition.zil'},
            4: {name: 'keyword.definition.vocab.object.zil'},
            6: {name: 'entity.name.preposition.zil'},
            7: {name: 'keyword.definition.vocab.object.zil'},
            9: {name: 'entity.name.function.action.zil'}
          },
          match:
            '(?xi)\n(?<=<) \\s* (?:FORM\\s+)?\n(SYNTAX)\n\\s+\n# verb word\n((?:\\\\.|[^!. \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])\n (?:\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])*+)\n# first object\n(?:\n    (?!\\s*=\\b)\n    # prep 1\n    (?:\\s+ (?!OBJECT\\b)(\\S+))?\n    # obj 1\n    \\s+ (OBJECT)\n    # flags/search options 1\n    (\\s* \\( [^)]* \\) )*\n)?+\n# second object\n(?:\n    (?!\\s*=\\b)\n    # prep 2\n    (?:\\s+ (?!OBJECT\\b)(\\S+))?\n    # obj 2\n    \\s+ (OBJECT)\n    # flags/search options 2\n    (\\s* \\( [^)]* \\) )*\n)?+\n# handlers\n(?:\n    \\s+ =\n    # action\n    \\s+\n    ((?:\\\\.|[^!. \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])\n     (?:\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])*+)\n    # preaction\n    (?:\n        \\s+\n        ((?:\\\\.|[^!. \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])\n         (?:\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])*+)\n    )?+\n    # name\n    (?:\n        \\s+\n        ((?:\\\\.|[^!. \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])\n         (?:\\\\.|[^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])*+)\n    )?+\n)?+'
        }
      ]
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.zil'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.zil'}},
      name: 'string.quoted.double.zil',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.zil'}]
    },
    structures: {
      patterns: [
        {include: '#list'},
        {include: '#form'},
        {include: '#vector'},
        {include: '#uvector'},
        {include: '#segment'}
      ]
    },
    true: {match: '\\bT\\b', name: 'constant.language.boolean.true.zil'},
    unstyled_atom: {
      match:
        "(?x)\n# atom can start with anything escaped, or any non-delimiter\n(?:\\\\.|[^!. \\t-\\r,#':;%()\\[\\]<>\\{\\}\"])\n# and continue with any of the above as well as '!' and '.'\n(?:\\\\.|[^ \\t-\\r,#':;%()\\[\\]<>\\{\\}\"])*+"
    },
    unstyled_char: {match: '!\\\\.'},
    unstyled_constants: {
      patterns: [
        {include: '#unstyled_numeric'},
        {include: '#unstyled_string'},
        {include: '#unstyled_char'},
        {include: '#unstyled_atom'}
      ]
    },
    unstyled_expressions: {
      patterns: [
        {include: '#unstyled_constants'},
        {include: '#unstyled_structures'},
        {include: '#unstyled_prefixes'},
        {include: '#invalid'}
      ]
    },
    unstyled_form: {
      begin: '<',
      end: '!?>',
      patterns: [{include: '#unstyled_expressions'}]
    },
    unstyled_gval: {
      applyEndPatternLast: true,
      begin: '(,)\\s*',
      end: '(?<!\\G)',
      patterns: [{include: '#unstyled_expressions'}]
    },
    unstyled_list: {
      begin: '!?\\(',
      end: '!?\\)',
      patterns: [{include: '#unstyled_expressions'}]
    },
    unstyled_lval: {
      applyEndPatternLast: true,
      begin: '\\.',
      end: '(?<!\\G)',
      patterns: [{include: '#unstyled_expressions'}]
    },
    unstyled_numeric: {
      match:
        '(?:\\b-?[0-9]+\\b|\\*[0-7]+\\*|#\\s*0*2\\s+[01]+)(?![^ \\t-\\r,#\':;%()\\[\\]<>\\{\\}"])'
    },
    unstyled_prefixes: {
      patterns: [
        {include: '#comment'},
        {include: '#macro'},
        {include: '#unstyled_lval'},
        {include: '#unstyled_gval'},
        {include: '#unstyled_quote'},
        {include: '#unstyled_segment'}
      ]
    },
    unstyled_quote: {
      applyEndPatternLast: true,
      begin: "'",
      end: '(?<!\\G)',
      patterns: [{include: '#unstyled_expressions'}]
    },
    unstyled_segment: {
      applyEndPatternLast: true,
      begin: '!(?=[.,<])',
      end: '(?<!\\G)',
      patterns: [{include: '#unstyled_expressions'}]
    },
    unstyled_string: {begin: '"', end: '"', patterns: [{match: '\\\\.'}]},
    unstyled_structures: {
      patterns: [
        {include: '#unstyled_list'},
        {include: '#unstyled_form'},
        {include: '#unstyled_vector'},
        {include: '#unstyled_uvector'},
        {include: '#unstyled_segment'}
      ]
    },
    unstyled_uvector: {
      begin: '!\\[',
      end: '!?\\]',
      patterns: [{include: '#unstyled_expressions'}]
    },
    unstyled_vector: {
      begin: '\\[',
      end: '!?\\]',
      patterns: [{include: '#unstyled_expressions'}]
    },
    uvector: {
      begin: '!\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.array.uvector.begin.zil'}
      },
      end: '!?\\]',
      endCaptures: {0: {name: 'punctuation.definition.array.uvector.end.zil'}},
      name: 'meta.structure.array.uvector.zil',
      patterns: [{include: '#expressions'}]
    },
    vector: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.array.vector.begin.zil'}
      },
      end: '!?\\]',
      endCaptures: {0: {name: 'punctuation.definition.array.vector.end.zil'}},
      name: 'meta.structure.array.vector.zil',
      patterns: [{include: '#expressions'}]
    }
  },
  scopeName: 'source.zil'
}

export default grammar
