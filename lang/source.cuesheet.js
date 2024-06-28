// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/relikd/CUE-Sheet_sublime>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['cue-sheet'],
  patterns: [
    {
      match:
        '\\b(CATALOG|CDTEXTFILE|FILE|FLAGS|INDEX|ISRC|PERFORMER|(POST|PRE)GAP|REM (GENRE|DATE|DISCID|DISCNUMBER|TOTALDISCS|COMMENT)|SONGWRITER|TITLE|TRACK)\\b',
      name: 'keyword'
    },
    {
      match: '\\b(BINARY|MOTOROLA|AIFF|WAVE|MP3)\\w*\\b',
      name: 'constant.other'
    },
    {match: '\\b(4CH|DCP|PRE|SCMS)\\w*\\b', name: 'constant.other'},
    {
      match:
        '\\b(AUDIO|CDG|MODE(1/(2048|2336)|2/(2336|2352))|CDI/23(36|52))\\w*\\b',
      name: 'constant.other'
    },
    {match: '\\b[0-9]{2}:[0-9]{2}:[0-9]{2}\\b', name: 'constant.numeric'},
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end'}},
      name: 'variable.parameter'
    }
  ],
  scopeName: 'source.cuesheet'
}

export default grammar
