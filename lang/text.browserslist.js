// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/browserslist/browserslist-vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['browserslist'],
  patterns: [
    {include: '#comments'},
    {include: '#marketshares'},
    {include: '#dates'},
    {include: '#versions'},
    {include: '#keywords'},
    {include: '#browsers'},
    {include: '#sections'},
    {include: '#configs'}
  ],
  repository: {
    browsers: {
      patterns: [
        {
          match:
            '(?i)\\b(Android|Baidu|BlackBerry|bb|Chrome|ChromeAndroid|and_chr|Edge|Electron|Explorer|ie|ExplorerMobile|ie_mob|Firefox|ff|FirefoxAndroid|and_ff|iOS|ios_saf|Node|Opera|OperaMini|op_mini|OperaMobile|op_mob|PhantomJS|QQAndroid|and_qq|Safari|Samsung|UCAndroid|and_uc|kaios)\\b',
          name: 'string.unquoted.browserslist'
        }
      ]
    },
    comments: {
      patterns: [
        {begin: '#', end: '\n', name: 'comment.line.number-sign.browserslist'}
      ]
    },
    configs: {
      patterns: [
        {
          match: '@\\w+\\/browserslist-config(-.+)?',
          name: 'entity.name.class.browserslist'
        },
        {
          match: '\\bbrowserslist-config-\\w+\\b',
          name: 'entity.name.class.browserslist'
        }
      ]
    },
    dates: {
      patterns: [
        {
          match: '\\d{4}(-\\d{1,2}){0,2}',
          name: 'constant.numeric.date.browserslist'
        },
        {match: 'years?', name: 'constant.numeric.date.browserslist'}
      ]
    },
    keywords: {
      patterns: [
        {match: '(<=?|>=?|,)', name: 'keyword.control.browserslist'},
        {
          match: '\\b(not|and|or|extends|in|last|since|cover|supports)\\b',
          name: 'keyword.control.browserslist'
        }
      ]
    },
    marketshares: {
      patterns: [
        {match: '(\\d*\\.)?\\d+%', name: 'constant.numeric.browserslist'}
      ]
    },
    sections: {
      patterns: [
        {match: 'defaults', name: 'entity.name.function.browserslist'},
        {match: '(\\[|\\])', name: 'constant.character.browserslist'},
        {match: '(?!\\[)(.+)(?=\\])', name: 'entity.name.function.browserslist'}
      ]
    },
    versions: {
      patterns: [
        {
          match: '\\b\\d+(.\\d+){0,2}\\b',
          name: 'constant.numeric.browserslist'
        },
        {
          match: '(?i)\\b(esr|tp|all|dead|unreleased|major|versions?)\\b',
          name: 'constant.numeric.browserslist'
        },
        {
          match: '(?i)\\b(current|maintained?)\\b',
          name: 'constant.numeric.node.browserslist'
        }
      ]
    }
  },
  scopeName: 'text.browserslist'
}

export default grammar
