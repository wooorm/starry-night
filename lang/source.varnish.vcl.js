// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/brandonwamboldt/sublime-varnish>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.vcl'],
  names: ['vcl'],
  patterns: [
    {match: '\\#.*', name: 'comment.line.number-sign.vcl'},
    {match: '\\/\\/.*', name: 'comment.line.double-slash.vcl'},
    {begin: '\\/\\*', end: '\\*\\/', name: 'comment.block.vcl'},
    {
      begin: '\\b(import|include)\\b\\s*',
      beginCaptures: {1: {name: 'keyword.control.import.php'}},
      end: '(?=\\s|;|$)',
      name: 'meta.include.vcl',
      patterns: [{include: '#strings'}]
    },
    {
      begin:
        '(?i)^\\s*(director)\\s+([a-z0-9_]+)\\s+(round\\-robin|random|client|hash|dns|fallback)\\s*\\{',
      captures: {
        1: {name: 'storage.type.director.vcl'},
        2: {name: 'entity.name.type.director.vcl'},
        3: {name: 'storage.type.director.family.vcl'}
      },
      end: '\\}',
      name: 'meta.director.vcl',
      patterns: [{include: '$self'}]
    },
    {
      begin: '(?i)^\\s*(backend)\\s+([a-z0-9_]+)\\s*\\{',
      captures: {
        1: {name: 'storage.type.backend.vcl'},
        2: {name: 'entity.name.type.backend.vcl'}
      },
      end: '\\}',
      name: 'meta.backend.vcl',
      patterns: [{include: '$self'}]
    },
    {
      begin: '(?i)^\\s*(acl)\\s+([a-z0-9_]+)\\s*\\{',
      captures: {
        1: {name: 'storage.type.acl.vcl'},
        2: {name: 'entity.name.type.acl.vcl'}
      },
      end: '\\}',
      name: 'meta.acl.vcl',
      patterns: [{include: '$self'}]
    },
    {
      captures: {
        1: {name: 'storage.type.probe.vcl'},
        2: {name: 'entity.name.type.probe.vcl'}
      },
      match: '(?i)^\\s*(probe)\\s+([a-z0-9_]+)\\s*',
      name: 'meta.probe.vcl'
    },
    {
      begin: '(?i)^\\s*(sub)\\s+([a-z0-9_]+)\\s*\\{',
      captures: {
        1: {name: 'storage.type.subroutine.vcl'},
        2: {name: 'entity.name.type.subroutine.vcl'}
      },
      end: '\\}',
      name: 'meta.subroutine.vcl',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\b(return)\\s*\\(',
      captures: {1: {name: 'keyword.control.vcl'}},
      end: '\\)',
      patterns: [
        {
          match:
            '(deliver|error|fetch|hash|hit_for_pass|lookup|ok|pass|pipe|restart|synth|retry|abandon|fail|purge)',
          name: 'constant.language.return.vcl'
        }
      ]
    },
    {
      begin: '\\b(error)\\b\\s*',
      beginCaptures: {1: {name: 'keyword.control.error'}},
      end: '(?=\\s|;|$)',
      name: 'meta.error.vcl',
      patterns: [{include: '#strings'}, {include: '#numbers'}]
    },
    {
      captures: {1: {name: 'keyword.control.php'}},
      match: '\\b(set|unset|remove|synthetic|call|if|else|elsif|else if)\\b'
    },
    {include: '#variables'},
    {include: '#numbers'},
    {include: '#strings'},
    {include: '#functions'},
    {include: '#constants'},
    {include: '#subkeys'},
    {include: '#blocks'}
  ],
  repository: {
    blocks: {
      patterns: [{begin: '\\{', end: '\\}', patterns: [{include: '$self'}]}]
    },
    constants: {
      patterns: [
        {match: '\\b(true|false|now)\\b', name: 'constant.builtin.vcl'}
      ]
    },
    functions: {
      patterns: [
        {
          match: '(hash_data|regsuball|regsub|ban_url|ban|purge|synth)',
          name: 'support.function.builtin.vcl'
        },
        {
          match:
            'std\\.(log|toupper|tolower|set_ip_tos|random|log|syslog|fileread|collect|duration|integer|ip)',
          name: 'support.function.module.std.vcl'
        },
        {
          match: 'redis[0-9]?\\.(call|send|pipeline|init_redis)',
          name: 'support.function.module.libvmodredis.vcl'
        }
      ]
    },
    numbers: {
      patterns: [
        {match: '\\b[0-9]+ ?(m|s|h|d|w)\\b', name: 'constant.numeric.time.vcl'},
        {match: '\\b[0-9]+(\\b|;)', name: 'constant.numeric.vcl'}
      ]
    },
    'string-double-quoted': {
      patterns: [
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.vcl'}},
          contentName: 'meta.string-contents.quoted.double.vcl',
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.vcl'}},
          name: 'string.quoted.double.vcl',
          patterns: [
            {match: '\\\\[\\\\"]', name: 'constant.character.escape.vcl'}
          ]
        }
      ]
    },
    'string-long': {
      patterns: [
        {
          begin: '\\{"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.vcl'}},
          contentName: 'meta.string-contents.quoted.double.vcl',
          end: '"\\}',
          endCaptures: {0: {name: 'punctuation.definition.string.end.vcl'}},
          name: 'string.quoted.long.vcl'
        }
      ]
    },
    'string-single-quoted': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.vcl'}},
      contentName: 'meta.string-contents.quoted.single.vcl',
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.vcl'}},
      name: 'string.quoted.single.vcl',
      patterns: [{match: "\\\\[\\\\']", name: 'constant.character.escape.vcl'}]
    },
    strings: {
      patterns: [
        {include: '#string-long'},
        {include: '#string-single-quoted'},
        {include: '#string-double-quoted'}
      ]
    },
    subkeys: {
      patterns: [
        {
          match:
            '\\.(max_connections|first_byte_timeout|between_bytes_timeout|probe|host_header|retries|backend|weight|host|list|port|connect_timeout|ttl|suffix|url|request|window|threshold|initial|expected_response|interval|timeout)\\b',
          name: 'variable.subkey.vcl'
        }
      ]
    },
    variables: {
      patterns: [
        {
          match:
            '(req|bereq|obj|beresp|client|server|resp)\\.[a-zA-Z0-9\\-\\_\\.]+',
          name: 'variable.other.vcl'
        }
      ]
    }
  },
  scopeName: 'source.varnish.vcl'
}

export default grammar
