// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/wgwoods/language-kickstart>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['kickstart'],
  patterns: [
    {
      begin:
        '^\\s*(%(?:pre|pre-install|post))\\b.*\\s--interpreter(?:\\s+|=)(\\S*python\\S*).*$',
      captures: {1: {name: 'keyword.control.scriptlet.kickstart'}},
      contentName: 'source.python.embedded.kickstart',
      end: '^\\s*(%end)\\s*$',
      name: 'scriptlet.python.kickstart',
      patterns: [
        {include: 'source.python'},
        {
          match: '^\\s*(%(?:pre|pre-install|post|packages))',
          name: 'invalid.illegal.missingend.kickstart'
        }
      ]
    },
    {
      begin:
        '^\\s*(%(?:pre|pre-install|post))\\b.*\\s--interpreter(?:\\s+|=)(\\S*perl\\S*).*$',
      captures: {1: {name: 'keyword.control.scriptlet.kickstart'}},
      contentName: 'source.perl.embedded.kickstart',
      end: '^\\s*(%end)\\s*$',
      name: 'scriptlet.perl.kickstart',
      patterns: [
        {include: 'source.perl'},
        {
          match: '^\\s*(%(?:pre|pre-install|post|packages))',
          name: 'invalid.illegal.missingend.kickstart'
        }
      ]
    },
    {
      begin:
        '^\\s*(%(?:pre|pre-install|post))\\b.*\\s--interpreter(?:\\s+|=)(\\S*sh\\b).*$',
      captures: {1: {name: 'keyword.control.scriptlet.kickstart'}},
      contentName: 'source.shell.embedded.kickstart',
      end: '^\\s*(%end)\\s*$',
      name: 'scriptlet.shell.kickstart',
      patterns: [
        {include: 'source.shell'},
        {
          match: '^\\s*(%(?:pre|pre-install|post|packages))',
          name: 'invalid.illegal.missingend.kickstart'
        }
      ]
    },
    {
      begin: '^\\s*(%(?:pre|pre-install|post))\\b.*\\s--interpreter\\b.*$',
      captures: {1: {name: 'keyword.control.scriptlet.kickstart'}},
      contentName: 'string.unquoted.scriptlet.kickstart',
      end: '^\\s*(%end)\\s*$',
      patterns: [
        {
          match: '^\\s*(%(?:pre|pre-install|post|packages))',
          name: 'invalid.illegal.missingend.kickstart'
        }
      ]
    },
    {
      begin:
        '^\\s*(%(?:pre|pre-install|post))\\b(\\s+--[^i][^n][^t]\\w+)*\\s*$',
      captures: {1: {name: 'keyword.control.scriptlet.kickstart'}},
      contentName: 'source.shell.embedded.kickstart',
      end: '^\\s*(%end)\\s*$',
      name: 'scriptlet.shell.kickstart',
      patterns: [
        {include: 'source.shell'},
        {
          match: '^\\s*(%(?:pre|pre-install|post|packages))',
          name: 'invalid.illegal.missingend.kickstart'
        }
      ]
    },
    {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.kickstart'}
      },
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.kickstart'}
          },
          end: '\\n',
          name: 'comment.line.number-sign.kickstart'
        }
      ]
    },
    {
      begin: '^\\s*(%packages)\\b.*$',
      captures: {1: {name: 'keyword.control.packages.kickstart'}},
      end: '^\\s*(%end)\\s*$',
      name: 'packages.kickstart',
      patterns: [
        {
          match: '^\\s*-?@\\^?.*$',
          name: 'string.unquoted.packages.group.kickstart'
        },
        {
          match: '^\\s*(%(?:pre|pre-install|post|packages))',
          name: 'invalid.illegal.missingend.kickstart'
        },
        {match: '^\\s*#.*$', name: 'comment.line.number-sign.kickstart'}
      ]
    },
    {
      match: '^\\s*(cmdline|graphical|text|mediacheck|vnc|logging)\\b',
      name: 'support.function.ui.kickstart'
    },
    {
      match: '^\\s*(halt|poweroff|shutdown|reboot)\\b',
      name: 'support.function.shutdown.kickstart'
    },
    {
      match:
        '^\\s*(autopart|bootloader|btrfs|clearpart|dmraid|fcoe|iscsi|iscsiname|logvol|multipath|part|partition|raid|volgroup|zerombr|zfcp|ignoredisk)\\b',
      name: 'support.function.disk.kickstart'
    },
    {
      match:
        '^\\s*(auth|authconfig|firewall|firstboot|monitor|network|realm|rootpw|selinux|services|sshkey|sshpw|skipx|timezone|user|group|xconfig|skipx)\\b',
      name: 'support.function.services.kickstart'
    },
    {
      match: '^\\s*(lang|keyboard|timezone)\\b',
      name: 'support.function.i18n.kickstart'
    },
    {
      match: '^\\s*(install|cdrom|repo|harddrive|liveimg|nfs|url)\\b',
      name: 'support.function.install.kickstart'
    },
    {
      match: '^\\s*(%include|%ksappend)\\b',
      name: 'keyword.control.import.kickstart'
    },
    {
      match: '^\\s*(rescue|updates|device|driverdisk|autostep)\\b',
      name: 'support.function.misc.kickstart'
    },
    {
      match: '\\$6\\$(rounds=\\d+\\$)?[./0-9A-Za-z]{1,16}\\$[./0-9A-Za-z]{86}',
      name: 'string.password-hash.sha512.kickstart'
    },
    {
      match: '\\$5\\$(rounds=\\d+\\$)?[./0-9A-Za-z]{1,16}\\$[./0-9A-Za-z]{43}',
      name: 'string.password-hash.sha256.kickstart'
    },
    {match: '\\$[56]\\$\\S+', name: 'invalid.illegal.password-hash.kickstart'},
    {
      begin: '([\'"])',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.kickstart'}
      },
      end: '\\1',
      endCaptures: {0: {name: 'punctuation.definition.string.end.kickstart'}},
      name: 'string.quoted.kickstart',
      patterns: [
        {
          match: '\\\\[\\$`"\'\\\\\\n]',
          name: 'constant.character.escape.kickstart'
        }
      ]
    }
  ],
  scopeName: 'source.kickstart'
}

export default grammar
