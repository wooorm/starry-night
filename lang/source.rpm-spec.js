// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.changelogs.rpm-spec', 'source.shell'],
  extensions: [],
  names: ['rpm-spec', 'specfile'],
  patterns: [
    {match: '^# norootforbuild', name: 'keyword.rpm-spec'},
    {include: '#comments'},
    {include: '#conditionals'},
    {include: '#commands'},
    {include: '#macros'},
    {include: '#metadata'},
    {include: '#sections'},
    {include: '#modifiers'},
    {include: '#variables'},
    {include: '#architectures'},
    {include: '#licenses'},
    {include: '#constants'},
    {include: '#operators'}
  ],
  repository: {
    architectures: {
      patterns: [
        {
          match: '\\b(?:noarch|i386|i586|x86_64|ia64|local)\\b',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '\\b(?:s390x|s390|armv6l|armv7hl|armv7l)\\b',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '\\b(?:ppc64p7|ppc64le|ppc64|ppc|aarch64)\\b',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '\\b(?:alpha|sparc64|sparcv9|sparc)\\b',
          name: 'constant.language.rpm-spec'
        }
      ]
    },
    changelogs: {patterns: [{include: 'source.changelogs.rpm-spec'}]},
    commands: {
      patterns: [
        {
          match: '^%__(?:aclocal|ar|as|autoconf)',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%__(?:autoheader|automake|awk)',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%__(?:bzip2|bzip|cat|cc|chgrp_Rhf|chgrp)',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%__(?:chmod|chown_Rhf|chown|cpio|cp)',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%__(?:cpp|cxx|grep|gzip|patch)',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%__(?:id_u|id|install|ld|libtoolize)',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%__(?:ln_s|make|mkdir_p|mkdir|mv)',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%__(?:nm|objcopy|objdump|perl)',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%__(?:pgp|prelink_undo_cmd|python)',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%__(?:ranlib|rm|sed|strip|tar|unzip)',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%\\{__(?:aclocal|ar|as|autoconf)\\}',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%\\{__(?:autoheader|automake|awk)\\}',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%\\{__(?:bzip2|bzip|cat|cc|chgrp_Rhf|chgrp)\\}',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%\\{__(?:chmod|chown_Rhf|chown|cpio|cp)\\}',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%\\{__(?:cpp|cxx|grep|gzip|patch)\\}',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%\\{__(?:id_u|id|install|ld|libtoolize)\\}',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%\\{__(?:ln_s|make|mkdir_p|mkdir|mv)\\}',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%\\{__(?:nm|objcopy|objdump|perl)\\}',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%\\{__(?:pgp|prelink_undo_cmd|python)\\}',
          name: 'support.constant.rpm-spec'
        },
        {
          match: '^%\\{__(?:ranlib|rm|sed|strip|tar|unzip)\\}',
          name: 'support.constant.rpm-spec'
        }
      ]
    },
    comments: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.comment.rpm-spec'},
            2: {name: 'comment.line.rpm-spec'}
          },
          match: '(#)(?<!C#|F#|M#)(.*)$'
        }
      ]
    },
    conditionals: {
      patterns: [
        {
          match: '%(?:ifarch|ifnarch|ifnos|ifos|if|else|endif)',
          name: 'keyword.control.rpm-spec'
        }
      ]
    },
    constants: {
      patterns: [{match: '[0-9]+', name: 'contstant.numeric.rpm-spec'}]
    },
    licenses: {
      patterns: [
        {
          match: '(?:AFL-2.1|AGPL-3.0|AGPL-3.0\\+|Apache-1.1|Apache-2.0)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:X11|xinetd|Zlib|ZPL-2.0|ZPL-2.1)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:Apache-2.0+|APL-1.0|BSD-2-Clause|BSD-3-Clause|BSD-4-Clause)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:Artistic-1.0|Artistic-1.0+|Artistic-2.0|Beerware)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:CC-BY-ND-4.0|CC-BY-SA-2.5|CC-BY-SA-3.0)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:CC-BY-SA-3.0|CC-BY-SA-4.0|CDDL-1.0|CPL-1.0|EPL-1.0)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:ErlPL-1.1|GFDL-1.1|GFDL-1.1\\+|GFDL-1.2|GFDL-1.2\\+|GFDL-1.3)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:GFDL-1.3\\+|GPL-1.0\\+|GPL-2.0|GPL-2.0\\+|GPL-3.0|GPL-3.0\\+|IJG)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:LGPL-2.0\\+|LGPL-2.1|LGPL-2.1\\+|LGPL-3.0\\+|LPPL-1.3c)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:IPA|IPL-1.0|IPL-1.0|ISC|JSON|LGPL-2.0|MakeIndex|MIT)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:MPL-1.0|MPL-1.1|MPL-1.1\\+|MS-PL|NetCDF|OFL-1.1|OLDAP-2.8)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:OSL-1.1|PHP-3.01|Python-2.0|Qhull|QPL-1.0|QPL-1.0|Ruby)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:SUSE-BSD-3-Clause-with-non-nuclear-addition)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-GPL-2.0\\+-with-sane-exception|SUSE-GPL-3.0-with-FLOSS-exception)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-GPL-3.0-with-font-exception|SUSE-GPL-3.0-with-openssl-exception)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-GPL-3.0-with-template-exception|SUSE-GPL-3.0+-with-autoconf-exception)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-GPL-3.0\\+-with-font-exception|SUSE-GPL-3.0\\+-with-openssl-exception)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-IBPL-1.0|SUSE-IDPL-1.0|SUSE-IEEE|SUSE-Innernet-2.0|SUSE-Innernet-2.00)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:SUSE-LDPL-2.0|SUSE-LGPL-2.0-with-linking-exception)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:SUSE-LGPL-2.1-with-digia-exception-1.1)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:SUSE-LGPL-2.1-with-nokia-exception-1.1)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-LGPL-2.1\\+-with-GCC-exception|SUSE-LGPL-3.0-with-openssl-exception)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-Liberation|SUSE-Manpages|SUSE-Matplotlib|SUSE-MgOpen|SUSE-mirror)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:SUSE-mplus|SUSE-NonFree|SUSE-Oasis-Specification-Notice)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-OpenPublication-1.0|SUSE-OldFSFDocLicense|SUSE-Permissive)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-Permissive-Modify-By-Patch|SUSE-PHP-2.02|SUSE-Public-Domain)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-Python-1.6|SUSE-QWT-1.0|SUSE-Redistributable-Content|SUSE-Repoze)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-Scrot|SUSE-Sendmail|SUSE-SGI-FreeB-2.0|SUSE-SIP|SUSE-SLIB)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-SNIA-1.0|SUSE-SNIA-1.1|SUSE-Sun-Laboratories|SUSE-TeX|SUSE-TGPPL-1.0)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-Ubuntu-Font-License-1.0|SUSE-Xano|SUSE-Xenonsoft-1.00)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-XFree86-with-font-exception|SUSE-XSL-Lint|TCL|Unicode|Vim|W3C|WTFPL)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:SUSE-Bitstream-Vera|OML|OPL-1.0|SUSE-Arphic)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:SUSE-BSD-Mark-Modifications|SUSE-CacertRoot)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-Copyleft-Next-0.3.0|SUSE-CPL-0.5|SUSE-Curb|SUSE-DMTF)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:SUSE-Docbook-XSL|SUSE-Egenix-1.1.0|SUSE-EULA|SUSE-FHS)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:SUSE-Firmware|SUSE-FLTK|SUSE-Free-Art-1.3|SUSE-Freetype)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:SUSE-Gitslave|SUSE-GL2PS-2.0|SUSE-Gnuplot)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:SUSE-GPL-2.0-with-FLOSS-exception)',
          name: 'constant.language.rpm-spec'
        },
        {
          match:
            '(?:SUSE-CC-Sampling-Plus-1.0|SUSE-GPL-2.0-with-linking-exception)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:SUSE-GPL-2.0-with-openssl-exception)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:SUSE-GPL-2.0-with-OSI-exception)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:SUSE-GPL-2.0-with-plugin-exception)',
          name: 'constant.language.rpm-spec'
        },
        {
          match: '(?:SUSE-GPL-2.0\\+-with-openssl-exception)',
          name: 'constant.language.rpm-spec'
        }
      ]
    },
    macros: {
      patterns: [
        {
          captures: {1: {name: 'support.function.rpm-spec'}},
          match: '^(%(?:setup|patch[0-9]*|configure|autosetup))'
        },
        {
          match: '^%\\{?(?:desktop_database_postun|desktop_database_post)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:fillup_and_insserv|fillup_only|find_lang)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:icon_theme_cache_postun|icon_theme_cache_post)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:insserv_cleanup|insserv_force_if_yast)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:install_info_delete|install_info|gpg_verify)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:perl_archlib|perl_gen_filelist)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:perl_make_install|perl_process_packlist)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:perl_sitearch|perl_sitelib)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:perl_vendorarch|perl_vendorlib|perl_version)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match:
            '^%\\{?(?:py_incdir|py_libdir|py_requires|py_sitedir|py_ver)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:remove_and_set|restart_on_update)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:run_ldconfig|run_permissions)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:service_add_pre|service_add_post)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:service_del_preun|service_del_postun)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:set_permissions|stop_on_removal)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:suse_update_config|suse_update_desktop_file)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:tcl_version|ul_version|verify_permissions)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:create_subdir_filelist|create_exclude_filelist)\\}?',
          name: 'support.function.rpm-spec'
        },
        {
          match: '^%\\{?(?:makeinstall|make_jobs|update_menus|clean_menus)\\}?',
          name: 'support.function.rpm-spec'
        }
      ]
    },
    metadata: {
      patterns: [
        {
          match: '^(?:Icon|ExclusiveOs|ExcludeOs|NoSource|NoPatch):',
          name: 'keyword.rpm-spec'
        },
        {match: '^(?:Conflicts|Obsoletes|Provides):', name: 'keyword.rpm-spec'},
        {
          match: '^(?:Requires\\((?:preun|postun|pre|post)\\)|Requires):',
          name: 'keyword.rpm-spec'
        },
        {
          match:
            '^(Enhances|Suggests|BuildConflicts|BuildRequires|Recommends):',
          name: 'keyword.rpm-spec'
        },
        {
          match: '^(PreReq|Supplements|Epoch|Serial|Nosource|Nopatch):',
          name: 'keyword.rpm-spec'
        },
        {match: '^(AutoReq|AutoProv|AutoReqProv):', name: 'keyword.rpm-spec'},
        {
          match: '^(Copyright|Summary|Summary\\(.*\\)|Distribution):',
          name: 'keyword.rpm-spec'
        },
        {
          match:
            '^(Vendor|Packager|Group|Source\\d*|Patch\\d*|BuildRoot|Prefix):',
          name: 'keyword.rpm-spec'
        },
        {match: '^(Name|Version|Release|Url|URL):', name: 'keyword.rpm-spec'},
        {match: '^(Source|Patch)[0-9]*:', name: 'keyword.rpm-spec'},
        {
          begin:
            '^((?:BuildArch|BuildArchitectures|ExclusiveArch|ExcludeArch):)',
          beginCaptures: {1: {name: 'keyword.rpm-spec'}},
          end: '$',
          patterns: [{include: '#architectures'}]
        },
        {
          begin: '^(License:)[ \\t]*',
          beginCaptures: {1: {name: 'keyword.rpm-spec'}},
          end: '$',
          patterns: [{include: '#licenses'}]
        }
      ]
    },
    modifiers: {
      patterns: [
        {
          match: '^%(?:define|global|undefine|docdir|doc)',
          name: 'storage.modifier.rpm-spec'
        },
        {
          captures: {1: {name: 'storage.modifier.rpm-spec'}},
          match: '^(%config(?:\\(noreplace\\))?)[ \\t]+'
        },
        {
          captures: {1: {name: 'storage.modifier.rpm-spec'}},
          match: '^(%defattr\\(.*\\))'
        },
        {
          captures: {1: {name: 'storage.modifier.rpm-spec'}},
          match: '(%(?:attrib|attr|verify|noverify)\\(.*\\)) '
        },
        {
          captures: {1: {name: 'storage.modifier.rpm-spec'}},
          match: '(%(?:lang|caps)\\(.*\\)) '
        }
      ]
    },
    operators: {
      patterns: [
        {
          match: '(?:[>=]?=|!=?|<|>|&&|\\|\\|)',
          name: 'keyword.operator.logical.rpm-spec'
        }
      ]
    },
    sections: {
      patterns: [
        {
          match: '^%(?:description|package)',
          name: 'entity.name.section.rpm-spec'
        },
        {
          begin: '^(%changelog)',
          beginCaptures: {1: {name: 'entity.name.section.rpm-spec'}},
          end: 'Z',
          patterns: [{include: '#changelogs'}]
        },
        {
          begin: '^(%files)',
          beginCaptures: {1: {name: 'entity.name.section.rpm-spec'}},
          end: '^$|Z',
          patterns: [{include: '#std_section'}]
        },
        {
          begin: '^(%(?:build|check|clean|install|verifyscript))$',
          beginCaptures: {1: {name: 'entity.name.section.rpm-spec'}},
          end: '^$|Z',
          patterns: [{include: '#std_section'}]
        },
        {
          match: '^%(?:triggerin|triggerpostun|triggerun|trigger) --',
          name: 'entity.name.section.rpm-spec'
        },
        {
          begin:
            '^(%(?:preun|prep|pretrans|pre|posttrans|postun|post|packagepreun))',
          beginCaptures: {1: {name: 'entity.name.section.rpm-spec'}},
          end: '^$|Z',
          patterns: [{include: '#std_section'}]
        }
      ]
    },
    shell_syntax: {patterns: [{include: 'source.shell'}]},
    std_section: {
      patterns: [
        {include: '#comments'},
        {include: '#metadata'},
        {include: '#conditionals'},
        {include: '#commands'},
        {include: '#macros'},
        {include: '#modifiers'},
        {include: '#variables'},
        {include: '#licenses'},
        {include: '#constants'},
        {include: '#shell_syntax'}
      ]
    },
    variables: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.other.bracket.rpm-spec'},
            2: {name: 'variable.other.rpm-spec'},
            3: {name: 'punctuation.other.bracket.rpm-spec'}
          },
          match: '(%\\{with) ([a-zA-Z_][a-zA-Z0-9_:]*)(\\})'
        },
        {
          captures: {
            1: {name: 'punctuation.other.bracket.rpm-spec'},
            2: {name: 'variable.other.rpm-spec'},
            3: {name: 'punctuation.other.bracket.rpm-spec'}
          },
          match: '(%\\{defined) ([a-zA-Z_][a-zA-Z0-9_:]*)(\\})'
        },
        {
          captures: {
            1: {name: 'punctuation.other.bracket.rpm-spec'},
            2: {name: 'variable.other.rpm-spec'},
            3: {name: 'punctuation.other.bracket.rpm-spec'}
          },
          match: '(%\\{[!?]+)(_?[a-zA-Z]+[a-zA-Z0-9:_]*)(\\})'
        },
        {
          captures: {
            1: {name: 'punctuation.other.bracket.rpm-spec'},
            2: {name: 'variable.other.rpm-spec'},
            3: {name: 'punctuation.other.bracket.rpm-spec'}
          },
          match: '(%\\{)(_?[a-zA-Z][a-zA-Z0-9_:]*)(\\})'
        },
        {
          captures: {
            1: {name: 'punctuation.other.bracket.rpm-spec'},
            2: {name: 'variable.other.rpm-spec'}
          },
          match: '(%[!?]+)(_?[a-zA-Z][a-zA-Z0-9_:]*)'
        },
        {
          captures: {
            1: {name: 'punctuation.other.bracket.rpm-spec'},
            2: {name: 'variable.other.rpm-spec'}
          },
          match: '(%)(_?[a-zA-Z][a-zA-Z0-9_:]*)?'
        }
      ]
    }
  },
  scopeName: 'source.rpm-spec'
}

export default grammar
