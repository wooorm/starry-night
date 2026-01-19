// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/JonBons/Sublime-SQF-Language>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.sqf', '.hqf'],
  names: ['sqf'],
  patterns: [
    {match: '\\#ifdef|\\#ifndef|\\#else|\\#endif', name: 'keyword.other.sqf'},
    {match: '\\#include', name: 'keyword.control.import.sqf'},
    {match: 'private|\\#define|\\#undef', name: 'keyword.declaration.sqf'},
    {
      match:
        '\\b(?i:_exception|_foreachindex|_this|_thisfsm|_thislist|_thisscript|_x)\\b',
      name: 'variable.language.sqf'
    },
    {
      match:
        '\\b(?i:__eval|__exec|__file__|__line__|blufor|civilian|confignull|controlnull|displaynull|east|endl|false|grpnull|independent|linebreak|locationnull|nil|objnull|opfor|pi|resistance|scriptnull|sideambientlife|sideempty|sidelogic|sideunknown|tasknull|teammembernull|true|west)\\b|\\:|\\!|&&|\\|\\||>>',
      name: 'constant.language.sqf'
    },
    {
      match:
        '\\b(?i:and|break|breakout|breakto|breakwith|call|case|catch|continue|continuewith|default|do|else|execfsm|execvm|exitwith|for|foreach|foreachmember|foreachmemberagent|foreachmemberteam|from|if|not|or|preprocessfile|preprocessfilelinenumbers|scopename|spawn|step|switch|then|throw|to|try|while|with)\\b|\\:|\\!|&&|\\|\\||>>',
      name: 'keyword.control.sqf'
    },
    {
      match:
        '\\b(?i:abs|acctime|acos|asin|atan|atan2|behaviour|boundingbox|boundingcenter|breakout|breakto|call|ceil|combatmode|cos|count|deleteat|diag_log|exp|floor|format|group|isnull|ln|log|max|min|objnull|player|random|round|select|sin|sqrt|str|tan|typename|vectordir|vectorup|vehicle)\\b',
      name: 'support.function.sqf'
    },
    {match: '\\b(?i:isequalto|isequaltype)\\b', name: 'support.function.sqf'},
    {name: 'support.function.sqf'},
    {
      match:
        '\\b0x[a-fA-F\\d]+|\\b\\d+(\\.\\d+)?([eE]-?\\d+)?|\\.\\d+([eE]-?\\d+)?',
      name: 'constant.numeric.sqf'
    },
    {
      match: '<\\=|>\\=|\\=\\=|<|>|\\!\\=',
      name: 'keyword.operator.comparison.sqf'
    },
    {
      begin: '//',
      beginCaptures: {0: {name: 'punctuation.definition.comment.sqf'}},
      end: '$\\n?',
      name: 'comment.line.sqf'
    },
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.sqf'}},
      end: '\\*/',
      name: 'comment.block.sqf'
    },
    {match: '\\+|\\-|\\*|\\/|%|\\^', name: 'keyword.operator.arithmetic.sqf'},
    {match: '\\=', name: 'keyword.operator.assignment.sqf'},
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.sqf'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.sqf'}},
      name: 'string.quoted.double.sqf'
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.sqf'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.sqf'}},
      name: 'string.quoted.sqf'
    },
    {
      begin: '@"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.sqf'}},
      end: '"@',
      endCaptures: {0: {name: 'punctuation.definition.string.end.sqf'}},
      name: 'string.quoted.region.sqf'
    },
    {match: '\\b_[a-zA-Z_][a-zA-Z0-9_]*', name: 'variable.other.sqf'},
    {match: '[a-zA-Z]\\w+_fnc_\\w+', name: 'variable.function.sqf'},
    {match: '\\b__[a-zA-Z_][a-zA-Z0-9_]*', name: 'constant.other.sqf'}
  ],
  scopeName: 'source.sqf'
}

export default grammar
