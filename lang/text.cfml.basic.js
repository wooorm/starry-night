// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: [],
  patterns: [
    {
      begin: '(?:^\\s+)?(<)((?i:cfscript))(?![^>]*/>)',
      captures: {
        0: {name: 'meta.tag.block.cf.script.cfml'},
        1: {name: 'punctuation.definition.tag.begin.cfml'},
        2: {name: 'entity.name.tag.cf.script.cfml'},
        3: {name: 'punctuation.definition.tag.end.cfml'}
      },
      end: '(</)((?i:cfscript))(>)(?:\\s*\\n)?',
      patterns: [
        {
          begin: '(>)',
          beginCaptures: {
            0: {name: 'meta.tag.block.cf.script.cfml'},
            1: {name: 'punctuation.definition.tag.end.cfml'}
          },
          contentName: 'source.cfscript.embedded.cfml',
          end: '(?=</(?i:cfscript))',
          patterns: [{include: 'source.cfscript'}]
        }
      ]
    },
    {
      begin: '(</?)((?i:cffunction))\\b',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.cfml'},
        2: {name: 'entity.name.tag.cf.function.cfml'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.cfml'}},
      name: 'meta.tag.block.cf.function.cfml',
      patterns: [{include: '#func-name-attribute'}, {include: '#tag-stuff'}]
    },
    {
      begin: '(<)(?i:(cfset|cfreturn))\\b',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.cfml'},
        2: {name: 'entity.name.tag.cf.inline.declaration.cfml'}
      },
      contentName: 'source.cfscript.embedded.cfml',
      end: '((?:\\s?/)?>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.cfml'}},
      name: 'meta.tag.inline.cf.any.cfml',
      patterns: [{include: '#cfcomments'}, {include: 'source.cfscript'}]
    },
    {
      begin:
        '(?x)\n\t\t\t\t(<)\n\t\t\t\t\t(?i:\n\t\t\t\t\t\t(cf(queryparam|location|forward|import|param|break|abort|flush\n\t\t\t\t\t\t\t|setting|test|dump|content|include|catch|continue\n\t\t\t\t\t\t\t|file|log|object|invoke|throw|property|htmlhead\n\t\t\t\t\t\t\t|header|argument|exit|trace)\n\t\t\t\t\t\t)\n\t\t\t\t\t\t\\b\n\t\t\t\t\t)\n\t\t\t',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.cfml'},
        2: {name: 'entity.name.tag.cf.inline.other.cfml'}
      },
      end: '((?:\\s?/)?>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.cfml'}},
      name: 'meta.tag.inline.cf.any.cfml',
      patterns: [{include: '#tag-stuff'}]
    },
    {
      begin: '(?:^\\s+)?(<)((?i:cfquery))\\b(?![^>]*/>)',
      captures: {
        0: {name: 'meta.tag.block.cf.query.cfml'},
        1: {name: 'punctuation.definition.tag.begin.cfml'},
        2: {name: 'entity.name.tag.cf.query.cfml'},
        3: {name: 'punctuation.definition.tag.end.cfml'}
      },
      end: '(</)((?i:cfquery))(>)(?:\\s*\\n)?',
      patterns: [
        {
          begin: '(?<=cfquery)\\s',
          end: '(?=>)',
          name: 'meta.tag.block.cf.output.cfml',
          patterns: [{include: '#qry-name-attribute'}, {include: '#tag-stuff'}]
        },
        {
          begin: '(>)',
          beginCaptures: {
            0: {name: 'meta.tag.block.cf.query.cfml'},
            1: {name: 'punctuation.definition.tag.end.cfml'}
          },
          contentName: 'source.sql.embedded.cfml',
          end: '(?=</(?i:cfquery))',
          patterns: [
            {include: '#string-double-quoted'},
            {include: '#string-single-quoted'},
            {include: '#embedded-tags'},
            {
              begin: '(</?)((?i:(?:cfqueryparam))\\b)',
              beginCaptures: {
                1: {name: 'punctuation.definition.tag.begin.cfml'},
                2: {name: 'entity.name.tag.cf.inline.param.cfml'}
              },
              end: '((?:\\s?/)?>)',
              endCaptures: {1: {name: 'punctuation.definition.tag.end.cfml'}},
              name: 'meta.tag.inline.cf.query-param.cfml',
              patterns: [{include: '#tag-stuff'}]
            },
            {include: '#nest-hash'},
            {include: 'source.sql'}
          ]
        }
      ]
    },
    {include: '#embedded-tags'},
    {
      begin:
        '(?x)\n\t\t\t\t(</?)\n\t\t\t\t(?i:\n\t\t\t\t\t(cf((output)|(savecontent)|([\\w\\-_.]+)))\n\t\t\t\t)\n\t\t\t\t\\b\n\t\t\t',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.cfml'},
        2: {name: 'entity.name.tag.cf.block.other.cfml'}
      },
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.cfml'}},
      name: 'meta.tag.block.cf.other.cfml',
      patterns: [{include: '#tag-stuff'}]
    }
  ],
  repository: {
    cfcomments: {
      patterns: [
        {match: '<!---.*?--->', name: 'comment.line.cfml'},
        {
          begin: '<!---',
          captures: {0: {name: 'punctuation.definition.comment.cfml'}},
          end: '--->',
          name: 'comment.block.cfml',
          patterns: [{include: '#cfcomments'}]
        }
      ]
    },
    cfmail: {
      begin: '(?:^\\s+)?(<)((?i:cfmail))\\b(?![^>]*/>)',
      captures: {
        0: {name: 'meta.tag.block.cf.mail.cfml'},
        1: {name: 'punctuation.definition.tag.begin.cfml'},
        2: {name: 'entity.name.tag.cf.mail.cfml'},
        3: {name: 'punctuation.definition.tag.end.cfml'}
      },
      end: '(</)((?i:cfmail))(>)(?:\\s*\\n)?',
      patterns: [
        {
          begin: '(?<=cfmail)\\s',
          end: '(?=>)',
          name: 'meta.tag.block.cf.mail.cfml',
          patterns: [{include: '#tag-stuff'}]
        },
        {
          begin: '(>)',
          beginCaptures: {
            0: {name: 'meta.tag.block.cf.mail.cfml'},
            1: {name: 'punctuation.definition.tag.end.cfml'}
          },
          contentName: 'meta.scope.between-mail-tags.cfml',
          end: '(?=</(?i:cfmail))',
          patterns: [{include: '#nest-hash'}, {include: 'text.html.cfm'}]
        }
      ]
    },
    cfoutput: {
      begin: '(?:^\\s+)?(<)((?i:cfoutput))\\b(?![^>]*/>)',
      captures: {
        0: {name: 'meta.tag.block.cf.output.cfml'},
        1: {name: 'punctuation.definition.tag.begin.cfml'},
        2: {name: 'entity.name.tag.cf.output.cfml'},
        3: {name: 'punctuation.definition.tag.end.cfml'}
      },
      end: '(</)((?i:cfoutput))(>)(?:\\s*\\n)?',
      patterns: [
        {
          begin: '(?<=cfoutput)\\s',
          end: '(?=>)',
          name: 'meta.tag.block.cf.output.cfml',
          patterns: [{include: '#tag-stuff'}]
        },
        {
          begin: '(>)',
          beginCaptures: {
            0: {name: 'meta.tag.block.cf.output.cfml'},
            1: {name: 'punctuation.definition.tag.end.cfml'}
          },
          contentName: 'meta.scope.between-output-tags.cfml',
          end: '(?=</(?i:cfoutput))',
          patterns: [{include: '#nest-hash'}, {include: 'text.html.cfm'}]
        }
      ]
    },
    conditionals: {
      patterns: [
        {
          begin: '(</?)((?i:cfif))\\b',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.begin.cfml'},
            2: {name: 'entity.name.tag.cf.conditional.cfml'}
          },
          contentName: 'source.cfscript.embedded.cfml',
          end: '(>)',
          endCaptures: {1: {name: 'punctuation.definition.tag.end.cfml'}},
          name: 'meta.tag.block.cf.conditional.cfml',
          patterns: [{include: 'source.cfscript'}]
        },
        {
          begin: '(</?)(?i:(cfelseif|cfelse))',
          captures: {
            1: {name: 'punctuation.definition.tag.begin.cfml'},
            2: {name: 'entity.name.tag.cf.conditional.cfml'}
          },
          contentName: 'source.cfscript.embedded.cfml',
          end: '(>)',
          endCaptures: {1: {name: 'punctuation.definition.tag.end.cfml'}},
          name: 'meta.tag.inline.cf.conditional.cfml',
          patterns: [{include: 'source.cfscript'}]
        }
      ]
    },
    'embedded-tags': {
      patterns: [
        {include: '#cfcomments'},
        {include: '#conditionals'},
        {include: '#flow-control'},
        {include: '#exception-handling'},
        {include: '#cfoutput'},
        {include: '#cfmail'}
      ]
    },
    entities: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.entity.cfml'},
            3: {name: 'punctuation.definition.entity.cfml'}
          },
          match: '(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)',
          name: 'constant.character.entity.cfml'
        },
        {match: '&', name: 'invalid.illegal.bad-ampersand.cfml'}
      ]
    },
    'exception-handling': {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t(</?)\n\t\t\t\t\t\t(?i:\n\t\t\t\t\t\t\t(cftry)|(cfcatch)|(cflock)|(cffinally|cferror|cfrethrow|cfthrow)\n\t\t\t\t\t\t)\n\t\t\t\t\t\t\\b\n\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.begin.cfml'},
            2: {name: 'entity.name.tag.cf.exception.try.cfml'},
            3: {name: 'entity.name.tag.cf.exception.catch.cfml'},
            4: {name: 'entity.name.tag.cf.lock.cfml'},
            5: {name: 'entity.name.tag.cf.exception.other.cfml'}
          },
          end: '(>)',
          endCaptures: {1: {name: 'punctuation.definition.tag.end.cfml'}},
          name: 'meta.tag.block.cf.exceptions.cfml',
          patterns: [{include: '#tag-stuff'}]
        }
      ]
    },
    'flow-control': {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t(</?)\n\t\t\t\t\t\t(?i:\n\t\t\t\t\t\t\t(cfloop)|(cfswitch)|(cf(?:default)?case)\n\t\t\t\t\t\t)\n\t\t\t\t\t\t\\b\n\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'punctuation.definition.tag.begin.cfml'},
            2: {name: 'entity.name.tag.cf.flow-control.loop.cfml'},
            3: {name: 'entity.name.tag.cf.flow-control.switch.cfml'},
            4: {name: 'entity.name.tag.cf.flow-control.case.cfml'}
          },
          end: '(>)',
          endCaptures: {1: {name: 'punctuation.definition.tag.end.cfml'}},
          name: 'meta.tag.block.cf.flow-control.cfml',
          patterns: [{include: '#tag-stuff'}]
        }
      ]
    },
    'func-name-attribute': {
      begin: '\\b(name)\\b\\s*(=)',
      captures: {
        1: {name: 'entity.other.attribute-name.cfml'},
        2: {name: 'punctuation.separator.key-value.cfml'}
      },
      end: '(?<=\'|")',
      name: 'meta.attribute-with-value.name.cfml',
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.cfml'}
          },
          contentName: 'meta.toc-list.function.cfml',
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.cfml'}},
          name: 'string.quoted.double.cfml',
          patterns: [{include: '#entities'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.cfml'}
          },
          contentName: 'meta.toc-list.function.cfml',
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.cfml'}},
          name: 'string.quoted.single.cfml',
          patterns: [{include: '#entities'}]
        }
      ]
    },
    'nest-hash': {
      patterns: [
        {match: '##', name: 'string.escaped.hash.cfml'},
        {
          match:
            '(?x)\n\t\t\t\t\t\t\t(\\#)\n\t\t\t\t\t\t\t(?!\t\t# zero width negative lookahead assertion\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t([\\w$]+\t# assertion for plain variables or function names including currency symbol "$"\n\t\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t\t(\\[.*\\])\t\t\t\t# asserts a match for anything in square brackets\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\(.*\\))\t\t\t\t# or anything in parens\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\.[\\w$]+)\t\t\t\t# or zero or more "dot" notated variables\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\s*[\\+\\-\\*\\/&]\\s*[\\w$]+)\t# or simple arithmentic operators + concatenation\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\s*&\\s*["|\'].+["|\']) \t# or concatenation with a quoted string\n\t\t\t\t\t\t\t\t\t\t)*\t\t# asserts preceeding square brackets, parens, dot notated vars or arithmetic zero or more times\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t(\\(.*\\))\t # asserts a match for anything in parens\n\t\t\t\t\t\t\t\t)\\#\t\t# asserts closing hash\n\t\t\t\t\t\t\t)',
          name: 'invalid.illegal.unescaped.hash.cfml'
        },
        {
          begin:
            '(?x)\n\t\t\t\t\t\t\t(\\#)\n\t\t\t\t\t\t\t(?=\t\t# zero width negative lookahead assertion\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t([\\w$]+\t# assertion for plain variables or function names including currency symbol "$"\n\t\t\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t\t\t(\\[.*\\])\t\t\t\t# asserts a match for anything in square brackets\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\(.*\\))\t\t\t\t# or anything in parens\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\.[\\w$]+)\t\t\t\t# or zero or more "dot" notated variables\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\s*[\\+\\-\\*\\/&]\\s*[\\w$]+)\t# or simple arithmentic operators + concatenation\n\t\t\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t\t\t(\\s*&\\s*["|\'].+["|\']) \t# or concatenation with a quoted string\n\t\t\t\t\t\t\t\t\t\t)*\t\t# asserts preceeding square brackets, parens, dot notated vars or arithmetic zero or more times\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t\t(\\(.*\\))\t # asserts a match for anything in parens\n\t\t\t\t\t\t\t\t)\\#\t\t# asserts closing hash\n\t\t\t\t\t\t\t)',
          beginCaptures: {1: {name: 'punctuation.definition.hash.begin.cfml'}},
          contentName: 'source.cfscript.embedded.cfml',
          end: '(#)',
          endCaptures: {1: {name: 'punctuation.definition.hash.end.cfml'}},
          name: 'meta.name.interpolated.hash.cfml',
          patterns: [{include: 'source.cfscript'}]
        }
      ]
    },
    'qry-name-attribute': {
      begin: '\\b(name)\\b\\s*(=)',
      captures: {
        1: {name: 'entity.other.attribute-name.cfml'},
        2: {name: 'punctuation.separator.key-value.cfml'}
      },
      end: '(?<=\'|")',
      name: 'meta.attribute-with-value.name.cfml',
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.cfml'}
          },
          contentName: 'meta.toc-list.query.cfml',
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.cfml'}},
          name: 'string.quoted.double.cfml',
          patterns: [{include: '#entities'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.cfml'}
          },
          contentName: 'meta.toc-list.query.name.cfml',
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.cfml'}},
          name: 'string.quoted.single.cfml',
          patterns: [{include: '#entities'}]
        }
      ]
    },
    'string-double-quoted': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cfml'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.cfml'}},
      name: 'string.quoted.double.cfml',
      patterns: [{include: '#nest-hash'}, {include: '#entities'}]
    },
    'string-single-quoted': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.cfml'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.cfml'}},
      name: 'string.quoted.single.cfml',
      patterns: [{include: '#nest-hash'}, {include: '#entities'}]
    },
    'tag-generic-attribute': {
      match: '\\b([a-zA-Z\\-:]+)',
      name: 'entity.other.attribute-name.cfml'
    },
    'tag-stuff': {
      patterns: [
        {include: '#cfcomments'},
        {include: '#tag-generic-attribute'},
        {include: '#string-double-quoted'},
        {include: '#string-single-quoted'}
      ]
    }
  },
  scopeName: 'text.cfml.basic'
}

export default grammar
