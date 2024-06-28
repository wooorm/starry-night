/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

import sourceC from '@wooorm/starry-night/source.c'
import sourceCpp from '@wooorm/starry-night/source.c++'
import sourceCPlatform from '@wooorm/starry-night/source.c.platform'
import sourceCs from '@wooorm/starry-night/source.cs'
import sourceCss from '@wooorm/starry-night/source.css'
import sourceCssLess from '@wooorm/starry-night/source.css.less'
import sourceCssScss from '@wooorm/starry-night/source.css.scss'
import sourceDiff from '@wooorm/starry-night/source.diff'
import sourceGo from '@wooorm/starry-night/source.go'
import sourceGraphql from '@wooorm/starry-night/source.graphql'
import sourceIni from '@wooorm/starry-night/source.ini'
import sourceJava from '@wooorm/starry-night/source.java'
import sourceJs from '@wooorm/starry-night/source.js'
import sourceJson from '@wooorm/starry-night/source.json'
import sourceKotlin from '@wooorm/starry-night/source.kotlin'
import sourceLua from '@wooorm/starry-night/source.lua'
import sourceMakefile from '@wooorm/starry-night/source.makefile'
import sourceObjc from '@wooorm/starry-night/source.objc'
import sourceObjcPlatform from '@wooorm/starry-night/source.objc.platform'
import sourcePerl from '@wooorm/starry-night/source.perl'
import sourcePython from '@wooorm/starry-night/source.python'
import sourceR from '@wooorm/starry-night/source.r'
import sourceRuby from '@wooorm/starry-night/source.ruby'
import sourceRust from '@wooorm/starry-night/source.rust'
import sourceShell from '@wooorm/starry-night/source.shell'
import sourceSql from '@wooorm/starry-night/source.sql'
import sourceSwift from '@wooorm/starry-night/source.swift'
import sourceTs from '@wooorm/starry-night/source.ts'
import sourceVbnet from '@wooorm/starry-night/source.vbnet'
import sourceYaml from '@wooorm/starry-night/source.yaml'
import textHtmlBasic from '@wooorm/starry-night/text.html.basic'
import textHtmlPhp from '@wooorm/starry-night/text.html.php'
import textMd from '@wooorm/starry-night/text.md'
import textXml from '@wooorm/starry-night/text.xml'
import textXmlSvg from '@wooorm/starry-night/text.xml.svg'

/** @type {ReadonlyArray<Grammar>} */
export const grammars = [
  sourceC,
  sourceCpp,
  sourceCPlatform,
  sourceCs,
  sourceCss,
  sourceCssLess,
  sourceCssScss,
  sourceDiff,
  sourceGo,
  sourceGraphql,
  sourceIni,
  sourceJava,
  sourceJs,
  // @ts-expect-error: TS is wrong, `.json` does not mean JSON.
  sourceJson,
  sourceKotlin,
  sourceLua,
  sourceMakefile,
  sourceObjc,
  sourceObjcPlatform,
  sourcePerl,
  sourcePython,
  sourceR,
  sourceRuby,
  sourceRust,
  sourceShell,
  sourceSql,
  sourceSwift,
  sourceTs,
  sourceVbnet,
  sourceYaml,
  textHtmlBasic,
  textHtmlPhp,
  textMd,
  textXml,
  textXmlSvg
]
