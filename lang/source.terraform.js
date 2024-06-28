// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/alexlouden/Terraform.tmLanguage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.hcl', '.nomad', '.tf', '.tfvars', '.workflow'],
  names: ['hcl', 'hashicorp-configuration-language', 'terraform'],
  patterns: [
    {include: '#comments'},
    {include: '#top_level_attribute_definition'},
    {include: '#imports'},
    {include: '#block'},
    {include: '#expressions'}
  ],
  repository: {
    attribute_access: {
      begin: '\\.',
      beginCaptures: {0: {name: 'keyword.operator.accessor.terraform'}},
      end: '(\\b(?!null|false|true)[[:alpha:]][[:alnum:]_-]*\\b)|(\\*)|(\\d+)',
      endCaptures: {
        1: {name: 'variable.other.member.terraform'},
        2: {name: 'keyword.operator.splat.terraform'},
        3: {name: 'constant.numeric.integer.terraform'}
      }
    },
    block: {
      begin:
        '(\\b(resource|provider|variable|output|locals|module|data|terraform)\\b|(\\b(?!null|false|true)[[:alpha:]][[:alnum:]_-]*\\b))(?=[\\s\\"\\-[:word:]]*(\\{))',
      beginCaptures: {
        2: {name: 'storage.type.terraform'},
        3: {name: 'entity.name.type.terraform'}
      },
      end: '(?=\\{)',
      name: 'meta.type.terraform',
      patterns: [
        {
          begin: '\\"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.terraform'}
          },
          end: '\\"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.terraform'}
          },
          name: 'string.quoted.double.terraform'
        },
        {
          match: '\\b(?!null|false|true)[[:alpha:]][[:alnum:]_-]*\\b',
          name: 'entity.name.label.terraform'
        }
      ]
    },
    block_comments: {
      begin: '/\\*',
      beginCaptures: {0: {name: 'punctuation.definition.comment.terraform'}},
      end: '\\*/',
      endCaptures: {0: {name: 'punctuation.definition.comment.terraform'}},
      name: 'comment.block.terraform'
    },
    brackets: {
      begin: '\\[',
      beginCaptures: {
        0: {name: 'punctuation.section.brackets.begin.terraform'}
      },
      end: '(\\*)?\\]',
      endCaptures: {
        0: {name: 'punctuation.section.brackets.end.terraform'},
        1: {name: 'keyword.operator.splat.terraform'}
      },
      patterns: [
        {include: '#comma'},
        {include: '#comments'},
        {include: '#expressions'},
        {include: '#tuple_for_expression'}
      ]
    },
    comma: {match: '\\,', name: 'punctuation.separator.terraform'},
    comments: {
      patterns: [{include: '#inline_comments'}, {include: '#block_comments'}]
    },
    expressions: {
      patterns: [
        {include: '#literal_values'},
        {include: '#operators'},
        {include: '#brackets'},
        {include: '#objects'},
        {include: '#attribute_access'},
        {include: '#functions'},
        {include: '#parens'}
      ]
    },
    functions: {
      begin:
        '((abs|ceil|floor|log|max|min|pow|signum|chomp|format|formatlist|indent|join|lower|regex|regexall|replace|split|strrev|substr|title|trimspace|upper|chunklist|coalesce|coalescelist|compact|concat|contains|distinct|element|flatten|index|keys|length|list|lookup|map|matchkeys|merge|range|reverse|setintersection|setproduct|setunion|slice|sort|transpose|values|zipmap|base64decode|base64encode|base64gzip|csvdecode|jsondecode|jsonencode|urlencode|yamldecode|yamlencode|abspath|dirname|pathexpand|basename|file|fileexists|fileset|filebase64|templatefile|formatdate|timeadd|timestamp|base64sha256|base64sha512|bcrypt|filebase64sha256|filebase64sha512|filemd5|filemd1|filesha256|filesha512|md5|rsadecrypt|sha1|sha256|sha512|uuid|uuidv5|cidrhost|cidrnetmask|cidrsubnet|tobool|tolist|tomap|tonumber|toset|tostring)|\\b((?!null|false|true)[[:alpha:]][[:alnum:]_-]*\\b))(\\()',
      beginCaptures: {
        2: {name: 'support.function.builtin.terraform'},
        3: {name: 'variable.function.terraform'},
        4: {name: 'punctuation.section.parens.begin.terraform'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.parens.end.terraform'}},
      name: 'meta.function-call.terraform',
      patterns: [
        {include: '#comments'},
        {include: '#expressions'},
        {include: '#comma'}
      ]
    },
    heredoc: {
      begin:
        '(\\<\\<\\-?)\\s*(\\b(?!null|false|true)[[:alpha:]][[:alnum:]_-]*\\b)\\s*$',
      beginCaptures: {
        1: {name: 'keyword.operator.heredoc.terraform'},
        2: {name: 'keyword.control.heredoc.terraform'}
      },
      end: '^\\s*\\2\\s*$',
      endCaptures: {0: {name: 'keyword.control.heredoc.terraform'}},
      name: 'string.unquoted.heredoc.terraform',
      patterns: [{include: '#string_interpolation'}]
    },
    imports: {
      begin: '\\s*(terraform)\\s*(import)\\s*',
      beginCaptures: {
        1: {name: 'support.constant.terraform'},
        2: {name: 'keyword.control.import.terraform'}
      },
      end: '$\\n?',
      patterns: [
        {include: '#string_literals'},
        {
          match: '\\b(?!null|false|true)[[:alpha:]][[:alnum:]_-]*\\b',
          name: 'entity.name.label.terraform'
        },
        {include: '#numeric_literals'},
        {include: '#attribute_access'}
      ]
    },
    inline_comments: {
      begin: '#|//',
      beginCaptures: {0: {name: 'punctuation.definition.comment.terraform'}},
      end: '$\n?',
      name: 'comment.line.terraform'
    },
    language_constants: {
      match: '\\b(true|false|null)\\b',
      name: 'constant.language.terraform'
    },
    literal_values: {
      patterns: [
        {include: '#numeric_literals'},
        {include: '#language_constants'},
        {include: '#string_literals'},
        {include: '#heredoc'},
        {include: '#type_keywords'},
        {include: '#named_value_references'}
      ]
    },
    main: {
      patterns: [
        {include: '#comments'},
        {include: '#block'},
        {include: '#expressions'}
      ]
    },
    named_value_references: {
      match: '\\b(var|local|module|data|path|terraform)\\b',
      name: 'support.constant.terraform'
    },
    numeric_literals: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.separator.exponent.terraform'}},
          match: '\\b\\d+(([Ee][+-]?))\\d+\\b',
          name: 'constant.numeric.float.terraform'
        },
        {
          captures: {
            1: {name: 'punctuation.separator.decimal.terraform'},
            2: {name: 'punctuation.separator.exponent.terraform'}
          },
          match: '\\b\\d+(\\.)\\d+(?:(([Ee][+-]?))\\d+)?\\b',
          name: 'constant.numeric.float.terraform'
        },
        {match: '\\b\\d+\\b', name: 'constant.numeric.integer.terraform'}
      ]
    },
    object_for_expression: {
      begin: '\\bfor\\b',
      beginCaptures: {0: {name: 'keyword.control.terraform'}},
      end: '(?=\\})',
      patterns: [
        {match: '\\=\\>', name: 'storage.type.function.terraform'},
        {match: '\\bin\\b', name: 'keyword.operator.word.terraform'},
        {match: '\\bif\\b', name: 'keyword.control.conditional.terraform'},
        {match: '\\:', name: 'keyword.operator.terraform'},
        {include: '#expressions'},
        {include: '#comments'},
        {include: '#comma'},
        {
          match: '\\b(?!null|false|true)[[:alpha:]][[:alnum:]_-]*\\b',
          name: 'variable.other.readwrite.terraform'
        }
      ]
    },
    object_key_values: {
      patterns: [{include: '#comments'}, {include: '#expressions'}]
    },
    objects: {
      begin: '\\{',
      beginCaptures: {0: {name: 'punctuation.section.braces.begin.terraform'}},
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.section.braces.end.terraform'}},
      name: 'meta.braces.terraform',
      patterns: [
        {include: '#object_for_expression'},
        {include: '#comments'},
        {
          begin:
            '\\s*(\\b(?!null|false|true)[[:alpha:]][[:alnum:]_-]*\\b)\\s*(\\=)\\s*',
          beginCaptures: {
            1: {name: 'meta.mapping.key.terraform string.unquoted.terraform'},
            2: {name: 'keyword.operator.terraform'}
          },
          end: '((\\,)|($\\n?)|(?=\\}))',
          endCaptures: {
            1: {name: 'punctuation.separator.terraform'},
            3: {name: 'punctuation.section.braces.end.terraform'}
          },
          patterns: [{include: '#object_key_values'}]
        },
        {
          begin: '((\\").*(\\"))\\s*(\\=)\\s*',
          beginCaptures: {
            1: {
              name: 'meta.mapping.key.terraform string.quoted.double.terraform'
            },
            2: {name: 'punctuation.definition.string.begin.terraform'},
            3: {name: 'punctuation.definition.string.end.terraform'},
            4: {name: 'keyword.operator.terraform'}
          },
          end: '((\\,)|($\\n?)|(?=\\}))',
          endCaptures: {
            1: {name: 'punctuation.separator.terraform'},
            3: {name: 'punctuation.section.braces.end.terraform'}
          },
          patterns: [{include: '#object_key_values'}]
        },
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.section.parens.begin.terraform'}
          },
          end: '(\\))\\s*(\\=)\\s*',
          endCaptures: {
            1: {name: 'punctuation.section.parens.end.terraform'},
            2: {name: 'keyword.operator.terraform'}
          },
          name: 'meta.mapping.key.terraform',
          patterns: [{include: '#expressions'}]
        },
        {patterns: [{include: '#main'}]}
      ]
    },
    operators: {
      patterns: [
        {match: '\\>\\=', name: 'keyword.operator.terraform'},
        {match: '\\<\\=', name: 'keyword.operator.terraform'},
        {match: '\\=\\=', name: 'keyword.operator.terraform'},
        {match: '\\!\\=', name: 'keyword.operator.terraform'},
        {match: '\\+', name: 'keyword.operator.arithmetic.terraform'},
        {match: '\\-', name: 'keyword.operator.arithmetic.terraform'},
        {match: '\\*', name: 'keyword.operator.arithmetic.terraform'},
        {match: '\\/', name: 'keyword.operator.arithmetic.terraform'},
        {match: '\\%', name: 'keyword.operator.arithmetic.terraform'},
        {match: '\\&\\&', name: 'keyword.operator.logical.terraform'},
        {match: '\\|\\|', name: 'keyword.operator.logical.terraform'},
        {match: '\\!', name: 'keyword.operator.logical.terraform'},
        {match: '\\>', name: 'keyword.operator.terraform'},
        {match: '\\<', name: 'keyword.operator.terraform'},
        {match: '\\?', name: 'keyword.operator.terraform'},
        {match: '\\.\\.\\.', name: 'keyword.operator.terraform'},
        {match: '\\:', name: 'keyword.operator.terraform'}
      ]
    },
    parens: {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.section.parens.begin.terraform'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.parens.end.terraform'}},
      patterns: [
        {include: '#expressions'},
        {
          match: '\\b(?!null|false|true)[[:alpha:]][[:alnum:]_-]*\\b',
          name: 'variable.other.readwrite.terraform'
        }
      ]
    },
    string_interpolation: {
      begin: '(\\$|\\%)\\{',
      beginCaptures: {0: {name: 'keyword.other.interpolation.begin.terraform'}},
      end: '\\}',
      endCaptures: {0: {name: 'keyword.other.interpolation.end.terraform'}},
      name: 'meta.interpolation.terraform',
      patterns: [
        {
          match: '\\~\\s',
          name: 'keyword.operator.template.left.trim.terraform'
        },
        {
          match: '\\s\\~',
          name: 'keyword.operator.template.right.trim.terraform'
        },
        {
          match: '\\b(if|else|endif|for|in|endfor)\\b',
          name: 'keyword.control.terraform'
        },
        {include: '#expressions'}
      ]
    },
    string_literals: {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.terraform'}
      },
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.terraform'}},
      name: 'string.quoted.double.terraform',
      patterns: [
        {include: '#string_interpolation'},
        {
          match: '\\\\[nrt"\\\\]|\\\\u([[:xdigit:]]{8}|[[:xdigit:]]{4})',
          name: 'constant.character.escape.terraform'
        }
      ]
    },
    top_level_attribute_definition: {
      captures: {
        1: {name: 'punctuation.section.parens.begin.terraform'},
        2: {name: 'variable.other.readwrite.terraform'},
        3: {name: 'punctuation.section.parens.end.terraform'},
        4: {name: 'keyword.operator.assignment.terraform'}
      },
      match:
        '(\\()?(\\b(?!null|false|true)[[:alpha:]][[:alnum:]_-]*\\b)(\\))?\\s*(\\=[^\\=|\\>])\\s*',
      name: 'variable.declaration.terraform'
    },
    tuple_for_expression: {
      begin: '\\bfor\\b',
      beginCaptures: {0: {name: 'keyword.control.terraform'}},
      end: '(?=\\])',
      patterns: [
        {match: '\\bin\\b', name: 'keyword.operator.word.terraform'},
        {match: '\\bif\\b', name: 'keyword.control.conditional.terraform'},
        {match: '\\:', name: 'keyword.operator.terraform'},
        {include: '#expressions'},
        {include: '#comments'},
        {include: '#comma'},
        {
          match: '\\b(?!null|false|true)[[:alpha:]][[:alnum:]_-]*\\b',
          name: 'variable.other.readwrite.terraform'
        }
      ]
    },
    type_keywords: {
      match: '\\b(any|string|number|bool)\\b',
      name: 'storage.type.terraform'
    }
  },
  scopeName: 'source.terraform'
}

export default grammar
