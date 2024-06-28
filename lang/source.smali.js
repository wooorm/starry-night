// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/ShaneWilton/sublime-smali>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.smali'],
  names: ['smali'],
  patterns: [
    {include: '#annotation'},
    {include: '#annotation-end'},
    {include: '#annotation-value_list'},
    {include: '#annotation-value'},
    {include: '#annotation-name'},
    {include: '#annotation-access'},
    {include: '#comment-alone'},
    {include: '#comment-inline'},
    {include: '#field'},
    {include: '#field-end'},
    {
      captures: {
        1: {name: 'constant.language.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'entity.name.tag.smali'},
        4: {name: 'string.quoted.double.smali'},
        5: {name: 'entity.name.tag.smali'}
      },
      match:
        '^[\\s\\t]*(\\.class)[\\s\\t]*((?:(?:interface|public|protected|private|abstract|static|final|synchronized|transient|volatile|native|strictfp|synthetic|enum|annotation)[\\s\\t]+)*)[\\s\\t]*(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;)(?=[\\s\\t]*(#.*)?$)'
    },
    {
      captures: {
        1: {name: 'constant.language.smali'},
        2: {name: 'entity.name.tag.smali'},
        3: {name: 'string.quoted.double.smali'},
        4: {name: 'entity.name.tag.smali'}
      },
      match:
        '^[\\s\\t]*(\\.(?:super|implements))[\\s\\t]+(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;)(?=[\\s\\t]*(#.*)?$)'
    },
    {
      captures: {
        1: {name: 'constant.language.smali'},
        2: {name: 'entity.name.tag.smali'},
        3: {name: 'string.quoted.double.smali'},
        4: {name: 'entity.name.tag.smali'}
      },
      match:
        '^[\\s\\t]*(\\.source)[\\s\\t]+(")(.*?)((?<!\\\\)")(?=[\\s\\t]*(#.*)?$)(?=[\\s\\t]*(#.*)?$)'
    },
    {
      begin:
        '^[\\s\\t]*(\\.method)[\\s\\t]*((?:(?:bridge|varargs|declared-synchronized|public|protected|private|abstract|static|final|synchronized|transient|volatile|native|strictfp|synthetic|enum)[\\s\\t]+)*)(constructor )?(<init>|<clinit>|(?:[\\$\\p{L}_\\-][\\p{L}\\d_\\$]*))\\(((?:[\\[]*(?:Z|B|S|C|I|J|F|D|L(?:[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*);))*)\\)(?:(V)|[\\[]*(Z|B|S|C|I|J|F|D)|[\\[]*(?:(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;)))(?=[\\s\\t]*(#.*)?$)',
      beginCaptures: {
        1: {name: 'constant.language.smali'},
        10: {name: 'entity.name.tag.smali'},
        11: {name: 'constant.numeric.smali'},
        12: {name: 'entity.name.tag.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'variable.parameter.smali'},
        4: {name: 'entity.name.function.smali'},
        5: {name: 'constant.numeric.smali'},
        6: {name: 'constant.numeric.smali'},
        7: {name: 'constant.numeric.smali'},
        8: {name: 'entity.name.tag.smali'},
        9: {name: 'constant.numeric.smali'}
      },
      end: '^[\\s\\t]*(\\.end method)(?=[\\s\\t]*(#.*)?$)',
      endCaptures: {1: {name: 'constant.language.smali'}},
      patterns: [
        {include: '#comment-inline'},
        {
          match: '^[\\s\\t]*(\\.prologue)(?=[\\s\\t]*(#.*)?$)',
          name: 'constant.language.smali'
        },
        {
          captures: {
            1: {name: 'constant.language.smali'},
            10: {name: 'entity.name.tag.smali'},
            11: {name: 'entity.name.tag.smali'},
            12: {name: 'string.interpolated.smali'},
            13: {name: 'entity.name.tag.smali'},
            2: {name: 'variable.parameter.smali'},
            3: {name: 'string.interpolated.smali'},
            4: {name: 'constant.numeric.smali'},
            5: {name: 'entity.name.tag.smali'},
            6: {name: 'constant.numeric.smali'},
            7: {name: 'entity.name.tag.smali'},
            8: {name: 'entity.name.tag.smali'},
            9: {name: 'string.interpolated.smali'}
          },
          match:
            '^[\\s\\t]*(\\.local)[\\s\\t]+([vp]\\d+),[\\s\\t]+("[\\p{L}\\p{N}_\\$][\\w\\$]*"):[\\[]*(?:(?:(Z|B|S|C|I|J|F|D)|(?:(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;))))(?:,(")(.*?)((?<!\\\\)"))?(?:,[\\s\\t]*(")(.*?)((?<!\\\\)"))?(?=[\\s\\t]*(#.*)?$)'
        },
        {
          captures: {
            1: {name: 'constant.language.smali'},
            2: {name: 'entity.name.tag.smali'},
            3: {name: 'constant.numeric.smali'},
            4: {name: 'entity.name.tag.smali'},
            5: {name: 'keyword.control.smali'},
            6: {name: 'keyword.control.smali'},
            7: {name: 'keyword.control.smali'}
          },
          match:
            '^[\\s\\t]*(\\.catch)[\\s\\t]+(?:(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;))[\\s\\t]+{(:[A-Za-z_\\d]+)[\\s\\t]+\\.\\.[\\s\\t]+(:[A-Za-z_\\d]+)}[\\s\\t]+(:[A-Za-z_\\d]+)(?=[\\s\\t]*(#.*)?$)'
        },
        {
          captures: {
            1: {name: 'constant.language.smali'},
            2: {name: 'keyword.control.smali'},
            3: {name: 'keyword.control.smali'},
            4: {name: 'keyword.control.smali'}
          },
          match:
            '^[\\s\\t]*(\\.catchall)[\\s\\t]+{(:[A-Za-z_\\d]+)[\\s\\t]+\\.\\.[\\s\\t]+(:[A-Za-z_\\d]+)}[\\s\\t]+(:[A-Za-z_\\d]+)(?=[\\s\\t]*(#.*)?$)'
        },
        {
          match:
            '^[\\s\\t]*(\\.(?:end|restart)[\\s\\t]+local)[\\s\\t]+[vp]\\d+(?=[\\s\\t]*(#.*)?$)',
          name: 'constant.language.smali'
        },
        {
          begin: '^[\\s\\t]*(\\.sparse-switch)(?=[\\s\\t]*(#.*)?$)',
          beginCaptures: {1: {name: 'constant.language.smali'}},
          end: '^[\\s\\t]*(\\.end sparse-switch)(?=[\\s\\t]*(#.*)?$)',
          endCaptures: {1: {name: 'constant.language.smali'}},
          patterns: [
            {include: '#comment-inline'},
            {
              captures: {
                1: {name: 'variable.parameter.smali'},
                2: {name: 'keyword.control.smali'}
              },
              match:
                '^[\\s\\t]*(-?0x(?i:0|[1-9a-f][\\da-f]*))[\\s\\t]+->[\\s\\t]+(:[A-Za-z_\\d]+)(?=[\\s\\t]*(#.*)?$)'
            }
          ]
        },
        {
          captures: {
            1: {name: 'constant.language.smali'},
            2: {name: 'variable.parameter.smali'}
          },
          match:
            '^[\\s\\t]*(\\.packed-switch)[\\s\\t]+(-0x1|0x(?i:0|[1-9a-f][\\da-f]*))(?=[\\s\\t]*(#.*)?$)'
        },
        {
          match: '^[\\s\\t]*(\\.end packed-switch)(?=[\\s\\t]*(#.*)?$)',
          name: 'constant.language.smali'
        },
        {
          begin:
            '^[\\s\\t]*(\\.array-data)[\\s\\t]+(1|2|4|8)(?=[\\s\\t]*(#.*)?$)',
          beginCaptures: {
            1: {name: 'constant.language.smali'},
            2: {name: 'variable.parameter.smali'}
          },
          end: '^[\\s\\t]*(\\.end array-data)(?=[\\s\\t]*(#.*)?$)',
          endCaptures: {1: {name: 'constant.language.smali'}},
          patterns: [
            {include: '#comment-inline'},
            {
              captures: {1: {name: 'variable.parameter.smali'}},
              match:
                '^[\\s\\t]*(?i:((?:-0x(?:0|[1-9a-f][\\da-f]{0,6}|[1-7][\\da-f]{7}|8[0]{7})|0x(?:0|[1-9a-f][\\da-f]{0,6}|[1-7][\\da-f]{7}))[st]?|(?:(?:-0x(?:0|[1-9a-f][\\da-f]{0,14}|[1-7][\\da-f]{15}|8[0]{15})|0x(?:0|[1-9a-f][\\da-f]{0,14}|[1-7][\\da-f]{15}))L))\\b)(?=[\\s\\t]*(#.*)?$)'
            }
          ]
        },
        {include: '#field'},
        {include: '#field-end'},
        {include: '#annotation'},
        {include: '#annotation-end'},
        {include: '#annotation-value_list'},
        {include: '#annotation-value'},
        {include: '#annotation-name'},
        {include: '#annotation-access'},
        {include: '#comment-alone'},
        {include: '#directive-method-line'},
        {include: '#directive-method-registers_locals'},
        {include: '#directive-method-label'},
        {include: '#directive-method-parameter'},
        {include: '#directive-method-parameter-end'},
        {include: '#directives-method-relaxed'},
        {include: '#opcode-format-10x'},
        {include: '#opcode-format-10x-relaxed'},
        {include: '#opcode-format-11n'},
        {include: '#opcode-format-11n-relaxed'},
        {include: '#opcode-format-11x'},
        {include: '#opcode-format-11x-relaxed'},
        {include: '#opcode-format-22x'},
        {include: '#opcode-format-22x-relaxed'},
        {include: '#opcode-format-32x'},
        {include: '#opcode-format-32x-relaxed'},
        {include: '#opcode-format-12x'},
        {include: '#opcode-format-12x-relaxed'},
        {include: '#opcode-format-21c-string'},
        {include: '#opcode-format-21c-type'},
        {include: '#opcode-format-21c-field'},
        {include: '#opcode-format-21c-relaxed'},
        {include: '#opcode-format-21h'},
        {include: '#opcode-format-21h-relaxed'},
        {include: '#opcode-format-21s'},
        {include: '#opcode-format-21s-relaxed'},
        {include: '#opcode-format-21t'},
        {include: '#opcode-format-21t-relaxed'},
        {include: '#opcode-format-31t'},
        {include: '#opcode-format-31t-relaxed'},
        {include: '#opcode-format-22b'},
        {include: '#opcode-format-22b-relaxed'},
        {include: '#opcode-format-22c-type'},
        {include: '#opcode-format-22c-type_array'},
        {include: '#opcode-format-22c-field'},
        {include: '#opcode-format-22c-relaxed'},
        {include: '#opcode-format-22s'},
        {include: '#opcode-format-22s-relaxed'},
        {include: '#opcode-format-22t'},
        {include: '#opcode-format-22t-relaxed'},
        {include: '#opcode-format-23x'},
        {include: '#opcode-format-23x-relaxed'},
        {include: '#opcode-format-3rc-type'},
        {include: '#opcode-format-3rc-meth'},
        {include: '#opcode-format-3rc-relaxed'},
        {include: '#opcode-format-35c-type'},
        {include: '#opcode-format-35c-meth'},
        {include: '#opcode-format-35c-relaxed'},
        {include: '#opcode-format-51l'},
        {include: '#opcode-format-51l-relaxed'},
        {include: '#opcode-format-31i'},
        {include: '#opcode-format-31i-relaxed'},
        {include: '#opcode-format-10t-20t-30t'},
        {include: '#opcode-format-10t-20t-30t-relaxed'}
      ]
    },
    {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match:
        '^[\\s\\t]*(\\.(?:class|super|implements|method|(end )?(?:method|annotation|field)))'
    }
  ],
  repository: {
    annotation: {
      captures: {
        1: {name: 'constant.language.smali'},
        2: {name: 'storage.modifier.smali'},
        3: {name: 'entity.name.tag.smali'},
        4: {name: 'constant.numeric.smali'},
        5: {name: 'entity.name.tag.smali'}
      },
      match:
        '^[\\s\\t]*(\\.annotation)[\\s\\t]+(build|runtime|system)[\\s\\t]+(?:(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;))(?=[\\s\\t]*(#.*)?$)'
    },
    'annotation-access': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'constant.numeric.smali'}
      },
      match:
        '^[\\s\\t]*(accessFlags)[\\s\\t]*=[\\s\\t]*(0x(?:0|[1-9a-f][\\da-f]{0,3}))(?=[\\s\\t]*(#.*)?$)'
    },
    'annotation-end': {
      captures: {1: {name: 'constant.language.smali'}},
      match: '^[\\s\\t]*(\\.end annotation)(?=[\\s\\t]*(#.*)?$)'
    },
    'annotation-name': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'constant.language.smali'},
        3: {name: 'entity.name.tag.smali'},
        4: {name: 'string.quoted.double.smali'},
        5: {name: 'entity.name.tag.smali'}
      },
      match:
        '^[\\s\\t]*(name)[\\s\\t]*=[\\s\\t]*(?:(null)|(")(.*?)((?<!\\\\)")?)(?=[\\s\\t]*(#.*)?$)'
    },
    'annotation-value': {
      captures: {
        1: {name: 'support.function.smali'},
        10: {name: 'constant.numeric.smali'},
        11: {name: 'entity.name.tag.smali'},
        12: {name: 'constant.numeric.smali'},
        13: {name: 'entity.name.tag.smali'},
        14: {name: 'entity.name.function.smali'},
        15: {name: 'constant.numeric.smali'},
        16: {name: 'constant.numeric.smali'},
        17: {name: 'constant.numeric.smali'},
        18: {name: 'entity.name.tag.smali'},
        19: {name: 'constant.numeric.smali'},
        2: {name: 'entity.name.tag.smali'},
        20: {name: 'entity.name.tag.smali'},
        21: {name: 'constant.numeric.smali'},
        22: {name: 'entity.name.tag.smali'},
        3: {name: 'string.quoted.double.smali'},
        4: {name: 'entity.name.tag.smali'},
        5: {name: 'entity.name.tag.smali'},
        6: {name: 'entity.name.tag.smali'},
        7: {name: 'constant.numeric.smali'},
        8: {name: 'entity.name.tag.smali'},
        9: {name: 'string.interpolated.smali'}
      },
      match:
        '^[\\s\\t]*(value)[\\s\\t]*=[\\s\\t]*(?:(")(.*?)((?<!\\\\)")?|(?:\\.(enum|subannotation)[\\s\\t]+)?(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;))(?:->(?:([\\p{L}\\p{N}_\\$][\\w\\$]*):[\\[]*(?:(?:(Z|B|S|C|I|J|F|D)|(?:(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;))))|(<init>|<clinit>|(?:[\\$\\p{L}_][\\p{L}\\d_\\$]*))\\(((?:[\\[]*(?:Z|B|S|C|I|J|F|D|L(?:[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*);))*)\\)(?:(V)|[\\[]*(Z|B|S|C|I|J|F|D)|[\\[]*(?:(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;)))))?(?=[\\s\\t]*(#.*)?$)'
    },
    'annotation-value_list': {
      begin: '^[\\s\\t]*(value)[\\s\\t]*=[\\s\\t]*{(?=[\\s\\t]*(#.*)?$)',
      beginCaptures: {1: {name: 'support.function.smali'}},
      end: '^[\\s\\t]*}(?=[\\s\\t]*(#.*)?$)',
      patterns: [
        {include: '#comment-inline'},
        {
          captures: {
            1: {name: 'entity.name.tag.smali'},
            2: {name: 'string.quoted.double.smali'},
            3: {name: 'entity.name.tag.smali'},
            4: {name: 'entity.name.tag.smali'},
            5: {name: 'constant.numeric.smali'},
            6: {name: 'entity.name.tag.smali'}
          },
          match:
            '(?:(")(.*?)((?<!\\\\)")?|(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;))(?:,)?(?=[\\s\\t]*(#.*)?$)'
        }
      ]
    },
    'comment-alone': {
      captures: {1: {name: 'comment.line.number-sign.smali'}},
      match: '^[\\s\\t]*(#.*)$'
    },
    'comment-inline': {
      captures: {1: {name: 'comment.line.number-sign.smali'}},
      match: '(#.*)$'
    },
    'directive-method-label': {
      captures: {1: {name: 'keyword.control.smali'}},
      match: '^[\\s\\t]*(:[A-Za-z_\\d]+)(?=[\\s\\t]*(#.*)?$)'
    },
    'directive-method-line': {
      captures: {
        1: {name: 'constant.language.smali'},
        2: {name: 'variable.parameter.smali'}
      },
      match: '[\\s\\t]*(\\.line)[\\s\\t]+(\\d+)(?=[\\s\\t]*(#.*)?$)'
    },
    'directive-method-parameter': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'entity.name.tag.smali'},
        4: {name: 'string.quoted.double.smali'},
        5: {name: 'entity.name.tag.smali'}
      },
      match:
        '[\\s\\t]*(\\.param(?:eter)?)[\\s\\t]+(p(?:0|[1-9][\\d]?|[1-4][\\d]{2}|50[\\d]|51[0-2])\\b)(?:,[\\s\\t]*(")(.*?)((?<!\\\\)"))?(?=[\\s\\t]*(#.*)?$)'
    },
    'directive-method-parameter-end': {
      captures: {1: {name: 'constant.language.smali'}},
      match: '^[\\s\\t]*(\\.end param)(?=[\\s\\t]*(#.*)?$)'
    },
    'directive-method-registers_locals': {
      captures: {
        1: {name: 'constant.language.smali'},
        2: {name: 'variable.parameter.smali'}
      },
      match:
        '[\\s\\t]*(\\.(?:registers|locals))[\\s\\t]+(\\d+)(?=[\\s\\t]*(#.*)?$)'
    },
    'directives-method-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match:
        '^[\\s\\t]*(:|\\.(?:parameter|line|registers|locals|(?:restart )?local|prologue|(?:end )?(annotation|(sparse|packed)-switch|local)|catch(?:all)?))'
    },
    field: {
      captures: {
        1: {name: 'constant.language.smali'},
        10: {name: 'constant.numeric.smali'},
        11: {name: 'entity.name.tag.smali'},
        12: {name: 'string.quoted.double.smali'},
        13: {name: 'entity.name.tag.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'string.interpolated.smali'},
        4: {name: 'constant.numeric.smali'},
        5: {name: 'entity.name.tag.smali'},
        6: {name: 'constant.numeric.smali'},
        7: {name: 'entity.name.tag.smali'},
        8: {name: 'constant.language.smali'},
        9: {name: 'constant.numeric.smali'}
      },
      match:
        '^[\\s\\t]*(\\.field)[\\s\\t]+((?:(?:bridge|varargs|declared-synchronized|public|protected|private|abstract|static|final|synchronized|transient|volatile|native|strictfp|synthetic|enum)[\\s\\t]+)*)([\\p{L}_\\$\\-][\\w\\$]*):[\\[]*(?:(?:(Z|B|S|C|I|J|F|D)|(?:(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;))))(?:[\\s\\t]+=[\\s\\t]+(?:(null|true|false)|(?i:(\\d+(?:\\.\\d+)?[fldst]?))|(?i:((?:-0x(?:0|[1-9a-f][\\da-f]{0,6}|[1-7][\\da-f]{7}|8[0]{7})|0x(?:0|[1-9a-f][\\da-f]{0,6}|[1-7][\\da-f]{7}))|(?:(?:-0x(?:0|[1-9a-f][\\da-f]{0,14}|[1-7][\\da-f]{15}|8[0]{15})|0x(?:0|[1-9a-f][\\da-f]{0,14}|[1-7][\\da-f]{15}))[fldst]?))\\b)|(["\'])(.*?)((?<!\\\\)["\'])))?(?=[\\s\\t]*(#.*)?$)'
    },
    'field-end': {
      captures: {1: {name: 'constant.language.smali'}},
      match: '^[\\s\\t]*(\\.end field)(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-10t-20t-30t': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'keyword.control'}
      },
      match: '^[\\s\\t]*(goto(?:/16|/32)?) (:[A-Za-z_\\d]+)(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-10t-20t-30t-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match: '^[\\s\\t]*(goto(?:/16|/32)?)'
    },
    'opcode-format-10x': {
      captures: {1: {name: 'support.function.smali'}},
      match: '^[\\s\\t]*(nop|return-void)(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-10x-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match: '^[\\s\\t]*(nop|return-void)'
    },
    'opcode-format-11n': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'constant.numeric.smali'}
      },
      match:
        '^[\\s\\t]*(const/4)[\\s\\t]+([vp](?:0|[1-9]|1[0-5])\\b),[\\s\\t]*(?i:(-0x[0-8]|0x[0-7]))(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-11n-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match: '^[\\s\\t]*(const/4)'
    },
    'opcode-format-11x': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'}
      },
      match:
        '^[\\s\\t]*(move-(?:result(?:-wide|-object)?|exception)|return(?:-wide|-object)?|monitor-(?:enter|exit)|throw)[\\s\\t]+([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b)(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-11x-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match:
        '^[\\s\\t]*(move-(?:result(?:-wide|-object)?|exception)|return(?:-wide|-object)?|monitor-(?:enter|exit)|throw)'
    },
    'opcode-format-12x': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'variable.parameter.smali'}
      },
      match:
        '^[\\s\\t]*(move(?:-wide|-object)?|array-length|neg-(?:int|long|float|double)|not-(?:int|long)|int-to-(?:long|float|double|byte|char|short)|long-to-(?:int|float|double)|float-to-(?:int|long|double)|double-to-(?:int|long|float)|(?:add|sub|mul|div|rem|and|or|xor|shl|shr|ushr)-(?:int|long)/2addr|(?:add|sub|mul|div|rem)-(?:float|double)/2addr)[\\s\\t]+([vp](?:0|[1-9]|1[0-5])\\b),[\\s\\t]*([vp](?:0|[1-9]|1[0-5])\\b)(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-12x-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match:
        '^[\\s\\t]*(move(?:-wide|-object)?|array-length|neg-(?:int|long|float|double)|not-(?:int|long)|int-to-(?:long|float|double|byte|char|short)|long-to-(?:int|float|double)|float-to-(?:int|long|double)|double-to-(?:int|long|float)|(?:add|sub|mul|div|rem|and|or|xor|shl|shr|ushr)-(?:int|long)/2addr|(?:add|sub|mul|div|rem)-(?:float|double)/2addr)'
    },
    'opcode-format-21c-field': {
      captures: {
        1: {name: 'support.function.smali'},
        10: {name: 'entity.name.tag.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'entity.name.tag.smali'},
        4: {name: 'constant.numeric.smali'},
        5: {name: 'entity.name.tag.smali'},
        6: {name: 'string.interpolated.smali'},
        7: {name: 'constant.numeric.smali'},
        8: {name: 'entity.name.tag.smali'},
        9: {name: 'constant.numeric.smali'}
      },
      match:
        '^[\\s\\t]*((?:sget|sput)(?:-wide|-object|-boolean|-byte|-char|-short)?)[\\s\\t]+([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;)->([\\p{L}\\p{N}_\\$][\\w\\$]*):[\\[]*(?:(?:(Z|B|S|C|I|J|F|D)|(?:(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;))))(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-21c-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match:
        '^[\\s\\t]*(const-string|const-class|check-cast|new-instance|(?:sget|sput)(?:-wide|-object|-boolean|-byte|-char|-short)?)'
    },
    'opcode-format-21c-string': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'entity.name.tag.smali'},
        4: {name: 'string.quoted.double.smali'},
        5: {name: 'entity.name.tag.smali'}
      },
      match:
        '^[\\s\\t]*(const-string(?:/jumbo)?)[\\s\\t]+([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*(")(.*?)((?<!\\\\)")(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-21c-type': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'constant.numeric.smali'},
        4: {name: 'entity.name.tag.smali'},
        5: {name: 'constant.numeric.smali'},
        6: {name: 'entity.name.tag.smali'}
      },
      match:
        '^[\\s\\t]*(const-class|check-cast|new-instance)[\\s\\t]+([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*[\\[]*(?:(?:(Z|B|S|C|I|J|F|D)|(?:(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;))))(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-21h': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'constant.numeric.smali'}
      },
      match:
        '^[\\s\\t]*(const(?:-wide)?/high16)[\\s\\t]+([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*((?i:-?0x(?:0|[1-9a-f][\\da-f]{0,2}|[1-7][\\da-f]{3}|8000)[0]{0,12}L?))\\b(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-21h-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match: '^[\\s\\t]*(const(?:-wide)?/high16)'
    },
    'opcode-format-21s': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'constant.numeric.smali'}
      },
      match:
        '^[\\s\\t]*(const(?:-wide)?/16)[\\s\\t]+([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*(?i:(-0x(?:0|[1-9a-f][\\da-f]{0,2}|[1-7][\\da-f]{3}|8000)|0x(?:0|[1-9a-f][\\da-f]{0,2}|[1-7][\\da-f]{3})))\\b(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-21s-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match: '^[\\s\\t]*(const(?:-wide)?/16)'
    },
    'opcode-format-21t': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'keyword.control.smali'}
      },
      match:
        '^[\\s\\t]*(if-(?:eq|ne|lt|ge|gt|le)z)[\\s\\t]+([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*(:[A-Za-z_\\d]+)(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-21t-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match: '^[\\s\\t]*(if-(?:eq|ne|lt|ge|gt|le)z)'
    },
    'opcode-format-22b': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'variable.parameter.smali'},
        4: {name: 'constant.numeric.smali'}
      },
      match:
        '^[\\s\\t]*((?:add|rsub|mul|div|rem|and|or|xor|shl|shr|ushr)-int/lit8)[\\s\\t]+([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*(?i:(-0x(?:[\\da-f]|[1-7][\\da-f]|80)|0x(?:[\\da-f]|[1-7][\\da-f])))\\b(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-22b-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match:
        '^[\\s\\t]*((?:add|rsub|mul|div|rem|and|or|xor|shl|shr|ushr)-int/lit8)'
    },
    'opcode-format-22c-field': {
      captures: {
        1: {name: 'support.function.smali'},
        10: {name: 'constant.numeric.smali'},
        11: {name: 'entity.name.tag.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'variable.parameter.smali'},
        4: {name: 'entity.name.tag.smali'},
        5: {name: 'constant.numeric.smali'},
        6: {name: 'entity.name.tag.smali'},
        7: {name: 'string.interpolated.smali'},
        8: {name: 'constant.numeric.smali'},
        9: {name: 'entity.name.tag.smali'}
      },
      match:
        '^[\\s\\t]*((?:iget|iput)(?:-wide|-object|-boolean|-byte|-char|-short)?)[\\s\\t]+([vp](?:0|[1-9]|1[0-5])\\b),[\\s\\t]*([vp](?:0|[1-9]|1[0-5])\\b),[\\s\\t]*(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;)->([\\p{L}\\p{N}_\\$][\\w\\$]*):[\\[]*(?:(Z|B|S|C|I|J|F|D|(?:(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;))))(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-22c-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match:
        '^[\\s\\t]*(instance-of|new-array|(?:iget|iput)(?:-wide|-object|-boolean|-byte|-char|-short)?)'
    },
    'opcode-format-22c-type': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'variable.parameter.smali'},
        4: {name: 'constant.numeric.smali'},
        5: {name: 'entity.name.tag.smali'},
        6: {name: 'constant.numeric.smali'},
        7: {name: 'entity.name.tag.smali'}
      },
      match:
        '^[\\s\\t]*(instance-of)[\\s\\t]+([vp](?:0|[1-9]|1[0-5])\\b),[\\s\\t]*([vp](?:0|[1-9]|1[0-5])\\b),[\\s\\t]*[\\[]*(?:(Z|B|S|C|I|J|F|D)|(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;))(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-22c-type_array': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'variable.parameter.smali'},
        4: {name: 'constant.numeric.smali'},
        5: {name: 'entity.name.tag.smali'},
        6: {name: 'constant.numeric.smali'},
        7: {name: 'entity.name.tag.smali'}
      },
      match:
        '^[\\s\\t]*(new-array)[\\s\\t]+([vp](?:0|[1-9]|1[0-5])\\b),[\\s\\t]*([vp](?:0|[1-9]|1[0-5])\\b),[\\s\\t]*[\\[]+(?:(Z|B|S|C|I|J|F|D)|(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;))(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-22s': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'variable.parameter.smali'},
        4: {name: 'constant.numeric.smali'}
      },
      match:
        '^[\\s\\t]*((?:(?:add|mul|div|rem|and|or|xor)-int/lit16)|rsub-int)[\\s\\t]+([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*(?i:(-0x(?:0|[1-9a-f][\\da-f]{0,2}|[1-7][\\da-f]{3}|8000)|0x(?:0|[1-9a-f][\\da-f]{0,2}|[1-7][\\da-f]{3})))\\b(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-22s-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match: '^[\\s\\t]*((?:(?:add|mul|div|rem|and|or|xor)-int/lit16)|rsub-int)'
    },
    'opcode-format-22t': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'variable.parameter.smali'},
        4: {name: 'keyword.control'}
      },
      match:
        '^[\\s\\t]*(if-(?:eq|ne|lt|ge|gt|le))[\\s\\t]+([vp](?:0|[1-9]|1[0-5])\\b),[\\s\\t]*([vp](?:0|[1-9]|1[0-5])\\b),[\\s\\t]*(:[A-Za-z_\\d]+)(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-22t-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match: '(if-(?:eq|ne|lt|ge|gt|le))'
    },
    'opcode-format-22x': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'variable.parameter.smali'}
      },
      match:
        '^[\\s\\t]*(move(?:-wide|-object)?/from16)[\\s\\t]+([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*([vp](?:0|[1-9][\\d]{0,3}|[1-5][\\d]{4}|6[0-4][\\d]{3}|65[0-4][\\d]{2}|655[0-2][\\d]|6553[0-5])\\b)(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-22x-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match: '^[\\s\\t]*(move(?:-wide|-object)?/from16)'
    },
    'opcode-format-23x': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'variable.parameter.smali'},
        4: {name: 'variable.parameter.smali'}
      },
      match:
        '^[\\s\\t]*((?:cmpl|cmpg)-(?:float|double)|cmp-long|(?:aget|aput)(?:-wide|-object|-boolean|-byte|-char|-short)?|(?:add|sub|mul|div|rem|and|or|xor|shl|shr|ushr)-(?:int|long)|(?:add|sub|mul|div|rem)-(?:float|double))[\\s\\t]+([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b)(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-23x-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match:
        '^[\\s\\t]*((?:cmpl|cmpg)-(float|double)|cmp-long|(?:aget|aput)(?:-wide|-object|-boolean|-byte|-char|-short)?|(?:add|sub|mul|div|rem|and|or|xor|shl|shr|ushr)-(?:int|long)|(?:add|sub|mul|div|rem)-(?:float|double))'
    },
    'opcode-format-31i': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'constant.numeric.smali'}
      },
      match:
        '^[\\s\\t]*(const(?:-wide/32)?)[\\s\\t]+([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*(?i:(-0x(?:0|[1-9a-f][\\da-f]{0,6}|[1-7][\\da-f]{7}|8[0]{7})|0x(?:0|[1-9a-f][\\da-f]{0,6}|[1-7][\\da-f]{7}))\\b)(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-31i-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match: '^[\\s\\t]*(const(?:-wide/32)?)'
    },
    'opcode-format-31t': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'keyword.control'}
      },
      match:
        '^[\\s\\t]*(fill-array-data|(?:packed|sparse)-switch)[\\s\\t]+([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*(:[A-Za-z_\\d]+)(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-31t-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match: '^[\\s\\t]*(fill-array-data|(?:packed|sparse)-switch)'
    },
    'opcode-format-32x': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'variable.parameter.smali'}
      },
      match:
        '^[\\s\\t]*(move(?:-wide|-object)?/16)[\\s\\t]+([vp](?:0|[1-9][\\d]{0,3}|[1-5][\\d]{4}|6[0-4][\\d]{3}|65[0-4][\\d]{2}|655[0-2][\\d]|6553[0-5])\\b),[\\s\\t]*([vp](?:0|[1-9][\\d]{0,3}|[1-5][\\d]{4}|6[0-4][\\d]{3}|65[0-4][\\d]{2}|655[0-2][\\d]|6553[0-5])\\b)(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-32x-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match: '^[\\s\\t]*(move(?:-wide|-object)?/16)'
    },
    'opcode-format-35c-meth': {
      captures: {
        1: {name: 'support.function.smali'},
        10: {name: 'entity.name.function.smali'},
        11: {name: 'constant.numeric.smali'},
        12: {name: 'entity.name.tag.smali'},
        13: {name: 'constant.numeric.smali'},
        14: {name: 'entity.name.tag.smali'},
        15: {name: 'constant.numeric.smali'},
        16: {name: 'entity.name.tag.smali'},
        17: {name: 'constant.numeric.smali'},
        18: {name: 'entity.name.tag.smali'},
        19: {name: 'constant.numeric.smali'},
        2: {name: 'variable.parameter.smali'},
        20: {name: 'entity.name.tag.smali'},
        21: {name: 'constant.numeric.smali'},
        22: {name: 'entity.name.tag.smali'},
        23: {name: 'constant.numeric.smali'},
        24: {name: 'entity.name.tag.smali'},
        25: {name: 'constant.numeric.smali'},
        26: {name: 'entity.name.tag.smali'},
        27: {name: 'constant.numeric.smali'},
        28: {name: 'entity.name.tag.smali'},
        29: {name: 'constant.numeric.smali'},
        3: {name: 'variable.parameter.smali'},
        30: {name: 'entity.name.tag.smali'},
        31: {name: 'constant.numeric.smali'},
        32: {name: 'constant.numeric.smali'},
        33: {name: 'entity.name.tag.smali'},
        34: {name: 'constant.numeric.smali'},
        35: {name: 'entity.name.tag.smali'},
        4: {name: 'variable.parameter.smali'},
        5: {name: 'variable.parameter.smali'},
        6: {name: 'variable.parameter.smali'},
        7: {name: 'entity.name.tag.smali'},
        8: {name: 'constant.numeric.smali'},
        9: {name: 'entity.name.tag.smali'}
      },
      match:
        '^[\\s\\t]*(invoke-(?:virtual|super|direct|static|interface)) {[\\s\\t]*([vp](?:0|[1-9]|1[0-5])\\b)?(?:,[\\s\\t]*([vp](?:0|[1-9]|1[0-5])\\b))?(?:,[\\s\\t]*([vp](?:0|[1-9]|1[0-5])\\b))?(?:,[\\s\\t]*([vp](?:0|[1-9]|1[0-5])\\b))?(?:,[\\s\\t]*([vp](?:0|[1-9]|1[0-5])\\b))?[\\s\\t]*},[\\s\\t]*[\\[]*(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;)->(<init>|<clinit>|(?:[\\$\\p{L}_][\\p{L}\\d_\\$]*))\\((?:[\\[]*(Z|B|S|C|I|J|F|D)|(?:[\\[]*(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;)))?(?:[\\[]*(Z|B|S|C|I|J|F|D)|(?:[\\[]*(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;)))?(?:[\\[]*(Z|B|S|C|I|J|F|D)|(?:[\\[]*(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;)))?(?:[\\[]*(Z|B|S|C|I|J|F|D)|(?:[\\[]*(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;)))?(?:[\\[]*(Z|B|S|C|I|J|F|D)|(?:[\\[]*(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;)))?\\)(?:(?:(V)|[\\[]*(Z|B|S|C|I|J|F|D))|(?:[\\[]*(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;)))(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-35c-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match:
        '^[\\s\\t]*(filled-new-array|invoke-(?:virtual|super|direct|static|interface))'
    },
    'opcode-format-35c-type': {
      captures: {
        1: {name: 'support.function.smali'},
        10: {name: 'entity.name.tag.smali'},
        11: {name: 'constant.numeric.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'variable.parameter.smali'},
        4: {name: 'variable.parameter.smali'},
        5: {name: 'variable.parameter.smali'},
        6: {name: 'variable.parameter.smali'},
        7: {name: 'constant.numeric.smali'},
        8: {name: 'entity.name.tag.smali'},
        9: {name: 'constant.numeric.smali'}
      },
      match:
        '^[\\s\\t]*(filled-new-array) {([vp](?:0|[1-9]|1[0-5])\\b),[\\s\\t]*([vp](?:0|[1-9]|1[0-5])\\b)(?:,[\\s\\t]*([vp](?:0|[1-9]|1[0-5])\\b))?(?:,[\\s\\t]*([vp](?:0|[1-9]|1[0-5])\\b))?(?:,[\\s\\t]*([vp](?:0|[1-9]|1[0-5])\\b))?},[\\s\\t]*[\\[]+(?:(Z|B|S|C|I|J|F|D)|(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;))(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-3rc-meth': {
      captures: {
        1: {name: 'support.function.smali'},
        10: {name: 'constant.numeric.smali'},
        11: {name: 'entity.name.tag.smali'},
        12: {name: 'constant.numeric.smali'},
        13: {name: 'entity.name.tag.smali'},
        14: {name: 'constant.numeric.smali'},
        15: {name: 'entity.name.tag.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'variable.parameter.smali'},
        4: {name: 'entity.name.tag.smali'},
        5: {name: 'constant.numeric.smali'},
        6: {name: 'entity.name.tag.smali'},
        7: {name: 'entity.name.function.smali'},
        8: {name: 'constant.numeric.smali'},
        9: {name: 'constant.numeric.smali'}
      },
      match:
        '^[\\s\\t]*(invoke-(?:virtual|super|direct|static|interface)/range) {[\\s\\t]*([vp](?:0|[1-9][\\d]{0,3}|[1-5][\\d]{4}|6[0-4][\\d]{3}|65[0-4][\\d]{2}|655[0-2][\\d]|6553[0-5])\\b) \\.\\. ([vp](?:0|[1-9][\\d]{0,3}|[1-5][\\d]{4}|6[0-4][\\d]{3}|65[0-4][\\d]{2}|655[0-2][\\d]|6553[0-5])\\b)[\\s\\t]*},[\\s\\t]*[\\[]*(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;)->(<init>|<clinit>|(?:[\\$\\p{L}_][\\p{L}\\d_\\$]*))\\(((?:[\\[]*(?:Z|B|S|C|I|J|F|D|L(?:[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*);))*)\\)(?:(V)|[\\[]*(Z|B|S|C|I|J|F|D)|[\\[]*(?:(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;)))(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-3rc-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match:
        '^[\\s\\t]*((?:filled-new-array|invoke-(?:virtual|super|direct|static|interface))/range)'
    },
    'opcode-format-3rc-type': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'variable.parameter.smali'},
        4: {name: 'constant.numeric.smali'},
        5: {name: 'entity.name.tag.smali'},
        6: {name: 'constant.numeric.smali'},
        7: {name: 'entity.name.tag.smali'}
      },
      match:
        '^[\\s\\t]*(filled-new-array/range) {([vp](?:0|[1-9][\\d]{0,3}|[1-5][\\d]{4}|6[0-4][\\d]{3}|65[0-4][\\d]{2}|655[0-2][\\d]|6553[0-5])\\b) \\.\\. ([vp](?:0|[1-9][\\d]{0,3}|[1-5][\\d]{4}|6[0-4][\\d]{3}|65[0-4][\\d]{2}|655[0-2][\\d]|6553[0-5])\\b)},[\\s\\t]*[\\[]+(?:(Z|B|S|C|I|J|F|D)|(L)([\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*(?:/[\\p{L}\\p{N}_\\$][\\p{L}\\d_\\$]*)*)(;))(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-51l': {
      captures: {
        1: {name: 'support.function.smali'},
        2: {name: 'variable.parameter.smali'},
        3: {name: 'constant.numeric.smali'}
      },
      match:
        '^[\\s\\t]*(const-wide)(?!/32)[\\s\\t]+([vp](?:0|[1-9][\\d]?|1[\\d]{2}|2[0-4][\\d]|25[0-5])\\b),[\\s\\t]*(?i:((?:-0x(?:0|[1-9a-f][\\da-f]{0,6}|[1-7][\\da-f]{7}|8[0]{7})|0x(?:0|[1-9a-f][\\da-f]{0,6}|[1-7][\\da-f]{7}))|(?:(?:-0x(?:0|[1-9a-f][\\da-f]{0,14}|[1-7][\\da-f]{15}|8[0]{15})|0x(?:0|[1-9a-f][\\da-f]{0,14}|[1-7][\\da-f]{15}))L))\\b)(?=[\\s\\t]*(#.*)?$)'
    },
    'opcode-format-51l-relaxed': {
      captures: {1: {name: 'invalid.illegal.smali'}},
      match: '^[\\s\\t]*(const-wide)(?!\\/32)'
    }
  },
  scopeName: 'source.smali'
}

export default grammar
