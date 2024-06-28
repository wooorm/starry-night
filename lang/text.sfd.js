// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-fontforge>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.fontforge'],
  extensions: ['.sfd'],
  names: ['spline-font-database'],
  patterns: [{include: '#main'}],
  repository: {
    address: {
      match: '\\d+[xX][A-Fa-f0-9]+',
      name: 'constant.numeric.hexadecimal.sfd'
    },
    colour: {
      captures: {1: {name: 'punctuation.definition.colour.sfd'}},
      match: '(#)[A-Fa-f0-9]{3,}|(?<=\\s)[A-Fa-f0-9]{6,8}',
      name: 'constant.other.hex.colour.sfd'
    },
    comment: {
      begin: '^(U?Comments?)(:)',
      beginCaptures: {
        1: {name: 'variable.assignment.property.sfd'},
        2: {name: 'punctuation.separator.dictionary.key-value.sfd'}
      },
      contentName: 'comment.line.field.sfd',
      end: '$',
      name: 'meta.user-comments.sfd',
      patterns: [{include: '#source.fontforge#stringEscapes'}]
    },
    control: {
      match: '\\b(Fore|Back|SplineSet|^End\\w+)\\b',
      name: 'keyword.control.${1:/downcase}.sfd'
    },
    copyright: {
      begin: '^(Copyright)(:)',
      beginCaptures: {
        1: {name: 'variable.assignment.property.sfd'},
        2: {name: 'punctuation.separator.dictionary.key-value.sfd'}
      },
      contentName: 'string.unquoted.copyright.info.sfd',
      end: '$',
      name: 'meta.copyright-string.sfd',
      patterns: [{include: 'source.fontforge#stringEscapes'}]
    },
    encoding: {
      match: '(?i)\\b(ISO[-\\w]+)(?<=\\d)(?=\\s|$)',
      name: 'constant.language.encoding.sfd'
    },
    gaspTable: {
      begin: '^(GaspTable)(:|(?=\\s))',
      beginCaptures: {
        1: {name: 'variable.assignment.property.sfd'},
        2: {name: 'punctuation.separator.dictionary.key-value.sfd'}
      },
      end: '$',
      name: 'meta.gasp-table.sfd',
      patterns: [{include: '#main'}]
    },
    header: {
      captures: {
        1: {name: 'keyword.control.start.file.afm'},
        2: {name: 'punctuation.separator.dictionary.key-value.sfd'}
      },
      match: '^(SplineFontDB)(:)',
      name: 'meta.header.sfd'
    },
    image: {
      begin: '^(Image)(?=:)(.+)$',
      beginCaptures: {
        1: {name: 'keyword.control.begin.image.sfd'},
        2: {patterns: [{include: '#main'}]}
      },
      contentName: 'string.unquoted.raw.data.sfd',
      end: '^(EndImage)\\b',
      endCaptures: {1: {name: 'keyword.control.end.image.sfd'}},
      name: 'meta.image.sfd'
    },
    main: {
      patterns: [
        {include: '#punctuation'},
        {include: '#private'},
        {include: '#header'},
        {include: '#names'},
        {include: '#image'},
        {include: '#pickleData'},
        {include: '#sections'},
        {include: '#copyright'},
        {include: '#comment'},
        {include: '#gaspTable'},
        {include: '#property'},
        {include: '#control'},
        {include: '#address'},
        {include: '#encoding'},
        {include: 'source.fontforge#shared'},
        {include: '#colour'},
        {include: '#unquoted'}
      ]
    },
    names: {
      captures: {
        1: {name: 'variable.assignment.property.sfd'},
        3: {name: 'punctuation.separator.dictionary.key-value.sfd'},
        4: {name: 'entity.name.${2:/downcase},sfd'}
      },
      match: '^((\\w+)Name)(:)\\s*(\\S+.*?)\\s$',
      name: 'meta.dictionary.key-value.sfd'
    },
    pickleData: {
      begin: '^(PickledData)(:)\\s*(")',
      beginCaptures: {
        1: {name: 'variable.assignment.property.sfd'},
        2: {name: 'punctuation.separator.dictionary.key-value.sfd'},
        3: {name: 'punctuation.definition.string.begin.sfd'}
      },
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.sfd'}},
      name: 'meta.pickle-data.sfd',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.sfd'}]
    },
    private: {
      begin: '^BeginPrivate(?=:)',
      beginCaptures: {0: {name: 'keyword.control.begin.private.sfd'}},
      end: '^EndPrivate\\b',
      endCaptures: {0: {name: 'keyword.control.end.private.sfd'}},
      name: 'meta.section.private.sfd',
      patterns: [
        {match: '^\\S+', name: 'entity.name.private.property.sfd'},
        {include: '#main'}
      ]
    },
    property: {
      captures: {
        1: {name: 'variable.assignment.property.sfd'},
        2: {name: 'punctuation.separator.dictionary.key-value.sfd'}
      },
      match: '^([^:]+)(:)',
      name: 'meta.dictionary.key-value.sfd'
    },
    punctuation: {
      patterns: [
        {match: '<|>', name: 'punctuation.definition.brackets.angle.sfd'},
        {match: '[{}]', name: 'punctuation.definition.brackets.curly.sfd'}
      ]
    },
    sections: {
      begin: '^(Start|Begin)([A-Z]\\w+)(?=:)',
      beginCaptures: {0: {name: 'keyword.control.begin.${2:/downcase}.sfd'}},
      end: '^(End\\2)\\b',
      endCaptures: {0: {name: 'keyword.control.end.${2:/downcase}.sfd'}},
      name: 'meta.section.${2:/downcase}.sfd',
      patterns: [{include: '#main'}]
    },
    unquoted: {match: '\\S+', name: 'string.unquoted.property.sfd'}
  },
  scopeName: 'text.sfd'
}

export default grammar
