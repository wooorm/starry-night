// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pov'],
  names: ['pov-ray-sdl', 'pov-ray', 'povray'],
  patterns: [
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.povray',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.povray'}]
    },
    {begin: '\\/\\*', end: '\\*\\/', name: 'comment.block.povray'},
    {match: '\\/\\/.*', name: 'comment.line.povray'},
    {
      match: '\\b([0-9]+(\\.[0-9]*)?|\\.[0-9]+)([eE][+-]?[0-9]+)?\\b',
      name: 'constant.numeric.povray'
    },
    {
      match: '[\\+\\-\\*\\/\\<\\=\\>\\{\\}\\(\\)\\[\\]\\.\\,\\;\\:\\?\\!]',
      name: 'keyword.operator.povray'
    },
    {
      match: '\\b(on|off|yes|no|true|false|pi)\\b',
      name: 'constant.language.povray'
    },
    {
      match:
        '\\b(box|cone|cylinder|difference|height_field|intersection|isosurface|julia_fractal|merge|mesh2?|object|plane|sphere|superellipsoid|text|torus|union)\\b',
      name: 'keyword.shape.povray'
    },
    {
      match:
        '\\b(camera|clipped_by|colou?r_map|contained_by|default|density|face_indices|finish|fog|global_settings|interior|light_source|material|media|normal(_vectors)?|pigment(_map)?|photons|radiosity|reflection|scattering|texture|uv_vectors|vertex_vectors|warp)\\b',
      name: 'keyword.block.povray'
    },
    {
      match:
        '\\b(adaptive|adc_bailout|agate|ambient|angle|area_light|array|assumed_gamma|blue|bozo|brightness|bumps|checker|circular|collect|colou?r|conserve_energy|count|crackle|cylindrical|diffuse|direction|distance|dist_exp|error_bound|exponent|extinction|fade_color|fade_distance|fade_power|falloff|filter|fog_alt|fog_offset|fog_type|function|fresnel|gradient|granite|gr[ae]y_threshold|gr[ae]y|green|hollow|intervals|inverse|ior|jitter|lambda|location|look_at|low_error_factor|marble|max_gradient|max_iteration|max_trace_level|media_attenuation|media_interaction|metallic|method|minimum_reuse|nearest_count|noise_generator|no_shadow|octaves|omega|orient(ation)?|pass_through|planar|point_at|poly_wave|precision|pretrace_end|pretrace_start|quaternion|radius|ramp_wave|recursion_limit|repeat|rgbf?t?|red|refraction|right|roughness|samples|shadowless|sky|spacing|specular|spherical|spotlight|srgbf?t?|target|transmit|turbulence|uv_mapping|up|water_level|wrinkles|x|y|z)\\b',
      name: 'keyword.parameter.povray'
    },
    {
      match:
        '\\b(abs|concat|dimension_size|internal|max|min|mod|pow|rand|seed|sin|sqrt|vcross|vlength|vrotate|vnormalize)\\b',
      name: 'keyword.function.povray'
    },
    {match: '\\b(rotate|scale|translate)\\b', name: 'keyword.modifier.povray'},
    {
      match:
        '\\#(break|case|declare|debug|else(if)?|end|error|fopen|for|if(n?def)?|include|local|macro|range|read|switch|version|while|write)\\b',
      name: 'keyword.control.povray'
    },
    {
      match: '\\#(default)\\b',
      name: 'invalid.deprecated.keyword.control.povray'
    },
    {match: '\\#[_a-zA-Z0-9]*\\b', name: 'invalid.illegal.povray'},
    {
      match: '\\b(image_height|image_width)\\b',
      name: 'variable.language.povray'
    },
    {
      match: '\\b([_a-z][_a-z0-9]*)\\b',
      name: 'invalid.deprecated.future-keyword.povray'
    },
    {match: '\\b[_a-zA-Z][_a-zA-Z0-9]*\\b', name: 'variable.parameter.povray'}
  ],
  scopeName: 'source.pov-ray sdl'
}

export default grammar
