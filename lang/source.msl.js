// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/gen-angry/language-msl>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.mrc'],
  names: ['mirc-script'],
  patterns: [
    {include: '#comments'},
    {include: '#group'},
    {include: '#alias'},
    {include: '#menu'},
    {include: '#events'},
    {include: '#dialog'}
  ],
  repository: {
    alias: {
      patterns: [
        {
          begin: '(?i)^(alias)\\x20+(?:(-l)\\x20+)?(?!-l)([^\\s]+)\\s*',
          beginCaptures: {
            1: {name: 'storage.type.alias.msl'},
            2: {name: 'storage.modifier.alias.msl'},
            3: {name: 'entity.name.function.msl'}
          },
          end: '(?i)(?=\\z|(?:^(?:on|raw|ctcp|dialog|\\#[^\\s]+|alias|menu)\\b))|(?<=}$)',
          name: 'meta.alias.code.msl',
          patterns: [{include: '#code_content'}]
        }
      ]
    },
    calc_content: {
      patterns: [
        {match: '[+\\-*/%^]', name: 'keyword.operator.arithmetic.msl'},
        {
          begin: '\\(',
          end: '\\)',
          name: 'meta.arithmetic.msl',
          patterns: [{include: '#parameters'}, {include: '#calc_content'}]
        }
      ]
    },
    code_block: {
      patterns: [
        {
          begin: '{',
          end: '}',
          name: 'meta.code.block.msl',
          patterns: [{include: '#code_content'}]
        }
      ]
    },
    code_content: {
      patterns: [
        {include: '#comments'},
        {include: '#variables'},
        {include: '#identifiers'},
        {include: '#conditionals'},
        {include: '#commands'},
        {include: '#code_block'}
      ]
    },
    commands: {
      patterns: [
        {
          begin:
            '(?i)(?:\\x20+\\|\\x20+|(?<=else\\x20)|^\\x20*|\\)|\\G)\\x20*(\\/+)?([!|.]{1,2})?((?:win)?help|server|disconnect|/donotdisturb|join|hop|part|part(?:all)?|quit|list|links|quote|raw|(?:a|q)?me|(?:a|q|o|v|priv)?msg|action|(?:o|v)?notice|describe|query|sound|ctcp|dcc|wall(?:chops|voices)|uwho|sock(?:accept|close|list|listen|mark|open|pause|read|rename|udp|write)|b(?:read|replace|copy|set|trunc|unset|write)|com(?:close|list|open|reg)|dialog|did(?:tok)?|draw(?:copy|dot|fill|line|pic|rect|replace|rot|save|scroll|size|text)|f(?:open|list|seek|write|close)|(?:a|c|d|i|r|s)line|clear(?:all|ial)?|window|g(?:hide|(?:un)?load|move|opts|play|point|qreq|show|size|stop|talk)|h(?:add|dec|del|free|inc|load|make|save)|break|continue|goto|halt(?:def)?|return(?:ex)?|dec|inc|set|var|unset(?:all)|dec|inc|set|var|unset(?:all)?|(?:a|g|i|r)user|(?:d|r)level|ulist|flush|ial(?:clear|mark|fill)?|copy|flushini|(?:mk|rm)dir|rem(?:ini|ove)|rename|write(?:ini)?|aop|avoice|ban|channel|ignore|leave|mode|parseline|pop|protect|pvoice|say|updatenl|abook|ajinvite|alias|(?:a|c|m|t)nick|auto(?:join)?|background|beep|bindip|clipboard|colou?r|creq|ctcp(?:reply|s)|dccserver|dde(?:server)?|debug|disable|dll|dns|dqwindow|ebeeps|exit|echo|editbox|emailaddr|enable|events|filter|findtext|finger|firewall|flash|flood|fnord|font|fsend|fserve|fullname|fupdate|groups|hotlink|identd|linesep|load(?:buf)?|localinfo|log(?:view)?|mdi|menubar|noop|notify|pdcc|perform|play(?:ctrl)?|proxy|queryrn|registration|reload|remote|renwin|reset(?:error|idle)|run|save(?:buf|ini)?|scid|scon|setlayer|showmirc|signal|speak|splay|sreq|strip|switchbar|time(?:stamp|rs|r([^\\s]+)?)|tips?|titlebar|tokenize|toolbar|tray|treebar|unload|url|vc(?:add|md|rem)|vol|xyzzy|away|close(?:msg)?|username|aclear|advertise|allnick|autoconnect|aquit|back|banlist|betaup|bin2txt|bw|channels|charset|config|cycleall|de(?:halfop|s?op|voice)|dock(?:panels)?|download|echo(?:monitor|x)|edit|encoding|fakeraw|fget|fullscreen|gcmem|globalkeys|p?google|halfop|highlight|icon|inick|inlineimage|kblayout|lag|linemarker|lock|logs|msgbox|mute|nextunread|nick(?:column|list)|nmsg|np|oline|options|paths|pause|plugins|priv|quick(?:connect|save)|raw(?:log|x)|re(?:alname|connect|freshsong|join|solve|start)|scripts|scrolltext|search|sendkeys|serverlist|set(?:config|option)|show(?:adiirc|menu)|slap|sleep|sop|statusbar|tab|themes|topicbox|usernick|txt2bin|un(?:ban|ignore|notify)|update|vars|viewlog|voice|w(?:down|jump|next|pause|play))(?=\\b)',
          beginCaptures: {
            1: {name: 'keyword.other.command.symbol.msl'},
            2: {name: 'keyword.other.command.symbol.msl'},
            3: {name: 'keyword.control.command.msl'},
            4: {name: 'support.variable.name.msl'}
          },
          end: '(?=\\z|\\x20+\\|\\x20+[^\\x20]|\\x20}|$)',
          patterns: [{include: '#switches'}, {include: '#parameters'}]
        },
        {
          begin:
            '(?i)(?:\\x20+\\|\\x20+|(?<=else\\x20)|^\\x20*|\\)|\\G)\\x20*(?!\\|\\|\\x20)(\\/+)?([!|.]{1,2})?(?:(?![{};%&$:]|if|else(?:if)?|while)([^\\s]+))',
          beginCaptures: {
            1: {name: 'keyword.other.command.symbol.msl'},
            2: {name: 'keyword.other.command.symbol.msl'},
            3: {name: 'support.function.name.msl'}
          },
          end: '(?=\\z|\\x20\\|\\x20[^\\x20]|\\x20}|$)',
          name: 'meta.cmd.msl',
          patterns: [{include: '#switches'}, {include: '#parameters'}]
        }
      ]
    },
    comment_block: {
      patterns: [
        {
          begin: '^(?:\\x20*)\\/\\*',
          end: '^(?:\\x20*)\\*\\/$',
          name: 'comment.block.msl'
        }
      ]
    },
    comment_documentation: {
      patterns: [
        {
          begin: '^(?:\\x20*)(\\/\\*\\*)$',
          end: '^(?:\\x20*)\\*\\/$',
          name: 'comment.block.documentation.msl',
          patterns: [{include: '#documentation_block'}]
        }
      ]
    },
    comment_line: {
      patterns: [
        {match: '^(?:\\x20*);.*$', name: 'comment.line.semicolon.msl'},
        {
          begin: '(?<=^|\\x20\\|\\x20|\\G)(?:\\x20*);',
          end: '(?=\\z|\\x20+\\|\\x20+[^\\s]|\\x20}|$)',
          name: 'comment.line.semicolon.msl'
        }
      ]
    },
    comments: {
      patterns: [
        {include: '#comment_documentation'},
        {include: '#comment_block'},
        {include: '#comment_line'}
      ]
    },
    conditionals: {
      patterns: [
        {
          begin:
            '(?i)(?:(?<=\\x20\\|\\x20|^|\\G)\\x20*(if|elseif|while)|(?:(?<=\\))\\x20+(&&|\\|\\|)))\\x20+(?=\\()',
          beginCaptures: {
            1: {name: 'keyword.control.conditional.msl'},
            2: {name: 'keyword.control.conditional.msl'}
          },
          end: '(?=\\)(?:\\x20|$))',
          name: 'meta.conditional.msl',
          patterns: [
            {include: '#conditionals_content'},
            {include: '#parameters'}
          ]
        },
        {
          match: '(?i)(?<=\\x20\\|\\x20|^)\\x20*(else)\\b',
          name: 'keyword.control.conditional.msl'
        }
      ]
    },
    conditionals_content: {
      patterns: [
        {
          match:
            '(?i)((?<=\\x20)!?(?:==?=?|(?:<|>)=?|\\/\\/|\\\\|&|is(?:in(?:cs)?|wm(?:cs)?|(?:al)?num|letter|alpha|(?:low|upp)er|on|(?:a|h)?op|a?voice|reg|chan|ban|quiet|ignore|protected|notify|admin|owner|quiet|url))(?=\\x20|\\))|(?<=\\()!(?=\\$|%|&))',
          name: 'keyword.operator.msl'
        },
        {include: '#constants'}
      ]
    },
    constants: {
      patterns: [
        {
          match: '(?<=\\x20|^|\\(|,)-?\\d+(\\.\\d+)?(?=\\x20|$|\\)|,)',
          name: 'constant.numeric.msl'
        }
      ]
    },
    dialog: {
      patterns: [
        {
          begin: '(?i)^(dialog)\\x20+(?:(-l)\\x20+)?(?!-l)([^\\s]+)\\s*(?={)',
          beginCaptures: {
            1: {name: 'storage.type.dialog.msl'},
            2: {name: 'storage.modifier.dialog.msl'},
            3: {name: 'entity.name.section.msl'}
          },
          end: '(?<=}$)',
          name: 'meta.dialog.code.msl',
          patterns: [{include: '#dialog_content'}]
        }
      ]
    },
    dialog_content: {
      patterns: [
        {include: '#comments'},
        {
          begin:
            '(?i)^\\x20*(title|icon|size|option|text|edit|button|check|radio|box|scroll|list|combo|icon|link|tab|menu|item)\\x20+',
          beginCaptures: {1: {name: 'keyword.control.dialog.control.msl'}},
          contentName: 'string.quoted.double.control.msl',
          end: '(?<=$)',
          patterns: [{include: '#parameters'}]
        }
      ]
    },
    documentation_block: {
      patterns: [
        {
          captures: {1: {name: 'storage.type.class.msl'}},
          match:
            '(?i)\\x20*\\*\\x20+(@(?:author|command|const(?:ant)?|copyright|deprecated|event|example|experimental|global|identifier|ignore|license|nobadges|param(?:eter)?|arg(?:ument)?|prop|returns?|see|switch|todo|version))\\b'
        }
      ]
    },
    events: {
      patterns: [
        {
          begin:
            '^(?i)(on\\x20+(?:me:)?[^:\\s]+:(?:action|notice|(?:client)?text):(?:(%[^:]+)|[^:]+):(?:(%[^:]+)|[^:]+):)\\s*',
          beginCaptures: {
            1: {name: 'entity.name.type.event.msl'},
            2: {name: 'variable.other.normal.msl'},
            3: {name: 'variable.other.normal.msl'}
          },
          end: '(?i)(?=\\z|(?:^(?:on|raw|ctcp|dialog|\\#[^\\s]+|alias|menu)\\b))|(?<=}$)',
          name: 'meta.event.code.msl',
          patterns: [{include: '#code_content'}]
        },
        {
          begin:
            '^(?i)(on\\x20+(?:me:)?[^:\\s]+:(?:active|input|tabcomp|mscroll):(?:\\*|#[^:]*|\\?|=|!|@[^:]*|(%[^:]+)):)\\s*',
          beginCaptures: {
            1: {name: 'entity.name.type.event.msl'},
            2: {name: 'variable.other.normal.msl'}
          },
          end: '(?i)(?=\\z|(?:^(?:on|raw|ctcp|dialog|\\#[^\\s]+|alias|menu)\\b))|(?<=}$)',
          name: 'meta.event.code.msl',
          patterns: [{include: '#code_content'}]
        },
        {
          begin:
            '^(?i)(on\\x20+(?:me:)?[^:\\s]+:(?:agent|appactive|connect(?:fail)?|disconnect|dns|exit|(?:un)?load|(?:midi|mp3|play|song|wave)end|nick|nosound|u?notify|ping|pong|quit|start|usermode|options|resume|song|suspend):)\\s*',
          beginCaptures: {1: {name: 'entity.name.type.event.msl'}},
          end: '(?i)(?=\\z|(?:^(?:on|raw|ctcp|dialog|\\#[^\\s]+|alias|menu)\\b))|(?<=}$)',
          name: 'meta.event.code.msl',
          patterns: [{include: '#code_content'}]
        },
        {
          begin:
            '^(?i)(on\\x20+(?:me:)?[^:\\s]+:(?:(?:un)?ban|(?:de)?help|(?:de|server)?op|(?:de)?owner|(?:de)?voice|invite|join|kick|(?:server|raw)?mode|part|topic|(?:de)?admin):(?:\\*|#[^:]*|(%[^:]+)):)\\s*',
          beginCaptures: {
            1: {name: 'entity.name.type.event.msl'},
            2: {name: 'variable.other.normal.msl'}
          },
          end: '(?i)(?=\\z|(?:^(?:on|raw|ctcp|dialog|\\#[^\\s]+|alias|menu)\\b))|(?<=}$)',
          name: 'meta.event.code.msl',
          patterns: [{include: '#code_content'}]
        },
        {
          begin:
            '^(?i)(on\\x20+(?:me:)?[^:\\s]+:(?:chat|ctcpreply|error|file(?:rcvd|sent)|(?:get|send)fail|logon|serv|signal|snotice|sock(?:close|listen|open|read|write)|udp(?:read|write)|vcmd|wallops|download|(?:un)?zip):(?:(%[^:]+)|[^:]+):)\\s*',
          beginCaptures: {
            1: {name: 'entity.name.type.event.msl'},
            2: {name: 'variable.other.normal.msl'}
          },
          end: '(?i)(?=\\z|(?:^(?:on|raw|ctcp|dialog|\\#[^\\s]+|alias|menu)\\b))|(?<=}$)',
          name: 'meta.event.code.msl',
          patterns: [{include: '#code_content'}]
        },
        {
          begin:
            '^(?i)(on\\x20+(?:me:)?[^:\\s]+:(?:close|open):(?:\\*|\\?|=|!|@[^:]*|(%[^:]+)):)\\s*',
          beginCaptures: {
            1: {name: 'entity.name.type.event.msl'},
            2: {name: 'variable.other.normal.msl'}
          },
          end: '(?i)(?=\\z|(?:^(?:on|raw|ctcp|dialog|\\#[^\\s]+|alias|menu)\\b))|(?<=}$)',
          name: 'meta.event.code.msl',
          patterns: [{include: '#code_content'}]
        },
        {
          begin:
            '^(?i)(on\\x20+(?:me:)?[^:\\s]+:dccserver:(?:chat|send|fserve):)\\s*',
          beginCaptures: {1: {name: 'entity.name.type.event.msl'}},
          end: '(?i)(?=\\z|(?:^(?:on|raw|ctcp|dialog|\\#[^\\s]+|alias|menu)\\b))|(?<=}$)',
          name: 'meta.event.code.msl',
          patterns: [{include: '#code_content'}]
        },
        {
          begin:
            '^(?i)(on\\x20+(?:me:)?[^:\\s]+:dialog:[^:]+:(?:init|close|edit|sclick|dclick|menu|scroll|mouse|rclick|drop|\\*|(%[^:]+)):(?:(%[^:]+)|[\\d\\-,\\*]+):)\\s*',
          beginCaptures: {
            1: {name: 'entity.name.type.event.msl'},
            2: {name: 'variable.other.normal.msl'},
            3: {name: 'variable.other.normal.msl'}
          },
          end: '(?i)(?=\\z|(?:^(?:on|raw|ctcp|dialog|\\#[^\\s]+|alias|menu)\\b))|(?<=}$)',
          name: 'meta.event.code.msl',
          patterns: [{include: '#code_content'}]
        },
        {
          begin:
            '^(?i)(on\\x20+(?:me:)?[^:\\s]+:hotlink:[^:]+:(?:\\*|#[^:]*|\\?|=|!|@[^:]*|(%[^:]+)):)\\s*',
          beginCaptures: {
            1: {name: 'entity.name.type.event.msl'},
            2: {name: 'variable.other.normal.msl'}
          },
          end: '(?i)(?=\\z|(?:^(?:on|raw|ctcp|dialog|\\#[^\\s]+|alias|menu)\\b))|(?<=}$)',
          name: 'meta.event.code.msl',
          patterns: [{include: '#code_content'}]
        },
        {
          begin:
            '^(?i)(on\\x20+(?:me:)?[^:\\s]+:(?:key(?:down|up)|char):(?:\\*|@[^:]*|(%[^:]+)):(?:\\*|\\d+(?:,\\d+)*|(%[^:]+)):)\\s*',
          beginCaptures: {
            1: {name: 'entity.name.type.event.msl'},
            2: {name: 'variable.other.normal.msl'},
            3: {name: 'variable.other.normal.msl'}
          },
          end: '(?i)(?=\\z|(?:^(?:on|raw|ctcp|dialog|\\#[^\\s]+|alias|menu)\\b))|(?<=}$)',
          name: 'meta.event.code.msl',
          patterns: [{include: '#code_content'}]
        },
        {
          begin:
            '^(?i)(on\\x20+(?:me:)?[^:\\s]+:parseline:(?:\\*|in|out|(%[^:]+)):(?:(%[^:]+)|[^:]+):)\\s*',
          beginCaptures: {
            1: {name: 'entity.name.type.event.msl'},
            2: {name: 'variable.other.normal.msl'},
            3: {name: 'variable.other.normal.msl'}
          },
          end: '(?i)(?=\\z|(?:^(?:on|raw|ctcp|dialog|\\#[^\\s]+|alias|menu)\\b))|(?<=}$)',
          name: 'meta.event.code.msl',
          patterns: [{include: '#code_content'}]
        },
        {
          begin: '^(?i)(raw\\x20+[^:\\s]+:(?:(%[^:]+)|[^:]+):)\\s*',
          beginCaptures: {
            1: {name: 'entity.name.type.event.msl'},
            2: {name: 'variable.other.normal.msl'}
          },
          end: '(?i)(?=\\z|(?:^(?:on|raw|ctcp|dialog|\\#[^\\s]+|alias|menu)\\b))|(?<=}$)',
          name: 'meta.event.code.msl',
          patterns: [{include: '#code_content'}]
        },
        {
          begin:
            '^(?i)(ctcp\\x20+[^:\\s]+:(?:(%[^:]+)|[^:]+):(?:\\*|#.*|\\?|(%[^:]+)):)\\s*',
          beginCaptures: {
            1: {name: 'entity.name.type.event.msl'},
            2: {name: 'variable.other.normal.msl'},
            3: {name: 'variable.other.normal.msl'}
          },
          end: '(?i)(?=\\z|(?:^(?:on|raw|ctcp|dialog|\\#[^\\s]+|alias|menu)\\b))|(?<=}$)',
          name: 'meta.event.code.msl',
          patterns: [{include: '#code_content'}]
        }
      ]
    },
    group: {
      patterns: [
        {
          match: '(?i)^#[^\\s]+ (on|off|end)(?:\\b)',
          name: 'keyword.other.groupname.msl'
        }
      ]
    },
    identifiers: {
      patterns: [
        {include: '#identifiers_params'},
        {include: '#identifiers_no_params'}
      ]
    },
    identifiers_no_params: {
      patterns: [
        {
          begin: '(?:\\x20*)\\$&(?:\\s+)',
          end: '(?=\\S)',
          name: 'keyword.other.identifier.msl'
        },
        {
          match:
            '(?<=\\s|\\(!|\\(|\\,|\\.|^)\\$\\$?~?(0|\\!|\\*|\\+\\+?|[1-9]+(-?([0-9]+)|[^\\s|\\)|,]+)?|active((c|w)id)?|a?date|adiirc(dir([^\\s,)]+)?|exe|ini)|address|admnick|agent(name|stat|ver)|album|anick|aop|app(active|bits|state)|artist|asctime|audio|auto|avoice|away(msg|time)?|banmask|batteryp?|beta|bit(rate|s)|bname|bnick|boldify|builddate|bw(downb?|name|recb?|sentb?|speed|upb?)|cal(ias|ler)|cancel|cb|cd|chan(modes|types)?|cid|clevel|cmd(box|line)|com(char|err|ment|pact)|cpu(cache|count|ident|load|mhz|name|vendor)|cr(eq|lf)?|ctimer?|ctrlenter|day(light)?|dbu(h|w)|dccignore|dccport|ddename|debug|devent|did|disk(free|total)|dlevel|dname|dock(panels)?|donotdisturb|dotnet|download(err)?|dqwindow|ebeeps|email(addr)?|error|event(id|parms)?|exiting|false|fe(of|rr)|filename|filtered|find(dirn|filen)|flinen|frequency|fromeditbox|full(address|date|name|screen|title)|genre|getdir|gfx(ram)?|globalidle|gmt|halted|highlight|hnick|host|hotline(pos)?|ia(ddress|l)|ident|idle|ifmatch2?|ignore|in(midi(.(pos|length|fname|pause))?|mode|mp3|paste|song(.(pos|length|fname|pause))?|wave(.(pos|length|fname|pause))?|who)|ip|is(admin|id|wine)|kblayout|key(char|rpt|val)|knick|lactive(cid|wid)?|lag|layer|leftwin(cid|wid)?|length|lf|locked|log(dir|stamp(fmt)?)|lquitmsg|ltimer|maddress|matchkey|max(lenl|lenm|lens)|me|mem(freep?|total)|menu(bar|context|type)?|mididir|mircdir([^\\s,)]+)?|mircexe|mircini|mnick|modefirst|modelast|modespl|motherboard|mouse(.(x|y||mx|my|dx|dy|cx|cy|win|lb|key))?|mp3dir|msg(stamp|tags|x)|muted|mversion|naddress|nick(column|mode)?|network|newnick|no(tify)?|null|numeric|ok|online(server|total)?|op?nick|os(bits|build|edition|idle|installdate|major|minor|name|servicepack|version)?|parms|parse(line|type|utf)|passivedcc|pcre|percent(l|p)|pi|play(count|er(handle)?)|pnick|port(able)?|position|prefix(ctcp|emote|sys|user)?|progress|prop|protect|quickconnect|quitmessage|raddress|randomcolors|rating|raw(bytes|msgx?)|readn|realname|regerrstr|remote|result|screen(b|hz?|w)?|script(dir([^\\s,)]+)?|line|s)?|server(ip|target)?|sfstate|show|signal|site|size|snicks|snotify|sock(err|br|name)|song(path)?|sreq|ssl(cert((remote)?sha(1|256)|valid)|(lib)?dll|ready|version)?|starting|status(bar)?|stripped|switchbar|target|tempfn|ticks(qpc)?|time(out|stamp(fmt)?|zone)|tips|title(bar)?|toolbar|topic|totaltracks|track|treebar|true|ulevel|up(days|dating|hours|mins)|url|user(mode|name)|v1|v2|vcmd(stat|ver)|version|volume(b|p)?|vnick|wavedir|wid|wildsite|window|year|yes|ziperr)(?=\\s|\\)|,)',
          name: 'keyword.other.identifier.msl'
        },
        {
          captures: {
            1: {name: 'keyword.other.identifier.msl'},
            2: {name: 'keyword.operator.msl'},
            3: {name: 'string.quoted.double.msl'}
          },
          match:
            '(?<=\\s|\\(|\\,|\\.|^)(\\$\\$?~?(?:\\?(?:[^\\s=]+)?|s?dir|hfile))(?:(=)("(?:[^"])*"))?(?=\\s|\\)|,)'
        },
        {
          match: '(?<=\\s|\\(!|\\(|\\,|\\.|^)(\\=\\$\\$?~?nick)(?=\\b)',
          name: 'keyword.other.identifier.msl'
        },
        {
          match:
            '(?<=\\s|\\(!|\\(|\\,|\\.|^)(\\$\\$?(?!\\x21)[^\\s(),]+)(?=\\b)',
          name: 'support.function.name.msl'
        }
      ]
    },
    identifiers_params: {
      patterns: [
        {
          begin:
            '(?i)(?<=\\s|\\(!|\\(|\\,|\\.|^)(\\$\\$?~?(\\+|abook|a?cos|abs|date|add(ress|tok(cs)?)|adilang|admnick|agent|alias|and|ansi2mirc|aop|asc(time)?|a?sin|a?tan|avoice|banlist|base|bfind|bindip|bit(off|on)|boldify|bvar|bytes|calias|cb|ceil|chan(nel)?|chat|chr|click|cnick|colou?r|com(call|chan|press|val)?|cosh?|count(cs)?|cpuload|crc|ctime|date|dccignore|dde|decode|decompress|decrypt|deltok|dialog|did(reg|tok|wm)?|disk(menu)?|dll(call)?|dns|dockpanels|download|duration|editbox(history)?|emoticons|encode|encodingmenu|encrypt|envvar|eval(next)?|eventtarget|exec|exists|fgetc|file|find(dir|file|tok(cs)?)|fline|floor|font|fopen|fread|fserve?|get(dir|dot|tok)?|gfx(ram)?|gmt|group|hash|height|hexcolor|hfind|hget|highlight|hmac|hmatch|hnick|hotlink|hotp|hregex|hypot|ial(chan)?|ibl|iel|ignore|iil|inellipse|ini(ck|topic)?|inpoly|input|in(round)?rect|insert|instok|int(ersect)?|invitemenu|iptype|iql|ircv3caps|is(alias|bit|dde|dir|file|lower|tok(cs)?|upper|utf)|keylocked|left|len|level|line(height|s)?|link|lock|lo(f|g(10)?)|long(fn|ip)|loop|lower|maddress|mask|matchtok(cs)?|max|md5|menuicon|mid|min|mk(log|nick)?fn|mode|mp3|msfile|msgtags|nadmnick|(nh)?nick|no(file|p?nick|t(ags|ify)?|path|qt)?|numtok|nvnick|ocolor|onpoly|op?nick|ord?|pic|play|plugins|portfree|pos(cs)?|powmod|prefix(emote|user)|puttok|qt|query|r(ands?|ead(ini)?|egml(ex)?|em(ove(cs)?|tok(cs)?)|eplace(cs|x(cs)?)?|eptok(cs)?|gb|ight|ound|nick)?|samepath|scid|scon|screen(b|hz?|shot|w)?|script|sdir|send|server(vars)?|sfile|sha(1|2|256|384|512)|shortfn|sinh|slapsmenu|sline|snick|sock|sorttok(cs)?|sound|speak|spellcheck|sqrt|statusbar|str(ip)?|style|submenu|sysdir|tanh|timer|tip|token|toolbar|topicbox|totp|trust|ulist|unsafe|upper|uptime|url(get)?|utf(de|en)code|var|vc(md)?|vol|width|wildtok(cs)?|window|wmiquery|wrap|xor|zip))\\(',
          beginCaptures: {1: {name: 'keyword.other.identifier.msl'}},
          end: '(?i)\\)(?:\\.([^\\s|\\)|,]+))?',
          endCaptures: {1: {name: 'keyword.other.identifier.property.msl'}},
          patterns: [{include: '#parameters'}]
        },
        {
          begin: '(?i)(?<=\\s|\\(!|\\(|\\,|\\.|^)(\\$\\$?~?calc)\\(',
          beginCaptures: {1: {name: 'keyword.other.identifier.msl'}},
          end: '\\)',
          patterns: [{include: '#parameters'}, {include: '#calc_content'}]
        },
        {
          begin: '(?i)(?<=\\s|\\(!|\\(|\\,|\\.|^)(\\$\\$?~?iif)\\(',
          beginCaptures: {1: {name: 'keyword.other.identifier.msl'}},
          end: '\\)',
          patterns: [
            {include: '#conditionals_content'},
            {include: '#parameters'}
          ]
        },
        {
          begin:
            '(?i)(?<=\\s|\\(!|\\(|\\,|\\.|^)(\\$\\$?~?reg(?:ex|sub(?:ex)?))\\(',
          beginCaptures: {1: {name: 'keyword.other.identifier.msl'}},
          end: '\\)',
          patterns: [
            {
              captures: {1: {name: 'string.regexp.msl'}},
              match:
                '(\\/(?:(?!\\/[gimsxAEDUuXSF]+?\\)).)*\\/([gimsxAEDUuXSF]+)?)'
            },
            {include: '#parameters'}
          ]
        },
        {
          begin: '(?<=\\s|\\(!|\\(|\\,|\\.|^)(\\$\\$?~?[^\\s(),]+)\\(',
          beginCaptures: {1: {name: 'support.function.name.msl'}},
          end: '(?i)\\)(?:\\.([^\\s|\\)|,]+))?',
          endCaptures: {1: {name: 'keyword.other.identifier.property.msl'}},
          patterns: [{include: '#parameters'}]
        }
      ]
    },
    menu: {
      patterns: [
        {
          begin:
            '(?i)^(menu)\\x20+((?:status|channel|query|nicklist|menubar|(?:channel)?link|@[^\\x20,]+|\\*)(?:,(?:status|channel|query|nicklist|menubar|(?:channel)?link|@[^\\x20,]+))*|\\*)\\x20+{',
          beginCaptures: {
            1: {name: 'storage.type.menu.msl'},
            2: {name: 'storage.modifier.function.msl'}
          },
          end: '(?i)(?=\\z|(?:^(?:on|raw|ctcp|dialog|\\#[^\\s]+|alias|menu)\\b))|}$',
          name: 'meta.menu.code.msl',
          patterns: [{include: '#menu_content'}]
        }
      ]
    },
    menu_content: {
      patterns: [
        {include: '#comments'},
        {include: '#parameters'},
        {
          begin:
            '(?:^\\s*|\\G)\\x20*((?:mouse|(?:s|d(?:r|m)?|u|r|lb|m)click)|leave|drop)(?:\\x20*:\\x20*)?',
          beginCaptures: {1: {name: 'keyword.other.menu.item.msl'}},
          end: '(?=\\z|\\x20}|$)',
          patterns: [{include: '#code_content'}]
        },
        {
          begin: '^\\x20*(?!$)',
          end: '(?=\\z|\\x20}|$)',
          patterns: [
            {include: '#parameters'},
            {
              begin: '(?<=:|{)',
              end: '(?=\\z|\\x20}|$)',
              patterns: [{include: '#code_content'}]
            }
          ]
        }
      ]
    },
    parameters: {
      patterns: [
        {include: '#variables'},
        {include: '#identifiers'},
        {include: '#constants'}
      ]
    },
    switches: {
      patterns: [
        {
          match: '(?<=\\x20)[-+][[:alnum:]]+(?=\\s)',
          name: 'keyword.other.switch.msl'
        }
      ]
    },
    variables: {
      patterns: [
        {
          match: '(?<![^(,\\x20!])(%)[^\\x20),]+',
          name: 'variable.other.normal.msl'
        },
        {
          match: '(?<![^(,\\x20!])(&)[^\\x20),]+',
          name: 'variable.other.binary.msl'
        }
      ]
    }
  },
  scopeName: 'source.msl'
}

export default grammar
