// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/alienriver49/genero.tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.per'],
  names: ['genero-forms'],
  patterns: [
    {include: '#Comments'},
    {include: '#GridLayout'},
    {include: '#Keywords'},
    {include: '#Layout'},
    {match: '\\b(DECIMAL|CHAR|DATE|INTEGER)\\b', name: 'storage.type.per'},
    {include: '#StringDoubleQuote'},
    {include: '#StringSingleQuote'},
    {include: '#FormAttributes'},
    {include: '#ComparisonOperators'},
    {include: '#Groups'},
    {include: '#Tables'},
    {match: '(&)', name: 'keyword.amp.per'}
  ],
  repository: {
    Comments: {
      patterns: [
        {match: '#.*', name: 'comment.line.number-sign.per'},
        {match: '--.*', name: 'comment.line.double-dash.per'}
      ]
    },
    ComparisonOperators: {
      patterns: [{match: '(\\=|\\<|\\>|\\!)', name: 'keyword.operator.per'}]
    },
    EscapeCharacters: {
      match: '\\\\.{1}',
      name: 'constant.character.escape.4gl'
    },
    FormAttributes: {
      captures: {
        1: {name: 'storage.type.class.per'},
        2: {name: 'entity.name.function.per'},
        3: {name: 'keyword.operator.per'}
      },
      match:
        '(?i)\\s*\\b(AGGREGATE|BUTTON|BUTTONEDIT|CANVAS|CHECKBOX|COMBOBOX|DATEEDIT|EDIT|FIELD|IMAGE|LABEL|PROGRESSBAR|RADIOGROUP|SCROLLGRID|SLIDER|SPINEDIT|TABLE|TEXTEDIT|TIMEEDIT|TREE|WEBCOMPONENT|SCREEN RECORD|PHANTOM)\\b\\s+(\\w+)\\s*(?:(\\:|\\=)|(?:\\())'
    },
    FormFields: {
      begin: '\\[',
      beginCaptures: {0: {name: 'string.unquoted.form.grid.field.brackes.per'}},
      end: '\\]',
      endCaptures: {0: {name: 'string.unquoted.form.grid.field.brackets.per'}},
      name: 'variable.parameter.per',
      patterns: [
        {include: '#StringDoubleQuote'},
        {include: '#StringSingleQuote'},
        {match: '(\\||:)', name: 'support.constant.field.divide.per'},
        {
          match: "(?i)\\b([a-z0-9\\#\\/\\'\\_]+)\\b",
          name: 'variable.parameter.form.grid.per'
        }
      ]
    },
    FormatStrings: {
      patterns: [
        {match: '[\\#\\<\\>\\*\\-\\+]{2,}', name: 'support.type.format.per'},
        {match: '\\&', name: 'constant.lanauge.format.per'},
        {match: '\\,', name: 'keyword.operator.per'}
      ]
    },
    GridLayout: {
      begin: '\\{',
      end: '\\}',
      name: 'meta.form.grid.per',
      patterns: [{include: '#FormFields'}, {include: '#Tags'}]
    },
    Groups: {
      patterns: [
        {
          captures: {
            1: {name: 'storage.type.class.per'},
            2: {name: 'entity.name.function.per'},
            3: {name: 'keyword.operator.per'}
          },
          match: '(?i)\\b(GROUP)\\b\\s+(\\w+)\\s*(\\:)'
        }
      ]
    },
    Keywords: {
      patterns: [
        {
          match:
            '(?i)\\b(DATABASE|SCREEN SIZE|BY|END|ATTRIBUTES|TYPE|INSTRUCTIONS|DELIMITERS|COMMENTS)\\b',
          name: 'keyword.per'
        },
        {
          match:
            '(?i)\\b(ACCELERATOR|ACCELERATOR2|ACCELERATOR3|ACCELERATOR4|ACTION|AGGREGATETEXT|AGGREGATETYPE|AUTOSCALE|AUTONEXT|BUTTONTEXTHIDDEN|CENTURY|CLASS|COLOR|COLOR WHERE|CONFIG|CONTEXTMENU|COMMENT|COMPONENTTYPE|DEFAULT|DEFAULTVIEW|DISPLAY LIKE|DOUBLECLICK|DOWNSHIFT|EXPANDEDCOLUMN|FONTPITCH|FORMAT|GRIDCHILDRENINPARENT|HIDDEN|HEIGHT|IDCOLUMN|IMAGE|IMAGECOLUMN|IMAGECOLLAPSED|IMAGEEXPANDED|IMAGELEAF|INCLUDE|INITIALIZER|INVISIBLE|ISNODECOLUMN|ITEMS|JUSTIFY|KEY|MINHEIGHT|MINWIDTH|NOENTRY|NOT NULL|NOTEDITABLE|OPTIONS|ORIENTATION|PARENTIDCOLUMN|PICTURE|PROGRAM|PROPERTIES|QUERYEDITABLE|REQUIRED|REVERSE|SAMPLE|SCROLL|SCROLLBARS|SIZEPOLICY|SPACING|SPLITTER|STEP|STRETCH|STYLE|TABINDEX|TAG|TEXT|TITLE|UNSORTABLE|UNSORTABLECOLUMNS|UNSIZABLE|UNSIZABLECOLUMNS|UNHIDABLE|UNHIDABLECOLUMNS|UNMOVABLE|UNMOVABLECOLUMNS|UPSHIFT|VALIDATE|VALIDATE LIKE|VALUEMIN|VALUEMAX|VALUECHECKED|VALUEUNCHECKED|VERIFY|VERSION|WANTFIXEDPAGESIZE|WANTNORETURNS|WANTTABS|WIDGET|WIDTH|WINDOWSTYLE|WORDWRAP)\\b',
          name: 'keyword.per'
        },
        {match: '(?i)\\b(FORMONLY|FIXED)\\b', name: 'constant.language.per'}
      ]
    },
    Layout: {
      patterns: [
        {
          match: '(?i)\\b(GRID|TABLE|HBOX|VBOX|LAYOUT|FORM)\\b',
          name: 'keyword.layout.per'
        },
        {match: '(?i)\\b(TABLE|FOLDER)\\b', name: 'keyword.layout.per'},
        {
          captures: {
            1: {name: 'keyword.layout.per'},
            2: {name: 'support.type.class.per'}
          },
          match: '(?i)(GROUP|TABLE|PAGE)\\s*(\\w*)\\s*\\('
        }
      ]
    },
    StringDoubleQuote: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {0: {name: 'string.quoted.double.per'}},
          end: '"',
          endCaptures: {0: {name: 'string.quoted.double.per'}},
          name: 'string.quoted.double.content.per',
          patterns: [
            {include: '#EscapeCharacters'},
            {include: '#FormatStrings'}
          ]
        }
      ]
    },
    StringSingleQuote: {
      patterns: [
        {
          begin: "'",
          beginCaptures: {0: {name: 'string.quoted.single.per'}},
          end: "'",
          endCaptures: {0: {name: 'string.quoted.single.per'}},
          name: 'string.quoted.single.content.per',
          patterns: [
            {include: '#EscapeCharacters'},
            {include: '#FormatStrings'}
          ]
        }
      ]
    },
    Tables: {
      begin: '(?i)\\bTABLES\\b',
      beginCaptures: {0: {name: 'keyword.per'}},
      end: '(?i)\\bEND\\b',
      endCaptures: {0: {name: 'keyword.per'}},
      name: 'support.class.table.per'
    },
    Tags: {
      begin: '\\<',
      beginCaptures: {0: {name: 'string.unquoted.form.grid.group.brackes.per'}},
      end: '\\>',
      endCaptures: {0: {name: 'string.unquoted.form.grid.group.brackes.per'}},
      patterns: [
        {
          captures: {
            0: {name: 'support.function.per'},
            1: {name: 'support.variable.per'}
          },
          match: '(?i)\\b(G|GROUP|T|TABLE|TREE|S|SCROLLGRID)\\b\\s+(\\w+)'
        },
        {include: '#StringDoubleQuote'},
        {include: '#StringSingleQuote'}
      ]
    }
  },
  scopeName: 'source.genero-forms'
}

export default grammar
