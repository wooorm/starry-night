// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/ecere/ec.tmbundle>
// and licensed `unlicense`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.c'],
  extensions: ['.ec', '.eh'],
  names: ['ec'],
  patterns: [
    {include: 'source.c'},
    {
      match:
        '\\b(property|import|delete|new|new0|renew|renew0|define|get|set|remote|dllexport|dllimport|stdcall|subclass|__on_register_module|namespace|using|typed_object|any_object|incref|register|watch|stopwatching|firewatchers|watchable|class_designer|class_fixed|class_no_expansion|isset|class_default_property|property_category|class_data|class_property|virtual|thisclass|dbtable|dbindex|database_open|dbfield|this|value)\\b',
      name: 'keyword.other.ec'
    },
    {match: '\\b(true|false)\\b', name: 'constant.language.boolean.ec'},
    {match: '\\bnull\\b', name: 'constant.language.null.ec'},
    {match: '\\bclass\\b', name: 'storage.type.class.ec'},
    {match: '\\b(private|public)\\b', name: 'storage.modifier.ec'},
    {
      match:
        '\\b(unichar|uint|uint32|uint16|uint64|bool|byte|int64|uintptr|intptr|intsize|uintsize)\\b',
      name: 'storage.type.ec'
    }
  ],
  scopeName: 'source.c.ec'
}

export default grammar
