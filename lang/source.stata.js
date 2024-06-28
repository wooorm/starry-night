// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/pschumm/Stata.tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.do', '.ado', '.doh', '.ihlp', '.mata', '.matah', '.sthlp'],
  names: ['stata'],
  patterns: [
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.stata'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.stata'}},
      name: 'string.quoted.double.stata'
    },
    {
      begin: '`"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.stata'}},
      end: '"\'',
      endCaptures: {0: {name: 'punctuation.definition.string.end.stata'}},
      name: 'string.quoted.double.compound.stata',
      patterns: [{include: '#cdq_string_content'}]
    },
    {
      begin: '/\\*',
      beginCaptures: {0: {name: 'punctuation.definition.comment.begin.stata'}},
      end: '\\*/',
      endCaptures: {0: {name: 'punctuation.definition.comment.end.stata'}},
      name: 'comment.block.stata',
      patterns: [{include: '#cb_content'}]
    },
    {
      captures: {0: {name: 'punctuation.definition.comment.stata'}},
      match: '^\\s*(\\*).*$\\n?',
      name: 'comment.line.star.stata'
    },
    {
      captures: {0: {name: 'punctuation.definition.comment.stata'}},
      match: '(///).*$\\n?',
      name: 'comment.line.triple-slash.stata'
    },
    {
      captures: {0: {name: 'punctuation.definition.comment.stata'}},
      match: '(//).*$\\n?',
      name: 'comment.line.double-slash.stata'
    },
    {match: '\\+|\\-|\\*|\\^', name: 'keyword.operator.arithmetic.stata'},
    {
      match: '(?<![a-zA-Z.])/(?![a-zA-Z.]|$)',
      name: 'keyword.operator.arithmetic.stata'
    },
    {match: '\\&|\\||!|~', name: 'keyword.operator.logical.stata'},
    {
      match: '<|>|<\\=|>\\=|\\=\\=|!\\=|~\\=',
      name: 'keyword.operator.comparison.stata'
    },
    {match: '\\=', name: 'keyword.operator.assignment.stata'},
    {
      match: '\\b(while|forv(a|al|alu|alue|alues)?|continue)\\b',
      name: 'keyword.control.flow.stata'
    },
    {
      captures: {
        1: {name: 'keyword.control.flow.stata'},
        2: {name: 'keyword.control.flow.stata'}
      },
      match:
        '\\b(foreach)\\s+[a-zA-Z0-9_]+\\s+(in|of loc(a|al)?|of glo(b|ba|bal)?|of var(l|li|lis|list)?|of new(l|li|lis|list)?|of num(l|li|lis|list)?)\\b'
    },
    {
      captures: {1: {name: 'keyword.control.flow.stata'}},
      match: '^\\s*(if|else if|else)\\b'
    },
    {
      captures: {1: {name: 'storage.type.macro.stata'}},
      match: '^\\s*(gl(o|ob|oba|obal)?|loc(a|al)?|tempvar|tempname|tempfile)\\b'
    },
    {
      captures: {1: {name: 'storage.type.scalar.stata'}},
      match:
        '^\\s*(sca(l|la|lar)?(\\s+de(f|fi|fin|fine)?)?)\\s+(?!(drop|dir?|l(i|is|ist)?)\\s+)'
    },
    {
      captures: {
        4: {name: 'keyword.control.flow.stata'},
        5: {name: 'keyword.control.flow.stata'}
      },
      match:
        '(^|:|{|qui(e|et|etl|etly)?\\s+|n(o|oi|ois|oisi|oisil|oisily)?\\s+)\\s*(by(s|so|sor|sort)?)((\\s|,)[^:]*)?(?=:)'
    },
    {
      captures: {4: {name: 'storage.type.variable.stata'}},
      match:
        '(^|:|{|qui(e|et|etl|etly)?\\s+|n(o|oi|ois|oisi|oisil|oisily)?\\s+)\\s*((g(e|en|ene|ener|enera|enerat|enerate)?)|replace|egen)\\b'
    },
    {
      begin: '^\\s*mata:?\\s*$',
      contentName: 'source.mata',
      end: '^\\s*end\\s*$\\n?',
      name: 'meta.embedded.block.mata',
      patterns: [{include: 'source.mata'}]
    }
  ],
  repository: {
    cb_content: {
      begin: '/\\*',
      end: '\\*/',
      patterns: [{include: '#cb_content'}]
    },
    cdq_string_content: {
      begin: '`"',
      end: '"\'',
      patterns: [{include: '#cdq_string_content'}]
    }
  },
  scopeName: 'source.stata'
}

export default grammar
