// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/github-linguist/razor-plus>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.cs', 'text.html.basic'],
  extensions: ['.cshtml', '.razor'],
  names: ['html+razor', 'razor'],
  patterns: [
    {include: '#comments'},
    {include: '#razor-directives'},
    {include: '#razor-code-block'},
    {include: '#razor-else-if'},
    {include: '#razor-if'},
    {include: '#razor-else'},
    {include: '#razor-foreach'},
    {include: '#razor-for'},
    {include: '#explicit-razor-expression'},
    {include: '#implicit-razor-expression'},
    {include: 'text.html.basic'}
  ],
  repository: {
    comments: {
      begin: '@\\*',
      captures: {0: {name: 'punctuation.definition.comment.source.cshtml'}},
      end: '\\*@',
      name: 'comment.block.cshtml'
    },
    'csharp-namespace-identifier': {
      patterns: [
        {
          match: '[_[:alpha:]][_[:alnum:]]*',
          name: 'entity.name.type.namespace.cs'
        }
      ]
    },
    'csharp-type-name': {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.type.alias.cs'},
            2: {name: 'punctuation.separator.coloncolon.cs'}
          },
          match: '([_[:alpha:]][_[:alnum:]]*)\\s*(\\:\\:)'
        },
        {
          captures: {
            1: {name: 'storage.type.cs'},
            2: {name: 'punctuation.accessor.cs'}
          },
          match: '([_[:alpha:]][_[:alnum:]]*)\\s*(\\.)'
        },
        {
          captures: {
            1: {name: 'punctuation.accessor.cs'},
            2: {name: 'storage.type.cs'}
          },
          match: '(\\.)\\s*([_[:alpha:]][_[:alnum:]]*)'
        },
        {match: '[_[:alpha:]][_[:alnum:]]*', name: 'storage.type.cs'}
      ]
    },
    'explicit-razor-expression': {
      begin: '(@)\\(',
      captures: {0: {name: 'keyword.control.cshtml'}},
      end: '\\)',
      name: 'meta.expression.explicit.cshtml',
      patterns: [{include: 'source.cs'}]
    },
    'functions-directive': {
      captures: {0: {name: 'keyword.control.cshtml'}},
      match: '(@functions)',
      name: 'meta.directive.functions.cshtml'
    },
    'implements-directive': {
      begin: '(@implements)\\s+',
      captures: {0: {name: 'keyword.control.cshtml'}},
      end: '$',
      name: 'meta.directive.implements.cshtml',
      patterns: [{include: '#csharp-type-name'}]
    },
    'implicit-razor-expression': {
      captures: {0: {name: 'keyword.control.cshtml'}},
      match: '(?<!@)(@)([a-zA-Z0-9\\.\\_\\(\\)]+)',
      name: 'meta.expression.implicit.cshtml'
    },
    'inherits-directive': {
      begin: '(@inherits)\\s+',
      captures: {0: {name: 'keyword.control.cshtml'}},
      end: '$',
      name: 'meta.directive.inherits.cshtml',
      patterns: [{include: '#csharp-type-name'}]
    },
    'inject-directive': {
      begin: '(@inject)\\s+',
      captures: {0: {name: 'keyword.control.cshtml'}},
      end: '$',
      name: 'meta.directive.inject.cshtml',
      patterns: [{include: '#csharp-type-name'}]
    },
    'layout-directive': {
      begin: '(@layout)\\s+',
      captures: {0: {name: 'keyword.control.cshtml'}},
      end: '$',
      name: 'meta.directive.layout.cshtml',
      patterns: [{include: '#csharp-type-name'}]
    },
    'model-directive': {
      begin: '(@model)\\s+',
      captures: {0: {name: 'keyword.control.cshtml'}},
      end: '$',
      name: 'meta.directive.model.cshtml',
      patterns: [{include: '#csharp-type-name'}]
    },
    'page-directive': {
      begin: '(@page)\\s+',
      captures: {0: {name: 'keyword.control.cshtml'}},
      end: '$',
      name: 'meta.directive.page.cshtml',
      patterns: [{include: 'source.cs'}]
    },
    'razor-code-block': {
      begin: '@?\\{',
      captures: {0: {name: 'keyword.control.cshtml'}},
      end: '\\}',
      patterns: [{include: 'text.html.cshtml'}, {include: 'source.cs'}]
    },
    'razor-directives': {
      name: 'meta.directive.cshtml',
      patterns: [
        {include: '#using-directive'},
        {include: '#model-directive'},
        {include: '#inherits-directive'},
        {include: '#inject-directive'},
        {include: '#implements-directive'},
        {include: '#layout-directive'},
        {include: '#page-directive'},
        {include: '#functions-directive'}
      ]
    },
    'razor-else': {
      begin: '(else)',
      captures: {0: {name: 'keyword.control.cshtml'}},
      end: '$',
      patterns: [{include: 'source.cs'}]
    },
    'razor-else-if': {
      begin: '(else\\s+if)',
      captures: {0: {name: 'keyword.control.cshtml'}},
      end: '$',
      patterns: [{include: 'source.cs'}]
    },
    'razor-for': {
      begin: '(@for)\\s*\\(',
      captures: {0: {name: 'keyword.control.cshtml'}},
      end: '\\)',
      patterns: [{include: 'source.cs'}]
    },
    'razor-foreach': {
      begin: '(@foreach)\\s*\\(',
      captures: {0: {name: 'keyword.control.cshtml'}},
      end: '\\)',
      patterns: [{include: 'source.cs'}]
    },
    'razor-if': {
      begin: '(@if)',
      captures: {0: {name: 'keyword.control.cshtml'}},
      end: '$',
      patterns: [{include: 'source.cs'}]
    },
    'using-directive': {
      begin: '(@)(?=using)(.*)',
      captures: {
        0: {name: 'keyword.control.cshtml'},
        2: {patterns: [{include: 'source.cs'}]}
      },
      end: '(?=$)',
      name: 'meta.directive.using.cshtml'
    }
  },
  scopeName: 'text.html.cshtml'
}

export default grammar
