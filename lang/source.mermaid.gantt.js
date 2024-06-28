// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-mermaid>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.mermaid', 'source.mermaid.flowchart'],
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    'axis-format': {
      begin: '(?i)^\\s*(axisFormat)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'storage.type.date-format.mermaid'}},
      contentName: 'string.unquoted.date-format.mermaid',
      end: '(?=\\s*$)',
      name: 'meta.axis-format.statement.mermaid',
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.placeholder.mermaid'}},
          match: '(%)[%ABHILMSUWXYZabcdejmpwxy]',
          name: 'constant.other.placeholder.date-component.mermaid'
        },
        {include: 'source.mermaid#entity'}
      ]
    },
    date: {
      match: '\\d{4}-\\d{2}-\\d{2}',
      name: 'constant.numeric.date.iso8601.mermaid'
    },
    'date-format': {
      begin: '(?i)^\\s*(dateFormat)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'storage.type.date-format.mermaid'}},
      contentName: 'string.unquoted.date-format.mermaid',
      end: '(?=\\s*(?:$|%%))',
      name: 'meta.date-format.statement.mermaid',
      patterns: [
        {
          match:
            'YYYY|YY|Q|MM?|MMMM?|Do|DDDD?|DD?|X|x|HH?|hh?|A|a|mm?|ss?|S{1,3}|ZZ?',
          name: 'constant.other.placeholder.date-component.mermaid'
        },
        {include: 'source.mermaid#entity'}
      ]
    },
    day: {
      match:
        '(?i)\\b(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\\b',
      name: 'constant.language.weekday-name.mermaid'
    },
    filters: {
      begin: '(?i)^\\s*((exclude|include)s)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'storage.type.${1:/downcase}.mermaid'}},
      contentName: 'meta.${2:/downcase}d-dates.mermaid',
      end: '(?=\\s*$)',
      name: 'meta.${2:/downcase}-list.statement.mermaid',
      patterns: [
        {include: 'source.mermaid#comma'},
        {include: '#date'},
        {include: '#day'},
        {
          match: '(?i)\\b(weekends)\\b',
          name: 'constant.language.weekends.mermaid'
        }
      ]
    },
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#terminator'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: '#title'},
        {include: '#date-format'},
        {include: '#axis-format'},
        {include: '#today-marker'},
        {include: '#filters'},
        {include: '#section'},
        {include: 'source.mermaid.flowchart#click'},
        {include: '#undocumented'}
      ]
    },
    section: {
      begin: '(?i)^\\s*(section)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'storage.type.section.mermaid'}},
      end: '(?=^\\s*section(?:$|\\s))|(?=^[ \\t]*(?:`{3,}|~{3,})\\s*$)',
      name: 'meta.section.mermaid',
      patterns: [
        {
          begin: '\\G(?=\\S)',
          end: '(?=\\s*$)',
          name: 'string.unquoted.section-description.mermaid',
          patterns: [{include: 'source.mermaid#entity'}]
        },
        {include: '#task'},
        {include: '#main'}
      ]
    },
    task: {
      begin: '(?i)^\\s*((?=\\S)[^:]+)\\s(:)[ \\t]*',
      beginCaptures: {
        1: {name: 'entity.other.task-description.mermaid'},
        2: {patterns: [{include: 'source.mermaid#colon'}]}
      },
      contentName: 'meta.task-data.mermaid',
      end: '(?=\\s*$)',
      name: 'meta.task.mermaid',
      patterns: [
        {
          captures: {1: {name: 'entity.name.tag.mermaid'}},
          match:
            '(?:^|\\G|(?<=,))\\s*(active|crit|done|milestone)[ \\t]*(?=$|,)'
        },
        {
          captures: {
            1: {name: 'keyword.operator.dependancy.mermaid'},
            2: {name: 'entity.name.task.mermaid'}
          },
          match:
            '(?:^|\\G|(?<=,))\\s*(?i:(after)\\s+)?((?=[a-zA-Z])[-\\w]+)[ \\t]*(?=$|,)'
        },
        {include: '#date'},
        {
          captures: {
            1: {name: 'meta.duration.mermaid'},
            2: {name: 'constant.numeric.decimal.duration.mermaid'},
            3: {name: 'keyword.other.unit.duration.mermaid'}
          },
          match: '(?:^|\\G|(?<=,))\\s*((\\d+)([wdhms]))[ \\t]*(?=$|,)'
        },
        {include: 'source.mermaid#comma'}
      ]
    },
    title: {
      begin: '(?i)^\\s*(title)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'storage.type.title.mermaid'}},
      contentName: 'string.unquoted.chart-title.mermaid',
      end: '(?=\\s*$)',
      name: 'meta.title.statement.mermaid',
      patterns: [{include: 'source.mermaid#entity'}]
    },
    'today-marker': {
      applyEndPatternLast: true,
      begin: '(?i)^\\s*(todayMarker)(?=$|\\s)[ \\t]*',
      beginCaptures: {1: {name: 'storage.type.today-marker.mermaid'}},
      end: '(?!\\G)',
      name: 'meta.today-marker.statement.mermaid',
      patterns: [
        {
          match: '(?i)\\Goff(?=\\s*$)',
          name: 'constant.language.boolean.false.mermaid'
        },
        {include: 'source.mermaid#inline-css'}
      ]
    },
    undocumented: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.enable-inclusive-end-dates.mermaid'}
          },
          match: '(?i)^\\s*(inclusiveEndDates)(?=$|\\s)',
          name: 'meta.include-end-dates.statement.mermaid'
        },
        {
          captures: {1: {name: 'keyword.operator.enable-top-axis.mermaid'}},
          match: '(?i)^\\s*(topAxis)(?=$|\\s)',
          name: 'meta.enable-top-axis.statement.mermaid'
        }
      ]
    }
  },
  scopeName: 'source.mermaid.gantt'
}

export default grammar
