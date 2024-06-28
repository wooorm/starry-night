// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/euler0/sublime-glsl>
// and licensed `unlicense`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [
    '.glsl',
    '.fp',
    '.frag',
    '.frg',
    '.fsh',
    '.fshader',
    '.geo',
    '.geom',
    '.glslf',
    '.glslv',
    '.gs',
    '.gshader',
    '.rchit',
    '.rmiss',
    '.shader',
    '.tesc',
    '.tese',
    '.vert',
    '.vrx',
    '.vs',
    '.vsh',
    '.vshader'
  ],
  names: ['glsl'],
  patterns: [
    {include: '#literal'},
    {include: '#operator'},
    {
      begin: '/\\*',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.block.begin.glsl'}
      },
      end: '\\*/',
      endCaptures: {0: {name: 'punctuation.definition.comment.block.end.glsl'}},
      name: 'comment.block.glsl'
    },
    {
      begin: '//',
      beginCaptures: {0: {name: 'punctuation.definition.comment.glsl'}},
      end: '\\n',
      name: 'comment.line.double-slash.glsl'
    },
    {
      match:
        '^\\s*#\\s*(define|undef|if|ifdef|ifndef|else|elif|endif|error|pragma|extension|version|line)\\b',
      name: 'keyword.directive.preprocessor.glsl'
    },
    {
      match:
        '\\b(__LINE__|__FILE__|__VERSION__|GL_core_profile|GL_es_profile|GL_compatibility_profile)\\b',
      name: 'constant.macro.predefined.glsl'
    },
    {
      match: '\\b(precision|highp|mediump|lowp)',
      name: 'storage.modifier.precision.glsl'
    },
    {
      match:
        '\\b(break|case|continue|default|discard|do|else|for|if|return|switch|while)\\b',
      name: 'keyword.control.glsl'
    },
    {
      match:
        '\\b(void|bool|int|uint|float|double|vec[2|3|4]|dvec[2|3|4]|bvec[2|3|4]|ivec[2|3|4]|uvec[2|3|4]|mat[2|3|4]|mat2x2|mat2x3|mat2x4|mat3x2|mat3x3|mat3x4|mat4x2|mat4x3|mat4x4|dmat2|dmat3|dmat4|dmat2x2|dmat2x3|dmat2x4|dmat3x2|dmat3x3|dmat3x4|dmat4x2|dmat4x3|dmat4x4|sampler[1|2|3]D|image[1|2|3]D|samplerCube|imageCube|sampler2DRect|image2DRect|sampler[1|2]DArray|image[1|2]DArray|samplerBuffer|imageBuffer|sampler2DMS|image2DMS|sampler2DMSArray|image2DMSArray|samplerCubeArray|imageCubeArray|sampler[1|2]DShadow|sampler2DRectShadow|sampler[1|2]DArrayShadow|samplerCubeShadow|samplerCubeArrayShadow|isampler[1|2|3]D|iimage[1|2|3]D|isamplerCube|iimageCube|isampler2DRect|iimage2DRect|isampler[1|2]DArray|iimage[1|2]DArray|isamplerBuffer|iimageBuffer|isampler2DMS|iimage2DMS|isampler2DMSArray|iimage2DMSArray|isamplerCubeArray|iimageCubeArray|atomic_uint|usampler[1|2|3]D|uimage[1|2|3]D|usamplerCube|uimageCube|usampler2DRect|uimage2DRect|usampler[1|2]DArray|uimage[1|2]DArray|usamplerBuffer|uimageBuffer|usampler2DMS|uimage2DMS|usampler2DMSArray|uimage2DMSArray|usamplerCubeArray|uimageCubeArray|struct)\\b',
      name: 'storage.type.glsl'
    },
    {
      match:
        '\\b(layout|attribute|centroid|sampler|patch|const|flat|in|inout|invariant|noperspective|out|smooth|uniform|varying|buffer|shared|coherent|readonly|writeonly|volatile|restrict)\\b',
      name: 'storage.modifier.glsl'
    },
    {
      match:
        '\\b(gl_BackColor|gl_BackLightModelProduct|gl_BackLightProduct|gl_BackMaterial|gl_BackSecondaryColor|gl_ClipDistance|gl_ClipPlane|gl_ClipVertex|gl_Color|gl_DepthRange|gl_DepthRangeParameters|gl_EyePlaneQ|gl_EyePlaneR|gl_EyePlaneS|gl_EyePlaneT|gl_Fog|gl_FogCoord|gl_FogFragCoord|gl_FogParameters|gl_FragColor|gl_FragCoord|gl_FragData|gl_FragDepth|gl_FrontColor|gl_FrontFacing|gl_FrontLightModelProduct|gl_FrontLightProduct|gl_FrontMaterial|gl_FrontSecondaryColor|gl_InstanceID|gl_Layer|gl_LightModel|gl_LightModelParameters|gl_LightModelProducts|gl_LightProducts|gl_LightSource|gl_LightSourceParameters|gl_MaterialParameters|gl_ModelViewMatrix|gl_ModelViewMatrixInverse|gl_ModelViewMatrixInverseTranspose|gl_ModelViewMatrixTranspose|gl_ModelViewProjectionMatrix|gl_ModelViewProjectionMatrixInverse|gl_ModelViewProjectionMatrixInverseTranspose|gl_ModelViewProjectionMatrixTranspose|gl_MultiTexCoord[0-7]|gl_Normal|gl_NormalMatrix|gl_NormalScale|gl_ObjectPlaneQ|gl_ObjectPlaneR|gl_ObjectPlaneS|gl_ObjectPlaneT|gl_Point|gl_PointCoord|gl_PointParameters|gl_PointSize|gl_Position|gl_PrimitiveIDIn|gl_ProjectionMatrix|gl_ProjectionMatrixInverse|gl_ProjectionMatrixInverseTranspose|gl_ProjectionMatrixTranspose|gl_SecondaryColor|gl_TexCoord|gl_TextureEnvColor|gl_TextureMatrix|gl_TextureMatrixInverse|gl_TextureMatrixInverseTranspose|gl_TextureMatrixTranspose|gl_Vertex|gl_VertexID)\\b',
      name: 'support.variable.glsl'
    },
    {
      match:
        '\\b(gl_MaxClipPlanes|gl_MaxCombinedTextureImageUnits|gl_MaxDrawBuffers|gl_MaxFragmentUniformComponents|gl_MaxLights|gl_MaxTextureCoords|gl_MaxTextureImageUnits|gl_MaxTextureUnits|gl_MaxVaryingFloats|gl_MaxVertexAttribs|gl_MaxVertexTextureImageUnits|gl_MaxVertexUniformComponents)\\b',
      name: 'support.constant.glsl'
    },
    {
      match:
        '\\b(abs|acos|all|any|asin|atan|ceil|clamp|cos|cross|degrees|dFdx|dFdy|distance|dot|equal|exp|exp2|faceforward|floor|fract|ftransform|fwidth|greaterThan|greaterThanEqual|inversesqrt|length|lessThan|lessThanEqual|log|log2|matrixCompMult|max|min|mix|mod|noise[1-4]|normalize|not|notEqual|outerProduct|pow|radians|reflect|refract|shadow1D|shadow1DLod|shadow1DProj|shadow1DProjLod|shadow2D|shadow2DLod|shadow2DProj|shadow2DProjLod|sign|sin|smoothstep|sqrt|step|tan|texture1D|texture1DLod|texture1DProj|texture1DProjLod|texture2D|texture2DLod|texture2DProj|texture2DProjLod|texture3D|texture3DLod|texture3DProj|texture3DProjLod|textureCube|textureCubeLod|transpose)\\b',
      name: 'support.function.glsl'
    }
  ],
  repository: {
    'arithmetic-operator': {
      match:
        '(?<![/=\\-+!*%<>&|\\^~.])(\\+|\\-|\\*|\\/|\\%)(?![/=\\-+!*%<>&|^~.])',
      name: 'keyword.operator.arithmetic.glsl'
    },
    'assignment-operator': {
      match:
        '(?<![/=\\-+!*%<>&|\\^~.])(\\+|\\-|\\*|\\%|\\/|<<|>>|&|\\^|\\|)?=(?![/=\\-+!*%<>&|^~.])',
      name: 'keyword.operator.assignment.glsl'
    },
    'bitwise-operator': {
      match:
        '(?<![/=\\-+!*%<>&|\\^~.])(~|&|\\||\\^|<<|>>)(?![/=\\-+!*%<>&|^~.])',
      name: 'keyword.operator.bitwise.glsl'
    },
    'comparative-operator': {
      match: '(?<![/=\\-+!*%<>&|\\^~.])((=|!)=|(<|>)=?)(?![/=\\-+!*%<>&|^~.])',
      name: 'keyword.operator.comparative.glsl'
    },
    'increment-decrement-operator': {
      match: '(?<![/=\\-+!*%<>&|\\^~.])(\\+\\+|\\-\\-)(?![/=\\-+!*%<>&|^~.])',
      name: 'keyword.operator.increment-or-decrement.glsl'
    },
    literal: {patterns: [{include: '#numeric-literal'}]},
    'logical-operator': {
      match:
        '(?<![/=\\-+!*%<>&|\\^~.])(!|&&|\\|\\||\\^\\^)(?![/=\\-+!*%<>&|^~.])',
      name: 'keyword.operator.arithmetic.glsl'
    },
    'numeric-literal': {
      match:
        '\\b([0-9][0-9_]*)(\\.([0-9][0-9_]*))?([eE][+/-]?([0-9][0-9_]*))?\\b',
      name: 'constant.numeric.glsl'
    },
    operator: {
      patterns: [
        {include: '#arithmetic-operator'},
        {include: '#increment-decrement-operator'},
        {include: '#bitwise-operator'},
        {include: '#comparative-operator'},
        {include: '#assignment-operator'},
        {include: '#logical-operator'},
        {include: '#ternary-operator'}
      ]
    },
    'ternary-operator': {
      match: '(\\?|:)',
      name: 'keyword.operator.ternary.glsl'
    }
  },
  scopeName: 'source.glsl'
}

export default grammar
