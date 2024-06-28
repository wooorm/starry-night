// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/nwhetsell/language-csound>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.csound', 'text.xml'],
  extensions: ['.csd'],
  names: ['csound-document', 'csound-csd'],
  patterns: [
    {
      begin: '(<)(CsoundSynthesi[sz]er)(>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.csound-document'},
        2: {name: 'entity.name.tag.csound-document'},
        3: {name: 'punctuation.definition.tag.end.csound-document'}
      },
      end: '(</)(CsoundSynthesi[sz]er)(>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.begin.csound-document'},
        2: {name: 'entity.name.tag.csound-document'},
        3: {name: 'punctuation.definition.tag.end.csound-document'}
      },
      patterns: [
        {
          begin: '(<)(CsOptions)(>)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.begin.csound-document'},
            2: {name: 'entity.name.tag.csound-document'},
            3: {name: 'punctuation.definition.tag.end.csound-document'}
          },
          end: '(</)(CsOptions)(>)',
          endCaptures: {
            1: {name: 'punctuation.definition.tag.begin.csound-document'},
            2: {name: 'entity.name.tag.csound-document'},
            3: {name: 'punctuation.definition.tag.end.csound-document'}
          },
          patterns: [{include: 'source.csound#comments'}]
        },
        {
          begin: '(<)(CsInstruments)(>)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.begin.csound-document'},
            2: {name: 'entity.name.tag.csound-document'},
            3: {name: 'punctuation.definition.tag.end.csound-document'}
          },
          contentName: 'source.csound.embedded.csound-document',
          end: '(</)(CsInstruments)(>)',
          endCaptures: {
            1: {name: 'punctuation.definition.tag.begin.csound-document'},
            2: {name: 'entity.name.tag.csound-document'},
            3: {name: 'punctuation.definition.tag.end.csound-document'}
          },
          name: 'meta.orchestra.csound-document',
          patterns: [{include: 'source.csound'}]
        },
        {
          begin: '(<)(CsScore)(>)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.begin.csound-document'},
            2: {name: 'entity.name.tag.csound-document'},
            3: {name: 'punctuation.definition.tag.end.csound-document'}
          },
          contentName: 'source.csound-score.embedded.csound-document',
          end: '(</)(CsScore)(>)',
          endCaptures: {
            1: {name: 'punctuation.definition.tag.begin.csound-document'},
            2: {name: 'entity.name.tag.csound-document'},
            3: {name: 'punctuation.definition.tag.end.csound-document'}
          },
          name: 'meta.score.csound-document',
          patterns: [{include: 'source.csound-score'}]
        },
        {
          begin: '(?i)(?=<html)',
          end: '(?i)(?<=</html>)',
          name: 'meta.html.csound-document',
          patterns: [{include: 'text.html.basic'}]
        },
        {include: '#tags'}
      ]
    },
    {include: '#tags'}
  ],
  repository: {
    tags: {
      patterns: [
        {
          begin: '(</?)([\\w:-]+)',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.begin.csound-document'},
            2: {name: 'entity.name.tag.csound-document'}
          },
          end: '>',
          endCaptures: {
            0: {name: 'punctuation.definition.tag.end.csound-document'}
          },
          patterns: [{include: 'text.xml#tagStuff'}]
        }
      ]
    }
  },
  scopeName: 'source.csound-document'
}

export default grammar
