// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/TypeUnsafe/sublime-golo>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.golo'],
  names: ['golo'],
  patterns: [
    {match: '(#).*$\n?', name: 'comment.line.number-sign.golo'},
    {
      begin: '----',
      captures: {0: {name: 'punctuation.definition.comment.golo'}},
      end: '----',
      name: 'comment.block.golo'
    },
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.golo'}},
      end: '\\*/',
      name: 'comment.block.golo'
    },
    {
      begin: '"""',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.golo'}},
      end: '"""',
      endCaptures: {0: {name: 'punctuation.definition.string.end.golo'}},
      name: 'string.quoted.third.golo',
      patterns: [
        {
          match: '(\\$\\w+|\\$\\{[^\\}]+\\})',
          name: 'variable.parameter.template.golo'
        },
        {match: '\\\\.', name: 'constant.character.escape.golo'}
      ]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.golo'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.golo'}},
      name: 'string.quoted.double.golo',
      patterns: [
        {
          match: '(\\$\\w+|\\$\\{[^\\}]+\\})',
          name: 'variable.parameter.template.golo'
        },
        {match: '\\\\.', name: 'constant.character.escape.golo'}
      ]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.golo'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.golo'}},
      name: 'string.quoted.single.golo',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.golo'}]
    },
    {match: '\\b(true|false|null|super|)\\b', name: 'constant.language.golo'},
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)([LlFfUuDd]|UL|ul)?\\b',
      name: 'constant.numeric.golo'
    },
    {match: '\\b([A-Z][A-Z0-9_]+)\\b', name: 'constant.other.golo'},
    {
      match: '\\b(this|checkResult|checkArguments|withContext)\\b',
      name: 'constant.other.golo'
    },
    {
      match:
        '\\b(var|let|val|local|extends|implements|overrides|interfaces)\\b',
      name: 'storage.modifier.golo'
    },
    {
      match: '\\b(try|catch|finally|throw|raise)\\b',
      name: 'keyword.control.catch-exception.golo'
    },
    {
      match:
        '\\b(if|then|else|match|while|for|foreach|do|return|when|otherwise|where|break|continue)\\b',
      name: 'keyword.control.golo'
    },
    {
      match:
        '\\b(println|print|readln|readpwd|function|fun|pimp|spawn|send|shutdown|augment|AdapterFabric|DynamicObject|Thread|Promise|promise|Observable|DynamicVariable|defaultContext|module|import|fileToText|textToFile|mapEntry|compile|TemplateEngine|EvaluationEnvironment|asInterfaceInstance|)\\b',
      name: 'keyword.other.golo'
    },
    {
      match:
        '\\b(define|fail|onSet|onFail|onChange|invokeWithArguments|stringify|value|get|set|future|times|each|filter|map)\\b',
      name: 'support.function.js'
    },
    {
      match:
        '\\b(in|not|and|or|is|isnt|as|andThen|bindTo|bindAt|\\?:|orIfNull|oftype)\\b',
      name: 'keyword.operator.golo'
    },
    {
      match: '(==|!=|<=|>=|<>|<|>|\\?:)',
      name: 'keyword.operator.comparison.golo'
    },
    {match: '(=)', name: 'keyword.operator.assignment.golo'},
    {match: '(:|\\||)', name: 'keyword.operator.declaration.golo'},
    {match: '(\\.)', name: 'keyword.operator.dot.golo'},
    {
      match: '(\\-\\-|\\+\\+)',
      name: 'keyword.operator.increment-decrement.golo'
    },
    {match: '(\\-|\\+|\\*|\\/|%)', name: 'keyword.operator.arithmetic.golo'},
    {match: '(!|&&|\\|\\|)', name: 'keyword.operator.logical.golo'},
    {
      match:
        '\\b(struct|range\\[|tuple\\[|array\\[|map\\[|set\\[|vector\\[|list\\[)|\\[|\\]|\\b',
      name: 'support.class.golo'
    },
    {match: '(\\{|\\}|@|\\(|\\))', name: 'support.class.golo'}
  ],
  scopeName: 'source.golo'
}

export default grammar
