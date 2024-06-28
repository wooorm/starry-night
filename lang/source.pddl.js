// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/jan-dolejsi/vscode-pddl>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.pddl'],
  names: ['pddl'],
  patterns: [
    {include: '#meta'},
    {include: '#keywords'},
    {include: '#comments'},
    {include: '#scalars'},
    {include: '#time-qualifiers'},
    {include: '#operators'},
    {include: '#parameters'},
    {include: '#unexpected'}
  ],
  repository: {
    comments: {patterns: [{match: ';.*$', name: 'comment.line'}]},
    keywords: {
      patterns: [
        {
          match: '\\b(define|domain|problem)\\b',
          name: 'keyword.control.pddl.header'
        },
        {
          match:
            ':(strips|typing|negative-preconditions|disjunctive-preconditions|equality|existential-preconditions|universal-preconditions|quantified-preconditions|conditional-effects|fluents|numeric-fluents|object-fluents|adl|durative-actions|duration-inequalities|continuous-effects|derived-predicates|derived-functions|timed-initial-literals|timed-effects|preferences|constraints|action-costs|timed-initial-fluents|time|supply-demand|job-scheduling)\\b',
          name: 'keyword.control.pddl.requirements'
        },
        {
          match:
            ':(requirements|types|constants|predicates|functions|derived|action|durative-action|event|process|job|domain|objects|init|goal|metric)\\b',
          name: 'keyword.control.pddl.global'
        },
        {
          match: ':(parameters|precondition|effect)\\b',
          name: 'keyword.control.pddl.action'
        },
        {
          match: ':(parameters|duration|condition|effect)\\b',
          name: 'keyword.control.pddl.action.durative'
        },
        {
          match: ':(parameters|duration|condition|effect)\\b',
          name: 'keyword.control.pddl.action.job'
        }
      ]
    },
    meta: {
      patterns: [
        {
          captures: {
            1: {name: 'variable.parameter.pre-parsing.type'},
            3: {name: 'variable.parameter.pre-parsing.command'},
            5: {
              patterns: [
                {
                  begin: '"',
                  end: '"',
                  name: 'variable.parameter.pre-parsing.data'
                }
              ]
            },
            6: {name: 'variable.parameter.pre-parsing.data'}
          },
          match:
            '^;;\\s*!pre-parsing:\\s*{\\s*type:\\s*"(command|nunjucks|jinja2|python)"\\s*,\\s*(command:\\s*"([\\w:\\-/\\\\\\. ]+)"\\s*(,\\s*args:\\s*\\[([^\\]]*)\\])?|data:\\s*"([\\w:\\-/\\\\\\. ]+)")\\s*}',
          name: 'meta.preprocessor.pre-parsing'
        },
        {match: '^;;\\s*!', name: 'meta.preprocessor'},
        {match: '{%[^%]+%}', name: 'meta.preprocessor.template.flow-control'},
        {match: '{{[^}]+}}', name: 'meta.preprocessor.template.literal'}
      ]
    },
    operators: {
      patterns: [
        {match: '\\b(and|not|or|either)\\b', name: 'keyword.operator.logical'},
        {match: '(>|<|>=|<=|=|/|\\*|\\+)', name: 'keyword.other.numeric'},
        {
          match: '\\b(assign|increase|decrease|forall|exists)\\b',
          name: 'keyword.other.effects'
        },
        {match: '\\b(undefined)\\b', name: 'keyword.other.undefined'},
        {match: '\\b(minimize|maximize)\\b', name: 'keyword.other.metric'}
      ]
    },
    parameters: {patterns: [{match: '\\?\\w+\\b', name: 'variable.parameter'}]},
    scalars: {
      patterns: [
        {match: '\\b[-+]?([0-9]*\\.[0-9]+|[0-9]+)\\b', name: 'constant.numeric'}
      ]
    },
    'time-qualifiers': {
      patterns: [
        {
          match: '\\b(at start|at end|over all)\\b',
          name: 'keyword.other.pddl_qualifier'
        },
        {match: '#t\\b', name: 'keyword.other.delta_t'}
      ]
    },
    unexpected: {patterns: [{match: ':[\\w-]+\\b', name: 'invalid.illegal'}]}
  },
  scopeName: 'source.pddl'
}

export default grammar
