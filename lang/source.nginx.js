// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/william-voyek/vscode-nginx>
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
    {include: '#keywords'},
    {include: '#strings'},
    {match: '^(\\s)*(#).*$\\n?', name: 'comment'},
    {
      match: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b',
      name: 'constant.numeric'
    },
    {match: '\\b\\d+\\w+\\b', name: 'constant.numeric'},
    {match: '\\{|\\}', name: 'constant.character.brace'},
    {match: '\\;', name: 'constant.character.end'},
    {match: '\\(|\\)', name: 'constant.character.paren'},
    {match: '\\"', name: 'constant.character.quote'},
    {match: '\\\\.*\\ |\\~|\\~\\*|\\!\\~|\\!\\~\\*', name: 'string.regexp'},
    {match: '\\"(.*)\\"', name: 'string.quoted'},
    {match: "\\'(.*)\\'", name: 'string.quoted'},
    {match: '\\b(events)\\b', name: 'constant.language.module.events'},
    {match: '\\b^(http)\\b', name: 'constant.language.module.http'},
    {match: '\\$\\w+', name: 'variable'},
    {
      match:
        '\\b(accept_mutex|accept_mutex_delay|daemon|debug_connection|debug_points|env|error_log|events|include|kqueue_changes|kqueue_events|load_module|lock_file|master_process|multi_accept|optimize_server_names|pcre_jit|pid|ssl_engine|thread_pool|timer_resolution|use|user|worker_aio_requests|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_shutdown_timeout|working_directory)\\b',
      name: 'constant.language.module.core'
    },
    {
      match: '\\b(google_perftools_profiles)\\b',
      name: 'constant.language.module.google.perftools'
    },
    {match: '\\b(allow|deny)\\b', name: 'constant.language.module.http.access'},
    {
      match: '\\b(add_before_body|add_after_body|addition_types)\\b',
      name: 'constant.language.module.http.addition'
    },
    {
      match: '\\b(auth_basic|auth_basic_user_file)\\b',
      name: 'constant.language.module.http.auth_basic'
    },
    {
      match:
        '\\b(auth_jwt|auth_jwt_claim_set|auth_jwt_header_set|auth_jwt_key_file|auth_jwt_key_request|auth_jwt_leeway)\\b',
      name: 'constant.language.module.http.auth_jwt'
    },
    {
      match: '\\b(auth_request|auth_request_set)\\b',
      name: 'constant.language.module.http.auth_request'
    },
    {
      match:
        '\\b(autoindex|autoindex_exact_size|autoindex_format|autoindex_localtime)\\b',
      name: 'constant.language.module.http.autoindex'
    },
    {
      match:
        '\\b(ancient_browser|ancient_browser_value|modern_browser|modern_browser_value)\\b',
      name: 'constant.language.module.http.browser'
    },
    {
      match:
        '\\b(charset|charset_map|charset_types|override_charset|source_charset)\\b',
      name: 'constant.language.module.http.charset'
    },
    {
      match:
        '\\b(absolute_redirect|aio|aio_write|alias|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|default_type|directio|directio_alignment|disable_symlinks|error_page|etag|http|if_modified_since|ignore_invalid_headers|internal|keepalive_disable|keepalive_requests|keepalive_timeout|large_client_header_buffers|limit_except|limit_rate|limit_rate_after|lingering_close|lingering_time|lingering_timeout|listen|location|log_not_found|log_subrequest|max_ranges|merge_slashes|msie_padding|msie_refresh|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|output_buffers|port_in_redirect|postpone_output|read_ahead|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|root|satisfy|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|subrequest_output_buffer_size|tcp_nodelay|tcp_nopush|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|variables_hash_bucket_size|variables_hash_max_size)\\b',
      name: 'constant.language.module.http.core'
    },
    {
      match:
        '\\b(create_full_put_path|dav_access|dav_methods|min_delete_depth)\\b',
      name: 'constant.language.module.http.dav'
    },
    {
      match: '\\b(empty_gif)\\b',
      name: 'constant.language.module.http.empty_gif'
    },
    {
      match: '\\b(f4f|f4f_buffer_size)\\b',
      name: 'constant.language.module.http.f4f'
    },
    {
      match:
        '\\b(fastcgi_bind|fastcgi_buffer_size|fastcgi_buffering|fastcgi_buffers|fastcgi_buffers_size|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_background_update|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_age|fastcgi_cache_lock_timeout|fastcgi_cache_max_range_offset|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_revalidate|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_catch_stderr|fastcgi_connect_timeout|fastcgi_force_ranges|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_limit_rate|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_next_upstream_timeout|fastcgi_next_upstream_tries|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_pass_request_body|fastcgi_pass_request_headers|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_request_buffering|fastcgi_send_lowat|fastcgi_send_timeout|fastcgi_socket_keepalive|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path)\\b',
      name: 'constant.language.module.http.fastcgi'
    },
    {match: '\\b(flv)\\b', name: 'constant.language.module.http.flv'},
    {
      match:
        '\\b(geoip_country|geoip_city|geoip_org|geoip_proxy|geoip_proxy_recursive)\\b',
      name: 'constant.language.module.http.geoip'
    },
    {match: '\\b(geo)\\b', name: 'constant.language.module.http.geo'},
    {
      match:
        '\\b(grpc_bind|grpc_buffer_size|grpc_connect_timeout|grpc_hide_header|grpc_ignore_headers|grpc_intercept_errors|grpc_next_upstream|grpc_next_upstream_timeout|grpc_next_upstream_tries|grpc_pass|grpc_pass_header|grpc_read_timeout|grpc_send_timeout|grpc_set_header|grpc_socket_keepalive|grpc_ssl_certificate|grpc_ssl_certificate_key|grpc_ssl_ciphers|grpc_ssl_crl|grpc_ssl_name|grpc_ssl_password_file|grpc_ssl_protocols|grpc_ssl_server_name|grpc_ssl_session_reuse|grpc_ssl_trusted_certificate|grpc_ssl_verify|grpc_ssl_verify_depth)\\b',
      name: 'constant.language.module.http.grpc'
    },
    {
      match: '\\b(gunzip|gunzip_buffers)\\b',
      name: 'constant.language.module.http.gunzip'
    },
    {
      match:
        '\\b(gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_types|gzip_vary)\\b',
      name: 'constant.language.module.http.gzip'
    },
    {
      match: '\\b(gzip_static)\\b',
      name: 'constant.language.module.http.gzip_static'
    },
    {
      match: '\\b(add_header|add_trailer|expires)\\b',
      name: 'constant.language.module.http.headers'
    },
    {
      match:
        '\\b(hls|hls_buffers|hls_forward_args|hls_fragment|hls_mp4_buffer_size|hls_mp4_max_buffer_size)\\b',
      name: 'constant.language.module.http.hls'
    },
    {
      match:
        '\\b(image_filter|image_filter_buffer|image_filter_interlace|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|image_filter_webp_quality)\\b',
      name: 'constant.language.module.http.image_filter'
    },
    {match: '\\b(index)\\b', name: 'constant.language.module.http.index'},
    {
      match: '\\b(js_content|js_include|js_set)\\b',
      name: 'constant.language.module.http.js'
    },
    {
      match: '\\b(keyval|keyval_zone)\\b',
      name: 'constant.language.module.http.keyval'
    },
    {
      match:
        '\\b(limit_conn|limit_conn_log_level|limit_conn_status|limit_conn_zone|limit_zone)\\b',
      name: 'constant.language.module.http.limit_conn'
    },
    {
      match:
        '\\b(limit_req|limit_req_log_level|limit_req_status|limit_req_zone)\\b',
      name: 'constant.language.module.http.limit_req'
    },
    {
      match: '\\b(access_log|log_format|open_log_file_cache)\\b',
      name: 'constant.language.module.http.log'
    },
    {
      match: '\\b(map|map_hash_bucket_size|map_hash_max_size)\\b',
      name: 'constant.language.module.http.map'
    },
    {
      match:
        '\\b(memcached_bind|memcached_buffer_size|memcached_connect_timeout|memcached_force_ranges|memcached_gzip_flag|memcached_next_upstream|memcached_next_upstream_timeout|memcached_next_upstream_tries|memcached_pass|memcached_read_timeout|memcached_send_timeout|memcached_socket_keepalive)\\b',
      name: 'constant.language.module.http.memcached'
    },
    {
      match: '\\b(mirror|mirror_request_body)\\b',
      name: 'constant.language.module.http.mirror'
    },
    {
      match:
        '\\b(mp4|mp4_buffer_size|mp4_max_buffer_size|mp4_limit_rate|mp4_limit_rate_after)\\b',
      name: 'constant.language.module.http.mp4'
    },
    {
      match: '\\b(perl|perl_modules|perl_require|perl_set)\\b',
      name: 'constant.language.module.http.perl'
    },
    {
      match:
        '\\b(proxy_bind|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_background_update|proxy_cache_bypass|proxy_cache_convert_head|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_age|proxy_cache_lock_timeout|proxy_cache_max_range_offset|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_purge|proxy_cache_revalidate|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_force_ranges|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_limit_rate|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_next_upstream_timeout|proxy_next_upstream_tries|proxy_no_cache|proxy_pass|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_request_buffering|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_socket_keepalive|proxy_ssl_certificate|proxy_ssl_certificate_key|proxy_ssl_ciphers|proxy_ssl_crl|proxy_ssl_name|proxy_ssl_password_file|proxy_ssl_protocols|proxy_ssl_server_name|proxy_ssl_session_reuse|proxy_ssl_trusted_certificate|proxy_ssl_verify|proxy_ssl_verify_depth|proxy_store|proxy_store_access|proxy_t|proxy_temp_file_write_size|proxy_temp_path|proxy_upstream_max_fails)\\b',
      name: 'constant.language.module.http.proxy'
    },
    {
      match: '\\b(random_index)\\b',
      name: 'constant.language.module.http.random_index'
    },
    {
      match: '\\b(set_real_ip_from|real_ip_header|real_ip_recursive)\\b',
      name: 'constant.language.module.http.realip'
    },
    {
      match:
        '\\b(referer_hash_bucket_size|referer_hash_max_size|valid_referers)\\b',
      name: 'constant.language.module.http.referer'
    },
    {
      match:
        '\\b(break|if|return|rewrite|rewrite_log|set|uninitialized_variable_warn)\\b',
      name: 'constant.language.module.http.rewrite'
    },
    {
      match:
        '\\b(scgi_bind|scgi_buffer_size|scgi_buffering|scgi_buffers|scgi_busy_buffers_size|scgi_cache|scgi_cache_background_update|scgi_cache_bypass|scgi_cache_key|scgi_cache_lock|scgi_cache_lock_age|scgi_cache_lock_timeout|scgi_cache_max_range_offset|scgi_cache_methods|scgi_cache_min_uses|scgi_cache_path|scgi_cache_purge|scgi_cache_revalidate|scgi_cache_use_stale|scgi_cache_valid|scgi_connect_timeout|scgi_force_ranges|scgi_hide_header|scgi_ignore_client_abort|scgi_ignore_headers|scgi_intercept_errors|scgi_limit_rate|scgi_max_temp_file_size|scgi_next_upstream|scgi_next_upstream_timeout|scgi_next_upstream_tries|scgi_no_cache|scgi_param|scgi_pass|scgi_pass_header|scgi_pass_request_body|scgi_pass_request_headers|scgi_read_timeout|scgi_request_buffering|scgi_send_timeout|scgi_socket_keepalive|scgi_store|scgi_store_access|scgi_temp_file_write_size|scgi_temp_path)\\b',
      name: 'constant.language.module.http.scgi'
    },
    {
      match: '\\b(secure_link|secure_link_md5|secure_link_secret)\\b',
      name: 'constant.language.module.http.secure_link'
    },
    {
      match: '\\b(session_log|session_log_format|session_log_zone)\\b',
      name: 'constant.language.module.http.session_log'
    },
    {match: '\\b(slice)\\b', name: 'constant.language.module.http.slice'},
    {
      match: '\\b(spdy_chunk_size|spdy_headers_comp)\\b',
      name: 'constant.language.module.http.spdy'
    },
    {
      match: '\\b(split_clients)\\b',
      name: 'constant.language.module.http.split_clients'
    },
    {
      match:
        '\\b(ssi|ssi_last_modified|ssi_min_file_chunk|ssi_silent_errors|ssi_types|ssi_value_length)\\b',
      name: 'constant.language.module.http.ssi'
    },
    {
      match:
        '\\b(ssl|ssl_buffer_size|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_early_data|ssl_ecdh_curve|ssl_password_file|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_ticket_key|ssl_session_tickets|ssl_session_timeout|ssl_stapling|ssl_stapling_file|ssl_stapling_responder|ssl_stapling_verify|ssl_trusted_certificate|ssl_verify_client|ssl_verify_depth)\\b',
      name: 'constant.language.module.http.ssl'
    },
    {
      match: '\\b(status|status_format|status_zone)\\b',
      name: 'constant.language.module.http.status'
    },
    {
      match: '\\b(stub_status)\\b',
      name: 'constant.language.module.http.stub_status'
    },
    {
      match:
        '\\b(sub_filter|sub_filter_last_modified|sub_filter_once|sub_filter_types)\\b',
      name: 'constant.language.module.http.sub'
    },
    {
      match: '\\b(upstream_conf)\\b',
      name: 'constant.language.module.http.upstream_conf'
    },
    {
      match: '\\b(health_check|match)\\b',
      name: 'constant.language.module.http.upstream_hc'
    },
    {
      match:
        '\\b(upstream|server|zone|state|hash|ip_hash|keepalive|keepalive_requests|keepalive_timeout|ntlm|least_conn|least_time|queue|random|sticky|sticky_cookie_insert)\\b',
      name: 'constant.language.module.http.upstream'
    },
    {
      match:
        '\\b(userid|userid_domain|userid_expires|userid_mark|userid_name|userid_p3p|userid_path|userid_service)\\b',
      name: 'constant.language.module.http.userid'
    },
    {
      match:
        '\\b(uwsgi_bind|uwsgi_buffer_size|uwsgi_buffering|uwsgi_buffers|uwsgi_busy_buffers_size|uwsgi_cache|uwsgi_cache_background_update|uwsgi_cache_bypass|uwsgi_cache_key|uwsgi_cache_lock|uwsgi_cache_lock_age|uwsgi_cache_lock_timeout|uwsgi_cache_max_range_offset|uwsgi_cache_methods|uwsgi_cache_min_uses|uwsgi_cache_path|uwsgi_cache_purge|uwsgi_cache_revalidate|uwsgi_cache_use_stale|uwsgi_cache_valid|uwsgi_connect_timeout|uwsgi_force_ranges|uwsgi_hide_header|uwsgi_ignore_client_abort|uwsgi_ignore_headers|uwsgi_intercept_errors|uwsgi_limit_rate|uwsgi_max_temp_file_size|uwsgi_modifier1|uwsgi_modifier2|uwsgi_next_upstream|uwsgi_next_upstream_timeout|uwsgi_next_upstream_tries|uwsgi_no_cache|uwsgi_param|uwsgi_pass|uwsgi_pass_header|uwsgi_pass_request_body|uwsgi_pass_request_headers|uwsgi_read_timeout|uwsgi_request_buffering|uwsgi_send_timeout|uwsgi_socket_keepalive|uwsgi_ssl_certificate|uwsgi_ssl_certificate_key|uwsgi_ssl_ciphers|uwsgi_ssl_crl|uwsgi_ssl_name|uwsgi_ssl_password_file|uwsgi_ssl_protocols|uwsgi_ssl_server_name|uwsgi_ssl_session_reuse|uwsgi_ssl_trusted_certificate|uwsgi_ssl_verify|uwsgi_ssl_verify_depth|uwsgi_store|uwsgi_store_access|uwsgi_temp_file_write_size|uwsgi_temp_path)\\b',
      name: 'constant.language.module.http.uwsgi'
    },
    {
      match:
        '\\b(http2_body_preread_size|http2_chunk_size|http2_idle_timeout|http2_max_concurrent_pushes|http2_max_concurrent_streams|http2_max_field_size|http2_max_header_size|http2_max_requests|http2_push|http2_push_preload|http2_recv_buffer_size|http2_recv_timeout)\\b',
      name: 'constant.language.module.http.v2'
    },
    {
      match:
        '\\b(xml_entities|xslt_last_modified|xslt_param|xslt_string_param|xslt_stylesheet|xslt_types)\\b',
      name: 'constant.language.module.http.xslt'
    },
    {
      match:
        '\\b(auth_http|auth_http_header|auth_http_pass_client_cert|auth_http_timeout)\\b',
      name: 'constant.language.module.mail.auth_http'
    },
    {
      match:
        '\\b(listen|mail|protocol|resolver|resolver_timeout|server|server_name|timeout)\\b',
      name: 'constant.language.module.mail.core'
    },
    {
      match: '\\b(imap_auth|imap_capabilities|imap_client_buffer)\\b',
      name: 'constant.language.module.mail.imap'
    },
    {
      match: '\\b(pop3_auth|pop3_capabilities)\\b',
      name: 'constant.language.module.mail.pop3'
    },
    {
      match:
        '\\b(proxy_buffer|proxy_pass_error_message|proxy_timeout|xclient)\\b',
      name: 'constant.language.module.mail.proxy'
    },
    {
      match:
        '\\b(smtp_auth|smtp_capabilities|smtp_client_buffer|smtp_greeting_delay)\\b',
      name: 'constant.language.module.mail.smtp'
    },
    {
      match:
        '\\b(ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_ecdh_curve|ssl_password_file|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_ticket_key|ssl_session_tickets|ssl_session_timeout|ssl_trusted_certificate|ssl_verify_client|ssl_verify_depth|starttls)\\b',
      name: 'constant.language.module.mail.ssl'
    },
    {
      match: '\\b(allow|deny)\\b',
      name: 'constant.language.module.stream.access'
    },
    {
      match:
        '\\b(listen|preread_buffer_size|preread_timeout|proxy_protocol_timeout|resolver|resolver_timeout|server|stream|tcp_nodelay|variables_hash_bucket_size|variables_hash_max_size)\\b',
      name: 'constant.language.module.stream.core'
    },
    {
      match: '\\b(geoip_country|geoip_city|geoip_org)\\b',
      name: 'constant.language.module.stream.geoip'
    },
    {match: '\\b(geo)\\b', name: 'constant.language.module.stream.geo'},
    {
      match: '\\b(js_access|js_filter|js_include|js_preread|js_set)\\b',
      name: 'constant.language.module.stream.js'
    },
    {
      match: '\\b(keyval|keyval_zone)\\b',
      name: 'constant.language.module.stream.keyval'
    },
    {
      match: '\\b(limit_conn|limit_conn_log_level|limit_conn_zone)\\b',
      name: 'constant.language.module.stream.limit_conn'
    },
    {
      match: '\\b(access_log|log_format|open_log_file_cache)\\b',
      name: 'constant.language.module.stream.log'
    },
    {
      match: '\\b(map|map_hash_bucket_size|map_hash_max_size)\\b',
      name: 'constant.language.module.stream.map'
    },
    {
      match:
        '\\b(proxy_bind|proxy_buffer_size|proxy_connect_timeout|proxy_download_rate|proxy_next_upstream|proxy_next_upstream_timeout|proxy_next_upstream_tries|proxy_pass|proxy_protocol|proxy_requests|proxy_responses|proxy_socket_keepalive|proxy_ssl|proxy_ssl_certificate|proxy_ssl_certificate_key|proxy_ssl_ciphers|proxy_ssl_crl|proxy_ssl_name|proxy_ssl_password_file|proxy_ssl_protocols|proxy_ssl_server_name|proxy_ssl_session_reuse|proxy_ssl_trusted_certificate|proxy_ssl_verify|proxy_ssl_verify_depth|proxy_timeout|proxy_upload_rate)\\b',
      name: 'constant.language.module.stream.proxy'
    },
    {
      match: '\\b(set_real_ip_from)\\b',
      name: 'constant.language.module.stream.realip'
    },
    {match: '\\b(return)\\b', name: 'constant.language.module.stream.return'},
    {
      match: '\\b(split_clients)\\b',
      name: 'constant.language.module.stream.split_clients'
    },
    {
      match:
        '\\b(ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_ecdh_curve|ssl_handshake_timeout|ssl_password_file|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_ticket_key|ssl_session_tickets|ssl_session_timeout|ssl_trusted_certificate|ssl_verify_client|ssl_verify_depth)\\b',
      name: 'constant.language.module.stream.ssl'
    },
    {
      match: '\\b(ssl_preread)\\b',
      name: 'constant.language.module.stream.ssl_preread'
    },
    {
      match: '\\b(health_check|health_check_timeout|match)\\b',
      name: 'constant.language.module.stream.upstream_hc'
    },
    {
      match:
        '\\b(upstream|server|zone|state|hash|least_conn|least_time|random)\\b',
      name: 'constant.language.module.stream.upstream'
    },
    {
      match:
        '\\b(zone_sync|zone_sync_buffers|zone_sync_connect_retry_interval|zone_sync_connect_timeout|zone_sync_interval|zone_sync_recv_buffer_size|zone_sync_server|zone_sync_ssl|zone_sync_ssl_certificate|zone_sync_ssl_certificate_key|zone_sync_ssl_ciphers|zone_sync_ssl_crl|zone_sync_ssl_name|zone_sync_ssl_password_file|zone_sync_ssl_protocols|zone_sync_ssl_server_name|zone_sync_ssl_trusted_certificate|zone_sync_ssl_verify|zone_sync_ssl_verify_depth|zone_sync_timeout)\\b',
      name: 'constant.language.module.stream.zone_sync'
    }
  ],
  repository: {
    keywords: {
      patterns: [
        {match: '\\b(if|while|for|return)\\b', name: 'keyword.control.nginx'}
      ]
    },
    strings: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.nginx',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.nginx'}]
    }
  },
  scopeName: 'source.nginx'
}

export default grammar
