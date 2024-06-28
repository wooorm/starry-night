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
  dependencies: ['etc'],
  extensions: [],
  extensionsWithDot: ['.odin'],
  names: ['object-data-instance-notation'],
  patterns: [{include: '#main'}],
  repository: {
    attribute: {
      match: '\\b(?=[a-z])[A-Za-z0-9_]+',
      name: 'entity.other.attribute-name.odin-ehr'
    },
    block: {
      begin: '<',
      beginCaptures: {0: {name: 'punctuation.definition.block.begin.odin-ehr'}},
      end: '>',
      endCaptures: {0: {name: 'punctuation.definition.block.end.odin-ehr'}},
      name: 'meta.block.odin-ehr',
      patterns: [{include: '#main'}]
    },
    boolean: {
      match: '(?i)\\b(False|True)\\b',
      name: 'constant.language.boolean.${1:/downcase}.odin-ehr'
    },
    comment: {
      begin: '--',
      beginCaptures: {0: {name: 'punctuation.definition.comment.odin-ehr'}},
      end: '$',
      name: 'comment.line.double-dash.odin-ehr'
    },
    date: {
      patterns: [
        {
          captures: {
            1: {name: 'meta.date.partial.odin-ehr'},
            10: {name: 'punctuation.separator.time.colon.odin-ehr'},
            11: {name: 'constant.numeric.minute.odin-ehr'},
            12: {name: 'punctuation.separator.time.colon.odin-ehr'},
            13: {name: 'constant.numeric.second.odin-ehr'},
            2: {name: 'constant.numeric.year.odin-ehr'},
            3: {name: 'punctuation.separator.date.dash.odin-ehr'},
            4: {name: 'constant.numeric.month.odin-ehr'},
            5: {name: 'punctuation.separator.date.dash.odin-ehr'},
            6: {name: 'constant.numeric.day.odin-ehr'},
            7: {name: 'constant.language.datetime-separator.odin-ehr'},
            8: {name: 'meta.time.partial.odin-ehr'},
            9: {name: 'constant.numeric.hour.odin-ehr'}
          },
          match:
            '((\\d{4})(-)(\\d{2}|\\?{2})(-)(\\d{2}|\\?{2})(T))((\\d{2}|\\?{2})(:)(\\d{2}|\\?{2})(:)(\\d{2}|\\?{2}))'
        },
        {
          captures: {
            1: {name: 'constant.numeric.hour.odin-ehr'},
            2: {name: 'punctuation.separator.time.colon.odin-ehr'},
            3: {name: 'constant.numeric.minute.odin-ehr'},
            4: {name: 'punctuation.separator.time.colon.odin-ehr'},
            5: {name: 'constant.numeric.second.odin-ehr'}
          },
          match: '(\\d{2})(:)(\\d{2}|\\?{2})(:)(\\?{2})',
          name: 'meta.time.partial.odin-ehr'
        },
        {
          captures: {
            1: {name: 'constant.numeric.year.odin-ehr'},
            2: {name: 'punctuation.separator.date.dash.odin-ehr'},
            3: {name: 'constant.numeric.month.odin-ehr'},
            4: {name: 'punctuation.separator.date.dash.odin-ehr'},
            5: {name: 'constant.numeric.day.odin-ehr'}
          },
          match: '(\\d{4})(-)(\\d{2}|\\?{2})(-)(\\?{2})',
          name: 'meta.date.partial.odin-ehr'
        },
        {
          captures: {
            1: {name: 'constant.numeric.hour.odin-ehr'},
            10: {name: 'punctuation.separator.timezone.odin-ehr'},
            2: {name: 'punctuation.separator.time.colon.odin-ehr'},
            3: {name: 'constant.numeric.minute.odin-ehr'},
            4: {name: 'punctuation.separator.time.colon.odin-ehr'},
            5: {name: 'constant.numeric.second.odin-ehr'},
            6: {name: 'meta.time.fraction.odin-ehr'},
            7: {name: 'punctuation.separator.time.comma.odin-ehr'},
            8: {name: 'constant.numeric.second.odin-ehr'},
            9: {name: 'constant.numeric.timezone.odin-ehr'}
          },
          match: '(\\d{2})(:)(\\d{2})(:)(\\d{2})((,)(\\d+))?(Z|([-+])\\d{4})?',
          name: 'meta.time.odin-ehr'
        },
        {
          captures: {
            1: {name: 'meta.date.partial.odin-ehr'},
            10: {name: 'punctuation.separator.time.colon.odin-ehr'},
            11: {name: 'constant.numeric.minute.odin-ehr'},
            2: {name: 'constant.numeric.year.odin-ehr'},
            3: {name: 'punctuation.separator.date.dash.odin-ehr'},
            4: {name: 'constant.numeric.month.odin-ehr'},
            5: {name: 'punctuation.separator.date.dash.odin-ehr'},
            6: {name: 'constant.numeric.day.odin-ehr'},
            7: {name: 'constant.language.datetime-separator.odin-ehr'},
            8: {name: 'meta.time.partial.odin-ehr'},
            9: {name: 'constant.numeric.hour.odin-ehr'}
          },
          match: '((\\d{4})(-)(\\d{2})(-)(\\d{2})(T))((\\d{2})(?:(:)(\\d{2}))?)'
        },
        {
          captures: {
            1: {name: 'constant.numeric.year.odin-ehr'},
            2: {name: 'punctuation.separator.date.dash.odin-ehr'},
            3: {name: 'constant.numeric.month.odin-ehr'},
            4: {name: 'punctuation.separator.date.dash.odin-ehr'},
            5: {name: 'constant.numeric.day.odin-ehr'},
            6: {name: 'constant.language.datetime-separator.odin-ehr'}
          },
          match: '(\\d{4})(-)(\\d{2})(-)(\\d{2})(T(?=\\d{2}))?',
          name: 'meta.date.odin-ehr'
        },
        {
          captures: {
            1: {name: 'constant.numeric.year.odin-ehr'},
            2: {name: 'punctuation.separator.date.dash.odin-ehr'},
            3: {name: 'constant.numeric.month.odin-ehr'}
          },
          match: '(\\d{4})(-)(\\d{2})',
          name: 'meta.date.partial.odin-ehr'
        },
        {
          captures: {
            1: {name: 'constant.numeric.hour.odin-ehr'},
            2: {name: 'punctuation.separator.time.colon.odin-ehr'},
            3: {name: 'constant.numeric.minute.odin-ehr'}
          },
          match: '(\\d{2})(:)(\\d{2})',
          name: 'meta.time.partial.odin-ehr'
        },
        {
          match: 'P(?:T?\\d+T?[YMWDHMS])+',
          name: 'constant.other.duration.odin-ehr'
        }
      ]
    },
    escape: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.escape.backslash.odin-ehr'}
          },
          match: '(\\\\)[rnt\\\\"\']',
          name: 'constant.character.escape.odin-ehr'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.escape.backslash.odin-ehr'}
          },
          match: '(\\\\)u(?:[0-9A-Fa-f]{4}){1,2}',
          name: 'constant.character.escape.codepoint.odin-ehr'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.entity.begin.odin-ehr'},
            2: {name: 'punctuation.definition.entity.end.odin-ehr'}
          },
          match: '(&)\\w+(;)',
          name: 'constant.character.entity.odin-ehr'
        },
        {match: '\\\\.', name: 'invalid.illegal.bad-escape.odin-ehr'}
      ]
    },
    infinity: {
      match: '(?i)(?:-|\\b)infinity\\b|\\*',
      name: 'constant.language.numeric.infinity.odin-ehr'
    },
    interval: {
      begin: '\\|',
      beginCaptures: {
        0: {name: 'punctuation.definition.interval.begin.odin─ehr'}
      },
      end: '\\|',
      endCaptures: {0: {name: 'punctuation.definition.interval.end.odin─ehr'}},
      name: 'meta.interval.odin-ehr',
      patterns: [
        {
          captures: {
            1: {patterns: [{include: 'etc#num'}]},
            2: {patterns: [{include: 'etc#dotPair'}]}
          },
          match: '([-+]?(?:[\\de]|\\.(?=[-+\\de]))+)(\\.\\.)'
        },
        {match: '>=|<=|>|<', name: 'keyword.operator.comparison.odin-ehr'},
        {match: '\\+/-', name: 'keyword.operator.variance.odin-ehr'},
        {match: ',', name: 'invalid.illegal.unexpected-comma.odin-ehr'},
        {include: '#infinity'},
        {include: '#date'},
        {include: 'etc#dotPair'},
        {include: 'etc#num'}
      ]
    },
    key: {
      begin: '\\[',
      beginCaptures: {0: {patterns: [{include: 'etc#bracket'}]}},
      end: '\\]',
      endCaptures: {0: {patterns: [{include: 'etc#bracket'}]}},
      name: 'meta.key.member.item-access.odin-ehr',
      patterns: [{include: '#main'}]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#string'},
        {include: '#boolean'},
        {include: '#date'},
        {include: '#path'},
        {include: 'etc#num'},
        {include: 'etc#url'},
        {include: '#interval'},
        {include: '#schema'},
        {include: '#attribute'},
        {include: '#type'},
        {include: '#block'},
        {include: '#plugin'},
        {include: '#typedef'},
        {include: '#term'},
        {include: '#key'},
        {include: '#escape'},
        {include: 'etc#ellipsis'},
        {match: ',', name: 'punctuation.delimiter.comma.odin-ehr'},
        {match: '=', name: 'keyword.operator.assignment.odin-ehr'},
        {match: ';', name: 'punctuation.terminator.statement.odin-ehr'}
      ]
    },
    path: {
      patterns: [
        {
          begin: '(?x)\n(?:(//?)([A-Za-z0-9_]+)|(//?))\n((\\[))',
          beginCaptures: {
            1: {patterns: [{include: '#pathSep'}]},
            2: {patterns: [{include: '#attribute'}, {include: '#type'}]},
            3: {patterns: [{include: '#pathSep'}]},
            4: {name: 'meta.object-id.odin-ehr'},
            5: {name: 'punctuation.definition.object-id.begin.odin-ehr'}
          },
          contentName: 'meta.object-id.odin-ehr',
          end: '(\\])',
          endCaptures: {
            0: {name: 'meta.object-id.odin-ehr'},
            1: {name: 'punctuation.definition.object-id.end.odin-ehr'}
          },
          name: 'meta.path-segment.odin-ehr',
          patterns: [{include: '#main'}]
        },
        {
          captures: {
            1: {patterns: [{include: '#pathSep'}]},
            2: {patterns: [{include: '#attribute'}, {include: '#type'}]}
          },
          match: '(//?)([A-Za-z0-9_]+)',
          name: 'meta.path-segment.odin-ehr'
        },
        {include: '#pathSep'}
      ]
    },
    pathSep: {
      patterns: [
        {match: '//', name: 'punctuation.separator.path.double-slash.odin-ehr'},
        {match: '/', name: 'punctuation.separator.path.slash.odin-ehr'}
      ]
    },
    plugin: {
      patterns: [
        {
          begin: '((\\()\\s*(\\w+)\\s*(\\)))\\s*((<#))',
          beginCaptures: {
            1: {name: 'meta.type.odin-ehr'},
            2: {patterns: [{include: 'etc#bracket'}]},
            3: {name: 'storage.type.class.syntax.odin-ehr'},
            4: {patterns: [{include: 'etc#bracket'}]},
            5: {name: 'meta.block.plugin.odin-ehr'},
            6: {name: 'punctuation.definition.plugin.block.begin.odin-ehr'}
          },
          contentName: 'source.embedded.${3:/downcase}.odin-ehr',
          end: '(#>)',
          endCaptures: {
            0: {name: 'meta.block.plugin.odin-ehr'},
            1: {name: 'punctuation.definition.plugin.block.end.odin-ehr'}
          },
          name: 'markup.code.other.odin-ehr',
          patterns: [{include: '#pluginInnards'}]
        },
        {
          begin: '<#',
          beginCaptures: {
            0: {name: 'punctuation.definition.block.begin.odin-ehr'}
          },
          contentName: 'markup.raw.code.other.odin-ehr',
          end: '#>',
          endCaptures: {0: {name: 'punctuation.definition.block.end.odin-ehr'}},
          name: 'meta.block.plugin.odin-ehr',
          patterns: [{include: '#pluginInnards'}]
        }
      ]
    },
    pluginInnards: {
      patterns: [
        {include: '#comment'},
        {captures: {0: {patterns: [{include: 'etc#bracket'}]}}, match: '{|}'}
      ]
    },
    schema: {
      captures: {1: {name: 'punctuation.definition.variable.schema.odin-ehr'}},
      match: '(@)[A-Za-z0-9_]+',
      name: 'variable.other.schema.odin-ehr'
    },
    string: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.odin-ehr'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.odin-ehr'}
          },
          name: 'string.quoted.double.odin-ehr',
          patterns: [{include: '#escape'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.odin-ehr'}
          },
          end: "'",
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.odin-ehr'}
          },
          name: 'string.quoted.single.odin-ehr',
          patterns: [{include: '#escape'}]
        }
      ]
    },
    term: {
      begin: '\\[(?=[^\\]:]+::)',
      beginCaptures: {
        0: {name: 'punctuation.definition.coded-term.begin.odin-ehr'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.coded-term.end.odin-ehr'}
      },
      name: 'meta.coded-term.odin-ehr',
      patterns: [
        {
          match: '\\G\\s*([-\\w]+)',
          name: 'constant.other.coded-term.name.odin-ehr'
        },
        {match: '::', name: 'punctuation.separator.key-value.odin-ehr'},
        {match: '[-.\\w]+', name: 'constant.other.coded-term.code.odin-ehr'},
        {include: '#termVersion'},
        {include: '#main'}
      ]
    },
    termVersion: {
      begin: '\\(',
      beginCaptures: {0: {patterns: [{include: 'etc#bracket'}]}},
      end: '\\)',
      endCaptures: {0: {patterns: [{include: 'etc#bracket'}]}},
      name: 'meta.term-version.odin-ehr',
      patterns: [{include: 'etc#num'}, {include: '#termVersion'}]
    },
    type: {
      match: '\\b(?=[A-Z])[A-Za-z0-9_]+',
      name: 'storage.type.name.odin-ehr'
    },
    typedef: {
      begin: '\\(',
      beginCaptures: {0: {patterns: [{include: 'etc#bracket'}]}},
      end: '\\)',
      endCaptures: {0: {patterns: [{include: 'etc#bracket'}]}},
      name: 'meta.type.odin-ehr',
      patterns: [{include: '#main'}]
    }
  },
  scopeName: 'source.odin-ehr'
}

export default grammar
