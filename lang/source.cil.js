// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/google/selinux-policy-languages>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.cil'],
  names: ['cil'],
  patterns: [{include: '#main'}],
  repository: {
    comments: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.cil'}},
          match: '(;).*',
          name: 'comment.line.number-sign.cil'
        }
      ]
    },
    constants: {
      patterns: [
        {match: '\\b([0-9]+)\\b', name: 'constant.numeric.integer.decimal.cil'},
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.aidl'},
            2: {name: 'string.quoted.double.aidl'},
            3: {name: 'punctuation.definition.string.end.aidl'}
          },
          match: '(")([^\\"]*)(")',
          name: 'meta.string.aidl'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(allow|allowx|any|auditallow|auditallowx|block|blockabstract|blockinherit|boolean|booleanif|call|category|categoryalias|categoryaliasactual|categoryorder|categoryset|char|class|classcommon|classmap|classmapping|classorder|classpermission|classpermissionset|common|constrain|context|defaultrange|defaultrole|defaulttype|defaultuser|deny|devicetreecon|dir|dontaudit|dontauditx|expandtypeattribute|file|filecon|fsuse|genfscon|glblub|handleunknown|high|ibendportcon|ibpkeycon|in|ioctl|iomemcon|ioportcon|ipaddr|level|levelrange|low|low-high|macro|mls|mlsconstrain|mlsvalidatetrans|name|netifcon|neverallow|neverallowx|<node>|nodecon|optional|pcidevicecon|perm|permissionx|pipe|pirqcon|policycap|portcon|rangetransition|reject|role|roleallow|roleattribute|roleattributeset|rolebounds|roletransition|roletype|<root>|selinuxuser|selinuxuserdefault|sensitivity|sensitivityalias|sensitivityaliasactual|sensitivitycategory|sensitivityorder|sid|sidcontext|sidorder|socket|source|<src_cil>|<src_hll>|<src_info>|string|symlink|target|task|trans|tunable|tunableif|type|typealias|typealiasactual|typeattribute|typeattributeset|typebounds|typechange|typemember|typepermissive|typetransition|unordered|user|userattribute|userattributeset|userbounds|userlevel|userprefix|userrange|userrole|validatetrans|xattr)\\b',
          name: 'keyword.cil'
        },
        {
          match: '\\b(and|or|xor|not|all|eq|neq|dom|domby|incomp|range)\\b',
          name: 'keyword.operator.word.cil'
        },
        {
          match:
            '\\b(\\*|dccp|false|h1|h2|l1|l2|object_r|r1|r2|r3|sctp|self|t1|t2|t2|tcp|true|u1|u2|u3|udp)\\b',
          name: 'constant.language.cil'
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comments'},
        {include: '#keywords'},
        {include: '#constants'},
        {include: '#punctuation'}
      ]
    },
    punctuation: {
      patterns: [
        {match: '(\\()', name: 'punctuation.section.parens.begin.cil'},
        {match: '(\\))', name: 'punctuation.section.parens.end.cil'}
      ]
    }
  },
  scopeName: 'source.cil'
}

export default grammar
