// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/microsoft/vscode-python>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['pip-requirements'],
  patterns: [
    {match: '\\s*\\\\s*$', name: 'constant.character.escape'},
    {match: '#.*', name: 'comment.line.number-sign'},
    {begin: "'", end: "'", name: 'string.quoted.single'},
    {begin: '"', end: '"', name: 'string.quoted.double'},
    {match: '/?(\\S+/)+\\S*', name: 'string.path'},
    {
      captures: {1: {name: 'entity.name.class'}},
      match: '^\\s*([A-Za-z0-9][A-Za-z0-9._-]*[A-Za-z0-9]|[A-Za-z0-9])'
    },
    {captures: {1: {name: 'entity.name.tag'}}, match: '\\[([^\\]]+)\\]'},
    {
      captures: {
        1: {name: 'keyword.operator.comparison'},
        2: {name: 'constant.numeric'}
      },
      match: '(<|<=|!=|==|>=|>|~=|===)\\s*([\\w.*+!-]+)'
    },
    {
      captures: {
        1: {name: 'entity.name.selector'},
        2: {name: 'keyword.operator.comparison'}
      },
      match:
        ';\\s*(python_version|python_full_version|os_name|sys_platform|platform_release|platform_system|platform_version|platform_machine|platform_python_implementation|implementation_name|implementation_version|extra)\\s*(<|<=|!=|==|>=|>|~=|===)'
    },
    {match: '-[^\\s=]+', name: 'entity.other.attribute-name'}
  ],
  scopeName: 'source.pip-requirements'
}

export default grammar
