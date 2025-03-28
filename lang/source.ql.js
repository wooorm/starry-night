// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/github/vscode-codeql>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ql', '.qll'],
  names: ['codeql', 'ql'],
  patterns: [{include: '#module-member'}],
  repository: {
    abstract: {
      match: '(?x)\\b(?:abstract)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.abstract.ql'
    },
    additional: {
      match: '(?x)\\b(?:additional)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.additional.ql'
    },
    and: {
      match: '(?x)\\b(?:and)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.and.ql'
    },
    annotation: {
      patterns: [
        {include: '#bindingset-annotation'},
        {include: '#language-annotation'},
        {include: '#pragma-annotation'},
        {include: '#annotation-keyword'}
      ]
    },
    'annotation-keyword': {
      patterns: [
        {include: '#abstract'},
        {include: '#additional'},
        {include: '#bindingset'},
        {include: '#cached'},
        {include: '#default'},
        {include: '#deprecated'},
        {include: '#external'},
        {include: '#final'},
        {include: '#language'},
        {include: '#library'},
        {include: '#override'},
        {include: '#pragma'},
        {include: '#private'},
        {include: '#query'},
        {include: '#signature'},
        {include: '#transient'}
      ]
    },
    any: {
      match: '(?x)\\b(?:any)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.quantifier.any.ql'
    },
    'arithmetic-operator': {
      match: '(?x)\\+|-|\\*|/|%',
      name: 'keyword.operator.arithmetic.ql'
    },
    as: {
      match: '(?x)\\b(?:as)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.as.ql'
    },
    asc: {
      match: '(?x)\\b(?:asc)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.order.asc.ql'
    },
    'at-lower-id': {match: '(?x)@[a-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_])))'},
    avg: {
      match: '(?x)\\b(?:avg)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.aggregate.avg.ql'
    },
    bindingset: {
      match: '(?x)\\b(?:bindingset)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.bindingset.ql'
    },
    'bindingset-annotation': {
      begin: '(?x)((?:\\b(?:bindingset)(?:(?!(?:[0-9A-Za-z_])))))',
      beginCaptures: {1: {patterns: [{include: '#bindingset'}]}},
      end: '(?x)(?! (?:\\s | $ | (?:// | /\\*)) | \\[ ) | (?<=\\])',
      name: 'meta.block.bindingset-annotation.ql',
      patterns: [
        {include: '#bindingset-annotation-body'},
        {include: '#non-context-sensitive'}
      ]
    },
    'bindingset-annotation-body': {
      begin: '(?x)((?:\\[))',
      beginCaptures: {1: {patterns: [{include: '#open-bracket'}]}},
      end: '(?x)((?:\\]))',
      endCaptures: {1: {patterns: [{include: '#close-bracket'}]}},
      name: 'meta.block.bindingset-annotation-body.ql',
      patterns: [
        {include: '#non-context-sensitive'},
        {
          match: '(?x)(?:\\b [A-Za-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'variable.parameter.ql'
        }
      ]
    },
    boolean: {
      match: '(?x)\\b(?:boolean)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.type.boolean.ql'
    },
    by: {
      match: '(?x)\\b(?:by)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.order.by.ql'
    },
    cached: {
      match: '(?x)\\b(?:cached)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.cached.ql'
    },
    class: {
      match: '(?x)\\b(?:class)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.class.ql'
    },
    'class-body': {
      begin: '(?x)((?:\\{))',
      beginCaptures: {1: {patterns: [{include: '#open-brace'}]}},
      end: '(?x)((?:\\}))',
      endCaptures: {1: {patterns: [{include: '#close-brace'}]}},
      name: 'meta.block.class-body.ql',
      patterns: [{include: '#class-member'}]
    },
    'class-declaration': {
      begin: '(?x)((?:\\b(?:class)(?:(?!(?:[0-9A-Za-z_])))))',
      beginCaptures: {1: {patterns: [{include: '#class'}]}},
      end: '(?x)(?<= \\} | ; )',
      name: 'meta.block.class-declaration.ql',
      patterns: [
        {include: '#class-body'},
        {include: '#extends-clause'},
        {include: '#non-context-sensitive'},
        {
          match: '(?x)(?:\\b [A-Z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'entity.name.type.class.ql'
        }
      ]
    },
    'class-member': {
      patterns: [
        {include: '#predicate-or-field-declaration'},
        {include: '#annotation'},
        {include: '#non-context-sensitive'}
      ]
    },
    'close-angle': {match: '(?x)>', name: 'punctuation.anglebracket.close.ql'},
    'close-brace': {match: '(?x)\\}', name: 'punctuation.curlybrace.close.ql'},
    'close-bracket': {
      match: '(?x)\\]',
      name: 'punctuation.squarebracket.close.ql'
    },
    'close-paren': {match: '(?x)\\)', name: 'punctuation.parenthesis.close.ql'},
    comma: {match: '(?x),', name: 'punctuation.separator.comma.ql'},
    comment: {
      patterns: [
        {
          begin: '(?x)/\\*\\*',
          end: '(?x)\\*/',
          name: 'comment.block.documentation.ql',
          patterns: [
            {
              begin: '(?x)(?<=/\\*\\*)([^*]|\\*(?!/))*$',
              patterns: [
                {match: '(?x)\\G\\s* (@\\S+)', name: 'keyword.tag.ql'}
              ],
              while: '(?x)(^|\\G)\\s*([^*]|\\*(?!/))(?=([^*]|[*](?!/))*$)'
            }
          ]
        },
        {begin: '(?x)/\\*', end: '(?x)\\*/', name: 'comment.block.ql'},
        {match: '(?x)//.*$', name: 'comment.line.double-slash.ql'}
      ]
    },
    'comment-start': {match: '(?x)// | /\\*'},
    'comparison-operator': {
      match: '(?x)=|\\!\\=',
      name: 'keyword.operator.comparison.ql'
    },
    concat: {
      match: '(?x)\\b(?:concat)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.aggregate.concat.ql'
    },
    count: {
      match: '(?x)\\b(?:count)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.aggregate.count.ql'
    },
    date: {
      match: '(?x)\\b(?:date)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.type.date.ql'
    },
    default: {
      match: '(?x)\\b(?:default)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.default.ql'
    },
    deprecated: {
      match: '(?x)\\b(?:deprecated)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.deprecated.ql'
    },
    desc: {
      match: '(?x)\\b(?:desc)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.order.desc.ql'
    },
    'dont-care': {
      match: '(?x)\\b(?:_)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'variable.language.dont-care.ql'
    },
    dot: {match: '(?x)\\.', name: 'punctuation.accessor.ql'},
    dotdot: {match: '(?x)\\.\\.', name: 'punctuation.operator.range.ql'},
    else: {
      match: '(?x)\\b(?:else)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.else.ql'
    },
    'end-of-as-clause': {
      match:
        '(?x)(?: (?<=(?:[0-9A-Za-z_])) (?!(?:[0-9A-Za-z_])) (?<!(?<!(?:[0-9A-Za-z_]))as)) | (?=\\s* (?!(?:// | /\\*) | (?:\\b [A-Za-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))) \\S) | (?=\\s* (?:(?:(?:\\b(?:_)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:and)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:any)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:as)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:asc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:avg)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:boolean)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:by)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:class)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:concat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:count)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:date)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:desc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:else)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:exists)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:extends)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:false)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:float)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:forall)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:forex)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:from)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:if)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:implies)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:import)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:in)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:instanceof)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:int)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:max)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:min)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:module)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:newtype)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:none)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:not)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:or)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:order)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:predicate)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:rank)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:result)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:select)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:strictconcat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:strictcount)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:strictsum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:string)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:sum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:super)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:then)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:this)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:true)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:unique)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:where)(?:(?!(?:[0-9A-Za-z_])))))))'
    },
    'end-of-id': {match: '(?x)(?!(?:[0-9A-Za-z_]))'},
    exists: {
      match: '(?x)\\b(?:exists)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.quantifier.exists.ql'
    },
    'expr-as-clause': {
      begin: '(?x)((?:\\b(?:as)(?:(?!(?:[0-9A-Za-z_])))))',
      beginCaptures: {1: {patterns: [{include: '#as'}]}},
      end: '(?x)(?:(?: (?<=(?:[0-9A-Za-z_])) (?!(?:[0-9A-Za-z_])) (?<!(?<!(?:[0-9A-Za-z_]))as)) | (?=\\s* (?!(?:// | /\\*) | (?:\\b [A-Za-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))) \\S) | (?=\\s* (?:(?:(?:\\b(?:_)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:and)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:any)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:as)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:asc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:avg)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:boolean)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:by)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:class)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:concat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:count)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:date)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:desc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:else)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:exists)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:extends)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:false)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:float)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:forall)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:forex)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:from)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:if)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:implies)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:import)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:in)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:instanceof)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:int)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:max)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:min)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:module)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:newtype)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:none)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:not)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:or)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:order)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:predicate)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:rank)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:result)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:select)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:strictconcat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:strictcount)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:strictsum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:string)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:sum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:super)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:then)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:this)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:true)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:unique)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:where)(?:(?!(?:[0-9A-Za-z_]))))))))',
      name: 'meta.block.expr-as-clause.ql',
      patterns: [
        {include: '#non-context-sensitive'},
        {
          match: '(?x)(?:\\b [A-Za-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'variable.other.ql'
        }
      ]
    },
    extends: {
      match: '(?x)\\b(?:extends)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.extends.ql'
    },
    'extends-clause': {
      begin: '(?x)((?:\\b(?:extends)(?:(?!(?:[0-9A-Za-z_])))))',
      beginCaptures: {1: {patterns: [{include: '#extends'}]}},
      end: '(?x)(?= \\{ )',
      name: 'meta.block.extends-clause.ql',
      patterns: [
        {include: '#non-context-sensitive'},
        {
          match:
            '(?x)(?:\\b [A-Za-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))|(?:@[a-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'entity.name.type.ql'
        }
      ]
    },
    external: {
      match: '(?x)\\b(?:external)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.external.ql'
    },
    false: {
      match: '(?x)\\b(?:false)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'constant.language.boolean.false.ql'
    },
    final: {
      match: '(?x)\\b(?:final)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.final.ql'
    },
    float: {
      match: '(?x)\\b(?:float)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.type.float.ql'
    },
    'float-literal': {
      match: '(?x)-?[0-9]+\\.[0-9]+(?![0-9])',
      name: 'constant.numeric.decimal.ql'
    },
    forall: {
      match: '(?x)\\b(?:forall)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.quantifier.forall.ql'
    },
    forex: {
      match: '(?x)\\b(?:forex)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.quantifier.forex.ql'
    },
    from: {
      match: '(?x)\\b(?:from)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.from.ql'
    },
    'from-section': {
      begin: '(?x)((?:\\b(?:from)(?:(?!(?:[0-9A-Za-z_])))))',
      beginCaptures: {1: {patterns: [{include: '#from'}]}},
      end: '(?x)(?= (?:\\b(?:select)(?:(?!(?:[0-9A-Za-z_])))) | (?:\\b(?:where)(?:(?!(?:[0-9A-Za-z_])))) )',
      name: 'meta.block.from-section.ql',
      patterns: [
        {include: '#non-context-sensitive'},
        {
          match:
            '(?x)(?:\\b [A-Z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))(?=\\s*(?:,|(?:\\b(?:where)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:select)(?:(?!(?:[0-9A-Za-z_]))))|$))',
          name: 'variable.parameter.ql'
        },
        {include: '#module-qualifier'},
        {
          match:
            '(?x)(?:\\b [A-Z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))|(?:@[a-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'entity.name.type.ql'
        },
        {
          match: '(?x)(?:\\b [a-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'variable.parameter.ql'
        }
      ]
    },
    'id-character': {match: '(?x)[0-9A-Za-z_]'},
    if: {
      match: '(?x)\\b(?:if)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.if.ql'
    },
    implements: {
      match: '(?x)\\b(?:implements)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.implements.ql'
    },
    'implements-clause': {
      begin: '(?x)((?:\\b(?:implements)(?:(?!(?:[0-9A-Za-z_])))))',
      beginCaptures: {1: {patterns: [{include: '#implements'}]}},
      end: '(?x)(?= \\{ )',
      name: 'meta.block.implements-clause.ql',
      patterns: [
        {include: '#non-context-sensitive'},
        {
          match:
            '(?x)(?:\\b [A-Za-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))|(?:@[a-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'entity.name.type.ql'
        }
      ]
    },
    implies: {
      match: '(?x)\\b(?:implies)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.implies.ql'
    },
    import: {
      match: '(?x)\\b(?:import)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.import.ql'
    },
    'import-as-clause': {
      begin: '(?x)((?:\\b(?:as)(?:(?!(?:[0-9A-Za-z_])))))',
      beginCaptures: {1: {patterns: [{include: '#as'}]}},
      end: '(?x)(?:(?: (?<=(?:[0-9A-Za-z_])) (?!(?:[0-9A-Za-z_])) (?<!(?<!(?:[0-9A-Za-z_]))as)) | (?=\\s* (?!(?:// | /\\*) | (?:\\b [A-Za-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))) \\S) | (?=\\s* (?:(?:(?:\\b(?:_)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:and)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:any)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:as)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:asc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:avg)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:boolean)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:by)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:class)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:concat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:count)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:date)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:desc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:else)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:exists)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:extends)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:false)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:float)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:forall)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:forex)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:from)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:if)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:implies)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:import)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:in)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:instanceof)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:int)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:max)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:min)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:module)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:newtype)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:none)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:not)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:or)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:order)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:predicate)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:rank)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:result)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:select)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:strictconcat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:strictcount)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:strictsum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:string)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:sum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:super)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:then)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:this)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:true)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:unique)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:where)(?:(?!(?:[0-9A-Za-z_]))))))))',
      name: 'meta.block.import-as-clause.ql',
      patterns: [
        {include: '#non-context-sensitive'},
        {
          match: '(?x)(?:\\b [A-Za-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'entity.name.type.namespace.ql'
        }
      ]
    },
    'import-directive': {
      begin: '(?x)((?:\\b(?:import)(?:(?!(?:[0-9A-Za-z_])))))',
      beginCaptures: {1: {patterns: [{include: '#import'}]}},
      end: '(?x)(?<!\\bimport)(?<=(?:\\>)|[A-Za-z0-9_]) (?!\\s*(\\.|\\:\\:|\\,|(?:<)))',
      name: 'meta.block.import-directive.ql',
      patterns: [
        {include: '#instantiation-args'},
        {include: '#non-context-sensitive'},
        {
          match: '(?x)(?:\\b [A-Za-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'entity.name.type.namespace.ql'
        }
      ]
    },
    in: {
      match: '(?x)\\b(?:in)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.in.ql'
    },
    instanceof: {
      match: '(?x)\\b(?:instanceof)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.instanceof.ql'
    },
    'instantiation-args': {
      begin: '(?x)((?:<))',
      beginCaptures: {1: {patterns: [{include: '#open-angle'}]}},
      end: '(?x)((?:>))',
      endCaptures: {1: {patterns: [{include: '#close-angle'}]}},
      name: 'meta.type.parameters.ql',
      patterns: [
        {include: '#instantiation-args'},
        {include: '#non-context-sensitive'},
        {
          match: '(?x)(?:\\b [A-Za-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'entity.name.type.namespace.ql'
        }
      ]
    },
    int: {
      match: '(?x)\\b(?:int)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.type.int.ql'
    },
    'int-literal': {
      match: '(?x)-?[0-9]+(?![0-9])',
      name: 'constant.numeric.decimal.ql'
    },
    keyword: {
      patterns: [
        {include: '#dont-care'},
        {include: '#and'},
        {include: '#any'},
        {include: '#as'},
        {include: '#asc'},
        {include: '#avg'},
        {include: '#boolean'},
        {include: '#by'},
        {include: '#class'},
        {include: '#concat'},
        {include: '#count'},
        {include: '#date'},
        {include: '#desc'},
        {include: '#else'},
        {include: '#exists'},
        {include: '#extends'},
        {include: '#false'},
        {include: '#float'},
        {include: '#forall'},
        {include: '#forex'},
        {include: '#from'},
        {include: '#if'},
        {include: '#implies'},
        {include: '#import'},
        {include: '#in'},
        {include: '#instanceof'},
        {include: '#int'},
        {include: '#max'},
        {include: '#min'},
        {include: '#module'},
        {include: '#newtype'},
        {include: '#none'},
        {include: '#not'},
        {include: '#or'},
        {include: '#order'},
        {include: '#predicate'},
        {include: '#rank'},
        {include: '#result'},
        {include: '#select'},
        {include: '#strictconcat'},
        {include: '#strictcount'},
        {include: '#strictsum'},
        {include: '#string'},
        {include: '#sum'},
        {include: '#super'},
        {include: '#then'},
        {include: '#this'},
        {include: '#true'},
        {include: '#unique'},
        {include: '#where'}
      ]
    },
    language: {
      match: '(?x)\\b(?:language)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.language.ql'
    },
    'language-annotation': {
      begin: '(?x)((?:\\b(?:language)(?:(?!(?:[0-9A-Za-z_])))))',
      beginCaptures: {1: {patterns: [{include: '#language'}]}},
      end: '(?x)(?! (?:\\s | $ | (?:// | /\\*)) | \\[ ) | (?<=\\])',
      name: 'meta.block.language-annotation.ql',
      patterns: [
        {include: '#language-annotation-body'},
        {include: '#non-context-sensitive'}
      ]
    },
    'language-annotation-body': {
      begin: '(?x)((?:\\[))',
      beginCaptures: {1: {patterns: [{include: '#open-bracket'}]}},
      end: '(?x)((?:\\]))',
      endCaptures: {1: {patterns: [{include: '#close-bracket'}]}},
      name: 'meta.block.language-annotation-body.ql',
      patterns: [
        {include: '#non-context-sensitive'},
        {
          match: '(?x)\\b(?:monotonicAggregates)(?:(?!(?:[0-9A-Za-z_])))',
          name: 'storage.modifier.ql'
        }
      ]
    },
    library: {
      match: '(?x)\\b(?:library)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.library.ql'
    },
    literal: {
      patterns: [
        {include: '#float-literal'},
        {include: '#int-literal'},
        {include: '#string-literal'}
      ]
    },
    'lower-id': {match: '(?x)\\b [a-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_])))'},
    max: {
      match: '(?x)\\b(?:max)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.aggregate.max.ql'
    },
    min: {
      match: '(?x)\\b(?:min)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.aggregate.min.ql'
    },
    module: {
      match: '(?x)\\b(?:module)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.module.ql'
    },
    'module-body': {
      begin: '(?x)((?:\\{))',
      beginCaptures: {1: {patterns: [{include: '#open-brace'}]}},
      end: '(?x)((?:\\}))',
      endCaptures: {1: {patterns: [{include: '#close-brace'}]}},
      name: 'meta.block.module-body.ql',
      patterns: [{include: '#module-member'}]
    },
    'module-declaration': {
      begin: '(?x)((?:\\b(?:module)(?:(?!(?:[0-9A-Za-z_])))))',
      beginCaptures: {1: {patterns: [{include: '#module'}]}},
      end: '(?x)(?<=\\}|;)',
      name: 'meta.block.module-declaration.ql',
      patterns: [
        {include: '#module-body'},
        {include: '#implements-clause'},
        {include: '#non-context-sensitive'},
        {
          match: '(?x)(?:\\b [A-Za-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'entity.name.type.namespace.ql'
        }
      ]
    },
    'module-member': {
      patterns: [
        {include: '#import-directive'},
        {include: '#import-as-clause'},
        {include: '#module-declaration'},
        {include: '#newtype-declaration'},
        {include: '#newtype-branch-name-with-prefix'},
        {include: '#predicate-parameter-list'},
        {include: '#predicate-body'},
        {include: '#class-declaration'},
        {include: '#select-clause'},
        {include: '#predicate-or-field-declaration'},
        {include: '#non-context-sensitive'},
        {include: '#annotation'}
      ]
    },
    'module-qualifier': {
      match:
        '(?x)(?:\\b [A-Za-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_])))) (?=\\s*\\:\\:)',
      name: 'entity.name.type.namespace.ql'
    },
    newtype: {
      match: '(?x)\\b(?:newtype)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.newtype.ql'
    },
    'newtype-branch-name-with-prefix': {
      begin: '(?x)\\= | (?:\\b(?:or)(?:(?!(?:[0-9A-Za-z_]))))',
      beginCaptures: {
        0: {patterns: [{include: '#or'}, {include: '#comparison-operator'}]}
      },
      end: '(?x)(?:\\b [A-Z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
      endCaptures: {0: {name: 'entity.name.type.ql'}},
      name: 'meta.block.newtype-branch-name-with-prefix.ql',
      patterns: [{include: '#non-context-sensitive'}]
    },
    'newtype-declaration': {
      begin: '(?x)((?:\\b(?:newtype)(?:(?!(?:[0-9A-Za-z_])))))',
      beginCaptures: {1: {patterns: [{include: '#newtype'}]}},
      end: '(?x)(?:\\b [A-Z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
      endCaptures: {0: {name: 'entity.name.type.ql'}},
      name: 'meta.block.newtype-declaration.ql',
      patterns: [{include: '#non-context-sensitive'}]
    },
    'non-context-sensitive': {
      patterns: [
        {include: '#comment'},
        {include: '#literal'},
        {include: '#operator-or-punctuation'},
        {include: '#keyword'}
      ]
    },
    none: {
      match: '(?x)\\b(?:none)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.quantifier.none.ql'
    },
    not: {
      match: '(?x)\\b(?:not)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.not.ql'
    },
    'open-angle': {match: '(?x)<', name: 'punctuation.anglebracket.open.ql'},
    'open-brace': {match: '(?x)\\{', name: 'punctuation.curlybrace.open.ql'},
    'open-bracket': {
      match: '(?x)\\[',
      name: 'punctuation.squarebracket.open.ql'
    },
    'open-paren': {match: '(?x)\\(', name: 'punctuation.parenthesis.open.ql'},
    'operator-or-punctuation': {
      patterns: [
        {include: '#relational-operator'},
        {include: '#comparison-operator'},
        {include: '#arithmetic-operator'},
        {include: '#comma'},
        {include: '#semicolon'},
        {include: '#dot'},
        {include: '#dotdot'},
        {include: '#pipe'},
        {include: '#open-paren'},
        {include: '#close-paren'},
        {include: '#open-brace'},
        {include: '#close-brace'},
        {include: '#open-bracket'},
        {include: '#close-bracket'},
        {include: '#open-angle'},
        {include: '#close-angle'}
      ]
    },
    or: {
      match: '(?x)\\b(?:or)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.or.ql'
    },
    order: {
      match: '(?x)\\b(?:order)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.order.order.ql'
    },
    override: {
      match: '(?x)\\b(?:override)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.override.ql'
    },
    pipe: {match: '(?x)\\|', name: 'punctuation.separator.pipe.ql'},
    pragma: {
      match: '(?x)\\b(?:pragma)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.pragma.ql'
    },
    'pragma-annotation': {
      begin: '(?x)((?:\\b(?:pragma)(?:(?!(?:[0-9A-Za-z_])))))',
      beginCaptures: {1: {patterns: [{include: '#pragma'}]}},
      end: '(?x)(?! (?:\\s | $ | (?:// | /\\*)) | \\[ ) | (?<=\\])',
      name: 'meta.block.pragma-annotation.ql',
      patterns: [
        {include: '#pragma-annotation-body'},
        {include: '#non-context-sensitive'}
      ]
    },
    'pragma-annotation-body': {
      begin: '(?x)((?:\\[))',
      beginCaptures: {1: {patterns: [{include: '#open-bracket'}]}},
      end: '(?x)((?:\\]))',
      endCaptures: {1: {patterns: [{include: '#close-bracket'}]}},
      name: 'meta.block.pragma-annotation-body.ql',
      patterns: [
        {
          match: '(?x)\\b(?:inline|noinline|nomagic|noopt)\\b',
          name: 'storage.modifier.ql'
        }
      ]
    },
    predicate: {
      match: '(?x)\\b(?:predicate)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.predicate.ql'
    },
    'predicate-body': {
      begin: '(?x)((?:\\{))',
      beginCaptures: {1: {patterns: [{include: '#open-brace'}]}},
      end: '(?x)((?:\\}))',
      endCaptures: {1: {patterns: [{include: '#close-brace'}]}},
      name: 'meta.block.predicate-body.ql',
      patterns: [{include: '#predicate-body-contents'}]
    },
    'predicate-body-contents': {
      patterns: [
        {include: '#expr-as-clause'},
        {include: '#non-context-sensitive'},
        {include: '#module-qualifier'},
        {
          match:
            '(?x)(?:\\b [a-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))\\s*(?:\\*|\\+)?\\s*(?=\\()',
          name: 'entity.name.function.ql'
        },
        {
          match: '(?x)(?:\\b [a-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'variable.other.ql'
        },
        {
          match:
            '(?x)(?:\\b [A-Z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))|(?:@[a-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'entity.name.type.ql'
        }
      ]
    },
    'predicate-or-field-declaration': {
      begin:
        '(?x)(?:(?=(?:\\b [A-Za-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_])))))(?!(?:(?:(?:\\b(?:_)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:and)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:any)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:as)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:asc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:avg)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:boolean)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:by)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:class)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:concat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:count)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:date)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:desc)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:else)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:exists)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:extends)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:false)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:float)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:forall)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:forex)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:from)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:if)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:implies)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:import)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:in)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:instanceof)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:int)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:max)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:min)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:module)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:newtype)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:none)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:not)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:or)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:order)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:predicate)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:rank)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:result)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:select)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:strictconcat)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:strictcount)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:strictsum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:string)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:sum)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:super)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:then)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:this)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:true)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:unique)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:where)(?:(?!(?:[0-9A-Za-z_]))))))|(?:(?:(?:\\b(?:abstract)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:additional)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:bindingset)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:cached)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:default)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:deprecated)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:external)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:final)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:language)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:library)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:override)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:pragma)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:private)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:query)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:signature)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:transient)(?:(?!(?:[0-9A-Za-z_])))))))) | (?=(?:(?:(?:\\b(?:boolean)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:date)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:float)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:int)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:predicate)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:string)(?:(?!(?:[0-9A-Za-z_]))))))) | (?=(?:@[a-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_])))))',
      end: '(?x)(?<=\\}|;)',
      name: 'meta.block.predicate-or-field-declaration.ql',
      patterns: [
        {include: '#predicate-parameter-list'},
        {include: '#predicate-body'},
        {include: '#non-context-sensitive'},
        {include: '#module-qualifier'},
        {
          match:
            '(?x)(?:\\b [a-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))(?=\\s*;)',
          name: 'variable.field.ql'
        },
        {
          match: '(?x)(?:\\b [a-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'entity.name.function.ql'
        },
        {
          match:
            '(?x)(?:\\b [A-Z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))|(?:@[a-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'entity.name.type.ql'
        }
      ]
    },
    'predicate-parameter-list': {
      begin: '(?x)((?:\\())',
      beginCaptures: {1: {patterns: [{include: '#open-paren'}]}},
      end: '(?x)((?:\\)))',
      endCaptures: {1: {patterns: [{include: '#close-paren'}]}},
      name: 'meta.block.predicate-parameter-list.ql',
      patterns: [
        {include: '#non-context-sensitive'},
        {
          match:
            '(?x)(?:\\b [A-Z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))(?=\\s*(?:,|\\)))',
          name: 'variable.parameter.ql'
        },
        {include: '#module-qualifier'},
        {
          match:
            '(?x)(?:\\b [A-Z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))|(?:@[a-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'entity.name.type.ql'
        },
        {
          match: '(?x)(?:\\b [a-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'variable.parameter.ql'
        }
      ]
    },
    'predicate-start-keyword': {
      patterns: [
        {include: '#boolean'},
        {include: '#date'},
        {include: '#float'},
        {include: '#int'},
        {include: '#predicate'},
        {include: '#string'}
      ]
    },
    private: {
      match: '(?x)\\b(?:private)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.private.ql'
    },
    query: {
      match: '(?x)\\b(?:query)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.query.ql'
    },
    rank: {
      match: '(?x)\\b(?:rank)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.aggregate.rank.ql'
    },
    'relational-operator': {
      match: '(?x)<=|<|>=|>',
      name: 'keyword.operator.relational.ql'
    },
    result: {
      match: '(?x)\\b(?:result)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'variable.language.result.ql'
    },
    select: {
      match: '(?x)\\b(?:select)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.query.select.ql'
    },
    'select-as-clause': {
      begin: '(?x)((?:\\b(?:as)(?:(?!(?:[0-9A-Za-z_])))))',
      beginCaptures: {1: {patterns: [{include: '#as'}]}},
      end: '(?x)(?<=(?:[0-9A-Za-z_]))(?:(?!(?:[0-9A-Za-z_])))',
      match: '(?x)meta.block.select-as-clause.ql',
      patterns: [
        {include: '#non-context-sensitive'},
        {
          match: '(?x)(?:\\b [A-Za-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_]))))',
          name: 'variable.other.ql'
        }
      ]
    },
    'select-clause': {
      begin:
        '(?x)(?=(?:\\b(?:from)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:where)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:select)(?:(?!(?:[0-9A-Za-z_])))))',
      end: '(?x)(?!(?:\\b(?:from)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:where)(?:(?!(?:[0-9A-Za-z_]))))|(?:\\b(?:select)(?:(?!(?:[0-9A-Za-z_])))))',
      name: 'meta.block.select-clause.ql',
      patterns: [
        {include: '#from-section'},
        {include: '#where-section'},
        {include: '#select-section'}
      ]
    },
    'select-section': {
      begin: '(?x)((?:\\b(?:select)(?:(?!(?:[0-9A-Za-z_])))))',
      beginCaptures: {1: {patterns: [{include: '#select'}]}},
      end: '(?x)(?=\\n)',
      name: 'meta.block.select-section.ql',
      patterns: [
        {include: '#predicate-body-contents'},
        {include: '#select-as-clause'}
      ]
    },
    semicolon: {match: '(?x);', name: 'punctuation.separator.statement.ql'},
    signature: {
      match: '(?x)\\b(?:signature)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.signature.ql'
    },
    'simple-id': {
      match: '(?x)\\b [A-Za-z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_])))'
    },
    strictconcat: {
      match: '(?x)\\b(?:strictconcat)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.aggregate.strictconcat.ql'
    },
    strictcount: {
      match: '(?x)\\b(?:strictcount)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.aggregate.strictcount.ql'
    },
    strictsum: {
      match: '(?x)\\b(?:strictsum)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.aggregate.strictsum.ql'
    },
    string: {
      match: '(?x)\\b(?:string)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.type.string.ql'
    },
    'string-escape': {
      match: '(?x)\\\\["\\\\nrt]',
      name: 'constant.character.escape.ql'
    },
    'string-literal': {
      begin: '(?x)"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.ql'}},
      end: '(?x)(") | ((?:[^\\\\\\n])$)',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.ql'},
        2: {name: 'invalid.illegal.newline.ql'}
      },
      name: 'string.quoted.double.ql',
      patterns: [{include: '#string-escape'}]
    },
    sum: {
      match: '(?x)\\b(?:sum)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.aggregate.sum.ql'
    },
    super: {
      match: '(?x)\\b(?:super)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'variable.language.super.ql'
    },
    then: {
      match: '(?x)\\b(?:then)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.other.then.ql'
    },
    this: {
      match: '(?x)\\b(?:this)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'variable.language.this.ql'
    },
    transient: {
      match: '(?x)\\b(?:transient)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'storage.modifier.transient.ql'
    },
    true: {
      match: '(?x)\\b(?:true)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'constant.language.boolean.true.ql'
    },
    unique: {
      match: '(?x)\\b(?:unique)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.aggregate.unique.ql'
    },
    'upper-id': {match: '(?x)\\b [A-Z][0-9A-Za-z_]* (?:(?!(?:[0-9A-Za-z_])))'},
    where: {
      match: '(?x)\\b(?:where)(?:(?!(?:[0-9A-Za-z_])))',
      name: 'keyword.query.where.ql'
    },
    'where-section': {
      begin: '(?x)((?:\\b(?:where)(?:(?!(?:[0-9A-Za-z_])))))',
      beginCaptures: {1: {patterns: [{include: '#where'}]}},
      end: '(?x)(?=(?:\\b(?:select)(?:(?!(?:[0-9A-Za-z_])))))',
      name: 'meta.block.where-section.ql',
      patterns: [{include: '#predicate-body-contents'}]
    },
    'whitespace-or-comment-start': {match: '(?x)\\s | $ | (?:// | /\\*)'}
  },
  scopeName: 'source.ql'
}

export default grammar
