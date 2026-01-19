// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/wgsl-analyzer/wgsl-analyzer>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.wgsl'],
  names: ['wgsl'],
  patterns: [
    {include: '#line_ending_comments'},
    {include: '#block_comments'},
    {include: '#attributes'},
    {include: '#functions'},
    {include: '#keywords'},
    {include: '#function_calls'},
    {include: '#literals'},
    {include: '#types'},
    {include: '#variables'},
    {include: '#punctuation'},
    {include: '#reserved_words'},
    {include: '#address_spaces'},
    {include: '#memory_access_modes'},
    {include: '#operators'},
    {include: '#built-in_value_names'}
  ],
  repository: {
    address_spaces: {
      match: '\\b(function|private|workgroup|uniform|storage|handle)\\b',
      name: 'storage.modifier.address_spaces.wgsl'
    },
    attributes: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.attribute.wgsl'},
            2: {name: 'entity.other.attribute.wgsl'}
          },
          match: '(@)\\s*([_$[:alpha:]][_$[:alnum:]]*)\\b'
        }
      ]
    },
    block_comments: {
      begin: '/\\*',
      end: '\\*/',
      name: 'comment.block.wgsl',
      patterns: [{include: '#block_comments'}]
    },
    'built-in_value_names': {
      match:
        '\\b(vertex_index|instance_index|position|front_facing|frag_depth|sample_index|sample_mask|local_invocation_id|local_invocation_index|global_invocation_id|workgroup_id|num_workgroups|subgroup_invocation_id|subgroup_size)\\b',
      name: 'variable.language.built-ins.wgsl'
    },
    function_arguments: {
      patterns: [
        {include: '#line_ending_comments'},
        {include: '#block_comments'},
        {include: '#attributes'},
        {include: '#keywords'},
        {include: '#function_calls'},
        {include: '#literals'},
        {include: '#types'},
        {include: '#variables'},
        {include: '#punctuation'},
        {include: '#reserved_words'},
        {include: '#address_spaces'},
        {include: '#memory_access_modes'},
        {include: '#operators'},
        {include: '#built-in_value_names'}
      ]
    },
    function_calls: {
      patterns: [
        {
          begin: '([_$[:alpha:]][_$[:alnum:]]*)\\s*(<[^|&()]+>)?(\\()',
          beginCaptures: {
            1: {name: 'entity.name.function.wgsl'},
            2: {patterns: [{include: '#function_arguments'}]},
            3: {name: 'punctuation.brackets.round.wgsl'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.brackets.round.wgsl'}},
          name: 'meta.function.wgsl',
          patterns: [{include: '#function_arguments'}]
        }
      ]
    },
    functions: {
      patterns: [
        {
          begin: '\\b(fn)\\s+([_$[:alpha:]][_$[:alnum:]]*)\\s*((\\()|(<))',
          beginCaptures: {
            1: {name: 'keyword.fn.wgsl'},
            2: {name: 'entity.name.function.definition.wgsl'},
            4: {name: 'punctuation.brackets.round.wgsl'}
          },
          end: '\\{',
          endCaptures: {0: {name: 'punctuation.brackets.curly.wgsl'}},
          name: 'meta.function.definition.wgsl',
          patterns: [{include: '#function_arguments'}]
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match: '\\b(alias|const|fn|let|override|struct|var)\\b',
          name: 'keyword.other.declarations-and-types.wgsl'
        },
        {
          match:
            '\\b(break|case|continue|continuing|default|discard|(?<!#)else|for|if|loop|return|switch|while)\\b',
          name: 'keyword.control.wgsl'
        },
        {match: '\\b(const_assert)\\b', name: 'keyword.other.assertions.wgsl'},
        {
          match: '(?<!@)\\b(diagnostic|enable|requires)\\b',
          name: 'keyword.other.directive.wgsl'
        }
      ]
    },
    line_ending_comments: {
      match: '\\s*//.*',
      name: 'comment.line.double-slash.wgsl'
    },
    literals: {
      patterns: [
        {
          match: '\\b(0[iu]?|[1-9][0-9]*[iu]?)\\b',
          name: 'constant.numeric.decimal.int.wgsl'
        },
        {
          match: '\\b(0[xX][0-9a-fA-F]+[iu]?)\\b',
          name: 'constant.numeric.hex.int.wgsl'
        },
        {
          match:
            '\\b(0[fh]|[1-9][0-9]*[fh]|[0-9]*\\.[0-9]+([eE][+-]?[0-9]+)?[fh]?|[0-9]+\\.[0-9]*([eE][+-]?[0-9]+)?[fh]?|[0-9]+[eE][+-]?[0-9]+[fh]?)\\b',
          name: 'constant.numeric.decimal.float.wgsl'
        },
        {
          match:
            '\\b(0[xX][0-9a-fA-F]*\\.[0-9a-fA-F]+([pP][+-]?[0-9]+[fh]?)?|0[xX][0-9a-fA-F]+\\.[0-9a-fA-F]*([pP][+-]?[0-9]+[fh]?)?|0[xX][0-9a-fA-F]+[pP][+-]?[0-9]+[fh]?)\\b',
          name: 'constant.numeric.hex.float.wgsl'
        },
        {match: '\\b(true|false)\\b', name: 'constant.language.boolean.wgsl'}
      ]
    },
    matrix_types: {
      patterns: [
        {match: '\\b(mat[2-4]x[2-4])\\b', name: 'storage.type.matrixes.wgsl'},
        {
          match: '\\b(mat[2-4]x[2-4])(f|h)\\b',
          name: 'storage.type.matrixes.wgsl'
        }
      ]
    },
    memory_access_modes: {
      match: '\\b(read|write|read_write)\\b',
      name: 'storage.modifier.memory_access_modes.wgsl'
    },
    memory_views: {match: '\\b(ptr)\\b', name: 'storage.type.ptr.wgsl'},
    operators: {
      patterns: [
        {
          match: '(\\^|\\||\\|\\||&&|<<|>>|!)(?!=)',
          name: 'keyword.operator.logical.wgsl'
        },
        {match: '&(?![&=])', name: 'keyword.operator.address-of.and.wgsl'},
        {
          match: '(\\+=|-=|\\*=|/=|%=|\\^=|&=|\\|=|<<=|>>=)',
          name: 'keyword.operator.assignment.wgsl'
        },
        {
          match: '(?<![<>])=(?!=|>)',
          name: 'keyword.operator.assignment.equal.wgsl'
        },
        {
          match: '(=(=)?(?!>)|!=|<=|(?<!=)>=)',
          name: 'keyword.operator.comparison.wgsl'
        },
        {
          match: '(([+%]|(\\*(?!\\w)))(?!=))|(-(?!>))|(/(?!/))',
          name: 'keyword.operator.math.wgsl'
        },
        {match: '\\.(?!\\.)', name: 'keyword.operator.access.dot.wgsl'},
        {match: '->', name: 'keyword.operator.arrow.skinny.wgsl'},
        {match: ':', name: 'keyword.operator.type.annotation.wgsl'}
      ]
    },
    plain_types: {
      patterns: [
        {match: '\\b(bool)\\b', name: 'storage.type.boolean.wgsl'},
        {match: '\\b(i32|u32)\\b', name: 'storage.type.integer.wgsl'},
        {match: '\\b(f32|f16)\\b', name: 'storage.type.floating-point.wgsl'},
        {include: '#vector_types'},
        {include: '#matrix_types'},
        {match: '\\b(atomic)\\b', name: 'storage.type.wgsl'},
        {match: '\\b(array)\\b', name: 'storage.type.wgsl'},
        {match: '\\b([A-Z][_$[:alnum:]]*)\\b', name: 'entity.name.type.wgsl'},
        {match: '\\b(i64|u64|f64)\\b', name: 'storage.type.wgsl'}
      ]
    },
    punctuation: {
      patterns: [
        {match: ',', name: 'punctuation.comma.wgsl'},
        {match: '[{}]', name: 'punctuation.brackets.curly.wgsl'},
        {match: '[()]', name: 'punctuation.brackets.round.wgsl'},
        {match: ';', name: 'punctuation.semi.wgsl'},
        {match: '[\\[\\]]', name: 'punctuation.brackets.square.wgsl'},
        {match: '(?<!=)[<>]', name: 'punctuation.brackets.angle.wgsl'}
      ]
    },
    reserved_words: {
      match:
        '\\b(aNULL|Self|abstract|active|alignas|alignof|as|asm|asm_fragment|async|attribute|auto|await|become|cast|catch|class|co_await|co_return|co_yield|coherent|column_major|common|compile|compile_fragment|concept|const_cast|consteval|constexpr|constinit|crate|debugger|decltype|delete|demote|demote_to_helper|do|dynamic_cast|enum|explicit|export|extends|extern|external|fallthrough|filter|final|finally|friend|from|fxgroup|get|goto|groupshared|highp|impl|implements|import|inline|instanceof|interface|layout|lowp|macro|macro_rules|match|mediump|meta|mod|module|move|mut|mutable|namespace|new|nil|noexcept|noinline|nointerpolation|non_coherent|noncoherent|noperspective|null|nullptr|of|operator|package|packoffset|partition|pass|patch|pixelfragment|precise|precision|premerge|priv|protected|pub|public|readonly|ref|regardless|register|reinterpret_cast|require|resource|restrict|self|set|shared|sizeof|smooth|snorm|static|static_assert|static_cast|std|subroutine|super|target|template|this|thread_local|throw|trait|try|type|typedef|typeid|typename|typeof|union|unless|unorm|unsafe|unsized|use|using|varying|virtual|volatile|wgsl|where|with|writeonly|yield)\\b',
      name: 'keyword.other.reserved_words.wgsl'
    },
    texture_and_sampler_types: {
      patterns: [
        {
          match:
            '\\b(texture_1d|texture_2d|texture_2d_array|texture_3d|texture_cube|texture_cube_array)\\b',
          name: 'storage.type.sampled-texture.wgsl'
        },
        {
          match:
            '\\b(texture_multisampled_2d|texture_depth_multisampled_2d)\\b',
          name: 'storage.type.sampled-texture.wgsl'
        },
        {
          match: '\\b(texture_external)\\b',
          name: 'storage.type.external-sampled-texture.wgsl'
        },
        {
          match:
            '\\b(texture_storage_1d|texture_storage_2d|texture_storage_2d_array|texture_storage_3d)\\b',
          name: 'storage.type.external-sampled-texture.wgsl'
        },
        {
          match:
            '\\b(texture_depth_2d|texture_depth_2d_array|texture_depth_cube|texture_depth_cube_array)\\b',
          name: 'storage.type.depth-texture.wgsl'
        },
        {
          match: '\\b(sampler|sampler_comparison)\\b',
          name: 'storage.type.sampler.wgsl'
        }
      ]
    },
    types: {
      patterns: [
        {include: '#plain_types'},
        {include: '#memory_views'},
        {include: '#texture_and_sampler_types'}
      ]
    },
    variables: {
      patterns: [
        {
          match: '\\b([_$[:alpha:]][_$[:alnum:]]*)\\b',
          name: 'variable.other.wgsl'
        }
      ]
    },
    vector_types: {
      patterns: [
        {match: '\\b(vec)([2-4])\\b', name: 'storage.type.vectors.wgsl'},
        {
          match: '\\b(vec)([2-4])(i|u|f|h)\\b',
          name: 'storage.type.vectors.wgsl'
        }
      ]
    }
  },
  scopeName: 'source.wgsl'
}

export default grammar
