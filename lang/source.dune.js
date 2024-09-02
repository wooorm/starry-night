// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/maelvls/vscode-dune>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['dune'],
  patterns: [
    {include: '#comments'},
    {
      begin:
        '\\(\\s*(lang|using|library|rule|executable|executables|rule|ocamllex|ocamlyacc|menhir|install|alias|copy_files|copy_files#|jbuild_version|include)\\s',
      beginCaptures: {1: {name: 'meta.class.stanza.dune'}},
      end: '\\)',
      name: 'meta.stanza.dune',
      patterns: [{include: '$self'}]
    },
    {
      begin:
        '\\(\\s*(name|public_name|synopsis|install_c_headers|ppx_runtime_libraries|c_flags|cxx_flags|c_names|cxx_names|library_flags|c_library_flags|virtual_deps|modes|kind|wrapped|optional|self_build_stubs_archive|no_dynlink|ppx\\.driver)\\s',
      beginCaptures: {1: {name: 'keyword.other.dune'}},
      end: '\\)',
      name: 'meta.stanza.library.field.dune',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\(\\s*(targets|deps|locks|loc|mode|action)\\s',
      beginCaptures: {1: {name: 'keyword.other.dune'}},
      end: '\\)',
      name: 'meta.stanza.rule.dune',
      patterns: [{include: '$self'}]
    },
    {
      captures: {1: {name: 'keyword.other.dune'}},
      match: '\\(\\s*(fallback|optional)\\s*\\)',
      name: 'meta.mono-sexp.dune'
    },
    {
      begin:
        '\\(\\s*(run|chdir|setenv|with-stdout-to|with-stderr-to|with-outputs-to|ignore-stdout|ignore-stderr|ignore-outputs|progn|echo|cat|copy|copy#|system|bash|write-file|diff|diff\\?)\\s',
      beginCaptures: {1: {name: 'entity.name.function.action.dune'}},
      end: '\\)',
      name: 'meta.stanza.rule.action.dune',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\(\\s*(section)\\s',
      beginCaptures: {1: {name: 'keyword.other.dune'}},
      end: '\\)',
      name: 'meta.stanza.install.dune',
      patterns: [
        {
          match:
            '\\b(lib|libexec|bin|sbin|toplevel|share|share_root|etc|doc|stublibs|man|misc)\\b',
          name: 'constant.language.rule.mode.dune'
        }
      ]
    },
    {
      begin: '\\(\\s*(files)\\s',
      beginCaptures: {1: {name: 'keyword.other.dune'}},
      end: '\\)',
      name: 'meta.stanza.install.dune',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\(\\s*(normal|ppx_deriver|ppx_rewriter)\\s',
      beginCaptures: {1: {name: 'constant.language.rule.mode.dune'}},
      end: '\\)',
      name: 'meta.library.kind.dune'
    },
    {
      begin: '\\(\\s*(name|link_executables|link_flags|modes)\\s',
      beginCaptures: {1: {name: 'keyword.other.dune'}},
      end: '\\)',
      name: 'meta.stanza.executables.dune',
      patterns: [{include: '$self'}]
    },
    {
      begin:
        '\\(\\s*(preprocess|preprocessor_deps|lint|modules|modules_without_implementation|libraries|flags|ocamlc_flags|ocamlopt_flags|js_of_ocaml|allow_overlapping_dependencies|per_module)\\s',
      beginCaptures: {1: {name: 'keyword.other.dune'}},
      end: '\\)',
      name: 'meta.stanza.lib-or-exec.buildable.dune',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\(\\s*(no_preprocessing|action|pps)\\s',
      beginCaptures: {1: {name: 'keyword.other.dune'}},
      end: '\\)',
      name: 'meta.stanza.lib-or-exec.buildable.preprocess.dune',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\(\\s*(file|alias|alias_rec|glob_files|files_recursively_in)\\s',
      beginCaptures: {1: {name: 'keyword.other.dune'}},
      end: '\\)',
      name: 'meta.stanza.lib-or-exec.buildable.preprocess_deps.dune',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\(\\s*(select)\\s',
      beginCaptures: {1: {name: 'keyword.other.dune'}},
      end: '\\)',
      name: 'meta.stanza.lib-or-exec.buildable.libraries.dune',
      patterns: [{include: '$self'}]
    },
    {match: '\\b\\d+\\b', name: 'constant.numeric.dune'},
    {match: '(true|false)', name: 'constant.language.dune'},
    {match: '\\s(as|from|->)\\s', name: 'keyword.other.dune'},
    {match: '(\\!)', name: 'keyword.other.dune'},
    {match: '(:\\w+)\\b', name: 'constant.language.flag.dune'},
    {
      match: '\\b(standard|fallback|promote|promote-until-then)\\b',
      name: 'constant.language.rule.mode.dune'
    },
    {include: '#string'},
    {include: '#variable'},
    {include: '#list'},
    {include: '#atom'}
  ],
  repository: {
    atom: {patterns: [{match: '\\b[^\\s]+\\b', name: 'meta.atom.dune'}]},
    'comment-inner': {
      patterns: [
        {
          begin: '\\(',
          end: '\\)',
          name: 'comment.sexp.inner.dune',
          patterns: [{include: '#comment-inner'}]
        }
      ]
    },
    comments: {
      patterns: [
        {
          begin: '#\\|',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.dune'}
          },
          end: '\\|#',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.dune'}},
          name: 'comment.block.dune',
          patterns: [{include: '#comments'}]
        },
        {
          begin: '#;\\s*\\(',
          end: '\\)',
          name: 'comment.sexp.dune',
          patterns: [{include: '#comment-inner'}]
        },
        {match: ';.*$', name: 'comment.line.dune'}
      ]
    },
    list: {
      patterns: [
        {
          begin: '(\\()',
          captures: {1: {name: 'entity.tag.list.parenthesis.dune'}},
          end: '(\\))',
          name: 'meta.list.dune',
          patterns: [{include: '$self'}]
        }
      ]
    },
    string: {
      patterns: [
        {
          begin: '(?=[^\\\\])(")',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.dune'}
          },
          end: '(")',
          endCaptures: {1: {name: 'punctuation.definition.string.end.dune'}},
          name: 'string.quoted.double.dune',
          patterns: [
            {match: '\\\\"', name: 'constant.character.string.escape.dune'},
            {include: '#variable'}
          ]
        }
      ]
    },
    variable: {patterns: [{match: '\\${[^}]*}', name: 'variable.other.dune'}]}
  },
  scopeName: 'source.dune'
}

export default grammar
