/** @type {Record<string, {homepage?: string, license?: string, dependencies?: Array<string>}>} */
export const info = {
  'source.al': {
    license: 'mit',
    homepage: 'https://github.com/microsoft/AL'
  },
  'source.alloy': {
    license: 'apache-2.0',
    homepage: 'https://github.com/macekond/Alloy.tmbundle'
  },
  'source.x86': {
    license: 'mit',
    homepage: 'https://github.com/calculuswhiz/Assembly-Syntax-Definition'
  },
  'source.postscript': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/Atom-PostScript'
  },
  'source.velocity': {
    license: 'mit',
    homepage: 'https://github.com/animecyc/AtomLanguageVelocity'
  },
  'source.ahk': {
    license: 'unlicense',
    homepage: 'https://github.com/ahkscript/SublimeAutoHotkey'
  },
  'source.cuesheet': {
    license: 'mit',
    homepage: 'https://github.com/relikd/CUE-Sheet_sublime'
  },
  'source.gsc': {
    license: 'unlicense',
    homepage: 'https://github.com/Jake-NotTheMuss/CoDT7-Sublime'
  },
  'source.cfscript': {
    license: 'mit',
    dependencies: ['source.sql']
  },
  'text.cfml.basic': {
    license: 'mit'
  },
  'text.html.cfm': {
    license: 'mit',
    dependencies: ['source.cfscript', 'text.cfml.basic']
  },
  'text.dfy.dafny': {
    license: 'mit',
    homepage: 'https://github.com/DafnyVSCode/Dafny-VSCode'
  },
  'source.dockerfile': {
    license: 'mit',
    homepage: 'https://github.com/asbjornenge/Docker.tmbundle'
  },
  'source.elm': {
    license: 'mit',
    homepage: 'https://github.com/elm-community/Elm.tmLanguage'
  },
  'text.html.ftl': {
    license: 'mit',
    dependencies: ['text.html.basic']
  },
  'text.html.handlebars': {
    license: 'mit',
    dependencies: ['text.html.basic']
  },
  'source.webidl': {
    license: 'mit',
    homepage: 'https://github.com/andik/IDL-Syntax'
  },
  'source.isabelle.root': {
    license: 'bsd-2-clause',
    homepage: 'https://github.com/lsf37/Isabelle.tmbundle'
  },
  'source.isabelle.theory': {
    license: 'bsd-2-clause',
    homepage: 'https://github.com/lsf37/Isabelle.tmbundle'
  },
  'source.j': {
    license: 'mit',
    homepage: 'https://github.com/tikkanz/JSyntax'
  },
  'source.ligo': {
    license: 'mit',
    homepage: 'https://github.com/pewulfman/Ligo-grammar'
  },
  'source.mligo': {
    license: 'mit',
    homepage: 'https://github.com/pewulfman/Ligo-grammar'
  },
  'source.religo': {
    license: 'mit',
    homepage: 'https://github.com/pewulfman/Ligo-grammar'
  },
  'source.livescript': {
    license: 'mit',
    homepage: 'https://github.com/paulmillr/LiveScript.tmbundle'
  },
  'source.matlab': {
    license: 'bsd-2-clause',
    homepage: 'https://github.com/mathworks/MATLAB-Language-grammar'
  },
  'source.mql5': {
    license: 'mit'
  },
  'source.python': {
    license: 'mit',
    homepage: 'https://github.com/MagicStack/MagicPython'
  },
  'source.regexp.python': {
    license: 'mit',
    homepage: 'https://github.com/MagicStack/MagicPython'
  },
  'text.python.console': {
    license: 'mit',
    homepage: 'https://github.com/MagicStack/MagicPython',
    dependencies: ['source.python']
  },
  'text.python.traceback': {
    license: 'mit',
    homepage: 'https://github.com/MagicStack/MagicPython',
    dependencies: ['source.python']
  },
  'source.modelica': {
    license: 'mit',
    homepage: 'https://github.com/BorisChumichev/modelicaSublimeTextPackage'
  },
  'source.nsis': {
    license: 'apache-2.0'
  },
  'source.nim': {
    license: 'mit',
    homepage: 'https://github.com/nim-lang/NimLime'
  },
  'source.git-revlist': {
    license: 'isc',
    homepage: 'https://github.com/Nixinova/NovaGrammars'
  },
  'source.json': {
    license: 'isc',
    homepage: 'https://github.com/Nixinova/NovaGrammars'
  },
  'source.keyvalues': {
    license: 'isc',
    homepage: 'https://github.com/Nixinova/NovaGrammars'
  },
  'source.redirects': {
    license: 'isc',
    homepage: 'https://github.com/Nixinova/NovaGrammars'
  },
  'source.solution': {
    license: 'isc',
    homepage: 'https://github.com/Nixinova/NovaGrammars'
  },
  'source.win32-messages': {
    license: 'isc',
    homepage: 'https://github.com/Nixinova/NovaGrammars'
  },
  'text.robots-txt': {
    license: 'isc',
    homepage: 'https://github.com/Nixinova/NovaGrammars'
  },
  'source.objectscript': {
    license: 'mit',
    dependencies: ['source.objectscript_macros']
  },
  'source.objectscript_macros': {
    license: 'mit',
    dependencies: ['source.objectscript']
  },
  'text.html.twig': {
    license: 'bsd-3-clause',
    homepage: 'https://github.com/Anomareh/PHP-Twig.tmbundle'
  },
  'source.pogoscript': {
    license: 'mit'
  },
  'text.rdoc': {
    license: 'mit'
  },
  'source.racket': {
    license: 'mit'
  },
  'source.smt': {
    license: 'unlicense'
  },
  'source.scaml': {
    license: 'apache-2.0',
    homepage: 'https://github.com/scalate/Scalate.tmbundle',
    dependencies: ['source.scala']
  },
  'source.scenic': {
    license: 'mit',
    homepage: 'https://github.com/UCSCFormalMethods/Scenic-tmLanguage'
  },
  'text.html.slash': {
    license: 'mit',
    dependencies: ['text.html.basic']
  },
  'source.stata': {
    license: 'mit',
    homepage: 'https://github.com/pschumm/Stata.tmbundle'
  },
  'source.stylus': {
    license: 'mit'
  },
  'source.coq': {
    license: 'mit'
  },
  'source.httpspec': {
    license: 'mit',
    homepage: 'https://github.com/samsalisbury/Sublime-HTTP',
    dependencies: ['source.json']
  },
  'file.lasso': {
    license: 'public domain'
  },
  'source.loomscript': {
    license: 'mit'
  },
  'source.modula2': {
    license: 'mit',
    homepage: 'https://github.com/harogaston/Sublime-Modula-2'
  },
  'source.nit': {
    license: 'wtfpl'
  },
  'source.pep8': {
    license: 'wtfpl'
  },
  'source.qml': {
    license: 'mit',
    dependencies: ['source.js']
  },
  'source.rebol': {
    license: 'mit',
    homepage: 'https://github.com/Oldes/Sublime-REBOL'
  },
  'source.red': {
    license: 'mit',
    homepage: 'https://github.com/Oldes/Sublime-Red'
  },
  'source.sqf': {
    license: 'apache-2.0',
    homepage: 'https://github.com/JonBons/Sublime-SQF-Language'
  },
  'source.bf': {
    license: 'mit',
    homepage: 'https://github.com/Drako/SublimeBrainfuck'
  },
  'source.clarion': {
    license: 'mit',
    homepage: 'https://github.com/fushnisoft/SublimeClarion'
  },
  'source.solidity': {
    license: 'mit',
    homepage: 'https://github.com/davidhq/SublimeEthereum'
  },
  'source.vyper': {
    license: 'mit',
    homepage: 'https://github.com/davidhq/SublimeEthereum'
  },
  'source.yul': {
    license: 'mit',
    homepage: 'https://github.com/davidhq/SublimeEthereum'
  },
  'source.gdb': {
    license: 'zlib',
    homepage: 'https://github.com/quarnster/SublimeGDB'
  },
  'source.papyrus.skyrim': {
    license: 'mit'
  },
  'source.puppet': {
    license: 'mit',
    homepage: 'https://github.com/russCloak/SublimePuppet'
  },
  'source.xtend': {
    license: 'mit'
  },
  'source.css.postcss.sugarss': {
    license: 'mit'
  },
  'source.postcss': {
    license: 'mit'
  },
  'source.systemverilog': {
    license: 'apache-2.0',
    homepage: 'https://github.com/TheClams/SystemVerilog'
  },
  'source.tla': {
    license: 'mit'
  },
  'source.txl': {
    license: 'apache-2.0',
    homepage: 'https://github.com/MikeHoffert/Sublime-Text-TXL-syntax'
  },
  'source.terraform': {
    license: 'mit',
    homepage: 'https://github.com/alexlouden/Terraform.tmLanguage'
  },
  'source.gosu.2': {
    license: 'apache-2.0',
    homepage: 'https://github.com/jpcamara/Textmate-Gosu-Bundle'
  },
  'source.ts': {
    license: 'mit',
    homepage: 'https://github.com/Microsoft/TypeScript-TmLanguage'
  },
  'source.tsx': {
    license: 'mit',
    homepage: 'https://github.com/Microsoft/TypeScript-TmLanguage'
  },
  'source.ur': {
    license: 'mit'
  },
  'source.vbnet': {
    license: 'apache-2.0',
    homepage: 'https://github.com/angryant0007/VBDotNetSyntax'
  },
  'source.vala': {
    license: 'mit',
    homepage: 'https://github.com/technosophos/Vala-TMBundle'
  },
  'text.adblock': {
    license: 'mit',
    homepage: 'https://github.com/ameshkov/VscodeAdblockSyntax'
  },
  'source.whiley': {
    license: 'apache-2.0',
    homepage: 'https://github.com/Whiley/WhileySyntaxBundle'
  },
  'source.x10': {
    license: 'apache-2.0'
  },
  'source.xojo': {
    license: 'apache-2.0',
    homepage: 'https://github.com/jimmckay/XojoSyntaxTM'
  },
  'source.zenscript': {
    license: 'mit',
    homepage: 'https://github.com/CraftTweaker/ZenScript-tmLanguage'
  },
  'source.abapcds': {
    license: 'unlicense',
    homepage: 'https://github.com/FreHu/abap-cds-grammar'
  },
  'source.abap': {
    homepage: 'https://github.com/pvl/abap.tmbundle'
  },
  'source.abl': {
    license: 'mit',
    homepage: 'https://github.com/chriscamicas/abl-tmlanguage'
  },
  'source.actionscript.3': {
    license: 'mit',
    homepage: 'https://github.com/simongregory/actionscript3-tmbundle',
    dependencies: ['text.html.asdoc', 'text.xml']
  },
  'text.html.asdoc': {
    license: 'mit',
    homepage: 'https://github.com/simongregory/actionscript3-tmbundle',
    dependencies: ['text.html.basic']
  },
  'source.ada': {},
  'source.agda': {
    license: 'mit',
    homepage: 'https://github.com/agda/agda-github-syntax-highlighting'
  },
  'source.aidl': {
    license: 'apache-2.0',
    homepage: 'https://github.com/google/aidl-language'
  },
  'source.ampl': {
    license: 'mit'
  },
  'source.bp': {
    license: 'mit',
    homepage: 'https://github.com/flimberger/android-system-tools'
  },
  'text.xml.ant': {
    license: 'mit',
    dependencies: ['text.xml']
  },
  'source.antlr': {},
  'source.apache-config': {},
  'text.html.markdown.source.gfm.apib': {
    license: 'mit',
    homepage: 'https://github.com/apiaryio/api-blueprint-sublime-plugin',
    dependencies: ['source.js', 'text.html.markdown.source.gfm.mson']
  },
  'text.html.markdown.source.gfm.mson': {
    license: 'mit',
    homepage: 'https://github.com/apiaryio/api-blueprint-sublime-plugin'
  },
  'source.applescript': {},
  'text.html.asciidoc': {
    license: 'mit',
    homepage: 'https://github.com/zuckschwerdt/asciidoc.tmbundle',
    dependencies: ['text.html.basic']
  },
  'source.asp': {},
  'text.html.asp': {
    dependencies: ['source.asp', 'text.html.basic']
  },
  'objdump.x86asm': {
    license: 'mit',
    dependencies: ['source.c', 'source.c++']
  },
  'source.astro': {
    license: 'mit',
    homepage: 'https://github.com/withastro/language-tools',
    dependencies: ['source.js', 'source.ts', 'source.tsx']
  },
  'source.editorconfig': {
    license: 'mit',
    homepage: 'https://github.com/sindresorhus/atom-editorconfig'
  },
  'source.firestore': {
    license: 'mit'
  },
  'source.fstar': {
    license: 'apache-2.0',
    homepage: 'https://github.com/FStarLang/atom-fstar'
  },
  'source.bsl': {
    license: 'mit',
    homepage: 'https://github.com/xDrivenDevelopment/atom-language-1c-bsl',
    dependencies: ['source.sdbl']
  },
  'source.sdbl': {
    license: 'mit',
    homepage: 'https://github.com/xDrivenDevelopment/atom-language-1c-bsl'
  },
  'source.cairo': {
    license: 'mit',
    homepage: 'https://github.com/xshitaka/atom-language-cairo'
  },
  'source.clean': {
    license: 'mit'
  },
  'source.haproxy-config': {
    license: 'mit'
  },
  'source.inno': {
    license: 'mit',
    homepage: 'https://github.com/idleberg/atom-language-innosetup',
    dependencies: ['source.pascal']
  },
  'source.julia': {
    license: 'mit',
    homepage: 'https://github.com/JuliaEditorSupport/atom-language-julia'
  },
  'source.nextflow': {
    license: 'mit',
    dependencies: ['source.nextflow-groovy']
  },
  'source.nextflow-groovy': {
    license: 'mit'
  },
  'source.p4': {
    license: 'mit'
  },
  'source.quoting.raku': {
    homepage: 'https://github.com/perl6/atom-language-perl6',
    dependencies: ['source.raku']
  },
  'source.raku': {
    homepage: 'https://github.com/perl6/atom-language-perl6',
    dependencies: ['source.quoting.raku']
  },
  'source.purescript': {
    license: 'mit',
    homepage: 'https://github.com/purescript-contrib/atom-language-purescript'
  },
  'source.stan': {
    license: 'mit',
    homepage: 'https://github.com/stan-dev/atom-language-stan'
  },
  'source.miniyaml': {
    license: 'mit',
    homepage: 'https://github.com/OpenRA/atom-miniyaml'
  },
  'source.yaml.salt': {
    license: 'mit',
    homepage: 'https://github.com/saltstack/atom-salt',
    dependencies: ['source.python']
  },
  'source.dm': {
    license: 'mit'
  },
  'source.ats': {
    license: 'mit'
  },
  'source.avro': {
    license: 'mit',
    homepage: 'https://github.com/Jason3S/avro.tmLanguage'
  },
  'source.awk': {
    license: 'mit'
  },
  'source.ballerina': {
    license: 'apache-2.0',
    homepage: 'https://github.com/ballerina-platform/ballerina-grammar'
  },
  'source.berry': {
    license: 'mit',
    homepage: 'https://github.com/berry-lang/berry-grammar'
  },
  'source.bicep': {
    license: 'mit',
    homepage: 'https://github.com/azure/bicep'
  },
  'source.csswg': {
    homepage: 'https://github.com/tabatkins/bikeshed'
  },
  'source.blitzmax': {},
  'source.boogie': {
    license: 'mit',
    homepage: 'https://github.com/boogie-org/boogie-vscode'
  },
  'text.browserslist': {
    license: 'mit',
    homepage: 'https://github.com/browserslist/browserslist-vscode'
  },
  'source.c': {
    homepage: 'https://github.com/textmate/c.tmbundle',
    dependencies: ['source.c.platform']
  },
  'source.c++': {
    homepage: 'https://github.com/textmate/c.tmbundle',
    dependencies: ['source.c']
  },
  'source.c.platform': {
    homepage: 'https://github.com/textmate/c.tmbundle'
  },
  'source.capnp': {},
  'source.css.mss': {
    license: 'mit'
  },
  'source.cds': {
    license: 'apache-2.0',
    homepage: 'https://github.com/SAP/cds-textmate-grammar'
  },
  'source.ceylon': {
    license: 'apache-2.0'
  },
  'source.chapel': {
    license: 'apache-2.0',
    homepage: 'https://github.com/chapel-lang/chapel-tmbundle'
  },
  'source.circom': {
    license: 'mit',
    homepage: 'https://github.com/iden3/circom-highlighting-vscode'
  },
  'source.clar': {
    license: 'mit',
    homepage: 'https://github.com/hirosystems/clarity.tmbundle'
  },
  'source.cmake': {},
  'text.conllu': {
    license: 'apache-2.0'
  },
  'source.cool': {
    license: 'mit'
  },
  'source.qmake': {},
  'text.html.creole': {
    license: 'mit',
    homepage: 'https://github.com/Siddley/Creole',
    dependencies: ['text.html.basic']
  },
  'source.cs': {
    license: 'mit',
    homepage: 'https://github.com/dotnet/csharp-tmLanguage'
  },
  'text.gherkin.feature': {
    license: 'mit',
    homepage: 'https://github.com/cucumber/cucumber-tmbundle'
  },
  'source.cython': {
    dependencies: ['source.regexp.python']
  },
  'source.d': {
    homepage: 'https://github.com/textmate/d.tmbundle',
    dependencies: ['text.html.javadoc']
  },
  'source.dart': {
    license: 'bsd-3-clause',
    homepage: 'https://github.com/dart-lang/dart-syntax-highlight'
  },
  'source.data-weave': {
    license: 'mit',
    homepage: 'https://github.com/mulesoft-labs/data-weave-tmLanguage'
  },
  'source.denizenscript': {
    license: 'mit',
    homepage: 'https://github.com/DenizenScript/denizenscript-grammar'
  },
  'source.desktop': {},
  'source.diff': {},
  'source.dylan': {},
  'source.earthfile': {
    license: 'mpl-2.0',
    homepage: 'https://github.com/earthly/earthfile-grammar'
  },
  'source.c.ec': {
    license: 'unlicense',
    homepage: 'https://github.com/ecere/ec.tmbundle',
    dependencies: ['source.c']
  },
  'source.ecl': {
    license: 'apache-2.0',
    homepage: 'https://github.com/hpcc-systems/ecl-tmLanguage'
  },
  'source.eiffel': {},
  'text.html.js': {
    license: 'mit',
    dependencies: ['text.html.basic']
  },
  'source.elixir': {
    license: 'apache-2.0',
    homepage: 'https://github.com/elixir-lang/elixir-tmbundle',
    dependencies: ['text.elixir']
  },
  'text.elixir': {
    license: 'apache-2.0',
    homepage: 'https://github.com/elixir-lang/elixir-tmbundle',
    dependencies: ['source.elixir']
  },
  'text.html.elixir': {
    license: 'apache-2.0',
    homepage: 'https://github.com/elixir-lang/elixir-tmbundle',
    dependencies: ['text.elixir', 'text.html.basic']
  },
  'source.elvish': {
    license: 'bsd-2-clause',
    homepage: 'https://github.com/elves/elvish'
  },
  'source.elvish-transcript': {
    license: 'bsd-2-clause',
    homepage: 'https://github.com/elves/elvish',
    dependencies: ['source.elvish']
  },
  'source.erlang': {
    homepage: 'https://github.com/textmate/erlang.tmbundle'
  },
  'source.factor': {
    license: 'bsd-2-clause'
  },
  'source.fancy': {
    license: 'bsd-3-clause',
    homepage: 'https://github.com/fancy-lang/fancy-tmbundle'
  },
  'source.fish': {
    license: 'mit'
  },
  'source.forth': {},
  'source.fortran': {},
  'source.fortran.modern': {
    dependencies: ['source.fortran']
  },
  'source.gap': {
    homepage: 'https://github.com/dhowden/gap-tmbundle'
  },
  'source.gemfile-lock': {
    license: 'mit',
    homepage: 'https://github.com/hmarr/gemfile-lock-tmlanguage'
  },
  'source.gemini': {
    license: 'mit',
    homepage: 'https://github.com/printfn/gemini-vscode'
  },
  'source.genero': {
    license: 'mit',
    homepage: 'https://github.com/alienriver49/genero.tmbundle'
  },
  'source.genero-forms': {
    license: 'mit',
    homepage: 'https://github.com/alienriver49/genero.tmbundle'
  },
  'source.po': {},
  'source.gnuplot': {
    license: 'mit'
  },
  'source.go': {
    license: 'bsd-3-clause',
    homepage: 'https://github.com/AlanQuatermain/go-tmbundle'
  },
  'source.gdresource': {
    license: 'mit',
    homepage: 'https://github.com/godotengine/godot-vscode-plugin'
  },
  'source.gdscript': {
    license: 'mit',
    homepage: 'https://github.com/godotengine/godot-vscode-plugin'
  },
  'source.grace': {
    license: 'mit'
  },
  'source.groovy.gradle': {
    license: 'apache-2.0',
    dependencies: ['source.groovy']
  },
  'source.graphql': {
    license: 'mit',
    homepage: 'https://github.com/graphql/graphiql'
  },
  'source.dot': {},
  'source.groovy': {},
  'source.hx': {
    license: 'mit',
    homepage: 'https://github.com/vshaxe/haxe-TmLanguage'
  },
  'source.hxml': {
    license: 'mit',
    homepage: 'https://github.com/vshaxe/haxe-TmLanguage',
    dependencies: ['source.hx']
  },
  'source.hc': {
    license: 'unlicense'
  },
  'source.hoon': {
    license: 'mit',
    homepage: 'https://github.com/pkova/hoon-grammar'
  },
  'source.idl': {
    license: 'bsd-3-clause',
    homepage: 'https://github.com/mgalloy/idl.tmbundle'
  },
  'source.idris': {
    license: 'mit',
    homepage: 'https://github.com/idris-hackers/idris-sublime'
  },
  'source.imba': {
    license: 'mit',
    homepage: 'https://github.com/imba/imba-linguist-grammar'
  },
  'source.ini': {},
  'source.ink': {
    license: 'mit',
    homepage: 'https://github.com/inkle/ink-tmlanguage'
  },
  'source.io': {},
  'source.ioke': {
    license: 'mit'
  },
  'source.fsharp': {
    license: 'mit',
    homepage: 'https://github.com/ionide/ionide-fsgrammar'
  },
  'text.jade': {
    license: 'mit',
    dependencies: ['source.js', 'text.html.basic']
  },
  'source.jasmin': {
    license: 'mit'
  },
  'source.java': {
    homepage: 'https://github.com/textmate/java.tmbundle'
  },
  'source.java-properties': {
    homepage: 'https://github.com/textmate/java.tmbundle'
  },
  'text.html.jsp': {
    homepage: 'https://github.com/textmate/java.tmbundle',
    dependencies: ['text.html.basic']
  },
  'text.html.javadoc': {},
  'source.js.objj': {
    dependencies: ['source.js']
  },
  'source.jflex': {
    license: 'bsd-2-clause',
    dependencies: ['source.java']
  },
  'source.python.kivy': {
    license: 'mit',
    homepage: 'https://github.com/p0lygun/kivy-language-grammer',
    dependencies: ['source.python']
  },
  'source.kusto': {
    license: 'apache-2.0',
    homepage: 'https://github.com/mmanela/kusto-sublime'
  },
  'source.4dm': {
    license: 'mit'
  },
  'source.agc': {
    license: 'isc'
  },
  'source.apl': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-apl'
  },
  'source.asl': {
    license: 'mit',
    homepage: 'https://github.com/sebadur/language-asl'
  },
  'source.asn': {
    license: 'mit',
    homepage: 'https://github.com/ajlangley/language-asn1'
  },
  'source.basic': {
    license: 'apache-2.0',
    homepage: 'https://github.com/telnet23/language-basic'
  },
  'source.batchfile': {
    license: 'mit',
    homepage: 'https://github.com/mmims/language-batchfile'
  },
  'text.html.php.blade': {
    license: 'mit',
    dependencies: ['text.html.basic']
  },
  'source.click': {
    license: 'mit'
  },
  'source.clojure': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-clojure'
  },
  'text.html.soy': {
    license: 'mit',
    dependencies: ['text.html.basic']
  },
  'source.coffee': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-coffee-script',
    dependencies: ['source.js']
  },
  'source.litcoffee': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-coffee-script',
    dependencies: ['source.coffee', 'text.html.basic']
  },
  'source.crystal': {
    license: 'mit',
    dependencies: ['text.html.basic']
  },
  'text.html.ecr': {
    license: 'mit',
    dependencies: ['source.crystal', 'text.html.basic']
  },
  'source.csound': {
    license: 'mit',
    homepage: 'https://github.com/nwhetsell/language-csound'
  },
  'source.csound-document': {
    license: 'mit',
    homepage: 'https://github.com/nwhetsell/language-csound',
    dependencies: ['source.csound', 'text.xml']
  },
  'source.csound-score': {
    license: 'mit',
    homepage: 'https://github.com/nwhetsell/language-csound',
    dependencies: ['source.csound']
  },
  'source.css': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-css'
  },
  'source.cwl': {
    license: 'mit'
  },
  'source.deb-control': {
    license: 'mit',
    homepage: 'https://github.com/tsbarnes/language-debian'
  },
  'source.dircolors': {
    license: 'mit'
  },
  'source.emacs.lisp': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-emacs-lisp'
  },
  'source.yasnippet': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-emacs-lisp',
    dependencies: ['source.emacs.lisp']
  },
  'text.muse': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-emacs-lisp'
  },
  'text.eml.basic': {
    license: 'mit',
    homepage: 'https://github.com/mariozaizar/language-eml'
  },
  etc: {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['source.regexp.posix']
  },
  'injections.etc': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc'
  },
  'source.2da': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc'
  },
  'source.c.nwscript': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['source.c']
  },
  'source.curlrc': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'source.dotenv': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc'
  },
  'source.futhark': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'source.generic-db': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'source.gitattributes': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc', 'source.gitignore']
  },
  'source.gitconfig': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['source.shell']
  },
  'source.gitignore': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'source.ini.npmrc': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'source.inputrc': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'source.m4': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'source.nanorc': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['injections.etc']
  },
  'source.neon': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc'
  },
  'source.odin-ehr': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'source.opts': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'source.record-jar': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'source.sfv': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc'
  },
  'source.shellcheckrc': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'source.sieve': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc'
  },
  'source.smpl': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'source.ssh-config': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc'
  },
  'source.star': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc'
  },
  'source.stl': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'source.string-template': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'source.wgetrc': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'text.checksums': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'text.codeowners': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc']
  },
  'text.html.ecmarkup': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['etc', 'source.yaml', 'text.grammarkdown', 'text.html.basic']
  },
  'text.xml.svg': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-etc',
    dependencies: ['text.xml']
  },
  'source.faust': {
    license: 'mit'
  },
  'source.afm': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-fontforge'
  },
  'source.bdf': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-fontforge',
    dependencies: ['source.xlfd']
  },
  'source.figfont': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-fontforge'
  },
  'source.fontdir': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-fontforge',
    dependencies: ['source.xlfd']
  },
  'source.fontforge': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-fontforge'
  },
  'source.opentype': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-fontforge'
  },
  'source.xlfd': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-fontforge'
  },
  'text.sfd': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-fontforge',
    dependencies: ['source.fontforge']
  },
  'source.gf': {
    license: 'mit',
    homepage: 'https://github.com/johnjcamilleri/language-gf'
  },
  'source.gfm': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-gfm'
  },
  'source.gn': {
    license: 'bsd-3-clause',
    homepage: 'https://github.com/devoncarew/language-gn'
  },
  'source.abnf': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-grammars'
  },
  'source.ebnf': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-grammars',
    dependencies: ['source.lex.regexp']
  },
  'source.lark': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-grammars'
  },
  'source.lex': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-grammars',
    dependencies: ['source.c++', 'source.jflex']
  },
  'source.lex.regexp': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-grammars'
  },
  'source.pegjs': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-grammars',
    dependencies: ['source.js']
  },
  'source.yacc': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-grammars',
    dependencies: ['source.c++', 'source.java']
  },
  'text.grammarkdown': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-grammars'
  },
  'text.haml': {
    license: 'mit',
    dependencies: ['source.ruby']
  },
  'source.cabal': {
    license: 'mit',
    homepage: 'https://github.com/atom-haskell/language-haskell'
  },
  'source.haskell': {
    license: 'mit',
    homepage: 'https://github.com/atom-haskell/language-haskell'
  },
  'text.tex.latex.haskell': {
    license: 'mit',
    homepage: 'https://github.com/atom-haskell/language-haskell',
    dependencies: ['source.haskell', 'text.tex.latex']
  },
  'source.hocon': {
    license: 'mit',
    homepage: 'https://github.com/jacobwgillespie/language-hocon'
  },
  'source.hql': {
    license: 'mit'
  },
  'text.html.basic': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-html'
  },
  'source.igor': {
    license: 'bsd-3-clause',
    homepage: 'https://github.com/byte-physics/language-igor'
  },
  'source.inform7': {
    license: 'mit',
    homepage: 'https://github.com/erkyrath/language-inform7'
  },
  'source.js': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-javascript'
  },
  'source.jison': {
    license: 'mit',
    dependencies: ['source.jisonlex']
  },
  'source.jisonlex': {
    license: 'mit',
    dependencies: ['source.jison', 'source.js']
  },
  'source.jolie': {
    license: 'mit'
  },
  'source.jq': {
    license: 'mit',
    homepage: 'https://github.com/wader/language-jq'
  },
  'source.jsoniq': {
    license: 'apache-2.0',
    homepage: 'https://github.com/wcandillon/language-jsoniq'
  },
  'source.xq': {
    license: 'apache-2.0',
    homepage: 'https://github.com/wcandillon/language-jsoniq'
  },
  'source.jsonnet': {
    license: 'apache-2.0',
    homepage: 'https://github.com/google/language-jsonnet'
  },
  'source.kakscript': {
    license: 'unlicense',
    homepage: 'https://github.com/kakoune-editor/language-kak'
  },
  'source.kerboscript': {
    license: 'mit',
    homepage: 'https://github.com/KSP-KOS/language-kerboscript'
  },
  'source.kickstart': {
    license: 'mit',
    homepage: 'https://github.com/wgwoods/language-kickstart'
  },
  'source.kotlin': {
    license: 'apache-2.0',
    homepage: 'https://github.com/nishtahir/language-kotlin'
  },
  'source.css.less': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-less',
    dependencies: ['source.css']
  },
  'source.m68k': {
    license: 'mit'
  },
  'source.m2': {
    license: 'mit',
    homepage: 'https://github.com/Macaulay2/language-macaulay2'
  },
  'source.maxscript': {
    license: 'isc'
  },
  'source.mcfunction': {
    license: 'mit',
    homepage: 'https://github.com/Arcensoth/language-mcfunction'
  },
  'source.mermaid': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-mermaid',
    dependencies: [
      'source.mermaid.c4c-diagram',
      'source.mermaid.class-diagram',
      'source.mermaid.er-diagram',
      'source.mermaid.flowchart',
      'source.mermaid.gantt',
      'source.mermaid.gitgraph',
      'source.mermaid.mindmap',
      'source.mermaid.pie-chart',
      'source.mermaid.requirement-diagram',
      'source.mermaid.sequence-diagram',
      'source.mermaid.state-diagram',
      'source.mermaid.user-journey'
    ]
  },
  'source.mermaid.c4c-diagram': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-mermaid',
    dependencies: [
      'source.mermaid',
      'source.mermaid.user-journey',
      'source.wsd'
    ]
  },
  'source.mermaid.class-diagram': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-mermaid',
    dependencies: ['source.mermaid', 'source.mermaid.flowchart']
  },
  'source.mermaid.er-diagram': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-mermaid',
    dependencies: ['source.mermaid']
  },
  'source.mermaid.flowchart': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-mermaid',
    dependencies: ['source.mermaid']
  },
  'source.mermaid.gantt': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-mermaid',
    dependencies: ['source.mermaid', 'source.mermaid.flowchart']
  },
  'source.mermaid.gitgraph': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-mermaid',
    dependencies: ['source.json', 'source.mermaid']
  },
  'source.mermaid.pie-chart': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-mermaid',
    dependencies: ['source.mermaid']
  },
  'source.mermaid.requirement-diagram': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-mermaid',
    dependencies: ['source.mermaid']
  },
  'source.mermaid.sequence-diagram': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-mermaid',
    dependencies: ['source.json', 'source.mermaid']
  },
  'source.mermaid.state-diagram': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-mermaid',
    dependencies: ['source.mermaid']
  },
  'source.mermaid.user-journey': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-mermaid',
    dependencies: ['source.mermaid']
  },
  'source.meson': {
    license: 'apache-2.0',
    homepage: 'https://github.com/TingPing/language-meson'
  },
  'source.msl': {
    license: 'mit',
    homepage: 'https://github.com/gen-angry/language-msl'
  },
  'source.ncl': {
    license: 'mit'
  },
  'source.ninja': {
    license: 'mit'
  },
  'source.nunjucks': {
    license: 'mit'
  },
  'text.html.nunjucks': {
    license: 'mit',
    dependencies: ['source.nunjucks', 'text.html.basic']
  },
  'source.pan': {
    license: 'mit'
  },
  'source.gerber': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-pcb'
  },
  'source.ltspice.symbol': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-pcb'
  },
  'source.pcb.board': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-pcb',
    dependencies: ['source.pcb.sexp']
  },
  'source.pcb.schematic': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-pcb',
    dependencies: ['source.pcb.sexp', 'source.scheme']
  },
  'source.pcb.sexp': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-pcb'
  },
  'source.pov-ray sdl': {
    license: 'mit'
  },
  'source.plist': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-property-list'
  },
  'text.xml.plist': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-property-list',
    dependencies: ['text.xml']
  },
  'source.arr': {
    license: 'mit',
    homepage: 'https://github.com/samuela/language-pyret'
  },
  'source.qasm': {
    license: 'mit'
  },
  'source.reason': {
    license: 'mit',
    homepage: 'https://github.com/reasonml-editor/language-reason'
  },
  'source.reg': {
    license: 'mit'
  },
  'source.regexp': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-regexp',
    dependencies: ['source.regexp.extended', 'source.regexp.posix', 'source.sy']
  },
  'source.regexp.extended': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-regexp',
    dependencies: ['source.regexp']
  },
  'source.regexp.posix': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-regexp',
    dependencies: ['source.regexp']
  },
  'source.sy': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-regexp',
    dependencies: ['source.regexp']
  },
  'source.renpy': {
    license: 'mit',
    homepage: 'https://github.com/williamd1k0/language-renpy',
    dependencies: ['source.regexp.python']
  },
  'text.restructuredtext': {
    license: 'mit',
    homepage: 'https://github.com/Lukasa/language-restructuredtext'
  },
  'source.ring': {
    license: 'mit'
  },
  'source.ditroff': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-roff',
    dependencies: ['source.ditroff.desc', 'text.roff']
  },
  'source.ditroff.desc': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-roff'
  },
  'source.gremlin': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-roff',
    dependencies: ['text.roff']
  },
  'source.ideal': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-roff',
    dependencies: ['source.pic', 'text.roff']
  },
  'source.pic': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-roff',
    dependencies: ['source.shell', 'text.html.basic', 'text.roff']
  },
  'text.roff': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-roff',
    dependencies: [
      'source.ditroff',
      'source.gremlin',
      'source.ideal',
      'source.pic'
    ]
  },
  'text.runoff': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-roff'
  },
  'source.changelogs.rpm-spec': {
    license: 'mit'
  },
  'source.rpm-spec': {
    license: 'mit',
    dependencies: ['source.changelogs.rpm-spec', 'source.shell']
  },
  'text.rtf': {
    license: 'mit',
    homepage: 'https://github.com/nwhetsell/language-rtf'
  },
  'source.ruby': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-ruby'
  },
  'text.html.erb': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-ruby',
    dependencies: ['source.ruby', 'text.html.basic']
  },
  'source.css.scss': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-sass',
    dependencies: ['source.css']
  },
  'source.sass': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-sass',
    dependencies: ['source.css']
  },
  'source.sed': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-sed'
  },
  'source.shell': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-shellscript'
  },
  'text.shell-session': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-shellscript',
    dependencies: ['source.shell']
  },
  'text.srt': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-subtitles',
    dependencies: ['text.html.basic']
  },
  'text.vtt': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-subtitles',
    dependencies: ['text.html.basic']
  },
  'source.supercollider': {
    license: 'mit',
    homepage: 'https://github.com/supercollider/language-supercollider'
  },
  'text.texinfo': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-texinfo'
  },
  'source.toc': {
    license: 'unlicense',
    homepage: 'https://github.com/nebularg/language-toc-wow'
  },
  'source.tsql': {
    license: 'mit',
    homepage: 'https://github.com/beau-witter/language-tsql'
  },
  'source.turing': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-turing'
  },
  'source.tl': {
    license: 'mit'
  },
  'source.vim-snippet': {
    license: 'mit',
    homepage: 'https://github.com/Alhadis/language-viml'
  },
  'source.viml': {
    license: 'mit',
    homepage: 'https://github.com/Alhadis/language-viml'
  },
  'text.vim-help': {
    license: 'mit',
    homepage: 'https://github.com/Alhadis/language-viml',
    dependencies: ['source.viml']
  },
  'source.wavefront.mtl': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-wavefront'
  },
  'source.wavefront.obj': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-wavefront'
  },
  'source.webassembly': {
    license: 'isc',
    homepage: 'https://github.com/Alhadis/language-webassembly'
  },
  'source.harbour': {
    license: 'mit'
  },
  'config.xcompose': {
    license: 'mit'
  },
  'source.yaml': {
    license: 'mit',
    homepage: 'https://github.com/atom/language-yaml'
  },
  'source.yang': {
    license: 'mit'
  },
  'text.bibtex': {
    homepage: 'https://github.com/textmate/latex.tmbundle'
  },
  'text.tex': {
    homepage: 'https://github.com/textmate/latex.tmbundle',
    dependencies: ['source.r']
  },
  'text.tex.latex': {
    homepage: 'https://github.com/textmate/latex.tmbundle',
    dependencies: ['text.tex']
  },
  'source.lilypond': {
    license: 'mit',
    homepage: 'https://github.com/nwhetsell/linter-lilypond',
    dependencies: ['source.lisp']
  },
  'text.html.liquid': {
    license: 'mit',
    homepage: 'https://github.com/Shopify/liquid-tm-grammar',
    dependencies: ['text.html.basic']
  },
  'source.lisp': {},
  'source.llvm': {
    license: 'mit',
    homepage: 'https://github.com/whitequark/llvm.tmbundle'
  },
  'source.logos': {
    license: 'mit',
    homepage: 'https://github.com/Cykey/Sublime-Logos',
    dependencies: ['source.c++', 'source.objc']
  },
  'source.logtalk': {},
  'source.lua': {},
  'source.modula-3': {
    license: 'bsd-3-clause',
    homepage: 'https://github.com/newgrammars/m3'
  },
  'source.makefile': {
    homepage: 'https://github.com/textmate/make.tmbundle',
    dependencies: ['source.shell']
  },
  'text.html.mako': {
    license: 'mit',
    dependencies: ['text.html.basic']
  },
  'text.marko': {
    license: 'mit',
    homepage: 'https://github.com/marko-js/marko-tmbundle',
    dependencies: ['source.ts']
  },
  'source.mathematica': {
    license: 'apache-2.0',
    homepage: 'https://github.com/shadanan/mathematica-tmbundle'
  },
  'text.xml.pom': {
    dependencies: ['source.groovy', 'text.xml']
  },
  'text.html.mediawiki': {},
  'source.mercury': {
    license: 'mit'
  },
  'source.mint': {
    license: 'mit',
    homepage: 'https://github.com/mint-lang/mint-vscode',
    dependencies: ['source.css', 'source.css.scss', 'source.js']
  },
  'source.mlir': {
    license: 'apache-2.0',
    homepage: 'https://github.com/jpienaar/mlir-grammar'
  },
  'source.monkey': {
    license: 'mit'
  },
  'source.moonscript': {
    license: 'mit'
  },
  'source.nemerle': {},
  'source.nesc': {
    license: 'mit',
    dependencies: ['source.c']
  },
  'source.nix': {
    license: 'mit',
    homepage: 'https://github.com/sambacha/nix-linguist'
  },
  'source.nu': {
    license: 'apache-2.0'
  },
  'source.objc': {
    dependencies: ['source.c', 'source.c.platform', 'source.objc.platform']
  },
  'source.objc++': {
    dependencies: ['source.c++', 'source.objc']
  },
  'source.objc.platform': {},
  'source.camlp4.ocaml': {
    dependencies: ['source.ocaml']
  },
  'source.ocaml': {
    dependencies: ['source.camlp4.ocaml']
  },
  'source.ooc': {
    license: 'bsd-2-clause'
  },
  'source.opa': {
    license: 'mit',
    homepage: 'https://github.com/mads379/opa.tmbundle'
  },
  'source.scad': {
    license: 'mit',
    homepage: 'https://github.com/tbuser/openscad.tmbundle'
  },
  'source.oz': {
    license: 'mit'
  },
  'source.parrot.pir': {},
  'source.pascal': {},
  'source.pawn': {
    license: 'mit'
  },
  'source.perl': {
    homepage: 'https://github.com/textmate/perl.tmbundle'
  },
  'text.html.smarty': {
    dependencies: ['text.html.basic']
  },
  'text.html.php': {
    dependencies: ['text.html.basic']
  },
  'source.pig_latin': {
    license: 'mit'
  },
  'source.pike': {
    license: 'unlicense'
  },
  'source.polar': {
    license: 'apache-2.0',
    homepage: 'https://github.com/osohq/polar-grammar'
  },
  'source.portugol': {
    license: 'mit',
    homepage: 'https://github.com/luisgbr1el/portugol-grammar'
  },
  'source.powershell': {
    license: 'mit',
    homepage: 'https://github.com/PowerShell/EditorSyntax'
  },
  'source.processing': {},
  'text.html.django': {
    dependencies: ['text.html.basic']
  },
  'source.qsharp': {
    license: 'mit',
    homepage: 'https://github.com/microsoft/qsharp-compiler'
  },
  'source.quake': {
    license: 'bsd-3-clause'
  },
  'source.r': {},
  'source.rascal': {
    license: 'bsd-2-clause',
    homepage: 'https://github.com/usethesource/rascal-syntax-highlighting'
  },
  'text.html.cshtml': {
    license: 'mit',
    homepage: 'https://github.com/github-linguist/razor-plus',
    dependencies: ['source.cs', 'text.html.basic']
  },
  'source.rescript': {
    license: 'mit',
    homepage: 'https://github.com/rescript-lang/rescript-vscode'
  },
  'text.html.riot': {
    license: 'mit'
  },
  'text.slim': {
    license: 'mit',
    dependencies: ['text.html.basic']
  },
  'source.rust': {
    license: 'mit',
    homepage: 'https://github.com/dustypomerleau/rust-syntax'
  },
  'source.sas': {
    license: 'mit',
    homepage: 'https://github.com/rpardee/sas.tmbundle'
  },
  'source.scheme': {},
  'source.scilab': {},
  'source.lsl': {},
  'source.cil': {
    license: 'apache-2.0',
    homepage: 'https://github.com/google/selinux-policy-languages'
  },
  'source.sepolicy': {
    license: 'apache-2.0',
    homepage: 'https://github.com/google/selinux-policy-languages'
  },
  'source.hlsl': {
    license: 'mit'
  },
  'source.shaderlab': {
    license: 'mit'
  },
  'source.smali': {
    license: 'mit',
    homepage: 'https://github.com/ShaneWilton/sublime-smali'
  },
  'source.smalltalk': {
    license: 'mit'
  },
  'source.smithy': {
    license: 'apache-2.0',
    homepage: 'https://github.com/awslabs/smithy-vscode'
  },
  'source.sourcepawn': {
    license: 'mit',
    homepage: 'https://github.com/Dreae/sourcepawn-vscode'
  },
  'source.sql': {},
  'source.nut': {
    license: 'mit'
  },
  'text.zone_file': {
    license: 'mit',
    homepage: 'https://github.com/sixty4k/st2-zonefile'
  },
  'source.ml': {
    homepage: 'https://github.com/textmate/standard-ml.tmbundle'
  },
  'source.mupad': {
    license: 'mit',
    homepage: 'https://github.com/ccreutzig/sublime-MuPAD'
  },
  'source.angelscript': {
    license: 'unlicense',
    homepage: 'https://github.com/wronex/sublime-angelscript'
  },
  'source.aspectj': {
    license: 'mit'
  },
  'source.autoit': {
    license: 'mit'
  },
  'source.befunge': {
    license: 'mit'
  },
  'source.boo': {
    license: 'mit',
    homepage: 'https://github.com/drslump/sublime-boo'
  },
  'source.bsv': {
    license: 'mit'
  },
  'source.cirru': {
    license: 'mit',
    homepage: 'https://github.com/Cirru/sublime-cirru'
  },
  'source.clips': {
    license: 'mit'
  },
  'source.cypher': {
    license: 'apache-2.0',
    homepage: 'https://github.com/fredbenenson/sublime-cypher'
  },
  'source.fan': {
    license: 'mit'
  },
  'source.glsl': {
    license: 'unlicense',
    homepage: 'https://github.com/euler0/sublime-glsl'
  },
  'source.golo': {
    license: 'mit',
    homepage: 'https://github.com/TypeUnsafe/sublime-golo'
  },
  'source.mask': {
    license: 'mit',
    dependencies: ['source.js', 'text.html.basic']
  },
  'source.ne': {
    license: 'unlicense',
    homepage: 'https://github.com/Hardmath123/sublime-nearley'
  },
  'source.netlinx': {
    license: 'mit'
  },
  'source.netlinx.erb': {
    license: 'mit',
    dependencies: ['source.netlinx']
  },
  'source.nginx': {
    license: 'mit',
    homepage: 'https://github.com/brandonwamboldt/sublime-nginx'
  },
  'source.odin': {
    license: 'mit',
    homepage: 'https://github.com/odin-lang/sublime-odin'
  },
  'source.opal': {
    license: 'mit',
    homepage: 'https://github.com/artifactz/sublime-opal'
  },
  'source.pony': {
    license: 'bsd-2-clause',
    homepage: 'https://github.com/CausalityLtd/sublime-pony'
  },
  'source.promela': {
    license: 'mit',
    homepage: 'https://github.com/corbanmailloux/sublime-promela-spin'
  },
  'source.q': {
    license: 'mit',
    homepage: 'https://github.com/komsit37/sublime-q'
  },
  'source.rexx': {
    license: 'mit',
    homepage: 'https://github.com/mblocker/rexx-sublime'
  },
  'text.robot': {
    license: 'apache-2.0',
    homepage: 'https://github.com/shellderp/sublime-robot-plugin'
  },
  'source.shen': {
    license: 'bsd-3-clause'
  },
  'source.spin': {
    license: 'zlib',
    homepage: 'https://github.com/bitbased/sublime-spintools'
  },
  'source.tea': {
    license: 'apache-2.0',
    dependencies: ['source.js', 'text.html.basic', 'text.xml']
  },
  'source.terra': {
    license: 'bsd-3-clause'
  },
  'source.ox': {
    license: 'mit'
  },
  'source.varnish.vcl': {
    license: 'mit',
    homepage: 'https://github.com/brandonwamboldt/sublime-varnish'
  },
  'source.zig': {
    license: 'mit',
    homepage: 'https://github.com/ziglang/sublime-zig-language'
  },
  'source.assembly': {
    license: 'bsd-3-clause',
    homepage: 'https://github.com/Nessphoro/sublimeassembly'
  },
  'source.prolog': {
    license: 'mpl-2.0'
  },
  'source.prolog.eclipse': {
    license: 'mpl-2.0',
    dependencies: ['source.prolog']
  },
  'source.cuda-c++': {
    license: 'bsd-3-clause',
    homepage: 'https://github.com/harrism/sublimetext-cuda-cpp',
    dependencies: ['source.c++']
  },
  'source.nasl': {
    license: 'mit',
    homepage: 'https://github.com/tenable/sublimetext-nasl'
  },
  'source.svelte': {
    license: 'mit',
    homepage: 'https://github.com/umanghome/svelte-atom',
    dependencies: ['source.css', 'source.js', 'source.ts']
  },
  'source.sway': {
    license: 'apache-2.0',
    homepage: 'https://github.com/FuelLabs/sway-vscode-plugin'
  },
  'source.swift': {
    homepage: 'https://github.com/textmate/swift.tmbundle'
  },
  'source.tcl': {},
  'source.tm-properties': {
    homepage: 'https://github.com/textmate/textmate.tmbundle'
  },
  'source.textproto': {
    license: 'mit',
    homepage: 'https://github.com/thejustinwalsh/textproto-grammar'
  },
  'source.thrift': {},
  'source.toml': {
    homepage: 'https://github.com/textmate/toml.tmbundle'
  },
  'source.sparql': {
    license: 'mit',
    homepage: 'https://github.com/peta/turtle.tmbundle',
    dependencies: ['source.turtle']
  },
  'source.turtle': {
    license: 'mit',
    homepage: 'https://github.com/peta/turtle.tmbundle'
  },
  'source.verilog': {},
  'source.vhdl': {},
  'source.fnl': {
    license: 'mit',
    homepage: 'https://github.com/kongeor/vsc-fennel'
  },
  'source.talon': {
    license: 'mit',
    homepage: 'https://github.com/mrob95/vscode-TalonScript'
  },
  'text.html.statamic': {
    license: 'mit',
    homepage: 'https://github.com/Stillat/vscode-antlers-language-server',
    dependencies: ['text.html.basic']
  },
  'source.brs': {
    license: 'mit',
    homepage: 'https://github.com/rokucommunity/vscode-brightscript-language'
  },
  'source.cadence': {
    license: 'apache-2.0',
    homepage: 'https://github.com/onflow/vscode-cadence'
  },
  'source.ql': {
    license: 'mit',
    homepage: 'https://github.com/github/vscode-codeql'
  },
  'source.cue': {
    license: 'mit',
    homepage: 'https://github.com/cue-sh/vscode-cue'
  },
  'source.curry': {
    license: 'mit',
    homepage: 'https://github.com/fwcd/vscode-curry'
  },
  'source.euphoria': {
    license: 'mit',
    homepage: 'https://github.com/OpenEuphoria/vscode-euphoria'
  },
  'source.ftl': {
    license: 'mit',
    homepage: 'https://github.com/macabeus/vscode-fluent'
  },
  'source.gcode': {
    license: 'mit',
    homepage: 'https://github.com/appliedengdesign/vscode-gcode-syntax'
  },
  'source.gedcom': {
    license: 'apache-2.0',
    homepage: 'https://github.com/fguitton/vscode-gedcom'
  },
  'source.gleam': {
    license: 'apache-2.0',
    homepage: 'https://github.com/gleam-lang/vscode-gleam'
  },
  'go.mod': {
    homepage: 'https://github.com/golang/vscode-go'
  },
  'go.sum': {
    homepage: 'https://github.com/golang/vscode-go'
  },
  'source.hack': {
    license: 'mit',
    homepage: 'https://github.com/slackhq/vscode-hack',
    dependencies: ['text.html.basic']
  },
  'source.hy': {
    license: 'mit',
    homepage: 'https://github.com/tshakalekholoane/vscode-hy'
  },
  'source.rpgle': {
    license: 'mit',
    homepage: 'https://github.com/barrettotte/vscode-ibmi-languages',
    dependencies: ['source.sql']
  },
  'source.janet': {
    license: 'mit',
    homepage: 'https://github.com/janet-lang/vscode-janet'
  },
  'source.jest.snap': {
    license: 'mit',
    homepage: 'https://github.com/jest-community/vscode-jest'
  },
  'source.just': {
    license: 'mit',
    homepage: 'https://github.com/skellock/vscode-just'
  },
  'source.lean': {
    license: 'apache-2.0',
    homepage: 'https://github.com/leanprover/vscode-lean'
  },
  'source.mc': {
    license: 'mit'
  },
  'source.mo': {
    license: 'apache-2.0',
    homepage: 'https://github.com/dfinity/vscode-motoko'
  },
  'source.move': {
    license: 'mit',
    homepage: 'https://github.com/damirka/vscode-move-syntax'
  },
  'source.rego': {
    license: 'apache-2.0',
    homepage: 'https://github.com/tsandall/vscode-opa'
  },
  'source.pddl': {
    license: 'mit',
    homepage: 'https://github.com/jan-dolejsi/vscode-pddl'
  },
  'source.wsd': {
    license: 'mit',
    homepage: 'https://github.com/qjebbs/vscode-plantuml'
  },
  'source.prisma': {
    license: 'apache-2.0',
    homepage: 'https://github.com/prisma/vscode-prisma'
  },
  'source.procfile': {
    license: 'bsd-3-clause',
    homepage: 'https://github.com/benspaulding/vscode-procfile',
    dependencies: ['source.shell']
  },
  'source.proto': {
    license: 'mit',
    homepage: 'https://github.com/zxh0/vscode-proto3'
  },
  'source.scala': {
    homepage: 'https://github.com/scala/vscode-scala-syntax'
  },
  'source.singularity': {
    license: 'mit',
    homepage: 'https://github.com/onnovalkering/vscode-singularity'
  },
  'source.slice': {
    license: 'bsd-3-clause',
    homepage: 'https://github.com/zeroc-ice/vscode-slice'
  },
  'source.v': {
    license: 'mit',
    homepage: 'https://github.com/0x9ef/vscode-vlang'
  },
  'source.wren': {
    license: 'mit',
    homepage: 'https://github.com/Nelarius/vscode-wren'
  },
  'source.yara': {
    license: 'mit',
    homepage: 'https://github.com/infosec-intern/vscode-yara'
  },
  'source.zap': {},
  'source.zil': {},
  'source.cobol': {
    license: 'mit',
    homepage: 'https://github.com/spgennard/vscode_cobol'
  },
  'source.jcl': {
    license: 'mit',
    homepage: 'https://github.com/spgennard/vscode_cobol'
  },
  'text.html.vue': {
    license: 'mit',
    homepage: 'https://github.com/vuejs/vue-syntax-highlight'
  },
  'source.wdl': {
    license: 'bsd-3-clause',
    homepage: 'https://github.com/broadinstitute/wdl-sublime-syntax-highlighter'
  },
  'source.witcherscript': {
    license: 'mit',
    homepage: 'https://github.com/ADawesomeguy/witcherscript-grammar'
  },
  'source.wollok': {
    license: 'mit'
  },
  'source.xc': {
    dependencies: ['source.c']
  },
  'text.xml': {},
  'text.xml.xsl': {
    dependencies: ['text.xml']
  },
  'source.zeek': {
    license: 'bsd-3-clause',
    homepage: 'https://github.com/zeek/zeek-sublime'
  },
  'source.php.zephir': {
    homepage: 'https://github.com/phalcon/zephir-sublime'
  }
}
