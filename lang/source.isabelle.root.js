// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/lsf37/Isabelle.tmbundle>
// and licensed `bsd-2-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['isabelle-root'],
  patterns: [
    {
      match:
        '\\b(chapter|session|in|description|options|global_theories|theories|files|document_files|sessions|directories)\\b',
      name: 'keyword.control'
    },
    {
      match:
        '\\b(browser_info|condition|document|document_graph|document_output|document_variants|eta_contract|goals_limit|names_long|names_short|names_unique|pretty_margin|print_mode|show_brackets|show_consts|show_main_goal|show_question_marks|show_sorts|show_types|thy_output_break|thy_output_display|thy_output_indent|thy_output_modes|thy_output_quotes|thy_output_source|timeout|global)\\b',
      name: 'keyword.other.option'
    },
    {match: '\\b(true|false)\\b', name: 'support.constant'},
    {
      captures: {
        1: {name: 'keyword.other.option'},
        2: {name: 'keyword.operator'},
        3: {name: 'support.constant'}
      },
      match: '\\b(quick_and_dirty|skip_proofs)[ ]*(\\=)[ ]*(false)\\b',
      name: 'meta.abandon-proof.false'
    },
    {
      match: '\\b(quick_and_dirty|skip_proofs)\\b',
      name: 'invalid.illegal.abandon-proof'
    },
    {begin: '"', end: '"', name: 'string.quoted.double'},
    {begin: '\\{\\*', end: '\\*\\}', name: 'comment.block.documentation'},
    {begin: '\\(\\*', end: '\\*\\)', name: 'comment.block'},
    {match: '\\(|\\)|\\[|\\]|\\=|\\+|\\,', name: 'keyword.operator'},
    {
      match: "\\??'?([^\\W\\d]|\\\\<\\w+\\>)([.\\w\\']|\\\\<\\w+\\>)*",
      name: 'variable.other'
    },
    {match: '[0-9]+', name: 'constant.numeric'}
  ],
  scopeName: 'source.isabelle.root'
}

export default grammar
