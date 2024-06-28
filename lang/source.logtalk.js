// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.lgt', '.logtalk'],
  names: ['logtalk'],
  patterns: [
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.logtalk'}},
      end: '\\*/',
      name: 'comment.block.logtalk'
    },
    {
      begin: '(^[ \\t]+)?(?=%)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.ruby'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '%',
          beginCaptures: {0: {name: 'punctuation.definition.comment.logtalk'}},
          end: '\\n',
          name: 'comment.line.percentage.logtalk'
        }
      ]
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.logtalk'}},
      match: '(%).*$\\n?',
      name: 'comment.line.percentage.logtalk'
    },
    {
      captures: {
        1: {name: 'storage.type.opening.logtalk'},
        2: {name: 'punctuation.definition.storage.type.logtalk'},
        4: {name: 'entity.name.type.logtalk'}
      },
      match: '((:-)\\s(object|protocol|category|module))(?:\\()([^(,)]+)'
    },
    {
      captures: {1: {name: 'punctuation.definition.storage.type.logtalk'}},
      match: '(:-)\\s(end_(object|protocol|category))(?=[.])',
      name: 'storage.type.closing.logtalk'
    },
    {
      match:
        '\\b(complements|extends|i(nstantiates|mp(orts|lements))|specializes)(?=[(])',
      name: 'storage.type.relations.logtalk'
    },
    {
      captures: {1: {name: 'punctuation.definition.storage.modifier.logtalk'}},
      match: '(:-)\\s(e(lse|ndif)|dynamic|synchronized|threaded)(?=[.])',
      name: 'storage.modifier.others.logtalk'
    },
    {
      captures: {1: {name: 'punctuation.definition.storage.modifier.logtalk'}},
      match:
        '(:-)\\s(c(alls|oinductive)|e(lif|n(coding|sure_loaded)|xport)|i(f|n(clude|itialization|fo))|reexport|set_(logtalk|prolog)_flag|uses)(?=[(])',
      name: 'storage.modifier.others.logtalk'
    },
    {
      captures: {1: {name: 'punctuation.definition.storage.modifier.logtalk'}},
      match:
        '(:-)\\s(alias|info|d(ynamic|iscontiguous)|m(eta_(non_terminal|predicate)|ode|ultifile)|p(ublic|r(otected|ivate))|op|use(s|_module)|synchronized)(?=[(])',
      name: 'storage.modifier.others.logtalk'
    },
    {match: '(:|::|\\^\\^)', name: 'keyword.operator.message-sending.logtalk'},
    {match: '([{}])', name: 'keyword.operator.external-call.logtalk'},
    {match: '(\\?|@)', name: 'keyword.operator.mode.logtalk'},
    {
      match: '(@=<|@<|@>|@>=|==|\\\\==)',
      name: 'keyword.operator.comparison.term.logtalk'
    },
    {
      match: '(=<|<|>|>=|=:=|=\\\\=)',
      name: 'keyword.operator.comparison.arithmetic.logtalk'
    },
    {
      match: '(<<|>>|/\\\\|\\\\/|\\\\)',
      name: 'keyword.operator.bitwise.logtalk'
    },
    {
      match: '\\b(e|pi|mod|rem)\\b(?![-!(^~])',
      name: 'keyword.operator.evaluable.logtalk'
    },
    {
      match: '(\\*\\*|\\+|-|\\*|/|//)',
      name: 'keyword.operator.evaluable.logtalk'
    },
    {
      match: '(:-|!|\\\\+|,|;|-->|->|=|\\=|\\.|=\\.\\.|\\^|\\bis\\b)',
      name: 'keyword.operator.misc.logtalk'
    },
    {
      match:
        '\\b(a(bs|cos|sin|tan)|c(eiling|os)|exp|flo(at(_(integer|fractional)_part)?|or)|log|m(ax|in|od)|r(em|ound)|s(i(n|gn)|qrt)|truncate)(?=[(])',
      name: 'support.function.evaluable.logtalk'
    },
    {
      match: '\\b(true|fail|repeat)\\b(?![-!(^~])',
      name: 'support.function.control.logtalk'
    },
    {
      match: '\\b(ca(ll|tch)|ignore|throw|once)(?=[(])',
      name: 'support.function.control.logtalk'
    },
    {
      match: '\\b((get|p(eek|ut))_(c(har|ode)|byte)|nl)(?=[(])',
      name: 'support.function.chars-and-bytes-io.logtalk'
    },
    {match: '\\bnl\\b', name: 'support.function.chars-and-bytes-io.logtalk'},
    {
      match:
        '\\b(atom_(length|c(hars|o(ncat|des)))|sub_atom|char_code|number_c(har|ode)s)(?=[(])',
      name: 'support.function.atom-term-processing.logtalk'
    },
    {
      match:
        '\\b(var|atom(ic)?|integer|float|c(allable|ompound)|n(onvar|umber)|ground|acyclic_term)(?=[(])',
      name: 'support.function.term-testing.logtalk'
    },
    {
      match: '\\b(compare)(?=[(])',
      name: 'support.function.term-comparison.logtalk'
    },
    {
      match:
        '\\b(read(_term)?|write(q|_(canonical|term))?|(current_)?(char_conversion|op))(?=[(])',
      name: 'support.function.term-io.logtalk'
    },
    {
      match: '\\b(arg|copy_term|functor|numbervars|term_variables)(?=[(])',
      name: 'support.function.term-creation-and-decomposition.logtalk'
    },
    {
      match: '\\b(subsumes_term|unify_with_occurs_check)(?=[(])',
      name: 'support.function.term-unification.logtalk'
    },
    {
      match:
        '\\b((se|curren)t_(in|out)put|open|close|flush_output|stream_property|at_end_of_stream|set_stream_position)(?=[(])',
      name: 'support.function.stream-selection-and-control.logtalk'
    },
    {
      match: '\\b(flush_output|at_end_of_stream)\\b',
      name: 'support.function.stream-selection-and-control.logtalk'
    },
    {
      match: '\\b((se|curren)t_prolog_flag)(?=[(])',
      name: 'support.function.prolog-flags.logtalk'
    },
    {
      match: '\\b(logtalk_(compile|l(ibrary_path|oad|oad_context)))(?=[(])',
      name: 'support.function.compiling-and-loading.logtalk'
    },
    {
      match: '\\b((abolish|define)_events|current_event)(?=[(])',
      name: 'support.function.event-handling.logtalk'
    },
    {
      match: '\\b((curren|se)t_logtalk_flag|halt)(?=[(])',
      name: 'support.function.implementation-defined-hooks.logtalk'
    },
    {
      match: '\\b(halt)\\b',
      name: 'support.function.implementation-defined-hooks.logtalk'
    },
    {
      match: '\\b((key)?(sort))(?=[(])',
      name: 'support.function.sorting.logtalk'
    },
    {
      match: '\\b((c(reate|urrent)|abolish)_(object|protocol|category))(?=[(])',
      name: 'support.function.entity-creation-and-abolishing.logtalk'
    },
    {
      match:
        '\\b((object|protocol|category)_property|co(mplements_object|nforms_to_protocol)|extends_(object|protocol|category)|imp(orts_category|lements_protocol)|(instantiat|specializ)es_class)(?=[(])',
      name: 'support.function.reflection.logtalk'
    },
    {match: '\\b((for|retract)all)(?=[(])', name: 'support.function.logtalk'},
    {
      match: '\\b(parameter|se(lf|nder)|this)(?=[(])',
      name: 'support.function.execution-context.logtalk'
    },
    {
      match: '\\b(a(bolish|ssert(a|z))|clause|retract(all)?)(?=[(])',
      name: 'support.function.database.logtalk'
    },
    {
      match: '\\b((bag|set)of|f(ind|or)all)(?=[(])',
      name: 'support.function.all-solutions.logtalk'
    },
    {
      match: '\\b(threaded(_(call|once|ignore|exit|peek|wait|notify))?)(?=[(])',
      name: 'support.function.multi-threading.logtalk'
    },
    {
      match: '\\b(current_predicate|predicate_property)(?=[(])',
      name: 'support.function.reflection.logtalk'
    },
    {
      match: '\\b(before|after)(?=[(])',
      name: 'support.function.event-handler.logtalk'
    },
    {
      match: '\\b(expand_(goal|term)|(goal|term)_expansion|phrase)(?=[(])',
      name: 'support.function.grammar-rule.logtalk'
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.logtalk'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.logtalk'}},
      name: 'string.quoted.single.logtalk',
      patterns: [
        {
          match: '\\\\([\\\\abfnrtv"\']|(x[a-fA-F0-9]+|[0-7]+)\\\\)',
          name: 'constant.character.escape.logtalk'
        }
      ]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.logtalk'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.logtalk'}},
      name: 'string.quoted.double.logtalk',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.logtalk'}]
    },
    {
      match: '\\b(0b[0-1]+|0o[0-7]+|0x[0-9A-Fa-f]+)\\b',
      name: 'constant.numeric.logtalk'
    },
    {match: "\\b(0'.|0''|0'\")", name: 'constant.numeric.logtalk'},
    {
      match: '\\b(\\d+\\.?\\d*((e|E)(\\+|-)?\\d+)?)\\b',
      name: 'constant.numeric.logtalk'
    },
    {match: '\\b([A-Z_][A-Za-z0-9_]*)\\b', name: 'variable.other.logtalk'}
  ],
  scopeName: 'source.logtalk'
}

export default grammar
