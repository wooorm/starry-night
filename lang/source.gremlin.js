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
  dependencies: ['text.roff'],
  extensions: [],
  names: [],
  patterns: [{include: '#data'}, {include: '#tags'}],
  repository: {
    data: {
      begin: '^\\s*((?:sun)?gremlinfile)(?=\\s|$).*',
      beginCaptures: {
        0: {name: 'meta.file.start.gremlin'},
        1: {name: 'keyword.control.flow.begin-file.gremlin'}
      },
      contentName: 'meta.file.body.gremlin',
      end: '^\\s*(-1)\\s*$',
      endCaptures: {
        0: {name: 'meta.file.end.gremlin'},
        1: {name: 'comment.line.ignored.end-of-file.gremlin'}
      },
      patterns: [
        {
          match:
            '(?x)\\b\n(ARC|BEZIER|BOTCENT|BOTLEFT|BOTRIGHT|BSPLINE|CENTCENT|CENTLEFT\n|CENTRIGHT|CURVE|POLYGON|TOPCENT|TOPLEFT|TOPRIGHT|VECTOR)\\b',
          name: 'keyword.operator.element-specification.sun.gremlin'
        },
        {
          captures: {
            1: {name: 'keyword.operator.element-brush.gremlin'},
            2: {name: 'keyword.operator.element-size.gremlin'}
          },
          match: '^\\s*([0-6])\\s+([0-9]+)\\s*$'
        },
        {
          match: '^\\s*(?:\\*|-1.0+\\s+-1.0+)\\s*$',
          name: 'comment.line.ignored.end-point-list.gremlin'
        },
        {
          match: '^\\s*[0-9]+(?:\\s*$|\\s+(?=\\d))',
          name: 'keyword.operator.element-specification.aed.gremlin'
        },
        {
          captures: {
            1: {name: 'meta.element-text.gremlin'},
            10: {name: 'keyword.operator.character-count.2.gremlin'},
            11: {name: 'string.unquoted.gremlin'},
            12: {name: 'keyword.operator.character-count.1.gremlin'},
            13: {name: 'string.unquoted.gremlin'},
            14: {name: 'keyword.operator.character-count.gremlin'},
            15: {name: 'string.unquoted.gremlin'},
            2: {name: 'keyword.operator.character-count.6.gremlin'},
            3: {name: 'string.unquoted.gremlin'},
            4: {name: 'keyword.operator.character-count.5.gremlin'},
            5: {name: 'string.unquoted.gremlin'},
            6: {name: 'keyword.operator.character-count.4.gremlin'},
            7: {name: 'string.unquoted.gremlin'},
            8: {name: 'keyword.operator.character-count.3.gremlin'},
            9: {name: 'string.unquoted.gremlin'}
          },
          match:
            '(?x) ^\\s*\n( (6) \\s+ (\\S.{5})\n| (5) \\s+ (\\S.{4})\n| (4) \\s+ (\\S.{3})\n| (3) \\s+ (\\S.{2})\n| (2) \\s+ (\\S.{1})\n| (1) \\s+ ([7-9\\D])\n| ((?!0)\\d+) \\s+ (\\S.*)\n) \\s* $'
        },
        {match: '\\d+(?:\\.\\d+)?', name: 'constant.numeric.decimal.gremlin'}
      ]
    },
    grn: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.point-scale.grn.roff'},
            2: {name: 'constant.language.boolean.grn.roff'}
          },
          match:
            '(?ix) ^\\s*\n(pointscale|pointscal|pointsca|pointsc|points\n|point|poin|poi|po|p) (?:\\s+(on|off))?\n(?=\\s|$) ',
          name: 'meta.directive.preprocessor.grn.roff'
        },
        {
          captures: {
            1: {name: 'keyword.control.directive.include.grn.roff'},
            2: {name: 'string.unquoted.filename.grn.roff'}
          },
          match: '(?i)^\\s*(file|fil|fi|f)\\s+(\\S.*)',
          name: 'meta.directive.preprocessor.grn.roff'
        },
        {
          match:
            '(?ix) ^\\s*\n( [1-4] (?=\\s+\\S)\n| roman|roma|rom|ro|r\n| italics|italic|itali|ital|ita|it|i\n| bold|bol|bo|b\n| special|specia|speci|spec|spe|sp\n| stipple|stippl|stipp|stip|sti|st|l\n| scale|scal|sca|sc|x\n| narrow|narro|narr|nar|na\n| medium|mediu|medi|med|me\n| thick|thic|thi|th|t\n| default|defaul|defau|defa|def|de|d\n| width|widt|wid|wi|w\n| height|heigh|heig|hei|he|h\n) (?=\\s|$)',
          name: 'keyword.operator.directive.preprocessor.grn.roff'
        },
        {include: 'text.roff#params'}
      ]
    },
    tags: {
      begin: '^([.\'])[ \\t]*(GS)(?=$|\\s|\\\\E?["#])(.*)$',
      beginCaptures: {
        0: {name: 'meta.function.begin.gremlin.macro.roff'},
        1: {name: 'punctuation.definition.macro.roff'},
        2: {name: 'entity.function.name.roff'},
        3: {
          patterns: [
            {
              match: '(?:^|\\G)\\s*([LIC])\\b',
              name: 'constant.language.alignment-mode.grn.roff'
            },
            {include: 'text.roff#escapes'}
          ]
        }
      },
      end: '^([.\'])[ \\t]*(GE|GF)(?=$|\\s|\\\\E?["#])',
      endCaptures: {
        0: {name: 'meta.function.end.gremlin.macro.roff'},
        1: {name: 'punctuation.definition.macro.roff'},
        2: {name: 'entity.name.function.roff'}
      },
      patterns: [
        {
          begin: '\\A\\s*((?:sun)?gremlinfile)(?=\\s|$)',
          end: '(?=A)B',
          patterns: [{include: '#data'}]
        },
        {include: '#grn'}
      ]
    }
  },
  scopeName: 'source.gremlin'
}

export default grammar
