// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.dats', '.hats', '.sats'],
  names: ['ats', 'ats2'],
  patterns: [
    {include: '#block'},
    {include: '#comment_rest'},
    {include: '#comment_line'},
    {include: '#comment_block'},
    {include: '#embed'},
    {include: '#operators'},
    {include: '#quantifier_curly'},
    {include: '#quantifier_square'},
    {include: '#quantifier_arrow'},
    {include: '#keywords'},
    {include: '#keywords_types'},
    {include: '#string'},
    {include: '#char'},
    {include: '#records'},
    {include: '#tuples'},
    {include: '#number'}
  ],
  repository: {
    block: {
      applyEndPatternLast: true,
      begin: '(?<=where|=|^|then|else|\\$rec|\\$rec_t|\\$rec_vt)(?:\\s*){',
      end: '}',
      patterns: [{include: '$self'}]
    },
    char: {
      match:
        "(')([^\\\\]{0,1}|\\\\(\\\\|[abefpnrtv'\"?]|[0-3]\\d{0,2}|[4-7]\\d?|x[a-fA-F0-9]{0,2}|u[a-fA-F0-9]{0,4}|U[a-fA-F0-9]{0,8}))(')",
      name: 'string.quoted.double'
    },
    comment_block: {
      applyEndPatternLast: true,
      begin: '\\(\\*',
      end: '\\*\\)',
      name: 'comment.block',
      patterns: [{include: '#comment_block'}]
    },
    comment_line: {match: '//.*$', name: 'comment.line.double-slash'},
    comment_rest: {
      applyEndPatternLast: true,
      begin: '////',
      end: '.\\z',
      name: 'comment',
      patterns: [{match: '.*'}]
    },
    embed: {begin: '(%{)', end: '(%})', name: 'meta'},
    keywords: {
      match:
        '(\\#|\\$)(\\w+)|\\b(castfn|and|andalso|assume|as|begin|break|case(\\+|-)?|class|continue|dynload|dyn|else|end|exception|extern|fix|fn|for|fun|if|implement|implmnt|primplement|primplmnt|infixl|infixr|infix|in|lam|let|llam|local|macdef|macrodef|method|modprop|modtype|module|nonfix|object|of|op|or|orelse|overload|par|postfix|praxi|prefix|prfn|prfun|prval|rec|sif|staif|staload|stavar|sta|struct|symelim|symintr|then|try|union|val(\\+|-)?|var|when|where|while|withprop|withtype|withviewtype|withview|with)\\b',
      name: 'keyword'
    },
    keywords_types: {
      match:
        '(\\#|\\$)(\\w+)|\\b(abstype|abst@ype|abst0pe|absvtype|absvt@ype|absvt0pe|absviewtype|absviewt@ype|absviewt0pe|absview|absprop|datatype|datavtype|dataviewtype|dataview|dataprop|datasort|sortdef|propdef|viewdef|viewtypedef|vtypedef|stadef|typedef|)\\b',
      name: 'keyword'
    },
    number: {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|~)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b',
      name: 'constant.numeric'
    },
    operators: {
      match:
        '!=|!|%|&&|&|\\*|\\+|-|-->|->|/|:=|<=|(?<=\\s)<|==>|=>|=|>=|>>|>|\\?|\\|\\||\\||~|\\[\\]',
      name: 'keyword.operator'
    },
    quantifier_arrow: {begin: '(?<!\\s)<', end: '>', name: 'support.type'},
    quantifier_curly: {begin: '({)', end: '(})', name: 'support.type'},
    quantifier_square: {begin: '(\\[)', end: '(\\])', name: 'support.type'},
    records: {begin: "('|@)({)", end: '(})', patterns: [{include: '$self'}]},
    string: {
      begin: '(")',
      end: '(")',
      name: 'string.quoted.double',
      patterns: [{include: '#string_escaped'}]
    },
    string_escaped: {
      match:
        '\\\\(\\\\|[abefnprtv\'"?]|[0-3]\\d{0,2}|[4-7]\\d?|x[a-fA-F0-9]{0,2}|u[a-fA-F0-9]{0,4}|U[a-fA-F0-9]{0,8})',
      name: 'constant.character.escape'
    },
    tuples: {begin: "('|@)\\(", end: '(\\))', patterns: [{include: '$self'}]}
  },
  scopeName: 'source.ats'
}

export default grammar
