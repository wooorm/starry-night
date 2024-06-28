// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/quarnster/SublimeGDB>
// and licensed `zlib`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.gdb', '.gdbinit'],
  names: ['gdb'],
  patterns: [
    {
      captures: {1: {name: 'punctuation.definition.comment.gdb'}},
      match: '^\\s*(#).*$\\n?',
      name: 'comment.line.number-sign.gdb'
    },
    {
      begin: '^\\s*(define)\\ +(.*)?',
      beginCaptures: {
        0: {name: 'meta.function'},
        1: {name: 'keyword.other.gdb'},
        2: {name: 'entity.name.function.gdb'}
      },
      end: '^(end)$',
      endCaptures: {1: {name: 'keyword.other.gdb'}},
      patterns: [{include: '$self'}]
    },
    {
      begin: '^\\s*(document)\\ +(?:.*)?',
      beginCaptures: {1: {name: 'keyword.other.gdb'}},
      end: '^(end)$',
      endCaptures: {1: {name: 'keyword.other.gdb'}},
      patterns: [{match: '.', name: 'comment.block.documentation.gdb'}]
    },
    {
      begin: '\\"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.gdb'}},
      end: '\\"',
      endCaptures: {0: {name: 'punctuation.definition.string.end'}},
      name: 'string.quoted.double.gdb',
      patterns: [{include: '#stringEscapedChar'}]
    },
    {
      begin: "\\'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.gdb'}},
      end: "\\'",
      endCaptures: {0: {name: 'punctuation.definition.string.end'}},
      name: 'string.quoted.single.gdb',
      patterns: [{include: '#stringEscapedChar'}]
    },
    {
      begin: '^\\s*(echo)',
      beginCaptures: {1: {name: 'keyword.other.gdb'}},
      end: '(?<!\\\\)\\n',
      patterns: [
        {include: '#stringEscapedChar'},
        {match: '\\\\$', name: 'constant.character.escape.gdb'},
        {match: '.', name: 'string.other.gdb'}
      ]
    },
    {match: '\\b(?:[0-9_]+|0x[0-9a-fA-F_]+)\\b', name: 'constant.numeric.gdb'},
    {match: '\\$[@_a-zA-Z][@_a-zA-Z0-9]*', name: 'variable.other.gdb'},
    {
      match:
        '\\b(?:address|architecture|args|breakpoints|catch|common|copying|dcache|display|files|float|frame|functions|handle|line|locals|program|registers|scope|set|sharedlibrary|signals|source|sources|stack|symbol|target|terminal|threads|syn|keyword|tracepoints|types|udot)\\b',
      name: 'storage.type.gdb'
    },
    {
      match:
        '^\\s*(?:actions|apply|apropos|attach|awatch|backtrace|break|bt|call|catch|cd|clear|collect|commands|complete|condition|continue|delete|detach|directory|disable|disassemble|display|down|dump|else|enable|end|file|finish|frame|handle|hbreak|help|if|ignore|inspect|jump|kill|list|load|maintenance|make|next|n|nexti|ni|output|overlay|passcount|path|po|print|p|printf|ptype|pwd|quit|rbreak|remote|return|run|r|rwatch|search|section|set|sharedlibrary|shell|show|si|signal|source|step|s|stepi|stepping|stop|target|tbreak|tdump|tfind|thbreak|thread|tp|trace|tstart|tstatus|tstop|tty|undisplay|unset|until|up|watch|whatis|where|while|ws|x|add-shared-symbol-files|add-symbol-file|core-file|dont-repeat|down-silently|exec-file|forward-search|reverse-search|save-tracepoints|select-frame|symbol-file|up-silently|while-stepping)\\b',
      name: 'keyword.other.gdb'
    },
    {
      match:
        '\\b(?:annotate|architecture|args|check|complaints|confirm|editing|endian|environment|gnutarget|height|history|language|listsize|print|prompt|radix|remotebaud|remotebreak|remotecache|remotedebug|remotedevice|remotelogbase|remotelogfile|remotetimeout|remotewritesize|targetdebug|variable|verbose|watchdog|width|write|auto-solib-add|solib-absolute-prefix|solib-search-path|stop-on-solib-events|symbol-reloading|input-radix|demangle-style|output-radix)\\b',
      name: 'support.constant.gdb'
    },
    {match: '^\\s*info', name: 'constant.language.gdb'}
  ],
  repository: {
    stringEscapedChar: {
      patterns: [
        {
          match:
            '\\\\(?:\\\\|[abefnprtv\'"?]|[0-3]\\d{0,2}|[4-7]\\d?|x[a-fA-F0-9]{0,2}|u[a-fA-F0-9]{0,4}|U[a-fA-F0-9]{0,8})',
          name: 'constant.character.escape.gdb'
        },
        {match: '\\\\.', name: 'invalid.illegal.gdb'}
      ]
    }
  },
  scopeName: 'source.gdb'
}

export default grammar
