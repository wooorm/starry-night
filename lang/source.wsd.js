// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/qjebbs/vscode-plantuml>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.puml', '.iuml', '.plantuml'],
  names: ['plantuml'],
  patterns: [
    {
      begin: '(?i)^\\s*(@start[a-z]+)((\\s+)(.+?))?\\s*$',
      beginCaptures: {
        1: {name: 'keyword.control.diagram.source.wsd'},
        5: {name: 'entity.name.function.diagram.source.wsd'}
      },
      end: '(?i)^\\s*(@end[a-z]+)\\s*$',
      endCaptures: {1: {name: 'keyword.control.diagram.source.wsd'}},
      name: 'diagram.source.wsd',
      patterns: [
        {include: '#Quoted'},
        {include: '#Comment'},
        {include: '#Style'},
        {include: '#Class'},
        {include: '#Object'},
        {include: '#Activity'},
        {include: '#Sequence'},
        {include: '#State'},
        {include: '#Keywords'},
        {include: '#General'}
      ]
    },
    {include: '#Quoted'},
    {include: '#Comment'},
    {include: '#Style'},
    {include: '#Class'},
    {include: '#Object'},
    {include: '#Activity'},
    {include: '#Sequence'},
    {include: '#State'},
    {include: '#Keywords'},
    {include: '#General'}
  ],
  repository: {
    Activity: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.activity.if.source.wsd'},
            2: {name: 'string.quoted.double.activity.if.source.wsd'},
            3: {name: 'keyword.other.activity.if.source.wsd'},
            5: {name: 'meta.comment.activity.if.source.wsd'}
          },
          match:
            '(?i)^\\s*(else *if|if)\\s?\\((.+?)\\)\\s?(then)(\\s?\\((.+?)\\))?\\s*$'
        },
        {
          captures: {
            1: {name: 'keyword.other.activity.else.source.wsd'},
            3: {name: 'meta.comment.activity.else.source.wsd'}
          },
          match: '(?i)^\\s*(else)(\\s?\\((.+?)\\))?\\s*$'
        },
        {
          captures: {
            1: {name: 'keyword.other.activity.while.source.wsd'},
            2: {name: 'keyword.other.activity.while.source.wsd'},
            3: {name: 'string.quoted.double.activity.while.source.wsd'},
            5: {name: 'keyword.other.activity.while.source.wsd'},
            7: {name: 'meta.comment.activity.while.source.wsd'}
          },
          match:
            '(?i)^\\s*(repeat\\s+)?(while)\\s*\\((.+?)\\)(\\s*(is)(\\s*\\((.+?)\\))?)?\\s*$'
        },
        {
          captures: {
            1: {name: 'keyword.other.activity.endwhile.source.wsd'},
            2: {name: 'keyword.other.activity.endwhile.source.wsd'},
            4: {name: 'meta.comment.activity.endwhile.source.wsd'}
          },
          match: '(?i)^\\s*(end)\\s?(while)(\\s*\\((.+?)\\))?\\s*$'
        }
      ]
    },
    Class: {
      patterns: [
        {
          begin:
            '(?i)^\\s*(enum|abstract\\s+class|abstract|class)\\s+([\\w\\d_\\.]+|"[^"]+")(\\s*(<<.+?>>))?(\\s+(as)\\s+([\\w\\d_\\.]+|"[^"]+")(\\s*(<<.+?>>))?)?(\\s+#(([\\w\\|\\\\\\/\\-]+)))?\\s*\\{\\s*$',
          beginCaptures: {
            1: {name: 'keyword.other.class.group.source.wsd'},
            10: {name: 'constant.numeric.class.definition.source.wsd'},
            2: {name: 'support.variable.class.group.source.wsd'},
            4: {name: 'string.quoted.double.class.definition.source.wsd'},
            6: {name: 'keyword.other.class.group.source.wsd'},
            7: {name: 'support.variable.class.group.source.wsd'},
            9: {name: 'string.quoted.double.class.definition.source.wsd'}
          },
          end: '^\\s*(?<!\\\\)\\}\\s*$',
          patterns: [
            {
              captures: {
                1: {name: 'meta.comment.class.group.separator.source.wsd'},
                3: {
                  name: 'string.quoted.double.class.group.separator.source.wsd'
                },
                4: {name: 'meta.comment.class.group.separator.source.wsd'}
              },
              match: '(?i)^\\s*([.=_-]{2,})\\s*((.+?)\\s*([.=_-]{2,}))?'
            },
            {
              captures: {
                1: {name: 'storage.modifier.class.function.source.wsd'},
                11: {name: 'support.type.class.function.source.wsd'},
                3: {name: 'keyword.other.class.function.source.wsd'},
                5: {name: 'support.type.class.function.source.wsd'},
                7: {name: 'support.variable.class.function.source.wsd'},
                9: {name: 'support.variable.class.function.source.wsd'}
              },
              match:
                '(?i)^\\s*(\\s*\\{(static|abstract)\\}\\s*)?(\\s*[~#+-]\\s*)?(([\\p{L}0-9_]+(\\[\\])?\\s+)?([\\p{L}0-9_]+)(\\(\\))|([\\p{L}0-9_]+)(\\(\\))\\s*:\\s*([\\p{L}0-9_]+)?)\\s*$'
            },
            {
              captures: {
                1: {name: 'storage.modifier.class.fields.source.wsd'},
                3: {name: 'keyword.other.class.fields.source.wsd'},
                5: {name: 'support.type.class.fields.source.wsd'},
                7: {name: 'support.variable.class.fields.source.wsd'},
                8: {name: 'support.variable.class.fields.source.wsd'},
                9: {name: 'support.type.class.fields.source.wsd'}
              },
              match:
                '(?i)^\\s*(\\s*\\{(static|abstract)\\}\\s*)?(\\s*[~#+-]\\s*)?(([\\p{L}0-9_]+(\\[\\])?\\s+)?([\\p{L}0-9_]+)|([\\p{L}0-9_]+)\\s*:\\s*(\\w+)?)\\s*$'
            },
            {
              captures: {
                1: {name: 'storage.modifier.class.fields.source.wsd'},
                3: {name: 'keyword.other.class.fields.source.wsd'},
                4: {name: 'string.quoted.double.class.other.source.wsd'}
              },
              match:
                '(?i)^\\s*(\\s*\\{(static|abstract)\\}\\s*)?(\\s*[~#+-]\\s*)?(.+?)\\s*$'
            }
          ]
        },
        {
          captures: {
            1: {name: 'keyword.other.class.hideshow.source.wsd'},
            2: {name: 'support.variable.class.hideshow.source.wsd'},
            5: {name: 'constant.numeric.class.hideshow.source.wsd'}
          },
          match:
            '(?i)^\\s*(hide|show|remove)\\s+(([\\w\\d_\\.\\$]+|"[^"]+")|<<.+?>>|Stereotypes|class|interface|enum|@unlinked)(\\s+(empty fields|empty attributes|empty methods|empty description|fields|attributes|methods|members|circle))?\\s*$'
        }
      ]
    },
    Comment: {
      patterns: [
        {
          begin: "(?i)^\\s*(')",
          end: '(?i)\\n',
          name: 'comment.line.comment.source.wsd'
        },
        {
          begin: "(?i)\\s*(/')",
          end: "(?i)('/)\\s*",
          name: 'comment.block.source.wsd'
        }
      ]
    },
    General: {
      patterns: [
        {
          begin: '(?i)^\\s*(title)\\s*$',
          beginCaptures: {1: {name: 'keyword.other.title.source.wsd'}},
          end: '(?i)^\\s*\\b(end\\s+title)\\b',
          endCaptures: {1: {name: 'keyword.other.title.source.wsd'}},
          patterns: [
            {
              captures: {1: {name: 'entity.name.function.title.source.wsd'}},
              match: '(?i)^\\s*(.+?)\\s*$'
            }
          ]
        },
        {
          captures: {
            1: {name: 'keyword.other.title.source.wsd'},
            2: {name: 'entity.name.function.title.source.wsd'}
          },
          match: '(?i)^\\s*(title)\\s+(.+?)\\s*$'
        },
        {
          captures: {
            1: {name: 'keyword.other.scale.source.wsd'},
            11: {name: 'keyword.other.scale.source.wsd'},
            3: {name: 'keyword.other.scale.source.wsd'},
            4: {name: 'constant.numeric.scale.source.wsd'},
            8: {name: 'keyword.operator.scale.source.wsd'},
            9: {name: 'constant.numeric.scale.source.wsd'}
          },
          match:
            '(?i)^\\s*(scale)\\s+((max)\\s+)?(\\d+(\\.?\\d+)?)\\s*((([\\*/])\\s*(\\d+\\.?(\\.?\\d+)?))|(width|height))?\\s*$',
          name: 'keyword.other.scale.source.wsd'
        },
        {
          captures: {
            1: {name: 'keyword.other.note.source.wsd'},
            2: {name: 'constant.numeric.caption.source.wsd'}
          },
          match: '(?i)^\\s*(caption)\\s+(.+)\\s*$'
        },
        {
          captures: {
            1: {name: 'keyword.other.note.source.wsd'},
            3: {name: 'meta.comment.note.source.wsd'}
          },
          match: '(?i)^\\s*(note\\s(left|right))\\s*:\\s*(.+)\\s*$'
        },
        {
          begin: '(?i)^\\s*(note\\s(left|right))\\s*$',
          beginCaptures: {1: {name: 'keyword.other.note.source.wsd'}},
          end: '(?i)^\\s*(end\\s*note)',
          endCaptures: {1: {name: 'keyword.other.note.source.wsd'}},
          patterns: [
            {match: '.+?', name: 'meta.comment.multiple.note.source.wsd'}
          ]
        },
        {
          captures: {
            1: {name: 'keyword.other.noteof.source.wsd'},
            2: {name: 'constant.numeric.noteof.source.wsd'},
            3: {name: 'keyword.other.noteof.source.wsd'},
            4: {name: 'support.variable.noteof.source.wsd'},
            5: {name: 'support.variable.noteof.source.wsd'},
            6: {name: 'support.variable.noteof.source.wsd'},
            7: {name: 'keyword.other.noteof.source.wsd'},
            8: {name: 'constant.numeric.noteof.source.wsd'},
            9: {name: 'meta.comment.noteof.source.wsd'}
          },
          match:
            '(?i)^\\s*([rh]?note)(?:\\s+(right|left|top|bottom))?\\s+(?:(?:(of|over)\\s*(?:[^\\s\\w\\d]([\\w\\s]+)[^\\s\\w\\d]|(?:(".+?"|\\w+)(?:,\\s*(".+?"|\\w+))*)))|(on\\s+link))\\s*(#\\w+)?\\s*:\\s*(.+)$'
        },
        {
          begin:
            '(?i)^\\s*([rh]?note)(?:\\s+(right|left|top|bottom))?\\s+(?:(?:(of|over)\\s*(?:[^\\s\\w\\d]([\\w\\s]+)[^\\s\\w\\d]|(?:(".+?"|\\w+)(?:,\\s*(".+?"|\\w+))*)))|(on\\s+link))\\s*(#\\w+)?\\s*$',
          beginCaptures: {
            1: {name: 'keyword.other.noteof.source.wsd'},
            2: {name: 'constant.numeric.noteof.source.wsd'},
            3: {name: 'keyword.other.noteof.source.wsd'},
            4: {name: 'support.variable.noteof.source.wsd'},
            5: {name: 'support.variable.noteof.source.wsd'},
            6: {name: 'support.variable.noteof.source.wsd'},
            7: {name: 'keyword.other.noteof.source.wsd'},
            8: {name: 'constant.numeric.noteof.source.wsd'}
          },
          end: '(?i)^\\s*(end\\s*[rh]?note)',
          endCaptures: {1: {name: 'keyword.other.multline.noteof.source.wsd'}},
          patterns: [
            {match: '.+?', name: 'meta.comment.multline.noteof.source.wsd'}
          ]
        },
        {
          captures: {
            1: {name: 'keyword.other.noteas.source.wsd'},
            2: {name: 'meta.comment.noteas.source.wsd'},
            3: {name: 'keyword.other.noteas.source.wsd'},
            4: {name: 'support.variable.noteas.source.wsd'}
          },
          match: '(?i)^\\s*(note)\\s+(".+?")\\s+(as)\\s+([\\w\\d]+)\\s*$'
        },
        {
          begin:
            '(?i)^\\s*(?:(center|left|right)\\s+)?(header|legend|footer)\\s*\\n',
          beginCaptures: {
            1: {name: 'constant.numeric.header_legend_footer.source.wsd'},
            2: {name: 'keyword.other.header_legend_footer.source.wsd'}
          },
          end: '(?i)^\\s*(end\\s?(header|legend|footer))',
          endCaptures: {
            1: {name: 'keyword.other.header_legend_footer.source.wsd'}
          },
          patterns: [
            {match: '.+?', name: 'meta.comment.header_legend_footer.source.wsd'}
          ]
        },
        {
          captures: {
            1: {name: 'constant.numeric.header_legend_footer.source.wsd'},
            2: {name: 'keyword.other.header_legend_footer.source.wsd'},
            3: {name: 'meta.comment.header_legend_footer.source.wsd'}
          },
          match:
            '(?i)^\\s*(?:(center|left|right)\\s+)?(header|legend|footer)\\s+(.+?)\\s*$'
        },
        {
          match:
            '(?i)(!includesub|!include|!enddefinelong|!definelong|!define|!startsub|!endsub|!ifdef|!else|!endif|!ifndef|!if|!elseif|!endif|!while|!endwhile|!(unquoted\\s|final\\s)*procedure|!(unquoted\\s|final\\s)*function|!end\\s*(function|procedure)|!return|!import|!includedef|!includeurl|!include_many|!include_once|!log|!dump_memory|!theme|!pragma|!assume\\s+transparent\\s+(dark|light))',
          name: 'entity.name.function.preprocessings.source.wsd'
        },
        {
          begin:
            '(?i)((?:(?:(?:\\s+[ox]|[+*])?(?:<<|<\\|?|\\\\\\\\|\\\\|//|\\}|\\^|#|0|0\\))?)(?=[-.~=]))[-.~=]+(\\[(?:\\#(?:[0-9a-f]{6}|[0-9a-f]{3}|\\w+)(?:[-\\\\/](?:[0-9a-f]{6}|[0-9a-f]{3}|\\w+))?\\b)\\])?(?:(left|right|up|down)(?:[-.~=]))?[-.]*(?:(?:>>|\\|?>|\\\\\\\\|\\\\|//|\\{|\\^|#|0|\\(0)?(?:[ox]\\s+|[+*])?))',
          beginCaptures: {
            1: {name: 'keyword.control.note.source.wsd'},
            2: {name: 'constant.numeric.link.color.source.wsd'},
            3: {name: 'constant.language.link.source.wsd'}
          },
          end: '$',
          patterns: [
            {include: '#General'},
            {
              captures: {
                1: {name: 'support.variable.actor.link.source.wsd'},
                2: {name: 'meta.comment.message.link.source.wsd'}
              },
              match: '(?i):([^:]+):\\s*:(.+)$'
            },
            {
              captures: {1: {name: 'meta.comment.message.link.source.wsd'}},
              match: '(?i):(.+)$'
            }
          ]
        },
        {
          match: '(?i)#(?:[0-9a-f]{6}|[0-9a-f]{3}|\\w+)',
          name: 'constant.numeric.colors.source.wsd'
        },
        {match: '\\b[\\w_]+', name: 'support.variable.source.wsd'}
      ]
    },
    Keywords: {
      patterns: [
        {
          match:
            '(?i)^\\s*(switch|case|usecase|actor|object|participant|boundary|control|entity|database|create|component|interface|package|node|folder|frame|cloud|annotation|enum|abstract\\s+class|abstract|class|state|autonumber(\\s+stop|\\s+resume|\\s+inc)?|activate|deactivate|return|destroy|newpage|alt|else|opt|loop|par|break|critical|group|box|rectangle|namespace|partition|agent|artifact|card|circle|collections|file|hexagon|label|person|queue|stack|storage|mainframe|map|repeat|backward|diamond|goto|binary|clock|concise|robust|compact\\s+concise|compact\\s+robust|json|protocol|struct|exception|metaclass|stereotype)\\b',
          name: 'keyword.other.linebegin.source.wsd'
        },
        {
          match:
            '(?i)^\\s*(endswitch|split( again)?|endif|repeat|start|stop|end|end\\s+fork|end\\s+split|fork( again)?|detach|end\\s+box|top\\s+to\\s+bottom\\s+direction|left\\s+to\\s+right\\s+direction|kill|end\\s+merge|allow(_)?mixing)\\s*$',
          name: 'keyword.other.wholeline.source.wsd'
        },
        {
          match: '(?i)\\b(as|{(static|abstract)\\})\\b',
          name: 'keyword.other.other.source.wsd'
        }
      ]
    },
    Object: {
      patterns: [
        {
          captures: {
            1: {name: 'support.variable.object.addfields.source.wsd'},
            2: {name: 'meta.comment.object.addfields.source.wsd'}
          },
          match: '(?i)^\\s*([\\w\\d_]+)\\s+:\\s+s*$'
        }
      ]
    },
    Quoted: {
      patterns: [
        {
          begin: '(?i)^\\s*(:)',
          end: '(?i)(:)|[\\];|<>/}]?\\s*$',
          name: 'support.variable.definitions.source.wsd'
        },
        {begin: '"', end: '"', name: 'string.quoted.double.source.wsd'}
      ]
    },
    Sequence: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.sequence.divider.source.wsd'},
            2: {name: 'string.quoted.double.sequence.divider.source.wsd'},
            3: {name: 'keyword.operator.sequence.divider.source.wsd'}
          },
          match: '(?i)^\\s*(={2,})\\s*(.+?)\\s*(={2,})\\s*$'
        },
        {
          captures: {
            1: {name: 'keyword.operator.sequence.omission.source.wsd'}
          },
          match: '(?i)^\\s*(\\.{3,})\\s*$'
        },
        {
          captures: {
            1: {name: 'keyword.other.sequence.ref.source.wsd'},
            2: {name: 'support.variable.sequence.ref.source.wsd'},
            3: {name: 'meta.comment.sequence.ref.source.wsd'}
          },
          match: '(?i)^\\s*(ref\\s+over)\\s+(.+?)\\s*:\\s*(.+)\\s*$'
        },
        {
          begin: '(?i)^\\s*(ref\\s+over)\\s+(.+?)\\s*$',
          beginCaptures: {
            1: {name: 'keyword.other.sequence.ref.source.wsd'},
            2: {name: 'support.variable.sequence.ref.source.wsd'}
          },
          end: '(?i)end\\s+ref',
          endCaptures: {0: {name: 'keyword.other.sequence.ref.source.wsd'}},
          patterns: [
            {match: '.+?', name: 'meta.comment.sequence.ref.source.wsd'}
          ]
        },
        {
          captures: {
            1: {name: 'keyword.operator.sequence.delay.source.wsd'},
            2: {name: 'meta.comment.sequence.delay.source.wsd'},
            3: {name: 'keyword.operator.sequence.delay.source.wsd'}
          },
          match: '(?i)^\\s*(\\.{3,})\\s*(.+)\\s*(\\.{3,})\\s*$'
        },
        {
          captures: {
            1: {name: 'keyword.operator.sequence.space.source.wsd'},
            2: {name: 'constant.numeric.sequence.space.source.wsd'},
            3: {name: 'keyword.operator.sequence.space.source.wsd'}
          },
          match: '(?i)(\\|{2,})(\\d+)?(\\|{1,})'
        }
      ]
    },
    State: {
      patterns: [
        {
          captures: {1: {name: 'keyword.other.state.concurrent.source.wsd'}},
          match: '(?i)^\\s*(-{2,})\\s*$'
        }
      ]
    },
    Style: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.skinparam.source.wsd'},
            2: {name: 'keyword.other.skinparam.keyword.source.wsd'},
            3: {name: 'constant.numeric.skinparam.keyword.source.wsd'},
            4: {name: 'string.quoted.double.skinparam.value.source.wsd'}
          },
          match:
            '(?i)^\\s*(skinparam)\\s+(\\w+)(<<\\s*.+?\\s*>>)?\\s+([^\\{\\}]+?)\\s*$'
        },
        {
          begin:
            '(?i)^\\s*(?:(skinparam)(?:\\s+(\\w+?)(<<\\s*.+?\\s*>>)?)?|(\\w+)(<<\\s*.+?\\s*>>)?)\\s*\\{\\s*$',
          beginCaptures: {
            1: {name: 'keyword.other.skinparam.source.wsd'},
            2: {name: 'keyword.other.skinparam.keyword.source.wsd'},
            3: {name: 'constant.numeric.skinparam.keyword.source.wsd'},
            4: {name: 'keyword.other.skinparam.keyword.source.wsd'},
            5: {name: 'constant.numeric.skinparam.keyword.source.wsd'}
          },
          end: '^\\s*(?<!\\\\)\\}\\s*$',
          patterns: [
            {
              captures: {
                1: {name: 'keyword.other.skinparam.keyword.source.wsd'},
                2: {name: 'constant.numeric.skinparam.keyword.source.wsd'},
                3: {name: 'string.quoted.double.skinparam.value.source.wsd'}
              },
              match: '(?i)^\\s*(\\w+)(<<\\s*.+?\\s*>>)?\\s+([^\\{\\}]+?)\\s*$'
            },
            {include: '$self'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.wsd'
}

export default grammar
