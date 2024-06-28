// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.r', '.rd', '.rsx'],
  names: ['r', 'rscript', 'splus'],
  patterns: [
    {
      captures: {
        1: {name: 'comment.line.pragma.r'},
        2: {name: 'entity.name.pragma.name.r'}
      },
      match: '^(#pragma[ \\t]+mark)[ \\t](.*)',
      name: 'comment.line.pragma-mark.r'
    },
    {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.r'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.r'}},
          end: '\\n',
          name: 'comment.line.number-sign.r'
        }
      ]
    },
    {
      match:
        '\\b(logical|numeric|character|complex|matrix|array|data\\.frame|list|factor)(?=\\s*\\()',
      name: 'storage.type.r'
    },
    {
      match:
        '\\b(function|if|break|next|repeat|else|for|return|switch|while|in|invisible)\\b',
      name: 'keyword.control.r'
    },
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(i|L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b',
      name: 'constant.numeric.r'
    },
    {
      match: '\\b(T|F|TRUE|FALSE|NULL|NA|Inf|NaN)\\b',
      name: 'constant.language.r'
    },
    {
      match: '\\b(pi|letters|LETTERS|month\\.abb|month\\.name)\\b',
      name: 'support.constant.misc.r'
    },
    {
      match: '(\\-|\\+|\\*|\\/|%\\/%|%%|%\\*%|%in%|%o%|%x%|\\^)',
      name: 'keyword.operator.arithmetic.r'
    },
    {match: '(=|<-|<<-|->|->>)', name: 'keyword.operator.assignment.r'},
    {match: '(==|!=|<>|<|>|<=|>=)', name: 'keyword.operator.comparison.r'},
    {match: '(!|&{1,2}|[|]{1,2})', name: 'keyword.operator.logical.r'},
    {match: '(\\.\\.\\.|\\$|@|:|\\~)', name: 'keyword.other.r'},
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.r'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.r'}},
      name: 'string.quoted.double.r',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.r'}]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.r'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.r'}},
      name: 'string.quoted.single.r',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.r'}]
    },
    {
      captures: {
        1: {name: 'entity.name.function.r'},
        2: {name: 'keyword.operator.assignment.r'},
        3: {name: 'keyword.control.r'}
      },
      match:
        '((?:`[^`\\\\]*(?:\\\\.[^`\\\\]*)*`)|(?:[[:alpha:].][[:alnum:]._]*))\\s*(<?<-|=(?!=))\\s*(function)',
      name: 'meta.function.r'
    },
    {
      captures: {
        1: {name: 'entity.name.tag.r'},
        4: {name: 'entity.name.type.r'}
      },
      match:
        '(setMethod|setReplaceMethod|setGeneric|setGroupGeneric|setClass)\\s*\\(\\s*([[:alpha:]\\d]+\\s*=\\s*)?("|\\x{27})([a-zA-Z._\\[\\$@][a-zA-Z0-9._\\[]*?)\\3.*',
      name: 'meta.method.declaration.r'
    },
    {
      match:
        '((?:`[^`\\\\]*(?:\\\\.[^`\\\\]*)*`)|(?:[[:alpha:].][[:alnum:]._]*))\\s*\\('
    },
    {
      captures: {
        1: {name: 'variable.parameter.r'},
        2: {name: 'keyword.operator.assignment.r'}
      },
      match: '([[:alpha:].][[:alnum:]._]*)\\s*(=(?!=))'
    },
    {
      match: '\\b([\\d_][[:alnum:]._]+)\\b',
      name: 'invalid.illegal.variable.other.r'
    },
    {match: '\\b([[:alnum:]_]+)(?=::)', name: 'entity.namespace.r'},
    {
      match:
        '((?:`[^`\\\\]*(?:\\\\.[^`\\\\]*)*`)|(?:[[:alpha:].][[:alnum:]._]*))',
      name: 'variable.other.r'
    },
    {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.block.begin.r'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.block.end.r'}},
      name: 'meta.block.r',
      patterns: [{include: 'source.r'}]
    }
  ],
  scopeName: 'source.r'
}

export default grammar
