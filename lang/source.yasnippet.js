// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-emacs-lisp>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.emacs.lisp'],
  extensions: ['.yasnippet'],
  names: ['yasnippet', 'snippet', 'yas'],
  patterns: [
    {
      begin: '\\A(?=\\s*(?:$|#))',
      end: '(?:^|\\G)(?=\\s*(?:[^\\s#]|#+\\s*--\\s*$))',
      name: 'meta.prologue.yasnippet',
      patterns: [{include: '#prologue-lines'}]
    },
    {include: '#body'}
  ],
  repository: {
    body: {
      begin: '^\\s*((#+)\\s*(--)\\s*$\\n?|(?=[^\\s#]))',
      beginCaptures: {
        1: {name: 'comment.line.number-sign.yasnippet'},
        2: {name: 'punctuation.definition.comment.number-sign.yasnippet'},
        3: {name: 'punctuation.terminator.double-dash.yasnippet'}
      },
      end: '(?=A)B',
      name: 'meta.snippet-body.yasnippet',
      patterns: [
        {include: '#tab-stops'},
        {include: '#indentation-marker'},
        {include: '#placeholder-fields'},
        {include: '#escaped-characters'},
        {include: '#embedded-lisp'}
      ]
    },
    directives: {
      patterns: [
        {
          captures: {
            1: {name: 'variable.assignment.$1.yasnippet'},
            2: {
              name: 'punctuation.separator.dictionary.key-value.colon.yasnippet'
            },
            3: {name: 'string.unquoted.yasnippet'}
          },
          match: '(?<=[\\s#])(key|name|group|uuid)\\s*(:)(?:\\s*(\\S.*))?',
          name: 'meta.directive.snippet-$1.yasnippet'
        },
        {
          captures: {
            1: {name: 'variable.assignment.$1.yasnippet'},
            2: {
              name: 'punctuation.separator.dictionary.key-value.colon.yasnippet'
            },
            3: {
              name: 'source.embedded.emacs.lisp',
              patterns: [{include: 'source.emacs.lisp'}]
            }
          },
          match: '(?<=[\\s#])(condition|expand-env)\\s*(:)(?:\\s*(\\S.*))?',
          name: 'meta.directive.snippet-$1.yasnippet'
        },
        {
          captures: {
            1: {name: 'variable.assignment.$1.yasnippet'},
            2: {
              name: 'punctuation.separator.dictionary.key-value.colon.yasnippet'
            },
            3: {patterns: [{include: 'source.emacs.lisp#key-notation'}]}
          },
          match: '(?<=[\\s#])(binding)\\s*(:)(?:\\s*(\\S.*))?',
          name: 'meta.directive.keybinding.yasnippet'
        },
        {
          begin: '(?<=[\\s#])(type)\\s*(:)(?:\\s*(command))(?=\\s*$)',
          beginCaptures: {
            0: {name: 'meta.directive.type.yasnippet'},
            1: {name: 'variable.assignment.$1.yasnippet'},
            2: {
              name: 'punctuation.separator.dictionary.key-value.colon.yasnippet'
            },
            3: {name: 'constant.language.type-specifier.yasnippet'}
          },
          end: '(?=A)B',
          patterns: [
            {
              begin: '\\G',
              end: '^(?=\\s*#+\\s*--\\s*$)',
              patterns: [{include: '#prologue-lines'}]
            },
            {
              begin: '^\\s*(#+)\\s*(--)\\s*$\\n?',
              beginCaptures: {
                0: {name: 'comment.line.number-sign.yasnippet'},
                1: {
                  name: 'punctuation.definition.comment.number-sign.yasnippet'
                },
                2: {name: 'punctuation.terminator.double-dash.yasnippet'}
              },
              contentName: 'source.embedded.emacs.lisp',
              end: '(?=A)B',
              name: 'meta.snippet-body.yasnippet',
              patterns: [{include: 'source.emacs.lisp'}]
            }
          ]
        },
        {
          captures: {
            1: {name: 'variable.assignment.$1.yasnippet'},
            2: {
              name: 'punctuation.separator.dictionary.key-value.colon.yasnippet'
            },
            3: {name: 'constant.language.type-specifier.yasnippet'}
          },
          match: '(?<=[\\s#])(type)\\s*(:)(?:\\s*(?!command\\s*$)(\\S.*))',
          name: 'meta.directive.type.yasnippet'
        },
        {
          captures: {
            1: {name: 'variable.assignment.$1.yasnippet'},
            2: {
              name: 'punctuation.separator.dictionary.key-value.colon.yasnippet'
            },
            3: {
              patterns: [
                {
                  begin: '(?:^|\\G)\\s*(?=(?:[a-z][-+a-z0-9]*:\\S))',
                  contentName: 'constant.other.reference.link',
                  end: '\\s|$'
                },
                {
                  captures: {
                    1: {name: 'entity.name.author.yasnippet'},
                    2: {name: 'meta.email-address.yasnippet'},
                    3: {
                      name: 'punctuation.definition.bracket.angle.begin.yasnippet'
                    },
                    4: {
                      name: 'constant.other.reference.link.underline.email.yasnippet'
                    },
                    5: {
                      name: 'punctuation.definition.bracket.angle.end.yasnippet'
                    }
                  },
                  match:
                    '([^\\s<>,](?:[^\\s<>,]|\\s[^<>,])*+)(?:\\s+((<)([^@>\\s]+@[^<>@\\s]+)(>)))?'
                },
                {
                  captures: {
                    1: {
                      name: 'punctuation.definition.bracket.angle.begin.yasnippet'
                    },
                    2: {
                      name: 'constant.other.reference.link.underline.email.yasnippet'
                    },
                    3: {
                      name: 'punctuation.definition.bracket.angle.end.yasnippet'
                    }
                  },
                  match: '(<)([^@>\\s]+@[^<>@\\s]+)(>)',
                  name: 'meta.email-address.yasnippet'
                },
                {match: ',', name: 'punctuation.separator.comma.yasnippet'}
              ]
            }
          },
          match:
            '(?<=[\\s#])(contributor|atom-description-more-url)\\s*(:)(?:\\s*(\\S.*))',
          name: 'meta.directive.$1.yasnippet'
        },
        {
          captures: {
            1: {name: 'variable.assignment.custom.yasnippet'},
            2: {
              name: 'punctuation.separator.dictionary.key-value.colon.yasnippet'
            },
            3: {name: 'string.unquoted.yasnippet'}
          },
          match: '(?<=[\\s#])([^:\\s#]+)\\s*(:)(?:\\s*(\\S.*))?',
          name: 'meta.directive.other.yasnippet'
        }
      ]
    },
    'embedded-lisp': {
      begin: '`',
      beginCaptures: {
        0: {name: 'punctuation.section.begin.embedded.yasnippet'}
      },
      contentName: 'source.embedded.emacs.lisp',
      end: '`',
      endCaptures: {0: {name: 'punctuation.section.end.embedded.yasnippet'}},
      name: 'string.interpolated.yasnippet',
      patterns: [{include: 'source.emacs.lisp'}]
    },
    'escaped-characters': {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.escape.yasnippet'}},
          match: '(\\\\)\\\\',
          name: 'constant.character.escape.backslash.yasnippet'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.yasnippet'}},
          match: '(\\\\)\\$',
          name: 'constant.character.escape.dollar-sign.yasnippet'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.yasnippet'}},
          match: '(\\\\)`',
          name: 'constant.character.escape.backtick.yasnippet'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.yasnippet'}},
          match: "(\\\\)'",
          name: 'constant.character.escape.quote.single.yasnippet'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.yasnippet'}},
          match: '(\\\\)"',
          name: 'constant.character.escape.quote.double.yasnippet'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.yasnippet'}},
          match: '(\\\\)[{}]',
          name: 'constant.character.escape.bracket.curly.brace.yasnippet'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.yasnippet'}},
          match: '(\\\\)[\\(\\)]',
          name: 'constant.character.escape.bracket.round.parenthesis.yasnippet'
        }
      ]
    },
    'indentation-marker': {
      captures: {
        1: {name: 'punctuation.definition.variable.sigil.dollar-sign.yasnippet'}
      },
      match: '(\\$)>',
      name: 'keyword.operator.indentation-marker.yasnippet'
    },
    'numbered-placeholder': {
      begin: '(\\${)([0-9]+)(:)',
      beginCaptures: {
        1: {name: 'punctuation.section.embedded.field.begin.yasnippet'},
        2: {name: 'constant.numeric.integer.int.decimal.yasnippet'},
        3: {name: 'punctuation.separator.colon.field.yasnippet'}
      },
      contentName: 'string.unquoted.default-text.yasnippet',
      end: '}',
      endCaptures: {
        0: {name: 'punctuation.section.embedded.field.end.yasnippet'}
      },
      name: 'meta.placeholder-field.numbered.$2-nth.yasnippet',
      patterns: [{include: '#placeholder-innards'}]
    },
    'placeholder-fields': {
      patterns: [
        {include: '#numbered-placeholder'},
        {include: '#unnumbered-placeholder'}
      ]
    },
    'placeholder-innards': {
      patterns: [
        {include: '#escaped-characters'},
        {include: '#embedded-lisp'},
        {include: '#placeholder-fields'},
        {
          begin: '\\${1,2}(?=\\()',
          beginCaptures: {
            0: {name: 'keyword.operator.transformation.yasnippet'}
          },
          contentName: 'source.embedded.emacs.lisp',
          end: '(?<=\\))',
          name: 'meta.transformation.yasnippet',
          patterns: [{include: 'source.emacs.lisp'}]
        }
      ]
    },
    'prologue-lines': {
      begin: '^\\s*(#+)(?!\\s*--\\s*$)',
      beginCaptures: {
        1: {name: 'punctuation.definition.comment.number-sign.yasnippet'}
      },
      end: '$',
      patterns: [
        {
          begin: '(?=-\\*-)',
          contentName: 'comment.line.modeline.yasnippet',
          end: '$',
          patterns: [{include: 'source.emacs.lisp#modeline'}]
        },
        {include: '#directives'}
      ]
    },
    'tab-stops': {
      captures: {
        1: {name: 'punctuation.definition.variable.sigil.dollar-sign.yasnippet'}
      },
      match: '(\\$)([0-9]+)',
      name: 'variable.positional.$2-nth.tab-stop.yasnippet'
    },
    'unnumbered-placeholder': {
      begin: '(\\${)(:)',
      beginCaptures: {
        1: {name: 'punctuation.section.embedded.field.begin.yasnippet'},
        2: {name: 'punctuation.separator.colon.field.yasnippet'}
      },
      contentName: 'string.unquoted.default-text.yasnippet',
      end: '}',
      endCaptures: {
        0: {name: 'punctuation.section.embedded.field.end.yasnippet'}
      },
      name: 'meta.placeholder-field.unnumbered.yasnippet',
      patterns: [{include: '#placeholder-innards'}]
    }
  },
  scopeName: 'source.yasnippet'
}

export default grammar
