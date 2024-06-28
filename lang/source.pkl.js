// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/apple/pkl.tmbundle>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pkl'],
  names: ['pkl'],
  patterns: [
    {
      captures: {
        1: {name: 'variable.language.pkl'},
        2: {name: 'variable.other.module.pkl'}
      },
      match:
        '(?x:\n  \\b\n  (module)\n  \\s+\n  (\n    [\\p{L}_$][\\p{L}0-9_$]*(?:\\.[\\p{L}_$][\\p{L}0-9_$]*)*\n  )\n)'
    },
    {
      captures: {
        1: {name: 'keyword.class.pkl'},
        2: {name: 'entity.name.type.pkl'},
        3: {name: 'punctuation.pkl'},
        4: {name: 'entity.name.type.pkl'}
      },
      match:
        '(?x:\n  (typealias)\n  \\s+\n  ([\\p{L}_$][\\p{L}0-9_$]*)\n  \\s*(=)\\s*\n  ((?x:\n  (?x:\n  [\\p{L}_$][\\p{L}0-9_$]* # ident\n  \\s*\n  (?:<[^>]*>)? # optional type parameters\n  \\s*\n  (?:\\([^)]*\\))? # optional constraint (this is an approximation)\n  \\s*\n  \\?? # optional nulability indicator\n)\n  \\s*\n  (\\|\\s*(?x:\n  [\\p{L}_$][\\p{L}0-9_$]* # ident\n  \\s*\n  (?:<[^>]*>)? # optional type parameters\n  \\s*\n  (?:\\([^)]*\\))? # optional constraint (this is an approximation)\n  \\s*\n  \\?? # optional nulability indicator\n))*\n))\n)'
    },
    {
      captures: {1: {name: 'keyword.class.pkl'}},
      match: '\\b(class)\\s+[\\p{L}_$][\\p{L}0-9_$]*',
      name: 'entity.name.type.pkl'
    },
    {
      captures: {
        1: {name: 'keyword.control.pkl'},
        2: {name: 'variable.other.property.pkl'},
        3: {name: 'variable.other.property.pkl'},
        4: {name: 'storage.modifier.pkl'}
      },
      match:
        '(?x:\n  \\b(for)\n  \\s*\\(\n  ([\\p{L}_$][\\p{L}0-9_$]*)(?:\\s*,\\s*([\\p{L}_$][\\p{L}0-9_$]*))* # bindings\n  \\s+\n  (in)\n)'
    },
    {
      captures: {
        1: {name: 'keyword.control.pkl'},
        2: {name: 'entity.name.type.pkl'}
      },
      match:
        '\\b(new)\\s+((?x:\n  (?x:\n  [\\p{L}_$][\\p{L}0-9_$]* # ident\n  \\s*\n  (?:<[^>]*>)? # optional type parameters\n  \\s*\n  (?:\\([^)]*\\))? # optional constraint (this is an approximation)\n  \\s*\n  \\?? # optional nulability indicator\n)\n  \\s*\n  (\\|\\s*(?x:\n  [\\p{L}_$][\\p{L}0-9_$]* # ident\n  \\s*\n  (?:<[^>]*>)? # optional type parameters\n  \\s*\n  (?:\\([^)]*\\))? # optional constraint (this is an approximation)\n  \\s*\n  \\?? # optional nulability indicator\n))*\n))'
    },
    {
      captures: {
        1: {name: 'keyword.pkl'},
        2: {name: 'variable.other.property.pkl'}
      },
      match: '\\b(function)\\s+([\\p{L}_$][\\p{L}0-9_$]*)'
    },
    {
      captures: {1: {name: 'keyword.pkl'}, 2: {name: 'entity.name.type.pkl'}},
      match:
        '\\b(as)\\s+((?x:\n  (?x:\n  [\\p{L}_$][\\p{L}0-9_$]* # ident\n  \\s*\n  (?:<[^>]*>)? # optional type parameters\n  \\s*\n  (?:\\([^)]*\\))? # optional constraint (this is an approximation)\n  \\s*\n  \\?? # optional nulability indicator\n)\n  \\s*\n  (\\|\\s*(?x:\n  [\\p{L}_$][\\p{L}0-9_$]* # ident\n  \\s*\n  (?:<[^>]*>)? # optional type parameters\n  \\s*\n  (?:\\([^)]*\\))? # optional constraint (this is an approximation)\n  \\s*\n  \\?? # optional nulability indicator\n))*\n))'
    },
    {match: '\\b(true|false|null)\\b', name: 'constant.character.language.pkl'},
    {match: '//.*', name: 'comment.line.pkl'},
    {begin: '/\\*', end: '\\*/', name: 'comment.block.pkl'},
    {
      begin:
        '(?x:\n  (\n    (?:\\b|\\s*)[\\p{L}_$][\\p{L}0-9_$]* # variable name\n    |\n    `[^`]+` # quoted variable name\n  )\n  \\s*\n  (:)\n  \\s*\n  ((?x:\n  (?x:\n  [\\p{L}_$][\\p{L}0-9_$]* # ident\n  \\s*\n  (?:<[^>]*>)? # optional type parameters\n  \\s*\n  (?:\\([^)]*\\))? # optional constraint (this is an approximation)\n  \\s*\n  \\?? # optional nulability indicator\n)\n  \\s*\n  (\\|\\s*(?x:\n  [\\p{L}_$][\\p{L}0-9_$]* # ident\n  \\s*\n  (?:<[^>]*>)? # optional type parameters\n  \\s*\n  (?:\\([^)]*\\))? # optional constraint (this is an approximation)\n  \\s*\n  \\?? # optional nulability indicator\n))*\n)) # type\n)',
      captures: {
        1: {name: 'variable.other.property.pkl'},
        2: {name: 'punctuation.pkl'},
        3: {name: 'entity.name.type.pkl'}
      },
      end: '\\s*=|,|\\)|^[ \\t]*$'
    },
    {
      captures: {
        1: {name: 'variable.other.property.pkl'},
        2: {name: 'punctuation.pkl'}
      },
      match:
        '(?x:\n  (\n    \\b[\\p{L}_$][\\p{L}0-9_$]* # variable name\n    |\n    `[^`]+` # quoted variable name\n  )\n  \\s*\n  (=)(?!=)\n)'
    },
    {
      captures: {
        1: {name: 'punctuation.pkl'},
        2: {name: 'entity.name.type.pkl'}
      },
      match:
        '(:)\\s*((?x:\n  (?x:\n  [\\p{L}_$][\\p{L}0-9_$]* # ident\n  \\s*\n  (?:<[^>]*>)? # optional type parameters\n  \\s*\n  (?:\\([^)]*\\))? # optional constraint (this is an approximation)\n  \\s*\n  \\?? # optional nulability indicator\n)\n  \\s*\n  (\\|\\s*(?x:\n  [\\p{L}_$][\\p{L}0-9_$]* # ident\n  \\s*\n  (?:<[^>]*>)? # optional type parameters\n  \\s*\n  (?:\\([^)]*\\))? # optional constraint (this is an approximation)\n  \\s*\n  \\?? # optional nulability indicator\n))*\n))'
    },
    {
      captures: {1: {name: 'variable.other.property.pkl'}},
      match: '^\\s*([\\p{L}_$][\\p{L}0-9_$]*)\\s*\\{'
    },
    {
      match:
        '\\b(hidden|local|abstract|external|open|in|out|amends|extends|fixed|const)\\b',
      name: 'storage.modifier.pkl'
    },
    {
      match:
        '\\b(amends|as|extends|function|is|let|read|read\\?|import|throw|trace)\\b',
      name: 'keyword.pkl'
    },
    {match: '\\b(if|else|when|for|import|new)\\b', name: 'keyword.control.pkl'},
    {
      match:
        '(?x:\n  \\b\n  0x(?:[\\da-fA-F][\\da-fA-F_]*[\\da-fA-F]|[\\da-fA-F_])\n  \\b\n)',
      name: 'constant.numeric.hex.pkl'
    },
    {
      match: '(?x:\n  \\b\n  0b(?:[0-1][0-1_]*[0-1]|[0-1])\n  \\b\n)',
      name: 'constant.numeric.binary.pkl'
    },
    {
      match: '(?x:\n  \\b\n  0o(?:[0-7][0-7_]*[0-7]|[0-7])\n  \\b\n)',
      name: 'constant.numeric.octal.pkl'
    },
    {
      match: '(?x:\n  \\b\n  (?:\\d[0-9_]*\\d|\\d)\n  \\b\n)',
      name: 'constant.numeric.decimal.pkl'
    },
    {
      match:
        '(?x:\n  \\b\n  (?:\n    (?:\\d[0-9_]*\\d|\\d)?              # 0 or more digits\n    \\.                               # dot literal\n    (?:\\d[0-9_]*\\d|\\d)               # 1 or more digits\n    (?:[eE][+-]?(?:\\d[0-9_]*\\d|\\d))? # optional exponent\n    |                                # OR\n    (?:\\d[0-9_]*\\d|\\d)               # 1 or more digits\n    [eE][+-]?(?:\\d[0-9_]*\\d|\\d)      # exponent\n  )\n  \\b\n)',
      name: 'constant.numeric.pkl'
    },
    {
      match:
        '(?x:\n  # MATH\n  \\+    # add\n  |\n  -     # minus\n  |\n  \\*    # multiply\n  |\n  /     # divide\n  |\n  ~/    # integer divide\n  |\n  %     # modulo\n  |\n  \\*\\*  # power\n  |\n  >     # greater than\n  |\n  >=    # greater than or equals\n  |\n  <     # less than\n  |\n  <=    # less than or equals\n  |\n  ==    # equals\n  |\n  !=    # not equals\n\n  # LOGICAL\n  |\n  !     # unary not\n  |\n  &&    # and\n  |\n  \\|\\|  # or\n  |\n\n  # MISCELLANEOUS\n  \\|>   # function pipe\n  |\n  \\?\\?  # nullish coalesce\n  |\n  !!    # non-null assertion\n  |\n  =     # assignment\n  |\n  ->    # lambda arrow\n  |\n  \\|    # type union\n)',
      name: 'keyword.operator.pkl'
    },
    {match: '\\b(this|module|outer|super)\\b', name: 'variable.language.pkl'},
    {match: '\\b(unknown|never)\\b', name: 'support.type.pkl'},
    {match: '[(){}\\[\\]]', name: 'meta.brace.pkl'},
    {match: '\\b(class|typealias)\\b', name: 'keyword.class.pkl'},
    {
      match:
        '(?x:\n  \\.\\?  # optional chain\n  |\n  \\.    # member access\n  |\n  ;     # semicolon\n  |\n  :     # colon\n)',
      name: 'punctuation.pkl'
    },
    {match: '@[\\p{L}_$][\\p{L}0-9_$]*', name: 'entity.name.type.pkl'},
    {
      begin: '(""")',
      captures: {1: {name: 'punctuation.delimiter.pkl'}},
      end: '(""")',
      name: 'string.quoted.triple.0.pkl',
      patterns: [
        {
          captures: {
            1: {name: 'invalid.illegal.unrecognized-string-escape.pkl'}
          },
          match:
            '(?x:                 # turn on extended mode\n  \\\\\n  (?:\n    [trn"\\\\]         # tab, carriage return, newline, quote, backslash\n    |                # OR\n    u                # the letter u\n    \\{               # curly opening brace literal\n    [\\da-fA-F]+      # 1 or more hex number literal\n    }                # curly end literal\n    |                # OR\n    \\(               # interpolation start\n    .+?              # one or more characters lazily (correct syntax highlighting within here should be provided by semantic tokens)\n    \\)               # interpolation end\n  )\n  |                  # OR\n  (                  # capture group: invalid escape\n    \\\\   # the escape char\n    .                # any character\n  )\n)',
          name: 'constant.character.escape.0.pkl'
        }
      ]
    },
    {
      begin: '(")',
      beginCaptures: {1: {name: 'punctuation.delimiter.pkl'}},
      end: '(?x:\n  (")         # string end\n  |                     # OR\n  (.?$)                 # error; unterminated string (flag last character as an error)\n)',
      endCaptures: {
        1: {name: 'punctuation.delimimter.pkl'},
        2: {name: 'invalid.illegal.newline.pkl'}
      },
      name: 'string.quoted.double.0.pkl',
      patterns: [
        {
          captures: {
            1: {name: 'invalid.illegal.unrecognized-string-escape.pkl'}
          },
          match:
            '(?x:                 # turn on extended mode\n  \\\\\n  (?:\n    [trn"\\\\]         # tab, carriage return, newline, quote, backslash\n    |                # OR\n    u                # the letter u\n    \\{               # curly opening brace literal\n    [\\da-fA-F]+      # 1 or more hex number literal\n    }                # curly end literal\n    |                # OR\n    \\(               # interpolation start\n    .+?              # one or more characters lazily (correct syntax highlighting within here should be provided by semantic tokens)\n    \\)               # interpolation end\n  )\n  |                  # OR\n  (                  # capture group: invalid escape\n    \\\\   # the escape char\n    .                # any character\n  )\n)',
          name: 'constant.character.escape.0.pkl'
        }
      ]
    },
    {
      begin: '(#""")',
      captures: {1: {name: 'punctuation.delimiter.pkl'}},
      end: '("""#)',
      name: 'string.quoted.triple.1.pkl',
      patterns: [
        {
          captures: {
            1: {name: 'invalid.illegal.unrecognized-string-escape.pkl'}
          },
          match:
            '(?x:                 # turn on extended mode\n  \\\\\\#\n  (?:\n    [trn"\\\\]         # tab, carriage return, newline, quote, backslash\n    |                # OR\n    u                # the letter u\n    \\{               # curly opening brace literal\n    [\\da-fA-F]+      # 1 or more hex number literal\n    }                # curly end literal\n    |                # OR\n    \\(               # interpolation start\n    .+?              # one or more characters lazily (correct syntax highlighting within here should be provided by semantic tokens)\n    \\)               # interpolation end\n  )\n  |                  # OR\n  (                  # capture group: invalid escape\n    \\\\\\#   # the escape char\n    .                # any character\n  )\n)',
          name: 'constant.character.escape.1.pkl'
        }
      ]
    },
    {
      begin: '(#")',
      beginCaptures: {1: {name: 'punctuation.delimiter.pkl'}},
      end: '(?x:\n  ("\\#)         # string end\n  |                     # OR\n  (.?$)                 # error; unterminated string (flag last character as an error)\n)',
      endCaptures: {
        1: {name: 'punctuation.delimimter.pkl'},
        2: {name: 'invalid.illegal.newline.pkl'}
      },
      name: 'string.quoted.double.1.pkl',
      patterns: [
        {
          captures: {
            1: {name: 'invalid.illegal.unrecognized-string-escape.pkl'}
          },
          match:
            '(?x:                 # turn on extended mode\n  \\\\\\#\n  (?:\n    [trn"\\\\]         # tab, carriage return, newline, quote, backslash\n    |                # OR\n    u                # the letter u\n    \\{               # curly opening brace literal\n    [\\da-fA-F]+      # 1 or more hex number literal\n    }                # curly end literal\n    |                # OR\n    \\(               # interpolation start\n    .+?              # one or more characters lazily (correct syntax highlighting within here should be provided by semantic tokens)\n    \\)               # interpolation end\n  )\n  |                  # OR\n  (                  # capture group: invalid escape\n    \\\\\\#   # the escape char\n    .                # any character\n  )\n)',
          name: 'constant.character.escape.1.pkl'
        }
      ]
    },
    {
      begin: '(##""")',
      captures: {1: {name: 'punctuation.delimiter.pkl'}},
      end: '("""##)',
      name: 'string.quoted.triple.2.pkl',
      patterns: [
        {
          captures: {
            1: {name: 'invalid.illegal.unrecognized-string-escape.pkl'}
          },
          match:
            '(?x:                 # turn on extended mode\n  \\\\\\#\\#\n  (?:\n    [trn"\\\\]         # tab, carriage return, newline, quote, backslash\n    |                # OR\n    u                # the letter u\n    \\{               # curly opening brace literal\n    [\\da-fA-F]+      # 1 or more hex number literal\n    }                # curly end literal\n    |                # OR\n    \\(               # interpolation start\n    .+?              # one or more characters lazily (correct syntax highlighting within here should be provided by semantic tokens)\n    \\)               # interpolation end\n  )\n  |                  # OR\n  (                  # capture group: invalid escape\n    \\\\\\#\\#   # the escape char\n    .                # any character\n  )\n)',
          name: 'constant.character.escape.2.pkl'
        }
      ]
    },
    {
      begin: '(##")',
      beginCaptures: {1: {name: 'punctuation.delimiter.pkl'}},
      end: '(?x:\n  ("\\#\\#)         # string end\n  |                     # OR\n  (.?$)                 # error; unterminated string (flag last character as an error)\n)',
      endCaptures: {
        1: {name: 'punctuation.delimimter.pkl'},
        2: {name: 'invalid.illegal.newline.pkl'}
      },
      name: 'string.quoted.double.2.pkl',
      patterns: [
        {
          captures: {
            1: {name: 'invalid.illegal.unrecognized-string-escape.pkl'}
          },
          match:
            '(?x:                 # turn on extended mode\n  \\\\\\#\\#\n  (?:\n    [trn"\\\\]         # tab, carriage return, newline, quote, backslash\n    |                # OR\n    u                # the letter u\n    \\{               # curly opening brace literal\n    [\\da-fA-F]+      # 1 or more hex number literal\n    }                # curly end literal\n    |                # OR\n    \\(               # interpolation start\n    .+?              # one or more characters lazily (correct syntax highlighting within here should be provided by semantic tokens)\n    \\)               # interpolation end\n  )\n  |                  # OR\n  (                  # capture group: invalid escape\n    \\\\\\#\\#   # the escape char\n    .                # any character\n  )\n)',
          name: 'constant.character.escape.2.pkl'
        }
      ]
    },
    {
      begin: '(###""")',
      captures: {1: {name: 'punctuation.delimiter.pkl'}},
      end: '("""###)',
      name: 'string.quoted.triple.3.pkl',
      patterns: [
        {
          captures: {
            1: {name: 'invalid.illegal.unrecognized-string-escape.pkl'}
          },
          match:
            '(?x:                 # turn on extended mode\n  \\\\\\#\\#\\#\n  (?:\n    [trn"\\\\]         # tab, carriage return, newline, quote, backslash\n    |                # OR\n    u                # the letter u\n    \\{               # curly opening brace literal\n    [\\da-fA-F]+      # 1 or more hex number literal\n    }                # curly end literal\n    |                # OR\n    \\(               # interpolation start\n    .+?              # one or more characters lazily (correct syntax highlighting within here should be provided by semantic tokens)\n    \\)               # interpolation end\n  )\n  |                  # OR\n  (                  # capture group: invalid escape\n    \\\\\\#\\#\\#   # the escape char\n    .                # any character\n  )\n)',
          name: 'constant.character.escape.3.pkl'
        }
      ]
    },
    {
      begin: '(###")',
      beginCaptures: {1: {name: 'punctuation.delimiter.pkl'}},
      end: '(?x:\n  ("\\#\\#\\#)         # string end\n  |                     # OR\n  (.?$)                 # error; unterminated string (flag last character as an error)\n)',
      endCaptures: {
        1: {name: 'punctuation.delimimter.pkl'},
        2: {name: 'invalid.illegal.newline.pkl'}
      },
      name: 'string.quoted.double.3.pkl',
      patterns: [
        {
          captures: {
            1: {name: 'invalid.illegal.unrecognized-string-escape.pkl'}
          },
          match:
            '(?x:                 # turn on extended mode\n  \\\\\\#\\#\\#\n  (?:\n    [trn"\\\\]         # tab, carriage return, newline, quote, backslash\n    |                # OR\n    u                # the letter u\n    \\{               # curly opening brace literal\n    [\\da-fA-F]+      # 1 or more hex number literal\n    }                # curly end literal\n    |                # OR\n    \\(               # interpolation start\n    .+?              # one or more characters lazily (correct syntax highlighting within here should be provided by semantic tokens)\n    \\)               # interpolation end\n  )\n  |                  # OR\n  (                  # capture group: invalid escape\n    \\\\\\#\\#\\#   # the escape char\n    .                # any character\n  )\n)',
          name: 'constant.character.escape.3.pkl'
        }
      ]
    },
    {
      begin: '(####""")',
      captures: {1: {name: 'punctuation.delimiter.pkl'}},
      end: '("""####)',
      name: 'string.quoted.triple.4.pkl',
      patterns: [
        {
          captures: {
            1: {name: 'invalid.illegal.unrecognized-string-escape.pkl'}
          },
          match:
            '(?x:                 # turn on extended mode\n  \\\\\\#\\#\\#\\#\n  (?:\n    [trn"\\\\]         # tab, carriage return, newline, quote, backslash\n    |                # OR\n    u                # the letter u\n    \\{               # curly opening brace literal\n    [\\da-fA-F]+      # 1 or more hex number literal\n    }                # curly end literal\n    |                # OR\n    \\(               # interpolation start\n    .+?              # one or more characters lazily (correct syntax highlighting within here should be provided by semantic tokens)\n    \\)               # interpolation end\n  )\n  |                  # OR\n  (                  # capture group: invalid escape\n    \\\\\\#\\#\\#\\#   # the escape char\n    .                # any character\n  )\n)',
          name: 'constant.character.escape.4.pkl'
        }
      ]
    },
    {
      begin: '(####")',
      beginCaptures: {1: {name: 'punctuation.delimiter.pkl'}},
      end: '(?x:\n  ("\\#\\#\\#\\#)         # string end\n  |                     # OR\n  (.?$)                 # error; unterminated string (flag last character as an error)\n)',
      endCaptures: {
        1: {name: 'punctuation.delimimter.pkl'},
        2: {name: 'invalid.illegal.newline.pkl'}
      },
      name: 'string.quoted.double.4.pkl',
      patterns: [
        {
          captures: {
            1: {name: 'invalid.illegal.unrecognized-string-escape.pkl'}
          },
          match:
            '(?x:                 # turn on extended mode\n  \\\\\\#\\#\\#\\#\n  (?:\n    [trn"\\\\]         # tab, carriage return, newline, quote, backslash\n    |                # OR\n    u                # the letter u\n    \\{               # curly opening brace literal\n    [\\da-fA-F]+      # 1 or more hex number literal\n    }                # curly end literal\n    |                # OR\n    \\(               # interpolation start\n    .+?              # one or more characters lazily (correct syntax highlighting within here should be provided by semantic tokens)\n    \\)               # interpolation end\n  )\n  |                  # OR\n  (                  # capture group: invalid escape\n    \\\\\\#\\#\\#\\#   # the escape char\n    .                # any character\n  )\n)',
          name: 'constant.character.escape.4.pkl'
        }
      ]
    },
    {
      begin: '(#####""")',
      captures: {1: {name: 'punctuation.delimiter.pkl'}},
      end: '("""#####)',
      name: 'string.quoted.triple.5.pkl',
      patterns: [
        {
          captures: {
            1: {name: 'invalid.illegal.unrecognized-string-escape.pkl'}
          },
          match:
            '(?x:                 # turn on extended mode\n  \\\\\\#\\#\\#\\#\\#\n  (?:\n    [trn"\\\\]         # tab, carriage return, newline, quote, backslash\n    |                # OR\n    u                # the letter u\n    \\{               # curly opening brace literal\n    [\\da-fA-F]+      # 1 or more hex number literal\n    }                # curly end literal\n    |                # OR\n    \\(               # interpolation start\n    .+?              # one or more characters lazily (correct syntax highlighting within here should be provided by semantic tokens)\n    \\)               # interpolation end\n  )\n  |                  # OR\n  (                  # capture group: invalid escape\n    \\\\\\#\\#\\#\\#\\#   # the escape char\n    .                # any character\n  )\n)',
          name: 'constant.character.escape.5.pkl'
        }
      ]
    },
    {
      begin: '(#####")',
      beginCaptures: {1: {name: 'punctuation.delimiter.pkl'}},
      end: '(?x:\n  ("\\#\\#\\#\\#\\#)         # string end\n  |                     # OR\n  (.?$)                 # error; unterminated string (flag last character as an error)\n)',
      endCaptures: {
        1: {name: 'punctuation.delimimter.pkl'},
        2: {name: 'invalid.illegal.newline.pkl'}
      },
      name: 'string.quoted.double.5.pkl',
      patterns: [
        {
          captures: {
            1: {name: 'invalid.illegal.unrecognized-string-escape.pkl'}
          },
          match:
            '(?x:                 # turn on extended mode\n  \\\\\\#\\#\\#\\#\\#\n  (?:\n    [trn"\\\\]         # tab, carriage return, newline, quote, backslash\n    |                # OR\n    u                # the letter u\n    \\{               # curly opening brace literal\n    [\\da-fA-F]+      # 1 or more hex number literal\n    }                # curly end literal\n    |                # OR\n    \\(               # interpolation start\n    .+?              # one or more characters lazily (correct syntax highlighting within here should be provided by semantic tokens)\n    \\)               # interpolation end\n  )\n  |                  # OR\n  (                  # capture group: invalid escape\n    \\\\\\#\\#\\#\\#\\#   # the escape char\n    .                # any character\n  )\n)',
          name: 'constant.character.escape.5.pkl'
        }
      ]
    },
    {
      begin: '(######""")',
      captures: {1: {name: 'punctuation.delimiter.pkl'}},
      end: '("""######)',
      name: 'string.quoted.triple.6.pkl',
      patterns: [
        {
          captures: {
            1: {name: 'invalid.illegal.unrecognized-string-escape.pkl'}
          },
          match:
            '(?x:                 # turn on extended mode\n  \\\\\\#\\#\\#\\#\\#\\#\n  (?:\n    [trn"\\\\]         # tab, carriage return, newline, quote, backslash\n    |                # OR\n    u                # the letter u\n    \\{               # curly opening brace literal\n    [\\da-fA-F]+      # 1 or more hex number literal\n    }                # curly end literal\n    |                # OR\n    \\(               # interpolation start\n    .+?              # one or more characters lazily (correct syntax highlighting within here should be provided by semantic tokens)\n    \\)               # interpolation end\n  )\n  |                  # OR\n  (                  # capture group: invalid escape\n    \\\\\\#\\#\\#\\#\\#\\#   # the escape char\n    .                # any character\n  )\n)',
          name: 'constant.character.escape.6.pkl'
        }
      ]
    },
    {
      begin: '(######")',
      beginCaptures: {1: {name: 'punctuation.delimiter.pkl'}},
      end: '(?x:\n  ("\\#\\#\\#\\#\\#\\#)         # string end\n  |                     # OR\n  (.?$)                 # error; unterminated string (flag last character as an error)\n)',
      endCaptures: {
        1: {name: 'punctuation.delimimter.pkl'},
        2: {name: 'invalid.illegal.newline.pkl'}
      },
      name: 'string.quoted.double.6.pkl',
      patterns: [
        {
          captures: {
            1: {name: 'invalid.illegal.unrecognized-string-escape.pkl'}
          },
          match:
            '(?x:                 # turn on extended mode\n  \\\\\\#\\#\\#\\#\\#\\#\n  (?:\n    [trn"\\\\]         # tab, carriage return, newline, quote, backslash\n    |                # OR\n    u                # the letter u\n    \\{               # curly opening brace literal\n    [\\da-fA-F]+      # 1 or more hex number literal\n    }                # curly end literal\n    |                # OR\n    \\(               # interpolation start\n    .+?              # one or more characters lazily (correct syntax highlighting within here should be provided by semantic tokens)\n    \\)               # interpolation end\n  )\n  |                  # OR\n  (                  # capture group: invalid escape\n    \\\\\\#\\#\\#\\#\\#\\#   # the escape char\n    .                # any character\n  )\n)',
          name: 'constant.character.escape.6.pkl'
        }
      ]
    }
  ],
  scopeName: 'source.pkl'
}

export default grammar
