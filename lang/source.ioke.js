// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ik'],
  names: ['ioke'],
  patterns: [
    {begin: ';', end: '$\\n?', name: 'comment.line.ioke'},
    {begin: '#!', end: '$\\n?', name: 'comment.line.ioke'},
    {
      begin:
        '((?<=fn\\()|(?<=fnx\\()|(?<=method\\()|(?<=macro\\()|(?<=lecro\\()|(?<=syntax\\()|(?<=dmacro\\()|(?<=dlecro\\()|(?<=dlecrox\\()|(?<=dsyntax\\())[[:space]]*"',
      end: '"',
      name: 'string.documentation.ioke',
      patterns: [
        {include: '#text_literal_escapes'},
        {include: '#embedded_source'}
      ]
    },
    {
      match: '((?<![[:alnum:]!?_:])|(?<![[:alnum:]!?_:]!))[[:alnum:]!?_]+:\\s',
      name: 'string.literal.keyword-argument.ioke'
    },
    {
      match:
        '[[:alnum:]_:][[:alnum:]!?_:]*(?=[[:space:]]*[+*/-]?=[^=].*($|\\.))',
      name: 'variable.assignment.ioke'
    },
    {include: '#assignments'},
    {include: '#kinds'},
    {
      match:
        '((?<![[:alnum:]!?_:])|(?<![[:alnum:]!?_:]!))[[:alnum:]!?_:]+(?=[[:space:]]*=.*mimic[[:space]])',
      name: 'constant.object.mimic.ioke'
    },
    {
      match:
        '(?<![[:alnum:]])[+-]?[[:digit:]][[:digit:]]*(\\.[[:digit:]])?[[:digit:]]*([eE][+-]?[[:digit:]]+)?(?![[:alnum:]!?_:])',
      name: 'constant.numeric.ioke'
    },
    {
      match:
        '((?<![[:alnum:]!?_:])|(?<![[:alnum:]!?_:]!))0[xX][[:xdigit:]]+\\b',
      name: 'constant.numeric.hexadecimal.ioke'
    },
    {
      match: '((?<![[:alnum:]!?_:])|(?<![[:alnum:]!?_:]!)):[[:alnum:]!?_:-]+',
      name: 'string.literal.symbol.ioke'
    },
    {
      begin: '#/',
      end: '/[oxpniums]*',
      name: 'string.regexp.ioke',
      patterns: [
        {include: '#text_literal_escapes'},
        {include: '#embedded_source'}
      ]
    },
    {
      begin: '#r\\[',
      end: '\\][oxpniums]*',
      name: 'string.regexp.ioke',
      patterns: [
        {include: '#text_literal_escapes'},
        {include: '#embedded_source'}
      ]
    },
    {
      begin: ':"',
      end: '"',
      name: 'string.literal.symbol.ioke',
      patterns: [
        {include: '#text_literal_escapes'},
        {include: '#embedded_source'}
      ]
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.ioke',
      patterns: [
        {include: '#text_literal_escapes'},
        {include: '#embedded_source'}
      ]
    },
    {
      begin: '#\\[',
      end: '\\]',
      name: 'string.quoted.double.ioke',
      patterns: [
        {include: '#text_literal_escapes'},
        {include: '#embedded_source'}
      ]
    },
    {
      match:
        '((?<![[:alnum:]!?_:])|(?<![[:alnum:]!?_:]!))it(?![[:alnum:]!?_:])',
      name: 'entity.standout-names.ioke'
    },
    {match: '#{', name: 'punctuation.set-literal-start.ioke'},
    {include: '#keywords'},
    {
      match: "(\\`\\`|\\`|''|'|\\.|\\,|@|@@|\\[|\\]|\\(|\\))",
      name: 'punctuation.ioke'
    },
    {
      match: '[[:alnum:]_][[:alnum:]!?_:$]*[[:alnum:]!?_:]',
      name: 'source.identifier.ioke'
    }
  ],
  repository: {
    assignments: {
      patterns: [
        {
          match:
            '(?<=[[:space:]])[^[:space:].]+=[[:space:]]*=[[:space:]](fn|fnx|method|macro|lecro|syntax|dmacro|dlecro|dlecrox|dsyntax)',
          name: 'variable.assignment.function.ioke'
        }
      ]
    },
    embedded_source: {
      patterns: [
        {
          captures: {
            0: {name: 'punctuation.section.embedded.ioke'},
            1: {name: 'source.embedded.empty.ioke'}
          },
          match: '#\\{(\\})',
          name: 'source.embedded.ioke'
        },
        {
          begin: '#\\{',
          captures: {0: {name: 'punctuation.section.embedded.ioke'}},
          end: '\\}',
          name: 'source.embedded.ioke',
          patterns: [{include: '#nest_curly_and_self'}, {include: '$self'}]
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '((?<![[:alnum:]!?_:])|(?<![[:alnum:]!?_:]!))(mimic|self|use|true|false|nil)(?![[:alnum:]!?_:])',
          name: 'keyword.ioke'
        },
        {
          match:
            '((?<![[:alnum:]!?_:])|(?<![[:alnum:]!?_:]!))(return|break|continue|unless|true|false|nil)(?![[:alnum:]!?_:])',
          name: 'keyword.control.ioke'
        },
        {
          match:
            '(&&>>|\\|\\|>>|\\*\\*>>|\\.\\.\\.|===|\\*\\*>|\\*\\*=|&&>|&&=|\\|\\|>|\\|\\|=|\\->>|\\+>>|!>>|<>>>|<>>|&>>|%>>|#>>|@>>|/>>|\\*>>|\\?>>|\\|>>|\\^>>|~>>|\\$>>|=>>|<<=|>>=|<=>|<\\->|=~|!~|=>|\\+\\+|\\-\\-|<=|>=|==|!=|&&|\\.\\.|\\+=|\\-=|\\*=|\\/=|%=|&=|\\^=|\\|=|<\\-|\\+>|!>|<>|&>|%>|#>|\\@>|\\/>|\\*>|\\?>|\\|>|\\^>|~>|\\$>|<\\->|\\->|<<|>>|\\*\\*|\\?\\||\\?&|\\|\\||>|<|\\*|\\/|%|\\+|\\-|&|\\^|\\||=|\\$|!|~|\\?|#)',
          name: 'keyword.operator.ioke'
        },
        {
          match:
            '((?<![[:alnum:]!?_:])|(?<![[:alnum:]!?_:]!))(nand|and|nor|xor|or)(?![[:alnum:]!?_:])',
          name: 'keyword.operator.boolean.ioke'
        },
        {
          match:
            '((?<![[:alnum:]!?_:])|(?<![[:alnum:]!?_:]!))(Base|Call|Condition|DateTime|DefaultBehavior|DefaultMacro|DefaultMethod|DefaultSyntax|Dict|FileSystem|Ground|Handler|IO|JavaMethod|LexicalBlock|LexicalMacro|List|Message|Method|Mixins|Number|Number Decimal|Number Integer|Number Rational|Number Real|Origin|Pair|Range|Regexp|Rescue|Restart|Runtime|Set|Symbol|System|Text)(?![[:alnum:]!?_:])',
          name: 'keyword.prototype-names.ioke'
        },
        {
          match:
            '((^)|(?<![[:alnum:]!?_:])|(?<![[:alnum:]!?_:]!))(fn|fnx|method|macro|lecro|syntax|dmacro|dlecro|dlecrox|dsyntax)(?![[:alnum:]!?_:])',
          name: 'keyword.function.ioke'
        },
        {
          match:
            '((?<![[:alnum:]!?_:])|(?<![[:alnum:]!?_:]!))(print|println|cell\\?|cell|keyword|documentation|if|unless|while|until|loop|for|for:set|for:dict|bind|rescue|handle|restart|asText|inspect|notice|do|call|list|dict|set|with|kind)(?![[:alnum:]!?_:])',
          name: 'keyword.cell-names.ioke'
        }
      ]
    },
    kinds: {
      patterns: [
        {
          match:
            '((?<![[:alnum:]!?_:])|(?<![[:alnum:]!?_:]!))[A-Z][[:alnum:]!?_:-]*(?![[:alnum:]!?_:])',
          name: 'constant.kind.ioke'
        }
      ]
    },
    meta_parens: {
      patterns: [
        {
          begin: '\\(',
          end: '\\)',
          include: '#meta_parens',
          name: 'meta.parens.ioke'
        }
      ]
    },
    nest_curly_and_self: {
      patterns: [
        {
          begin: '\\{',
          captures: {0: {name: 'punctuation.section.scope.ioke'}},
          end: '\\}',
          patterns: [{include: '#nest_curly_and_self'}]
        },
        {include: '$self'}
      ]
    },
    text_literal_escapes: {
      patterns: [
        {
          match:
            '(\\\\b|\\\\e|\\\\t|\\\\n|\\\\f|\\\\r|\\\\"|\\\\\\\\|\\\\#|\\\\\\Z|\\\\u[[:xdigit:]][[:xdigit:]][[:xdigit:]][[:xdigit:]]|\\\\[0-3]?[0-7]?[0-7],[[:space:]]+\\\\[0-3]?[0-7]?[0-7],[[:space:]]+\\\\[0-3]?[0-7]?[0-7]|\\\\[0-3]?[0-7]?[0-7],[[:space:]]+\\\\[0-3]?[0-7]?[0-7]|\\\\[0-3]?[0-7]?[0-7])',
          name: 'constant.character.escape.ioke'
        }
      ]
    }
  },
  scopeName: 'source.ioke'
}

export default grammar
