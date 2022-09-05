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
    {include: '#directives'},
    {include: '#keywords-numeric'},
    {include: '#keywords-functions'},
    {include: '#keywords'},
    {include: '#numbers'},
    {include: '#numbers-literal'},
    {include: '#numbers-binary'}
  ],
  repository: {
    comment: {match: "(//|').*$", name: 'comment'},
    'comment-rem': {match: '(?i)(rem .++)$', name: 'comment'},
    directives: {
      match: '(?i)#(if|else|elseif|endif|pragma)\\b',
      name: 'keyword'
    },
    keywords: {
      match:
        '\\b(?i)(me|self|super|return|dim|var|const|static|as|if|then|else|elseif|for|next|do|loop|until|while|wend|end if|select case|case|end select|inherits|try|catch|finally|nil|and|or|not|mod|to|downto|new|get|set|end|return|begin)\\b',
      name: 'keyword'
    },
    'keywords-functions': {
      match:
        '\\b(?i)(private|protected|public|shared|end)? ?(sub|function|class)(\\s\\w++\\b)?',
      name: 'entity.name.function'
    },
    'keywords-numeric': {
      match:
        '\\b(?i)(boolean|integer|double|cgfloat|long|string|color|true|false|(u)*int(8|16|32|64))\\b',
      name: 'keyword'
    },
    numbers: {match: '\\b(-)?[0-9.]+\\b', name: 'constant.numeric.xojo'},
    'numbers-binary': {match: '(?i)&b[01]+', name: 'constant.numeric.integer'},
    'numbers-literal': {
      match: '(?i)(&h|&c)[0-9a-f]+',
      name: 'constant.numeric.integer'
    },
    'string-literal': {match: '(\\".*?\\")', name: 'string.quoted.double'},
    tags: {match: '^\\s*#tag.*$', name: 'entity.name.section'}
  },
  scopeName: 'source.xojo'
}

export default grammar
