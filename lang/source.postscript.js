// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/Atom-PostScript>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ps', '.eps', '.epsi', '.pfa'],
  injections: {
    'L:source.postscript meta.ai-prefs.postscript - (comment | string | source.embedded | text.embedded)':
      {
        patterns: [
          {
            begin:
              '^\\s*(/(?:\\\\.|[^()<>\\[\\]{}/%\\s])*) ((\\[) (?!0\\b)(\\d+)(?:$|\\r))',
            beginCaptures: {
              1: {patterns: [{include: '$self'}]},
              2: {name: 'meta.array.postscript'},
              3: {name: 'punctuation.definition.array.begin.postscript'},
              4: {name: 'constant.numeric.postscript'}
            },
            contentName: 'meta.array.postscript',
            end: '^\\s*(\\])|\\G(?!$)|(?!\\G)^(?!\\s*(?:\\]|[A-Fa-f0-9]+$))',
            endCaptures: {
              0: {name: 'meta.array.postscript'},
              1: {name: 'punctuation.definition.array.end.postscript'}
            },
            name: 'meta.obfuscated-setting.ai-prefs.postscript',
            patterns: [
              {
                match: '[A-Fa-f0-9]+',
                name: 'string.other.hexadecimal.postscript'
              }
            ]
          },
          {
            captures: {
              1: {name: 'punctuation.definition.name.postscript'},
              2: {
                patterns: [
                  {
                    captures: {
                      1: {
                        name: 'punctuation.definition.escape.backslash.postscript'
                      }
                    },
                    match: '(\\\\).',
                    name: 'constant.character.escape.postscript'
                  }
                ]
              }
            },
            match: '(/)((?:\\\\.|[^()<>\\[\\]{}/%\\s])*)',
            name: 'variable.other.constant.literal.postscript'
          },
          {match: '[0-9]+L', name: 'constant.numeric.integer.long.postscript'}
        ]
      },
    'L:source.postscript meta.document.pdf - (meta.encrypted-source | source.embedded | text.embedded)':
      {
        patterns: [
          {
            begin: '(?:^|(?<=>>)\\s*)(?=stream$)',
            end: 'endstream|(?=endobj\\b)',
            endCaptures: {0: {name: 'keyword.control.stream.end.pdf'}},
            name: 'meta.encrypted-source.stream.pdf',
            patterns: [
              {
                begin: '\\G(stream)\\s*$\\s*',
                beginCaptures: {1: {name: 'keyword.control.stream.begin.pdf'}},
                end: '(?=endstream|(?=endobj\\b))',
                patterns: [
                  {
                    begin: '(<\\?xpacket(?=\\s)[^>]+\\?>)(?=$|<x:xmpmeta)',
                    beginCaptures: {
                      1: {
                        name: 'text.embedded.xml',
                        patterns: [{include: 'text.xml'}]
                      }
                    },
                    contentName: 'text.embedded.xml',
                    end: '(<\\?xpacket(?=\\s)[^>]*end\\b[^>]*\\?>)|(?=\\s*(?:endstream|endobj\\b))',
                    endCaptures: {
                      1: {
                        name: 'text.embedded.xml',
                        patterns: [{include: 'text.xml'}]
                      }
                    },
                    patterns: [{include: 'text.xml'}]
                  },
                  {
                    begin: '(?!endstream)[!-uz]{50,80}\\s*$',
                    end: '~>|(?=\\s*(?:endstream|endobj\\b))',
                    endCaptures: {
                      0: {name: 'punctuation.definition.string.end.pdf'}
                    },
                    name: 'string.other.base85.pdf'
                  },
                  {
                    begin:
                      '(?!endstream|[!-uz]{50,80}\\s*$)(?:(?<=[\\n\\r]|\\G|^))(?=.)',
                    contentName: 'sublimelinter.gutter-mark',
                    end: '(?=\\s*(?:endstream|endobj\\b))',
                    name: 'string.other.raw.binary.pdf'
                  }
                ]
              }
            ]
          },
          {
            captures: {
              1: {name: 'keyword.control.object.begin.pdf'},
              2: {name: 'keyword.control.object.end.pdf'}
            },
            match:
              '(?<![^/\\s{}()<>\\[\\]%])\\b(obj)\\s*(?=<<|$)|(?<=^|\\n|>>)(endobj)'
          },
          {
            match:
              '(?<![^/\\s{}()<>\\[\\]%])\\b(trailer|startxref)(?![^/\\s{}()<>\\[\\]%])',
            name: 'keyword.control.$1.pdf'
          }
        ]
      },
    'L:source.postscript meta.procedure.postscript - (comment | string | text.embedded)':
      {
        patterns: [
          {
            captures: {1: {name: 'keyword.operator.postscript'}},
            match: '\\s*(?<=^|\\G|[\\[{\\s])\\b(currentfile)\\b(?=[\\[{\\s])'
          }
        ]
      }
  },
  names: ['postscript', 'postscr'],
  patterns: [
    {
      begin: '\\A(?=%PDF)',
      end: '(?=A)B',
      name: 'meta.document.pdf',
      patterns: [{include: '#main'}]
    },
    {
      begin:
        '\\A(?=/(?:(?:Menus|collection1|precision) {|textImportantVisualLinesSnapping \\d)(?:\\r|$))',
      end: '(?=A)B',
      name: 'meta.ai-prefs.postscript',
      patterns: [{include: '#main'}]
    },
    {include: '#main'}
  ],
  repository: {
    array: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.array.begin.postscript'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.array.end.postscript'}},
      name: 'meta.array.postscript',
      patterns: [{include: '#main'}]
    },
    base85: {
      begin: '<~',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.postscript'}
      },
      end: '~>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.postscript'}},
      name: 'string.other.base85.postscript',
      patterns: [
        {
          match: '(?:[^!-uz\\s]|~(?!>))++',
          name: 'invalid.illegal.base85.char.postscript'
        }
      ]
    },
    comment: {
      patterns: [
        {
          match: '^[ \\t]+(?=%)',
          name: 'punctuation.whitespace.comment.leading.postscript'
        },
        {include: '#dsc'},
        {
          begin: '%',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.postscript'}
          },
          end: '(?=$|\\r|\\f)',
          name: 'comment.line.percentage.postscript'
        }
      ]
    },
    compatibility: {
      match:
        '(?x) (?<![^/\\s{}()<>\\[\\]%]) (?:\\b|(?=\\.))\n( 11x17tray\n| 11x17\n| a3tray\n| a3\n| a4small\n| a4tray\n| a4\n| accuratescreens\n| appletalktype\n| b5tray\n| b5\n| buildtime\n| byteorder\n| checkpassword\n| checkscreen\n| defaulttimeouts\n| devdismount\n| devforall\n| devformat\n| devmount\n| devstatus\n| diskonline\n| diskstatus\n| doprinterrors\n| dostartpage\n| dosysstart\n| duplexmode\n| emulate\n| firstside\n| hardwareiomode\n| initializedisk\n| jobname\n| jobtimeout\n| ledgertray\n| ledger\n| legaltray\n| legal\n| lettersmall\n| lettertray\n| letter\n| manualfeedtimeout\n| manualfeed\n| margins\n| mirrorprint\n| newsheet\n| note\n| pagecount\n| pagemargin\n| pageparams\n| pagestackorder\n| printername\n| processcolors\n| ramsize\n| realformat\n| resolution\n| sccbatch\n| sccinteractive\n| setaccuratescreens\n| setdefaulttimeouts\n| setdoprinterrors\n| setdostartpage\n| setdosysstart\n| setduplexmode\n| sethardwareiomode\n| setjobtimeout\n| setmargins\n| setmirrorprint\n| setpagemargin\n| setpageparams\n| setpagestackorder\n| setpage\n| setprintername\n| setresolution\n| setsccbatch\n| setsccinteractive\n| setsoftwareiomode\n| settumble\n| setuserdiskpercent\n| softwareiomode\n| tumble\n| userdiskpercent\n| waittimeout\n) \\b (?![^/\\s{}()<>\\[\\]%])',
      name: 'keyword.operator.level-1.compatibility.postscript'
    },
    dictionary: {
      begin: '<<',
      beginCaptures: {
        0: {name: 'punctuation.definition.dictionary.begin.postscript'}
      },
      end: '>>',
      endCaptures: {
        0: {name: 'punctuation.definition.dictionary.end.postscript'}
      },
      name: 'meta.dictionary.postscript',
      patterns: [{include: '#main'}]
    },
    dsc: {
      begin:
        '(?x) ^ (%%)\n( BeginBinary\n| BeginCustomColor\n| BeginData\n| BeginDefaults\n| BeginDocument\n| BeginEmulation\n| BeginExitServer\n| BeginFeature\n| BeginFile\n| BeginFont\n| BeginObject\n| BeginPageSetup\n| BeginPaperSize\n| BeginPreview\n| BeginProcSet\n| BeginProcessColor\n| BeginProlog\n| BeginResource\n| BeginSetup\n| BoundingBox\n| CMYKCustomColor\n| ChangeFont\n| Copyright\n| CreationDate\n| Creator\n| DocumentCustomColors\n| DocumentData\n| DocumentFonts\n| DocumentMedia\n| DocumentNeededFiles\n| DocumentNeededFonts\n| DocumentNeededProcSets\n| DocumentNeededResources\n| DocumentPaperColors\n| DocumentPaperForms\n| DocumentPaperSizes\n| DocumentPaperWeights\n| DocumentPrinterRequired\n| DocumentProcSets\n| DocumentProcessColors\n| DocumentSuppliedFiles\n| DocumentSuppliedFonts\n| DocumentSuppliedProcSets\n| DocumentSuppliedResources\n| EOF\n| Emulation\n| EndBinary\n| EndComments\n| EndCustomColor\n| EndData\n| EndDefaults\n| EndDocument\n| EndEmulation\n| EndExitServer\n| EndFeature\n| EndFile\n| EndFont\n| EndObject\n| EndPageSetup\n| EndPaperSize\n| EndPreview\n| EndProcSet\n| EndProcessColor\n| EndProlog\n| EndResource\n| EndSetup\n| ExecuteFile\n| Extensions\n| Feature\n| For\n| IncludeDocument\n| IncludeFeature\n| IncludeFile\n| IncludeFont\n| IncludeProcSet\n| IncludeResource\n| LanguageLevel\n| OperatorIntervention\n| OperatorMessage\n| Orientation\n| PageBoundingBox\n| PageCustomColors\n| PageFiles\n| PageFonts\n| PageMedia\n| PageOrder\n| PageOrientation\n| PageProcessColors\n| PageRequirements\n| PageResources\n| PageTrailer\n| Pages\n| Page\n| PaperColor\n| PaperForm\n| PaperSize\n| PaperWeight\n| ProofMode\n| RGBCustomColor\n| Requirements\n| Routing\n| Title\n| Trailer\n| VMlocation\n| VMusage\n| Version\n| \\+\n| \\?BeginFeatureQuery\n| \\?BeginFileQuery\n| \\?BeginFontListQuery\n| \\?BeginFontQuery\n| \\?BeginPrinterQuery\n| \\?BeginProcSetQuery\n| \\?BeginQuery\n| \\?BeginResourceListQuery\n| \\?BeginResourceQuery\n| \\?BeginVMStatus\n| \\?EndFeatureQuery\n| \\?EndFileQuery\n| \\?EndFontListQuery\n| \\?EndFontQuery\n| \\?EndPrinterQuery\n| \\?EndProcSetQuery\n| \\?EndQuery\n| \\?EndResourceListQuery\n| \\?EndResourceQuery\n| \\?EndVMStatus\n) (:)? [^\\S\\r\\n]*',
      beginCaptures: {
        0: {name: 'keyword.other.DSC.postscript'},
        1: {name: 'punctuation.definition.keyword.DSC.postscript'},
        3: {name: 'keyword.operator.assignment.key-value.colon.postscript'}
      },
      contentName: 'string.unquoted.DSC.postscript',
      end: '(?=$|\\r|\\f)',
      name: 'meta.Document-Structuring-Comment.postscript'
    },
    embedded: {
      patterns: [
        {
          begin:
            '(?<![^/\\s{}()<>\\[\\]%])\\b(currentfile)\\s+((?=\\S)[^{}%]+?)\\s+(readline)(?!\\s*})\\b(?![^/\\s{}()<>\\[\\]%])(?:$\\s*)?',
          beginCaptures: {
            1: {name: 'keyword.operator.postscript'},
            2: {patterns: [{include: '#main'}]},
            3: {name: 'keyword.operator.postscript'}
          },
          contentName: 'string.unquoted.heredoc.postscript',
          end: '(?!\\G)$'
        },
        {
          begin:
            '(?<![^/\\s{}()<>\\[\\]%])\\b(currentfile)\\s*((/)ASCII85Decode)\\s+(filter)\\b(?![^/\\s{}()<>\\[\\]%])([^}>\\]%]*?(?:exec|image|readstring)\\s*)$\\s*+',
          beginCaptures: {
            1: {name: 'keyword.operator.postscript'},
            2: {name: 'variable.other.literal.postscript'},
            3: {name: 'punctuation.definition.name.postscript'},
            4: {name: 'keyword.operator.postscript'},
            5: {patterns: [{include: '#main'}]}
          },
          contentName: 'string.other.base85.postscript',
          end: '~>|(?=cleartomark|closefile)',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.postscript'}
          },
          name: 'meta.encrypted-source.base85.postscript'
        },
        {
          begin:
            '(?<![^/\\s{}()<>\\[\\]%])\\b(currentfile)\\s+(eexec)(?:$|(?=.*[\\0-\\x08\\x14-\\x31\\x7F\\x80-\\x9F])(?=.{0,3}?[^A-Fa-f0-9]|\\b[A-Fa-f0-9]))',
          beginCaptures: {
            1: {name: 'keyword.operator.postscript'},
            2: {name: 'keyword.operator.postscript'}
          },
          end: '(cleartomark|closefile)\\b(?![^/\\s{}()<>\\[\\]%])|(?<=\\G)(?=[^\\s0-9A-Fa-f])',
          endCaptures: {1: {name: 'keyword.operator.postscript'}},
          name: 'meta.encrypted-source.eexec.postscript',
          patterns: [
            {begin: '\\G(?=\\s*$)', end: '(?=\\s*\\S)'},
            {
              begin: '(?:\\G|(?<=\\n|^))\\s*(?=\\S)',
              end: '(?!\\G)',
              patterns: [
                {
                  begin: '\\G(?!cleartomark|closefile)(?=.{0,3}?[^A-Fa-f0-9])',
                  contentName: 'sublimelinter.gutter-mark',
                  end: '(?=\\s*(?:cleartomark|closefile))',
                  name: 'string.other.raw.binary.postscript'
                },
                {
                  begin:
                    '\\G(?!cleartomark|closefile)(?=\\s{0,3}?(?:[A-Fa-f0-9]))',
                  end: '(?=\\s*[^A-Fa-f0-9\\s]|cleartomark|closefile)',
                  name: 'string.other.hexadecimal.postscript'
                }
              ]
            }
          ]
        }
      ]
    },
    embeddedRow: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.string.end.postscript'}},
          match: '^[!-uz]{0,78}(~>)',
          name: 'string.other.base85.postscript'
        },
        {
          begin:
            '(?x) ^\n(?= [^%\\[]*? \\]\n|   [^%(]*?   \\)\n|   [^%<]*?   >\n|   .*? <(?!~|<) [A-Fa-f0-9]* [^~>A-Fa-f0-9]\n) [!-uz]{60,80} [^\\S\\r\\n]* $',
          end: '^[!-uz]{0,78}(~>)',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.postscript'}
          },
          name: 'string.other.base85.postscript'
        }
      ]
    },
    extensions: {
      patterns: [
        {
          match:
            '(?<![^/\\s{}()<>\\[\\]%])\\b((?:current|set)distillerparams)\\b(?![^/\\s{}()<>\\[\\]%])',
          name: 'keyword.operator.distiller.postscript'
        },
        {
          match:
            '(?x) (?<![^/\\s{}()<>\\[\\]%]) (?:\\b|(?=\\.))\n( \\.activatepathcontrol\n| \\.addcontrolpath\n| \\.begintransparencygroup\n| \\.begintransparencymaskgroup\n| \\.bind\n| \\.bindnow\n| \\.currentalphaisshape\n| \\.currentblendmode\n| \\.currentfillconstantalpha\n| \\.currentopacityalpha\n| \\.currentoverprintmode\n| \\.currentpathcontrolstate\n| \\.currentshapealpha\n| \\.currentstrokeconstantalpha\n| \\.currenttextknockout\n| \\.dicttomark\n| \\.endtransparencygroup\n| \\.endtransparencymask\n| \\.fileposition\n| \\.genordered\n| \\.knownget\n| \\.locksafe\n| \\.max\n| \\.min\n| \\.PDFClose\n| \\.PDFDrawAnnots\n| \\.PDFDrawPage\n| \\.PDFFile\n| \\.PDFInfo\n| \\.PDFInit\n| \\.PDFMetadata\n| \\.PDFPageInfo\n| \\.PDFPageInfoExt\n| \\.PDFStream\n| \\.popdf14devicefilter\n| \\.pushpdf14devicefilter\n| \\.setalphaisshape\n| \\.setblendmode\n| \\.setdebug\n| \\.setfillconstantalpha\n| \\.setopacityalpha\n| \\.setoverprintmode\n| \\.setsafe\n| \\.setshapealpha\n| \\.setstrokeconstantalpha\n| \\.settextknockout\n| \\.shellarguments\n| \\.tempfile\n| %Type1BuildChar\n| %Type1BuildGlyph\n| arccos\n| arcsin\n| copydevice\n| copyscanlines\n| currentdevice\n| dopdfpages\n| finddevice\n| findlibfile\n| findprotodevice\n| getdeviceprops\n| getenv\n| makeimagedevice\n| pdfclose\n| pdfgetpage\n| pdfopen\n| pdfshowpage\n| pdfshowpage_finish\n| pdfshowpage_init\n| pdfshowpage_setpage\n| putdeviceprops\n| runpdf\n| runpdfbegin\n| runpdfend\n| runpdfpagerange\n| setdevice\n) \\b (?![^/\\s{}()<>\\[\\]%])',
          name: 'keyword.operator.ghostscript.postscript'
        }
      ]
    },
    hex: {
      begin: '<',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.postscript'}
      },
      end: '>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.postscript'}},
      name: 'string.other.hexadecimal.postscript',
      patterns: [
        {
          match: '[^>0-9A-Fa-f\\s]+',
          name: 'invalid.illegal.hexadecimal.char.postscript'
        }
      ]
    },
    main: {
      patterns: [
        {include: '#string'},
        {include: '#comment'},
        {include: '#dictionary'},
        {include: '#array'},
        {include: '#procedure'},
        {include: '#base85'},
        {include: '#hex'},
        {include: '#radix'},
        {include: '#number'},
        {include: '#embedded'},
        {include: '#operators'},
        {include: '#extensions'},
        {include: '#compatibility'},
        {include: '#embeddedRow'},
        {include: '#names'}
      ]
    },
    names: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.name.postscript'}},
          match: '(//)[^()<>\\[\\]{}/%\\s]*',
          name: 'variable.other.constant.immediately-evaluated.postscript'
        },
        {
          captures: {1: {name: 'punctuation.definition.name.postscript'}},
          match: '(/)[^()<>\\[\\]{}/%\\s]*',
          name: 'variable.other.constant.literal.postscript'
        },
        {
          match: '[^()<>\\[\\]{}/%\\s]+',
          name: 'variable.other.executable.postscript'
        }
      ]
    },
    number: {
      match:
        '[-+]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[Ee][-+]?\\d+)?(?=$|[\\s\\[\\]{}(/%<])',
      name: 'constant.numeric.postscript'
    },
    operators: {
      patterns: [
        {
          match:
            '(?x) (?<![^/\\s{}()<>\\[\\]%]) \\b\n( GetHalftoneName\n| GetPageDeviceName\n| GetSubstituteCRD\n| StartData\n| StartData\n| addglyph\n| beginbfchar\n| beginbfrange\n| begincidchar\n| begincidrange\n| begincmap\n| begincodespacerange\n| beginnotdefchar\n| beginnotdefrange\n| beginrearrangedfont\n| beginusematrix\n| cliprestore\n| clipsave\n| composefont\n| currentsmoothness\n| currenttrapparams\n| endbfchar\n| endbfrange\n| endcidchar\n| endcidrange\n| endcmap\n| endcodespacerange\n| endnotdefchar\n| endnotdefrange\n| endrearrangedfont\n| endusematrix\n| findcolorrendering\n| removeall\n| removeglyphs\n| setsmoothness\n| settrapparams\n| settrapzone\n| shfill\n| usecmap\n| usefont\n) \\b (?![^/\\s{}()<>\\[\\]%])',
          name: 'keyword.operator.level-3.postscript'
        },
        {
          match:
            '(?x) (?<![^/\\s{}()<>\\[\\]%]) \\b\n( GlobalFontDirectory\n| ISOLatin1Encoding\n| SharedFontDirectory\n| UserObjects\n| arct\n| colorimage\n| configurationerror\n| cshow\n| currentblackgeneration\n| currentcacheparams\n| currentcmykcolor\n| currentcolorrendering\n| currentcolorscreen\n| currentcolorspace\n| currentcolortransfer\n| currentcolor\n| currentdevparams\n| currentglobal\n| currentgstate\n| currenthalftone\n| currentobjectformat\n| currentoverprint\n| currentpacking\n| currentpagedevice\n| currentshared\n| currentstrokeadjust\n| currentsystemparams\n| currentundercolorremoval\n| currentuserparams\n| defineresource\n| defineuserobject\n| deletefile\n| execform\n| execuserobject\n| filenameforall\n| fileposition\n| filter\n| findencoding\n| findresource\n| gcheck\n| globaldict\n| glyphshow\n| gstate\n| ineofill\n| infill\n| instroke\n| inueofill\n| inufill\n| inustroke\n| languagelevel\n| makepattern\n| packedarray\n| printobject\n| product\n| realtime\n| rectclip\n| rectfill\n| rectstroke\n| renamefile\n| resourceforall\n| resourcestatus\n| revision\n| rootfont\n| scheck\n| selectfont\n| serialnumber\n| setbbox\n| setblackgeneration\n| setcachedevice2\n| setcacheparams\n| setcmykcolor\n| setcolorrendering\n| setcolorscreen\n| setcolorspace\n| setcolortransfer\n| setcolor\n| setdevparams\n| setfileposition\n| setglobal\n| setgstate\n| sethalftone\n| setobjectformat\n| setoverprint\n| setpacking\n| setpagedevice\n| setpattern\n| setshared\n| setstrokeadjust\n| setsystemparams\n| setucacheparams\n| setundercolorremoval\n| setuserparams\n| setvmthreshold\n| shareddict\n| startjob\n| uappend\n| ucachestatus\n| ucache\n| ueofill\n| ufill\n| undefinedresource\n| undefinefont\n| undefineresource\n| undefineuserobject\n| undef\n| upath\n| ustrokepath\n| ustroke\n| vmreclaim\n| writeobject\n| xshow\n| xyshow\n| yshow\n) \\b (?![^/\\s{}()<>\\[\\]%])',
          name: 'keyword.operator.level-2.postscript'
        },
        {
          match:
            '(?x) (?<![^/\\s{}()<>\\[\\]%]) \\b\n( FontDirectory\n| StandardEncoding\n| VMerror\n| abs\n| add\n| aload\n| anchorsearch\n| and\n| arcn\n| arcto\n| arc\n| array\n| ashow\n| astore\n| atan\n| awidthshow\n| begin\n| bind\n| bitshift\n| bytesavailable\n| cachestatus\n| ceiling\n| charpath\n| cleardictstack\n| cleartomark\n| clear\n| clippath\n| clip\n| closefile\n| closepath\n| colorimage\n| concatmatrix\n| concat\n| condition\n| copypage\n| copy\n| cos\n| countdictstack\n| countexecstack\n| counttomark\n| count\n| currentcontext\n| currentdash\n| currentdict\n| currentfile\n| currentflat\n| currentfont\n| currentgray\n| currenthalftonephase\n| currenthsbcolor\n| currentlinecap\n| currentlinejoin\n| currentlinewidth\n| currentmatrix\n| currentmiterlimit\n| currentpoint\n| currentrgbcolor\n| currentscreen\n| currenttransfer\n| curveto\n| cvi\n| cvlit\n| cvn\n| cvrs\n| cvr\n| cvs\n| cvx\n| defaultmatrix\n| definefont\n| defineusername\n| def\n| detach\n| deviceinfo\n| dictfull\n| dictstackoverflow\n| dictstackunderflow\n| dictstack\n| dict\n| div\n| dtransform\n| dup\n| echo\n| eexec\n| end\n| eoclip\n| eofill\n| eoviewclip\n| eq\n| erasepage\n| errordict\n| exch\n| execstackoverflow\n| execstack\n| executeonly\n| executive\n| exec\n| exitserver\n| exit\n| exp\n| false\n| file\n| fill\n| findfont\n| flattenpath\n| floor\n| flushfile\n| flush\n| forall\n| fork\n| for\n| getinterval\n| get\n| ge\n| grestoreall\n| grestore\n| gsave\n| gt\n| handleerror\n| identmatrix\n| idiv\n| idtransform\n| ifelse\n| if\n| imagemask\n| image\n| index\n| initclip\n| initgraphics\n| initmatrix\n| initviewclip\n| internaldict\n| interrupt\n| invalidaccess\n| invalidcontext\n| invalidexit\n| invalidfileaccess\n| invalidfont\n| invalidid\n| invalidrestore\n| invertmatrix\n| ioerror\n| itransform\n| known\n| kshow\n| length\n| le\n| limitcheck\n| lineto\n| ln\n| load\n| lock\n| log\n| loop\n| lt\n| makefont\n| mark\n| matrix\n| maxlength\n| mod\n| monitor\n| moveto\n| mul\n| neg\n| newpath\n| ne\n| noaccess\n| nocurrentpoint\n| notify\n| not\n| nulldevice\n| null\n| or\n| pathbbox\n| pathforall\n| pdfmark\n| pop\n| print\n| prompt\n| pstack\n| putinterval\n| put\n| quit\n| rand\n| rangecheck\n| rcheck\n| rcurveto\n| readhexstring\n| readline\n| readonly\n| readstring\n| read\n| rectviewclip\n| repeat\n| resetfile\n| restore\n| reversepath\n| rlineto\n| rmoveto\n| roll\n| rotate\n| round\n| rrand\n| run\n| save\n| scalefont\n| scale\n| search\n| serverdict\n| setcachedevice\n| setcachelimit\n| setcharwidth\n| setdash\n| setflat\n| setfont\n| setgray\n| sethalftonephase\n| sethsbcolor\n| setlinecap\n| setlinejoin\n| setlinewidth\n| setmatrix\n| setmiterlimit\n| setrgbcolor\n| setscreen\n| settransfer\n| showpage\n| show\n| sin\n| sqrt\n| srand\n| stackoverflow\n| stackunderflow\n| stack\n| start\n| statusdict\n| status\n| stopped\n| stop\n| store\n| stringwidth\n| string\n| strokepath\n| stroke\n| sub\n| syntaxerror\n| systemdict\n| timeout\n| token\n| transform\n| translate\n| true\n| truncate\n| typecheck\n| type\n| undefinedfilename\n| undefinedresult\n| undefined\n| unmatchedmark\n| unregistered\n| userdict\n| usertime\n| version\n| viewclippath\n| viewclip\n| vmstatus\n| wait\n| wcheck\n| where\n| widthshow\n| writehexstring\n| writestring\n| write\n| wtranslation\n| xcheck\n| xor\n| yield\n) \\b (?![^/\\s{}()<>\\[\\]%])\n|\n# Stuff that starts with a non-word character\n(?<=^|[/\\s{}()<>\\[\\]%])\n(=?=|\\$error)\n(?=$|[/\\s{}()<>\\[\\]%])',
          name: 'keyword.operator.level-1.postscript'
        }
      ]
    },
    procedure: {
      begin: '{',
      beginCaptures: {
        0: {name: 'punctuation.definition.procedure.begin.postscript'}
      },
      end: '}',
      endCaptures: {
        0: {name: 'punctuation.definition.procedure.end.postscript'}
      },
      name: 'meta.procedure.postscript',
      patterns: [{include: '#main'}]
    },
    radix: {
      match: '[0-3]?[0-9]#[0-9a-zA-Z]+',
      name: 'constant.numeric.radix.postscript'
    },
    specialFiles: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.device-name.begin.postscript'},
            3: {name: 'punctuation.definition.device-name.end.postscript'}
          },
          match: '\\G(%)([-\\w]+)(?=%|\\)|$)(%)?',
          name: 'constant.language.device-name.$2-device.postscript'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.special-file.begin.postscript'},
            3: {name: 'punctuation.definition.special-file.end.postscript'}
          },
          match: '\\G(%)(stderr|stdin|stdout)(?=\\)|$)',
          name: 'constant.language.special-file.stdio.$2.postscript'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.special-file.begin.postscript'},
            3: {name: 'punctuation.definition.special-file.end.postscript'}
          },
          match: '\\G(%)(lineedit|statementedit)(?=\\)|$)',
          name: 'constant.language.special-file.interactive.$2.postscript'
        }
      ]
    },
    string: {
      begin: '\\(',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.postscript'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.postscript'}},
      name: 'string.other.postscript',
      patterns: [{include: '#stringInnards'}]
    },
    stringInnards: {
      patterns: [
        {include: '#specialFiles'},
        {match: '\\\\[0-7]{1,3}', name: 'constant.numeric.octal.postscript'},
        {
          match: '\\\\(\\\\|[bfnrt()]|[0-7]{1,3}|\\r?\\n)',
          name: 'constant.character.escape.postscript'
        },
        {
          match: '\\\\',
          name: 'invalid.illegal.unknown-escape.postscript.ignored'
        },
        {begin: '\\(', end: '\\)', patterns: [{include: '#stringInnards'}]}
      ]
    }
  },
  scopeName: 'source.postscript'
}

export default grammar
