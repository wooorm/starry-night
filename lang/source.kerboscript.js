// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/KSP-KOS/language-kerboscript>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ks'],
  names: ['kerboscript'],
  patterns: [
    {
      match: '\\b(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))\\b',
      name: 'constant.numeric.kerboscript'
    },
    {begin: '\\"', end: '\\"', name: 'string.quoted.double.kerboscript'},
    {begin: '//', end: '\\n', name: 'comment.line.double-slash.kerboscript'},
    {match: '(\\.)\\b', name: 'punctuation.terminator.kerboscript'},
    {
      match: '\\b(?i:(if|else|when|then|on))\\b',
      name: 'keyword.control.conditional.kerboscript'
    },
    {
      match: '\\b(?i:(for|until))\\b',
      name: 'keyword.control.repeat.kerboscript'
    },
    {
      match: '\\b(?i:(break|preserve))\\b',
      name: 'keyword.control.statement.kerboscript'
    },
    {
      match: '\\b(?i:(and|or|not))\\b',
      name: 'keyword.operator.logical.kerboscript'
    },
    {
      match: '(<\\=|>\\=|<|>|<>|\\=)',
      name: 'keyword.operator.comparison.kerboscript'
    },
    {
      match: '(\\+|\\-|\\*|/|\\^|\\(|\\))',
      name: 'keyword.operator.arithmetic.kerboscript'
    },
    {match: '\\b(?i:(e|g|pi))\\b', name: 'support.constant.kerboscript'},
    {
      match:
        '\\b(?i:(true|false|red|green|blue|yellow|cyan|magenta|purple|white|black))\\b',
      name: 'support.constant.kerboscript'
    },
    {
      match: '\\b(?i:(set|to|lock|unlock|declare|parameter|toggle|on|off))\\b',
      name: 'keyword.operator.assignment.kerboscript'
    },
    {
      match: '\\b(?i:(global|local|parameter))\\b',
      name: 'storage.modifier.kerboscript'
    },
    {
      match:
        '\\b(?i:(add|remove|stage|clearscreen|log|copy|rename|delete|edit|run|compile|reboot|shutdown|batch|deploy))\\b',
      name: 'support.function.kerboscript'
    },
    {
      match:
        '\\b(?i:(rgb|rgba|waypoint|allwaypoints|nextnode|ship|soi|mapview|version|sessiontime|time|config|terminal|eta|addons))\\b',
      name: 'constant.language.kerboscript'
    },
    {match: '\\b(?i:(major|minor))', name: 'variable.parameter.kerboscript'},
    {
      match:
        '\\b(?i:(throttle|steering|wheelthrottle|wheelsteering|ship|target|encounter|alt|heading|prograde|retrograde|facing|maxthrust|velocity|geoposition|latitude|longitude|up|north|body|angularmomentum|angularvel|angularvelocity|commrange|mass|verticalspeed|surfacespeed|airspeed|vesselname|altitude|apoapsis|periapsis|sensor|srfprograde|srfrerograde|obt|status|vesselname))\\b',
      name: 'constant.language.kerboscript'
    },
    {
      match:
        '\\b(?i:(sas|rcs|gear|legs|chutes|lights|panels|brakes|abort|ag[1-9][0-9]|ag[0-9]))\\b',
      name: 'constant.language.kerboscript'
    },
    {
      match:
        '\\:(?i:(tostring|hassuffix|suffixnames|isserializable|typename|istype|inheritance))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\:(?i:(apoapsis|periapsis|radar))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\:(?i:(apoapsis|periapsis|transition))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match:
        '\\b(?i:(list|bodies|targets|resources|parts|engines|sensors|elements|dockingports|files|volumes))\\b',
      name: 'support.function.kerboscript'
    },
    {
      match: '\\b(?i:(r|q|heading|lookdirup|angleaxis|rotatefromto))\\b',
      name: 'support.function.kerboscript'
    },
    {
      match:
        '\\:(?i:(vector|forevector|topvector|upvector|starvector|rightvector|inverse))',
      name: 'variable.parameter.kerboscript'
    },
    {
      match:
        '\\b(?i:(vdot|vectordotproduct|vcrs|vectorcrossproduct|vang|vectorangle|vxcl|vectorexclude))\\b',
      name: 'support.function.kerboscript'
    },
    {
      match: '\\:(?i:(x|y|z|normalized|sqrmagnitude|direction|vec))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match:
        '\\:(?i:(lat|lng|distance|terrainheight|heading|bearing|position|altitudeposition))',
      name: 'variable.parameter.kerboscript'
    },
    {
      match:
        '\\:(?i:(name|apoapsis|periapsis|body|period|inclination|eccentricity|semimajoraxis|semiminoraxis|lan|longitudeofascendingnode|argumentofperiapsis|trueanomaly|meananomalyatepoch|transition|position|velocity|nextpatch|hasnextpatch))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match:
        '\\:(?i:(orbit|surface|name|body|hasbody|hasorbit|hasobt|obt|up|north|prograde|srfprograde|retrograde|srfretrograde|position|velocity|distance|direction|latitude|longitude|altitude|geoposition|patches))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\:(?i:(body|exists|oxygen|scale|sealevelpressure|height))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match:
        '\\:(?i:(name|description|mass|altitude|rotationperiod|radius|mu|atm|angularvel|geopositionof|altitudeof))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\:(?i:(name|amount|capacity|parts))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match:
        '\\:(?i:(aquirerange|aquireforce|aquire|torque|reengageddistance|dockedshipname|portfacing|state|targetable))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {match: '\\:(?i:(undock))', name: 'support.function.kerboscript'},
    {
      match:
        '\\:(?i:(thrustlimit|maxthrust|thrust|fuelflow|isp|flameout|ignition|allowrestart|allowshutdown|throttlelock))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\:(?i:(activate|shutdown))',
      name: 'support.function.kerboscript'
    },
    {
      match:
        '\\:(?i:(range|responsespeed|pitchangle|yawangle|rollangle|lock))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match:
        '\\:(?i:(deltav|burnvector|eta|prograde|radialout|normal|orbit))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match:
        '\\:(?i:(name|title|mass|drymass|wetmass|tag|controlfrom|stage|uid|rotation|position|facing|resources|targetable|ship|modules|allmodules|parent|hasparent|hasphysics|children))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {match: '\\:(?i:(getmodule))', name: 'support.function.kerboscript'},
    {
      match:
        '\\:(?i:(name|part|allfields|allevents|allactions|hasfield|hasevent|hasaction))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\b(?i:(getfield|setfield|doevent|doaction))',
      name: 'support.function.kerboscript'
    },
    {
      match: '\\:(?i:(active|type|readout|powerconsumption))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {match: '\\b(?i:(toggle))', name: 'support.function.kerboscript'},
    {
      match: '\\:(?i:(ready|number|resources))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match:
        '\\:(?i:(control|bearing|heading|maxthrust|facing|mass|wetmass|drymass|verticalspeed|surfacespeed|airspeeed|termvelocity|shipname|name|angularmomentum|angularvel|sensors|loaded|patches|rootpart|parts|resources|partsnamed|partstitled|partstagged|partsdubbed|modulesnamed|partsingroup|modulesingroup|allpartstagged))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\:(?i:(acc|pres|temp|grav|light))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\:(?i:(name|amount|capacity|toggleable|enabled))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match:
        '\\:(?i:(name|body|geoposition|position|altitude|agl|nearsurface|grounded|index|clustered))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\:(?i:(r|red|g|green|b|blue|a|alpha|html|hex))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\b(?i:(positionat|velocityat|orbitat))',
      name: 'support.function.kerboscript'
    },
    {
      match:
        '\\b(?i:(abs|ceiling|floor|ln|log10|mod|min|max|round|sqrt|sin|cos|tan|arcsin|arccos|arctan|arctan2))\\b',
      name: 'support.function.kerboscript'
    },
    {
      match: '\\b(?i:(v|vector|direction|latlng))\\b',
      name: 'support.type.kerboscript'
    },
    {
      match: '\\b(?i:(print|at|from|volume|in|all|readjson|writejson))\\b',
      name: 'keyword.other.kerboscript'
    },
    {match: '\\b(?i:(function))\\b', name: 'storage.function.kerboscript'},
    {
      match:
        '\\:(?i:(width|height|reverse|visualbeep|brightness|charwidth|charheight))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\:(?i:(clock|calendar|second|minute|hour|day|year|seconds))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\b(?i:(lexicon|list|queue|range|stack))\\b',
      name: 'support.type.kerboscript'
    },
    {
      match:
        '\\:(?i:(add|casesensitive|case|clear|copy|dump|haskey|hasvalue|keys|values|length|remove))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\:(?i:(add|insert|clear|copy|sublist|join|remove))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\:(?i:(push|pop|peek|clear|copy))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\:(?i:(start|stop|step))\\b',
      name: 'variable.parameter.kerboscript'
    },
    {
      match: '\\:(?i:(push|pop|peek|clear|copy))\\b',
      name: 'variable.parameter.kerboscript'
    }
  ],
  scopeName: 'source.kerboscript'
}

export default grammar
