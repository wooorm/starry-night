// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['etc'],
  extensions: [],
  names: ['wget-config', 'wgetrc'],
  patterns: [{include: '#main'}],
  repository: {
    addhostdir: {
      begin:
        '(?i)^\\s*([-_]*a[-_]*d[-_]*d[-_]*h[-_]*o[-_]*s[-_]*t[-_]*d[-_]*i[-_]*r[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.addhostdir.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    adjustextension: {
      begin:
        '(?i)^\\s*([-_]*a[-_]*d[-_]*j[-_]*u[-_]*s[-_]*t[-_]*e[-_]*x[-_]*t[-_]*e[-_]*n[-_]*s[-_]*i[-_]*o[-_]*n[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.adjustextension.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    askpassword: {
      begin:
        '(?i)^\\s*([-_]*a[-_]*s[-_]*k[-_]*p[-_]*a[-_]*s[-_]*s[-_]*w[-_]*o[-_]*r[-_]*d[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.askpassword.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    authnochallenge: {
      begin:
        '(?i)^\\s*([-_]*a[-_]*u[-_]*t[-_]*h[-_]*n[-_]*o[-_]*c[-_]*h[-_]*a[-_]*l[-_]*l[-_]*e[-_]*n[-_]*g[-_]*e[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.authnochallenge.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    background: {
      begin:
        '(?i)^\\s*([-_]*b[-_]*a[-_]*c[-_]*k[-_]*g[-_]*r[-_]*o[-_]*u[-_]*n[-_]*d[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.background.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    backupconverted: {
      begin:
        '(?i)^\\s*([-_]*b[-_]*a[-_]*c[-_]*k[-_]*u[-_]*p[-_]*c[-_]*o[-_]*n[-_]*v[-_]*e[-_]*r[-_]*t[-_]*e[-_]*d[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.backupconverted.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    backups: {
      begin:
        '(?i)^\\s*([-_]*b[-_]*a[-_]*c[-_]*k[-_]*u[-_]*p[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.backups.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#number'}]
    },
    boolean: {
      match: '(?i)\\b(on|off)\\b',
      name: 'constant.logical.boolean.${1:/downcase}.wgetrc'
    },
    bytes: {
      captures: {
        1: {patterns: [{include: 'etc#num'}]},
        2: {name: 'keyword.other.unit.bytes.wgetrc'}
      },
      match: '(?i)([-+]?[.e\\d]+)(k|m)?'
    },
    cache: {
      begin: '(?i)^\\s*([-_]*c[-_]*a[-_]*c[-_]*h[-_]*e[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.cache.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    checkcertificate: {
      begin:
        '(?i)^\\s*([-_]*c[-_]*h[-_]*e[-_]*c[-_]*k[-_]*c[-_]*e[-_]*r[-_]*t[-_]*i[-_]*f[-_]*i[-_]*c[-_]*a[-_]*t[-_]*e[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.checkcertificate.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    connecttimeout: {
      begin:
        '(?i)^\\s*([-_]*c[-_]*o[-_]*n[-_]*n[-_]*e[-_]*c[-_]*t[-_]*t[-_]*i[-_]*m[-_]*e[-_]*o[-_]*u[-_]*t[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.connecttimeout.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#number'}]
    },
    contentdisposition: {
      begin:
        '(?i)^\\s*([-_]*c[-_]*o[-_]*n[-_]*t[-_]*e[-_]*n[-_]*t[-_]*d[-_]*i[-_]*s[-_]*p[-_]*o[-_]*s[-_]*i[-_]*t[-_]*i[-_]*o[-_]*n[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.contentdisposition.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    continue: {
      begin:
        '(?i)^\\s*([-_]*c[-_]*o[-_]*n[-_]*t[-_]*i[-_]*n[-_]*u[-_]*e[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.continue.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    convertlinks: {
      begin:
        '(?i)^\\s*([-_]*c[-_]*o[-_]*n[-_]*v[-_]*e[-_]*r[-_]*t[-_]*l[-_]*i[-_]*n[-_]*k[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.convertlinks.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    cookies: {
      begin:
        '(?i)^\\s*([-_]*c[-_]*o[-_]*o[-_]*k[-_]*i[-_]*e[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.cookies.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    cutdirs: {
      begin:
        '(?i)^\\s*([-_]*c[-_]*u[-_]*t[-_]*d[-_]*i[-_]*r[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.cutdirs.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#number'}]
    },
    debug: {
      begin: '(?i)^\\s*([-_]*d[-_]*e[-_]*b[-_]*u[-_]*g[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.debug.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    deleteafter: {
      begin:
        '(?i)^\\s*([-_]*d[-_]*e[-_]*l[-_]*e[-_]*t[-_]*e[-_]*a[-_]*f[-_]*t[-_]*e[-_]*r[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.deleteafter.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    dirstruct: {
      begin:
        '(?i)^\\s*([-_]*d[-_]*i[-_]*r[-_]*s[-_]*t[-_]*r[-_]*u[-_]*c[-_]*t[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.dirstruct.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    dnscache: {
      begin:
        '(?i)^\\s*([-_]*d[-_]*n[-_]*s[-_]*c[-_]*a[-_]*c[-_]*h[-_]*e[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.dnscache.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    dnstimeout: {
      begin:
        '(?i)^\\s*([-_]*d[-_]*n[-_]*s[-_]*t[-_]*i[-_]*m[-_]*e[-_]*o[-_]*u[-_]*t[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.dnstimeout.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#number'}]
    },
    dotbytes: {
      begin:
        '(?i)^\\s*([-_]*d[-_]*o[-_]*t[-_]*b[-_]*y[-_]*t[-_]*e[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.dotbytes.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#bytes'}]
    },
    dotsinline: {
      begin:
        '(?i)^\\s*([-_]*d[-_]*o[-_]*t[-_]*s[-_]*i[-_]*n[-_]*l[-_]*i[-_]*n[-_]*e[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.dotsinline.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#number'}]
    },
    dotspacing: {
      begin:
        '(?i)^\\s*([-_]*d[-_]*o[-_]*t[-_]*s[-_]*p[-_]*a[-_]*c[-_]*i[-_]*n[-_]*g[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.dotspacing.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#number'}]
    },
    encoding: {
      match: '(?:\\G|^|(?<==))\\s*([^=\\s#]+)',
      name: 'constant.language.encoding.wgetrc'
    },
    followftp: {
      begin:
        '(?i)^\\s*([-_]*f[-_]*o[-_]*l[-_]*l[-_]*o[-_]*w[-_]*f[-_]*t[-_]*p[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.followftp.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    forcehtml: {
      begin:
        '(?i)^\\s*([-_]*f[-_]*o[-_]*r[-_]*c[-_]*e[-_]*h[-_]*t[-_]*m[-_]*l[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.forcehtml.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    glob: {
      begin: '(?i)^\\s*([-_]*g[-_]*l[-_]*o[-_]*b[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.glob.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    httpkeepalive: {
      begin:
        '(?i)^\\s*([-_]*h[-_]*t[-_]*t[-_]*p[-_]*k[-_]*e[-_]*e[-_]*p[-_]*a[-_]*l[-_]*i[-_]*v[-_]*e[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.httpkeepalive.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    httpsonly: {
      begin:
        '(?i)^\\s*([-_]*h[-_]*t[-_]*t[-_]*p[-_]*s[-_]*o[-_]*n[-_]*l[-_]*y[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.httpsonly.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    ignorecase: {
      begin:
        '(?i)^\\s*([-_]*i[-_]*g[-_]*n[-_]*o[-_]*r[-_]*e[-_]*c[-_]*a[-_]*s[-_]*e[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.ignorecase.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    ignorelength: {
      begin:
        '(?i)^\\s*([-_]*i[-_]*g[-_]*n[-_]*o[-_]*r[-_]*e[-_]*l[-_]*e[-_]*n[-_]*g[-_]*t[-_]*h[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.ignorelength.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    inet4only: {
      begin:
        '(?i)^\\s*([-_]*i[-_]*n[-_]*e[-_]*t[-_]*4[-_]*o[-_]*n[-_]*l[-_]*y[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.inet4only.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    inet6only: {
      begin:
        '(?i)^\\s*([-_]*i[-_]*n[-_]*e[-_]*t[-_]*6[-_]*o[-_]*n[-_]*l[-_]*y[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.inet6only.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    iri: {
      begin: '(?i)^\\s*([-_]*i[-_]*r[-_]*i[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.iri.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    keepsessioncookies: {
      begin:
        '(?i)^\\s*([-_]*k[-_]*e[-_]*e[-_]*p[-_]*s[-_]*e[-_]*s[-_]*s[-_]*i[-_]*o[-_]*n[-_]*c[-_]*o[-_]*o[-_]*k[-_]*i[-_]*e[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.keepsessioncookies.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    limitrate: {
      begin:
        '(?i)^\\s*([-_]*l[-_]*i[-_]*m[-_]*i[-_]*t[-_]*r[-_]*a[-_]*t[-_]*e[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.limitrate.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#number'}]
    },
    localencoding: {
      begin:
        '(?i)^\\s*([-_]*l[-_]*o[-_]*c[-_]*a[-_]*l[-_]*e[-_]*n[-_]*c[-_]*o[-_]*d[-_]*i[-_]*n[-_]*g[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.localencoding.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#encoding'}]
    },
    main: {
      patterns: [
        {include: 'etc#comment'},
        {include: '#addhostdir'},
        {include: '#adjustextension'},
        {include: '#askpassword'},
        {include: '#authnochallenge'},
        {include: '#background'},
        {include: '#backupconverted'},
        {include: '#backups'},
        {include: '#cache'},
        {include: '#checkcertificate'},
        {include: '#connecttimeout'},
        {include: '#contentdisposition'},
        {include: '#continue'},
        {include: '#convertlinks'},
        {include: '#cookies'},
        {include: '#cutdirs'},
        {include: '#debug'},
        {include: '#deleteafter'},
        {include: '#dirstruct'},
        {include: '#dnscache'},
        {include: '#dnstimeout'},
        {include: '#dotbytes'},
        {include: '#dotsinline'},
        {include: '#dotspacing'},
        {include: '#followftp'},
        {include: '#forcehtml'},
        {include: '#glob'},
        {include: '#httpkeepalive'},
        {include: '#httpsonly'},
        {include: '#ignorecase'},
        {include: '#ignorelength'},
        {include: '#inet4only'},
        {include: '#inet6only'},
        {include: '#iri'},
        {include: '#limitrate'},
        {include: '#localencoding'},
        {include: '#keepsessioncookies'},
        {include: '#maxredirect'},
        {include: '#mirror'},
        {include: '#netrc'},
        {include: '#noclobber'},
        {include: '#noparent'},
        {include: '#pagerequisites'},
        {include: '#passiveftp'},
        {include: '#preferfamily'},
        {include: '#protocoldirectories'},
        {include: '#quiet'},
        {include: '#quota'},
        {include: '#randomwait'},
        {include: '#readtimeout'},
        {include: '#reclevel'},
        {include: '#recursive'},
        {include: '#relativeonly'},
        {include: '#remoteencoding'},
        {include: '#removelisting'},
        {include: '#restrictfilenames'},
        {include: '#retrsymlinks'},
        {include: '#retryconnrefused'},
        {include: '#robots'},
        {include: '#saveheaders'},
        {include: '#secureprotocol'},
        {include: '#serverresponse'},
        {include: '#showalldnsentries'},
        {include: '#spanhosts'},
        {include: '#spider'},
        {include: '#strictcomments'},
        {include: '#timeout'},
        {include: '#timestamping'},
        {include: '#tries'},
        {include: '#trustservernames'},
        {include: '#useproxy'},
        {include: '#useservertimestamps'},
        {include: '#verbose'},
        {include: '#waitretry'},
        {include: '#wait'},
        {
          captures: {
            1: {name: 'variable.assignment.parameter.name.wgetrc'},
            2: {patterns: [{include: 'etc#eql'}]},
            3: {
              name: 'string.unquoted.wgetrc',
              patterns: [{include: 'etc#url'}]
            }
          },
          match: '^\\s*([^#=\\s]+)\\s*(=)\\s*(\\S.*)\\s*$',
          name: 'meta.field.${1:/downcase}.wgetrc'
        }
      ]
    },
    maxredirect: {
      begin:
        '(?i)^\\s*([-_]*m[-_]*a[-_]*x[-_]*r[-_]*e[-_]*d[-_]*i[-_]*r[-_]*e[-_]*c[-_]*t[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.maxredirect.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#number'}]
    },
    mirror: {
      begin: '(?i)^\\s*([-_]*m[-_]*i[-_]*r[-_]*r[-_]*o[-_]*r[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.mirror.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    netrc: {
      begin: '(?i)^\\s*([-_]*n[-_]*e[-_]*t[-_]*r[-_]*c[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.netrc.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    noclobber: {
      begin:
        '(?i)^\\s*([-_]*n[-_]*o[-_]*c[-_]*l[-_]*o[-_]*b[-_]*b[-_]*e[-_]*r[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.noclobber.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    noparent: {
      begin:
        '(?i)^\\s*([-_]*n[-_]*o[-_]*p[-_]*a[-_]*r[-_]*e[-_]*n[-_]*t[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.noparent.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    number: {
      patterns: [
        {include: 'etc#num'},
        {
          match: '(?i)\\binf\\b',
          name: 'constant.language.numeric.infinity.wgetrc'
        }
      ]
    },
    pagerequisites: {
      begin:
        '(?i)^\\s*([-_]*p[-_]*a[-_]*g[-_]*e[-_]*r[-_]*e[-_]*q[-_]*u[-_]*i[-_]*s[-_]*i[-_]*t[-_]*e[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.pagerequisites.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    passiveftp: {
      begin:
        '(?i)^\\s*([-_]*p[-_]*a[-_]*s[-_]*s[-_]*i[-_]*v[-_]*e[-_]*f[-_]*t[-_]*p[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.passiveftp.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    preferfamily: {
      begin:
        '(?i)^\\s*([-_]*p[-_]*r[-_]*e[-_]*f[-_]*e[-_]*r[-_]*f[-_]*a[-_]*m[-_]*i[-_]*l[-_]*y[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.preferfamily.wgetrc',
      patterns: [
        {include: 'etc#eql'},
        {match: '\\S+', name: 'constant.other.family-type.wgetrc'}
      ]
    },
    protocoldirectories: {
      begin:
        '(?i)^\\s*([-_]*p[-_]*r[-_]*o[-_]*t[-_]*o[-_]*c[-_]*o[-_]*l[-_]*d[-_]*i[-_]*r[-_]*e[-_]*c[-_]*t[-_]*o[-_]*r[-_]*i[-_]*e[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.protocoldirectories.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    quiet: {
      begin: '(?i)^\\s*([-_]*q[-_]*u[-_]*i[-_]*e[-_]*t[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.quiet.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    quota: {
      begin: '(?i)^\\s*([-_]*q[-_]*u[-_]*o[-_]*t[-_]*a[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.quota.wgetrc',
      patterns: [
        {include: 'etc#eql'},
        {include: '#bytes'},
        {include: '#number'}
      ]
    },
    randomwait: {
      begin:
        '(?i)^\\s*([-_]*r[-_]*a[-_]*n[-_]*d[-_]*o[-_]*m[-_]*w[-_]*a[-_]*i[-_]*t[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.randomwait.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    readtimeout: {
      begin:
        '(?i)^\\s*([-_]*r[-_]*e[-_]*a[-_]*d[-_]*t[-_]*i[-_]*m[-_]*e[-_]*o[-_]*u[-_]*t[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.readtimeout.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#number'}]
    },
    reclevel: {
      begin:
        '(?i)^\\s*([-_]*r[-_]*e[-_]*c[-_]*l[-_]*e[-_]*v[-_]*e[-_]*l[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.reclevel.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#number'}]
    },
    recursive: {
      begin:
        '(?i)^\\s*([-_]*r[-_]*e[-_]*c[-_]*u[-_]*r[-_]*s[-_]*i[-_]*v[-_]*e[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.recursive.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    relativeonly: {
      begin:
        '(?i)^\\s*([-_]*r[-_]*e[-_]*l[-_]*a[-_]*t[-_]*i[-_]*v[-_]*e[-_]*o[-_]*n[-_]*l[-_]*y[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.relativeonly.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    remoteencoding: {
      begin:
        '(?i)^\\s*([-_]*r[-_]*e[-_]*m[-_]*o[-_]*t[-_]*e[-_]*e[-_]*n[-_]*c[-_]*o[-_]*d[-_]*i[-_]*n[-_]*g[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.remoteencoding.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#encoding'}]
    },
    removelisting: {
      begin:
        '(?i)^\\s*([-_]*r[-_]*e[-_]*m[-_]*o[-_]*v[-_]*e[-_]*l[-_]*i[-_]*s[-_]*t[-_]*i[-_]*n[-_]*g[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.removelisting.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    restrictfilenames: {
      begin:
        '(?i)^\\s*([-_]*r[-_]*e[-_]*s[-_]*t[-_]*r[-_]*i[-_]*c[-_]*t[-_]*f[-_]*i[-_]*l[-_]*e[-_]*n[-_]*a[-_]*m[-_]*e[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.removelisting.wgetrc',
      patterns: [
        {include: 'etc#eql'},
        {
          match: '(?i)\\b(unix|windows)\\b',
          name: 'constant.language.os-type.wgetrc'
        }
      ]
    },
    retrsymlinks: {
      begin:
        '(?i)^\\s*([-_]*r[-_]*e[-_]*t[-_]*r[-_]*s[-_]*y[-_]*m[-_]*l[-_]*i[-_]*n[-_]*k[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.retrsymlinks.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    retryconnrefused: {
      begin:
        '(?i)^\\s*([-_]*r[-_]*e[-_]*t[-_]*r[-_]*y[-_]*c[-_]*o[-_]*n[-_]*n[-_]*r[-_]*e[-_]*f[-_]*u[-_]*s[-_]*e[-_]*d[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.retryconnrefused.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    robots: {
      begin: '(?i)^\\s*([-_]*r[-_]*o[-_]*b[-_]*o[-_]*t[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.robots.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    saveheaders: {
      begin:
        '(?i)^\\s*([-_]*s[-_]*a[-_]*v[-_]*e[-_]*h[-_]*e[-_]*a[-_]*d[-_]*e[-_]*r[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.saveheaders.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    secureprotocol: {
      begin:
        '(?i)^\\s*([-_]*s[-_]*e[-_]*c[-_]*u[-_]*r[-_]*e[-_]*p[-_]*r[-_]*o[-_]*t[-_]*o[-_]*c[-_]*o[-_]*l[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.secureprotocol.wgetrc',
      patterns: [
        {include: 'etc#eql'},
        {
          captures: {1: {name: 'constant.language.secure-protocol.wgetrc'}},
          match: '(?:\\G|^|(?<==))\\s*([^\\s#]+)'
        }
      ]
    },
    serverresponse: {
      begin:
        '(?i)^\\s*([-_]*s[-_]*e[-_]*r[-_]*v[-_]*e[-_]*r[-_]*r[-_]*e[-_]*s[-_]*p[-_]*o[-_]*n[-_]*s[-_]*e[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.serverresponse.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    showalldnsentries: {
      begin:
        '(?i)^\\s*([-_]*s[-_]*h[-_]*o[-_]*w[-_]*a[-_]*l[-_]*l[-_]*d[-_]*n[-_]*s[-_]*e[-_]*n[-_]*t[-_]*r[-_]*i[-_]*e[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.showalldnsentries.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    spanhosts: {
      begin:
        '(?i)^\\s*([-_]*s[-_]*p[-_]*a[-_]*n[-_]*h[-_]*o[-_]*s[-_]*t[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.spanhosts.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    spider: {
      begin: '(?i)^\\s*([-_]*s[-_]*p[-_]*i[-_]*d[-_]*e[-_]*r[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.spider.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    strictcomments: {
      begin:
        '(?i)^\\s*([-_]*s[-_]*t[-_]*r[-_]*i[-_]*c[-_]*t[-_]*c[-_]*o[-_]*m[-_]*m[-_]*e[-_]*n[-_]*t[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.strictcomments.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    timeout: {
      begin:
        '(?i)^\\s*([-_]*t[-_]*i[-_]*m[-_]*e[-_]*o[-_]*u[-_]*t[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.timeout.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#number'}]
    },
    timestamping: {
      begin:
        '(?i)^\\s*([-_]*t[-_]*i[-_]*m[-_]*e[-_]*s[-_]*t[-_]*a[-_]*m[-_]*p[-_]*i[-_]*n[-_]*g[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.timestamping.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    tries: {
      begin: '(?i)^\\s*([-_]*t[-_]*r[-_]*i[-_]*e[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.tries.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#number'}]
    },
    trustservernames: {
      begin:
        '(?i)^\\s*([-_]*t[-_]*r[-_]*u[-_]*s[-_]*t[-_]*s[-_]*e[-_]*r[-_]*v[-_]*e[-_]*r[-_]*n[-_]*a[-_]*m[-_]*e[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.trustservernames.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    useproxy: {
      begin:
        '(?i)^\\s*([-_]*u[-_]*s[-_]*e[-_]*p[-_]*r[-_]*o[-_]*x[-_]*y[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.useproxy.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    useservertimestamps: {
      begin:
        '(?i)^\\s*([-_]*u[-_]*s[-_]*e[-_]*s[-_]*e[-_]*r[-_]*v[-_]*e[-_]*r[-_]*t[-_]*i[-_]*m[-_]*e[-_]*s[-_]*t[-_]*a[-_]*m[-_]*p[-_]*s[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.useservertimestamps.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    verbose: {
      begin:
        '(?i)^\\s*([-_]*v[-_]*e[-_]*r[-_]*b[-_]*o[-_]*s[-_]*e[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.verbose.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#boolean'}]
    },
    wait: {
      begin: '(?i)^\\s*([-_]*w[-_]*a[-_]*i[-_]*t[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.wait.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#number'}]
    },
    waitretry: {
      begin:
        '(?i)^\\s*([-_]*w[-_]*a[-_]*i[-_]*t[-_]*r[-_]*e[-_]*t[-_]*r[-_]*y[-_]*)(?=\\s|=|$)',
      beginCaptures: {1: {name: 'variable.assignment.parameter.name.wgetrc'}},
      end: '$',
      name: 'meta.field.waitretry.wgetrc',
      patterns: [{include: 'etc#eql'}, {include: '#number'}]
    }
  },
  scopeName: 'source.wgetrc'
}

export default grammar
