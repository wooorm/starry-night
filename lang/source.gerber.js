// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-pcb>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [
    '.gbr',
    '.cmp',
    '.gbl',
    '.gbo',
    '.gbp',
    '.gbs',
    '.gko',
    '.gpb',
    '.gpt',
    '.gtl',
    '.gto',
    '.gtp',
    '.gts',
    '.sol'
  ],
  extensionsWithDot: ['.ncl'],
  names: ['gerber-image', 'rs-274x'],
  patterns: [
    {
      begin: 'G04',
      beginCaptures: {0: {name: 'entity.name.function.begin-comment.gerber'}},
      contentName: 'comment.block.gerber',
      end: '(?=\\*)'
    },
    {
      begin: '%',
      beginCaptures: {
        0: {name: 'punctuation.section.begin.extended.command.gerber'}
      },
      end: '%',
      endCaptures: {
        0: {name: 'punctuation.section.end.extended.command.gerber'}
      },
      name: 'meta.command.block.gerber',
      patterns: [{include: '#extendedCommands'}]
    },
    {match: ',', name: 'punctuation.separator.list.comma.gerber'},
    {match: '\\*', name: 'keyword.operator.terminator.gerber'},
    {match: 'M02', name: 'keyword.control.eof.gerber'},
    {
      match:
        '(?x)\n(FS|MO|AD|AM|AB|D[0-9]+|G01|G02|G03|G74|G75|LP|LM|LR|LS|G36|G37\n|SR|G04|TF|TA|TO|TD|M02|G54|G55|G70|G71|G90|G91|M00|M01|IP|AS\n|IR|MI|OF|SF|IN|LN)',
      name: 'entity.name.function.${1:/downcase}.command.gerber'
    },
    {
      captures: {
        1: {name: 'storage.name.var.${1:/downcase}.gerber'},
        2: {name: 'constant.numeric.decimal.gerber'}
      },
      match: '(X|Y)([-+]?[0-9]+)',
      name: 'meta.${1:/downcase}.ordinate.gerber'
    },
    {
      match: '[-+]?(?:[0-9]*\\.[0-9]+|[0-9]+)',
      name: 'constant.numeric.decimal.gerber'
    }
  ],
  repository: {
    extendedCommands: {
      patterns: [
        {
          begin: '\\G(AM)([A-Za-z_.0-9$]+)',
          beginCaptures: {
            1: {name: 'storage.type.function.macro.gerber'},
            2: {name: 'entity.name.function.macro.gerber'}
          },
          end: '(?=%)',
          patterns: [{include: '#macroInnards'}]
        },
        {
          begin: '\\G(AD)(D[0-9]+)([^,%*\\s]+)',
          beginCaptures: {
            1: {name: 'storage.type.function.aperture.gerber'},
            2: {name: 'entity.name.function.d-code.gerber'},
            3: {name: 'variable.parameter.aperture-name.gerber'}
          },
          end: '(?=%)',
          name: 'meta.aperture.definition.gerber',
          patterns: [
            {
              begin: '\\G(?=,)',
              end: '(?=%)',
              patterns: [
                {
                  captures: {
                    1: {name: 'punctuation.delimiter.modifiers.list.gerber'},
                    2: {patterns: [{include: '$self'}]}
                  },
                  match: '(X)?([^*%X]+)'
                },
                {include: '$self'}
              ]
            },
            {include: '$self'}
          ]
        },
        {
          begin: '\\G(TF|TA|TO)([^,*%]+)(,)',
          beginCaptures: {
            1: {name: 'storage.type.attribute.gerber'},
            2: {name: 'entity.other.attribute-name.gerber'}
          },
          end: '(?=\\*|%)',
          name: 'meta.attribute.gerber',
          patterns: [
            {match: ',', name: 'punctuation.separator.list.comma.gerber'},
            {match: '[^,%*]', name: 'string.unquoted.attribute.gerber'}
          ]
        },
        {
          captures: {
            1: {name: 'entity.name.function.delete.attribute.gerber'},
            2: {name: 'entity.other.attribute-name.gerber'}
          },
          match: '\\G(TD)([^,*%]+)'
        },
        {
          captures: {
            1: {name: 'entity.name.function.format-spec.gerber'},
            2: {name: 'constant.language.option.modes.gerber'}
          },
          match: '\\G(FS)([LT][AI])'
        },
        {
          captures: {
            1: {name: 'entity.name.function.offset.gerber'},
            2: {name: 'storage.name.var.offset.a-axis.gerber'},
            3: {name: 'constant.numeric.decimal.gerber'},
            4: {name: 'storage.name.var.offset.b-axis.gerber'},
            5: {name: 'constant.numeric.decimal.gerber'}
          },
          match: '\\G(OF)(A)([-+]?[0-9]+)(B)([-+]?[0-9]+)'
        },
        {
          captures: {
            1: {name: 'entity.name.function.unit-mode.gerber'},
            2: {name: 'constant.language.unit-type.gerber'}
          },
          match: '\\G(MO)(IN|MM)'
        },
        {
          captures: {
            1: {name: 'entity.name.function.image-polarity.gerber'},
            2: {name: 'constant.language.image-polarity.gerber'}
          },
          match: '\\G(IP)(POS|NEG)'
        },
        {
          captures: {
            1: {name: 'entity.name.function.load-polarity.gerber'},
            2: {name: 'constant.language.polarity-type.gerber'}
          },
          match: '\\G(LP)(C|D)'
        },
        {
          captures: {
            1: {name: 'entity.name.function.load-mirroring.gerber'},
            2: {name: 'constant.language.mirror-type.gerber'}
          },
          match: '\\G(LM)(N|XY|X|Y)'
        },
        {
          begin: '\\G(LN)',
          beginCaptures: {1: {name: 'entity.name.function.load-name.gerber'}},
          contentName: 'variable.parameter.gerber',
          end: '(?=\\*|%)'
        },
        {include: '$self'}
      ]
    },
    macroInnards: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.primitive.gerber'},
            2: {patterns: [{include: '#unicodeEscape'}]},
            3: {name: 'string.unquoted.gerber'}
          },
          match: '^\\s*(0)(\\s+([^*%]+)(?=\\*|%|$))',
          name: 'comment.line.primitive.gerber'
        },
        {
          match: '\\+|-|x|X|/',
          name: 'keyword.operator.logical.arithmetic.gerber'
        },
        {
          captures: {
            1: {name: 'punctuation.section.equation.begin.gerber'},
            2: {name: 'punctuation.section.equation.end.gerber'}
          },
          match: '(\\()|(\\))'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.gerber'}},
          match: '(\\$)[1-9][0-9]*',
          name: 'variable.positional.parameter.gerber'
        },
        {match: '=', name: 'keyword.operator.assignment.gerber'},
        {include: '$self'}
      ]
    },
    unicodeEscape: {
      captures: {1: {name: 'punctuation.definition.escape.backslash.gerber'}},
      match: '(\\\\)u[0-9A-Fa-f]{4}',
      name: 'constant.character.escape.unicode.gerber'
    }
  },
  scopeName: 'source.gerber'
}

export default grammar
