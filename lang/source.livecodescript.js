// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Ferruslogic/vscode-livecodescript>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.livecodescript'],
  names: ['livecode-script'],
  patterns: [{include: '#language'}, {include: '#line-continuation'}],
  repository: {
    constants: {
      patterns: [
        {
          match:
            '(?i)\\b(SIX|TEN|FORMFEED|NINE|ZERO|NONE|SPACE|FOUR|FALSE|COLON|CRLF|PI|COMMA|ENDOFFILE|EOF|EIGHT|FIVE|QUOTE|EMPTY|ONE|TRUE|((?<=\\w\\s)RETURN)|CR|LINEFEED|RIGHT|BACKSLASH|NULL|SEVEN|TAB|THREE|TWO)\\b',
          name: 'constant.language.livecodescript'
        },
        {match: '\\bk[A-Z]{1}.*?\\b', name: 'constant.language.livecodescript'},
        {begin: '"', end: '"', name: 'string.quoted.double.livecodescript'}
      ]
    },
    language: {
      patterns: [
        {
          begin: '/\\*',
          captures: {
            0: {name: 'punctuation.definition.comment.livecodescript'}
          },
          end: '\\*/',
          name: 'comment.block.livecodescript'
        },
        {
          begin: '--',
          beginCaptures: {
            0: {
              name: 'punctuation.definition.comment.double-dash.livecodescript'
            }
          },
          end: '\\n',
          name: 'comment.line.livecodescript'
        },
        {
          begin: '#',
          beginCaptures: {
            0: {
              name: 'punctuation.definition.comment.number-sign.livecodescript'
            }
          },
          end: '\\n',
          name: 'comment.line.livecodescript'
        },
        {
          begin: '//',
          beginCaptures: {
            0: {
              name: 'punctuation.definition.comment.double-slash.livecodescript'
            }
          },
          end: '\\n',
          name: 'comment.line.livecodescript'
        },
        {
          match:
            '\\b(after|byte(s)*|codepoint(s)*|codeunit(s)*|english|segment(s)*|sentence(s)*|paragraph|the|trueWord(s)*|until|word(s)*|http|forever|descending|using|line|real8|with|seventh|for|stdout|finally|element|word|fourth|before|black|ninth|sixth|characters|chars|stderr|uInt(1|1s|2|2s)|stdin|string|lines|relative|rel|any|fifth|items|from|middle|mid|at|else|of|catch|then|third|it|file|milli(seconds|second|secs|sec)|int(1|1s|4|4s|ernet|2|2s)|normal|text|item|last|long|detailed|effective|uInt4|uInt4s|se(conds|cond|cs|c)|repeat|end\\s+repeat|URL|in|end\\s+try|into|switch|end\\s+switch|to|words|https|token|binfile|each|tenth|as|ticks|tick|system|real4|by|dateItems|without|cha(r|racter)|ascending|eighth|whole|dateTime|numeric|short|first|ftp|integer|abbreviated|abb(r|rev)|private|case|default|while|if|end\\s+if)\\b',
          name: 'keyword.control.livecodescript'
        },
        {
          captures: {1: {name: 'keyword.control.exception.livecodescript'}},
          match: '\\b(catch)\\b\\s*([A-Za-z_][A-Za-z_0-9]*)',
          name: 'meta.catch.livecodescript'
        },
        {
          match: '\\b(catch|try|throw)\\b',
          name: 'keyword.control.exception.livecodescript'
        },
        {
          begin: '/\\*',
          captures: {
            0: {name: 'punctuation.definition.comment.livecodescript'}
          },
          end: '\\*/',
          name: 'comment.block.livecodescript'
        },
        {
          captures: {
            1: {name: 'storage.type.function.livecodescript'},
            2: {name: 'storage.type.function.livecodescript'},
            3: {name: 'entity.name.function.livecodescript'},
            4: {name: 'punctuation.definition.variable.livecodescript'}
          },
          match:
            '(private\\s+)*(\\b(?i)function|getprop|setprop|after|before|on|command|before|after)\\s+([A-Za-z_0-9-.]+)(\\s+@*[A-Za-z_0-9-]+,*?\\s+.*)*',
          name: 'meta.function.livecodescript'
        },
        {
          captures: {
            1: {name: 'storage.type.function.end.livecodescript'},
            2: {name: 'entity.name.function.livecodescript'}
          },
          match: '((?i)end){1}\\s+?([A-Za-z_0-9-.]+)?',
          name: 'meta.function.end.livecodescript'
        },
        {
          match: '(\\-|\\+|\\*|/|%)',
          name: 'keyword.operator.arithmetic.livecodescript'
        },
        {
          match: '(?i)\\b(and|or)\\b',
          name: 'keyword.operator.logical.livecodescript'
        },
        {
          match: '(?i)\\b(bitAnd|bitNot|bitOr|bitXor)\\b',
          name: 'keyword.operator.bitwise.livecodescript'
        },
        {
          match:
            '(?i)(=|<>|>=|<=|<|>)|\\b(is( among| not among| not in| a| an| not| in| not within| within| not a| not an)*|there is( no| not a| not an| a| an)|contains|ends with|begins with|is among the keys of|is not among the keys of)\\b',
          name: 'keyword.operator.comparison.livecodescript'
        },
        {match: '(&|&&)', name: 'keyword.operator.string.livecodescript'},
        {
          match: '(\\^)|\\b(div|mod|wrap)\\b',
          name: 'keyword.operator.other.livecodescript'
        },
        {
          match:
            '(?i)(\\^)|\\b(abs|acos|aliasReference|annuity|arrayDecode|arrayEncode|asin|atan(2)*|average(Deviation)*|avg(Dev)*|base64Decode|base64Encode|baseConvert|binaryDecode|binaryEncode|byte(Offset|ToNum)+|cachedURL(s)*|charToNum|cipherNames|codepoint(Offset|Property|ToNum)+|codeunitOffset|commandNames|compound|compress|constantNames|cos|date(Format)*|decompress|directories|diskSpace|DNSServers|exp(1|2|10)*|extents|files|flushEvents|folders|format|functionNames|geometricMean|global(s|Names)+|harmonicMean|hasMemory|hostAddress|hostAddressToName|hostName(ToAddress)*|isNumber|ISOToMac|itemOffset|keys|len(gth)*|libURLErrorData|libUrlFormData|libURLftpCommand|libURLLastHTTPHeaders|libURLLastRHHeaders|libUrlMultipartFormAddPart|libUrlMultipartFormData|libURLVersion|lineOffset|ln(1)*|localNames|log(2|10)*|longFilePath|lower|macToISO|matchChunk|matchText|matrixMultiply|max|md5Digest|median|merge|milli(sec|secs|second|seconds)+|min|monthNames|nativeCharToNum|normalizeText|num(ber|ToByte|ToChar|ToCodepoint|ToNativeChar)*|offset|open(files|Processes)*|openProcessIDs|openSockets|paragraphOffset|paramCount|param(s)*|peerAddress|pendingMessages|platform|popStdDev|populationStandardDeviation|popVariance|populationVariance|processID|random(Bytes)*|replaceText|result|revCreateXMLTree|revCreateXMLTreeFromFile|revCurrentRecord|revCurrentRecordIsFirst|revCurrentRecordIsLast|revDatabaseColumnCount|revDatabaseColumnIsNull|revDatabaseColumnLengths|revDatabaseColumnName(s|d)+|revDatabaseColumnNumbered|revDatabaseColumnTypes|revDatabaseConnectResult|revDatabaseCursors|revDatabaseID|revDatabaseTableNames|revDatabaseType|revDataFromQuery|revdb_closeCursor|revdb_columnbynumber|revdb_columncount|revdb_columnisnull|revdb_columnlengths|revdb_columnnames|revdb_columntypes|revdb_commit|revdb_connect(ions)*|revdb_connectionerr|revdb_currentrecord|revdb_cursorconnection|revdb_cursorerr|revdb_cursors|revdb_dbtype|revdb_disconnect|revdb_execute|revdb_is(eof|bof)+|revdb_movefirst|revdb_movelast|revdb_movenext|revdb_moveprev|revdb_query|revdb_querylist|revdb_recordcount|revdb_rollback|revdb_tablenames|revGetDatabaseDriverPath|revNumberOfRecords|revOpenDatabase(s)*|revQueryDatabase(Blob)*|revQuery(Result|IsAtStart|IsAtEnd)+|revUnixFromMacPath|revXMLAttribute(s)*|revXMLAttributeValues|revXMLChildContents|revXMLChildNames|revXMLCreateTreeFromFileWithNamespaces|revXMLCreateTreeWithNamespaces|revXMLDataFromXPathQuery|revXMLEvaluateXPath|revXMLFirstChild|revXMLMatchingNode|revXMLNextSibling|revXMLNodeContents|revXMLNumberOfChildren|revXMLParent|revXMLPreviousSibling|revXMLRootNode|revXMLRPC_CreateRequest|revXMLRPC_Documents|revXMLRPC_Error|revXMLRPC_Execute|revXMLRPC_GetHost|revXMLRPC_GetMethod|revXMLRPC_GetParam|revXMLText|revXMLRPC_GetParamCount|revXMLRPC_GetParamNode|revXMLRPC_GetParamType|revXMLRPC_GetPath|revXMLRPC_GetPort|revXMLRPC_GetProtocol|revXMLRPC_GetRequest|revXMLRPC_GetResponse|revXMLRPC_GetSocket|revXMLTree(s)*|revXMLValidateDTD|revZipDescribeItem|revZipEnumerateItems|revZipOpenArchives|round|sampVariance|sec(s|onds)*|sentenceOffset|sha1Digest|shell|shortFilePath|sin|specialFolderPath|sqrt|standardDeviation|statRound|stdDev|sum|sysError|systemVersion|tan|tempName|textDecode|textEncode|tick(s)*|time|to(Lower|Upper)*|tokenOffset|transpose|truewordOffset|trunc|uniDecode|uniEncode|upper|urlDecode|urlEncode|urlStatus|uuid|value|variableNames|variance|version|waitDepth|weekdayNames|wordOffset|xsltApplyStylesheet|xsltApplyStylesheetFromFile|xsltLoadStylesheet|xsltLoadStylesheetFromFile)\\b',
          name: 'storage.type.function.livecodescript'
        },
        {
          match:
            '(?i)(\\^)|\\b(add|breakpoint|cancel|clear( local| global| variable| file| word| line| folder| directory| URL)*|close( file| socket| process)*|combine|constant|convert|(create|new)( alias| folder| directory)*|decrypt( using rsa)*|delete( directory| file| folder| global| line| local| session| URL| variable| word)*|dispatch|divide|do|encrypt( using rsa)*|filter|get|global|include|intersect|kill|libURLDownloadToFile|libURLFollowHttpRedirects|libURLftpUpload(File)*|libURLresetAll|libUrlSetAuthCallback|libURLSetCustomHTTPHeaders|libUrlSetExpect100|libURLSetFTPListCommand|libURLSetFTPMode|libURLSetFTPStopTime|libURLSetStatusCallback|load URL|local|multiply|open( socket| file| process)*|post|prepare|put( binary| content| cookie| header| markup| unicode)*|read( from process| from socket| from file)*|rename|replace|require|resetAll|resolve|revAddXMLNode|revAppendXML|revCloseCursor|revCloseDatabase|revCommitDatabase|revCopyFile|revCopyFolder|revCopyXMLNode|revDeleteFolder|revDeleteXMLNode|revDeleteAllXMLTrees|revDeleteXMLTree|revExecuteSQL|revGoURL|revInsertXMLNode|revMoveFolder|revMoveToFirstRecord|revMoveToLastRecord|revMoveToNextRecord|revMoveToPreviousRecord|revMoveToRecord|revMoveXMLNode|revPutIntoXMLNode|revRollBackDatabase|revSetDatabaseDriverPath|revSetXMLAttribute|revXMLRPC_AddParam|revXMLRPC_DeleteAllDocuments|revXMLAddDTD|revXMLRPC_Free|revXMLRPC_FreeAll|revXMLRPC_DeleteDocument|revXMLRPC_DeleteParam|revXMLRPC_SetHost|revXMLRPC_SetMethod|revXMLRPC_SetPort|revXMLRPC_SetProtocol|revXMLRPC_SetSocket|revZipAddItemWithData|revZipAddItemWithFile|revZipAddUncompressedItemWithData|revZipAddUncompressedItemWithFile|revZipCancel|revZipCloseArchive|revZipDeleteItem|revZipExtractItemToFile|revZipExtractItemToVariable|revZipSetProgressCallback|revZipRenameItem|revZipReplaceItemWithData|revZipReplaceItemWithFile|revZipOpenArchive|seek( to| rel| relative)*|send|set|sort|split|start( session)*|stop( session)*|subtract|union|unload( URL)*|wait|write)\\b',
          name: 'storage.type.comnd.livecodescript'
        },
        {include: '#constants'},
        {include: '#support'},
        {include: '#numbers'},
        {include: '#variables'}
      ]
    },
    'line-continuation': {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.separator.continuation.line.livecodescript'},
            2: {name: 'invalid.illegal.line.continuation.livecodescript'}
          },
          match: '(\\\\)\\s*(\\S.*$\\n?)'
        }
      ]
    },
    numbers: {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)\\b',
      name: 'constant.numeric.livecodescript'
    },
    var_global: {
      match: '\\bg[A-Z]{1}.*?\\b',
      name: 'variable.other.global.livecodescript'
    },
    var_local: {
      match: '\\bt[he]*[A-Z]{1}.*?\\b',
      name: 'variable.other.local.livecodescript'
    },
    var_parameter: {
      match: '\\bp[A-Z]{1}.*?\\b',
      name: 'variable.other.param.livecodescript'
    },
    var_scriptLocal: {
      match: '\\bs[A-Z]{1}.*?\\b',
      name: 'variable.other.scriptlocal.livecodescript'
    },
    var_server: {
      match: '\\$_[A-Z]+',
      name: 'variable.other.server.livecodescript'
    },
    variables: {
      patterns: [
        {include: '#var_global'},
        {include: '#var_scriptLocal'},
        {include: '#var_local'},
        {include: '#var_parameter'},
        {include: '#var_server'}
      ]
    }
  },
  scopeName: 'source.livecodescript'
}

export default grammar
