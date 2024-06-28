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
  extensions: ['.te'],
  names: ['selinux-policy', 'selinux-kernel-policy-language', 'sepolicy'],
  patterns: [{include: '#main'}],
  repository: {
    comments: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.sepolicy'}},
          match: '(#).*',
          name: 'comment.line.number-sign.sepolicy'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(alias|allow|and|attribute|attribute_role|auditallow|auditdeny|bool|category|cfalse|class|clone|common|constrain|ctrue|dom|domby|dominance|dontaudit|else|equals|false|filename|filesystem|fscon|fs_use_task|fs_use_trans|fs_use_xattr|genfscon|h1|h2|identifier|if|incomp|inherits|iomemcon|ioportcon|ipv4_addr|ipv6_addr|l1|l2|level|mlsconstrain|mlsvalidatetrans|module|netifcon|neverallow|nodecon|not|notequal|number|object_r|optional|or|path|pcidevicecon|permissive|pirqcon|policycap|portcon|r1|r2|r3|range|range_transition|require|role|roleattribute|roles|role_transition|sameuser|sensitivity|sid|source|t1|t2|t3|target|true|type|typealias|typeattribute|typebounds|type_change|type_member|types|type_transition|u1|u2|u3|user|validatetrans|version_identifier|xor|default_user|default_role|default_type|default_range|low|high|low_high)\\b',
          name: 'keyword.sepolicy'
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comments'},
        {include: '#keywords'},
        {include: '#numbers'},
        {include: '#punctuation'}
      ]
    },
    numbers: {
      patterns: [
        {
          match: '(0x[0-9a-fA-F]+)',
          name: 'constant.numeric.integer.hexadecimal.sepolicy'
        },
        {match: '([0-9]+)', name: 'constant.numeric.integer.decimal.sepolicy'}
      ]
    },
    punctuation: {
      patterns: [
        {match: '(;)', name: 'punctuation.terminator.sepolicy'},
        {match: '(==|!=|&&|\\|\\||!|\\^)', name: 'keyword.operator.sepolicy'},
        {match: '([,:])', name: 'punctuation.separator.sepolicy'},
        {match: '([.~*-])', name: 'punctuation.sepolicy'},
        {match: '(\\{)', name: 'punctuation.section.braces.begin.sepolicy'},
        {match: '(\\})', name: 'punctuation.section.braces.end.sepolicy'},
        {match: '(\\()', name: 'punctuation.section.parens.begin.sepolicy'},
        {match: '(\\))', name: 'punctuation.section.parens.end.sepolicy'}
      ]
    }
  },
  scopeName: 'source.sepolicy'
}

export default grammar
