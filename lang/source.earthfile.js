// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/earthly/earthfile-grammar>
// and licensed `mpl-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['earthly', 'earthfile'],
  patterns: [
    {include: '#comment'},
    {include: '#constant'},
    {include: '#entity'},
    {include: '#keyword'},
    {include: '#string'},
    {include: '#variable'},
    {include: '#target'},
    {include: '#function'}
  ],
  repository: {
    comment: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.whitespace.comment.leading.earthfile'},
            2: {name: 'comment.line.number-sign.earthfile'},
            3: {name: 'punctuation.definition.comment.earthfile'}
          },
          match: '^(\\s*)((#).*$\\n?)'
        },
        {match: '(\\s+)((#).*$\\n?)', name: 'comment.line.earthfile'},
        {
          captures: {2: {name: 'comment.line.number-sign.earthfile'}},
          match: '([\\\\\\s]+)((#).*$\\n?)'
        }
      ]
    },
    constant: {
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.earthfile'},
        {match: '\\\\$', name: 'constant.character.escape.earthfile'},
        {match: '(?<=EXPOSE\\s)(\\d+)', name: 'constant.numeric.earthfile'}
      ]
    },
    entity: {
      patterns: [
        {
          match: '([a-zA-Z0-9._\\-/:]*\\+[a-z][a-zA-Z0-9.\\-]*(/\\S*)+)',
          name: 'entity.name.variable.artifact.earthfile'
        },
        {
          match: '([a-zA-Z0-9._\\-/:]*\\+[a-z][a-zA-Z0-9.\\-]*)',
          name: 'entity.name.type.target.earthfile'
        },
        {
          match: '([a-zA-Z0-9._\\-/:]*\\+[A-Z][a-zA-Z0-9._]*)',
          name: 'entity.name.function.function.earthfile'
        }
      ]
    },
    function: {
      patterns: [
        {
          captures: {1: {name: 'entity.name.function.function.earthfile'}},
          match: '^\\s*([A-Z][a-zA-Z0-9._]*):'
        }
      ]
    },
    keyword: {
      patterns: [
        {
          match: '((&&)|(>>)|(<<)|[|;>])',
          name: 'keyword.operator.shell.earthfile'
        },
        {match: '([=])', name: 'keyword.operator.assignment.earthfile'},
        {
          match: '(\\B(-)+[a-zA-Z0-9\\-_]+)',
          name: 'keyword.operator.flag.earthfile'
        },
        {include: '#special-method'},
        {include: '#target'},
        {include: '#function'}
      ]
    },
    'special-method': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.special-method.earthfile'},
            2: {name: 'entity.name.variable.target.earthfile'},
            3: {name: 'keyword.other.special-method.earthfile'}
          },
          match: '^\\s*\\b(SAVE ARTIFACT)(\\b.*?\\b)(AS LOCAL)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.other.special-method.earthfile'},
            2: {name: 'keyword.other.special-method.earthfile'}
          },
          match: '^\\s*\\b(FOR)\\b.*?\\b(IN)\\b'
        },
        {
          captures: {
            1: {name: 'keyword.other.special-method.earthfile'},
            2: {name: 'entity.name.type.base-image.earthfile'}
          },
          match: '^\\s*(FROM)\\s*([^\\s#]+)'
        },
        {
          captures: {
            1: {name: 'keyword.other.special-method.earthfile'},
            2: {name: 'entity.name.type.tag.earthfile'}
          },
          match:
            '^\\s*(FROM|COPY|SAVE ARTIFACT|SAVE IMAGE|RUN|LABEL|EXPOSE|VOLUME|USER|ENV|ARG|BUILD|WORKDIR|ENTRYPOINT|CMD|GIT CLONE|DOCKER LOAD|DOCKER PULL|HEALTHCHECK|WITH DOCKER|END|IF|ELSE IF|ELSE|DO|COMMAND|FUNCTION|IMPORT|LOCALLY|FOR|VERSION|WAIT|TRY|FINALLY|CACHE|HOST|PIPELINE|TRIGGER|PROJECT|SET|LET|ADD|STOP SIGNAL|ONBUILD|SHELL)\\s((--\\w+(?:-\\w+)*\\s*)+)'
        },
        {
          match: '^\\s*HEALTHCHECK\\s+(NONE|CMD)\\s',
          name: 'keyword.other.special-method.earthfile'
        },
        {
          match: '^\\s*FROM DOCKERFILE\\s',
          name: 'keyword.other.special-method.earthfile'
        },
        {
          match:
            '^\\s*(FROM|COPY|SAVE ARTIFACT|SAVE IMAGE|RUN|LABEL|EXPOSE|VOLUME|USER|ENV|ARG|BUILD|WORKDIR|ENTRYPOINT|CMD|GIT CLONE|DOCKER LOAD|DOCKER PULL|HEALTHCHECK|WITH DOCKER|END|IF|ELSE IF|ELSE|DO|COMMAND|FUNCTION|IMPORT|LOCALLY|FOR|VERSION|WAIT|TRY|FINALLY|CACHE|HOST|PIPELINE|TRIGGER|PROJECT|SET|LET|ADD|STOP SIGNAL|ONBUILD|SHELL)\\s',
          name: 'keyword.other.special-method.earthfile'
        }
      ]
    },
    string: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.earthfile'}
          },
          end: '"',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.earthfile'}
          },
          name: 'string.quoted.double.earthfile',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escaped.earthfile'}
          ]
        },
        {
          begin: "'",
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.earthfile'}
          },
          end: "'",
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.earthfile'}
          },
          name: 'string.quoted.single.earthfile',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escaped.earthfile'}
          ]
        }
      ]
    },
    target: {
      patterns: [
        {
          captures: {1: {name: 'entity.name.class.target.earthfile'}},
          match: '^\\s*([a-z]([a-zA-Z0-9.]|-)*):'
        }
      ]
    },
    variable: {
      patterns: [
        {match: '\\$[a-zA-Z0-9_]+', name: 'variable.other.earthfile'},
        {
          match: '(?<=\\${)([a-zA-Z0-9.\\-_]+)(?=})',
          name: 'variable.other.earthfile'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.variable.begin.earthfile'},
            2: {name: 'variable.other.earthfile'},
            3: {name: 'punctuation.definition.variable.end.earthfile'}
          },
          match: '(\\${)([a-zA-Z0-9.\\-_#]+)(})'
        }
      ]
    }
  },
  scopeName: 'source.earthfile'
}

export default grammar
