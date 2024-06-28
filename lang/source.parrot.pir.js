// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pir'],
  names: ['parrot-internal-representation', 'pir'],
  patterns: [
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.pir'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.pir'}},
      name: 'string.quoted.double.pir',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.pir'}]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.pir'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.pir'}},
      name: 'string.quoted.single.pir',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.pir'}]
    },
    {match: '\\b(print|save|restore)\\b', name: 'support.function.pir'},
    {
      match: '(if|unless|goto|\\.return|\\.end|\\.emit|\\.eot)',
      name: 'keyword.control.pir'
    },
    {
      match:
        '(\\.(pcc_begin|pcc_end|pcc_call|nci_call|invocant|meth_call|arg|result|pcc_begin_return|pcc_end_return|pcc_begin_yield|pcc_end_yield|yield))',
      name: 'keyword.control.pcc.pir'
    },
    {match: '([SNIP]\\d+)', name: 'variable.other.register.pir'},
    {match: '(\\$[SNIP]\\d+)', name: 'variable.other.register.symbolic.pir'},
    {match: '^\\s*(\\S+:)\\s*', name: 'keyword.other.label.pir'},
    {
      match: '(int|float|string|pmc|array|\\.Array|\\.Sub)',
      name: 'storage.type.pir'
    },
    {match: '\\.(namespace|endnamespace)', name: 'storage.type.pir'},
    {
      match: '\\.(local|arg|lex|param|global|const)',
      name: 'storage.modifier.pir'
    },
    {match: '!|-|~', name: 'keyword.operator.unary.pir'},
    {
      captures: {
        1: {name: 'storage.type.sub.pir'},
        2: {name: 'entity.name.function.pir'},
        3: {name: 'keyword.other.sub_pragma.pir'},
        4: {name: 'keyword.other.vtable_pragma.pir'},
        5: {name: 'keyword.other.multi_pragma.pir'},
        6: {name: 'keyword.other.outer_pragma.pir'}
      },
      match:
        '(?x)\n\t\t\t\t\\s* (\\.sub) \\s+ ([_a-zA-Z](?:[_a-zA-Z0-9]+)?)\n\t\t\t\t(?:\\s+\n\t\t\t\t\t(?: (:(?:load|init|immediate|postcomp|main|anon|lex)) #sub_pragma\n\t\t\t\t\t| (:vtable \\s* (?: \\("\\S+"\\) )? ) #vtable_pragma\n\t\t\t\t\t| (:multi  \\s* (?: \\( \\))? ) #multi_pragma\n\t\t\t\t\t| (:outer  \\s* (?: \\( \\))? ) #outer_pragma\n\t\t\t\t\t)\\s+\n\t\t\t\t)*',
      name: 'meta.function.pir'
    },
    {
      match: '\\+|-|/|\\*\\*|\\*|%|<<|>>|<>|&&|\\|\\||~~|\\||&|~|\\.',
      name: 'keyword.operator.binary.pir'
    },
    {
      match: '\\+=|-=|\\=|%=|\\*=|\\.=|&=|\\|=|~=|<<=|>>=|<>=',
      name: 'keyword.operator.assign.pir'
    },
    {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.pir'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.pir'}},
          end: '\\n',
          name: 'comment.line.number-sign.pir'
        }
      ]
    },
    {
      match: '\\b([_a-zA-Z]([_a-zA-Z0-9]+)?)\\b',
      name: 'variable.other.identifier.pir'
    }
  ],
  scopeName: 'source.parrot.pir'
}

export default grammar
