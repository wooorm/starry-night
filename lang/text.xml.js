// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [
    '.adml',
    '.admx',
    '.ant',
    '.axaml',
    '.axml',
    '.brd',
    '.builds',
    '.ccproj',
    '.ccxml',
    '.clixml',
    '.cproject',
    '.cscfg',
    '.csdef',
    '.csproj',
    '.ct',
    '.dae',
    '.depproj',
    '.dita',
    '.ditamap',
    '.ditaval',
    '.dll.config',
    '.dotsettings',
    '.filters',
    '.fsproj',
    '.fxml',
    '.glade',
    '.gmx',
    '.grxml',
    '.hzp',
    '.iml',
    '.ivy',
    '.jelly',
    '.jsproj',
    '.kml',
    '.launch',
    '.lvclass',
    '.lvlib',
    '.lvproj',
    '.mdpolicy',
    '.mjml',
    '.mxml',
    '.natvis',
    '.ndproj',
    '.nproj',
    '.nuspec',
    '.odd',
    '.osm',
    '.owl',
    '.pkgproj',
    '.proj',
    '.props',
    '.ps1xml',
    '.psc1',
    '.pt',
    '.qhelp',
    '.rdf',
    '.resx',
    '.rss',
    '.sch',
    '.sch',
    '.scxml',
    '.sfproj',
    '.shproj',
    '.srdf',
    '.storyboard',
    '.sublime-snippet',
    '.targets',
    '.tml',
    '.ui',
    '.urdf',
    '.ux',
    '.vbproj',
    '.vcxproj',
    '.vsixmanifest',
    '.vssettings',
    '.vstemplate',
    '.vxml',
    '.wixproj',
    '.wsdl',
    '.wsf',
    '.wxi',
    '.wxl',
    '.wxs',
    '.x3d',
    '.xacro',
    '.xaml',
    '.xib',
    '.xlf',
    '.xliff',
    '.xmi',
    '.xml',
    '.xml.dist',
    '.xmp',
    '.xpl',
    '.xproc',
    '.xproj',
    '.xsd',
    '.xsp-config',
    '.xsp.metadata',
    '.xspec',
    '.xul',
    '.zcml'
  ],
  names: [
    'collada',
    'eagle',
    'labview',
    'rss',
    'web-ontology-language',
    'wsdl',
    'xml',
    'xpages',
    'xproc',
    'xsd'
  ],
  patterns: [
    {
      begin: '(<\\?)\\s*([-_a-zA-Z0-9]+)',
      captures: {
        1: {name: 'punctuation.definition.tag.xml'},
        2: {name: 'entity.name.tag.xml'}
      },
      end: '(\\?>)',
      name: 'meta.tag.metadata.processing.xml',
      patterns: [
        {match: ' ([a-zA-Z-]+)', name: 'entity.other.attribute-name.xml'},
        {include: '#doublequotedString'},
        {include: '#singlequotedString'}
      ]
    },
    {
      begin: '(<!)(DOCTYPE)\\s+([:a-zA-Z_][:a-zA-Z0-9_.-]*)',
      captures: {
        1: {name: 'punctuation.definition.tag.xml'},
        2: {name: 'entity.name.tag.xml'},
        3: {name: 'entity.other.attribute-name.documentroot.xml'}
      },
      end: '\\s*(>)',
      name: 'meta.tag.metadata.doctype.xml',
      patterns: [{include: '#internalSubset'}]
    },
    {
      begin: '<[!%]--',
      captures: {0: {name: 'punctuation.definition.comment.xml'}},
      end: '--%?>',
      name: 'comment.block.xml'
    },
    {
      begin:
        '(<)((?:([-_a-zA-Z0-9]+)((:)))?([-_a-zA-Z0-9:]+))(?=(\\s[^>]*)?></\\2>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.xml'},
        3: {name: 'entity.name.tag.namespace.xml'},
        4: {name: 'entity.name.tag.xml'},
        5: {name: 'punctuation.separator.namespace.xml'},
        6: {name: 'entity.name.tag.localname.xml'}
      },
      end: '(>(<))/(?:([-_a-zA-Z0-9]+)((:)))?([-_a-zA-Z0-9:]+)(>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.xml'},
        2: {name: 'meta.scope.between-tag-pair.xml'},
        3: {name: 'entity.name.tag.namespace.xml'},
        4: {name: 'entity.name.tag.xml'},
        5: {name: 'punctuation.separator.namespace.xml'},
        6: {name: 'entity.name.tag.localname.xml'},
        7: {name: 'punctuation.definition.tag.xml'}
      },
      name: 'meta.tag.no-content.xml',
      patterns: [{include: '#tagStuff'}]
    },
    {
      begin: '(</?)(?:([-_a-zA-Z0-9]+)((:)))?([-_a-zA-Z0-9:]+)',
      captures: {
        1: {name: 'punctuation.definition.tag.xml'},
        2: {name: 'entity.name.tag.namespace.xml'},
        3: {name: 'entity.name.tag.xml'},
        4: {name: 'punctuation.separator.namespace.xml'},
        5: {name: 'entity.name.tag.localname.xml'}
      },
      end: '(/?>)',
      name: 'meta.tag.xml',
      patterns: [{include: '#tagStuff'}]
    },
    {include: '#entity'},
    {include: '#bare-ampersand'},
    {
      begin: '<%@',
      beginCaptures: {0: {name: 'punctuation.section.embedded.begin.xml'}},
      end: '%>',
      endCaptures: {0: {name: 'punctuation.section.embedded.end.xml'}},
      name: 'source.java-props.embedded.xml',
      patterns: [
        {match: 'page|include|taglib', name: 'keyword.other.page-props.xml'}
      ]
    },
    {
      begin: '<%[!=]?(?!--)',
      beginCaptures: {0: {name: 'punctuation.section.embedded.begin.xml'}},
      end: '(?!--)%>',
      endCaptures: {0: {name: 'punctuation.section.embedded.end.xml'}},
      name: 'source.java.embedded.xml',
      patterns: [{include: 'source.java'}]
    },
    {
      begin: '<!\\[CDATA\\[',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.xml'}},
      end: ']]>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.xml'}},
      name: 'string.unquoted.cdata.xml'
    }
  ],
  repository: {
    EntityDecl: {
      begin:
        '(<!)(ENTITY)\\s+(%\\s+)?([:a-zA-Z_][:a-zA-Z0-9_.-]*)(\\s+(?:SYSTEM|PUBLIC)\\s+)?',
      captures: {
        1: {name: 'punctuation.definition.tag.xml'},
        2: {name: 'keyword.other.entity.xml'},
        3: {name: 'punctuation.definition.entity.xml'},
        4: {name: 'variable.language.entity.xml'},
        5: {name: 'keyword.other.entitytype.xml'}
      },
      end: '(>)',
      patterns: [
        {include: '#doublequotedString'},
        {include: '#singlequotedString'}
      ]
    },
    'bare-ampersand': {match: '&', name: 'invalid.illegal.bad-ampersand.xml'},
    doublequotedString: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.xml'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.xml'}},
      name: 'string.quoted.double.xml',
      patterns: [{include: '#entity'}, {include: '#bare-ampersand'}]
    },
    entity: {
      captures: {
        1: {name: 'punctuation.definition.constant.xml'},
        3: {name: 'punctuation.definition.constant.xml'}
      },
      match: '(&)([:a-zA-Z_][:a-zA-Z0-9_.-]*|#[0-9]+|#x[0-9a-fA-F]+)(;)',
      name: 'constant.character.entity.xml'
    },
    internalSubset: {
      begin: '(\\[)',
      captures: {1: {name: 'punctuation.definition.constant.xml'}},
      end: '(\\])',
      name: 'meta.internalsubset.xml',
      patterns: [{include: '#EntityDecl'}, {include: '#parameterEntity'}]
    },
    parameterEntity: {
      captures: {
        1: {name: 'punctuation.definition.constant.xml'},
        3: {name: 'punctuation.definition.constant.xml'}
      },
      match: '(%)([:a-zA-Z_][:a-zA-Z0-9_.-]*)(;)',
      name: 'constant.character.parameter-entity.xml'
    },
    singlequotedString: {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.xml'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.xml'}},
      name: 'string.quoted.single.xml',
      patterns: [{include: '#entity'}, {include: '#bare-ampersand'}]
    },
    tagStuff: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.other.attribute-name.namespace.xml'},
            2: {name: 'entity.other.attribute-name.xml'},
            3: {name: 'punctuation.separator.namespace.xml'},
            4: {name: 'entity.other.attribute-name.localname.xml'}
          },
          match: ' (?:([-_a-zA-Z0-9]+)((:)))?([-_a-zA-Z0-9]+)='
        },
        {include: '#doublequotedString'},
        {include: '#singlequotedString'}
      ]
    }
  },
  scopeName: 'text.xml'
}

export default grammar
