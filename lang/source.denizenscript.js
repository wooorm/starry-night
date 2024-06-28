// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/DenizenScript/denizenscript-grammar>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
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
    {include: '#def_brackets'},
    {include: '#not_script_keys'}
  ],
  repository: {
    commands: {
      begin: '^\\s*(-)\\s([^\\s<>"\':]+)',
      captures: {
        1: {name: 'operator.dash.denizenscript'},
        2: {name: 'entity.other.command.denizenscript'}
      },
      end: '\\s'
    },
    comments: {
      begin: '(?i)^\\s*#(?!\\s*todo|(?:\\s*(?:\\||\\+|=|#|_|@|\\/)))',
      end: '\\n',
      name: 'comment.line.number-sign.denizenscript'
    },
    def_brackets: {
      begin: '(?<=\\w|<|&)\\[',
      end: '\\]',
      name: 'entity.name.tag.def_brackets.denizenscript',
      patterns: [{include: '#tags'}, {include: '#def_brackets'}]
    },
    double_quotes: {
      begin: '(?<=\\s)"',
      end: '(?:")',
      name: 'string.quoted.double.denizenscript',
      patterns: [{include: '#tags'}, {include: '#def_brackets'}]
    },
    header_comments: {
      begin: '^\\s*#\\s*(?:\\||\\+|=|#|_|@|\\/)',
      end: '\\n',
      name: 'keyword.header-comment.denizenscript'
    },
    keys: {
      begin:
        '(?i)(^(?!^\\s*-|#|\\n|^\\s*(?:interact scripts|default constants|data|constants|text|lore|aliases|slots|enchantments|input|description)(?=:\\n)).*?)(?=(:)\\s)',
      beginCaptures: {
        1: {name: 'markup.heading.key.denizenscript'},
        2: {name: 'operator.colon.denizenscript'}
      },
      end: '\\s'
    },
    not_script_keys: {
      begin:
        '(?i)(^(?!.*- |#|\\n).*(?=interact scripts|default constants|data|constants|text|lore|aliases|slots|enchantments|input|description).*)(?=(:)\\n)',
      beginCaptures: {
        1: {name: 'markup.heading.not_script_key.denizenscript'},
        2: {name: 'operator.colon.denizenscript'}
      },
      end: '^(?!.*- |\\n|\\s*#)',
      patterns: [
        {include: '#tags'},
        {include: '#def_brackets'},
        {include: '#comments'},
        {include: '#todo_comments'},
        {include: '#header_comments'}
      ]
    },
    single_quotes: {
      begin: "(?<=\\s)'",
      end: "(?:')",
      name: 'string.quoted.single.denizenscript',
      patterns: [{include: '#tags'}, {include: '#def_brackets'}]
    },
    tags: {
      begin: '<(?!-|\\s|=)',
      end: '>',
      name: 'constant.language.tag.denizenscript',
      patterns: [{include: '#tags'}, {include: '#def_brackets'}]
    },
    todo_comments: {
      begin: '(?i)^\\s*#\\s*(?:todo)',
      end: '\\n',
      name: 'variable.todo-comment.denizenscript'
    }
  },
  scopeName: 'source.denizenscript'
}

export default grammar
