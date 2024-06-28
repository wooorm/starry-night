// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-fontforge>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.fea'],
  names: ['opentype-feature-file', 'afdko'],
  patterns: [{include: '#main'}],
  repository: {
    blocks: {
      patterns: [
        {
          begin:
            '(?<=^|[\\s{}])(feature)\\s+(\\w+)(?:\\s+(useExtension))?\\s*({)',
          beginCaptures: {
            1: {name: 'storage.type.var.feature.opentype'},
            2: {name: 'entity.name.feature.opentype'},
            3: {name: 'keyword.operator.opentype'},
            4: {name: 'punctuation.section.bracket.curly.begin.opentype'}
          },
          end: '(})\\s*(\\2)\\s*(?=[#;]|$)',
          endCaptures: {
            1: {name: 'punctuation.section.bracket.curly.end.opentype'},
            2: {name: 'entity.name.feature.opentype'}
          },
          name: 'meta.feature.opentype',
          patterns: [
            {
              match: '(?<=^|[\\s{};])sizemenuname(?=[\\s#;]|$)',
              name: 'keyword.operator.opentype'
            },
            {include: '#main'}
          ]
        },
        {
          begin:
            '(?<=^|[\\s{}])(lookup)\\s+((?![\\d.])[A-Za-z0-9._]+)(?:\\s+(useExtension))?\\s*({)',
          beginCaptures: {
            1: {name: 'storage.type.var.lookup.opentype'},
            2: {name: 'entity.name.lookup.opentype'},
            3: {name: 'keyword.operator.opentype'},
            4: {name: 'punctuation.section.bracket.curly.begin.opentype'}
          },
          end: '(})\\s*(\\2)\\s*(?=[#;]|$)',
          endCaptures: {
            1: {name: 'punctuation.section.bracket.curly.end.opentype'},
            2: {name: 'entity.name.lookup.opentype'}
          },
          name: 'meta.lookup.opentype',
          patterns: [{include: '#main'}]
        },
        {
          begin: '(?<=^|[\\s{};])(table)\\s+([\\w/]+)\\s*({)',
          beginCaptures: {
            1: {name: 'storage.type.var.table.opentype'},
            2: {name: 'entity.name.table.opentype'},
            3: {name: 'punctuation.section.bracket.curly.begin.opentype'}
          },
          end: '(})\\s*(\\2)\\s*(?=[#;]|$)',
          endCaptures: {
            1: {name: 'punctuation.section.bracket.curly.end.opentype'},
            2: {name: 'entity.name.table.opentype'}
          },
          name: 'meta.table.opentype',
          patterns: [
            {
              match:
                '(?x) (?<=^|[\\s{};])\n(GlyphClassDef|Attach|LigatureCaretBy(?:Dev|Index|Pos)|MarkAttachClass\n|(?:Horiz|Vert)Axis\\.(?:BaseTagList|BaseScriptList|MinMax)|FontRevision\n|CaretOffset|Ascender|Descender|LineGap|Panose|TypoAscender|TypoDescender\n|TypoLineGap|winAscent|winDescent|UnicodeRange|CodePageRange|XHeight|CapHeight\n|Vendor|VertTypoAscender|VertTypoDescender|VertTypoLineGap|VertOriginY|VertAdvanceY)\n(?=[\\s#;]|$)',
              name: 'keyword.operator.table-field.opentype'
            },
            {include: '#main'}
          ]
        },
        {
          begin: '(?<=^|[\\s{};])(anonymous|anon)\\s+([\\w.]+)\\s*({)',
          beginCaptures: {
            1: {name: 'storage.type.var.opentype'},
            2: {name: 'entity.name.anon-tag.opentype'},
            3: {name: 'punctuation.section.bracket.curly.begin.opentype'}
          },
          contentName: 'string.unquoted.heredoc.opentype',
          end: '(})\\s*(\\2)\\s*(;)',
          endCaptures: {
            1: {name: 'punctuation.section.bracket.curly.end.opentype'},
            2: {name: 'entity.name.anon-tag.opentype'},
            3: {name: 'punctuation.terminator.statement.opentype'}
          }
        },
        {
          begin: '(?<=^|[\\s{}])(cvParameters)\\s*({)',
          beginCaptures: {
            1: {name: 'storage.type.var.opentype'},
            2: {name: 'punctuation.section.bracket.curly.begin.opentype'}
          },
          end: '(})',
          endCaptures: {
            1: {name: 'punctuation.section.bracket.curly.end.opentype'}
          },
          name: 'meta.cv-params.opentype',
          patterns: [
            {
              begin:
                '(?<=^|[\\s{}])(FeatUILabelNameID|FeatUITooltipTextNameID|SampleTextNameID|ParamUILabelNameID)\\s*({)',
              beginCaptures: {
                1: {name: 'keyword.operator.parameter.opentype'},
                2: {name: 'punctuation.section.bracket.curly.begin.opentype'}
              },
              end: '(})',
              endCaptures: {
                1: {name: 'punctuation.section.bracket.curly.end.opentype'}
              },
              name: 'meta.cv-param.$1.opentype',
              patterns: [{include: '#main'}]
            },
            {
              match: '(?<=\\s|^)Character(?=\\s|$|#)',
              name: 'keyword.operator.parameter.opentype'
            },
            {include: '#main'}
          ]
        },
        {
          begin: '(?<=^|[\\s{}])(featureNames)\\s*({)',
          beginCaptures: {
            1: {name: 'storage.type.var.opentype'},
            2: {name: 'punctuation.section.bracket.curly.begin.opentype'}
          },
          end: '(})',
          endCaptures: {
            1: {name: 'punctuation.section.bracket.curly.end.opentype'}
          },
          name: 'meta.$1.opentype',
          patterns: [{include: '#main'}]
        }
      ]
    },
    comments: {
      begin: '#',
      beginCaptures: {0: {name: 'punctuation.definition.comment.opentype'}},
      end: '$',
      name: 'comment.line.number-sign.opentype'
    },
    identifier: {
      captures: {
        1: {name: 'punctuation.definition.backslash.opentype'},
        2: {name: 'punctuation.definition.glyph-class.opentype'}
      },
      match: '(\\\\)?(@)?(?![\\d.])[A-Za-z0-9._]+',
      name: 'variable.parameter.opentype'
    },
    inclusion: {
      begin: '\\(',
      beginCaptures: {
        0: {name: 'punctuation.section.bracket.round.begin.opentype'}
      },
      contentName: 'string.other.filename.opentype',
      end: '\\)',
      endCaptures: {
        0: {name: 'punctuation.section.bracket.round.end.opentype'}
      },
      patterns: [{include: '#strings'}]
    },
    keywords: {
      patterns: [
        {
          match: '(?<=^|[\\s{};])(excludeDFLT|includeDFLT)(?=$|[\\s{}#;])',
          name: 'invalid.deprecated.keyword.opentype'
        },
        {
          match: '(?<=^|[\\s{};])NULL(?=[\\s{}#;]|$)',
          name: 'constant.language.null.opentype'
        },
        {
          match: '(?<=^|[\\s{};])name(?=[\\s{}#;]|$)',
          name: 'storage.type.var.name.opentype'
        },
        {
          match: '(?<![\\w.])\\.notdef(?![\\w.])',
          name: 'support.constant.language.opentype'
        },
        {
          match: '(?<=^|[\\s{};])ignore(?=$|[\\s{}\\#;])',
          name: 'storage.modifier.ignore.opentype'
        },
        {
          match:
            '(?x) (?<=^|[\\s{};])\n(anchor|anchorDef|by|contour|cursive|device|enumerate|enum|exclude_dflt|feature|from\n|IgnoreBaseGlyphs|IgnoreLigatures|IgnoreMarks|MarkAttachmentType|UseMarkFilteringSet\n|include|include_dflt|language|languagesystem|lookupflag|mark|markClass|nameid|parameters\n|position|pos|required|RightToLeft|reversesub|rsub|script|substitute|sub|subtable|table\n|useExtension|valueRecordDef|FSType|WeightClass|WidthClass)\n(?=$|[\\s{}\\#(;])',
          name: 'keyword.operator.opentype'
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comments'},
        {include: '#target'},
        {include: '#blocks'},
        {include: '#keywords'},
        {include: '#tags'},
        {include: '#inclusion'},
        {include: '#strings'},
        {include: '#number'},
        {include: '#punctuation'},
        {include: '#identifier'}
      ]
    },
    number: {
      patterns: [
        {
          match: '(?<!\\w)[-+]?0x[A-Fa-f0-9]+',
          name: 'constant.numeric.integer.hex.opentype'
        },
        {match: '(?<!\\w)[-+]?\\d+', name: 'constant.numeric.integer.opentype'}
      ]
    },
    punctuation: {
      patterns: [
        {match: '=', name: 'keyword.operator.assignment.opentype'},
        {match: ';', name: 'punctuation.terminator.statement.opentype'},
        {match: ',', name: 'punctuation.separator.list.comma.opentype'},
        {match: '-', name: 'punctuation.separator.range.dash.opentype'},
        {match: "'", name: 'punctuation.definition.context-mark.opentype'},
        {match: '{', name: 'punctuation.section.bracket.curly.begin.opentype'},
        {match: '}', name: 'punctuation.section.bracket.curly.end.opentype'},
        {match: '<', name: 'punctuation.section.bracket.angle.begin.opentype'},
        {match: '>', name: 'punctuation.section.bracket.angle.end.opentype'},
        {
          match: '\\[',
          name: 'punctuation.section.bracket.square.begin.opentype'
        },
        {match: '\\]', name: 'punctuation.section.bracket.square.end.opentype'},
        {
          match: '\\(',
          name: 'punctuation.section.bracket.round.begin.opentype'
        },
        {match: '\\)', name: 'punctuation.section.bracket.round.end.opentype'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.opentype'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.opentype'}
          },
          name: 'string.quoted.double.opentype',
          patterns: [
            {
              match: '\\\\[A-Fa-f0-9]{1,4}',
              name: 'constant.character.escape.codepoint.opentype'
            }
          ]
        }
      ]
    },
    tags: {
      patterns: [
        {
          match:
            '(?x) (?<=^|[\\s{};])\n(aalt|abvf|abvm|abvs|afrc|akhn|blwf|blwm|blws|calt|case|ccmp|cfar|cjct|clig|cpct|cpsp\n|cswh|curs|cv[0-9]{2}|c2pc|c2sc|dist|dlig|dnom|dtls|expt|falt|fin2|fin3|fina|flac|frac\n|fwid|half|haln|halt|hist|hkna|hlig|hngl|hojo|hwid|init|isol|ital|jalt|jp78|jp83|jp90\n|jp04|kern|lfbd|liga|ljmo|lnum|locl|ltra|ltrm|mark|med2|medi|mgrk|mkmk|mset|nalt|nlck\n|nukt|numr|onum|opbd|ordn|ornm|palt|pcap|pkna|pnum|pref|pres|pstf|psts|pwid|qwid|rand\n|rclt|rkrf|rlig|rphf|rtbd|rtla|rtlm|ruby|rvrn|salt|sinf|size|smcp|smpl|ss[0-9]{2}|ssty\n|stch|subs|sups|swsh|titl|tjmo|tnam|tnum|trad|twid|unic|valt|vatu|vert|vhal|vjmo|vkna\n|vkrn|vpal|vrt2|vrtr|zero)\n(?=[\\s#;]|$)',
          name: 'support.constant.language.tag.feature.opentype'
        },
        {
          match:
            '(?x) (?<=^|[\\s{};])\n(arab|armn|avst|bali|bamu|batk|beng|bng2|bopo|brah|brai|bugi|buhd|byzm|cans|cari|cakm\n|cham|cher|hani|copt|cprt|cyrl|DFLT|dsrt|deva|dev2|egyp|ethi|geor|glag|goth|grek|gujr\n|gjr2|guru|gur2|hang|jamo|hano|hebr|kana|armi|phli|prti|java|kthi|knda|knd2|kana|kali\n|khar|khmr|lao|latn|lepc|limb|linb|lisu|lyci|lydi|mlym|mlm2|mand|math|mtei|merc|mero\n|plrd|mong|musc|mymr|mym2|talu|nko|ogam|olck|ital|xpeo|sarb|orkh|orya|ory2|osma|phag\n|phnx|rjng|runr|samr|saur|shrd|shaw|sinh|sora|xsux|sund|sylo|syrc|tglg|tagb|tale|lana\n|tavt|takr|taml|tml2|telu|tel2|thaa|thai|tibt|tfng|ugar|vai|yi)\n(?=[\\s#;]|$)',
          name: 'support.constant.language.tag.script.opentype'
        },
        {
          match:
            '(?x) (?<=^|[\\s{};])\n(ARA|APPH|ANG|AMH|ALT|ALS|AKA|AIO|AGW|AFR|AFK|ADY|ACR|ACH|ABK|ABA|BGQ|BGC|BEN|BEM|BEL\n|BDY|BCR|BCH|BBR|BBC|BAU|BAR|BAN|BAL|BAG|BAD0|BAD|AZE|AZB|AYM|AWA|AVR|ATH|AST|ASM|ARK\n|ARI|ARG|CHE|CEB|CBK|CAT|CAK|BUG|BTS|BTI|BSH|BRX|BRM|BRI|BRH|BRE|BPY|BOS|BML|BMB|BLT\n|BLN|BLK|BLI|BKF|BJJ|BIS|BIL|BIK|BHO|BHI|BGR|DEU|DCR|DAX|DAR|DAN|CUK|CTG|CSY|CSL|CSB\n|CRT|CRR|CRE|CPP|COS|COR|COP|CMR|CGG|CHY|CHU|CHA|CHR|CHP|CHO|CHK0|CHK|CHI|CHH|CHG|EWE\n|EVN|EVK|EUQ|ETI|ESU|ESP|ERZ|ENG|EMK|ELL|EFI|EDO|ECR|EBI|DZN|DUN|DUJ|DRI|DNK|DNJ|DNG\n|DJR0|DJR|DIV|DIQ|DHV|DHG|DGR|DGO|GLK|GKP|GIL0|GIL|GIH|GEZ|GAW|GAR|GAL|GAG|GAE|GAD|FUV\n|FUL|FTA|FRP|FRL|FRI|FRC|FRA|FOS|FON|FNE|FLE|FJI|FIN|FAT|FAR|FAN0|FAN|HUN|HRV|HRI|HO\n|HND|HMO|HMN|HMA|HIN|HIL|HER|HBN|HAZ|HAY|HAW|HAU|HAR|HAL|HAI|GUZ|GUJ|GUF|GUC|GUA|GRO\n|GRN|GON|GOG|GNN|GMZ|KAB0|KAB|JUL|JUD|JBO|JAN|JAM|JII|JAV|IWR|ITA|ISM|ISL|IRT|IRI|IPPH\n|IPK|INU|ING|IND|INA|ILO|ILE|IDO|IJO|IBO|IBB|IBA|HYE0|HYE|KMS|KMO|KMN|KMB|KLM|KKN|KJP\n|KJD|KIU|KIS|KIR|KIK|KHW|KHV|KHT|KHS|KHM|KHK|KHA|KGE|KEK|KEB|KEA|KDE|KAZ|KAT|KAR|KAN\n|KAL|KAC|KUY|KUU|KUR|KUM|KUL|KUI|KUA|KSW|KSM|KSI|KSH0|KSH|KRT|KRN|KRM|KRL|KRK|KRI|KPL\n|KOZ|KOS|KOR|KOP|KOM|KON0|KON|KOK|KOH|KOD|KNR|LUB|LUA|LTZ|LTH|LSM|LSB|LRC|LOM|LMW|LMO\n|LMB|LMA|LKI|LJP|LIS|LIN|LIM|LIJ|LEZ|LDK|LCR|LAZ|LAT|LAO|LAM|LAK|LAH|LAD|KYU|KYK|MLG\n|MLE|MKW|MKR|MKD|MIZ|MIN|MFE|MER|MEN|MDR|MDE|MCR|MCH|MBN|MAW|MAR|MAP|MAN|MAM|MAL|MAK\n|MAJ|MAH|MAG|MAD|LVI|LUO|LUH|LUG|NAV|NAU|NAS|NAP|NAN|NAH|NAG|MZN|MYN|MWW|MWL|MUS|MUN\n|MTS|MTH|MRI|MOS|MOR|MON|MOL|MOK|MOH|MNX|MNK|MNI|MNG|MND|MLY|MLR|MLN|ORO|ORI|OJB|OCR\n|OCI|NYN|NYM|NTO|NTA|NSO|NSM|NOV|NOR|NOG|NOE|NLD|NKO|NKL|NIU|NIS|NHC|NGR|NGA|NEW|NEP\n|NDS|NDG|NDC|NDB|NCR|QUH|QUC|QIN|PWO|PTG|PRO|PON|POH|PNB|PMS|PLK|PLG|PIL|PIH|PHK|PGR\n|PDC|PCD|PCC|PAU|PAS|PAP0|PAP|PAN|PAM|PAL|PAG|PAA|OSS|SEK|SCO|SCN|SAY|SAT|SAS|SAN|SAD\n|RUS|RUP|RUN|RUA|RTM|RSY|ROY|ROM|RMY|RMS|RKW|RIT|RIF|RIA|REJ|RBU|RCR|RAR|RAJ|QWH|QVI\n|QUZ|SSM|SSL|SRR|SRK|SRD|SRB|SQI|SOT|SOP|SOG|SNK|SNH|SND|SNA0|SNA|SMO|SML|SLV|SLA|SKY\n|SKS|SIG|SID|SIB|SHN|SHI|SGS|SGO|SGA|SEL|TIV|TIB|THT|THA|TGY|TGR|TGN|TGL|TET|TEL|TDD\n|TCR|TAT|TAM|TAJ|TAB|SZL|SYR|SYL|SXU|SXT|SWZ|SWK|SWA|SVE|SVA|SUR|SUN|SUK|STQ|VIT|VEN\n|VEC|UZB|UYG|USB|URD|UMB|UKR|UDM|TZO|TZM|TYZ|TWI|TVL|TUV|TUM|TUL|TUA|TSG|TRK|TPI|TOD0\n|TOD|TNG|TNE|TNA|TMN|TMH|TKM|ZUL|ZZA|dflt)\n(?=[\\s#;]|$)',
          name: 'support.constant.language.tag.opentype'
        },
        {
          match:
            '(?<=^|[\\s{};])(hang|icfb|icft|ideo|idtp|math|romn)(?=[\\s#;]|$)',
          name: 'support.constant.language.tag.baseline.opentype'
        }
      ]
    },
    target: {
      captures: {
        1: {name: 'punctuation.definition.backslash.opentype'},
        2: {name: 'punctuation.definition.context-mark.opentype'},
        3: {name: 'punctuation.definition.glyph-class.opentype'}
      },
      match: "(\\\\)?(@)?(?![\\d.])[A-Za-z0-9._]+(')",
      name: 'entity.name.subject.opentype'
    }
  },
  scopeName: 'source.opentype'
}

export default grammar
