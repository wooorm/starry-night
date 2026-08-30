// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/fguitton/vscode-gedcom>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ged'],
  names: ['gedcom'],
  patterns: [{include: '#line'}],
  repository: {
    'bad-enum-line': {
      patterns: [
        {
          captures: {
            2: {name: 'constant.numeric.integer.level.gedcom'},
            3: {patterns: [{include: '#tag'}]},
            4: {name: 'invalid.illegal.value.gedcom'}
          },
          match:
            '^(\\s*)(\\d+)[ ]+(SEX)[ ](?!(?i:M|F|U|X)[ ]*$)(?![_A-Za-z][A-Za-z0-9]*:)(?!_)(.+)$',
          name: 'meta.line.gedcom'
        },
        {
          captures: {
            2: {name: 'constant.numeric.integer.level.gedcom'},
            3: {patterns: [{include: '#tag'}]},
            4: {name: 'invalid.illegal.value.gedcom'}
          },
          match:
            '^(\\s*)(\\d+)[ ]+(QUAY)[ ](?!(?i:[0-3])[ ]*$)(?![_A-Za-z][A-Za-z0-9]*:)(?!_)(.+)$',
          name: 'meta.line.gedcom'
        },
        {
          captures: {
            2: {name: 'constant.numeric.integer.level.gedcom'},
            3: {patterns: [{include: '#tag'}]},
            4: {name: 'invalid.illegal.value.gedcom'}
          },
          match:
            '^(\\s*)(\\d+)[ ]+(PEDI)[ ](?!(?i:ADOPTED|BIRTH|FOSTER|SEALING|OTHER)[ ]*$)(?![_A-Za-z][A-Za-z0-9]*:)(?!_)(.+)$',
          name: 'meta.line.gedcom'
        },
        {
          captures: {
            2: {name: 'constant.numeric.integer.level.gedcom'},
            3: {patterns: [{include: '#tag'}]},
            4: {name: 'invalid.illegal.value.gedcom'}
          },
          match:
            '^(\\s*)(\\d+)[ ]+(RESN)[ ](?!(?i:(?:CONFIDENTIAL|LOCKED|PRIVACY)(?:[ ]*,[ ]*(?:CONFIDENTIAL|LOCKED|PRIVACY))*)[ ]*$)(?![_A-Za-z][A-Za-z0-9]*:)(?!_)(.+)$',
          name: 'meta.line.gedcom'
        }
      ]
    },
    'bad-format-line': {
      patterns: [
        {
          captures: {
            2: {name: 'constant.numeric.integer.level.gedcom'},
            3: {patterns: [{include: '#tag'}]},
            4: {name: 'invalid.illegal.value.gedcom'}
          },
          match:
            '^(\\s*)(\\d+)[ ]+(AGE)[ ](?!(?i:(?:[<>][ ]*)?\\d+[ ]*[ymwd](?:[ ]*\\d+[ ]*[ymwd])*|(?i:CHILD|INFANT|STILLBORN))[ ]*$)(?![_A-Za-z][A-Za-z0-9]*:)(?!_)(.+)$',
          name: 'meta.line.gedcom'
        },
        {
          captures: {
            2: {name: 'constant.numeric.integer.level.gedcom'},
            3: {patterns: [{include: '#tag'}]},
            4: {name: 'invalid.illegal.value.gedcom'}
          },
          match:
            '^(\\s*)(\\d+)[ ]+(TIME)[ ](?!(?i:\\d{1,2}:\\d{2}(?::\\d{2}(?:\\.\\d+)?)?(?:[ ]*(?i:AM|PM))?)[ ]*$)(?![_A-Za-z][A-Za-z0-9]*:)(?!_)(.+)$',
          name: 'meta.line.gedcom'
        }
      ]
    },
    'bad-integer-line': {
      patterns: [
        {
          captures: {
            2: {name: 'constant.numeric.integer.level.gedcom'},
            3: {patterns: [{include: '#tag'}]},
            4: {name: 'invalid.illegal.value.gedcom'}
          },
          match:
            '^(\\s*)(\\d+)[ ]+(ANCE|DESC|HEIGHT|LEFT|NCHI|NMR|TOP|WIDTH)[ ](?!(?i:\\d+)[ ]*$)(?![_A-Za-z][A-Za-z0-9]*:)(?!_)(.+)$',
          name: 'meta.line.gedcom'
        }
      ]
    },
    'broken-pointer-line': {
      patterns: [
        {
          captures: {
            2: {name: 'constant.numeric.integer.level.gedcom'},
            3: {patterns: [{include: '#tag'}]},
            4: {name: 'invalid.illegal.pointer.gedcom'}
          },
          match:
            '^(\\s*)(\\d+)[ ]+(ALIA|ANCI|ASSO|CHIL|DESI|FAMC|FAMS)[ ](.+)$',
          name: 'meta.line.gedcom'
        }
      ]
    },
    'continuation-line': {
      patterns: [
        {
          captures: {
            2: {name: 'constant.numeric.integer.level.gedcom'},
            3: {name: 'keyword.control.continuation.gedcom'},
            4: {
              name: 'string.unquoted.payload.gedcom',
              patterns: [{include: '#payload-escapes'}]
            }
          },
          match: '^(\\s*)(\\d+)[ ]+(CONC|CONT)(?:[ ](.*))?$',
          name: 'meta.line.continuation.gedcom'
        }
      ]
    },
    date: {
      patterns: [
        {match: '@#[^@]*@', name: 'constant.language.calendar.gedcom'},
        {
          match: '\\b(?:GREGORIAN|JULIAN|HEBREW|FRENCH_R|ROMAN|UNKNOWN)\\b',
          name: 'constant.language.calendar.gedcom'
        },
        {
          match: '\\b(?:FROM|TO|BEF|AFT|BET|AND|ABT|CAL|EST|INT)\\b',
          name: 'keyword.operator.date.gedcom'
        },
        {
          match:
            '\\b(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC|TSH|CSH|KSL|TVT|SHV|ADR|ADS|NSN|IYR|SVN|TMZ|AAV|ELL|VEND|BRUM|FRIM|NIVO|PLUV|VENT|GERM|FLOR|PRAI|MESS|THER|FRUC|COMP)\\b',
          name: 'constant.language.month.gedcom'
        },
        {
          match: '\\b(?:BCE|BC|B\\.C\\.)',
          name: 'constant.language.epoch.gedcom'
        },
        {match: '\\b\\d+\\b', name: 'constant.numeric.date.gedcom'}
      ]
    },
    'date-line': {
      patterns: [
        {
          captures: {
            2: {name: 'constant.numeric.integer.level.gedcom'},
            3: {name: 'entity.name.tag.gedcom'},
            4: {
              name: 'string.unquoted.payload.gedcom',
              patterns: [{include: '#date'}]
            }
          },
          match: '^(\\s*)(\\d+)[ ]+(DATE|SDATE)(?:[ ](.*))?$',
          name: 'meta.line.date.gedcom'
        }
      ]
    },
    'invalid-line': {
      patterns: [{match: '^(?!\\s*$).*$', name: 'invalid.illegal.line.gedcom'}]
    },
    line: {
      patterns: [
        {include: '#record-line'},
        {include: '#continuation-line'},
        {include: '#date-line'},
        {include: '#name-line'},
        {include: '#pointer-line'},
        {include: '#broken-pointer-line'},
        {include: '#bad-enum-line'},
        {include: '#bad-integer-line'},
        {include: '#bad-format-line'},
        {include: '#tag-line'},
        {include: '#invalid-line'}
      ]
    },
    'name-line': {
      patterns: [
        {
          captures: {
            2: {name: 'constant.numeric.integer.level.gedcom'},
            3: {patterns: [{include: '#tag'}]},
            4: {
              name: 'string.unquoted.payload.gedcom',
              patterns: [{include: '#personal-name'}]
            }
          },
          match:
            '^(\\s*)(\\d+)[ ]+(NAME|_MARNM|_AKA|_AKAN|_BIRN|_ADPN)(?:[ ](.*))?$',
          name: 'meta.line.name.gedcom'
        }
      ]
    },
    'payload-escapes': {
      patterns: [
        {match: '@#[^@]*@', name: 'constant.language.escape.gedcom'},
        {match: '@@', name: 'constant.character.escape.gedcom'}
      ]
    },
    'personal-name': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.surname.begin.gedcom'},
            2: {name: 'string.quoted.other.surname.gedcom'},
            3: {name: 'punctuation.definition.surname.end.gedcom'}
          },
          match: '(/)([^/]*)(/)'
        },
        {include: '#payload-escapes'}
      ]
    },
    'pointer-line': {
      patterns: [
        {
          captures: {
            2: {name: 'constant.numeric.integer.level.gedcom'},
            3: {patterns: [{include: '#tag'}]},
            4: {patterns: [{include: '#xref-reference'}]}
          },
          match:
            '^(\\s*)(\\d+)[ ]+([A-Za-z_][A-Za-z0-9_]*)[ ](@[^@#\\s][^@\\n]*@)[ ]*$',
          name: 'meta.line.pointer.gedcom'
        }
      ]
    },
    'record-line': {
      patterns: [
        {
          captures: {
            2: {name: 'constant.numeric.integer.level.gedcom'},
            3: {patterns: [{include: '#xref-definition'}]},
            4: {patterns: [{include: '#tag'}]},
            5: {
              name: 'string.unquoted.payload.gedcom',
              patterns: [{include: '#payload-escapes'}]
            }
          },
          match:
            '^(\\s*)(\\d+)[ ]+(@[^@#\\s][^@\\n]*@)[ ]+([A-Za-z_][A-Za-z0-9_]*)(?:[ ](.*))?$',
          name: 'meta.line.record.gedcom'
        }
      ]
    },
    tag: {
      patterns: [
        {
          match: '\\b(?:CHAR|DEST|FORM|GEDC|HEAD|SCHMA|TAG|TRLR|VERS)\\b',
          name: 'keyword.control.envelope.gedcom'
        },
        {
          match: '\\b(?:FAM|INDI|OBJE|REPO|SNOTE|SOUR|SUBM)\\b',
          name: 'entity.name.type.record.gedcom'
        },
        {
          match:
            '\\b(?:ADOP|ANUL|BAPM|BARM|BASM|BIRT|BLES|BURI|CENS|CHR|CHRA|CONF|CREM|DEAT|DIV|DIVF|EMIG|ENGA|FCOM|GRAD|IMMI|MARB|MARC|MARL|MARR|MARS|NATU|ORDN|PROB|RETI|WILL)\\b',
          name: 'support.function.event.gedcom'
        },
        {
          match:
            '\\b(?:CAST|DSCR|EDUC|EVEN|FACT|IDNO|NAME|NATI|NCHI|NMR|OCCU|PROP|RELI|RESI|SEX|SSN|TITL)\\b',
          name: 'entity.name.tag.attribute.gedcom'
        },
        {
          match: '\\b(?:ALIA|ANCI|ASSO|CHIL|DESI|FAMC|FAMS|HUSB|WIFE)\\b',
          name: 'variable.other.linkage.gedcom'
        },
        {
          match: '\\b(?:ABBR|AUTH|CALN|DATA|MEDI|NOTE|PAGE|PUBL|QUAY|TEXT)\\b',
          name: 'markup.quote.evidence.gedcom'
        },
        {
          match: '\\b(?:CHAN|CREA|EXID|REFN|RESN|RIN|UID)\\b',
          name: 'entity.name.tag.administrative.gedcom'
        },
        {
          match:
            '\\b(?:ADDR|ADR1|ADR2|ADR3|AFN|AGE|AGNC|ANCE|BAPL|CAUS|CITY|CONL|COPR|CORP|CROP|CTRY|DATE|DESC|EMAIL|ENDL|FAMF|FAX|FILE|FONE|GIVN|HEIGHT|INIL|LANG|LATI|LEFT|LONG|MAP|MIME|NICK|NO|NPFX|NSFX|ORDI|PEDI|PHON|PHRASE|PLAC|POST|RELA|RFN|ROLE|ROMN|SDATE|SLGC|SLGS|SPFX|STAE|STAT|SUBN|SURN|TEMP|TIME|TOP|TRAN|TYPE|WIDTH|WWW)\\b',
          name: 'entity.name.tag.gedcom'
        },
        {match: '_[A-Za-z0-9_]*', name: 'entity.name.tag.extension.gedcom'},
        {match: '[A-Za-z][A-Za-z0-9_]*', name: 'entity.name.tag.unknown.gedcom'}
      ]
    },
    'tag-line': {
      patterns: [
        {
          captures: {
            2: {name: 'constant.numeric.integer.level.gedcom'},
            3: {patterns: [{include: '#tag'}]},
            4: {
              name: 'string.unquoted.payload.gedcom',
              patterns: [{include: '#payload-escapes'}]
            }
          },
          match: '^(\\s*)(\\d+)[ ]+([A-Za-z_][A-Za-z0-9_]*)(?:[ ](.*))?$',
          name: 'meta.line.gedcom'
        }
      ]
    },
    'xref-definition': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.xref.begin.gedcom'},
            2: {name: 'entity.name.type.xref.gedcom'},
            3: {name: 'punctuation.definition.xref.end.gedcom'}
          },
          match: '(@)([^@#\\s][^@\\n]*)(@)'
        }
      ]
    },
    'xref-reference': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.xref.begin.gedcom'},
            2: {name: 'constant.language.void.gedcom'},
            3: {name: 'punctuation.definition.xref.end.gedcom'}
          },
          match: '(@)(VOID)(@)'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.xref.begin.gedcom'},
            2: {name: 'variable.other.xref.gedcom'},
            3: {name: 'punctuation.definition.xref.end.gedcom'}
          },
          match: '(@)([^@#\\s][^@\\n]*)(@)'
        }
      ]
    }
  },
  scopeName: 'source.gedcom'
}

export default grammar
