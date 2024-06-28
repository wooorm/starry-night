// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.scm', '.sld', '.sps', '.ss'],
  names: ['scheme'],
  patterns: [
    {include: '#comment'},
    {include: '#sexp'},
    {include: '#string'},
    {include: '#language-functions'},
    {include: '#quote'},
    {include: '#illegal'}
  ],
  repository: {
    comment: {
      begin: '(^[ \\t]+)?(?=;)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.scheme'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: ';',
          beginCaptures: {0: {name: 'punctuation.definition.comment.scheme'}},
          end: '\\n',
          name: 'comment.line.semicolon.scheme'
        }
      ]
    },
    constants: {
      patterns: [
        {match: '#[t|f]', name: 'constant.language.boolean.scheme'},
        {
          match:
            '(?<=[\\(\\s])((#e|#i)?[0-9]+(\\.[0-9]+)?|(#x)[0-9a-fA-F]+|(#o)[0-7]+|(#b)[01]+)(?=[\\s;()\'",\\[\\]])',
          name: 'constant.numeric.scheme'
        }
      ]
    },
    illegal: {match: '[()]', name: 'invalid.illegal.parenthesis.scheme'},
    'language-functions': {
      patterns: [
        {
          match:
            '(?x)\n\t\t\t\t\t\t(?<=(\\s|\\(|\\[)) # preceded by space or ( \n\t\t\t\t\t\t( do|or|and|else|quasiquote|begin|if|case|set!|\n\t\t\t\t\t\t  cond|let|unquote|define|let\\*|unquote-splicing|delay|\n\t\t\t\t\t\t  letrec)\n\t\t\t\t\t\t(?=(\\s|\\())',
          name: 'keyword.control.scheme'
        },
        {
          match:
            '(?x)\n\t\t\t\t\t\t(?<=(\\s|\\()) # preceded by space or (\n\t\t\t\t\t\t( char-alphabetic|char-lower-case|char-numeric|\n\t\t\t\t\t\t  char-ready|char-upper-case|char-whitespace|\n\t\t\t\t\t\t  (?:char|string)(?:-ci)?(?:=|<=?|>=?)|\n\t\t\t\t\t\t  atom|boolean|bound-identifier=|char|complex|\n\t\t\t\t\t\t  identifier|integer|symbol|free-identifier=|inexact|\n\t\t\t\t\t\t  eof-object|exact|list|(?:input|output)-port|pair|\n\t\t\t\t\t\t  real|rational|zero|vector|negative|odd|null|string|\n\t\t\t\t\t\t  eq|equal|eqv|even|number|positive|procedure\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(\\?)\t\t# name ends with ? sign\n\t\t\t\t\t\t(?=(\\s|\\()) # followed by space or (\n\t\t\t\t\t',
          name: 'support.function.boolean-test.scheme'
        },
        {
          match:
            '(?x)\n\t\t\t\t\t\t(?<=(\\s|\\()) # preceded by space or (\n\t\t\t\t\t\t( char->integer|exact->inexact|inexact->exact|\n\t\t\t\t\t\t  integer->char|symbol->string|list->vector|\n\t\t\t\t\t\t  list->string|identifier->symbol|vector->list|\n\t\t\t\t\t\t  string->list|string->number|string->symbol|\n\t\t\t\t\t\t  number->string\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(?=(\\s|\\()) # followed by space or (\t\t\t\t\t\n\t\t\t\t\t',
          name: 'support.function.convert-type.scheme'
        },
        {
          match:
            '(?x)\n\t\t\t\t\t\t(?<=(\\s|\\()) # preceded by space or (\n\t\t\t\t\t\t( set-(?:car|cdr)|\t\t\t\t # set car/cdr\n\t\t\t\t\t\t  (?:vector|string)-(?:fill|set) # fill/set string/vector\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(!)\t\t\t# name ends with ! sign\n\t\t\t\t\t\t(?=(\\s|\\()) # followed by space or (\n\t\t\t\t\t',
          name: 'support.function.with-side-effects.scheme'
        },
        {
          match:
            '(?x)\n\t\t\t\t\t\t(?<=(\\s|\\()) # preceded by space or (\n\t\t\t\t\t\t( >=?|<=?|=|[*/+-])\n\t\t\t\t\t\t(?=(\\s|\\()) # followed by space or (\n\t\t\t\t\t\t',
          name: 'keyword.operator.arithmetic.scheme'
        },
        {
          match:
            '(?x)\n\t\t\t\t\t\t(?<=(\\s|\\()) # preceded by space or (\n\t\t\t\t\t\t( append|apply|approximate|\n\t\t\t\t\t\t  call-with-current-continuation|call/cc|catch|\n\t\t\t\t\t\t  construct-identifier|define-syntax|display|foo|\n\t\t\t\t\t\t  for-each|force|cd|gen-counter|gen-loser|\n\t\t\t\t\t\t  generate-identifier|last-pair|length|let-syntax|\n\t\t\t\t\t\t  letrec-syntax|list|list-ref|list-tail|load|log|\n\t\t\t\t\t\t  macro|magnitude|map|map-streams|max|member|memq|\n\t\t\t\t\t\t  memv|min|newline|nil|not|peek-char|rationalize|\n\t\t\t\t\t\t  read|read-char|return|reverse|sequence|substring|\n\t\t\t\t\t\t  syntax|syntax-rules|transcript-off|transcript-on|\n\t\t\t\t\t\t  truncate|unwrap-syntax|values-list|write|write-char|\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  # cons, car, cdr, etc\n\t\t\t\t\t\t  cons|c(a|d){1,4}r| \n                          \n\t\t\t\t\t\t  # unary math operators\n\t\t\t\t\t\t  abs|acos|angle|asin|assoc|assq|assv|atan|ceiling|\n\t\t\t\t\t\t  cos|floor|round|sin|sqrt|tan|\n\t\t\t\t\t\t  (?:real|imag)-part|numerator|denominator\n                          \n\t\t\t\t\t\t  # other math operators\n\t\t\t\t\t\t  modulo|exp|expt|remainder|quotient|lcm|\n                          \n\t\t\t\t\t\t  # ports / files\n\t\t\t\t\t\t  call-with-(?:input|output)-file|\n\t\t\t\t\t\t  (?:close|current)-(?:input|output)-port|\n\t\t\t\t\t\t  with-(?:input|output)-from-file|\n\t\t\t\t\t\t  open-(?:input|output)-file|\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  # char-«foo»\n\t\t\t\t\t\t  char-(?:downcase|upcase|ready)|\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  # make-«foo»\n\t\t\t\t\t\t  make-(?:polar|promise|rectangular|string|vector)\n\t\t\t\t\t\t  \n\t\t\t\t\t\t  # string-«foo», vector-«foo»\n\t\t\t\t\t\t  string(?:-(?:append|copy|length|ref))?|\n\t\t\t\t\t\t  vector(?:-length|-ref)\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(?=(\\s|\\()) # followed by space or (\n\t\t\t\t\t',
          name: 'support.function.general.scheme'
        }
      ]
    },
    quote: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.section.quoted.symbol.scheme'}},
          match:
            "(?x)\n\t\t\t\t\t\t(')\\s*\n\t\t\t\t\t\t([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*)\n\t\t\t\t\t",
          name: 'constant.other.symbol.scheme'
        },
        {
          captures: {
            1: {name: 'punctuation.section.quoted.empty-list.scheme'},
            2: {name: 'meta.expression.scheme'},
            3: {name: 'punctuation.section.expression.begin.scheme'},
            4: {name: 'punctuation.section.expression.end.scheme'}
          },
          match:
            "(?x)\n\t\t\t\t\t\t(')\\s*\n\t\t\t\t\t\t((\\()\\s*(\\)))\n\t\t\t\t\t",
          name: 'constant.other.empty-list.schem'
        },
        {
          begin: "(')\\s*",
          beginCaptures: {1: {name: 'punctuation.section.quoted.scheme'}},
          end: '(?=[\\s()])|(?<=\\n)',
          name: 'string.other.quoted-object.scheme',
          patterns: [{include: '#quoted'}]
        }
      ]
    },
    'quote-sexp': {
      begin: '(?<=\\()\\s*(quote)\\b\\s*',
      beginCaptures: {1: {name: 'keyword.control.quote.scheme'}},
      contentName: 'string.other.quote.scheme',
      end: '(?=[\\s)])|(?<=\\n)',
      patterns: [{include: '#quoted'}]
    },
    quoted: {
      patterns: [
        {include: '#string'},
        {
          begin: '(\\()',
          beginCaptures: {
            1: {name: 'punctuation.section.expression.begin.scheme'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.section.expression.end.scheme'}},
          name: 'meta.expression.scheme',
          patterns: [{include: '#quoted'}]
        },
        {include: '#quote'},
        {include: '#illegal'}
      ]
    },
    sexp: {
      begin: '(\\()',
      beginCaptures: {1: {name: 'punctuation.section.expression.begin.scheme'}},
      end: '(\\))(\\n)?',
      endCaptures: {
        1: {name: 'punctuation.section.expression.end.scheme'},
        2: {name: 'meta.after-expression.scheme'}
      },
      name: 'meta.expression.scheme',
      patterns: [
        {include: '#comment'},
        {
          begin:
            '(?x)\n\t\t\t\t\t\t(?<=\\()       # preceded by (\n\t\t\t\t\t\t(define)\\s+   # define\n\t\t\t\t\t\t(\\()          # list of parameters\n\t\t\t\t\t\t  ([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*)\n\t\t\t\t\t\t  ((\\s+\n\t\t\t\t\t\t    ([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*|[._])\n\t\t\t\t\t\t   )*\n\t\t\t\t\t\t  )\\s*\n\t\t\t\t\t\t(\\))\n\t\t\t\t\t',
          captures: {
            1: {name: 'keyword.control.scheme'},
            2: {name: 'punctuation.definition.function.scheme'},
            3: {name: 'entity.name.function.scheme'},
            4: {name: 'variable.parameter.function.scheme'},
            7: {name: 'punctuation.definition.function.scheme'}
          },
          end: '(?=\\))',
          name: 'meta.declaration.procedure.scheme',
          patterns: [
            {include: '#comment'},
            {include: '#sexp'},
            {include: '#illegal'}
          ]
        },
        {
          begin:
            '(?x)\n\t\t\t\t\t\t(?<=\\() # preceded by (\n\t\t\t\t\t\t(lambda)\\s+\n\t\t\t\t\t\t(\\() # opening paren\n\t\t\t\t\t\t((?:\n\t\t\t\t\t\t  ([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*|[._])\n\t\t\t\t\t\t  \\s+\n\t\t\t\t\t\t)*(?:\n\t\t\t\t\t\t  ([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*|[._])\n\t\t\t\t\t\t)?)\n\t\t\t\t\t\t(\\)) # closing paren\n\t\t\t\t\t',
          captures: {
            1: {name: 'keyword.control.scheme'},
            2: {name: 'punctuation.definition.variable.scheme'},
            3: {name: 'variable.parameter.scheme'},
            6: {name: 'punctuation.definition.variable.scheme'}
          },
          end: '(?=\\))',
          name: 'meta.declaration.procedure.scheme',
          patterns: [
            {include: '#comment'},
            {include: '#sexp'},
            {include: '#illegal'}
          ]
        },
        {
          begin:
            '(?<=\\()(define)\\s([[:alnum:]][[:alnum:]!$%&*+-./:<=>?@^_~]*)\\s*.*?',
          captures: {
            1: {name: 'keyword.control.scheme'},
            2: {name: 'variable.other.scheme'}
          },
          end: '(?=\\))',
          name: 'meta.declaration.variable.scheme',
          patterns: [
            {include: '#comment'},
            {include: '#sexp'},
            {include: '#illegal'}
          ]
        },
        {include: '#quote-sexp'},
        {include: '#quote'},
        {include: '#language-functions'},
        {include: '#string'},
        {include: '#constants'},
        {
          match: '(?<=[\\(\\s])(#\\\\)(space|newline|tab)(?=[\\s\\)])',
          name: 'constant.character.named.scheme'
        },
        {
          match: '(?<=[\\(\\s])(#\\\\)x[0-9A-F]{2,4}(?=[\\s\\)])',
          name: 'constant.character.hex-literal.scheme'
        },
        {
          match: '(?<=[\\(\\s])(#\\\\).(?=[\\s\\)])',
          name: 'constant.character.escape.scheme'
        },
        {
          match: '(?<=[ ()])\\.(?=[ ()])',
          name: 'punctuation.separator.cons.scheme'
        },
        {include: '#sexp'},
        {include: '#illegal'}
      ]
    },
    string: {
      begin: '(")',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.scheme'}},
      end: '(")',
      endCaptures: {1: {name: 'punctuation.definition.string.end.scheme'}},
      name: 'string.quoted.double.scheme',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.scheme'}]
    }
  },
  scopeName: 'source.scheme'
}

export default grammar
