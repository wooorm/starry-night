// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.vhdl', '.vhd', '.vhf', '.vhi', '.vho', '.vhs', '.vht', '.vhw'],
  names: ['vhdl'],
  patterns: [{include: '#block_processing'}, {include: '#cleanup'}],
  repository: {
    architecture_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\n\t\t\t\t\t\t# The word architecture $1\n\t\t\t\t\t\t\\b((?i:architecture))\\s+\n\t\t\t\t\t\t\n\t\t\t\t\t\t# Followed up by a valid $3 or invalid identifier $4\n\t\t\t\t\t\t(([a-zA-z][a-zA-z0-9_]*)|(.+))(?=\\s)\\s+\n\n\t\t\t\t\t\t# The word of $5\n\t\t\t\t\t\t((?i:of))\\s+\n\n\t\t\t\t\t\t# Followed by a valid $7 or invalid identifier $8\n\t\t\t\t\t\t(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))(?=\\s*(?i:is))\\b\n\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'storage.type.architecture.vhdl'},
            3: {name: 'entity.name.type.architecture.begin.vhdl'},
            4: {name: 'invalid.illegal.invalid.identifier.vhdl'},
            5: {name: 'keyword.control.of.vhdl'},
            7: {name: 'entity.name.type.entity.reference.vhdl'},
            8: {name: 'invalid.illegal.invalid.identifier.vhdl'}
          },
          end: '(?x)\n\t\t\t\t\t\t# The word end $1\n\t\t\t\t\t\t\\b((?i:end))\n\n\t\t\t\t\t\t# Optional word architecture $3\n\t\t\t\t\t\t(\\s+((?i:architecture)))?\n\n\t\t\t\t\t\t# Optional same identifier $6 or illegal identifier $7\n\t\t\t\t\t\t(\\s+((\\3)|(.+?)))?\n\n\t\t\t\t\t\t# This will cause the previous to capture until just before the ; or $\n\t\t\t\t\t\t(?=\\s*;)\n\t\t\t\t\t',
          endCaptures: {
            1: {name: 'keyword.control.end.vhdl'},
            3: {name: 'storage.type.architecture.vhdl'},
            6: {name: 'entity.name.type.architecture.end.vhdl'},
            7: {name: 'invalid.illegal.mismatched.identifier.vhdl'}
          },
          name: 'meta.block.architecture',
          patterns: [
            {include: '#function_definition_pattern'},
            {include: '#procedure_definition_pattern'},
            {include: '#component_pattern'},
            {include: '#if_pattern'},
            {include: '#process_pattern'},
            {include: '#type_pattern'},
            {include: '#record_pattern'},
            {include: '#for_pattern'},
            {include: '#entity_instantiation_pattern'},
            {include: '#component_instantiation_pattern'},
            {include: '#cleanup'}
          ]
        }
      ]
    },
    attribute_list: {
      patterns: [
        {
          begin: "'\\(",
          beginCaptures: {
            0: {name: 'punctuation.definition.attribute_list.begin.vhdl'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.attribute_list.end.vhdl'}
          },
          name: 'meta.block.attribute_list',
          patterns: [{include: '#parenthetical_list'}, {include: '#cleanup'}]
        }
      ]
    },
    block_processing: {
      patterns: [
        {include: '#package_pattern'},
        {include: '#package_body_pattern'},
        {include: '#entity_pattern'},
        {include: '#architecture_pattern'}
      ]
    },
    case_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t# Beginning of line ...\n\t\t\t\t\t\t^\\s*\n\n\t\t\t\t\t\t# Optional identifier ... $3 or invalid identifier $4\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t ([a-zA-Z][a-zA-Z0-9_]*)\n\t\t\t\t\t\t\t\t|(.+?)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\\s*:\\s*\n\t\t\t\t\t\t)?\n\n\t\t\t\t\t\t# The word case $5\n\t\t\t\t\t\t\\b((?i:case))\\b\n\t\t\t\t\t',
          beginCaptures: {
            3: {name: 'entity.name.tag.case.begin.vhdl'},
            4: {name: 'invalid.illegal.invalid.identifier.vhdl'},
            5: {name: 'keyword.control.case.vhdl'}
          },
          end: '(?x)\n\t\t\t\t\t\t# The word end $1\n\t\t\t\t\t\t\\b((?i:end))\\s*\n\n\t\t\t\t\t\t# The word case $4 or invalid word $5\n\t\t\t\t\t\t(\\s+(((?i:case))|(.*?)))\n\n\t\t\t\t\t\t# Optional identifier from before $8 or illegal $9\n\t\t\t\t\t\t(\\s+((\\2)|(.*?)))?\n\n\t\t\t\t\t\t# Ending with a semicolon\n\t\t\t\t\t\t(?=\\s*;)\n\t\t\t\t\t',
          endCaptures: {
            1: {name: 'keyword.control.end.vhdl'},
            4: {name: 'keyword.control.case.vhdl'},
            5: {name: 'invalid.illegal.case.required.vhdl'},
            8: {name: 'entity.name.tag.case.end.vhdl'},
            9: {name: 'invalid.illegal.mismatched.identifier.vhdl'}
          },
          name: 'meta.block.case.vhdl',
          patterns: [{include: '#control_patterns'}, {include: '#cleanup'}]
        }
      ]
    },
    cleanup: {
      patterns: [
        {include: '#comments'},
        {include: '#constants_numeric'},
        {include: '#strings'},
        {include: '#attribute_list'},
        {include: '#syntax_highlighting'}
      ]
    },
    comments: {
      patterns: [
        {
          begin: '(^[ \\t]+)?(?=--)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.vhdl'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '--',
              beginCaptures: {0: {name: 'punctuation.definition.comment.vhdl'}},
              end: '\\n',
              name: 'comment.line.double-dash.vhdl'
            }
          ]
        }
      ]
    },
    component_instantiation_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t# From the beginning of the line ...\n\t\t\t\t\t\t^\\s*\n\n\t\t\t\t\t\t# Match a valid identifier $1\n\t\t\t\t\t\t([a-zA-Z][a-zA-Z0-9_]*)\n\n\t\t\t\t\t\t# Colon! $2\n\t\t\t\t\t\t\\s*(:)\\s*\n\n\t\t\t\t\t\t# Another valid identifier $3\n\t\t\t\t\t\t([a-zA-Z][a-zA-Z0-9_]*)\\b\n\n\t\t\t\t\t\t# Make sure we are just the other word, or the beginning of\n\t\t\t\t\t\t# a generic or port mapping\n\t\t\t\t\t\t(?=\\s*($|generic|port))\n\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'entity.name.section.component_instantiation.vhdl'},
            2: {name: 'punctuation.separator.vhdl'},
            3: {name: 'entity.name.tag.component.reference.vhdl'}
          },
          end: ';',
          endCaptures: {0: {name: 'punctuation.terminator.statement.vhdl'}},
          name: 'meta.block.component_instantiation.vhdl',
          patterns: [{include: '#parenthetical_list'}, {include: '#cleanup'}]
        }
      ]
    },
    component_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t# From the beginning of the line ...\n\t\t\t\t\t\t^\\s*\n\n\t\t\t\t\t\t# The word component $1\n\t\t\t\t\t\t\\b((?i:component))\\s+\n\n\t\t\t\t\t\t# A valid identifier $3 or invalid identifier $4\n\t\t\t\t\t\t(([a-zA-Z_][a-zA-Z0-9_]*)\\s*|(.+?))(?=\\b(?i:is|port)\\b|$|--)\n\n\t\t\t\t\t\t# Optional word is $6\n\t\t\t\t\t\t(\\b((?i:is\\b)))?\n\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'storage.type.component.vhdl'},
            3: {name: 'entity.name.type.component.begin.vhdl'},
            4: {name: 'invalid.illegal.invalid.identifier.vhdl'},
            6: {name: 'keyword.control.is.vhdl'}
          },
          end: '(?x)\n\t\t\t\t\t\t# The word end $1\n\t\t\t\t\t\t\\b((?:end))\\s+\n\n\t\t\t\t\t\t# The word component $3 or illegal word $4\n\t\t\t\t\t\t(((?i:component\\b))|(.+?))(?=\\s*|;)\n\t\t\t\t\t\t\n\t\t\t\t\t\t# Optional identifier $7 or illegal mismatched $8\n\t\t\t\t\t\t(\\s+((\\3)|(.+?)))?(?=\\s*;)\n\t\t\t\t\t',
          endCaptures: {
            1: {name: 'keyword.control.end.vhdl'},
            3: {name: 'storage.type.component.vhdl'},
            4: {name: 'invalid.illegal.component.keyword.required.vhdl'},
            7: {name: 'entity.name.type.component.end.vhdl'},
            8: {name: 'invalid.illegal.mismatched.identifier.vhdl'}
          },
          name: 'meta.block.component.vhdl',
          patterns: [
            {include: '#generic_list_pattern'},
            {include: '#port_list_pattern'},
            {include: '#comments'}
          ]
        }
      ]
    },
    constants_numeric: {
      patterns: [
        {
          match: '\\b([+\\-]?[\\d_]+\\.[\\d_]+([eE][+\\-]?[\\d_]+)?)\\b',
          name: 'constant.numeric.floating_point.vhdl'
        },
        {
          match: '\\b\\d+#[0-9A-Fa-f_]+#',
          name: 'constant.numeric.base_pound_number_pound.vhdl'
        },
        {
          match: '\\b[\\d_]+([eE][\\d_]+)?\\b',
          name: 'constant.numeric.integer.vhdl'
        },
        {
          match: '[xX]"[0-9a-fA-F_uUxXzZwWlLhH\\-]+"',
          name: 'constant.numeric.quoted.double.string.hex.vhdl'
        },
        {
          match: '[oO]"[0-7_uUxXzZwWlLhH\\-]+"',
          name: 'constant.numeric.quoted.double.string.octal.vhdl'
        },
        {
          match: '[bB]?"[01_uUxXzZwWlLhH\\-]+"',
          name: 'constant.numeric.quoted.double.string.binary.vhdl'
        },
        {
          captures: {1: {name: 'invalid.illegal.quoted.double.string.vhdl'}},
          match: '([bBoOxX]".+?")',
          name: 'constant.numeric.quoted.double.string.illegal.vhdl'
        },
        {
          match: "'[01uUxXzZwWlLhH\\-]'",
          name: 'constant.numeric.quoted.single.std_logic'
        }
      ]
    },
    control_patterns: {
      patterns: [
        {include: '#case_pattern'},
        {include: '#if_pattern'},
        {include: '#for_pattern'},
        {include: '#while_pattern'}
      ]
    },
    entity_instantiation_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t# From the beginning of the line\n\t\t\t\t\t\t^\\s*\n\n\t\t\t\t\t\t# Component identifier or illegal identifier $1\n\t\t\t\t\t\t([a-zA-Z][a-zA-Z0-9_]*)\n\n\t\t\t\t\t\t# Colon! $2\n\t\t\t\t\t\t\\s*(:)\\s*\n\n\t\t\t\t\t\t# Optional word use $4\n\t\t\t\t\t\t(((?i:use))\\s+)?\n\n\t\t\t\t\t\t# Required word entity $5\n\t\t\t\t\t\t((?i:entity))\\s+\n\n\t\t\t\t\t\t# Optional library unit identifier $8 for invalid identifier $9 followed by a dot $10\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))\n\t\t\t\t\t\t\t(\\.)\n\t\t\t\t\t\t)?\n\n\t\t\t\t\t\t# Entity name reference $12 or illegal identifier $13\n\t\t\t\t\t\t(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))\n\n\t\t\t\t\t\t# Check to see if we are being followed by either open paren, end of line, or port or generic words\n\t\t\t\t\t\t(?=\\s*(\\(|$|(?i:port|generic)))\n\n\t\t\t\t\t\t# Optional architecture elaboration\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t# Open paren $16\n\t\t\t\t\t\t\t\\s*(\\()\\s*\n\n\t\t\t\t\t\t\t# Arch identifier $18 or invalid identifier $19\n\t\t\t\t\t\t\t(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))(?=\\s*\\))\n\n\t\t\t\t\t\t\t# Close paren $21\n\t\t\t\t\t\t\t\\s*(\\))\n\t\t\t\t\t\t)?\n\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'entity.name.section.entity_instantiation.vhdl'},
            10: {name: 'punctuation.separator.vhdl'},
            12: {name: 'entity.name.tag.entity.reference.vhdl'},
            13: {name: 'invalid.illegal.invalid.identifier.vhdl'},
            16: {name: 'punctuation.definition.arguments.begin.vhdl'},
            18: {name: 'entity.name.tag.architecture.reference.vhdl'},
            19: {name: 'invalid.illegal.invalid.identifier.vhdl'},
            2: {name: 'punctuation.separator.vhdl'},
            21: {name: 'punctuation.definition.arguments.end.vhdl'},
            4: {name: 'keyword.control.use.vhdl'},
            5: {name: 'keyword.control.entity.vhdl'},
            8: {name: 'entity.name.tag.library.reference.vhdl'},
            9: {name: 'invalid.illegal.invalid.identifier.vhdl'}
          },
          end: ';',
          endCaptures: {0: {name: 'punctuation.terminator.statement.vhdl'}},
          name: 'meta.block.entity_instantiation.vhdl',
          patterns: [{include: '#parenthetical_list'}, {include: '#cleanup'}]
        }
      ]
    },
    entity_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t# From the beginning of the line ...\n\t\t\t\t\t\t^\\s*\n\n\t\t\t\t\t\t# The word entity $1\n\t\t\t\t\t\t((?i:entity\\b))\\s+\n\n\t\t\t\t\t\t# The identifier $3 or an invalid identifier $4\n\t\t\t\t\t\t(([a-zA-Z][a-zA-Z\\d_]*)|(.+?))(?=\\s)\n\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'storage.type.entity.vhdl'},
            3: {name: 'entity.name.type.entity.begin.vhdl'},
            4: {name: 'invalid.illegal.invalid.identifier.vhdl'}
          },
          end: '(?x)\n\n\t\t\t\t\t\t# The word end $1\n\t\t\t\t\t\t\\b((?i:end\\b))\n\n\t\t\t\t\t\t# Optional word entity $3\n\t\t\t\t\t\t(\\s+((?i:entity)))?\n\n\t\t\t\t\t\t# Optional identifier match $6 or indentifier mismatch $7\n\t\t\t\t\t\t(\\s+((\\3)|(.+?)))?\n\t\t\t\t\t\t\n\t\t\t\t\t\t# Make sure there is a semicolon following\n\t\t\t\t\t\t(?=\\s*;)\n\t\t\t\t\t',
          endCaptures: {
            1: {name: 'keyword.control.end.vhdl'},
            3: {name: 'storage.type.entity.vhdl'},
            6: {name: 'entity.name.type.entity.end.vhdl'},
            7: {name: 'invalid.illegal.mismatched.identifier.vhdl'}
          },
          name: 'meta.block.entity.vhdl',
          patterns: [
            {include: '#comments'},
            {include: '#generic_list_pattern'},
            {include: '#port_list_pattern'},
            {include: '#cleanup'}
          ]
        }
      ]
    },
    for_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t# From the beginning of the line\n\t\t\t\t\t\t^\\s*\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t# Check for an identifier $2\n\t\t\t\t\t\t\t([a-zA-Z][a-zA-Z0-9_]*)\n\n\t\t\t\t\t\t\t# Followed by a colon $3\n\t\t\t\t\t\t\t\\s*(:)\\s*\n\t\t\t\t\t\t)?\n\n\t\t\t\t\t\t# Make sure the next word is not wait\n\t\t\t\t\t\t(?!(?i:wait\\s*))\n\n\t\t\t\t\t\t# The for keyword $4\n\t\t\t\t\t\t\\b((?i:for))\\b\n\n\t\t\t\t\t\t# Make sure the next word is not all\n\t\t\t\t\t\t(?!\\s*(?i:all))\n\n\t\t\t\t\t',
          beginCaptures: {
            2: {name: 'entity.name.tag.for.generate.begin.vhdl'},
            3: {name: 'punctuation.separator.vhdl'},
            4: {name: 'keyword.control.for.vhdl'}
          },
          end: '(?x)\n\t\t\t\t\t\t# The word end $1\n\t\t\t\t\t\t\\b((?i:end))\\s+\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t# Followed by generate or loop $3\n\t\t\t\t\t\t\t ((?i:generate|loop))\n\n\t\t\t\t\t\t\t# But it really is required $4\n\t\t\t\t\t\t\t|(\\S+)\n\t\t\t\t\t\t)\\b\n\n\t\t\t\t\t\t# The matching identifier $7 or an invalid identifier $8\n\t\t\t\t\t\t(\\s+((\\2)|(.+?)))?\n\n\t\t\t\t\t\t# Only space and a semicolon left\n\t\t\t\t\t\t(?=\\s*;)\n\t\t\t\t\t',
          endCaptures: {
            1: {name: 'keyword.control.end.vhdl'},
            3: {name: 'keyword.control.vhdl'},
            4: {name: 'invalid.illegal.loop.or.generate.required.vhdl'},
            7: {name: 'entity.name.tag.for.generate.end.vhdl'},
            8: {name: 'invalid.illegal.mismatched.identifier.vhdl'}
          },
          name: 'meta.block.for.vhdl',
          patterns: [
            {include: '#control_patterns'},
            {include: '#entity_instantiation_pattern'},
            {include: '#component_pattern'},
            {include: '#component_instantiation_pattern'},
            {include: '#process_pattern'},
            {include: '#cleanup'}
          ]
        }
      ]
    },
    function_definition_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t# From the beginning of the line\n\t\t\t\t\t\t^\\s*\n\n\t\t\t\t\t\t# The word function $1\n\t\t\t\t\t\t((?i:function))\\s+\n\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t# A valid normal identifier $3\n\t\t\t\t\t\t\t ([a-zA-Z][a-zA-Z\\d_]*)\n\t\t\t\t\t\t\t# A valid string quoted identifier $4\n\t\t\t\t\t\t\t|("\\S+")\n\t\t\t\t\t\t\t# A valid backslash escaped identifier $5\n\t\t\t\t\t\t\t|(\\\\.+\\\\)\n\t\t\t\t\t\t\t# An invalid identifier $5\n\t\t\t\t\t\t\t|(.+?)\n\t\t\t\t\t\t)\n\n\t\t\t\t\t\t# Check to make sure we have a list or we return\n\t\t\t\t\t\t(?=\\s*\n\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t \\(\n\t\t\t\t\t\t\t\t|(?i:\\breturn\\b)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'storage.type.function.vhdl'},
            3: {name: 'entity.name.function.function.begin.vhdl'},
            4: {name: 'entity.name.function.function.begin.vhdl'},
            5: {name: 'entity.name.function.function.begin.vhdl'},
            6: {name: 'invalid.illegal.invalid.identifier.vhdl'}
          },
          end: '(?x)\n\t\t\t\t\t\t# From the beginning of the line\n\t\t\t\t\t\t^\\s*\n\n\t\t\t\t\t\t# The word end $1\n\t\t\t\t\t\t((?i:end))\n\n\t\t\t\t\t\t# Optional word function $3\n\t\t\t\t\t\t(\\s+((?i:function)))?\n\n\t\t\t\t\t\t# Optional matched identifier $6 or mismatched identifier $7\n\t\t\t\t\t\t(\\s+((\\3|\\4|\\5)|(.+?)))?\n\n\t\t\t\t\t\t# Ending with whitespace and semicolon\n\t\t\t\t\t\t(?=\\s*;)\n\t\t\t\t\t',
          endCaptures: {
            1: {name: 'keyword.control.end.vhdl'},
            3: {name: 'storage.type.function.vhdl'},
            6: {name: 'entity.name.function.function.end.vhdl'},
            7: {name: 'invalid.illegal.mismatched.identifier.vhdl'}
          },
          name: 'meta.block.function_definition.vhdl',
          patterns: [
            {include: '#control_patterns'},
            {include: '#parenthetical_list'},
            {include: '#type_pattern'},
            {include: '#record_pattern'},
            {include: '#cleanup'}
          ]
        }
      ]
    },
    function_prototype_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t# From the beginning of the line\n\t\t\t\t\t\t^\\s*\n\n\t\t\t\t\t\t# The word function $1\n\t\t\t\t\t\t((?i:function))\\s+\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t# A valid normal identifier $3\n\t\t\t\t\t\t\t ([a-zA-Z][a-zA-Z\\d_]*)\n\t\t\t\t\t\t\t# A valid quoted identifier $4\n\t\t\t\t\t\t\t|("\\S+")\n\t\t\t\t\t\t\t# A valid backslash escaped identifier $5\n\t\t\t\t\t\t\t|(\\\\.+\\\\)\n\t\t\t\t\t\t\t# An invalid identifier $6\n\t\t\t\t\t\t\t|(.+?)\n\t\t\t\t\t\t)\n\n\t\t\t\t\t\t# Check to make sure we have a list or we return\n\t\t\t\t\t\t(?=\\s*\n\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t \\(\n\t\t\t\t\t\t\t\t|(?i:\\breturn\\b)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'storage.type.function.vhdl'},
            3: {name: 'entity.name.function.function.prototype.vhdl'},
            4: {name: 'entity.name.function.function.prototype.vhdl'},
            5: {name: 'entity.name.function.function.prototype.vhdl'},
            6: {name: 'invalid.illegal.function.name.vhdl'}
          },
          end: '(?<=;)',
          name: 'meta.block.function_prototype.vhdl',
          patterns: [
            {
              begin: '\\b(?i:return)(?=\\s+[^;]+\\s*;)',
              beginCaptures: {0: {name: 'keyword.control.return.vhdl'}},
              end: '\\;',
              endCaptures: {
                0: {name: 'punctuation.terminator.function_prototype.vhdl'}
              },
              patterns: [
                {include: '#parenthetical_list'},
                {include: '#cleanup'}
              ]
            },
            {include: '#parenthetical_list'},
            {include: '#cleanup'}
          ]
        }
      ]
    },
    generic_list_pattern: {
      patterns: [
        {
          begin: '\\b(?i:generic)\\b',
          beginCaptures: {0: {name: 'keyword.control.generic.vhdl'}},
          end: ';',
          endCaptures: {0: {name: 'punctuation.terminator.statement.vhdl'}},
          name: 'meta.block.generic_list.vhdl',
          patterns: [{include: '#parenthetical_list'}]
        }
      ]
    },
    if_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t# Optional identifier $2\n\t\t\t\t\t\t\t([a-zA-Z][a-zA-Z0-9_]*)\n\n\t\t\t\t\t\t\t# Followed by a colon $3\n\t\t\t\t\t\t\t\\s*(:)\\s*\n\t\t\t\t\t\t)?\n\n\t\t\t\t\t\t# Keyword if $4\n\t\t\t\t\t\t\\b((?i:if))\\b\n\t\t\t\t\t',
          beginCaptures: {
            2: {name: 'entity.name.tag.if.generate.begin.vhdl'},
            3: {name: 'punctuation.separator.vhdl'},
            4: {name: 'keyword.control.if.vhdl'}
          },
          end: '(?x)\n\t\t\t\t\t\t# The word end $1\n\t\t\t\t\t\t\\b((?i:end))\\s+\n\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t# Optional generate or if keyword $4\n\t\t\t\t\t\t\t\t ((?i:generate|if))\n\n\t\t\t\t\t\t\t\t# Keyword if or generate required $5\n\t\t\t\t\t\t\t\t|(\\S+)\n\t\t\t\t\t\t\t)\\b\n\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\\s+\n\t\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t\t# Optional matching identifier $8\n\t\t\t\t\t\t\t\t\t (\\2)\n\n\t\t\t\t\t\t\t\t\t# Mismatched identifier $9\n\t\t\t\t\t\t\t\t\t|(.+?)\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)?\n\t\t\t\t\t\t)?\n\n\t\t\t\t\t\t# Followed by a semicolon\n\t\t\t\t\t\t(?=\\s*;)\n\t\t\t\t\t',
          endCaptures: {
            1: {name: 'keyword.control.end.vhdl'},
            4: {name: 'keyword.control.generate.vhdl'},
            5: {name: 'invalid.illegal.if.or.generate.required.vhdl'},
            8: {name: 'entity.name.tag.if.generate.end.vhdl'},
            9: {name: 'invalid.illegal.mismatched.identifier.vhdl'}
          },
          name: 'meta.block.if.vhdl',
          patterns: [
            {include: '#control_patterns'},
            {include: '#process_pattern'},
            {include: '#entity_instantiation_pattern'},
            {include: '#component_pattern'},
            {include: '#component_instantiation_pattern'},
            {include: '#cleanup'}
          ]
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            "'(?i:active|ascending|base|delayed|driving|event|high|image|instance|last|left|leftof|length|low|path|pos|pred|quiet|range|reverse|right|rightof|simple|stable|succ|transaction|val|value)\\b",
          name: 'keyword.control.attributes.vhdl'
        },
        {
          match:
            '\\b(?i:abs|access|after|alias|all|and|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|mod|nand|new|next|nor|not|null|of|on|open|or|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|rem|report|return|rol|ror|select|severity|shared|signal|sla|sll|sra|srl|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with|xnor|xor)\\b',
          name: 'keyword.control.language.vhdl'
        },
        {
          match: '(\\+|\\-|<=|=|=>|:=|>=|>|<|/|\\||&|(\\*{1,2}))',
          name: 'keyword.operator.vhdl'
        }
      ]
    },
    package_body_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t# The word package $1\n\t\t\t\t\t\t\\b((?i:package))\\s+\n\n\t\t\t\t\t\t# ... but we want to be a package body $2\n\t\t\t\t\t\t((?i:body))\\s+\n\n\t\t\t\t\t\t# The valid identifier $4 or the invalid one $5\n\t\t\t\t\t\t(([a-zA-Z][a-zA-Z\\d_]*)|(.+?))\\s+\n\n\t\t\t\t\t\t# ... and we end it with an is $6\n\t\t\t\t\t\t((?i:is))\\b\n\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'storage.type.package.vhdl'},
            2: {name: 'keyword.control.body.vhdl'},
            4: {name: 'entity.name.section.package_body.begin.vhdl'},
            5: {name: 'invalid.illegal.invalid.identifier.vhdl'},
            6: {name: 'keyword.control.is.vhdl'}
          },
          end: '(?x)\n\t\t\t\t\t\t# The word end $1\n\t\t\t\t\t\t\\b((?i:end\\b))\n\n\t\t\t\t\t\t# Optional word package $3 body $4\n\t\t\t\t\t\t(\\s+((?i:package))\\s+((?i:body)))?\n\n\t\t\t\t\t\t# Optional identifier $7 or mismatched identifier $8\n\t\t\t\t\t\t(\\s+((\\4)|(.+?)))?(?=\\s*;)',
          endCaptures: {
            1: {name: 'keyword.control.end.vhdl'},
            3: {name: 'storage.type.package.vhdl'},
            4: {name: 'keyword.control.body.vhdl'},
            7: {name: 'entity.name.section.package_body.end.vhdl'},
            8: {name: 'invalid.illegal.mismatched.identifier.vhdl'}
          },
          name: 'meta.block.package_body.vhdl',
          patterns: [
            {include: '#function_definition_pattern'},
            {include: '#procedure_definition_pattern'},
            {include: '#type_pattern'},
            {include: '#subtype_pattern'},
            {include: '#record_pattern'},
            {include: '#cleanup'}
          ]
        }
      ]
    },
    package_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t# The word package $1\n\t\t\t\t\t\t\\b((?i:package))\\s+\n\n\t\t\t\t\t\t# ... but we do not want to be a package body\n\t\t\t\t\t\t(?!(?i:body))\n\n\t\t\t\t\t\t# The valid identifier $3 or the invalid one $4\n\t\t\t\t\t\t(([a-zA-Z][a-zA-Z\\d_]*)|(.+?))\\s+\n\n\t\t\t\t\t\t# ... and we end it with an is $5\n\t\t\t\t\t\t((?i:is))\\b\n\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'storage.type.package.vhdl'},
            3: {name: 'entity.name.section.package.begin.vhdl'},
            4: {name: 'invalid.illegal.invalid.identifier.vhdl'},
            5: {name: 'keyword.control.is.vhdl'}
          },
          end: '(?x)\n\t\t\t\t\t\t# The word end $1\n\t\t\t\t\t\t\\b((?i:end\\b))\n\n\t\t\t\t\t\t# Optional word package $3\n\t\t\t\t\t\t(\\s+((?i:package)))?\n\n\t\t\t\t\t\t# Optional identifier $6 or mismatched identifier $7\n\t\t\t\t\t\t(\\s+((\\2)|(.+?)))?(?=\\s*;)',
          endCaptures: {
            1: {name: 'keyword.control.end.vhdl'},
            3: {name: 'storage.type.package.vhdl'},
            6: {name: 'entity.name.section.package.end.vhdl'},
            7: {name: 'invalid.illegal.mismatched.identifier.vhdl'}
          },
          name: 'meta.block.package.vhdl',
          patterns: [
            {include: '#function_prototype_pattern'},
            {include: '#procedure_prototype_pattern'},
            {include: '#type_pattern'},
            {include: '#subtype_pattern'},
            {include: '#record_pattern'},
            {include: '#component_pattern'},
            {include: '#cleanup'}
          ]
        }
      ]
    },
    parenthetical_list: {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.definition.parenthetical_list.begin.vhdl'}
          },
          end: '(?<=\\))',
          name: 'meta.block.parenthetical_list.vhdl',
          patterns: [
            {
              begin: '(?=[\'"a-zA-Z0-9])',
              end: '(;|\\)|,)',
              endCaptures: {0: {name: 'meta.item.stopping.character.vhdl'}},
              name: 'meta.list.element.vhdl',
              patterns: [
                {include: '#comments'},
                {include: '#parenthetical_pair'},
                {include: '#cleanup'}
              ]
            },
            {match: '\\)', name: 'invalid.illegal.unexpected.parenthesis.vhdl'},
            {include: '#cleanup'}
          ]
        }
      ]
    },
    parenthetical_pair: {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.section.scope.begin.vhdl'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.section.scope.end.vhdl'}},
          name: 'meta.block.parenthetical_pair.vhdl',
          patterns: [{include: '#parenthetical_pair'}, {include: '#cleanup'}]
        }
      ]
    },
    port_list_pattern: {
      patterns: [
        {
          begin: '\\b(?i:port)\\b',
          beginCaptures: {0: {name: 'keyword.control.port.vhdl'}},
          end: ';',
          endCaptures: {0: {name: 'punctuation.terminator.statement.vhdl'}},
          name: 'meta.block.port_list.vhdl',
          patterns: [{include: '#parenthetical_list'}]
        }
      ]
    },
    procedure_definition_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t# From the beginning of the line\n\t\t\t\t\t\t^\\s*\n\n\t\t\t\t\t\t# The word function $1\n\t\t\t\t\t\t((?i:procedure))\\s+\n\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t# A valid normal identifier $3\n\t\t\t\t\t\t\t ([a-zA-Z][a-zA-Z\\d_]*)\n\t\t\t\t\t\t\t# A valid quoted identifier $4\n\t\t\t\t\t\t\t|("\\S+")\n\t\t\t\t\t\t\t# An invalid identifier $5\n\t\t\t\t\t\t\t|(.+?)\n\t\t\t\t\t\t)\n\n\t\t\t\t\t\t# Check to make sure we have a list is\n\t\t\t\t\t\t(?=\\s*(\\(|(?i:is)))\n\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'storage.type.procedure.vhdl'},
            3: {name: 'entity.name.function.procedure.begin.vhdl'},
            4: {name: 'entity.name.function.procedure.begin.vhdl'},
            5: {name: 'invalid.illegal.invalid.identifier.vhdl'}
          },
          end: '(?x)\n\t\t\t\t\t\t# From the beginning of the line\n\t\t\t\t\t\t^\\s*\n\n\t\t\t\t\t\t# The word end $1\n\t\t\t\t\t\t((?i:end))\n\n\t\t\t\t\t\t# Optional word function $3\n\t\t\t\t\t\t(\\s+((?i:procedure)))?\n\n\t\t\t\t\t\t# Optional matched identifier $6 or mismatched identifier $7\n\t\t\t\t\t\t(\\s+((\\3|\\4)|(.+?)))?\n\n\t\t\t\t\t\t# Ending with whitespace and semicolon\n\t\t\t\t\t\t(?=\\s*;)\n\t\t\t\t\t',
          endCaptures: {
            1: {name: 'keyword.control.end.vhdl'},
            3: {name: 'storage.type.procedure.vhdl'},
            6: {name: 'entity.name.function.procedure.end.vhdl'},
            7: {name: 'invalid.illegal.mismatched.identifier.vhdl'}
          },
          name: 'meta.block.procedure_definition.vhdl',
          patterns: [
            {include: '#parenthetical_list'},
            {include: '#control_patterns'},
            {include: '#type_pattern'},
            {include: '#record_pattern'},
            {include: '#cleanup'}
          ]
        }
      ]
    },
    procedure_prototype_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t\\b((?i:procedure))\\s+\n\t\t\t\t\t\t(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))\n\t\t\t\t\t\t(?=\\s*(\\(|;))\n\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'storage.type.procedure.vhdl'},
            3: {name: 'entity.name.function.procedure.begin.vhdl'},
            4: {name: 'invalid.illegal.invalid.identifier.vhdl'}
          },
          end: ';',
          endCaptures: {0: {name: 'punctual.vhdl'}},
          name: 'meta.block.procedure_prototype.vhdl',
          patterns: [{include: '#parenthetical_list'}]
        }
      ]
    },
    process_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t# From the beginning of the line\n\t\t\t\t\t\t^\\s*\n\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t# Optional identifier $2\n\t\t\t\t\t\t\t([a-zA-Z][a-zA-Z0-9_]*)\n\n\t\t\t\t\t\t\t# Colon $3\n\t\t\t\t\t\t\t\\s*(:)\\s*\n\t\t\t\t\t\t)?\n\n\t\t\t\t\t\t# The word process #4\n\t\t\t\t\t\t((?i:process))\n\t\t\t\t\t',
          beginCaptures: {
            2: {name: 'entity.name.section.process.begin.vhdl'},
            3: {name: 'punctuation.separator.vhdl'},
            4: {name: 'keyword.control.process.vhdl'}
          },
          end: '(?x)\n\t\t\t\t\t\t# The word end $1\n\t\t\t\t\t\t((?i:end))\n\n\t\t\t\t\t\t# Optional word process $3\n\t\t\t\t\t\t(\\s+((?i:process)))\n\n\t\t\t\t\t\t# Optional identifier $6 or invalid identifier $7\n\t\t\t\t\t\t(\\s+((\\2)|(.+?)))?\n\n\t\t\t\t\t\t(?=\\s*;)\n\t\t\t\t\t',
          endCaptures: {
            1: {name: 'keyword.control.end.vhdl'},
            3: {name: 'keyword.control.process.vhdl'},
            6: {name: 'entity.name.section.process.end.vhdl'},
            7: {name: 'invalid.illegal.invalid.identifier.vhdl'}
          },
          name: 'meta.block.process.vhdl',
          patterns: [{include: '#control_patterns'}, {include: '#cleanup'}]
        }
      ]
    },
    punctuation: {
      patterns: [
        {
          match: '(\\.|,|:|;|\\(|\\))',
          name: 'punctuation.definition.other.vhdl'
        }
      ]
    },
    record_pattern: {
      patterns: [
        {
          begin: '\\b(?i:record)\\b',
          beginCaptures: {0: {name: 'storage.type.record.vhdl'}},
          end: '(?x)\n\t\t\t\t\t\t# The word end $1\n\t\t\t\t\t\t\\b((?i:end))\n\n\t\t\t\t\t\t# The word record $2\n\t\t\t\t\t\t\\s+((?i:record))\n\n\t\t\t\t\t\t# Optional identifier $5 or invalid identifier $6\n\t\t\t\t\t\t(\\s+(([a-zA-Z][a-zA-Z\\d_]*)|(.*?)))?\n\n\t\t\t\t\t\t# Only whitespace and semicolons can be left\n\t\t\t\t\t\t(?=\\s*;)\n\t\t\t\t\t',
          endCaptures: {
            1: {name: 'keyword.control.end.vhdl'},
            2: {name: 'storage.type.record.vhdl'},
            5: {name: 'entity.name.type.record.vhdl'},
            6: {name: 'invalid.illegal.invalid.identifier.vhdl'}
          },
          name: 'meta.block.record.vhdl',
          patterns: [{include: '#cleanup'}]
        },
        {include: '#cleanup'}
      ]
    },
    strings: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.string.begin.vhdl'},
            2: {name: 'punctuation.definition.string.end.vhdl'}
          },
          match: "(').(')",
          name: 'string.quoted.single.vhdl'
        },
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.vhdl'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.vhdl'}},
          name: 'string.quoted.double.vhdl',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.vhdl'}]
        },
        {begin: '\\\\', end: '\\\\', name: 'string.other.backslash.vhdl'}
      ]
    },
    subtype_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t# The word subtype $1\n\t\t\t\t\t\t\\b((?i:subtype))\\s+\n\n\t\t\t\t\t\t# Valid identifier $3 or invalid identifier $4\n\t\t\t\t\t\t(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))\\s+\n\n\t\t\t\t\t\t# The word is $5\n\t\t\t\t\t\t((?i:is))\\b\n\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'keyword.control.subtype.vhdl'},
            3: {name: 'entity.name.type.subtype.vhdl'},
            4: {name: 'invalid.illegal.invalid.identifier.vhdl'},
            5: {name: 'keyword.control.is.vhdl'}
          },
          end: ';',
          endCaptures: {0: {name: 'punctuation.terminator.statement.vhdl'}},
          name: 'meta.block.subtype.vhdl',
          patterns: [{include: '#cleanup'}]
        }
      ]
    },
    support_constants: {
      patterns: [
        {
          match:
            '\\b(?i:math_1_over_e|math_1_over_pi|math_1_over_sqrt_2|math_2_pi|math_3_pi_over_2|math_deg_to_rad|math_e|math_log10_of_e|math_log2_of_e|math_log_of_10|math_log_of_2|math_pi|math_pi_over_2|math_pi_over_3|math_pi_over_4|math_rad_to_deg|math_sqrt_2|math_sqrt_pi)\\b',
          name: 'support.constant.ieee.math_real.vhdl'
        },
        {
          match:
            '\\b(?i:math_cbase_1|math_cbase_j|math_czero|positive_real|principal_value)\\b',
          name: 'support.constant.ieee.math_complex.vhdl'
        },
        {
          match: '\\b(?i:true|false)\\b',
          name: 'support.constant.std.standard.vhdl'
        }
      ]
    },
    support_functions: {
      patterns: [
        {
          match: '\\b(?i:finish|stop|resolution_limit)\\b',
          name: 'support.function.std.env.vhdl'
        },
        {
          match: '\\b(?i:readline|read|writeline|write|endfile|endline)\\b',
          name: 'support.function.std.textio.vhdl'
        },
        {
          match:
            '\\b(?i:rising_edge|falling_edge|to_bit|to_bitvector|to_stdulogic|to_stdlogicvector|to_stdulogicvector|is_x)\\b',
          name: 'support.function.ieee.std_logic_1164.vhdl'
        },
        {
          match:
            '\\b(?i:shift_left|shift_right|rotate_left|rotate_right|resize|to_integer|to_unsigned|to_signed)\\b',
          name: 'support.function.ieee.numeric_std.vhdl'
        },
        {
          match:
            '\\b(?i:arccos(h?)|arcsin(h?)|arctan|arctanh|cbrt|ceil|cos|cosh|exp|floor|log10|log2|log|realmax|realmin|round|sign|sin|sinh|sqrt|tan|tanh|trunc)\\b',
          name: 'support.function.ieee.math_real.vhdl'
        },
        {
          match:
            '\\b(?i:arg|cmplx|complex_to_polar|conj|get_principal_value|polar_to_complex)\\b',
          name: 'support.function.ieee.math_complex.vhdl'
        }
      ]
    },
    support_types: {
      patterns: [
        {
          match:
            '\\b(?i:boolean|bit|character|severity_level|integer|real|time|delay_length|now|natural|positive|string|bit_vector|file_open_kind|file_open_status|fs|ps|ns|us|ms|sec|min|hr|severity_level|note|warning|error|failure)\\b',
          name: 'support.type.std.standard.vhdl'
        },
        {
          match: '\\b(?i:line|text|side|width|input|output)\\b',
          name: 'support.type.std.textio.vhdl'
        },
        {
          match:
            '\\b(?i:std_logic|std_ulogic|std_logic_vector|std_ulogic_vector)\\b',
          name: 'support.type.ieee.std_logic_1164.vhdl'
        },
        {
          match: '\\b(?i:signed|unsigned)\\b',
          name: 'support.type.ieee.numeric_std.vhdl'
        },
        {
          match: '\\b(?i:complex|complex_polar)\\b',
          name: 'support.type.ieee.math_complex.vhdl'
        }
      ]
    },
    syntax_highlighting: {
      patterns: [
        {include: '#keywords'},
        {include: '#punctuation'},
        {include: '#support_constants'},
        {include: '#support_types'},
        {include: '#support_functions'}
      ]
    },
    type_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t# The word type $1\n\t\t\t\t\t\t\\b((?i:type))\\s+\n\n\t\t\t\t\t\t# Valid identifier $3 or invalid identifier $4\n\t\t\t\t\t\t(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))\n\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t# A semicolon is coming up if we are incomplete\n\t\t\t\t\t\t\t (?=\\s*;)\n\n\t\t\t\t\t\t\t# Or the word is comes up $7\n\t\t\t\t\t\t\t|(\\s+((?i:is)))\n\t\t\t\t\t\t)\\b\n\t\t\t\t\t',
          beginCaptures: {
            1: {name: 'keyword.control.type.vhdl'},
            3: {name: 'entity.name.type.type.vhdl'},
            4: {name: 'invalid.illegal.invalid.identifier.vhdl'},
            7: {name: 'keyword.control.is.vhdl'}
          },
          end: ';',
          endCaptures: {0: {name: 'punctuation.terminator.statement.vhdl'}},
          name: 'meta.block.type.vhdl',
          patterns: [{include: '#record_pattern'}, {include: '#cleanup'}]
        }
      ]
    },
    while_pattern: {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t# From the beginning of the line\n\t\t\t\t\t\t^\\s*\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t# Check for an identifier $2\n\t\t\t\t\t\t\t([a-zA-Z][a-zA-Z0-9_]*)\n\n\t\t\t\t\t\t\t# Followed by a colon $3\n\t\t\t\t\t\t\t\\s*(:)\\s*\n\t\t\t\t\t\t)?\n\n\t\t\t\t\t\t# The for keyword $4\n\t\t\t\t\t\t\\b((?i:while))\\b\n\t\t\t\t\t',
          beginCaptures: {
            2: {name: 'entity.name.type.vhdl'},
            3: {name: 'punctuation.separator.vhdl'},
            4: {name: 'keyword.control.while.vhdl'}
          },
          end: '(?x)\n\t\t\t\t\t\t# The word end $1\n\t\t\t\t\t\t\\b((?i:end))\\s+\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t# Followed by keyword loop $3\n\t\t\t\t\t\t\t ((?i:loop))\n\n\t\t\t\t\t\t\t# But it really is required $4\n\t\t\t\t\t\t\t|(\\S+)\n\t\t\t\t\t\t)\\b\n\n\t\t\t\t\t\t# The matching identifier $7 or an invalid identifier $8\n\t\t\t\t\t\t(\\s+((\\2)|(.+?)))?\n\n\t\t\t\t\t\t# Only space and a semicolon left\n\t\t\t\t\t\t(?=\\s*;)\n\t\t\t\t\t',
          endCaptures: {
            1: {name: 'keyword.control.end.vhdl'},
            3: {name: 'keyword.control.loop.vhdl'},
            4: {name: 'invalid.illegal.loop.keyword.required.vhdl'},
            7: {name: 'entity.name.tag.while.loop.vhdl'},
            8: {name: 'invalid.illegal.mismatched.identifier'}
          },
          name: 'meta.block.while.vhdl',
          patterns: [{include: '#control_patterns'}, {include: '#cleanup'}]
        }
      ]
    }
  },
  scopeName: 'source.vhdl'
}

export default grammar
