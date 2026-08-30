// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/tabatkins/bikeshed>
// and licensed `cc0-1.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.bs'],
  names: ['bikeshed'],
  patterns: [
    {match: '<<[^>]+>>', name: 'string.quoted.double.csswg'},
    {match: '<\\{[^}]+\\}>', name: 'string.quoted.double.csswg'},
    {begin: '{{', end: '\\}\\}', name: 'string.quoted.double.csswg'},
    {begin: '\\[=', end: '=]', name: 'string.quoted.double.csswg'},
    {match: '\\[\\[[^\\]]+\\]\\]', name: 'constant.other.biblioLink.csswg'},
    {match: '\\[[^\\]]+\\]', name: 'constant.language.csswg'},
    {begin: "''", end: "''", name: 'string.quoted.double.csswg'},
    {match: "(?<!\\w)'[^']+'", name: 'string.quoted.single.csswg'},
    {begin: '<h\\d', end: '</h\\d>', name: 'invalid.illegal.heading.csswg'},
    {
      begin: '<dfn[^>]*>',
      end: '</dfn>',
      name: 'variable.parameter.definition.csswg'
    },
    {begin: '<a[ >]', end: '</a>', name: 'string.quoted.double.csswg'},
    {
      begin: '<pre\\s+class=.*?prod.*?>',
      end: '</pre>',
      name: 'entity.production.csswg',
      patterns: [{include: '#production'}, {include: '#definition'}]
    },
    {
      begin: '<pre\\s+class=.*?metadata.*?>',
      end: '</pre>',
      name: 'entity.metadata.csswg',
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.knownKeyName.csswg'},
            2: {name: 'string.unquoted.csswg'}
          },
          match:
            '^(?i)(Abstract|Advisement Class|Assertion Class|Assume Explicit For|At Risk|Audience|Block Elements|Boilerplate|Can I Use URL|Canonical URL|Complain About|Custom Warning Text|Custom Warning Title|Dark Mode|Date|Deadline|Default Biblio Display|Default Biblio Status|Default Highlight|Default Ref Status|Die On|Die When|ED|Editor|Editor Term|Expires|External Infotrees|Favicon|Force Crossorigin|Former Editor|Group|H1|Ignore Can I Use Url Failure|Ignore MDN Failure|Ignored Terms|Ignored Vars|Image Auto Size|Implementation Report|Include Can I Use Panels|Include Mdn Panels|Indent|Indent Info|Infer Css Dfns|Informative Classes|Inline Github Issues|Inline Tag Command|Issue Class|Issue Tracker Template|Issue Tracking|Level|Line Numbers|Link Checker Timeout|Link Defaults|Local Boilerplate|Logo|Mailing List|Mailing List Archives|Markup Shorthands|Max ToC Depth|Metadata Include|Metadata Order|No Abstract|No Editor|Note Class|Opaque Elements|Org|Prepare For Tr|Previous Version|Remove Multiple Links|Repository|Required Ids|Revision|Shortname|Slim Build Artifact|Status|Status Text|Test Suite|Text Macro|Title|Toggle Diffs|TR|Tracking Vector Alt Text|Tracking Vector Class|Tracking Vector Image|Tracking Vector Image Height|Tracking Vector Image Width|Tracking Vector Title|Translate Ids|Translation|URL|Use Dfn Panels|Version History|Warning|Work Status|Wpt Display|Wpt Path Prefix|)\\s*:\\s*(.*)$'
        },
        {
          captures: {
            1: {name: 'variable.other.customKeyName.csswg'},
            2: {name: 'string.unquoted.csswg'}
          },
          match: '^\\s*(![\\w -]+)\\s*:\\s*(.*)$'
        },
        {
          captures: {1: {name: 'invalid.illegal.unknownKeyName.csswg'}},
          match: '^\\s*([\\w -]+)\\s*:\\s*.*$'
        }
      ]
    },
    {
      begin: '<pre\\s+class=.*?(propdef|descdef).*?>',
      end: '</pre>',
      name: 'entity.propdef.csswg',
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.keyName.csswg'},
            2: {name: 'string.unquoted.csswg'}
          },
          match:
            '^\\s*(?i)(Name|Value|For|Initial|Applies to|Inherited|Percentages|Media|Computed value|Animation type|Canonical order|Logical property group)\\s*:\\s*(.*)$'
        },
        {
          captures: {
            1: {name: 'variable.other.unknownKeyName.csswg'},
            2: {name: 'string.unquoted.csswg'}
          },
          match: '^\\s*([\\w -]+)\\s*:\\s*(.*)$'
        }
      ]
    },
    {begin: '</?[a-z]', end: '>', name: 'entity.name.tag.csswg'}
  ],
  repository: {
    definition: {
      begin: '<dfn( |>)',
      end: '</dfn>',
      name: 'variable.parameter.definition.csswg'
    },
    production: {match: '<<[^>]+>>', name: 'constant.other.production.csswg'}
  },
  scopeName: 'source.csswg'
}

export default grammar
