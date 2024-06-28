// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['crontab', 'cron', 'cron-table'],
  patterns: [
    {
      begin: '(^[ \\t]*)(?=#)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.crontab'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.comment.crontab'}},
          end: '\\n',
          name: 'comment.line.number-sign.crontab'
        }
      ]
    },
    {
      captures: {
        1: {name: 'constant.numeric.minute.crontab'},
        10: {name: 'keyword.other.crontab'},
        11: {name: 'string.unquoted.input.crontab'},
        12: {name: 'keyword.other.input-separator.crontab'},
        2: {name: 'constant.numeric.hour.crontab'},
        3: {name: 'constant.numeric.day-of-month.crontab'},
        4: {name: 'constant.numeric.month.crontab'},
        5: {name: 'keyword.other.month.crontab'},
        6: {name: 'constant.numeric.day-of-week.crontab'},
        7: {name: 'keyword.other.weekday.crontab'},
        8: {name: 'keyword.other.special.schedule.crontab'},
        9: {name: 'string.unquoted.command.crontab'}
      },
      match:
        '(?x)^\\s*\n\t\t\t        (?:\n    \t\t\t        ((?:\\*|(?:\\d+|\\*)(?:[-,\\/]\\d+)*))\\s+        # Minute\n\t\t\t\t\t\t((?:\\*|(?:\\d+|\\*)(?:[-,\\/]\\d+)*))\\s+        # Hour\n\t\t\t\t\t\t((?:\\*|(?:\\d+|\\*)(?:[-,\\/]\\d+)*))\\s+        # Day of the month\n\t\t\t\t\t\t((?:\\*|(?:\\d+|\\*)(?:[-,\\/]\\d+)*|((?i:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))))\\s+   # Month\n\t\t\t\t\t\t((?:\\*|[0-7*](?:[-,\\/][0-7])*|((?i:Mon|Tue|Wed|Thu|Fri|Sat|Sun))))\\s+                       # Day of the week\n\t\t\t\t\t\t|\n\t\t\t\t\t\t(\\@(?:reboot|midnight|(?:year|annual|month|week|dai|hour)ly)\\b)   # Special keywords\n\t\t\t\t\t)\n\t\t\t\t\t(\n\t\t\t\t\t\t(?:(@AppleNotOnBattery)\\s+)?\n\t\t\t\t\t\t.+?   # The command\n\t\t\t\t\t)\n\t\t\t\t\t((?<!\\\\)(%).*?)*\t# Optional standard input for the command\n\t\t\t\t\t\\s*$\\n?',
      name: 'meta.schedule.crontab'
    },
    {
      captures: {
        1: {name: 'variable.other.environment.crontab'},
        2: {name: 'punctuation.definition.variable.begin.crontab'},
        3: {name: 'variable.language.mailto.crontab'},
        4: {name: 'punctuation.definition.variable.end.crontab'},
        5: {name: 'keyword.operator.assign.crontab'},
        6: {name: 'string.quoted.other.value.crontab'},
        7: {name: 'punctuation.definition.string.begin.crontab'},
        8: {name: 'punctuation.definition.string.end.crontab'}
      },
      match:
        '(?x)^\\s*\n\t\t\t\t\t(\n\t\t\t\t\t\t([\'"]|)\n\t\t\t\t\t\t(?i:(MAILTO)|.+?)\n\t\t\t\t\t\t(\\2)\n\t\t\t\t\t)\n\t\t\t\t\t\\s*(=)\\s*\n\t\t\t\t\t(\n\t\t\t\t\t\t([\'"]|)\n\t\t\t\t\t\t.+?\n\t\t\t\t\t\t(\\7)\n\t\t\t\t\t)\n\t\t\t\t\t\\s*$\\n?',
      name: 'meta.environment-assign.crontab'
    }
  ],
  scopeName: 'text.crontab'
}

export default grammar
