/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

import configXcompose from '@wooorm/starry-night/config.xcompose'
import etc from '@wooorm/starry-night/etc'
import fileLasso from '@wooorm/starry-night/file.lasso'
import goMod from '@wooorm/starry-night/go.mod'
import goSum from '@wooorm/starry-night/go.sum'
import injectionsEtc from '@wooorm/starry-night/injections.etc'
import objdumpX6asm from '@wooorm/starry-night/objdump.x86asm'
import source2da from '@wooorm/starry-night/source.2da'
import source4dm from '@wooorm/starry-night/source.4dm'
import source8xp from '@wooorm/starry-night/source.8xp'
import sourceCaddyfile from '@wooorm/starry-night/source.Caddyfile'
import sourceAbap from '@wooorm/starry-night/source.abap'
import sourceAbapcds from '@wooorm/starry-night/source.abapcds'
import sourceAbl from '@wooorm/starry-night/source.abl'
import sourceAbnf from '@wooorm/starry-night/source.abnf'
import sourceActionscript3 from '@wooorm/starry-night/source.actionscript.3'
import sourceAda from '@wooorm/starry-night/source.ada'
import sourceAfm from '@wooorm/starry-night/source.afm'
import sourceAgc from '@wooorm/starry-night/source.agc'
import sourceAgda from '@wooorm/starry-night/source.agda'
import sourceAhk from '@wooorm/starry-night/source.ahk'
import sourceAidl from '@wooorm/starry-night/source.aidl'
import sourceAl from '@wooorm/starry-night/source.al'
import sourceAlloy from '@wooorm/starry-night/source.alloy'
import sourceAmpl from '@wooorm/starry-night/source.ampl'
import sourceAngelscript from '@wooorm/starry-night/source.angelscript'
import sourceAntlr from '@wooorm/starry-night/source.antlr'
import sourceApacheConfig from '@wooorm/starry-night/source.apache-config'
import sourceApex from '@wooorm/starry-night/source.apex'
import sourceApl from '@wooorm/starry-night/source.apl'
import sourceApplescript from '@wooorm/starry-night/source.applescript'
import sourceArr from '@wooorm/starry-night/source.arr'
import sourceAsl from '@wooorm/starry-night/source.asl'
import sourceAsn from '@wooorm/starry-night/source.asn'
import sourceAsp from '@wooorm/starry-night/source.asp'
import sourceAspectj from '@wooorm/starry-night/source.aspectj'
import sourceAssembly from '@wooorm/starry-night/source.assembly'
import sourceAstro from '@wooorm/starry-night/source.astro'
import sourceAts from '@wooorm/starry-night/source.ats'
import sourceAutoit from '@wooorm/starry-night/source.autoit'
import sourceAvro from '@wooorm/starry-night/source.avro'
import sourceAwk from '@wooorm/starry-night/source.awk'
import sourceBallerina from '@wooorm/starry-night/source.ballerina'
import sourceBasic from '@wooorm/starry-night/source.basic'
import sourceBatchfile from '@wooorm/starry-night/source.batchfile'
import sourceBb from '@wooorm/starry-night/source.bb'
import sourceBdf from '@wooorm/starry-night/source.bdf'
import sourceBefunge from '@wooorm/starry-night/source.befunge'
import sourceBerry from '@wooorm/starry-night/source.berry'
import sourceBf from '@wooorm/starry-night/source.bf'
import sourceBh from '@wooorm/starry-night/source.bh'
import sourceBicep from '@wooorm/starry-night/source.bicep'
import sourceBlitzmax from '@wooorm/starry-night/source.blitzmax'
import sourceBoo from '@wooorm/starry-night/source.boo'
import sourceBoogie from '@wooorm/starry-night/source.boogie'
import sourceBp from '@wooorm/starry-night/source.bp'
import sourceBqn from '@wooorm/starry-night/source.bqn'
import sourceBrs from '@wooorm/starry-night/source.brs'
import sourceBsl from '@wooorm/starry-night/source.bsl'
import sourceBsv from '@wooorm/starry-night/source.bsv'
import sourceC from '@wooorm/starry-night/source.c'
import sourceCpp from '@wooorm/starry-night/source.c++'
import sourceCEc from '@wooorm/starry-night/source.c.ec'
import sourceCNwscript from '@wooorm/starry-night/source.c.nwscript'
import sourceCPlatform from '@wooorm/starry-night/source.c.platform'
import sourceCabal from '@wooorm/starry-night/source.cabal'
import sourceCadence from '@wooorm/starry-night/source.cadence'
import sourceCairo from '@wooorm/starry-night/source.cairo'
import sourceCairo0 from '@wooorm/starry-night/source.cairo0'
import sourceCamlp4Ocaml from '@wooorm/starry-night/source.camlp4.ocaml'
import sourceCapnp from '@wooorm/starry-night/source.capnp'
import sourceCds from '@wooorm/starry-night/source.cds'
import sourceCeylon from '@wooorm/starry-night/source.ceylon'
import sourceCfscript from '@wooorm/starry-night/source.cfscript'
import sourceChangelogsRpmSpec from '@wooorm/starry-night/source.changelogs.rpm-spec'
import sourceChapel from '@wooorm/starry-night/source.chapel'
import sourceCil from '@wooorm/starry-night/source.cil'
import sourceCircom from '@wooorm/starry-night/source.circom'
import sourceCirru from '@wooorm/starry-night/source.cirru'
import sourceClar from '@wooorm/starry-night/source.clar'
import sourceClarion from '@wooorm/starry-night/source.clarion'
import sourceClean from '@wooorm/starry-night/source.clean'
import sourceClick from '@wooorm/starry-night/source.click'
import sourceClips from '@wooorm/starry-night/source.clips'
import sourceClojure from '@wooorm/starry-night/source.clojure'
import sourceCmake from '@wooorm/starry-night/source.cmake'
import sourceCobol from '@wooorm/starry-night/source.cobol'
import sourceCoffee from '@wooorm/starry-night/source.coffee'
import sourceCommonlisp from '@wooorm/starry-night/source.commonlisp'
import sourceCool from '@wooorm/starry-night/source.cool'
import sourceCoq from '@wooorm/starry-night/source.coq'
import sourceCrystal from '@wooorm/starry-night/source.crystal'
import sourceCs from '@wooorm/starry-night/source.cs'
import sourceCsound from '@wooorm/starry-night/source.csound'
import sourceCsoundDocument from '@wooorm/starry-night/source.csound-document'
import sourceCsoundScore from '@wooorm/starry-night/source.csound-score'
import sourceCss from '@wooorm/starry-night/source.css'
import sourceCssLess from '@wooorm/starry-night/source.css.less'
import sourceCssMss from '@wooorm/starry-night/source.css.mss'
import sourceCssPostcssSugarss from '@wooorm/starry-night/source.css.postcss.sugarss'
import sourceCssScss from '@wooorm/starry-night/source.css.scss'
import sourceCsswg from '@wooorm/starry-night/source.csswg'
import sourceCudaCpp from '@wooorm/starry-night/source.cuda-c++'
import sourceCue from '@wooorm/starry-night/source.cue'
import sourceCuesheet from '@wooorm/starry-night/source.cuesheet'
import sourceCurlrc from '@wooorm/starry-night/source.curlrc'
import sourceCurry from '@wooorm/starry-night/source.curry'
import sourceCwl from '@wooorm/starry-night/source.cwl'
import sourceCylc from '@wooorm/starry-night/source.cylc'
import sourceCypher from '@wooorm/starry-night/source.cypher'
import sourceCython from '@wooorm/starry-night/source.cython'
import sourceD from '@wooorm/starry-night/source.d'
import sourceD2 from '@wooorm/starry-night/source.d2'
import sourceDart from '@wooorm/starry-night/source.dart'
import sourceDataWeave from '@wooorm/starry-night/source.data-weave'
import sourceDebControl from '@wooorm/starry-night/source.deb-control'
import sourceDenizenscript from '@wooorm/starry-night/source.denizenscript'
import sourceDesktop from '@wooorm/starry-night/source.desktop'
import sourceDiff from '@wooorm/starry-night/source.diff'
import sourceDircolors from '@wooorm/starry-night/source.dircolors'
import sourceDitroff from '@wooorm/starry-night/source.ditroff'
import sourceDitroffDesc from '@wooorm/starry-night/source.ditroff.desc'
import sourceDm from '@wooorm/starry-night/source.dm'
import sourceDockerfile from '@wooorm/starry-night/source.dockerfile'
import sourceDot from '@wooorm/starry-night/source.dot'
import sourceDotenv from '@wooorm/starry-night/source.dotenv'
import sourceDune from '@wooorm/starry-night/source.dune'
import sourceDylan from '@wooorm/starry-night/source.dylan'
import sourceEarthfile from '@wooorm/starry-night/source.earthfile'
import sourceEbnf from '@wooorm/starry-night/source.ebnf'
import sourceEcl from '@wooorm/starry-night/source.ecl'
import sourceEdgeql from '@wooorm/starry-night/source.edgeql'
import sourceEditorconfig from '@wooorm/starry-night/source.editorconfig'
import sourceEiffel from '@wooorm/starry-night/source.eiffel'
import sourceElixir from '@wooorm/starry-night/source.elixir'
import sourceElm from '@wooorm/starry-night/source.elm'
import sourceElvish from '@wooorm/starry-night/source.elvish'
import sourceElvishTranscript from '@wooorm/starry-night/source.elvish-transcript'
import sourceEmacsLisp from '@wooorm/starry-night/source.emacs.lisp'
import sourceErlang from '@wooorm/starry-night/source.erlang'
import sourceEuphoria from '@wooorm/starry-night/source.euphoria'
import sourceFactor from '@wooorm/starry-night/source.factor'
import sourceFan from '@wooorm/starry-night/source.fan'
import sourceFancy from '@wooorm/starry-night/source.fancy'
import sourceFaust from '@wooorm/starry-night/source.faust'
import sourceFigfont from '@wooorm/starry-night/source.figfont'
import sourceFirestore from '@wooorm/starry-night/source.firestore'
import sourceFirrtl from '@wooorm/starry-night/source.firrtl'
import sourceFish from '@wooorm/starry-night/source.fish'
import sourceFnl from '@wooorm/starry-night/source.fnl'
import sourceFontdir from '@wooorm/starry-night/source.fontdir'
import sourceFontforge from '@wooorm/starry-night/source.fontforge'
import sourceForth from '@wooorm/starry-night/source.forth'
import sourceFortran from '@wooorm/starry-night/source.fortran'
import sourceFortranModern from '@wooorm/starry-night/source.fortran.modern'
import sourceFsharp from '@wooorm/starry-night/source.fsharp'
import sourceFstar from '@wooorm/starry-night/source.fstar'
import sourceFtl from '@wooorm/starry-night/source.ftl'
import sourceFuthark from '@wooorm/starry-night/source.futhark'
import sourceGap from '@wooorm/starry-night/source.gap'
import sourceGcode from '@wooorm/starry-night/source.gcode'
import sourceGdb from '@wooorm/starry-night/source.gdb'
import sourceGdresource from '@wooorm/starry-night/source.gdresource'
import sourceGdscript from '@wooorm/starry-night/source.gdscript'
import sourceGedcom from '@wooorm/starry-night/source.gedcom'
import sourceGemfileLock from '@wooorm/starry-night/source.gemfile-lock'
import sourceGemini from '@wooorm/starry-night/source.gemini'
import sourceGenericDb from '@wooorm/starry-night/source.generic-db'
import sourceGenero4gl from '@wooorm/starry-night/source.genero-4gl'
import sourceGeneroPer from '@wooorm/starry-night/source.genero-per'
import sourceGerber from '@wooorm/starry-night/source.gerber'
import sourceGf from '@wooorm/starry-night/source.gf'
import sourceGitRevlist from '@wooorm/starry-night/source.git-revlist'
import sourceGitattributes from '@wooorm/starry-night/source.gitattributes'
import sourceGitconfig from '@wooorm/starry-night/source.gitconfig'
import sourceGitignore from '@wooorm/starry-night/source.gitignore'
import sourceGjs from '@wooorm/starry-night/source.gjs'
import sourceGleam from '@wooorm/starry-night/source.gleam'
import sourceGlsl from '@wooorm/starry-night/source.glsl'
import sourceGn from '@wooorm/starry-night/source.gn'
import sourceGnuplot from '@wooorm/starry-night/source.gnuplot'
import sourceGo from '@wooorm/starry-night/source.go'
import sourceGolo from '@wooorm/starry-night/source.golo'
import sourceGosu2 from '@wooorm/starry-night/source.gosu.2'
import sourceGrace from '@wooorm/starry-night/source.grace'
import sourceGraphql from '@wooorm/starry-night/source.graphql'
import sourceGremlin from '@wooorm/starry-night/source.gremlin'
import sourceGroovy from '@wooorm/starry-night/source.groovy'
import sourceGroovyGradle from '@wooorm/starry-night/source.groovy.gradle'
import sourceGsc from '@wooorm/starry-night/source.gsc'
import sourceGts from '@wooorm/starry-night/source.gts'
import sourceHack from '@wooorm/starry-night/source.hack'
import sourceHaproxyConfig from '@wooorm/starry-night/source.haproxy-config'
import sourceHarbour from '@wooorm/starry-night/source.harbour'
import sourceHaskell from '@wooorm/starry-night/source.haskell'
import sourceHc from '@wooorm/starry-night/source.hc'
import sourceHcl from '@wooorm/starry-night/source.hcl'
import sourceHclTerraform from '@wooorm/starry-night/source.hcl.terraform'
import sourceHlsl from '@wooorm/starry-night/source.hlsl'
import sourceHocon from '@wooorm/starry-night/source.hocon'
import sourceHoon from '@wooorm/starry-night/source.hoon'
import sourceHosts from '@wooorm/starry-night/source.hosts'
import sourceHql from '@wooorm/starry-night/source.hql'
import sourceHttpspec from '@wooorm/starry-night/source.httpspec'
import sourceHx from '@wooorm/starry-night/source.hx'
import sourceHxml from '@wooorm/starry-night/source.hxml'
import sourceHy from '@wooorm/starry-night/source.hy'
import sourceIcalendar from '@wooorm/starry-night/source.iCalendar'
import sourceIce from '@wooorm/starry-night/source.ice'
import sourceIdeal from '@wooorm/starry-night/source.ideal'
import sourceIdl from '@wooorm/starry-night/source.idl'
import sourceIdris from '@wooorm/starry-night/source.idris'
import sourceIgor from '@wooorm/starry-night/source.igor'
import sourceImba from '@wooorm/starry-night/source.imba'
import sourceInform7 from '@wooorm/starry-night/source.inform7'
import sourceIni from '@wooorm/starry-night/source.ini'
import sourceIniNpmrc from '@wooorm/starry-night/source.ini.npmrc'
import sourceInk from '@wooorm/starry-night/source.ink'
import sourceInno from '@wooorm/starry-night/source.inno'
import sourceInputrc from '@wooorm/starry-night/source.inputrc'
import sourceIo from '@wooorm/starry-night/source.io'
import sourceIoke from '@wooorm/starry-night/source.ioke'
import sourceIsabelleRoot from '@wooorm/starry-night/source.isabelle.root'
import sourceIsabelleTheory from '@wooorm/starry-night/source.isabelle.theory'
import sourceJ from '@wooorm/starry-night/source.j'
import sourceJanet from '@wooorm/starry-night/source.janet'
import sourceJasmin from '@wooorm/starry-night/source.jasmin'
import sourceJava from '@wooorm/starry-night/source.java'
import sourceJavaProperties from '@wooorm/starry-night/source.java-properties'
import sourceJcl from '@wooorm/starry-night/source.jcl'
import sourceJestSnap from '@wooorm/starry-night/source.jest.snap'
import sourceJflex from '@wooorm/starry-night/source.jflex'
import sourceJison from '@wooorm/starry-night/source.jison'
import sourceJisonlex from '@wooorm/starry-night/source.jisonlex'
import sourceJolie from '@wooorm/starry-night/source.jolie'
import sourceJq from '@wooorm/starry-night/source.jq'
import sourceJs from '@wooorm/starry-night/source.js'
import sourceJsObjj from '@wooorm/starry-night/source.js.objj'
import sourceJson from '@wooorm/starry-night/source.json'
import sourceJsoniq from '@wooorm/starry-night/source.jsoniq'
import sourceJsonnet from '@wooorm/starry-night/source.jsonnet'
import sourceJulia from '@wooorm/starry-night/source.julia'
import sourceJuliaConsole from '@wooorm/starry-night/source.julia.console'
import sourceJust from '@wooorm/starry-night/source.just'
import sourceKakscript from '@wooorm/starry-night/source.kakscript'
import sourceKerboscript from '@wooorm/starry-night/source.kerboscript'
import sourceKeyvalues from '@wooorm/starry-night/source.keyvalues'
import sourceKickstart from '@wooorm/starry-night/source.kickstart'
import sourceKotlin from '@wooorm/starry-night/source.kotlin'
import sourceKusto from '@wooorm/starry-night/source.kusto'
import sourceLark from '@wooorm/starry-night/source.lark'
import sourceLean from '@wooorm/starry-night/source.lean'
import sourceLean4 from '@wooorm/starry-night/source.lean4'
import sourceLex from '@wooorm/starry-night/source.lex'
import sourceLexRegexp from '@wooorm/starry-night/source.lex.regexp'
import sourceLigo from '@wooorm/starry-night/source.ligo'
import sourceLilypond from '@wooorm/starry-night/source.lilypond'
import sourceLisp from '@wooorm/starry-night/source.lisp'
import sourceLitcoffee from '@wooorm/starry-night/source.litcoffee'
import sourceLivecodescript from '@wooorm/starry-night/source.livecodescript'
import sourceLivescript from '@wooorm/starry-night/source.livescript'
import sourceLlvm from '@wooorm/starry-night/source.llvm'
import sourceLogos from '@wooorm/starry-night/source.logos'
import sourceLogtalk from '@wooorm/starry-night/source.logtalk'
import sourceLolcode from '@wooorm/starry-night/source.lolcode'
import sourceLoomscript from '@wooorm/starry-night/source.loomscript'
import sourceLsl from '@wooorm/starry-night/source.lsl'
import sourceLtspiceSymbol from '@wooorm/starry-night/source.ltspice.symbol'
import sourceLua from '@wooorm/starry-night/source.lua'
import sourceLuau from '@wooorm/starry-night/source.luau'
import sourceM2 from '@wooorm/starry-night/source.m2'
import sourceM4 from '@wooorm/starry-night/source.m4'
import sourceM8k from '@wooorm/starry-night/source.m68k'
import sourceMakefile from '@wooorm/starry-night/source.makefile'
import sourceMask from '@wooorm/starry-night/source.mask'
import sourceMathematica from '@wooorm/starry-night/source.mathematica'
import sourceMatlab from '@wooorm/starry-night/source.matlab'
import sourceMaxscript from '@wooorm/starry-night/source.maxscript'
import sourceMc from '@wooorm/starry-night/source.mc'
import sourceMcfunction from '@wooorm/starry-night/source.mcfunction'
import sourceMdx from '@wooorm/starry-night/source.mdx'
import sourceMercury from '@wooorm/starry-night/source.mercury'
import sourceMermaid from '@wooorm/starry-night/source.mermaid'
import sourceMermaidCCDiagram from '@wooorm/starry-night/source.mermaid.c4c-diagram'
import sourceMermaidClassDiagram from '@wooorm/starry-night/source.mermaid.class-diagram'
import sourceMermaidErDiagram from '@wooorm/starry-night/source.mermaid.er-diagram'
import sourceMermaidFlowchart from '@wooorm/starry-night/source.mermaid.flowchart'
import sourceMermaidGantt from '@wooorm/starry-night/source.mermaid.gantt'
import sourceMermaidGitgraph from '@wooorm/starry-night/source.mermaid.gitgraph'
import sourceMermaidMindmap from '@wooorm/starry-night/source.mermaid.mindmap'
import sourceMermaidPieChart from '@wooorm/starry-night/source.mermaid.pie-chart'
import sourceMermaidRequirementDiagram from '@wooorm/starry-night/source.mermaid.requirement-diagram'
import sourceMermaidSequenceDiagram from '@wooorm/starry-night/source.mermaid.sequence-diagram'
import sourceMermaidStateDiagram from '@wooorm/starry-night/source.mermaid.state-diagram'
import sourceMermaidUserJourney from '@wooorm/starry-night/source.mermaid.user-journey'
import sourceMeson from '@wooorm/starry-night/source.meson'
import sourceMiniyaml from '@wooorm/starry-night/source.miniyaml'
import sourceMint from '@wooorm/starry-night/source.mint'
import sourceMl from '@wooorm/starry-night/source.ml'
import sourceMligo from '@wooorm/starry-night/source.mligo'
import sourceMlir from '@wooorm/starry-night/source.mlir'
import sourceMo from '@wooorm/starry-night/source.mo'
import sourceModelica from '@wooorm/starry-night/source.modelica'
import sourceModula3 from '@wooorm/starry-night/source.modula-3'
import sourceModula2 from '@wooorm/starry-night/source.modula2'
import sourceMojo from '@wooorm/starry-night/source.mojo'
import sourceMonkey from '@wooorm/starry-night/source.monkey'
import sourceMoonscript from '@wooorm/starry-night/source.moonscript'
import sourceMove from '@wooorm/starry-night/source.move'
import sourceMql5 from '@wooorm/starry-night/source.mql5'
import sourceMsl from '@wooorm/starry-night/source.msl'
import sourceMupad from '@wooorm/starry-night/source.mupad'
import sourceNanorc from '@wooorm/starry-night/source.nanorc'
import sourceNasal from '@wooorm/starry-night/source.nasal'
import sourceNasl from '@wooorm/starry-night/source.nasl'
import sourceNcl from '@wooorm/starry-night/source.ncl'
import sourceNe from '@wooorm/starry-night/source.ne'
import sourceNemerle from '@wooorm/starry-night/source.nemerle'
import sourceNeon from '@wooorm/starry-night/source.neon'
import sourceNesc from '@wooorm/starry-night/source.nesc'
import sourceNetlinx from '@wooorm/starry-night/source.netlinx'
import sourceNetlinxErb from '@wooorm/starry-night/source.netlinx.erb'
import sourceNextflow from '@wooorm/starry-night/source.nextflow'
import sourceNextflowGroovy from '@wooorm/starry-night/source.nextflow-groovy'
import sourceNginx from '@wooorm/starry-night/source.nginx'
import sourceNim from '@wooorm/starry-night/source.nim'
import sourceNinja from '@wooorm/starry-night/source.ninja'
import sourceNit from '@wooorm/starry-night/source.nit'
import sourceNix from '@wooorm/starry-night/source.nix'
import sourceNr from '@wooorm/starry-night/source.nr'
import sourceNsis from '@wooorm/starry-night/source.nsis'
import sourceNu from '@wooorm/starry-night/source.nu'
import sourceNunjucks from '@wooorm/starry-night/source.nunjucks'
import sourceNushell from '@wooorm/starry-night/source.nushell'
import sourceNut from '@wooorm/starry-night/source.nut'
import sourceObjc from '@wooorm/starry-night/source.objc'
import sourceObjcpp from '@wooorm/starry-night/source.objc++'
import sourceObjcPlatform from '@wooorm/starry-night/source.objc.platform'
import sourceObjectscript from '@wooorm/starry-night/source.objectscript'
import sourceObjectscriptMacros from '@wooorm/starry-night/source.objectscript_macros'
import sourceOcaml from '@wooorm/starry-night/source.ocaml'
import sourceOdin from '@wooorm/starry-night/source.odin'
import sourceOdinEhr from '@wooorm/starry-night/source.odin-ehr'
import sourceOoc from '@wooorm/starry-night/source.ooc'
import sourceOpa from '@wooorm/starry-night/source.opa'
import sourceOpal from '@wooorm/starry-night/source.opal'
import sourceOpentype from '@wooorm/starry-night/source.opentype'
import sourceOpts from '@wooorm/starry-night/source.opts'
import sourceOx from '@wooorm/starry-night/source.ox'
import sourceOz from '@wooorm/starry-night/source.oz'
import sourceP4 from '@wooorm/starry-night/source.p4'
import sourcePact from '@wooorm/starry-night/source.pact'
import sourcePan from '@wooorm/starry-night/source.pan'
import sourcePapyrusSkyrim from '@wooorm/starry-night/source.papyrus.skyrim'
import sourceParrotPir from '@wooorm/starry-night/source.parrot.pir'
import sourcePascal from '@wooorm/starry-night/source.pascal'
import sourcePawn from '@wooorm/starry-night/source.pawn'
import sourcePcbBoard from '@wooorm/starry-night/source.pcb.board'
import sourcePcbSchematic from '@wooorm/starry-night/source.pcb.schematic'
import sourcePcbSexp from '@wooorm/starry-night/source.pcb.sexp'
import sourcePddl from '@wooorm/starry-night/source.pddl'
import sourcePeggy from '@wooorm/starry-night/source.peggy'
import sourcePep8 from '@wooorm/starry-night/source.pep8'
import sourcePerl from '@wooorm/starry-night/source.perl'
import sourcePhpZephir from '@wooorm/starry-night/source.php.zephir'
import sourcePic from '@wooorm/starry-night/source.pic'
import sourcePigLatin from '@wooorm/starry-night/source.pig_latin'
import sourcePike from '@wooorm/starry-night/source.pike'
import sourcePipRequirements from '@wooorm/starry-night/source.pip-requirements'
import sourcePkl from '@wooorm/starry-night/source.pkl'
import sourcePlist from '@wooorm/starry-night/source.plist'
import sourcePo from '@wooorm/starry-night/source.po'
import sourcePogoscript from '@wooorm/starry-night/source.pogoscript'
import sourcePolar from '@wooorm/starry-night/source.polar'
import sourcePony from '@wooorm/starry-night/source.pony'
import sourcePortugol from '@wooorm/starry-night/source.portugol'
import sourcePostcss from '@wooorm/starry-night/source.postcss'
import sourcePostscript from '@wooorm/starry-night/source.postscript'
import sourcePovRaySdl from '@wooorm/starry-night/source.pov-ray sdl'
import sourcePowerbuilder from '@wooorm/starry-night/source.powerbuilder'
import sourcePowershell from '@wooorm/starry-night/source.powershell'
import sourcePraat from '@wooorm/starry-night/source.praat'
import sourcePrisma from '@wooorm/starry-night/source.prisma'
import sourceProcessing from '@wooorm/starry-night/source.processing'
import sourceProcfile from '@wooorm/starry-night/source.procfile'
import sourceProlog from '@wooorm/starry-night/source.prolog'
import sourcePrologEclipse from '@wooorm/starry-night/source.prolog.eclipse'
import sourcePromela from '@wooorm/starry-night/source.promela'
import sourceProto from '@wooorm/starry-night/source.proto'
import sourcePuppet from '@wooorm/starry-night/source.puppet'
import sourcePurescript from '@wooorm/starry-night/source.purescript'
import sourcePython from '@wooorm/starry-night/source.python'
import sourcePythonKivy from '@wooorm/starry-night/source.python.kivy'
import sourceQ from '@wooorm/starry-night/source.q'
import sourceQasm from '@wooorm/starry-night/source.qasm'
import sourceQl from '@wooorm/starry-night/source.ql'
import sourceQmake from '@wooorm/starry-night/source.qmake'
import sourceQml from '@wooorm/starry-night/source.qml'
import sourceQsharp from '@wooorm/starry-night/source.qsharp'
import sourceQuake from '@wooorm/starry-night/source.quake'
import sourceQuotingRaku from '@wooorm/starry-night/source.quoting.raku'
import sourceR from '@wooorm/starry-night/source.r'
import sourceRacket from '@wooorm/starry-night/source.racket'
import sourceRaku from '@wooorm/starry-night/source.raku'
import sourceRascal from '@wooorm/starry-night/source.rascal'
import sourceRbs from '@wooorm/starry-night/source.rbs'
import sourceReason from '@wooorm/starry-night/source.reason'
import sourceRebol from '@wooorm/starry-night/source.rebol'
import sourceRecordJar from '@wooorm/starry-night/source.record-jar'
import sourceRed from '@wooorm/starry-night/source.red'
import sourceRedirects from '@wooorm/starry-night/source.redirects'
import sourceReg from '@wooorm/starry-night/source.reg'
import sourceRegexp from '@wooorm/starry-night/source.regexp'
import sourceRegexpExtended from '@wooorm/starry-night/source.regexp.extended'
import sourceRegexpPosix from '@wooorm/starry-night/source.regexp.posix'
import sourceRegexpPython from '@wooorm/starry-night/source.regexp.python'
import sourceRego from '@wooorm/starry-night/source.rego'
import sourceReligo from '@wooorm/starry-night/source.religo'
import sourceRenpy from '@wooorm/starry-night/source.renpy'
import sourceRescript from '@wooorm/starry-night/source.rescript'
import sourceRexx from '@wooorm/starry-night/source.rexx'
import sourceRez from '@wooorm/starry-night/source.rez'
import sourceRing from '@wooorm/starry-night/source.ring'
import sourceRoc from '@wooorm/starry-night/source.roc'
import sourceRon from '@wooorm/starry-night/source.ron'
import sourceRpgle from '@wooorm/starry-night/source.rpgle'
import sourceRpmSpec from '@wooorm/starry-night/source.rpm-spec'
import sourceRuby from '@wooorm/starry-night/source.ruby'
import sourceRust from '@wooorm/starry-night/source.rust'
import sourceSas from '@wooorm/starry-night/source.sas'
import sourceSass from '@wooorm/starry-night/source.sass'
import sourceScad from '@wooorm/starry-night/source.scad'
import sourceScala from '@wooorm/starry-night/source.scala'
import sourceScaml from '@wooorm/starry-night/source.scaml'
import sourceScenic from '@wooorm/starry-night/source.scenic'
import sourceScheme from '@wooorm/starry-night/source.scheme'
import sourceScilab from '@wooorm/starry-night/source.scilab'
import sourceSdbl from '@wooorm/starry-night/source.sdbl'
import sourceSed from '@wooorm/starry-night/source.sed'
import sourceSepolicy from '@wooorm/starry-night/source.sepolicy'
import sourceSfv from '@wooorm/starry-night/source.sfv'
import sourceShaderlab from '@wooorm/starry-night/source.shaderlab'
import sourceShell from '@wooorm/starry-night/source.shell'
import sourceShellcheckrc from '@wooorm/starry-night/source.shellcheckrc'
import sourceShen from '@wooorm/starry-night/source.shen'
import sourceSieve from '@wooorm/starry-night/source.sieve'
import sourceSingularity from '@wooorm/starry-night/source.singularity'
import sourceSlint from '@wooorm/starry-night/source.slint'
import sourceSmali from '@wooorm/starry-night/source.smali'
import sourceSmalltalk from '@wooorm/starry-night/source.smalltalk'
import sourceSmithy from '@wooorm/starry-night/source.smithy'
import sourceSmpl from '@wooorm/starry-night/source.smpl'
import sourceSmt from '@wooorm/starry-night/source.smt'
import sourceSolidity from '@wooorm/starry-night/source.solidity'
import sourceSolution from '@wooorm/starry-night/source.solution'
import sourceSourcepawn from '@wooorm/starry-night/source.sourcepawn'
import sourceSparql from '@wooorm/starry-night/source.sparql'
import sourceSpin from '@wooorm/starry-night/source.spin'
import sourceSqf from '@wooorm/starry-night/source.sqf'
import sourceSql from '@wooorm/starry-night/source.sql'
import sourceSshConfig from '@wooorm/starry-night/source.ssh-config'
import sourceStan from '@wooorm/starry-night/source.stan'
import sourceStar from '@wooorm/starry-night/source.star'
import sourceStata from '@wooorm/starry-night/source.stata'
import sourceStl from '@wooorm/starry-night/source.stl'
import sourceStringTemplate from '@wooorm/starry-night/source.string-template'
import sourceStylus from '@wooorm/starry-night/source.stylus'
import sourceSupercollider from '@wooorm/starry-night/source.supercollider'
import sourceSvelte from '@wooorm/starry-night/source.svelte'
import sourceSway from '@wooorm/starry-night/source.sway'
import sourceSwift from '@wooorm/starry-night/source.swift'
import sourceSy from '@wooorm/starry-night/source.sy'
import sourceSystemverilog from '@wooorm/starry-night/source.systemverilog'
import sourceTalon from '@wooorm/starry-night/source.talon'
import sourceTcl from '@wooorm/starry-night/source.tcl'
import sourceTea from '@wooorm/starry-night/source.tea'
import sourceTempl from '@wooorm/starry-night/source.templ'
import sourceTerra from '@wooorm/starry-night/source.terra'
import sourceTextgrid from '@wooorm/starry-night/source.textgrid'
import sourceTextproto from '@wooorm/starry-night/source.textproto'
import sourceThrift from '@wooorm/starry-night/source.thrift'
import sourceTl from '@wooorm/starry-night/source.tl'
import sourceTla from '@wooorm/starry-night/source.tla'
import sourceTlverilog from '@wooorm/starry-night/source.tlverilog'
import sourceTmProperties from '@wooorm/starry-night/source.tm-properties'
import sourceToc from '@wooorm/starry-night/source.toc'
import sourceToit from '@wooorm/starry-night/source.toit'
import sourceToml from '@wooorm/starry-night/source.toml'
import sourceTs from '@wooorm/starry-night/source.ts'
import sourceTsql from '@wooorm/starry-night/source.tsql'
import sourceTsx from '@wooorm/starry-night/source.tsx'
import sourceTuring from '@wooorm/starry-night/source.turing'
import sourceTurtle from '@wooorm/starry-night/source.turtle'
import sourceTxl from '@wooorm/starry-night/source.txl'
import sourceTypst from '@wooorm/starry-night/source.typst'
import sourceUr from '@wooorm/starry-night/source.ur'
import sourceV from '@wooorm/starry-night/source.v'
import sourceVala from '@wooorm/starry-night/source.vala'
import sourceVarnishVcl from '@wooorm/starry-night/source.varnish.vcl'
import sourceVba from '@wooorm/starry-night/source.vba'
import sourceVbnet from '@wooorm/starry-night/source.vbnet'
import sourceVcard from '@wooorm/starry-night/source.vcard'
import sourceVelocity from '@wooorm/starry-night/source.velocity'
import sourceVerilog from '@wooorm/starry-night/source.verilog'
import sourceVhdl from '@wooorm/starry-night/source.vhdl'
import sourceVimSnippet from '@wooorm/starry-night/source.vim-snippet'
import sourceViml from '@wooorm/starry-night/source.viml'
import sourceVyper from '@wooorm/starry-night/source.vyper'
import sourceWavefrontMtl from '@wooorm/starry-night/source.wavefront.mtl'
import sourceWavefrontObj from '@wooorm/starry-night/source.wavefront.obj'
import sourceWdl from '@wooorm/starry-night/source.wdl'
import sourceWebassembly from '@wooorm/starry-night/source.webassembly'
import sourceWebidl from '@wooorm/starry-night/source.webidl'
import sourceWgetrc from '@wooorm/starry-night/source.wgetrc'
import sourceWgsl from '@wooorm/starry-night/source.wgsl'
import sourceWhiley from '@wooorm/starry-night/source.whiley'
import sourceWin2Messages from '@wooorm/starry-night/source.win32-messages'
import sourceWit from '@wooorm/starry-night/source.wit'
import sourceWitcherscript from '@wooorm/starry-night/source.witcherscript'
import sourceWollok from '@wooorm/starry-night/source.wollok'
import sourceWren from '@wooorm/starry-night/source.wren'
import sourceWsd from '@wooorm/starry-night/source.wsd'
import sourceX0 from '@wooorm/starry-night/source.x10'
import sourceX6 from '@wooorm/starry-night/source.x86'
import sourceXc from '@wooorm/starry-night/source.xc'
import sourceXlfd from '@wooorm/starry-night/source.xlfd'
import sourceXojo from '@wooorm/starry-night/source.xojo'
import sourceXq from '@wooorm/starry-night/source.xq'
import sourceXtend from '@wooorm/starry-night/source.xtend'
import sourceYacc from '@wooorm/starry-night/source.yacc'
import sourceYaml from '@wooorm/starry-night/source.yaml'
import sourceYamlSalt from '@wooorm/starry-night/source.yaml.salt'
import sourceYang from '@wooorm/starry-night/source.yang'
import sourceYara from '@wooorm/starry-night/source.yara'
import sourceYasnippet from '@wooorm/starry-night/source.yasnippet'
import sourceYul from '@wooorm/starry-night/source.yul'
import sourceZap from '@wooorm/starry-night/source.zap'
import sourceZeek from '@wooorm/starry-night/source.zeek'
import sourceZenscript from '@wooorm/starry-night/source.zenscript'
import sourceZig from '@wooorm/starry-night/source.zig'
import sourceZil from '@wooorm/starry-night/source.zil'
import textAdblock from '@wooorm/starry-night/text.adblock'
import textBibtex from '@wooorm/starry-night/text.bibtex'
import textBrowserslist from '@wooorm/starry-night/text.browserslist'
import textCfmlBasic from '@wooorm/starry-night/text.cfml.basic'
import textChecksums from '@wooorm/starry-night/text.checksums'
import textCodeowners from '@wooorm/starry-night/text.codeowners'
import textConllu from '@wooorm/starry-night/text.conllu'
import textCrontab from '@wooorm/starry-night/text.crontab'
import textDfyDafny from '@wooorm/starry-night/text.dfy.dafny'
import textElixir from '@wooorm/starry-night/text.elixir'
import textEmlBasic from '@wooorm/starry-night/text.eml.basic'
import textGherkinFeature from '@wooorm/starry-night/text.gherkin.feature'
import textGrammarkdown from '@wooorm/starry-night/text.grammarkdown'
import textHaml from '@wooorm/starry-night/text.haml'
import textHtmlAsciidoc from '@wooorm/starry-night/text.html.asciidoc'
import textHtmlAsdoc from '@wooorm/starry-night/text.html.asdoc'
import textHtmlAsp from '@wooorm/starry-night/text.html.asp'
import textHtmlBasic from '@wooorm/starry-night/text.html.basic'
import textHtmlCfm from '@wooorm/starry-night/text.html.cfm'
import textHtmlCreole from '@wooorm/starry-night/text.html.creole'
import textHtmlCshtml from '@wooorm/starry-night/text.html.cshtml'
import textHtmlDjango from '@wooorm/starry-night/text.html.django'
import textHtmlEcmarkup from '@wooorm/starry-night/text.html.ecmarkup'
import textHtmlEcr from '@wooorm/starry-night/text.html.ecr'
import textHtmlEdge from '@wooorm/starry-night/text.html.edge'
import textHtmlElixir from '@wooorm/starry-night/text.html.elixir'
import textHtmlErb from '@wooorm/starry-night/text.html.erb'
import textHtmlFtl from '@wooorm/starry-night/text.html.ftl'
import textHtmlHandlebars from '@wooorm/starry-night/text.html.handlebars'
import textHtmlJavadoc from '@wooorm/starry-night/text.html.javadoc'
import textHtmlJs from '@wooorm/starry-night/text.html.js'
import textHtmlJsp from '@wooorm/starry-night/text.html.jsp'
import textHtmlJte from '@wooorm/starry-night/text.html.jte'
import textHtmlLiquid from '@wooorm/starry-night/text.html.liquid'
import textHtmlMako from '@wooorm/starry-night/text.html.mako'
import textHtmlMarkdownSourceGfmApib from '@wooorm/starry-night/text.html.markdown.source.gfm.apib'
import textHtmlMarkdownSourceGfmMson from '@wooorm/starry-night/text.html.markdown.source.gfm.mson'
import textHtmlMediawiki from '@wooorm/starry-night/text.html.mediawiki'
import textHtmlNunjucks from '@wooorm/starry-night/text.html.nunjucks'
import textHtmlPhp from '@wooorm/starry-night/text.html.php'
import textHtmlPhpBlade from '@wooorm/starry-night/text.html.php.blade'
import textHtmlRiot from '@wooorm/starry-night/text.html.riot'
import textHtmlSlash from '@wooorm/starry-night/text.html.slash'
import textHtmlSmarty from '@wooorm/starry-night/text.html.smarty'
import textHtmlSoy from '@wooorm/starry-night/text.html.soy'
import textHtmlStatamic from '@wooorm/starry-night/text.html.statamic'
import textHtmlTwig from '@wooorm/starry-night/text.html.twig'
import textHtmlVue from '@wooorm/starry-night/text.html.vue'
import textJade from '@wooorm/starry-night/text.jade'
import textMarko from '@wooorm/starry-night/text.marko'
import textMd from '@wooorm/starry-night/text.md'
import textMuse from '@wooorm/starry-night/text.muse'
import textPythonConsole from '@wooorm/starry-night/text.python.console'
import textPythonTraceback from '@wooorm/starry-night/text.python.traceback'
import textRdoc from '@wooorm/starry-night/text.rdoc'
import textRestructuredtext from '@wooorm/starry-night/text.restructuredtext'
import textRobot from '@wooorm/starry-night/text.robot'
import textRobotsTxt from '@wooorm/starry-night/text.robots-txt'
import textRoff from '@wooorm/starry-night/text.roff'
import textRtf from '@wooorm/starry-night/text.rtf'
import textRunoff from '@wooorm/starry-night/text.runoff'
import textSfd from '@wooorm/starry-night/text.sfd'
import textShellSession from '@wooorm/starry-night/text.shell-session'
import textSlim from '@wooorm/starry-night/text.slim'
import textSrt from '@wooorm/starry-night/text.srt'
import textTex from '@wooorm/starry-night/text.tex'
import textTexLatex from '@wooorm/starry-night/text.tex.latex'
import textTexLatexHaskell from '@wooorm/starry-night/text.tex.latex.haskell'
import textTexLatexSweave from '@wooorm/starry-night/text.tex.latex.sweave'
import textTexinfo from '@wooorm/starry-night/text.texinfo'
import textVimHelp from '@wooorm/starry-night/text.vim-help'
import textVtt from '@wooorm/starry-night/text.vtt'
import textXml from '@wooorm/starry-night/text.xml'
import textXmlAnt from '@wooorm/starry-night/text.xml.ant'
import textXmlGenshi from '@wooorm/starry-night/text.xml.genshi'
import textXmlPlist from '@wooorm/starry-night/text.xml.plist'
import textXmlPom from '@wooorm/starry-night/text.xml.pom'
import textXmlSvg from '@wooorm/starry-night/text.xml.svg'
import textXmlXsl from '@wooorm/starry-night/text.xml.xsl'
import textZoneFile from '@wooorm/starry-night/text.zone_file'

