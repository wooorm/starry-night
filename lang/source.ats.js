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
    {include: '#quantifier_curly'},
    {include: '#quantifier_square'},
    {include: '#block'},
    {include: '#comment_rest'},
    {include: '#comment_line'},
    {include: '#comment_block_c'},
    {include: '#comment_block_sml'},
    {include: '#embed'},
    {include: '#operators'},
    {include: '#quantifier_arrow'},
    {include: '#definition_function'},
    {include: '#definition_type'},
    {include: '#keywords'},
    {include: '#keywords_types'},
    {include: '#false_true'},
    {include: '#string'},
    {include: '#char'},
    {include: '#records'},
    {include: '#tuples'},
    {include: '#number'},
    {include: '#identifier'}
  ],
  repository: {
    block: {
      applyEndPatternLast: true,
      begin: '(?<=where|=|^|then|else|\\$rec|\\$rec_t|\\$rec_vt)(?:\\s*)\\{',
      end: '\\}',
      name: 'meta.block',
      patterns: [{include: '$self'}]
    },
    char: {
      match:
        "(')([^\\\\]{0,1}|\\\\(\\\\|[abefpnrtv'\"?]|[0-3]\\d{0,2}|[4-7]\\d?|x[a-fA-F0-9]{0,2}|u[a-fA-F0-9]{0,4}|U[a-fA-F0-9]{0,8}))(')",
      name: 'string.quoted.double'
    },
    comment_block_c: {
      applyEndPatternLast: true,
      begin: '/\\*',
      end: '\\*/',
      name: 'comment.block'
    },
    comment_block_sml: {
      applyEndPatternLast: true,
      begin: '\\(\\*',
      end: '\\*\\)',
      name: 'comment.block',
      patterns: [{include: '#comment_block_sml'}]
    },
    comment_line: {match: '//.*$', name: 'comment.line.double-slash'},
    comment_rest: {
      applyEndPatternLast: true,
      begin: '////',
      end: '.\\z',
      name: 'comment.block',
      patterns: [{match: '.*'}]
    },
    definition_function: {
      begin:
        '\\b(?:castfn|fn|fun|implement|implmnt|infixl|infixr|infix|overload|postfix|praxi|prfn|prfun|primplement|primplmnt|var)\\b',
      beginCaptures: {0: {name: 'keyword'}},
      end: "\\b[a-zA-Z][a-zA-Z0-9_']*\\b",
      endCaptures: {0: {name: 'entity.name.function'}},
      name: 'meta.function-definition',
      patterns: [{include: '$self'}]
    },
    definition_type: {
      begin:
        '\\b(abstype|abst@ype|abst0pe|absvtype|absvt@ype|absvt0pe|absviewtype|absviewt@ype|absviewt0pe|absview|absprop|datatype|datavtype|dataviewtype|dataview|dataprop|datasort|sortdef|propdef|viewdef|viewtypedef|vtypedef|stadef|stacst|typedef)\\b',
      beginCaptures: {0: {name: 'keyword'}},
      end: "\\b[a-zA-Z][a-zA-Z0-9_']*\\b",
      endCaptures: {0: {name: 'entity.name.type storage.type'}},
      name: 'meta.type-definition',
      patterns: [{include: '$self'}]
    },
    embed: {begin: '(%{)', end: '(%})', name: 'meta'},
    false_true: {
      match: '\\b(?:false|true)\\b',
      name: 'constant.language.boolean'
    },
    identifier: {match: "\\b[a-zA-Z][a-zA-Z0-9_']*\\b", name: 'identifier'},
    keywords: {
      match:
        '(\\#|\\$)(\\w+)|\\b(castfn|and|andalso|assume|as|begin|break|case(\\+|-)?|class|continue|dynload|dyn|else|end|exception|extern|fix|fn|for|fun|if|implement|implmnt|primplement|primplmnt|infixl|infixr|infix|in|lam|let|llam|local|macdef|macrodef|method|modprop|modtype|module|nonfix|object|of|op|or|orelse|overload|par|postfix|praxi|prefix|prfn|prfun|prval|rec|scase|sif|stacst|staif|staload|stavar|sta|struct|symelim|symintr|then|try|union|val(\\+|-)?|var|when|where|while|withprop|withtype|withviewtype|withview|with)\\b',
      name: 'keyword'
    },
    keywords_types: {
      match:
        '(\\#|\\$)(\\w+)|\\b(abstype|abst@ype|abst0pe|absvtype|absvt@ype|absvt0pe|absviewtype|absviewt@ype|absviewt0pe|absview|absprop|datatype|datavtype|dataviewtype|dataview|dataprop|datasort|sortdef|propdef|viewdef|viewtypedef|vtypedef|stadef|typedef)\\b',
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
    quantifier_curly: {
      begin: '\\{(?=[\\S])',
      end: '\\}',
      name: 'support.type.quantifier.universal'
    },
    quantifier_square: {
      begin: '\\[(?=[\\S])',
      end: '\\]',
      name: 'support.type.quantifier.existential'
    },
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
