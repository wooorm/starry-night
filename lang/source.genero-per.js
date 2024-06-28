// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/FourjsGenero/GeneroFgl.tmbundle>
// and licensed `unlicense`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.per'],
  names: ['genero-per'],
  patterns: [
    {include: '#screen'},
    {include: '#comments'},
    {include: '#keywords'},
    {include: '#strings'},
    {include: '#numerics'},
    {
      match: '^\\s*&\\s*(elif|else|endif|ifdef|ifndef|include|undef)\\b',
      name: 'meta.preprocessor'
    },
    {
      begin: '^\\s*&\\s*define\\b',
      beginCaptures: {0: {name: 'meta.preprocessor'}},
      end: '[^\\\\\\{]$',
      patterns: [
        {include: '#keywords'},
        {include: '#strings'},
        {include: '#numerics'},
        {match: '#', name: 'meta.preprocessor'},
        {include: '#comments'},
        {captures: {1: {name: 'meta.preprocessor'}}, match: '(\\\\)[ \\t]*\\n'}
      ]
    }
  ],
  repository: {
    comments: {
      patterns: [
        {match: '#.*$', name: 'comment.line.number-sign.per'},
        {match: '--.*$', name: 'comment.line.double-dash.per'},
        {begin: '{', end: '}', name: 'comment.block.per'}
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(?i)(ACCELERATOR|ACCELERATOR2|ACCELERATOR3|ACCELERATOR4|ACTION|ACTIONIMAGE|ACTIONS|ACTIONTEXT|AGGREGATE|AGGREGATETEXT|AGGREGATETYPE|ALT|AND|ATTRIBUTES|AUTO|AUTOCOMMANDS |AUTOHIDE|AUTOITEMS |AUTONEXT|AUTOSCALE|AVG)\\b',
          name: 'keyword.control.per'
        },
        {
          match:
            '\\b(?i)(BETWEEN|BIGINT|BLACK|BLINK|BLUE|BOOLEAN|BOTH|BUTTON|BUTTONEDIT|BUTTONTEXTHIDDEN|BY|BYTE)\\b',
          name: 'keyword.control.per'
        },
        {
          match:
            '\\b(?i)(CANVAS|CENTER|CENTURY|CHAR|CHARACTER|CHARACTERS|CHECKBOX|CLASS|COLOR|COLUMNS|COMBOBOX|COMMAND|COMMENT|COMMENTS|COMPACT|COMPLETER|COMPONENTTYPE|COMPRESS|CONFIG|CONTENT|CONTEXTMENU|CONTROL|COUNT|CURRENT|CYAN)\\b',
          name: 'keyword.control.per'
        },
        {
          match:
            '\\b(?i)(DATABASE|DATE|DATEEDIT|DATETIME|DATETIMEEDIT|DAY|DEC|DECIMAL|DEFAULT|DEFAULTS|DEFAULTVIEW|DELIMITERS|DISCLOSUREINDICATOR|DISPLAY|DISPLAYONLY|DOUBLE|DOUBLECLICK|DOWNSHIFT|DYNAMIC)\\b',
          name: 'keyword.control.per'
        },
        {
          match: '\\b(?i)(EDIT|EMAIL|END|EXPANDEDCOLUMN)\\b',
          name: 'keyword.control.per'
        },
        {
          match:
            '\\b(?i)(FALSE|FIELD|FIXED|FLIPPED|FLOAT|FOLDER|FONTPITCH|FORM|FORMAT|FORMONLY|FRACTION)\\b',
          name: 'keyword.control.per'
        },
        {
          match: '\\b(?i)(GREEN|GRID|GRIDCHILDRENINPARENT|GROUP)\\b',
          name: 'keyword.control.per'
        },
        {
          match: '\\b(?i)(HBOX|HEIGHT|HIDDEN|HORIZONTAL|HOUR)\\b',
          name: 'keyword.control.per'
        },
        {
          match:
            '\\b(?i)(IDCOLUMN|IMAGE|IMAGECOLLAPSED|IMAGECOLUMN|IMAGEEXPANDED|IMAGELEAF|INCLUDE|INITIAL|INITIALIZER|INITIALPAGESIZE|INPUT|INSTRUCTIONS|INT|INTEGER|INTERVAL|INVISIBLE|IS|ISNODECOLUMN|ITEM|ITEMS)\\b',
          name: 'keyword.control.per'
        },
        {match: '\\b(?i)(JUSTIFY)\\b', name: 'keyword.control.per'},
        {
          match: '\\b(?i)(KEY|KEYBOARDHINT|KEYS)\\b',
          name: 'keyword.control.per'
        },
        {
          match: '\\b(?i)(LABEL|LARGE|LAYOUT|LEFT|LIKE|LINES)\\b',
          name: 'keyword.control.per'
        },
        {
          match:
            '\\b(?i)(MAGENTA|MATCHES|MAX|MEDIUM|MIN|MINHEIGHT|MINUTE|MINWIDTH|MONEY|MONTH)\\b',
          name: 'keyword.control.per'
        },
        {
          match:
            '\\b(?i)(NO|NOENTRY|NONCOMPRESS|NONE|NORMAL|NOSWIPE|NOT|NOTEDITABLE|NOUPDATE|NULL|NUMBER|NUMERIC)\\b',
          name: 'keyword.control.per'
        },
        {
          match: '\\b(?i)(OPTIONS|OR|ORIENTATION)\\b',
          name: 'keyword.control.per'
        },
        {
          match:
            '\\b(?i)(PACKED|PAGE|PARENTIDCOLUMN|PHANTOM|PHONE|PICTURE|PIXELHEIGHT|PIXELS|PIXELWIDTH|PLACEHOLDER|POINTS|PRECISION|PROGRAM|PROGRAMS|PROGRESSBAR|PROPERTIES)\\b',
          name: 'keyword.control.per'
        },
        {
          match: '\\b(?i)(QUERYCLEAR|QUERYEDITABLE)\\b',
          name: 'keyword.control.per'
        },
        {
          match:
            '\\b(?i)(RADIOGROUP|REAL|RECORD|RED|REQUIRED|REVERSE|RIGHT)\\b',
          name: 'keyword.control.per'
        },
        {
          match:
            '\\b(?i)(SAMPLE|SCHEMA|SCREEN|SCROLL|SCROLLBARS|SCROLLGRID|SEARCH|SECOND|SEPARATOR|SHIFT|SIZE|SIZEPOLICY|SLIDER|SMALL|SMALLFLOAT|SMALLINT|SPACING|SPINEDIT|SPLIT|SPLITTER|STEP|STRETCH|STRETCHCOLUMNS|STRETCHMAX|STRETCHMIN|STYLE|SUM)\\b',
          name: 'keyword.control.per'
        },
        {
          match:
            '\\b(?i)(TABINDEX|TABLE|TABLES|TAG|TEXT|TEXTEDIT|THROUGH|THRU|TIMEEDIT|TIMESTAMP|TITLE|TO|TODAY|TOOLBAR|TOPMENU|TREE|TRUE|TYPE)\\b',
          name: 'keyword.control.per'
        },
        {
          match:
            '\\b(?i)(UNDERLINE|UNHIDABLE|UNHIDABLECOLUMNS|UNMOVABLE|UNMOVABLECOLUMNS|UNSIZABLE|UNSIZABLECOLUMNS|UNSORTABLE|UNSORTABLECOLUMNS|UPSHIFT|URL|USER)\\b',
          name: 'keyword.control.per'
        },
        {
          match:
            '\\b(?i)(VALIDATE|VALUECHECKED|VALUEMAX|VALUEMIN|VALUEUNCHECKED|VARCHAR|VARIABLE|VBOX|VERIFY|VERSION|VERTICAL)\\b',
          name: 'keyword.control.per'
        },
        {
          match:
            '\\b(?i)(WANTFIXEDPAGESIZE|WANTNORETURNS|WANTTABS|WEBCOMPONENT|WHERE|WHITE|WIDGET|WIDTH|WINDOWS|WINDOWSTYLE|WIP|WITHOUT|WORDWRAP)\\b',
          name: 'keyword.control.per'
        },
        {match: '\\b(?i)(X)\\b', name: 'keyword.control.per'},
        {match: '\\b(?i)(Y|YEAR|YELLOW|YES)\\b', name: 'keyword.control.per'},
        {match: '\\b(?i)(ZEROFILL)\\b', name: 'keyword.control.per'}
      ]
    },
    numerics: {
      patterns: [
        {
          match:
            '(\\+|\\-)?((\\b\\d+(\\.\\d+)?)|(\\.\\d+))([e|E](\\+|\\-)?\\d+)?',
          name: 'constant.numeric.per'
        }
      ]
    },
    screen: {
      patterns: [
        {
          begin: '(^[ \\t]*\\{$)',
          captures: {1: {name: 'punctuation.definition.tag'}},
          end: '(})',
          patterns: [
            {
              begin: '(\\[)',
              captures: {1: {name: 'punctuation.definition.tag'}},
              end: '(\\])',
              name: 'meta.tag',
              patterns: [
                {match: '[|:-]', name: 'punctuation.definition.tag'},
                {match: '.', name: 'entity.other.attribute-name'}
              ]
            },
            {
              begin: '(\\<)([a-zA-Z]*)',
              captures: {
                1: {name: 'punctuation.definition.tag'},
                2: {name: 'entity.name.tag'}
              },
              end: '(>)',
              name: 'meta.tag',
              patterns: [{match: '.', name: 'entity.other.attribute-name'}]
            },
            {match: '.'}
          ]
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: "'",
          end: "'(?!')",
          name: 'string.quoted.single.per',
          patterns: [
            {
              match: "\\\\[\\\\btnfr'\"]|\\\\$|''",
              name: 'constant.character.escape.untitled'
            },
            {
              match: '\\\\x[0-9a-fA-F]{1,2}',
              name: 'constant.character.escape.untitled'
            },
            {match: '\\\\.', name: 'invalid.illegal'}
          ]
        },
        {
          begin: '"',
          end: '"(?!")',
          name: 'string.quoted.double.per',
          patterns: [
            {
              match: '\\\\[\\\\btnfr\'"]|\\\\$|""',
              name: 'constant.character.escape.untitled'
            },
            {
              match: '\\\\x[0-9a-fA-F]{1,2}',
              name: 'constant.character.escape.untitled'
            },
            {match: '\\\\.', name: 'invalid.illegal'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.genero-per'
}

export default grammar
