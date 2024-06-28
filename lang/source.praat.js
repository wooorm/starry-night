// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/orhunulusahin/praatvscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.praat'],
  names: ['praat'],
  patterns: [{include: '#language'}, {include: '#paren-expression'}],
  repository: {
    assignment: {match: '=', name: 'keyword.operator.key.praat'},
    'class-builtin': {
      match:
        '\\b((Long)?Sound|Text(Grid|Tier)|Formant(Grid)?|Strings|all|Intensity(Tier)?|Pitch(Tier)?|PointProcess|Table(OfReal)?|Matrix|Polygon|Distributions|PairDistribution|Permutation|ParamCurve|Harmonicity|Electroglottogram|Spectrum|Ltas|LPC|Cepstrum|(LF|MF)?CC|Excitation(s)?|Cochleagram|Manipulation|Duration(Tier)?|Speaker|Articulation|VocalTract|FFNet|PatternList|Categories|Eigen|Polynomial|Roots|ChebyshevSeries|LegendreSeries|(I|M)Spline|Covariance|Confusion|Discriminant|ExperimentMFC|PCA|Correlation|ClassificationTable|SSCP|DTW|Configuration|Dissimilarity|Similarity|Distance|ScalarProduct|ContingencyTable|OTGrammar|WordList|SpellingChecker)\\b',
      name: 'support.class.builtin.praat'
    },
    comments: {
      begin: '(^|\\s|\\t|\\b)(#|;)',
      beginCaptures: {0: {name: 'punctuation.definition.comment.praat'}},
      end: '$',
      name: 'comment.line.number-sign.praat'
    },
    console: {
      patterns: [
        {
          captures: {
            1: {name: 'support.function.praat'},
            2: {name: 'keyword.variable.language.praat'}
          },
          match: '\\b(write|append)((Info|File)(Line)?)\\b',
          name: 'support.function.praat'
        },
        {
          begin: '\\b(clear)',
          beginCaptures: {1: {name: 'support.function.praat'}},
          end: '(info)\\b',
          endCaptures: {1: {name: 'keyword.variable.language.praat'}},
          name: 'support.function.praat'
        },
        {match: '\\b(echo|printline)\\b', name: 'support.function.praat'}
      ]
    },
    control: {
      match:
        '\\b(for|while|end(for|while|if|form|proc|editor)|from|to|repeat|until|if|then|fi|else|elsif|elif|nowarn|noprogress|nocheck|assert|form|call|procedure|Edit|editor)\\b',
      name: 'keyword.control.praat'
    },
    'file-function': {
      match:
        '(\\s)*?\\b(fileReadable|readFile(\\$)?|createFolder|deleteFile|fileNames\\$\\#)(\\b|\\s)',
      name: 'support.function.string.praat'
    },
    import: {
      match: '(?i)\\b(include)\\s',
      name: 'keyword.control.import.include.praat'
    },
    'interface-function': {
      patterns: [
        {
          match: '\\b(pauseScript|beginPause|endPause|runSystem(_nocheck)?)\\b',
          name: 'support.function.praat'
        },
        {
          begin: '(\\s)*?\\b(printline|exit|pause|echo|print|exitScript[:])\\s',
          beginCaptures: {0: {name: 'support.function.praat'}},
          end: '(.)*?$',
          endCaptures: {0: {name: 'string.punctuation.praat'}}
        },
        {
          begin: '(\\s)*?\\bform\\s',
          beginCaptures: {0: {name: 'keyword.control.praat'}},
          end: '(.)*?$',
          endCaptures: {0: {name: 'string.punctuation.praat'}}
        },
        {
          begin: '(\\s)*?\\bcomment\\s',
          beginCaptures: {0: {name: 'storage.type.praat'}},
          end: '(.)*?$',
          endCaptures: {0: {name: 'string.punctuation.praat'}}
        }
      ]
    },
    interpolation: {
      patterns: [
        {
          match: '\\\\[0-7]{1,3}',
          name: 'constant.character.escape.octal.praat'
        },
        {
          match: '\\\\x[0-9A-Fa-f]{1,2}',
          name: 'constant.character.escape.hex.praat'
        },
        {
          match: '\\\\u{[0-9A-Fa-f]+}',
          name: 'constant.character.escape.unicode.praat'
        },
        {match: '\\\\[nrtvef$\\\\]', name: 'constant.character.escape.praat'}
      ]
    },
    language: {
      patterns: [
        {include: '#comments'},
        {include: '#predefined-numeric'},
        {include: '#predefined-string'},
        {include: '#sound-function'},
        {include: '#string-function'},
        {include: '#file-function'},
        {include: '#interface-function'},
        {include: '#open-menu-function'},
        {include: '#new-menu-function'},
        {include: '#sound-save-function'},
        {include: '#other-save-function'},
        {include: '#textgrid-query-function'},
        {include: '#textgrid-gui-function'},
        {include: '#textgrid-tabulate-function'},
        {include: '#textgrid-analyse-function'},
        {include: '#textgrid-synthesize-function'},
        {include: '#textgrid-sound-function'},
        {include: '#sound-draw-function'},
        {include: '#sound-query-function'},
        {include: '#sound-modify-function'},
        {include: '#sound-annotate-function'},
        {include: '#sound-periodicity-function'},
        {include: '#sound-spectrum-function'},
        {include: '#sound-convert-function'},
        {include: '#sound-filter-function'},
        {include: '#sound-combine-function'},
        {include: '#strings-function'},
        {include: '#select-function'},
        {include: '#math-function'},
        {include: '#proc-declaration'},
        {include: '#string-variables'},
        {include: '#strings'},
        {include: '#operators'},
        {include: '#console'},
        {include: '#import'},
        {include: '#control'},
        {include: '#class-builtin'},
        {include: '#types-builtin'},
        {include: '#textgrid-function'},
        {include: '#numeric-variables'},
        {include: '#numbers'}
      ]
    },
    math: {
      patterns: [
        {
          match: '\\-|\\^|\\*|\\/|\\+|(\\<\\>)|\\<|\\>|(\\<\\=)|(\\>\\=)',
          name: 'keyword.operator.key.praat'
        },
        {
          match:
            '\\b(abs|round|floor|ceiling|sqrt|min|max|imin|imax|sin(c(pi)?|h)?|cos(h)?|tan(h)?|arcsin(h)?|arccos(h)?|arctan(h|2)?|exp|ln|log(10|2)|sigmoid|invSigmoid|erf(c)?|random(Uniform|Integer|Gauss|Poisson|Gamma|_initilialize(WithSeedUnsafelyButPredictably|SafelyAndUnpredictably))|Gauss(P|Q)|lnGamma|invGaussQ|chiSquare(P|Q)|invChiSquareQ|student(P|Q)|fisher(P|Q)|invFisherQ|binomial(P|Q)|incBinomial(P|Q)|hertzTo(Bark|Mel|Semitomes|Erb)|barkToHertz|melToHertz|semitonesToHertz|erb(ToHertz)?|phonToDifferenceLimens|differenceLimensToPhon|beta|bessel(I|K))\\b',
          name: 'support.function.math.praat'
        }
      ]
    },
    'new-menu-function': {
      match:
        '(\\s)*?\\b(Record (mono|stereo) Sound|Create (Sound (from formula|as (pure tone|tone complex|gammatone|Shepard tone)|from VowelEditor)|(simple )?Matrix( from values)?|(simple )? Photo|Table with(out)? column names|simple (Confusion|Covariance|Correlation)|empty EditCostsTable|empty PointProcess|Poisson process|(Pitch|Intensity|Duration|Amplitude|Real)Tier|FormantGrid|TextGrid|Corpus|Strings (as file list|as folder list|from tokens)|Articulation|Speaker|Artword|Vocal Tract from phone|Permutation|SpeechSynthesizer))\\b',
      name: 'support.function.praat'
    },
    numbers: {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)\\b',
      name: 'constant.numeric.praat'
    },
    'numeric-variables': {
      captures: {
        1: {name: 'variable.other.praat'},
        2: {name: 'variable.other.praat'},
        3: {name: 'variable.other.praat'},
        4: {name: 'keyword.operator.praat'}
      },
      match: '^(\\b|\\s|\\t)*?([a-z])(?i)((?:_?[a-z0-9_]+))?(\\b|\\s)*?\\='
    },
    'open-menu-function': {
      match:
        '(\\s)*?\\b(Read (from file|Sound (Alaw file|16\\-bit (Little|Big) Endian file)|separate channels from sound file|Matrix from raw text file|TableOfReal from headerless spreadsheet file|Table from (tab|comma|semicolon|whitespace)\\-separated file|Strings from raw text file|(Text|Interval)Tier from Xwaves)|Open long sound file)\\b',
      name: 'support.function.string.praat'
    },
    operators: {
      patterns: [
        {
          match: '\\.\\.\\.\\s|\\b(\\:\\s|not|and|or|div|mod|yes|no|self)\\b',
          name: 'constant.language.operator.praat'
        },
        {include: '#math'},
        {include: '#assignment'}
      ]
    },
    'other-save-function': {
      match:
        '(\\s)*?\\b((Save as|Write to) ((short |chronological |matrix )?text|binary|headerless spreadsheet) file)\\b',
      name: 'support.function.string.praat'
    },
    'paren-expression': {
      begin: '\\(',
      beginCaptures: {0: {name: 'punctuation.paren.open.praat'}},
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.paren.close.praat'}},
      name: 'expression.group',
      patterns: [{include: '#language'}]
    },
    'predefined-numeric': {
      match:
        '\\b(macintosh|windows|unix|praatVersion|pi|e|undefined|stopwatch)\\b',
      name: 'constant.language.praat'
    },
    'predefined-string': {
      match: '\\s*(newline|tab|shellDirectory|environment)\\$\\s*',
      name: 'constant.language.praat'
    },
    'proc-declaration': {
      patterns: [
        {
          captures: {
            2: {name: 'keyword.control.praat'},
            3: {name: 'support.function.praat'},
            4: {name: 'support.function.praat'}
          },
          match:
            '(\\b|\\s|\\t)*?(procedure)\\s([a-z][a-zA-Z0-9_]+)(\\:)?(\\b|\\s)?'
        }
      ]
    },
    'regex-double-quoted': {
      begin: '(?x)"/ (?= (\\\\.|[^"/])++/[imsxeADSUXu]*" )',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.praat'}},
      end: '(/)([imsxeADSUXu]*)(")',
      endCaptures: {0: {name: 'punctuation.definition.string.end.praat'}},
      name: 'string.regexp.double-quoted.praat',
      patterns: [
        {
          match: '(\\\\){1,2}[.$^\\[\\]{}]',
          name: 'constant.character.escape.regex.praat'
        },
        {include: '#interpolation'},
        {
          captures: {
            1: {name: 'punctuation.definition.arbitrary-repetition.praat'},
            3: {name: 'punctuation.definition.arbitrary-repetition.praat'}
          },
          match: '(\\{)\\d+(,\\d+)?(\\})',
          name: 'string.regexp.arbitrary-repetition.praat'
        },
        {
          begin: '\\[(?:\\^?\\])?',
          captures: {0: {name: 'punctuation.definition.character-class.praat'}},
          end: '\\]',
          name: 'string.regexp.character-class.praat',
          patterns: [{include: '#interpolation'}]
        },
        {match: '[$^+*]', name: 'keyword.operator.regexp.praat'}
      ]
    },
    'regex-single-quoted': {
      begin:
        "(?x)'/ (?= ( \\\\ (?: \\\\ (?: \\\\ [\\\\']? | [^'] ) | . ) | [^'/] )++/[imsxeADSUXu]*' )",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.praat'}},
      end: "(/)([imsxeADSUXu]*)(')",
      endCaptures: {0: {name: 'punctuation.definition.string.end.praat'}},
      name: 'string.regexp.single-quoted.praat',
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.arbitrary-repetition.praat'},
            3: {name: 'punctuation.definition.arbitrary-repetition.praat'}
          },
          match: '(\\{)\\d+(,\\d+)?(\\})',
          name: 'string.regexp.arbitrary-repetition.praat'
        },
        {
          begin: '\\[(?:\\^?\\])?',
          captures: {0: {name: 'punctuation.definition.character-class.praat'}},
          end: '\\]',
          name: 'string.regexp.character-class.praat',
          patterns: [{include: '#single_quote_regex_escape'}]
        },
        {match: '[$^+*]', name: 'keyword.operator.regexp.praat'},
        {include: '#single_quote_regex_escape'}
      ],
      repository: {
        single_quote_regex_escape: {
          match: "(?x) \\\\ (?: \\\\ (?: \\\\ [\\\\']? | [^'] ) | . )",
          name: 'constant.character.escape.praat'
        }
      }
    },
    'select-function': {
      captures: {2: {name: 'support.function.praat'}},
      match:
        '(\\s)*?\\b(select(Object| all)?|plus(Object)?|minus(Object)?|Remove|removeObject|Concatenate|Rename|Selected(\\$)?|Info|Inspect|Copy)\\b'
    },
    'sound-annotate-function': {
      match: '(\\s)*?\\b(To TextGrid( \\((silences|voice activity)\\))?)',
      name: 'support.function.praat'
    },
    'sound-combine-function': {
      match:
        '(\\s)*?\\b(Combine (to stereo|into Sound(List|Set))|Concatenate( recoverably| with overlap)?|Convolve|Cross\\-correlate|To (CrossCorrelationTable \\(combined\\)|DTW|ParamCurve))',
      name: 'support.function.praat'
    },
    'sound-convert-function': {
      match:
        '(\\s)*?\\b(Convert to (mono|stereo)|Extract (all channels|one channel|channels|part( for overlap)?|Electroglottogram)|Resample|To (Sound \\((white channels|bss)\\)|CrossCorrelationTable)|Lengthen \\(overlap-add\\)|Deepen band modulation|Change gender|Down to Matrix)',
      name: 'support.function.praat'
    },
    'sound-draw-function': {
      match: '\\b(Draw( where)?|Paint (where|enclosed))\\b',
      name: 'support.function.praat'
    },
    'sound-filter-function': {
      match:
        '(\\s)*?\\b(Filter \\((pass Hann band|stop Hann band|formula|one formant|pre\\-emphasis|de\\-emphasis|gammatone|inverse)\\)|Reduce noise)',
      name: 'support.function.praat'
    },
    'sound-function': {
      match: '\\b(Play|To Intensity|Down to)\\b',
      name: 'support.function.praat'
    },
    'sound-modify-function': {
      match:
        '\\b(Shift times (by|to)|Scale (peak|intensity|times (by|to))|Reverse|Formula( \\(part\\))?|Add|Subtract mean|Multiply( by window)?|Set (value at sample number|part to zero)|Override sampling frequency|Pre-emphasize \\(in-place\\)|De-emphasize \\(in-place\\))',
      name: 'support.function.praat'
    },
    'sound-periodicity-function': {
      match:
        '(\\s)*?\\b(To (Manipulation|Pitch( \\((ac|cc|SPINET|shs)\\))?|PointProcess \\((periodic\\, cc|periodic\\, peaks|extrema|zeroes)\\)|Harmonicity \\(cc|ac|gne\\)|PowerCepstrogram)|Autocorrelate)',
      name: 'support.function.praat'
    },
    'sound-query-function': {
      match:
        '\\b(Get (start time|end time|total duration|number of channels|number of samples|sampling period|sampling frequency|time from sample number|sample number from time|value at (time|sample number)|minimum|maximum|time of (minimum|maximum)|absolute extremum|nearest (zero crossing|level crossing)|mean|root-mean-square|standard deviation|energy( in air)?|power( in air)?|intensity \\(dB\\))|List all sample times)',
      name: 'support.function.praat'
    },
    'sound-save-function': {
      captures: {2: {name: 'support.function.praat'}},
      match:
        '(\\s)*?\\b((Save as|Write to) ((short)? text|binary|((24|32)\\-bit )?WAV|AIFF|AIFC|Next\\/Sun|NIST|FLAC|Kay|raw (8\\-bit (un)?signed|(16|24|32)\\-bit (big|little)\\-endian)) file|Append to existing sound file)\\b'
    },
    'sound-spectrum-function': {
      match:
        '\\b(To (Spectrum|Ltas( \\(pitch-corrected\\))?|Spectrogram( \\(pitch-dependent\\))?|Cochleagram|BarkSpectrogram|MelSpectrogram|Formant \\((burg|keep all|sl|robust)\\)|FormantPath( \\(burg\\))?|LPC \\((autocorrelation|covariance|burg|marple)\\)|MFCC))',
      name: 'support.function.praat'
    },
    'string-double-quoted': {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.praat'}},
      contentName: 'meta.string-contents.quoted.double.praat',
      end: '("|$)',
      endCaptures: {0: {name: 'punctuation.definition.string.end.praat'}},
      name: 'string.quoted.double.praat',
      patterns: [
        {include: '#interpolation'},
        {include: '#string-variables'},
        {include: '#string-single-quoted'}
      ]
    },
    'string-function': {
      match:
        '(\\s)*?\\b(length|left\\$|right\\$|mid\\$|index(_regex)?|rindex(_regex)?|startsWith|endsWith|replace\\$|replace_regex(\\$)?|string\\$|fixed\\$|percent\\$|number|date\\$|unicode\\$|extract(Number|Word\\$|Line\\$)|backslashTrigraphsToUnicode\\$)(\\s)?',
      name: 'support.function.string.praat'
    },
    'string-single-quoted': {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.praat'}},
      contentName: 'meta.string-contents.quoted.single.praat',
      end: "('|$)",
      endCaptures: {0: {name: 'punctuation.definition.string.end.praat'}},
      name: 'variable.string.quoted.single.praat',
      patterns: [
        {match: "\\\\[\\\\']", name: 'constant.character.escape.praat'}
      ]
    },
    'string-variables': {
      patterns: [
        {
          match: '(\\b|\\s|\\t)*?[a-z](?i)(?:_?[a-z0-9_]+)\\$(\\b|\\s)?',
          name: 'variable.other.praat'
        },
        {
          captures: {1: {name: 'punctuation.definition.variable.praat'}},
          match: '\\b(this)\\b',
          name: 'variable.language.this.praat'
        }
      ]
    },
    strings: {
      patterns: [
        {include: '#string-variables'},
        {include: '#predefined-string'},
        {include: '#string-single-quoted'},
        {include: '#regex-double-quoted'},
        {include: '#string-double-quoted'},
        {include: '#regex-single-quoted'}
      ]
    },
    'strings-function': {
      match:
        '(\\s)*?\\b(Get (number of strings|string)|List all strings|(Set|Insert|Remove) string|Randomize|Sort|Convert to (backslash trigraphs|Unicode)|Replace all|To (Distributions|Permutation|WordList|Categories)|Append)\\b',
      name: 'support.function.praat'
    },
    'textgrid-analyse-function': {
      match:
        '(\\s)*?\\b(Extract (one tier|part)|To Table \\(text alignment\\)|Get (starting|centre|end) points|Get points \\((preceded|followed)\\))',
      name: 'support.function.praat'
    },
    'textgrid-gui-function': {
      match: '(\\s)*?\\b(View \\& Edit alone)',
      name: 'support.function.praat'
    },
    'textgrid-query-function': {
      match:
        '(\\s)*?\\b(Get (start time( of interval)?|end time( of interval)?|total duration( of interval)?|(maximum )?number of (tiers|intervals|points)|tier name|(start|end) time of (interval|point)|label of (interval|point)|(low |high )?interval at time|interval (edge|boundary) from time|total dutaion of intervals where|(low|high|nearest) index from time)|Is interval tier|Count (intervals|points) where)',
      name: 'support.function.praat'
    },
    'textgrid-sound-function': {
      match:
        '(\\s)*?\\b(View \\& Edit|Draw|Extract (all|non\\-empty) intervals|Extract intervals where|Scale times|Close time domain)',
      name: 'support.function.praat'
    },
    'textgrid-synthesize-function': {
      match: '(\\s)*?\\b(Merge|Concatenate|To DurationTier)',
      name: 'support.function.praat'
    },
    'textgrid-tabulate-function': {
      match: '(\\s)*?\\b(Down to table|List|Tabulate occurrences)',
      name: 'support.function.praat'
    },
    'types-builtin': {
      match:
        '\\b(real|positive|integer|natural|word|sentence|text|boolean|choice|button|comment|(in|out)file|folder|option(menu)?|(?i)hertz|(?i)mono|(?i)stereo)\\b',
      name: 'storage.type.praat'
    }
  },
  scopeName: 'source.praat'
}

export default grammar
