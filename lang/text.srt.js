// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.srt'],
  names: ['subrip-text'],
  patterns: [{include: '#subtitle'}],
  repository: {
    bold: {
      begin: '(?i)<b>',
      end: '(?i)</b>',
      name: 'markup.bold.srt',
      patterns: [
        {include: '#sound'},
        {include: '#person'},
        {include: '#bold'},
        {include: '#italic'},
        {include: '#underline'},
        {include: '#font'}
      ]
    },
    font: {
      begin: '(?i)<font\\b.*?>',
      end: '(?i)</font>',
      name: 'markup.link.font.srt',
      patterns: [
        {include: '#sound'},
        {include: '#person'},
        {include: '#bold'},
        {include: '#italic'},
        {include: '#underline'},
        {include: '#font'}
      ]
    },
    italic: {
      begin: '(?i)<i>',
      end: '(?i)</i>',
      name: 'markup.italic.srt',
      patterns: [
        {include: '#sound'},
        {include: '#person'},
        {include: '#bold'},
        {include: '#italic'},
        {include: '#underline'},
        {include: '#font'}
      ]
    },
    person: {match: '^\\w+:', name: 'entity.name.tag.srt'},
    sound: {
      match: '\\[.*?\\]|\\(.*?\\)',
      name: 'string.quoted.other.sound.srt'
    },
    subtitle: {
      begin: '\\b\\d+$',
      beginCaptures: {0: {name: 'entity.name.section.srt'}},
      end: '^\\s*$',
      name: 'meta.subtitle.srt',
      patterns: [
        {include: '#time'},
        {include: '#sound'},
        {include: '#person'},
        {include: '#bold'},
        {include: '#italic'},
        {include: '#underline'},
        {include: '#font'}
      ]
    },
    time: {
      captures: {
        1: {name: 'constant.numeric.time.srt'},
        2: {name: 'punctuation.definition.separator.srt'},
        3: {name: 'constant.numeric.time.srt'}
      },
      match:
        '^(\\d{2}:\\d{2}:\\d{2},\\d{3})\\s*(-->)\\s*(\\d{2}:\\d{2}:\\d{2},\\d{3})$'
    },
    underline: {
      begin: '(?i)<u>',
      end: '(?i)</u>',
      name: 'markup.underline.srt',
      patterns: [
        {include: '#sound'},
        {include: '#person'},
        {include: '#bold'},
        {include: '#italic'},
        {include: '#underline'},
        {include: '#font'}
      ]
    }
  },
  scopeName: 'text.srt'
}

export default grammar
