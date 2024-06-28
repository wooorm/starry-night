// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/simongregory/actionscript3-tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.html.basic'],
  extensions: [],
  names: [],
  patterns: [
    {
      begin: '(/\\*\\*)\\s*$',
      beginCaptures: {1: {name: 'punctuation.definition.comment.begin.asdoc'}},
      end: '\\*/',
      endCaptures: {0: {name: 'punctuation.definition.comment.asdoc'}},
      name: 'comment.block.documentation.asdoc',
      patterns: [
        {include: '#invalid'},
        {include: '#left-margin'},
        {
          begin: '\\*\\s*\\w',
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.comment.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)param)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.param.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.param.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)return)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.return.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.return.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)throws)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.throws.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.throws.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)see)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.see.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.see.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)author)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.author.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.author.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)version)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.version.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.version.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)see)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.see.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.see.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)since)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.since.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.since.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)inheritDoc)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.inheritDoc.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.inheritDoc.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)example)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.example.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.example.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)exampleText)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.exampleText.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.exampleText.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)eventType)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.eventType.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.eventType.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)internal)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.internal.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.internal.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)deprecated)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.deprecated.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.deprecated.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)playerversion)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.playerversion.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.playerversion.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          begin: '\\*\\s*((\\@)langversion)',
          beginCaptures: {
            1: {name: 'keyword.other.documentation.langversion.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          end: '(?=\\s*\\*\\s*@)|(?=\\s*\\*\\s*/)',
          name: 'meta.documentation.tag.langversion.asdoc',
          patterns: [{include: '#inline'}]
        },
        {
          captures: {
            1: {name: 'keyword.other.documentation.custom.asdoc'},
            2: {name: 'punctuation.definition.keyword.asdoc'}
          },
          match: '\\*\\s*((\\@)\\w+)\\s'
        }
      ]
    }
  ],
  repository: {
    inline: {
      patterns: [
        {include: '#left-margin'},
        {include: '#invalid'},
        {include: '#inline-formatting'},
        {include: 'text.html.basic'},
        {
          match:
            '((https?|s?ftp|ftps|file|smb|afp|nfs|(x-)?man|gopher|txmt)://|mailto:)[-:@a-zA-Z0-9_.~%+/?=&#]+(?<![.?:])',
          name: 'markup.underline.link'
        }
      ]
    },
    'inline-formatting': {
      patterns: [
        {
          begin: '(\\{)((\\@)code)',
          beginCaptures: {
            1: {name: 'punctuation.definition.directive.begin.asdoc'},
            2: {name: 'keyword.other.documentation.directive.code.asdoc'},
            3: {name: 'punctuation.definition.keyword.asdoc'}
          },
          contentName: 'markup.raw.code.asdoc',
          end: '\\}',
          endCaptures: {
            0: {name: 'punctuation.definition.directive.end.asdoc'}
          },
          name: 'meta.directive.code.asdoc'
        },
        {
          begin: '(\\{)((\\@)literal)',
          beginCaptures: {
            1: {name: 'punctuation.definition.directive.begin.asdoc'},
            2: {name: 'keyword.other.documentation.directive.literal.asdoc'},
            3: {name: 'punctuation.definition.keyword.asdoc'}
          },
          contentName: 'markup.raw.literal.asdoc',
          end: '\\}',
          endCaptures: {
            0: {name: 'punctuation.definition.directive.end.asdoc'}
          },
          name: 'meta.directive.literal.asdoc'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.directive.begin.asdoc'},
            2: {name: 'keyword.other.documentation.directive.docRoot.asdoc'},
            3: {name: 'punctuation.definition.keyword.asdoc'},
            4: {name: 'punctuation.definition.directive.end.asdoc'}
          },
          match: '(\\{)((\\@)docRoot)(\\})',
          name: 'meta.directive.docRoot.asdoc'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.directive.begin.asdoc'},
            2: {name: 'keyword.other.documentation.directive.inheritDoc.asdoc'},
            3: {name: 'punctuation.definition.keyword.asdoc'},
            4: {name: 'punctuation.definition.directive.end.asdoc'}
          },
          match: '(\\{)((\\@)inheritDoc)(\\})',
          name: 'meta.directive.inheritDoc.asdoc'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.directive.begin.asdoc'},
            2: {name: 'keyword.other.documentation.directive.link.asdoc'},
            3: {name: 'punctuation.definition.keyword.asdoc'},
            4: {name: 'markup.underline.link.asdoc'},
            5: {name: 'entity.other.link-label.asdoc'},
            6: {name: 'punctuation.definition.directive.end.asdoc'}
          },
          match: '(\\{)((\\@)link)(?:\\s+(\\S+?))?(?:\\s+(.+?))?\\s*(\\})',
          name: 'meta.directive.link.asdoc'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.directive.begin.asdoc'},
            2: {name: 'keyword.other.documentation.directive.linkplain.asdoc'},
            3: {name: 'punctuation.definition.keyword.asdoc'},
            4: {name: 'markup.underline.linkplain.asdoc'},
            5: {name: 'entity.other.linkplain-label.asdoc'},
            6: {name: 'punctuation.definition.directive.end.asdoc'}
          },
          match: '(\\{)((\\@)linkplain)(?:\\s+(\\S+?))?(?:\\s+(.+?))?\\s*(\\})',
          name: 'meta.directive.linkplain.asdoc'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.directive.begin.asdoc'},
            2: {name: 'keyword.other.documentation.directive.value.asdoc'},
            3: {name: 'punctuation.definition.keyword.asdoc'},
            4: {name: 'entity.other.source-constant.asdoc'},
            5: {name: 'punctuation.definition.directive.end.asdoc'}
          },
          match: '(\\{)((\\@)value)\\s*(\\S+?)?\\s*(\\})',
          name: 'meta.directive.value.asdoc'
        }
      ]
    },
    invalid: {
      patterns: [
        {
          match: '^(?!\\s*\\*).*$\\n?',
          name: 'invalid.illegal.missing-asterisk.asdoc'
        }
      ]
    },
    'left-margin': {
      patterns: [
        {
          match: '^\\s*(?=\\*)',
          name: 'comment.block.documentation.left-margin.asdoc'
        }
      ]
    }
  },
  scopeName: 'text.html.asdoc'
}

export default grammar
