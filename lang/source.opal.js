// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/artifactz/sublime-opal>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.opal'],
  names: ['opal'],
  patterns: [
    {
      captures: {
        1: {name: 'punctuation.definition.comment.opal'},
        2: {name: 'invalid.illegal.comment.missing-whitespace.opal'}
      },
      match: '(--)([^\\s])?.*$',
      name: 'comment.line.double-dash.opal'
    },
    {
      begin: '(/\\*)',
      captures: {1: {name: 'punctuation.definition.comment.block.opal'}},
      end: '(\\*/)',
      name: 'comment.block.opal'
    },
    {
      captures: {
        1: {name: 'keyword.meta.signature-implementation.opal'},
        2: {
          name: 'invalid.illegal.signature-implementation.first-letter-not-uppercase.opal'
        },
        3: {name: 'entity.name.section.module.opal'}
      },
      match: '^\\s*(SIGNATURE|IMPLEMENTATION)\\s+([^A-Z])?(\\w+)\\s*$',
      name: 'meta.signature-implementation.opal'
    },
    {
      begin: '^\\s*(SIGNATURE|IMPLEMENTATION)\\s+([^A-Z])?(\\w+)\\s*(\\[)',
      beginCaptures: {
        1: {name: 'keyword.meta.signature-implementation.opal'},
        2: {
          name: 'invalid.illegal.signature-implementation.first-letter-not-uppercase.opal'
        },
        3: {name: 'entity.name.section.module.opal'},
        4: {name: 'punctuation.definition.inheritance.begin.opal'}
      },
      end: '(\\])',
      endCaptures: {1: {name: 'punctuation.definition.inheritance.end.opal'}},
      name: 'meta.signature-implementation.opal',
      patterns: [
        {match: '\\,', name: 'punctuation.separator.inheritance.opal'},
        {match: '(?:[^\\,\\]]+)', name: 'entity.other.inherited-class.opal'}
      ]
    },
    {
      match: '(^\\s*IMPORT|\\b(ONLY|COMPLETELY))\\b',
      name: 'keyword.control.import.opal'
    },
    {
      begin: '^\\s*(FUN)\\s+([^\\"():]+)\\s*(\\:)',
      beginCaptures: {
        1: {name: 'storage.type.function.opal'},
        2: {name: 'entity.name.function.opal'},
        3: {name: 'punctuation.definition.parameters.begin.opal'}
      },
      contentName: 'meta.function.parameters.opal',
      end: '($)|(?=\\-\\-)|(?=/\\*)',
      name: 'meta.function.opal',
      patterns: [
        {match: '\\*\\*|\\->', name: 'punctuation.seperator.parameters.opal'},
        {match: '\\b(\\w+)\\b', name: 'storage.type.opal'}
      ]
    },
    {
      captures: {
        1: {name: 'storage.type.function.opal'},
        2: {name: 'variable.parameter.opal'},
        3: {name: 'entity.name.function.opal'},
        4: {name: 'variable.parameter.opal'},
        5: {name: 'punctuation.section.function.begin.opal'}
      },
      match:
        '^\\s*(DEF)\\s+([^\\s():]+)\\s+([^\\s():]+)\\s+([^\\s():]+)\\s*(==)',
      name: 'meta.function.opal'
    },
    {
      begin: '^\\s*(DEF)\\s+([^\\s():]+)\\s*(?:(\\())?',
      beginCaptures: {
        1: {name: 'storage.type.function.opal'},
        2: {name: 'entity.name.function.opal'},
        3: {name: 'punctuation.definition.parameters.begin.opal'}
      },
      end: '(?:(\\)))?\\s*(==)',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.end.opal'},
        2: {name: 'punctuation.section.function.begin.opal'}
      },
      name: 'meta.function.opal',
      patterns: [
        {match: '\\,', name: 'punctuation.seperator.parameters.opal'},
        {match: '\\w*', name: 'variable.parameter.opal'}
      ]
    },
    {
      begin: '^\\s*(SORT)',
      beginCaptures: {1: {name: 'storage.type.sort.opal'}},
      end: '$',
      name: 'meta.type.sort.opal',
      patterns: [
        {match: '\\b[^\\s():]+\\b', name: 'entity.name.function.type.sort.opal'}
      ]
    },
    {
      begin: '^\\s*(DATA|TYPE)\\s+([^\\s():]+)',
      beginCaptures: {
        1: {name: 'storage.type.data.opal'},
        2: {name: 'entity.name.function.type.data.opal'}
      },
      end: '(==)',
      endCaptures: {1: {name: 'punctuation.section.type.begin.opal'}},
      name: 'meta.type.data.opal'
    },
    {
      begin: '(\\w+)\\s*\\(\\s*(\\w+)\\s*(:)\\s*(\\w+)',
      beginCaptures: {
        1: {name: 'entity.name.function.constructor.opal'},
        2: {name: 'variable.parameter.opal'},
        3: {name: 'punctuation.seperator.type.opal'},
        4: {name: 'storage.type.opal'}
      },
      end: '\\)',
      name: 'meta.type.constructors.opal',
      patterns: [
        {match: '\\,', name: 'punctuation.seperator.parameters.opal'},
        {captures: {1: {name: 'storage.type.opal'}}, match: '\\[(\\w*)\\]'},
        {
          captures: {
            1: {name: 'variable.parameter.opal'},
            2: {name: 'punctuation.seperator.type.opal'},
            3: {name: 'storage.type.opal'}
          },
          match: '(\\w+)\\s*(:)\\s*(\\w+)'
        }
      ]
    },
    {include: '#evaluable'},
    {
      match:
        '\\b(AcceleratorC|AcceleratorF|AEntry|AEntryNE|AnonPair|AnonQuadruple|AnonTriple|Array|ArrayConv|ArrayFilter|ArrayFold|ArrayMap|ArrayReduce|Arrays|Bag|BagConv|BagFilter|BagFold|BagMap|BagReduce|Bags|BasicIO|Basics|BinFile|BinStream|Bitset|BitsetConv|BitsetFilter|BitsetFold|BitsetMap|BitsetReduce|Bool|BoolConv|BSTree|BSTreeCompare|BSTreeConv|BSTreeFilter|BSTreeIndex|BSTreeMap|BSTreeMapEnv|BSTreeReduce|BSTreeZip|BTUnion|BTUnionConv|Char|CharConv|Com|ComAction|ComAgent|ComAgentConv|ComCheck|ComCheckWin|ComCheckWinData|ComChoice|ComCompose|ComConv|Commands|ComMap|ComPairCompose|Compose|ComposePair|ComposePar|ComposeQuadruple|ComposeTriple|ComSemaphor|ComSeqAction|ComSeqMap|ComSeqReduce|ComService|ComServiceConv|ComState|ComStateWith|ComTimeout|ComTripleCompose|Constant|ConstantPair|Control|Curry|DArray|DArrayConv|DArrayFilter|DArrayFold|DArrayMap|DArrayReduce|Denotation|Distributor|Dotfix|Dyn|DynConv|Env|File|FileConv|FileName|FileSystem|FileSystemConv|FileSystemFun|Flip|Fmt|FmtArray|FmtBasicTypes|FmtDebug|FmtMap|FmtOption|FmtPair|FmtSeq|FmtSet|Funct|FunctConv|Greek|Heap|HeapCompare|HeapConv|HeapFilter|HeapIndex|HeapMap|HeapMapEnv|HeapReduce|HeapZip|Identity|IndexingOfTrees|InducedRel|Int|IntConv|ISeq|ISeqConv|ISeqFilter|ISeqIndex|ISeqMap|ISeqMapEnv|ISeqSort|ISeqUnreduce|ISeqZip|Latin1|LineFormat|Map|MapByBST|MapByBSTCompose|MapByBSTConv|MapByBSTFilter|MapByBSTInvert|MapByBSTMap|MapByBSTReduce|MapByOS|MapByOSCompose|MapByOSConv|MapByOSFilter|MapByOSInvert|MapByOSMap|MapByOSReduce|MapCompose|MapConv|MapEntry|MapEntryNE|MapFilter|MapInvert|MapMap|MapNotForUserPurpose|MapReduce|Maps|MaxStrongComp|Nat|NatConv|NatMap|NatMapConv|NatMapFilter|NatMapMap|NatMapNotForUserPurpose|NatMapReduce|NatMaps|NatSets|Option|OptionCompare|OptionConv|OptionMap|OrderingByInjection|OrderingByLess|Pair|PairCompare|PairConv|PairMap|ParserL|ParserLBasic|ParserLCombinator|ParserLCompose|ParserLMap|Predicate|PrintableChar|Process|ProcessArgs|ProcessComInterrupt|ProcessConnect|ProcessConv|ProcessCtrl|ProcessCtrlConv|ProcessCtrlFun|ProcessInterrupt|ProcessMonitor|Quadruple|QuadrupleConv|QuadrupleMap|Random|ReadLine|Real|RealConv|Rel|RelCmp|RelCmpConv|RelCompose|RelConv|RelFilter|RelHomog|RelInvert|RelMap|RelNotForUserPurpose|RelReduce|Seq|SeqCompare|SeqConv|SeqEntry|SeqEntryNE|SeqFilter|SeqFold|SeqIndex|SeqMap|SeqMapEnv|SeqOfSeq|SeqReduce|Seqs|SeqSort|SeqZip|Set|SetByBST|SetByBSTConstr|SetByBSTConv|SetByBSTFilter|SetByBSTFold|SetByBSTMap|SetByBSTMapEnv|SetByBSTOfSetByBST|SetByBSTReduce|SetByPred|SetByPredConstr|SetByPredConv|SetByPredFilter|SetConstr|SetConv|SetEntry|SetEntryNE|SetFilter|SetFold|SetMap|SetMapEnv|SetOfSet|SetReduce|Sets|SetTopSort|Signal|SignalConv|SmallReal|Stream|String|StringConv|StringFilter|StringFold|StringFormat|StringIndex|StringMap|StringMapSeq|StringReduce|Strings|StringScan|Subrel|SubrelConv|Tcl|Time|TimeConv|Tk|Tree|TreeCompare|TreeConv|TreeFilter|TreeIndex|TreeMap|TreeMapEnv|TreeReduce|TreeZip|Triple|TripleConv|TripleMap|Union2|Union2Conv|Union3|Union3Conv|Union4|Union4Conv|UnixFailures|UserAndGroup|UserAndGroupConv|UserAndGroupFun|Void|VoidConv|Wait|WaitConv|WinAppl|WinButton|WinCanvas|WinCanvasEditor|WinConfig|Windows|WinEmitter|WinEvent|WinFontMetrics|WinImage|WinInternal|WinMenu|WinRegulator|WinScrollbar|WinScroller|WinSelector|WinTag|WinTclTk|WinText|WinTextEditor|WinView|WinWindow)\\b',
      name: 'support.type.opal'
    }
  ],
  repository: {
    evaluable: {
      patterns: [
        {
          begin: '(\\\\\\\\)',
          beginCaptures: {1: {name: 'storage.type.function.opal'}},
          contentName: 'meta.definition.parameters.opal',
          end: '(\\.)',
          endCaptures: {1: {name: 'punctuation.section.function.begin.opal'}},
          name: 'meta.function.anonymous.opal',
          patterns: [
            {
              match: '\\s*\\,\\s*',
              name: 'punctuation.seperator.parameters.opal'
            },
            {
              captures: {
                1: {name: 'variable.parameter.opal'},
                2: {name: 'punctuation.seperator.type.opal'},
                3: {name: 'storage.type.opal'}
              },
              match: '(\\w+)\\s*(:)\\s*(\\w+)',
              name: 'meta.definition.parameter.opal'
            },
            {match: '\\w+', name: 'variable.parameter.opal'}
          ]
        },
        {
          match:
            '(\\b(0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|64|128|256|512|1024|100|1000|10000|100000|1000000)\\b)|\\"\\d+\\"!',
          name: 'constant.numeric.integer.opal'
        },
        {match: '\\b\\d+\\b', name: 'invalid.illegal.wrong-number.opal'},
        {
          match: '\\"[+-]?\\d*(\\.\\d*)?(e[+-]?\\d+)?\\"!',
          name: 'constant.numeric.real.opal'
        },
        {
          match: '\\"0x[0-9A-Fa-f]+\\"!',
          name: 'constant.numeric.hexadecimal.opal'
        },
        {
          begin: '(\\")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.opal'}
          },
          end: '(\\n)|(\\")',
          endCaptures: {
            1: {name: 'invalid.illegal.unclosed-string.opal'},
            2: {name: 'punctuation.definition.string.end.opal'}
          },
          name: 'string.quoted.double.opal',
          patterns: [
            {
              match: '\\\\\\\\',
              name: 'constant.character.escape.backslash.opal'
            },
            {
              match: '\\\\"',
              name: 'constant.character.escape.double-quote.opal'
            },
            {match: '\\\\a', name: 'constant.character.escape.alarm.opal'},
            {match: '\\\\b', name: 'constant.character.escape.backspace.opal'},
            {match: '\\\\f', name: 'constant.character.escape.formfeed.opal'},
            {match: '\\\\n', name: 'constant.character.escape.newline.opal'},
            {
              match: '\\\\r',
              name: 'constant.character.escape.carriage-return.opal'
            },
            {match: '\\\\t', name: 'constant.character.escape.tabulator.opal'},
            {
              match: '\\\\v',
              name: 'constant.character.escape.vertical-tab.opal'
            },
            {
              match: '\\\\\\?',
              name: 'constant.character.escape.questionmark.opal'
            },
            {match: '\\\\.', name: 'invalid.illegal.unknown-escape.opal'}
          ]
        },
        {
          match: '\\b(map|filter|zip|reduce|sqrt)\\b',
          name: 'support.function.builtin.opal'
        },
        {match: '<>\\?|<>(?!\\?)', name: 'support.function.builtin.opal'},
        {
          match: '\\b(IF|THEN|ELSE|OTHERWISE|FI)\\b',
          name: 'keyword.control.opal'
        },
        {match: '\\b(LET|IN|WHERE)\\b', name: 'keyword.other.opal'},
        {
          match: '(<=|>=|<|>|\\|=|(?<!=)=(?!=))',
          name: 'keyword.operator.comparison.opal'
        },
        {
          match: '(\\+|\\-|\\*|/|\\bdiv\\b|\\^|\\bpow\\b|%|\\bmod\\b)',
          name: 'keyword.operator.arithmetic.opal'
        },
        {
          match: '(\\b(and|or|not|)\\b)|~',
          name: 'keyword.operator.logical.opal'
        },
        {match: '(::)(?!\\?)', name: 'keyword.operator.sequence.opal'}
      ]
    }
  },
  scopeName: 'source.opal'
}

export default grammar
