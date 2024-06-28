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
  injections: {
    'source.ini.npmrc': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.section.embedded.begin.ini.npmrc'},
            2: {name: 'constant.language.environment.variable.ini.npmrc'},
            3: {name: 'punctuation.section.embedded.end.ini.npmrc'}
          },
          match: '(\\${)(.*?)(})',
          name: 'source.shell.embedded.ini.npmrc'
        }
      ]
    },
    'source.ini.npmrc meta.field.message string.quoted': {
      patterns: [
        {match: '%s', name: 'constant.other.placeholder.format.ini.npmrc'}
      ]
    },
    'source.ini.npmrc string.quoted': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.bracket.curly.begin.ini.npmrc'},
            2: {name: 'entity.name.variable.begin.ini.npmrc'},
            3: {name: 'punctuation.definition.bracket.curly.end.ini.npmrc'}
          },
          match: '({)\\s*([^{}\\s]+)\\s*(})',
          name: 'string.interpolated.ini.npmrc'
        }
      ]
    }
  },
  names: ['npm-config', 'npmrc'],
  patterns: [{include: '#main'}],
  repository: {
    comment: {
      patterns: [
        {
          begin: ';',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.ini.npmrc'}
          },
          end: '$',
          name: 'comment.line.semicolon.ini.npmrc'
        },
        {
          begin: '#',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.ini.npmrc'}
          },
          end: '$',
          name: 'comment.line.number-sign.ini.npmrc'
        }
      ]
    },
    field: {
      begin: '(?:^|\\G)\\s*([^\\s=]+)\\s*(=)',
      beginCaptures: {
        1: {name: 'variable.assignment.field-name.ini.npmrc'},
        2: {patterns: [{include: 'etc#eql'}]}
      },
      end: '$|(?=\\s*[#;])',
      name: 'meta.field.$1-field.ini.npmrc',
      patterns: [{include: '#fieldValues'}]
    },
    fieldValues: {
      patterns: [
        {include: 'etc#str'},
        {include: 'etc#bool'},
        {include: 'etc#esc'},
        {include: 'etc#num'},
        {match: 'NaN', name: 'constant.language.numeric.nan.ini.npmrc'},
        {match: 'null', name: 'constant.language.null.ini.npmrc'},
        {match: 'undefined', name: 'constant.language.undefined.ini.npmrc'},
        {
          match: '[-+]?Infinity',
          name: 'constant.language.numeric.infinity.ini.npmrc'
        }
      ]
    },
    ipAddrField: {
      begin: '(?:^|\\G)\\s*(local-address)\\s*(=)',
      beginCaptures: {
        1: {name: 'variable.assignment.field-name.ini.npmrc'},
        2: {patterns: [{include: 'etc#eql'}]}
      },
      end: '$|(?=\\s*[#;])',
      name: 'meta.field.$1.ini.npmrc',
      patterns: [{include: 'etc#ip'}, {include: '#fieldValues'}]
    },
    logstreamField: {
      begin: '(?:^|\\G)\\s*(logstream)\\s*(=)',
      beginCaptures: {
        1: {name: 'variable.assignment.field-name.ini.npmrc'},
        2: {patterns: [{include: 'etc#eql'}]}
      },
      end: '$|(?=\\s*[#;])',
      name: 'meta.field.$1.ini.npmrc',
      patterns: [
        {
          match: '(?=[\\w$])[^\\s#;]+',
          name: 'constant.language.other.logstream.ini.npmrc'
        },
        {include: '#fieldValues'}
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#pathField'},
        {include: '#urlField'},
        {include: '#versionField'},
        {include: '#ipAddrField'},
        {include: '#logstreamField'},
        {include: '#messageField'},
        {include: '#field'}
      ]
    },
    messageField: {
      begin: '(?:^|\\G)\\s*(message)\\s*(=)',
      beginCaptures: {
        1: {name: 'variable.assignment.field-name.ini.npmrc'},
        2: {patterns: [{include: 'etc#eql'}]}
      },
      end: '$|(?=\\s*[#;])',
      name: 'meta.field.message.ini.npmrc',
      patterns: [{include: '#fieldValues'}]
    },
    pathField: {
      begin:
        '(?x)\n(?:^|\\G) \\s*\n(cache|cafile|editor|global(?:config|ignore)(?:file)?\n|init-module|onload-script|prefix|script-shell|shell\n|tmp|userconfig|viewer)\n\\s* (=)',
      beginCaptures: {
        1: {name: 'variable.assignment.field-name.ini.npmrc'},
        2: {patterns: [{include: 'etc#eql'}]}
      },
      end: '$|(?=\\s*[#;])',
      name: 'meta.field.$1-path.ini.npmrc',
      patterns: [
        {include: '#fieldValues'},
        {match: '[^\\s#;]+', name: 'string.unquoted.pathname.ini.npmrc'}
      ]
    },
    urlField: {
      begin:
        '(?x)\n(?:^|\\G) \\s*\n((?:https-)?proxy|(?:metrics-)?registry)\n\\s* (=)',
      beginCaptures: {
        1: {name: 'variable.assignment.field-name.ini.npmrc'},
        2: {patterns: [{include: 'etc#eql'}]}
      },
      end: '$|(?=\\s*[#;])',
      name: 'meta.field.$1-url.ini.npmrc',
      patterns: [{include: 'etc#url'}]
    },
    versionField: {
      begin: '(?:^|\\G)\\s*((?:init|node)-version)\\s*(=)',
      beginCaptures: {
        1: {name: 'variable.assignment.field-name.ini.npmrc'},
        2: {patterns: [{include: 'etc#eql'}]}
      },
      end: '$|(?=\\s*[#;])',
      name: 'meta.field.$1.ini.npmrc',
      patterns: [{include: 'etc#version'}, {include: '#fieldValues'}]
    }
  },
  scopeName: 'source.ini.npmrc'
}

export default grammar
