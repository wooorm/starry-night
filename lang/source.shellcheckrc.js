// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['etc'],
  extensions: [],
  names: ['shellcheck-config', 'shellcheckrc'],
  patterns: [
    {
      begin: '(?<=#)\\s*(shellcheck)\\s+(?=[a-z]+=)',
      beginCaptures: {1: {name: 'directive.name.keyword.shellcheckrc'}},
      end: '(?=\\s*$)|(\\S*)(?=[\\)\\]}>"\'`])',
      endCaptures: {1: {patterns: [{include: '#directive'}]}},
      name: 'directive.shellcheckrc',
      patterns: [{include: '#directive'}]
    },
    {begin: '\\A', end: '(?=A)B', patterns: [{include: '#main'}]}
  ],
  repository: {
    comment: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.shellcheckrc'}},
      end: '$',
      name: 'comment.line.number-sign.shellcheckrc'
    },
    directive: {
      begin: '(\\w[-\\w]*)(=)',
      beginCaptures: {
        1: {name: 'variable.parameter.directive.shellcheckrc'},
        2: {name: 'punctuation.definition.assignment.equals-sign.shellcheckrc'}
      },
      end: '(?=$|\\s)',
      name: 'meta.directive.$1.shellcheckrc',
      patterns: [
        {
          begin:
            '(?x)(?<= \\s disable= | \\s enable=  | ^   disable= | ^   enable= )\\G',
          end: '(?=$|\\s)',
          name: 'meta.list.shellcheckrc',
          patterns: [
            {
              match: '\\Gall(?=$|\\s)',
              name: 'keyword.operator.all-warnings.shellcheckrc'
            },
            {include: '#errorCodeRange'},
            {include: '#errorCode'},
            {include: '#warningName'},
            {include: 'etc#comma'}
          ]
        },
        {
          begin: '(?x)(?<= \\s source-path= | ^   source-path= )\\G',
          end: '(?=$|\\s)',
          name: 'string.other.file.path.shellcheckrc',
          patterns: [
            {
              match: '\\bSCRIPTDIR\\b',
              name: 'variable.environment.language.shellcheckrc'
            }
          ]
        },
        {
          begin: '(?x)(?<= \\s shell= | ^   shell= )\\G',
          end: '(?=$|\\s)',
          name: 'entity.name.shell.shellcheckrc',
          patterns: [{include: '#escape'}]
        },
        {
          begin: '(?x)(?<= \\s external-sources= | ^   external-sources= )\\G',
          end: '(?=$|\\s)',
          patterns: [
            {
              match: '\\G(true|false)(?=$|\\s)',
              name: 'constant.language.boolean.$1.shellcheckrc'
            },
            {include: '#escape'}
          ]
        },
        {
          begin: '\\G(?=\\S)',
          end: '(?=$|\\s)',
          name: 'string.unquoted.other.shellcheckrc'
        }
      ]
    },
    errorCode: {
      captures: {0: {name: 'markup.underline.link.error-code.shellcheckrc'}},
      match: '\\bSC[0-9]{4}\\b',
      name: 'constant.numeric.error-code.shellcheckrc'
    },
    errorCodeRange: {
      captures: {
        1: {
          name: 'meta.range.begin.shellcheckrc',
          patterns: [{include: '#errorCode'}]
        },
        2: {name: 'punctuation.separator.range.dash.shellcheckrc'},
        3: {
          name: 'meta.range.end.shellcheckrc',
          patterns: [{include: '#errorCode'}]
        }
      },
      match: '\\b(SC[0-9]{4})(-)(SC[0-9]{4})\\b',
      name: 'meta.range.error-codes.shellcheckrc'
    },
    escape: {
      match: '(\\\\).',
      name: 'constant.character.escape.backslash.shellcheckrc'
    },
    main: {patterns: [{include: '#comment'}, {include: '#directive'}]},
    warningName: {
      captures: {0: {patterns: [{include: '#escape'}]}},
      match: '(?:[^\\\\\\s=#,]|\\\\.)+',
      name: 'constant.other.warning-name.shellcheckrc'
    }
  },
  scopeName: 'source.shellcheckrc'
}

export default grammar
