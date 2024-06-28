// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['etc'],
  extensions: ['.stl'],
  names: ['stl', 'ascii-stl', 'stla'],
  patterns: [{include: '#main'}],
  repository: {
    facet: {
      begin: '(?:^|\\G|(?<=\\s))[ \\t]*(facet)(?:$|[ \\t]+)',
      beginCaptures: {1: {name: 'keyword.control.begin.facet.stl'}},
      end: '(?:^|\\G|(?<=\\s))[ \\t]*(endfacet)(?=$|\\s)',
      endCaptures: {1: {name: 'keyword.control.end.facet.stl'}},
      name: 'meta.facet.stl',
      patterns: [{include: '#normal'}, {include: '#loop'}, {include: '#vertex'}]
    },
    loop: {
      begin: '(?:^|\\G|(?<=\\s))[ \\t]*(outer[ \\t]+loop)(?=$|\\s)',
      beginCaptures: {1: {name: 'keyword.control.begin.loop.stl'}},
      end: '(?:^|\\G|(?<=\\s))[ \\t]*(endloop)(?=$|\\s)',
      endCaptures: {1: {name: 'keyword.control.end.loop.stl'}},
      name: 'meta.loop.stl',
      patterns: [{include: '#vertex'}]
    },
    main: {
      patterns: [
        {include: '#solid'},
        {include: '#facet'},
        {include: '#loop'},
        {include: '#vertex'}
      ]
    },
    normal: {
      begin: '(?:^|\\G|(?<=\\s))normal(?=$|\\s)',
      beginCaptures: {0: {name: 'storage.type.normal.stl'}},
      end: '(?=[ \\t]*$)',
      name: 'meta.normal.stl',
      patterns: [{include: 'etc#num'}]
    },
    solid: {
      begin:
        '(?:^﻿?|\\G|(?<=\\s))[ \\t]*(solid)(?:[ \\t]+(\\S+)(?:[ \\t]+(\\S.*))?)?[ \\t]*$',
      beginCaptures: {
        0: {name: 'meta.definition.header.stl'},
        1: {name: 'keyword.control.start.solid.stl'},
        2: {name: 'entity.name.solid.stl'},
        3: {name: 'comment.line.ignored.stl'}
      },
      end: '(?:^﻿?|\\G|(?<=\\s))[ \\t]*(endsolid)(?:[ \\t]+(\\2)(?=$|\\s))?(?:[ \\t]+(\\S.*))?[ \\t]*$',
      endCaptures: {
        0: {name: 'meta.definition.footer.stl'},
        1: {name: 'keyword.control.end.solid.stl'},
        2: {name: 'entity.name.solid.stl'},
        3: {name: 'comment.line.ignored.stl'}
      },
      name: 'meta.solid.stl',
      patterns: [{include: '#facet'}]
    },
    vertex: {
      begin: '(?:^|\\G|(?<=\\s))[ \\t]*(vertex)(?=$|\\s)',
      beginCaptures: {1: {name: 'storage.type.vertex.stl'}},
      end: '$',
      name: 'meta.vertex.stl',
      patterns: [{include: 'etc#num'}]
    }
  },
  scopeName: 'source.stl'
}

export default grammar
