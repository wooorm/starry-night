// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.reg'],
  names: ['windows-registry-entries'],
  patterns: [
    {match: ';.*$', name: 'comment.reg'},
    {
      match: 'Windows Registry Editor Version \\d.\\d\\d',
      name: 'meta.doctype.reg'
    },
    {
      captures: {
        2: {name: 'keyword.reg'},
        3: {name: 'punctuation.separator.key-value.reg'},
        5: {name: 'keyword.operator.reg'},
        6: {name: 'language.constant.boolean.reg'}
      },
      match: '^((@)|\\".*\\")(=)((\\-)|\\s*(0|1)\\s*$|)'
    },
    {captures: {1: {name: 'keyword.reg'}}, match: '(\\\\)$'},
    {
      begin: '\\"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.reg'}},
      end: '\\"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.reg'}},
      name: 'string.quoted.double.reg',
      patterns: [{match: '\\\\\\\\', name: 'constant.character.escape.reg'}]
    },
    {
      captures: {
        1: {name: 'storage.type.reg'},
        3: {name: 'constant.numeric.reg'},
        4: {name: 'keyword.operator.reg'}
      },
      match: '(hex)(|\\(([ABab0-9])\\))(:)'
    },
    {
      captures: {
        1: {name: 'storage.type.reg'},
        2: {name: 'keyword.operator.reg'},
        3: {name: 'constant.numeric.reg'}
      },
      match: '(dword)(:)([ABCDEFabcdef0-9]{1,8})\\s*$'
    },
    {
      begin: '(\\[)(\\s*\\n)*(-){0,1}(\\s*\\n)*',
      beginCaptures: {
        1: {name: 'meta.brace.square.reg'},
        3: {name: 'keyword.operator.reg'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'meta.brace.square.reg'}},
      name: '.meta.section.key-path.reg',
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.hive-name.reg'},
            2: {name: 'language.constant.standard-key.reg'}
          },
          match: '(HKEY_CURRENT_CONFIG|HKCC)\\\\(Software|System)'
        },
        {
          captures: {
            1: {name: 'keyword.other.hive-name.reg'},
            2: {name: 'language.constant.standard-key.reg'}
          },
          match:
            '(HKEY_CURRENT_USER|HKCU)\\\\(AppEvents|AppXBackupContentType|Console|Control Panel|Environment|EUDC|Keyboard Layout|Network|Printers|Software|System|Volatile Environment)'
        },
        {
          captures: {
            1: {name: 'keyword.other.hive-name.reg'},
            2: {name: 'language.constant.standard-key.reg'}
          },
          match:
            '(HKEY_LOCAL_MACHINE|HKLM)\\\\(BCD00000000|DRIVERS|HARDWARE|SAM|SECURITY|SOFTWARE|SYSTEM)'
        },
        {
          captures: {
            1: {name: 'keyword.other.hive-name.reg'},
            2: {name: 'language.constant.standard-key.reg'},
            3: {name: 'language.constant.standard-key.reg'}
          },
          match:
            '(HKEY_USERS|HKU)\\\\(.DEFAULT)\\\\(AppEvents|AppXBackupContentType|Console|Control Panel|Environment|EUDC|Keyboard Layout|Network|Printers|Software|System|Volatile Environment)'
        },
        {
          match:
            '(HKEY_CLASSES_ROOT|HKCR|HKEY_CURRENT_CONFIG|HKCC|HKEY_CURRENT_USER|HKCU|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKLM|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKU)',
          name: 'keyword.other.hive-name.reg'
        }
      ]
    }
  ],
  scopeName: 'source.reg'
}

export default grammar
