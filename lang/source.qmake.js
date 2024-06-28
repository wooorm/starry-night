// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pri'],
  names: ['qmake'],
  patterns: [
    {
      begin: '(TEMPLATE)\\s*(=)',
      captures: {
        1: {name: 'variable.language.qmake'},
        2: {name: 'punctuation.separator.key-value.qmake'}
      },
      end: '$\\n?',
      name: 'markup.other.template.qmake',
      patterns: [
        {
          match: '\\b(app|lib|subdirs|vcapp|vclib)\\b',
          name: 'keyword.other.qmake'
        }
      ]
    },
    {
      begin: '(CONFIG)\\s*(\\+|\\-)?(=)',
      captures: {
        1: {name: 'variable.language.qmake'},
        3: {name: 'punctuation.separator.key-value.qmake'}
      },
      end: '$\\n?',
      name: 'markup.other.config.qmake',
      patterns: [
        {
          match:
            '\\b(release|debug|warn_(on|off)|qt|opengl|thread|x11|windows|console|dll|staticlib|plugin|designer|uic3|no_lflags_merge|exceptions|rtti|stl|flat|app_bundle|no_batch|qtestlib|ppc|x86)\\b',
          name: 'keyword.other.qmake'
        }
      ]
    },
    {
      begin: '(QT)\\s*(\\+|\\-)?(=)',
      captures: {
        1: {name: 'variable.language.qmake'},
        3: {name: 'punctuation.separator.key-value.qmake'}
      },
      end: '$\\n?',
      name: 'markup.other.qt.qmake',
      patterns: [
        {
          match: '\\b(core|gui|network|opengl|sql|svg|xml|qt3support)\\b',
          name: 'keyword.other.qmake'
        }
      ]
    },
    {
      match:
        '\\b(R(C(C_DIR|_FILE)|E(S_FILE|QUIRES))|M(OC_DIR|AKE(_MAKEFILE|FILE(_GENERATOR)?))|S(RCMOC|OURCES|UBDIRS)|HEADERS|YACC(SOURCES|IMPLS|OBJECTS)|CONFIG|T(RANSLATIONS|ARGET(_(EXT|\\d+(\\.\\d+\\.\\d+)?))?)|INCLUDEPATH|OBJ(MOC|ECTS(_DIR)?)|D(SP_TEMPLATE|ISTFILES|E(STDIR(_TARGET)?|PENDPATH|F(_FILE|INES))|LLDESTDIR)|UI(C(IMPLS|OBJECTS)|_(SOURCES_DIR|HEADERS_DIR|DIR))|P(RE(COMPILED_HEADER|_TARGETDEPS)|OST_TARGETDEPS)|V(PATH|ER(SION|_(M(IN|AJ)|PAT)))|Q(MAKE(SPEC|_(RUN_C(XX(_IMP)?|C(_IMP)?)|MOC_SRC|C(XXFLAGS_(RELEASE|MT(_D(BG|LL(DBG)?))?|SHLIB|THREAD|DEBUG|WARN_O(N|FF))|FLAGS_(RELEASE|MT(_D(BG|LL(DBG)?))?|SHLIB|THREAD|DEBUG|WARN_O(N|FF))|LEAN)|TARGET|IN(CDIR(_(X|THREAD|OPENGL|QT))?|FO_PLIST)|UIC|P(RE_LINK|OST_LINK)|EXT(_(MOC|H|CPP|YACC|OBJ|UI|PRL|LEX)|ENSION_SHLIB)|Q(MAKE|T_DLL)|F(ILETAGS|AILED_REQUIREMENTS)|L(N_SHLIB|I(B(S(_(RT(MT)?|X|CONSOLE|THREAD|OPENGL(_QT)?|QT(_(OPENGL|DLL))?|WINDOWS))?|_FLAG|DIR(_(X|OPENGL|QT|FLAGS))?)|NK_SHLIB_CMD)|FLAGS(_(RELEASE|S(H(LIB|APP)|ONAME)|CONSOLE(_DLL)?|THREAD|DEBUG|PLUGIN|QT_DLL|WINDOWS(_DLL)?))?)|A(R_CMD|PP_(OR_DLL|FLAG))))?|T_THREAD)|FORMS|L(IBS|EX(SOURCES|IMPLS|OBJECTS)))\\b',
      name: 'variable.language.qmake'
    },
    {
      begin: '(\\b([\\w\\d_]+\\.[\\w\\d_]+|[A-Z_]+))?\\s*(\\+|\\-)?(=)',
      captures: {
        1: {name: 'variable.other.qmake'},
        4: {name: 'punctuation.separator.key-value.qmake'}
      },
      end: '$\\n?',
      name: 'markup.other.assignment.qmake',
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.variable.qmake'}},
          match:
            '(\\$\\$)([A-Z_]+|[\\w\\d_]+\\.[\\w\\d_]+)|\\$\\([\\w\\d_]+\\)',
          name: 'variable.other.qmake'
        },
        {
          match: '[\\w\\d\\/_\\-\\.\\:]+',
          name: 'constant.other.filename.qmake'
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.qmake'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.qmake'}},
          name: 'string.quoted.double.qmake'
        },
        {
          begin: '`',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.qmake'}
          },
          end: '`',
          endCaptures: {0: {name: 'punctuation.definition.string.end.qmake'}},
          name: 'string.interpolated.qmake'
        },
        {
          begin: '(\\\\)',
          captures: {1: {name: 'string.regexp.qmake'}},
          end: '^[^#]',
          name: 'markup.other.assignment.continuation.qmake',
          patterns: [
            {
              captures: {1: {name: 'punctuation.definition.comment.qmake'}},
              match: '(#).*$\\n?',
              name: 'comment.line.number-sign.qmake'
            }
          ]
        },
        {
          begin: '(^[ \\t]+)?(?=#)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.qmake'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '#',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.qmake'}
              },
              end: '\\n',
              name: 'comment.line.number-sign.qmake'
            }
          ]
        }
      ]
    },
    {
      begin:
        '\\b(basename|CONFIG|contains|count|dirname|error|exists|find|for|include|infile|isEmpty|join|member|message|prompt|quote|sprintf|system|unique|warning)\\s*(\\()',
      beginCaptures: {
        1: {name: 'entity.name.function.qmake'},
        2: {name: 'punctuation.definition.parameters.qmake'}
      },
      contentName: 'variable.parameter.qmake',
      end: '(\\))',
      endCaptures: {1: {name: 'punctuation.definition.parameters.qmake'}}
    },
    {
      match: '\\b(unix|win32|mac|debug|release)\\b',
      name: 'keyword.other.scope.qmake'
    },
    {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.qmake'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.qmake'}},
          end: '\\n',
          name: 'comment.line.number-sign.qmake'
        }
      ]
    }
  ],
  scopeName: 'source.qmake'
}

export default grammar
