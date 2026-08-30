// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/simnjs/verse-grammar>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.verse'],
  names: ['verse'],
  patterns: [{include: '#ListInd'}],
  repository: {
    Backslash: {
      match: '\\\\(\\<(?!#)|[rnt\'\\"\\\\{}#<>&~]|$)',
      name: 'constant.character.escape.verse'
    },
    BlockCmt: {
      begin: '<#(?!>)',
      end: '(?<!<)#>',
      name: 'comment.block.verse',
      patterns: [{include: '#BlockCmt'}]
    },
    Braces: {begin: '[{]', end: '[}]', patterns: [{include: '#ListInd'}]},
    Brackets: {begin: '\\[', end: '\\]', patterns: [{include: '#ListInd'}]},
    Call: {
      patterns: [
        {include: '#BlockCmt'},
        {include: '#LineCmt'},
        {include: '#Num'},
        {include: '#Char'},
        {include: '#Path'},
        {include: '#String'},
        {include: '#CodeMarkup'},
        {include: '#Keyword'},
        {include: '#Ident'},
        {include: '#Parens'},
        {include: '#Brackets'},
        {include: '#Braces'},
        {include: '#Specs'}
      ]
    },
    Char: {
      patterns: [
        {include: '#CharLit'},
        {include: '#Char8'},
        {include: '#Char32'}
      ]
    },
    Char32: {match: '0u[0-9A-Fa-f]++', name: 'string.quoted.single.verse'},
    Char8: {match: '0o[0-9A-Fa-f]++', name: 'string.quoted.single.verse'},
    CharLit: {
      patterns: [
        {include: '#CharLit0'},
        {include: '#CharLit1'},
        {include: '#CharLitInvalid'}
      ]
    },
    CharLit0: {match: "'(.|$)('(?!')|$)", name: 'string.quoted.single.verse'},
    CharLit1: {
      begin: "'(?=\\\\(\\<(?!#)|[rnt'\\\"\\\\{}#<>&~]|$)('|$))",
      beginCaptures: {0: {name: 'string.quoted.single.verse'}},
      end: "'|$",
      endCaptures: {0: {name: 'string.quoted.single.verse'}},
      patterns: [{include: '#Backslash'}]
    },
    CharLitInvalid: {patterns: [{match: "'[^']*'?", name: 'invalid.verse'}]},
    CodeMark0: {
      begin: '^(?=(\\t|    ){0}[^#]*:>\\s*(#|$))',
      end: '^(?!(\\t|    ){0}(\\s|[^#]*:>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){0}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ContentsInd'}]
        },
        {include: '#List'}
      ]
    },
    CodeMark1: {
      begin: '^(?=(\\t|    ){1}[^#]*:>\\s*(#|$))',
      end: '^(?!(\\t|    ){1}(\\s|[^#]*:>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){1}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ContentsInd'}]
        },
        {include: '#List'}
      ]
    },
    CodeMark2: {
      begin: '^(?=(\\t|    ){2}[^#]*:>\\s*(#|$))',
      end: '^(?!(\\t|    ){2}(\\s|[^#]*:>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){2}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ContentsInd'}]
        },
        {include: '#List'}
      ]
    },
    CodeMark3: {
      begin: '^(?=(\\t|    ){3}[^#]*:>\\s*(#|$))',
      end: '^(?!(\\t|    ){3}(\\s|[^#]*:>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){3}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ContentsInd'}]
        },
        {include: '#List'}
      ]
    },
    CodeMark4: {
      begin: '^(?=(\\t|    ){4}[^#]*:>\\s*(#|$))',
      end: '^(?!(\\t|    ){4}(\\s|[^#]*:>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){4}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ContentsInd'}]
        },
        {include: '#List'}
      ]
    },
    CodeMark5: {
      begin: '^(?=(\\t|    ){5}[^#]*:>\\s*(#|$))',
      end: '^(?!(\\t|    ){5}(\\s|[^#]*:>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){5}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ContentsInd'}]
        },
        {include: '#List'}
      ]
    },
    CodeMark6: {
      begin: '^(?=(\\t|    ){6}[^#]*:>\\s*(#|$))',
      end: '^(?!(\\t|    ){6}(\\s|[^#]*:>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){6}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ContentsInd'}]
        },
        {include: '#List'}
      ]
    },
    CodeMark7: {
      begin: '^(?=(\\t|    ){7}[^#]*:>\\s*(#|$))',
      end: '^(?!(\\t|    ){7}(\\s|[^#]*:>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){7}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ContentsInd'}]
        },
        {include: '#List'}
      ]
    },
    CodeMarkup: {
      begin:
        '(^|(?<=[({\\[\\-\\&;,+*/=|:<.@]|->|=>|\\Win|^in|\\Wis|^is|\\Wdo|^do|\\Wthen|^then|\\Wuntil|^until|\\Welse|^else|\\Wwhere|^where|\\Wof|\\Wreturn|^return|\\Wyield|^yield|\\Wbreak|^break|\\Wcontinue|^continue))([?^\\s]*+)(<(?![/#=>])\\s*([A-Za-z_][A-Za-z0-9_]*)?)',
      beginCaptures: {
        2: {name: 'keyword.operator.verse'},
        3: {name: 'punctuation.definition.tag'}
      },
      end: '(?<!#>)(?<=>)',
      endCaptures: {0: {name: 'punctuation.definition.tag'}},
      patterns: [
        {include: '#Call'},
        {include: '#MarkupTail1'},
        {include: '#MarkupTail2'}
      ]
    },
    Contents: {
      patterns: [
        {include: '#BlockCmt'},
        {include: '#LineCmt'},
        {include: '#Backslash'},
        {include: '#Markup'},
        {include: '#Interp'},
        {match: '~', name: 'punctuation.definition.tag'},
        {
          begin: '(?=&)',
          end: '$|\\#|\\;',
          endCaptures: {0: {name: 'punctuation.definition.tag'}},
          patterns: [{include: '#ListInd'}]
        },
        {
          match: '["\\-\\[\\]`!@$%^*()+=|:;\',.?/A-Za-z0-9_ ]+',
          name: 'text.verse'
        }
      ]
    },
    ContentsInd: {
      patterns: [
        {include: '#MarkCmt7'},
        {include: '#MarkCmt6'},
        {include: '#MarkCmt5'},
        {include: '#MarkCmt4'},
        {include: '#MarkCmt3'},
        {include: '#MarkCmt2'},
        {include: '#MarkCmt1'},
        {include: '#MarkCmt0'},
        {include: '#MarkCode7'},
        {include: '#MarkCode6'},
        {include: '#MarkCode5'},
        {include: '#MarkCode4'},
        {include: '#MarkCode3'},
        {include: '#MarkCode2'},
        {include: '#MarkCode1'},
        {include: '#MarkCode0'},
        {include: '#Contents'}
      ]
    },
    DefineIdent1: {
      captures: {3: {name: 'entity.name.function.verse'}},
      match:
        "(^|(?<=[({\\[\\-\\&;,+*/|<=>.]|->|=>|:\\)|\\Wvar|^var|\\Wref|^ref|\\Walias|^alias|\\Wlive|^live|\\Win|^in|\\Wis|^is|\\Wdo|^do|\\Wthen|^then|\\Wuntil|^until|\\Welse|^else|\\Wover|\\Wwhile|\\Wupon|\\Wnext|\\Wwhere|\\Wof|^of|\\Wat|^at|\\Wreturn|^return|\\Wyield|^yield|\\Wbreak|^break|\\Wcontinue|^continue))([\\s\\^?]*+)([A-Za-z_][A-Za-z0-9_]*+('((?!<#|#>|[\\\\{}\"'])[ -~])*')?+)(?=((?<Call>(?<BlockCmt><#(\\g<BlockCmt>|(?!#>).)*+#>)|[\\s\\^?]++|(&|->)\\s*[A-Za-z_][A-Za-z0-9_]*+|->|'(\\\\.|[^'])*+'|\"(\\\\.|[{](\\g<Call>)*+[}]|<[^#]|#[^>]|[^\\<#\"{}]|\\g<BlockCmt>)*+\"|<(\\g<Call>|[A-Za-z0-9_])*+>|[\\[({](\\g<Call>|<[^#]|[A-Za-z0-9_\\-\\&\\^.%+*/,;>:@=!|?])*+[\\])}]))*+((:|in\\W|is\\W)\\s*+(?![)#]|$)))"
    },
    DefineIdent2: {
      captures: {2: {name: 'entity.name.function.verse'}},
      match:
        '(?<=\\Wvar|^var|\\Wref|^ref|\\Walias|^alias|\\Wlive|^live)([\\s\\^?]*+)([A-Za-z_][A-Za-z0-9_]*+)(?=((?<Call>(?<BlockCmt><#(\\g<BlockCmt>|(?!#>).)*+#>)|[\\s\\^?]++|(&|->)\\s*[A-Za-z_][A-Za-z0-9_]*+|->|\'(\\\\.|[^\'])*+\'|"(\\\\.|[{](\\g<Call>)*+[}]|<[^#]|#[^>]|[^\\<#"{}]|\\g<BlockCmt>)*+"|<(\\g<Call>|[A-Za-z0-9_])*+>|[\\[({](\\g<Call>|<[^#]|[A-Za-z0-9_\\-\\&\\^.%+*/,;>:@=!|?])*+[\\])}]))*+=)'
    },
    EatIndCmt: {
      begin: '<#>',
      end: '$',
      name: 'comment.block.verse',
      patterns: [{include: '#BlockCmt'}]
    },
    Ident: {
      match: "[.]?[A-Za-z_][A-Za-z0-9_]*+('((?!<#|#>|[\\\\{}\"'])[ -~])*+')?+",
      name: 'variable.verse'
    },
    In: {
      begin:
        '((?!:[)]):|in(?=\\W)|(?=(var|set|ref|alias|live)\\W))\\s*+(?!#|$)',
      beginCaptures: {0: {name: 'punctuation.definition.tag'}},
      end: '(=(?!>)|$|(\\+=|-=|\\*=|/=)|(?=:|=>|@|,|;|\\)|\\]|\\}|(over|when|where|while|next|in|is|with|do|until|catch|then|else|of|at)\\W))',
      endCaptures: {0: {name: 'punctuation.definition.tag'}},
      patterns: [
        {
          match: '(var|set|ref|alias|live)(?=\\W)',
          name: 'keyword.declaration.verse'
        },
        {include: '#DefineIdent1'},
        {include: '#DefineIdent2'},
        {include: '#Call'}
      ]
    },
    IndCmt0: {
      begin: '^(?=(\\t|    ){0}[^#]*<#>)',
      end: '^(?!(\\t|    ){0}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){0}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#List'}
      ]
    },
    IndCmt1: {
      begin: '^(?=(\\t|    ){1}[^#]*<#>)',
      end: '^(?!(\\t|    ){1}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){1}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#List'}
      ]
    },
    IndCmt2: {
      begin: '^(?=(\\t|    ){2}[^#]*<#>)',
      end: '^(?!(\\t|    ){2}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){2}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#List'}
      ]
    },
    IndCmt3: {
      begin: '^(?=(\\t|    ){3}[^#]*<#>)',
      end: '^(?!(\\t|    ){3}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){3}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#List'}
      ]
    },
    IndCmt4: {
      begin: '^(?=(\\t|    ){4}[^#]*<#>)',
      end: '^(?!(\\t|    ){4}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){4}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#List'}
      ]
    },
    IndCmt5: {
      begin: '^(?=(\\t|    ){5}[^#]*<#>)',
      end: '^(?!(\\t|    ){5}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){5}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#List'}
      ]
    },
    IndCmt6: {
      begin: '^(?=(\\t|    ){6}[^#]*<#>)',
      end: '^(?!(\\t|    ){6}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){6}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#List'}
      ]
    },
    IndCmt7: {
      begin: '^(?=(\\t|    ){7}[^#]*<#>)',
      end: '^(?!(\\t|    ){7}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){7}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#List'}
      ]
    },
    Interp: {
      begin: '\\{',
      beginCaptures: {0: {name: 'constant.character.escape.verse'}},
      end: '\\}',
      endCaptures: {0: {name: 'constant.character.escape.verse'}},
      patterns: [{include: '#ListInd'}]
    },
    Keyword: {
      patterns: [
        {match: '(and|or|not)(?=\\W)', name: 'keyword.operator.logical.verse'},
        {
          match: '[:.]\\s*+(?=(#|$))|[.](?=\\s)|@|&',
          name: 'punctuation.definition.tag'
        },
        {
          match: '(with|do|until|catch|then|else|of|at)(?=\\W)',
          name: 'keyword.declaration.verse'
        }
      ]
    },
    LineCmt: {
      begin: '(?<!<)#(?!>)',
      end: '$',
      name: 'comment.line.verse',
      patterns: [{include: '#BlockCmt'}]
    },
    List: {
      patterns: [
        {include: '#Keyword'},
        {
          match: '(return|yield|break|continue)(?=\\W)',
          name: 'keyword.control.verse'
        },
        {match: '(is)(?=\\W)', name: 'keyword.declaration.verse'},
        {
          match:
            '(?<=\\w\\s|\\)|\\]|\\})\\s*(over|when|where|while|next)(?=\\W)',
          name: 'keyword.declaration.verse'
        },
        {include: '#DefineIdent1'},
        {include: '#DefineIdent2'},
        {include: '#In'},
        {
          match: '(in|var|set|ref|alias|live)(?=\\W)',
          name: 'keyword.declaration.verse'
        },
        {include: '#Call'},
        {match: ':=', name: 'punctuation.definition.tag'},
        {match: '[|]|[.][.]|=>|[+\\-*/]=', name: 'keyword.operator.verse'},
        {match: '[+\\-*/]|->', name: 'keyword.operator.arithmetic.verse'},
        {
          match: '=(?!=)|<>|<=|<|>=|>',
          name: 'keyword.operator.comparison.verse'
        },
        {match: '[;,]', name: 'punctuation.definition.tag'},
        {match: '[`~$>)},\\]\\\\]|#>|[.][0-9]+|!=|==', name: 'invalid.verse'}
      ]
    },
    ListInd: {
      patterns: [
        {include: '#CodeMark7'},
        {include: '#CodeMark6'},
        {include: '#CodeMark5'},
        {include: '#CodeMark4'},
        {include: '#CodeMark3'},
        {include: '#CodeMark2'},
        {include: '#CodeMark1'},
        {include: '#CodeMark0'},
        {include: '#IndCmt7'},
        {include: '#IndCmt6'},
        {include: '#IndCmt5'},
        {include: '#IndCmt4'},
        {include: '#IndCmt3'},
        {include: '#IndCmt2'},
        {include: '#IndCmt1'},
        {include: '#IndCmt0'},
        {include: '#List'}
      ]
    },
    MarkCmt0: {
      begin: '^(?=(\\t|    ){0}[^#]*<#>)',
      end: '^(?!(\\t|    ){0}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){0}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#Contents'}
      ]
    },
    MarkCmt1: {
      begin: '^(?=(\\t|    ){1}[^#]*<#>)',
      end: '^(?!(\\t|    ){1}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){1}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#Contents'}
      ]
    },
    MarkCmt2: {
      begin: '^(?=(\\t|    ){2}[^#]*<#>)',
      end: '^(?!(\\t|    ){2}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){2}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#Contents'}
      ]
    },
    MarkCmt3: {
      begin: '^(?=(\\t|    ){3}[^#]*<#>)',
      end: '^(?!(\\t|    ){3}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){3}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#Contents'}
      ]
    },
    MarkCmt4: {
      begin: '^(?=(\\t|    ){4}[^#]*<#>)',
      end: '^(?!(\\t|    ){4}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){4}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#Contents'}
      ]
    },
    MarkCmt5: {
      begin: '^(?=(\\t|    ){5}[^#]*<#>)',
      end: '^(?!(\\t|    ){5}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){5}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#Contents'}
      ]
    },
    MarkCmt6: {
      begin: '^(?=(\\t|    ){6}[^#]*<#>)',
      end: '^(?!(\\t|    ){6}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){6}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#Contents'}
      ]
    },
    MarkCmt7: {
      begin: '^(?=(\\t|    ){7}[^#]*<#>)',
      end: '^(?!(\\t|    ){7}(\\s|[^#]*<#>)|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){7}\\s+(?!$))',
          end: '$',
          name: 'comment.block.verse',
          patterns: [{include: '#BlockCmt'}]
        },
        {include: '#EatIndCmt'},
        {include: '#Contents'}
      ]
    },
    MarkCode0: {
      begin: '^(?=(\\t|    ){0}[^#]*&[^#]*[:.]\\s*(#|$))',
      end: '^(?!(\\t|    ){0}(\\s|[^#]*&[^#]*[:.]\\s*(#|$))|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){0}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ListInd'}]
        },
        {include: '#Contents'}
      ]
    },
    MarkCode1: {
      begin: '^(?=(\\t|    ){1}[^#]*&[^#]*[:.]\\s*(#|$))',
      end: '^(?!(\\t|    ){1}(\\s|[^#]*&[^#]*[:.]\\s*(#|$))|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){1}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ListInd'}]
        },
        {include: '#Contents'}
      ]
    },
    MarkCode2: {
      begin: '^(?=(\\t|    ){2}[^#]*&[^#]*[:.]\\s*(#|$))',
      end: '^(?!(\\t|    ){2}(\\s|[^#]*&[^#]*[:.]\\s*(#|$))|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){2}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ListInd'}]
        },
        {include: '#Contents'}
      ]
    },
    MarkCode3: {
      begin: '^(?=(\\t|    ){3}[^#]*&[^#]*[:.]\\s*(#|$))',
      end: '^(?!(\\t|    ){3}(\\s|[^#]*&[^#]*[:.]\\s*(#|$))|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){3}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ListInd'}]
        },
        {include: '#Contents'}
      ]
    },
    MarkCode4: {
      begin: '^(?=(\\t|    ){4}[^#]*&[^#]*[:.]\\s*(#|$))',
      end: '^(?!(\\t|    ){4}(\\s|[^#]*&[^#]*[:.]\\s*(#|$))|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){4}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ListInd'}]
        },
        {include: '#Contents'}
      ]
    },
    MarkCode5: {
      begin: '^(?=(\\t|    ){5}[^#]*&[^#]*[:.]\\s*(#|$))',
      end: '^(?!(\\t|    ){5}(\\s|[^#]*&[^#]*[:.]\\s*(#|$))|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){5}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ListInd'}]
        },
        {include: '#Contents'}
      ]
    },
    MarkCode6: {
      begin: '^(?=(\\t|    ){6}[^#]*&[^#]*[:.]\\s*(#|$))',
      end: '^(?!(\\t|    ){6}(\\s|[^#]*&[^#]*[:.]\\s*(#|$))|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){6}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ListInd'}]
        },
        {include: '#Contents'}
      ]
    },
    MarkCode7: {
      begin: '^(?=(\\t|    ){7}[^#]*&[^#]*[:.]\\s*(#|$))',
      end: '^(?!(\\t|    ){7}(\\s|[^#]*&[^#]*[:.]\\s*(#|$))|\\s*$)',
      patterns: [
        {
          begin: '^(?=(\\t|    ){7}\\s+(?!$))',
          end: '$',
          patterns: [{include: '#ListInd'}]
        },
        {include: '#Contents'}
      ]
    },
    Markup: {
      begin: '(<(?![/#=]))\\s*([A-Za-z_][A-Za-z0-9_]*)?',
      beginCaptures: {0: {name: 'punctuation.definition.tag'}},
      end: '(?<!#>)(?<=>)',
      endCaptures: {0: {name: 'punctuation.definition.tag'}},
      patterns: [
        {include: '#Call'},
        {include: '#MarkupTail1'},
        {include: '#MarkupTail2'}
      ]
    },
    MarkupTail1: {
      begin: ':(?=>)|;',
      beginCaptures: {0: {name: 'punctuation.definition.tag'}},
      end: '>',
      endCaptures: {0: {name: 'punctuation.definition.tag'}},
      patterns: [{include: '#ContentsInd'}]
    },
    MarkupTail2: {
      begin: '>',
      beginCaptures: {0: {name: 'punctuation.definition.tag'}},
      end: '</\\s*([A-Za-z_][A-Za-z0-9_]*)?\\s*>',
      endCaptures: {0: {name: 'punctuation.definition.tag'}},
      patterns: [{include: '#ContentsInd'}]
    },
    Num: {
      patterns: [
        {match: '0x[0-9A-Fa-f]++', name: 'constant.numeric.verse'},
        {
          captures: {3: {name: 'keyword.other.unit.verse'}},
          match:
            '(?!0o|0u)[0-9]++([.][0-9]++)?(e[+-]?[0-9]+)?(%|[A-Za-z_][A-Za-z0-9_]*+)?+',
          name: 'constant.numeric.verse'
        }
      ]
    },
    Parens: {begin: '[(]', end: '[)]', patterns: [{include: '#ListInd'}]},
    Path: {
      match:
        "(^|(?<=[({\\[\\-\\&;,+*/|<=>.]|->|=>|:\\)|\\Wvar|^var|\\Wref|^ref|\\Walias|^alias|\\Wlive|^live|\\Win|^in|\\Wis|^is|\\Wdo|^do|\\Wthen|^then|\\Wuntil|^until|\\Welse|^else|\\Wover|\\Wwhile|\\Wupon|\\Wnext|\\Wwhere|\\Wof|^of|\\Wat|^at|\\Wreturn|^return|\\Wyield|^yield|\\Wbreak|^break|\\Wcontinue|^continue))([\\s\\^?]*+)(?<Path>(/[A-Za-z0-9_][A-Za-z0-9_\\-.]*+(@[A-Za-z0-9_][A-Za-z0-9_\\-.]*+)?+)(/([(]\\g<Path>:[)])?+[A-Za-z_][A-Za-z0-9_]*+('((?!<#|#>|[\\\\{}\"'])[ -~])*')?+)*+)",
      name: 'constant.language.path.verse'
    },
    Special: {patterns: [{include: '#Backslash'}, {include: '#BlockCmt'}]},
    Specs: {
      match:
        '<(?![=#>])(?<Call>(?<BlockCmt><#(\\g<BlockCmt>|(?!#>).)*+#>)|[\\s\\^\\&?]|(?!(and\\W|or\\W|not\\W|where\\W|in\\W|is\\W|of\\W|at\\W))[A-Za-z_][A-Za-z0-9_]*+|[0-9/][A-Za-z0-9_.@]++|\'(\\\\.|[^\'])*+\'|"(\\\\.|[{](\\g<Call>)*+[}]|<[^#]|#[^>]|[^\\<#"{}])*+"|<\\g<Call>*+>|[\\[{(](\\g<Call>|<[^#]|[\\-\\&\\^.%+*/,;>:@=!|?])*+[\\]})])*+>',
      name: 'punctuation.definition.tag'
    },
    String: {
      begin: '"',
      beginCaptures: {0: {name: 'string.quoted.double.verse'}},
      end: '("|$)',
      endCaptures: {0: {name: 'string.quoted.double.verse'}},
      patterns: [
        {include: '#Interp'},
        {include: '#Special'},
        {
          match: "[\\-\\[\\]\\&`~!@#$%^*()+=|:;',.?/A-Za-z0-9_ ]++",
          name: 'string.quoted.double.verse'
        }
      ]
    }
  },
  scopeName: 'source.verse'
}

export default grammar
