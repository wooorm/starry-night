// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/griimick/vscode-vhs>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.tape'],
  names: ['tape', 'vhs'],
  patterns: [
    {include: '#comments'},
    {include: '#json'},
    {include: '#strings'},
    {include: '#require'},
    {include: '#output'},
    {include: '#operators'},
    {include: '#control'},
    {include: '#commands'},
    {include: '#settings'},
    {include: '#units'},
    {include: '#numbers'}
  ],
  repository: {
    commands: {
      match:
        '\\b(Output|Set|Type|Left|Right|Up|Down|Ctrl|Backspace|Enter|Tab|Space|Sleep|Hide|Show|Escape|Require)\\b',
      name: 'keyword.control.vhs'
    },
    comments: {begin: '#', end: '$', name: 'comment.line.number-sign.vhs'},
    control: {match: '\\bCtrl\\+[A-Z]\\b', name: 'keyword.control.vhs'},
    json: {match: '\\{.*\\}', name: 'string.quoted.other.vhs'},
    numbers: {
      patterns: [{match: '\\d*\\.?\\d+', name: 'constant.numeric.vhs'}]
    },
    operators: {patterns: [{match: '@|\\+', name: 'keyword.operator.vhs'}]},
    output: {
      captures: {1: {name: 'string.quoted.other.vhs'}},
      match: 'Output ([\\.\\-/A-Za-z0-9%]+)',
      name: 'keyword.control.vhs'
    },
    require: {
      captures: {1: {name: 'string.quoted.other.vhs'}},
      match: 'Require ([\\.\\-/A-Za-z0-9%]+)',
      name: 'keyword.control.vhs'
    },
    settings: {
      match:
        '\\b(FontFamily|FontSize|LoopOffset|Shell|Height|Width|Theme|Padding|TypingSpeed|CursorBlink|PlaybackSpeed|LineHeight|Framerate|LetterSpacing|Margin|MarginFill|WindowBar|WindowBarSize|BorderRadius)\\b',
      name: 'entity.name.tag.vhs'
    },
    strings: {
      patterns: [
        {begin: "'", end: "'", name: 'string.quoted.single.vhs'},
        {begin: '"', end: '"', name: 'string.quoted.double.vhs'},
        {begin: '`', end: '`', name: 'string.quoted.other.vhs'}
      ]
    },
    units: {
      captures: {
        1: {patterns: [{include: '#numbers'}]},
        2: {name: 'keyword.other.unit.vhs'}
      },
      match: '(\\d*\\.?\\d+)(ms|s)'
    }
  },
  scopeName: 'source.vhs'
}

export default grammar
