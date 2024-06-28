// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Jake-NotTheMuss/CoDT7-Sublime>
// and licensed `unlicense`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.gsc', '.csc', '.gsh'],
  names: ['gsc'],
  patterns: [{include: '#code'}],
  repository: {
    block: {
      patterns: [
        {
          begin: '{',
          beginCaptures: {
            0: {name: 'punctuation.section.block.begin.source.gsc'}
          },
          end: '}',
          endCaptures: {0: {name: 'punctuation.section.block.end.source.gsc'}},
          name: 'meta.block.source.gsc',
          patterns: [{include: '#code'}]
        },
        {
          begin: '/#',
          beginCaptures: {
            0: {name: 'punctuation.section.block.begin.source.gsc'}
          },
          end: '#/',
          endCaptures: {0: {name: 'punctuation.section.block.end.source.gsc'}},
          name: 'meta.devblock.source.gsc',
          patterns: [{include: '#code'}]
        }
      ]
    },
    code: {
      patterns: [
        {include: '#block'},
        {include: '#comments'},
        {include: '#constants'},
        {include: '#keywords'},
        {include: '#preprocessor'},
        {include: '#documentation'},
        {include: '#supports'}
      ]
    },
    comments: {
      patterns: [
        {begin: '/\\*', end: '\\*/\\n?', name: 'comment.block.gsc'},
        {match: '//.*$\\n?', name: 'comment.line.double-slash.gsc'}
      ]
    },
    constants: {
      patterns: [
        {
          match:
            '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)\\b',
          name: 'constant.numeric.source.gsc'
        },
        {
          captures: {
            0: {name: 'punctuation.definition.string.begin.source.gsc'}
          },
          match: '@"([^"]|"")*"',
          name: 'string.quoted.double.literal.source.gsc'
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.source.gsc'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.source.gsc'}
          },
          name: 'string.quoted.double.source.gsc',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.source.gsc'}
          ]
        },
        {
          match:
            '\\b(undefined|false|true|self|world|classes|level|game|anim|vararg)\\b',
          name: 'constant.language.source.gsc'
        }
      ]
    },
    documentation: {
      patterns: [
        {begin: '/@', end: '@/', name: 'comment.block.documentation.gsc'}
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(if|else|while|for|foreach|in|do|return|continue|break|switch|case|default)\\b',
          name: 'keyword.control.source.gsc'
        },
        {
          match: '\\b(size|assert|assertmsg|notify|endon)\\b',
          name: 'keyword.operator.source.gsc'
        },
        {
          match:
            '\\b(class|function|var|wait|thread|waittill|waittillmatch|waittillframeend|isdefined|constructor|destructor|autoexec|private|const)\\b',
          name: 'keyword.other.source.gsc'
        }
      ]
    },
    preprocessor: {
      patterns: [
        {
          captures: {2: {name: 'entity.name.function.preprocessor.source.gsc'}},
          match: '^\\s*#\\s*(define)\\b\\s*(\\S*)',
          name: 'keyword.preprocessor.source.gsc'
        },
        {
          captures: {2: {name: 'keyword.control.import.source.gsc'}},
          match:
            '^\\s*#\\s*(if|ifdef|ifndef|else|elif|endif|define|insert|include|using|precache|using_animtree)\\b',
          name: 'keyword.preprocessor.source.gsc'
        },
        {
          captures: {2: {name: 'meta.namespace.identifier'}},
          match: '^\\s*#\\s*(namespace)\\b',
          name: 'keyword.preprocessor.source.gsc'
        }
      ]
    }
  },
  scopeName: 'source.gsc'
}

export default grammar
