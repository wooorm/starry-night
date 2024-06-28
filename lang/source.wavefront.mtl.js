// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-wavefront>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.mtl'],
  names: ['wavefront-material'],
  patterns: [{include: '#main'}],
  repository: {
    colour: {
      patterns: [
        {include: '#ka'},
        {include: '#kd'},
        {include: '#ks'},
        {include: '#ke'},
        {include: '#tf'},
        {include: '#illum'},
        {include: '#d'},
        {include: '#tr'},
        {include: '#ns'},
        {include: '#sharpness'},
        {include: '#ni'}
      ]
    },
    comment: {
      begin: '#',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.wavefront.mtl'}
      },
      end: '$',
      name: 'comment.line.number-sign.wavefront.mtl'
    },
    d: {
      captures: {
        1: {name: 'keyword.function.$1.wavefront.mtl'},
        2: {name: 'storage.modifier.halo.wavefront.mtl'},
        3: {name: 'punctuation.definition.dash.wavefront.mtl'},
        4: {
          name: 'entity.value.factor.wavefront.mtl',
          patterns: [{include: '#number'}]
        }
      },
      match: '^\\s*(d)(?:\\s+((-)halo))?\\s+([-\\d.]+)',
      name: 'meta.dissolve.wavefront.mtl'
    },
    illum: {
      captures: {
        1: {name: 'keyword.function.$1.wavefront.mtl'},
        2: {name: 'constant.numeric.integer.wavefront.mtl'}
      },
      match: '^\\s*(illum)\\s+(\\d+)',
      name: 'meta.illumination-model.wavefront.mtl'
    },
    ka: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {name: 'storage.modifier.$2.wavefront.mtl'},
            3: {name: 'string.filename.wavefront.mtl'},
            4: {
              name: 'entity.value.factor.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match:
            '^\\s*(Ka)\\s+(spectral)\\s+(?!#)(\\S+)(?<!#)(?:\\s+([-\\d.]+))?',
          name: 'meta.ambient-reflectivity.spectral-curve.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {name: 'storage.modifier.$2.wavefront.mtl'},
            3: {
              name: 'entity.value.red.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.value.green.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            5: {
              name: 'entity.value.blue.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match:
            '^\\s*(Ka)\\s+(xyz)\\s+([-\\d.]+)(?:\\s+([-\\d.]+)\\s+([-\\d.]+))?',
          name: 'meta.ambient-reflectivity.ciexyz.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {
              name: 'entity.value.red.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            3: {
              name: 'entity.value.green.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.value.blue.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match: '^\\s*(Ka)\\s+([-\\d.]+)(?:\\s+([-\\d.]+)\\s+([-\\d.]+))?',
          name: 'meta.ambient-reflectivity.rgb.wavefront.mtl'
        }
      ]
    },
    kd: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {name: 'storage.modifier.$2.wavefront.mtl'},
            3: {name: 'string.filename.wavefront.mtl'},
            4: {
              name: 'entity.value.factor.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match:
            '^\\s*(Kd)\\s+(spectral)\\s+(?!#)(\\S+)(?<!#)(?:\\s+([-\\d.]+))?',
          name: 'meta.diffuse-reflectivity.spectral-curve.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {name: 'storage.modifier.$2.wavefront.mtl'},
            3: {
              name: 'entity.value.red.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.value.green.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            5: {
              name: 'entity.value.blue.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match:
            '^\\s*(Kd)\\s+(xyz)\\s+([-\\d.]+)(?:\\s+([-\\d.]+)\\s+([-\\d.]+))?',
          name: 'meta.diffuse-reflectivity.ciexyz.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {
              name: 'entity.value.red.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            3: {
              name: 'entity.value.green.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.value.blue.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match: '^\\s*(Kd)\\s+([-\\d.]+)(?:\\s+([-\\d.]+)\\s+([-\\d.]+))?',
          name: 'meta.diffuse-reflectivity.rgb.wavefront.mtl'
        }
      ]
    },
    ke: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {name: 'storage.modifier.$2.wavefront.mtl'},
            3: {name: 'string.filename.wavefront.mtl'},
            4: {
              name: 'entity.value.factor.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match:
            '^\\s*(Ke)\\s+(spectral)\\s+(?!#)(\\S+)(?<!#)(?:\\s+([-\\d.]+))?',
          name: 'meta.emissive-colour.spectral-curve.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {name: 'storage.modifier.$2.wavefront.mtl'},
            3: {
              name: 'entity.value.red.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.value.green.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            5: {
              name: 'entity.value.blue.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match:
            '^\\s*(Ke)\\s+(xyz)\\s+([-\\d.]+)(?:\\s+([-\\d.]+)\\s+([-\\d.]+))?',
          name: 'meta.emissive-colour.ciexyz.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {
              name: 'entity.value.red.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            3: {
              name: 'entity.value.green.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.value.blue.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match: '^\\s*(Ke)\\s+([-\\d.]+)(?:\\s+([-\\d.]+)\\s+([-\\d.]+))?',
          name: 'meta.emissive-colour.rgb.wavefront.mtl'
        }
      ]
    },
    ks: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {name: 'storage.modifier.$2.wavefront.mtl'},
            3: {name: 'string.filename.wavefront.mtl'},
            4: {
              name: 'entity.value.factor.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match:
            '^\\s*(Ks)\\s+(spectral)\\s+(?!#)(\\S+)(?<!#)(?:\\s+([-\\d.]+))?',
          name: 'meta.specular-reflectivity.spectral-curve.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {name: 'storage.modifier.$2.wavefront.mtl'},
            3: {
              name: 'entity.value.red.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.value.green.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            5: {
              name: 'entity.value.blue.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match:
            '^\\s*(Ks)\\s+(xyz)\\s+([-\\d.]+)(?:\\s+([-\\d.]+)\\s+([-\\d.]+))?',
          name: 'meta.specular-reflectivity.ciexyz.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {
              name: 'entity.value.red.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            3: {
              name: 'entity.value.green.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.value.blue.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match: '^\\s*(Ks)\\s+([-\\d.]+)(?:\\s+([-\\d.]+)\\s+([-\\d.]+))?',
          name: 'meta.diffuse-reflectivity.rgb.wavefront.mtl'
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#newmtl'},
        {include: '#colour'},
        {include: '#texture'},
        {include: '#reflection'},
        {include: '#number'}
      ]
    },
    newmtl: {
      captures: {
        1: {name: 'keyword.function.$1.wavefront.mtl'},
        2: {name: 'variable.parameter.material-name.wavefront.mtl'}
      },
      match: '^\\s*(newmtl)(?=\\s|$)(?:\\s+(\\w+))?',
      name: 'meta.constructor.wavefront.mtl'
    },
    ni: {
      captures: {
        1: {name: 'keyword.function.$1.wavefront.mtl'},
        2: {
          name: 'entity.value.wavefront.mtl',
          patterns: [{include: '#number'}]
        }
      },
      match: '^\\s*(Ni)\\s+([-\\d.]+)',
      name: 'meta.optical-density.ior.wavefront.mtl'
    },
    ns: {
      captures: {
        1: {name: 'keyword.function.$1.wavefront.mtl'},
        2: {
          name: 'entity.value.exponent.wavefront.mtl',
          patterns: [{include: '#number'}]
        }
      },
      match: '^\\s*(Ns)\\s+([-\\d.]+)',
      name: 'meta.specular-exponent.wavefront.mtl'
    },
    number: {
      patterns: [
        {
          match: '(?<=[\\s,]|^)-?\\d+(?![-\\d.])',
          name: 'constant.numeric.integer.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'leading.decimal'},
            2: {name: 'decimal.separator'},
            3: {name: 'trailing.decimal'}
          },
          match: '(?<=[\\s,]|^)-?(\\d+)(?:(\\.)(\\d+))?\\b',
          name: 'constant.numeric.float.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'decimal.separator'},
            2: {name: 'trailing.decimal'}
          },
          match: '(?<=[\\s,]|^)-?(\\.)(\\d+)\\b',
          name: 'constant.numeric.float.no-leading-digits.wavefront.mtl'
        }
      ]
    },
    reflection: {
      begin:
        '^\\s*(refl)\\s+((-)type)\\s+(sphere|cube_(?:top|bottom|front|back|left|right))(?=\\s|$|#)',
      beginCaptures: {
        1: {name: 'keyword.function.$1.wavefront.mtl'},
        2: {name: 'keyword.option.type.wavefront.mtl'},
        3: {name: 'punctuation.definition.dash.wavefront.mtl'},
        4: {name: 'constant.language.mapping-type.$4.wavefront.mtl'}
      },
      contentName: 'meta.options.wavefront.mtl',
      end: '(?=$|#)',
      name: 'meta.reflection-map.type-$4.wavefront.mtl',
      patterns: [{include: '#texture-options'}]
    },
    sharpness: {
      captures: {
        1: {name: 'keyword.function.$1.wavefront.mtl'},
        2: {
          name: 'entity.value.wavefront.mtl',
          patterns: [{include: '#number'}]
        }
      },
      match: '^\\s*(sharpness)\\s+([-\\d.]+)',
      name: 'meta.sharpness.wavefront.mtl'
    },
    texture: {
      patterns: [
        {
          begin: '^\\s*(map_Ka)(?=\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.mtl'}},
          contentName: 'meta.options.wavefront.mtl',
          end: '(?=$|#)',
          name: 'meta.texture-map.ambient-reflectivity.wavefront.mtl',
          patterns: [{include: '#texture-options'}]
        },
        {
          begin: '^\\s*(map_Kd)(?=\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.mtl'}},
          contentName: 'meta.options.wavefront.mtl',
          end: '(?=$|#)',
          name: 'meta.texture-map.diffuse-reflectivity.wavefront.mtl',
          patterns: [{include: '#texture-options'}]
        },
        {
          begin: '^\\s*(map_Ks)(?=\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.mtl'}},
          contentName: 'meta.options.wavefront.mtl',
          end: '(?=$|#)',
          name: 'meta.texture-map.specular-reflectivity.wavefront.mtl',
          patterns: [{include: '#texture-options'}]
        },
        {
          begin: '^\\s*(map_Ke)(?=\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.mtl'}},
          contentName: 'meta.options.wavefront.mtl',
          end: '(?=$|#)',
          name: 'meta.texture-map.emissive-colour.wavefront.mtl',
          patterns: [{include: '#texture-options'}]
        },
        {
          begin: '^\\s*(map_Ns)(?=\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.mtl'}},
          contentName: 'meta.options.wavefront.mtl',
          end: '(?=$|#)',
          name: 'meta.texture-map.specular-exponent.wavefront.mtl',
          patterns: [{include: '#texture-options'}]
        },
        {
          begin: '^\\s*(map_d)(?=\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.mtl'}},
          contentName: 'meta.options.wavefront.mtl',
          end: '(?=$|#)',
          name: 'meta.texture-map.dissolve.wavefront.mtl',
          patterns: [{include: '#texture-options'}]
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {name: 'constant.language.boolean.$2.wavefront.mtl'}
          },
          match: '^\\s*(map_aat)(?:\\s+(on|off)(?=\\s|$|#))?',
          name: 'meta.texture-map.antialiasing.wavefront.mtl'
        },
        {
          begin: '^\\s*(decal)(?=\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.mtl'}},
          contentName: 'meta.options.wavefront.mtl',
          end: '(?=$|#)',
          name: 'meta.texture-map.decal.wavefront.mtl',
          patterns: [{include: '#texture-options'}]
        },
        {
          begin: '^\\s*(disp)(?=\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.mtl'}},
          contentName: 'meta.options.wavefront.mtl',
          end: '(?=$|#)',
          name: 'meta.texture-map.displacement.wavefront.mtl',
          patterns: [{include: '#texture-options'}]
        },
        {
          begin: '^\\s*(bump)(?=\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.mtl'}},
          contentName: 'meta.options.wavefront.mtl',
          end: '(?=$|#)',
          name: 'meta.texture-map.bump.wavefront.mtl',
          patterns: [{include: '#texture-options'}]
        },
        {
          begin: '^\\s*(map_([-\\w]+))(?=\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.mtl'}},
          contentName: 'meta.options.wavefront.mtl',
          end: '(?=$|#)',
          name: 'meta.texture-map.other.$2.wavefront.mtl',
          patterns: [{include: '#texture-options'}]
        }
      ]
    },
    'texture-options': {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.option.blendu.wavefront.mtl'},
            2: {name: 'punctuation.definition.dash.wavefront.mtl'},
            3: {name: 'constant.language.boolean.$3.wavefront.mtl'}
          },
          match: '(?<=\\s|^)((-)blendu)\\s+(on|off)(?=\\s|$|#)',
          name: 'meta.texture-option.horizontal-blending.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.option.blendv.wavefront.mtl'},
            2: {name: 'punctuation.definition.dash.wavefront.mtl'},
            3: {name: 'constant.language.boolean.$3.wavefront.mtl'}
          },
          match: '(?<=\\s|^)((-)blendv)\\s+(on|off)(?=\\s|$|#)',
          name: 'meta.texture-option.vertical-blending.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.option.bm.wavefront.mtl'},
            2: {name: 'punctuation.definition.dash.wavefront.mtl'},
            3: {
              name: 'entity.value.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match: '(?<=\\s|^)((-)bm)\\s+([-\\d.]+)',
          name: 'meta.texture-option.bump-multiplier.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.option.boost.wavefront.mtl'},
            2: {name: 'punctuation.definition.dash.wavefront.mtl'},
            3: {
              name: 'entity.value.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match: '(?<=\\s|^)((-)boost)\\s+([-\\d.]+)',
          name: 'meta.texture-option.boost.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.option.cc.wavefront.mtl'},
            2: {name: 'punctuation.definition.dash.wavefront.mtl'},
            3: {name: 'constant.language.boolean.$3.wavefront.mtl'}
          },
          match: '(?<=\\s|^)((-)cc)\\s+(on|off)(?=\\s|$|#)',
          name: 'meta.texture-option.colour-correction.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.option.clamp.wavefront.mtl'},
            2: {name: 'punctuation.definition.dash.wavefront.mtl'},
            3: {name: 'constant.language.boolean.$3.wavefront.mtl'}
          },
          match: '(?<=\\s|^)((-)clamp)\\s+(on|off)(?=\\s|$|#)',
          name: 'meta.texture-option.clamping.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.option.imfchan.wavefront.mtl'},
            2: {name: 'punctuation.definition.dash.wavefront.mtl'},
            3: {name: 'constant.language.boolean.$3.wavefront.mtl'}
          },
          match: '(?<=\\s|^)((-)imfchan)(?:\\s+([rgbmlz])(?=\\s|$|#))?',
          name: 'meta.texture-option.channel.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.option.mm.wavefront.mtl'},
            2: {name: 'punctuation.definition.dash.wavefront.mtl'},
            3: {
              name: 'entity.value.base.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.value.gain.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match: '(?<=\\s|^)((-)mm)\\s+([-\\d.]+)(?:\\s+([-\\d.]+))?',
          name: 'meta.texture-option.modify-range.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.option.o.wavefront.mtl'},
            2: {name: 'punctuation.definition.dash.wavefront.mtl'},
            3: {
              name: 'entity.value.u-offset.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.value.v-offset.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            5: {
              name: 'entity.value.w-offset.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match:
            '(?<=\\s|^)((-)o)\\s+([-\\d.]+)(?:\\s+([-\\d.]+))?(?:\\s+([-\\d.]+))?',
          name: 'meta.texture-option.offset.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.option.s.wavefront.mtl'},
            2: {name: 'punctuation.definition.dash.wavefront.mtl'},
            3: {
              name: 'entity.value.u-scale.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.value.v-scale.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            5: {
              name: 'entity.value.w-scale.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match:
            '(?<=\\s|^)((-)s)\\s+([-\\d.]+)(?:\\s+([-\\d.]+))?(?:\\s+([-\\d.]+))?',
          name: 'meta.texture-option.scale.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.option.t.wavefront.mtl'},
            2: {name: 'punctuation.definition.dash.wavefront.mtl'},
            3: {
              name: 'entity.value.u-value.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.value.v-value.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            5: {
              name: 'entity.value.w-value.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match:
            '(?<=\\s|^)((-)t)\\s+([-\\d.]+)(?:\\s+([-\\d.]+))?(?:\\s+([-\\d.]+))?',
          name: 'meta.texture-option.turbulence.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.option.texres.wavefront.mtl'},
            2: {name: 'punctuation.definition.dash.wavefront.mtl'},
            3: {
              name: 'entity.value.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match: '(?<=\\s|^)((-)texres)\\s+([-\\d.]+)',
          name: 'meta.texture-option.resolution.wavefront.mtl'
        },
        {match: '(?!#)\\S+(?<!#)', name: 'string.filename.wavefront.mtl'}
      ]
    },
    tf: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {name: 'storage.modifier.$2.wavefront.mtl'},
            3: {name: 'string.filename.wavefront.mtl'},
            4: {
              name: 'entity.value.factor.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match:
            '^\\s*(Tf)\\s+(spectral)\\s+(?!#)(\\S+)(?<!#)(?:\\s+([-\\d.]+))?',
          name: 'meta.transmission-filter.spectral-curve.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {name: 'storage.modifier.$2.wavefront.mtl'},
            3: {
              name: 'entity.value.red.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.value.green.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            5: {
              name: 'entity.value.blue.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match:
            '^\\s*(Tf)\\s+(xyz)\\s+([-\\d.]+)(?:\\s+([-\\d.]+)\\s+([-\\d.]+))?',
          name: 'meta.transmission-filter.ciexyz.wavefront.mtl'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.mtl'},
            2: {
              name: 'entity.value.red.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            3: {
              name: 'entity.value.green.wavefront.mtl',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.value.blue.wavefront.mtl',
              patterns: [{include: '#number'}]
            }
          },
          match: '^\\s*(Tf)\\s+([-\\d.]+)(?:\\s+([-\\d.]+)\\s+([-\\d.]+))?',
          name: 'meta.transmission-filter.rgb.wavefront.mtl'
        }
      ]
    },
    tr: {
      captures: {
        1: {name: 'keyword.function.$1.wavefront.mtl'},
        2: {
          name: 'entity.value.factor.wavefront.mtl',
          patterns: [{include: '#number'}]
        }
      },
      match: '^\\s*(Tr)\\s+([-\\d.]+)',
      name: 'meta.transparency.wavefront.mtl'
    }
  },
  scopeName: 'source.wavefront.mtl'
}

export default grammar
