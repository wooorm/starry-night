// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/TIny-Hacker/language-ti-basic>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.8xp', '.8xp.txt'],
  names: ['ti-program'],
  patterns: [
    {include: '#functions'},
    {include: '#special-chars'},
    {include: '#control'},
    {include: '#operators'},
    {include: '#numbers'},
    {include: '#snippets'},
    {include: '#strings'},
    {include: '#constants'},
    {include: '#headers'},
    {include: '#variables'},
    {include: '#reals'}
  ],
  repository: {
    constants: {
      patterns: [
        {match: 'CENTER|LEFT|RIGHT', name: 'constant.language.8xp'},
        {
          match:
            '\\[(MATHPRINT|CLASSIC|(U)?n\\/d|AUTO|DEC|FRAC(\\-APPROX)?|STATWIZARD O(FF|N))\\]',
          name: 'constant.language.8xp'
        },
        {
          match:
            'BLUE|RED|BLACK|MAGENTA|GREEN|ORANGE|BROWN|NAVY|LTBLUE|YELLOW|WHITE|LTGRAY|MEDGRAY|GRAY|DARKGRAY',
          name: 'constant.language.8xp'
        },
        {
          match:
            'Blue|Red|Black|Magenta|Green|Orange|Brown|Navy|LtBlue|Yellow|White|LtGray|MedGray|Gray|DarkGray',
          name: 'constant.language.8xp'
        }
      ]
    },
    control: {
      patterns: [
        {
          match: '(If|While|Repeat|Lbl|Goto|Wait|DelVar) ',
          name: 'keyword.control.8xp'
        },
        {
          match: 'Then|Else|End|Pause|Return|Stop|ExecLib',
          name: 'keyword.control.8xp'
        },
        {
          match: '(For|IS>|DS<|Menu|GraphStyle|GraphColor|OpenLib)(?=\\()',
          name: 'keyword.control.8xp'
        }
      ]
    },
    functions: {
      patterns: [
        {
          match: 'prgm([A-Zθ]|theta)([0-9A-Zθ]|theta){0,7}',
          name: 'entity.name.function.8xp'
        },
        {
          match:
            '(abs|angle|ANOVA|Asm(Comp)?|augment|bal|binom(c|p)df|checkTmr|(χ²|chi\\^2)((c|p)df|(GOF)?-Test)|Circle|conj|cos(h)?(\\^-1|⁻¹)?|cumSum|dayOfWk|dbd|det|dim|DS<|(e|10|₁₀)\\^\\^|(>|►)Eff|Equ(>|►)String|eval|expr|(F|𝐅)(c|p)df|Fill|fM(ax|in)|fnInt|fPart|gcd|geomet(c|p)df|Get|GetCalc|get(Dt|Tm)Str|identity|imag|inString|int|(Sigma|Σ)Int|inv(Binom|Norm|T)|iPart|irr|IS>|lcm|length|Line|(Delta|Δ)List|List(>|►)matr|ln|log(BASE)?|Matr(>|►)list|max|mean|median|min|nDeriv|(>|►)Nom|normal(c|p)df|npv|Output|piece[wW]ise|Plot[1-3]|poisson(c|p)df|(Sigma|Σ)Prn|prod|[1-2]\\-PropZ(Int|Test)|P(t|xl)\\-(Change|O(ff|n))|pxl\\-Test|P(>|►)R[x-y]|rand(Bin|Int(NoRep)?|M|Norm)|real|ref|remainder|round|\\*row(\\+)?|row(\\+|Swap)|rref|R(>|►)P(r|theta|θ)|2\\-SampZ(Int|Test)|Select|Send|seq|set(Date|Time)|set(Dt|Tm)Fmt|Shade(χ²|chi\\^2|F|𝐅|Norm|_t)?|sin(h)?(\\^-1|⁻¹)?|solve|Sort(A|D)|stdDev|String(>|►)Equ|su[bm]|Sigma|Σ|tan(h)?(\\^-1|⁻¹)?|Tangent|t[cp]df|Text(Color)?|timeCnv|toString|variance|Z\\-Test)(?=\\()',
          name: 'entity.name.function.8xp'
        },
        {
          match:
            '(Archive|AxesOn|BackgroundOn|BorderColor|ClrList|Disp|Draw(F|Inv)|ExpReg|Fix|FnO(ff|n)|GridDot|GridLine|Horizontal|Input|Lbl|LinReg\\((a\\+bx|ax\\+b)\\)|LinRegT(Int|Test)|LnReg|Logistic|Manual\\-Fit|Med\\-Med| n(C|P)r|PlotsO(ff|n)|Prompt|PwrReg|Qua(d|rt)Reg|(Recall|Store)(GDB|Pic)|2\\-Samp(F|𝐅)Test|2\\-SampT(Int|Test)|SetUpEditor|SinReg|TInterval|T\\-Test|UnArchive|(1|2)-Var Stats|Vertical|Wait) ',
          name: 'entity.name.function.8xp'
        },
        {
          match:
            'Asm(84CE?)?Prgm|AxesOff|a\\+b[i𝑖]|BackgroundOff|Boxplot|Clear Entries|ClockO(ff|n)|Clr(AllLists|Draw|Home|Table)|CoordO(ff|n)|CubicReg|(>|►)Dec|Degree|DependA(sk|uto)|DetectAsymO(ff|n)|DiagnosticO(ff|n)|DispGraph|DispTable|(>|►)DMS|Dot\\-Thi(ck|n)|\\|E|ᴇ|Eng|ExprO(ff|n)|>F<>D|►F◄►D|Float|(>|►)Frac|Full|Func|GarbageCollect|get(Date|Time)|get(Dt|Tm)Fmt|getKey|GridO(ff|n)|G\\-T|Histogram|Horiz|IndpntAsk|IndpntAuto|isClockOn|\\|L|ʟ|LabelO(ff|n)|ModBox[pP]lot|►n\\/d◄►Un\\/d|>n\\/d<>Un\\/d|Normal|NormProbPlot|Param|Pmt_(Bgn|End)|PolarGC|(>|►)?Polar|PrintScreen|Radian|rand|re\\^(thetai|θ𝑖)|Real|(>|►)Rect|RectGC|Scatter|Sci|Seq(uential)?|SEQ\\((n|𝒏)(\\+[1-2])?\\)|Simul|startTmr|Thi(ck|n)|Time|Trace(?!Step)|tvm_(FV|I%|N|𝗡|Pmt|PV)|u[vw]Axes|vwAxes|Web|xyLine|Z(Box|Decimal|Frac(1(\\/|⁄)([2-58]|10))|Inte(ger|rval)|Previous|Quadrant1|Square|Standard|Trig)|Zoom( In| Out|Fit|Rcl|Stat|Sto)',
          name: 'entity.name.function.8xp'
        },
        {
          match: '(?:(?<=Goto )|(?<=Lbl ))([0-9A-Zθ]|theta){1,2}',
          name: 'entity.name.function.8xp'
        }
      ]
    },
    headers: {match: '^\\:DCS(6|)$', name: 'entity.name.section.8xp'},
    numbers: {match: '(\\d+\\.?\\d*|\\.\\d+)', name: 'constant.numeric.8xp'},
    operators: {
      patterns: [
        {
          match:
            '(->|\\+|-|\\*|/|\\^|=|≠|!=|>|≥|>=|<|≤|<=|squareroot|√|xroot|ˣ√|(sqrt|√|cuberoot|³√)\\()',
          name: 'keyword.operator.8xp'
        },
        {match: '(cuberoot|sqrt)(?=\\()', name: 'keyword.operator.8xp'},
        {
          match: '( (and|or|xor) |not(?=\\())',
          name: 'keyword.operator.expression.8xp'
        }
      ]
    },
    reals: {match: '[A-Zθ]|theta', name: 'variable.parameter.8xp'},
    snippets: {match: '<[a-z ]+>', name: 'variable.other.8xp'},
    'special-chars': {
      match:
        '(\\^\\^(r|o|\\-1|2|T|3)|ʳ|°|⁻¹|²|ᵀ|³|\\|(N|F|𝐅|[PC]\\/Y)|𝗡|I%|invertedequal|(square|cross|dot)plot|□|﹢|·|sharps|small(T|10|[0-9])|(bold)?(up|down)arrow|plotpixel|·|U?n\\/d|mathprintbox|⬚|plottinydot)',
      name: 'markup.raw.8xp'
    },
    strings: {begin: '"', end: '"|\n|(?=->)', name: 'string.quoted.double.8xp'},
    variables: {
      patterns: [
        {match: 'Ans', name: 'variable.language.8xp'},
        {
          match:
            '\\[(xhat(1|2)?|sigma[xy]|yhat|recursiven|phat(1|2)?|(factor|error)(df|SS|MS))\\]',
          name: 'variable.parameter'
        },
        {
          match: 'x̄([₁₂])?|σ[xy]|Σxy|Σ[xy](²)?|𝒏|p̂([₁₂])?',
          name: 'variable.parameter'
        },
        {
          match:
            'Xmin|Xmax|Xscl|Ymin|Ymax|Yscl|[UV](n-1|𝒏-₁)|Xres|(Delta|∆)[XY]|XFact|YFact|TraceStep|Tmin|Tmax|Tstep|Z?(theta|θ)[mM]in|Z?(theta|θ)[mM]ax|Z?(theta|θ)step|\\|[uvw]|((?<=[uvw])\\(((n|𝒏)Min\\)))|(n|𝒏)Min|(n|𝒏)Max|PlotStart|PlotStep',
          name: 'variable.parameter.8xp'
        },
        {
          match:
            'ZXmin|ZXmax|ZXscl|ZYmin|ZYmax|ZYscl|ZXres|ZTmin|ZTmax|ZTstep|thetastep|Z[uvw]|(((?<=Z[uvw])|(?<=[uvw]))\\(((n|𝒏)Min\\)))|Z(n|𝒏)Min|Z(n|𝒏)Max|ZPlotStart|ZPlotStep',
          name: 'variable.parameter.8xp'
        },
        {match: '(Pic|Image|GDB|Str)[0-9]', name: 'variable.parameter.8xp'},
        {
          match:
            '\\[(n(1|2)?|i|RegEQ|xhat(1|2)?|yhat|Sigma[xy](\\^2)?|Sx(1|2|p)?|Sy|(min|max)[XY]|Sigmaxy|r(\\^2)?|Med|Q[13₁₃]|\\|[Fa-e]|[xy][1-3]|[pstz]|chi\\^2|df|lower|upper|R\\^2|e)\\]',
          name: 'variable.parameter.8xp'
        },
        {
          match: '𝑖|[xy][₁-₃]|χ²|(x̄|n|Sx)[₁₂]|(r|R)²',
          name: 'variable.parameter.8xp'
        },
        {
          match: 'Tbl(Start|Input)|(Delta|∆)Tbl',
          name: 'variable.parameter.8xp'
        },
        {
          match:
            'theta|θ|pi(?!xelplot)|π|alpha|α|beta|β|gamma|γ|Delta|Δ|delta|δ|epsilon|ε|lambda|λ|mu|μ|greek_pi|\\|π|rho|ρ|Sigma|Σ|Phi|Φ|Omega|Ω|phat|ṗ|chi|χ|sigma|σ|tau|τ',
          name: 'variable.parameter.8xp'
        },
        {match: '{Y[0-9]}|Y[₀-₉]', name: 'variable.parameter.8xp'},
        {match: '{[XY][1-6]T}|[XY][₁-₆]ᴛ', name: 'variable.parameter.8xp'},
        {match: '{r[1-6]}|r[₁-₆]', name: 'variable.parameter.8xp'},
        {match: 'L[1-6₁-₆]', name: 'variable.parameter.8xp'},
        {
          match: '((?<=->)|\\|L)([A-Zθ]|theta)([0-9A-Zθ]|theta){0,4}',
          name: 'variable.parameter.8xp'
        },
        {match: '\\[[A-J]\\]', name: 'variable.parameter.8xp'}
      ]
    }
  },
  scopeName: 'source.8xp'
}

export default grammar
