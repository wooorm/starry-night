// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/nwhetsell/linter-lilypond>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.ly', '.ily'],
  names: ['lilypond'],
  patterns: [
    {include: '#expression'},
    {include: '#general_operators'},
    {include: '#note_name'}
  ],
  repository: {
    chord_expression: {
      patterns: [
        {
          begin: '{',
          end: '}',
          name: 'meta.chord-expression.lilypond',
          patterns: [
            {include: '#chord_mode_notation'},
            {include: '#octave_transpose_operators'},
            {
              match: ':',
              name: 'keyword.operator.chord.modifier-indicator.lilypond'
            },
            {
              match: '\\b(?:aug|dim|m(?:aj)?|sus)',
              name: 'keyword.other.chord.modifier.lilypond'
            },
            {
              match: '-',
              name: 'keyword.operator.chord.alter-note.flat.lilypond'
            },
            {
              match: '\\+',
              name: 'keyword.operator.chord.alter-note.sharp.lilypond'
            },
            {match: '\\^', name: 'keyword.operator.chord.remove-note.lilypond'},
            {
              match: '/\\+',
              name: 'keyword.operator.chord.add-bass-note.lilypond'
            },
            {include: '#chord_expression'},
            {include: '$self'}
          ]
        }
      ]
    },
    chord_mode_notation: {
      patterns: [
        {match: '/(?!\\+)', name: 'keyword.operator.forward-slash.lilypond'},
        {
          begin: '\\*',
          beginCaptures: {
            0: {name: 'keyword.operator.scale-duration.lilypond'}
          },
          end: '(\\d+)(?:(/)(\\d+))?',
          endCaptures: {
            1: {name: 'constant.numeric.integer.lilypond'},
            2: {name: 'keyword.operator.forward-slash.lilypond'},
            3: {name: 'constant.numeric.integer.lilypond'}
          },
          name: 'meta.duration-scale.lilypond',
          patterns: [{include: '#comments'}]
        },
        {match: '~', name: 'keyword.operator.tie.lilypond'},
        {
          match: '\\b[rRs](?!-?[[:alpha:]])',
          name: 'support.variable.rest.lilypond'
        },
        {match: '\\[', name: 'keyword.operator.beam.begin.lilypond'},
        {match: '\\]', name: 'keyword.operator.beam.end.lilypond'},
        {match: '\\|', name: 'keyword.operator.bar-check.lilypond'},
        {
          match: '\\\\<',
          name: 'keyword.operator.dynamic-mark.begin.crescendo.lilypond'
        },
        {
          match: '\\\\>',
          name: 'keyword.operator.dynamic-mark.begin.decrescendo.lilypond'
        },
        {match: '\\\\!', name: 'keyword.operator.dynamic-mark.end.lilypond'},
        {match: '\\(', name: 'keyword.operator.slur.begin.lilypond'},
        {match: '\\)', name: 'keyword.operator.slur.end.lilypond'},
        {
          match: '\\\\\\(',
          name: 'keyword.operator.phrasing-slur.begin.lilypond'
        },
        {match: '\\\\\\)', name: 'keyword.operator.phrasing-slur.end.lilypond'},
        {
          begin: '\\\\=',
          beginCaptures: {0: {name: 'entity.punctuation.slur-label.lilypond'}},
          end: '(?=\\\\?[()])',
          name: 'meta.slur-label.lilypond',
          patterns: [
            {include: '#comments'},
            {match: '[-\\w]+', name: 'entity.name.slur-label.lilypond'},
            {
              begin: '"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.lilypond'}
              },
              contentName: 'entity.name.slur-label.lilypond',
              end: '"',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.lilypond'}
              },
              name: 'string.lilypond',
              patterns: [
                {
                  match: '\\\\[nt"\'\\\\]',
                  name: 'constant.character.escape.lilypond'
                }
              ]
            }
          ]
        },
        {
          begin: '<(?!<)',
          beginCaptures: {
            0: {name: 'punctuation.definition.chord.begin.lilypond'}
          },
          end: '(?<![->])>',
          endCaptures: {0: {name: 'punctuation.definition.chord.end.lilypond'}},
          name: 'meta.chord.lilypond',
          patterns: [
            {match: '<', name: 'invalid.illegal.lilypond'},
            {include: '#music_expression_contents'}
          ]
        },
        {
          match: '(?<![[:alpha:]])q(?!-?[[:alpha:]])',
          name: 'keyword.operator.chord-repetition.lilypond'
        },
        {match: '\\\\\\[', name: 'invalid.deprecated.ligature.begin.lilypond'},
        {match: '\\\\\\]', name: 'invalid.deprecated.ligature.end.lilypond'},
        {
          match: '_',
          name: 'keyword.operator.articulation-direction-indicator.down.lilypond'
        },
        {
          match: '\\\\(?=\\d)',
          name: 'keyword.operator.string-number-indicator.lilypond'
        }
      ]
    },
    comments: {
      patterns: [
        {
          begin: '%{',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.lilypond'}
          },
          end: '%}',
          endCaptures: {
            0: {name: 'punctuation.definition.comment.end.lilypond'}
          },
          name: 'comment.block.lilypond'
        },
        {
          begin: '%',
          beginCaptures: {0: {name: 'punctuation.definition.comment.lilypond'}},
          end: '$',
          name: 'comment.line.lilypond'
        }
      ]
    },
    drum_expression: {
      patterns: [
        {
          begin: '{',
          end: '}',
          name: 'meta.drum-expression.lilypond',
          patterns: [
            {
              match:
                '\\b(a(?:coustic(?:bassdrum|snare)|g(?:[hl]))|b(?:assdrum|d(?:(?:a)?)|o(?:h(?:[mo])|l(?:[mo])|[hl]))|c(?:ab(?:(?:asa)?)|g(?:h(?:[mo])|l(?:[mo])|[hl])|hinesecymbal|l(?:aves|osedhihat)|owbell|rashcymbal(?:(?:[ab])?)|ui(?:[mo])|ym(?:c(?:[abh])|r(?:[ab])|[crs])|[bl])|d(?:[abcde])|electricsnare|f(?:ive(?:down|up)|our(?:down|up))|gui(?:(?:ro|[ls])?)|h(?:a(?:lfopenhihat|ndclap)|h(?:ho|[cop])|i(?:agogo|bongo|conga|gh(?:(?:(?:floor)?)tom)|hat|midtom|sidestick|timbale|woodblock)|[ch])|lo(?:agogo|bongo|conga|ng(?:guiro|whistle)|sidestick|timbale|w(?:floortom|midtom|oodblock|tom))|m(?:ar(?:(?:acas)?)|ute(?:cuica|hi(?:bongo|conga)|lo(?:bongo|conga)|triangle))|o(?:ne(?:down|up)|pen(?:cuica|hi(?:bongo|conga|hat)|lo(?:bongo|conga)|triangle))|pedalhihat|r(?:b|ide(?:bell|cymbal(?:(?:[ab])?)))|s(?:hort(?:guiro|whistle)|idestick|n(?:are|[ae])|plashcymbal|s(?:[hl])|[ns])|t(?:amb(?:(?:ourine)?)|hree(?:down|up)|im(?:[hl])|om(?:f(?:[hl])|m(?:[hl])|[hl])|ri(?:(?:angle|[mo])?)|t|wo(?:down|up))|u(?:[abcde])|vib(?:raslap|s)|w(?:b(?:[hl])|h(?:[ls])))(?!-?[[:alpha:]])',
              name: 'support.variable.percussion-note.lilypond'
            },
            {include: '#music_notation'},
            {include: '#percussion_expression'},
            {include: '#expression'},
            {include: '#general_operators'}
          ]
        }
      ]
    },
    expression: {
      patterns: [
        {include: '#comments'},
        {include: '#integer'},
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.lilypond'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.lilypond'}
          },
          name: 'string.lilypond',
          patterns: [
            {
              match: '\\\\[nt"\'\\\\]',
              name: 'constant.character.escape.lilypond'
            }
          ]
        },
        {
          begin: '<<',
          beginCaptures: {
            0: {name: 'punctuation.simultaneous-expressions.begin.lilypond'}
          },
          end: '>>',
          endCaptures: {
            0: {name: 'punctuation.simultaneous-expressions.end.lilypond'}
          },
          name: 'meta.simultaneous-expressions.lilypond',
          patterns: [
            {include: '#music_expression_contents'},
            {include: '$self'}
          ]
        },
        {
          match: '\\\\\\\\',
          name: 'meta.separator.simultaneous-expressions.lilypond'
        },
        {
          begin: '\\\\(fixed|relative)(?!-?[[:alpha:]])',
          beginCaptures: {0: {name: 'support.function.lilypond'}},
          end: '(?<=[^%]})|(?<=^})',
          name: 'meta.$1.lilypond',
          patterns: [
            {include: '#octave_transpose_operators'},
            {include: '$self'}
          ]
        },
        {
          begin: '\\\\notemode(?!-?[[:alpha:]])',
          beginCaptures: {0: {name: 'keyword.other.lilypond'}},
          end: '(?<=[^%]})|(?<=^})',
          name: 'meta.note-mode.lilypond',
          patterns: [{include: '#music_expression'}, {include: '$self'}]
        },
        {
          begin: '\\\\markup(?:list)?(?!-?[[:alpha:]])',
          beginCaptures: {0: {name: 'keyword.other.lilypond'}},
          end: '(?<!\\\\)([-\\w]+)|(?<=[^%]})|(?<=^})',
          endCaptures: {1: {name: 'meta.markup-expression.lilypond'}},
          name: 'meta.markup-block.lilypond',
          patterns: [
            {include: '#markup_command'},
            {include: '#markup_expression'},
            {include: '$self'}
          ]
        },
        {
          begin: '\\\\(?:addlyrics|lyric(?:mode|s(?:to)?))(?!-?[[:alpha:]])',
          beginCaptures: {0: {name: 'keyword.other.lilypond'}},
          end: '(?<=[^%]})|(?<=^})',
          name: 'meta.lyric-mode.lilypond',
          patterns: [{include: '#lyric_expression'}, {include: '$self'}]
        },
        {
          begin: '\\\\drum(?:mode|s)(?!-?[[:alpha:]])',
          beginCaptures: {0: {name: 'keyword.other.lilypond'}},
          end: '(?<=[^%]})|(?<=^})',
          name: 'meta.drum-mode.lilypond',
          patterns: [{include: '#drum_expression'}, {include: '$self'}]
        },
        {
          begin: '\\\\chordmode(?!-?[[:alpha:]])',
          beginCaptures: {0: {name: 'keyword.other.lilypond'}},
          end: '(?<=[^%]})|(?<=^})',
          name: 'meta.chord-mode.lilypond',
          patterns: [{include: '#chord_expression'}, {include: '$self'}]
        },
        {
          begin: '\\\\figure(?:mode|s)(?!-?[[:alpha:]])',
          beginCaptures: {0: {name: 'keyword.other.lilypond'}},
          end: '(?<=[^%]})|(?<=^})',
          name: 'meta.figure-mode.lilypond',
          patterns: [{include: '#figure_expression'}, {include: '$self'}]
        },
        {
          begin: '\\\\paper(?!-?[[:alpha:]])',
          beginCaptures: {0: {name: 'keyword.other.lilypond'}},
          end: '(?<=[^%]})|(?<=^})',
          name: 'meta.paper-block.lilypond',
          patterns: [{include: '#paper_expression'}, {include: '$self'}]
        },
        {
          match:
            '\\\\(a(?:ccepts|ddlyrics|l(?:ias|ternative))|book(?:(?:part)?)|c(?:h(?:ange|ord(?:mode|s))|on(?:sists|text))|d(?:e(?:fault(?:(?:child)?)|nies|scription)|rum(?:mode|s))|etc|figure(?:mode|s)|header|include|l(?:ayout|yric(?:mode|s(?:(?:to)?)))|m(?:a(?:ininput|rkup(?:(?:list)?))|idi)|n(?:ame|ew|otemode)|override|paper|re(?:move|(?:pea|s|ver)t)|s(?:core|e(?:quential|t)|imultaneous)|t(?:empo|ype)|unset|version|with)(?!-?[[:alpha:]])',
          name: 'keyword.other.lilypond'
        },
        {
          match:
            '\\\\(Remove(?:(?:(?:All)?)EmptyStaves)|a(?:bsolute|cc(?:ent|i(?:accatura|dentalStyle))|dd(?:ChordShape|InstrumentDefinition|Quote)|eolian|fterGrace(?:(?:Fraction)?)|iken(?:Heads(?:(?:Minor)?)|ThinHeads(?:(?:Minor)?))|l(?:low(?:PageTurn|VoltaHook)|terBroken)|mbitusAfter|pp(?:endToTag|ly(?:Context|Music|Output)|oggiatura)|r(?:abicStringNumbers|peggio(?:(?:Arrow(?:Down|Up)|Bracket|Normal|Parenthesis(?:(?:Dashed)?))?))|ssertBeam(?:Quant|Slope)|uto(?:B(?:eamO(?:ff|n)|reaksO(?:ff|n))|Change|LineBreaksO(?:ff|n)|PageBreaksO(?:ff|n)))|b(?:a(?:lloon(?:GrobText|LengthO(?:ff|n)|Text)|r(?:(?:NumberCheck)?)|ssFigure(?:ExtendersO(?:ff|n)|StaffAlignment(?:Down|Neutral|Up)))|e(?:amExceptions|ndAfter)|igger|lackTriangleMarkup|ookOutput(?:Name|Suffix)|re(?:a(?:k(?:(?:DynamicSpan)?)|the)|ve))|c(?:adenzaO(?:ff|n)|enter|hord(?:(?:Repeat|modifier)s)|lef|o(?:da|mp(?:oundMeter|ress(?:(?:EmptyMeasure|MMRest)s)))|r(?:(?:esc(?:(?:Hairpin|TextCresc)?)|ossStaff)?)|ue(?:Clef(?:(?:Unset)?)|During(?:(?:WithClef)?)))|d(?:ash(?:Bang|D(?:ash|ot)|Hat|Larger|Plus|Underscore)|e(?:adNote(?:(?:sO(?:ff|n))?)|cr(?:(?:esc)?)|f(?:ault(?:NoteHeads|StringTunings|TimeSignature)|ineBarLine)|precated(?:cresc|dim|end(?:cresc|dim)))|i(?:m(?:(?:Hairpin|TextD(?:ecr(?:(?:esc)?)|im))?)|splay(?:LilyMusic|Music|Scheme))|o(?:rian|ts(?:Down|Neutral|Up)|wn(?:(?:bow|mordent|prall)?))|r(?:opNote|umPitchNames)|ynamic(?:Down|Neutral|Up))|e(?:asyHeadsO(?:ff|n)|nd(?:Spanners|cr(?:(?:esc)?)|d(?:ecr(?:(?:esc)?)|im))|pisem(?:Finis|Initium)|spressivo|(?:ventChord|xpandEmptyMeasure)s)|f(?:e(?:atherDurations|rmata)|ff(?:(?:f(?:(?:f)?))?)|i(?:nger|xed)|lageolet|ootnote|renchChords|unkHeads(?:(?:Minor)?)|[fpz])|g(?:ermanChords|lissando|r(?:ace|obdescriptions))|h(?:a(?:lfopen|rmonic(?:(?:By(?:Fret|Ratio)|Note|sO(?:ff|n))?)|ydnturn)|enze(?:(?:long|short)fermata)|ide(?:(?:Notes|S(?:plitTiedTabNotes|taffSwitch))?)|uge)|i(?:gnatzekException(?:Music|s)|mprovisationO(?:ff|n)|n(?:StaffSegno|cipit|strumentSwitch|ver(?:sion|tChords))|onian|talianChords)|k(?:e(?:epWithTag|y)|i(?:evanO(?:ff|n)|llCues))|l(?:a(?:bel|issezVibrer|(?:nguag(?:(?:e(?:Restor|SaveAndChang))?)|rg)e)|eft|heel|ineprall|o(?:crian|ng(?:(?:(?:fermat)?)a))|toe|ydian)|m(?:a(?:gnify(?:Music|Staff)|jor|ke(?:Clusters|DefaultStringTuning)|r(?:cato|k(?:(?:LengthO(?:ff|n)|upMap)?))|xima)|e(?:lisma(?:(?:End)?)|rgeDifferently(?:DottedO(?:ff|n)|HeadedO(?:ff|n)))|i(?:diDrumPitches|nor|xolydian)|o(?:dal(?:Inversion|Transpose)|rdent)|usicMap|[fp])|n(?:ewSpacingSection|o(?:B(?:eam|reak)|Page(?:Break|Turn)|rmalsize)|umericTimeSignature)|o(?:ctaveCheck|ffset|mit|n(?:(?:(?:eVoi)?)ce)|pen|ttava|verride(?:Property|TimeSignatureSettings))|p(?:a(?:ge(?:Break|Turn)|lmMute(?:(?:O(?:ff|n))?)|r(?:allelMusic|enthesize|t(?:Combine(?:(?:A(?:part|utomatic)|Chords|Down|Force|Listener|SoloI(?:(?:I)?)|U(?:nisono|p))?)|ial)))|hr(?:asingSlur(?:D(?:ash(?:Pattern|ed)|o(?:tted|wn))|Half(?:(?:Dashe|Soli)d)|Neutral|Solid|Up)|ygian)|itchedTrill|o(?:intAndClick(?:O(?:ff|n)|Types)|rtato)|p(?:(?:p(?:(?:p(?:(?:p)?))?))?)|r(?:all(?:(?:down|mordent|prall|up)?)|edefinedFretboardsO(?:ff|n)|operty(?:Override|Revert|Set|Tweak|Unset))|ushToTag)|quoteDuring|r(?:aiseNote|e(?:duceChords|lative|moveWithTag|peatTie|setRelativeOctave|trograde|ver(?:seturn|tTimeSignatureSettings))|fz|heel|ight(?:(?:HandFinger)?)|omanStringNumbers|toe)|s(?:acredHarpHeads(?:(?:Minor)?)|caleDurations|e(?:gno|miGermanChords|t(?:DefaultDurationToQuarter|tingsFrom))|f(?:[fpz])|h(?:ape|ift(?:Durations|O(?:ff|n(?:(?:n(?:(?:n)?))?)))|o(?:rtfermata|wS(?:plitTiedTabNotes|taffSwitch)))|i(?:(?:gnumcongruentia|ngl)e)|kip|l(?:ash(?:edGrace|turn)|ur(?:D(?:ash(?:Pattern|ed)|o(?:tted|wn))|Half(?:(?:Dashe|Soli)d)|Neutral|Solid|Up))|mall(?:(?:er)?)|nappizzicato|o(?:stenutoO(?:ff|n)|uthernHarmonyHeads(?:(?:Minor)?))|p(?:acingTweaks|p)|t(?:a(?:ccat(?:(?:(?:issim)?)o)|rt(?:(?:A(?:(?:cciacc|ppoggi)aturaMusic)|Gr(?:ace(?:Music|Slur)|oup)|Measure(?:Count|Spanner)|S(?:lashedGraceMusic|taff)|T(?:(?:ext|rill)Span))?))|em(?:Down|Neutral|Up)|o(?:p(?:(?:A(?:(?:cciacc|ppoggi)aturaMusic)|Gr(?:ace(?:Music|Slur)|oup)|Measure(?:Count|Spanner)|S(?:lashedGraceMusic|taff)|T(?:(?:ext|rill)Span)|ped)?)|rePredefinedDiagram)|ringTuning|yledNoteHeads)|ustainO(?:ff|n)|[fp])|t(?:a(?:b(?:ChordRepe(?:ats|tition)|FullNotation)|g(?:(?:Group)?))|e(?:eny|mporary|nuto|xt(?:LengthO(?:ff|n)|Spanner(?:Down|Neutral|Up)))|humb|i(?:e(?:D(?:ash(?:Pattern|ed)|o(?:tted|wn))|Half(?:(?:Dashe|Soli)d)|Neutral|Solid|Up)|me(?:(?:s)?)|ny)|ocItem(?:(?:WithDotsMarkup)?)|r(?:anspos(?:e(?:(?:dCueDuring)?)|ition)|eCorde|ill)|u(?:plet(?:(?:Down|Neutral|Span|Up)?)|rn)|weak)|u(?:n(?:HideNotes|aCorda|do|foldRepeats)|p(?:(?:bow|mordent|prall)?))|v(?:arcoda|ery(?:(?:long|short)fermata)|o(?:i(?:ce(?:Four(?:(?:Style)?)|NeutralStyle|One(?:(?:Style)?)|T(?:hree(?:(?:Style)?)|wo(?:(?:Style)?))|s)|d)|welTransition))|w(?:alkerHeads(?:(?:Minor)?)|hite(?:(?:Circ|Triang)leMarkup)|ithMusicProperty)|xNote(?:(?:sO(?:ff|n))?)|[fnp])(?!-?[[:alpha:]])',
          name: 'support.function.lilypond'
        },
        {include: '#music_expression'},
        {
          begin: '(#)|(\\$)|([#$]@)',
          beginCaptures: {
            1: {name: 'keyword.operator.scheme.embed.lilypond'},
            2: {name: 'keyword.operator.scheme.evaluate.lilypond'},
            3: {name: 'keyword.operator.scheme.list-splice.lilypond'}
          },
          end: '(?=\\s)|$',
          name: 'meta.scheme.lilypond',
          patterns: [{include: '#scheme_expression'}, {include: 'source.lisp'}]
        },
        {
          match: '\\\\[[:alpha:]]+(?:-[[:alpha:]]+)*',
          name: 'variable.other.lilypond'
        }
      ]
    },
    figure_expression: {
      patterns: [
        {
          begin: '{',
          end: '}',
          name: 'meta.figure-expression.lilypond',
          patterns: [
            {
              begin: '<',
              beginCaptures: {
                0: {name: 'punctuation.definition.figure-group.begin.lilypond'}
              },
              end: '>',
              endCaptures: {
                0: {name: 'punctuation.definition.figure-group.end.lilypond'}
              },
              name: 'meta.figure-group.lilypond',
              patterns: [
                {include: '#figure_expression_contents'},
                {
                  begin: '\\[',
                  beginCaptures: {
                    0: {
                      name: 'punctuation.definition.figure-bracket.begin.lilypond'
                    }
                  },
                  end: '\\]',
                  endCaptures: {
                    0: {
                      name: 'punctuation.definition.figure-bracket.end.lilypond'
                    }
                  },
                  name: 'meta.figure-bracket.lilypond',
                  patterns: [
                    {match: '[>\\[]', name: 'invalid.illegal.lilypond'},
                    {include: '#figure_expression_contents'}
                  ]
                }
              ]
            },
            {include: '#figure_expression'},
            {include: '$self'}
          ]
        }
      ]
    },
    figure_expression_contents: {
      patterns: [
        {match: '<', name: 'invalid.illegal.lilypond'},
        {include: '#integer'},
        {include: '#comments'},
        {
          match: '\\+',
          name: 'keyword.operator.figure.accidental.sharp.lilypond'
        },
        {match: '-', name: 'keyword.operator.figure.accidental.flat.lilypond'},
        {
          match: '!',
          name: 'keyword.operator.figure.accidental.natural.lilypond'
        },
        {match: '_', name: 'support.variable.figure.hidden-third.lilypond'},
        {match: '\\\\\\+', name: 'keyword.operator.figure.augmented.lilypond'},
        {match: '/', name: 'keyword.operator.figure.diminished.lilypond'},
        {
          match: '\\\\\\\\',
          name: 'keyword.operator.figure.raised-sixth.lilypond'
        },
        {
          match: '\\\\!',
          name: 'keyword.operator.figure.end-continuation-line.lilypond'
        }
      ]
    },
    general_operators: {
      patterns: [
        {match: '\\.', name: 'keyword.operator.dot.lilypond'},
        {match: '=', name: 'keyword.operator.equals-sign.lilypond'}
      ]
    },
    integer: {
      patterns: [{match: '\\d+', name: 'constant.numeric.integer.lilypond'}]
    },
    lyric_expression: {
      patterns: [
        {
          begin: '{',
          end: '}',
          name: 'meta.lyric-expression.lilypond',
          patterns: [
            {
              match: '(?<=[\\d\\s])--(?=\\s)',
              name: 'keyword.operator.lyric.syllable-hyphen.lilypond'
            },
            {
              match: '(?<=\\S)_(?=\\S)',
              name: 'keyword.operator.lyric.syllable-space.lilypond'
            },
            {
              match: '(?<=\\S)~(?=\\S)',
              name: 'keyword.operator.lyric.tie.lilypond'
            },
            {
              match: '(?<=[\\d\\s])__(?=\\s)',
              name: 'keyword.operator.lyric.extender-line.lilypond'
            },
            {
              match: '(?<=[\\d\\s])_(?=\\s)',
              name: 'keyword.operator.lyric.melisma.lilypond'
            },
            {include: '#lyric_expression'},
            {include: '#expression'}
          ]
        }
      ]
    },
    markup_command: {
      patterns: [
        {
          match:
            '\\\\(a(?:bs-fontsize|rrow-head|uto-footnote)|b(?:ackslashed-digit|eam|o(?:ld|x)|racket)|c(?:aps|enter-(?:(?:alig|colum)n)|har|ircle|o(?:lumn(?:(?:-lines)?)|m(?:(?:bin|mand-nam)e)|ncat))|d(?:ir-column|ouble(?:flat|sharp)|raw-(?:(?:circl|(?:(?:d(?:(?:ash|ott)ed-)|h|squiggle-)?)lin)e)|ynamic)|e(?:llipse|psfile|yeglasses)|f(?:ermata|i(?:ll(?:-(?:line|with-pattern)|ed-box)|nger|rst-visible)|lat|o(?:nt(?:Caps|size)|otnote)|r(?:action|et-diagram(?:(?:-(?:(?:ter|verbo)se))?)|omproperty))|general-align|h(?:a(?:lign|rp-pedal)|bracket|center-in|(?:spac|ug)e)|italic|justif(?:ied-lines|y(?:(?:-(?:field|line|string))?))|l(?:arge(?:(?:r)?)|eft-(?:align|brace|column)|ine|o(?:okup|wer))|m(?:a(?:gnify|p-markup-commands|rk(?:alphabet|letter))|edium|usicglyph)|n(?:atural|o(?:rmal(?:-(?:size-su(?:b|per)|text)|size)|te(?:(?:-by-number)?))|u(?:ll|mber))|o(?:n-the-fly|v(?:al|er(?:lay|ride(?:(?:-lines)?)|tie)))|p(?:a(?:d-(?:around|markup|(?:(?:to-bo)?)x)|ge-(?:link|ref)|renthesize|t(?:h|tern))|ostscript|roperty-recursive|ut-adjacent)|r(?:aise|e(?:place|st(?:(?:-by-number)?))|ight-(?:align|brace|column)|o(?:man|tate|unded-box))|s(?:ans|c(?:ale|ore(?:(?:-lines)?))|e(?:mi(?:flat|sharp)|squi(?:flat|sharp))|harp|imple|lashed-digit|mall(?:(?:Caps|er)?)|t(?:encil|rut)|u(?:b|per))|t(?:able(?:(?:-of-contents)?)|e(?:eny|xt)|i(?:e(?:(?:d-lyric)?)|ny)|r(?:ans(?:late(?:(?:-scaled)?)|parent)|iangle)|ypewriter)|u(?:nder(?:(?:lin|ti)e)|pright)|v(?:center|(?:erbatim-fil|spac)e)|w(?:hiteout|ith-(?:color|dimensions(?:(?:-from)?)|link|outline|url)|ordwrap(?:(?:-(?:field|internal|lines|string(?:(?:-internal)?)))?)))(?!-?[[:alpha:]])',
          name: 'support.function.lilypond'
        }
      ]
    },
    markup_expression: {
      patterns: [
        {
          begin: '{',
          end: '}',
          name: 'meta.markup-expression.lilypond',
          patterns: [
            {include: '#markup_command'},
            {include: '#markup_expression'},
            {include: '#expression'}
          ]
        }
      ]
    },
    music_expression: {
      patterns: [
        {
          begin: '{',
          end: '}',
          name: 'meta.music-expression.lilypond',
          patterns: [{include: '#music_expression_contents'}]
        }
      ]
    },
    music_expression_contents: {
      patterns: [
        {include: '#music_notation'},
        {include: '#octave_transpose_operators'},
        {match: '!', name: 'keyword.operator.accidental.reminder.lilypond'},
        {match: '\\?', name: 'keyword.operator.accidental.cautionary.lilypond'},
        {include: '$self'}
      ]
    },
    music_notation: {
      patterns: [
        {
          begin: '(\\^)|(_)|(-)',
          beginCaptures: {
            1: {
              name: 'keyword.operator.articulation-direction-indicator.up.lilypond'
            },
            2: {
              name: 'keyword.operator.articulation-direction-indicator.down.lilypond'
            },
            3: {
              name: 'keyword.operator.articulation-direction-indicator.default.lilypond'
            }
          },
          end: '(\\^)|(\\+)|(-)|(!)|(>)|(\\.)|(_)|(?=[^\\s%])',
          endCaptures: {
            1: {name: 'keyword.operator.articulation.marcato.lilypond'},
            2: {name: 'keyword.operator.articulation.stopped.lilypond'},
            3: {name: 'keyword.operator.articulation.tenuto.lilypond'},
            4: {name: 'keyword.operator.articulation.staccatissimo.lilypond'},
            5: {name: 'keyword.operator.articulation.accent.lilypond'},
            6: {name: 'keyword.operator.articulation.staccato.lilypond'},
            7: {name: 'keyword.operator.articulation.portato.lilypond'}
          },
          patterns: [{include: '#comments'}]
        },
        {include: '#chord_mode_notation'},
        {
          match: '\\^',
          name: 'keyword.operator.articulation-direction-indicator.up.lilypond'
        },
        {
          match: '(?<![[:alpha:]])-|-(?![[:alpha:]])',
          name: 'keyword.operator.articulation-direction-indicator.default.lilypond'
        }
      ]
    },
    note_name: {
      patterns: [
        {
          match:
            '\\b(a(?:-(?:flat(?:(?:flat)?)|natural|sharp(?:(?:sharp)?))|e(?:s(?:e(?:[hs])|s(?:(?:e(?:h|ss))?))|[hs])|ff|i(?:s(?:i(?:[hs])|s(?:(?:i(?:h|ss))?))|[hs])|q(?:[fs])|s(?:a(?:[hs])|e(?:[hs])|s(?:(?:e(?:h|ss))?))|tq(?:[fs])|[fhsx])|b(?:-(?:flat(?:(?:flat)?)|natural|sharp(?:(?:sharp)?))|e(?:s(?:e(?:[hs])|s)|[hs])|ff|i(?:si(?:[hs])|[hs])|q(?:[fs])|ss|tq(?:[fs])|[bfsx])|c(?:-(?:flat(?:(?:flat)?)|natural|sharp(?:(?:sharp)?))|e(?:s(?:e(?:[hs])|s(?:(?:e(?:h|ss))?))|[hs])|ff|i(?:s(?:i(?:[hs])|s(?:(?:i(?:h|ss))?))|[hs])|q(?:[fs])|ss|tq(?:[fs])|[fsx])|d(?:-(?:flat(?:(?:flat)?)|natural|sharp(?:(?:sharp)?))|e(?:s(?:e(?:[hs])|s(?:(?:e(?:h|ss))?))|[hs])|ff|i(?:s(?:i(?:[hs])|s(?:(?:i(?:h|ss))?))|[hs])|o(?:b(?:b|hb|qt|sb|tqt)|c(?:[bs])|d(?:(?:(?:s)?)d)|h(?:[bk])|k(?:(?:(?:h)?)k)|q(?:[bds])|s(?:(?:(?:t)?)qt|[bds])|t(?:c(?:[bs])|q(?:[bds]))|[bdksx])|q(?:[fs])|ss|tq(?:[fs])|[fosx])|e(?:-(?:flat(?:(?:flat)?)|natural|sharp(?:(?:sharp)?))|e(?:s(?:e(?:[hs])|s(?:(?:e(?:h|ss))?))|[hs])|ff|i(?:s(?:i(?:[hs])|s(?:(?:i(?:h|ss))?))|[hs])|q(?:[fs])|s(?:e(?:[hs])|s(?:(?:e(?:h|ss))?))|tq(?:[fs])|[fhsx])|f(?:-(?:flat(?:(?:flat)?)|natural|sharp(?:(?:sharp)?))|a(?:b(?:b|hb|qt|sb|tqt)|c(?:[bs])|d(?:(?:(?:s)?)d)|h(?:[bk])|k(?:(?:(?:h)?)k)|q(?:[bds])|s(?:(?:(?:t)?)qt|[bds])|t(?:c(?:[bs])|q(?:[bds]))|[bdksx])|e(?:s(?:e(?:[hs])|s(?:(?:e(?:h|ss))?))|[hs])|ff|i(?:s(?:i(?:[hs])|s(?:(?:i(?:h|ss))?))|[hs])|q(?:[fs])|ss|tq(?:[fs])|[afsx])|g(?:-(?:flat(?:(?:flat)?)|natural|sharp(?:(?:sharp)?))|e(?:s(?:e(?:[hs])|s(?:(?:e(?:h|ss))?))|[hs])|ff|i(?:s(?:i(?:[hs])|s(?:(?:i(?:h|ss))?))|[hs])|q(?:[fs])|ss|tq(?:[fs])|[fsx])|h(?:e(?:h|s(?:e(?:[hs])|se(?:h|ss)))|i(?:s(?:i(?:[hs])|s(?:(?:i(?:h|ss))?))|[hs]))|la(?:(?:b(?:b|hb|qt|sb|tqt)|c(?:[bs])|d(?:(?:(?:s)?)d)|h(?:[bk])|k(?:(?:(?:h)?)k)|q(?:[bds])|s(?:(?:(?:t)?)qt|[bds])|t(?:c(?:[bs])|q(?:[bds]))|[bdksx])?)|mi(?:(?:b(?:b|hb|qt|sb|tqt)|c(?:[bs])|d(?:(?:(?:s)?)d)|h(?:[bk])|k(?:(?:(?:h)?)k)|q(?:[bds])|s(?:(?:(?:t)?)qt|[bds])|t(?:c(?:[bs])|q(?:[bds]))|[bdksx])?)|r(?:e(?:b(?:b|hb|qt|sb|tqt)|c(?:[bs])|d(?:(?:(?:s)?)d)|h(?:[bk])|k(?:(?:(?:h)?)k)|q(?:[bds])|s(?:(?:(?:t)?)qt|[bds])|t(?:c(?:[bs])|q(?:[bds]))|[bdksx])|é(?:b(?:(?:(?:s)?)b)|d(?:(?:(?:s)?)d)|s(?:[bd])|[bdx])|[eé])|s(?:i(?:(?:b(?:b|hb|qt|sb|tqt)|c(?:[bs])|d(?:(?:(?:s)?)d)|h(?:[bk])|k(?:(?:(?:h)?)k)|q(?:[bds])|s(?:(?:(?:t)?)qt|[bds])|t(?:c(?:[bs])|q(?:[bds]))|[bdksx])?)|ol(?:(?:b(?:b|hb|qt|sb|tqt)|c(?:[bs])|d(?:(?:(?:s)?)d)|h(?:[bk])|k(?:(?:(?:h)?)k)|q(?:[bds])|s(?:(?:(?:t)?)qt|[bds])|t(?:c(?:[bs])|q(?:[bds]))|[bdksx])?))|[abcdefgh])(?!-?[[:alpha:]])',
          name: 'support.variable.note-name.lilypond'
        }
      ]
    },
    octave_transpose_operators: {
      patterns: [
        {match: "'", name: 'keyword.operator.transpose-octave.up.lilypond'},
        {match: ',', name: 'keyword.operator.transpose-octave.down.lilypond'}
      ]
    },
    paper_expression: {
      patterns: [
        {
          begin: '{',
          end: '}',
          name: 'meta.paper-expression.lilypond',
          patterns: [
            {
              match: '\\\\(?:[cm]m|in|pt)(?!-?[[:alpha:]])',
              name: 'support.constant.lilypond'
            },
            {include: '#paper_expression'},
            {include: '$self'}
          ]
        }
      ]
    },
    scheme_expression: {
      patterns: [
        {
          begin: '\\(',
          end: '\\)',
          name: 'meta.scheme-expression.lilypond',
          patterns: [
            {
              begin: '#\\{',
              end: '#}',
              patterns: [{include: 'source.lilypond'}]
            },
            {include: '#scheme_expression'},
            {include: 'source.lisp'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.lilypond'
}

export default grammar
