// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/saltstack/atom-salt>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.python'],
  extensions: ['.sls'],
  names: ['saltstack', 'saltstate', 'salt'],
  patterns: [
    {include: '#jinja-control'},
    {include: '#jinja-value'},
    {
      begin: '^(\\s*)(?:(-)|(?:(-\\s*)?(\\w+\\s*(:))))\\s*(\\||>)',
      beginCaptures: {
        2: {name: 'punctuation.definition.entry.yaml'},
        3: {name: 'punctuation.definition.entry.yaml'},
        4: {name: 'entity.name.tag.yaml'},
        5: {name: 'punctuation.separator.key-value.yaml'}
      },
      end: '^(?!^\\1)|^(?=\\1(-|\\w+\\s*:)|#)',
      name: 'string.unquoted.block.yaml',
      patterns: [{include: '#jinja-control'}, {include: '#jinja-value'}]
    },
    {
      captures: {
        1: {name: 'punctuation.definition.entry.yaml'},
        2: {name: 'entity.name.tag.yaml'},
        3: {name: 'punctuation.separator.key-value.yaml'},
        4: {name: 'punctuation.definition.entry.yaml'}
      },
      match:
        '(?:(?:(-\\s*)?(\\w+\\s*(:)))|(-))\\s*((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f)?\\s*$',
      name: 'constant.numeric.yaml'
    },
    {
      captures: {
        1: {name: 'punctuation.definition.entry.yaml'},
        10: {name: 'punctuation.definition.string.end.yaml'},
        11: {name: 'string.unquoted.yaml'},
        2: {name: 'entity.name.tag.yaml'},
        3: {name: 'punctuation.separator.key-value.yaml'},
        4: {name: 'punctuation.definition.entry.yaml'},
        5: {name: 'string.quoted.double.yaml'},
        6: {name: 'punctuation.definition.string.begin.yaml'},
        7: {name: 'punctuation.definition.string.end.yaml'},
        8: {name: 'string.quoted.single.yaml'},
        9: {name: 'punctuation.definition.string.begin.yaml'}
      },
      match:
        '(?:(?:(-\\s*)?(\\w+\\s*(:)))|(-))\\s*(?:((")[^"]*("))|((\')[^\']*(\'))|([^,{}&#\\[\\]]+))\\s*',
      name: 'string.unquoted.yaml'
    },
    {
      captures: {
        1: {name: 'punctuation.definition.entry.yaml'},
        2: {name: 'entity.name.tag.yaml'},
        3: {name: 'punctuation.separator.key-value.yaml'},
        4: {name: 'punctuation.definition.entry.yaml'}
      },
      match:
        '(?:(?:(-\\s*)?(\\w+\\s*(:)))|(-))\\s*([0-9]{4}-[0-9]{2}-[0-9]{2})\\s*$',
      name: 'constant.other.date.yaml'
    },
    {
      captures: {
        1: {name: 'entity.name.tag.yaml'},
        2: {name: 'punctuation.separator.key-value.yaml'},
        3: {name: 'keyword.other.omap.yaml'},
        4: {name: 'punctuation.definition.keyword.yaml'}
      },
      match: '(\\w.*?)(:)\\s*((\\!\\!)omap)?',
      name: 'meta.tag.yaml'
    },
    {
      captures: {1: {name: 'punctuation.definition.variable.yaml'}},
      match: '(\\&|\\*)\\w.*?$',
      name: 'variable.other.yaml'
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.yaml'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.yaml'}},
      name: 'string.quoted.double.yaml',
      patterns: [
        {include: '#escaped_char'},
        {include: '#jinja-control'},
        {include: '#jinja-value'}
      ]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.yaml'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.yaml'}},
      name: 'string.quoted.single.yaml',
      patterns: [
        {include: '#escaped_char'},
        {include: '#jinja-control'},
        {include: '#jinja-value'}
      ]
    },
    {
      begin: '`',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.yaml'}},
      end: '`',
      endCaptures: {0: {name: 'punctuation.definition.string.end.yaml'}},
      name: 'string.interpolated.yaml',
      patterns: [{include: '#escaped_char'}, {include: '#jinja-control'}]
    },
    {
      captures: {
        1: {name: 'entity.name.tag.yaml'},
        2: {name: 'keyword.operator.merge-key.yaml'},
        3: {name: 'punctuation.definition.keyword.yaml'}
      },
      match: '(\\<\\<): ((\\*).*)$',
      name: 'keyword.operator.merge-key.yaml'
    },
    {
      begin: '(^[ \\t]+)?(?<!\\$)(?=#)(?!#\\{)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.yaml'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.yaml'}},
          end: '\\n',
          name: 'comment.line.number-sign.yaml'
        }
      ]
    },
    {match: '-', name: 'keyword.operator.symbol'},
    {
      begin: '^(?=\\t)',
      end: '(?=[^\\t])',
      name: 'meta.leading-tabs.yaml',
      patterns: [
        {
          captures: {1: {name: 'meta.odd-tab'}, 2: {name: 'meta.even-tab'}},
          match: '(\\t)(\\t)?'
        }
      ]
    }
  ],
  repository: {
    escaped_char: {match: '\\\\.', name: 'constant.character.escape.yaml'},
    'jinja-control': {
      begin: '\\{%+(?!>)=?',
      beginCaptures: {0: {name: 'punctuation.definition.embedded.begin.jinja'}},
      contentName: 'source.python',
      end: '(%)\\}',
      endCaptures: {0: {name: 'punctuation.definition.embedded.end.jinja'}},
      name: 'meta.embedded.line.jinja',
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.jinja'}},
          match: '(#).*?(?=%>)',
          name: 'comment.line.number-sign.jinja'
        },
        {include: 'source.python'}
      ]
    },
    'jinja-value': {
      begin: '\\{\\{(?!\\})',
      beginCaptures: {
        0: {name: 'punctuation.definition.embedded.begin.jinja-value'}
      },
      contentName: 'source.python',
      end: '\\}\\}',
      endCaptures: {
        0: {name: 'punctuation.definition.embedded.end.jinja-value'}
      },
      name: 'meta.embedded.line.jinja',
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.jinja-value'}},
          match: '(#).*?(?=%>)',
          name: 'comment.line.number-sign.jinja-value'
        },
        {include: 'source.python'}
      ]
    }
  },
  scopeName: 'source.yaml.salt'
}

export default grammar
