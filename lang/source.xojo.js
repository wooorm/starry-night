// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/jimmckay/XojoSyntaxTM>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [
    '.xojo_code',
    '.xojo_menu',
    '.xojo_report',
    '.xojo_script',
    '.xojo_toolbar',
    '.xojo_window'
  ],
  names: ['xojo'],
  patterns: [{include: '#xml'}, {include: '#tags'}],
  repository: {
    block: {
      begin: '^\\s*Begin.*$',
      beginCaptures: {0: {name: 'entity.name.section'}},
      end: '^\\s*End$',
      endCaptures: {0: {name: 'entity.name.section'}},
      patterns: [
        {include: '#block'},
        {include: '#string-literal'},
        {include: '#keywords-numeric'},
        {include: '#numbers'},
        {include: '#numbers-literal'},
        {include: '#numbers-binary'}
      ]
    },
    comment: {match: "(//|').*$", name: 'comment'},
    'comment-rem': {match: '(?i)(rem .++)$', name: 'comment'},
    declare: {
      match:
        '^\\s*(?i)((protected|private|public)\\s+)*(soft\\s+)*(?i)declare\\s+(sub|function)\\s+\\w+',
      name: 'keyword'
    },
    directives: {
      match: '(?i)#(if|else|elseif|endif|pragma).*$\\b',
      name: 'keyword'
    },
    keywords: {
      match:
        '\\b(?i)(me|self|super|return|dim|var|const|static|as|if|then|else|elseif|for|next|do|loop|until|while|wend|end if|select case|case|end select|inherits|try|catch|finally|nil|and|or|not|mod|to|downto|new|get|set|end|return|call|invoke)\\b',
      name: 'keyword'
    },
    'keywords-functions': {
      match:
        '\\b(?i)(private|protected|public|shared|end)? ?(sub|function|class)\\b(\\s\\w++\\b)?',
      name: 'entity.name.function'
    },
    'keywords-numeric': {
      match:
        '\\b(?i)(boolean|integer|double|single|ptr|wstring|cgfloat|long|string|color|true|false|(u)*int(8|16|32|64))\\b',
      name: 'keyword'
    },
    numbers: {
      captures: {1: {name: 'constant.numeric'}},
      match: '\\b((-)?[0-9.]+)\\b'
    },
    'numbers-binary': {match: '(?i)&b[01]+', name: 'constant.numeric.integer'},
    'numbers-literal': {
      match: '(?i)(&h|&c)[0-9a-f]+',
      name: 'constant.numeric.integer'
    },
    'string-literal': {match: '(\\".*?\\")', name: 'string.quoted.double'},
    tags: {
      begin: '^\\s*(#tag\\s\\w+)(\\s\\w+)?(.*)$',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin'},
        2: {name: 'entity.name.type'},
        3: {
          patterns: [
            {include: '#string-literal'},
            {include: '#numbers'},
            {include: '#numbers-literal'},
            {include: '#numbers-binary'}
          ]
        }
      },
      end: '^\\s*(#tag end.*)$',
      endCaptures: {1: {name: 'punctuation.definition.tag.end'}},
      patterns: [
        {include: '#block'},
        {include: '#comment'},
        {include: '#comment-rem'},
        {include: '#tags'},
        {include: '#string-literal'},
        {include: '#directives'},
        {include: '#keywords-numeric'},
        {include: '#keywords-functions'},
        {include: '#keywords'},
        {include: '#declare'},
        {include: '#numbers'},
        {include: '#numbers-literal'},
        {include: '#numbers-binary'}
      ]
    },
    xml: {
      begin: '^\\s*(<[^/].*?>)',
      beginCaptures: {
        1: {
          name: 'punctuation.definition.tag.begin',
          patterns: [{include: '#string-literal'}]
        }
      },
      end: '(</\\w*>)$',
      endCaptures: {1: {name: 'punctuation.definition.tag.end'}},
      patterns: [
        {include: '#xml'},
        {include: '#comment'},
        {include: '#comment-rem'},
        {include: '#string-literal'},
        {include: '#directives'},
        {include: '#keywords-numeric'},
        {include: '#keywords-functions'},
        {include: '#keywords'},
        {include: '#declare'},
        {include: '#numbers'},
        {include: '#numbers-literal'},
        {include: '#numbers-binary'}
      ]
    }
  },
  scopeName: 'source.xojo'
}

export default grammar
