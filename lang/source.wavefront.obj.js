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
  extensions: ['.obj'],
  names: ['wavefront-object'],
  patterns: [{include: '#main'}],
  repository: {
    args: {
      begin: '\\G',
      end: '(?<!\\\\)$',
      name: 'meta.arguments.wavefront.obj',
      patterns: [
        {include: '#global'},
        {
          match: '\\$[1-9]+',
          name: 'variable.language.substituted.wavefront.obj'
        }
      ]
    },
    attributes: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'entity.rational-form.wavefront.obj'},
            3: {name: 'entity.value.wavefront.obj'}
          },
          match:
            '^\\s*(cstype)(?:\\s+(rat(?=\\s|$))?\\s*(?:(bmatrix|bezier|bspline|cardinal|taylor))?)?(?=\\s|$)',
          name: 'meta.free-form.attribute.type.wavefront.obj'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'constant.numeric.u-degree.wavefront.obj'},
            3: {name: 'constant.numeric.v-degree.wavefront.obj'}
          },
          match: '^\\s*(deg)(?:\\s+(\\d+)(?=\\s|$))?(?:\\s+(\\d+))?(?=\\s|$)',
          name: 'meta.free-form.attribute.polynomial-degree.wavefront.obj'
        },
        {
          begin: '^\\s*(bmat)(?:\\s+(u|v)(?=\\s|$)\\s*)?',
          beginCaptures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'entity.type.wavefront.obj'}
          },
          contentName: 'meta.matrix.wavefront.obj',
          end: '(?<!\\\\)$|(?=#)',
          name: 'meta.free-form.attribute.$2.basis-matrix.wavefront.obj',
          patterns: [{include: '#global'}]
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'constant.numeric.u-size.wavefront.obj'},
            3: {name: 'constant.numeric.v-size.wavefront.obj'}
          },
          match: '^\\s*(step)(?:\\s+(\\d+))?(?:\\s+(\\d+))?(?=\\s|$)',
          name: 'meta.free-form.attribute.step-size.wavefront.obj'
        }
      ]
    },
    'body-statements': {
      patterns: [
        {
          begin: '^\\s*(parm)\\s+(u|v)(?=\\s|$|#)',
          beginCaptures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'entity.direction.wavefront.obj'}
          },
          end: '(?<!\\\\)$',
          name: 'meta.body-statement.parameter.$2-direction.wavefront.obj',
          patterns: [{include: '#global'}]
        },
        {
          begin: '^\\s*(trim)(?:\\s+|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.obj'}},
          end: '(?<!\\\\)$',
          name: 'meta.body-statement.trimming-loop.wavefront.obj',
          patterns: [{include: '#curveref'}, {include: '#global'}]
        },
        {
          begin: '^\\s*(scrv)(?:\\s+|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.obj'}},
          end: '(?<!\\\\)$',
          name: 'meta.body-statement.special-curve.wavefront.obj',
          patterns: [{include: '#curveref'}, {include: '#global'}]
        },
        {
          begin: '^\\s*(sp)(?:\\s+|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.obj'}},
          end: '(?<!\\\\)$',
          name: 'meta.body-statement.special-point.wavefront.obj',
          patterns: [{include: '#vertref-single'}, {include: '#global'}]
        },
        {
          match: '^\\s*end(?=\\s|$|#)',
          name: 'keyword.control.body-statement.end.wavefront.obj'
        }
      ]
    },
    comment: {
      begin: '#',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.wavefront.obj'}
      },
      end: '$',
      name: 'comment.line.number-sign.wavefront.obj'
    },
    connect: {
      captures: {
        1: {name: 'keyword.function.$1.wavefront.obj'},
        2: {
          name: 'entity.value.first-surface.index.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        3: {
          name: 'entity.value.first-surface.start.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        4: {
          name: 'entity.value.first-surface.end.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        5: {
          name: 'entity.value.first-surface.curve.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        6: {
          name: 'entity.value.first-surface.index.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        7: {
          name: 'entity.value.first-surface.start.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        8: {
          name: 'entity.value.first-surface.end.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        9: {
          name: 'entity.value.first-surface.curve.wavefront.obj',
          patterns: [{include: '#number'}]
        }
      },
      match:
        '(?x)\n^\\s*\n\n(con)           # 1: keyword.function.$1.wavefront.obj\n\n\\s+(\\d+)      # 2: entity.value.first-surface.index.wavefront.obj\n\\s+([-\\d.]+)  # 3: entity.value.first-surface.start.wavefront.obj\n\\s+([-\\d.]+)  # 4: entity.value.first-surface.end.wavefront.obj\n\\s+(\\d+)      # 5: entity.value.first-surface.curve.wavefront.obj\n\n\\s+(\\d+)      # 6: entity.value.second-surface.index.wavefront.obj\n\\s+([-\\d.]+)  # 7: entity.value.second-surface.start.wavefront.obj\n\\s+([-\\d.]+)  # 8: entity.value.second-surface.end.wavefront.obj\n\\s+(\\d+)      # 9: entity.value.second-surface.curve.wavefront.obj',
      name: 'meta.free-form.connectivity.wavefront.obj'
    },
    curveref: {
      captures: {
        1: {
          name: 'constant.numeric.start-value.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        2: {
          name: 'constant.numeric.end-value.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        3: {
          name: 'constant.numeric.curve-index.wavefront.obj',
          patterns: [{include: '#number'}]
        }
      },
      match: '([-\\d.]+)\\s+([-\\d.]+)\\s+(\\d+)',
      name: 'meta.curve-reference.wavefront.obj'
    },
    display: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'constant.language.boolean.$2.wavefront.obj'}
          },
          match: '^\\s*(bevel)\\s+(on|off)(?=\\s|$|#)',
          name: 'meta.display.polygonal.attribute.bevel.wavefront.obj'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'constant.language.boolean.$2.wavefront.obj'}
          },
          match: '^\\s*(c_interp)\\s+(on|off)(?=\\s|$|#)',
          name: 'meta.display.polygonal.attribute.colour-interpolation.wavefront.obj'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'constant.language.boolean.$2.wavefront.obj'}
          },
          match: '^\\s*(d_interp)\\s+(on|off)(?=\\s|$|#)',
          name: 'meta.display.polygonal.attribute.dissolve-interpolation.wavefront.obj'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {
              name: 'entity.value.wavefront.obj',
              patterns: [{include: '#number'}]
            }
          },
          match: '^\\s*(lod)\\s+([-\\d.]+)',
          name: 'meta.display.attribute.level-of-detail.wavefront.obj'
        },
        {
          begin: '^\\s*(maplib)(?=\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.obj'}},
          end: '(?<!\\\\)$|(?=#)',
          name: 'meta.display.attribute.map-library.wavefront.obj',
          patterns: [
            {match: '(?!#)\\S+(?<!#)', name: 'string.filename.wavefront.obj'},
            {include: '#global'}
          ]
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'constant.language.boolean.off.wavefront.obj'},
            3: {name: 'variable.parameter.map-name.wavefront.obj'}
          },
          match: '^\\s*(usemap)\\s+(?:(off)|(?!#)(\\S+)(?<!#))',
          name: 'meta.display.attribute.use-map.wavefront.obj'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'variable.parameter.material-name.wavefront.obj'}
          },
          match: '^\\s*(usemtl)\\s+(?!#)(\\S+)(?<!#)',
          name: 'meta.display.attribute.use-material.wavefront.obj'
        },
        {
          begin: '^\\s*(mtllib)(?=\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.obj'}},
          end: '(?<!\\\\)$|(?=#)',
          name: 'meta.display.attribute.material-library.wavefront.obj',
          patterns: [
            {match: '(?!#)\\S+(?<!#)', name: 'string.filename.wavefront.obj'},
            {include: '#global'}
          ]
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'string.filename.wavefront.obj'}
          },
          match: '^\\s*(shadow_obj)\\s+(?!#)(\\S+)(?<!#)',
          name: 'meta.display.attribute.shadow-object.wavefront.obj'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'string.filename.wavefront.obj'}
          },
          match: '^\\s*(trace_obj)\\s+(?!#)(\\S+)(?<!#)',
          name: 'meta.display.attribute.trace-object.wavefront.obj'
        },
        {
          begin: '^\\s*(ctech)\\s+(cparm|cspace|curv)(?=\\s|$|#)',
          beginCaptures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'constant.language.$2.wavefront.obj'}
          },
          end: '(?<!\\\\)$|(?=#)',
          name: 'meta.display.free-form.attribute.curve-technique.wavefront.obj',
          patterns: [
            {
              captures: {1: {patterns: [{include: '#number'}]}},
              match: '\\G(?<=cparm)\\s+([-\\d.]+)',
              name: 'entity.value.resolution.wavefront.obj'
            },
            {
              captures: {1: {patterns: [{include: '#number'}]}},
              match: '\\G(?<=cspace)\\s+([-\\d.]+)',
              name: 'entity.value.max-length.wavefront.obj'
            },
            {
              captures: {
                1: {
                  name: 'entity.value.max-distance.wavefront.obj',
                  patterns: [{include: '#number'}]
                },
                2: {
                  name: 'entity.value.max-angle.wavefront.obj',
                  patterns: [{include: '#number'}]
                }
              },
              match: '\\G(?<=curv)\\s+([-\\d.]+)\\s+([-\\d.]+)'
            },
            {include: '#global'}
          ]
        },
        {
          begin: '^\\s*(stech)\\s+(cparma|cparmb|cspace|curv)(?=\\s|$|#)',
          beginCaptures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'constant.language.$2.wavefront.obj'}
          },
          end: '(?<!\\\\)$|(?=#)',
          name: 'meta.display.free-form.attribute.surface-technique.wavefront.obj',
          patterns: [
            {
              captures: {
                1: {
                  name: 'entity.value.u-resolution.wavefront.obj',
                  patterns: [{include: '#number'}]
                },
                2: {
                  name: 'entity.value.v-resolution.wavefront.obj',
                  patterns: [{include: '#number'}]
                }
              },
              match: '\\G(?<=cparma)\\s+([-\\d.]+)\\s+([-\\d.]+)'
            },
            {
              captures: {1: {patterns: [{include: '#number'}]}},
              match: '\\G(?<=cparmb)\\s+([-\\d.]+)',
              name: 'entity.value.uv-resolution.wavefront.obj'
            },
            {
              captures: {1: {patterns: [{include: '#number'}]}},
              match: '\\G(?<=cspace)\\s+([-\\d.]+)',
              name: 'entity.value.max-length.wavefront.obj'
            },
            {
              captures: {
                1: {
                  name: 'entity.value.max-distance.wavefront.obj',
                  patterns: [{include: '#number'}]
                },
                2: {
                  name: 'entity.value.max-angle.wavefront.obj',
                  patterns: [{include: '#number'}]
                }
              },
              match: '\\G(?<=curv)\\s+([-\\d.]+)\\s+([-\\d.]+)'
            },
            {include: '#global'}
          ]
        }
      ]
    },
    elements: {
      patterns: [
        {
          begin: '^\\s*(p)(?:\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.obj'}},
          end: '(?<!\\\\)$',
          name: 'meta.polygonal.element.point.wavefront.obj',
          patterns: [{include: '#vertref-single'}, {include: '#global'}]
        },
        {
          begin: '^\\s*(l)(?:\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.obj'}},
          end: '(?<!\\\\)$',
          name: 'meta.polygonal.element.line.wavefront.obj',
          patterns: [
            {include: '#vertref-double'},
            {include: '#vertref-single'},
            {include: '#global'}
          ]
        },
        {
          begin: '^\\s*(?:(f)|(fo))(?:\\s|$|#)',
          beginCaptures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'invalid.deprecated.wavefront.obj'}
          },
          end: '(?<!\\\\)$',
          name: 'meta.polygonal.element.face.wavefront.obj',
          patterns: [{include: '#vertref'}, {include: '#global'}]
        },
        {
          begin: '^\\s*(curv)\\s+([-\\d.]+)\\s+([-\\d.]+)',
          beginCaptures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {
              name: 'entity.value.start-value.wavefront.obj',
              patterns: [{include: '#number'}]
            },
            3: {
              name: 'entity.value.end-value.wavefront.obj',
              patterns: [{include: '#number'}]
            }
          },
          end: '(?<!\\\\)$',
          name: 'meta.free-form.element.curve.wavefront.obj',
          patterns: [{include: '#vertref-single'}, {include: '#global'}]
        },
        {
          begin: '^\\s*(curv2)(?:\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.obj'}},
          end: '(?<!\\\\)$',
          name: 'meta.free-form.element.curve-2d.wavefront.obj',
          patterns: [{include: '#vertref-single'}, {include: '#global'}]
        },
        {
          begin:
            '^\\s*(surf)\\s+([-\\d.]+)\\s+([-\\d.]+)\\s+([-\\d.]+)\\s+([-\\d.]+)',
          beginCaptures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {
              name: 'entity.value.u-start.wavefront.obj',
              patterns: [{include: '#number'}]
            },
            3: {
              name: 'entity.value.u-end.wavefront.obj',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.value.v-start.wavefront.obj',
              patterns: [{include: '#number'}]
            },
            5: {
              name: 'entity.value.v-end.wavefront.obj',
              patterns: [{include: '#number'}]
            }
          },
          end: '(?<!\\\\)$',
          name: 'meta.free-form.element.surface.wavefront.obj',
          patterns: [{include: '#vertref'}, {include: '#global'}]
        }
      ]
    },
    general: {
      patterns: [
        {
          begin: '^\\s*(call)(?:\\s+(?!#)(\\S+)?)?',
          beginCaptures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'string.filename.wavefront.obj'}
          },
          end: '$',
          name: 'meta.function-call.$1.wavefront.obj',
          patterns: [{include: '#args'}]
        },
        {
          begin: '^\\s*(csh)(?:\\s+(-)(\\w*))',
          beginCaptures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'punctuation.definition.dash.wavefront.obj'},
            3: {name: 'string.command-name.wavefront.obj'}
          },
          end: '$',
          name: 'meta.function-call.$1.ignore-errors.wavefront.obj',
          patterns: [{include: '#args'}]
        },
        {
          begin: '^\\s*(csh)(?:\\s+(\\w+))?',
          beginCaptures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'string.command-name.wavefront.obj'}
          },
          end: '$',
          name: 'meta.function-call.$1.wavefront.obj',
          patterns: [{include: '#args'}]
        }
      ]
    },
    global: {
      patterns: [
        {include: '#comment'},
        {include: '#number'},
        {include: '#line-continuation'}
      ]
    },
    grouping: {
      patterns: [
        {
          begin: '^\\s*(g)(?:\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.obj'}},
          contentName: 'meta.group-names.wavefront.obj',
          end: '(?<!\\\\)$|(?=#)',
          name: 'meta.grouping-statement.group.wavefront.obj',
          patterns: [
            {
              match: '(?!#)\\S+(?<!#)',
              name: 'variable.parameter.group-name.wavefront.obj'
            },
            {include: '#global'}
          ]
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'constant.numeric.wavefront.obj'},
            3: {name: 'constant.language.boolean.off.wavefront.obj'}
          },
          match: '^\\s*(s)\\s+(?:(\\d+)|(off))(?=\\s|$|#)',
          name: 'meta.grouping-statement.smoothing-group.wavefront.obj'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'constant.language.boolean.off.wavefront.obj'},
            3: {
              name: 'entity.group-number.wavefront.obj',
              patterns: [{include: '#number'}]
            },
            4: {
              name: 'entity.max-distance.wavefront.obj',
              patterns: [{include: '#number'}]
            }
          },
          match: '^\\s*(mg)\\s+(?:(off)(?=\\s|$|#)|(\\d+)\\s+([-\\d.]+))',
          name: 'meta.free-form.grouping-statement.merge-group.wavefront.obj'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {name: 'variable.parameter.object-name.wavefront.obj'}
          },
          match: '^\\s*(o)\\s+(?!#)(\\S+)(?<!#)',
          name: 'meta.grouping-statement.user-defined.wavefront.obj'
        }
      ]
    },
    ijk: {
      captures: {
        1: {
          name: 'entity.i.coordinate.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        2: {
          name: 'entity.j.coordinate.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        3: {
          name: 'entity.k.coordinate.wavefront.obj',
          patterns: [{include: '#number'}]
        }
      },
      match:
        '\\G\\s*(?!#)(\\S+)(?<!#)\\s+(?!#)(\\S+)(?<!#)\\s+(?!#)(\\S+)(?<!#)',
      name: 'meta.vector.ijk.wavefront.obj'
    },
    'line-continuation': {
      match: '\\\\\n',
      name: 'constant.character.escape.newline.wavefront.obj'
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#line-continuation'},
        {include: '#general'},
        {include: '#vertex'},
        {include: '#elements'},
        {include: '#attributes'},
        {include: '#freeform'},
        {include: '#body-statements'},
        {include: '#connect'},
        {include: '#grouping'},
        {include: '#display'},
        {include: '#superseded'},
        {include: '#number'}
      ]
    },
    number: {
      patterns: [
        {
          match: '(?<=[\\s,]|^)-?\\d+(?![-\\d.])',
          name: 'constant.numeric.integer.wavefront.obj'
        },
        {
          captures: {
            1: {name: 'leading.decimal'},
            2: {name: 'decimal.separator'},
            3: {name: 'trailing.decimal'}
          },
          match: '(?<=[\\s,]|^)-?(\\d+)(?:(\\.)(\\d+))?\\b',
          name: 'constant.numeric.float.wavefront.obj'
        },
        {
          captures: {
            1: {name: 'decimal.separator'},
            2: {name: 'trailing.decimal'}
          },
          match: '(?<=[\\s,]|^)-?(\\.)(\\d+)\\b',
          name: 'constant.numeric.float.no-leading-digits.wavefront.obj'
        }
      ]
    },
    superseded: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {
              name: 'meta.arguments.wavefront.obj',
              patterns: [{include: '#vertref-single'}]
            }
          },
          match: '^\\s*(bsp)(?:$|((?:\\s+\\d+(?=\\s)){0,16}))',
          name: 'invalid.deprecated.b-spline-patch.wavefront.obj'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {
              name: 'meta.arguments.wavefront.obj',
              patterns: [{include: '#vertref-single'}]
            }
          },
          match: '^\\s*(bzp)(?:$|((?:\\s+\\d+(?=\\s)){0,16}))',
          name: 'invalid.deprecated.bezier-patch.wavefront.obj'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {
              name: 'meta.arguments.wavefront.obj',
              patterns: [{include: '#vertref-single'}]
            }
          },
          match: '^\\s*(cdc)(?:$|((?:\\s+\\d+(?=\\s))*))',
          name: 'invalid.deprecated.cardinal-curve.wavefront.obj'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {
              name: 'meta.arguments.wavefront.obj',
              patterns: [{include: '#vertref-single'}]
            }
          },
          match: '^\\s*(cdp)(?:$|((?:\\s+\\d+(?=\\s)){0,16}))',
          name: 'invalid.deprecated.cardinal-patch.wavefront.obj'
        },
        {
          captures: {
            1: {name: 'keyword.function.$1.wavefront.obj'},
            2: {
              name: 'entity.value.u-segments.wavefront.obj',
              patterns: [{include: '#vertref-single'}]
            },
            3: {
              name: 'entity.value.v-segments.wavefront.obj',
              patterns: [{include: '#vertref-single'}]
            }
          },
          match: '^\\s*(res)\\s+([-\\d.]+)\\s+([-\\d.]+)',
          name: 'invalid.deprecated.display.attribute.segment-resolution.wavefront.obj'
        }
      ]
    },
    uvw: {
      captures: {
        1: {
          name: 'entity.u.coordinate.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        2: {
          name: 'entity.v.coordinate.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        3: {
          name: 'entity.w.coordinate.wavefront.obj',
          patterns: [{include: '#number'}]
        }
      },
      match:
        '\\G\\s*(?!#)(\\S+)(?<!#)\\s+(?!#)(\\S+)(?<!#)\\s+(?!#)(\\S+)(?<!#)',
      name: 'meta.vector.uvw.wavefront.obj'
    },
    vertex: {
      patterns: [
        {
          begin: '^\\s*(v)(?=\\s|$|#)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.obj'}},
          end: '(?=$|#)',
          name: 'meta.vertex.geometric.wavefront.obj',
          patterns: [{include: '#xyzw'}, {include: '#global'}]
        },
        {
          begin: '^\\s*(vp)(?=\\s|$)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.obj'}},
          end: '$',
          name: 'meta.vertex.parameter-space.wavefront.obj',
          patterns: [{include: '#uvw'}, {include: '#global'}]
        },
        {
          begin: '^\\s*(vn)(?=\\s|$)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.obj'}},
          end: '$',
          name: 'meta.vertex.normal.wavefront.obj',
          patterns: [{include: '#ijk'}, {include: '#global'}]
        },
        {
          begin: '^\\s*(vt)(?=\\s|$)',
          beginCaptures: {1: {name: 'keyword.function.$1.wavefront.obj'}},
          end: '$',
          name: 'meta.vertex.texture.wavefront.obj',
          patterns: [{include: '#uvw'}, {include: '#global'}]
        }
      ]
    },
    vertref: {
      patterns: [
        {include: '#vertref-triple'},
        {include: '#vertref-double'},
        {include: '#vertref-single'}
      ]
    },
    'vertref-double': {
      captures: {
        1: {
          name: 'meta.first.wavefront.obj',
          patterns: [{include: '#vertref'}]
        },
        2: {name: 'punctuation.separator.slash.wavefront.obj'},
        3: {
          name: 'meta.second.wavefront.obj',
          patterns: [{include: '#vertref'}]
        }
      },
      match: '(?<=\\s)(-?\\d+)(\\/)(-?\\d+)(?=\\s|$)',
      name: 'meta.vertex-reference.double.wavefront.obj'
    },
    'vertref-single': {
      patterns: [
        {
          match: '-\\d+',
          name: 'constant.numeric.vertex-reference.relative.wavefront.obj'
        },
        {
          match: '\\d+',
          name: 'constant.numeric.vertex-reference.absolute.wavefront.obj'
        }
      ]
    },
    'vertref-triple': {
      captures: {
        1: {
          name: 'meta.first.wavefront.obj',
          patterns: [{include: '#vertref'}]
        },
        2: {name: 'punctuation.separator.slash.wavefront.obj'},
        3: {
          name: 'meta.second.wavefront.obj',
          patterns: [{include: '#vertref'}]
        },
        4: {name: 'punctuation.separator.slash.wavefront.obj'},
        5: {name: 'meta.third.wavefront.obj', patterns: [{include: '#vertref'}]}
      },
      match: '(?<=\\s)(-?\\d+)(\\/)(-?\\d+)?(\\/)(-?\\d+)(?=\\s|$)',
      name: 'meta.vertex-reference.triple.wavefront.obj'
    },
    xyzw: {
      captures: {
        1: {
          name: 'entity.x.coordinate.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        2: {
          name: 'entity.y.coordinate.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        3: {
          name: 'entity.z.coordinate.wavefront.obj',
          patterns: [{include: '#number'}]
        },
        4: {
          name: 'entity.w.weight.wavefront.obj',
          patterns: [{include: '#number'}]
        }
      },
      match:
        '\\G\\s*(?!#)(\\S+)(?<!#)\\s+(?!#)(\\S+)(?<!#)\\s+(?!#)(\\S+)(?<!#)(?:\\s+(?!#)(\\S+)(?<!#))?',
      name: 'meta.vector.xyzw.wavefront.obj'
    }
  },
  scopeName: 'source.wavefront.obj'
}

export default grammar
