// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/josin/kusto-syntax-highlighting>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.csl'],
  names: ['kusto'],
  patterns: [
    {
      match:
        '\\b(let|count|ingestion_time|and|or|max|min|iff|isempty|isnotempty|log|sum|extract|now|false|true|makeset|makelist|any|arg_max|arg_min|any|dcount|sumif|countif|avg|materialize|pack|database|strcat|translate|substring|tostring|toscalar|strlen|contains|in|startswith|endswith|split|typeof)\\b',
      name: 'keyword.functions.kusto'
    },
    {
      match:
        '\\b(where|summarize|extend|mvexpand|project|sort|project|-away|join|union|limit|order|sort|top|print|datatable)\\b',
      name: 'keyword.control.kusto'
    },
    {match: '".*?"', name: 'string.constant.double'},
    {match: "'.*?'", name: 'string.constant.single'},
    {match: '//.*', name: 'comment'},
    {match: '\\{.*?\\}', name: 'string.variable'},
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b',
      name: 'constant.numeric'
    }
  ],
  scopeName: 'source.kusto'
}

export default grammar
