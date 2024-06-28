// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.xml'],
  extensions: [],
  names: ['ant-build-system'],
  patterns: [
    {
      begin: '<[!%]--',
      captures: {0: {name: 'punctuation.definition.comment.xml.ant'}},
      end: '--%?>',
      name: 'comment.block.xml.ant'
    },
    {
      begin: '(<target)\\b',
      captures: {1: {name: 'entity.name.tag.target.xml.ant'}},
      end: '(/?>)',
      name: 'meta.tag.target.xml.ant',
      patterns: [{include: '#tagStuff'}]
    },
    {
      begin: '(<macrodef)\\b',
      captures: {1: {name: 'entity.name.tag.macrodef.xml.ant'}},
      end: '(/?>)',
      name: 'meta.tag.macrodef.xml.ant',
      patterns: [{include: '#tagStuff'}]
    },
    {
      begin: '(</?)(?:([-_a-zA-Z0-9]+)((:)))?([-_a-zA-Z0-9:]+)',
      captures: {
        1: {name: 'punctuation.definition.tag.xml.ant'},
        2: {name: 'entity.name.tag.namespace.xml.ant'},
        3: {name: 'entity.name.tag.xml.ant'},
        4: {name: 'punctuation.separator.namespace.xml.ant'},
        5: {name: 'entity.name.tag.localname.xml.ant'}
      },
      end: '(/?>)',
      name: 'meta.tag.xml.ant',
      patterns: [{include: '#tagStuff'}]
    },
    {include: 'text.xml'},
    {include: '#javaProperties'},
    {include: '#javaAttributes'}
  ],
  repository: {
    doublequotedString: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.xml.ant'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.xml.ant'}},
      name: 'string.quoted.double.xml.ant',
      patterns: [{include: '#javaAttributes'}, {include: '#javaProperties'}]
    },
    javaAttributes: {
      begin: '@\\{',
      beginCaptures: {0: {name: 'punctuation.section.embedded.begin.ant'}},
      contentName: 'source.java',
      end: '(\\})',
      endCaptures: {
        0: {name: 'punctuation.section.embedded.end.ant'},
        1: {name: 'source.java'}
      },
      name: 'meta.embedded.line.java'
    },
    javaProperties: {
      begin: '\\$\\{',
      beginCaptures: {0: {name: 'punctuation.section.embedded.begin.ant'}},
      contentName: 'source.java-props',
      end: '(\\})',
      endCaptures: {
        0: {name: 'punctuation.section.embedded.end.ant'},
        1: {name: 'source.java-props'}
      },
      name: 'meta.embedded.line.java-props'
    },
    singlequotedString: {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.xml.ant'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.xml.ant'}},
      name: 'string.quoted.single.xml.ant',
      patterns: [{include: '#javaAttributes'}, {include: '#javaProperties'}]
    },
    tagStuff: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.other.attribute-name.namespace.xml.ant'},
            2: {name: 'entity.other.attribute-name.xml.ant'},
            3: {name: 'punctuation.separator.namespace.xml.ant'},
            4: {name: 'entity.other.attribute-name.localname.xml.ant'}
          },
          match: ' (?:([-_a-zA-Z0-9]+)((:)))?([_a-zA-Z-]+)='
        },
        {include: '#doublequotedString'},
        {include: '#singlequotedString'}
      ]
    }
  },
  scopeName: 'text.xml.ant'
}

export default grammar
