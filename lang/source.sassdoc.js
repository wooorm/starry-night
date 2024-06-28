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
        1: {name: 'storage.type.class.sassdoc'},
        2: {name: 'punctuation.definition.block.tag.sassdoc'},
        3: {name: 'constant.language.access-type.sassdoc'}
      },
      match: '(?x)\n((@)(?:access))\n\\s+\n(private|public)\n\\b'
    },
    {
      captures: {
        1: {name: 'storage.type.class.sassdoc'},
        2: {name: 'punctuation.definition.block.tag.sassdoc'},
        3: {name: 'entity.name.type.instance.sassdoc'},
        4: {name: 'punctuation.definition.bracket.angle.begin.sassdoc'},
        5: {name: 'constant.other.email.link.underline.sassdoc'},
        6: {name: 'punctuation.definition.bracket.angle.end.sassdoc'}
      },
      match:
        '(?x)\n((@)author)\n\\s+\n(\n  [^@\\s<>*/]\n  (?:[^@<>*/]|\\*[^/])*\n)\n(?:\n  \\s*\n  (<)\n  ([^>\\s]+)\n  (>)\n)?'
    },
    {
      begin: '(?x)\n((@)example)\n\\s+\n(css|scss)',
      beginCaptures: {
        1: {name: 'storage.type.class.sassdoc'},
        2: {name: 'punctuation.definition.block.tag.sassdoc'},
        3: {name: 'variable.other.sassdoc'}
      },
      end: '(?=@|///$)',
      name: 'meta.example.css.scss.sassdoc',
      patterns: [
        {match: '^///\\s+'},
        {
          captures: {
            0: {
              name: 'source.embedded.css.scss',
              patterns: [{include: 'source.css.scss'}]
            }
          },
          match: '[^\\s@*](?:[^*]|\\*[^/])*'
        }
      ]
    },
    {
      begin: '(?x)\n((@)example)\n\\s+\n(markup)',
      beginCaptures: {
        1: {name: 'storage.type.class.sassdoc'},
        2: {name: 'punctuation.definition.block.tag.sassdoc'},
        3: {name: 'variable.other.sassdoc'}
      },
      end: '(?=@|///$)',
      name: 'meta.example.html.sassdoc',
      patterns: [
        {match: '^///\\s+'},
        {
          captures: {0: {name: 'source.embedded.html', patterns: []}},
          match: '[^\\s@*](?:[^*]|\\*[^/])*'
        }
      ]
    },
    {
      begin: '(?x)\n((@)example)\n\\s+\n(javascript)',
      beginCaptures: {
        1: {name: 'storage.type.class.sassdoc'},
        2: {name: 'punctuation.definition.block.tag.sassdoc'},
        3: {name: 'variable.other.sassdoc'}
      },
      end: '(?=@|///$)',
      name: 'meta.example.js.sassdoc',
      patterns: [
        {match: '^///\\s+'},
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
        1: {name: 'storage.type.class.sassdoc'},
        2: {name: 'punctuation.definition.block.tag.sassdoc'},
        3: {name: 'variable.other.link.underline.sassdoc'},
        4: {name: 'entity.name.type.instance.sassdoc'}
      },
      match:
        '(?x)\n((@)link)\n\\s+\n(?:\n  # URL\n  (\n    (?=https?://)\n    (?:[^\\s*]|\\*[^/])+\n  )\n)'
    },
    {
      captures: {
        1: {name: 'storage.type.class.sassdoc'},
        2: {name: 'punctuation.definition.block.tag.sassdoc'},
        3: {name: 'variable.other.sassdoc'}
      },
      match:
        '(?x)\n(\n  (@)\n  (?:arg|argument|param|parameter|requires?|see|colors?|fonts?|ratios?|sizes?)\n)\n\\s+\n(\n  [A-Za-z_$%]\n  [\\-\\w$.\\[\\]]*\n)'
    },
    {
      begin:
        '((@)(?:arg|argument|param|parameter|prop|property|requires?|see|sizes?))\\s+(?={)',
      beginCaptures: {
        1: {name: 'storage.type.class.sassdoc'},
        2: {name: 'punctuation.definition.block.tag.sassdoc'}
      },
      end: '(?=\\s|\\*/|[^{}\\[\\]A-Za-z_$])',
      patterns: [
        {include: '#sassdoctype'},
        {
          match: '([A-Za-z_$%][\\-\\w$.\\[\\]]*)',
          name: 'variable.other.sassdoc'
        },
        {
          captures: {
            1: {
              name: 'punctuation.definition.optional-value.begin.bracket.square.sassdoc'
            },
            2: {name: 'keyword.operator.assignment.sassdoc'},
            3: {name: 'source.embedded.js', patterns: [{include: 'source.js'}]},
            4: {
              name: 'punctuation.definition.optional-value.end.bracket.square.sassdoc'
            },
            5: {name: 'invalid.illegal.syntax.sassdoc'}
          },
          match:
            '(?x)\n(\\[)\\s*\n[\\w$]+\n(?:\n  (?:\\[\\])?                                        # Foo[].bar properties within an array\n  \\.                                                # Foo.Bar namespaced parameter\n  [\\w$]+\n)*\n(?:\n  \\s*\n  (=)                                                # [foo=bar] Default parameter value\n  \\s*\n  (\n    # The inner regexes are to stop the match early at */ and to not stop at escaped quotes\n    (?>\n      "(?:(?:\\*(?!/))|(?:\\\\(?!"))|[^*\\\\])*?" |  # [foo="bar"] Double-quoted\n      \'(?:(?:\\*(?!/))|(?:\\\\(?!\'))|[^*\\\\])*?\' |  # [foo=\'bar\'] Single-quoted\n      \\[ (?:(?:\\*(?!/))|[^*])*? \\] |              # [foo=[1,2]] Array literal\n      (?:(?:\\*(?!/))|\\s(?!\\s*\\])|\\[.*?(?:\\]|(?=\\*/))|[^*\\s\\[\\]])* # Everything else (sorry)\n    )*\n  )\n)?\n\\s*(?:(\\])((?:[^*\\s]|\\*[^\\s/])+)?|(?=\\*/))',
          name: 'variable.other.sassdoc'
        }
      ]
    },
    {
      begin:
        '(?x)\n(\n  (@)\n  (?:returns?|throws?|exception|outputs?)\n)\n\\s+(?={)',
      beginCaptures: {
        1: {name: 'storage.type.class.sassdoc'},
        2: {name: 'punctuation.definition.block.tag.sassdoc'}
      },
      end: '(?=\\s|[^{}\\[\\]A-Za-z_$])',
      patterns: [{include: '#sassdoctype'}]
    },
    {
      captures: {
        1: {name: 'storage.type.class.sassdoc'},
        2: {name: 'punctuation.definition.block.tag.sassdoc'},
        3: {
          name: 'entity.name.type.instance.sassdoc',
          patterns: [{include: '#sassdoctypedelimiter'}]
        }
      },
      match:
        '(?x)\n(\n  (@)\n  (?:type)\n)\n\\s+\n(\n  (?:\n    [A-Za-z |]+\n  )\n)'
    },
    {
      captures: {
        1: {name: 'storage.type.class.sassdoc'},
        2: {name: 'punctuation.definition.block.tag.sassdoc'},
        3: {name: 'entity.name.type.instance.sassdoc'}
      },
      match:
        '(?x)\n(\n  (@)\n  (?:alias|group|name|requires?|see|icons?)\n)\n\\s+\n(\n  (?:\n    [^{}@\\s*] | \\*[^/]\n  )+\n)'
    },
    {
      captures: {1: {name: 'punctuation.definition.block.tag.sassdoc'}},
      match:
        '(?x)\n(@)\n(?:access|alias|author|content|deprecated|example|exception|group\n|ignore|name|prop|property|requires?|returns?|see|since|throws?|todo\n|type|outputs?)\n\\b',
      name: 'storage.type.class.sassdoc'
    }
  ],
  repository: {
    brackets: {
      patterns: [
        {begin: '{', end: '}|(?=$)', patterns: [{include: '#brackets'}]},
        {begin: '\\[', end: '\\]|(?=$)', patterns: [{include: '#brackets'}]}
      ]
    },
    sassdoctype: {
      patterns: [
        {
          match: '\\G{(?:[^}*]|\\*[^/}])+$',
          name: 'invalid.illegal.type.sassdoc'
        },
        {
          begin: '\\G({)',
          beginCaptures: {
            0: {name: 'entity.name.type.instance.sassdoc'},
            1: {name: 'punctuation.definition.bracket.curly.begin.sassdoc'}
          },
          contentName: 'entity.name.type.instance.sassdoc',
          end: '((}))\\s*|(?=$)',
          endCaptures: {
            1: {name: 'entity.name.type.instance.sassdoc'},
            2: {name: 'punctuation.definition.bracket.curly.end.sassdoc'}
          },
          patterns: [{include: '#brackets'}]
        }
      ]
    },
    sassdoctypedelimiter: {
      captures: {1: {name: 'punctuation.definition.delimiter.sassdoc'}},
      match: '(\\|)'
    }
  },
  scopeName: 'source.sassdoc'
}

export default grammar
