// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Nelarius/vscode-wren>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.wren'],
  names: ['wren', 'wrenlang'],
  patterns: [{include: '#code'}, {include: '#class'}],
  repository: {
    block: {
      begin: '{',
      beginCaptures: {0: {name: 'punctuation.section.block.begin.wren'}},
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.block.end.wren'}},
      name: 'meta.block.wren',
      patterns: [
        {include: '#code'},
        {
          begin: '\\|',
          end: '\\|',
          name: 'meta.block.parameters.wren',
          patterns: [{match: '\\w+', name: 'variable.parameter.function.wren'}]
        }
      ]
    },
    blockComment: {
      begin: '/\\*',
      end: '\\*/',
      name: 'comment.block.wren',
      patterns: [{include: '#blockComment'}]
    },
    class: {
      begin:
        '(?:\\b(foreign)\\s+)?(\\bclass)\\s+(\\w+)\\s+(?:(\\bis)\\s+(\\w+))?',
      beginCaptures: {
        1: {name: 'storage.modifier.wren'},
        2: {name: 'storage.modifier.wren'},
        3: {name: 'entity.name.class.wren'},
        4: {name: 'storage.modifier.wren'},
        5: {name: 'entity.name.class.wren'}
      },
      end: '}',
      endCaptures: {0: {name: 'punctuation.section.class.end.wren'}},
      name: 'meta.class',
      patterns: [
        {
          begin: '{',
          beginCaptures: {0: {name: 'punctuation.section.class.begin.wren'}},
          end: '(?=})',
          name: 'meta.class.body.wren',
          patterns: [
            {include: '#comment'},
            {include: '#blockComment'},
            {include: '#foreignMethod'},
            {include: '#subscriptOperator'},
            {include: '#method'}
          ]
        }
      ]
    },
    code: {
      patterns: [
        {include: '#blockComment'},
        {include: '#comment'},
        {include: '#block'},
        {include: '#keyword'},
        {include: '#constant'},
        {include: '#variable'},
        {include: '#string'},
        {include: '#function'},
        {include: '#static_function'},
        {include: '#static_constant'}
      ]
    },
    comment: {match: '//.*', name: 'comment.line.wren'},
    constant: {
      patterns: [
        {match: '\\b(true|false|null)\\b', name: 'constant.language.wren'},
        {
          match: '\\b(0x[0-9a-fA-F]*|[0-9]+(\\.?[0-9]*)?(e(\\+|-)?[0-9]+)?)\\b',
          name: 'constant.numeric.wren'
        },
        {match: '0x[A-Fa-f0-9]+', name: 'constant.numeric.hexadecimal.wren'}
      ]
    },
    foreignMethod: {
      begin:
        '\\b(foreign)\\s+(?:\\b(construct|static)\\s+)?(\\w+=|\\w+|\\+|-|\\*|\\/|%|<=?|>=?|==|!=?|&|\\||~)',
      beginCaptures: {
        1: {name: 'storage.modifier.wren'},
        2: {name: 'storage.modifier.wren'},
        3: {name: 'entity.name.function.wren'}
      },
      end: '\n',
      name: 'meta.method.wren',
      patterns: [
        {include: '#comment'},
        {
          begin: '\\(',
          end: '\\)',
          name: 'meta.method.identifier.wren',
          patterns: [{match: '\\w+', name: 'variable.parameter.function.wren'}]
        }
      ]
    },
    function: {
      captures: {1: {name: 'entity.name.function.wren'}},
      match: '(?:[.]|\\b)(\\w+)\\(',
      name: 'meta.function.wren'
    },
    keyword: {
      patterns: [
        {
          match: '\\b(?:break|else|for|if|import|in|return|while|var)\\b',
          name: 'keyword.control.wren'
        },
        {match: '\\b(is)\\b', name: 'keyword.operator.wren'},
        {match: '!|&&|\\|\\|', name: 'keyword.operator.logical.wren'},
        {match: '(\\.\\.\\.?)', name: 'keyword.operator.range.wren'},
        {match: '(\\-|\\+|\\*|/|%)', name: 'keyword.operator.arithmetic.wren'},
        {match: '(==|!=|<=|>=|<|>)', name: 'keyword.operator.comparison.wren'},
        {match: '(=)', name: 'keyword.operator.assignment.wren'}
      ]
    },
    method: {
      begin:
        '(?:\\b(construct|static)\\s+)?(\\w+=|\\w+|\\+|-|\\*|\\/|%|<=?|>=?|==|!=?|&|\\||~)',
      beginCaptures: {
        1: {name: 'storage.modifier.wren'},
        2: {name: 'entity.name.function.wren'}
      },
      end: '}',
      name: 'meta.method.wren',
      patterns: [
        {
          begin: '\\(',
          end: '\\)',
          name: 'meta.method.identifier.wren',
          patterns: [{match: '\\w+', name: 'variable.parameter.function.wren'}]
        },
        {
          begin: '{',
          end: '(?=})',
          name: 'meta.method.body.wren',
          patterns: [{include: '#code'}]
        }
      ]
    },
    static_constant: {
      captures: {
        1: {name: 'entity.name.type.wren'},
        2: {name: 'variable.other.constant'}
      },
      match: '\\b([A-Z]+\\w*)[.](\\w+)\\b',
      name: 'meta.static_constant.wren'
    },
    static_function: {
      captures: {
        1: {name: 'entity.name.type.wren'},
        2: {name: 'entity.name.function.class.wren'}
      },
      match: '\\b([A-Z]+\\w*)[.](\\w+)\\(',
      name: 'meta.static_function.wren'
    },
    string: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.wren',
      patterns: [{include: '#stringEscapes'}]
    },
    stringEscapes: {
      patterns: [
        {
          match:
            '\\\\(?:[0"\\abfnrtv]|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{4})',
          name: 'constant.character.escape.wren'
        },
        {
          match:
            '\\\\(?:x[0-9A-Fa-f]{0,1}|u[0-9A-Fa-f]{0,3}|U[0-9A-Fa-f]{0,7}|.)',
          name: 'invalid.illegal.unknown-escape.wren'
        },
        {match: '%\\((.*?)\\)', name: 'constant.character.interpolation.wren'}
      ]
    },
    subscriptOperator: {
      begin: '\\[',
      beginCaptures: {0: {name: 'entity.name.function.wren'}},
      end: '}',
      name: 'meta.method.wren',
      patterns: [
        {
          begin: '\\w',
          beginCaptures: {0: {name: 'variable.parameter.function.wren'}},
          end: '\\]',
          endCaptures: {0: {name: 'entity.name.function.wren'}},
          name: 'meta.method.identifier.wren',
          patterns: [{match: '\\w+', name: 'variable.parameter.function.wren'}]
        },
        {
          begin: '{',
          end: '(?=})',
          name: 'meta.method.body.wren',
          patterns: [{include: '#code'}]
        }
      ]
    },
    variable: {
      patterns: [
        {match: '\\b(this|super)\\b', name: 'variable.language.wren'},
        {match: '\\b__\\w*', name: 'variable.other.class.wren'},
        {match: '\\b_\\w*', name: 'variable.other.instance.wren'}
      ]
    }
  },
  scopeName: 'source.wren'
}

export default grammar
