// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/nwhetsell/linter-lilypond>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.lisp'],
  extensions: ['.ly', '.ily'],
  names: ['lilypond'],
  patterns: [{include: '#comments'}, {include: '#expression_component'}],
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
    expression_component: {
      patterns: [
        {
          begin: '{',
          end: '}',
          name: 'meta.expression-block.lilypond',
          patterns: [{include: '#comments'}, {include: '#expression_component'}]
        },
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
          patterns: [{include: '#comments'}, {include: '#expression_component'}]
        },
        {
          match: '\\\\\\\\',
          name: 'meta.separator.simultaneous-expressions.lilypond'
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
            {include: '#comments'},
            {include: '#expression_component'}
          ]
        },
        {
          match: '(?<![[:alpha:]])q(?!-?[[:alpha:]])',
          name: 'keyword.operator.chord-repetition.lilypond'
        },
        {
          match:
            '\\b(a(?:-(?:flat(?:(?:flat)?)|natural|sharp(?:(?:sharp)?))|e(?:s(?:e(?:[hs])|s(?:(?:e(?:h|ss))?))|[hs])|ff|i(?:s(?:i(?:[hs])|s(?:(?:i(?:h|ss))?))|[hs])|q(?:[fs])|s(?:a(?:[hs])|e(?:[hs])|s(?:(?:e(?:h|ss))?))|tq(?:[fs])|[fhsx])|b(?:-(?:flat(?:(?:flat)?)|natural|sharp(?:(?:sharp)?))|e(?:s(?:e(?:[hs])|s)|[hs])|ff|i(?:si(?:[hs])|[hs])|q(?:[fs])|ss|tq(?:[fs])|[bfsx])|c(?:-(?:flat(?:(?:flat)?)|natural|sharp(?:(?:sharp)?))|e(?:s(?:e(?:[hs])|s(?:(?:e(?:h|ss))?))|[hs])|ff|i(?:s(?:i(?:[hs])|s(?:(?:i(?:h|ss))?))|[hs])|q(?:[fs])|ss|tq(?:[fs])|[fsx])|d(?:-(?:flat(?:(?:flat)?)|natural|sharp(?:(?:sharp)?))|e(?:s(?:e(?:[hs])|s(?:(?:e(?:h|ss))?))|[hs])|ff|i(?:s(?:i(?:[hs])|s(?:(?:i(?:h|ss))?))|[hs])|o(?:b(?:b|hb|qt|sb|tqt)|c(?:[bs])|d(?:(?:(?:s)?)d)|h(?:[bk])|k(?:(?:(?:h)?)k)|q(?:[bds])|s(?:(?:(?:t)?)qt|[bds])|t(?:c(?:[bs])|q(?:[bds]))|[bdksx])|q(?:[fs])|ss|tq(?:[fs])|[fosx])|e(?:-(?:flat(?:(?:flat)?)|natural|sharp(?:(?:sharp)?))|e(?:s(?:e(?:[hs])|s(?:(?:e(?:h|ss))?))|[hs])|ff|i(?:s(?:i(?:[hs])|s(?:(?:i(?:h|ss))?))|[hs])|q(?:[fs])|s(?:e(?:[hs])|s(?:(?:e(?:h|ss))?))|tq(?:[fs])|[fhsx])|f(?:-(?:flat(?:(?:flat)?)|natural|sharp(?:(?:sharp)?))|a(?:b(?:b|hb|qt|sb|tqt)|c(?:[bs])|d(?:(?:(?:s)?)d)|h(?:[bk])|k(?:(?:(?:h)?)k)|q(?:[bds])|s(?:(?:(?:t)?)qt|[bds])|t(?:c(?:[bs])|q(?:[bds]))|[bdksx])|e(?:s(?:e(?:[hs])|s(?:(?:e(?:h|ss))?))|[hs])|ff|i(?:s(?:i(?:[hs])|s(?:(?:i(?:h|ss))?))|[hs])|q(?:[fs])|ss|tq(?:[fs])|[afsx])|g(?:-(?:flat(?:(?:flat)?)|natural|sharp(?:(?:sharp)?))|e(?:s(?:e(?:[hs])|s(?:(?:e(?:h|ss))?))|[hs])|ff|i(?:s(?:i(?:[hs])|s(?:(?:i(?:h|ss))?))|[hs])|q(?:[fs])|ss|tq(?:[fs])|[fsx])|h(?:e(?:h|s(?:e(?:[hs])|se(?:h|ss)))|i(?:s(?:i(?:[hs])|s(?:(?:i(?:h|ss))?))|[hs]))|la(?:(?:b(?:b|hb|qt|sb|tqt)|c(?:[bs])|d(?:(?:(?:s)?)d)|h(?:[bk])|k(?:(?:(?:h)?)k)|q(?:[bds])|s(?:(?:(?:t)?)qt|[bds])|t(?:c(?:[bs])|q(?:[bds]))|[bdksx])?)|mi(?:(?:b(?:b|hb|qt|sb|tqt)|c(?:[bs])|d(?:(?:(?:s)?)d)|h(?:[bk])|k(?:(?:(?:h)?)k)|q(?:[bds])|s(?:(?:(?:t)?)qt|[bds])|t(?:c(?:[bs])|q(?:[bds]))|[bdksx])?)|r(?:e(?:b(?:b|hb|qt|sb|tqt)|c(?:[bs])|d(?:(?:(?:s)?)d)|h(?:[bk])|k(?:(?:(?:h)?)k)|q(?:[bds])|s(?:(?:(?:t)?)qt|[bds])|t(?:c(?:[bs])|q(?:[bds]))|[bdksx])|é(?:b(?:(?:(?:s)?)b)|d(?:(?:(?:s)?)d)|s(?:[bd])|[bdx])|[eé])|s(?:i(?:(?:b(?:b|hb|qt|sb|tqt)|c(?:[bs])|d(?:(?:(?:s)?)d)|h(?:[bk])|k(?:(?:(?:h)?)k)|q(?:[bds])|s(?:(?:(?:t)?)qt|[bds])|t(?:c(?:[bs])|q(?:[bds]))|[bdksx])?)|ol(?:(?:b(?:b|hb|qt|sb|tqt)|c(?:[bs])|d(?:(?:(?:s)?)d)|h(?:[bk])|k(?:(?:(?:h)?)k)|q(?:[bds])|s(?:(?:(?:t)?)qt|[bds])|t(?:c(?:[bs])|q(?:[bds]))|[bdksx])?))|[abcdefgh])(?!-?[[:alpha:]])',
          name: 'text.note-name.lilypond'
        },
        {
          match:
            '\\b(a(?:coustic(?:bassdrum|snare)|g(?:[hl]))|b(?:assdrum|d(?:(?:a)?)|o(?:h(?:[mo])|l(?:[mo])|[hl]))|c(?:ab(?:(?:asa)?)|g(?:h(?:[mo])|l(?:[mo])|[hl])|hinesecymbal|l(?:aves|osedhihat)|owbell|rashcymbal(?:(?:[ab])?)|ui(?:[mo])|ym(?:c(?:[abh])|r(?:[ab])|[crs])|[bl])|d(?:[abcde])|electricsnare|f(?:ive(?:down|up)|our(?:down|up))|gui(?:(?:ro|[ls])?)|h(?:a(?:lfopenhihat|ndclap)|h(?:ho|[cop])|i(?:agogo|bongo|conga|gh(?:(?:(?:floor)?)tom)|hat|midtom|sidestick|timbale|woodblock)|[ch])|lo(?:agogo|bongo|conga|ng(?:guiro|whistle)|sidestick|timbale|w(?:floortom|midtom|oodblock|tom))|m(?:ar(?:(?:acas)?)|ute(?:cuica|hi(?:bongo|conga)|lo(?:bongo|conga)|triangle))|o(?:ne(?:down|up)|pen(?:cuica|hi(?:bongo|conga|hat)|lo(?:bongo|conga)|triangle))|pedalhihat|r(?:b|ide(?:bell|cymbal(?:(?:[ab])?)))|s(?:hort(?:guiro|whistle)|idestick|n(?:are|[ae])|plashcymbal|s(?:[hl])|[ns])|t(?:amb(?:(?:ourine)?)|hree(?:down|up)|im(?:[hl])|om(?:f(?:[hl])|m(?:[hl])|[hl])|ri(?:(?:angle|[mo])?)|t|wo(?:down|up))|u(?:[abcde])|vib(?:raslap|s)|w(?:b(?:[hl])|h(?:[ls])))(?!-?[[:alpha:]])',
          name: 'text.percussion-note.lilypond'
        },
        {match: '\\b[rRs](?!-?[[:alpha:]])', name: 'text.rest.lilypond'},
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
            '\\\\(EnableGregorianDivisiones|Remove(?:(?:(?:All)?)EmptyStaves)|a(?:bsolute|cc(?:ent|i(?:accatura|dentalStyle))|dd(?:ChordShape|InstrumentDefinition|Quote)|eolian|fter(?:(?:Grace(?:(?:Fraction)?))?)|iken(?:Heads(?:(?:Minor)?)|ThinHeads(?:(?:Minor)?))|l(?:low(?:Break|PageTurn|VoltaHook)|terBroken)|mbitusAfter|pp(?:endToTag|ly(?:Context|Music|Output)|oggiatura)|r(?:abicStringNumbers|peggio(?:(?:Arrow(?:Down|Up)|Bracket|Normal|Parenthesis(?:(?:Dashed)?))?))|ssertBeam(?:Quant|Slope)|uto(?:B(?:eamO(?:ff|n)|reaksO(?:ff|n))|Change|LineBreaksO(?:ff|n)|PageBreaksO(?:ff|n)))|b(?:a(?:lloon(?:GrobText|LengthO(?:ff|n)|Text)|r(?:(?:NumberCheck)?)|ssFigure(?:ExtendersO(?:ff|n)|StaffAlignment(?:Down|Neutral|Up)))|e(?:amExceptions|nd(?:After|Hold|StartLevel))|igger|lackTriangleMarkup|ookOutput(?:Name|Suffix)|re(?:a(?:k(?:(?:DynamicSpan)?)|the)|ve))|c(?:a(?:denzaO(?:ff|n)|esura)|enter|hord(?:(?:Repeat|modifier)s)|lef|o(?:da(?:(?:Mark)?)|mp(?:oundMeter|ress(?:(?:EmptyMeasure|MMRest)s)))|r(?:(?:esc(?:(?:Hairpin|TextCresc)?)|ossStaff)?)|ue(?:Clef(?:(?:Unset)?)|During(?:(?:WithClef)?)))|d(?:ash(?:Bang|D(?:ash|ot)|Hat|Larger|Plus|Underscore)|e(?:adNote(?:(?:sO(?:ff|n))?)|cr(?:(?:esc)?)|f(?:ault(?:NoteHeads|StringTunings|TimeSignature)|ineBarLine)|precated(?:cresc|dim|end(?:cresc|dim)))|i(?:m(?:(?:Hairpin|TextD(?:ecr(?:(?:esc)?)|im))?)|splay(?:LilyMusic|Music|Scheme))|o(?:rian|ts(?:Down|Neutral|Up)|wn(?:(?:bow|mordent|prall)?))|r(?:opNote|umPitchNames)|ynamic(?:Down|Neutral|Up))|e(?:asyHeadsO(?:ff|n)|n(?:ablePolymeter|d(?:S(?:(?:kipNC|panner)s)|cr(?:(?:esc)?)|d(?:ecr(?:(?:esc)?)|im)))|pisem(?:Finis|Initium)|spressivo|(?:ventChord|xpandEmptyMeasure)s)|f(?:e(?:atherDurations|rmata)|ff(?:(?:f(?:(?:f)?))?)|i(?:n(?:e|ger)|xed)|lageolet|ootnote|renchChords|unkHeads(?:(?:Minor)?)|[fpz])|g(?:ermanChords|li(?:de|ssando)|r(?:ace|obdescriptions))|h(?:a(?:lfopen|rmonic(?:(?:By(?:Fret|Ratio)|Note|sO(?:ff|n))?)|ydnturn)|enze(?:(?:long|short)fermata)|ide(?:(?:Notes|S(?:plitTiedTabNotes|taffSwitch))?)|uge)|i(?:gnatzekException(?:Music|s)|mprovisationO(?:ff|n)|n(?:StaffSegno|cipit|herit-acceptability|strumentSwitch|ver(?:sion|tChords))|onian|talianChords)|jump|k(?:e(?:epWithTag|y)|i(?:evanO(?:ff|n)|llCues))|l(?:a(?:bel|issezVibrer|(?:nguag(?:(?:e(?:Restor|SaveAndChang))?)|rg)e)|eft|heel|ineprall|o(?:crian|ng(?:(?:(?:fermat)?)a))|toe|ydian)|m(?:a(?:gnify(?:Music|Staff)|jor|ke(?:Clusters|DefaultStringTuning)|r(?:cato|k(?:(?:LengthO(?:ff|n)|upMap)?))|xima)|e(?:dianChordGridStyle|lisma(?:(?:End)?)|rgeDifferently(?:DottedO(?:ff|n)|HeadedO(?:ff|n)))|i(?:diDrumPitches|nor|xolydian)|o(?:dal(?:Inversion|Transpose)|rdent)|usicMap|[fp])|n(?:ewSpacingSection|o(?:B(?:eam|reak)|Page(?:Break|Turn)|rmalsize)|umericTimeSignature)|o(?:ctaveCheck|ffset|mit|n(?:(?:(?:eVoi)?)ce)|pen|ttava|verride(?:Property|TimeSignatureSettings))|p(?:a(?:ge(?:Break|Turn)|lmMute(?:(?:O(?:ff|n))?)|r(?:allelMusic|enthesize|t(?:Combine(?:(?:A(?:part|utomatic)|Chords|Down|Force|Listener|SoloI(?:(?:I)?)|U(?:nisono|p))?)|ial)))|hr(?:asingSlur(?:D(?:ash(?:Pattern|ed)|o(?:tted|wn))|Half(?:(?:Dashe|Soli)d)|Neutral|Solid|Up)|ygian)|itchedTrill|o(?:intAndClick(?:O(?:ff|n)|Types)|rtato)|p(?:(?:p(?:(?:p(?:(?:p)?))?))?)|r(?:all(?:(?:down|mordent|prall|up)?)|e(?:Bend(?:(?:Hold)?)|definedFretboardsO(?:ff|n))|operty(?:Override|Revert|Set|Tweak|Unset))|ushToTag)|quoteDuring|r(?:aiseNote|e(?:duceChords|lative|moveWithTag|peatTie|setRelativeOctave|trograde|ver(?:seturn|tTimeSignatureSettings))|fz|heel|ight(?:(?:HandFinger)?)|omanStringNumbers|toe)|s(?:acredHarpHeads(?:(?:Minor)?)|caleDurations|e(?:ction(?:(?:Label)?)|gno(?:(?:Mark)?)|miGermanChords|t(?:DefaultDurationToQuarter|tingsFrom))|f(?:[fpz])|h(?:ape|ift(?:Durations|O(?:ff|n(?:(?:n(?:(?:n)?))?)))|o(?:rtfermata|wS(?:plitTiedTabNotes|taffSwitch)))|i(?:(?:gnumcongruentia|ngl)e)|kip(?:(?:NC(?:(?:s)?))?)|l(?:ash(?:edGrace|turn)|ur(?:D(?:ash(?:Pattern|ed)|o(?:tted|wn))|Half(?:(?:Dashe|Soli)d)|Neutral|Solid|Up))|mall(?:(?:er)?)|nappizzicato|o(?:stenutoO(?:ff|n)|uthernHarmonyHeads(?:(?:Minor)?))|pp|t(?:a(?:ccat(?:(?:(?:issim)?)o)|ffHighlight|rt(?:(?:A(?:(?:cciacc|ppoggi)aturaMusic)|Gr(?:ace(?:Music|Slur)|oup)|Measure(?:Count|Spanner)|S(?:lashedGraceMusic|taff)|T(?:(?:ext|rill)Span))?))|em(?:Down|Neutral|Up)|o(?:p(?:(?:A(?:(?:cciacc|ppoggi)aturaMusic)|Gr(?:ace(?:Music|Slur)|oup)|Measure(?:Count|Spanner)|S(?:lashedGraceMusic|taff(?:(?:Highlight)?))|T(?:(?:ext|rill)Span)|ped)?)|rePredefinedDiagram)|ringTuning|yledNoteHeads)|ustainO(?:ff|n)|[fp])|t(?:a(?:b(?:ChordRepe(?:ats|tition)|FullNotation)|g(?:(?:Group)?))|e(?:eny|mporary|nuto|xt(?:EndMark|LengthO(?:ff|n)|Mark|Spanner(?:Down|Neutral|Up)))|humb|i(?:e(?:D(?:ash(?:Pattern|ed)|o(?:tted|wn))|Half(?:(?:Dashe|Soli)d)|Neutral|Solid|Up)|me(?:(?:s)?)|ny)|ocItem(?:(?:WithDotsMarkup)?)|r(?:anspos(?:e(?:(?:dCueDuring)?)|ition)|eCorde|ill)|u(?:plet(?:(?:Down|Neutral|Span|Up)?)|rn)|weak)|u(?:n(?:HideNotes|aCorda|do|fold(?:Repeats|ed))|p(?:(?:bow|mordent|prall)?))|v(?:arcoda|ery(?:(?:long|short)fermata)|o(?:i(?:ce(?:Four(?:(?:Style)?)|NeutralStyle|One(?:(?:Style)?)|T(?:hree(?:(?:Style)?)|wo(?:(?:Style)?))|s)|d)|lta|welTransition)|shape)|w(?:alkerHeads(?:(?:Minor)?)|hite(?:(?:Circ|Triang)leMarkup)|ithMusicProperty)|xNote(?:(?:sO(?:ff|n))?)|[fnp])(?!-?[[:alpha:]])',
          name: 'support.function.lilypond'
        },
        {
          match:
            '\\\\(a(?:bs-fontsize|ccidental|lign-on-other|rrow-head|uto-footnote)|b(?:ackslashed-digit|eam|o(?:ld|x)|racket)|c(?:aps|enter-(?:(?:alig|colum)n)|har|ircle|o(?:da|lumn(?:(?:-lines)?)|m(?:bine|pound-meter)|n(?:cat|ditional-trill-markup))|ustomTabClef)|d(?:i(?:r-column|scant)|ouble(?:flat|sharp)|raw-(?:(?:circl|(?:(?:d(?:(?:ash|ott)ed-)|h|squiggle-)?)lin)e)|ynamic)|e(?:llipse|psfile|yeglasses)|f(?:ermata|i(?:gured-bass|ll(?:-(?:line|with-pattern)|ed-box)|nger|rst-visible)|lat|o(?:nt(?:Caps|size)|otnote)|r(?:action|e(?:eBass|t-diagram(?:(?:-(?:(?:ter|verbo)se))?))|omproperty))|general-align|h(?:a(?:lign|rp-pedal)|bracket|center-in|(?:spac|ug)e)|i(?:f|talic)|justif(?:ied-lines|y(?:(?:-(?:field|line|string))?))|l(?:arge(?:(?:r)?)|eft-(?:align|brace|column)|ine|o(?:okup|wer))|m(?:a(?:gnify|p-markup-commands|rk(?:alphabet|letter))|edium|u(?:lti-measure-rest-by-number|sicglyph))|n(?:atural|o(?:rmal(?:-(?:size-su(?:b|per)|text)|size)|te(?:(?:-by-number)?))|u(?:ll|mber))|o(?:n-the-fly|v(?:al|er(?:lay|ride-lines|tie)))|p(?:a(?:d-(?:around|markup|(?:(?:to-bo)?)x)|ge-(?:link|ref)|renthesize|t(?:h|tern))|o(?:lygon|stscript)|roperty-recursive|ut-adjacent)|r(?:aise|e(?:place|st(?:(?:-by-number)?))|hythm|ight-(?:align|brace|column)|o(?:man|tate|unded-box))|s(?:ans|c(?:ale|ore-lines)|e(?:gno|mi(?:flat|sharp)|squi(?:flat|sharp))|harp|imple|lashed-digit|mall(?:(?:Caps|er)?)|t(?:dBass(?:(?:IV|V(?:(?:I)?))?)|encil|r(?:ing-lines|ut))|u(?:b|per))|t(?:able(?:(?:-of-contents)?)|e(?:eny|xt)|i(?:e(?:(?:d-lyric)?)|ny)|r(?:ans(?:late(?:(?:-scaled)?)|parent)|iangle)|ypewriter)|u(?:n(?:der(?:(?:lin|ti)e)|less)|pright)|v(?:arcoda|center|(?:erbatim-fil|spac)e)|w(?:hiteout|ith-(?:color|dimension(?:(?:-from|s(?:(?:-from)?))?)|link|outline|string-transformer|true-dimension(?:(?:s)?)|url)|o(?:odwind-diagram|rdwrap(?:(?:-(?:field|internal|lines|string(?:(?:-internal)?)))?))))(?!-?[[:alpha:]])',
          name: 'support.function.markup.lilypond'
        },
        {
          match: '\\\\[[:alpha:]]+(?:-[[:alpha:]]+)*',
          name: 'variable.other.lilypond'
        },
        {
          match:
            '(?<!-)\\b(A(?:ccidental(?:(?:Cautionary|Placement|Suggestion|_engraver)?)|lteration_glyph_engraver|mbitus(?:(?:Accidental|Line|NoteHead|_engraver)?)|rpeggio(?:(?:_engraver)?)|(?:uto_beam|xis_group)_engraver)|B(?:a(?:lloon(?:Text|_engraver)|r(?:Line|(?:Numb|_(?:(?:(?:number_)?)engrav))er)|ssFigure(?:(?:Alignment(?:(?:Positioning)?)|Bracket|Continuation|Line)?))|e(?:a(?:m(?:(?:_(?:(?:collision_engrav|engrav|perform)er))?)|t_(?:(?:engrav|perform)er))|nd(?:(?:Aft|Spann|_(?:(?:(?:spanner_)?)engrav))er))|rea(?:k(?:Align(?:Group|ment)|_align_engraver)|thing(?:Sign|_sign_engraver)))|C(?:aesura(?:Script|_engraver)|entered(?:(?:BarNumb(?:(?:erLineSpann)?)|_bar_number_align_engrav)er)|ho(?:irStaff|rd(?:Grid(?:(?:Score)?)|Name(?:(?:s)?)|Square|_(?:(?:name|square|tremolo)_engraver)))|l(?:ef(?:(?:(?:Modifi|_engrav)er)?)|uster(?:Spanner(?:(?:Beacon)?)|_spanner_engraver))|o(?:daMark|llision_engraver|m(?:bineTextScript|pletion_(?:(?:heads|rest)_engraver))|n(?:current_hairpin_engraver|trol(?:Po(?:int|lygon)|_track_performer)))|u(?:e(?:Clef|EndClef|Voice|_clef_engraver)|rrent_chord_text_engraver|stos(?:(?:_engraver)?)))|D(?:evnull|ivisio(?:(?:_engraver)?)|o(?:t(?:Column|_column_engraver|s(?:(?:_engraver)?))|uble(?:PercentRepeat(?:(?:Counter)?)|RepeatSlash|_percent_repeat_engraver))|rum(?:Staff|Voice|_note(?:(?:_perform|s_engrav)er))|uration(?:Line|_line_engraver)|ynamic(?:LineSpanner|Text(?:(?:Spanner)?)|_(?:(?:align_engrav|engrav|perform)er)|s))|E(?:pisema(?:(?:_engraver)?)|xtender_engraver)|F(?:i(?:gured(?:Bass|_bass_(?:(?:(?:position_)?)engraver))|nger(?:GlideSpanner|_glide_engraver|ing(?:(?:Column|_(?:(?:(?:column_)?)engraver))?)))|lag|o(?:nt_size_engraver|otnote(?:(?:_engraver)?)|rbid_line_break_engraver)|ret(?:Board(?:(?:s)?)|board_engraver))|G(?:l(?:issando(?:(?:_engraver)?)|obal)|r(?:a(?:ce(?:Spacing|_(?:(?:(?:(?:auto_beam|beam|spacing)_)?)engraver))|ndStaff)|egorianTranscription(?:Lyrics|Staff|Voice)|id(?:ChordName|Line|Point|_(?:(?:chord_name|line_span|point)_engraver))|ob_pq_engraver))|H(?:airpin|orizontal(?:Bracket(?:(?:Text)?)|_bracket_engraver)|yphen_engraver)|In(?:strument(?:Name|Switch|_(?:(?:name|switch)_engraver))|ternalGregorianStaff)|Jump(?:Script|_engraver)|K(?:e(?:ep_alive_together_engraver|y(?:Cancellation|Signature|_(?:(?:engrav|perform)er)))|ievan(?:Ligature|Staff|Voice|_ligature_engraver))|L(?:aissez(?:VibrerTie(?:(?:Column)?)|_vibrer_engraver)|e(?:dger(?:(?:LineSpann|_line_engrav)er)|ftEdge)|igature(?:Bracket|_bracket_engraver)|yric(?:Extender|Hyphen|RepeatCount|Space|Text|_(?:(?:engrav|perform|repeat_count_engrav)er)|s))|M(?:ark_(?:(?:engrave|performe|tracking_translato)r)|e(?:asure(?:Counter|Grouping|(?:Spann|_(?:(?:counter|grouping|spanner)_engrav))er)|lody(?:Item|_engraver)|nsural(?:Ligature|Staff|Voice|_ligature_engraver)|rge_(?:(?:mmrest_number|rest)s_engraver)|tronome(?:Mark|_mark_engraver))|idi_control_change_performer|ulti(?:MeasureRest(?:(?:Number|(?:Scrip|Tex)t)?)|_measure_rest_engraver))|N(?:ew_fingering_engraver|o(?:n(?:MusicalPaperColumn|_musical_script_column_engraver)|te(?:Col(?:(?:lisio|um)n)|Head|Name(?:(?:s)?)|Spacing|_(?:(?:head(?:(?:_line|s)_engrav)|name_engrav|perform|spacing_engrav)er)))|ullVoice)|O(?:neStaff|ttava(?:Bracket|_spanner_engraver)|utput_property_engraver)|P(?:a(?:ge_turn_engraver|per(?:Column|_column_engraver)|r(?:enthes(?:es|is_engraver)|t_combine_engraver))|e(?:rcent(?:Repeat(?:(?:Counter)?)|_repeat_engraver)|trucci(?:Staff|Voice))|hrasing(?:(?:Slu|_slur_engrave)r)|i(?:ano(?:PedalBracket|Staff|_pedal_(?:(?:align_engrav|engrav|perform)er))|tch(?:(?:_squash|ed_trill)_engraver))|ure_from_neighbor_engraver)|R(?:e(?:hearsalMark|peat(?:Slash|Tie(?:(?:Column)?)|_(?:(?:acknowledg|ti)e_engraver))|st(?:(?:Collision|_(?:(?:(?:collision_)?)engraver))?))|hythmic(?:Staff|_column_engraver))|S(?:c(?:ore|ript(?:(?:Column|Row|_(?:(?:(?:(?:column|row)_)?)engraver))?))|e(?:ctionLabel|gnoMark|parating_line_group_engraver)|how_control_points_engraver|ignum(?:Repetitionis|_repetitionis_engraver)|kip_typesetting_engraver|l(?:(?:ash_repeat_engrave|u(?:(?:r_(?:(?:engrav|perform)e))?))r)|ostenutoPedal(?:(?:LineSpanner)?)|pa(?:cing(?:(?:Spann|_engrav)er)|n(?:Bar(?:(?:Stub)?)|(?:_(?:arpeggio|bar(?:(?:_stub)?)|stem)|ner_(?:break_forbid|tracking))_engraver))|t(?:a(?:ff(?:(?:Ellipsis|Group(?:(?:er)?)|Highlight|S(?:pacing|ymbol)|_(?:(?:collecting_engrav|highlight_engrav|perform|symbol_engrav)er))?)|n(?:daloneRhythm(?:S(?:core|taff)|Voice)|za(?:(?:Numb|_number_(?:(?:(?:align_)?)engrav))er)))|em(?:(?:Stub|Tremolo|_engraver)?)|r(?:(?:ingNumb|okeFing)er))|ustainPedal(?:(?:LineSpanner)?)|ystem(?:(?:Start(?:B(?:ar|rac(?:e|ket))|Square)|_start_delimiter_engraver)?))|T(?:ab(?:NoteHead|Staff|Voice|_(?:(?:note_heads|staff_symbol|tie_follow)_engraver))|e(?:mpo_performer|xt(?:Mark|S(?:cript|panner)|_(?:(?:(?:(?:mark|spanner)_)?)engraver)))|i(?:e(?:(?:Column|_(?:(?:engrav|perform)er))?)|m(?:e(?:Signature|_signature_(?:(?:engrav|perform)er))|ing(?:(?:_translator)?)))|rill(?:Pitch(?:Accidental|Group|Head|Parentheses)|(?:Spann|_spanner_engrav)er)|uplet(?:Bracket|(?:Numb|_engrav)er)|weak_engraver)|UnaCordaPedal(?:(?:LineSpanner)?)|V(?:aticana(?:L(?:igature|yrics)|Staff|Voice|_ligature_engraver)|ertical(?:A(?:lignment|xisGroup)|_align_engraver)|o(?:ice(?:(?:Follower)?)|lta(?:Bracket(?:(?:Spanner)?)|_engraver)|welTransition)))(?!-?[[:alpha:]])',
          name: 'support.type.lilypond'
        },
        {match: "'", name: 'punctuation.apostrophe.lilypond'},
        {match: ',', name: 'punctuation.comma.lilypond'},
        {match: '\\?', name: 'punctuation.question-mark.lilypond'},
        {match: '!', name: 'punctuation.exclamation-point.lilypond'},
        {match: '\\.', name: 'punctuation.dot.lilypond'},
        {match: '=', name: 'keyword.operator.equals-sign.lilypond'},
        {match: '\\*', name: 'keyword.operator.multiplication.lilypond'},
        {match: '-', name: 'punctuation.hyphen.lilypond'},
        {match: '\\^', name: 'punctuation.caret.lilypond'},
        {match: '_', name: 'punctuation.underscore.lilypond'},
        {match: '>', name: 'punctuation.greater-than-sign.lilypond'},
        {match: '\\+', name: 'punctuation.plus-sign.lilypond'},
        {match: '/(?!\\+)', name: 'keyword.operator.forward-slash.lilypond'},
        {match: '~', name: 'punctuation.tilde.lilypond'},
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
          match: '\\\\(?=\\d)',
          name: 'keyword.operator.string-number-indicator.lilypond'
        },
        {match: '\\\\\\[', name: 'invalid.deprecated.ligature.begin.lilypond'},
        {match: '\\\\\\]', name: 'invalid.deprecated.ligature.end.lilypond'},
        {
          begin: '(?:(#)|(\\$)|([#$]@))',
          beginCaptures: {
            1: {name: 'keyword.operator.scheme.embed.lilypond'},
            2: {name: 'keyword.operator.scheme.evaluate.lilypond'},
            3: {name: 'keyword.operator.scheme.list-splice.lilypond'}
          },
          end: '(?<=[\\w)}])|$',
          name: 'meta.scheme.lilypond',
          patterns: [
            {
              begin: '\\G(?: +|$)',
              end: '(?! |$|#?;)',
              name: 'meta.scheme-comments.lilypond',
              patterns: [
                {
                  begin: '#?;',
                  beginCaptures: {
                    0: {name: 'punctuation.definition.comment.lilypond'}
                  },
                  end: '$',
                  name: 'comment.line.lilypond-scheme'
                }
              ]
            },
            {include: '#scheme_embedded_lilypond'},
            {
              begin: '(?! |$|#?;)',
              end: '(?=\\s)|$',
              name: 'meta.scheme-datum.lilypond',
              patterns: [
                {include: '#scheme_expression'},
                {include: 'source.lisp'}
              ]
            }
          ]
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
    integer: {
      patterns: [{match: '\\d+', name: 'constant.numeric.integer.lilypond'}]
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
    scheme_embedded_lilypond: {
      patterns: [
        {
          begin: '#\\{',
          beginCaptures: {
            0: {name: 'punctuation.definition.embedded-lilypond.begin.lilypond'}
          },
          end: '#}',
          endCaptures: {
            0: {name: 'punctuation.definition.embedded-lilypond.end.lilypond'}
          },
          name: 'meta.embedded-lilypond.lilypond',
          patterns: [{include: 'source.lilypond'}]
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
            {name: 'support.function.lilypond-scheme'},
            {include: '#scheme_embedded_lilypond'},
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
