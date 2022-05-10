// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.nanorc'],
  names: ['nanorc'],
  patterns: [{include: 'injections.etc#scopeHack'}, {include: '#main'}],
  repository: {
    colours: {
      patterns: [
        {
          begin: '^\\s*(i?color)(?=\\s|$)',
          beginCaptures: {1: {name: 'storage.type.var.colour.name.nanorc'}},
          end: '$',
          name: 'meta.colour.nanorc',
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.separator.delimiter.meta.comma.nanorc'},
                2: {name: 'entity.background.colour.name.nanorc'}
              },
              match: '\\G\\s*(,)(\\S+)'
            },
            {
              captures: {
                1: {name: 'entity.foreground.colour.name.nanorc'},
                2: {name: 'punctuation.separator.delimiter.meta.comma.nanorc'},
                3: {name: 'entity.background.colour.name.nanorc'}
              },
              match: '\\G\\s*((?!,)\\S+)(,)(\\S+)'
            },
            {
              captures: {
                1: {name: 'entity.foreground.colour.name.nanorc'},
                2: {name: 'punctuation.separator.delimiter.meta.comma.nanorc'}
              },
              match: '\\G\\s*([^\\s,]+)(,?)(?=\\s|$)'
            },
            {
              captures: {
                1: {name: 'variable.parameter.attribute.nanorc'},
                2: {
                  name: 'punctuation.definition.assignment.equals-sign.nanorc'
                }
              },
              match: '(?<=\\s|\\G)(start|end)(=)(?=\\s|$)',
              name: 'meta.$1-pattern.nanorc'
            },
            {
              begin: '(?<=\\s|\\G)(start|end)(=)(?=")',
              captures: {
                1: {name: 'variable.parameter.attribute.nanorc'},
                2: {
                  name: 'punctuation.definition.assignment.equals-sign.nanorc'
                }
              },
              end: '(?<=")',
              name: 'meta.$1-pattern.nanorc',
              patterns: [{include: '#regexp'}]
            },
            {include: '#regexp'}
          ]
        }
      ]
    },
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.nanorc'}},
      end: '$',
      name: 'comment.line.number-sign.nanorc'
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#colours'},
        {include: '#syntax'},
        {include: '#options'}
      ]
    },
    options: {
      patterns: [
        {
          begin: '^\\s*(set)\\s+(fill|tabsize)(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.$1.nanorc'},
            2: {name: 'entity.option.name.nanorc'}
          },
          end: '$',
          name: 'meta.option.$2.nanorc',
          patterns: [
            {
              match: '[0-9]+',
              name: 'constant.numeric.integer.int.decimal.nanorc'
            }
          ]
        },
        {
          begin:
            '(?x) ^ \\s*\n(set|unset) \\s+\n(autoindent|backup|backwards|boldtext|casesensitive|const|cut\n|historylog|morespace|mouse|multibuffer|noconvert|nofollow|nohelp\n|nonewlines|nowrap|preserve|quickblank|rebinddelete|rebindkeypad\n|regexp|smarthome|smooth|suspend|tabstospaces|tempfile|view\n|wordbounds) (?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.$1.nanorc'},
            2: {name: 'entity.option.name.nanorc'}
          },
          end: '$',
          name: 'meta.option.$2.nanorc'
        },
        {
          begin:
            '(?x) ^ \\s*\n(set) \\s+\n(backupdir|brackets|matchbrackets|operatingdir\n|punct|speller|whitespace) (?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.$1.nanorc'},
            2: {name: 'entity.option.name.nanorc'}
          },
          end: '$',
          name: 'meta.option.$2.nanorc',
          patterns: [{include: '#string'}]
        },
        {
          begin: '^\\s*(include)(?=\\s|$)\\s*',
          beginCaptures: {
            1: {name: 'keyword.control.directive.include.nanorc'}
          },
          contentName: 'storage.modifier.import.file-name.nanorc',
          end: '$',
          name: 'meta.preprocessor.include.nanorc'
        },
        {
          begin: '^\\s*(set)\\s+(quotestr)(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.operator.$1.nanorc'},
            2: {name: 'entity.option.name.nanorc'}
          },
          end: '$',
          name: 'meta.option.$2.nanorc',
          patterns: [{include: '#regexp'}]
        },
        {
          begin: '^\\s*(?:(set|unset)\\s+)?(\\S+)',
          beginCaptures: {
            1: {name: 'keyword.operator.$1.nanorc'},
            2: {name: 'entity.option.name.nanorc'}
          },
          end: '$',
          name: 'meta.option.custom.nanorc',
          patterns: [
            {
              match: '\\b(true|false|on|off|yes|no)\\b',
              name: 'constant.logical.boolean.$1.nanorc'
            },
            {
              match: '[-+]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?=\\s|$)',
              name: 'constant.numeric.decimal.nanorc'
            },
            {include: '#regexp'}
          ]
        }
      ]
    },
    quotedString: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nanorc'}},
      end: '"(?=[^"]*$)|(?=$)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nanorc'}},
      name: 'string.quoted.double.nanorc'
    },
    regexp: {
      begin: '(")"?+',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.nanorc'}},
      end: '"(?=\\s|$)|(?=$)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nanorc'}},
      name: 'string.regexp.embedded.nanorc',
      patterns: [{match: '(?:"(?!\\s|$))+'}, {include: 'source.regexp'}]
    },
    string: {
      patterns: [{include: '#quotedString'}, {include: '#unquotedString'}]
    },
    syntax: {
      patterns: [
        {
          captures: {
            1: {name: 'storage.type.var.syntax.name.nanorc'},
            2: {name: 'support.constant.language.$2.nanorc'}
          },
          match: '^\\s*(syntax)\\s+(none|default)(?=\\s|$)',
          name: 'meta.syntax.nanorc'
        },
        {
          begin:
            '^\\s*(syntax)(?:\\s+((")[^"]+(")|\\S+)(?:\\s+(.*))?)?\\s*$\\s*',
          beginCaptures: {
            1: {name: 'storage.type.var.syntax.name.nanorc'},
            2: {name: 'entity.syntax.name.nanorc'},
            3: {name: 'punctuation.definition.name.begin.nanorc'},
            4: {name: 'punctuation.definition.name.end.nanorc'},
            5: {patterns: [{include: '#regexp'}]}
          },
          end: '^(?=\\s*syntax)',
          name: 'meta.syntax.nanorc',
          patterns: [{include: '#main'}]
        }
      ]
    },
    unquotedString: {match: '\\S+', name: 'string.unquoted.bareword.nanorc'}
  },
  scopeName: 'source.nanorc'
}

export default grammar
