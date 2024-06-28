// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.sql'],
  extensions: ['.cfc'],
  names: ['coldfusion-cfc', 'cfc'],
  patterns: [
    {include: '#comments'},
    {include: '#cfcomments'},
    {include: '#component-operators'},
    {include: '#functions'},
    {include: '#tag-operators'},
    {include: '#cfscript-code'}
  ],
  repository: {
    braces: {
      patterns: [
        {match: '{|}', name: 'meta.brace.curly.cfscript'},
        {match: '\\(|\\)', name: 'meta.brace.round.cfscript'},
        {
          begin: '([\\w]+)?\\s*(\\[)',
          beginCaptures: {
            1: {name: 'variable.other.set.cfscript'},
            2: {name: 'punctuation.definition.set.begin.cfscript'}
          },
          end: '\\]',
          endCaptures: {0: {name: 'punctuation.definition.set.end.cfscript'}},
          patterns: [
            {include: '#strings'},
            {match: ',', name: 'punctuation.definition.set.seperator.cfscript'},
            {include: '$self'}
          ]
        }
      ]
    },
    cfcomments: {
      patterns: [
        {match: '<!---.*--->', name: 'comment.line.cfml'},
        {
          begin: '<!---',
          captures: {0: {name: 'punctuation.definition.comment.cfml'}},
          end: '--->',
          name: 'comment.block.cfml',
          patterns: [{include: '#cfcomments'}]
        }
      ]
    },
    'cfscript-code': {
      patterns: [
        {include: '#braces'},
        {include: '#closures'},
        {include: '#sql-code'},
        {include: '#keywords'},
        {include: '#function-call'},
        {include: '#constants'},
        {include: '#variables'},
        {include: '#strings'}
      ]
    },
    closures: {
      begin: '(?i:\\b(function))\\b',
      beginCaptures: {1: {name: 'storage.closure.cfscript'}},
      end: '(?={)',
      name: 'meta.closure.cfscript',
      patterns: [{include: '#parameters'}]
    },
    'comment-block': {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.cfscript'}},
      end: '\\*/',
      name: 'comment.block.cfscript'
    },
    comments: {
      patterns: [
        {
          captures: {0: {name: 'punctuation.definition.comment.cfscript'}},
          match: '/\\*\\*/',
          name: 'comment.block.empty.cfscript'
        },
        {include: 'text.html.javadoc'},
        {include: '#comment-block'},
        {
          captures: {
            1: {name: 'comment.line.double-slash.cfscript'},
            2: {name: 'punctuation.definition.comment.cfscript'}
          },
          match: '((//).*?[^\\s])\\s*$\\n?'
        }
      ]
    },
    'component-extends-attribute': {
      begin: '\\b(extends)\\b\\s*(=)\\s*(?=")',
      captures: {
        1: {name: 'entity.name.tag.operator-attribute.extends.cfml'},
        2: {name: 'keyword.operator.assignment.cfscript'}
      },
      end: '(?=[\\s{])',
      name: 'meta.component.attribute-with-value.extends.cfml',
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.cfscript'}
          },
          contentName: 'meta.component-operator.extends.value.cfscript',
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.cfscript'}
          },
          name: 'string.quoted.double.cfml'
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.cfscript'}
          },
          contentName: 'meta.component-operator.extends.value.cfscript',
          end: "'",
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.cfscript'}
          },
          name: 'string.quoted.single.cfscript'
        }
      ]
    },
    'component-operators': {
      patterns: [
        {
          begin:
            '(?x)\n                        \\b\n                        (?i:\n                        (component)\n                        )\n                        \\b\n                        \\s+\n                        (?![\\.\\/>=,#\\)])\n                    ',
          beginCaptures: {
            1: {name: 'entity.name.tag.operator.component.cfscript'}
          },
          end: '(?=[;{\\(])',
          name: 'meta.operator.cfscript meta.class.component.cfscript',
          patterns: [
            {include: '#component-extends-attribute'},
            {
              match: '(?i:(\\w+)\\s*(?=\\=))',
              name: 'entity.other.attribute-name.cfscript'
            },
            {include: '#cfscript-code'}
          ]
        }
      ]
    },
    constants: {
      patterns: [
        {
          match:
            '(?x)(\n                            (\\b[0-9]+)\n                            |\n                            (\\.[0-9]+[0-9\\.]*) # decimals\n                            |\n                            (0(x|X)[0-9a-fA-F]+) # hex\n                            # matches really large double/floats\n                            |(\\.[0-9]+)((e|E)(\\+|-)?[0-9]+)?([LlFfUuDd]|UL|ul)?\n                            )\\b\n                        ',
          name: 'constant.numeric.cfscript'
        },
        {
          match: '\\b(?i:(true|false|null))\\b',
          name: 'constant.language.cfscript'
        },
        {match: '\\b_?([A-Z][A-Z0-9_]+)\\b', name: 'constant.other.cfscript'}
      ]
    },
    'function-call': {
      begin:
        '(?x)\n                (?i:\n                    (abs|acos|addsoaprequestheader|addsoapresponseheader|ajaxlink|ajaxonload|applicationstop\n                    |arrayappend|arrayavg|arrayclear|arraycontains|arraydelete|arraydeleteat\n                    |arrayfind|arrayfindnocase|arrayinsertat|arrayisdefined|arrayisempty|arraylen\n                    |arraymax|arraymin|arraynew|arrayprepend|arrayresize|arrayset|arraysort|arraysum\n                    |arrayswap|arraytolist|asc|asin|atn|authenticatedcontext|authenticateduser|binarydecode\n                    |binaryencode|bitand|bitmaskclear|bitmaskread|bitmaskset|bitnot|bitor|bitshln|bitshrn\n                    |bitxor|cacheget|cachegetallids|cachegetmetadata|cachegetproperties|cachegetsession\n                    |cacheput|cacheremove|cachesetproperties|ceiling|charsetdecode|charsetencode|chr\n                    |cjustify|compare|comparenocase|cos|createdate|createdatetime|createobject|createodbcdate\n                    |createodbcdatetime|createodbctime|createtime|createtimespan|createuuid|dateadd|datecompare\n                    |dateconvert|datediff|dateformat|datepart|day|dayofweek|dayofweekasstring|dayofyear\n                    |daysinmonth|daysinyear|decimalformat|decrementvalue|decrypt|decryptbinary\n                    |deleteclientvariable|deserializejson|de|directorycreate|directorydelete|directoryexists\n                    |directorylist|directoryrename|dollarformat|dotnettocftype|duplicate|encrypt|encryptbinary\n                    |entitydelete|entityload|entityloadbyexample|entityloadbypk|entitymerge|entitynew\n                    |entityreload|entitysave|entitytoquery|evaluate|exp|expandpath|fileclose|filecopy\n                    |filedelete|fileexists|fileiseof|filemove|fileopen|fileread|filereadbinary|filereadline\n                    |fileseek|filesetaccessmode|filesetattribute|filesetlastmodified|fileskipbytes|fileupload\n                    |fileuploadall|filewrite|filewriteline|find|findnocase|findoneof|firstdayofmonth|fix\n                    |formatbasen|generatesecretkey|getauthuser|getbasetagdata|getbasetaglist|getbasetemplatepath\n                    |getclientvariableslist|getcomponentmetadata|getcontextroot|getcurrenttemplatepath\n                    |getdirectoryfrompath|getencoding|getexception|getfilefrompath|getfileinfo\n                    |getfunctioncalledname|getfunctionlist|getgatewayhelper|gethttprequestdata|gethttptimestring\n                    |getk2serverdoccount|getk2serverdoccountlimit|getlocale|getlocaledisplayname|getlocalhostip\n                    |getmetadata|getmetricdata|getpagecontext|getrequest|getrequesturi|getprinterinfo|getprinterlist|getprofilesections\n                    |getprofilestring|getreadableimageformats|getsoaprequest|getsoaprequestheader|getsoapresponse\n                    |getsoapresponseheader|gettempdirectory|gettempfile|gettemplatepath|gettickcount\n                    |gettimezoneinfo|gettoken|getuserroles|getvfsmetadata|getwriteableimageformats|hash|hour\n                    |htmlcodeformat|htmleditformat|iif|imageaddborder|imageblur|imageclearrect|imagecopy\n                    |imagecrop|imagedrawarc|imagedrawbeveledrect|imagedrawcubiccurve|imagedrawline|imagedrawlines\n                    |imagedrawoval|imagedrawpoint|imagedrawquadraticcurve|imagedrawrect|imagedrawroundrect\n                    |imagedrawtext|imageflip|imagegetblob|imagegetbufferedimage|imagegetexifmetadata|imagegetexiftag\n                    |imagegetheight|imagegetiptcmetadata|imagegetiptctag|imagegetwidth|imagegrayscale|imageinfo\n                    |imagenegative|imagenew|imageoverlay|imagepaste|imageread|imagereadbase64|imageresize\n                    |imagerotate|imagerotatedrawingaxis|imagescaletofit|imagesetantialiasing|imagesetbackgroundcolor\n                    |imagesetdrawingcolor|imagesetdrawingstroke|imagesetdrawingtransparency|imagesharpen|imageshear\n                    |imagesheardrawingaxis|imagetranslate|imagetranslatedrawingaxis|imagewrite|imagewritebase64\n                    |imagexordrawingmode|incrementvalue|inputbasen|insert|int|isarray|isauthenticated|isauthorized\n                    |isbinary|isboolean|iscustomfunction|isdate|isddx|isdebugmode|isdefined|isimage|isimagefile\n                    |isinstanceof|isipv6|isjson|isk2serverabroker|isk2serverdoccountexceeded|isk2serveronline|isleapyear\n                    |islocalhost|isnull|isnumeric|isnumericdate|isobject|ispdffile|ispdfobject|isprotected|isquery\n                    |issimplevalue|issoaprequest|isspreadsheetfile|isspreadsheetobject|isstruct|isuserinanyrole\n                    |isuserinrole|isuserloggedin|isvalid|iswddx|isxml|isxmlattribute|isxmldoc|isxmlelem|isxmlnode\n                    |isxmlroot|javacast|jsstringformat|lcase|left|len|listappend|listchangedelims|listcontains\n                    |listcontainsnocase|listdeleteat|listfind|listfindnocase|listfirst|listgetat|listinsertat\n                    |listlast|listlen|listprepend|listqualify|listrest|listsetat|listsort|listtoarray|listvaluecount\n                    |listvaluecountnocase|ljustify|location|log|log10|lscurrencyformat|lsdateformat|lseurocurrencyformat\n                    |lsiscurrency|lsisdate|lsisnumeric|lsnumberformat|lsparsecurrency|lsparsedatetime|lsparseeurocurrency\n                    |lsparsenumber|lstimeformat|ltrim|max|mid|min|minute|month|monthasstring|now|numberformat|objectequals\n                    |objectload|objectsave|ormclearsession|ormclosesession|ormcloseallsessions|ormevictcollection\n                    |ormevictentity|ormevictqueries|ormexecutequery|ormflush|ormflushall|ormgetsession|ormgetsessionfactory\n                    |ormreload|paragraphformat|parameterexists|parsedatetime|pi|precisionevaluate|preservesinglequotes\n                    |quarter|queryaddcolumn|queryaddrow|queryconvertforgrid|querynew|querysetcell|quotedvaluelist\n                    |rand|randomize|randrange|refind|refindnocase|rematch|rematchnocase|releasecomobject|removechars\n                    |repeatstring|replace|replacelist|replacenocase|rereplace|rereplacenocase|reverse|right|rjustify\n                    |round|rtrim|second|sendgatewaymessage|serializejson|setencoding|setlocale|setprofilestring\n                    |setvariable|sgn|sin|sleep|spanexcluding|spanincluding|spreadsheetaddcolumn|spreadsheetaddimage\n                    |spreadsheetaddfreezepane|spreadsheetaddinfo|spreadsheetaddrow|spreadsheetaddrows|spreadsheetaddsplitpane\n                    |spreadsheetcreatesheet|spreadsheetdeletecolumn|spreadsheetdeletecolumns|spreadsheetdeleterow\n                    |spreadsheetdeleterows|spreadsheetformatcell|spreadsheetformatcolumn|spreadsheetformatcellrange\n                    |spreadsheetformatcolumns|spreadsheetformatrow|spreadsheetformatrows|spreadsheetgetcellcomment\n                    |spreadsheetgetcellformula|spreadsheetgetcellvalue|spreadsheetinfo|spreadsheetmergecells\n                    |spreadsheetnew|spreadsheetread|spreadsheetreadbinary|spreadsheetremovesheet|spreadsheetsetactivesheet\n                    |spreadsheetsetactivesheetnumber|spreadsheetsetcellcomment|spreadsheetsetcellformula|spreadsheetsetcellvalue\n                    |spreadsheetsetcolumnwidth|spreadsheetsetfooter|spreadsheetsetheader|spreadsheetsetrowheight\n                    |spreadsheetshiftcolumnsspreadsheetshiftrows|spreadsheetwrite|sqr|stripcr|structappend|structclear\n                    |structcopy|structcount|structdelete|structfind|structfindkey|structfindvalue|structget|structinsert\n                    |structisempty|structkeyarray|structkeyexists|structkeylist|structnew|structsort|structupdate|tan\n                    |threadjoin|threadterminate|throw|timeformat|tobase64|tobinary|toscript|tostring|trace|transactioncommit\n                    |transactionrollback|transactionsetsavepoint|trim|ucase|urldecode|urlencodedformat|urlsessionformat\n                    |val|valuelist|verifyclient|week|wrap|writedump|writelog|writeoutput|xmlchildpos|xmlelemnew\n                    |xmlformat|xmlgetnodetype|xmlnew|xmlparse|xmlsearch|xmltransform|xmlvalidate|year|yesnoformat)\n                    |\n                    (\\w+)\n                )\n                \\s*\n                (\\()\n            ',
      beginCaptures: {
        1: {name: 'support.function.cfscript'},
        2: {name: 'entity.name.function-call.cfscript'},
        3: {name: 'punctuation.definition.arguments.begin.cfscript'}
      },
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.arguments.end.cfscript'}},
      name: 'meta.function-call.cfscript',
      patterns: [
        {
          match: ',',
          name: 'punctuation.definition.seperator.arguments.cfscript'
        },
        {
          match: '(?i:(\\w+)\\s*(?=\\=))',
          name: 'entity.other.method-parameter.cfscript'
        },
        {include: '#cfcomments'},
        {include: '#comments'},
        {include: '#tag-operators'},
        {include: '#cfscript-code'}
      ]
    },
    'function-properties': {
      patterns: [
        {
          match: '\\b(?i:output)',
          name: 'entity.other.attribute-name.output.cfscript'
        },
        {match: '\\b([\\w]+)', name: 'entity.other.attribute-name.any.cfscript'}
      ]
    },
    functions: {
      begin:
        '(?x)^\\s*\n                    (?:\n                        (?: # optional access-control modifier and return-type\n                            (?i:\\b(private|package|public|remote)\\s+)? # access-control.modifier\n                            (?i:\\b\n                                (void)\n                                |\n                                (any|array|binary|boolean|component|date|guid|numeric|query|string|struct|xml|uuid) # return-type.primitive\n                                |\n                                ([A-Za-z0-9_\\.$]+) #return-type component/object (may need additional tokens)\n                            )?\n                        )\n                    )\n                    \\s*\n                    (?i:(function)) # storage.function\n                    \\s+\n                    (?:\n                        (init) # entity.name.function.contructor\n                        |\n                        ([\\w\\$]+) # entity.name.function\n                    )\\b\n                ',
      beginCaptures: {
        1: {name: 'storage.modifier.access-control.cfscript'},
        2: {name: 'storage.type.return-type.void.cfscript'},
        3: {name: 'storage.type.return-type.primitive.cfscript'},
        4: {name: 'storage.type.return-type.object.cfscript'},
        5: {name: 'storage.type.function.cfscript'},
        6: {name: 'entity.name.function.constructor.cfscript'},
        7: {name: 'entity.name.function.cfscript'}
      },
      end: '(?={)',
      name: 'meta.function.cfscript',
      patterns: [
        {include: '#parameters'},
        {include: '#comments'},
        {include: '#function-properties'},
        {include: '#cfscript-code'}
      ]
    },
    keywords: {
      patterns: [
        {match: '\\b(?i:new)\\b', name: 'keyword.other.new.cfscript'},
        {
          match: '(===?|!|!=|<=|>=|<|>)',
          name: 'keyword.operator.comparison.cfscript'
        },
        {
          match:
            '\\b(?i:(GREATER|LESS|THAN|EQUAL\\s+TO|DOES|CONTAINS|EQUAL|EQ|NEQ|LT|LTE|LE|GT|GTE|GE|AND|IS))\\b',
          name: 'keyword.operator.decision.cfscript'
        },
        {
          match: '(\\-\\-|\\+\\+)',
          name: 'keyword.operator.increment-decrement.cfscript'
        },
        {
          match:
            '(?i:(\\^|\\-|\\+|\\*|\\/|\\\\|%|\\-=|\\+=|\\*=|\\/=|%=|\\bMOD\\b))',
          name: 'keyword.operator.arithmetic.cfscript'
        },
        {match: '(&|&=)', name: 'keyword.operator.concat.cfscript'},
        {match: '(=)', name: 'keyword.operator.assignment.cfscript'},
        {
          match: '\\b(?i:(NOT|!|AND|&&|OR|\\|\\||XOR|EQV|IMP))\\b',
          name: 'keyword.operator.logical.cfscript'
        },
        {match: '(\\?|:)', name: 'keyword.operator.ternary.cfscript'},
        {match: ';', name: 'punctuation.terminator.cfscript'}
      ]
    },
    nest_hash: {
      patterns: [
        {match: '##', name: 'string.escaped.hash.cfscript'},
        {
          begin: '(#)(?=.*#)',
          beginCaptures: {
            1: {name: 'punctuation.definition.hash.begin.cfscript'}
          },
          contentName: 'source.cfscript.embedded.cfscript',
          end: '(#)',
          endCaptures: {1: {name: 'punctuation.definition.hash.end.cfscript'}},
          name: 'meta.inline.hash.cfscript',
          patterns: [{include: '#cfscript-code'}]
        }
      ]
    },
    parameters: {
      patterns: [
        {
          begin: '(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.parameters.begin.cfscript'}
          },
          end: '(\\))',
          endCaptures: {
            1: {name: 'punctuation.definition.parameters.end.cfscript'}
          },
          name: 'meta.function.parameters.cfscript',
          patterns: [
            {
              match: '(?i:required)',
              name: 'keyword.other.required.argument.cfscript'
            },
            {include: '#storage-types'},
            {
              match: '(=)',
              name: 'keyword.operator.argument-assignment.cfscript'
            },
            {
              match: '(?i:false|true|no|yes)',
              name: 'constant.language.boolean.argument.cfscript'
            },
            {match: '(?i:\\w)', name: 'variable.parameter.cfscript'},
            {
              match: ',',
              name: 'punctuation.definition.seperator.parameter.cfscript'
            },
            {include: '#strings'}
          ]
        }
      ]
    },
    'sql-code': {
      patterns: [
        {
          begin: '([\\w+\\.]+)\\.((?i:setsql))\\(\\s*["|\']',
          beginCaptures: {
            1: {
              name: 'entity.name.function.query.cfscript, meta.toc-list.query.cfscript'
            },
            2: {name: 'support.function.cfscript'}
          },
          end: '(["|\']\\s*\\))',
          endCaptures: {1: {name: 'punctuation.parenthesis.end.cfscript'}},
          name: 'source.sql.embedded.cfscript',
          patterns: [{include: '#nest_hash'}, {include: 'source.sql'}]
        }
      ]
    },
    'storage-types': {
      patterns: [
        {
          match:
            '\\b(?i:(function|string|date|struct|array|void|binary|numeric|boolean|query|xml|uuid|any))\\b',
          name: 'storage.type.primitive.cfscript'
        }
      ]
    },
    'string-quoted-double': {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.cfscript'}
      },
      end: '"(?!")',
      endCaptures: {0: {name: 'punctuation.definition.string.end.cfscript'}},
      name: 'string.quoted.double.cfscript',
      patterns: [
        {
          match: '("")',
          name: 'constant.character.escape.quoted.double.cfscript'
        },
        {include: '#nest_hash'}
      ]
    },
    'string-quoted-single': {
      begin: "'",
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.cfscript'}
      },
      end: "'(?!')",
      endCaptures: {0: {name: 'punctuation.definition.string.end.cfscript'}},
      name: 'string.quoted.single.cfscript',
      patterns: [
        {
          match: "('')",
          name: 'constant.character.escape.quoted.single.cfscript'
        },
        {include: '#nest_hash'}
      ]
    },
    strings: {
      patterns: [
        {include: '#string-quoted-double'},
        {include: '#string-quoted-single'}
      ]
    },
    'tag-operators': {
      patterns: [
        {
          match: '\\b(else\\s+if|else|if)\\b',
          name: 'keyword.control.operator.conditional.cfscript'
        },
        {
          match: '\\b(switch|case|default)\\b',
          name: 'keyword.control.operator.switch.cfscript'
        },
        {
          begin:
            '(?x)^[\\s}]*\n                        (?i:\n                        (lock)|(transaction)|(thread)|(abort)\n                        |(exit)|(include)|(param)|(thread)|(import)\n                        |(rethrow|throw)|(property)|(interface)|(location)\n                        |(break)|(pageencoding)|(schedule)|(return)|(try|catch|finally)\n                        |(for|in|do|while|break|continue)\n                        |(trace)|(savecontent)|(http|httpparam)\n                        )\n                        \\b\n                        \\s*\n                        (?![^\\w|"|\'|\\(|{|;])\n                    ',
          beginCaptures: {
            1: {name: 'entity.name.tag.operator.lock.cfscript'},
            10: {name: 'keyword.control.operator.catch-exception.cfscript'},
            11: {name: 'entity.name.tag.operator.property.cfscript'},
            12: {name: 'entity.name.tag.operator.interface.cfscript'},
            13: {name: 'entity.name.tag.operator.location.cfscript'},
            14: {name: 'keyword.control.operator.break.cfscript'},
            15: {name: 'entity.name.tag.operator.pageencoding.cfscript'},
            16: {name: 'entity.name.tag.operator.schedule.cfscript'},
            17: {name: 'keyword.control.operator.return.cfscript'},
            18: {name: 'keyword.control.operator.catch-exception.cfscript'},
            19: {name: 'keyword.control.operator.loop.cfscript'},
            2: {name: 'entity.name.tag.operator.transaction.cfscript'},
            20: {name: 'entity.name.tag.operator.trace.cfscript'},
            21: {name: 'entity.name.tag.operator.savecontent.cfscript'},
            22: {name: 'entity.name.tag.operator.http.cfscript'},
            3: {name: 'entity.name.tag.operator.thread.cfscript'},
            4: {name: 'keyword.control.operator.abort.cfscript'},
            5: {name: 'keyword.control.operator.exit.cfscript'},
            6: {name: 'entity.name.tag.operator.include.cfscript'},
            7: {name: 'entity.name.tag.operator.param.cfscript'},
            8: {name: 'entity.name.tag.operator.thread.cfscript'},
            9: {name: 'entity.name.tag.operator.import.cfscript'}
          },
          end: '(;)|({)',
          endCaptures: {
            1: {name: 'punctuation.terminator.cfscript'},
            3: {name: 'meta.brace.curly.cfscript'}
          },
          name: 'meta.operator.cfscript',
          patterns: [
            {
              begin: '\\(',
              beginCaptures: {0: {name: 'meta.brace.curly.cfscript'}},
              end: '\\)',
              endCaptures: {0: {name: 'meta.brace.curly.cfscript'}},
              patterns: [
                {
                  match: ',',
                  name: 'punctuation.definition.seperator.arguments.cfscript'
                },
                {
                  match: '(?i:(\\w+)\\s*(?=\\=))',
                  name: 'entity.other.operator-parameter.cfscript'
                },
                {include: '#cfscript-code'}
              ]
            },
            {
              match: '(?i:(\\w+)\\s*(?=\\=))',
              name: 'entity.other.attribute-name.cfscript'
            },
            {include: '#cfcomments'},
            {include: '#comments'},
            {include: '#cfscript-code'}
          ]
        }
      ]
    },
    variables: {
      patterns: [
        {match: '\\b(?i:var)\\b', name: 'storage.modifier.var.cfscript'},
        {
          match: '\\b(?i:(this|key))(?!\\.)',
          name: 'variable.language.cfscript'
        },
        {
          match: '(\\.)',
          name: 'punctuation.definition.seperator.variable.cfscript'
        },
        {
          captures: {
            1: {name: 'variable.language.cfscript'},
            2: {name: 'variable.other.cfscript'}
          },
          match:
            '(?x)\n                    (?i:\n                        \\b\n                        (application|arguments|attributes|caller|cgi|client|\n                            cookie|flash|form|local|request|server|session|\n                            this|thistag|thread|thread local|url|variables|\n                            super|self|argumentcollection)\n                        \\b\n                        |\n                        (\\w+)\n                    )'
        }
      ]
    }
  },
  scopeName: 'source.cfscript'
}

export default grammar
