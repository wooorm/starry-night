// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['etc', 'source.yaml', 'text.grammarkdown', 'text.html.basic'],
  extensions: [],
  extensionsWithDot: ['.html'],
  injections: {
    'L:(source.embedded.yaml.front-matter.ecmarkup - (comment | embedded))': {
      patterns: [{include: 'text.html.basic#character-reference'}]
    },
    'L:(text.html.ecmarkup meta.tag.opaque-element - (meta.emu-alg | meta.emu-grammar))':
      {patterns: [{match: '[*_`|~\\\\]'}]}
  },
  names: ['ecmarkup', 'ecmarkdown'],
  patterns: [
    {
      begin: '\\A(?=\\s*(?:\\d+\\.|\\*)(?=$|\\s))',
      end: '(?=A)B',
      patterns: [{include: '#list'}, {include: '#main'}]
    },
    {include: '#main'}
  ],
  repository: {
    'code-blocks': {
      begin: '(?i)\\s*(<(pre|code)(?=$|\\s|>))',
      beginCaptures: {1: {patterns: [{include: '#tag-opening-start'}]}},
      end: '(?i)\\s*(</\\2\\s*>)',
      endCaptures: {1: {patterns: [{include: '#tag-closing'}]}},
      name: 'meta.tag.opaque-element.${2:/downcase}.html.ecmarkup',
      patterns: [{include: '#tag-opening-rest'}, {include: '#main'}]
    },
    'emu-alg': {
      begin: '(?i)\\s*(<emu-alg(?=$|\\s|>))',
      beginCaptures: {1: {patterns: [{include: '#tag-opening-start'}]}},
      end: '(?i)\\s*(</emu-alg\\s*>)',
      endCaptures: {1: {patterns: [{include: '#tag-closing'}]}},
      name: 'meta.emu-alg.html.ecmarkup',
      patterns: [
        {include: '#tag-opening-rest'},
        {
          begin: '(?<=>)',
          end: '(?i)(?=\\s*(</emu-alg\\s*>))',
          patterns: [{include: '#list'}, {include: '#main'}]
        }
      ]
    },
    'emu-element': {
      begin: '(?i)\\s*(<(emu-[\\w][-\\w]*)(?=$|\\s|>))',
      beginCaptures: {1: {patterns: [{include: '#tag-opening-start'}]}},
      end: '(?i)\\s*(</\\2\\s*>)',
      endCaptures: {1: {patterns: [{include: '#tag-closing'}]}},
      name: 'meta.${2:/downcase}.html.ecmarkup',
      patterns: [{include: '#tag-opening-rest'}, {include: '#tag-body'}]
    },
    'emu-grammar': {
      begin: '(?i)\\s*(<emu-grammar(?=$|\\s|>))',
      beginCaptures: {1: {patterns: [{include: '#tag-opening-start'}]}},
      end: '(?i)\\s*(</emu-grammar\\s*>)',
      endCaptures: {1: {patterns: [{include: '#tag-closing'}]}},
      name: 'meta.emu-grammar.html.ecmarkup',
      patterns: [
        {include: '#tag-opening-rest'},
        {
          begin: '(?<=>)',
          contentName: 'text.embedded.grammarkdown',
          end: '(?i)(?=\\s*(</emu-grammar\\s*>))',
          name: 'meta.grammar.ecmarkup',
          patterns: [{include: 'text.grammarkdown'}]
        }
      ]
    },
    escape: {
      captures: {1: {name: 'punctuation.definition.escape.backslash.ecmarkup'}},
      match: '(\\\\)[*_`<|~\\\\]',
      name: 'constant.character.escape.ecmarkup'
    },
    formatting: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.variable.begin.ecmarkup'},
            2: {patterns: [{include: '#escape'}]},
            3: {name: 'punctuation.definition.variable.end.ecmarkup'}
          },
          match: '(?<![\\w*_`<|~])(_)((?:\\\\_|[^\\s_])++)(_)',
          name: 'variable.reference.ecmarkup'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.value.begin.ecmarkup'},
            2: {patterns: [{include: '#escape'}]},
            3: {name: 'punctuation.definition.value.end.ecmarkup'}
          },
          match:
            '(?<![\\w*_`<|~])(\\*)(?=\\S)((?:\\\\\\*|[^*])++)(?<=\\S)(\\*)',
          name: 'constant.other.value.ecmarkup'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.value.begin.ecmarkup'},
            2: {patterns: [{include: '#escape'}]},
            3: {name: 'punctuation.definition.value.end.ecmarkup'}
          },
          match: '(\\`)(?=\\S)((?:\\\\`|[^`])++)(?<=\\S)(\\`)',
          name: 'markup.raw.code.monospace.ecmarkup'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.constant.begin.ecmarkup'},
            2: {patterns: [{include: '#escape'}]},
            3: {name: 'punctuation.definition.constant.end.ecmarkup'}
          },
          match: '(?<![\\w*_`<|~])(~)(?=\\S)((?:\\\\~|[^~])++)(?<=\\S)(~)',
          name: 'support.constant.spec-level.ecmarkup'
        },
        {include: '#nonterminal'}
      ]
    },
    list: {
      begin: '^(\\s*)((\\d+\\.|\\*))(?=$|\\s)(?:\\s*(Assert(:)))?[ \\t]*',
      beginCaptures: {
        2: {name: 'markup.list.marker.ecmarkup'},
        3: {name: 'punctuation.definition.list.ecmarkup'},
        4: {name: 'support.constant.assertion.ecmarkup'},
        5: {name: 'puncutation.definition.constant.ecmarkup'}
      },
      end: '(?=\\s*</(?i:emu-alg)\\s*>)|(?!\\G)^(?=\\s*(?:$|(?:\\d+\\.|\\*)(?:$|\\s)))',
      name: 'meta.list.ecmarkup',
      patterns: [
        {
          begin: '\\G(?=\\[)',
          end: '(?<=\\])(?:\\s*(Assert(:)))?',
          endCaptures: {
            1: {name: 'support.constant.assertion.ecmarkup'},
            2: {name: 'puncutation.definition.constant.ecmarkup'}
          },
          patterns: [
            {
              begin: '\\G(\\[)',
              beginCaptures: {
                0: {name: 'punctuation.definition.list.begin.ecmarkup'},
                1: {name: 'brackethighlighter.square'}
              },
              end: '(\\])',
              endCaptures: {
                0: {name: 'punctuation.definition.list.end.ecmarkup'},
                1: {name: 'brackethighlighter.square'}
              },
              name: 'meta.attributes.ecmarkup',
              patterns: [
                {
                  applyEndPatternLast: true,
                  begin: '(\\w[-\\w]*)\\s*(=)\\s*(?=")',
                  beginCaptures: {
                    1: {name: 'entity.other.attribute-name.ecmarkup'},
                    2: {patterns: [{include: 'etc#eql'}]}
                  },
                  end: '(?!\\G)',
                  name: 'meta.attribute.ecmarkup',
                  patterns: [{include: 'etc#strDouble'}, {include: 'etc#comma'}]
                }
              ]
            }
          ]
        },
        {include: '#main'}
      ]
    },
    main: {
      patterns: [
        {include: '#emu-alg'},
        {include: '#emu-grammar'},
        {include: '#emu-element'},
        {include: '#metadata-block'},
        {include: '#code-blocks'},
        {include: '#escape'},
        {include: '#formatting'},
        {include: 'text.html.basic'}
      ]
    },
    'metadata-block': {
      begin:
        '(?ix) \\s*\n((<)(pre)\n(\n\t\\s+[^>]*?(?<=\\s)\n\tclass \\s* = \\s*\n\t(?:"metadata"|\'metadata\'|metadata)\n\t(?=\\s|>) [^>]*\n)\n(>))',
      beginCaptures: {
        1: {name: 'meta.tag.other.html.ecmarkup'},
        2: {name: 'punctuation.definition.tag.begin.html.ecmarkup'},
        3: {name: 'entity.name.tag.block.pre.html'},
        4: {patterns: [{include: 'text.html.basic#tag-stuff'}]},
        5: {name: 'punctuation.definition.tag.end.html'}
      },
      contentName: 'source.embedded.yaml.front-matter.ecmarkup',
      end: '(?i)\\s*((</)(pre)\\s*(>))',
      endCaptures: {
        1: {name: 'meta.tag.block.pre.html'},
        2: {name: 'punctuation.definition.tag.begin.html'},
        3: {name: 'entity.name.tag.block.pre.html'},
        4: {name: 'punctuation.definition.tag.end.html'}
      },
      name: 'meta.tag.block.pre.front-matter.html.ecmarkup',
      patterns: [{include: 'source.yaml'}]
    },
    nonterminal: {
      captures: {
        1: {name: 'punctuation.definition.nonterminal.begin.ecmarkup'},
        2: {name: 'brackethighlighter.tag'},
        3: {name: 'keyword.other.nonterminal.ecmarkup'},
        4: {patterns: [{include: '#nonterminal-params'}]},
        5: {name: 'keyword.operator.optional.question-mark.ecmarkup'},
        6: {name: 'keyword.operator.optional.english.ecmarkup'},
        7: {name: 'punctuation.separator.suffix.ecmarkup'},
        8: {name: 'punctuation.definition.nonterminal.end.ecmarkup'},
        9: {name: 'brackethighlighter.tag'}
      },
      match:
        '(?x) (?<![\\w*_`<|~])\n((\\|))\n([A-Za-z0-9]+)\n(\\[ [^\\]]* \\])?\n(?: (\\?) | ((_)opt))?\n((\\|))',
      name: 'meta.nonterminal.ecmarkup'
    },
    'nonterminal-params': {
      begin: '(\\[)',
      beginCaptures: {
        0: {name: 'punctuation.section.list.begin.ecmarkup'},
        1: {name: 'brackethighlighter.square'}
      },
      end: '(\\])',
      endCaptures: {
        0: {name: 'punctuation.section.list.end.ecmarkup'},
        1: {name: 'brackethighlighter.square'}
      },
      name: 'meta.parameters.ecmarkup',
      patterns: [
        {match: '\\w[-\\w]*', name: 'variable.parameter.nonterminal.ecmarkup'},
        {
          match: '\\?',
          name: 'keyword.operator.optional.question-mark.ecmarkup'
        },
        {include: '#escape'},
        {include: 'etc#comma'}
      ]
    },
    'tag-body': {
      begin: '(?<=>)',
      end: '(?=\\s*</emu-[-\\w]*\\s*>)',
      name: 'meta.tag-contents.html.ecmarkup',
      patterns: [{include: '#main'}]
    },
    'tag-closing': {
      captures: {
        1: {name: 'punctuation.definition.tag.begin.html.ecmarkup'},
        2: {name: 'entity.name.tag.other.html.ecmarkup'},
        3: {name: 'punctuation.definition.tag.end.html.ecmarkup'}
      },
      match: '(?i)(?:^|\\G)(</)(\\w[-\\w]*)\\s*(>)',
      name: 'meta.tag.other.html.ecmarkup'
    },
    'tag-opening-rest': {
      begin: '\\G',
      end: '\\s*(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.html.ecmarkup'}},
      patterns: [{include: 'text.html.basic#tag-stuff'}]
    },
    'tag-opening-start': {
      captures: {
        1: {name: 'punctuation.definition.tag.begin.html.ecmarkup'},
        2: {name: 'entity.name.tag.other.html.ecmarkup'}
      },
      match: '(?:^|\\G)(<)(\\w[-\\w]*)(?=$|\\s|>)',
      name: 'meta.tag.other.html.ecmarkup'
    }
  },
  scopeName: 'text.html.ecmarkup'
}

export default grammar
