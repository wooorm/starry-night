// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/spgennard/vscode_cobol>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.jcl'],
  names: ['jcl'],
  patterns: [
    {match: '^//\\*.*$', name: 'comment.line.jcl'},
    {
      begin:
        '(?i:DD\\s+\\*$|DD\\s+\\*.*[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$)',
      beginCaptures: {0: {name: 'keyword.jcl'}},
      end: '(?i:(//[A-Za-z0-9\\$\\#@\\.]*)|/\\*)',
      endCaptures: {0: {name: 'variable.other.jcl'}},
      name: 'meta.symbol.jcl'
    },
    {
      captures: {
        1: {name: 'variable.other.jcl'},
        2: {name: 'keyword.other.jcl'},
        3: {name: 'variable.other.jcl'}
      },
      match:
        '(//[A-Za-z0-9\\$\\#@\\.]*)\\s+(COMMAND|CNTL|ENCNTL|EXEC|IF|THEN|ELSE|ENDIF|INCLUDE|JCLIB|JOB|OUTPUT|PEND|UTPROC|PROC|SET|XMIT)'
    },
    {match: '(^/\\*JOBPARM)', name: 'keyword.other.jcl'},
    {
      captures: {
        1: {name: 'keyword.other.jcl'},
        2: {name: 'keyword.operator.jcl'}
      },
      match:
        '(?<![a-zA-Z])(BURST|B|BYTES|M|CARDS|C|FORMS|F|LINECT|K|LINES|L|NOLOG|J|PAGES|G|PROCLIB|P|RESTART|E|ROOM|R|SYSAFF|S|TIME|T)(=)'
    },
    {match: '(^/\\*OUTPUT)', name: 'keyword.other.jcl'},
    {
      captures: {
        1: {name: 'variable.other.jcl'},
        2: {name: 'keyword.operator.jcl'}
      },
      match:
        '(?<![a-zA-Z])(BURST|CHARS|CKPTLNS|CKPTPGS|COMPACT|COPIES|COPYG|DEST|FCB|FLASHC|FLASH|FORMS|B|X|E|P|Z|N|G|D|C|Q|O|F)(=)'
    },
    {
      captures: {
        1: {name: 'keyword.other.jcl'},
        2: {name: 'token.info-token.jcl'}
      },
      match: '(^/\\*MESSAGE)\\s+(.*$)'
    },
    {
      captures: {
        1: {name: 'keyword.other.jcl'},
        2: {name: 'variable.parameter.jcl'}
      },
      match: '(^/\\*(?i:NETACCT|NOTIFY|SETUP|SIGNOFF|SIGNON|XEQ|XMIT))\\s+(.*$)'
    },
    {
      captures: {
        1: {name: 'keyword.other.jcl'},
        2: {name: 'token.info-token.jcl'},
        3: {name: 'token.error-token.jcl'}
      },
      match: '(^/\\*PRIORITY)\\s+([a-zA-Z0-9])(.*$)'
    },
    {
      captures: {
        1: {name: 'keyword.other.jcl'},
        2: {name: 'variable.other.jcl'},
        3: {name: 'meta.symbol.jcl'}
      },
      match: '(^/\\*ROUTE)\\s+(PRINT|PUNCH|XEQ)\\s+(.*$)'
    },
    {match: '^//\\s+', name: 'keyword.continuation.jcl'},
    {match: "'.*'", name: 'string.quoted.single.jcl'},
    {
      captures: {
        0: {name: 'variable.language.jcl'},
        1: {name: 'keyword.operator.jcl'}
      },
      match:
        '(?<![a-zA-Z])(?i:DSN|DISP|DCB|UNIT|VOL|SYSOUT|SPACE|RECFM|LRECL)(=)'
    },
    {
      captures: {
        1: {name: 'variable.exec.language.jcl'},
        2: {name: 'keyword.operator.jcl'}
      },
      match:
        '(?<![a-zA-Z])(?i:PGM|UTPROC|PROC|PARM|ADDRSPC|ACCT|TIME|REGION|COND|DSNME|DATAC)(=)',
      name: 'variable.language.jcl'
    },
    {
      captures: {
        1: {name: 'constant.language.job.jcl'},
        2: {name: 'keyword.operator.jcl'}
      },
      match:
        '(?<![a-zA-Z])(?i:ADDSPC|BYTES|CARDS|DSENQSHR|GROUP|JESLOG|JOBRC|LINES|MEMLIMIT|MSGCLASS|MSGLEVEL|NOTIFY|PAGES|PASSWORD|PERFORM|PRTY|RD|REGION|RESTART|SECLABEL|SCHENV|SYAFF|SYSTEM|TIME|TYPRUN|UJOBCORR|USER|CLASS|UID)(=|$)',
      name: 'variable.language.job.jcl'
    },
    {
      captures: {1: {name: 'constant.language.disp.jcl'}},
      match:
        '(?<![a-zA-Z])(?i:NEW|DELETE|OLD|KEEP|KEEP|SHR|PASS|CATLG|MOD|CATLG|UNCATLG)(=|$)',
      name: 'variable.language.jcl'
    },
    {
      captures: {1: {name: 'constant.language.typrun.jcl'}},
      match: '(?i:HOLD|JCLHOLD|SCAN)',
      name: 'variable.language.typrun.jcl'
    },
    {
      captures: {1: {name: 'constant.language.dbc.jcl'}},
      match:
        '(?i:BFALN|BFTEK|BLKSIZE|BUFIN|BUFL|BUFMAX|BUFNO|BUFOFF|BUFOUT|BUFSIZE|CPRI|CYLOFL|DEN|DIAGNS|DSORG|EROPT|FUNC|GNCP|INTVL|IPL|TXID|KEYLEN|LIMCT|LRECL|MODE|NCP|NTM|OPTCD|PCI|PRTSP|RECFM|RESERVE|RKP|STACK|THRESH|TRTCH)',
      name: 'variable.language.dcb.jcl'
    },
    {
      captures: {1: {name: 'constant.language.dbc_generic.jcl'}},
      match:
        '(?<![-_\\.a-zA-Z])(?i:BLKSIZE|DCB|DDname|DEST|DISP|DSNAME|DSNTYPE|EXPDT|KEYLEN|LABEL|LIKE|LRECL|OUTLIM|OUTPUT|RECFM|RECORG|RETPD|SPACE|SYSOUT|UNIT|VOLUME)',
      name: 'variable.language.dcb.jcl'
    },
    {match: '(?i:COND\\..*=|COND=)', name: 'keyword.control.conditional.jcl'},
    {
      match: '(?<![a-zA-Z])(?i:LT|GT|GE|EQ|LE|NE|EVEN|ONLY)(?=\\)|,)',
      name: 'keyword.operator.comparison.jcl'
    },
    {match: '^(//[A-Za-z0-9\\$\\#@\\.]*)', name: 'variable.other.jcl'},
    {match: '(?i:DD\\s+)', name: 'keyword.other.jcl'}
  ],
  scopeName: 'source.jcl'
}

export default grammar
