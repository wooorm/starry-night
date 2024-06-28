// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.psc'],
  names: ['papyrus'],
  patterns: [
    {match: '^\\s*$', name: 'meta.emptyline.papyrus'},
    {include: '#commentDocumentation'},
    {include: '#commentBlock'},
    {include: '#commentLine'},
    {include: '#scriptHeader'},
    {include: '#import'},
    {include: '#state'},
    {include: '#endState'},
    {include: '#event'},
    {include: '#endEvent'},
    {include: '#return'},
    {include: '#if'},
    {include: '#elseif'},
    {include: '#else'},
    {include: '#endIf'},
    {include: '#while'},
    {include: '#endWhile'},
    {include: '#property'},
    {include: '#endProperty'},
    {include: '#function'},
    {include: '#endFunction'},
    {include: '#variable'},
    {include: '#assign'},
    {include: '#expression'},
    {include: '#whitespace'},
    {include: '#unmatched'}
  ],
  repository: {
    addExpression: {
      patterns: [
        {match: '(\\+|\\-)', name: 'keyword.operator.papyrus'},
        {include: '#multExpression'}
      ]
    },
    andExpression: {
      patterns: [
        {match: '\\&\\&', name: 'keyword.operator.papyrus'},
        {include: '#boolExpression'}
      ]
    },
    arrayAtom: {
      patterns: [
        {
          begin: '\\[',
          end: '\\]',
          name: 'meta.array.papyrus',
          patterns: [{include: '#expression'}]
        },
        {include: '#atom'}
      ]
    },
    arrayFuncOrId: {
      patterns: [
        {include: '#funcOrId'},
        {
          begin: '\\[',
          end: '\\]',
          name: 'meta.arrayelement.papyrus',
          patterns: [{include: '#expression'}]
        }
      ]
    },
    assign: {
      patterns: [
        {
          begin: '^\\s*',
          end: '([\\n\\r])',
          name: 'meta.assign.papyrus',
          patterns: [
            {include: '#assignmentOperators'},
            {include: '#expression'},
            {include: '#endOfLine'}
          ]
        }
      ]
    },
    assignmentOperators: {
      patterns: [
        {
          match: '(\\=|\\+\\=|\\-\\=|\\*\\=|\\/\\=|\\%\\=)',
          name: 'keyword.operator.papyrus'
        }
      ]
    },
    atom: {
      patterns: [
        {
          begin: '(?i)\\b(new)\\s+([_a-z][0-9_a-z]*)\\[',
          beginCaptures: {
            1: {name: 'keyword.operator.papyrus'},
            2: {name: 'storage.type.papyrus'}
          },
          end: '\\]',
          name: 'meta.newarray.papyrus',
          patterns: [{include: '#integer'}]
        },
        {
          begin: '\\(',
          end: '(\\)|[\\n\\r])',
          name: 'meta.parenthesis.papyrus',
          patterns: [{include: '#expression'}]
        },
        {include: '#funcOrId'}
      ]
    },
    baseTypes: {
      patterns: [
        {
          match: '(?i)\\b(bool|float|int|string)\\b',
          name: 'storage.type.papyrus'
        }
      ]
    },
    bool: {
      patterns: [
        {
          match: '(?i)\\b(true|false|none)\\b',
          name: 'constant.language.boolean.papyrus'
        }
      ]
    },
    boolExpression: {
      patterns: [
        {
          match: '(\\=\\=|\\!\\=|\\<\\=|\\>\\=|\\<|\\>)',
          name: 'keyword.operator.papyrus'
        },
        {include: '#addExpression'}
      ]
    },
    brackets: {patterns: [{match: '\\[\\]', name: 'meta.array.papyrus'}]},
    castAtom: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.papyrus'},
            2: {name: 'storage.type.papyrus'}
          },
          match: '(?i)\\b(as)\\s+([_a-z][0-9_a-z]*)\\b',
          name: 'meta.cast.papyrus'
        },
        {include: '#dotAtom'}
      ]
    },
    comma: {patterns: [{match: '\\,', name: 'meta.comma.papyrus'}]},
    commentBlock: {
      patterns: [{begin: ';/', end: '/;', name: 'comment.block.papyrus'}]
    },
    commentDocumentation: {
      patterns: [
        {begin: '^\\s*\\{', end: '\\}', name: 'comment.documentation.papyrus'}
      ]
    },
    commentLine: {patterns: [{match: ';.*$', name: 'comment.line.papyrus'}]},
    comments: {
      patterns: [
        {include: '#commentBlock'},
        {include: '#commentLine'},
        {include: '#commentDocumentation'}
      ]
    },
    constants: {
      patterns: [
        {include: '#bool'},
        {include: '#float'},
        {include: '#integer'},
        {include: '#string'}
      ]
    },
    dotAtom: {
      patterns: [
        {match: '\\.', name: 'keyword.operator.papyrus'},
        {include: '#constants'},
        {include: '#arrayAtom'},
        {include: '#arrayFuncOrId'}
      ]
    },
    else: {
      patterns: [
        {
          begin: '(?i)^\\s*(else)\\b',
          beginCaptures: {1: {name: 'keyword.other.papyrus'}},
          end: '([\\n\\r])',
          name: 'meta.else.papyrus',
          patterns: [{include: '#endOfLine'}]
        }
      ]
    },
    elseif: {
      patterns: [
        {
          begin: '(?i)^\\s*(elseif)\\b',
          beginCaptures: {1: {name: 'keyword.other.papyrus'}},
          end: '([\\n\\r])',
          name: 'meta.elseif.papyrus',
          patterns: [{include: '#expression'}, {include: '#endOfLine'}]
        }
      ]
    },
    endEvent: {
      patterns: [
        {
          begin: '(?i)^\\s*(endevent)\\b',
          beginCaptures: {1: {name: 'keyword.other.papyrus'}},
          end: '([\\n\\r])',
          name: 'meta.endevent.papyrus',
          patterns: [{include: '#endOfLine'}]
        }
      ]
    },
    endFunction: {
      patterns: [
        {
          begin: '(?i)^\\s*(endfunction)\\b',
          beginCaptures: {1: {name: 'keyword.other.papyrus'}},
          end: '([\\n\\r])',
          name: 'meta.endfunction.papyrus',
          patterns: [{include: '#endOfLine'}]
        }
      ]
    },
    endIf: {
      patterns: [
        {
          begin: '(?i)^\\s*(endif)\\b',
          beginCaptures: {1: {name: 'keyword.other.papyrus'}},
          end: '([\\n\\r])',
          name: 'meta.endif.papyrus',
          patterns: [{include: '#endOfLine'}]
        }
      ]
    },
    endOfLine: {
      patterns: [
        {include: '#commentBlock'},
        {include: '#commentLine'},
        {include: '#whitespace'},
        {include: '#multiline'},
        {include: '#unmatched'}
      ]
    },
    endProperty: {
      patterns: [
        {
          begin: '(?i)^\\s*(endproperty)\\b',
          beginCaptures: {1: {name: 'keyword.other.papyrus'}},
          end: '([\\n\\r])',
          name: 'meta.endproperty.papyrus',
          patterns: [{include: '#endOfLine'}]
        }
      ]
    },
    endState: {
      patterns: [
        {
          begin: '(?i)^\\s*(endstate)\\b',
          beginCaptures: {1: {name: 'keyword.other.papyrus'}},
          end: '([\\n\\r])',
          name: 'meta.endstate.papyrus',
          patterns: [{include: '#endOfLine'}]
        }
      ]
    },
    endWhile: {
      patterns: [
        {
          begin: '(?i)^\\s*(endwhile)\\b',
          beginCaptures: {1: {name: 'keyword.other.papyrus'}},
          end: '([\\n\\r])',
          name: 'meta.endwhile.papyrus',
          patterns: [{include: '#endOfLine'}]
        }
      ]
    },
    event: {
      patterns: [
        {
          begin: '(?i)^\\s*(event)\\s+',
          beginCaptures: {
            1: {name: 'keyword.control.eventstart.papyrus'},
            2: {name: 'entity.name.function.papyrus'}
          },
          end: '([\\n\\r])',
          name: 'meta.event.papyrus',
          patterns: [
            {include: '#eventParameters'},
            {include: '#eventFlags'},
            {include: '#illegalKeywords'},
            {include: '#illegalSpecialVariables'},
            {include: '#illegalBaseTypes'},
            {include: '#functionIdentifier'},
            {include: '#endOfLine'}
          ]
        }
      ]
    },
    eventFlags: {
      patterns: [
        {match: '(?i)(?<=\\))\\s*(native)\\b', name: 'keyword.other.papyrus'}
      ]
    },
    eventParameter: {
      patterns: [
        {include: '#eventParameterIdentifier'},
        {include: '#typeIdentifier'},
        {include: '#brackets'}
      ]
    },
    eventParameterIdentifier: {
      patterns: [
        {
          match: '(?i)\\b([_a-z][0-9_a-z]*)\\s*(?=(\\,|\\)))',
          name: 'variable.parameter.papyrus'
        }
      ]
    },
    eventParameters: {
      patterns: [
        {
          begin: '\\(',
          end: '\\)',
          name: 'meta.eventparameters.papyrus',
          patterns: [
            {include: '#illegalKeywords'},
            {include: '#illegalSpecialVariables'},
            {include: '#eventParameter'},
            {include: '#comma'},
            {include: '#multiline'},
            {include: '#whitespace'},
            {include: '#unmatched'}
          ]
        }
      ]
    },
    expression: {
      patterns: [
        {match: '\\|\\|', name: 'keyword.operator.papyrus'},
        {include: '#andExpression'},
        {include: '#endOfLine'}
      ]
    },
    float: {
      patterns: [
        {include: '#unaryMinus'},
        {match: '\\b(\\d+\\.\\d+)\\b', name: 'constant.numeric.float.papyrus'}
      ]
    },
    funcOrId: {
      patterns: [
        {match: '(?i)\\b(length)\\b', name: 'keyword.other.papyrus'},
        {include: '#functionCall'},
        {include: '#illegalKeywords'},
        {include: '#illegalBaseTypes'},
        {include: '#specialVariables'},
        {include: '#identifier'}
      ]
    },
    function: {
      patterns: [
        {
          begin:
            '(?i)^\\s*(?:([_a-z][0-9_a-z]*)(?:\\[\\])?\\s+)?(function)\\s+',
          beginCaptures: {
            1: {name: 'storage.type.papyrus'},
            2: {name: 'keyword.control.functionstart.papyrus'},
            3: {name: 'entity.name.function.papyrus'}
          },
          end: '([\\n\\r])',
          name: 'meta.function.papyrus',
          patterns: [
            {include: '#functionParameters'},
            {include: '#functionFlags'},
            {include: '#illegalKeywords'},
            {include: '#illegalSpecialVariables'},
            {include: '#illegalBaseTypes'},
            {include: '#functionIdentifier'},
            {include: '#endOfLine'}
          ]
        }
      ]
    },
    functionCall: {
      patterns: [
        {
          begin: '(?i)\\b([_a-z][0-9_a-z]*)\\(',
          beginCaptures: {1: {name: 'variable.other.papyrus'}},
          end: '\\)',
          name: 'meta.functioncall.papyrus',
          patterns: [{include: '#functionCallParameters'}]
        }
      ]
    },
    functionCallParameter: {
      patterns: [
        {
          captures: {
            1: {name: 'variable.parameter.papyrus'},
            2: {name: 'keyword.operator.papyrus'}
          },
          match: '(?i)\\b(?:([_a-z][0-9_a-z]*)\\s*(\\=)(?!\\=))?',
          name: 'meta.functioncallparameter.papyrus'
        },
        {include: '#expression'}
      ]
    },
    functionCallParameters: {
      patterns: [{include: '#comma'}, {include: '#functionCallParameter'}]
    },
    functionFlags: {
      patterns: [
        {match: '(?i)\\b(native|global)\\b', name: 'keyword.other.papyrus'}
      ]
    },
    functionIdentifier: {
      patterns: [
        {
          match: '(?i)\\b([_a-z][0-9_a-z]*)\\s*(?=\\()',
          name: 'entity.name.function.papyrus'
        }
      ]
    },
    functionParameter: {
      patterns: [
        {include: '#functionParameterIdentifier'},
        {include: '#typeIdentifier'},
        {include: '#brackets'}
      ]
    },
    functionParameterIdentifier: {
      patterns: [
        {
          match: '(?i)\\b([_a-z][0-9_a-z]*)\\s*(?=(\\,|\\)|\\=))',
          name: 'variable.parameter.papyrus'
        }
      ]
    },
    functionParameters: {
      patterns: [
        {
          begin: '\\(',
          end: '\\)',
          name: 'meta.functionparameters.papyrus',
          patterns: [
            {match: '(\\=)', name: 'keyword.operator.assignment.papyrus'},
            {include: '#constants'},
            {include: '#illegalKeywords'},
            {include: '#illegalSpecialVariables'},
            {include: '#functionParameter'},
            {include: '#comma'},
            {include: '#multiline'},
            {include: '#whitespace'},
            {include: '#unmatched'}
          ]
        }
      ]
    },
    identifier: {
      patterns: [
        {match: '(?i)\\b([_a-z][0-9_a-z]*)\\b', name: 'variable.other.papyrus'}
      ]
    },
    if: {
      patterns: [
        {
          begin: '(?i)^\\s*(if)\\b',
          beginCaptures: {1: {name: 'keyword.other.papyrus'}},
          end: '([\\n\\r])',
          name: 'meta.if.papyrus',
          patterns: [{include: '#expression'}, {include: '#endOfLine'}]
        }
      ]
    },
    illegalBaseTypes: {
      patterns: [
        {
          match: '(?i)\\b(bool|float|int|string)\\b',
          name: 'meta.invalid.papyrus'
        }
      ]
    },
    illegalKeywords: {
      patterns: [
        {
          match:
            '(?i)\\b(as|auto|autoreadonly|else|elseif|endevent|endfunction|endif|endproperty|endstate|endwhile|event|extends|false|function|global|if|import|length|native|new|none|property|return|scriptname|state|true|while)\\b',
          name: 'meta.invalid.papyrus'
        }
      ]
    },
    illegalSpecialVariables: {
      patterns: [
        {match: '(?i)\\b(parent|self)\\b', name: 'meta.invalid.papyrus'}
      ]
    },
    import: {
      patterns: [
        {
          begin: '(?i)^\\s*(import)\\s+',
          beginCaptures: {1: {name: 'keyword.other.papyrus'}},
          end: '([\\n\\r])',
          name: 'meta.import.papyrus',
          patterns: [
            {include: '#illegalKeywords'},
            {include: '#illegalSpecialVariables'},
            {include: '#illegalBaseTypes'},
            {include: '#typeIdentifier'},
            {include: '#endOfLine'}
          ]
        }
      ]
    },
    integer: {
      patterns: [
        {include: '#unaryMinus'},
        {
          match: '(?i)\\b(0x[0-9a-f]+|\\d+)\\b',
          name: 'constant.numeric.integer.papyrus'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '(?i)\\b(as|auto|autoreadonly|else|elseif|endevent|endfunction|endif|endproperty|endstate|endwhile|event|extends|false|function|global|if|import|length|native|new|none|property|return|scriptname|state|true|while)\\b',
          name: 'keyword.other.papyrus'
        }
      ]
    },
    multExpression: {
      patterns: [
        {match: '(\\*|/|\\%)', name: 'keyword.operator.papyrus'},
        {include: '#unaryExpression'}
      ]
    },
    multiline: {
      patterns: [
        {
          begin: '\\\\',
          beginCaptures: {0: {name: 'keyword.operator.papyrus'}},
          end: '([\\n\\r])',
          name: 'meta.multiline.papyrus',
          patterns: [
            {include: '#commentBlock'},
            {include: '#commentLine'},
            {include: '#whitespace'},
            {include: '#unmatched'}
          ]
        }
      ]
    },
    parameterIdentifier: {
      patterns: [
        {
          match: '(?i)\\b([_a-z][0-9_a-z]*)\\b',
          name: 'variable.parameter.papyrus'
        }
      ]
    },
    property: {
      patterns: [
        {
          begin: '(?i)^\\s*([_a-z][0-9_a-z]*)(?:\\[\\])?\\s+(property)\\s+',
          beginCaptures: {
            1: {name: 'storage.type.papyrus'},
            2: {name: 'keyword.other.papyrus'}
          },
          end: '([\\n\\r])',
          name: 'meta.property.papyrus',
          patterns: [
            {match: '(\\=)', name: 'keyword.operator.assignment.papyrus'},
            {include: '#constants'},
            {include: '#propertyFlags'},
            {include: '#illegalKeywords'},
            {include: '#illegalSpecialVariables'},
            {include: '#illegalBaseTypes'},
            {include: '#identifier'},
            {include: '#endOfLine'}
          ]
        }
      ]
    },
    propertyFlags: {
      patterns: [
        {
          match: '(?i)\\b(auto|autoreadonly|conditional|hidden)\\b',
          name: 'keyword.other.papyrus'
        }
      ]
    },
    return: {
      patterns: [
        {
          begin: '(?i)^\\s*(return)\\b',
          beginCaptures: {1: {name: 'keyword.other.papyrus'}},
          end: '([\\n\\r])',
          name: 'meta.return.papyrus',
          patterns: [{include: '#expression'}, {include: '#endOfLine'}]
        }
      ]
    },
    scriptHeader: {
      patterns: [
        {
          begin: '(?i)^\\s*(scriptname)\\s+',
          beginCaptures: {1: {name: 'keyword.other.papyrus'}},
          end: '([\\n\\r])',
          name: 'meta.scriptheader.papyrus',
          patterns: [
            {match: '(?i)\\b(extends)\\b', name: 'keyword.other.papyrus'},
            {
              match: '(?i)\\b(hidden|conditional)\\b',
              name: 'keyword.other.papyrus'
            },
            {include: '#illegalKeywords'},
            {include: '#illegalSpecialVariables'},
            {include: '#illegalBaseTypes'},
            {include: '#typeIdentifier'},
            {include: '#endOfLine'}
          ]
        }
      ]
    },
    specialVariables: {
      patterns: [
        {match: '(?i)\\b(parent|self)\\b', name: 'keyword.other.papyrus'}
      ]
    },
    state: {
      patterns: [
        {
          begin: '(?i)^\\s*(?:(auto)\\s+)?(state)\\s+',
          beginCaptures: {
            1: {name: 'keyword.other.papyrus'},
            2: {name: 'keyword.other.papyrus'}
          },
          end: '([\\n\\r])',
          name: 'meta.state.papyrus',
          patterns: [
            {include: '#illegalKeywords'},
            {include: '#illegalSpecialVariables'},
            {include: '#illegalBaseTypes'},
            {include: '#identifier'},
            {include: '#endOfLine'}
          ]
        }
      ]
    },
    string: {
      patterns: [
        {
          begin: '\\"',
          end: '\\"',
          name: 'string.quoted.double',
          patterns: [
            {match: '(\\\\.)', name: 'constant.character.escape.papyrus'}
          ]
        }
      ]
    },
    typeIdentifier: {
      patterns: [
        {match: '(?i)\\b([_a-z][0-9_a-z]*)\\b', name: 'storage.type.papyrus'}
      ]
    },
    unaryExpression: {
      patterns: [
        {match: '(\\-|\\!)', name: 'keyword.operator.papyrus'},
        {include: '#castAtom'}
      ]
    },
    unaryMinus: {
      patterns: [{match: '\\-(?=\\d)', name: 'keyword.operator.papyrus'}]
    },
    unmatched: {
      patterns: [{match: '([^\\n\\r])', name: 'meta.invalid.papyrus'}]
    },
    variable: {
      patterns: [
        {
          begin:
            '(?i)^\\s*([_a-z][0-9_a-z]*)(?:\\[\\])?\\s+([_a-z][0-9_a-z]*)(?:\\s*(\\=)\\s*)',
          beginCaptures: {
            1: {name: 'storage.type.papyrus'},
            2: {name: 'variable.other.papyrus'},
            3: {name: 'keyword.operator.papyrus'}
          },
          end: '([\\n\\r])',
          name: 'meta.variable.papyrus',
          patterns: [
            {include: '#constants'},
            {
              match: '(?i)(?:\\b(conditional)\\b)',
              name: 'keyword.other.papyrus'
            },
            {include: '#expression'},
            {include: '#endOfLine'}
          ]
        },
        {
          begin:
            '(?i)^\\s*([_a-z][0-9_a-z]*)(?:\\[\\])?\\s+([_a-z][0-9_a-z]*)(?:\\s+(conditional)\\b)?',
          beginCaptures: {
            1: {name: 'storage.type.papyrus'},
            2: {name: 'variable.other.papyrus'},
            3: {name: 'keyword.other.papyrus'}
          },
          end: '([\\n\\r])',
          name: 'meta.variable.papyrus',
          patterns: [{include: '#endOfLine'}]
        }
      ]
    },
    while: {
      patterns: [
        {
          begin: '(?i)^\\s*(while)\\b',
          beginCaptures: {1: {name: 'keyword.other.papyrus'}},
          end: '([\\n\\r])',
          name: 'meta.while.papyrus',
          patterns: [{include: '#expression'}, {include: '#endOfLine'}]
        }
      ]
    },
    whitespace: {
      patterns: [{match: '([ \\t])', name: 'meta.whitespace.papyrus'}]
    }
  },
  scopeName: 'source.papyrus.skyrim'
}

export default grammar
