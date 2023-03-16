// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/ameshkov/VscodeAdblockSyntax>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
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
            1: {name: 'punctuation.definition.array.start.ablock.agent'},
            2: {
              patterns: [
                {include: '#adblockData'},
                {match: ';', name: 'punctuation.separator'},
                {match: '.*', name: 'invalid.illegal'}
              ]
            },
            3: {name: 'punctuation.definition.array.end.ablock.agent'}
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
            '(?:\\s*)([Aa]d[Bb]lock(?:\\s[Pp]lus)?|u[Bb]lock(?:\\s[Oo]rigin)?|[Aa]d[Gg]uard)(?:\\s+(\\d+(?:\\.\\d+)*+\\+?))?(?:\\s*)'
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
          match: '(redirect|redirect-rule|csp|cookie)(=)(((\\\\,)|[^,])+)',
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
          match: '(removeheader)(=)(((\\\\,)|[^,])+)',
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
          match: '(removeparam|queryprune)(=)(~)?(((\\\\,)|[^,])+)',
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
          match:
            '(inline-script|inline-font|mp4|empty|badfilter|genericblock|generichide|network|popup|popunder|important|cookie|csp|replace|stealth|removeparam|queryprune)',
          name: 'keyword.other.adblock'
        },
        {
          match:
            '(~?)(xhr|first-party|third-party|match-case|elemhide|content|jsinject|urlblock|document|image|stylesheet|script|object-subrequest|object|font|media|subdocument|xmlhttprequest|websocket|other|webrtc|ping|extension|all|1p|3p|css|frame|ghide|ehide|shide|specifichide)',
          name: 'keyword.other.adblock'
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
    comments: {
      patterns: [
        {match: '^!.*', name: 'comment.line'},
        {match: '^# .*', name: 'comment.line.batch-style'},
        {match: '^#$', name: 'comment.line.batch-style'}
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
    jsFunction: {
      patterns: [{match: '.+', name: 'constant.character.jscode.adblock'}]
    },
    jsRules: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#domainListCommaSeparated'}]},
            2: {name: 'keyword.control.adblock'},
            3: {patterns: [{include: '#jsFunction'}]}
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
            2: {
              patterns: [
                {
                  match:
                    '(adguard_app_windows|adguard_app_mac|adguard_app_android|adguard_app_ios|adguard_ext_chromium|adguard_ext_firefox|adguard_ext_edge|adguard_ext_safari|adguard_ext_opera|adguard_ext_android_cb|adguard|ext_abp|ext_ublock|env_chromium|env_edge|env_firefox|env_mobile|env_safari|false|cap_html_filtering|cap_user_stylesheet|env_legacy)',
                  name: 'constant.language.platform.name'
                },
                {match: '(&&|!|\\|\\|| )', name: 'keyword.control.characters'},
                {match: '(\\(|\\))', name: 'keyword.control.characters'},
                {match: '.*', name: 'invalid.illegal'}
              ]
            }
          },
          match: '^(!#if) (.*)$'
        },
        {
          captures: {
            1: {name: 'keyword.preprocessor.directive'},
            2: {name: 'string.unquoted'}
          },
          match: '^(!#include) (.*)$'
        },
        {match: '^!#endif\\s*$', name: 'keyword.preprocessor.directive'},
        {
          captures: {
            1: {name: 'keyword.preprocessor.directive'},
            2: {
              patterns: [
                {
                  match: '(all|general|privacy|social|security|other|custom)',
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
          match: '([^,]*)(,\\s*)?'
        },
        {match: '.*', name: 'invalid.illegal.adblock'}
      ]
    },
    scriptletRules: {
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
          match: '^(\\[.+?\\])?(.*?)(#@?%#)(\\/\\/scriptlet)(\\()(.+)(\\)\\s*)$'
        }
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
          match: '^(.*?)(##)(\\+js)(\\()(.+)(\\)\\s*)$'
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
          match: '^(.*?)(#\\$#)([^{]+)$'
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
