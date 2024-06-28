// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/harrism/sublimetext-cuda-cpp>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.c++'],
  extensions: ['.cu', '.cuh'],
  names: ['cuda'],
  patterns: [
    {include: 'source.c++'},
    {
      match: '\\b__(global|device|host|noinline|forceinline)__\\b',
      name: 'keyword.function.qualifier.cuda-c++'
    },
    {
      match: '\\b__(device|constant|managed|shared|restrict)__\\b',
      name: 'storage.modifier.cuda-c++'
    },
    {
      match:
        '\\b(dim3|char[1-4]|uchar[1-4]|short[1-4]|ushort[1-4]|int[1-4]|uint[1-4]|long[1-4]|ulong[1-4]|longlong[1-4]|ulonglong[1-4]|float[1-4]|double[1-4])\\b',
      name: 'support.type.cuda-c++'
    },
    {
      match: '\\b(gridDim|blockIdx|blockDim|threadIdx|warpSize)\\b',
      name: 'variable.language.cuda-c++'
    },
    {
      match: '\\b__(threadfence_system|threadfence_block|threadfence)\\b',
      name: 'support.function.cuda-c++'
    },
    {
      match:
        '\\b__(syncthreads_count|syncthreads_and|syncthreads_or|syncthreads)\\b',
      name: 'support.function.cuda-c++'
    },
    {
      match:
        '\\b(texCubemapLayered|tex1Dlayered|tex2Dlayered|tex2Dgather|tex1Dfetch|texCubemap|tex1D|tex2D|tex3D)\\b',
      name: 'support.function.cuda-c++'
    },
    {
      match:
        '\\b(surfCubemapLayeredwrite|surfCubemapLayeredread|surf1DLayeredwrite|surf2DLayeredwrite|surf1DLayeredread|surf2DLayeredread|surfCubemapwrite|surfCubemapread|surf1Dwrite|surf2Dwrite|surf3Dwrite|surf1Dread|surf2Dread|surf3Dread)\\b',
      name: 'support.function.cuda-c++'
    },
    {match: '\\b__ldg\\b', name: 'support.function.cuda-c++'},
    {match: '\\b(clock|clock64)\\b', name: 'support.function.cuda-c++'},
    {
      match:
        '\\b(atomicExch|atomicAdd|atomicSub|atomicMin|atomicMax|atomicInc|atomicDec|atomicCAS|atomicAnd|atomicXor|atomicOr)\\b',
      name: 'support.function.cuda-c++'
    },
    {match: '\\b__(ballot|all|any)\\b', name: 'support.function.cuda-c++'},
    {
      match: '\\b__(shfl_down|shfl_xor|shfl_up|shfl)\\b',
      name: 'support.function.cuda-c++'
    },
    {match: '\\b__(prof_trigger)\\b', name: 'support.function.cuda-c++'},
    {match: '\\bassert\\b', name: 'support.function.cuda-c++'},
    {match: '\\bprintf\\b', name: 'support.function.cuda-c++'},
    {
      match: '\\b(malloc|free|memcpy|memset)\\b',
      name: 'support.function.cuda-c++'
    },
    {
      begin: '(<<<)',
      end: '(>>>)',
      name: 'keyword.operator.cuda-c++',
      patterns: [{include: '$base'}]
    },
    {
      match: '\\b__launch_bounds__\\b',
      name: 'support.function.qualifier.cuda-c++'
    },
    {
      match:
        '\\b__(fdividef|sincosf|log10f|exp10f|log2f|logf|expf|powf|sinf|cosf|tanf)\\b',
      name: 'support.function.cuda-c++'
    },
    {
      match:
        '\\b__((fsqrt|frcp|fadd|fsub|fmul|fmaf|fdiv)_(rn|rz|ru|rd)|frsqrt_rn)\\b',
      name: 'support.function.cuda-c++'
    },
    {
      match: '\\b__(dsqrt|dadd|dsub|dmul|ddiv|drcp|fma)_(rn|rz|ru|rd)\\b',
      name: 'support.function.cuda-c++'
    }
  ],
  scopeName: 'source.cuda-c++'
}

export default grammar
