// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.fortran'],
  extensions: ['.f90', '.f03', '.f08', '.f95'],
  names: ['fortran-free-form'],
  patterns: [
    {include: 'source.fortran'},
    {
      begin:
        '(?x:\t\t\t\t\t# extended mode\n\t\t\t\t\t^\n\t\t\t\t\t\\s*\t\t\t\t\t# start of line and possibly some space\n\t\t\t\t\t(?i:(interface))\t\t# 1: word interface\n\t\t\t\t\t\\s+\t\t\t\t\t# some space\n\t\t\t\t\t(?i:(operator|assignment))\t\t# 2: the words operator or assignment\n\t\t\t\t\t\\(\t\t\t\t\t# opening parenthesis\n\t\t\t\t\t((\\.[a-zA-Z0-9_]+\\.)|[\\+\\-\\=\\/\\*]+)\t# 3: an operator\n\t\t\t\t\t\n\t\t\t\t\t\\)\t\t\t\t\t# closing parenthesis\n\t\t\t\t\t)',
      beginCaptures: {
        1: {name: 'storage.type.function.fortran'},
        2: {name: 'storage.type.fortran'},
        3: {name: 'keyword.operator.fortran'}
      },
      end: '(?xi)\n\t\t\t\t(end)(?=\\s|\\z)\t\t\t\t\t\t# 1: the word end\n\t\t\t\t(?:\n\t\t\t\t\t\\s+\n\t\t\t\t\t(interface)\t\t\t\t\t\t# 2: possibly interface\n\t\t\t\t)?\n\t\t\t',
      endCaptures: {
        1: {name: 'keyword.other.fortran'},
        2: {name: 'storage.type.function.fortran'}
      },
      name: 'meta.function.interface.operator.fortran.modern',
      patterns: [{include: '$self'}]
    },
    {
      begin:
        '(?x:\t\t\t\t\t# extended mode\n\t\t\t\t\t^\n\t\t\t\t\t\\s*\t\t\t\t\t# start of line and possibly some space\n\t\t\t\t\t(?i:(interface))\t\t# 1: word interface\n\t\t\t\t\t\\s+\t\t\t\t\t# some space\n\t\t\t\t\t([A-Za-z_][A-Za-z0-9_]*)\t# 1: name\n\t\t\t\t\t)',
      beginCaptures: {
        1: {name: 'storage.type.function.fortran'},
        2: {name: 'entity.name.function.fortran'}
      },
      end: '(?xi)\n\t\t\t\t(end)(?=\\s|\\z)\t\t\t\t\t\t# 1: the word end\n\t\t\t\t(?:\n\t\t\t\t\t\\s+\n\t\t\t\t\t(interface)\t\t\t\t\t\t# 2: possibly interface\n\t\t\t\t)?\n\t\t\t',
      endCaptures: {
        1: {name: 'keyword.other.fortran'},
        2: {name: 'storage.type.function.fortran'}
      },
      name: 'meta.function.interface.fortran.modern',
      patterns: [{include: '$self'}]
    },
    {
      begin:
        '(?x:\t\t\t\t\t\t\t\t# extended mode\n\t\t\t\t\t^\\s*\t\t\t\t\t\t\t\t# begining of line and some space\n\t\t\t\t\t(?i:(type))\t\t\t\t\t\t\t# 1: word type\n\t\t\t\t\t\\s+\t\t\t\t\t\t\t\t\t# some space\n\t\t\t\t\t([a-zA-Z_][a-zA-Z0-9_]*)\t\t\t# 2: type name\n\t\t\t\t\t)',
      beginCaptures: {
        1: {name: 'storage.type.fortran.modern'},
        2: {name: 'entity.name.type.fortran.modern'}
      },
      end: '(?xi)\n\t\t\t\t(end)(?=\\s|\\z)\t\t\t\t\t\t# 1: the word end\n\t\t\t\t(?:\n\t\t\t\t\t\\s+\n\t\t\t\t\t(type)\t\t\t\t\t\t\t# 2: possibly the word type\n\t\t\t\t\t(\\s+[A-Za-z_][A-Za-z0-9_]*)?\t# 3: possibly the name\n\t\t\t\t)?\n\t\t\t',
      endCaptures: {
        1: {name: 'keyword.other.fortran'},
        2: {name: 'storage.type.fortran.modern'},
        3: {name: 'entity.name.type.end.fortran.modern'}
      },
      name: 'meta.type-definition.fortran.modern',
      patterns: [{include: '$self'}]
    },
    {
      begin: '(^[ \\t]+)?(?=!-)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.fortran'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '!-',
          beginCaptures: {0: {name: 'punctuation.definition.comment.fortran'}},
          end: '\\n',
          name: 'comment.line.exclamation.mark.fortran.modern',
          patterns: [{match: '\\\\\\s*\\n'}]
        }
      ]
    },
    {
      begin: '(^[ \\t]+)?(?=!)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.fortran'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '!',
          beginCaptures: {0: {name: 'punctuation.definition.comment.fortran'}},
          end: '\\n',
          name: 'comment.line.exclamation.fortran.modern',
          patterns: [{match: '\\\\\\s*\\n'}]
        }
      ]
    },
    {
      match:
        '\\b(?i:(select\\s+case|case(\\s+default)?|end\\s+select|use|(end\\s+)?forall))\\b',
      name: 'keyword.control.fortran.modern'
    },
    {
      match:
        '\\b(?i:(access|action|advance|append|apostrophe|asis|blank|delete|delim|direct|end|eor|err|exist|file|fmt|form|formatted|iolength|iostat|keep|name|named|nextrec|new|nml|no|null|number|old|opened|pad|position|quote|read|readwrite|rec|recl|replace|scratch|sequential|size|status|undefined|unformatted|unit|unknown|write|yes|zero|namelist)(?=\\())',
      name: 'keyword.control.io.fortran.modern'
    },
    {
      match: '\\b(\\=\\=|\\/\\=|\\>\\=|\\>|\\<|\\<\\=)\\b',
      name: 'keyword.operator.logical.fortran.modern'
    },
    {match: '(\\%|\\=\\>)', name: 'keyword.operator.fortran.modern'},
    {
      match: '\\b(?i:(ceiling|floor|modulo)(?=\\())',
      name: 'keyword.other.instrinsic.numeric.fortran.modern'
    },
    {
      match: '\\b(?i:(allocate|allocated|deallocate)(?=\\())',
      name: 'keyword.other.instrinsic.array.fortran.modern'
    },
    {
      match: '\\b(?i:(associated)(?=\\())',
      name: 'keyword.other.instrinsic.pointer.fortran.modern'
    },
    {
      match: '\\b(?i:((end\\s*)?(interface|procedure|module)))\\b',
      name: 'keyword.other.programming-units.fortran.modern'
    },
    {
      begin: '\\b(?i:(type(?=\\s*\\()))\\b(?=.*::)',
      beginCaptures: {1: {name: 'storage.type.fortran.modern'}},
      end: '(?=!)|$',
      name: 'meta.specification.fortran.modern',
      patterns: [{include: '$base'}]
    },
    {
      match: '\\b(?i:(type(?=\\s*\\()))\\b',
      name: 'storage.type.fortran.modern'
    },
    {
      match:
        '\\b(?i:(optional|recursive|pointer|allocatable|target|private|public))\\b',
      name: 'storage.modifier.fortran.modern'
    }
  ],
  scopeName: 'source.fortran.modern'
}

export default grammar
