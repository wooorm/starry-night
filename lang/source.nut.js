// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.nut'],
  names: ['squirrel'],
  patterns: [
    {include: '#special-block'},
    {include: '#comments'},
    {
      match:
        '\\b(break|case|catch|default|do|else|for|foreach|if|resume|return|switch|throw|try|while|yield)\\b',
      name: 'keyword.control.squirrel'
    },
    {
      match: '\\b(clone|delete|in|instanceof|typeof)\\b',
      name: 'keyword.control.squirrel'
    },
    {match: '\\b(base|this)\\b', name: 'variable.language.squirrel'},
    {
      match: '\\b(class|constructor|function|local)\\b',
      name: 'storage.type.squirrel'
    },
    {match: '\\b(const|extends|static)\\b', name: 'storage.modifier.squirrel'},
    {match: '\\b(null|true|false)\\b', name: 'constant.squirrel.squirrel'},
    {
      match:
        '!|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|==|=|!=|<=>|<=|>=|<-|>>>|<<|>>|<|>|!|&&|\\|\\||\\?\\:|\\*=|(?<!\\()/=|%=|\\+=|\\-=|&=|%=|\\.',
      name: 'keyword.operator.squirrel'
    },
    {
      match: '\\b((0(x|X)[0-9a-fA-F]+)|([0-9]+(\\.[0-9]+)?))\\b',
      name: 'constant.numeric.squirrel'
    },
    {
      match: '\\b([_A-Za-z][_A-Za-z0-9]\\w*)\\b(?=\\s*(?:[({"\']|\\[\\[))',
      name: 'support.function.any-method.squirrel'
    },
    {
      match: '(?<=[^.]\\.)\\b([_A-Za-z][_A-Za-z0-9]\\w*)',
      name: 'variable.other.squirrel'
    },
    {include: '#attributes'},
    {include: '#block'},
    {include: '#strings'}
  ],
  repository: {
    attributes: {
      begin: '</',
      end: '/>',
      name: 'meta.attributes.squirrel',
      patterns: [{include: '$base'}]
    },
    block: {
      patterns: [
        {
          begin: '\\{',
          beginCaptures: {
            0: {name: 'punctuation.section.block.begin.bracket.curly.squirrel'}
          },
          end: '\\}',
          endCaptures: {
            0: {name: 'punctuation.section.block.end.bracket.curly.squirrel'}
          },
          name: 'meta.block.squirrel',
          patterns: [{include: '$base'}]
        }
      ]
    },
    comments: {
      patterns: [
        {
          captures: {1: {name: 'meta.toc-list.banner.block.squirrel'}},
          match: '^/\\* =(\\s*.*?)\\s*= \\*/$\\n?',
          name: 'comment.block.squirrel'
        },
        {
          begin: '/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.squirrel'}
          },
          end: '\\*/',
          endCaptures: {
            0: {name: 'punctuation.definition.comment.end.squirrel'}
          },
          name: 'comment.block.squirrel'
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.squirrel'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.squirrel'}
              },
              end: '(?=\\n)',
              name: 'comment.line.double-slash.squirrel'
            }
          ]
        },
        {
          begin: '(^[ \\t]+)?(?=#)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.squirrel'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '#',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.squirrel'}
              },
              end: '(?=\\n)',
              name: 'comment.line.hash.squirrel'
            }
          ]
        }
      ]
    },
    'special-block': {
      patterns: [
        {
          begin:
            '\\b(class)\\b\\s*([_A-Za-z][_A-Za-z0-9]*\\b)?+(\\s*(extends)\\s*([_A-Za-z][_A-Za-z0-9]*\\b))?',
          beginCaptures: {
            1: {name: 'storage.type.squirrel'},
            2: {name: 'entity.name.type.squirrel'},
            4: {name: 'storage.type.modifier.squirrel'},
            5: {name: 'entity.name.type.inherited.squirrel'}
          },
          end: '(?<=\\})|(?=(=))',
          name: 'meta.class-block.squirrel',
          patterns: [{include: '#block'}]
        },
        {
          begin:
            '\\b(function)\\b\\s*([_A-Za-z][_A-Za-z0-9]*\\b)?+(\\s*(::)\\s*([_A-Za-z][_A-Za-z0-9]*\\b))?',
          beginCaptures: {
            1: {name: 'storage.type.squirrel'},
            2: {name: 'entity.name.type.squirrel'},
            4: {name: 'punctuation.separator.global.access.squirrel'},
            5: {name: 'entity.name.function.squirrel'}
          },
          end: '(?<=\\})|(?=(=))',
          name: 'meta.function-block.squirrel',
          patterns: [{include: '#block'}]
        },
        {
          begin: '\\b([_A-Za-z][_A-Za-z0-9]*\\b)?+(\\s*(<-))',
          beginCaptures: {
            1: {name: 'entity.name.type.squirrel'},
            3: {name: 'punctuation.separator.namespace.access.squirrel'}
          },
          end: '(?<=\\})|(?=(;|,|\\(|\\)|>|\\[|\\]|=))',
          name: 'meta.namespace-block.squirrel',
          patterns: [{include: '#block'}]
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: '@?"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.squirrel'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.squirrel'}
          },
          name: 'string.quoted.double.squirrel',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.squirrel'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.nut'
}

export default grammar
