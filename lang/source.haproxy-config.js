// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.cfg'],
  names: ['haproxy'],
  patterns: [
    {
      captures: {
        2: {name: 'string.unquoted.sectionname.haproxy-config'},
        3: {name: 'variable.parameter.ip-port.haproxy-config'},
        5: {name: 'punctuation.separator.ip.haproxy-config'},
        6: {name: 'variable.parameter.ip-port.haproxy-config'}
      },
      match:
        '^(backend|cache|defaults|frontend|global|listen|mailers|peers|program|resolvers|ruleset|userlist)\\s*(\\S+)?\\s*((\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})?:\\d{1,5})?(,)?((\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})?:\\d{1,5})?',
      name: 'meta.tag.haproxy-config'
    },
    {match: '#.+$', name: 'comment.line.number-sign.haproxy-config'},
    {
      match: '(\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})?:\\d{1,5}',
      name: 'variable.parameter.ip-port.haproxy-config'
    },
    {
      match: '\\b[0-9]+([\\.:][0-9]+)*[a-z]?\\b',
      name: 'constant.numeric.haproxy-config'
    },
    {
      match:
        '^\\s*(acl|backlog|balance|bind|bind-process|compression|cookie|default-server|default_backend|description|disabled|dispatch|enabled|errorfile|errorloc|errorloc302|errorloc303|filter|force-persist|fullconn|grace|hash-type|http-request|http-response|http-reuse|http-send-name-header|id|ignore-persist|load-server-state-from-file|log|log-format|log-format-sd|log-tag|max-keep-alive-queue|maxconn|mode|monitor-net|monitor-uri|redirect|reqadd|reqallow|reqdel|reqdeny|reqiallow|reqidel|reqideny|reqipass|reqirep|reqitarpit|reqpass|reqrep|reqtarpit|retries|retry-on|rspadd|rspdel|rspdeny|rspidel|rspideny|rspirep|rsprep|server|server-state-file-name|server-template|source|stick-table|transparent|unique-id-format|unique-id-header|use-server|use_backend)\\b',
      name: 'keyword.other.no-validate-params.haproxy-config'
    },
    {
      match:
        '^\\s*(51degrees-cache-size|51degrees-data-file|51degrees-property-name-list|51degrees-property-separator|ca-base|chroot|cpu-map|crt-base|daemon|debug|description|deviceatlas-json-file|deviceatlas-log-level|deviceatlas-properties-cookie|deviceatlas-separator|external-check|gid|group|hard-stop-after|log|log-send-hostname|log-tag|lua-load|max-spread-checks|maxcompcpuusage|maxcomprate|maxconn|maxconnrate|maxpipes|maxsessrate|maxsslconn|maxsslrate|maxzlibmem|mworker-max-reloads|nbproc|nbthread|node|noepoll|noevports|nogetaddrinfo|nokqueue|nopoll|noreuseport|nosplice|pidfile|presetenv|profiling.tasks|quiet|resetenv|server-state-base|server-state-file|set-dumpable|setenv|spread-checks|ssl-default-bind-ciphers|ssl-default-bind-ciphersuites|ssl-default-bind-options|ssl-default-server-ciphers|ssl-default-server-ciphersuites|ssl-default-server-options|ssl-dh-param-file|ssl-engine|ssl-mode-async|ssl-server-verify|stats|tune.buffers.limit|tune.buffers.reserve|tune.bufsize|tune.chksize|tune.comp.maxlevel|tune.h2.header-table-size|tune.h2.initial-window-size|tune.h2.max-concurrent-streams|tune.http.cookielen|tune.http.logurilen|tune.http.maxhdr|tune.idletimer|tune.lua.forced-yield|tune.lua.maxmem|tune.lua.service-timeout|tune.lua.session-timeout|tune.lua.task-timeout|tune.maxaccept|tune.maxpollevents|tune.maxrewrite|tune.pattern.cache-size|tune.pipesize|tune.rcvbuf.client|tune.rcvbuf.server|tune.recv_enough|tune.runqueue-depth|tune.sndbuf.client|tune.sndbuf.server|tune.ssl.cachesize|tune.ssl.capture-cipherlist-size|tune.ssl.default-dh-param|tune.ssl.force-private-cache|tune.ssl.lifetime|tune.ssl.maxrecord|tune.ssl.ssl-ctx-cache-size|tune.vars.global-max-size|tune.vars.proc-max-size|tune.vars.reqres-max-size|tune.vars.sess-max-size|tune.vars.txn-max-size|tune.zlib.memlevel|tune.zlib.windowsize|uid|ulimit-n|unix-bind|unsetenv|user|wurfl-cache-size|wurfl-data-file|wurfl-information-list|wurfl-information-list-separator)\\b',
      name: 'keyword.other.no-validate-params.haproxy-config'
    },
    {
      match: '\\s+(group|user|userlist)(?=\\s+|$)',
      name: 'keyword.other.no-validate-params.haproxy-config'
    },
    {
      match: '\\s+(mailer|mailers|timeout)(?=\\s+|$)',
      name: 'keyword.other.no-validate-params.haproxy-config'
    },
    {
      match:
        '\\s+(bind|default-bind|default-server|disabled|enable|peer|peers|server|table)(?=\\s+|$)',
      name: 'keyword.other.no-validate-params.haproxy-config'
    },
    {
      match: '\\s+(command|no|option|program)(?=\\s+|$)',
      name: 'keyword.other.no-validate-params.haproxy-config'
    },
    {
      match:
        '\\s+(accepted_payload_size|hold|nameserver|parse-resolv-conf|resolve_retries|resolvers|timeout)(?=\\s+|$)',
      name: 'keyword.other.no-validate-params.haproxy-config'
    },
    {
      match: '\\s+(cache|total-max-size|max-object-size|max-age)(?=\\s+|$)',
      name: 'keyword.other.no-validate-params.haproxy-config'
    },
    {
      match: '\\s+(engine|config)(?=\\s+)',
      name: 'variable.language.reserved.haproxy-config'
    },
    {
      match: '\\s+(name|random-parsing|random-forwarding|hexdump)(?=\\s+)',
      name: 'variable.language.reserved.haproxy-config'
    },
    {
      match:
        '^\\s*(capture|declare|email-alert|external-check|http-check|monitor|option|persist|rate-limit|stats|stick|tcp-check|tcp-request|tcp-response|timeout)\\b',
      name: 'keyword.other.no-validate-params.haproxy-config'
    },
    {
      match:
        '\\s+(abortonclose|accept-invalid-http-request|accept-invalid-http-response|admin|allbackups|auth|capture|check|checkcache|client|client-fin|clitcpka|command|connect|connection|content|contstats|cookie|disable-on-404|dontlog-normal|dontlognull|enable|expect|external-check|fail|forwardfor|from|hide-version|http-buffer-request|http-ignore-probes|http-keep-alive|http-no-delay|http-pretend-keepalive|http-request|http-server-close|http-tunnel|http-use-htx|http-use-proxy-header|http_proxy|httpchk|httpclose|httplog|independent-streams|inspect-delay|ldap-check|level|log-health-checks|log-separate-errors|logasap|mailers|match|myhostname|mysql-check|nolinger|on|originalto|path|persist|pgsql-check|prefer-last-server|queue|rdp-cookie|realm|redis-check|redispatch|refresh|scope|send|send-binary|send-state|server|server-fin|session|sessions|show-desc|show-legends|show-node|smtpchk|socket-stats|splice-auto|splice-request|splice-response|spop-check|srvtcpka|ssl-hello-chk|store-request|store-response|tarpit|tcp-check|tcp-smart-accept|tcp-smart-connect|tcpka|tcplog|to|transparent|tunnel|uri)(?=\\s+|$)',
      name: 'variable.language.reserved.haproxy-config'
    },
    {
      match:
        '\\s+(accept-netscaler-cip|accept-proxy|allow-0rtt|alpn|backlog|ca-file|ca-ignore-err|ca-sign-file|ca-sign-pass|ciphers|ciphersuites|crl-file|crt|crt-ignore-err|crt-list|curves|defer-accept|ecdhe|expose-fd|force-sslv3|force-tlsv10|force-tlsv11|force-tlsv12|force-tlsv13|generate-certificates|gid|group|id|interface|level|maxconn|mode|mss|name|namespace|nice|no-ca-names|no-sslv3|no-tls-tickets|no-tlsv10|no-tlsv11|no-tlsv12|no-tlsv13|npn|prefer-client-ciphers|process|proto|severity-output|ssl|ssl-max-ver|ssl-min-ver|strict-sni|tcp-ut|tfo|tls-ticket-keys|transparent|uid|user|v4v6|v6only|verify)(?=\\s+|$)',
      name: 'variable.language.reserved.haproxy-config'
    },
    {
      match:
        '\\s+(addr|agent-addr|agent-check|agent-inter|agent-port|agent-send|allow-0rtt|alpn|backup|ca-file|check|check-alpn|check-send-proxy|check-sni|check-ssl|check-via-socks4|ciphers|ciphersuites|cookie|crl-file|crt|disabled|downinter|enabled|error-limit|fall|fastinter|force-sslv3|force-tlsv10|force-tlsv11|force-tlsv12|force-tlsv13|id|init-addr|inter|max-reuse|maxconn|maxqueue|minconn|namespace|no-agent-check|no-backup|no-check|no-check-ssl|no-send-proxy|no-send-proxy-v2|no-send-proxy-v2-ssl|no-send-proxy-v2-ssl-cn|no-ssl|no-ssl-reuse|no-sslv3|no-tls-tickets|no-tlsv10|no-tlsv11|no-tlsv12|no-tlsv13|no-verifyhost|non-stick|npn|observe|on-error|on-marked-down|on-marked-up|pool-max-conn|pool-purge-delay|port|proto|proxy-v2-options|redir|resolve-net|resolve-opts|resolve-prefer|resolvers|rise|send-proxy|send-proxy-v2|send-proxy-v2-ssl|send-proxy-v2-ssl-cn|slowstart|sni|socks4|source|ssl|ssl-max-ver|ssl-min-ver|ssl-reuse|stick|tcp-ut|tfo|tls-tickets|track|verify|verifyhost|weight)(?=\\s+|$)',
      name: 'variable.language.reserved.haproxy-config'
    },
    {
      match: '\\s+(type|size|expire|nopurge|peers|store)(?=\\s+)',
      name: 'variable.language.reserved.haproxy-config'
    },
    {
      match:
        '\\s+(add-acl|add-header|allow|auth|cache-use|capture|del-acl|del-header|del-map|deny|disable-l7-retry|do-resolve|early-hint|redirect|reject|replace-header|replace-uri|replace-value|sc-inc-gpc0|sc-inc-gpc1|sc-set-gpt0|send-spoe-group|set-dst|set-dst-port|set-header|set-log-level|set-map|set-mark|set-method|set-nice|set-path|set-priority-class|set-priority-offset|set-query|set-src|set-src-port|set-tos|set-uri|set-var|silent-drop|tarpit|track-sc0|track-sc1|track-sc2|unset-var|wait-for-handshake)(?=\\s+|$)',
      name: 'variable.language.reserved.haproxy-config'
    },
    {
      match:
        '\\s+(add-acl|add-header|allow|cache-store|capture|del-acl|del-header|del-map|deny|redirect|replace-header|replace-value|sc-inc-gpc0|sc-inc-gpc1|sc-set-gpt0|send-spoe-group|set-header|set-log-level|set-map|set-mark|set-nice|set-status|set-tos|set-var|silent-drop|track-sc0|track-sc1|track-sc2|unset-var)(?=\\s+|$)',
      name: 'variable.language.reserved.haproxy-config'
    },
    {
      match:
        '\\s+(roundrobin|static-rr|leastconn|first|url_param|health|global|httplog|except|kern|user|mail|daemon|auth|syslog|lpr|news|uucp|cron|auth2|ftp|ntp|audit|alert|cron2|local0|local1|local2|local3|local4|local5|local6|local7|emerg|crit|err|warning|notice|info|debug|rewrite|insert|nocache|postonly|indirect|prefix|location|scheme|code|request|response|header|check|cookie|weight|usesrc|http|tcp)(?=\\s+)',
      name: 'variable.language.reserved.extra.haproxy-config'
    },
    {match: '\\\\', name: 'constant.character.escape.haproxy-config'},
    {
      match:
        '\\s+(51d.single|add|aes_gcm_dec|and|b64dec|base64|bool|bytes|capture-req|capture-res|concat|cpl|crc32|crc32c|da-csv-conv|debug|div|djb2|even|field|hex|hex2i|http_date|in_table|ipmask|json|language|length|lower|ltime|map|map_<match_type>|map_<match_type>_<output_type>|mod|mul|nbsrv|neg|not|odd|or|protobuf|regsub|sdbm|set-var|sha1|sha2|strcmp|sub|table_bytes_in_rate|table_bytes_out_rate|table_conn_cnt|table_conn_cur|table_conn_rate|table_gpc0|table_gpc0_rate|table_gpc1|table_gpc1_rate|table_gpt0|table_http_err_cnt|table_http_err_rate|table_http_req_cnt|table_http_req_rate|table_kbytes_in|table_kbytes_out|table_server_id|table_sess_cnt|table_sess_rate|table_trackers|ungrpc|unset-var|upper|url_dec|utime|word|wt6|xor|xxh32|xxh64)(?=\\s+|$)',
      name: 'entity.name.function.hdr.haproxy-config'
    },
    {
      match:
        '\\s+(\\s+(always_false|always_true|avg_queue|be_conn|be_conn_free|be_sess_rate|bin|bool|connslots|cpu_calls|cpu_ns_avg|cpu_ns_tot|date|date_us|distcc_body|distcc_param|env|fe_conn|fe_req_rate|fe_sess_rate|hostname|int|ipv4|ipv6|lat_ns_avg|lat_ns_tot|meth|nbproc|nbsrv|prio_class|prio_offset|proc|queue|rand|srv_conn|srv_conn_free|srv_is_up|srv_queue|srv_sess_rate|stopping|str|table_avl|table_cnt|thread|var)(?=\\s+|$))\\b',
      name: 'variable.function.haproxy-config'
    },
    {
      match:
        '\\s+(\\s+(bc_http_major|be_id|be_name|dst|dst_conn|dst_is_local|dst_port|fc_fackets|fc_http_major|fc_lost|fc_rcvd_proxy|fc_reordering|fc_retrans|fc_rtt|fc_rttvar|fc_sacked|fc_unacked|fe_defbe|fe_id|fe_name|sc0_bytes_in_rate|sc0_bytes_out_rate|sc0_clr_gpc0|sc0_clr_gpc1|sc0_conn_cnt|sc0_conn_cur|sc0_conn_rate|sc0_get_gpc0|sc0_get_gpc1|sc0_get_gpt0|sc0_gpc0_rate|sc0_gpc1_rate|sc0_http_err_cnt|sc0_http_err_rate|sc0_http_req_cnt|sc0_http_req_rate|sc0_inc_gpc0|sc0_inc_gpc1|sc0_kbytes_in|sc0_kbytes_out|sc0_sess_cnt|sc0_sess_rate|sc0_tracked|sc0_trackers|sc1_bytes_in_rate|sc1_bytes_out_rate|sc1_clr_gpc0|sc1_clr_gpc1|sc1_conn_cnt|sc1_conn_cur|sc1_conn_rate|sc1_get_gpc0|sc1_get_gpc1|sc1_get_gpt0|sc1_gpc0_rate|sc1_gpc1_rate|sc1_http_err_cnt|sc1_http_err_rate|sc1_http_req_cnt|sc1_http_req_rate|sc1_inc_gpc0|sc1_inc_gpc1|sc1_kbytes_in|sc1_kbytes_out|sc1_sess_cnt|sc1_sess_rate|sc1_tracked|sc1_trackers|sc2_bytes_in_rate|sc2_bytes_out_rate|sc2_clr_gpc0|sc2_clr_gpc1|sc2_conn_cnt|sc2_conn_cur|sc2_conn_rate|sc2_get_gpc0|sc2_get_gpc1|sc2_get_gpt0|sc2_gpc0_rate|sc2_gpc1_rate|sc2_http_err_cnt|sc2_http_err_rate|sc2_http_req_cnt|sc2_http_req_rate|sc2_inc_gpc0|sc2_inc_gpc1|sc2_kbytes_in|sc2_kbytes_out|sc2_sess_cnt|sc2_sess_rate|sc2_tracked|sc2_trackers|sc_bytes_in_rate|sc_bytes_out_rate|sc_clr_gpc0|sc_clr_gpc1|sc_conn_cnt|sc_conn_cur|sc_conn_rate|sc_get_gpc0|sc_get_gpc1|sc_get_gpt0|sc_gpc0_rate|sc_gpc1_rate|sc_http_err_cnt|sc_http_err_rate|sc_http_req_cnt|sc_http_req_rate|sc_inc_gpc0|sc_inc_gpc1|sc_kbytes_in|sc_kbytes_out|sc_sess_cnt|sc_sess_rate|sc_tracked|sc_trackers|so_id|src|src_bytes_in_rate|src_bytes_out_rate|src_clr_gpc0|src_clr_gpc1|src_conn_cnt|src_conn_cur|src_conn_rate|src_get_gpc0|src_get_gpc1|src_get_gpt0|src_gpc0_rate|src_gpc1_rate|src_http_err_cnt|src_http_err_rate|src_http_req_cnt|src_http_req_rate|src_inc_gpc0|src_inc_gpc1|src_is_local|src_kbytes_in|src_kbytes_out|src_port|src_sess_cnt|src_sess_rate|src_updt_conn_cnt|srv_id)(?=\\s+|$))\\b',
      name: 'variable.function.haproxy-config'
    },
    {
      match:
        '\\s+(\\s+(51d.all|ssl_bc|ssl_bc_alg_keysize|ssl_bc_alpn|ssl_bc_cipher|ssl_bc_client_random|ssl_bc_is_resumed|ssl_bc_npn|ssl_bc_protocol|ssl_bc_server_random|ssl_bc_session_id|ssl_bc_session_key|ssl_bc_unique_id|ssl_bc_use_keysize|ssl_c_ca_err|ssl_c_ca_err_depth|ssl_c_der|ssl_c_err|ssl_c_i_dn|ssl_c_key_alg|ssl_c_notafter|ssl_c_notbefore|ssl_c_s_dn|ssl_c_serial|ssl_c_sha1|ssl_c_sig_alg|ssl_c_used|ssl_c_verify|ssl_c_version|ssl_f_der|ssl_f_i_dn|ssl_f_key_alg|ssl_f_notafter|ssl_f_notbefore|ssl_f_s_dn|ssl_f_serial|ssl_f_sha1|ssl_f_sig_alg|ssl_f_version|ssl_fc|ssl_fc_alg_keysize|ssl_fc_alpn|ssl_fc_cipher|ssl_fc_cipherlist_bin|ssl_fc_cipherlist_hex|ssl_fc_cipherlist_str|ssl_fc_cipherlist_xxh|ssl_fc_client_random|ssl_fc_has_crt|ssl_fc_has_early|ssl_fc_has_sni|ssl_fc_is_resumed|ssl_fc_npn|ssl_fc_protocol|ssl_fc_server_random|ssl_fc_session_id|ssl_fc_session_key|ssl_fc_sni|ssl_fc_unique_id|ssl_fc_use_keysize)(?=\\s+|$))\\b',
      name: 'variable.function.haproxy-config'
    },
    {
      match:
        '\\s+(\\s+(payload|payload_lv|rdp_cookie|rdp_cookie_cnt|rep_ssl_hello_type|req.hdrs|req.hdrs_bin|req.len|req.payload|req.payload_lv|req.proto_http|req.rdp_cookie|req.rdp_cookie_cnt|req.ssl_alpn|req.ssl_ec_ext|req.ssl_hello_type|req.ssl_sni|req.ssl_st_ext|req.ssl_ver|req_len|req_proto_http|req_ssl_hello_type|req_ssl_sni|req_ssl_ver|res.len|res.payload|res.payload_lv|res.ssl_hello_type|wait_end)(?=\\s+|$))\\b',
      name: 'variable.function.haproxy-config'
    },
    {
      match:
        '\\s+(\\s+(base|base32|base32+src|capture.req.hdr|capture.req.method|capture.req.uri|capture.req.ver|capture.res.hdr|capture.res.ver|cook|cook_cnt|cook_val|cookie|hdr|hdr_cnt|hdr_ip|hdr_val|http_auth|http_auth_group|http_first_req|method|path|query|req.body|req.body_len|req.body_param|req.body_size|req.cook|req.cook_cnt|req.cook_val|req.fhdr|req.fhdr_cnt|req.hdr|req.hdr_cnt|req.hdr_ip|req.hdr_names|req.hdr_val|req.ver|req_ver|res.comp|res.comp_algo|res.cook|res.cook_cnt|res.cook_val|res.fhdr|res.fhdr_cnt|res.hdr|res.hdr_cnt|res.hdr_ip|res.hdr_names|res.hdr_val|res.ver|resp_ver|scook|scook_cnt|scook_val|set-cookie|shdr|shdr_cnt|shdr_ip|shdr_val|status|unique-id|url|url32|url32+src|url_ip|url_param|url_port|urlp|urlp_val)(?=\\s+|$))\\b',
      name: 'variable.function.haproxy-config'
    },
    {
      match: '\\b(if|unless)\\b',
      name: 'keyword.control.conditional.haproxy-config'
    },
    {
      match: '\\s+(engine|config)(?=\\s+)',
      name: 'variable.language.reserved.haproxy-config'
    },
    {match: '%\\[[^\\]]+\\]', name: 'variable.language.other.haproxy-config'},
    {
      match: '\\s+(or|\\|\\||!)\\s+',
      name: 'keyword.operator.word.haproxy-config'
    }
  ],
  scopeName: 'source.haproxy-config'
}

export default grammar
