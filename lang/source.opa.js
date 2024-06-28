// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/mads379/opa.tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.opa'],
  names: ['opa'],
  patterns: [{include: '#code'}],
  repository: {
    code: {
      patterns: [
        {include: '#xml-literal'},
        {include: '#strings'},
        {include: '#comments'},
        {include: '#declarations'},
        {include: '#keywords'},
        {include: '#constants'},
        {include: '#directive'}
      ]
    },
    comments: {
      patterns: [
        {
          begin: '/\\*(\\*)?',
          end: '\\*/',
          name: 'comment.block.opa',
          patterns: [
            {match: '@\\w*', name: 'keyword.annotation.opa'},
            {include: '#comments'}
          ]
        },
        {match: '\\/\\/.*$', name: 'comment.single.opa'}
      ]
    },
    constants: {
      patterns: [
        {match: '\\b(void|false|true)\\b', name: 'constant.language'},
        {
          match:
            '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFfUuDd]|UL|ul)?\\b',
          name: 'constant.numeric.opa'
        }
      ]
    },
    declarations: {
      patterns: [
        {
          captures: {1: {name: 'entity.name.module'}},
          match: '([\\w_]*)\\s*=\\s*{{'
        },
        {
          captures: {1: {name: 'keyword.opa'}, 2: {name: 'entity.name.type'}},
          match: '\\b(type)\\b\\s*([a-zA-Z_][a-zA-Z0-9_]*|`[^`\\n\\r]`)'
        },
        {
          begin:
            '^\\s*(@[\\w_]*)?\\s*([\\w_]*)\\((?=.*\\)\\s*(:\\s(\\w*))?\\s*=)',
          beginCaptures: {
            1: {name: 'keyword.directive.opa'},
            2: {name: 'entity.name.function'}
          },
          end: '\\)\\s*(:\\s(\\w*))?\\s*='
        },
        {
          captures: {1: {name: 'variable.other.opa'}},
          match: '(\\w*)(:.*)?\\s*=[^=]'
        }
      ]
    },
    directive: {match: '@[\\w_]*', name: 'keyword.directive.opa'},
    'embedded-source': {
      patterns: [
        {
          begin: '{',
          end: '}',
          name: 'source.opa.embeded.block',
          patterns: [{include: '#code'}, {include: '#embedded-source'}]
        }
      ]
    },
    keywords: {
      match:
        '\\b(_|as|do|else|if|match|then|type|with|and|begin|css|db|end|external|forall|import|package|parser|rec|server|val|xml_parser)\\b',
      name: 'keyword.opa'
    },
    strings: {
      patterns: [
        {
          begin: '(?<!\\\\)"',
          end: '"',
          name: 'string.quoted.double.scala',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.scala'}]
        }
      ]
    },
    'xml-attribute': {
      patterns: [
        {
          captures: {
            1: {name: 'entity.other.attribute-name'},
            3: {name: 'string.quoted.double'},
            4: {name: 'variable.other.opa'}
          },
          match: '(\\w+)=(("[^"]*")|(#\\w*))'
        }
      ]
    },
    'xml-literal': {
      patterns: [
        {
          begin: '</?([a-zA-Z0-9]+)',
          beginCaptures: {1: {name: 'entity.name.tag'}},
          end: '/?>',
          name: 'text.xml',
          patterns: [
            {include: '#xml-literal'},
            {include: '#xml-attribute'},
            {include: '#embedded-source'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.opa'
}

export default grammar
