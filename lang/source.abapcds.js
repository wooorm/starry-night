// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/FreHu/abap-cds-grammar>
// and licensed `unlicense`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.asddls'],
  names: ['abap-cds'],
  patterns: [{include: '#bracketed'}, {include: '#non-bracketed'}],
  repository: {
    annotations: {
      patterns: [
        {
          begin: '(@\\<?)',
          beginCaptures: {1: {name: 'comment.line.annotation.symbol.abapcds'}},
          end: ':|\\n',
          patterns: [
            {
              captures: {
                1: {name: 'comment.line.annotation.property.lvl1.abapcds'},
                2: {name: 'comment.line.annotation.property.lvl2.abapcds'},
                3: {name: 'comment.line.annotation.property.lvl3.abapcds'},
                4: {name: 'comment.line.annotation.property.lvl4.abapcds'},
                5: {name: 'comment.line.annotation.property.lvl5.abapcds'}
              },
              match:
                '\\.?([a-zA-Z//][a-zA-Z//_0-9]+)\\.([a-zA-Z//][a-zA-Z//_0-9]+)\\.([a-zA-Z//][a-zA-Z//_0-9]+)\\.([a-zA-Z//][a-zA-Z//_0-9]+)\\.([a-zA-Z//][a-zA-Z//_0-9]+)'
            },
            {
              captures: {
                1: {name: 'comment.line.annotation.property.lvl1.abapcds'},
                2: {name: 'comment.line.annotation.property.lvl2.abapcds'},
                3: {name: 'comment.line.annotation.property.lvl3.abapcds'},
                4: {name: 'comment.line.annotation.property.lvl4.abapcds'}
              },
              match:
                '\\.?([a-zA-Z//][a-zA-Z//_0-9]+)\\.([a-zA-Z//][a-zA-Z//_0-9]+)\\.([a-zA-Z//][a-zA-Z//_0-9]+)\\.([a-zA-Z//][a-zA-Z//_0-9]+)'
            },
            {
              captures: {
                1: {name: 'comment.line.annotation.property.lvl1.abapcds'},
                2: {name: 'comment.line.annotation.property.lvl2.abapcds'},
                3: {name: 'comment.line.annotation.property.lvl3.abapcds'}
              },
              match:
                '\\.?([a-zA-Z//][a-zA-Z//_0-9]+)\\.([a-zA-Z//][a-zA-Z//_0-9]+)\\.([a-zA-Z//][a-zA-Z//_0-9]+)'
            },
            {
              captures: {
                1: {name: 'comment.line.annotation.property.lvl1.abapcds'},
                2: {name: 'comment.line.annotation.property.lvl2.abapcds'}
              },
              match:
                '\\.?([a-zA-Z//][a-zA-Z//_0-9]+)\\.([a-zA-Z//][a-zA-Z//_0-9]+)?'
            },
            {
              captures: {
                1: {name: 'comment.line.annotation.property.lvl1.abapcds'}
              },
              match: '\\.?([a-zA-Z//][a-zA-Z//_0-9]+)\\.?'
            }
          ]
        }
      ]
    },
    booleans: {
      patterns: [
        {
          match: '(?<=\\s)(true|false)(?=\\s)',
          name: 'constant.language.boolean.abapcds'
        }
      ]
    },
    bracketed: {
      patterns: [
        {
          begin: '\\[|\\{',
          beginCaptures: {0: {name: 'punctuation.abapcds'}},
          end: '\\]|\\}',
          endCaptures: {0: {name: 'punctuation.abapcds'}},
          patterns: [
            {include: '#strings'},
            {include: '#comments'},
            {include: '#enums'},
            {include: '#booleans'},
            {include: '#numbers'},
            {include: '#property-names'},
            {include: '#keywords'},
            {include: '#names'},
            {include: '#annotations'},
            {include: '#bracketed'}
          ]
        }
      ]
    },
    comments: {
      patterns: [
        {begin: '//', end: '$', name: 'comment.line.double-slash.abapcds'},
        {
          begin: '/\\*',
          beginCaptures: {0: {name: 'punctuation.definition.comment.abapcds'}},
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.abapcds'}},
          name: 'comment.block.abapcds'
        },
        {
          begin: '(?<!/)--.*$',
          beginCaptures: {0: {name: 'punctuation.definition.comment.abapcds'}},
          end: '(?=$)',
          name: 'comment.line.double-dash.abapcds'
        }
      ]
    },
    enums: {
      patterns: [{match: '\\#[a-zA-Z_]+', name: 'support.variable.abapcds'}]
    },
    functions: {
      patterns: [
        {
          match:
            '(?i)(?<=\\s)(abs|cast|ceil|curr_to_decfloat_amount|div|division|floor|mod|round|concat|concat_with_space|datn_days_between|datn_add_days|datn_add_months|get_numeric_value|instr|left|length|lpad|lower|ltrim|replace|replace_regexpr|right|rpad|rtrim|substring|upper|bintohex|hextobin|coalesce|fltp_to_dec|unit_conversion|currency_conversion|decimal_shift|dats_is_valid|dats_days_between|dats_add_days|dats_add_months|tims_is_valid|tstmp_is_valid|tstmp_current_utctimestamp|tstmp_seconds_between|tstmp_add_seconds|utcl_current|utcl_add_seconds|utcl_seconds_between|tstmpl_to_utcl|tstmpl_from_utcl|dats_to_datn|dats_from_datn|tims_to_timn|tims_from_timn|abap_system_timezone|abap_user_timezone|tstmp_to_dats|tstmp_to_tims|tstmp_to_dst|dats_tims_to_tstmp)\\(',
          name: 'entity.name.function.abapcds'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '(?i)(?<=\\s|^)(projection|root|composition|abstract|ascending|association|annotation|annotate|custom|descending|directory|dynamic|cache|accesspolicy|bypass|hierarchy\\(?|parent|child|source|start|siblings|order|inheriting|conditions|define|entity|extend|except|intersect|filter|view|as|select|from|key|where|select|distinct|with|parameters|inner|outer|left|right|join|on|group|by|having|union|all|define|table|function|implemented|method|multiple|parents|not\\s+allowed|leaves|allowed|orphans\\s+(ignore|error|root)|cycles\\s+(error|breakup)|generate\\s+spantree|cache|off|on|force|returns|redefine|and|or|case|when|then|else|end|to|one|is|null|period|depth|nodetype|load|bulk|incremental|preserving|type|default|array|of|role|grant|inherit|aspect|redirected\\s+to\\s+(parent|composition)|provider\\s+contract)(?=\\s+)',
          name: 'keyword.other.abapcds'
        }
      ]
    },
    names: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.type.abapcds'},
            2: {name: 'variable.other.abapcds'}
          },
          match: '(?i)(?<=\\s)([/a-z0-9_]+)\\.([/a-z0-9_]+)\\s?'
        },
        {
          captures: {1: {name: 'entity.name.type.abapcds'}},
          match: '(?i)(?<=\\s)([/a-z0-9_]+)(?=,\\s?)'
        },
        {
          captures: {1: {name: 'entity.name.type.abapcds'}},
          match: '(?i)(?<=\\s)([/a-z_]+)(?=\\s)'
        }
      ]
    },
    'non-bracketed': {
      patterns: [
        {include: '#keywords'},
        {include: '#strings'},
        {include: '#annotations'},
        {include: '#functions'},
        {include: '#enums'},
        {include: '#booleans'},
        {include: '#comments'},
        {include: '#numbers'},
        {include: '#special'},
        {include: '#names'}
      ]
    },
    numbers: {
      patterns: [
        {match: '(?<=\\s)[0-9]+(?=\\s)', name: 'constant.numeric.abapcds'}
      ]
    },
    'property-names': {
      patterns: [
        {
          match: '(?i)(?<=\\s|\\{|\\{)[a-z]+\\:',
          name: 'variable.other.property.name.abapcds'
        }
      ]
    },
    special: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.type.abapcds'},
            2: {name: 'variable.other.abapcds'}
          },
          match: '(?i)(\\$projection)\\.([/a-zA-Z_]+)\\s?'
        }
      ]
    },
    strings: {
      begin: "\\'",
      end: "\\'",
      name: 'string.quoted.single.abapcds',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.abapcds'}]
    }
  },
  scopeName: 'source.abapcds'
}

export default grammar
