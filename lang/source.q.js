// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/komsit37/sublime-q>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['q'],
  patterns: [
    {
      begin: '^\\s*/\\s*$\\n',
      end: '^\\s*\\\\\\s*$\\n',
      name: 'comment.block.q'
    },
    {
      begin: '^\\\\\\s*\\n',
      end: "'As far as I know, there is no way to exit this kind of block comment'",
      name: 'comment.block.q'
    },
    {match: '\\s/.+$\\n?|^/.+$\\n', name: 'comment.line.q'},
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.string.source.q',
      patterns: [
        {match: '\\\\[trn\\\\\\"]', name: 'constant.numeric.complex.source.q'},
        {match: '\\\\[0-9]{3}', name: 'constant.numeric.complex.source.q'},
        {match: '\\\\[0-9]{1,2}', name: 'message.error.q'}
      ]
    },
    {
      match: '(`:[:/a-zA-Z0-9_.]*)|(`[:a-zA-Z0-9_.]*)',
      name: 'string.interpolated.symbol.q'
    },
    {
      begin:
        '(?=(\\W|\\b))(\\.[a-zA-Z]+[a-zA-Z0-9_]*)(\\.[a-zA-Z0-9_]*)*\\s*\\[(?=.*\\]\\s*([,+\\-*%@$!?<>=~|&\\#]?)(::|:))',
      beginCaptures: {
        2: {name: 'variable.parameter.complex.namespace_dict_assign.q'},
        3: {name: 'variable.parameter.complex.namespace_dict_assign.q'}
      },
      end: '\\]([,+\\-*%@$!?<>=~|&\\#]?)(::|:)',
      endCaptures: {
        1: {name: 'support.function.assignment.q'},
        2: {name: 'support.function.assignment.q'}
      },
      patterns: [{include: '$self'}]
    },
    {
      captures: {
        4: {name: 'support.function.assignment.q'},
        5: {name: 'support.function.assignment.q'}
      },
      match:
        '(?=(\\W|\\b))(\\.[a-zA-Z]+[a-zA-Z0-9_]*)(\\.[a-zA-Z0-9_]*)*\\s*([,+\\-*%@$!?<>=~|&\\#]?)(::|:)',
      name: 'variable.parameter.complex.namespace_assignment.q'
    },
    {match: '\\.[qQhkozj]\\.\\w+', name: 'support.function.namespace.q'},
    {
      match:
        '(?=(\\W|\\b))(\\.[a-zA-Z]+[a-zA-Z0-9_]*)(\\.[a-zA-Z0-9_]*)*(?=(\\W|\\b))',
      name: 'source.other_namespaces.q'
    },
    {
      captures: {
        2: {name: 'variable.parameter.complex.assignment.q'},
        3: {name: 'support.function.q'},
        4: {name: 'support.function.q'}
      },
      match:
        '(?<=([^a-zA-Z0-9])|(?<=\\b))([a-zA-Z]+[a-zA-Z0-9_]*)\\s*([,+\\-*%@$!?<>=~|&\\#]?)(::|:)',
      name: 'other.assignment.q'
    },
    {
      begin:
        '(?=([^a-zA-Z0-9]|\\b))([a-zA-Z]+[a-zA-Z0-9_]*)\\s*\\[(?=.*\\]\\s*([,+\\-*%@$!?<>=~|&\\#]?)(::|:))',
      beginCaptures: {2: {name: 'variable.parameter.complex.dict_assign.q'}},
      end: '\\]([,+\\-*%@$!?<>=~|&\\#]?)(::|:)',
      endCaptures: {
        1: {name: 'support.function.assignment.q'},
        2: {name: 'support.function.assignment.q'}
      },
      patterns: [{include: '$self'}]
    },
    {
      begin: '(\\{\\s*\\[)',
      contentName: 'meta.function.parameters.q',
      end: ']',
      patterns: [
        {
          captures: {
            1: {name: 'entity.other.inherited-class.q'},
            2: {name: 'punctuation.separator.parameters.q'}
          },
          match: '\\b([a-zA-Z_][a-zA-Z0-9_]*)\\s*(?:(;)|(?=[\\]\\)]))'
        }
      ]
    },
    {
      match:
        '(?=(\\W|\\b))(abs|acos|aj|aj0|ajf|ajf0|all|and|any|asc|asin|asof|atan|attr|avg|avgs|bin|binr|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|dsave|each|ej|ema|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|idesc|if|ij|ijf|in|insert|inter|inv|key|keys|last|like|lj|ljf|load|log|lower|lsq|ltime|ltrim|mavg|max|maxs|mcount|md5|mdev|med|meta|min|mins|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|prd|prds|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reval|reverse|rload|rotate|rsave|rtrim|save|scan|scov|sdev|select|set|setenv|show|signum|sin|sqrt|ss|ssr|string|sublist|sum|sums|sv|svar|system|tables|tan|til|trim|type|uj|ujf|ungroup|union|update|upper|upsert|value|var|view|views|vs|wavg|where|while|within|wj|wj1|ww|wsum|xasc|xbar|xcol|xcols|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)(?=(\\W|\\b))',
      name: 'keyword.other.complex.keyword.q'
    },
    {
      match:
        '(?=(\\W|\\b))([0-9]{4}\\.[0-9]{2}\\.[0-9]{2}D[0-9]{2}(:[0-5][0-9]){0,2}(\\.[0-9]{3}([a-zA-CE-SU-Z0-9]*[ABCEFGHIJKLMNOPQRSUVWXYZagklnopqrtuvwxy0-9])?|\\.[0-9]*|:)?)(?=(\\W|\\b))',
      name: 'constant.numeric.complex.timestamp.q'
    },
    {
      match:
        '(?=(\\W|\\b))([0-9]{4}\\.[0-9]{2}\\.[0-9]{2}T[0-9]{2}(:[0-5][0-9]){0,2}(\\.[0-9]{3}([a-zA-CE-Z0-9]*[ABCEFGHIJKLMNOPQRSUVWXYZagklnopqrtuvwxy0-9])?|\\.[0-9]*|:)?)(?=(\\W|\\b))',
      name: 'constant.numeric.complex.datetime.q'
    },
    {
      match:
        '(?=(\\W|\\b))(([0-9]{1,6}D([0-9]{1,2})((:[0-5][0-9]){0,2}|:)(\\.[0-9]{0,9}[a-zA-Z0-9]*[A-Zacgklnopqrtuvwxy0-9])?)|([0-9]{2}:[0-5][0-9](:[0-5][0-9]\\.[0-9]{4,}|:[0-5][0-9]\\.[0-9]{9,}[a-zA-Z0-9]*[ABCEFGHIJKLMNOPQRSUVWXYZagklnopqrtuvwxy0-9])|\\.[0-9]{8,}))(?=(\\W|\\b))',
      name: 'constant.numeric.complex.timespan.q'
    },
    {
      match:
        '(?=(\\W|\\b))([0-9]{2}:[0-5][0-9]((:[0-9]{2}(((([ABCEFGHIJKLMNOPQRSUVWXYZacgklnopqrtuvwxy0-9:]){1,2})?([0-5][0-9]){1,2})|\\.[0-9]{3}[ABCEFGHIJKLMNOPQRSUVWXYZacgklnopqrtuvwxy0-9]?|\\.[0-9]{0,3}))|\\.[0-9]{4,7}))(?=(\\W|\\b))',
      name: 'constant.numeric.complex.time.q'
    },
    {
      match:
        '(?=(\\W|\\b))([0-9]{2}:[0-5][0-9]([0-5][0-9]([0-5][0-9])?|\\.[0-9]{2}|:[0-9]{2}|([a-zA-Z]){0,2}[0-5][0-9]))(?=(\\W|\\b))',
      name: 'constant.numeric.complex.second.q'
    },
    {
      match:
        '(?=(\\W|\\b))([0-9]{2}:([0-5][0-9]([ABCEFGHIJKLMNOPQRSUVWXYZacgklnopqrtuvwxy0-9:])?)?)(?=(\\W|\\b))',
      name: 'constant.numeric.complex.minute.q'
    },
    {
      match: '(?=(\\W|\\b))([0-9]{4}\\.[0-9]{2}\\.[0-9]{2})(?=(\\W|\\b))',
      name: 'constant.numeric.complex.date.q'
    },
    {
      match: '(?=(\\W|\\b))([0-9]{4,}\\.([0][1-9]|[1][0-2])m)(?=(\\W|\\b))',
      name: 'constant.numeric.complex.month.q'
    },
    {match: '0:|1:|2:', name: 'support.function.io.q'},
    {
      match:
        '((?<=(\\W))|(?<=_)|(?<=\\b))([-]?[0-9]+[bhijf]?(\\.[0-9]+[m]?)?|0x[a-fA-F0-9]+)(?=(\\W|\\b)|_)',
      name: 'constant.numeric.complex.q'
    },
    {
      match: '((?<=\\W)|(?<=_)|(?<=\\b))([-]?[0-9]+e[-]?[0-9]+)(?=(\\W|\\b))',
      name: 'constant.numeric.complex.real.q'
    },
    {
      match: '((?<=\\W)|(?<=_)|(?<=\\b))(0n|0N[ghijepmdznuvt]?)(?=(\\W|\\b))',
      name: 'constant.numeric.complex.null.q'
    },
    {
      match: '((?<=\\W)|(?<=_)|(?<=\\b))(0w|0W[hijepdznuvt]?)(?=(\\W|\\b))',
      name: 'constant.numeric.complex.inf.q'
    },
    {match: "[!$@\\\\/#?|',`\\\\:]", name: 'support.function.q'},
    {match: '\\.(?=\\W)', name: 'support.function.q'},
    {match: '[a-zA-Z][a-zA-Z0-9_]+', name: 'source.q'},
    {match: '(?<=[0-9\\s])_', name: 'support.function.q'}
  ],
  scopeName: 'source.q'
}

export default grammar
