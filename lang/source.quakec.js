// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/4LT/quakec-syntax>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.qc'],
  names: ['quakec'],
  patterns: [
    {include: '#comment'},
    {include: '#directive'},
    {include: '#command'},
    {include: '#toplevel-declaration'}
  ],
  repository: {
    'block-comment': {begin: '/\\*', end: '\\*/', name: 'comment.block.quakec'},
    'builtin-literal': {
      match: '#[0-9]+\\b',
      name: 'constant.other.builtin.quakec'
    },
    'code-block': {
      begin: '{',
      end: '}',
      patterns: [
        {include: '#comment'},
        {include: '#directive'},
        {include: '#statement'}
      ]
    },
    command: {
      match: '\\$(cd|origin|base|skin|frame|scale)\\b',
      name: 'keyword.other.command.quakec'
    },
    comment: {
      patterns: [{include: '#block-comment'}, {include: '#line-comment'}]
    },
    'ctl-keyword': {
      match:
        '\\b(if|else|while|do|for|break|continue|goto|return|switch|case|default)\\b',
      name: 'keyword.control.quakec'
    },
    directive: {
      patterns: [
        {
          begin:
            '^\\s*#\\s*(if|ifdef|ifndef|elif|endif|else|define|undef|pragma|include|append|error|message)\\b',
          end: '([^\\\\]|^)\r?\n',
          name: 'meta.preprocessor'
        }
      ]
    },
    expression: {
      patterns: [
        {include: '#literal'},
        {include: '#operator'},
        {include: '#code-block'}
      ]
    },
    'line-comment': {
      begin: '//',
      end: '$',
      name: 'comment.line.double-slash.quakec'
    },
    literal: {
      patterns: [
        {include: '#raw-string'},
        {include: '#string-literal'},
        {include: '#vector-literal'},
        {include: '#builtin-literal'},
        {include: '#number-literal'}
      ]
    },
    modifier: {
      match: '\\b(local|const|static|__wrap)\\b',
      name: 'storage.modifier.quakec'
    },
    'number-literal': {
      patterns: [
        {match: '\\b0x[0-9a-fA-F]+\\b', name: 'constant.numeric.quakec'},
        {
          match: '-?\\b[0-9]+\\.[0-9]+([eE]-?[0-9]+)?\\b',
          name: 'constant.numeric.quakec'
        },
        {match: '-?\\b[0-9]+(\\.|i)?', name: 'constant.numeric.quakec'}
      ]
    },
    operator: {
      patterns: [
        {
          match: '(>>=|<<=|&&=|\\|\\|=)',
          name: 'keyword.operator.symbole.quakec'
        },
        {
          match:
            '(><|>=|<=|==|!=|&&|\\|\\|~=|&=|\\|=|\\^=|\\*=|/=|\\+=|-=|\\+\\+|--)',
          name: 'keyword.operator.symbole.quakec'
        },
        {
          match: '(\\.|!|~|&|\\||\\^|\\*|%|/|\\+|-|>|<|=|\\?|:)',
          name: 'keyword.operator.symbole.quakec'
        },
        {match: '\\bnew\\b', name: 'keyword.operator.new.quakec'}
      ]
    },
    primitive: {
      match: '\\b(float|int|string|vector|entity|void|__variant)\\b',
      name: 'storage.type.quakec'
    },
    'raw-string': {
      begin: 'R"(\\S*)\\(',
      end: '\\)\\1"',
      name: 'string.quoted.double'
    },
    statement: {
      patterns: [
        {include: '#modifier'},
        {include: '#type'},
        {include: '#ctl-keyword'},
        {patterns: [{match: '\\bprior\\b', name: 'support.function'}]},
        {include: '#expression'}
      ]
    },
    'string-literal': {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.quakec',
      patterns: [
        {
          match: '\\\\([\\\\"\'nrts0-9\\(=\\)<\\->]|x[0-9a-fA-F][0-9a-fA-F])',
          name: 'constant.character.escape.quakec'
        }
      ]
    },
    'toplevel-declaration': {
      patterns: [
        {include: '#type-declaration-keyword'},
        {include: '#type'},
        {include: '#modifier'},
        {include: '#code-block'},
        {include: '#expression'}
      ]
    },
    type: {patterns: [{include: '#primitive'}]},
    'type-declaration-keyword': {
      match: '\\b(struct|class|enum|union|typedef)\\b',
      name: 'storage.type.quakec'
    },
    'vector-literal': {
      begin: "'",
      end: "'",
      name: 'string.quoted.single.quakec'
    }
  },
  scopeName: 'source.quakec'
}

export default grammar
