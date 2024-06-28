// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/perl6/atom-language-perl6>
// and licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.raku'],
  extensions: [],
  names: [],
  patterns: [
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\(\\(\\()',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.triple_paren.quote.raku',
      end: '\\)\\)\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_triple_paren_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\(\\(\\()',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.triple_paren.quote.raku',
      end: '\\\\\\\\\\)\\)\\)|(?<!\\\\)\\)\\)\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {
          match: '\\\\\\(\\(\\(|\\\\\\)\\)\\)',
          name: 'constant.character.escape.raku'
        },
        {include: '#q_triple_paren_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\(\\(\\()',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.triple_paren.quote.raku',
      end: '\\\\\\\\\\)\\)\\)|(?<!\\\\)\\)\\)\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {
          match: '\\\\\\(\\(\\(|\\\\\\)\\)\\)',
          name: 'constant.character.escape.raku'
        },
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_triple_paren_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\[\\[\\[)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.triple_bracket.quote.raku',
      end: '\\]\\]\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_triple_bracket_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\[\\[\\[)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.triple_bracket.quote.raku',
      end: '\\\\\\\\\\]\\]\\]|(?<!\\\\)\\]\\]\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {
          match: '\\\\\\[\\[\\[|\\\\\\]\\]\\]',
          name: 'constant.character.escape.raku'
        },
        {include: '#q_triple_bracket_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\[\\[\\[)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.triple_bracket.quote.raku',
      end: '\\\\\\\\\\]\\]\\]|(?<!\\\\)\\]\\]\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {
          match: '\\\\\\[\\[\\[|\\\\\\]\\]\\]',
          name: 'constant.character.escape.raku'
        },
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_triple_bracket_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\{\\{\\{)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.triple_brace.quote.raku',
      end: '\\}\\}\\}',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_triple_brace_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\{\\{\\{)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.triple_brace.quote.raku',
      end: '\\\\\\\\\\}\\}\\}|(?<!\\\\)\\}\\}\\}',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {
          match: '\\\\\\{\\{\\{|\\\\\\}\\}\\}',
          name: 'constant.character.escape.raku'
        },
        {include: '#q_triple_brace_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\{\\{\\{)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.triple_brace.quote.raku',
      end: '\\\\\\\\\\}\\}\\}|(?<!\\\\)\\}\\}\\}',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {
          match: '\\\\\\{\\{\\{|\\\\\\}\\}\\}',
          name: 'constant.character.escape.raku'
        },
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_triple_brace_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(<<<)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.triple_angle.quote.raku',
      end: '>>>',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_triple_angle_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(<<<)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.triple_angle.quote.raku',
      end: '\\\\\\\\>>>|(?<!\\\\)>>>',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\<<<|\\\\>>>', name: 'constant.character.escape.raku'},
        {include: '#q_triple_angle_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(<<<)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.triple_angle.quote.raku',
      end: '\\\\\\\\>>>|(?<!\\\\)>>>',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\<<<|\\\\>>>', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_triple_angle_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(<<)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.double_angle.quote.raku',
      end: '>>',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_double_angle_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(<<)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.double_angle.quote.raku',
      end: '\\\\\\\\>>|(?<!\\\\)>>',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\<<|\\\\>>', name: 'constant.character.escape.raku'},
        {include: '#q_double_angle_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(<<)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.double_angle.quote.raku',
      end: '\\\\\\\\>>|(?<!\\\\)>>',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\<<|\\\\>>', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_double_angle_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\(\\()',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.double_paren.quote.raku',
      end: '\\)\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_double_paren_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\(\\()',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.double_paren.quote.raku',
      end: '\\\\\\\\\\)\\)|(?<!\\\\)\\)\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {
          match: '\\\\\\(\\(|\\\\\\)\\)',
          name: 'constant.character.escape.raku'
        },
        {include: '#q_double_paren_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\(\\()',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.double_paren.quote.raku',
      end: '\\\\\\\\\\)\\)|(?<!\\\\)\\)\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {
          match: '\\\\\\(\\(|\\\\\\)\\)',
          name: 'constant.character.escape.raku'
        },
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_double_paren_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\[\\[)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.double_bracket.quote.raku',
      end: '\\]\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_double_bracket_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\[\\[)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.double_bracket.quote.raku',
      end: '\\\\\\\\\\]\\]|(?<!\\\\)\\]\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {
          match: '\\\\\\[\\[|\\\\\\]\\]',
          name: 'constant.character.escape.raku'
        },
        {include: '#q_double_bracket_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\[\\[)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.double_bracket.quote.raku',
      end: '\\\\\\\\\\]\\]|(?<!\\\\)\\]\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {
          match: '\\\\\\[\\[|\\\\\\]\\]',
          name: 'constant.character.escape.raku'
        },
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_double_bracket_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*({{)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.double_brace.quote.raku',
      end: '}}',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_double_brace_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*({{)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.double_brace.quote.raku',
      end: '\\\\\\\\}}|(?<!\\\\)}}',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\{{|\\\\}}', name: 'constant.character.escape.raku'},
        {include: '#q_double_brace_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*({{)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.double_brace.quote.raku',
      end: '\\\\\\\\}}|(?<!\\\\)}}',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\{{|\\\\}}', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_double_brace_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*({)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.brace.quote.raku',
      end: '}',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_brace_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*({)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.brace.quote.raku',
      end: '\\\\\\\\}|(?<!\\\\)}',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\{|\\\\}', name: 'constant.character.escape.raku'},
        {include: '#q_brace_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*({)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.brace.quote.raku',
      end: '\\\\\\\\}|(?<!\\\\)}',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\{|\\\\}', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_brace_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(<)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.angle.quote.raku',
      end: '>',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_angle_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(<)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.angle.quote.raku',
      end: '\\\\\\\\>|(?<!\\\\)>',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\<|\\\\>', name: 'constant.character.escape.raku'},
        {include: '#q_angle_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(<)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.angle.quote.raku',
      end: '\\\\\\\\>|(?<!\\\\)>',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\<|\\\\>', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_angle_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s+(\\()',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.paren.quote.raku',
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_paren_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s+(\\()',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.paren.quote.raku',
      end: '\\\\\\\\\\)|(?<!\\\\)\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\\\(|\\\\\\)', name: 'constant.character.escape.raku'},
        {include: '#q_paren_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s+(\\()',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.paren.quote.raku',
      end: '\\\\\\\\\\)|(?<!\\\\)\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\\\(|\\\\\\)', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_paren_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\[)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.bracket.quote.raku',
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_bracket_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\[)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.bracket.quote.raku',
      end: '\\\\\\\\\\]|(?<!\\\\)\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\\\[|\\\\\\]', name: 'constant.character.escape.raku'},
        {include: '#q_bracket_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(\\[)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.bracket.quote.raku',
      end: '\\\\\\\\\\]|(?<!\\\\)\\]',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\\\[|\\\\\\]', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_bracket_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(“)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.left_double_right_double.quote.raku',
      end: '”',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_left_double_right_double_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(“)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.left_double_right_double.quote.raku',
      end: '\\\\\\\\”|(?<!\\\\)”',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\“|\\\\”', name: 'constant.character.escape.raku'},
        {include: '#q_left_double_right_double_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(“)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.left_double_right_double.quote.raku',
      end: '\\\\\\\\”|(?<!\\\\)”',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\“|\\\\”', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_left_double_right_double_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(„)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.left_double-low-q_right_double.quote.raku',
      end: '”|“',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_left_double-low-q_right_double_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(„)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.left_double-low-q_right_double.quote.raku',
      end: '\\\\\\\\”|“|(?<!\\\\)”|“',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\„|\\\\”|“', name: 'constant.character.escape.raku'},
        {include: '#q_left_double-low-q_right_double_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(„)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.left_double-low-q_right_double.quote.raku',
      end: '\\\\\\\\”|“|(?<!\\\\)”|“',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\„|\\\\”|“', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_left_double-low-q_right_double_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(‘)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.left_single_right_single.quote.raku',
      end: '’',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_left_single_right_single_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(‘)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.left_single_right_single.quote.raku',
      end: '\\\\\\\\’|(?<!\\\\)’',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\‘|\\\\’', name: 'constant.character.escape.raku'},
        {include: '#q_left_single_right_single_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(‘)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.left_single_right_single.quote.raku',
      end: '\\\\\\\\’|(?<!\\\\)’',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\‘|\\\\’', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_left_single_right_single_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(‚)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.low-q_left_single.quote.raku',
      end: '‘',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_low-q_left_single_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(‚)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.low-q_left_single.quote.raku',
      end: '\\\\\\\\‘|(?<!\\\\)‘',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\‚|\\\\‘', name: 'constant.character.escape.raku'},
        {include: '#q_low-q_left_single_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(‚)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.low-q_left_single.quote.raku',
      end: '\\\\\\\\‘|(?<!\\\\)‘',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\‚|\\\\‘', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_low-q_left_single_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(「)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.fw_cornerbracket.quote.raku',
      end: '」',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_fw_cornerbracket_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(「)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.fw_cornerbracket.quote.raku',
      end: '\\\\\\\\」|(?<!\\\\)」',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\「|\\\\」', name: 'constant.character.escape.raku'},
        {include: '#q_fw_cornerbracket_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(「)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.fw_cornerbracket.quote.raku',
      end: '\\\\\\\\」|(?<!\\\\)」',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\「|\\\\」', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_fw_cornerbracket_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(｢)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.hw_cornerbracket.quote.raku',
      end: '｣',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_hw_cornerbracket_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(｢)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.hw_cornerbracket.quote.raku',
      end: '\\\\\\\\｣|(?<!\\\\)｣',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\｢|\\\\｣', name: 'constant.character.escape.raku'},
        {include: '#q_hw_cornerbracket_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(｢)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.hw_cornerbracket.quote.raku',
      end: '\\\\\\\\｣|(?<!\\\\)｣',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\｢|\\\\｣', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_hw_cornerbracket_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(«)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.chevron.quote.raku',
      end: '»',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_chevron_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(«)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.chevron.quote.raku',
      end: '\\\\\\\\»|(?<!\\\\)»',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\«|\\\\»', name: 'constant.character.escape.raku'},
        {include: '#q_chevron_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(«)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.chevron.quote.raku',
      end: '\\\\\\\\»|(?<!\\\\)»',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\«|\\\\»', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_chevron_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(⟅)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.s-shaped-bag-delimiter.quote.raku',
      end: '⟆',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_s-shaped-bag-delimiter_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(⟅)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.s-shaped-bag-delimiter.quote.raku',
      end: '\\\\\\\\⟆|(?<!\\\\)⟆',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\⟅|\\\\⟆', name: 'constant.character.escape.raku'},
        {include: '#q_s-shaped-bag-delimiter_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(⟅)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.s-shaped-bag-delimiter.quote.raku',
      end: '\\\\\\\\⟆|(?<!\\\\)⟆',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\⟅|\\\\⟆', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_s-shaped-bag-delimiter_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(/)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.slash.quote.raku',
      end: '/',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_slash_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(/)',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.slash.quote.raku',
      end: '\\\\\\\\/|(?<!\\\\)/',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\/', name: 'constant.character.escape.raku'},
        {include: '#q_slash_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(/)',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.slash.quote.raku',
      end: '\\\\\\\\/|(?<!\\\\)/',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\/', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_slash_string_content'}
      ]
    },
    {
      begin:
        "(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s+(')",
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.single.quote.raku',
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_single_string_content'}]
    },
    {
      begin:
        "(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s+(')",
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.single.quote.raku',
      end: "\\\\\\\\'|(?<!\\\\)'",
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: "\\\\'", name: 'constant.character.escape.raku'},
        {include: '#q_single_string_content'}
      ]
    },
    {
      begin:
        "(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s+(')",
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.single.quote.raku',
      end: "\\\\\\\\'|(?<!\\\\)'",
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: "\\\\'", name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_single_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(")',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.double.quote.raku',
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [{include: '#q_double_string_content'}]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(")',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.double.quote.raku',
      end: '\\\\\\\\"|(?<!\\\\)"',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\"', name: 'constant.character.escape.raku'},
        {include: '#q_double_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (qq(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*(")',
      beginCaptures: {
        1: {name: 'string.quoted.qq.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.qq.double.quote.raku',
      end: '\\\\\\\\"|(?<!\\\\)"',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}},
      patterns: [
        {match: '\\\\"', name: 'constant.character.escape.raku'},
        {include: '#qq_character_escape'},
        {include: 'source.raku#interpolation'},
        {include: '#q_double_string_content'}
      ]
    },
    {
      begin:
        '(?x) (?<=^|[\\[\\]\\s\\(\\){},;]) (q|qq|Q(?:x|w|ww|v|s|a|h|f|c|b|p)?) ((?: \\s*:(?: x|exec|w|words|ww|quotewords|v|val|q|single|double| s|scalar|a|array|h|hash|f|function|c|closure|b|blackslash| regexp|substr|trans|codes|p|path|nfkc|nfkd ) )*) \\s*([^\\p{Ps}\\p{Pe}\\p{Pi}\\p{Pf}\\w\\s])',
      beginCaptures: {
        1: {name: 'string.quoted.q.operator.raku'},
        2: {name: 'support.function.quote.adverb.raku'},
        3: {name: 'punctuation.definition.string.raku'}
      },
      contentName: 'string.quoted.q.any.quote.raku',
      end: '\\3',
      endCaptures: {0: {name: 'punctuation.definition.string.raku'}}
    }
  ],
  repository: {
    q_angle_string_content: {
      begin: '<',
      end: '\\\\\\\\>|(?<!\\\\)>',
      patterns: [{include: '#q_angle_string_content'}]
    },
    q_brace_string_content: {
      begin: '{',
      end: '\\\\\\\\}|(?<!\\\\)}',
      patterns: [{include: '#q_brace_string_content'}]
    },
    q_bracket_string_content: {
      begin: '\\[',
      end: '\\\\\\\\\\]|(?<!\\\\)\\]',
      patterns: [{include: '#q_bracket_string_content'}]
    },
    q_chevron_string_content: {
      begin: '«',
      end: '\\\\\\\\»|(?<!\\\\)»',
      patterns: [{include: '#q_chevron_string_content'}]
    },
    q_double_angle_string_content: {
      begin: '<<',
      end: '\\\\\\\\>>|(?<!\\\\)>>',
      patterns: [{include: '#q_double_angle_string_content'}]
    },
    q_double_brace_string_content: {
      begin: '{{',
      end: '\\\\\\\\}}|(?<!\\\\)}}',
      patterns: [{include: '#q_double_brace_string_content'}]
    },
    q_double_bracket_string_content: {
      begin: '\\[\\[',
      end: '\\\\\\\\\\]\\]|(?<!\\\\)\\]\\]',
      patterns: [{include: '#q_double_bracket_string_content'}]
    },
    q_double_paren_string_content: {
      begin: '\\(\\(',
      end: '\\\\\\\\\\)\\)|(?<!\\\\)\\)\\)',
      patterns: [{include: '#q_double_paren_string_content'}]
    },
    q_double_string_content: {
      begin: '"',
      end: '\\\\\\\\"|(?<!\\\\)"',
      patterns: [{include: '#q_double_string_content'}]
    },
    q_fw_cornerbracket_string_content: {
      begin: '「',
      end: '\\\\\\\\」|(?<!\\\\)」',
      patterns: [{include: '#q_fw_cornerbracket_string_content'}]
    },
    q_hw_cornerbracket_string_content: {
      begin: '｢',
      end: '\\\\\\\\｣|(?<!\\\\)｣',
      patterns: [{include: '#q_hw_cornerbracket_string_content'}]
    },
    'q_left_double-low-q_right_double_string_content': {
      begin: '„',
      end: '\\\\\\\\”|“|(?<!\\\\)”|“',
      patterns: [{include: '#q_left_double-low-q_right_double_string_content'}]
    },
    q_left_double_right_double_string_content: {
      begin: '“',
      end: '\\\\\\\\”|(?<!\\\\)”',
      patterns: [{include: '#q_left_double_right_double_string_content'}]
    },
    q_left_single_right_single_string_content: {
      begin: '‘',
      end: '\\\\\\\\’|(?<!\\\\)’',
      patterns: [{include: '#q_left_single_right_single_string_content'}]
    },
    'q_low-q_left_single_string_content': {
      begin: '‚',
      end: '\\\\\\\\‘|(?<!\\\\)‘',
      patterns: [{include: '#q_low-q_left_single_string_content'}]
    },
    q_paren_string_content: {
      begin: '\\(',
      end: '\\\\\\\\\\)|(?<!\\\\)\\)',
      patterns: [{include: '#q_paren_string_content'}]
    },
    q_right_double_right_double_string_content: {
      begin: '”',
      end: '”',
      patterns: [{include: '#q_right_double_right_double_string_content'}]
    },
    'q_s-shaped-bag-delimiter_string_content': {
      begin: '⟅',
      end: '\\\\\\\\⟆|(?<!\\\\)⟆',
      patterns: [{include: '#q_s-shaped-bag-delimiter_string_content'}]
    },
    q_single_string_content: {
      begin: "'",
      end: "\\\\\\\\'|(?<!\\\\)'",
      patterns: [{include: '#q_single_string_content'}]
    },
    q_slash_string_content: {
      begin: '/',
      end: '\\\\\\\\/|(?<!\\\\)/',
      patterns: [{include: '#q_slash_string_content'}]
    },
    q_triple_angle_string_content: {
      begin: '<<<',
      end: '\\\\\\\\>>>|(?<!\\\\)>>>',
      patterns: [{include: '#q_triple_angle_string_content'}]
    },
    q_triple_brace_string_content: {
      begin: '\\{\\{\\{',
      end: '\\\\\\\\\\}\\}\\}|(?<!\\\\)\\}\\}\\}',
      patterns: [{include: '#q_triple_brace_string_content'}]
    },
    q_triple_bracket_string_content: {
      begin: '\\[\\[\\[',
      end: '\\\\\\\\\\]\\]\\]|(?<!\\\\)\\]\\]\\]',
      patterns: [{include: '#q_triple_bracket_string_content'}]
    },
    q_triple_paren_string_content: {
      begin: '\\(\\(\\(',
      end: '\\\\\\\\\\)\\)\\)|(?<!\\\\)\\)\\)\\)',
      patterns: [{include: '#q_triple_paren_string_content'}]
    },
    qq_character_escape: {
      patterns: [
        {
          match: '(?x) \\\\[abtnfre\\\\\\{\\}] | \\\\',
          name: 'constant.character.escape.raku'
        }
      ]
    }
  },
  scopeName: 'source.quoting.raku'
}

export default grammar
