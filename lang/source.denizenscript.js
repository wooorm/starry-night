// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/DenizenScript/denizenscript-grammar>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.dsc'],
  names: ['denizenscript'],
  patterns: [
    {include: '#comments'},
    {include: '#todo_comments'},
    {include: '#header_comments'},
    {include: '#keys'},
    {include: '#commands'},
    {include: '#double_quotes'},
    {include: '#single_quotes'},
    {include: '#tags'},
    {include: '#tag_params'}
  ],
  repository: {
    commands: {
      begin: '(-)\\s([^\\s\\[]+)',
      captures: {
        1: {name: 'operator.dash.denizenscript'},
        2: {name: 'entity.other.command.denizenscript'}
      },
      end: '\\s'
    },
    comments: {
      begin: '^\\s*#(?!\\s*todo|\\s*TODO|(?:\\s*(?:\\||\\+|=|#|_|@|\\/)))',
      end: '\\n',
      name: 'comment.line.number-sign.denizenscript'
    },
    double_quotes: {
      begin: '"',
      end: '\\n|"',
      name: 'string.quoted.double.denizenscript',
      patterns: [{include: '#tags'}, {include: '#tag_params'}]
    },
    header_comments: {
      begin: '^\\s*#\\s*(?:\\||\\+|=|#|_|@|\\/)',
      end: '\\n',
      name: 'keyword.header-comment.denizenscript'
    },
    keys: {
      begin: '(^[^-#\\n]*)(:)',
      beginCaptures: {
        1: {name: 'markup.heading.key.denizenscript'},
        2: {name: 'operator.colon.denizenscript'}
      },
      end: '\\s'
    },
    single_quotes: {
      begin: "'",
      end: "\\n|'",
      name: 'string.quoted.single.denizenscript',
      patterns: [{include: '#tags'}, {include: '#tag_params'}]
    },
    tag_params: {
      begin: '(?<=\\w|<)\\[',
      end: '\\]',
      name: 'entity.name.tag.tag-brackets.denizenscript',
      patterns: [{include: '#tags'}]
    },
    tags: {
      begin: '<(?!-|\\s)',
      end: '>',
      name: 'constant.language.tag.denizenscript',
      patterns: [{include: '#tag_params'}]
    },
    todo_comments: {
      begin: '^\\s*#\\s*(?:TODO|todo)',
      end: '\\n',
      name: 'variable.todo-comment.denizenscript'
    }
  },
  scopeName: 'source.denizenscript'
}

export default grammar
