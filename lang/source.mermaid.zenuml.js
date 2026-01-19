// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-mermaid>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.mermaid'],
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    alt: {
      applyEndPatternLast: true,
      begin: '(?=\\bif(?:$|\\s*[\\({]))',
      end: '(?!\\G)(?=\\s*(?!//|(?:if|else)(?:$|[\\s({]))\\S)',
      name: 'meta.conditional.mermaid',
      patterns: [
        {
          begin: '\\b(if|else(?:\\s+if)?)(?=$|[\\s({])',
          beginCaptures: {1: {name: 'keyword.control.conditional.mermaid'}},
          end: '(?<=})',
          name: 'meta.branch.mermaid',
          patterns: [{include: '#parameters'}]
        },
        {include: '#comment'}
      ]
    },
    block: {
      begin: '{',
      beginCaptures: {0: {patterns: [{include: 'source.mermaid#brace'}]}},
      end: '}',
      endCaptures: {0: {patterns: [{include: 'source.mermaid#brace'}]}},
      name: 'meta.block.mermaid',
      patterns: [{include: '#block'}, {include: '#main'}]
    },
    comment: {
      begin: '(//)[ \\t]*',
      beginCaptures: {1: {name: 'punctuation.definition.comment.mermaid'}},
      end: '(?=\\s*$)',
      name: 'comment.line.double-slash.zenuml.mermaid',
      patterns: [
        {
          captures: {1: {patterns: [{include: 'text.md'}]}},
          match: '(?:^|\\G)(.+)'
        }
      ]
    },
    keywordBlock: {
      applyEndPatternLast: true,
      begin: '\\b(opt|par|try|catch|finally)(?=\\s*(?:$|{))',
      beginCaptures: {1: {name: 'keyword.control.flow.mermaid'}},
      end: '(?!\\G)',
      name: 'meta.$1.block.mermaid',
      patterns: [{begin: '\\G', end: '(?=\\S)'}, {include: '#block'}]
    },
    loop: {
      applyEndPatternLast: true,
      begin: '\\b(while|for|for[Ee]ach|loop)(?=$|\\s*[\\({])',
      beginCaptures: {1: {name: 'keyword.control.flow.${1:/downcase}.mermaid'}},
      end: '(?!\\G)',
      name: 'meta.loop.mermaid',
      patterns: [{include: '#parameters'}]
    },
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#terminator'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: 'source.mermaid#title'},
        {include: '#comment'},
        {include: '#return'},
        {include: '#loop'},
        {include: '#alt'},
        {include: '#keywordBlock'},
        {include: '#messages'},
        {include: '#variable'},
        {include: '#participant'}
      ]
    },
    messageAsync: {
      begin: '\\b(\\w+)(->)(\\w+)\\b\\s*(:)[ \\t]*',
      beginCaptures: {
        1: {name: 'entity.name.tag.participant.sender.mermaid'},
        2: {name: 'keyword.operator.arrow.message.mermaid'},
        3: {name: 'entity.name.tag.participant.recipient.mermaid'},
        4: {patterns: [{include: 'source.mermaid#colon'}]}
      },
      contentName: 'string.unquoted.message-text.mermaid',
      end: '(?=\\s*(?:$|%%|//))',
      name: 'meta.message.async.mermaid'
    },
    messageCreation: {
      applyEndPatternLast: true,
      begin: '\\b(new)\\s+(\\w+)',
      beginCaptures: {
        1: {name: 'keyword.operator.message.mermaid'},
        2: {name: 'entity.name.function.message.mermaid'}
      },
      end: '(?!\\G)',
      name: 'meta.message.creation.mermaid',
      patterns: [{include: '#parameters'}]
    },
    messageSync: {
      applyEndPatternLast: true,
      begin: '(?:\\b(\\w+)(->))?\\b(\\w+)(\\.)(\\w+)',
      beginCaptures: {
        1: {name: 'entity.name.tag.participant.sender.mermaid'},
        2: {name: 'keyword.operator.arrow.message.mermaid'},
        3: {name: 'entity.name.tag.participant.sender.mermaid'},
        4: {name: 'punctuation.delimiter.period.property.mermaid'},
        5: {name: 'entity.name.function.message.mermaid'}
      },
      end: '(?!\\G)',
      name: 'meta.message.sync.mermaid',
      patterns: [{include: '#parameters'}]
    },
    messages: {
      patterns: [
        {include: '#messageSync'},
        {include: '#messageCreation'},
        {include: '#messageAsync'}
      ]
    },
    parameter: {
      patterns: [
        {
          match: '[^\\s,\\(\\){}]+',
          name: 'variable.parameter.message.function'
        },
        {include: 'source.mermaid#comma'},
        {include: '#parentheses'}
      ]
    },
    parameters: {
      patterns: [
        {
          begin: '\\G(\\()',
          beginCaptures: {
            0: {name: 'punctuation.definition.arguments.begin.mermaid'},
            1: {name: 'brackethighlighter.round'}
          },
          end: '(\\))',
          endCaptures: {
            0: {name: 'punctuation.definition.arguments.end.mermaid'},
            1: {name: 'brackethighlighter.round'}
          },
          name: 'meta.arguments.mermaid',
          patterns: [{include: '#parameter'}]
        },
        {
          begin: '(?<=\\))|\\G',
          end: '(?=\\s*[^\\s{])|(?<=})',
          patterns: [{include: '#block'}]
        }
      ]
    },
    parentheses: {
      begin: '(\\()',
      beginCaptures: {
        0: {name: 'punctuation.parenthesis.begin.mermaid'},
        1: {name: 'brackethighlighter.round'}
      },
      end: '(\\))',
      endCaptures: {
        0: {name: 'punctuation.parenthesis.end.mermaid'},
        1: {name: 'brackethighlighter.round'}
      },
      patterns: [{include: '#parameter'}]
    },
    participant: {
      begin: '(?=@\\w+|\\b\\w+\\b)',
      end: '(?!\\G)',
      name: 'meta.participant.mermaid',
      patterns: [
        {
          begin: '(?<=\\s|^|\\G)(@)(\\w+)\\b',
          beginCaptures: {
            0: {name: 'storage.modifier.annotator.${2:/downcase}.mermaid'},
            1: {name: 'punctuation.definition.annotator.mermaid'}
          },
          end: '(?<=\\s|^)(?=\\w)'
        },
        {
          begin: '\\b(\\w+)\\b(?!\\.|->|\\s*=)',
          beginCaptures: {0: {name: 'entity.name.tag.participant.mermaid'}},
          end: '(?=\\s*(?!as(?:$|\\s))\\S)',
          name: 'meta.participant.$1.mermaid',
          patterns: [
            {
              begin: '(?i)(?<=\\s|^)(as)(?=$|\\s)',
              beginCaptures: {1: {name: 'keyword.operator.alias.mermaid'}},
              end: '(?i)(?=@|(?<=\\s|^)new\\s|\\b\\w+(?:\\.|->|\\s*=))|\\b(\\w+)\\b',
              endCaptures: {1: {name: 'entity.name.alias.participant.mermaid'}},
              name: 'meta.alias.mermaid'
            }
          ]
        }
      ]
    },
    return: {
      patterns: [{include: '#returnStatement'}, {include: '#returnAnnotator'}]
    },
    returnAnnotator: {
      applyEndPatternLast: true,
      begin: '(?i)(@)(return|reply)(?=$|\\s)',
      beginCaptures: {
        0: {name: 'keyword.control.annotator.${2:/downcase}.mermaid'},
        1: {name: 'punctuation.definition.annotator.mermaid'}
      },
      end: '(?!\\G)',
      name: 'meta.return.annotator.mermaid',
      patterns: [{begin: '\\G', end: '(?=\\S)'}, {include: '#messages'}]
    },
    returnStatement: {
      begin: '\\breturn(?=$|\\s)',
      beginCaptures: {0: {name: 'keyword.control.flow.return.mermaid'}},
      end: '(?<=")|[^\\s"{}]+',
      endCaptures: {0: {name: 'string.unquoted.reply.mermaid'}},
      name: 'meta.return.statement.mermaid',
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.mermaid'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.mermaid'}},
          name: 'string.quoted.double.reply.mermaid'
        }
      ]
    },
    variable: {
      applyEndPatternLast: true,
      begin: '\\s*\\b(?:(\\w+)\\s+)?(\\w+)\\s*(=)',
      beginCaptures: {
        1: {name: 'entity.name.type.mermaid'},
        2: {name: 'variable.assignment.mermaid'},
        3: {name: 'keyword.operator.assignment.mermaid'}
      },
      end: '(?!\\G)',
      name: 'meta.assignment.mermaid',
      patterns: [
        {begin: '\\G', end: '(?=\\S)'},
        {include: '#messageSync'},
        {include: '#messageCreation'}
      ]
    }
  },
  scopeName: 'source.mermaid.zenuml'
}

export default grammar
