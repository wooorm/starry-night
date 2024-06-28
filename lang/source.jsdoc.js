/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: [],
  patterns: [
    {
      captures: {
        1: {name: 'storage.type.class.jsdoc'},
        2: {name: 'punctuation.definition.block.tag.jsdoc'},
        3: {name: 'constant.language.access-type.jsdoc'}
      },
      match: '(?x)\n((@)(?:access|api))\n\\s+\n(private|protected|public)\n\\b'
    },
    {
      captures: {
        1: {name: 'storage.type.class.jsdoc'},
        2: {name: 'punctuation.definition.block.tag.jsdoc'},
        3: {name: 'entity.name.type.instance.jsdoc'},
        4: {name: 'punctuation.definition.bracket.angle.begin.jsdoc'},
        5: {name: 'constant.other.email.link.underline.jsdoc'},
        6: {name: 'punctuation.definition.bracket.angle.end.jsdoc'}
      },
      match:
        '(?x)\n((@)author)\n\\s+\n(\n  [^@\\s<>*/]\n  (?:[^@<>*/]|\\*[^/])*\n)\n(?:\n  \\s*\n  (<)\n  ([^>\\s]+)\n  (>)\n)?'
    },
    {
      captures: {
        1: {name: 'storage.type.class.jsdoc'},
        2: {name: 'punctuation.definition.block.tag.jsdoc'},
        3: {name: 'entity.name.type.instance.jsdoc'},
        4: {name: 'keyword.operator.control.jsdoc'},
        5: {name: 'entity.name.type.instance.jsdoc'}
      },
      match:
        '(?x)\n((@)borrows) \\s+\n((?:[^@\\s*/]|\\*[^/])+)    # <that namepath>\n\\s+ (as) \\s+              # as\n((?:[^@\\s*/]|\\*[^/])+)    # <this namepath>'
    },
    {
      begin: '((@)example)\\s+',
      beginCaptures: {
        1: {name: 'storage.type.class.jsdoc'},
        2: {name: 'punctuation.definition.block.tag.jsdoc'}
      },
      end: '(?=@|\\*/)',
      name: 'meta.example.jsdoc',
      patterns: [
        {match: '^\\s\\*\\s+'},
        {
          begin: '\\G(<)caption(>)',
          beginCaptures: {
            0: {name: 'entity.name.tag.inline.jsdoc'},
            1: {name: 'punctuation.definition.bracket.angle.begin.jsdoc'},
            2: {name: 'punctuation.definition.bracket.angle.end.jsdoc'}
          },
          contentName: 'constant.other.description.jsdoc',
          end: '(</)caption(>)|(?=\\*/)',
          endCaptures: {
            0: {name: 'entity.name.tag.inline.jsdoc'},
            1: {name: 'punctuation.definition.bracket.angle.begin.jsdoc'},
            2: {name: 'punctuation.definition.bracket.angle.end.jsdoc'}
          }
        },
        {
          captures: {
            0: {name: 'source.embedded.js', patterns: [{include: 'source.js'}]}
          },
          match: '[^\\s@*](?:[^*]|\\*[^/])*'
        }
      ]
    },
    {
      captures: {
        1: {name: 'storage.type.class.jsdoc'},
        2: {name: 'punctuation.definition.block.tag.jsdoc'},
        3: {name: 'constant.language.symbol-type.jsdoc'}
      },
      match:
        '(?x)\n((@)kind)\n\\s+\n(class|constant|event|external|file|function|member|mixin|module|namespace|typedef)\n\\b'
    },
    {
      captures: {
        1: {name: 'storage.type.class.jsdoc'},
        2: {name: 'punctuation.definition.block.tag.jsdoc'},
        3: {name: 'variable.other.link.underline.jsdoc'},
        4: {name: 'entity.name.type.instance.jsdoc'}
      },
      match:
        '(?x)\n((@)see)\n\\s+\n(?:\n  # URL\n  (\n    (?=https?://)\n    (?:[^\\s*]|\\*[^/])+\n  )\n  |\n  # JSDoc namepath\n  (\n    (?!\n      # Avoid matching bare URIs (also acceptable as links)\n      https?://\n      |\n      # Avoid matching {@inline tags}; we match those below\n      (?:\\[[^\\[\\]]*\\])? # Possible description [preceding]{@tag}\n      {@(?:link|linkcode|linkplain|tutorial)\\b\n    )\n    # Matched namepath\n    (?:[^@\\s*/]|\\*[^/])+\n  )\n)'
    },
    {
      captures: {
        1: {name: 'storage.type.class.jsdoc'},
        2: {name: 'punctuation.definition.block.tag.jsdoc'},
        3: {
          name: 'variable.other.jsdoc',
          patterns: [
            {match: ',', name: 'punctuation.delimiter.object.comma.jsdoc'}
          ]
        }
      },
      match:
        '(?x)\n((@)template)\n\\s+\n# One or more valid identifiers\n(\n  [A-Za-z_$]        # First character: non-numeric word character\n  [\\w$.\\[\\]]*    # Rest of identifier\n  (?:               # Possible list of additional identifiers\n    \\s* , \\s*\n    [A-Za-z_$]\n    [\\w$.\\[\\]]*\n  )*\n)'
    },
    {
      captures: {
        1: {name: 'storage.type.class.jsdoc'},
        2: {name: 'punctuation.definition.block.tag.jsdoc'},
        3: {name: 'variable.other.jsdoc'}
      },
      match:
        '(?x)\n(\n  (@)\n  (?:arg|argument|const|constant|member|namespace|param|var)\n)\n\\s+\n(\n  [A-Za-z_$]\n  [\\w$.\\[\\]]*\n)'
    },
    {
      begin: '((@)typedef)\\s+(?={)',
      beginCaptures: {
        1: {name: 'storage.type.class.jsdoc'},
        2: {name: 'punctuation.definition.block.tag.jsdoc'}
      },
      end: '(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])',
      patterns: [
        {include: '#type'},
        {
          match: '(?:[^@\\s*/]|\\*[^/])+',
          name: 'entity.name.type.instance.jsdoc'
        }
      ]
    },
    {
      begin:
        '((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\s+(?={)',
      beginCaptures: {
        1: {name: 'storage.type.class.jsdoc'},
        2: {name: 'punctuation.definition.block.tag.jsdoc'}
      },
      end: '(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])',
      patterns: [
        {include: '#type'},
        {match: '([A-Za-z_$][\\w$.\\[\\]]*)', name: 'variable.other.jsdoc'},
        {
          captures: {
            1: {
              name: 'punctuation.definition.optional-value.begin.bracket.square.jsdoc'
            },
            2: {name: 'keyword.operator.assignment.jsdoc'},
            3: {
              name: 'source.embedded.js',
              patterns: [{include: '#inline-tags'}, {include: 'source.js'}]
            },
            4: {
              name: 'punctuation.definition.optional-value.end.bracket.square.jsdoc'
            },
            5: {name: 'invalid.illegal.syntax.jsdoc'}
          },
          match:
            '(?x)\n(\\[)\\s*\n[\\w$]+\n(?:\n  (?:\\[\\])?                                        # Foo[].bar properties within an array\n  \\.                                                # Foo.Bar namespaced parameter\n  [\\w$]+\n)*\n(?:\n  \\s*\n  (=)                                                # [foo=bar] Default parameter value\n  \\s*\n  (\n    # The inner regexes are to stop the match early at */ and to not stop at escaped quotes\n    (?>\n      "(?:(?:\\*(?!/))|(?:\\\\(?!"))|[^*\\\\])*?" |  # [foo="bar"] Double-quoted\n      \'(?:(?:\\*(?!/))|(?:\\\\(?!\'))|[^*\\\\])*?\' |  # [foo=\'bar\'] Single-quoted\n      \\[ (?:(?:\\*(?!/))|[^*])*? \\] |              # [foo=[1,2]] Array literal\n      (?:(?:\\*(?!/))|\\s(?!\\s*\\])|\\[.*?(?:\\]|(?=\\*/))|[^*\\s\\[\\]])* # Everything else (sorry)\n    )*\n  )\n)?\n\\s*(?:(\\])((?:[^*\\s]|\\*[^\\s/])+)?|(?=\\*/))',
          name: 'variable.other.jsdoc'
        }
      ]
    },
    {
      begin:
        '(?x)\n(\n  (@)\n  (?:define|enum|exception|export|extends|lends|implements|modifies\n  |namespace|private|protected|returns?|suppress|this|throws|type\n  |yields?)\n)\n\\s+(?={)',
      beginCaptures: {
        1: {name: 'storage.type.class.jsdoc'},
        2: {name: 'punctuation.definition.block.tag.jsdoc'}
      },
      end: '(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])',
      patterns: [{include: '#type'}]
    },
    {
      captures: {
        1: {name: 'storage.type.class.jsdoc'},
        2: {name: 'punctuation.definition.block.tag.jsdoc'},
        3: {name: 'entity.name.type.instance.jsdoc'}
      },
      match:
        '(?x)\n(\n  (@)\n  (?:alias|augments|callback|constructs|emits|event|fires|exports?\n  |extends|external|function|func|host|lends|listens|interface|memberof!?\n  |method|module|mixes|mixin|name|requires|see|this|typedef|uses)\n)\n\\s+\n(\n  (?:\n    [^{}@\\s*] | \\*[^/]\n  )+\n)'
    },
    {
      begin: '((@)(?:default(?:value)?|license|version))\\s+(([\'"]))',
      beginCaptures: {
        1: {name: 'storage.type.class.jsdoc'},
        2: {name: 'punctuation.definition.block.tag.jsdoc'},
        3: {name: 'variable.other.jsdoc'},
        4: {name: 'punctuation.definition.string.begin.jsdoc'}
      },
      contentName: 'variable.other.jsdoc',
      end: '(\\3)|(?=$|\\*/)',
      endCaptures: {
        0: {name: 'variable.other.jsdoc'},
        1: {name: 'punctuation.definition.string.end.jsdoc'}
      }
    },
    {
      captures: {
        1: {name: 'storage.type.class.jsdoc'},
        2: {name: 'punctuation.definition.block.tag.jsdoc'},
        3: {name: 'variable.other.jsdoc'}
      },
      match:
        '((@)(?:default(?:value)?|license|tutorial|variation|version))\\s+([^\\s*]+)'
    },
    {
      captures: {1: {name: 'punctuation.definition.block.tag.jsdoc'}},
      match:
        '(?x) (@)\n(?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles\n|callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright\n|default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception\n|exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func\n|function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc\n|inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method\n|mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects\n|override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected\n|public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary\n|suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation\n|version|virtual|writeOnce|yields?)\n\\b',
      name: 'storage.type.class.jsdoc'
    },
    {include: '#inline-tags'}
  ],
  repository: {
    brackets: {
      patterns: [
        {begin: '{', end: '}|(?=\\*/)', patterns: [{include: '#brackets'}]},
        {begin: '\\[', end: '\\]|(?=\\*/)', patterns: [{include: '#brackets'}]}
      ]
    },
    'inline-tags': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.bracket.square.begin.jsdoc'},
            2: {name: 'punctuation.definition.bracket.square.end.jsdoc'}
          },
          match: '(\\[)[^\\]]+(\\])(?={@(?:link|linkcode|linkplain|tutorial))',
          name: 'constant.other.description.jsdoc'
        },
        {
          begin: '({)((@)(?:link(?:code|plain)?|tutorial))\\s*',
          beginCaptures: {
            1: {name: 'punctuation.definition.bracket.curly.begin.jsdoc'},
            2: {name: 'storage.type.class.jsdoc'},
            3: {name: 'punctuation.definition.inline.tag.jsdoc'}
          },
          end: '}|(?=\\*/)',
          endCaptures: {
            0: {name: 'punctuation.definition.bracket.curly.end.jsdoc'}
          },
          name: 'entity.name.type.instance.jsdoc',
          patterns: [
            {
              captures: {
                1: {name: 'variable.other.link.underline.jsdoc'},
                2: {name: 'punctuation.separator.pipe.jsdoc'}
              },
              match: '\\G((?=https?://)(?:[^|}\\s*]|\\*[/])+)(\\|)?'
            },
            {
              captures: {
                1: {name: 'variable.other.description.jsdoc'},
                2: {name: 'punctuation.separator.pipe.jsdoc'}
              },
              match: '\\G((?:[^{}@\\s|*]|\\*[^/])+)(\\|)?'
            }
          ]
        }
      ]
    },
    type: {
      patterns: [
        {match: '\\G{(?:[^}*]|\\*[^/}])+$', name: 'invalid.illegal.type.jsdoc'},
        {
          begin: '\\G({)',
          beginCaptures: {
            0: {name: 'entity.name.type.instance.jsdoc'},
            1: {name: 'punctuation.definition.bracket.curly.begin.jsdoc'}
          },
          contentName: 'entity.name.type.instance.jsdoc',
          end: '((}))\\s*|(?=\\*/)',
          endCaptures: {
            1: {name: 'entity.name.type.instance.jsdoc'},
            2: {name: 'punctuation.definition.bracket.curly.end.jsdoc'}
          },
          patterns: [{include: '#brackets'}]
        }
      ]
    }
  },
  scopeName: 'source.jsdoc'
}

export default grammar
