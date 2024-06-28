// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-fontforge>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    codepoint: {
      match: '0[uU][A-Fa-f0-9]+',
      name: 'constant.numeric.other.codepoint.fontforge'
    },
    comments: {
      patterns: [
        {
          begin: '#',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.fontforge'}
          },
          end: '$',
          name: 'comment.line.number-sign.fontforge',
          patterns: [{include: '#lineContinuation'}]
        },
        {
          begin: '/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.fontforge'}
          },
          end: '\\*/',
          endCaptures: {
            0: {name: 'punctuation.definition.comment.end.fontforge'}
          },
          name: 'comment.block.fontforge'
        },
        {
          begin: '//',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.fontforge'}
          },
          end: '$',
          name: 'comment.line.double-slash',
          patterns: [{include: '#lineContinuation'}]
        }
      ]
    },
    control: {
      match:
        '(?<![$.@/])\\b(if|elseif|else|endif|while|endloop|foreach|break|return|shift)\\b(?![$.@/])',
      name: 'keyword.control.flow.$1.fontforge'
    },
    integer: {
      patterns: [
        {
          match: '(?<!\\w)[-+]?0[Xx][A-Fa-f0-9]+',
          name: 'constant.numeric.integer.hexadecimal.fontforge'
        },
        {
          match: '(?<!\\w)[-+]?(?=0)\\d+',
          name: 'constant.numeric.integer.octal.fontforge'
        },
        {
          match: '(?<!\\w)[-+]?\\d+',
          name: 'constant.numeric.integer.decimal.fontforge'
        }
      ]
    },
    lineContinuation: {
      begin: '(\\\\)$\\s*',
      beginCaptures: {
        1: {name: 'constant.character.escape.line-continuation.fontforge'}
      },
      end: '^'
    },
    main: {
      patterns: [
        {include: '#comments'},
        {include: '#codepoint'},
        {include: '#strings'},
        {include: '#control'},
        {include: '#real'},
        {include: '#integer'},
        {include: '#operators'},
        {include: '#procedureCall'},
        {include: '#punctuation'},
        {include: '#variables'},
        {include: '#lineContinuation'}
      ]
    },
    operators: {
      patterns: [
        {
          match: '==|!=|>=|<=|>|<',
          name: 'keyword.operator.comparison.fontforge'
        },
        {
          match: '=|[-+*/%]=',
          name: 'keyword.operator.assignment.compound.fontforge'
        },
        {match: '--', name: 'keyword.operator.decrement.fontforge'},
        {match: '\\+{2}', name: 'keyword.operator.increment.fontforge'},
        {match: '[-+/*~!]', name: 'keyword.operator.arithmetic.fontforge'},
        {match: '&&|\\|\\|', name: 'keyword.operator.logical.fontforge'},
        {match: '&|\\||\\\\\\^', name: 'keyword.operator.bitwise.fontforge'},
        {
          captures: {0: {patterns: [{include: '#punctuation'}]}},
          match: ':[htre]',
          name: 'keyword.operator.pathspec.fontforge'
        }
      ]
    },
    procedureCall: {
      patterns: [
        {
          begin:
            '(?x) (?<![$.@/]) \\b ( ATan2 | AddAccent | AddAnchorClass | AddAnchorPoint | AddDHint | AddExtrema | AddHHint | AddInstrs | AddLookupSubtable | AddLookup | AddPosSub | AddSizeFeature | AddVHint | ApplySubstitution | Array | AskUser | AutoCounter | AutoHint | AutoInstr | AutoKern | AutoTrace | AutoWidth | BitmapsAvail | BitmapsRegen | BuildAccented | BuildComposite | BuildDuplicate | CIDChangeSubFont | CIDFlattenByCMap | CIDFlatten | CIDSetFontNames | CanonicalContours | CanonicalStart | Ceil | CenterInWidth | ChangePrivateEntry | ChangeWeight | CharCnt | CheckForAnchorClass | Chr | ClearBackground | ClearGlyphCounterMasks | ClearHints | ClearInstrs | ClearPrivateEntry | ClearTable | Clear | Close | CompareFonts | CompareGlyphs | ConvertByCMap | ConvertToCID | CopyAnchors | CopyFgToBg | CopyLBearing | CopyRBearing | CopyReference | CopyUnlinked | CopyVWidth | CopyWidth | Copy | CorrectDirection | Cos | Cut | DefaultOtherSubrs | DefaultRoundToGrid | DefaultUseMyMetrics | DetachAndRemoveGlyphs | DetachGlyphs | DontAutoHint | DrawsSomething | Error | ExpandStroke | Export | Exp | FileAccess | FindIntersections | FindOrAddCvtIndex | Floor | FontImage | FontsInFile | GenerateFamily | GenerateFeatureFile | Generate | GetAnchorPoints | GetCvtAt | GetEnv | GetFontBoundingBox | GetLookupInfo | GetLookupOfSubtable | GetLookupSubtables | GetLookups | GetMaxpValue | GetOS2Value | GetPosSub | GetPref | GetPrivateEntry | GetSubtableOfAnchor | GetTTFName | GetTeXParam | GlyphInfo | HFlip | HasPreservedTable | HasPrivateEntry | Import | InFont | Inline | InterpolateFonts | Int | IsAlNum | IsAlpha | IsDigit | IsFinite | IsFraction | IsHexDigit | IsLigature | IsLower | IsNan | IsOtherFraction | IsSpace | IsUpper | IsVulgarFraction | Italic | Join | LoadEncodingFile | LoadNamelistDir | LoadNamelist | LoadPrefs | LoadStringFromFile | LoadTableFromFile | Log | LookupSetFeatureList | LookupStoreLigatureInAfm | MMAxisBounds | MMAxisNames | MMBlendToNewFont | MMChangeInstance | MMChangeWeight | MMInstanceNames | MMWeightedName | MergeFeature | MergeFonts | MergeKern | MergeLookupSubtables | MergeLookups | MoveReference | Move | MultipleEncodingsToReferences | NameFromUnicode | NearlyHvCps | NearlyHvLines | NearlyLines | New | NonLinearTransform | Open | Ord | Outline | OverlapIntersect | PasteWithOffset | Paste | PositionReference | PostNotice | Pow | PreloadCidmap | PrintFont | PrintSetup | Print | Quit | Rand | ReadOtherSubrsFile | Real | Reencode | RemoveAllKerns | RemoveAllVKerns | RemoveAnchorClass | RemoveDetachedGlyphs | RemoveLookupSubtable | RemoveLookup | RemoveOverlap | RemovePosSub | RemovePreservedTable | RenameGlyphs | ReplaceCvtAt | ReplaceGlyphCounterMasks | ReplaceWithReference | RevertToBackup | Revert | Rotate | RoundToCluster | RoundToInt | Round | SameGlyphAs | SavePrefs | SaveTableToFile | Save | ScaleToEm | Scale | SelectAllInstancesOf | SelectAll | SelectBitmap | SelectByPosSub | SelectChanged | SelectFewerSingletons | SelectFewer | SelectGlyphsBoth | SelectGlyphsReferences | SelectGlyphsSplines | SelectHintingNeeded | SelectIf | SelectInvert | SelectMoreIf | SelectMoreSingletonsIf | SelectMoreSingletons | SelectMore | SelectNone | SelectSingletonsIf | SelectSingletons | SelectWorthOutputting | Select | SetCharCnt | SetFondName | SetFontHasVerticalMetrics | SetFontNames | SetFontOrder | SetGasp | SetGlyphChanged | SetGlyphClass | SetGlyphColor | SetGlyphComment | SetGlyphCounterMask | SetGlyphName | SetGlyphTeX | SetItalicAngle | SetKern | SetLBearing | SetMacStyle | SetMaxpValue | SetOS2Value | SetPanose | SetPref | SetRBearing | SetTTFName | SetTeXParams | SetUnicodeValue | SetUniqueID | SetVKern | SetVWidth | SetWidth | Shadow | Simplify | Sin | SizeOf | Skew | SmallCaps | Sqrt | StrJoin | StrSplit | Strcasecmp | Strcasestr | Strftime | Strlen | Strrstr | Strskipint | Strstr | Strsub | Strtod | Strtol | SubstitutionPoints | Tan | ToLower | ToMirror | ToString | ToUpper | Transform | TypeOf | UCodePoint | Ucs4 | UnicodeFromName | UnlinkReference | Utf8 | VFlip | VKernFromHKern | Wireframe | WorthOutputting | WriteStringToFile ) \\s* (\\()',
          beginCaptures: {
            1: {name: 'support.function.built-in.fontforge'},
            2: {
              name: 'punctuation.definition.arguments.bracket.round.begin.fontforge'
            }
          },
          contentName: 'meta.function-call.arguments.fontforge',
          end: '\\)',
          endCaptures: {
            0: {
              name: 'punctuation.definition.arguments.bracket.round.begin.fontforge'
            }
          },
          name: 'meta.function-call.builtin.fontforge',
          patterns: [{include: '#main'}]
        },
        {
          begin:
            '(?:(?<![$.@/])\\b((?!\\.?\\d)[A-Za-z$_.\\d@/]+)|(?<=[\'"\\)]))\\s*(\\()',
          beginCaptures: {
            1: {name: 'entity.name.function.fontforge'},
            2: {
              name: 'punctuation.definition.arguments.bracket.round.begin.fontforge'
            }
          },
          contentName: 'meta.function-call.arguments.fontforge',
          end: '\\)',
          endCaptures: {
            0: {
              name: 'punctuation.definition.arguments.bracket.round.end.fontforge'
            }
          },
          name: 'meta.function-call.user-defined.fontforge',
          patterns: [{include: '#main'}]
        },
        {
          captures: {
            0: {name: 'meta.expression.fontforge'},
            1: {name: 'punctuation.bracket.begin.round.fontforge'},
            2: {patterns: [{include: '#main'}]},
            3: {name: 'punctuation.bracket.end.round.fontforge'}
          },
          match:
            '(?x)\n(?:^|(?<!\\*/|[\'"\\)A-Za-z$_.\\d@/])\n(?<=\\S))\n\\s* (\\()\n( "[^"]*+"\n| \'[^\']*+\'\n| (?!["\']) [^\\(\\)]* [^\\s\\(\\)]+ [^\\(\\)]*\n) (\\))\n(?=\\s*\\()',
          name: 'meta.function-call.indirect.fontforge'
        }
      ]
    },
    punctuation: {
      patterns: [
        {match: ',', name: 'punctuation.separator.comma.fontforge'},
        {match: ';', name: 'punctuation.terminator.statement.fontforge'},
        {match: ':', name: 'punctuation.delimiter.colon.fontforge'},
        {
          begin: '\\[',
          beginCaptures: {
            0: {name: 'punctuation.bracket.begin.square.fontforge'}
          },
          end: '\\]',
          endCaptures: {0: {name: 'punctuation.bracket.end.square.fontforge'}},
          name: 'meta.expression.chained.fontforge',
          patterns: [{include: '#main'}]
        },
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.bracket.begin.round.fontforge'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.bracket.end.round.fontforge'}},
          name: 'meta.expression.fontforge',
          patterns: [{include: '#main'}]
        }
      ]
    },
    real: {
      match: '(?<!\\w)[-+]?\\d*\\.\\d+',
      name: 'constant.numeric.float.fontforge'
    },
    shared: {
      patterns: [
        {include: '#codepoint'},
        {include: '#strings'},
        {include: '#real'},
        {include: '#integer'},
        {include: '#punctuation'},
        {include: '#operators'}
      ]
    },
    stringEscapes: {
      patterns: [
        {match: '\\\\n', name: 'constant.character.escape.newline.fontforge'},
        {include: '#lineContinuation'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.fontforge'}
          },
          end: '"|$',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.fontforge'}
          },
          name: 'string.double.quoted.fontforge',
          patterns: [{include: '#stringEscapes'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.fontforge'}
          },
          end: "'|$",
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.fontforge'}
          },
          name: 'string.single.quoted.fontforge',
          patterns: [{include: '#stringEscapes'}]
        }
      ]
    },
    variables: {
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.variable.fontforge'}},
          match: '(\\$)\\d+(?=\\W)',
          name: 'variable.language.readonly.positional.fontforge'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.fontforge'}},
          match: '(\\$)\\w+',
          name: 'variable.language.readonly.fontforge'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.fontforge'}},
          match: '(_)\\w+',
          name: 'variable.other.global.fontforge'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.fontforge'}},
          match: '(@)\\w+',
          name: 'variable.other.font.fontforge'
        },
        {match: '(?=[A-Za-z])\\w+', name: 'variable.other.local.fontforge'}
      ]
    }
  },
  scopeName: 'source.fontforge'
}

export default grammar
