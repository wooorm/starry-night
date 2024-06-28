// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-roff>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.pic', 'text.roff'],
  extensions: [],
  names: [],
  patterns: [{include: '#external'}, {include: '#main'}],
  repository: {
    box: {
      begin: '(\\w+)[ \\t]*(\\{)',
      beginCaptures: {
        0: {name: 'meta.box.definition.ideal'},
        1: {name: 'entity.function.box.name.ideal'},
        2: {name: 'punctuation.definition.bracket.curly.ideal'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.bracket.curly.ideal'}},
      patterns: [{include: '$self'}]
    },
    comment: {begin: '/\\*', end: '\\*/', name: 'comment.block.ideal'},
    external: {
      patterns: [
        {include: 'source.pic#tags'},
        {
          begin: "^(?=[.'][ \\t]*(?:\\w|\\\\))",
          end: '(?<!\\\\)$|(\\\\".*)$',
          endCaptures: {1: {patterns: [{include: 'text.roff'}]}},
          patterns: [{include: 'text.roff'}]
        }
      ]
    },
    'function-call': {
      begin: '(\\w+)(\\()',
      beginCaptures: {
        1: {name: 'entity.function.name.ideal'},
        2: {name: 'punctuation.definition.bracket.round.ideal'}
      },
      end: '(?=\\))',
      name: 'meta.function-call.ideal',
      patterns: [{include: '$self'}]
    },
    keywords: {
      patterns: [
        {
          captures: {
            2: {name: 'punctuation.separator.dictionary.key-value.ideal'}
          },
          match:
            '\\b(at|box|conn|construct|to|put|using|opaque(?:\\s+exterior)?)\\b(?:\\s+(?:\\w+)\\s*(:)\\s*?)?',
          name: 'keyword.operator.$1.ideal'
        },
        {
          match: '\\b(left|right|spline)\\b',
          name: 'entity.function.box.name.ideal'
        }
      ]
    },
    libfile: {
      captures: {
        1: {name: 'keyword.control.directive.include.ideal'},
        2: {name: 'punctuation.definition.directive.include.ideal'}
      },
      match: '((\\.{3})libfile)\\b',
      name: 'meta.libfile.include.ideal'
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#strings'},
        {include: '#number'},
        {include: '#libfile'},
        {include: '#variables'},
        {include: '#box'},
        {include: '#function-call'},
        {include: '#keywords'},
        {include: '#operators'},
        {include: '#punctuation'}
      ]
    },
    number: {
      match: '(?<![A-Za-z])\\d+(?:\\.\\d+)?',
      name: 'constant.numeric.ideal'
    },
    operators: {
      patterns: [
        {match: '=', name: 'keyword.operator.assignment.ideal'},
        {match: '[-+*/~]', name: 'keyword.operator.arithmetic.ideal'}
      ]
    },
    punctuation: {
      patterns: [
        {match: '\\.', name: 'punctuation.delimiter.full-stop.period.ideal'},
        {match: ',', name: 'punctuation.delimiter.object.comma.ideal'},
        {match: ';', name: 'punctuation.terminator.statement.ideal'},
        {match: '\\)', name: 'punctuation.definition.bracket.round.ideal'},
        {match: '\\]', name: 'punctuation.definition.bracket.square.ideal'},
        {match: '\\}', name: 'punctuation.definition.bracket.curly.ideal'},
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.round.ideal'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.bracket.round.ideal'}
          },
          patterns: [{include: '$self'}]
        },
        {
          begin: '\\[',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.square.ideal'}
          },
          end: '\\]',
          endCaptures: {
            0: {name: 'punctuation.definition.bracket.square.ideal'}
          },
          patterns: [{include: '$self'}]
        },
        {
          begin: '\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.curly.ideal'}
          },
          end: '\\}',
          endCaptures: {
            0: {name: 'punctuation.definition.bracket.curly.ideal'}
          },
          patterns: [{include: '$self'}]
        },
        {
          begin: '<',
          beginCaptures: {
            0: {name: 'punctuation.definition.bracket.angle.ideal'}
          },
          end: '>',
          endCaptures: {0: {name: 'punctuation.definition.bracket.angle.ideal'}}
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ideal'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.ideal'}},
          name: 'string.quoted.single.ideal'
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.ideal'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.ideal'}},
          name: 'string.quoted.double.ideal',
          patterns: [{include: '#escapes'}]
        }
      ]
    },
    tags: {
      begin: '^([.\'])[ \\t]*(IS)\\b\\s*(\\\\["#].*$)?',
      beginCaptures: {
        0: {name: 'meta.function.begin.ideal.section.macro.roff'},
        1: {name: 'punctuation.definition.macro.roff'},
        2: {name: 'entity.function.name.roff'},
        3: {patterns: [{include: 'text.roff#escapes'}]}
      },
      contentName: 'source.embedded.ideal',
      end: "^([.'])[ \\t]*(IE)\\b",
      endCaptures: {
        0: {name: 'meta.function.end.ideal.section.macro.roff'},
        1: {name: 'punctuation.definition.macro.roff'},
        2: {name: 'entity.function.name.roff'}
      },
      patterns: [{include: '$self'}]
    },
    variables: {
      begin: '\\b(var)\\b',
      beginCaptures: {1: {name: 'storage.type.var.ideal'}},
      end: '(?=;)',
      patterns: [{include: '#punctuation'}]
    }
  },
  scopeName: 'source.ideal'
}

export default grammar
