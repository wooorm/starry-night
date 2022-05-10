// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.p4'],
  names: ['p4'],
  patterns: [
    {
      begin: '/\\*',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.block.begin.p4'}
      },
      end: '\\*/',
      endCaptures: {0: {name: 'punctuation.definition.comment.block.end.p4'}},
      name: 'comment.block.p4'
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.p4'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.p4'}},
      name: 'string.quoted.double.p4'
    },
    {
      begin: '//',
      beginCaptures: {0: {name: 'comment.p4'}},
      end: '\\n',
      name: 'comment.line.p4'
    },
    {
      match:
        '\\b(struct|package|header|metadata|parser|transition|state|actions|action|table|key|control|extern|verify)\\b',
      name: 'storage.type.object.p4'
    },
    {
      match: '\\b(void|const|bool|varbit|int|typedef|tuple|enum)\\b',
      name: 'storage.data.type.p4'
    },
    {match: 'bit(<\\d+>)', name: 'support.type.bit.p4'},
    {
      match: '\\b(hit|miss|latest|return|default)\\b',
      name: 'variable.language.p4'
    },
    {
      match:
        '\\b(if|else if|else|return|hit|miss|true|false|inout|in|out|exit)\\b',
      name: 'keyword.control.p4'
    },
    {match: '\\b(and|or)\\b', name: 'keyword.operator.p4'},
    {
      match: '\\b(exact|ternary|lpm|range|valid|mask|match_kind)\\b',
      name: 'entity.name.type.p4'
    },
    {
      match:
        '\\b(reads|actions|min_size|max_size|size|support_timeout|action_profile)\\b',
      name: 'storage.type.p4'
    },
    {match: '\\b(bytes|packets)\\b', name: 'storage.type.p4'},
    {
      match:
        '\\b(width|layout|attributes|type|static|result|direct|instance_count|min_width|saturating)\\b',
      name: 'entity.name.type.p4'
    },
    {match: '\\b(length|fields|max_length)\\b', name: 'entity.name.type.p4'},
    {match: '\\#include', name: 'meta.preprocessor.include.p4'},
    {
      match: '\\#ifndef|\\#ifdef|\\#if|\\#else|\\#endif|\\#elif',
      name: 'meta.preprocessor.p4'
    },
    {match: '\\#define', name: 'meta.preprocessor.define.p4'},
    {
      match:
        '\\b(apply|valid|select|current|extract|add_header|copy_header|remove_header|modify_field|add_to_field|add|set_field_to_hash_index|truncate|drop|no_op|push|pop|count|meter|generate_digest|resubmit|recirculate|clone_ingress_pkt_to_ingress|clone_egress_pkt_to_ingress|clone_ingress_pkt_to_egress|clone_egress_pkt_to_egress|register_write|register_read)\\b',
      name: 'support.function.primitive.p4'
    },
    {match: '@\\w+', name: 'storage.type.annotation.p4'},
    {match: '[a-zA-Z_][0-9a-zA-Z_]*', name: 'support.any-method.p4'},
    {match: "[\\+|-]?[0-9]+'[0-9]+", name: 'constant.numeric.p4'},
    {match: '0(x|X)[0-9a-fA-F]+', name: 'constant.numeric.p4'},
    {match: '\\dw\\d+', name: 'constant.numeric.p4'},
    {match: '0(b|B)[01]+', name: 'constant.numeric.p4'},
    {match: '[0-9]+', name: 'constant.numeric.p4'},
    {match: '\\b(true|false)\\b', name: 'constant.language.p4'}
  ],
  scopeName: 'source.p4'
}

export default grammar
