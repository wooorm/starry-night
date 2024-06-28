// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Nixinova/NovaGrammars>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [
    '.4dform',
    '.4dproject',
    '.avsc',
    '.epj',
    '.geojson',
    '.gltf',
    '.har',
    '.ice',
    '.ipynb',
    '.json',
    '.json',
    '.json',
    '.json-tmlanguage',
    '.jsonl',
    '.maxhelp',
    '.maxpat',
    '.maxproj',
    '.mcmeta',
    '.mxt',
    '.pat',
    '.sarif',
    '.tfstate',
    '.tfstate.backup',
    '.topojson',
    '.webapp',
    '.webmanifest',
    '.yy',
    '.yyp'
  ],
  names: [
    'ecere-projects',
    'geojson',
    'ipython-notebook',
    'json',
    'jsonl',
    'jupyter-notebook',
    'max',
    'max/msp',
    'maxmsp',
    'oasv2-json',
    'oasv3-json',
    'sarif',
    'topojson'
  ],
  patterns: [{include: '#main'}],
  repository: {
    array: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.block.array.begin.json'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.definition.block.array.end.json'}},
      name: 'meta.block.array.json',
      patterns: [{include: '#main'}]
    },
    boolean: {
      match: '(?<=^|[,:\\s\\[])(true|false)(?=$|[,\\s}\\]])',
      name: 'constant.language.boolean.$1.json'
    },
    delimiters: {
      patterns: [
        {
          match: '(?<=")\\s*:',
          name: 'punctuation.separator.key-value.colon.json'
        },
        {match: ',(?!\\s*[}\\]])', name: 'punctuation.separator.comma.json'}
      ]
    },
    escapes: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.escape.backslash.json'}},
          match: '(\\\\)["\\\\/bfnrt]',
          name: 'constant.character.escape.json'
        },
        {
          captures: {1: {name: 'punctuation.definition.escape.backslash.json'}},
          match: '(\\\\)u[0-9A-Fa-f]{4}',
          name: 'constant.character.escape.unicode.json'
        },
        {match: '\\\\.', name: 'invalid.illegal.unrecognised-escape.json'}
      ]
    },
    invalid: {
      match: '\\S[^}\\]]*',
      name: 'invalid.illegal.unexpected-character.json'
    },
    key: {
      captures: {
        1: {name: 'punctuation.definition.key.start.json'},
        2: {patterns: [{include: '#escapes'}]},
        3: {name: 'punctuation.definition.key.end.json'}
      },
      match: '(")((?:[^\\\\"]|\\\\.)*+)(")(?=\\s*:)',
      name: 'entity.name.tag.key.json'
    },
    main: {
      patterns: [
        {include: '#object'},
        {include: '#key'},
        {include: '#array'},
        {include: '#string'},
        {include: '#number'},
        {include: '#boolean'},
        {include: '#null'},
        {include: '#delimiters'},
        {include: '#invalid'}
      ]
    },
    null: {
      match: '(?<=^|[,:\\s\\[])null(?=$|[,\\s}\\]])',
      name: 'constant.language.null.json'
    },
    number: {
      patterns: [
        {
          match: '-?0\\d+(?:\\.\\d+)?(?:[eE][-+]?[0-9]+)?',
          name: 'invalid.illegal.leading-zero.json'
        },
        {
          match: '-?\\d+(?:\\.\\d+)?(?:[eE][-+]?[0-9]+)?',
          name: 'constant.numeric.json'
        }
      ]
    },
    object: {
      begin: '{',
      beginCaptures: {
        0: {name: 'punctuation.definition.block.object.begin.json'}
      },
      end: '}',
      endCaptures: {0: {name: 'punctuation.definition.block.object.end.json'}},
      name: 'meta.block.object.json',
      patterns: [{include: '#main'}]
    },
    string: {
      captures: {
        1: {name: 'punctuation.definition.string.begin.json'},
        2: {patterns: [{include: '#escapes'}]},
        3: {name: 'punctuation.definition.string.end.json'}
      },
      match: '(")((?:[^\\\\"]|\\\\.)*+)(")(?!\\s*:)',
      name: 'string.quoted.double.json'
    }
  },
  scopeName: 'source.json'
}

export default grammar
