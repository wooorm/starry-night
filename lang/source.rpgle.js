// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/barrettotte/vscode-ibmi-languages>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.sql'],
  extensions: ['.rpgle', '.sqlrpgle'],
  names: ['rpgle', 'ile-rpg', 'sqlrpgle'],
  patterns: [
    {
      begin: '(?i)(?=(\\s*\\*\\*(FREE)))',
      end: '(E-\\*-O-\\*-F)',
      name: 'rpgle.free.allfree',
      patterns: [
        {
          match: '(?i)^\\s*\\*\\*FREE',
          name: 'keyword.other.rpgle.free.precompiler.allfree'
        },
        {include: '#freeSQL'},
        {include: '#rpglecommon'},
        {include: '#freeformat'}
      ]
    },
    {begin: '(?i)^.{5}.[*]', end: '\n', name: 'comment.line.rpgle.fixed'},
    {include: '#tempfreeformat'},
    {include: '#fixedSQL'},
    {include: '#freeSQL'},
    {include: '#precompiler'},
    {include: '#ctarrays'},
    {include: '#fixedcomment'},
    {include: '#rpglecommon'},
    {include: '#fixedformat'},
    {include: '#freeformat'}
  ],
  repository: {
    comments: {patterns: [{match: '(//).*', name: 'comment.line.rpgle.free'}]},
    constants: {
      patterns: [
        {
          match: '(?i)[*]\\b(IN)([0-9]{0,2})\\b',
          name: 'constant.language.rpgle.indicator'
        },
        {match: '[*][a-zA-Z][a-zA-Z0-9]*', name: 'constant.language.rpgle'},
        {match: '\\b\\d+\\.?\\d*?\\b', name: 'constant.numeric.rpgle'}
      ]
    },
    ctarrays: {
      patterns: [
        {
          begin: '(?=^(\\*{2})(?!free))',
          end: '(E-\\*-O-\\*-F)',
          patterns: [{begin: '(\\*{2})', name: 'string.other.rpgle.ctarray'}]
        }
      ]
    },
    fixedSQL: {
      patterns: [
        {
          begin: '(?i)(?=(^.{5}(C)(\\/EXEC)\\s+(SQL)\\b))',
          end: '(?i)(?=(^.{5}(C)(\\/END\\-EXEC)\\b))',
          patterns: [
            {
              match: '(?i)(C)(\\/EXEC)\\s+(sql)\\b',
              name: 'keyword.other.rpgle.sql'
            },
            {include: '#fixedcomment'},
            {
              match: '(?i)(C[\\+|\\/])',
              name: 'keyword.other.rpgle.fixed.specs'
            },
            {include: '#sqlcommon'}
          ]
        },
        {match: '(?i)(\\/END\\-EXEC)', name: 'keyword.other.rpgle.sql'}
      ]
    },
    fixedcomment: {
      patterns: [
        {begin: '(?i)^.{5}.[*]', end: '\n', name: 'comment.line.rpgle.fixed'},
        {match: '^.{5}', name: 'comment.gutter'},
        {
          begin: '(?i)(?<=((?<=^.{5}((H|F|D|I|C|O|P))).{74}))',
          end: '\n',
          name: 'comment.block.line.rpgle.fixed'
        }
      ]
    },
    fixedformat: {
      patterns: [
        {include: '#fixedcomment'},
        {
          match: '(?i)(?<=^.{5})[H|F|D|I|C|O|P]',
          name: 'keyword.other.rpgle.fixed.specs'
        },
        {
          begin: '(?i)(?<=^.{5}H)',
          end: '(?<=\\n)',
          name: 'rpgle.fixed.h',
          patterns: [
            {include: '#fixedcomment'},
            {
              match:
                '\\b(?i)(VALIDATE|USRPRF|TIMFMT|THREAD|TEXT|SRTSEQ|PRFDTA|OPTION|OPTIMIZE|OPENOPT|NOMAIN|MAIN|LANGID|INTPREC|INDENT|GENLVL|FTRANS|FORMSALIGN|FLTDIV|FIXNBR|EXTBININT|EXPROPTS|ENBPFRCOL|DFTNAME|DFTACTGRP|DECEDIT|DEBUG|DATFMT|DATEDIT|CVTOPT|DCLOPT|CURSYM|COPYRIGHT|CCSIDCVT|CCSID|COPYNEST|BNDDIR|AUT|ALWNULL|ALTSEQ|ALLOC|ACTGRP)\\b',
              name: 'entity.name.function.rpgle.fixed.h.keywords'
            },
            {include: '#rpglecommon'}
          ]
        },
        {
          begin: '(?i)(?<=^.{5}F)',
          end: '(?<=\\n)',
          name: 'rpgle.fixed.f',
          patterns: [
            {include: '#fixedcomment'},
            {
              match: '(?i)(?=(?<=((?<=^.{5}F).{10})))(I|O|U|C)',
              name: 'constant.language.rpgle.fixed.f.type'
            },
            {
              match: '(?i)(?=(?<=((?<=^.{5}F).{11})).{3})(P|S|R|T|F)',
              name: 'constant.language.rpgle.fixed.f.designation'
            },
            {
              match: '(?i)(?=(?<=((?<=^.{5}F).{12})).{2})E',
              name: 'constant.language.rpgle.fixed.f.eof'
            },
            {
              match: '(?i)(?=(?<=((?<=^.{5}F).{13})).{2})A',
              name: 'constant.language.rpgle.fixed.f.addition'
            },
            {
              match: '(?i)(?=(?<=((?<=^.{5}F).{14})).{2})(A|D)',
              name: 'constant.language.rpgle.fixed.f.sequence'
            },
            {
              match: '(?i)(?=(?<=((?<=^.{5}F).{15})).{2})(E|F)',
              name: 'constant.language.rpgle.fixed.f.format'
            },
            {
              match: '(?i)(?<=(?<=(?<=^.{5}F).{10}).{5}F)([0-9]|\\s){5}',
              name: 'constant.language.rpgle.fixed.fi.recordlen'
            },
            {
              match: '(?i)(?<=(?<=(?<=^.{5}F).{10}).{5}(F|E).{5})L',
              name: 'constant.language.rpgle.fixed.f.limitproc'
            },
            {
              match: '(?i)(?<=(?<=(?<=^.{5}F).{10}).{5}(F).{6})([0-9]|\\s){5}',
              name: 'constant.language.rpgle.fixed.fi.keyfieldlen'
            },
            {
              match:
                '(?i)(?<=(?<=(?<=^.{5}F).{10}).{5}(F|E).{11})(A|D|F|G|K|P|T|Z)',
              name: 'constant.language.rpgle.fixed.f.addrtype'
            },
            {
              match: '(?i)(?<=(?<=(?<=^.{5}F).{10}).{5}F.{12})(?i)(I|T)',
              name: 'constant.language.rpgle.fixed.fi.fileorg'
            },
            {
              match:
                '(?i)(?<=(?<=(?<=^.{5}F).{10}).{5}(F|E).{13})(PRINTER|DISK|WORKSTN|SPECIAL|SEQ)',
              name: 'constant.language.rpgle.fixed.f.device'
            },
            {
              match:
                '\\b(?i)(WORKSTN|USROPN|USAGE|TIMFMT|TEMPLATE|STATIC|SPECIAL|SLN|SFILE|SEQ|SAVEIND|SAVEDS|RENAME|RECNO|RAFDATA|QUALIFIED|PRTCTL|PRINTER|PREFIX|PLIST|PGMNAME|PASS|OFLIND|MAXDEV|LIKEFILE|KEYLOC|KEYED|INFSR|INFDS|INDDS|INCLUDE|IGNORE|HANDLER|FORMOFL|FORMLEN|EXTMBR|EXTIND|EXTFILE|EXTDESC|DISK|DEVID|DATFMT|DATA|COMMIT|CHARCOUNT|BLOCK|ALIAS)\\b',
              name: 'entity.name.function.rpgle.fixed.f'
            },
            {include: '#rpglecommon'}
          ]
        },
        {
          begin: '(?i)(?<=^.{5}D)',
          end: '(?<=\\n)',
          name: 'rpgle.fixed.d',
          patterns: [
            {include: '#fixedcomment'},
            {
              begin: "'",
              end: "'",
              name: 'string.quoted.single.rpgle.fixed',
              patterns: [
                {
                  match: '(?i)(?<=^.{5})[H|F|D|I|C|O|P]',
                  name: 'keyword.other.rpgle.fixed.specs'
                }
              ]
            },
            {
              match: '(?i)(?<=^.{5}D).[a-zA-Z_][a-zA-Z0-9_]{1,71}[.]{3}',
              name: 'variable.other.rpgle.fixed.d.extended.name'
            },
            {
              match: '(?i)(?<=((?<=^.{5}D).{15}))E',
              name: 'constant.language.rpgle.fixed.d.external'
            },
            {
              match: '(?i)(?<=((?<=^.{5}D).{16}))(S|U)',
              name: 'constant.language.rpgle.fixed.d.dstype'
            },
            {
              match: '(?i)(?<=((?<=^.{5}D).{17}))(DS|PI|PR|(S\\s)|(C\\s))',
              name: 'constant.language.rpgle.fixed.d.dectype'
            },
            {
              match: '(?i)(?<=((?<=^.{5}D).{21}))([0-9]|\\s){5}',
              name: 'constant.language.rpgle.fixed.d.from'
            },
            {
              match:
                '(?i)(?<=((?<=^.{5}D).{26}))((\\+|\\-|\\s)(([0-9]|\\s){6}))',
              name: 'constant.language.rpgle.fixed.d.to'
            },
            {
              match: '(?i)(?<=((?<=^.{5}D).{33}))(A|B|D|F|G|I|N|P|S|T|U|Z|\\*)',
              name: 'constant.language.rpgle.fixed.d.datatype'
            },
            {
              match: '(?i)(?<=((?<=^.{5}D).{34}))([0-9]|\\s){2}',
              name: 'constant.language.rpgle.fixed.d.decpos'
            },
            {
              match:
                '\\b(?i)(ZONED|VARYING|VARUCS2|VARGRAPH|VARCHAR|VALUE|UNS|UCS2|TOFILE|TIMFMT|TIMESTAMP|TIME|TEMPLATE|STATIC|RTNPARM|QUALIFIED|PSDS|PROCPTR|PREFIX|POS|POINTER|PERRCD|PACKEVEN|PACKED|OVERLAY|OPTIONS|OPDESC|OCCURS|OBJECT|NOOPT|LIKEREC|LIKEFILE|LIKEDS|LIKE|LEN|INZ|IND|INT|IMPORT|GRAPH|FROMFILE|FLOAT|EXTPROC|EXTPGM|EXTNAME|EXTFMT|EXTFLD|EXT|EXPORT|DTAARA|DIM|DESCEND|DATFMT|DATE|CTDATA|CONST|CLASS|CHAR|CCSID|BINDEC|BASED|ASCEND|ALTSEQ|ALT|ALIGN|ALIAS)\\b',
              name: 'entity.name.function.rpgle.fixed.d.keywords'
            },
            {include: '#rpglecommon'}
          ]
        },
        {
          begin: '(?i)(?<=^.{5}I)',
          end: '(?<=\\n)',
          name: 'rpgle.fixed.i',
          patterns: [
            {include: '#fixedcomment'},
            {
              match: '(?i)(?<=((?<=^.{5}I).{10}))[A-Za-z0-9]{2}',
              name: 'constant.language.rpgle.fixed.i.seq'
            },
            {
              match: '(?i)(?<=((?<=^.{5}I).{12}))N',
              name: 'constant.language.rpgle.fixed.i.number'
            },
            {
              match: '(?i)(?<=((?<=^.{5}I).{13}))O',
              name: 'constant.language.rpgle.fixed.i.option'
            },
            {
              match:
                '(?i)(?<=((?<=^.{5}I).{14}))(([0-9]{2})|((H|L)([1-9]))|(RT)|((U)([1-8]))|(\\*\\*))',
              name: 'constant.language.rpgle.fixed.i.recordid'
            },
            {
              match: '(?i)(?<=((?<=^.{5}I).{16}))([0-9]|\\s){5}',
              name: 'constant.language.rpgle.fixed.i.pos1'
            },
            {
              match: '(?i)(?<=((?<=^.{5}I).{21}))N',
              name: 'constant.language.rpgle.fixed.i.not1'
            },
            {
              match: '(?i)(?<=((?<=^.{5}I).{22}))(C|Z|D)',
              name: 'constant.language.rpgle.fixed.i.czd1'
            },
            {
              match: '(?i)(?<=((?<=^.{5}I).{23}))([A-Z0-9])',
              name: 'constant.language.rpgle.fixed.i.char1'
            },
            {
              match: '(?i)(?<=((?<=^.{5}I).{24}))([0-9]|\\s){5}',
              name: 'constant.language.rpgle.fixed.i.pos2'
            },
            {
              match: '(?i)(?<=((?<=^.{5}I).{29}))N',
              name: 'constant.language.rpgle.fixed.i.not2'
            },
            {
              match: '(?i)(?<=((?<=^.{5}I).{30}))(C|Z|D)',
              name: 'constant.language.rpgle.fixed.i.czd2'
            },
            {
              match: '(?i)(?<=((?<=^.{5}I).{31}))([A-Z0-9])',
              name: 'constant.language.rpgle.fixed.i.char2'
            },
            {
              match: '(?i)(?<=((?<=^.{5}I).{32}))([0-9]|\\s){5}',
              name: 'constant.language.rpgle.fixed.i.pos3'
            },
            {
              match: '(?i)(?<=((?<=^.{5}I).{37}))N',
              name: 'constant.language.rpgle.fixed.i.not3'
            },
            {
              match: '(?i)(?<=((?<=^.{5}I).{38}))(C|Z|D)',
              name: 'constant.language.rpgle.fixed.i.czd3'
            },
            {
              match: '(?i)(?<=((?<=^.{5}I).{39}))([A-Z0-9])',
              name: 'constant.language.rpgle.fixed.i.char3'
            },
            {include: '#rpglecommon'}
          ]
        },
        {
          begin: '(?i)(?<=^.{5}C)',
          end: '(?<=\\n)',
          name: 'rpgle.fixed.c',
          patterns: [
            {include: '#fixedcomment'},
            {
              match: '(?i)(?<=((?<=^.{5}C).{0}))((L[0-9])|LR|SR|AN)',
              name: 'constant.language.rpgle.fixed.c.ctrl'
            },
            {
              match:
                '(?i)(?<=((?<=^.{5}C).{2}))((N|\\s)(([0-9]{2})|(K[A-N])|(K[P-Y])|((H|L)[1-9])|LR|MR|RT|(U[1-8])|(O[A-G])|OV))',
              name: 'constant.language.rpgle.fixed.c.n01'
            },
            {
              begin:
                '(?i)(?<=((?<=^.{5}C).{19}))((\\s{10})|CALLP|WHEN\\s{2}|RETURN|ON-ERROR|IF\\s{2}|FOR|EVALR|EVAL|ELSEIF|DOW\\s{2}|DOU\\s{2})',
              end: '(?<=\\n)',
              name: 'keyword.other.rpgle.fixed.c.extfactor2',
              patterns: [
                {include: '#fixedcomment'},
                {include: '#rpglecommon'},
                {
                  match:
                    '((?i)(AND|COMP|CAB|CAS|DOU|DOW|FOR|IF|OR|WHEN)(GT|LT|EQ|NE|GE|LE|(\\s{2})))',
                  name: 'keyword.other.rpgle'
                },
                {
                  match:
                    '((?i)[a-zA-Z_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ][a-zA-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ]*)|\\(|\\)|\\%',
                  name: 'variable.other'
                }
              ]
            },
            {include: '#rpglecommon'},
            {
              match:
                '((?i)\\b(AND|COMP|CAB|CAS|DOU|DOW|IF|OR|WHEN)(GT|LT|EQ|NE|GE|LE|(\\s{2})))',
              name: 'keyword.other.rpgle'
            },
            {
              match:
                '(?i)(?<=((?<=^.{5}C).{19}))(Z\\-SUB|Z\\-ADD|XML\\-SAX|XML\\-INTO|XLATE|XFOOT|WRITE|WHEN|UPDATE|UNLOCK|TIME|TESTZ|TESTN|TESTB|TEST|TAG|SUBST|SUBDUR|SUB|SQRT|SORTA|SHTDN|SETON|SETOFF|SETLL|SETGT|SELECT|SCAN|ROLBK|RETURN|RESET|REL|REALLOC|READPE|READP|READE|READC|READ|POST|PLIST|PARM|OUT|OTHER|OR|OPEN|ON\\-EXIT|ON\\-ERROR|OCCUR|NEXT|MVR|MULT|MOVEL|MOVEA|MOVE|MONITOR|MLLZO|MLHZO|MHLZO|MHHZO|LOOKUP|LEAVESR|LEAVE|KLIST|KFLD|ITER|IN|IF|GOTO|FORCE|FOR|FEOD|EXTRCT|EXSR|EXFMT|EXCEPT|EVAL-CORR|EVALR|EVAL|ENDFOR|ENDSR|ENDIF|ENDDO|ENDCS|ENDWH|ENDSL|END|ELSEIF|ELSE|DUMP|DSPLY|DOW|DOU|DO|DIV|DELETE|DEFINE|DEALLOC|DATA-INTO|DATA-GEN|COMP|COMMIT|CLOSE|CLEAR|CHECKR|CHECK|CHAIN|CAT|CAS|CALLP|CALLB|CALL|CAB|BITON|BITOFF|BEGSR|AND|ALLOC|ADDUR|ADD|ACQ)',
              name: 'keyword.other.rpgle.fixed.c.operation'
            },
            {
              match: '(?i)(?<=((?<=^.{5}C).{57}))([0-9]|\\s){5}',
              name: 'constant.language.rpgle.fixed.c.len'
            },
            {
              match: '(?i)(?<=((?<=^.{5}C).{62}))([0-9]|\\s){2}',
              name: 'constant.language.rpgle.fixed.c.decpos'
            },
            {
              match:
                '(?i)(?<=((?<=^.{5}C).{64}))(([0-9]{2})|(K[A-N])|(K[P-Y])|((H|L)[1-9])|LR|MR|(U[1-8])|(O[A-G])|OV)',
              name: 'constant.language.rpgle.fixed.c.hi'
            },
            {
              match:
                '(?i)(?<=((?<=^.{5}C).{66}))(([0-9]{2})|(K[A-N])|(K[P-Y])|((H|L)[1-9])|LR|MR|(U[1-8])|(O[A-G])|OV)',
              name: 'constant.language.rpgle.fixed.c.lo'
            },
            {
              match:
                '(?i)(?<=((?<=^.{5}C).{68}))(([0-9]{2})|(K[A-N])|(K[P-Y])|((H|L)[1-9])|LR|MR|(U[1-8])|(O[A-G])|OV)',
              name: 'constant.language.rpgle.fixed.c.eq'
            }
          ]
        },
        {
          begin: '(?i)(?<=^.{5}O)',
          end: '(?<=\\n)',
          name: 'rpgle.fixed.o',
          patterns: [
            {include: '#fixedcomment'},
            {
              match: '(?i)(?<=((?<=^.{5}O).{10}))(H|D|T|E)',
              name: 'constant.language.rpgle.fixed.o.type'
            },
            {
              match: '(?i)(?<=((?<=^.{5}O).{11}))(F|R)',
              name: 'constant.language.rpgle.fixed.o.fetch'
            },
            {
              match:
                '(?i)(?<=((?<=^.{5}O).{14}))((N|\\s)(([0-9]{2})|(K[A-N])|(K[P-Y])|((H|L)[1-9])|LR|MR|RT|1P|(U[1-8])|(O[A-G])|OV))',
              name: 'constant.language.rpgle.fixed.o.n01'
            },
            {
              match:
                '(?i)(?<=((?<=^.{5}O).{17}))((N|\\s)(([0-9]{2})|(K[A-N])|(K[P-Y])|((H|L)[1-9])|LR|MR|RT|1P|(U[1-8])|(O[A-G])|OV))',
              name: 'constant.language.rpgle.fixed.o.n02'
            },
            {
              match:
                '(?i)(?<=((?<=^.{5}O).{20}))((N|\\s)(([0-9]{2})|(K[A-N])|(K[P-Y])|((H|L)[1-9])|LR|MR|RT|1P|(U[1-8])|(O[A-G])|OV))',
              name: 'constant.language.rpgle.fixed.o.n03'
            },
            {
              match: '(?i)(?<=((?<=^.{5}O).{33}))([0-9]|\\s){3}',
              name: 'constant.language.rpgle.fixed.o.spacebefore'
            },
            {
              match: '(?i)(?<=((?<=^.{5}O).{36}))([0-9]|\\s){3}',
              name: 'constant.language.rpgle.fixed.o.spaceafter'
            },
            {
              match: '(?i)(?<=((?<=^.{5}O).{39}))([0-9]|\\s){3}',
              name: 'constant.language.rpgle.fixed.o.skipbefore'
            },
            {
              match: '(?i)(?<=((?<=^.{5}O).{42}))([0-9]|\\s){3}',
              name: 'constant.language.rpgle.fixed.o.skipafter'
            },
            {include: '#rpglecommon'}
          ]
        },
        {
          begin: '(?i)(?<=^.{5}P)',
          end: '(?<=\\n)',
          name: 'rpgle.fixed.p',
          patterns: [
            {include: '#fixedcomment'},
            {
              match: '(?i)(?<=((?<=^.{5}P).{17}))(B|E)',
              name: 'constant.language.rpgle.fixed.p.beginend'
            },
            {
              match:
                '(?i)(?<=((?<=^.{5}P).{37}))(SERIALIZE|REQPROTO|PGMINFO|EXPORT)',
              name: 'entity.name.function.rpgle.fixed.p.keywords'
            },
            {include: '#rpglecommon'}
          ]
        }
      ]
    },
    freeSQL: {
      patterns: [
        {
          begin: '(?i)(?=(^\\s*(EXEC)\\s+(SQL)\\b))',
          end: '(?=(;))',
          patterns: [
            {match: '(?i)(EXEC)\\s+(SQL)\\b', name: 'keyword.other.rpgle.sql'},
            {include: '#sqlcommon'}
          ]
        },
        {match: '(?<=(;))\\s*.*', name: 'comment.line.rpgle.sql'},
        {match: ';', name: 'rpgle.free.sql.end'}
      ]
    },
    freedefkeywords: {
      patterns: [
        {
          match:
            '(?i)\\b(ZONED|VARYING|VARUCS2|VARGRAPH|VARCHAR|VALUE|UNS|UCS2|TOFILE|TIMFMT|TIMESTAMP|TIME|TEMPLATE|STATIC|SQLTYPE|SAMEPOS|RTNPARM|REQPROTO|QUALIFIED|PSDS|PROCPTR|PREFIX|POS|POINTER|PGMINFO|PERRCD|PACKEVEN|PACKED|OVERLOAD|OVERLAY|OPTIONS|OPDESC|OCCURS|OBJECT|NULLIND|NOOPT|LIKEREC|LIKEFILE|LIKEDS|LIKE|LEN|INZ|IND|INT|IMPORT|GRAPH|FROMFILE|FLOAT|EXTPROC|EXTPGM|EXTNAME|EXTFMT|EXTFLD|EXT|EXPORT|DTAARA|DIM|DESCEND|DATFMT|DATE|CTDATA|CONST|CLASS|CHAR|CCSID|BINDEC|BASED|ASCEND|ALTSEQ|ALT|ALIGN|ALIAS)\\b',
          name: 'entity.name.function.rpgle.free.definition.keywords'
        }
      ]
    },
    freeformat: {
      patterns: [
        {
          begin: '(?i)\\b(?=CTL\\-OPT)\\b',
          end: ';',
          name: 'rpgle.free.control',
          patterns: [
            {include: '#rpglecommon'},
            {
              match: '(?i)\\b(CTL\\-OPT)\\b',
              name: 'storage.type.rpgle.free.control'
            },
            {
              match:
                '(?i)\\b(VALIDATE|USRPRF|TRUNCNBR|TIMFMT|THREAD|TEXT|STGMDL|SRTSEQ|REQPREXP|PRFDTA|PGMINFO|OPTION|OPTIMIZE|OPENOPT|NOMAIN|MAIN|LANGID|INTPREC|INDENT|GENLVL|FTRANS|FORMSALIGN|FLTDIV|FIXNBR|EXTBININT|EXPROPTS|ENBPFRCOL|DFTNAME|DFTACTGRP|DECPREC|DECEDIT|DEBUG|DATFMT|DATEDIT|DCLOPT|CVTOPT|CURSYM|COPYRIGHT|COPYNEST|CHARCOUNTTYPES|CHARCOUNT|CCSIDCVT|CCSID|BNDDIR|AUT|ALWNULL|ALTSEQ|ACTGRP|ALLOC)\\b',
              name: 'entity.name.function.rpgle.free.control.keywords'
            }
          ]
        },
        {
          begin: '(?i)\\b(?=DCL\\-F)\\b',
          end: ';',
          name: 'rpgle.free.file',
          patterns: [
            {include: '#rpglecommon'},
            {
              match: '(?i)\\b(DCL\\-F)\\b',
              name: 'storage.type.rpgle.free.file'
            },
            {
              match:
                '(?i)\\b(WORKSTN|USROPN|USAGE|TIMFMT|TEMPLATE|STATIC|SPECIAL|SLN|SFILE|SEQ|SAVEIND|SAVEDS|RENAME|RECNO|RAFDATA|QUALIFIED|PRTCTL|PRINTER|PREFIX|PLIST|PGMNAME|PASS|OFLIND|MAXDEV|LIKEFILE|KEYLOC|KEYED|INFSR|INFDS|INDDS|INCLUDE|IGNORE|HANDLER|FORMOFL|FORMLEN|EXTMBR|EXTIND|EXTFILE|EXTDESC|DISK|DEVID|DATFMT|DATA|COMMIT|CHARCOUNT|BLOCK|ALIAS)\\b',
              name: 'entity.name.function.rpgle.free.file.keywords'
            }
          ]
        },
        {
          match: '(?i)\\b(BEG|END)SR\\b',
          name: 'storage.type.rpgle.free.definition.subr'
        },
        {
          begin: '(?i)(?=(\\b(DCL\\-)(S|C|PARM|SUBF)\\b))',
          end: '\n',
          name: 'rpgle.free.definition.simple',
          patterns: [
            {
              match: '(?i)\\b(DCL\\-)(S|C|PARM|SUBF)\\b',
              name: 'storage.type.rpgle.free.definition.simple'
            },
            {include: '#freeidentifiers'},
            {match: '(//).*', name: 'comment.line.rpgle.free'}
          ]
        },
        {
          begin: '(?i)(?=(\\b(DCL\\-)(PR|DS)\\b))',
          end: '\n',
          name: 'rpgle.free.definition.complex-single',
          patterns: [
            {
              match: '(?i)\\b(DCL\\-)(PR|DS)\\b',
              name: 'storage.type.rpgle.free.definition.complex-single.dcl'
            },
            {
              match: '(?i)\\b(END\\-)(PR|DS)\\b',
              name: 'storage.type.rpgle.free.definition.complex-single.end'
            },
            {include: '#freedefkeywords'},
            {include: '#rpglecommon'}
          ]
        },
        {
          begin: '(?i)(?=(\\b(DCL\\-)(DS|ENUM|PROC|PR|PI)\\b))',
          end: '\n',
          name: 'rpgle.free.definition.complex',
          patterns: [
            {
              match: '(?i)\\b(DCL\\-)(DS|ENUM|PROC|PR|PI)\\b',
              name: 'storage.type.rpgle.free.definition.complex.dcl'
            },
            {
              match: '(?i)\\b(END\\-)(DS|ENUM|PROC|PR|PI)\\b',
              name: 'storage.type.rpgle.free.definition.complex.end'
            },
            {include: '#freedefkeywords'},
            {include: '#freeidentifiers'},
            {include: '#rpglecommon'}
          ]
        },
        {
          match: '(?i)\\b(END\\-)(DS|ENUM|PROC|PR|PI)\\b',
          name: 'storage.type.rpgle.free.definition.complex.end'
        },
        {
          match:
            '(?i)\\b(Z\\-SUB|Z\\-ADD|XML\\-SAX|XML\\-INTO|XLATE|XFOOT|WRITE|WHEN-IN|WHEN-IS|WHEN|UPDATE|UNLOCK|TIME|TESTZ|TESTN|TESTB|TEST|TAG|SUBST|SUBDUR|SUB|SQRT|SQLSTATE|SQLCODE|SORTA|SND\\-MSG|SHTDN|SETON|SETOFF|SETLL|SETGT|SELECT|SCAN|ROLBK|RETURN|RESET|REL|REALLOC|READPE|READP|READE|READC|READ|POST|PLIST|PARM|OUT|OTHER|OR|OPEN|ON\\-EXIT|ON\\-EXCP|ON\\-ERROR|OCCUR|NEXT|MVR|MULT|MOVEL|MOVEA|MOVE|MONITOR|MLLZO|MLHZO|MHLZO|MHHZO|LOOKUP|LEAVESR|LEAVE|KLIST|KFLD|ITER|IN|IF|GOTO|FORCE|FOR\\-EACH|FOR|FEOD|EXTRCT|EXSR|EXFMT|EXCEPT|EVAL-CORR|EVALR|EVAL|ENDSR|ENDMON|ENDFOR|ENDIF|ENDDO|ENDCS|ENDWH|ENDSL|END|ELSEIF|ELSE|DUMP|DSPLY|DOW|DOU|DO|DIV|DELETE|DEFINE|DEALLOC|DATA-INTO|DATA-GEN|COMP|COMMIT|CLOSE|CLEAR|CHECKR|CHECK|CHAIN|CAT|CAS|CALLP|CALLB|CALL|CAB|BITON|BITOFF|BEGSR|AND|ALLOC|ADDUR|ADD|ACQ)\\b',
          name: 'keyword.other.rpgle.free'
        },
        {include: '#freeidentifiers'},
        {include: '#rpglecommon'}
      ]
    },
    freeidentifiers: {
      patterns: [
        {
          begin: '[a-zA-Z_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ][a-zA-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ]*',
          end: '(?=\n)',
          name: 'variable.other.rpgle.free.definition.identifier',
          patterns: [{include: '#freedefkeywords'}, {include: '#rpglecommon'}]
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match: '\\*{1,2}(=)?|=|<>|((<|>|\\+|\\-|\\/)(=)?)',
          name: 'keyword.operator.rpgle'
        },
        {
          match: ':|\\.|\\,|((\\b(?i)(TO|BY|DOWNTO|IN|AND|OR|NOT)\\b))',
          name: 'keyword.other.rpgle'
        },
        {
          match:
            '[%](?i)(YEARS|XML|XLATE|XFOOT|UPPER|UNSH|UNS|UCS2|TRIMR|TRIML|TRIM|TLOOKUPLT|TLOOKUPLE|TLOOKUPGT|TLOOKUPGE|TLOOKUP|TIMESTAMP|TIME|THIS|TARGET|SUBST|SUBDT|SUBARR|STR|STATUS|SQRT|SPLIT|SIZE|SHTDN|SECONDS|SCANRPL|SCANR|SCAN|RIGHT|REPLACE|REM|REALLOC|RANGE|PROC|PASSED|PARSER|PARMNUM|PARMS|PADDR|OPEN|OMITTED|OCCUR|NULLIND|MSG|MSECONDS|MONTHS|MINUTES|MINARR|MIN|MAXARR|MAX|LOWER|LOOKUPLT|LOOKUPLE|LOOKUPGT|LOOKUPGE|LOOKUP|LIST|LEN|LEFT|KDS|INTH|INT|HOURS|HANDLER|GRAPH|GEN|FOUND|FLOAT|FIELDS|ERROR|EQUAL|EOF|ELEM|EDITW|EDITFLT|EDITC|DIV|DIFF|DECPOS|DECH|DEC|DAYS|DATE|DATA|CONCATARR|CONCAT|CHECKR|CHECK|CHARCOUNT|CHAR|BITXOR|BITOR|BITNOT|BITAND|ALLOC|ADDR|ABS)',
          name: 'support.function.rpgle.bif'
        }
      ]
    },
    precompiler: {
      patterns: [
        {
          begin: '(?i)(?<=^.{5})(H|F|D|I|C|O|P|\\s)(\\/TITLE)',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.fixed.precompiler.title'},
            2: {name: 'keyword.control.rpgle.fixed.precompiler.title'}
          },
          end: '\n',
          name: 'rpgle.fixed.precompiler.title',
          patterns: [
            {match: '.*', name: 'comment.line.rpgle.fixed.precompiler.title'}
          ]
        },
        {
          begin: '(?i)^\\s*(\\/TITLE)',
          beginCaptures: {
            1: {name: 'keyword.control.rpgle.free.precompiler.title'}
          },
          end: '\n',
          name: 'rpgle.free.precompiler.title',
          patterns: [
            {match: '.*', name: 'comment.line.rpgle.free.precompiler.title'}
          ]
        },
        {
          begin: '(?i)(?<=^.{5})(H|F|D|I|C|O|P|\\s)(\\/(INCLUDE|COPY))\\s',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.fixed.precompiler.include'},
            2: {name: 'keyword.control.rpgle.fixed.precompiler.include'}
          },
          end: '\n',
          name: 'rpgle.fixed.precompiler.include',
          patterns: [
            {
              begin: '\\S',
              end: '\\s',
              name: 'string.other.rpgle.precompiler.include'
            },
            {match: '.*', name: 'comment.other.rpgle.precompiler.include'}
          ]
        },
        {
          begin: '(?i)^\\s*(\\/(INCLUDE|COPY))\\s+(\\S+)(.*)',
          beginCaptures: {
            1: {name: 'keyword.control.rpgle.free.precompiler.include'},
            3: {name: 'string.other.rpgle.precompiler.include'},
            4: {name: 'comment.other.rpgle.precompiler.include'}
          },
          end: '\n',
          name: 'rpgle.free.precompiler.include'
        },
        {
          begin:
            '(?i)(?<=^.{5})(H|F|D|I|C|O|P|\\s)(\\/(ELSEIF|IF))\\b(NOT|UNDEFINED|DEFINED)\\b(.*)',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.fixed.precompiler.conditional'},
            2: {name: 'keyword.control.rpgle.fixed.precompiler.conditional'},
            3: {name: 'keyword.other.rpgle.fixed.precompiler.defcheck'}
          },
          end: '(?i)(?=^.{5})(H|F|D|I|C|O|P|\\s)(\\/ENDIF)',
          endCaptures: {
            1: {name: 'keyword.other.rpgle.fixed.precompiler.conditional'},
            2: {name: 'keyword.control.rpgle.fixed.precompiler.conditional'}
          },
          name: 'rpgle.fixed.precompiler.conditional',
          patterns: [{include: '#fixedformat'}]
        },
        {
          begin: '(?i)(?=(^[\\s]*\\/IF))',
          end: '(?i)(?=(^[\\s]*\\/ENDIF))',
          name: 'rpgle.free.precompiler.conditional',
          patterns: [
            {
              match: '(?i)^[\\s]*\\/(ELSEIF|IF)',
              name: 'keyword.control.rpgle.precompiler.if'
            },
            {
              match: '(?i)\\s*\\b(NOT|UNDEFINED|DEFINED)\\b',
              name: 'keyword.other.rpgle.precompiler.defcheck'
            },
            {include: '#freedefkeywords'},
            {include: '#freeformat'}
          ]
        },
        {
          begin: '(?i)(?=(^[\\s]*\\/CHARCOUNT))',
          end: '\n',
          name: 'rpgle.precompiler.charcount',
          patterns: [
            {
              match: '(?i)^[\\s]*\\/CHARCOUNT',
              name: 'keyword.control.rpgle.precompiler.charcount'
            },
            {
              match: '(?i)\\s*\\b(NATURAL|STDCHARSIZE)\\b',
              name: 'keyword.other.rpgle.precompiler.charcount.mode'
            }
          ]
        },
        {
          begin:
            '(?i)(?<=^.{5})(H|F|D|I|C|O|P|\\s)(\\/(UNDEFINE|SPACE|FREE|EOF|END-FREE|ELSE|EJECT|DEFINE|CHARCOUNT))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.fixed.precompiler.misc'},
            2: {name: 'keyword.control.rpgle.fixed.precompiler.misc'}
          },
          end: '\n',
          name: 'rpgle.fixed.precompiler.misc',
          patterns: [{match: '.*', name: 'keyword.control.rpgle.precompiler'}]
        },
        {
          begin:
            '(?i)^[\\s]*(\\/(UNDEFINE|TITLE|SPACE|INCLUDE|FREE|EOF|ENDIF|END-FREE|ELSE|EJECT|DEFINE|COPY|CHARCOUNT))\\b',
          beginCaptures: {
            1: {name: 'keyword.control.rpgle.free.precompiler.misc'}
          },
          end: '\n',
          name: 'rpgle.free.precompiler.misc',
          patterns: [{match: '.*', name: 'keyword.control.rpgle.precompiler'}]
        }
      ]
    },
    rpglecommon: {
      patterns: [
        {include: '#comments'},
        {include: '#freedefkeywords'},
        {include: '#constants'},
        {include: '#precompiler'},
        {include: '#keywords'},
        {include: '#strings'}
      ]
    },
    sqlcommon: {
      patterns: [
        {match: '//.*', name: 'comment.line.rpgle.rpgle.sql'},
        {
          match:
            '(?i)\\b(CLIENT_HOST|CLIENT_IPADDR|CLIENT_PORT|JOB_NAME|PACKAGE_NAME|PACKAGE_SCHEMA|PACKAGE_VERSION|PROCESS_ID|ROUTINE_SCHEMA|ROUTINE_SPECIFIC_NAME|ROUTINE_TYPE|SERVER_MODE_JOB_NAME|THREAD_ID)\\b',
          name: 'constant.language.rpgle.sql.globals'
        },
        {
          match:
            '[a-zA-Z_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ][a-zA-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ]*(?=\\()',
          name: 'support.function.rpgle.sql'
        },
        {
          match:
            '[a-zA-Z_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ][a-zA-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ]*(\\.|\\/)[a-zA-Z_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ][a-zA-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ]*',
          name: 'constant.language.rpgle.sql.schema'
        },
        {
          match: '[:][a-zA-Z_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ][a-zA-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ\\.]*',
          name: 'variable.parameter.rpgle.sql'
        },
        {
          match:
            '(?i)\\b(ZONE|YES|YEARS|YEAR|XSROBJECT|XSLTRANSFORM|XMLVALIDATE|XMLTEXT|XMLTABLE|XMLSERIALIZE|XMLROW|XMLPI|XMLPARSE|XMLNAMESPACES|XMLGROUP|XMLFOREST|XMLELEMENT|XMLDOCUMENT|XMLCONCAT|XMLCOMMENT|XMLCAST|XMLATTRIBUTES|XMLAGG|WRKSTNNAME|WRITE|WRAPPER|WRAPPED|WITHOUT|WITHIN|WITH|WHILE|WHERE|WHENEVER|WHEN|WAIT|VOLATILE|VIEW|VERSION|VCAT|VARIANT|VARIABLE|VALUES|VALUE|USING|USERID|USER|USE|USAGE|URI|UPDATING|UPDATE|UNTIL|UNNEST|UNIT|UNIQUE|UNION|UNDO|TYPE|TRUNCATE|TRIM_ARRAY|TRIM|TRIGGER|TRANSFER|TRANSACTION|TO|TIMESTAMP|TIME|THREADSAFE|THEN|TABLESPACES|TABLESPACE|TABLE|SYSTEM_USER|SYNONYM|SUMMARY|SUBSTRING|STOGROUP|STATIC|STATEMENT|STARTING|START|STACKED|SQLID|SQL|SPECIFIC|SOURCE|SOME|SNAN|SKIP|SIMPLE|SIGNAL|SET|SESSION_USER|SESSION|SEQUENCE|SENSITIVE|SELECT|SECURED|SECQTY|SECONDS|SECOND|SEARCH|SCROLL|SCRATCHPAD|SCHEMA|SBCS|SAVEPOINT|RUN|RRN|ROW_NUMBER|ROWS|ROWNUMBER|ROW|ROUTINE|ROLLUP|ROLLBACK|RIGHT|RID|REVOKE|RETURNS|RETURNING|RETURN|RESULT_SET_LOCATOR|RESULT|RESTART|RESIGNAL|RESET|REPEAT|RENAME|RELEASE|REGEXP_LIKE|REFRESH|REFERENCING|REFERENCES|RECOVERY|READS|READ|RCDFMT|RANK|RANGE|QUERY|PROGRAMID|PROGRAM|PROCEDURE|PRIVILEGES|PRIQTY|PRIOR|PRIMARY|PREVVAL|PREPARE|POSITION|PLAN|PIPE|PIECESIZE|PERMISSION|PCTFREE|PATH|PASSWORD|PASSING|PARTITIONS|PARTITIONING|PARTITIONED|PARTITION|PART|PARAMETER|PAGESIZE|PAGE|PADDED|PACKAGE|OVERRIDING|OVERLAY|OVER|OUTER|OUT|ORGANIZE|ORDINALITY|ORDER|OR|OPTION|OPTIMIZE|OPEN|ONLY|ON|OMIT|OLD_TABLE|OLD|OFFSET|OF|OBID|NVARCHAR|NULLS|NULL|NOT|NORMALIZED|NOORDER|NONE|NOMINVALUE|NOMAXVALUE|NODENUMBER|NODENAME|NOCYCLE|NOCACHE|NO|NEXTVAL|NEW_TABLE|NEW|NESTED|NCLOB|NCHAR|NATIONAL|NAN|NAMESPACE|MONTHS|MONTH|MODIFIES|MODE|MIXED|MINVALUE|MINUTES|MINUTE|MINPCTUSED|MICROSECONDS|MICROSECOND|MERGE|MAXVALUE|MATERIALIZED|MATCHED|MASK|MAINTAINED|LOOP|LONG|LOGGED|LOG|LOCKSIZE|LOCK|LOCATOR|LOCATION|LOCALTIMESTAMP|LOCALTIME|LOCALDATE|LOCAL|LISTAGG|LINKTYPE|LIMIT|LIKE|LEVEL2|LEFT|LEAVE|LATERAL|LANGUAGE|LABEL|KEY|KEEP|JSON_VALUE|JSON_TABLE|JSON_QUERY|JSON_OBJECTAGG|JSON_OBJECT|JSON_EXISTS|JSON_ARRAYAGG|JSON_ARRAY|JOIN|JAVA|ITERATE|ISOLATION|IS|INTO|INTERSECT|INTEGRITY|INSERTING|INSERT|INSENSITIVE|INOUT|INNER|INLINE|INHERIT|INFINITY|INF|INDICATOR|INDEXBP|INDEX|INCREMENT|INCLUSIVE|INCLUDING|INCLUDE|IMPLICITLY|IMMEDIATE|IGNORE|IF|IDENTITY|ID|HOURS|HOUR|HOLD|HINT|HAVING|HASHED_VALUE|HASH|HANDLER|GROUP|GRAPHIC|GRANT|GOTO|GO|GLOBAL|GET|GENERATED|GENERAL|GBPCACHE|FUNCTION|FULL|FROM|FREEPAGE|FREE|FORMAT|FOREIGN|FOR|FINAL|FILE|FIELDPROC|FETCH|FENCED|EXTRACT|EXTERNAL|EXTEND|EXIT|EXISTS|EXECUTE|EXCLUSIVE|EXCLUDING|EXCEPTION|EXCEPT|EVERY|ESCAPE|ERROR|ENFORCED|ENDING|END|ENCRYPTION|ENCODING|ENABLE|EMPTY|ELSEIF|ELSE|EACH|DYNAMIC|DROP|DOUBLE|DOCUMENT|DO|DISTINCT|DISCONNECT|DISALLOW|DISABLE|DIAGNOSTICS|DETERMINISTIC|DESCRIPTOR|DESCRIBE|DESC|DENSE_RANK|DENSERANK|DELETING|DELETE|DEFINITION|DEFINE|DEFER|DEFAULTS|DEFAULT|DECLARE|DEALLOCATE|DEACTIVATE|DBPARTITIONNUM|DBPARTITIONNAME|DBINFO|DB2SQL|DB2GENRL|DB2GENERAL|DAYS|DAY|DATE|DATAPARTITIONNUM|DATAPARTITIONNAME|DATABASE|DATA|CYCLE|CURSOR|CURRENT_USER|CURRENT_TIMEZONE|CURRENT_TIMESTAMP|CURRENT_TIME|CURRENT_SERVER|CURRENT_SCHEMA|CURRENT_PATH|CURRENT_DATE|CURRENT|CUBE|CROSS|CREATEIN|CREATE|COUNT_BIG|COUNT|COPY|CONTINUE|CONTENT|CONTAINS|CONSTRAINT|CONSTANT|CONNECT_BY_ROOT|CONNECTION|CONNECT|CONDITION|CONCURRENT|CONCAT|COMPRESS|COMPACT|COMMIT|COMMENT|COLUMN|COLLECTION|COLLECT|CLUSTER|CLOSE|CL|CHECK|CHARACTER|CHAR|CCSID|CAST|CASE|CARDINALITY|CALLED|CALL|CACHE|BY|BUFFERPOOL|BIT|BIND|BINARY|BETWEEN|BEGIN|BEFORE|AUTONOMOUS|AUTHORIZATION|ATTRIBUTES|ATOMIC|AT|ASSOCIATE|ASENSITIVE|ASC|AS|ARRAY_AGG|ARRAY|APPLNAME|APPEND|ANY|AND|ALTER|ALLOW|ALLOCATE|ALL|ALIAS|ADD|ACTIVATE|ACTION|ACCTNG|ACCORDING|ABSENT)\\b',
          name: 'keyword.operator.rpgle.sql.reserved'
        },
        {include: 'source.sql'}
      ]
    },
    strings: {
      patterns: [
        {begin: "(?i)x'", end: "'", name: 'string.other.rpgle.hex'},
        {begin: "'", end: "'", name: 'string.quoted.single.rpgle'}
      ]
    },
    tempfreeformat: {
      patterns: [
        {
          begin: '(?i)(?=((\\/FREE\\b)))',
          end: '(?i)(?=((\\/END-FREE\\b)))',
          patterns: [
            {
              match: '(?i)^.*(\\/FREE\\b)',
              name: 'keyword.control.rpgle.precompiler'
            },
            {include: '#rpglecommon'},
            {include: '#freeformat'},
            {include: '#freeSQL'}
          ]
        },
        {
          match: '^.*(\\/END-FREE\\b)',
          name: 'keyword.control.rpgle.precompiler'
        }
      ]
    }
  },
  scopeName: 'source.rpgle'
}

export default grammar
