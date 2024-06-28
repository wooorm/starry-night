// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ampl', '.mod'],
  names: ['ampl'],
  patterns: [
    {include: '#general'},
    {include: '#argumentcurly'},
    {include: '#argumentbracket'}
  ],
  repository: {
    argumentbracket: {
      begin: '\\[',
      end: '\\]',
      patterns: [
        {include: '#general'},
        {match: '\\w', name: 'meta.function-call.arguments.ampl'}
      ]
    },
    argumentcurly: {
      begin: '\\{',
      end: '\\}',
      patterns: [
        {include: '#general'},
        {match: '.', name: 'meta.function-call.arguments.ampl'}
      ]
    },
    blockcomment: {
      begin: '/\\*',
      contentName: 'comment.block.documentation.ampl',
      end: '\\*/',
      name: 'comment.slashstar.ampl'
    },
    doublequotestring: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ampl'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.ampl'}},
      name: 'string.quoted.double.ampl',
      patterns: [{match: '%(\\w+%|\\d+)', name: 'entity.name.class.ampl'}]
    },
    general: {
      patterns: [
        {include: '#linecomment'},
        {include: '#blockcomment'},
        {include: '#singlequotestring'},
        {include: '#doublequotestring'},
        {include: '#number'},
        {include: '#keyword'},
        {include: '#suffix'},
        {include: '#math'},
        {include: '#operator'}
      ]
    },
    keyword: {
      match:
        '(?i)\\b(minimize|maximize|objective|coeff|coef|cover|obj|default|from|to|to_come|net_in|net_out|dimen|dimension|integer|binary|set|param|var|node|ordered|circular|reversed|symbolic|arc|check|close|display|drop|include|print|printf|quit|reset|restore|solve|update|write|shell|model|data|option|let|solution|fix|unfix|end|function|pipe|format|if|then|else|and|or|exists|forall|in|not|within|while|repeat|for|subject to|subj to|s\\.t\\.|card|next|nextw|prev|prevw|first|last|member|ord|ord0)\\b',
      name: 'keyword.control.ampl'
    },
    linecomment: {
      captures: {1: {name: 'punctuation.definition.comment.gms'}},
      match: '(#.*)(?!\\[\\[).*$\\n?',
      name: 'comment.line.sharp.ampl'
    },
    math: {
      match:
        '(?i)\\b(union|diff|difference|symdiff|sum|inter|intersect|intersection|cross|setof|by|less|mod|div|product|abs|acos|acosh|alias|asin|asinh|atan|atan2|atanh|ceil|cos|exp|floor|log|log10|max|min|precision|round|sin|sinh|sqrt|tan|tanh|trunc|Beta|Cauchy|Exponential|Gamma|Irand224|Normal|Poisson|Uniform|Uniform01)\\b',
      name: 'keyword.operator.ampl'
    },
    number: {
      match:
        '(?<![\\d.])\\b\\d+(\\.\\d+)?([eE]-?\\d+)?|\\.\\d+([eE]-?\\d+)?|(?i)([+-]?infinity)',
      name: 'constant.numeric.ampl'
    },
    operator: {
      match:
        '(\\+|-|\\*|\\/|\\*\\*|=|<=?|>=?|==|\\||\\^|<|>|!|\\.\\.|:=|&|!=|:|/)',
      name: 'keyword.operator.ampl'
    },
    singlequotestring: {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ampl'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.ampl'}},
      name: 'string.quoted.single.ampl',
      patterns: [{match: '%(\\w+%|\\d+)', name: 'entity.name.class.ampl'}]
    },
    suffix: {
      match:
        '\\b\\w*.(lb|ub|lb0|lb1|lb2|lrc|ub0|ub1|ub2|urc|val|lbs|ubs|init|body|dinit|dual|init0|ldual|slack|udual|lslack|uslack|dinit0)|(<<|>>)',
      name: 'keyword.ampl'
    }
  },
  scopeName: 'source.ampl'
}

export default grammar
