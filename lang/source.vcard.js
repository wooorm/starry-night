// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/cstrachan88/vscode-vcard>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['vcard', 'virtual-contact-file', 'electronic-business-card'],
  patterns: [
    {
      begin: '^BEGIN:VCARD$',
      end: '^END:VCARD$',
      name: 'support.function.vcard',
      patterns: [
        {include: '#versionNum'},
        {include: '#properties'},
        {include: '#extensionProperties'},
        {include: '#attributeTypes'},
        {include: '#attributeValues'},
        {include: '#values'},
        {include: '#valuesMultiline'}
      ]
    }
  ],
  repository: {
    attributeTypes: {
      patterns: [
        {
          match: '(?<=;)\\b\\w+?\\b(?=[:;=])',
          name: 'entity.name.type.attribute.vcard'
        }
      ]
    },
    attributeValues: {
      patterns: [
        {match: '(?<=\\=).+?(?=[:;])', name: 'variable.attribute.vcard'}
      ]
    },
    extensionProperties: {
      patterns: [
        {match: '^\\S.*?(?=:)', name: 'keyword.other.expansion.property.vcard'}
      ]
    },
    properties: {
      patterns: [
        {
          match:
            '^\\b(VERSION|ADR|AGENT|ANNIVERSARY|BDAY|CALADRURI|CALURI|CATEGORIES|CLASS|CLIENTPIDMAP|EMAIL|FBURL|FN|GENDER|GEO|IMPP|KEY|KIND|LABEL|LANG|LOGO|MAILER|MEMBER|N|NAME|NICKNAME|NOTE|ORG|PHOTO|PRODID|PROFILE|RELATED|REV|ROLE|SORT-STRING|SOUND|SOURCE|TEL|TITLE|TZ|UID|URL|XML)\\b',
          name: 'keyword.control.property.vcard'
        }
      ]
    },
    values: {
      patterns: [{match: '(?<=:).+', name: 'string.unquoted.value.vcard'}]
    },
    valuesMultiline: {
      patterns: [{match: '^ \\S.*', name: 'string.unquoted.value.vcard'}]
    },
    versionNum: {
      patterns: [
        {match: '(?<=^VERSION:).+$', name: 'variable.language.version.vcard'}
      ]
    }
  },
  scopeName: 'source.vcard'
}

export default grammar
