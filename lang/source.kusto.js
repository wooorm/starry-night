// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/mmanela/kusto-sublime>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.csl', '.kql'],
  names: ['kusto'],
  patterns: [
    {
      match: '\\b(let|set|alias|declare|pattern|restrict|access|to|set)\\b',
      name: 'keyword.control.kusto'
    },
    {
      match: '\\b(cluster|database|materialize|table|toscalar)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match:
        '\\b(and|or|!in|has|has_cs|hasprefix|hasprefix_cs|hassuffix|hassuffix_cs|contains|contains_cs|startswith|startswith_cs|endswith|endswith_cs|matches|regex|in|between)\\b',
      name: 'keyword.operator.kusto'
    },
    {
      match:
        '\\b(binary_and|binary_not|binary_or|binary_shift_left|binary_shift_right|binary_xor)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match:
        '\\b(tobool|todatetime|todecimal|todouble|toguid|tohex|toreal|toint|tolong|tolower|toreal|tostring|totimespan|toupper|to_utf8|translate|treepath|trim|trim_end|trim_start|url_decode|url_encode|weekofyear|welch_test|zip)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match: '(?<=\\.\\d|\\d|\\d\\W)(d|h|m|s|ms|microsecond|tick|seconds)\\b',
      name: 'variable.language'
    },
    {
      match:
        '\\b(ago|datetime_add|datetime_part|datetime_diff|dayofmonth|dayofweek|dayofyear|endofday|endofmonth|endofweek|endofyear|format_datetime|format_timespan|getmonth|getyear|hourofday|make_datetime|make_timespan|monthofyear|now|startofday|startofmonth|startofweek|startofyear|todatetime|totimespan|weekofyear)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match:
        '\\b(array_concat|array_length|array_slice|array_split|array_strcat|bag_keys|pack|pack_all|pack_array|repeat|treepath|zip)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match: '\\b(next|prev|row_cumsum|row_number)(?=\\W*\\()',
      name: 'support.function'
    },
    {match: '\\b(toscalar)(?=\\W*\\()', name: 'support.function'},
    {
      match:
        '\\b(abs|acos|asin|atan|atan2|beta_cdf|beta_inv|beta_pdf|cos|cot|degrees|exp|exp100|exp2|gamma|hash|isfinite|isinf|isnan|log|log10|log2|loggamma|not|pi|pow|radians|rand|range|round|sign|sin|sqrt|tan|welch_test)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match:
        '\\b(column_ifexists|current_principal|cursor_after|extent_id|extent_tags|ingestion_time)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match: '\\b(bin|bin_at|ceiling|floor)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match: '\\b(case|coalesce|iif|iff|max_of|min_of)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match:
        '\\b(series_add|series_divide|series_equals|series_greater|series_greater_equals|series_less|series_less_equals|series_multiply|series_not_equals|series_subtract)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match:
        '\\b(series_decompose|series_decompose_anomalies|series_decompose_forecast|series_fill_backward|series_fill_const|series_fill_forward|series_fill_linear|series_fir|series_fit_2lines|series_fit_2lines_dynamic|series_fit_line|series_fit_line_dynamic|series_iir|series_outliers|series_periods_detect|series_periods_validate|series_seasonal|series_stats|series_stats_dynamic)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match:
        '\\b(base64_decodestring|base64_encodestring|countof|extract|extract_all|extractjson|indexof|isempty|isnotempty|isnotnull|isnull|parse_ipv4|parse_json|parse_url|parse_urlquery|parse_version|replace|reverse|split|strcat|strcat_delim|strcmp|strlen|strrep|substring|toupper|translate|trim|trim_end|trim_start|url_decode|url_encode)(?=\\W*\\()',
      name: 'support.function'
    },
    {match: '\\b(gettype)(?=\\W*\\()', name: 'support.function'},
    {
      match:
        '\\b(dcount_hll|hll_merge|percentile_tdigest|percentrank_tdigest|rank_tdigest|tdigest_merge)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match:
        '\\b(any|arg_max|arg_min|avg|avgif|buildschema|count|countif|dcount|dcountif|hll|hll_merge|make_bag|make_list|make_set|max|min|percentiles|stdev|stdevif|stdevp|sum|sumif|tdigest|tdigest_merge|variance|varianceif|variancep)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match: '\\b(next|prev|row_cumsum|row_number)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match:
        '\\b(activity_counts_metrics|sliding_window_counts|activity_metrics|new_activity_metrics|activity_engagement|active_users_count|session_count|funnel_sequence|funnel_sequence_completion)(?=\\W*\\()',
      name: 'support.function'
    },
    {match: '\\.create-or-alter', name: 'keyword.control.kusto'},
    {match: '(?<=let ).+(?=\\W*=)', name: 'entity.function.name.lambda.kusto'},
    {
      match: '\\b(with|folder|docstring|skipvalidation)\\b',
      name: 'keyword.operator.kusto'
    },
    {match: '\\b(function)\\b', name: 'variable.language'},
    {
      match:
        '\\b(bool|datetime|decimal|dynamic|guid|int|long|real|string|timespan)\\b',
      name: 'storage.type'
    },
    {match: '\\b(datatable)(?=\\W*\\()', name: 'support.function'},
    {
      match:
        '\\b(as|consume|count|datatable|distinct|evaluate|extend|externaldata|facet|find|fork|getschema|invoke|join|limit|take|lookup|make-series|mv-expand|order|sort|project-away|project-rename|project|parse|partition|print|range|reduce|render|sample|sample-distinct|search|serialize|sort|summarize|take|top-nested|top|top-hitters|union|where)\\b',
      name: 'keyword.operator.special.kusto'
    },
    {
      match:
        '\\b(autocluster|bag_unpack|basket|dcount_intersect|diffpatterns|narrow|pivot|preview|rolling_percentile|sql_request)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match: '\\b(on|kind|hint\\.remote|hint\\.strategy)\\b',
      name: 'keyword.operator.kusto'
    },
    {match: '(\\$left|\\$right)\\b', name: 'keyword.other.kusto'},
    {
      match:
        '\\b(innerunique|inner|leftouter|rightouter|fullouter|leftanti|anti|leftantisemi|rightanti|rightantisemi|leftsemi|rightsemi|shuffle|broadcast)\\b',
      name: 'keyword.other.kusto'
    },
    {
      match:
        '\\b(series_fir|series_iir|series_fit_line|series_fit_line_dynamic|series_fit_2lines|series_fit_2lines_dynamic|series_outliers|series_periods_detect|series_periods_validate|series_stats_dynamic|series_stats)(?=\\W*\\()',
      name: 'support.function'
    },
    {
      match:
        '\\b(series_fill_backward|series_fill_const|series_fill_forward|series_fill_linear)(?=\\W*\\()',
      name: 'support.function'
    },
    {match: '\\b(bag|array)\\b', name: 'keyword.operator.kusto'},
    {
      match: '\\b(asc|desc|nulls first|nulls last)\\b',
      name: 'keyword.other.kusto'
    },
    {match: '\\b(regex|simple|relaxed)\\b', name: 'keyword.other.kusto'},
    {
      match:
        '\\b(anomalychart|areachart|barchart|columnchart|ladderchart|linechart|piechart|pivotchart|scatterchart|stackedareachart|table|timechart|timepivot)\\b',
      name: 'support.function'
    },
    {
      match: '\\b(by|from|in|of|to|step|with)\\b',
      name: 'keyword.operator.word'
    },
    {match: '".*?"', name: 'string.quoted.double'},
    {match: '\\{.*?\\}', name: 'string.variable'},
    {match: "'.*?'", name: 'string.quoted.single'},
    {match: '//.*', name: 'comment.line'},
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*+)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?(?=\\b|\\w)',
      name: 'constant.numeric'
    },
    {match: '\\b(true|false)\\b', name: 'constant.language'},
    {
      match:
        '\\b(array_strcat|make_dictionary|makelist|makeset|mvexpand|todynamic)(?=\\W*\\(|\\b)',
      name: 'invalid.deprecated'
    },
    {name: 'invalid.illegal'}
  ],
  scopeName: 'source.kusto'
}

export default grammar
