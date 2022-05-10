// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Drako/SublimeBrainfuck>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.b', '.bf'],
  names: ['brainfuck'],
  patterns: [
    {match: '[+-]', name: 'constant.character.modify-value.bf'},
    {match: '[<>]', name: 'keyword.operator.modify-pointer.bf'},
    {match: '[.,]', name: 'entity.name.function.io.bf'},
    {match: '\\[', name: 'punctuation.definition.tag.begin.bf'},
    {match: '\\]', name: 'punctuation.definition.tag.end.bf'},
    {match: '[^-.,+<>\\[\\]]', name: 'comment.block.bf'}
  ],
  scopeName: 'source.bf'
}

export default grammar
