// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/BobDotCom/Nasal.tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: [],
  names: ['nasal'],
  patterns: [
    {
      match: '\\b(if|else|elsif|while|for|foreach|forindex|break|continue)\\b',
      name: 'keyword.control.nasal'
    },
    {
      match:
        '!|\\*|\\-|\\+|~|/|==|=|!=|<=|>=|<|>|!|\\?|\\:|\\*=|/=|\\+=|\\-=|~=|\\.\\.\\.|\\b(and|or)\\b',
      name: 'keyword.operator.nasal'
    },
    {match: '\\b(me|arg|parents|obj)\\b', name: 'variable.language.nasal'},
    {match: '\\b(func|return|var)\\b', name: 'storage.type.nas'},
    {match: '\\b(nil)\\b', name: 'constant.language'},
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nasal'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.nasal'}},
      name: 'string.quoted.single.nasal',
      patterns: [{match: "\\\\'", name: 'constant.character.escape.nasal'}]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nasal'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nasal'}},
      name: 'string.quoted.double.nasal',
      patterns: [
        {
          match:
            '\\\\(x[[:xdigit:]]{2}|[0-2][0-7]{,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|r|n|t|\\\\|")',
          name: 'constant.character.escape.nasal'
        }
      ]
    },
    {
      begin: '`',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nasal'}},
      end: '`',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nasal'}},
      name: 'string.other',
      patterns: [{name: 'constant.character.escape.nasal'}]
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.nasal'}},
      match: '(#).*$\\n?',
      name: 'comment.line.hash.nasal'
    },
    {
      match: '((\\b[0-9]+)?\\.)?\\b[0-9]+([eE][-+]?[0-9]+)?\\b',
      name: 'constant.numeric.nasal'
    },
    {match: '0[x|X][0-9a-fA-F]+', name: 'constant.numeric.nasal'},
    {match: '\\{|\\}', name: 'meta.brace.curly.nasal'},
    {match: '\\(|\\)', name: 'meta.brace.round.nasal'},
    {match: '\\[|\\]', name: 'meta.brace.square.nasal'},
    {match: '%|\\$|@|&|\\^|\\||\\\\|`', name: 'invalid.illegal'},
    {
      match:
        '\\b(append|bind|call|caller|chr|closure|cmp|compile|contains|delete|die|find|ghosttype|id|int|keys|left|num|pop|right|setsize|size|sort|split|sprintf|streq|substr|subvec|typeof)\\b',
      name: 'entity.name.function.nasal'
    },
    {
      match:
        '\\b(abort|abs|aircraftToCart|addcommand|airportinfo|airwaysRoute|assert|carttogeod|cmdarg|courseAndDistance|createDiscontinuity|createViaTo|createWP|createWPFrom|defined|directory|fgcommand|findAirportsByICAO|findAirportsWithinRange|findFixesByID|findNavaidByFrequency|findNavaidsByFrequency|findNavaidsByID|findNavaidsWithinRange|finddata|flightplan|geodinfo|geodtocart|get_cart_ground_intersection|getprop|greatCircleMove|interpolate|isa|logprint|magvar|maketimer|start|stop|restart|maketimestamp|md5|navinfo|parse_markdown|parsexml|print|printf|printlog|rand|registerFlightPlanDelegate|removecommand|removelistener|resolvepath|setlistener|_setlistener|setprop|srand|systime|thisfunc|tileIndex|tilePath|values)\\b',
      name: 'entity.name.function.nasal'
    },
    {
      match: '\\b(singleShot|isRunning|simulatedTime)\\b',
      name: 'variable.language.nasal'
    },
    {
      match:
        '\\b(D2R|FPS2KT|FT2M|GAL2L|IN2M|KG2LB|KT2FPS|KT2MPS|LG2GAL|LB2KG|M2FT|M2IN|M2NM|MPS2KT|NM2M|R2D)\\b',
      name: 'constant.language.nasal'
    },
    {
      match:
        '\\b(abs|acos|asin|atan2|avg|ceil|clamp|cos|exp|floor|fmod|in|log10|max|min|mod|periodic|pow|round|sin|sgn|sqrt|tan)\\b',
      name: 'support.function.nasal'
    },
    {match: '\\b(math)\\b', name: 'support.class.nasal'},
    {match: '\\b(e|pi)\\b', name: 'variable.language.nasal'},
    {
      match:
        '\\b(new|addChild|addChildren|alias|clearValue|equals|getAliasTarget|getAttribute|getBoolValue|getChild|getChildren|getIndex|getName|getNode|getParent|getPath|getType|getValue|getValues|initNode|remove|removeAllChildren|removeChild|removeChildren|setAttribute|setBoolValue|setDoubleValue|setIntValue|setValue|setValues|unalias|compileCondition|condition|copy|dump|getNode|nodeList|runBinding|setAll|wrap|wrapNode)\\b',
      name: 'entity.name.function.nasal'
    },
    {match: '\\b(Node)\\b', name: 'support.class.nasal'},
    {match: '\\b(props|globals)\\b', name: 'variable.language.nasal'},
    {match: '\\b(getText|setText)\\b', name: 'entity.name.function.nasal'},
    {match: '\\b(clipboard)\\b', name: 'support.class.nasal'},
    {match: '\\b(CLIPBOARD|SELECTION)\\b', name: 'constant.language.nasal'},
    {
      match:
        '\\b(new|set|set_lat|set_lon|set_alt|set_latlon|set_x|set_y|set_z|set_xyz|lat|lon|alt|latlon|x|y|z|xyz|is_defined|dump|course_to|distance_to|direct_distance_to|apply_course_distance|test|update|_equals|aircraft_position|click_position|elevation|format|normdeg|normdeg180|put_model|tile_index|tile_path|viewer_position)\\b',
      name: 'entity.name.function.nasal'
    },
    {match: '\\b(geo|PositionedSearch|Coord)\\b', name: 'support.class.nasal'},
    {match: '\\b(ERAD)\\b', name: 'constant.language.nasal'},
    {
      match:
        '\\b(basename|close|dirname|flush|include|load_nasal|open|read|read_airport_properties|read_properties|readfile|readln|readxml|seek|stat|tell|write|write_properties|writexml)\\b',
      name: 'entity.name.function.nasal'
    },
    {match: '\\b(io)\\b', name: 'support.class.nasal'},
    {
      match: '\\b(SEEK_CUR|SEEK_END|SEEK_SET)\\b',
      name: 'constant.language.nasal'
    },
    {
      match:
        '\\b(new|set|append|concat|exists|canRead|canWrite|isFile|isDir|isRelative|isAbsolute|isNull|create_dir|remove|rename|realpath|file|dir|base|file_base|extension|lower_extension|complete_lower_extension|str|mtime)\\b',
      name: 'entity.name.function.nasal'
    },
    {match: '\\b(os\\.path)\\b', name: 'support.class.nasal'},
    {
      match:
        '\\b(popupTip|showDialog|menuEnable|menuBind|setCursor|findElementByName|fpsDisplay|latencyDisplay|popdown|set|setColor|setFont|setBinding|state|del|load|toggle|is_open|reinit|rescan|select|next|previous|set_title|set_button|set_directory|set_file|set_dotfiles|set_pattern|save_flight|load_flight|set_screenshotdir|property_browser|dialog_apply|dialog_update|enable_widgets|nextStyle|setWeight|setWeightOpts|weightChangeHandler|showWeightDialog|showHelpDialog)\\b',
      name: 'entity.name.function.nasal'
    },
    {
      match:
        '\\b(gui|Widget|Dialog|OverlaySelector|FileSelector|DirSelector)\\b',
      name: 'support.class.nasal'
    }
  ],
  scopeName: 'source.nasal'
}

export default grammar
