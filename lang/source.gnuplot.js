// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.gp', '.gnu', '.gnuplot', '.p', '.plot', '.plt'],
  names: ['gnuplot'],
  patterns: [
    {include: '#number'},
    {include: '#string_single'},
    {include: '#string_double'},
    {
      begin: '\\b(for)\\b\\s*(\\[)',
      beginCaptures: {
        1: {name: 'keyword.other.iteration.gnuplot'},
        2: {name: 'punctuation.definition.range.begin.gnuplot'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.range.end.gnuplot'}},
      name: 'meta.structure.iteration.gnuplot',
      patterns: [
        {include: '#number'},
        {include: '#operator'},
        {include: '#string_double'},
        {include: '#string_single'},
        {match: ':', name: 'punctuation.separator.range.gnuplot'},
        {
          match: '\\b([a-zA-Z]\\w*)\\b\\s*(=|in)',
          name: 'variable-assignment.range.gnuplot'
        },
        {
          match: '(?i:[^\\s(pi|e)\\]])',
          name: 'invalid.illegal.expected-range-separator.gnuplot'
        }
      ]
    },
    {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.definition.range.begin.gnuplot'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.range.end.gnuplot'}},
      name: 'meta.structure.range.gnuplot',
      patterns: [
        {include: '#number'},
        {include: '#operator'},
        {match: ':', name: 'punctuation.separator.range.gnuplot'},
        {
          match: '(?i:[^\\s(pi|e)\\]])',
          name: 'invalid.illegal.expected-range-separator.gnuplot'
        }
      ]
    },
    {match: '\\\\.', name: 'constant.character.escape.gnuplot'},
    {
      captures: {1: {name: 'punctuation.definition.comment.gnuplot'}},
      match: '(?<!\\$)(#)(?!\\{).*$\\n?',
      name: 'comment.line.number-sign.gnuplot'
    },
    {match: 'for', name: 'keyword.other.iteration.gnuplot'},
    {
      match:
        '\\b(angles|arrow|autoscale|bars|border|boxwidth|clabel|clip|cntrparam|colorbox|contour|decimalsign|dgrid3d|dummy|encoding|fit|format|grid|hidden3d|historysize|isosamples|key|label|locale|logscale|macros|bmargin|lmargin|rmargin|tmargin|mapping|mouse|multiplot|offsets|origin|output|palette|parametric|pm3d|pointsize|polar|print|rrange|trange|urange|vrange|samples|size|style|surface|tics|ticscale|ticslevel|timestamp|timefmt|title|view|xyplane|x2data|xdata|y2data|ydata|z2data|zdata|x2label|xlabel|y2label|ylabel|z2label|zlabel|x2range|xrange|y2range|yrange|z2range|zrange|mx2tics|mxtics|my2tics|mytics|mz2tics|mztics|nomx2tics|nomxtics|nomy2tics|nomytics|nomz2tics|nomztics|nox2tics|noxtics|noy2tics|noytics|noz2tics|noztics|x2tics|xtics|y2tics|ytics|z2tics|ztics|x2dtics|x2mtics|xdtics|xmtics|y2dtics|y2mtics|ydtics|ymtics|z2dtics|z2mtics|zdtics|zmtics|x2zeroaxis|xzeroaxis|y2zeroaxis|yzeroaxis|z2zeroaxis|zeroaxis|zzeroaxis|zero)\\b',
      name: 'keyword.other.setting.gnuplot'
    },
    {
      match:
        '\\b(cd|call|clear|exit|unset|plot|splot|help|load|pause|quit|fit|replot|ifFIT_LIMIT|FIT_MAXITER|FIT_START_LAMBDA|FIT_LAMBDA_FACTOR|FIT_LOG|FIT_SCRIPT|print|pwd|reread|reset|save|show|test|!|functions|var)\\b',
      name: 'keyword.other.command.gnuplot'
    },
    {
      match:
        '\\b(abs|acos|acosh|arg|asin|asinh|atan|atan2|atanh|besj0|besj1|besy0|besy1|ceil|cos|cosh|erf|erfc|exp|floor|gamma|ibeta|igamma|imag|int|inverf|invnorm|lambertw|lgamma|log|log10|norm|rand|real|sgn|sin|sinh|sqrt|tan|tanh)\\b',
      name: 'support.function.gnuplot'
    },
    {
      match: '\\b(gprintf|sprintf|strlen|strstrt|substr|system|word|words)\\b',
      name: 'support.function.string.gnuplot'
    },
    {
      match:
        '\\b(on|off|default|inside|outside|lmargin|rmargin|tmargin|bmargin|at|left|right|center|top|bottom|center|vertical|horizontal|Left|Right|noreverse|noinvert|samplen|spacing|width|height|noautotitle|columnheader|title|noenhanced|nobox|linestyle|ls|linetype|lt|linewidth|lw)\\b',
      name: 'constant.other.type.gnuplot'
    },
    {
      match:
        '\\b(aed512|aed767|aifm|aqua|bitgraph|cgm|corel|dumb|dxf|eepic|emf|emtex|epslatex|epson_180dpi|epson_60dpi|epson_lx800|fig|gif|gpic|hp2623A|hp2648|hp500c|hpdj|hpgl|hpljii|hppj|imagen|jpeg|kc_tek40xx|km_tek40xx|latex|mf|mif|mp|nec_cp6|okidata|pbm|pcl5|pdf|png|postscript|pslatex|pstex|pstricks|qms|regis|selanar|starc|svg|tandy_60dpi|tek40xx|tek410x|texdraw|tgif|tkcanvas|tpic|unknown|vttek)\\b',
      name: 'constant.other.terminal.gnuplot'
    },
    {
      match:
        '\\b(u(sing)?|t(it(le)?)?|notit(le)?|w(i(th)?)?|steps|fs(teps)?|notitle|l(i(nes)?)?|linespoints|via)\\b',
      name: 'keyword.modifier.gnuplot'
    },
    {
      match:
        '(?x:\n\t\t\t\t\\b # Start with a word boundary\n\t\t\t\t(?=\\b[\\w$]*(\\(|.*=))\t# Look-ahead for a bracket or equals\n\t\t\t\t(?![^(]*\\))\t# negative look ahead for a closing bracket without an opening one. This stops a from matching in f(a)\n\t\t\t\t(\t\t\t\t\t# Group variable name\n\t\t\t\t\t[A-Za-z] \t\t\t# A letter\n\t\t\t\t\t[\\w$]*\t \t\t# Any word chars or $\n\t\t\t\t)\t\t\t\t\t# That is it for the name.\n\t\t\t)',
      name: 'variable.other.gnuplot'
    },
    {match: '\\b(if)\\b', name: 'keyword.control.gnuplot'},
    {
      begin: '\\b(show)\\b',
      beginCaptures: {0: {name: 'keyword.other.command.gnuplot'}},
      contentName: 'keyword.line.show.gnuplot',
      end: '(?!\\#)($\\n?)',
      name: 'keyword.line.show.gnuplot',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\b(set)\\b\\s*\\b(terminal)\\b',
      beginCaptures: {
        1: {name: 'keyword.other.command.gnuplot'},
        2: {name: 'keyword.other.setting.gnuplot'}
      },
      end: '(?!\\#)($\\n?)',
      name: 'keyword.line.set.terminal.gnuplot',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\b(set)\\b\\s*\\b(key)\\b',
      beginCaptures: {
        1: {name: 'keyword.other.command.gnuplot'},
        2: {name: 'keyword.other.setting.gnuplot'}
      },
      end: '(?!\\#)($\\n?)',
      name: 'keyword.line.set.key.gnuplot',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\b(set)\\b\\s*(?!\\b(terminal|key|for)\\b)',
      beginCaptures: {
        1: {name: 'keyword.other.command.gnuplot'},
        2: {name: 'keyword.other.setting.gnuplot'}
      },
      contentName: 'keyword.line.set.gnuplot',
      end: '(?!\\#)($\\n?)',
      name: 'keyword.line.set.gnuplot',
      patterns: [{include: '$self'}]
    }
  ],
  repository: {
    number: {
      match:
        '(?x:         # turn on extended mode\n                     -?         # an optional minus\n                     (?:\n                       0        # a zero\n                       |        # ...or...\n                       [1-9]    # a 1-9 character\n                       \\d*      # followed by zero or more digits\n                     )\n                     (?:\n                       \\.       # a period\n                       \\d+      # followed by one or more digits\n                       (?:\n                         [eE]   # an e character\n                         [+-]?  # followed by an option +/-\n                         \\d+    # followed by one or more digits\n                       )?       # make exponent optional\n                     )?         # make decimal portion optional\n                 )',
      name: 'constant.numeric.gnuplot'
    },
    operator: {
      match:
        '\\s*(==|~=|>|>=|<|<=|&|&&|:|\\||\\|\\||\\+|-|\\*|\\.\\*|/|\\./|\\\\|\\.\\\\|\\^|\\.\\^)\\s*',
      name: 'keyword.operator.symbols.matlab'
    },
    string_double: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.gnuplot'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.gnuplot'}},
      name: 'string.quoted.double.gnuplot',
      patterns: [
        {match: '\\\\[\\$`"\\\\\\n]', name: 'constant.character.escape.gnuplot'}
      ]
    },
    string_single: {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.gnuplot'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.gnuplot'}},
      name: 'string.quoted.single.gnuplot'
    }
  },
  scopeName: 'source.gnuplot'
}

export default grammar
