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
  injections: {
    'L:source.string-template meta.document.dollar-delimiters.string-template - comment':
      {patterns: [{match: '<|>'}, {include: '#main$'}]}
  },
  names: ['stringtemplate'],
  patterns: [
    {begin: '\\A(?=\\s*$)', end: '(?=\\S)'},
    {
      begin:
        '(?xi)(?=\n\t<(abbr|acronym|address|applet|area|article|aside|audio|a|basefont|base\n\t| bdi|bdo|bgsound|big|blink|blockquote|body|br|button|b|canvas|caption\n\t| center|cite|code|colgroup|col|content|datalist|data|dd|del|details|dfn\n\t| dialog|dir|div|dl|dt|embed|em|fieldset|figcaption|figure|font|footer\n\t| form|frameset|frame|h1|h2|h3|h4|h5|h6|header|head|hgroup|hr|html|iframe\n\t| image|img|input|ins|isindex|i|kbd|keygen|label|legend|link|listing|li\n\t| main|map|mark|marquee|math|menuitem|menu|meta|meter|multicol|nav|nextid\n\t| nobr|noembed|noframes|noscript|object|ol|optgroup|option|output|param\n\t| picture|plaintext|portal|pre|progress|p|q|rb|rp|rtc|rt|ruby|samp|script\n\t| section|select|shadow|slot|small|source|spacer|span|strike|strong|style\n\t| sub|summary|sup|svg|s|table|tbody|td|template|textarea|tfoot|thead|th\n\t| time|title|track|tr|tt|ul|u|var|video|wbr|xmp\n\t) (?=\\\\s|/?>)[^>]*>\n\t| <!DOCTYPE\n\t| <!--.*?-->\n\t| &(?:amp|lt|gt|quot|nbsp|\\#(?:[xX][\\dA-Fa-f]+|\\d+));\n\t| \\$! .+? !\\$\n)',
      end: '(?=A)B',
      name: 'meta.document.dollar-delimiters.string-template',
      patterns: [{include: '#main$'}]
    },
    {
      begin: '(?<!\\\\)(?=<[\\a-zA-Z].*?>|<!.*?!>)',
      end: '(?=A)B',
      name: 'meta.document.angle-delimiters.string-template',
      patterns: [{include: '#main'}]
    }
  ],
  repository: {
    attribute: {
      begin: '<',
      beginCaptures: {
        0: {name: 'keyword.operator.section.begin.string-template'}
      },
      end: '>',
      endCaptures: {0: {name: 'keyword.operator.section.end.string-template'}},
      name: 'meta.embedded.section.string-template',
      patterns: [{include: '#expression'}]
    },
    attribute$: {
      begin: '\\$',
      beginCaptures: {
        0: {name: 'keyword.operator.section.begin.string-template'}
      },
      end: '([^$]*+)(\\$)',
      endCaptures: {
        1: {patterns: [{include: '#expression'}]},
        2: {name: 'keyword.operator.section.end.string-template'}
      },
      name: 'meta.embedded.section.string-template',
      patterns: [{include: '#expression'}]
    },
    bareword: {match: '[-\\w.]+', name: 'variable.identifier.string-template'},
    comment: {
      begin: '<!',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.begin.string-template'}
      },
      end: '!>',
      endCaptures: {
        0: {name: 'punctuation.definition.comment.end.string-template'}
      },
      name: 'comment.block.string-template'
    },
    comment$: {
      begin: '\\$!',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.begin.string-template'}
      },
      end: '!\\$',
      endCaptures: {
        0: {name: 'punctuation.definition.comment.end.string-template'}
      },
      name: 'comment.block.string-template'
    },
    condition: {
      patterns: [
        {
          match: '\\|\\||&&|!',
          name: 'keyword.operator.logical.string-template'
        },
        {match: '\\G([-\\w.]+)', name: 'variable.identifier.string-template'},
        {include: '#expression'},
        {include: '#bareword'}
      ]
    },
    conditional: {
      patterns: [
        {
          begin: '(<)(if|elseif|else|endif)(\\()',
          beginCaptures: {
            1: {name: 'keyword.operator.section.begin.string-template'},
            2: {name: 'keyword.control.flow.$2.string-template'},
            3: {name: 'punctuation.section.conditional.begin.string-template'}
          },
          contentName: 'meta.condition.string-template',
          end: '(\\))(>)',
          endCaptures: {
            1: {name: 'punctuation.section.conditional.end.string-template'},
            2: {name: 'keyword.operator.section.end.string-template'}
          },
          name: 'meta.embedded.conditional.$2.string-template',
          patterns: [{include: '#condition'}]
        }
      ]
    },
    conditional$: {
      patterns: [
        {
          begin: '(\\$)(if|elseif|else|endif)(\\()',
          beginCaptures: {
            1: {name: 'keyword.operator.section.begin.string-template'},
            2: {name: 'keyword.control.flow.$2.string-template'},
            3: {name: 'punctuation.section.conditional.begin.string-template'}
          },
          contentName: 'meta.condition.string-template',
          end: '(\\))(\\$)',
          endCaptures: {
            1: {name: 'punctuation.section.conditional.end.string-template'},
            2: {name: 'keyword.operator.section.end.string-template'}
          },
          name: 'meta.embedded.conditional.$2.string-template',
          patterns: [{include: '#condition'}]
        }
      ]
    },
    escape: {
      match: '\\\\[<>]',
      name: 'constant.character.escape.delimiter.string-template'
    },
    escape$: {
      match: '\\\\\\$',
      name: 'constant.character.escape.delimiter.string-template'
    },
    expression: {
      patterns: [
        {
          match: '\\b(true|false)\\b',
          name: 'constant.language.boolean.$1.string-template'
        },
        {
          match: '(?:\\G|^)i0?\\b',
          name: 'constant.language.iteration-index.string-template'
        },
        {
          match: '\\\\[ ntr]',
          name: 'constant.character.whitespace.string-template'
        },
        {
          match: '\\\\u[0-9A-Fa-f]{4}',
          name: 'constant.character.escape.codepoint.hex.string-template'
        },
        {
          match: '\\\\{2}',
          name: 'constant.character.escape.line-continuation.string-template'
        },
        {include: 'etc#strDouble'},
        {
          begin: '(?:\\G|^|:)(?=\\()',
          beginCaptures: {
            0: {name: 'keyword.operator.separator.string-template'}
          },
          end: '(?<=\\))',
          name: 'meta.function-call.indirect.string-template',
          patterns: [{include: '#expressionGroup'}]
        },
        {
          begin: '(?<=\\))(?=\\()',
          end: '(?<=\\))(?!\\G)',
          name: 'meta.argument-list.string-template',
          patterns: [{include: '#expressionGroup'}]
        },
        {
          begin: '(?:\\G|^)\\[',
          beginCaptures: {
            0: {name: 'punctuation.section.array.begin.string-template'}
          },
          end: '\\]',
          endCaptures: {
            0: {name: 'punctuation.section.array.end.string-template'}
          },
          name: 'meta.list.array.string-template',
          patterns: [{include: '#bareword'}, {include: '#expression'}]
        },
        {include: '#subtemplate'},
        {
          begin: '(?:\\G|^)[-\\w.]+(?=\\s*;\\s*\\w[-\\w.]*=)',
          beginCaptures: {
            0: {name: 'entity.name.tag.attribute.string-template'}
          },
          end: '(?=[^\\s;])',
          patterns: [
            {
              captures: {
                1: {patterns: [{include: 'etc#semi'}]},
                2: {name: 'entity.other.attribute-name.string-template'},
                3: {patterns: [{include: 'etc#eql'}]},
                4: {name: 'constant.other.attribute-value.string-template'}
              },
              match: '(;)\\s*([-\\w.]+)(=)([-\\w.]+)'
            }
          ]
        },
        {
          begin: '(?:\\G|^|(?<!\\))(:))([-\\w.]+)(?=\\()',
          beginCaptures: {
            1: {name: 'keyword.operator.separator.string-template'},
            2: {patterns: [{include: '#functionName'}]}
          },
          end: '(?<=\\))',
          name: 'meta.function-call.string-template',
          patterns: [{include: '#expressionGroup'}]
        },
        {
          begin: '(?:\\G|^)[-\\w.]+(?=(\\.\\())',
          beginCaptures: {
            0: {name: 'entity.name.tag.attribute.string-template'}
          },
          end: '(?<=\\))',
          patterns: [
            {
              begin: '\\G\\.(?=\\()',
              beginCaptures: {0: {patterns: [{include: 'etc#dot'}]}},
              end: '(?!\\G)',
              name: 'meta.subscript.property.indirect-lookup.string-template',
              patterns: [{include: '#expressionGroup'}]
            }
          ]
        },
        {
          begin: '(?:\\G|^)([-\\w.]+)(?=\\,)|(?<=\\))(?=\\s*,)',
          beginCaptures: {
            1: {name: 'entity.name.tag.attribute.string-template'}
          },
          end: '(?=[^-\\w.\\s,])',
          patterns: [
            {
              begin: '\\s*(,)\\s*([-\\w.]+)(?=\\()',
              beginCaptures: {
                1: {patterns: [{include: 'etc#comma'}]},
                2: {patterns: [{include: '#functionName'}]}
              },
              end: '(?<=\\))',
              patterns: [{include: '#expressionGroup'}]
            },
            {
              captures: {
                1: {patterns: [{include: 'etc#comma'}]},
                2: {name: 'entity.name.tag.attribute.string-template'}
              },
              match: '\\s*(,)\\s*([-\\w.]+)'
            },
            {include: '#expression'}
          ]
        },
        {
          captures: {
            1: {name: 'entity.name.tag.attribute.string-template'},
            2: {name: 'meta.subscript.property.direct-lookup.string-template'},
            3: {patterns: [{include: 'etc#dot'}]},
            4: {name: 'variable.member.property.string-template'},
            5: {name: 'meta.subscript.property.indirect-lookup.string-template'}
          },
          match: '(?:\\G|^)([-\\w.]+)((\\.)([-\\w.]+))?'
        },
        {include: 'etc#kolon'},
        {include: 'etc#comma'},
        {include: 'etc#eql'},
        {include: 'etc#semi'}
      ]
    },
    expressionGroup: {
      begin: '\\(',
      beginCaptures: {
        0: {name: 'punctuation.definition.expression.begin.string-template'}
      },
      end: '\\)',
      endCaptures: {
        0: {name: 'punctuation.definition.expression.end.string-template'}
      },
      name: 'meta.expression.string-template',
      patterns: [{include: '#bareword'}, {include: '#expression'}]
    },
    functionName: {
      patterns: [
        {
          match:
            '(?:\\G|^)(first|last|length|rest|reverse|strip|strlen|trim|trunc)$',
          name: 'support.function.$1.string-template'
        },
        {match: '(?:\\G|^)(.+)', name: 'entity.name.function.string-template'}
      ]
    },
    main: {
      patterns: [
        {include: '#escape'},
        {include: '#comment'},
        {include: '#conditional'},
        {include: '#attribute'}
      ]
    },
    main$: {
      patterns: [
        {include: '#escape$'},
        {include: '#comment$'},
        {include: '#conditional$'},
        {include: '#attribute$'}
      ]
    },
    subtemplate: {
      begin: '{',
      beginCaptures: {
        0: {name: 'punctuation.section.subtemplate.begin.string-template'}
      },
      end: '}',
      endCaptures: {
        0: {name: 'punctuation.section.subtemplate.end.string-template'}
      },
      name: 'meta.subtemplate.string-template',
      patterns: [
        {match: '\\|', name: 'keyword.operator.separator.string-template'},
        {include: '#main'},
        {include: '#bareword'}
      ]
    }
  },
  scopeName: 'source.string-template'
}

export default grammar