/** @type {ReadonlyArray<Grammar>} */
export const grammars = [
  configXcompose,
  etc,
  fileLasso,
  goMod,
  goSum,
  injectionsEtc,
  objdumpX6asm,
  source2da,
  source4dm,
  source8xp,
  sourceCaddyfile,
  sourceAbap,
  sourceAbapcds,
  sourceAbl,
  sourceAbnf,
  sourceActionscript3,
  sourceAda,
  sourceAfm,
  sourceAgc,
  sourceAgda,
  sourceAhk,
  sourceAidl,
  sourceAl,
  sourceAlloy,
  sourceAmpl,
  sourceAngelscript,
  sourceAntlr,
  sourceApacheConfig,
  sourceApex,
  sourceApl,
  sourceApplescript,
  sourceArr,
  sourceAsl,
  sourceAsn,
  sourceAsp,
  sourceAspectj,
  sourceAssembly,
  sourceAstro,
  sourceAts,
  sourceAutoit,
  sourceAvro,
  sourceAwk,
  sourceBallerina,
  sourceBasic,
  sourceBatchfile,
  sourceBb,
  sourceBdf,
  sourceBefunge,
  sourceBerry,
  sourceBf,
  sourceBh,
  sourceBicep,
  sourceBlitzmax,
  sourceBoo,
  sourceBoogie,
  sourceBp,
  sourceBqn,
  sourceBrs,
  sourceBsl,
  sourceBsv,
  sourceC,
  sourceCpp,
  sourceCEc,
  sourceCNwscript,
  sourceCPlatform,
  sourceCabal,
  sourceCadence,
  sourceCairo,
  sourceCairo0,
  sourceCamlp4Ocaml,
  sourceCapnp,
  sourceCds,
  sourceCeylon,
  sourceCfscript,
  sourceChangelogsRpmSpec,
  sourceChapel,
  sourceCil,
  sourceCircom,
  sourceCirru,
  sourceClar,
  sourceClarion,
  sourceClean,
  sourceClick,
  sourceClips,
  sourceClojure,
  sourceCmake,
  sourceCobol,
  sourceCoffee,
  sourceCommonlisp,
  sourceCool,
  sourceCoq,
  sourceCrystal,
  sourceCs,
  sourceCsound,
  sourceCsoundDocument,
  sourceCsoundScore,
  sourceCss,
  sourceCssLess,
  sourceCssMss,
  sourceCssPostcssSugarss,
  sourceCssScss,
  sourceCsswg,
  sourceCudaCpp,
  sourceCue,
  sourceCuesheet,
  sourceCurlrc,
  sourceCurry,
  sourceCwl,
  sourceCylc,
  sourceCypher,
  sourceCython,
  sourceD,
  sourceD2,
  sourceDart,
  sourceDataWeave,
  sourceDebControl,
  sourceDenizenscript,
  sourceDesktop,
  sourceDiff,
  sourceDircolors,
  sourceDitroff,
  sourceDitroffDesc,
  sourceDm,
  sourceDockerfile,
  sourceDot,
  sourceDotenv,
  sourceDune,
  sourceDylan,
  sourceEarthfile,
  sourceEbnf,
  sourceEcl,
  sourceEdgeql,
  sourceEditorconfig,
  sourceEiffel,
  sourceElixir,
  sourceElm,
  sourceElvish,
  sourceElvishTranscript,
  sourceEmacsLisp,
  sourceErlang,
  sourceEuphoria,
  sourceFactor,
  sourceFan,
  sourceFancy,
  sourceFaust,
  sourceFigfont,
  sourceFirestore,
  sourceFirrtl,
  sourceFish,
  sourceFnl,
  sourceFontdir,
  sourceFontforge,
  sourceForth,
  sourceFortran,
  sourceFortranModern,
  sourceFsharp,
  sourceFstar,
  sourceFtl,
  sourceFuthark,
  sourceGap,
  sourceGcode,
  sourceGdb,
  sourceGdresource,
  sourceGdscript,
  sourceGedcom,
  sourceGemfileLock,
  sourceGemini,
  sourceGenericDb,
  sourceGenero4gl,
  sourceGeneroPer,
  sourceGerber,
  sourceGf,
  sourceGitRevlist,
  sourceGitattributes,
  sourceGitconfig,
  sourceGitignore,
  sourceGjs,
  sourceGleam,
  sourceGlsl,
  sourceGn,
  sourceGnuplot,
  sourceGo,
  sourceGolo,
  sourceGosu2,
  sourceGrace,
  sourceGraphql,
  sourceGremlin,
  sourceGroovy,
  sourceGroovyGradle,
  sourceGsc,
  sourceGts,
  sourceHack,
  sourceHaproxyConfig,
  sourceHarbour,
  sourceHaskell,
  sourceHc,
  sourceHcl,
  sourceHclTerraform,
  sourceHlsl,
  sourceHocon,
  sourceHoon,
  sourceHosts,
  sourceHql,
  sourceHttpspec,
  sourceHx,
  sourceHxml,
  sourceHy,
  sourceIcalendar,
  sourceIce,
  sourceIdeal,
  sourceIdl,
  sourceIdris,
  sourceIgor,
  sourceImba,
  sourceInform7,
  sourceIni,
  sourceIniNpmrc,
  sourceInk,
  sourceInno,
  sourceInputrc,
  sourceIo,
  sourceIoke,
  sourceIsabelleRoot,
  sourceIsabelleTheory,
  sourceJ,
  sourceJanet,
  sourceJasmin,
  sourceJava,
  sourceJavaProperties,
  sourceJcl,
  sourceJestSnap,
  sourceJflex,
  sourceJison,
  sourceJisonlex,
  sourceJolie,
  sourceJq,
  sourceJs,
  sourceJsObjj,
  // @ts-expect-error: TS is wrong, `.json` does not mean JSON.
  sourceJson,
  sourceJsoniq,
  sourceJsonnet,
  sourceJulia,
  sourceJuliaConsole,
  sourceJust,
  sourceKakscript,
  sourceKerboscript,
  sourceKeyvalues,
  sourceKickstart,
  sourceKotlin,
  sourceKusto,
  sourceLark,
  sourceLean,
  sourceLean4,
  sourceLex,
  sourceLexRegexp,
  sourceLigo,
  sourceLilypond,
  sourceLisp,
  sourceLitcoffee,
  sourceLivecodescript,
  sourceLivescript,
  sourceLlvm,
  sourceLogos,
  sourceLogtalk,
  sourceLolcode,
  sourceLoomscript,
  sourceLsl,
  sourceLtspiceSymbol,
  sourceLua,
  sourceLuau,
  sourceM2,
  sourceM4,
  sourceM8k,
  sourceMakefile,
  sourceMask,
  sourceMathematica,
  sourceMatlab,
  sourceMaxscript,
  sourceMc,
  sourceMcfunction,
  sourceMdx,
  sourceMercury,
  sourceMermaid,
  sourceMermaidCCDiagram,
  sourceMermaidClassDiagram,
  sourceMermaidErDiagram,
  sourceMermaidFlowchart,
  sourceMermaidGantt,
  sourceMermaidGitgraph,
  sourceMermaidMindmap,
  sourceMermaidPieChart,
  sourceMermaidRequirementDiagram,
  sourceMermaidSequenceDiagram,
  sourceMermaidStateDiagram,
  sourceMermaidUserJourney,
  sourceMeson,
  sourceMiniyaml,
  sourceMint,
  sourceMl,
  sourceMligo,
  sourceMlir,
  sourceMo,
  sourceModelica,
  sourceModula3,
  sourceModula2,
  sourceMojo,
  sourceMonkey,
  sourceMoonscript,
  sourceMove,
  sourceMql5,
  sourceMsl,
  sourceMupad,
  sourceNanorc,
  sourceNasal,
  sourceNasl,
  sourceNcl,
  sourceNe,
  sourceNemerle,
  sourceNeon,
  sourceNesc,
  sourceNetlinx,
  sourceNetlinxErb,
  sourceNextflow,
  sourceNextflowGroovy,
  sourceNginx,
  sourceNim,
  sourceNinja,
  sourceNit,
  sourceNix,
  sourceNr,
  sourceNsis,
  sourceNu,
  sourceNunjucks,
  sourceNushell,
  sourceNut,
  sourceObjc,
  sourceObjcpp,
  sourceObjcPlatform,
  sourceObjectscript,
  sourceObjectscriptMacros,
  sourceOcaml,
  sourceOdin,
  sourceOdinEhr,
  sourceOoc,
  sourceOpa,
  sourceOpal,
  sourceOpentype,
  sourceOpts,
  sourceOx,
  sourceOz,
  sourceP4,
  sourcePact,
  sourcePan,
  sourcePapyrusSkyrim,
  sourceParrotPir,
  sourcePascal,
  sourcePawn,
  sourcePcbBoard,
  sourcePcbSchematic,
  sourcePcbSexp,
  sourcePddl,
  sourcePeggy,
  sourcePep8,
  sourcePerl,
  sourcePhpZephir,
  sourcePic,
  sourcePigLatin,
  sourcePike,
  sourcePipRequirements,
  sourcePkl,
  sourcePlist,
  sourcePo,
  sourcePogoscript,
  sourcePolar,
  sourcePony,
  sourcePortugol,
  sourcePostcss,
  sourcePostscript,
  sourcePovRaySdl,
  sourcePowerbuilder,
  sourcePowershell,
  sourcePraat,
  sourcePrisma,
  sourceProcessing,
  sourceProcfile,
  sourceProlog,
  sourcePrologEclipse,
  sourcePromela,
  sourceProto,
  sourcePuppet,
  sourcePurescript,
  sourcePython,
  sourcePythonKivy,
  sourceQ,
  sourceQasm,
  sourceQl,
  sourceQmake,
  sourceQml,
  sourceQsharp,
  sourceQuake,
  sourceQuotingRaku,
  sourceR,
  sourceRacket,
  sourceRaku,
  sourceRascal,
  sourceRbs,
  sourceReason,
  sourceRebol,
  sourceRecordJar,
  sourceRed,
  sourceRedirects,
  sourceReg,
  sourceRegexp,
  sourceRegexpExtended,
  sourceRegexpPosix,
  sourceRegexpPython,
  sourceRego,
  sourceReligo,
  sourceRenpy,
  sourceRescript,
  sourceRexx,
  sourceRez,
  sourceRing,
  sourceRoc,
  sourceRon,
  sourceRpgle,
  sourceRpmSpec,
  sourceRuby,
  sourceRust,
  sourceSas,
  sourceSass,
  sourceScad,
  sourceScala,
  sourceScaml,
  sourceScenic,
  sourceScheme,
  sourceScilab,
  sourceSdbl,
  sourceSed,
  sourceSepolicy,
  sourceSfv,
  sourceShaderlab,
  sourceShell,
  sourceShellcheckrc,
  sourceShen,
  sourceSieve,
  sourceSingularity,
  sourceSlint,
  sourceSmali,
  sourceSmalltalk,
  sourceSmithy,
  sourceSmpl,
  sourceSmt,
  sourceSolidity,
  sourceSolution,
  sourceSourcepawn,
  sourceSparql,
  sourceSpin,
  sourceSqf,
  sourceSql,
  sourceSshConfig,
  sourceStan,
  sourceStar,
  sourceStata,
  sourceStl,
  sourceStringTemplate,
  sourceStylus,
  sourceSupercollider,
  sourceSvelte,
  sourceSway,
  sourceSwift,
  sourceSy,
  sourceSystemverilog,
  sourceTalon,
  sourceTcl,
  sourceTea,
  sourceTempl,
  sourceTerra,
  sourceTextgrid,
  sourceTextproto,
  sourceThrift,
  sourceTl,
  sourceTla,
  sourceTlverilog,
  sourceTmProperties,
  sourceToc,
  sourceToit,
  sourceToml,
  sourceTs,
  sourceTsql,
  sourceTsx,
  sourceTuring,
  sourceTurtle,
  sourceTxl,
  sourceTypst,
  sourceUr,
  sourceV,
  sourceVala,
  sourceVarnishVcl,
  sourceVba,
  sourceVbnet,
  sourceVcard,
  sourceVelocity,
  sourceVerilog,
  sourceVhdl,
  sourceVimSnippet,
  sourceViml,
  sourceVyper,
  sourceWavefrontMtl,
  sourceWavefrontObj,
  sourceWdl,
  sourceWebassembly,
  sourceWebidl,
  sourceWgetrc,
  sourceWgsl,
  sourceWhiley,
  sourceWin2Messages,
  sourceWit,
  sourceWitcherscript,
  sourceWollok,
  sourceWren,
  sourceWsd,
  sourceX0,
  sourceX6,
  sourceXc,
  sourceXlfd,
  sourceXojo,
  sourceXq,
  sourceXtend,
  sourceYacc,
  sourceYaml,
  sourceYamlSalt,
  sourceYang,
  sourceYara,
  sourceYasnippet,
  sourceYul,
  sourceZap,
  sourceZeek,
  sourceZenscript,
  sourceZig,
  sourceZil,
  textAdblock,
  textBibtex,
  textBrowserslist,
  textCfmlBasic,
  textChecksums,
  textCodeowners,
  textConllu,
  textCrontab,
  textDfyDafny,
  textElixir,
  textEmlBasic,
  textGherkinFeature,
  textGrammarkdown,
  textHaml,
  textHtmlAsciidoc,
  textHtmlAsdoc,
  textHtmlAsp,
  textHtmlBasic,
  textHtmlCfm,
  textHtmlCreole,
  textHtmlCshtml,
  textHtmlDjango,
  textHtmlEcmarkup,
  textHtmlEcr,
  textHtmlEdge,
  textHtmlElixir,
  textHtmlErb,
  textHtmlFtl,
  textHtmlHandlebars,
  textHtmlJavadoc,
  textHtmlJs,
  textHtmlJsp,
  textHtmlJte,
  textHtmlLiquid,
  textHtmlMako,
  textHtmlMarkdownSourceGfmApib,
  textHtmlMarkdownSourceGfmMson,
  textHtmlMediawiki,
  textHtmlNunjucks,
  textHtmlPhp,
  textHtmlPhpBlade,
  textHtmlRiot,
  textHtmlSlash,
  textHtmlSmarty,
  textHtmlSoy,
  textHtmlStatamic,
  textHtmlTwig,
  textHtmlVue,
  textJade,
  textMarko,
  textMd,
  textMuse,
  textPythonConsole,
  textPythonTraceback,
  textRdoc,
  textRestructuredtext,
  textRobot,
  textRobotsTxt,
  textRoff,
  textRtf,
  textRunoff,
  textSfd,
  textShellSession,
  textSlim,
  textSrt,
  textTex,
  textTexLatex,
  textTexLatexHaskell,
  textTexLatexSweave,
  textTexinfo,
  textVimHelp,
  textVtt,
  textXml,
  textXmlAnt,
  textXmlGenshi,
  textXmlPlist,
  textXmlPom,
  textXmlSvg,
  textXmlXsl,
  textZoneFile
]
