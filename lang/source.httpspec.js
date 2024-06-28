// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/samsalisbury/Sublime-HTTP>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.json'],
  extensions: ['.http'],
  names: ['http'],
  patterns: [
    {
      name: 'meta.request.httpspec',
      patterns: [{include: '#request'}, {match: '^$'}, {include: '#response'}]
    }
  ],
  repository: {
    ampersand: {
      patterns: [
        {
          match: '(?<!\\&)\\&(?!\\&)',
          name: 'support.function.ampersand.httpspec'
        }
      ]
    },
    closingbracket: {
      patterns: [{match: '\\]', name: 'keyword.other.multiplexend.httpspec'}]
    },
    comma: {
      patterns: [{match: '\\,', name: 'keyword.other.comma.httpspec.test'}]
    },
    emptyline: {patterns: [{match: '^\\s*$'}]},
    equals: {
      patterns: [
        {match: '\\=', name: 'support.function.keyvaluepairseparator.httpspec'}
      ]
    },
    header: {
      patterns: [
        {
          captures: {1: {name: 'variable.parameter.headername.httpspec'}},
          match: '^([^()<>@,;:\\\\"{} \\t\\x00-\\x1F\\x7F]+\\:)\\s(.*)$',
          name: 'string.unquoted.uri.httpspec'
        }
      ]
    },
    invalidcomma: {
      patterns: [
        {match: '^\\,|\\,(?=\\s)', name: 'invalid.illegal.comma.httpspec'}
      ]
    },
    jsonblock: {patterns: [{include: 'source.json'}]},
    methodlist: {
      patterns: [
        {include: '#methodname'},
        {include: '#invalidcomma'},
        {include: '#comma'}
      ]
    },
    methodname: {
      patterns: [
        {
          match:
            '(?:\\b)(ACL|BASELINE-CONTROL|BIND|CHECKIN|CHECKOUT|CONNECT|COPY|DELETE|GET|HEAD|LABEL|LINK|LOCK|MERGE|MKACTIVITY|MKCALENDAR|MKCOL|MKREDIRECTREF|MKWORKSPACE|MOVE|OPTIONS|ORDERPATCH|PATCH|POST|PRI|PROPFIND|PROPPATCH|PUT|REBIND|REPORT|SEARCH|TRACE|UNBIND|UNCHECKOUT|UNLINK|UNLOCK|UPDATE|UPDATEREDIRECTREF|VERSION-CONTROL)',
          name: 'keyword.other.method.httpspec'
        }
      ]
    },
    multiplex: {
      begin: '(\\[)',
      beginCaptures: {0: {name: 'keyword.other'}},
      end: '\\]',
      endCaptures: {0: {name: 'keyword.other'}},
      patterns: [{include: '#uripart'}, {include: '#comma'}]
    },
    namevaluepair: {
      patterns: [
        {include: '#uriqueryname'},
        {include: '#equals'},
        {include: '#uriqueryvalue'}
      ]
    },
    openingbracket: {
      patterns: [{match: '\\[', name: 'keyword.other.multiplexstart.httpspec'}]
    },
    questionmark: {
      patterns: [
        {match: '\\?', name: 'support.function.queryseparator.httpspec'}
      ]
    },
    request: {
      patterns: [
        {
          begin:
            '^(?=ACL|BASELINE-CONTROL|BIND|CHECKIN|CHECKOUT|CONNECT|COPY|DELETE|GET|HEAD|LABEL|LINK|LOCK|MERGE|MKACTIVITY|MKCALENDAR|MKCOL|MKREDIRECTREF|MKWORKSPACE|MOVE|OPTIONS|ORDERPATCH|PATCH|POST|PRI|PROPFIND|PROPPATCH|PUT|REBIND|REPORT|SEARCH|TRACE|UNBIND|UNCHECKOUT|UNLINK|UNLOCK|UPDATE|UPDATEREDIRECTREF|VERSION-CONTROL\n)',
          end: '^(?=\\d\\d\\d|HTTP)',
          patterns: [
            {include: '#requestline'},
            {include: '#header'},
            {include: '#jsonblock'}
          ]
        }
      ]
    },
    requestline: {patterns: [{include: '#methodlist'}, {include: '#uri'}]},
    response: {
      patterns: [
        {include: '#statusline'},
        {include: '#header'},
        {include: '#jsonblock'}
      ]
    },
    statusline: {
      patterns: [
        {
          captures: {0: {name: 'constant.language.statustext.httpspec'}},
          match: '^(\\d\\d\\d)\\s(.*)$'
        },
        {
          captures: {0: {name: 'constant.language.statustext.httpspec'}},
          match: '^HTTP/(1\\.1|2|3)\\s(\\d\\d\\d)\\s(.*)$'
        }
      ]
    },
    uri: {
      patterns: [
        {include: '#uriabsolute'},
        {include: '#uripath'},
        {include: '#multiplex'},
        {include: '#questionmark'},
        {include: '#uriquery'}
      ]
    },
    uriabsolute: {
      patterns: [
        {
          begin:
            '(?:\\s)(https?):\\/\\/((?:(?:[A-Za-z0-9\\-]{1,63})\\.)*(?:[A-Za-z0-9\\-]{1,63}))',
          end: '(?:$)',
          name: 'support.function.httpspec',
          patterns: [{include: '#uripart'}, {include: '#multiplex'}]
        }
      ]
    },
    uripart: {patterns: [{match: '([a-bA-B0-9\\-_/]+)'}]},
    uripath: {
      patterns: [
        {
          begin: '(?:\\s)\\/',
          end: '(?:$)',
          name: 'support.function.httpspec',
          patterns: [{include: '#uripart'}, {include: '#multiplex'}]
        }
      ]
    },
    uriquery: {
      patterns: [{include: '#namevaluepair'}, {include: '#ampersand'}]
    },
    uriqueryname: {
      patterns: [
        {
          match: '(?<=[?&])([^=&])+',
          name: 'support.function.uriqueryname.httpspec'
        }
      ]
    },
    uriqueryvalue: {
      patterns: [
        {
          match: '(?<=\\=)([^=&]+)',
          name: 'support.function.uriqueryvalue.httpspec'
        }
      ]
    }
  },
  scopeName: 'source.httpspec'
}

export default grammar
