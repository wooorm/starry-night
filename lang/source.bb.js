// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/yoctoproject/vscode-bitbake>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.bb', '.bbappend', '.bbclass'],
  names: ['bitbake'],
  patterns: [
    {include: '#escaped-single-quote'},
    {include: '#escaped-double-quote'},
    {include: '#string'},
    {include: '#numeric'},
    {include: '#keywords'},
    {include: '#comment'},
    {include: '#inline-python'},
    {include: '#variable-expansion'},
    {include: '#functions'},
    {include: '#bitbake-operator'},
    {include: '#variable-name'},
    {include: '#operator'}
  ],
  repository: {
    'bitbake-operator': {
      match: '(?<=:)(append|prepend|remove)',
      name: 'keyword.control.bb'
    },
    comment: {
      captures: {
        1: {name: 'punctuation.whitespace.comment.leading.bb'},
        2: {name: 'comment.line.bb'},
        3: {name: 'comment.line.number-sign.bb'},
        4: {name: 'comment.line.text.bb'}
      },
      match: '(\\s*)((#)(.*))\\n'
    },
    'escaped-double-quote': {
      match: '\\\\"',
      name: 'constant.character.escape.bb'
    },
    'escaped-single-quote': {
      match: "\\\\'",
      name: 'constant.character.escape.bb'
    },
    functions: {
      captures: {
        1: {name: 'entity.name.function.python.bb'},
        2: {name: 'keyword.operator.bb'},
        3: {name: 'keyword.other.bitbake-operator.bb'}
      },
      match: '([a-zA-Z_][\\w_]*)(:([a-zA-Z_][\\w_]*))?(?=\\s*\\()'
    },
    'inline-python': {
      begin: '(\\$\\{(@))',
      beginCaptures: {
        1: {name: 'punctuation.definition.template-expression.end.bb'},
        2: {name: 'entity.name.function.decorator.python.bb'}
      },
      end: '(\\})',
      endCaptures: {
        1: {name: 'punctuation.definition.template-expression.end.bb'}
      },
      patterns: [
        {include: '#operator'},
        {include: '#keywords'},
        {match: '(\\[)', name: 'meta.embedded.brackets.begin.bb'},
        {match: '(\\])', name: 'meta.embedded.brackets.end.bb'},
        {include: '#numeric'},
        {include: '#functions'},
        {include: '#parenthesis-open'},
        {include: '#parenthesis-close'},
        {include: '#variable-name'},
        {include: '#string'}
      ]
    },
    keywords: {
      patterns: [
        {
          captures: {1: {name: 'keyword.control.bb'}},
          match:
            '(?<![[:punct:]])\\b(include|require|inherit|inherit_defer|addtask|deltask|after|before|export|echo|if|fi|unset|print|fakeroot|EXPORT_FUNCTIONS|INHERIT)\\b(?![[:punct:]])'
        },
        {include: '#python-keywords'},
        {
          captures: {1: {name: 'storage.type.function.python.bb'}},
          match: '\\b(python|def)\\b(\\(?)'
        }
      ]
    },
    numeric: {match: '(-|\\.)?[0-9]+(\\.[0-9]+)?', name: 'constant.numeric.bb'},
    operator: {
      match: '(=|\\?=|\\?\\?=|:=|\\+=|=\\+|\\.=|=\\.|\\.|,)',
      name: 'keyword.operator.bb'
    },
    'parenthesis-close': {
      match: '\\)',
      name: 'meta.embedded.parenthesis.close.bb'
    },
    'parenthesis-open': {
      match: '([\\w])*\\(',
      name: 'meta.embedded.parenthesis.open.bb'
    },
    'python-keywords': {
      patterns: [
        {
          captures: {1: {name: 'keyword.control.bb'}},
          match:
            '\\b(if|elif|else|for|while|break|continue|return|yield|try|except|finally|raise|assert|import|from|as|pass|del|with|async|await)\\b'
        },
        {
          captures: {1: {name: 'storage.type.function.python.bb'}},
          match: '\\b(def|class|global|nonlocal|and|or|not|in|is|lambda)\\b\\s+'
        },
        {match: '\\b(True|False)\\b', name: 'constant.language.python.bb'}
      ]
    },
    string: {
      patterns: [
        {
          begin: '(""")',
          end: '(""")',
          name: 'string.quoted.triple.bb',
          patterns: [
            {include: '#escaped-single-quote'},
            {include: '#escaped-double-quote'},
            {include: '#inline-python'},
            {include: '#variable-expansion'}
          ]
        },
        {
          begin: '(")',
          end: '(")',
          name: 'string.quoted.double.bb',
          patterns: [
            {include: '#escaped-double-quote'},
            {include: '#inline-python'},
            {include: '#variable-expansion'}
          ]
        },
        {
          begin: "(')",
          end: "(')",
          name: 'string.quoted.single.bb',
          patterns: [
            {include: '#escaped-single-quote'},
            {include: '#inline-python'},
            {include: '#variable-expansion'}
          ]
        }
      ]
    },
    'variable-expansion': {
      begin: '(\\$\\{)',
      beginCaptures: {
        1: {name: 'punctuation.definition.template-expression.begin.bb'}
      },
      end: '(\\})',
      endCaptures: {
        1: {name: 'punctuation.definition.template-expression.end.bb'}
      },
      name: 'variable.other.names.bb'
    },
    'variable-name': {
      captures: {1: {name: 'variable.other.names.bb'}},
      match: '([a-zA-Z_][\\w_]*)'
    }
  },
  scopeName: 'source.bb'
}

export default grammar
