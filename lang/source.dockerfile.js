// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/asbjornenge/Docker.tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.dockerfile'],
  names: ['dockerfile', 'containerfile'],
  patterns: [
    {match: '\\\\.', name: 'constant.character.escaped.dockerfile'},
    {
      captures: {
        1: {name: 'keyword.control.dockerfile'},
        2: {name: 'keyword.other.special-method.dockerfile'}
      },
      match:
        '^\\s*(?:(ONBUILD)\\s+)?(ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)\\s'
    },
    {
      captures: {
        1: {name: 'keyword.operator.dockerfile'},
        2: {name: 'keyword.other.special-method.dockerfile'}
      },
      match: '^\\s*(?:(ONBUILD)\\s+)?(CMD|ENTRYPOINT)\\s'
    },
    {
      begin: '"',
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.dockerfile'}
      },
      end: '"',
      endCaptures: {1: {name: 'punctuation.definition.string.end.dockerfile'}},
      name: 'string.quoted.double.dockerfile',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escaped.dockerfile'}
      ]
    },
    {
      begin: "'",
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.dockerfile'}
      },
      end: "'",
      endCaptures: {1: {name: 'punctuation.definition.string.end.dockerfile'}},
      name: 'string.quoted.single.dockerfile',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escaped.dockerfile'}
      ]
    },
    {
      captures: {
        1: {name: 'punctuation.whitespace.comment.leading.dockerfile'},
        2: {name: 'comment.line.number-sign.dockerfile'},
        3: {name: 'punctuation.definition.comment.dockerfile'}
      },
      match: '^(\\s*)((#).*$\\n?)'
    }
  ],
  scopeName: 'source.dockerfile'
}

export default grammar
