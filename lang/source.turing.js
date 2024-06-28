// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-turing>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.tu'],
  names: ['turing'],
  patterns: [{include: '#main'}],
  repository: {
    boolean: {
      match: '\\b(true|false)\\b',
      name: 'constant.language.boolean.$1.turing'
    },
    case: {
      begin: '^\\s*(case)\\s+(\\w+)\\s+(of)\\b',
      beginCaptures: {
        0: {name: 'meta.scope.begin.turing'},
        1: {name: 'keyword.control.case.turing'},
        2: {name: 'variable.parameter.turing'},
        3: {name: 'keyword.operator.of.turing'}
      },
      end: '^\\s*(end\\s+case)\\b',
      endCaptures: {
        0: {name: 'meta.scope.end.turing'},
        1: {name: 'keyword.control.end.case.turing'}
      },
      name: 'meta.scope.case-block.turing',
      patterns: [{include: '#label'}, {include: '$self'}]
    },
    cc: {
      captures: {
        1: {name: 'keyword.control.directive.conditional.turing'},
        2: {name: 'punctuation.definition.directive.turing'}
      },
      match: '^\\s*((#)((?:end\\s+)?if|elsif|else))',
      name: 'meta.preprocessor.$3.turing'
    },
    class: {
      begin: '^\\s*(class|module|monitor)\\s+(\\w+)',
      beginCaptures: {
        0: {name: 'meta.scope.begin.turing'},
        1: {name: 'storage.type.$1.turing'},
        2: {name: 'entity.name.type.class.turing'}
      },
      end: '\\b(end)\\s+(\\2)',
      endCaptures: {
        0: {name: 'meta.scope.end.turing'},
        1: {name: 'keyword.control.end.turing'},
        2: {name: 'entity.name.type.class.turing'}
      },
      name: 'meta.scope.$1-block.turing',
      patterns: [{include: '#class-innards'}, {include: '$self'}]
    },
    'class-innards': {
      patterns: [
        {
          begin: '\\b(import|export)\\b',
          beginCaptures: {1: {name: 'keyword.control.$1.turing'}},
          end: '(?=$|%|/\\*)',
          patterns: [{include: '#list'}, {include: '$self'}]
        },
        {
          begin: '\\b(inherit)\\b',
          beginCaptures: {1: {name: 'storage.modifier.inherit.turing'}},
          end: '\\w+',
          endCaptures: {0: {name: 'entity.other.inherited-class.turing'}},
          name: 'meta.other.inherited-class.turing',
          patterns: [{include: '$self'}]
        },
        {
          begin: '\\b(implement(?:\\s+by)?)\\b',
          beginCaptures: {1: {name: 'storage.modifier.implements.turing'}},
          end: '\\w+',
          endCaptures: {0: {name: 'entity.other.inherited-class.turing'}},
          name: 'meta.other.$1.turing',
          patterns: [{include: '$self'}]
        }
      ]
    },
    comments: {
      patterns: [
        {
          begin: '%',
          beginCaptures: {0: {name: 'punctuation.definition.comment.turing'}},
          end: '$',
          name: 'comment.line.percentage.turing'
        },
        {
          begin: '/\\*',
          beginCaptures: {0: {name: 'punctuation.definition.comment.turing'}},
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.turing'}},
          name: 'comment.block.bracketed.turing'
        }
      ]
    },
    escapes: {
      patterns: [
        {match: '\\\\"', name: 'constant.character.escape.double-quote.turing'},
        {match: "\\\\'", name: 'constant.character.escape.single-quote.turing'},
        {match: '\\\\[nN]', name: 'constant.character.escape.newline.turing'},
        {match: '\\\\[tT]', name: 'constant.character.escape.tab.turing'},
        {match: '\\\\[fF]', name: 'constant.character.escape.form-feed.turing'},
        {match: '\\\\[rR]', name: 'constant.character.escape.return.turing'},
        {match: '\\\\[bB]', name: 'constant.character.escape.backspace.turing'},
        {match: '\\\\[eE]', name: 'constant.character.escape.esc.turing'},
        {match: '\\\\\\\\', name: 'constant.character.escape.backslash.turing'}
      ]
    },
    for: {
      begin: '^\\s*(for)\\b(?:\\s+(decreasing)\\b)?',
      beginCaptures: {
        0: {name: 'meta.scope.begin.turing'},
        1: {name: 'keyword.control.for.turing'},
        2: {name: 'keyword.operator.decreasing.turing'}
      },
      end: '^\\s*(end)\\s+(for)',
      endCaptures: {
        0: {name: 'meta.scope.end.turing'},
        1: {name: 'keyword.control.end.turing'},
        2: {name: 'keyword.control.for.turing'}
      },
      name: 'meta.scope.for-loop.turing',
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '$self'}]},
            2: {name: 'keyword.control.by.turing'}
          },
          match: '\\G(.*?)\\b(by)\\b'
        },
        {include: '$self'}
      ]
    },
    forward: {
      patterns: [
        {
          begin: '^\\s*\\b(deferred|forward)\\s+(procedure|proc)\\s+(\\w+)',
          beginCaptures: {
            1: {name: 'storage.modifier.$1.turing'},
            2: {name: 'storage.type.function.turing'},
            3: {name: 'entity.name.function.turing'}
          },
          end: '(?=$|%|/\\*)',
          name: 'meta.$1.procedure.turing',
          patterns: [{include: '#parameters'}, {include: '$self'}]
        },
        {
          begin: '^\\s*\\b(deferred|forward)\\s+(function|fcn)\\s+(\\w+)',
          beginCaptures: {
            1: {name: 'storage.modifier.$1.turing'},
            2: {name: 'storage.type.function.turing'},
            3: {name: 'entity.name.function.turing'}
          },
          end: '(?=$|%|/\\*)',
          name: 'meta.$1.function.turing',
          patterns: [{include: '#parameters'}, {include: '$self'}]
        }
      ]
    },
    function: {
      begin:
        '(?x)\n\\b\n(?:\n\t(body)          # 1: storage.modifier.body.turing\n\t\\s+\n)?\n(function|fcn)      # 2: storage.type.turing\n(?:\n\t\\s+\n\t(pervasive|\\*) # 3: storage.modifier.pervasive.turing\n)?\n\\s+\n(\\w+)              # 4: entity.name.function.turing\n\\s*\n(                   # 5: meta.function.parameters.turing\n\t(\\()           # 6: punctuation.definition.parameters.begin.turing\n\t(.*)            # 7: include: “#param-declarations”\n\t(\\))           # 8: punctuation.definition.parameters.end.turing\n)\n\\s*\n(:)                 # 9: punctuation.separator.key-value.turing\n\\s*\n(\\w+)              # 10: storage.type.type-spec.turing',
      beginCaptures: {
        1: {name: 'storage.modifier.body.turing'},
        10: {name: 'storage.type.type-spec.turing'},
        2: {name: 'storage.type.turing'},
        3: {name: 'storage.modifier.pervasive.turing'},
        4: {name: 'entity.name.function.turing'},
        5: {name: 'meta.function.parameters.turing'},
        6: {name: 'punctuation.definition.parameters.begin.turing'},
        7: {patterns: [{include: '#param-declarations'}]},
        8: {name: 'punctuation.definition.parameters.end.turing'},
        9: {name: 'punctuation.separator.key-value.turing'}
      },
      end: '\\b(end)\\s+(\\4)',
      endCaptures: {
        1: {name: 'keyword.control.end.turing'},
        2: {name: 'entity.name.function.turing'}
      },
      name: 'meta.function.turing',
      patterns: [
        {
          begin: '^\\s*(pre|init|post)(?=\\s|$)',
          beginCaptures: {1: {name: 'keyword.function.$1.turing'}},
          end: '$',
          name: 'meta.$1-function.turing',
          patterns: [{include: '$self'}]
        },
        {include: '$self'}
      ]
    },
    'function-call': {
      patterns: [
        {
          begin: '(([\\w.]+))\\s*(\\()',
          beginCaptures: {
            1: {name: 'entity.function.name.turing'},
            2: {patterns: [{include: '#function-name'}]},
            3: {name: 'punctuation.definition.arguments.begin.turing'}
          },
          contentName: 'meta.function-call.arguments.turing',
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.arguments.end.turing'}
          },
          name: 'meta.function-call.turing',
          patterns: [{include: '$self'}]
        },
        {
          captures: {
            1: {name: 'entity.function.name.turing'},
            2: {patterns: [{include: '#function-name'}]}
          },
          match: '^\\s*(([\\w.]+))\\s*(?=$|%|/\\*)',
          name: 'meta.function-call.turing'
        }
      ]
    },
    'function-name': {
      patterns: [
        {include: '#stdlib'},
        {match: '\\.', name: 'punctuation.separator.method.turing'}
      ]
    },
    handler: {
      begin: '^\\s*(handler)\\s*(\\()\\s*(\\w+)\\s*(\\))',
      beginCaptures: {
        0: {name: 'meta.scope.begin.turing'},
        1: {name: 'storage.type.handler.turing'},
        2: {name: 'punctuation.definition.arguments.begin.turing'},
        3: {name: 'variable.parameter.handler.turing'},
        4: {name: 'punctuation.definition.arguments.end.turing'}
      },
      end: '^\\s*(end)\\s+(handler)\\b',
      endCaptures: {
        0: {name: 'meta.scope.end.turing'},
        1: {name: 'keyword.control.end.turing'},
        2: {name: 'storage.type.handler.turing'}
      },
      name: 'meta.scope.handler.turing',
      patterns: [{include: '$self'}]
    },
    if: {
      begin: '^\\s*(if)\\b',
      beginCaptures: {
        0: {name: 'meta.scope.begin.turing'},
        1: {name: 'keyword.control.conditional.turing'}
      },
      end: '^\\s*(end\\s+if)\\b',
      endCaptures: {
        0: {name: 'meta.scope.end.turing'},
        1: {name: 'keyword.control.conditional.turing'}
      },
      name: 'meta.scope.if-block.turing',
      patterns: [{include: '$self'}]
    },
    'keyboard-constants': {
      match:
        '(?x)\\b(?:\n(?:KEY|ORD)_(?:\n\tF1[0-2]|F[1-9]|CTRL_[A-Z]|ALT_[A-Z0-9]|(?:CTRL|ALT|SHIFT)_(?:F1[0-2]|F[1-9])|\n\tALT(?:_EQUALS|_MINUS)?|BACK_TAB|BACKSPACE|CTRL|DELETE|END|ENTER|ESC|HOME|INSERT|KEYPAD_5|PGDN|PGUP|SHIFT|SHIFT_TAB|TAB|\n\tCTRL_(?:BACKSLASH|BACKSPACE|CARET|(?:UP|RIGHT|LEFT|DOWN)_ARROW|CLOSE_BRACKET|DELETE|END|HOME|INSERT|OPEN_BRACKET|PGDN|PGUP|UNDERSCORE)|\n\t(?:UP|RIGHT|LEFT|DOWN)_ARROW)\n|\nORD_(?:\n\tAMPERSAND|APOSTROPHE|ASTERISK|BACKSLASH|BAR|CARET|COLON|COMMA|DOT|EQUALS|(?:GREATER|LESS)_THAN|\n\t(?:CLOSE|OPEN)_(?:BRACE|BRACKET|PARENTHESIS)|(?:EXCALAMATION|HAS|QUESTION|QUOTATION)_MARK|MINUS|\n\t(?:AT|DOLLAR|PERCENT)_SIGN|PERIOD|PLUS|SEMICOLON|SINGLE_QUOTE|SLASH|SPACE|TILDE|UNDERSCORE|[A-Z0-9]|LOWER_[A-Z])\n)\\b',
      name: 'support.constant.keyboard.turing'
    },
    keywords: {
      patterns: [
        {
          match:
            '(?:^\\s*)?+\\b((?:end\\s+)?if|then|elsif|else|(?:end\\s+)?loop|exit|when|include|in|end)\\b',
          name: 'keyword.control.$1.turing'
        },
        {
          match: '\\b(and|not|x?or)\\b',
          name: 'keyword.operator.logical.$1.turing'
        },
        {
          match: '\\b(all|bits|div|lower|mod|nil|rem|shl|shr|unit|upper)\\b',
          name: 'keyword.operator.$1.turing'
        },
        {
          match:
            '\\b(assert|begin|break|close|exit|fork|free|get|init|invariant|new|objectclass|open|pause|put|quit|read|result|return|seek|signal|tag|tell|wait|write)\\b',
          name: 'keyword.other.statement.$1.turing'
        },
        {
          captures: {
            2: {name: 'punctuation.definition.arguments.begin.turing'},
            4: {name: 'punctuation.definition.arguments.end.turing'}
          },
          match: '\\b(char)\\s*(\\()(\\d+)(\\))',
          name: 'storage.type.$3-char.turing'
        },
        {
          match:
            '(?x)\\b\n(black|blue|brightblue|brightcyan|brightgreen|brightmagenta|brightpurple|brightred\n|brightwhite|brown|colou?r[bf]g|cyan|darkgr[ae]y|gr[ae]y|green|magenta|purple|red\n|white|yellow)\\b',
          name: 'constant.other.colour.turing'
        },
        {match: '\\b(skip|self)\\b', name: 'constant.language.$1.turing'}
      ]
    },
    label: {
      begin: '\\b(label)\\b',
      beginCaptures: {1: {name: 'keyword.other.statement.label.turing'}},
      end: ':',
      endCaptures: {0: {name: 'punctuation.separator.key-value.turing'}},
      name: 'meta.label.turing',
      patterns: [{include: '$self'}, {include: '#list'}]
    },
    list: {
      patterns: [
        {match: '\\w+', name: 'variable.name.turing'},
        {match: ',', name: 'meta.delimiter.object.comma.turing'}
      ]
    },
    main: {
      patterns: [
        {include: '#comments'},
        {include: '#boolean'},
        {include: '#strings'},
        {include: '#numbers'},
        {include: '#for'},
        {include: '#cc'},
        {include: '#if'},
        {include: '#case'},
        {include: '#types'},
        {include: '#function'},
        {include: '#keywords'},
        {include: '#modifiers'},
        {include: '#variables'},
        {include: '#punctuation'},
        {include: '#forward'},
        {include: '#procedure'},
        {include: '#process'},
        {include: '#handler'},
        {include: '#class'},
        {include: '#type'},
        {include: '#record'},
        {include: '#union'},
        {include: '#function-call'},
        {include: '#stdlib'}
      ]
    },
    'math-routines': {
      match:
        '\\b(abs|arccos|arccosd|arcsin|arcsind|arctan|arctand|cos|cosd|exp|ln|max|min|sign|sin|sind|tan|tand|sqrt)\\b',
      name: 'support.function.${1:/downcase}.turing'
    },
    modifiers: {
      patterns: [
        {
          match: '\\b(unchecked|checked)\\b',
          name: 'storage.modifier.$1.compiler-directive.oot.turing'
        },
        {
          match: '\\b(unqualified|~\\.)\\b',
          name: 'storage.modifier.unqualified.turing'
        },
        {
          match: '\\b(external|flexible|opaque|register)\\b',
          name: 'storage.modifier.$1.turing'
        }
      ]
    },
    modules: {
      patterns: [
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.$3.turing'}
          },
          match:
            '\\b(Concurrency)\\b(?:(\\.)(empty|[gs]etpriority|simutime)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match: '\\b(Config)\\b(?:(\\.)(Display|Lang|Machine)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(Dir)\\b(?:(\\.)(Change|Close|Create|Current|Delete|Get|GetLong|Open)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(Draw)\\b(?:(\\.)(Arc|Box|Cls|Dot|Fill|FillArc|FillBox|FillMapleLeaf|FillOval|FillPolygon|FillStar|Line|MapleLeaf|Oval|Polygon|Star|Text)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(Error)\\b(?:(\\.)(Last|LastMsg|LastStr|Msg|Str|Trip)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match: '\\b(ErrorNum|Exceptions)\\b(?:(\\.)(\\w+)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(File)\\b(?:(\\.)(Copy|Delete|DiskFree|Exists|Rename|Status)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(Font)\\b(?:(\\.)(Draw|Free|GetName|GetSize|GetStyle|Name|New|Sizes|StartName|StartSize|Width)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '(?x)\\b(GUI)\\b(?:(\\.)\n(AddLine|AddText|Alert|Alert2|Alert3|AlertFull|Choose|ChooseFull|ClearText|CloseWindow|CreateButton|CreateButtonFull\n|CreateCanvas|CreateCanvasFull|CreateCheckBox|CreateCheckBoxFull|CreateFrame|CreateHorizontalScrollBar|CreateHorizontalScrollBarFull\n|CreateHorizontalSlider|CreateLabel|CreateLabelFull|CreateLabelledFrame|CreateLine|CreateMenu|CreateMenuItem|CreateMenuItemFull\n|CreatePicture|CreatePictureButton|CreatePictureButtonFull|CreatePictureRadioButton|CreatePictureRadioButtonFull|CreateRadioButton\n|CreateRadioButtonFull|CreateTextBox|CreateTextBoxFull|CreateTextField|CreateTextFieldFull|CreateVerticalScrollBar|CreateVerticalScrollBarFull\n|CreateVerticalSlider|Disable|Dispose|DrawArc|DrawBox|DrawCls|DrawDot|DrawFill|DrawFillArc|DrawFillBox|DrawFillMapleLeaf|DrawFillOval\n|DrawFillPolygon|DrawFillStar|DrawLine|DrawMapleLeaf|DrawOval|DrawPolygon|DrawStar|DrawText|Enable|FontDraw|GetCheckBox|GetEventTime\n|GetEventWidgetID|GetEventWindow|GetHeight|GetMenuBarHeight|GetScrollBarWidth|GetSliderValue|GetText|GetVersion|GetWidth|GetX|GetY|Hide\n|HideMenuBar|OpenFile|OpenFileFull|PicDraw|PicNew|PicScreenLoad|PicScreenSave|ProcessEvent|Quit|Refresh|SaveFile|SaveFileFull|SelectRadio\n|SetActive|SetBackgroundColor|SetBackgroundColour|SetCheckBox|SetDefault|SetDisplayWhenCreated|SetKeyEventHandler|SetLabel|SetMouseEventHandler\n|SetNullEventHandler|SetPosition|SetPositionAndSize|SetScrollAmount|SetSelection|SetSize|SetSliderMinMax|SetSliderReverse|SetSliderSize\n|SetSliderValue|SetText|SetXOR|Show|ShowMenuBar)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(Input)\\b(?:(\\.)(getch|getchar|hasch|KeyDown|Pause)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match: '\\b(Joystick)\\b(?:(\\.)(GetInfo)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {patterns: [{include: '#keyboard-constants'}]}
          },
          match: '\\b(Keyboard)\\b(?:(\\.)(\\w+)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(Limits)\\b(?:(\\.)(DefaultFW|DefaultEW|minint|maxint|minnat|maxnat)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.constant.${3:/downcase}.turing'},
            4: {name: 'support.function.${4:/downcase}.turing'},
            5: {patterns: [{include: '#math-routines'}]}
          },
          match:
            '(?x)\\b(Math)\\b(?:(\\.)(?:(PI|E)|(Distance|DistancePointLine)|(\\w+))?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(Mouse)\\b(?:(\\.)(ButtonChoose|ButtonMoved|ButtonWait|Where)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(Music)\\b(?:(\\.)(Play|PlayFile|PlayFileStop|Sound|SoundOff)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '(?x)\n\\b(Net)\\b(?:(\\.)\n(BytesAvailable|CharAvailable|CloseConnection|HostAddressFromName|HostNameFromAddress\n|LineAvailable|LocalAddress|LocalName|OpenConnection|OpenURLConnection|TokenAvailable\n|WaitForConnection)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match: '\\b(PC)\\b(?:(\\.)(ParallelGet|ParallelPut)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '(?x)\n\\b(Pic)\\b(?:(\\.)\n(Blend|Blur|Draw|DrawFrames|DrawFramesBack|DrawSpecial|DrawSpecialBack|FileNew\n|FileNewFrames|Flip|Frames|Free|Height|Mirror|New|Rotate|Save|Scale|ScreenLoad\n|ScreenSave|SetTransparentColou?r|Width)?\n\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match: '\\b(Rand)\\b(?:(\\.)(Int|Next|Real|Reset|Seed|Set)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(RGB)\\b(?:(\\.)(AddColou?r|[GS]etColou?r|maxcolou?r)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(Sprite)\\b(?:(\\.)(Animate|ChangePic|Free|Hide|New|SetFrameRate|SetHeight|SetPosition|Show)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match: '\\b(Stream)\\b(?:(\\.)(eof|Flush|FlushAll)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {patterns: [{include: '#str-routines'}]}
          },
          match: '\\b(Str)\\b(?:(\\.)(\\w+)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(Sys)\\b(?:(\\.)(Exec|FetchArg|GetComputerName|GetEnv|GetPid|GetUserName|Nargs)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(Text)\\b(?:(\\.)(Cls|Colou?r|Colou?rBack|Locate|LocateXY|maxcol|maxrow|WhatCol|WhatColou?r|WhatColou?rBack|WhatRow)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(Time)\\b(?:(\\.)(Date|DateSec|Delay|Elapsed|ElapsedCPU|PartsSec|Sec|SecDate|SecParts)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {patterns: [{include: '#typeconv-routines'}]}
          },
          match: '\\b(TypeConv)\\b(?:(\\.)(\\w+)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(View)\\b(?:(\\.)(ClipAdd|ClipOff|ClipSet|maxcolou?r|maxx|maxy|Set|Update|WhatDotColou?r)?\\b)?'
        },
        {
          captures: {
            1: {name: 'support.class.${1:/downcase}.turing'},
            2: {name: 'meta.delimiter.property.period.turing'},
            3: {name: 'support.function.${3:/downcase}.turing'}
          },
          match:
            '\\b(Window)\\b(?:(\\.)(Close|GetActive|GetPosition|GetSelect|Hide|Open|Select|Set|SetActive|SetPosition|Show|Update)?\\b)?'
        }
      ]
    },
    numbers: {
      patterns: [
        {match: '16#[A-Fa-f0-9]+', name: 'constant.numeric.base-16.hex.turing'},
        {match: '(\\d+)#\\d+', name: 'constant.numeric.base-$1.turing'},
        {
          match: '\\b\\d+\\.\\d+(?:[Ee][\\+\\-]?\\d+)?\\b',
          name: 'constant.numeric.float.turing'
        },
        {match: '\\b\\d+\\b', name: 'constant.numeric.int.turing'}
      ]
    },
    'param-declarations': {
      captures: {
        1: {name: 'variable.parameter.function.turing'},
        2: {name: 'storage.type.turing'},
        3: {patterns: [{include: '#types'}]}
      },
      match: '\\b(\\w+)\\s+(:)\\s+((\\w+))'
    },
    parameters: {
      begin: '\\G\\s*(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.arguments.begin.turing'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.arguments.end.turing'}},
      name: 'meta.function.parameters.turing',
      patterns: [
        {include: '$self'},
        {match: '\\w+', name: 'variable.parameter.function.turing'}
      ]
    },
    procedure: {
      begin: '^\\s*(?:(body)\\s+)?(procedure|proc)\\s+(\\w+)',
      beginCaptures: {
        0: {name: 'meta.scope.begin.turing'},
        1: {name: 'storage.modifier.$1.turing'},
        2: {name: 'storage.type.function.turing'},
        3: {name: 'entity.name.function.turing'}
      },
      end: '^\\s*(end)\\s+(\\3)',
      endCaptures: {
        0: {name: 'meta.scope.end.turing'},
        1: {name: 'keyword.control.end.turing'},
        2: {name: 'entity.name.function.turing'}
      },
      name: 'meta.scope.procedure.turing',
      patterns: [{include: '#parameters'}, {include: '$self'}]
    },
    process: {
      begin: '^\\s*(process)(?:\\s+(pervasive|\\*)(?=\\s))?\\s+(\\w+)',
      beginCaptures: {
        0: {name: 'meta.scope.begin.turing'},
        1: {name: 'storage.type.function.turing'},
        2: {name: 'storage.modifier.pervasive.turing'},
        3: {name: 'entity.name.function.turing'}
      },
      end: '^\\s*(end)\\s+(\\3)',
      endCaptures: {
        0: {name: 'meta.scope.end.turing'},
        1: {name: 'keyword.control.end.turing'},
        2: {name: 'entity.name.function.turing'}
      },
      name: 'meta.scope.process.turing',
      patterns: [{include: '#parameters'}, {include: '$self'}]
    },
    punctuation: {
      patterns: [
        {match: '\\.\\.', name: 'punctuation.definition.range.turing'},
        {
          match: ':=',
          name: 'punctuation.separator.key-value.assignment.turing'
        },
        {match: '->', name: 'punctuation.separator.class.accessor.turing'},
        {match: '\\+', name: 'keyword.operator.arithmetic.add.turing'},
        {match: '-', name: 'keyword.operator.arithmetic.subtract.turing'},
        {match: '\\*', name: 'keyword.operator.arithmetic.multiply.turing'},
        {match: '\\/', name: 'keyword.operator.arithmetic.divide.turing'},
        {
          match: '<=',
          name: 'keyword.operator.logical.equal-or-less.subset.turing'
        },
        {
          match: '>=',
          name: 'keyword.operator.logical.equal-or-greater.superset.turing'
        },
        {match: '<', name: 'keyword.operator.logical.less.turing'},
        {match: '>', name: 'keyword.operator.logical.greater.turing'},
        {match: '=', name: 'keyword.operator.logical.equal.turing'},
        {match: 'not=|~=', name: 'keyword.operator.logical.not.turing'},
        {match: '\\^', name: 'keyword.operator.pointer-following.turing'},
        {match: '#', name: 'keyword.operator.type-cheat.turing'},
        {match: '@', name: 'keyword.operator.indirection.turing'},
        {match: ':', name: 'punctuation.separator.key-value.turing'},
        {match: '\\(', name: 'punctuation.definition.arguments.begin.turing'},
        {match: '\\)', name: 'punctuation.definition.arguments.end.turing'}
      ]
    },
    record: {
      begin: '^\\s*(record)\\b',
      beginCaptures: {
        0: {name: 'meta.scope.begin.turing'},
        1: {name: 'storage.type.record.turing'}
      },
      end: '^\\s*(end)\\s+(record)\\b',
      endCaptures: {
        0: {name: 'meta.scope.end.turing'},
        1: {name: 'keyword.control.end.turing'},
        2: {name: 'storage.type.record.turing'}
      },
      name: 'meta.scope.record-block.turing',
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#list'}]},
            3: {name: 'punctuation.separator.record.key-value.turing'}
          },
          match: '((\\s*\\w+\\s*,?)+)(:)'
        },
        {include: '$self'}
      ]
    },
    stdlib: {
      patterns: [
        {include: '#modules'},
        {include: '#stdproc'},
        {match: '\\b(anyclass)\\b', name: 'support.class.anyclass.turing'},
        {include: '#keyboard-constants'},
        {include: '#math-routines'},
        {include: '#str-routines'},
        {include: '#typeconv-routines'}
      ]
    },
    stdproc: {
      match:
        '(?x)\\b\n(addr|buttonchoose|buttonmoved|buttonwait|clock|cls|colou?r|colou?rback|date|delay|drawarc|drawbox|drawdot\n|drawfill|drawfillarc|drawfillbox|drawfillmapleleaf|drawfilloval|drawfillpolygon|drawfillstar|drawline\n|drawmapleleaf|drawoval|drawpic|drawpolygon|drawstar|empty|eof|fetcharg|getch|getchar|getenv|getpid\n|getpriority|hasch|locate|locatexy|maxcol|maxcolou?r|maxint|maxnat|maxrow|maxx|maxy|minint|minnat\n|mousewhere|nargs|parallelget|parallelput|play|playdone|pred|rand|randint|randnext|randomize\n|randseed|setpriority|setscreen|simutime|sizeof|sizepic|sound|succ|sysclock|takepic|time|wallclock\n|whatcol|whatcolou?r|whatcolou?rback|whatdotcolou?r|whatrow)\\b',
      name: 'support.function.${1:/downcase}.turing'
    },
    'str-routines': {
      match: '\\b(Lower|Upper|Trim|index|length|repeat)\\b',
      name: 'support.function.${1:/downcase}.turing'
    },
    strings: {
      patterns: [
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.turing',
          patterns: [{include: '#escapes'}]
        },
        {
          begin: "'",
          end: "'",
          name: 'string.quoted.single.turing',
          patterns: [{include: '#escapes'}]
        }
      ]
    },
    type: {
      captures: {
        1: {name: 'storage.type.turing'},
        2: {name: 'storage.modifier.pervasive.turing'},
        3: {name: 'entity.name.type.turing'}
      },
      match: '\\b(type)(?:\\s+(pervasive|\\*)(?=\\s))?\\s+(\\w+)'
    },
    'typeconv-routines': {
      match:
        '\\b(ceil|chr|erealstr|floor|frealstr|intreal|intstr|natreal|natstr|ord|realstr|round|strint|strintok|strnat|strnatok|strreal|strrealok)\\b',
      name: 'support.function.${1:/downcase}.turing'
    },
    types: {
      match:
        '\\b(addressint|array|boolean|char|collection|enum|int[124]?|nat[124]?|real[48]?|pointer\\s+to|set\\s+of|string)\\b',
      name: 'storage.type.$1-type.turing'
    },
    union: {
      begin: '^\\s*(union)\\s+(\\w+)\\s*(:)(.*)\\b(of)\\b',
      beginCaptures: {
        0: {name: 'meta.scope.begin.turing'},
        1: {name: 'storage.type.union.turing'},
        2: {name: 'entity.name.union.turing'},
        3: {name: 'punctuation.separator.key-value.turing'},
        4: {patterns: [{include: '$self'}]},
        5: {name: 'keyword.operator.of.turing'}
      },
      end: '^\\s*(end)\\s+(union)\\b',
      endCaptures: {
        0: {name: 'meta.scope.end.turing'},
        1: {name: 'keyword.control.end.turing'},
        2: {name: 'storage.type.union.turing'}
      },
      name: 'meta.scope.union.turing',
      patterns: [{include: '#label'}, {include: '$self'}]
    },
    variables: {
      patterns: [
        {
          begin: '\\b(var|const)\\s+',
          beginCaptures: {1: {name: 'storage.type.$1.turing'}},
          end: '(:=?)\\s*((?!\\d)((?:\\w+(?:\\s+to)?)(?:\\s*\\(\\s*\\d+\\s*\\))?))?\\s*(:=)?',
          endCaptures: {
            1: {name: 'punctuation.separator.key-value.turing'},
            2: {name: 'storage.type.type-spec.turing'},
            3: {patterns: [{include: '#types'}]},
            4: {name: 'punctuation.separator.key-value.turing'}
          },
          name: 'meta.variable-declaration.turing',
          patterns: [
            {
              captures: {
                1: {name: 'storage.modifier.pervasive.oot.turing'},
                2: {name: 'storage.modifier.register.oot.turing'}
              },
              match: '\\G(?:\\s*(pervasive|\\*)(?=\\s))?\\s*(register)(?=\\s)'
            },
            {include: '#types'},
            {include: '#list'}
          ]
        },
        {
          begin: '(\\w+)\\s*(:=)',
          beginCaptures: {
            1: {name: 'variable.name.turing'},
            2: {name: 'punctuation.separator.key-value.turing'}
          },
          end: '(?=\\S)',
          name: 'meta.variable-assignment.turing'
        },
        {
          begin: '\\b(bind)\\b',
          beginCaptures: {1: {name: 'keyword.operator.bind.turing'}},
          end: '(?=$|%|/\\*)',
          name: 'meta.binding.turing',
          patterns: [
            {
              begin: '\\b(var)\\b',
              beginCaptures: {1: {name: 'storage.type.$1.turing'}},
              end: '\\b(to)\\b',
              endCaptures: {1: {name: 'keyword.operator.to.turing'}},
              patterns: [{include: '#list'}]
            },
            {include: '#list'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.turing'
}

export default grammar
