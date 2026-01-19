// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/usebruno/bruno-ide-extensions>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.bru'],
  names: ['bru'],
  patterns: [
    {include: '#strings'},
    {include: '#meta-block'},
    {include: '#get-block'},
    {include: '#post-block'},
    {include: '#put-block'},
    {include: '#delete-block'},
    {include: '#options-block'},
    {include: '#head-block'},
    {include: '#trace-block'},
    {include: '#connect-block'},
    {include: '#query-block'},
    {include: '#headers-block'},
    {include: '#body-block'},
    {include: '#body-json-block'},
    {include: '#body-text-block'},
    {include: '#body-xml-block'},
    {include: '#body-form-urlencoded-block'},
    {include: '#body-multipart-form-block'},
    {include: '#body-graphql-block'},
    {include: '#body-graphql-vars-block'},
    {include: '#assert-block'},
    {include: '#vars-block'},
    {include: '#vars-req-block'},
    {include: '#vars-res-block'},
    {include: '#script-req-block'},
    {include: '#script-res-block'},
    {include: '#tests-block'},
    {include: '#docs-block'}
  ],
  repository: {
    'assert-block': {
      begin: '^assert\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.assert-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    'body-block': {
      begin: '^body\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.body-block.bruno',
      patterns: [{include: 'source.json'}]
    },
    'body-form-urlencoded-block': {
      begin: '^body\\:form-urlencoded\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.body-form-urlencoded-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    'body-graphql-block': {
      begin: '^body\\:graphql\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.body-graphql-block.bruno',
      patterns: [{include: 'source.graphql'}]
    },
    'body-graphql-vars-block': {
      begin: '^body\\:graphql\\:vars\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.body-graphql-vars-block.bruno',
      patterns: [{include: 'source.json'}]
    },
    'body-json-block': {
      begin: '^body\\:json\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.body-json-block.bruno',
      patterns: [{include: 'source.json'}]
    },
    'body-multipart-form-block': {
      begin: '^body\\:multipart-form\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.body-multipart-form-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    'body-text-block': {
      begin: '^body\\:text\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.body-text-block.bruno',
      patterns: [{include: 'text.md'}]
    },
    'body-xml-block': {
      begin: '^body\\:xml\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.body-xml-block.bruno',
      patterns: [{include: 'text.xml'}]
    },
    'connect-block': {
      begin: '^connect\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.connect-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    'delete-block': {
      begin: '^delete\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.delete-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    dictionary: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.tag.bruno'},
            2: {name: 'string.bruno'}
          },
          match: '^\\s*([^\\:]+)[\\:]\\s+([^\\n]+)\\s*$'
        }
      ]
    },
    'docs-block': {
      begin: '^docs\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}',
      endCaptures: {0: {name: 'keyword.bruno'}},
      name: 'meta.docs-block.bruno',
      patterns: [{include: 'text.md'}]
    },
    'get-block': {
      begin: '^get\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.get-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    'head-block': {
      begin: '^head\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.head-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    'headers-block': {
      begin: '^headers\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.headers-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    'meta-block': {
      begin: '^meta\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.meta-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    'options-block': {
      begin: '^options\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.options-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    'post-block': {
      begin: '^post\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.post-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    'put-block': {
      begin: '^put\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.put-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    'query-block': {
      begin: '^query\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.query-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    'script-req-block': {
      begin: '^script\\:pre-request\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}',
      name: 'meta.script-req-block.bruno',
      patterns: [{include: 'source.js'}]
    },
    'script-res-block': {
      begin: '^script\\:post-response\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}',
      name: 'meta.script-res-block.bruno',
      patterns: [{include: 'source.js'}]
    },
    strings: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.bruno',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.bruno'}]
    },
    'tests-block': {
      begin: '^tests\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}',
      endCaptures: {0: {name: 'keyword.bruno'}},
      name: 'meta.tests-block.bruno',
      patterns: [{include: 'source.js'}]
    },
    'trace-block': {
      begin: '^trace\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.trace-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    'vars-block': {
      begin: '^vars\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.vars-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    'vars-req-block': {
      begin: '^vars\\:pre-request\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.vars-req-block.bruno',
      patterns: [{include: '#dictionary'}]
    },
    'vars-res-block': {
      begin: '^vars\\:post-response\\s*\\{',
      beginCaptures: {0: {name: 'keyword.bruno'}},
      end: '^\\}\\s*',
      name: 'meta.vars-res-block.bruno',
      patterns: [{include: '#dictionary'}]
    }
  },
  scopeName: 'source.bru'
}

export default grammar
