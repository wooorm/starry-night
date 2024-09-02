// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/AdguardTeam/VscodeAdblockSyntax>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.txt'],
  names: [
    'adblock-filter-list',
    'ad-block-filters',
    'ad-block',
    'adb',
    'adblock'
  ],
  patterns: [
    {include: '#adblockAgent'},
    {include: '#preprocessor'},
    {include: '#comments'},
    {include: '#snippetRulesABP'},
    {include: '#cssRules'},
    {include: '#scriptletRules'},
    {include: '#scriptletRulesUBO'},
    {include: '#jsRules'},
    {include: '#contentRules'},
    {include: '#elemhideRules'},
    {include: '#basicRulesNoUrl'},
    {include: '#basicRulesRegex'},
    {include: '#basicRules'}
  ],
  repository: {
    adblockAgent: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.array.start.adblock.agent'},
            2: {
              patterns: [
                {include: '#adblockData'},
                {match: ';', name: 'punctuation.separator'},
                {match: '.*', name: 'invalid.illegal'}
              ]
            },
            3: {name: 'punctuation.definition.array.end.adblock.agent'}
          },
          match: '^(\\[)([^\\]]+)(\\])\\s*$'
        }
      ]
    },
    adblockData: {
      patterns: [
        {
          captures: {
            1: {name: 'constant.language.agent.adblocker.name'},
            2: {name: 'constant.numeric.decimal'}
          },
          match:
            '(?x)\n  (?:\\s*)\n  (\n      [Aa]d[Bb]lock(?:\\s[Pp]lus)?\n      |u[Bb]lock(?:\\s[Oo]rigin)?\n      |[Aa]d[Gg]uard\n  )\n  (?:\\s+(\\d+(?:\\.\\d+)*+\\+?))?\n  (?:\\s*)'
        }
      ]
    },
    appListPipeSeparated: {
      patterns: [
        {
          captures: {
            2: {name: 'keyword.other.adblock'},
            3: {name: 'string.unquoted.adblock'},
            4: {name: 'punctuation.definition.adblock'}
          },
          match: '((~?)([a-zA-Z0-9.-_]+)(\\|?))'
        },
        {match: '.*', name: 'invalid.illegal.app-list'}
      ]
    },
    basicRules: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#urlPattern'}]},
            3: {name: 'keyword.control.adblock'},
            4: {patterns: [{include: '#basicRulesOptions'}]}
          },
          match: '^(.+?)((\\$(?!\\/))(.*))?$'
        }
      ]
    },
    basicRulesNoUrl: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.adblock'},
            2: {patterns: [{include: '#basicRulesOptions'}]}
          },
          match: '^(\\$)(.+)$'
        }
      ]
    },
    basicRulesOptions: {
      patterns: [
        {
          captures: {1: {name: 'string.regexp.adblock'}},
          match:
            'replace=((\\/)(((\\\\\\/)|[^,/]|(\\\\,))+?)(\\/)(((\\\\\\/)|[^,/]|(\\\\,))*?)(\\/)([a-z]*))',
          name: 'keyword.other.adblock'
        },
        {
          captures: {
            1: {name: 'keyword.other.adblock'},
            2: {name: 'keyword.operator.adblock'},
            3: {patterns: [{include: '#domainListPipeSeparated'}]}
          },
          match: '(domain|denyallow|from|to)(=)([^,]+)'
        },
        {
          captures: {
            1: {name: 'keyword.other.adblock'},
            2: {name: 'keyword.operator.adblock'},
            3: {patterns: [{include: '#appListPipeSeparated'}]}
          },
          match: '(app)(=)([^,]+)'
        },
        {
          captures: {
            1: {name: 'keyword.other.adblock'},
            2: {name: 'keyword.operator.adblock'},
            3: {patterns: [{include: '#dnsTypesPipeSeparated'}]}
          },
          match: '(dnstype)(=)([^,]+)'
        },
        {
          captures: {
            1: {name: 'keyword.other.adblock'},
            2: {name: 'keyword.operator.adblock'},
            3: {patterns: [{include: '#dnsClientsPipeSeparated'}]}
          },
          match: '(client|ctag)(=)(((\\\\,)|[^,])+)'
        },
        {
          captures: {
            1: {name: 'keyword.other.adblock'},
            2: {name: 'keyword.operator.adblock'},
            3: {name: 'string.unquoted.adblock'}
          },
          match: '(redirect|redirect-rule|csp|cookie)(=)?(((\\\\,)|[^,])+)?',
          name: 'keyword.other.adblock'
        },
        {
          captures: {
            1: {name: 'keyword.other.adblock'},
            2: {name: 'keyword.operator.adblock'},
            3: {
              patterns: [
                {match: ';', name: 'keyword.other.delimiter'},
                {match: '[^;]*', name: 'string.unquoted.adblock'}
              ]
            }
          },
          match: '(dnsrewrite)(=)(((\\\\,)|[^,])+)',
          name: 'keyword.other.adblock'
        },
        {
          captures: {
            1: {name: 'keyword.other.adblock'},
            2: {name: 'keyword.operator.adblock'},
            3: {
              patterns: [
                {match: ':', name: 'keyword.other.delimiter'},
                {match: '[^:]*', name: 'string.unquoted.adblock'}
              ]
            }
          },
          match: '(removeheader)(=)?(((\\\\,)|[^,])+)?',
          name: 'keyword.other.adblock'
        },
        {
          captures: {
            1: {name: 'keyword.other.adblock'},
            2: {name: 'keyword.operator.adblock'},
            3: {name: 'keyword.other.adblock'},
            4: {name: 'string.unquoted.adblock'}
          },
          match: '(rewrite)(=)(abp-resource:)([^,]+)',
          name: 'keyword.other.adblock'
        },
        {
          captures: {
            1: {name: 'keyword.other.adblock'},
            2: {name: 'keyword.operator.adblock'},
            3: {name: 'keyword.other.adblock'},
            4: {name: 'string.unquoted.adblock'}
          },
          match: '(removeparam|queryprune)(=)?(~)?(((\\\\,)|[^,])+)?',
          name: 'keyword.other.adblock'
        },
        {
          captures: {
            1: {name: 'keyword.other.adblock'},
            2: {name: 'keyword.operator.adblock'},
            3: {
              patterns: [
                {
                  match: '(?i)(connect|delete|get|head|options|patch|post|put)',
                  name: 'string.unquoted.adblock'
                },
                {match: '~|\\|', name: 'keyword.operator.adblock'},
                {match: '.+', name: 'invalid.illegal.method-value'}
              ]
            }
          },
          match: '(method)(=)([^,]+)'
        },
        {
          captures: {
            1: {name: 'keyword.other.adblock'},
            2: {name: 'keyword.operator.adblock'},
            3: {
              patterns: [
                {
                  match:
                    '(?i)(no-referrer|no-referrer-when-downgrade|origin|origin-when-cross-origin|same-origin|strict-origin|strict-origin-when-cross-origin|unsafe-url)',
                  name: 'string.unquoted.adblock'
                },
                {match: '~|\\|.+', name: 'invalid.illegal.referrerpolicy-value'}
              ]
            }
          },
          match: '(referrerpolicy)(=)?((\\w|-)+)?'
        },
        {
          captures: {
            1: {name: 'keyword.other.adblock'},
            2: {name: 'keyword.operator.adblock'},
            3: {name: 'string.unquoted.adblock'}
          },
          match: '(permissions)(=)?(((\\\\,)|[^,])+)?'
        },
        {
          captures: {
            1: {name: 'keyword.other.adblock'},
            2: {name: 'keyword.operator.adblock'},
            3: {name: 'string.unquoted.adblock'}
          },
          match: '(header)(=)([^,]+)'
        },
        {
          match:
            '(inline-script|inline-font|mp4|empty|badfilter|genericblock|generichide|network|popup|popunder|important|replace|stealth)',
          name: 'keyword.other.adblock'
        },
        {
          match:
            '(~?)(first-party|third-party|match-case|elemhide|content|jsinject|urlblock|extension|all|strict1p|strict3p|1p|3p|css|frame|ghide|ehide|shide|specifichide)',
          name: 'keyword.other.adblock'
        },
        {
          match:
            '(~)?(document|doc|font|image|media|object|other|ping|beacon|script|stylesheet|css|subdocument|frame|websocket|xmlhttprequest|xhr|webrtc)(,|$)',
          name: 'keyword.other.adblock'
        },
        {
          match: '(~)?(object-subrequest)',
          name: 'invalid.illegal.removed.modifier'
        },
        {match: ',', name: 'punctuation.definition.adblock'},
        {match: '\\$', name: 'invalid.illegal.redundant.modifier.separator'}
      ]
    },
    basicRulesRegex: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#regularExpression'}]},
            2: {name: 'keyword.control.adblock'},
            3: {patterns: [{include: '#basicRulesOptions'}]}
          },
          match:
            '^(\\/[^\\/\\\\]*(?:\\\\.[^\\/\\\\]*)*\\/[dgimsuy]*)(?:(\\$)(.+))?$'
        }
      ]
    },
    blockingScriptletRules: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#cosmeticRulesOptions'}]},
            2: {patterns: [{include: '#domainListCommaSeparated'}]},
            3: {name: 'keyword.control.adblock'},
            4: {name: 'entity.name.function.adblock'},
            5: {name: 'punctuation.section.adblock'},
            6: {patterns: [{include: '#scriptletFunction'}]},
            7: {name: 'punctuation.section.adblock'}
          },
          match:
            '(?x)\n  ^                   # Start of the line\n  \\s*                 # Optional leading whitespace\n  (\\[.+?\\])?          # Group 1. AdGuard modifier list\n  (.*)?               # Group 2. Domain list\n  (\\#%\\#)             # Group 3. Cosmetic rule marker\n  (\\/\\/scriptlet)     # Group 4. Scriptlet marker\n  (\\()                # Group 5. Opening parenthesis\n  (.*\\S.*)            # Group 6. Arguments. Note: we look for a parameter that contain at least one non-whitespace character\n  (\\))                # Group 7. Closing parenthesis\n  \\s*                 # Optional trailing whitespace\n  $                   # End of the line'
        }
      ]
    },
    comments: {
      patterns: [
        {match: '^!.*', name: 'comment.line.exclamation-sign'},
        {
          match: '^#(?!(?:@?(?:\\$?\\?|\\$|%)?#)).*',
          name: 'comment.line.hashtag-sign'
        }
      ]
    },
    contentAttributes: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.section.adblock'},
            2: {name: 'keyword.other.adblock'},
            3: {name: 'keyword.operator.adblock'},
            4: {name: 'string.quoted.adblock'},
            5: {name: 'punctuation.section.adblock'}
          },
          match: '(\\[)([^"=]+?)(\\=)(".+?")(\\])'
        },
        {match: '.*', name: 'invalid.illegal.adblock'}
      ]
    },
    contentRules: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#cosmeticRulesOptions'}]},
            2: {patterns: [{include: '#domainListCommaSeparated'}]},
            3: {name: 'keyword.control.adblock'},
            4: {name: 'entity.name.function.adblock'},
            5: {patterns: [{include: '#contentAttributes'}]}
          },
          match: '^(\\[.+?\\])?(.*?)(\\$@?\\$)(.+?)(\\[.+)?$'
        }
      ]
    },
    cosmeticRulesOptions: {
      captures: {
        1: {name: 'keyword.control.adblock'},
        2: {
          patterns: [
            {
              captures: {
                1: {name: 'keyword.other.adblock'},
                2: {name: 'keyword.operator.adblock'},
                3: {name: 'string.unquoted.adblock'}
              },
              match: '(path)(=)(((\\\\,)|[^,])+)'
            },
            {
              captures: {
                1: {name: 'keyword.other.adblock'},
                2: {name: 'keyword.operator.adblock'},
                3: {patterns: [{include: '#domainListPipeSeparated'}]}
              },
              match: '(domain)(=)([^,]+)'
            },
            {
              captures: {
                1: {name: 'keyword.other.adblock'},
                2: {name: 'keyword.operator.adblock'},
                3: {patterns: [{include: '#appListPipeSeparated'}]}
              },
              match: '(app)(=)([^,]+)'
            },
            {
              captures: {
                1: {name: 'keyword.other.adblock'},
                2: {name: 'keyword.operator.adblock'},
                3: {name: 'string.unquoted.adblock'}
              },
              match: '(url)(=)([^,]+)'
            },
            {match: '\\$', name: 'keyword.control.adblock'},
            {match: ',', name: 'punctuation.definition.adblock'},
            {match: '.*', name: 'invalid.illegal.adblock'}
          ]
        },
        3: {name: 'keyword.control.adblock'}
      },
      match: '(\\[)(.+?)(\\])'
    },
    cssRules: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#cosmeticRulesOptions'}]},
            2: {patterns: [{include: '#domainListCommaSeparated'}]},
            3: {name: 'keyword.control.adblock'},
            4: {patterns: [{include: '#cssStyle'}]}
          },
          match: '^(\\[.+?\\])?(.*?)(#@?\\$\\??#)(.+)$'
        }
      ]
    },
    cssSelector: {
      patterns: [{match: '.+', name: 'entity.name.function.adblock'}]
    },
    cssStyle: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.function.adblock'},
            2: {name: 'punctuation.section.adblock'},
            3: {name: 'entity.name.function.adblock'},
            4: {name: 'punctuation.section.adblock'},
            5: {name: 'string.quoted.adblock'},
            6: {name: 'punctuation.section.adblock'},
            7: {name: 'punctuation.section.adblock'}
          },
          match:
            '(@media[\\s]+[^\\{]*)(\\{)([\\s]*[^\\{]*)(\\{)([\\s]*[^\\}]*)(\\})[\\s]*(\\})'
        },
        {
          captures: {
            1: {name: 'entity.name.function.adblock'},
            3: {name: 'punctuation.section.adblock'},
            4: {name: 'string.quoted.adblock'},
            5: {name: 'punctuation.section.adblock'}
          },
          match: '([^{}]+)\\s*((\\{)(.+?)(\\}))'
        },
        {match: '.*', name: 'invalid.illegal.adblock'}
      ]
    },
    dnsClientsPipeSeparated: {
      patterns: [
        {
          captures: {
            2: {name: 'keyword.other.adblock'},
            3: {name: 'string.unquoted.adblock'},
            4: {name: 'punctuation.definition.adblock'}
          },
          match: '((~?)([^|]+)(\\|?))'
        },
        {match: '.*', name: 'invalid.illegal.app-list'}
      ]
    },
    dnsTypesPipeSeparated: {
      patterns: [
        {
          captures: {
            2: {name: 'keyword.other.adblock'},
            3: {name: 'string.unquoted.adblock'},
            4: {name: 'punctuation.definition.adblock'}
          },
          match: '((~?)([a-zA-Z0-9.-_]+)(\\|?))'
        },
        {match: '.*', name: 'invalid.illegal.app-list'}
      ]
    },
    domainListCommaSeparated: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.adblock'},
            2: {name: 'string.unquoted.adblock'},
            3: {name: 'punctuation.definition.adblock'}
          },
          match: '(~?)([^,]+)(,?)'
        },
        {match: '.*', name: 'invalid.illegal.domain-list'}
      ]
    },
    domainListPipeSeparated: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.other.adblock'},
            2: {name: 'string.unquoted.adblock'},
            3: {name: 'punctuation.definition.adblock'}
          },
          match: '(~?)([^|]+)(\\|?)'
        },
        {match: '.*', name: 'invalid.illegal.domain-list'}
      ]
    },
    elemhideRules: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#cosmeticRulesOptions'}]},
            2: {patterns: [{include: '#domainListCommaSeparated'}]},
            3: {name: 'keyword.control.adblock'},
            4: {patterns: [{include: '#cssSelector'}]}
          },
          match: '^(\\[.+?\\])?(.*?)(#@?\\??#\\^?)(.+)$'
        }
      ]
    },
    emptyScriptletFunction: {
      patterns: [
        {match: '\\s*\\z', name: 'entity.name.section.adblock.empty-scriptlet'}
      ]
    },
    exceptionScriptletRules: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#cosmeticRulesOptions'}]},
            2: {patterns: [{include: '#domainListCommaSeparated'}]},
            3: {name: 'keyword.control.adblock'},
            4: {name: 'entity.name.function.adblock'},
            5: {name: 'punctuation.section.adblock'},
            6: {
              patterns: [
                {include: '#emptyScriptletFunction'},
                {include: '#scriptletFunction'}
              ]
            },
            7: {name: 'punctuation.section.adblock'}
          },
          match:
            '(?x)\n  ^                   # Start of the line\n  \\s*                 # Optional leading whitespace\n  (\\[.+?\\])?          # Group 1. AdGuard modifier list\n  (.*)?               # Group 2. Domain list\n  (\\#@%\\#)            # Group 3. Cosmetic rule marker\n  (\\/\\/scriptlet)     # Group 4. Scriptlet marker\n  (\\()                # Group 5. Opening parenthesis\n  (.*)?               # Group 6. Arguments\n  (\\))                # Group 7. Closing parenthesis\n  \\s*                 # Optional trailing whitespace\n  $                   # End of the line'
        }
      ]
    },
    jsRules: {
      patterns: [
        {
          begin: '^(.*?)(#@?%#(?!\\/\\/scriptlet))',
          beginCaptures: {
            1: {patterns: [{include: '#domainListCommaSeparated'}]},
            2: {name: 'keyword.control.adblock'}
          },
          contentName: 'source.js',
          end: '$',
          patterns: [{include: 'source.js'}]
        },
        {
          captures: {
            1: {patterns: [{include: '#domainListCommaSeparated'}]},
            2: {name: 'keyword.control.adblock'},
            3: {name: 'invalid.illegal'}
          },
          match: '^(.*?)(#@?%#)(.+)$'
        }
      ]
    },
    preprocessor: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.preprocessor.directive'},
            2: {name: 'keyword.other.delimiter.whitespace'},
            3: {
              patterns: [
                {
                  match: '[A-Za-z]+[\\w_-]*',
                  name: 'constant.language.platform.name'
                },
                {match: '&&', name: 'keyword.operator.logical.and'},
                {match: '\\|\\|', name: 'keyword.operator.logical.or'},
                {match: '!', name: 'keyword.operator.logical.not'},
                {
                  match: '\\(',
                  name: 'keyword.control.characters.parenthesis.open'
                },
                {
                  match: '\\)',
                  name: 'keyword.control.characters.parenthesis.close'
                },
                {match: '\\s+', name: 'keyword.other.delimiter.whitespace'},
                {match: '.*', name: 'invalid.illegal'}
              ]
            }
          },
          match: '^(!#if)(\\s)(.*)$'
        },
        {
          captures: {
            1: {name: 'keyword.preprocessor.directive'},
            2: {name: 'string.unquoted'}
          },
          match: '^(!#include) (.*)$'
        },
        {
          captures: {
            1: {name: 'keyword.preprocessor.directive'},
            2: {name: 'keyword.other.delimiter.whitespace'}
          },
          match: '^(!#else)(\\s*)$'
        },
        {
          captures: {
            1: {name: 'keyword.preprocessor.directive'},
            2: {name: 'keyword.other.delimiter.whitespace'}
          },
          match: '^(!#endif)(\\s*)$'
        },
        {
          captures: {
            1: {name: 'keyword.preprocessor.directive'},
            2: {
              patterns: [
                {
                  match:
                    '(all|general|privacy|social|security|other|custom|advanced)',
                  name: 'constant.language.contentblocker.name'
                },
                {match: '(\\(|\\)|,)', name: 'keyword.control.characters'},
                {match: '.*', name: 'invalid.illegal'}
              ]
            }
          },
          match: '^(!#safari_cb_affinity)(.*)$'
        },
        {
          captures: {
            1: {name: 'keyword.preprocessor.hint'},
            2: {
              patterns: [
                {
                  match: '(NOT_OPTIMIZED|OPTIMIZED|PLATFORM|NOT_PLATFORM)',
                  name: 'keyword.control.hint.name'
                },
                {
                  match:
                    '(windows|mac|android|ios|ext_chromium|ext_ff|ext_edge|ext_opera|ext_ublock|ext_safari|ext_android_cb)',
                  name: 'constant.language.platform.name'
                },
                {match: '(\\(|\\)|,)', name: 'keyword.control.characters'}
              ]
            }
          },
          match: '^(!\\+) (.*)$'
        },
        {match: '^!#(?!#).+$', name: 'invalid.illegal.preprocessor'}
      ]
    },
    regularExpression: {
      patterns: [
        {
          begin: '(/)',
          beginCaptures: {1: {name: 'keyword.other.regex.begin'}},
          contentName: 'string.regexp',
          end: '((?<!\\\\)/)([dgimsuy]*)?',
          endCaptures: {
            1: {name: 'keyword.other.regex.end'},
            2: {name: 'keyword.other.regex'}
          },
          patterns: [
            {match: '(?<!\\\\)([/\\^\\$\\|])', name: 'keyword.control.regex'}
          ]
        }
      ]
    },
    scriptletFunction: {
      patterns: [
        {
          captures: {
            1: {name: 'string.quoted.adblock'},
            5: {name: 'keyword.operator.adblock'}
          },
          match: '(([\'|"])(.*?)(?<!\\\\)(\\2))(,\\s*)?'
        },
        {match: '.*', name: 'invalid.illegal.adblock'}
      ]
    },
    scriptletFunctionUBO: {
      patterns: [
        {
          captures: {
            1: {name: 'string.quoted.adblock'},
            2: {name: 'keyword.operator.adblock'}
          },
          match: '((?:[^\\\\,]+|\\\\.?)*)(,|$)'
        },
        {match: '.*', name: 'invalid.illegal.adblock'}
      ]
    },
    scriptletRules: {
      patterns: [
        {include: '#exceptionScriptletRules'},
        {include: '#blockingScriptletRules'}
      ]
    },
    scriptletRulesUBO: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#domainListCommaSeparated'}]},
            2: {name: 'keyword.control.adblock'},
            3: {name: 'entity.name.function.adblock'},
            4: {name: 'punctuation.section.adblock'},
            5: {patterns: [{include: '#scriptletFunctionUBO'}]},
            6: {name: 'punctuation.section.adblock'}
          },
          match: '^(.*?)(#@?#)(\\+js)(\\()(.+)(\\)\\s*)$'
        }
      ]
    },
    snippetRulesABP: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#domainListCommaSeparated'}]},
            2: {name: 'keyword.control.adblock'},
            3: {name: 'constant.character.snippet.adblock'}
          },
          match: '^(.*?)(#@?\\$#)([^{]+)$'
        }
      ]
    },
    urlPattern: {
      patterns: [
        {
          captures: {1: {name: 'keyword.other.adblock'}},
          match: '^(@@)?(\\/)(.+)\\/$',
          name: 'string.regexp.adblock'
        },
        {match: '^@@\\|?\\|?', name: 'keyword.other.adblock'},
        {match: '^\\|\\|', name: 'keyword.other.adblock'},
        {match: '^\\|', name: 'keyword.other.adblock'},
        {match: '\\|$', name: 'keyword.other.adblock'},
        {match: '\\^', name: 'keyword.other.adblock'},
        {match: '\\*', name: 'keyword.other.adblock'}
      ]
    }
  },
  scopeName: 'text.adblock'
}

export default grammar
