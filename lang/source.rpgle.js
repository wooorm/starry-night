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
      begin: '(?i)(?=(\\*\\*(FREE)))',
      end: '(E-\\*-O-\\*-F)',
      name: 'rpgle.free.allfree',
      patterns: [
        {
          match: '(?i)^\\*\\*FREE',
          name: 'keyword.other.rpgle.free.precompiler.allfree'
        },
        {include: '#ctarrays'},
        {include: '#freeSQL'},
        {include: '#freerpglecommon'},
        {include: '#freeformat'}
      ]
    },
    {begin: '(?i)^.{5}.[*]', end: '\n', name: 'comment.line.rpgle.fixed'},
    {include: '#tempfreeformat'},
    {include: '#fixedSQL'},
    {include: '#fixedfreeSQL'},
    {include: '#fixedprecompiler'},
    {include: '#ctarrays'},
    {include: '#fixedcomment'},
    {include: '#fixedformat'},
    {include: '#rpglecommon'},
    {include: '#fixedfreeformat'}
  ],
  repository: {
    comments: {patterns: [{match: '(//).*', name: 'comment.line.rpgle.free'}]},
    constants: {
      patterns: [
        {
          match:
            '(?i)[*]IN([0-9]{2}|K[A-N]|K[P-Y]|[HL][1-9]|LR|MR|RT|U[1-8]|O[A-G]|OV|1P)?(?![A-Z0-9])',
          name: 'constant.language.rpgle.indicator'
        },
        {match: '[*][a-zA-Z][a-zA-Z0-9]*', name: 'constant.language.rpgle'},
        {
          match:
            '(?<![a-zA-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ])\\d+\\.?\\d*?(?![a-zA-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ])',
          name: 'constant.numeric.rpgle'
        },
        {
          match:
            '(?i)(?<![a-zA-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ])(UDATE|UMONTH|UDAY|UYEAR|PAGE[1-7]|PAGE)(?![a-zA-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ])',
          name: 'constant.language.rpgle'
        }
      ]
    },
    ctarrays: {
      patterns: [
        {
          begin: '(?=^(\\*{2})(?!free))',
          end: '(E-\\*-O-\\*-F)',
          patterns: [
            {begin: '^(\\*{2}(\\ |CTDATA))', name: 'string.other.rpgle.ctarray'}
          ]
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
        {match: '(?i)(C\\/END\\-EXEC)', name: 'keyword.other.rpgle.sql'}
      ]
    },
    fixedcomment: {
      patterns: [
        {begin: '(?i)^.{5}.[*]', end: '\n', name: 'comment.line.rpgle.fixed'},
        {match: '^.{1,5}', name: 'comment.gutter'},
        {
          match: '(?i)(?<=^.{5})[HFDICOP](?![+/])',
          name: 'keyword.other.rpgle.fixed.specs'
        },
        {
          begin: '(?<=^.{80})(?=.)',
          end: '(?=\\n)',
          name: 'comment.block.line.rpgle.fixed'
        }
      ]
    },
    fixedformat: {
      patterns: [
        {include: '#fixedprecompiler'},
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
                '(?i)(?:(?<=^.{5}H)|\\b)(VALIDATE|USRPRF|TRUNCNBR|TIMFMT|THREAD|TEXT|STGMDL|SRTSEQ|REQPREXP|PRFDTA|PGMINFO|OPTION|OPTIMIZE|OPENOPT|NOMAIN|MAIN|LANGID|INTPREC|INDENT|GENLVL|FTRANS|FORMSALIGN|FLTDIV|FIXNBR|EXTBININT|EXPROPTS|ENBPFRCOL|DFTNAME|DFTACTGRP|DECPREC|DECEDIT|DEBUG|DCLOPT|DATFMT|DATEYY|DATEDIT|CVTOPT|CURSYM|COPYRIGHT|COPYNEST|CHARCOUNT|CCSIDCVT|CCSID|BNDDIR|AUT|ASSERT|ALWNULL|ALTSEQ|ALLOC|ACTGRP)\\b',
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
            {
              match: '(?i)(?<=EXTFMT\\()[BCILRPSUF](?=\\))',
              name: 'constant.language.rpgle.fixed.d.extfmt'
            },
            {include: '#fixedcomment'},
            {
              begin: "'",
              end: "'|[^-+\\s]\\s*$|[^-+\\s]\\s*(?<=^.{80})",
              name: 'string.quoted.single.rpgle.fixed',
              patterns: [
                {
                  match: '[-+](?=\\s*$)',
                  name: 'keyword.other.rpgle.continuation'
                },
                {
                  captures: {1: {name: 'keyword.other.rpgle.continuation'}},
                  match: '([-+])\\s*(?<=^.{80})'
                },
                {
                  match: '(?i)(?<=^.{5})[H|F|D|I|C|O|P]',
                  name: 'keyword.other.rpgle.fixed.specs'
                },
                {include: '#fixedcomment'}
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
              match: '(?i)(?<=(?<=^.{5}D).{19})(?=[0-9 ]{0,6}[0-9])[0-9 ]{7}',
              name: 'constant.language.rpgle.fixed.d.from'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}D).{26})([+\\-][0-9 ]{6}|(?=[0-9 ]{0,6}[0-9])[0-9 ]{7})',
              name: 'constant.language.rpgle.fixed.d.to'
            },
            {
              match:
                '(?i)(?<=((?<=^.{5}D).{33}))(A|B|C|D|F|G|I|N|O|P|S|T|U|Z|\\*)',
              name: 'constant.language.rpgle.fixed.d.datatype'
            },
            {
              match: '(?i)(?<=((?<=^.{5}D).{34}))([0-9]|\\s){2}',
              name: 'constant.language.rpgle.fixed.d.decpos'
            },
            {
              match:
                '\\b(?i)(ZONED|VARYING|VARUCS2|VARGRAPH|VARCHAR|VALUE|UNS|UCS2|TOFILE|TIMFMT|TIMESTAMP|TIME|TEMPLATE|STATIC|SAMEPOS|RTNPARM|REQPROTO|QUALIFIED|PSDS|PROCPTR|PREFIX|POS|POINTER|PERRCD|PACKEVEN|PACKED|OVERLOAD|OVERLAY|OPTIONS|OPDESC|OCCURS|OBJECT|NULLIND|NOOPT|LIKEREC|LIKEFILE|LIKEDS|LIKE|LEN|INZ|INT|IND|IMPORT|GRAPH|FROMFILE|FLOAT|EXTPROC|EXTPGM|EXTNAME|EXTFMT|EXTFLD|EXT|EXPORT|DTAARA|DIM|DFT|DESCEND|DATFMT|DATE|CTDATA|CONST|CLASS|CHAR|CCSID|BINDEC|BASED|ASCEND|ALTSEQ|ALT|ALIGN|ALIAS)\\b',
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
            {
              match: '(?i)(?<=^.{5}I\\s{14}.{10})(\\*[A-Z0-9]{3,4})',
              name: 'constant.language.rpgle.fixed.i.attrs'
            },
            {
              match: '(?i)(?<=^.{5}I\\s{14}.{14})[^ ]',
              name: 'constant.language.rpgle.fixed.i.sep'
            },
            {
              match:
                '(?i)(?<=^.{5}I\\s{14}.{15})(A|C|G|B|F|I|L|N|P|R|S|U|D|T|Z)',
              name: 'constant.language.rpgle.fixed.i.fmt'
            },
            {
              match: '(?i)(?<=^.{5}I\\s{14}.{16})(?=[0-9 ]{0,4}[0-9])[0-9 ]{5}',
              name: 'constant.language.rpgle.fixed.i.from'
            },
            {
              match: '(?i)(?<=^.{5}I\\s{14}.{21})(?=[0-9 ]{0,4}[0-9])[0-9 ]{5}',
              name: 'constant.language.rpgle.fixed.i.to'
            },
            {
              match: '(?i)(?<=^.{5}I\\s{14}.{26})(?=[0-9 ]?[0-9])[0-9 ]{2}',
              name: 'constant.language.rpgle.fixed.i.decpos'
            },
            {
              match: '(?i)(?<=^.{5}I\\s{14}.{42})L[1-9]',
              name: 'constant.language.rpgle.fixed.i.ctrl'
            },
            {
              match: '(?i)(?<=^.{5}I\\s{14}.{44})M[1-9]',
              name: 'constant.language.rpgle.fixed.i.matching'
            },
            {
              match:
                '(?i)(?<=^.{5}I\\s{14}.{46})(([0-9]{2})|((H|L)[1-9])|MR|RT|(U[1-8]))',
              name: 'constant.language.rpgle.fixed.i.fldrcdrel'
            },
            {
              match:
                '(?i)(?<=^.{5}I\\s{14}.{48})(([0-9]{2})|(H[1-9])|(U[1-8])|RT)',
              name: 'constant.language.rpgle.fixed.i.posfld'
            },
            {
              match:
                '(?i)(?<=^.{5}I\\s{14}.{50})(([0-9]{2})|(H[1-9])|(U[1-8])|RT)',
              name: 'constant.language.rpgle.fixed.i.negfld'
            },
            {
              match:
                '(?i)(?<=^.{5}I\\s{14}.{52})(([0-9]{2})|(H[1-9])|(U[1-8])|RT)',
              name: 'constant.language.rpgle.fixed.i.zerofld'
            },
            {include: '#fixedcomment'},
            {
              match: '(?i)(?<=((?<=^.{5}I).{10}))[A-Za-z0-9]{2}',
              name: 'constant.language.rpgle.fixed.i.seq'
            },
            {
              match: '(?i)(?<=(?<=^.{5}I).{12})(1|N)',
              name: 'constant.language.rpgle.fixed.i.number'
            },
            {
              match: '(?i)(?<=((?<=^.{5}I).{13}))O',
              name: 'constant.language.rpgle.fixed.i.option'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}I)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]))(([0-9]{2})|((H|L)[1-9])|LR|(RT)|((U)([1-8]))|(\\*\\*))',
              name: 'constant.language.rpgle.fixed.i.recordid'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}I)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{2})([0-9]|\\s){5}',
              name: 'constant.language.rpgle.fixed.i.pos1'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}I)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{7})N',
              name: 'constant.language.rpgle.fixed.i.not1'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}I)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{8})(C|Z|D)',
              name: 'constant.language.rpgle.fixed.i.czd1'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}I)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{9})(.|$)',
              name: 'constant.language.rpgle.fixed.i.char1'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}I)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{10})([0-9]|\\s){5}',
              name: 'constant.language.rpgle.fixed.i.pos2'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}I)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{15})N',
              name: 'constant.language.rpgle.fixed.i.not2'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}I)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{16})(C|Z|D)',
              name: 'constant.language.rpgle.fixed.i.czd2'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}I)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{17})(.|$)',
              name: 'constant.language.rpgle.fixed.i.char2'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}I)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{18})([0-9]|\\s){5}',
              name: 'constant.language.rpgle.fixed.i.pos3'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}I)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{23})N',
              name: 'constant.language.rpgle.fixed.i.not3'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}I)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{24})(C|Z|D)',
              name: 'constant.language.rpgle.fixed.i.czd3'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}I)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{25})(.|$)',
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
              match: '(?i)(?<=^.{5}C)((L[0-9])|LR|SR|AN|OR)',
              name: 'constant.language.rpgle.fixed.c.ctrl'
            },
            {
              match:
                '(?i)(?<=((?<=^.{5}C).{2}))((N|\\s)(([0-9]{2})|(K[A-N])|(K[P-Y])|((H|L)[1-9])|LR|MR|RT|(U[1-8])|(O[A-G])|OV))',
              name: 'constant.language.rpgle.fixed.c.n01'
            },
            {
              begin:
                '(?i)(?<=(?<=^.{5}C).{19})((\\s{10})|ON\\-ERROR|FOR\\-EACH|WHEN\\-IN|WHEN\\-IS|DATA\\-INTO|DATA\\-GEN|XML\\-INTO|XML\\-SAX|CALLP|RETURN|EVAL\\-CORR|EVALR|EVAL|ELSEIF|WHEN\\s{2}|IF\\s{2}|DOW\\s{2}|DOU\\s{2}|FOR)(\\(\\s*([ADEHMNPRTZC]{1,5})\\s*\\))?(?![A-Za-z\\-])',
              beginCaptures: {
                4: {name: 'constant.language.rpgle.fixed.c.extender'}
              },
              end: '(?<=\\n)',
              name: 'keyword.other.rpgle.fixed.c.extfactor2',
              patterns: [
                {include: '#fixedcomment'},
                {include: '#rpglecommon'},
                {
                  match:
                    '((?i)(AND|COMP|CAB|CAS|DOU|DOW|FOR|IF|OR|WHEN)(GT|LT|EQ|NE|GE|LE|(\\s{2})))',
                  name: 'keyword.other.rpgle.fixed.c.operation'
                },
                {
                  match:
                    '((?i)[a-zA-Z_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ][a-zA-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ]*)|\\(|\\)|\\%',
                  name: 'variable.other'
                }
              ]
            },
            {
              match:
                '((?i)\\b(AND|COMP|CAB|CAS|DOU|DOW|IF|OR|WHEN)(GT|LT|EQ|NE|GE|LE|(\\s{2})))',
              name: 'keyword.other.rpgle.fixed.c.operation'
            },
            {
              match:
                '(?i)(?<=((?<=^.{5}C).{19}))(Z\\-SUB|Z\\-ADD|XML\\-SAX|XML\\-INTO|XLATE|XFOOT|WRITE|WHEN\\-IS|WHEN\\-IN|WHEN|UPDATE|UNLOCK|TIME|TESTZ|TESTN|TESTB|TEST|TAG|SUBST|SUBDUR|SUB|SQRT|SORTA|SND\\-MSG|SHTDN|SETON|SETOFF|SETLL|SETGT|SELECT|SCAN|ROLBK|RETURN|RESET|REL|REALLOC|READPE|READP|READE|READC|READ|POST|PLIST|PARM|OUT|OTHER|OR|OPEN|ON\\-EXIT|ON\\-EXCP|ON\\-ERROR|OCCUR|NEXT|MVR|MULT|MOVEL|MOVEA|MOVE|MONITOR|MLLZO|MLHZO|MHLZO|MHHZO|LOOKUP|LEAVESR|LEAVE|KLIST|KFLD|ITER|IN|IF|GOTO|FORCE|FOR\\-EACH|FOR|FEOD|EXTRCT|EXSR|EXFMT|EXCEPT|EVALR|EVAL\\-CORR|EVAL|ENDSR|ENDSL|ENDMON|ENDIF|ENDFOR|ENDDO|ENDCS|END|ELSEIF|ELSE|DUMP|DSPLY|DOW|DOU|DO|DIV|DELETE|DEFINE|DEALLOC|DATA\\-INTO|DATA\\-GEN|COMP|COMMIT|CLOSE|CLEAR|CHECKR|CHECK|CHAIN|CAT|CAS|CALLP|CALLB|CALL|CAB|BITON|BITOFF|BEGSR|ASSERT\\-T|ASSERT\\-F|AND|ALLOC|ADDDUR|ADD|ACQ)(?![A-Za-z\\-])',
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
                '(?i)(?<=(?<=^.{5}C).{64})(([0-9]{2})|(K[A-N])|(K[P-Y])|((H|L)[1-9])|LR|MR|RT|(U[1-8])|(O[A-G])|OV)',
              name: 'constant.language.rpgle.fixed.c.hi'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}C).{66})(([0-9]{2})|(K[A-N])|(K[P-Y])|((H|L)[1-9])|LR|MR|RT|(U[1-8])|(O[A-G])|OV)',
              name: 'constant.language.rpgle.fixed.c.lo'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}C).{68})(([0-9]{2})|(K[A-N])|(K[P-Y])|((H|L)[1-9])|LR|MR|RT|(U[1-8])|(O[A-G])|OV)',
              name: 'constant.language.rpgle.fixed.c.eq'
            },
            {captures: {1: {name: 'constant.language.rpgle.fixed.c.extender'}}},
            {include: '#rpglecommon'}
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
              match: '(?i)(?<=((?<=^.{5}O).{11}))(ADD|DEL)',
              name: 'constant.language.rpgle.fixed.o.addel'
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
              match:
                '(?i)(?<=(?<=^.{5}O)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{19})(?=[0-9 ]{0,2}[0-9])[0-9 ]{3}',
              name: 'constant.language.rpgle.fixed.o.spacebefore'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}O)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{22})(?=[0-9 ]{0,2}[0-9])[0-9 ]{3}',
              name: 'constant.language.rpgle.fixed.o.spaceafter'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}O)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{25})(?=[0-9 ]{0,2}[0-9])[0-9 ]{3}',
              name: 'constant.language.rpgle.fixed.o.skipbefore'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}O)(?:[^ ].{13}|\\s{1}[^ ].{12}|\\s{2}[^ ].{11}|\\s{3}[^ ].{10}|\\s{4}[^ ].{9}|\\s{5}[^ ].{8}|\\s{6}[^ ].{7}|\\s{7}[^ ].{6}|\\s{8}[^ ].{5}|\\s{9}[^ ].{4}|\\s{10}[^ ].{3}|\\s{11}[^ ].{2}|\\s{12}[^ ].{1}|\\s{13}[^ ]).{28})(?=[0-9 ]{0,2}[0-9])[0-9 ]{3}',
              name: 'constant.language.rpgle.fixed.o.skipafter'
            },
            {
              match: '(?i)(?<=(?<=^.{5}O)\\s{14}.{31})[ACGBFILNPRSUDTZ]',
              name: 'constant.language.rpgle.fixed.o.dataformat'
            },
            {
              match:
                '(?i)(?<=(?<=^.{5}O)\\s{14}.{26})(?=[0-9 ]{0,4}[0-9])[0-9 ]{5}',
              name: 'constant.language.rpgle.fixed.o.endpos'
            },
            {
              match: '(?i)(?<=(?<=^.{5}O)\\s{14}.{24})B',
              name: 'constant.language.rpgle.fixed.o.blankafter'
            },
            {
              match: '(?i)(?<=(?<=^.{5}O)\\s{14}.{23})[1-9A-DJ-QXYZ]',
              name: 'constant.language.rpgle.fixed.o.editcode'
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
              match: '(?i)(?<=^.{5}P).[a-zA-Z_][a-zA-Z0-9_]{1,71}[.]{3}',
              name: 'variable.other.rpgle.fixed.p.extended.name'
            },
            {
              match: '(?i)(?<=((?<=^.{5}P).{17}))(B|E)',
              name: 'constant.language.rpgle.fixed.p.beginend'
            },
            {
              match:
                '(?i)(?:(?<=(?<=^.{5}P).{37})|\\b)(SERIALIZE|REQPROTO|PGMINFO|EXPORT)',
              name: 'entity.name.function.rpgle.fixed.p.keywords'
            },
            {include: '#rpglecommon'}
          ]
        }
      ]
    },
    fixedfreeSQL: {
      patterns: [
        {
          begin: '(?i)(?=(^.{5}\\s*(EXEC)\\s+(SQL)\\b))',
          end: '(;)',
          endCaptures: {1: {name: 'punctuation.terminator.rpgle.sql'}},
          patterns: [
            {include: '#fixedcomment'},
            {match: '(?i)(EXEC)\\s+(SQL)\\b', name: 'keyword.other.rpgle.sql'},
            {include: '#sqlcommon'}
          ]
        }
      ]
    },
    fixedfreeformat: {
      patterns: [
        {
          begin: '(?i)\\b(?=CTL\\-OPT)\\b',
          end: ';',
          name: 'rpgle.free.control',
          patterns: [
            {include: '#fixedstmtconditional'},
            {include: '#rpglecommon'},
            {
              match: '(?i)\\b(CTL\\-OPT)\\b',
              name: 'storage.type.rpgle.free.control'
            },
            {
              match:
                '(?i)\\b(VALIDATE|USRPRF|TRUNCNBR|TIMFMT|THREAD|TEXT|STGMDL|SRTSEQ|REQPREXP|PRFDTA|PGMINFO|OPTION|OPTIMIZE|OPENOPT|NOMAIN|MAIN|LANGID|INTPREC|INDENT|GENLVL|FTRANS|FORMSALIGN|FLTDIV|FIXNBR|EXTBININT|EXPROPTS|ENBPFRCOL|DFTNAME|DFTACTGRP|DECPREC|DECEDIT|DEBUG|DATFMT|DATEYY|DATEDIT|DCLOPT|CVTOPT|CURSYM|COPYRIGHT|COPYNEST|CHARCOUNTTYPES|CHARCOUNT|CCSIDCVT|CCSID|BNDDIR|ASSERT|AUT|ALWNULL|ALTSEQ|ACTGRP|ALLOC)\\b',
              name: 'entity.name.function.rpgle.free.control.keywords'
            }
          ]
        },
        {
          begin: '(?i)\\b(?=DCL\\-F)\\b',
          end: ';',
          name: 'rpgle.free.file',
          patterns: [
            {include: '#fixedstmtconditional'},
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
            {include: '#freedefkeywords'},
            {include: '#rpglecommon'},
            {include: '#fixedfreeidentifiers'},
            {match: '(//).*', name: 'comment.line.rpgle.free'}
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
              name: 'storage.type.rpgle.free.definition.complex.dcl'
            },
            {include: '#freedefkeywords'},
            {include: '#rpglecommon'},
            {
              match:
                '\\b[a-zA-Z_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ][a-zA-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ]*\\b',
              name: 'variable.other.rpgle.free.definition.identifier'
            }
          ]
        },
        {
          begin:
            '(?i)(?<=^.{5})(?=[ ]{2}\\s*[A-Za-z#$@][A-Za-z0-9_#$@.]*(\\([^()]*\\))?\\s*(\\*\\*=|\\+=|\\-=|\\*=|/=|=(?!=))[^;]*$)',
          end: ';',
          name: 'rpgle.fixed.calculation.continued',
          patterns: [
            {include: '#fixedcomment'},
            {include: '#fixedstrings'},
            {include: '#comments'},
            {include: '#sqlvariables'},
            {include: '#constants'},
            {include: '#keywords'},
            {include: '#freeopcodes'},
            {include: '#freedefkeywords'},
            {include: '#fixedfreeidentifiers'}
          ]
        },
        {include: '#freeopcodes'},
        {include: '#freedefkeywords'},
        {include: '#fixedfreeidentifiers'},
        {include: '#rpglecommon'}
      ]
    },
    fixedfreeidentifiers: {
      patterns: [
        {
          match: '[a-zA-Z_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ][a-zA-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ]*',
          name: 'variable.other.rpgle.free.definition.identifier'
        }
      ]
    },
    fixedprecompiler: {
      patterns: [
        {
          begin: '(?i)(?<=^.{5})([HFDICOP ] *)(\\/TITLE)',
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
          begin:
            '(?i)(?<=^.{5})([HFDICOP ] *)(\\/(INCLUDE|COPY))\\s+(\\S+)(.*)',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.fixed.precompiler.include'},
            2: {name: 'keyword.control.rpgle.fixed.precompiler.include'},
            4: {name: 'string.other.rpgle.precompiler.include'},
            5: {name: 'comment.other.rpgle.precompiler.include'}
          },
          end: '\n',
          name: 'rpgle.fixed.precompiler.include'
        },
        {
          begin: '(?i)^(.{5})([HFDICOP ] *)(\\/IF)\\b',
          beginCaptures: {
            1: {name: 'comment.gutter'},
            2: {name: 'keyword.other.rpgle.fixed.precompiler.conditional'},
            3: {name: 'keyword.control.rpgle.fixed.precompiler.conditional'}
          },
          end: '(?i)^(.{5})([HFDICOP ] *)(\\/ENDIF)\\b',
          endCaptures: {
            1: {name: 'comment.gutter'},
            2: {name: 'keyword.other.rpgle.fixed.precompiler.conditional'},
            3: {name: 'keyword.control.rpgle.fixed.precompiler.conditional'}
          },
          name: 'rpgle.fixed.precompiler.conditional',
          patterns: [
            {
              captures: {
                1: {name: 'keyword.other.rpgle.fixed.precompiler.conditional'},
                2: {name: 'keyword.control.rpgle.fixed.precompiler.conditional'}
              },
              match: '(?i)(?<=^.{5})([HFDICOP ] *)(\\/(ELSEIF|ELSE))\\b'
            },
            {
              match: '(?i)\\b(NOT|UNDEFINED|DEFINED)\\b',
              name: 'keyword.other.rpgle.fixed.precompiler.defcheck'
            },
            {include: '#tempfreeformat'},
            {include: '#fixedSQL'},
            {include: '#fixedfreeSQL'},
            {include: '#fixedformat'},
            {include: '#rpglecommon'},
            {include: '#fixedfreeformat'}
          ]
        },
        {
          begin:
            '(?i)(?<=^.{5})([HFDICOP ] *)(\\/CHARCOUNT)\\b *(NATURAL|STDCHARSIZE)?',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.fixed.precompiler.charcount'},
            2: {name: 'keyword.control.rpgle.fixed.precompiler.charcount'},
            3: {name: 'keyword.other.rpgle.fixed.precompiler.charcount.mode'}
          },
          end: '\n',
          name: 'rpgle.fixed.precompiler.charcount'
        },
        {
          begin:
            '(?i)(?<=^.{5})([HFDICOP ] *)(\\/OVERLOAD)\\b *(NODETAIL|DETAIL)?',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.fixed.precompiler.overload'},
            2: {name: 'keyword.control.rpgle.fixed.precompiler.overload'},
            3: {name: 'keyword.other.rpgle.fixed.precompiler.overload.mode'}
          },
          end: '\n',
          name: 'rpgle.fixed.precompiler.overload'
        },
        {
          begin: '(?i)(?<=^.{5})([HFDICOP ] *)(\\/EJECT)\\b(.*)',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.fixed.precompiler.eject'},
            2: {name: 'keyword.control.rpgle.fixed.precompiler.eject'},
            3: {name: 'comment.other.rpgle.precompiler.eject'}
          },
          end: '\n',
          name: 'rpgle.fixed.precompiler.eject'
        },
        {
          begin: '(?i)(?<=^.{5})([HFDICOP ] *)(\\/SPACE)\\b *(\\d*)(.*)',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.fixed.precompiler.space'},
            2: {name: 'keyword.control.rpgle.fixed.precompiler.space'},
            3: {name: 'constant.numeric.rpgle'},
            4: {name: 'comment.other.rpgle.precompiler.space'}
          },
          end: '\n',
          name: 'rpgle.fixed.precompiler.space'
        },
        {
          begin: '(?i)(?<=^.{5})([HFDICOP ] *)(\\/(UNDEFINE|DEFINE))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.fixed.precompiler.define'},
            2: {name: 'keyword.control.rpgle.fixed.precompiler.define'}
          },
          end: '\n',
          name: 'rpgle.fixed.precompiler.define',
          patterns: [{include: '#fixedfreeidentifiers'}]
        },
        {
          begin:
            '(?i)(?<=^.{5})([HFDICOP ] *)(\\/(SET|RESTORE|FREE|EOF|ENDIF|END-FREE|ELSE))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.fixed.precompiler.misc'},
            2: {name: 'keyword.control.rpgle.fixed.precompiler.misc'}
          },
          end: '\n',
          name: 'rpgle.fixed.precompiler.misc',
          patterns: [{match: '.*', name: 'keyword.control.rpgle.precompiler'}]
        }
      ]
    },
    fixedstmtconditional: {
      patterns: [
        {
          begin: '(?i)(?<=^.{5})([HFDICOP ] *)(\\/(ELSEIF|ELSE|ENDIF|IF))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.fixed.precompiler.conditional'},
            2: {name: 'keyword.control.rpgle.fixed.precompiler.conditional'}
          },
          end: '\n',
          name: 'rpgle.fixed.precompiler.conditional',
          patterns: [
            {
              match: '(?i)\\b(NOT|UNDEFINED|DEFINED)\\b',
              name: 'keyword.other.rpgle.fixed.precompiler.defcheck'
            },
            {include: '#constants'},
            {include: '#fixedfreeidentifiers'}
          ]
        }
      ]
    },
    fixedstrings: {
      patterns: [
        {
          begin: "(?i)x'",
          end: "'|[^-+\\s]\\s*$|[^-+\\s]\\s*(?<=^.{80})",
          name: 'string.other.rpgle.hex',
          patterns: [
            {match: '[-+](?=\\s*$)', name: 'keyword.other.rpgle.continuation'},
            {
              captures: {1: {name: 'keyword.other.rpgle.continuation'}},
              match: '([-+])\\s*(?<=^.{80})'
            },
            {
              begin: '^.{5}.\\s*//',
              end: '\\n',
              name: 'comment.line.rpgle.free'
            },
            {include: '#fixedcomment'}
          ]
        },
        {
          begin: "'",
          end: "'|[^-+\\s]\\s*$|[^-+\\s]\\s*(?<=^.{80})",
          name: 'string.quoted.single.rpgle',
          patterns: [
            {match: '[-+](?=\\s*$)', name: 'keyword.other.rpgle.continuation'},
            {
              captures: {1: {name: 'keyword.other.rpgle.continuation'}},
              match: '([-+])\\s*(?<=^.{80})'
            },
            {
              begin: '^.{5}.\\s*//',
              end: '\\n',
              name: 'comment.line.rpgle.free'
            },
            {include: '#fixedcomment'}
          ]
        }
      ]
    },
    freeSQL: {
      patterns: [
        {
          begin: '(?i)(?=(^\\s*(EXEC)\\s+(SQL)\\b))',
          end: '(;)',
          endCaptures: {1: {name: 'punctuation.terminator.rpgle.sql'}},
          patterns: [
            {match: '(?i)(EXEC)\\s+(SQL)\\b', name: 'keyword.other.rpgle.sql'},
            {include: '#sqlcommon'}
          ]
        }
      ]
    },
    freedefkeywords: {
      patterns: [
        {
          match:
            '(?i)\\b(ZONED|VARYING|VARUCS2|VARGRAPH|VARCHAR|VALUE|UNS|UCS2|TOFILE|TIMFMT|TIMESTAMP|TIME|TEMPLATE|STATIC|SQLTYPE|SERIALIZE|SAMEPOS|RTNPARM|REQPROTO|QUALIFIED|PSDS|PROCPTR|PREFIX|POS|POINTER|PGMINFO|PERRCD|PACKEVEN|PACKED|OVERLOAD|OVERLAY|OPTIONS|OPDESC|OCCURS|OBJECT|NULLIND|NOOPT|LIKEREC|LIKEFILE|LIKEDS|LIKE|LEN|INZ|IND|INT|IMPORT|GRAPH|FROMFILE|FLOAT|EXTPROC|EXTPGM|EXTNAME|EXTFMT|EXTFLD|EXT|EXPORT|DTAARA|DIM|DFT|DESCEND|DATFMT|DATE|CTDATA|CONST|CLASS|CHAR|CCSID|BINDEC|BASED|ASCEND|ALTSEQ|ALT|ALIGN|ALIAS)\\b',
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
            {include: '#freestmtconditional'},
            {
              match: '(?i)\\b(CTL\\-OPT)\\b',
              name: 'storage.type.rpgle.free.control'
            },
            {
              match:
                '(?i)\\b(VALIDATE|USRPRF|TRUNCNBR|TIMFMT|THREAD|TEXT|STGMDL|SRTSEQ|REQPREXP|PRFDTA|PGMINFO|OPTION|OPTIMIZE|OPENOPT|NOMAIN|MAIN|LANGID|INTPREC|INDENT|GENLVL|FTRANS|FORMSALIGN|FLTDIV|FIXNBR|EXTBININT|EXPROPTS|ENBPFRCOL|DFTNAME|DFTACTGRP|DECPREC|DECEDIT|DEBUG|DATFMT|DATEYY|DATEDIT|DCLOPT|CVTOPT|CURSYM|COPYRIGHT|COPYNEST|CHARCOUNTTYPES|CHARCOUNT|CCSIDCVT|CCSID|BNDDIR|ASSERT|AUT|ALWNULL|ALTSEQ|ACTGRP|ALLOC)\\b',
              name: 'entity.name.function.rpgle.free.control.keywords'
            },
            {include: '#freerpglecommon'}
          ]
        },
        {
          begin: '(?i)\\b(?=DCL\\-F)\\b',
          end: ';',
          name: 'rpgle.free.file',
          patterns: [
            {include: '#freestmtconditional'},
            {
              match: '(?i)\\b(DCL\\-F)\\b',
              name: 'storage.type.rpgle.free.file'
            },
            {
              match:
                '(?i)\\b(WORKSTN|USROPN|USAGE|TIMFMT|TEMPLATE|STATIC|SPECIAL|SLN|SFILE|SEQ|SAVEIND|SAVEDS|RENAME|RECNO|RAFDATA|QUALIFIED|PRTCTL|PRINTER|PREFIX|PLIST|PGMNAME|PASS|OFLIND|MAXDEV|LIKEFILE|KEYLOC|KEYED|INFSR|INFDS|INDDS|INCLUDE|IGNORE|HANDLER|FORMOFL|FORMLEN|EXTMBR|EXTIND|EXTFILE|EXTDESC|DISK|DEVID|DATFMT|DATA|COMMIT|CHARCOUNT|BLOCK|ALIAS)\\b',
              name: 'entity.name.function.rpgle.free.file.keywords'
            },
            {include: '#freerpglecommon'}
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
            {include: '#freedefkeywords'},
            {include: '#freerpglecommon'},
            {include: '#freeidentifiers'},
            {match: '(//).*', name: 'comment.line.rpgle.free'}
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
              name: 'storage.type.rpgle.free.definition.complex.dcl'
            },
            {include: '#freedefkeywords'},
            {include: '#freerpglecommon'},
            {
              match:
                '\\b[a-zA-Z_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ][a-zA-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ]*\\b',
              name: 'variable.other.rpgle.free.definition.identifier'
            }
          ]
        },
        {
          begin:
            '(?i)^(?=\\s*[A-Za-z#$@][A-Za-z0-9_#$@.]*(\\([^()]*\\))?\\s*(\\*\\*=|\\+=|\\-=|\\*=|/=|=(?!=))[^;]*$)',
          end: ';',
          name: 'rpgle.free.calculation.continued',
          patterns: [
            {include: '#strings'},
            {include: '#comments'},
            {include: '#freedefkeywords'},
            {include: '#sqlvariables'},
            {include: '#constants'},
            {include: '#keywords'},
            {include: '#freeopcodes'},
            {include: '#freeidentifiers'}
          ]
        },
        {include: '#freeopcodes'},
        {include: '#freeidentifiers'},
        {include: '#freerpglecommon'}
      ]
    },
    freeidentifiers: {
      patterns: [
        {
          match: '[a-zA-Z_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ][a-zA-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ]*',
          name: 'variable.other.rpgle.free.definition.identifier'
        }
      ]
    },
    freeopcodes: {
      patterns: [
        {
          match: '(?i)\\b(END\\-)(DS|ENUM|PROC|PR|PI)\\b',
          name: 'storage.type.rpgle.free.definition.complex.dcl'
        },
        {
          captures: {
            1: {name: 'keyword.other.rpgle.free'},
            4: {name: 'constant.language.rpgle.free.extender'}
          },
          match:
            '(?i)(?<![A-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ])(ACQ|ASSERT\\-(F|T)|BEGSR|CALLP|CHAIN|CLEAR|CLOSE|COMMIT|DATA\\-GEN|DATA\\-INTO|DEALLOC|DELETE|DOU|DOW|DSPLY|DUMP|ELSEIF|ELSE|ENDDO|ENDFOR|ENDIF|ENDMON|ENDSL|ENDSR|EVAL\\-CORR|EVALR|EVAL|EXCEPT|EXFMT|EXSR|FEOD|FOR\\-EACH|FOR|FORCE|IF|IN|ITER|LEAVESR|LEAVE|MONITOR|NEXT|ON\\-ERROR|ON\\-EXCP|ON\\-EXIT|OPEN|OTHER|OUT|POST|READC|READE|READP|READPE|READ|REL|RESET|RETURN|ROLBK|SELECT|SETGT|SETLL|SND\\-MSG|SORTA|TEST|UNLOCK|UPDATE|WHEN\\-IN|WHEN\\-IS|WHEN|WRITE|XML\\-INTO|XML\\-SAX)(?![-A-Z0-9_#@$§ÆØÅÄÖ£Ñ¥àÐŞİ])(?:(\\s*\\(\\s*)([ADEHMNPRTZC]{1,5})(\\s*\\)))?'
        }
      ]
    },
    freeprecompiler: {
      patterns: [
        {
          begin: '(?i)^(\\s*)(\\/TITLE)',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.free.precompiler.title'},
            2: {name: 'keyword.control.rpgle.free.precompiler.title'}
          },
          end: '\n',
          name: 'rpgle.free.precompiler.title',
          patterns: [
            {match: '.*', name: 'comment.line.rpgle.free.precompiler.title'}
          ]
        },
        {
          begin: '(?i)^(\\s*)(\\/(INCLUDE|COPY))\\s+(\\S+)(.*)',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.free.precompiler.include'},
            2: {name: 'keyword.control.rpgle.free.precompiler.include'},
            4: {name: 'string.other.rpgle.precompiler.include'},
            5: {name: 'comment.other.rpgle.precompiler.include'}
          },
          end: '\n',
          name: 'rpgle.free.precompiler.include'
        },
        {
          begin: '(?i)^(\\s*)(\\/IF)\\b',
          beginCaptures: {
            2: {name: 'keyword.control.rpgle.free.precompiler.conditional'}
          },
          end: '(?i)^(\\s*)(\\/ENDIF)\\b',
          endCaptures: {
            2: {name: 'keyword.control.rpgle.free.precompiler.conditional'}
          },
          name: 'rpgle.free.precompiler.conditional',
          patterns: [
            {
              captures: {
                2: {name: 'keyword.control.rpgle.free.precompiler.conditional'}
              },
              match: '(?i)^(\\s*)(\\/(ELSEIF|ELSE))\\b'
            },
            {
              match: '(?i)\\b(NOT|UNDEFINED|DEFINED)\\b',
              name: 'keyword.other.rpgle.free.precompiler.defcheck'
            },
            {include: '#freeSQL'},
            {include: '#freerpglecommon'},
            {include: '#freeformat'}
          ]
        },
        {
          begin: '(?i)^(\\s*)(\\/CHARCOUNT)\\b *(NATURAL|STDCHARSIZE)?',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.free.precompiler.charcount'},
            2: {name: 'keyword.control.rpgle.free.precompiler.charcount'},
            3: {name: 'keyword.other.rpgle.free.precompiler.charcount.mode'}
          },
          end: '\n',
          name: 'rpgle.free.precompiler.charcount'
        },
        {
          begin: '(?i)^(\\s*)(\\/OVERLOAD)\\b *(NODETAIL|DETAIL)?',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.free.precompiler.overload'},
            2: {name: 'keyword.control.rpgle.free.precompiler.overload'},
            3: {name: 'keyword.other.rpgle.free.precompiler.overload.mode'}
          },
          end: '\n',
          name: 'rpgle.free.precompiler.overload'
        },
        {
          begin: '(?i)^(\\s*)(\\/EJECT)\\b(.*)',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.free.precompiler.eject'},
            2: {name: 'keyword.control.rpgle.free.precompiler.eject'},
            3: {name: 'comment.other.rpgle.precompiler.eject'}
          },
          end: '\n',
          name: 'rpgle.free.precompiler.eject'
        },
        {
          begin: '(?i)^(\\s*)(\\/SPACE)\\b *(\\d*)(.*)',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.free.precompiler.space'},
            2: {name: 'keyword.control.rpgle.free.precompiler.space'},
            3: {name: 'constant.numeric.rpgle'},
            4: {name: 'comment.other.rpgle.precompiler.space'}
          },
          end: '\n',
          name: 'rpgle.free.precompiler.space'
        },
        {
          begin: '(?i)^(\\s*)(\\/(UNDEFINE|DEFINE))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.free.precompiler.define'},
            2: {name: 'keyword.control.rpgle.free.precompiler.define'}
          },
          end: '\n',
          name: 'rpgle.free.precompiler.define',
          patterns: [{include: '#freeidentifiers'}]
        },
        {
          begin:
            '(?i)^(\\s*)(\\/(SET|RESTORE|FREE|EOF|ENDIF|END-FREE|ELSE))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.rpgle.free.precompiler.misc'},
            2: {name: 'keyword.control.rpgle.free.precompiler.misc'}
          },
          end: '\n',
          name: 'rpgle.free.precompiler.misc',
          patterns: [{match: '.*', name: 'keyword.control.rpgle.precompiler'}]
        }
      ]
    },
    freerpglecommon: {
      patterns: [
        {include: '#strings'},
        {include: '#comments'},
        {include: '#freedefkeywords'},
        {include: '#sqlvariables'},
        {include: '#constants'},
        {include: '#freeprecompiler'},
        {include: '#keywords'}
      ]
    },
    freestmtconditional: {
      patterns: [
        {
          begin: '(?i)^(\\s*)(\\/(ELSEIF|ELSE|ENDIF|IF))\\b',
          beginCaptures: {
            2: {name: 'keyword.control.rpgle.free.precompiler.conditional'}
          },
          end: '\n',
          name: 'rpgle.free.precompiler.conditional',
          patterns: [
            {
              match: '(?i)\\b(NOT|UNDEFINED|DEFINED)\\b',
              name: 'keyword.other.rpgle.free.precompiler.defcheck'
            },
            {include: '#constants'},
            {include: '#freeidentifiers'}
          ]
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
          match:
            ':|\\.|\\,|((\\b(?i)(TO|BY|DOWNTO|IN(?!\\s*\\()|AND|OR|NOT)\\b))',
          name: 'keyword.other.rpgle'
        },
        {
          match:
            '[%](?i)(YEARS|XML|XLATE|XFOOT|UPPER|UNSH|UNS|UCS2|TRIMR|TRIML|TRIM|TLOOKUPNE|TLOOKUPLT|TLOOKUPLE|TLOOKUPGT|TLOOKUPGE|TLOOKUP|TIMESTAMP|TIME|THIS|TARGET|SUBST|SUBDT|SUBARR|STR|STATUS|SQRT|SPLIT|SIZE|SHTDN|SECONDS|SCANRPL|SCANR|SCAN|RIGHT|REPLACE|REM|REALLOC|RANGE|PROC|PASSED|PARSER|PARMNUM|PARMS|PADDR|OPEN|OMITTED|OCCUR|NULLIND|MSG|MSECONDS|MONTHS|MINUTES|MINARR|MIN|MAXARR|MAX|LOWER|LOVAL|LOOKUPNE|LOOKUPLT|LOOKUPLE|LOOKUPGT|LOOKUPGE|LOOKUP|LIST|LEN|LEFT|KDS|INTH|INT|HOURS|HIVAL|HANDLER|GRAPH|GEN|FOUND|FLOAT|FIELDS|ERROR|EQUAL|EOF|ELEM|EDITW|EDITFLT|EDITC|DIV|DIFF|DECPOS|DECH|DEC|DAYS|DATE|DATA|CONCATARR|CONCAT|CHECKR|CHECK|CHARCOUNT|CHAR|BITXOR|BITOR|BITNOT|BITAND|ALLOC|ADDR|ABS)',
          name: 'support.function.rpgle.bif'
        }
      ]
    },
    rpglecommon: {
      patterns: [
        {include: '#fixedcomment'},
        {include: '#fixedstrings'},
        {include: '#comments'},
        {include: '#sqlvariables'},
        {include: '#constants'},
        {include: '#fixedprecompiler'},
        {include: '#keywords'}
      ]
    },
    sqlcommon: {
      patterns: [
        {match: '(--|//).*', name: 'comment.line.rpgle.sql'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.rpgle.sql'},
        {
          match:
            '(?i)\\b(CLIENT_HOST|CLIENT_IPADDR|CLIENT_PORT|JOB_NAME|PACKAGE_NAME|PACKAGE_SCHEMA|PACKAGE_VERSION|PROCESS_ID|ROUTINE_SCHEMA|ROUTINE_SPECIFIC_NAME|ROUTINE_TYPE|SERVER_MODE_JOB_NAME|THREAD_ID)\\b',
          name: 'constant.language.rpgle.sql.globals'
        },
        {
          match:
            '(?i)\\b(XML|VARYING|VARGRAPHIC|VARCHAR|VARBINARY|TIMESTAMP|TIME|SMALLINT|ROWID|REAL|PRECISION|OBJECT|NVARCHAR|NUMERIC|NCLOB|NCHAR|LARGE|INTEGER|INT|GRAPHIC|FLOAT|DOUBLE|DECIMAL|DECFLOAT|DEC|DBCLOB|DATE|DATALINK|CLOB|CHARACTER|CHAR|BOOLEAN|BLOB|BINARY|BIGINT)\\b',
          name: 'storage.type.rpgle.sql'
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
        {match: "(?i)x'[^']*'", name: 'string.other.rpgle.sql.hex'},
        {match: "'[^']*'", name: 'string.quoted.single.rpgle.sql'},
        {match: '(?i)\\*[A-Z][A-Z0-9]*', name: 'constant.language.rpgle.sql'},
        {
          match:
            '(?i)\\b(ZONE|YES|YEARS|YEAR|XSROBJECT|XSLTRANSFORM|XMLVALIDATE|XMLTEXT|XMLTABLE|XMLSERIALIZE|XMLROW|XMLPI|XMLPARSE|XMLNAMESPACES|XMLGROUP|XMLFOREST|XMLELEMENT|XMLDOCUMENT|XMLCONCAT|XMLCOMMENT|XMLCAST|XMLATTRIBUTES|XMLAGG|WRKSTNNAME|WRITE|WRAPPER|WRAPPED|WITHOUT|WITHIN|WITH|WHILE|WHERE|WHENEVER|WHEN|WAIT|VOLATILE|VIEW|VERSIONING|VERSION|VCAT|VARIANT|VARIABLE|VALUES|VALUE|USING|USERID|USER|USE|USAGE|URI|UPDATING|UPDATE|UNTIL|UNNEST|UNKNOWN|UNIT|UNIQUE|UNION|UNDO|TYPE|TRY_CAST|TRUNCATE|TRUE|TRIM_ARRAY|TRIM|TRIGGER|TRANSFER|TRANSACTION|TO|TIMESTAMP|TIME|THREADSAFE|THEN|TAG|TABLESPACES|TABLESPACE|TABLE|SYSTEM_USER|SYSTEM_TIME|SYNONYM|SUMMARY|SUBSTRING|STOGROUP|STATIC|STATEMENT|STARTING|START|STACKED|SQLWARNING|SQLIND_UNASSIGNED|SQLIND_DEFAULT|SQLID|SQLERROR|SQL|SPECIFIC|SOURCE|SOME|SNAN|SKIP|SIMPLE|SIGNAL|SET|SESSION_USER|SESSION|SEQUENCE|SENSITIVE|SELECT|SECURED|SECQTY|SECONDS|SECOND|SEARCH|SCROLL|SCRATCHPAD|SCHEMA|SCALAR|SBCS|SAVEPOINT|RUN|RRN|ROW_NUMBER|ROWS|ROWNUMBER|ROW|ROUTINE|ROLLUP|ROLLBACK|RIGHT|RID|REVOKE|RETURNS|RETURNING|RETURN|RESULT_SET_LOCATOR|RESULT|RESTRICT|RESTART|RESIGNAL|RESET|REPEAT|RENAME|RELEASE|REGEXP_LIKE|REFRESH|REFERENCING|REFERENCES|RECOVERY|READS|READ|RCDFMT|RATIO_TO_REPORT|RANK|RANGE|QUERY|PROGRAMID|PROGRAM|PROCEDURE|PRIVILEGES|PRIQTY|PRIOR|PRIMARY|PREVVAL|PREPARE|POSITION|PLAN|PIPE|PIECESIZE|PERMISSION|PERIOD|PERCENT_RANK|PERCENTILE_DISC|PERCENTILE_CONT|PCTFREE|PATH|PASSWORD|PASSING|PARTITIONS|PARTITIONING|PARTITIONED|PARTITION|PART|PARAMETER|PAGESIZE|PAGE|PADDED|PACKAGE|OVERRIDING|OVERLAY|OVER|OUTER|OUT|ORGANIZE|ORDINALITY|ORDER|OR|OPTION|OPTIMIZE|OPEN|ONLY|ON|OMIT|OLD_TABLE|OLD|OFFSET|OFF|OF|OBJECT|OBID|NVARCHAR|NULLS|NULL|NTILE|NTH_VALUE|NOTNULL|NOT|NORMALIZED|NOORDER|NONE|NOMINVALUE|NOMAXVALUE|NODENUMBER|NODENAME|NOCYCLE|NOCACHE|NO|NEXTVAL|NEW_TABLE|NEW|NESTED|NCLOB|NCHAR|NATIONAL|NAN|NAMESPACE|MONTHS|MONTH|MODIFIES|MODE|MIXED|MIRROR|MINVALUE|MINUTES|MINUTE|MINPCTUSED|MICROSECONDS|MICROSECOND|MERGE|MAXVALUE|MATERIALIZED|MATCHED|MASK|MAINTAINED|LOOP|LONG|LOGGED|LOG|LOCKSIZE|LOCK|LOCATOR|LOCATION|LOCALTIMESTAMP|LOCALTIME|LOCALDATE|LOCAL|LISTAGG|LINKTYPE|LIMIT|LIKE|LEVEL2|LEFT|LEAVE|LEAD|LATERAL|LAST_VALUE|LANGUAGE|LAG|LABEL|KEYS|KEY|KEEP|JSON_VALUE|JSON_TABLE|JSON_QUERY|JSON_OBJECTAGG|JSON_OBJECT|JSON_EXISTS|JSON_ARRAYAGG|JSON_ARRAY|JSON|JOIN|JAVA|ITERATE|ISOLATION|ISNULL|IS|INTO|INTERSECT|INTERPRET|INTEGRITY|INSERTING|INSERT|INSENSITIVE|INOUT|INNER|INLINE|INHERIT|INFINITY|INF|INDICATOR|INDEXBP|INDEX|INCREMENT|INCLUSIVE|INCLUDING|INCLUDE|IN|IMPLICITLY|IMMEDIATE|IGNORE|IF|IDENTITY|ID|HOURS|HOUR|HOLD|HINT|HAVING|HASH_ROW|HASHED_VALUE|HASH|HANDLER|GROUP|GRAPHIC|GRANT|GOTO|GO|GLOBAL|GET|GENERATED|GENERAL|GBPCACHE|FUNCTION|FULL|FROM|FREEPAGE|FREE|FOUND|FORMAT|FOREIGN|FOR|FIRST_VALUE|FINAL|FILE|FIELDPROC|FETCH|FENCED|FALSE|EXTRACT|EXTERNAL|EXTEND|EXIT|EXISTS|EXECUTE|EXCLUSIVE|EXCLUDING|EXCEPTION|EXCEPT|EVERY|ESCAPE|ERROR|ENFORCED|ENDING|END|ENCRYPTION|ENCODING|ENABLE|EMPTY|ELSEIF|ELSE|EACH|DYNAMIC|DROP|DOUBLE|DOCUMENT|DO|DISTINCT|DISCONNECT|DISALLOW|DISABLE|DIAGNOSTICS|DETERMINISTIC|DETACH|DESCRIPTOR|DESCRIBE|DESC|DENSE_RANK|DENSERANK|DELETING|DELETE|DEFINITION|DEFINE|DEFER|DEFAULTS|DEFAULT|DECLARE|DEALLOCATE|DEACTIVATE|DBPARTITIONNUM|DBPARTITIONNAME|DBINFO|DB2SQL|DB2GENRL|DB2GENERAL|DAYS|DAY|DATE|DATAPARTITIONNUM|DATAPARTITIONNAME|DATABASE|DATA|CYCLE|CURSOR|CURRENT_USER|CURRENT_TIMEZONE|CURRENT_TIMESTAMP|CURRENT_TIME|CURRENT_SERVER|CURRENT_SCHEMA|CURRENT_PATH|CURRENT_DATE|CURRENT|CUME_DIST|CUBE|CROSS|CREATEIN|CREATE|COUNT_BIG|COUNT|COPY|CONTINUE|CONTENT|CONTAINS|CONSTRAINT|CONSTANT|CONNECT_BY_ROOT|CONNECTION|CONNECT|CONDITION|CONCURRENT|CONCAT|COMPRESS|COMPARISONS|COMPACT|COMMIT|COMMENT|COLUMN|COLLECTION|COLLECT|CLUSTER|CLOSE|CL|CHECK|CHARACTER|CHAR|CCSID|CAST|CASE|CARDINALITY|CALLED|CALL|CACHE|BY|BUFFERPOOL|BSON|BOOLEAN|BIT|BIND|BINARY|BETWEEN|BEGIN|BEFORE|AUTONOMOUS|AUTHORIZATION|ATTRIBUTES|ATTACH|ATOMIC|AT|ASSOCIATE|ASENSITIVE|ASC|AS|ARRAY_TRIM|ARRAY_AGG|ARRAY|APPLNAME|APPEND|ANY|AND|ALTER|ALLOW|ALLOCATE|ALL|ALIAS|ADD|ACTIVATE|ACTION|ACCTNG|ACCORDING|ABSENT)\\b',
          name: 'keyword.operator.rpgle.sql.reserved'
        },
        {include: '#sqlvariables'},
        {match: '\\b[0-9]+(\\.[0-9]+)?\\b', name: 'constant.numeric.rpgle.sql'},
        {
          match: '(\\|\\||\\*\\*|<>|<=|>=|[¬!][=<>]|[=<>+\\-*/])',
          name: 'keyword.operator.rpgle.sql'
        },
        {include: 'source.sql'}
      ]
    },
    sqlvariables: {
      patterns: [
        {
          match:
            '(?i)\\b(SQLWRN|SQLWNA|SQLWN9|SQLWN8|SQLWN7|SQLWN6|SQLWN5|SQLWN4|SQLWN3|SQLWN2|SQLWN1|SQLWN0|SQLWARN|SQLSTT|SQLSTATE|SQLCODE|SQLCOD|SQLERRP|SQLERRML|SQLERRMC|SQLERRD|SQLERR|SQLERP|SQLERM|SQLERL|SQLER6|SQLER5|SQLER4|SQLER3|SQLER2|SQLER1)\\b',
          name: 'variable.language.rpgle.sql'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: "(?i)x'",
          end: "'|[^-+\\s]\\s*$|[^-+\\s]\\s*(?<=^.{80})",
          name: 'string.other.rpgle.hex',
          patterns: [
            {match: '[-+](?=\\s*$)', name: 'keyword.other.rpgle.continuation'},
            {
              captures: {1: {name: 'keyword.other.rpgle.continuation'}},
              match: '([-+])\\s*(?<=^.{80})'
            },
            {match: '^\\s*//.*', name: 'comment.line.rpgle.free'}
          ]
        },
        {
          begin: "'",
          end: "'|[^-+\\s]\\s*$|[^-+\\s]\\s*(?<=^.{80})",
          name: 'string.quoted.single.rpgle',
          patterns: [
            {match: '[-+](?=\\s*$)', name: 'keyword.other.rpgle.continuation'},
            {
              captures: {1: {name: 'keyword.other.rpgle.continuation'}},
              match: '([-+])\\s*(?<=^.{80})'
            },
            {match: '^\\s*//.*', name: 'comment.line.rpgle.free'}
          ]
        }
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
            {include: '#fixedfreeformat'},
            {include: '#fixedfreeSQL'}
          ]
        },
        {match: '(?i)\\/END-FREE\\b', name: 'keyword.control.rpgle.precompiler'}
      ]
    }
  },
  scopeName: 'source.rpgle'
}

export default grammar
