// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/brandonwamboldt/sublime-nginx>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.nginx', '.nginxconf'],
  names: ['nginx', 'nginx-configuration-file'],
  patterns: [
    {match: '\\#.*', name: 'comment.line.number-sign'},
    {
      begin: '\\b(events) +\\{',
      beginCaptures: {1: {name: 'storage.type.context.nginx'}},
      end: '\\}',
      name: 'meta.context.events.nginx',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\b(http) +\\{',
      beginCaptures: {1: {name: 'storage.type.context.nginx'}},
      end: '\\}',
      name: 'meta.context.http.nginx',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\b(types) +\\{',
      beginCaptures: {1: {name: 'storage.type.context.nginx'}},
      end: '\\}',
      name: 'meta.context.types.nginx',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\b(server) +\\{',
      beginCaptures: {1: {name: 'storage.type.context.nginx'}},
      end: '\\}',
      name: 'meta.context.server.nginx',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\b(location) +[\\^]?~[\\*]? +(.*?)\\{',
      beginCaptures: {
        1: {name: 'storage.type.context.location.nginx'},
        2: {name: 'string.regexp.nginx'}
      },
      end: '\\}',
      name: 'meta.context.location.nginx',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\b(location) +(.*?)\\{',
      beginCaptures: {
        1: {name: 'storage.type.context.location.nginx'},
        2: {name: 'entity.name.context.location.nginx'}
      },
      end: '\\}',
      name: 'meta.context.location.nginx',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\b(upstream) +(.*?)\\{',
      beginCaptures: {
        1: {name: 'storage.type.context.nginx'},
        2: {name: 'entity.name.context.location.nginx'}
      },
      end: '\\}',
      name: 'meta.context.upstream.nginx',
      patterns: [{include: '$self'}]
    },
    {
      begin: '\\b(if) +\\(',
      beginCaptures: {1: {name: 'keyword.control.nginx'}},
      end: '\\)',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\{',
      end: '\\}',
      name: 'meta.block.nginx',
      patterns: [{include: '$self'}]
    },
    {
      begin:
        '\\b(daemon|env|debug_points|error_log|include|lock_file|master_process|pid|ssl_engine|timer_resolution|user|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory)\\b',
      captures: {1: {name: 'keyword.directive.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin:
        '\\b(accept_mutex|accept_mutex_delay|debug_connection|devpoll_changes|devpoll_events|epoll_events|kqueue_changes|kqueue_events|multi_accept|rtsig_signo|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|use|worker_connections)\\b',
      captures: {1: {name: 'keyword.directive.module.events.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin:
        '\\b(aio|alias|chunked_transfer_encoding|client_body_in_file_only|client_body_in_single_buffer|client_body_buffer_size|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|default_type|directio|error_page|if_modified_since|internal|keepalive_disable|keepalive_timeout|keepalive_requests|large_client_header_buffers|limit_except|limit_rate|limit_rate_after|lingering_close|lingering_time|lingering_timeout|listen|log_not_found|log_subrequest|msie_padding|msie_refresh|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|optimize_server_names|port_in_redirect|post_action|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|root|satisfy|satisfy_any|send_timeout|sendfile|server_name|server_name_in_redirect|server_names_hash_max_size|server_names_hash_bucket_size|server_tokens|tcp_nodelay|tcp_nopush|try_files|types\\ |underscores_in_hashes|variables_hash_bucket_size|variables_hash_max_size|types_hash_max_size)\\b',
      captures: {1: {name: 'keyword.directive.module.http.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(set_real_ip_from|real_ip_recursive|real_ip_header)\\b',
      captures: {1: {name: 'keyword.directive.module.http.realip.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(allow|deny)\\b',
      captures: {1: {name: 'keyword.directive.module.http.access.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(auth_basic|auth_basic_user_file)\\b',
      captures: {1: {name: 'keyword.directive.module.http.auth_basic.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(autoindex|autoindex_exact_size|autoindex_localtime)\\b',
      captures: {1: {name: 'keyword.directive.module.http.autoindex.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin:
        '\\b(ancient_browser|ancient_browser_value|modern_browser|modern_browser_value)\\b',
      captures: {1: {name: 'keyword.directive.module.http.browser.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(charset|charset_map|override_charset|source_charset)\\b',
      captures: {1: {name: 'keyword.directive.module.http.charset.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(empty_gif)\\b',
      captures: {1: {name: 'keyword.directive.module.http.empty_gif.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin:
        '\\b(fastcgi_bind|fastcgi_buffer_size|fastcgi_buffers|fastcgi_cache|fastcgi_cache_key|fastcgi_cache_path|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_index|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_intercept_errors|fastcgi_max_temp_file_size|fastcgi_no_cache|fastcgi_next_upstream|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_pass_request_body|fastcgi_pass_request_headers|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_path)\\b',
      captures: {1: {name: 'keyword.directive.module.http.fastcgi.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(geo)\\b',
      captures: {1: {name: 'keyword.directive.module.http.geo.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin:
        '\\b(gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_types|gzip_vary)\\b',
      captures: {1: {name: 'keyword.directive.module.http.gzip.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin:
        '\\b(gzip_static|gzip_disable|gzip_http_version|gzip_proxied|gzip_vary)\\b',
      captures: {1: {name: 'keyword.directive.module.http.gzip_static.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(add_header|expires)\\b',
      captures: {1: {name: 'keyword.directive.module.http.headers.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(index)\\b',
      captures: {1: {name: 'keyword.directive.module.http.index.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      captures: {1: {name: 'keyword.directive.module.http.limit_req.nginx'}},
      end: ';',
      match: '\\b(limit_req_log_level|limit_req_zone|limit_req)\\b',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(limit_zone|limit_conn|limit_conn_log_level)\\b',
      captures: {1: {name: 'keyword.directive.module.http.limit_zone.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(limit_conn_zone|limit_conn|limit_conn_log_level)\\b',
      captures: {1: {name: 'keyword.directive.module.http.limit_conn.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(access_log|log_format|open_log_file_cache)\\b',
      captures: {1: {name: 'keyword.directive.module.http.log.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(map) +(\\$[A-Za-z0-9\\_]+) +(\\$[A-Za-z0-9\\_]+) *\\{',
      beginCaptures: {
        1: {name: 'storage.type.context.nginx'},
        2: {name: 'variable.other.nginx'},
        3: {name: 'variable.other.nginx'}
      },
      end: '\\}',
      name: 'meta.context.map.nginx',
      patterns: [
        {include: '#values'},
        {match: ';', name: 'punctuation.definition.map.nginx'},
        {match: '\\#.*', name: 'comment.line.number-sign'}
      ]
    },
    {
      begin: '\\b(map_hash_max_size|map_hash_bucket_size)\\b',
      captures: {1: {name: 'keyword.directive.module.http.map.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin:
        '\\b(memcached_pass|memcached_connect_timeout|memcached_read_timeout|memcached_send_timeout|memcached_buffer_size|memcached_next_upstream)\\b',
      captures: {1: {name: 'keyword.directive.module.http.memcached.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin:
        '\\b(proxy_bind|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_http_version|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_redirect|proxy_read_timeout|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_upstream_fail_timeout|proxy_upstream_max_fails)\\b',
      captures: {1: {name: 'keyword.directive.module.http.proxy.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(valid_referers)\\b',
      captures: {1: {name: 'keyword.directive.module.http.referer.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(rewrite_log|set|uninitialized_variable_warn)\\b',
      captures: {1: {name: 'keyword.directive.module.http.rewrite.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(break|return)\\b',
      captures: {1: {name: 'support.function.module.http.rewrite.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin:
        '\\b(rewrite)\\b *(".+?(?<!\\\\)"|\'.+?(?<!\\\\)\'|((.+?)(?<!\\\\)\\s))',
      captures: {
        1: {name: 'keyword.directive.module.http.rewrite.nginx'},
        2: {name: 'string.regexp.nginx'}
      },
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin:
        '\\b(scgi_bind|scgi_buffer_size|scgi_buffering|scgi_buffers|scgi_busy_buffers_size|scgi_cache|scgi_cache_bypass|scgi_cache_key|scgi_cache_methods|scgi_cache_min_uses|scgi_cache_path|scgi_cache_use_stale|scgi_cache_valid|scgi_connect_timeout|scgi_hide_header|scgi_ignore_client_abort|scgi_ignore_headers|scgi_intercept_errors|scgi_max_temp_file_size|scgi_next_upstream|scgi_no_cache|scgi_param|scgi_pass|scgi_pass_header|scgi_pass_request_body|scgi_pass_request_headers|scgi_read_timeout|scgi_send_timeout|scgi_store|scgi_store_access|scgi_temp_file_write_size|scgi_temp_path)\\b',
      captures: {1: {name: 'keyword.directive.module.http.scgi.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(split_clients)\\b',
      captures: {
        1: {name: 'keyword.directive.module.http.split_clients.nginx'}
      },
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(ssi|ssi_silent_errors|ssi_types|ssi_value_length)\\b',
      captures: {1: {name: 'keyword.directive.module.http.ssi.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin:
        '\\b(ssl|ssl_certificate|ssl_certificate_key|ssl_client_certificate|ssl_dhparam|ssl_ciphers|ssl_crl|ssl_prefer_server_ciphers|ssl_protocols|ssl_verify_client|ssl_verify_depth|ssl_session_cache|ssl_session_timeout|ssl_engine)\\b',
      captures: {1: {name: 'keyword.directive.module.http.ssl.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(ip_hash|server)\\b',
      captures: {1: {name: 'keyword.directive.module.http.upstream.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin:
        '\\b(userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service)\\b',
      captures: {1: {name: 'keyword.directive.module.http.userid.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin:
        '\\b(uwsgi_bind|uwsgi_buffer_size|uwsgi_buffering|uwsgi_buffers|uwsgi_busy_buffers_size|uwsgi_cache|uwsgi_cache_bypass|uwsgi_cache_key|uwsgi_cache_methods|uwsgi_cache_min_uses|uwsgi_cache_path|uwsgi_cache_use_stale|uwsgi_cache_valid|uwsgi_connect_timeout|uwsgi_hide_header|uwsgi_ignore_client_abort|uwsgi_ignore_headers|uwsgi_intercept_errors|uwsgi_max_temp_file_size|uwsgi_modifier1|uwsgi_modifier2|uwsgi_next_upstream|uwsgi_no_cache|uwsgi_param|uwsgi_pass|uwsgi_pass_header|uwsgi_pass_request_body|uwsgi_pass_request_headers|uwsgi_read_timeout|uwsgi_send_timeout|uwsgi_store|uwsgi_store_access|uwsgi_string|uwsgi_temp_file_write_size|uwsgi_temp_path)\\b',
      captures: {1: {name: 'keyword.directive.module.http.uwsgi.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b([a-zA-Z0-9\\_]+)\\s+',
      beginCaptures: {1: {name: 'keyword.directive.module.unsupported.nginx'}},
      end: '(;|$)',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b(stub_status)\\b',
      captures: {1: {name: 'keyword.directive.module.http.stub_status.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    },
    {
      begin: '\\b([a-z]+\\/[a-z0-9\\-\\.\\+]+)\\b',
      captures: {1: {name: 'keyword.directive.module.http.nginx'}},
      end: ';',
      name: 'punctuation.definition.variable',
      patterns: [{include: '#values'}]
    }
  ],
  repository: {
    values: {
      patterns: [
        {include: '#variables'},
        {
          captures: {
            1: {name: 'string.ipaddress.nginx'},
            2: {name: 'constant.numeric.cidr.nginx'}
          },
          match:
            '[\\t ]([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}|[0-9a-f:]+)(\\/[0-9]{2})?(?=[\\t ;])'
        },
        {
          captures: {1: {name: 'constant.numeric.nginx'}},
          match: '[\\t ](=?[0-9][0-9\\.]*[bBkKmMgGtTsShHdD]?)(?=[\\t ;])'
        },
        {
          match: '[\\t ](on|off|true|false)(?=[\\t ;])',
          name: 'constant.language.nginx'
        },
        {
          match:
            '[\\t ](kqueue|rtsig|epoll|\\/dev\\/poll|select|poll|eventport|max|all|default_server|default|main|crit|error|debug|warn|notice|last)(?=[\\t ;])',
          name: 'constant.language.nginx'
        },
        {
          match: '\\\\.*\\ |\\~\\*|\\~|\\!\\~\\*|\\!\\~',
          name: 'string.regexp.nginx'
        },
        {match: '\\^.*?\\$', name: 'string.regexp.nginx'},
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.nginx',
          patterns: [
            {match: '\\\\"', name: 'constant.character.escape.nginx'},
            {include: '#variables'}
          ]
        },
        {
          begin: "'",
          end: "'",
          name: 'string.quoted.single.nginx',
          patterns: [
            {match: "\\\\'", name: 'constant.character.escape.nginx'},
            {include: '#variables'}
          ]
        }
      ]
    },
    variables: {
      patterns: [
        {match: '(\\$[A-Za-z0-9\\_]+)\\b', name: 'variable.other.nginx'}
      ]
    }
  },
  scopeName: 'source.nginx'
}

export default grammar
