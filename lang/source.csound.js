// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/nwhetsell/language-csound>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.orc', '.udo'],
  names: ['csound', 'csound-orc'],
  patterns: [
    {include: '#commentsAndMacroUses'},
    {
      begin: '\\b(?=instr\\b)',
      end: '\\bendin\\b',
      endCaptures: {0: {name: 'keyword.other.csound'}},
      name: 'meta.instrument-block.csound',
      patterns: [
        {
          begin: 'instr',
          beginCaptures: {0: {name: 'keyword.function.csound'}},
          end: '$',
          name: 'meta.instrument-declaration.csound',
          patterns: [
            {match: '\\d+|[A-Z_a-z]\\w*', name: 'entity.name.function.csound'},
            {include: '#commentsAndMacroUses'}
          ]
        },
        {include: '#commentsAndMacroUses'},
        {include: '#labels'},
        {include: '#partialExpressions'}
      ]
    },
    {
      begin: '\\b(?=opcode\\b)',
      end: '\\bendop\\b',
      endCaptures: {0: {name: 'keyword.other.csound'}},
      name: 'meta.opcode-definition.csound',
      patterns: [
        {
          begin: 'opcode',
          beginCaptures: {0: {name: 'keyword.function.csound'}},
          end: '$',
          name: 'meta.opcode-declaration.csound',
          patterns: [
            {
              begin: '[A-Z_a-z]\\w*\\b',
              beginCaptures: {0: {name: 'entity.name.function.opcode.csound'}},
              end: '$',
              name: 'meta.opcode-details.csound',
              patterns: [
                {
                  begin: '\\b(?:0|[aijkOPVKopS\\[\\]]+)',
                  beginCaptures: {0: {name: 'storage.type.csound'}},
                  end: ',|$',
                  name: 'meta.opcode-type-signature.csound',
                  patterns: [{include: '#commentsAndMacroUses'}]
                },
                {include: '#commentsAndMacroUses'}
              ]
            },
            {include: '#commentsAndMacroUses'}
          ]
        },
        {include: '#commentsAndMacroUses'},
        {include: '#labels'},
        {include: '#partialExpressions'}
      ]
    },
    {include: '#labels'},
    {include: '#partialExpressions'}
  ],
  repository: {
    bracedStringContents: {
      patterns: [{include: '#escapeSequences'}, {include: '#formatSpecifiers'}]
    },
    comments: {
      patterns: [
        {
          begin: '/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.csound'}
          },
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.csound'}},
          name: 'comment.block.csound'
        },
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.csound'}},
          end: '$',
          name: 'comment.line.double-slash.csound'
        },
        {include: '#semicolonComments'},
        {include: '#lineContinuations'}
      ]
    },
    commentsAndMacroUses: {
      patterns: [{include: '#comments'}, {include: '#macroUses'}]
    },
    decimalNumbers: {
      patterns: [
        {match: '\\d+', name: 'constant.numeric.integer.decimal.csound'}
      ]
    },
    escapeSequences: {
      patterns: [
        {
          match: '\\\\(?:[abfnrtv"\\\\]|[0-7]{1,3})',
          name: 'constant.character.escape.csound'
        }
      ]
    },
    floatingPointNumbers: {
      patterns: [
        {
          match:
            '(?:\\d+[Ee][+-]?\\d+)|(?:\\d+\\.\\d*|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?',
          name: 'constant.numeric.float.csound'
        }
      ]
    },
    formatSpecifiers: {
      patterns: [
        {
          match: '%[#0\\- +]*\\d*(?:\\.\\d+)?[diuoxXfFeEgGaAcs]',
          name: 'constant.character.placeholder.csound'
        },
        {match: '%%', name: 'constant.character.escape.csound'}
      ]
    },
    labels: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.label.csound'},
            2: {name: 'entity.punctuation.label.csound'}
          },
          match: '^[ \\t]*(\\w+)(:)(?:[ \\t]+|$)'
        }
      ]
    },
    lineContinuations: {
      patterns: [
        {
          captures: {
            1: {name: 'constant.character.escape.line-continuation.csound'},
            2: {name: 'comment.line.semicolon.csound'},
            3: {name: 'punctuation.definition.comment.csound'}
          },
          match: '(\\\\)[ \\t]*((;).*)?$'
        }
      ]
    },
    macroNames: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.function.preprocessor.csound'},
            2: {name: 'invalid.illegal.csound'}
          },
          match: '([A-Z_a-z]\\w*)|(\\d+\\w*)'
        }
      ]
    },
    macroParameterValueParenthetical: {
      patterns: [
        {
          begin: '\\(',
          end: '\\)',
          name: 'meta.macro-parameter-value-parenthetical.csound',
          patterns: [
            {include: '#macroParameterValueParenthetical'},
            {match: '\\\\\\)', name: 'constant.character.escape.csound'},
            {include: '$self'}
          ]
        }
      ]
    },
    macroUses: {
      patterns: [
        {
          begin: '(\\$[A-Z_a-z]\\w*\\.?)\\(',
          beginCaptures: {
            1: {name: 'entity.name.function.preprocessor.csound'}
          },
          end: '\\)',
          name: 'meta.function-like-macro-use.csound',
          patterns: [
            {
              begin: '"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.csound'}
              },
              end: '"',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.csound'}
              },
              name: 'string.quoted.csound',
              patterns: [
                {
                  captures: {
                    1: {name: 'invalid.illegal.csound'},
                    2: {name: 'constant.character.escape.csound'}
                  },
                  match: "([#'()])|(\\\\[#'()])"
                },
                {include: '#quotedStringContents'}
              ]
            },
            {
              begin: '\\{\\{',
              end: '\\}\\}',
              name: 'string.braced.csound',
              patterns: [
                {
                  captures: {
                    1: {name: 'invalid.illegal.csound'},
                    2: {name: 'constant.character.escape.csound'}
                  },
                  match: "([#'()])|(\\\\[#'()])"
                },
                {include: '#bracedStringContents'}
              ]
            },
            {include: '#macroParameterValueParenthetical'},
            {
              match: "[#']",
              name: 'punctuation.macro-parameter-separator.csound'
            },
            {include: '$self'}
          ]
        },
        {
          match: '\\$[A-Z_a-z]\\w*(?:\\.|\\b)',
          name: 'entity.name.function.preprocessor.csound'
        }
      ]
    },
    numbers: {
      patterns: [
        {include: '#floatingPointNumbers'},
        {
          captures: {
            1: {name: 'storage.type.number.csound'},
            2: {name: 'constant.numeric.integer.hexadecimal.csound'}
          },
          match: '(0[Xx])([0-9A-Fa-f]+)'
        },
        {include: '#decimalNumbers'}
      ]
    },
    partialExpressions: {
      patterns: [
        {include: '#preprocessorDirectives'},
        {
          match: '\\b(?:0dbfs|A4|k(?:r|smps)|nchnls(?:_i)?|sr)\\b',
          name: 'variable.language.csound'
        },
        {include: '#numbers'},
        {
          match:
            '\\+=|-=|\\*=|/=|<<|>>|<=|>=|==|!=|&&|\\|\\||[~¬]|[=!+\\-*/^%&|<>#?:]',
          name: 'keyword.operator.csound'
        },
        {include: '#quotedStrings'},
        {
          begin: '\\{\\{',
          end: '\\}\\}',
          name: 'string.braced.csound',
          patterns: [{include: '#bracedStringContents'}]
        },
        {
          match:
            '\\b(?:do|else(?:if)?|end(?:if|until)|fi|i(?:f|then)|kthen|od|r(?:ir)?eturn|then|until|while)\\b',
          name: 'keyword.control.csound'
        },
        {
          begin:
            '\\b((?:c(?:g|in?|k|nk?)goto)|goto|igoto|kgoto|loop_[gl][et]|r(?:einit|igoto)|ti(?:goto|mout))\\b',
          beginCaptures: {1: {name: 'keyword.control.csound'}},
          end: '(\\w+)\\s*(?:((//).*)|((;).*))?$',
          endCaptures: {
            1: {name: 'entity.name.label.csound'},
            2: {name: 'comment.line.double-slash.csound'},
            3: {name: 'punctuation.definition.comment.csound'},
            4: {name: 'comment.line.semicolon.csound'},
            5: {name: 'punctuation.definition.comment.csound'}
          },
          patterns: [
            {include: '#commentsAndMacroUses'},
            {include: '#partialExpressions'}
          ]
        },
        {
          begin: '\\b(printk?s)[ \\t]*(?=")',
          beginCaptures: {1: {name: 'support.function.csound'}},
          end: '(?<=")',
          patterns: [
            {
              begin: '"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.csound'}
              },
              end: '"',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.csound'}
              },
              name: 'string.quoted.csound',
              patterns: [
                {include: '#macroUses'},
                {
                  match: '\\\\\\\\[aAbBnNrRtT]',
                  name: 'constant.character.escape.csound'
                },
                {include: '#bracedStringContents'},
                {include: '#lineContinuations'},
                {
                  match: '%[!nNrRtT]|[~^]{1,2}',
                  name: 'constant.character.escape.csound'
                },
                {match: '[^"\\\\]*[^\\n"\\\\]$', name: 'invalid.illegal.csound'}
              ]
            }
          ]
        },
        {
          begin: '\\b(readscore|scoreline(?:_i)?)[ \\t]*(\\{\\{)',
          beginCaptures: {
            1: {name: 'support.function.csound'},
            2: {name: 'string.braced.csound'}
          },
          end: '\\}\\}',
          endCaptures: {0: {name: 'string.braced.csound'}},
          patterns: [{include: 'source.csound-score'}]
        },
        {
          begin: '\\b(pyl?run[it]?)[ \\t]*(\\{\\{)',
          beginCaptures: {
            1: {name: 'support.function.csound'},
            2: {name: 'string.braced.csound'}
          },
          end: '\\}\\}',
          endCaptures: {0: {name: 'string.braced.csound'}},
          patterns: [{include: 'source.python'}]
        },
        {
          begin: '\\b(lua_exec)[ \\t]*(\\{\\{)',
          beginCaptures: {
            1: {name: 'support.function.csound'},
            2: {name: 'string.braced.csound'}
          },
          end: '\\}\\}',
          endCaptures: {0: {name: 'string.braced.csound'}},
          patterns: [{include: 'source.lua'}]
        },
        {
          begin: '\\blua_opdef\\b',
          beginCaptures: {0: {name: 'support.function.csound'}},
          end: '\\}\\}',
          endCaptures: {0: {name: 'string.braced.csound'}},
          patterns: [
            {include: '#quotedStrings'},
            {
              begin: '\\{\\{',
              beginCaptures: {0: {name: 'string.braced.csound'}},
              end: '(?=\\}\\})',
              patterns: [{include: 'source.lua'}]
            }
          ]
        },
        {match: '\\bp\\d+\\b', name: 'support.variable.csound'},
        {
          captures: {
            1: {name: 'support.function.csound'},
            2: {name: 'invalid.deprecated.csound'},
            3: {name: 'punctuation.type-annotation.csound'},
            4: {name: 'type-annotation.storage.type.csound'}
          },
          match:
            '(?:\\b(ATS(?:add(?:(?:nz)?)|bufread|cross|in(?:fo|terpread)|partialtap|read(?:(?:nz)?)|sinnoi)|FL(?:b(?:ox|ut(?:Bank|ton))|c(?:loseButton|o(?:lor(?:(?:2)?)|unt))|execButton|g(?:etsnap|roup(?:(?:(?:E|_e)nd)?))|h(?:ide|vsBox(?:(?:SetValue)?))|joy|k(?:eyIn|nob)|l(?:abel|oadsnap)|mouse|p(?:a(?:ck(?:(?:(?:E|_e)nd)?)|nel(?:(?:(?:E|_e)nd)?))|rintk(?:(?:2)?))|r(?:oller|un)|s(?:avesnap|croll(?:(?:(?:E|_e)nd)?)|et(?:Align|Box|Color(?:(?:2)?)|Font|Position|S(?:ize|napGroup)|Text(?:(?:Color|(?:Siz|Typ)e)?)|Val(?:(?:(?:(?:_)?)i)?)|snap)|how|lid(?:Bnk(?:(?:2(?:(?:Set(?:(?:k)?))?)|GetHandle|Set(?:(?:k)?))?)|er))|t(?:abs(?:(?:(?:E|_e)nd)?)|ext)|update|v(?:alue|keybd|slidBnk(?:(?:2)?))|xyin)|Jacko(?:Audio(?:In(?:(?:Connect)?)|Out(?:(?:Connect)?))|Freewheel|In(?:fo|it)|Midi(?:(?:InConnec|Ou(?:(?:tConnec)?))t)|NoteOut|On|Transport)|K35_(?:(?:[hl])pf)|Mixer(?:Clear|GetLevel|Receive|Se(?:nd|tLevel(?:(?:_i)?)))|OSC(?:bundle|count|init(?:(?:M)?)|listen|raw|send(?:(?:_lo)?))|STK(?:B(?:andedWG|eeThree|low(?:Botl|Hole)|owed|rass)|Clarinet|Drummer|F(?:MVoices|lute)|HevyMetl|M(?:andolin|o(?:dalBar|og))|P(?:ercFlut|lucked)|R(?:esonate|hodey)|S(?:axofony|hakers|i(?:mple|tar)|tifKarp)|TubeBell|VoicForm|W(?:histle|urley))|a(?:bs|ctive|ds(?:r|yn(?:(?:t(?:(?:2)?))?))|ftouch|l(?:lpole|pass|wayson)|mp(?:db(?:(?:fs)?)|midi(?:(?:curve|d)?))|poleparams|r(?:duino(?:Read(?:(?:F)?)|St(?:art|op))|eson(?:(?:k)?))|tone(?:(?:[kx])?)|utocorr)|b(?:a(?:bo|lance(?:(?:2)?)|mboo|rmodel)|bcut(?:[ms])|e(?:(?:tara|xpr)nd)|form(?:dec(?:[12])|enc1)|i(?:nit|quad(?:(?:a)?)|rnd)|ob|pf(?:(?:cos)?)|qrez|u(?:t(?:b(?:[pr])|hp|lp|t(?:er(?:b(?:[pr])|(?:[hl])p)|on))|zz))|c(?:2r|a(?:basa|uchy(?:(?:i)?))|brt|e(?:il|ll|nt(?:(?:roid)?)|ps(?:(?:inv)?))|h(?:an(?:ctrl|ged(?:(?:2)?)|[io])|e(?:byshevpoly|ckbox)|n(?:_(?:[Sak])|clear|export|get(?:(?:ks|[aiks])?)|mix|params|set(?:(?:ks|[aiks])?))|uap)|l(?:ear|filt|ip|ocko(?:ff|n))|mp(?:(?:lxprod)?)|nt(?:C(?:reate|ycles)|Delete(?:(?:_i)?)|Re(?:ad|set)|State)|o(?:m(?:b(?:(?:inv)?)|p(?:ile(?:csd|orc|str)|ress(?:(?:2)?)))|n(?:nect|trol|v(?:(?:l|olv)e))|py(?:a2ftab|f2array)|s(?:(?:h|inv|seg(?:(?:[br])?))?)|unt(?:(?:_i)?))|p(?:s(?:2pch|midi(?:(?:b|nn)?)|oct|pch|t(?:mid|un(?:(?:i)?))|xpch)|u(?:meter|prc))|r(?:oss(?:2|fm(?:(?:i|pm(?:(?:i)?))?)|pm(?:(?:i)?))|unch)|t(?:lchn|rl(?:14|21|7|init|pr(?:eset|int(?:(?:presets)?))|s(?:ave|elect)))|userrnd)|d(?:a(?:m|te(?:(?:s)?))|b(?:(?:(?:(?:fs)?)amp)?)|c(?:block(?:(?:2)?)|onv|t(?:(?:inv)?))|e(?:interleave|l(?:ay(?:(?:[1krw])?)|tap(?:(?:xw|[3inx])?))|norm)|i(?:ff|ode_ladder|rectory|s(?:k(?:grain|in(?:(?:2)?))|p(?:fft|lay)|tort(?:(?:1)?))|vz)|o(?:ppler|t|wnsamp)|ripwater|ssi(?:a(?:ctivate|udio)|ctls|(?:ini|lis)t)|u(?:mpk(?:(?:[234])?)|s(?:errnd|t(?:(?:2)?))))|e(?:lapsed(?:cycles|time)|nvlpx(?:(?:r)?)|phasor|qfil|v(?:alstr|ent(?:(?:_i|cycles|time)?))|x(?:citer|itnow|p(?:(?:curve|on|rand(?:(?:i)?)|seg(?:(?:ba|[abr])?))?)))|f(?:a(?:reylen(?:(?:i)?)|ust(?:audio|c(?:ompile|tl)|dsp|gen|play))|ft(?:(?:inv)?)|i(?:close|l(?:e(?:bit|len|nchnls|peak|s(?:cal|r)|valid)|larray|ter2)|n(?:(?:[ik])?)|open)|l(?:a(?:nger|shtxt)|oo(?:per(?:(?:2)?)|r)|uid(?:AllOut|C(?:C(?:[ik])|ontrol)|Engine|Info|Load|Note|Out|ProgramSelect|SetInterpMethod))|m(?:a(?:nal|x)|b(?:3|ell)|in|metal|od|percfl|(?:rhod|voic|wurli)e)|o(?:f(?:2|ilter)|l(?:d|low(?:(?:2)?))|scil(?:(?:i)?)|ut(?:(?:ir|[ik])?)|[fg])|print(?:(?:(?:k)?)s)|r(?:a(?:c(?:(?:talnoise)?)|mebuffer)|eeverb)|t(?:audio|c(?:hnls|onv|ps)|exists|free|gen(?:(?:once|tmp)?)|l(?:en|oad(?:(?:k)?)|ptim)|morf|om|print|resize(?:(?:i)?)|s(?:a(?:mplebank|ve(?:(?:k)?))|et|lice(?:(?:i)?)|r)))|g(?:a(?:in(?:(?:slider)?)|uss(?:(?:i|trig)?))|buzz|e(?:n(?:array(?:(?:_i)?)|dy(?:(?:[cx])?))|t(?:c(?:fg|ol)|ftargs|row|seed))|ogobel|ra(?:in(?:(?:[23])?)|nule)|t(?:adsr|f)|uiro)|h(?:armon(?:(?:[234])?)|df5(?:read|write)|ilbert(?:(?:2)?)|rtf(?:early|move(?:(?:2)?)|reverb|stat)|sboscil|vs(?:[123])|ypot)|i(?:hold|mage(?:create|free|getpixel|load|s(?:ave|etpixel|ize))|n(?:(?:32|ch|it(?:(?:c(?:14|21|7))?)|let(?:kid|[afkv])|rg|s(?:global|remot)|te(?:g|r(?:leave|p))|value|[hoqstxz])?))|j(?:acktransport|itter(?:(?:2)?)|oystick|spline)|l(?:a(?:_(?:i_(?:a(?:dd_(?:m(?:[cr])|v(?:[cr]))|ssign_(?:m(?:[cr])|t|v(?:[cr])))|conjugate_(?:m(?:[cr])|v(?:[cr]))|d(?:i(?:stance_v(?:[cr])|vide_(?:m(?:[cr])|v(?:[cr])))|ot_(?:m(?:c_vc|r_vr|[cr])|v(?:[cr])))|get_(?:m(?:[cr])|v(?:[cr]))|invert_m(?:[cr])|l(?:ower_solve_m(?:[cr])|u_(?:det_m(?:[cr])|factor_m(?:[cr])|solve_m(?:[cr])))|m(?:c_(?:create|set)|r_(?:create|set)|ultiply_(?:m(?:[cr])|v(?:[cr])))|norm(?:1_(?:m(?:[cr])|v(?:[cr]))|_(?:euclid_(?:m(?:[cr])|v(?:[cr]))|inf_(?:m(?:[cr])|v(?:[cr]))|max_m(?:[cr])))|print_(?:m(?:[cr])|v(?:[cr]))|qr_(?:eigen_m(?:[cr])|factor_m(?:[cr])|sym_eigen_m(?:[cr]))|random_(?:m(?:[cr])|v(?:[cr]))|s(?:ize_(?:m(?:[cr])|v(?:[cr]))|ubtract_(?:m(?:[cr])|v(?:[cr])))|t(?:_assign|ra(?:ce_m(?:[cr])|nspose_m(?:[cr])))|upper_solve_m(?:[cr])|v(?:c_(?:create|set)|r_(?:create|set)))|k_(?:a(?:_assign|dd_(?:m(?:[cr])|v(?:[cr]))|ssign_(?:m(?:[cr])|v(?:[cr])|[aft]))|c(?:onjugate_(?:m(?:[cr])|v(?:[cr]))|urrent_(?:f|vr))|d(?:i(?:stance_v(?:[cr])|vide_(?:m(?:[cr])|v(?:[cr])))|ot_(?:m(?:c_vc|r_vr|[cr])|v(?:[cr])))|f_assign|get_(?:m(?:[cr])|v(?:[cr]))|invert_m(?:[cr])|l(?:ower_solve_m(?:[cr])|u_(?:det_m(?:[cr])|factor_m(?:[cr])|solve_m(?:[cr])))|m(?:c_set|r_set|ultiply_(?:m(?:[cr])|v(?:[cr])))|norm(?:1_(?:m(?:[cr])|v(?:[cr]))|_(?:euclid_(?:m(?:[cr])|v(?:[cr]))|inf_(?:m(?:[cr])|v(?:[cr]))|max_m(?:[cr])))|qr_(?:eigen_m(?:[cr])|factor_m(?:[cr])|sym_eigen_m(?:[cr]))|random_(?:m(?:[cr])|v(?:[cr]))|subtract_(?:m(?:[cr])|v(?:[cr]))|t(?:_assign|race_m(?:[cr]))|upper_solve_m(?:[cr])|v(?:(?:[cr])_set)))|g(?:(?:ud)?)|stcycle)|enarray|f(?:o|sr)|i(?:mit(?:(?:1)?)|n(?:cos|e(?:(?:n(?:(?:r)?)|to)?)|k_(?:beat_(?:force|(?:ge|reques)t)|create|enable|is_enabled|metro|peers|tempo_(?:(?:[gs])et))|lin|rand|seg(?:(?:[br])?))|veconv)|o(?:cs(?:end|ig)|g(?:(?:10|2|btwo|curve)?)|op(?:seg(?:(?:p)?)|(?:[tx])seg)|renz|scil(?:(?:(?:(?:3)?)phs|[3x])?)|w(?:pass2|res(?:(?:x)?)))|p(?:c(?:anal|filter)|f(?:18|orm|reson)|hasor|interp|oscil(?:(?:sa(?:(?:2)?)|[3a])?)|re(?:ad|son)|s(?:hold(?:(?:p)?)|lot))|ufs)|m(?:a(?:ca|dsr|gs|nd(?:(?:[eo])l)|parray(?:(?:_i)?)|rimba|ssign|x(?:_k|a(?:bs(?:(?:accum)?)|ccum|lloc|rray))|[cx])|clock|delay|e(?:dian(?:(?:k)?)|tro(?:(?:2|bpm)?))|fb|i(?:d(?:global|i(?:arp|c(?:14|21|7|h(?:annelaftertouch|n)|ontrolchange|trl)|default|filestatus|in|noteo(?:ff|n(?:cps|key|oct|pch))|o(?:n(?:(?:2)?)|ut(?:(?:_i)?))|p(?:gm|itchbend|olyaftertouch|rogramchange)|tempo)|remot)|n(?:(?:a(?:bs(?:(?:accum)?)|ccum|rray)|cer)?)|rror)|o(?:d(?:e|matrix)|nitor|og(?:(?:ladder(?:(?:2)?)|vcf(?:(?:2)?))?)|scil)|p(?:3(?:bitrate|in|len|nchnls|out|s(?:cal|r))|ulse)|rtmsg|s2st|to(?:[fn])|u(?:ltitap|te)|v(?:c(?:hpf|lpf(?:[1234]))|mfilter)|xadsr)|n(?:chnls_hw|estedap|l(?:alp|filt(?:(?:2)?))|o(?:ise|t(?:eo(?:ff|n(?:(?:dur(?:(?:2)?))?))|num))|r(?:everb|pn)|s(?:amp|t(?:ance|r(?:num|str)))|t(?:o(?:[fm])|rpol)|xtpow2)|o(?:ct(?:ave|cps|midi(?:(?:b|nn)?)|pch)|labuffer|sc(?:bnk|il(?:(?:1i|ikt(?:(?:[ps])?)|[13insx])?))|ut(?:(?:32|all|ch|i(?:at|c(?:(?:14)?)|p(?:at|[bc]))|k(?:at|c(?:(?:14)?)|p(?:at|[bc]))|let(?:kid|[afkv])|q(?:[1234])|rg|s(?:[12])|value|[choqsxz])?))|p(?:5g(?:connect|data)|a(?:n(?:(?:2)?)|r(?:eq|t(?:2txt|i(?:als|kkel(?:(?:get|s(?:et|ync))?))))|ssign|ulstretch)|c(?:auchy|h(?:bend|midi(?:(?:b|nn)?)|oct|tom)|o(?:nvolve|unt))|d(?:clip|half(?:(?:y)?))|eak|gm(?:(?:assig|ch)n)|h(?:as(?:er(?:[12])|or(?:(?:bnk)?))|s)|i(?:n(?:dex|k(?:er|ish))|tch(?:(?:a(?:c|mdf))?))|l(?:a(?:net|terev)|(?:ltra|u)ck)|o(?:isson|l(?:2rect|y(?:aft|nomial))|rt(?:(?:k)?)|scil(?:(?:3)?)|w(?:(?:ershape|oftwo|s)?))|r(?:e(?:alloc|piano)|int(?:(?:_type|array|f_i|k(?:s2|[2s])|ln|sk|[fks])?)|oduct)|set|t(?:ablew|rack)|uts|v(?:add|bufread|cross|interp|oc|read|s(?:2(?:array|tab)|a(?:dsyn|nal|rp)|b(?:and(?:width|[pr])|in|lur|uf(?:fer|read(?:(?:2)?)))|c(?:ale|e(?:nt|ps)|(?:f|ros)s)|d(?:emix|is(?:kin|p))|envftw|f(?:ilter|r(?:e(?:ad|eze)|omarray)|t(?:[rw])|write)|g(?:ain|endy)|hift|i(?:fd|n(?:(?:fo|it)?))|l(?:ock|pc)|m(?:aska|ix|o(?:(?:ot|rp)h))|o(?:sc|ut)|pitch|t(?:anal|encil|race)|voc|warp|ynth))|wd|y(?:assign(?:(?:[it])?)|call(?:(?:1(?:[it])|2(?:[it])|3(?:[it])|4(?:[it])|5(?:[it])|6(?:[it])|7(?:[it])|8(?:[it])|ni|[12345678int])?)|e(?:val(?:(?:[it])?)|xec(?:(?:[it])?))|init|l(?:assign(?:(?:[it])?)|call(?:(?:1(?:[it])|2(?:[it])|3(?:[it])|4(?:[it])|5(?:[it])|6(?:[it])|7(?:[it])|8(?:[it])|ni|[12345678int])?)|e(?:val(?:(?:[it])?)|xec(?:(?:[it])?))|run(?:(?:[it])?))|run(?:(?:[it])?)))|q(?:inf|nan)|r(?:2c|and(?:(?:om(?:(?:[hi])?)|[chi])?)|bjeq|e(?:ad(?:clock|fi|k(?:[234s])|sc(?:ore|ratch)|[fk])|ct2pol|lease|mo(?:teport|ve)|pluck|s(?:hapearray|on(?:(?:bnk|xk|[krxyz])?)|yn)|verb(?:(?:2|sc)?)|windscore|zzy)|fft|ifft|ms|nd(?:(?:31|seed)?)|ound|spline|tclock)|s(?:16b14|32b14|a(?:mphold|ndpaper)|c(?:_(?:lag(?:(?:ud)?)|phasor|trig)|a(?:le(?:(?:2|array)?)|n(?:hammer|map|smap|table|u2|[su]))|hed(?:kwhen(?:(?:named)?)|ule(?:(?:k)?)|when)|oreline(?:(?:_i)?))|e(?:ed|kere|lect|mitone|nse(?:(?:key)?)|q(?:time(?:(?:2)?)|u(?:(?:state)?))|rial(?:Begin|End|Flush|Print|Read|Write(?:(?:_i)?))|t(?:c(?:(?:o|tr)l)|ksmps|row|scorepos))|f(?:i(?:list|nstr(?:(?:3m|[3m])?))|lo(?:ad|oper)|p(?:assign|l(?:ay(?:(?:3m|[3m])?)|ist)|reset))|h(?:aker|ift(?:in|out))|i(?:gnum|n(?:(?:h|inv|syn)?))|kf|l(?:eighbells|i(?:cearray(?:(?:_i)?)|der(?:16(?:(?:f|table(?:(?:f)?))?)|32(?:(?:f|table(?:(?:f)?))?)|64(?:(?:f|table(?:(?:f)?))?)|8(?:(?:f|table(?:(?:f)?))?)|Kawai)))|nd(?:loop|warp(?:(?:st)?))|o(?:ck(?:recv(?:(?:s)?)|send(?:(?:s)?))|rt(?:[ad])|undin)|p(?:a(?:ce|t3d(?:(?:[it])?))|dist|f|litrig|rintf(?:(?:k)?)|send)|q(?:rt|uinewave)|t(?:2ms|atevar|errain|ix|r(?:c(?:at(?:(?:k)?)|har(?:(?:k)?)|mp(?:(?:k)?)|py(?:(?:k)?))|e(?:cv|son)|fromurl|get|in(?:dex(?:(?:k)?)|g2array)|l(?:en(?:(?:k)?)|ower(?:(?:k)?))|rindex(?:(?:k)?)|s(?:et|trip|ub(?:(?:k)?))|to(?:(?:[dl])k|[dl])|upper(?:(?:k)?))|send)|u(?:binstr(?:(?:init)?)|m(?:(?:array)?))|v(?:filter|n)|y(?:nc(?:grain|loop|phasor)|stem(?:(?:_i)?)))|t(?:a(?:b(?:2(?:array|pvs)|_i|ifd|le(?:(?:3kt|copy|filter(?:(?:i)?)|gpw|i(?:copy|gpw|kt|mix)|kt|mix|ng|ra|s(?:eg|huffle(?:(?:i)?))|w(?:a|kt)|x(?:kt|seg)|[3iw])?)|morph(?:(?:ak|[ai])?)|play|rec|sum|w(?:(?:_i)?))|mbourine|n(?:h|inv(?:(?:2)?))|[bn])|bvcf|emp(?:est|o(?:(?:(?:sc|v)al)?))|i(?:me(?:dseq|inst(?:[ks])|[ks])|val)|lineto|one(?:(?:[kx])?)|r(?:a(?:dsyn|n(?:dom|seg(?:(?:[br])?)))|cross|filter|highest|i(?:g(?:Expseg|Linseg|expseg|ger|hold|linseg|phasor|seq)|m(?:(?:_i)?)|rand)|lowest|mix|s(?:cale|(?:hif|pli)t))|urno(?:ff(?:(?:2_i|[23])?)|n)|vconv)|u(?:n(?:irand|wrap)|psamp|r(?:andom|d))|v(?:a(?:ctrol|dd(?:(?:_i|v(?:(?:_i)?))?)|get|lpass|set)|bap(?:(?:gmove|lsinit|(?:(?:z)?)move|[gz])?)|c(?:ella|lpf|o(?:(?:2(?:(?:(?:f|i(?:f|ni))t)?)|mb|py(?:(?:_i)?))?))|d(?:el(?:_k|ay(?:(?:x(?:w(?:[qs])|[qsw])|[3kx])?))|ivv(?:(?:_i)?))|e(?:cdelay|loc|xp(?:(?:_i|seg|v(?:(?:_i)?))?))|i(?:b(?:es|r(?:(?:ato)?))|ncr)|l(?:i(?:mit|nseg)|owres)|m(?:ap|irror|ult(?:(?:_i|v(?:(?:_i)?))?))|o(?:ice|sim)|p(?:haseseg|o(?:rt|w(?:(?:_i|v(?:(?:_i)?))?))|s|voc)|rand(?:[hi])|subv(?:(?:_i)?)|tab(?:le(?:1k|w(?:[aik])|[aik])|w(?:[aik])|[aik])|wrap)|w(?:aveset|e(?:bsocket|ibull)|g(?:b(?:ow(?:(?:edbar)?)|rass)|clar|flute|pluck(?:(?:2)?)|uide(?:[12]))|i(?:i(?:connect|data|range|send)|ndow)|r(?:ap|itescratch)|terrain(?:(?:2)?))|x(?:adsr|in|out|tratim|yscale)|z(?:a(?:cl|kinit|mod|rg|wm|[rw])|df_(?:1pole(?:(?:_mode)?)|2pole(?:(?:_mode)?)|ladder)|filter2|i(?:wm|[rw])|k(?:cl|mod|wm|[rw]))|[Saikp])\\b|\\b(OSCsendA|array|b(?:e(?:adsynt|osc)|form(?:(?:de|en)c)|uchla)|copy2(?:(?:[ft])tab)|getrowlin|hrtfer|ktableseg|l(?:entab|ua_(?:exec|i(?:aopcall(?:(?:_off)?)|kopcall(?:(?:_off)?)|opcall(?:(?:_off)?))|opdef))|m(?:axtab|intab|p3scal_(?:check|load(?:(?:2)?)|play(?:(?:2)?)))|p(?:op(?:(?:_f)?)|table(?:(?:iw|[3i])?)|ush(?:(?:_f)?)|vsgendy)|s(?:calet|ignalflowgraph|ndload|o(?:cksend_k|undout(?:(?:s)?))|pec(?:addm|di(?:ff|sp)|filt|hist|ptrk|s(?:cal|um)|trum)|tack|um(?:TableFilter|tab)|ystime)|t(?:ab(?:gen|leiw|map(?:(?:_i)?)|rowlin|slice)|b(?:0_init|1(?:(?:(?:[012345])?)_init|[012345])|(?:[23456789])_init|[0123456789]))|vbap(?:1(?:6|move)|(?:[48])move|[48])|x(?:scan(?:map|smap|[su])|yin))\\b)(?:(\\:)([A-Za-z]))?'
        },
        {match: '\\b[A-Z_a-z]\\w*\\b', name: 'meta.other.csound'}
      ]
    },
    preprocessorDirectives: {
      patterns: [
        {
          match: '\\#(?:e(?:lse|nd(?:if)?)\\b|\\#\\#)|@+[ \\t]*\\d*',
          name: 'keyword.preprocessor.csound'
        },
        {
          begin: '\\#includestr',
          beginCaptures: {0: {name: 'keyword.includestr.preprocessor.csound'}},
          end: '$',
          patterns: [
            {include: '#commentsAndMacroUses'},
            {
              begin: '"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.csound'}
              },
              end: '"',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.csound'}
              },
              name: 'string.includestr.csound',
              patterns: [
                {include: '#macroUses'},
                {include: '#lineContinuations'}
              ]
            }
          ]
        },
        {
          begin: '\\#include',
          beginCaptures: {0: {name: 'keyword.include.preprocessor.csound'}},
          end: '$',
          patterns: [
            {include: '#commentsAndMacroUses'},
            {
              begin: '([^ \\t])',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.csound'}
              },
              end: '\\1',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.csound'}
              },
              name: 'string.include.csound'
            }
          ]
        },
        {
          begin: '\\#[ \\t]*define',
          beginCaptures: {0: {name: 'keyword.define.preprocessor.csound'}},
          end: '(?<=^\\#)|(?<=[^\\\\]\\#)',
          patterns: [
            {include: '#commentsAndMacroUses'},
            {include: '#macroNames'},
            {
              begin: '\\(',
              end: '\\)',
              patterns: [
                {
                  match: '[A-Z_a-z]\\w*\\b',
                  name: 'variable.parameter.preprocessor.csound'
                }
              ]
            },
            {
              begin: '\\#',
              beginCaptures: {
                0: {name: 'punctuation.definition.macro.begin.csound'}
              },
              end: '(?<!\\\\)\\#',
              endCaptures: {
                0: {name: 'punctuation.definition.macro.end.csound'}
              },
              patterns: [
                {match: '\\\\\\#', name: 'constant.character.escape.csound'},
                {include: '$self'}
              ]
            }
          ]
        },
        {
          begin: '\\#(?:i(?:fn?def)|undef)',
          beginCaptures: {0: {name: 'keyword.preprocessor.csound'}},
          end: '$',
          patterns: [
            {include: '#commentsAndMacroUses'},
            {include: '#macroNames'}
          ]
        }
      ]
    },
    quotedStringContents: {
      patterns: [
        {include: '#macroUses'},
        {include: '#bracedStringContents'},
        {include: '#lineContinuations'},
        {match: '[^"\\\\]*[^\\n"\\\\]$', name: 'invalid.illegal.csound'}
      ]
    },
    quotedStrings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.csound'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.csound'}},
          name: 'string.quoted.csound',
          patterns: [{include: '#quotedStringContents'}]
        }
      ]
    },
    semicolonComments: {
      patterns: [
        {
          begin: ';',
          beginCaptures: {0: {name: 'punctuation.definition.comment.csound'}},
          end: '$',
          name: 'comment.line.semicolon.csound'
        }
      ]
    }
  },
  scopeName: 'source.csound'
}

export default grammar
