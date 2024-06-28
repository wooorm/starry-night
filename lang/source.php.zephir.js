// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/phalcon/zephir-sublime>
// and licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.zep'],
  names: ['zephir'],
  patterns: [
    {
      captures: {
        1: {name: 'support.class.zephir'},
        2: {name: 'support.constant.zephir'},
        3: {name: 'keyword.operator.zephir'}
      }
    },
    {
      captures: {
        1: {name: 'support.class.zephir'},
        2: {name: 'support.constant.zephir'},
        3: {name: 'entity.name.function.zephir'},
        4: {name: 'keyword.operator.zephir'},
        5: {name: 'storage.type.function.zephir'},
        6: {name: 'punctuation.definition.parameters.begin.zephir'},
        7: {name: 'variable.parameter.function.zephir'},
        8: {name: 'punctuation.definition.parameters.end.zephir'}
      }
    },
    {
      captures: {
        1: {name: 'support.class.zephir'},
        2: {name: 'support.constant.zephir'},
        3: {name: 'entity.name.function.zephir'},
        4: {name: 'keyword.operator.zephir'}
      }
    },
    {
      captures: {
        1: {name: 'support.class.zephir'},
        2: {name: 'entity.name.function.zephir'},
        3: {name: 'keyword.operator.zephir'},
        4: {name: 'storage.type.function.zephir'},
        5: {name: 'punctuation.definition.parameters.begin.zephir'},
        6: {name: 'variable.parameter.function.zephir'},
        7: {name: 'punctuation.definition.parameters.end.zephir'}
      }
    },
    {
      captures: {
        1: {name: 'entity.name.function.zephir'},
        2: {name: 'keyword.operator.zephir'},
        3: {name: 'storage.type.function.zephir'},
        4: {name: 'punctuation.definition.parameters.begin.zephir'},
        5: {name: 'variable.parameter.function.zephir'},
        6: {name: 'punctuation.definition.parameters.end.zephir'}
      }
    },
    {
      captures: {
        1: {name: 'storage.type.function.zephir'},
        2: {name: 'entity.name.function.zephir'},
        3: {name: 'punctuation.definition.parameters.begin.zephir'},
        4: {name: 'variable.parameter.function.zephir'},
        5: {name: 'punctuation.definition.parameters.end.zephir'}
      },
      match: '\\b(function)\\s+([a-zA-Z_$]\\w*)?\\s*(\\()(.*?)(\\))',
      name: 'meta.function.zephir'
    },
    {
      captures: {
        1: {name: 'entity.name.function.zephir'},
        2: {name: 'storage.type.function.zephir'},
        3: {name: 'punctuation.definition.parameters.begin.zephir'},
        4: {name: 'variable.parameter.function.zephir'},
        5: {name: 'punctuation.definition.parameters.end.zephir'}
      },
      match:
        '\\b([a-zA-Z_?.$][\\w?.$]*)\\s*:\\s*\\b(function)?\\s*(\\()(.*?)(\\))',
      name: 'meta.function.json.zephir'
    },
    {
      captures: {
        1: {name: 'string.quoted.single.zephir'},
        10: {name: 'punctuation.definition.parameters.begin.zephir'},
        11: {name: 'variable.parameter.function.zephir'},
        12: {name: 'punctuation.definition.parameters.end.zephir'},
        2: {name: 'punctuation.definition.string.begin.zephir'},
        3: {name: 'entity.name.function.zephir'},
        4: {name: 'punctuation.definition.string.end.zephir'},
        5: {name: 'string.quoted.double.zephir'},
        6: {name: 'punctuation.definition.string.begin.zephir'},
        7: {name: 'entity.name.function.zephir'},
        8: {name: 'punctuation.definition.string.end.zephir'},
        9: {name: 'entity.name.function.zephir'}
      },
      match:
        '(?:((\')([^\']*)(\'))|((")([^"]*)(")))\\s*:\\s*\\b(function)?\\s*(\\()([^)]*)(\\))',
      name: 'meta.function.json.zephir'
    },
    {
      captures: {
        1: {name: 'keyword.operator.new.zephir'},
        2: {name: 'entity.name.type.instance.zephir'}
      },
      match: '(new)\\s+(\\w+(?:\\.\\w*)?)',
      name: 'meta.class.instance.constructor'
    },
    {
      match: '\\b((0(x|X)[0-9a-fA-F]+)|([0-9]+(\\.[0-9]+)?))\\b',
      name: 'constant.numeric.zephir'
    },
    {match: '<([a-zA-Z0-9\\_\\\\\\!]+)>', name: 'string.regexp.zephir'},
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.zephir'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.zephir'}},
      name: 'string.quoted.single.zephir',
      patterns: [
        {
          match:
            '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)',
          name: 'constant.character.escape.zephir'
        }
      ]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.zephir'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.zephir'}},
      name: 'string.quoted.double.zephir',
      patterns: [
        {
          match:
            '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]|37[0-7]?|[4-7][0-7]?|.)',
          name: 'constant.character.escape.zephir'
        }
      ]
    },
    {
      begin: '/\\*\\*(?!/)',
      captures: {0: {name: 'punctuation.definition.comment.zephir'}},
      end: '\\*/',
      name: 'comment.block.documentation.zephir'
    },
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.zephir'}},
      end: '\\*/',
      name: 'comment.block.zephir'
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.zephir'}},
      match: '(//).*$\\n?',
      name: 'comment.line.double-slash.zephir'
    },
    {
      match:
        '\\b(boolean|string|char|class|trait|resource|object|array|callable|namespace|use|as|get|__toString|set|abstract|double|float|fn|function|int|interface|long|var|void|ulong|uint|uchar|unsigned|self)\\b',
      name: 'storage.type.zephir'
    },
    {
      match:
        '\\b(const|fetch|empty|likely|unlikely|isset|unset|extends|final|implements|private|protected|public|static|scoped|internal|inline|deprecated|enum|throws|clone)\\b',
      name: 'storage.modifier.zephir'
    },
    {
      match:
        '\\b(echo|require|break|case|catch|let|continue|default|do|else|elseif|for|goto|if|return|switch|match|throw|try|while|loop)\\b',
      name: 'keyword.control.zephir'
    },
    {
      match: '\\b(in|reverse|instanceof|new|typeof)\\b',
      name: 'keyword.operator.zephir'
    },
    {match: '\\btrue\\b', name: 'constant.language.boolean.true.zephir'},
    {match: '\\bfalse\\b', name: 'constant.language.boolean.false.zephir'},
    {match: '\\bnull\\b', name: 'constant.language.null.zephir'},
    {match: '\\b(parent|self|this)\\b', name: 'variable.language.zephir'},
    {
      match: '\\b(PHP_EOL|PHP_VERSION|([A-Z0-9\\_]+))\\b',
      name: 'string.regexp.zephir'
    },
    {match: '->|::', name: 'keyword.operator.zephir'},
    {
      match:
        '!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|(?<!\\()/=|%=|\\+=|\\-=|&=|\\.=|\\^=|\\b(instanceof|new|typeof|void)\\b',
      name: 'keyword.operator.zephir'
    },
    {match: '\\;', name: 'punctuation.terminator.statement.zephir'},
    {match: ',[ |\\t]*', name: 'meta.delimiter.object.comma.zephir'},
    {match: '\\.', name: 'meta.delimiter.method.period.zephir'},
    {match: '\\{|\\}', name: 'meta.brace.curly.zephir'},
    {match: '\\(|\\)', name: 'meta.brace.round.zephir'},
    {match: '\\[|\\]', name: 'meta.brace.square.zephir'}
  ],
  scopeName: 'source.php.zephir'
}

export default grammar
