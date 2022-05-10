// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/jimmckay/XojoSyntaxTM>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
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
  patterns: [
    {include: '#comment'},
    {include: '#comment-rem'},
    {include: '#tags'},
    {include: '#string-literal'},
    {include: '#keywords'},
    {include: '#directives'},
    {include: '#keywords-numeric'},
    {include: '#keywords-functions'},
    {include: '#numbers'},
    {include: '#numbers-literal'},
    {include: '#numbers-binary'}
  ],
  repository: {
    comment: {match: "(//|').*$", name: 'punctuation.definition.comment.xojo'},
    'comment-rem': {
      match: '(?i)(rem .++)$',
      name: 'punctuation.definition.comment.xojo'
    },
    directives: {
      match: '(?i)#(if|else|elseif|endif|pragma)\\b',
      name: 'keyword.xojo'
    },
    keywords: {
      match:
        '\\b(?i)(me|self|super|return|dim|var|const|static|as|if|then|else|elseif|for|next|do|loop|until|while|wend|end if|select case|case|end select|private|public|protected|inherits|try|catch|finally|nil|and|or|not|mod|to|downto|new|get|set|end)\\b',
      name: 'keyword.xojo'
    },
    'keywords-functions': {
      match: '\\b(?i)(sub|function|class|return|begin)\\s\\w++\\b',
      name: 'keyword.xojo'
    },
    'keywords-numeric': {
      match:
        '\\b(?i)(boolean|integer|double|cgfloat|long|string|color|true|false|(u)*int(8|16|32|64))\\b',
      name: 'keyword.xojo'
    },
    numbers: {match: '\\b(-)?[0-9.]+\\b', name: 'constant.numeric.xojo'},
    'numbers-binary': {match: '(?i)&b[01]+', name: 'constant.numeric.integer'},
    'numbers-literal': {
      match: '(?i)(&h|&c)[0-9a-f]+',
      name: 'constant.numeric.integer'
    },
    'string-literal': {match: '(\\".*?\\")', name: 'string.quoted.double.xojo'},
    tags: {match: '^\\s*#tag.*$', name: 'markup.bold.xojo'}
  },
  scopeName: 'source.xojo'
}

export default grammar
