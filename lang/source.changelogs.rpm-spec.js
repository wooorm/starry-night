// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: [],
  patterns: [
    {match: '^[*+=-]{30}[+==-]*', name: 'entity.section.name.changelogs'},
    {captures: {1: {name: 'comment.changelogs'}}, match: '^[ \\t]*- (.+)'},
    {
      captures: {
        1: {name: 'constant.changelogs'},
        2: {name: 'entity.name.changelogs'},
        3: {name: 'variable.other.changelogs'},
        4: {name: 'constant.numeric.changelogs'}
      },
      match:
        '^(?:\\* )?([a-zA-Z]{3} [a-zA-Z]{3}[ ]+\\d+ \\d+:\\d+:\\d+ [A-Z]+ \\d{4}) - (.*) (<.*>) ([#_a-zA-Z0-9.-]+)$'
    },
    {
      captures: {
        1: {name: 'constant.changelogs'},
        2: {name: 'entity.name.changelogs'},
        3: {name: 'variable.other.changelogs'},
        4: {name: 'constant.numeric.changelogs'}
      },
      match:
        '^(?:\\* )?([a-zA-Z]{3} [a-zA-Z]{3}[ ]+\\d+(?: \\d+:\\d+:\\d+ [A-Z]+)? \\d{4}) (.*) (<.*>)(?: -)? ([#a-zA-Z0-9.-]+)?$'
    },
    {
      captures: {
        1: {name: 'constant.changelogs'},
        2: {name: 'entity.name.changelogs'},
        3: {name: 'variable.other.changelogs'},
        4: {name: 'constant.numeric.changelogs'}
      },
      match:
        '^(?:\\* )?([a-zA-Z]{3} [a-zA-Z]{3}[ ]+\\d+(?: \\d+:\\d+:\\d+ [A-Z]+)? \\d{4}) (.*) (<.*>)(?: -) (.*)$'
    },
    {
      captures: {
        1: {name: 'constant.changelogs'},
        2: {name: 'variable.other.changelogs'}
      },
      match:
        '^(?:\\* )?([a-zA-Z]{3} [a-zA-Z]{3}[ ]+\\d+(?: \\d+:\\d+:\\d+ [A-Z]+)? \\d{4})(?: -) (.+@.+)$'
    },
    {
      captures: {
        1: {name: 'constant.changelogs'},
        2: {name: 'variable.other.changelogs'}
      },
      match: '^(?:\\* )?([a-zA-Z]{3} [a-zA-Z]+[ ]+\\d+ \\d{4}) (.+@.+)$'
    }
  ],
  scopeName: 'source.changelogs.rpm-spec'
}

export default grammar
