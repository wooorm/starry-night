// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.e'],
  names: ['eiffel'],
  patterns: [
    {
      begin: '(^[ \\t]+)?(?=--)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.eiffel'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '--',
          beginCaptures: {0: {name: 'punctuation.definition.comment.eiffel'}},
          end: '\\n',
          name: 'comment.line.double-dash.eiffel'
        }
      ]
    },
    {
      match:
        '\\b(Indexing|indexing|deferred|expanded|class|inherit|rename|as|export|undefine|redefine|select|all|create|creation|feature|prefix|infix|separate|frozen|obsolete|local|is|unique|do|once|external|alias|require|ensure|invariant|variant|rescue|retry|like|check|if|else|elseif|then|inspect|when|from|loop|until|debug|not|or|and|xor|implies|old|end)\\b',
      name: 'keyword.control.eiffel'
    },
    {match: '[a-zA-Z_]+', name: 'variable.other.eiffel'},
    {
      match: '\\b(True|true|False|false|Void|void|Result|result)\\b',
      name: 'constant.language.eiffel'
    },
    {begin: 'feature', end: 'end', name: 'meta.features.eiffel'},
    {
      begin: '(do|once)',
      end: '(ensure|end)',
      name: 'meta.effective_routine_body.eiffel'
    },
    {begin: 'rescue', end: 'end', name: 'meta.rescue.eiffel'},
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.eiffel'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.eiffel'}},
      name: 'string.quoted.double.eiffel',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.eiffel'}]
    },
    {match: '[0-9]+', name: 'constant.numeric.eiffel'},
    {match: '\\b(deferred|expanded)\\b', name: 'storage.modifier.eiffel'},
    {
      begin:
        '^\\s*\n\t\t\t\t\t((?:\\b(deferred|expanded)\\b\\s*)*) # modifier\n\t\t\t\t\t(class)\\s+\n\t\t\t\t\t(\\w+)\\s* # identifier',
      captures: {1: {name: 'storage.modifier.eiffel'}},
      end: '(?=end)',
      name: 'meta.definition.class.eiffel',
      patterns: [
        {
          begin: '\\b(extends)\\b\\s+',
          captures: {1: {name: 'storage.modifier.java'}},
          end: '(?={|implements)',
          name: 'meta.definition.class.extends.java',
          patterns: [{include: '#all-types'}]
        },
        {
          begin: '\\b(implements)\\b\\s+',
          captures: {1: {name: 'storage.modifier.java'}},
          end: '(?={|extends)',
          name: 'meta.definition.class.implements.java',
          patterns: [{include: '#all-types'}]
        }
      ]
    }
  ],
  repository: {number: {match: '[0-9]+'}, variable: {match: '[a-zA-Z0-9_]+'}},
  scopeName: 'source.eiffel'
}

export default grammar
