// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/atmarksharp/jasmin-sublime>
// and licensed `wtfpl`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  extensionsWithDot: ['.j'],
  names: ['jasmin'],
  patterns: [
    {include: '#class-def'},
    {include: '#interface-def'},
    {include: '#super-def'},
    {include: '#implements-def'},
    {include: '#method-def'},
    {include: '#field-def'},
    {include: '#var-def'},
    {include: '#comment'},
    {include: '#directive'},
    {include: '#modifier'},
    {include: '#type-descriptor'},
    {include: '#double-string'},
    {include: '#number'},
    {include: '#label'},
    {include: '#true-false-null'},
    {include: '#control'}
  ],
  repository: {
    'class-def': {
      begin: '(?=\\.class)',
      end: '$',
      patterns: [
        {include: '#comment'},
        {include: '#modifier'},
        {include: '#directive'},
        {
          captures: {1: {name: 'entity.name.type.jasmin'}},
          match: '([\\w/]+)(?=$|\\s+(?:;.*)?$)'
        }
      ]
    },
    comment: {match: '(?<=^|[ \t]);.*', name: 'comment.line.jasmin'},
    control: {
      match: '(?<=^|\\s)return(?=$|\\s)',
      name: 'keyword.control.jasmin'
    },
    directive: {
      match:
        '(?<=^|\\s)\\.(?:catch|class|end method|field|implements|interface|limit|line|method|source|super|throws|var)(?=$|\\s)',
      name: 'keyword.meta.directive.jasmin'
    },
    'double-string': {
      begin: '"',
      beginCaptures: {0: {name: 'string.begin.jasmin'}},
      end: '"',
      endCaptures: {0: {name: 'string.end.jasmin'}},
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.jasmin'},
        {match: '.', name: 'string.double.jasmin'}
      ]
    },
    'field-def': {
      begin: '(?=\\.field)',
      end: '$',
      patterns: [
        {include: '#comment'},
        {include: '#modifier'},
        {include: '#directive'},
        {include: '#number'},
        {include: '#double-string'},
        {include: '#type-descriptor'},
        {
          captures: {
            1: {name: 'variable.parameter.jasmin'},
            2: {name: 'storage.type.type-descriptor.jasmin'}
          },
          match:
            '([\\w/]+)\\s+((?:\\[+)?(?:L[/\\w_]+;|[BCDFIJSZV]))(?=(\\s+)?[=]|(\\s+)?$|\\s+;)'
        }
      ]
    },
    'implements-def': {
      begin: '(?=\\.implements)',
      end: '$',
      patterns: [
        {include: '#comment'},
        {
          captures: {
            1: {name: 'keyword.meta.directive.jasmin'},
            2: {name: 'entity.other.inherited-class.jasmin'}
          },
          match: '(\\.implements)\\s+([\\w/]+)'
        }
      ]
    },
    'interface-def': {
      begin: '(?=\\.interface)',
      end: '$',
      patterns: [
        {include: '#comment'},
        {include: '#modifier'},
        {include: '#directive'},
        {
          captures: {1: {name: 'entity.name.type.jasmin'}},
          match: '([\\w/]+)(?=$|\\s+(?:;.*)?$)'
        }
      ]
    },
    label: {match: '^[^0-9][^=^:."-]*:', name: 'keyword.meta.label.jasmin'},
    'method-def': {
      begin: '(?=\\.method)',
      end: '$',
      patterns: [
        {include: '#comment'},
        {include: '#modifier'},
        {include: '#directive'},
        {include: '#type-descriptor'},
        {
          captures: {1: {name: 'entity.name.function.jasmin'}},
          match: '([\\w/<>]+)(?=\\()'
        }
      ]
    },
    modifier: {
      match:
        '(?<=^|\\s)(?:final|static|abstract|public|friend|protected|private)(?=$|\\s)',
      name: 'storage.modifier.jasmin'
    },
    number: {
      match:
        '(?<=^|[\\s(,=])[-+]?(?:[1-9][0-9]*|[-+]?(?:0?\\.|[1-9]\\.)[0-9]+|0x[0-9A-F]+|0)(?=$|[\\s,)=])',
      name: 'constant.numeric.jasmin'
    },
    'super-def': {
      begin: '(?=\\.super)',
      end: '$',
      patterns: [
        {include: '#comment'},
        {
          captures: {
            1: {name: 'keyword.meta.directive.jasmin'},
            2: {name: 'entity.other.inherited-class.jasmin'}
          },
          match: '(\\.super)\\s+([\\w/]+)'
        }
      ]
    },
    'true-false-null': {
      match: '(?<=^|[\\s(,])(?:null|false|true)(?=$|[\\s,)])',
      name: 'constant.language.jasmin'
    },
    'type-descriptor': {
      match:
        '(?<=^|[\\s()=,])(?:(?:\\[+)?(?:L[/\\w_]+;|[BCDFIJSZV]))(?=$|[\\s,)=])',
      name: 'storage.type.type-descriptor.jasmin'
    },
    'var-def': {
      begin: '(?=\\.var)',
      end: '$',
      patterns: [
        {include: '#comment'},
        {
          captures: {
            1: {name: 'keyword.meta.directive.jasmin'},
            2: {name: 'constant.numeric.jasmin'},
            3: {name: 'keyword.meta.is.jasmin'},
            4: {name: 'variable.parameter.jasmin'},
            5: {name: 'storage.type.type-descriptor.jasmin'},
            6: {name: 'keyword.meta.from.jasmin'},
            7: {name: 'keyword.meta.to.jasmin'}
          },
          match:
            '(\\.var)\\s+([1-9][0-9]*|[0])\\s+(is)\\s+([\\w_]+)\\s+((?:\\[+)?(?:L[/\\w_]+;|[BCDFIJSZV]))\\s+(from)\\s+(?:[\\w_]+)\\s+(to)\\s+(?:[\\w_]+)'
        }
      ]
    }
  },
  scopeName: 'source.jasmin'
}

export default grammar
