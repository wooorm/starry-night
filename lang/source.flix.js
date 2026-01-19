// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/flix/textmate>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.flix'],
  names: ['flix'],
  patterns: [{include: '#all_patterns'}],
  repository: {
    all_patterns: {
      patterns: [
        {include: '#constants'},
        {include: '#keywords'},
        {include: '#literal_char'},
        {include: '#literal_string'},
        {include: '#literal_dec'},
        {include: '#literal_hex'},
        {include: '#annotations'},
        {include: '#types'},
        {include: '#comments'}
      ]
    },
    annotations: {
      patterns: [
        {match: '@Deprecated', name: 'storage.type.annotation.flix'},
        {match: '@Experimental', name: 'storage.type.annotation.flix'},
        {match: '@Internal', name: 'storage.type.annotation.flix'},
        {match: '@ParallelWhenPure', name: 'storage.type.annotation.flix'},
        {match: '@Parallel', name: 'storage.type.annotation.flix'},
        {match: '@LazyWhenPure', name: 'storage.type.annotation.flix'},
        {match: '@Lazy', name: 'storage.type.annotation.flix'},
        {match: '@Skip', name: 'storage.type.annotation.flix'},
        {match: '@Test', name: 'storage.type.annotation.flix'}
      ]
    },
    comments: {
      patterns: [
        {match: '//.*$', name: 'comment.line.double-slash.flix'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.flix'}
      ]
    },
    constants: {
      patterns: [
        {match: '\\b\\(\\)\\b', name: 'constant.language.unit.flix'},
        {match: '\\b(true|false)\\b', name: 'constant.language.bool.flix'},
        {
          match: '\\b(LessThan|EqualTo|GreaterThan)\\b',
          name: 'constant.language.comparison.flix'
        },
        {match: '\\b(Nil)\\b', name: 'constant.language.nil.flix'},
        {match: '\\b(null)\\b', name: 'constant.language.null.flix'},
        {match: '\\b(Some|None)\\b', name: 'constant.language.option.flix'},
        {match: '\\b(Ok|Err)\\b', name: 'constant.language.result.flix'}
      ]
    },
    keywords: {
      patterns: [
        {
          match: '\\b(choose\\*|choose)\\b',
          name: 'keyword.control.choose.flix'
        },
        {match: '\\b(dbg)\\b', name: 'keyword.control.debug.flix'},
        {match: '\\b(forA)\\b', name: 'keyword.control.applicativefor.flix'},
        {match: '\\b(forM)\\b', name: 'keyword.control.monadicfor.flix'},
        {match: '\\b(foreach)\\b', name: 'keyword.control.foreach.flix'},
        {match: '\\b(handler)\\b', name: 'keyword.control.handler.flix'},
        {match: '\\b(yield)\\b', name: 'keyword.control.yield.flix'},
        {match: '\\b(if|else)\\b', name: 'keyword.control.if.flix'},
        {
          match: '\\b(case|match|typematch|ematch)\\b',
          name: 'keyword.control.match.flix'
        },
        {match: '\\b(run)\\b', name: 'keyword.control.run.flix'},
        {match: '\\b(resume)\\b', name: 'keyword.control.resume.flix'},
        {match: '\\b(throw)\\b', name: 'keyword.control.throw.flix'},
        {match: '\\b(try|catch)\\b', name: 'keyword.control.try.flix'},
        {match: '\\b(spawn)\\b', name: 'keyword.control.spawn.flix'},
        {match: '\\b(par)\\b', name: 'keyword.control.par.flix'},
        {match: '\\b(unsafe)\\b', name: 'keyword.control.unsafe.flix'},
        {match: '\\b(branch|jumpto)\\b', name: 'keyword.control.ast.flix'},
        {match: '\\b(forall)\\b', name: 'keyword.forall.flix'},
        {match: '\\b(not|and|or)\\b', name: 'keyword.operator.bool.flix'},
        {match: '\\bfix\\b', name: 'keyword.operator.fix.flix'},
        {match: '\\b(new)\\b', name: 'keyword.operator.new.flix'},
        {
          match:
            '\\b(eff|def|redef|law|enum|case|type|alias|trait|instance|with|without|opaque|mod|struct|handler|xvar)\\b',
          name: 'keyword.declaration.flix'
        },
        {
          match: '\\b(checked_cast|checked_ecast|unchecked_cast|as)\\b',
          name: 'keyword.expression.cast.flix'
        },
        {match: '\\b(discard)\\b', name: 'keyword.expression.discard.flix'},
        {
          match:
            '\\b(from|into|inject|project|psolve|solve|query|pquery|where|select)\\b',
          name: 'keyword.expression.fixpoint.flix'
        },
        {match: '\\b(force)\\b', name: 'keyword.expression.force.flix'},
        {
          match: '(\\?\\?\\?|\\?[a-zA-Z0-9]+)',
          name: 'keyword.expression.hole.flix'
        },
        {match: '\\b(import)\\b', name: 'keyword.expression.import.flix'},
        {
          match: '\\b(instanceof)\\b',
          name: 'keyword.expression.instanceof.flix'
        },
        {match: '\\b(let)\\b', name: 'keyword.expression.let.flix'},
        {match: '\\b(lazy)\\b', name: 'keyword.expression.lazy.flix'},
        {match: '\\b(region)\\b', name: 'keyword.expression.region.flix'},
        {match: '\\b(use)\\b', name: 'keyword.use.flix'},
        {match: '\\b(mut)\\b', name: 'keyword.mut.flix'},
        {match: '(~>|<\\-|=>)', name: 'keyword.symbols.flix'},
        {
          match: '(\\s\\->\\s|\\s\\->|\\->\\s)',
          name: 'keyword.arrow.function.flix'
        },
        {match: '\\->', name: 'keyword.operator.arrow.struct.flix'},
        {match: ';', name: 'keyword.control.semicolon.flix'},
        {
          match: '\\b(lawful|pub|sealed|static)\\b',
          name: 'storage.type.modifier.flix'
        }
      ]
    },
    literal_char: {
      begin: "'",
      end: "'",
      name: 'string.quoted.single.flix',
      patterns: [
        {match: '\\\\((u[0-9a-fA-F]{4})|.)', name: 'constant.character.escape'}
      ]
    },
    literal_dec: {
      patterns: [
        {
          match: '\\b[0-9](_*[0-9])*\\.[0-9](_*[0-9])*(f32|f64)?\\b',
          name: 'constant.numeric.decimal.flix'
        },
        {
          match: '\\b[0-9](_*[0-9])*\\.[0-9](_*[0-9])*(ff)?\\b',
          name: 'constant.numeric.decimal.bigdecimal.flix'
        },
        {
          match: '(?<!\\$)\\b[0-9](_*[0-9])*(i8|i16|i32|i64|ii)?\\b',
          name: 'constant.numeric.decimal.flix'
        }
      ]
    },
    literal_hex: {
      match: '\\b0x[a-fA-F0-9](_*[a-fA-F0-9])*(i8|i16|i32|i64|ii)?\\b',
      name: 'constant.numeric.hex.flix'
    },
    literal_string: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.flix',
      patterns: [
        {
          match: '\\\\((u[0-9a-fA-F]{4})|.)',
          name: 'constant.character.escape.flix'
        },
        {
          begin: '\\$\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.template-expression.begin.flix'}
          },
          contentName: 'meta.embedded.line.flix',
          end: '\\}',
          endCaptures: {
            0: {name: 'punctuation.definition.template-expression.end.flix'}
          },
          patterns: [{include: '#all_patterns'}]
        }
      ]
    },
    types: {
      patterns: [
        {
          match:
            '\\b(Unit|Bool|Char|Float32|Float64|Int8|Int16|Int32|Int64|BigInt|String)\\b',
          name: 'entity.name.type'
        }
      ]
    }
  },
  scopeName: 'source.flix'
}

export default grammar
