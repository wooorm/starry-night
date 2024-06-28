// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.sss'],
  names: ['sugarss'],
  patterns: [
    {
      captures: {0: {name: 'punctuation.definition.comment.postcss'}},
      match: '(?:^[ \\t]+)?(\\/\\/).*$\\n?',
      name: 'comment.line.postcss'
    },
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.postcss'}},
      end: '\\*/',
      name: 'comment.block.postcss'
    },
    {
      captures: {1: {name: 'entity.name.function.postcss'}},
      match: '(^[-a-zA-Z_][-\\w]*)?(\\()',
      name: 'meta.function.postcss'
    },
    {
      captures: {1: {name: 'punctuation.definition.entity.postcss'}},
      match: '\\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*',
      name: 'entity.other.attribute-name.class.postcss'
    },
    {
      captures: {1: {name: 'punctuation.definition.entity.postcss'}},
      match: '\\---?[_a-zA-Z]+[_a-zA-Z0-9-]*',
      name: 'variable.var.postcss'
    },
    {
      captures: {1: {name: 'punctuation.definition.entity.postcss'}},
      match: '\\$-?[_a-zA-Z]+[_a-zA-Z0-9-]*',
      name: 'variable.var.postcss'
    },
    {match: '^ *&', name: 'entity.language.postcss'},
    {match: '(arguments)', name: 'variable.language.postcss'},
    {match: '\\b(.*)(?=\\s*=)', name: 'variable.language.postcss'},
    {match: '@([-\\w]+)', name: 'keyword.postcss'},
    {
      captures: {1: {name: 'punctuation.definition.entity.postcss'}},
      match:
        '(:+)\\b(after|before|first-letter|first-line|selection|:-moz-selection)\\b',
      name: 'entity.other.attribute-name.pseudo-element.postcss'
    },
    {
      match: '(-webkit-|-moz\\-|-ms-|-o-)',
      name: 'entity.name.type.vendor-prefix.postcss'
    },
    {
      captures: {1: {name: 'punctuation.definition.entity.postcss'}},
      match:
        '(:)\\b(active|hover|host|focus|target|link|any-link|local-link|visited|scope|current|past|future|dir|lang|enabled|disabled|checked|indeterminate|default|valid|invalid|in-range|out-of-range|required|optional|read-only|read-write|root|first-child|last-child|only-child|nth-child|nth-last-child|first-of-type|last-of-type|matches|nth-of-type|nth-last-of-type|only-of-type|nth-match|nth-last-match|empty|not|column|nth-column|nth-last-column)\\b',
      name: 'entity.other.attribute-name.pseudo-class.postcss'
    },
    {
      match:
        '\\b(:root|a|abbr|acronym|address|area|article|aside|audio|b|base|big|blackness|blend|blockquote|body|br|button|canvas|caption|cite|code|col|contrast|colgroup|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|eventsource|fieldset|figure|figcaption|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|hwb|i|iframe|img|input|ins|kbd|label|legend|li|lightness|link|main|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rgba|rgb|s|samp|saturation|script|section|select|shade|span|strike|strong|style|sub|summary|sup|svg|table|tbody|td|textarea|tfoot|th|thead|time|tint|title|tr|tt|ul|var|video|whiteness)\\b',
      name: 'storage.name.tag.postcss'
    },
    {
      captures: {1: {name: 'punctuation.definition.constant.postcss'}},
      match:
        '(#)([0-9a-fA-F]{1}|[0-9a-fA-F]{2}|[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6})\\b',
      name: 'constant.other.color.rgb-value.postcss'
    },
    {
      captures: {1: {name: 'punctuation.definition.entity.postcss'}},
      match: '(#)[a-zA-Z][a-zA-Z0-9_-]*',
      name: 'entity.other.attribute-name.id.postcss'
    },
    {
      match:
        '(\\b|\\s)(!important|for|from|in|return|to|true|false|null|if|else|unless|return)\\b',
      name: 'keyword.control.postcss'
    },
    {
      match:
        '((?:!|~|\\+|-|(?:\\*)?\\*|\\/|%|(?:\\.)\\.\\.|<|>|(?:=|:|\\?|\\+|-|\\*|\\/|%|<|>)?=|!=)|\\b(?:in|is(?:nt)?|not)\\b)',
      name: 'keyword.operator.postcss'
    },
    {begin: '"', end: '"', name: 'string.quoted.double.postcss'},
    {begin: "'", end: "'", name: 'string.quoted.single.postcss'},
    {
      match:
        '\\b(aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)\\b',
      name: 'support.constant.color.w3c-standard-color-name.postcss'
    },
    {
      match:
        '(\\b(?i:arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace)\\b)',
      name: 'string.constant.font-name.postcss'
    },
    {
      captures: {1: {name: 'keyword.other.unit.postcss'}},
      match:
        '(?<![a-zA-Z])(?x)\n\t\t\t\t\t(?:-|\\+)?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))\n\t\t\t\t\t((?:px|pt|ch|cm|mm|in|r?em|ex|pc|deg|g?rad|vm|vmin|vh|dpi|dpcm|s|tochka|liniya|nogot|perst|sotka|dyuim|vershok|piad|fut|arshin|sazhen|versta|milia|тч|пиксель|пикселя|пикселей|пои|пик|градус|град|рад|пов|сек|мсек|твд|твсм|твтч|Гц|кГц|рм|вк|чх|крм|пш|пв|точка|точки|точек|линия|линии|линий|ноготь|ногтя|ногтей|перст|перста|перстов|сотка|сотки|соток|дюйм|дюйма|дюймов|вершок|вершка|вершков|пядь|пяди|пядей|фут|фута|футов|аршин|аршина|аршинов|сажень|сажени|саженей|сажней|верста|версты|вёрст|миля|мили|миль)\\b|%)?',
      name: 'constant.numeric.postcss'
    },
    {
      match:
        '\\b(all|and|align-items|alignment-adjust|alignment-baseline|animation|animation-delay|animation-direction|animation-duration|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|appearance|azimuth|backface-visibility|background|background-attachment|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|baseline-shift|binding|bleed|bookmark-label|bookmark-level|bookmark-state|bookmark-target|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-decoration-break|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side|clear|clip|color|color-profile|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|create-row|create-column|crop|cue|cue-after|cue-before|cursor|direction|display|dominant-baseline|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust|drop-initial-before-align|drop-initial-size|drop-initial-value|elevation|empty-cells|fit|fit-position|flex-align|flex-flow|flex-line-pack|flex-grow|flex-order|flex-pack|float|float-offset|font|font-family|font-size|font-size-adjust|font-smoothing|font-stretch|font-style|font-variant|font-variant-caps|font-variant-numeric|font-weight|grid-columns|grid-column|grid-rows|hanging-punctuation|height|hyphenate-after|hyphenate-before|hyphenate-character|hyphenate-lines|hyphenate-resource|hyphens|icon|image-orientation|image-rendering|image-resolution|image-size|inline-box-align|left|letter-spacing|line-break|line-height|line-stacking|line-stacking-ruby|line-stacking-shift|line-stacking-strategy|list-style|list-style-image|list-style-position|list-style-type|lost-column|margin|margin-bottom|margin-left|margin-right|margin-top|marker-offset|marks|marquee-direction|marquee-loop|marquee-play-count|marquee-speed|marquee-style|max-height|max-width|min-height|min-width|move-to|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|orphans|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-style|overflow-wrap|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page|page-break-after|page-break-before|page-break-inside|page-policy|pause|pause-after|pause-before|perspective|perspective-origin|phonemes|pitch|pitch-range|play-during|pointer-events|position|presentation-level|punctuation-trim|quotes|rendering-intent|resize|richness|right|rotation|rotation-point|screen|size|speak|speak-header|speak-numeral|speak-punctuation|speech-rate|src|stress|string-set|tab-size|table-layout|target|target-name|target-new|target-position|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-skip|text-decoration-style|text-emphasis|text-emphasis-color|text-emphasis-position|text-emphasis-style|text-height|text-indent|text-justify|text-outline|text-shadow|text-space-collapse|text-transform|text-underline-position|text-wrap|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|vertical-align|visibility|voice-balance|voice-duration|voice-family|voice-pitch|voice-pitch-range|voice-rate|voice-stress|voice-volume|volume|white-space|widows|width|will-change|word-break|word-spacing|word-wrap|z-index)\\b(?=\\:|\\s\\s*)',
      name: 'support.type.property-name.postcss'
    },
    {
      match:
        '\\b(background-color|background-position|border-bottom-color|border-bottom-width|border-left-color|border-left-width|border-right-color|border-right-width|border-spacing|border-top-color|border-top-width|bottom|calc|clip|color(-stop)?|crop css3-content will likely advance slower than this specification, in which case this definition should move there|font-size|font-weight|height|left|letter-spacing|line-height|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|min-height|min-width|opacity|outline-color|outline-offset|outline-width|padding-bottom|padding-left|padding-right|padding-top|right|text-indent|text-shadow|top|vertical-align|visibility|width|word-spacing|z-index)\\b(?!\\:)',
      name: 'support.constant.transitionable-property-value.postcss'
    },
    {
      match:
        '\\b(absolute|all(-scroll)?|alternate|always|amaro|antialiased|armenian|auto|avoid|baseline|below|bidi-override|block|bold|bolder|border-box|both|bottom|brannan|break-all|break-word|capitalize|center|char|circle|cjk-ideographic|col-resize|collapse|conic(-gradient)?|content-box|crosshair|dashed|decimal-leading-zero|decimal|default|disabled|disc|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|earlybird|ease(-(in(-out)?|out))?|ellipsis|fallback|fill|fix-legacy|fix|fixed|flex|format|geometricPrecision|georgian|groove|hand|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|inactive|infinite|inherit|initial|inkwell|inline-block|inline-start|inline|inset|inside|inter-ideograph|inter-word|italic|justify|kalvin|katakana-iroha|katakana|keep-all|larger|left|lighter|line-edge|lining-nums|line-through|line|linear(-gradient)?|list-item|lo-fi|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|medium|middle|move|n-resize|ne-resize|nashville|newspaper|no-drop|no-repeat|nw-resize|none|normal|not-allowed|nowrap|oblique|optimize(Legibility|Quality|Speed)|outset|outside|overline|padding-box|painted|pointer|pre(-(wrap|line))?|progress|relative|repeat-x|repeat-y|repeat|responsive|right|ridge|row(-resize)?|rtl|s-resize|scroll|se-resize|separate|smaller|small-caps|solid|square|static|strict|stroke|sub|subpixel-antialiased|super|sw-resize|table-footer-group|table-header-group|tb-rl|text-bottom|text-top|text|thick|thin|toaster|top|transform|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|url|vertical(-(ideographic|text))?|visible(Painted|Fill|Stroke)?|w-resize|wait|whitespace|wrap|zero)\\b',
      name: 'variable.property-value.postcss'
    },
    {
      match: '\\b(colour|zed-index)\\b(?=\\:|\\s\\s*)',
      name: 'entity.name.type.property-name.postcss'
    },
    {
      match: '\\b(centre|yeah-nah|fair-dinkum|rack-off|woop-woop)\\b',
      name: 'variable.property-value.postcss'
    },
    {match: '(\\b|\\s)(!bloody-oath)\\b', name: 'keyword.control.postcss'},
    {
      match: '\\b(true-blue|vegemite|vb-green|kangaroo|koala)\\b',
      name: 'support.constant.color.w3c-standard-color-name.postcss'
    },
    {match: '(\\b|\\s)(!sorry)\\b', name: 'keyword.control.postcss'},
    {
      match: '\\b(grey)\\b',
      name: 'support.constant.color.w3c-standard-color-name.postcss'
    },
    {
      match:
        '\\b(animation-verzögerung|animation-richtung|animation-dauer|animation-füll-methode|animation-wiederholung-anzahl|animation-name|animation-abspiel-zustand|animation-takt-funktion|animation|hintergrund-befestigung|hintergrund-beschnitt|hintergrund-farbe|hintergrund-bild|hintergrund-ursprung|hintergrund-position|hintergrund-wiederholung|hintergrund-größe|hintergrund|rahmen-unten-farbe|rahmen-unten-links-radius|rahmen-unten-rechts-radius|rahmen-unten-stil|rahmen-unten-breite|rahmen-unten|rahmen-kollaps|rahmen-farbe|rahmen-bild|rahmen-bild-anfang|rahmen-bild-wiederholung|rahmen-bild-schnitt|rahmen-bild-quelle|rahmen-bild-breite|rahmen-links-farbe|rahmen-links-stil|rahmen-links-breite|rahmen-links|rahmen-radius|rahmen-rechts-farbe|rahmen-rechts-stil|rahmen-rechts-breite|rahmen-rechts|rahmen-abstand|rahmen-stil|rahmen-oben-farbe|rahmen-oben-links-radius|rahmen-oben-rechts-radius|rahmen-oben-stil|rahmen-oben-breite|rahmen-oben|rahmen-breite|rahmen|unten|kasten-schatten|kasten-bemessung|beschriftung-seite|klären|beschnitt|farbe|spalten|spalte-anzahl|spalte-füllung|spalte-lücke|spalte-linie|spalte-linie-farbe|spalte-linie-stil|spalte-linie-breite|spalte-spanne|spalte-breite|inhalt|zähler-erhöhen|zähler-zurücksetzen|zeiger|anzeige|leere-zellen|filter|flex-grundlage|flex-richtung|flex-fluss|flex-wachsem|flex-schrumpfen|flex-umbruch|umlaufen|schrift-familie|schrift-eigenschaft-einstellungen|schrift-größe|schrift-größe-einstellen|schrift-stil|schrift-variante|schrift-gewicht|schrift|höhe|trennstriche|inhalt-ausrichten|links|zeichen-abstand|zeilen-umbruch|zeilen-höhe|listen-stil-bild|listen-stil-position|listen-stil-typ|listen-stil|außenabstand-unten|außenabstand-links|außenabstand-rechts|außenabstand-oben|außenabstand|max-höhe|max-breite|min-höhe|min-breite|deckkraft|reihenfolge|schusterjungen|kontur-farbe|kontur-abstand|kontur-stil|kontur-breite|kontur|überlauf-x|überlauf-y|überlauf|innenabstand-unten|innenabstand-left|innenabstand-rechts|innenabstand-oben|innenabstand|perspektive-ursprung|perspektive|zeiger-ereignisse|position|anführungszeichen|größenänderung|rechts|tabelle-gestaltung|tab-größe|text-ausrichten|text-verzierung|text-einrückung|text-orientierung|text-überlauf|text-wiedergabe|text-schatten|text-umformung|oben|übergang-verzögerung|übergang-dauer|übergang-eigenschaft|übergang-takt-funktion|übergang|unicode-bidi|vertikale-ausrichtung|sichtbarkeit|weißraum|hurenkinder|breite|wort-umbruch|wort-abstand|wort-umschlag|schreib-richtung|ebene)\\b(?=\\:|\\s\\s*)',
      name: 'entity.name.type.property-name.postcss'
    },
    {
      match:
        '\\b(absolut|automatisch|fett|fixiert|versteckt|erben|initial|kursiv|links|nicht-wiederholen|keines|relativ|wiederholen-x|wiederholen-y|wiederholen|rechts|durchgezogen|statisch|aufheben)\\b',
      name: 'variable.property-value.postcss'
    },
    {match: '(\\b|\\s)(!wichtig)\\b', name: 'keyword.control.postcss'},
    {
      match:
        '\\b(eisfarben|antikweiß|wasser|aquamarinblau|beige|biskuit|mandelweiß|blauviolett|gelbbraun|kadettenblau|schokolade|kornblumenblau|mais|karmesinrot|dunkelblau|dunkeltürkis|dunklegoldrunenfarbe|dunkelgrün|dunkelgrau|dunkelkhaki|dunkelmagenta|dunkelolivgrün|dunkelorange|dunkleorchidee|dunkelrot|dunklelachsfarbe|dunklesseegrün|dunklesschieferblau|dunkelviolett|tiefrosa|tiefhimmelblau|gedimmtesgrau|persinningblau|backstein|blütenweiß|waldgrün|geisterweiß|grüngelb|honigmelone|leuchtendrosa|indischrot|elfenbein|staubfarbend|lavendelrosa|grasgrün|chiffongelb|hellblau|helleskorallenrot|helltürkis|hellgrau|hellgrün|hellrosa|hellelachsfarbe|hellesseegrün|helleshimmelblau|hellesschiefergrau|hellesstahlblau|hellgelb|limonengrün|leinen|kastanie|mitternachtsblau|cremigeminze|altrosa|mokassin|navajoweiß|marineblau|altespitze|olivgrünbraun|orangerot|orchidee|blassegoldrunenfarbe|blassegoldrunenfarbe|blasstürkis|blasstürkis|pfirsich|pflaume|taubenblau|violett|rosigesbraun|royalblau|sattelbraun|lachsfarben|sandbraun|seegrün|muschel|siennaerde|silber|schieferblau|schiefergrau|schneeweiß|frühlingsgrün|stahlblau|hautfarben|krickentengrün|distel|tomate|türkis|veilchen|weizen|rauchfarben|gelbgrün|himmelblau|schwarz|blau|koralle|cyan|grau|grün|rosa|lavendel|limone|orange|rot|weiß|gelb)\\b',
      name: 'support.constant.color.w3c-standard-color-name.postcss'
    },
    {
      match:
        '\\b(ключевыекадры|анимация|имя-анимации|длительность-анимации|функция-времени-анимации|задержка-анимации|число-повторов-анимации|направление-анимации|статус-проигрывания-анимации|фон|положение-фона|цвет-фона|изображение-фона|позиция-фона|повтор-фона|обрезка-фона|начало-фона|размер-фона|граница|нижняя-граница|цвет-нижней-границы|стиль-нижней-границы|толщина-нижней-границы|цвет-границы|левая-граница|цвет-левой-границы|стиль-левой-границы|толщина-левой-границы|правая-граница|цвет-правой-границы|стиль-правой-границы|толщина-правой-границы|стиль-границы|верхняя-граница|цвет-верхней-границы|стиль-верхней-границы|толщина-верхней-границы|толщина-границы|контур|цвет-контура|стиль-контура|толщина-контура|радиус-нижней-левой-рамки|радиус-нижней-правой-рамки|изображение-рамки|начало-изображения-рамки|повтор-изображения-рамки|смещение-изображения-рамки|источник-изображения-рамки|толщина-изображения-рамки|радиус-рамки|радиус-верхней-левой-рамки|радиус-верхней-правой-рамки|разрыв-оформления-блока|тень-блока|переполнение-икс|переполнение-игрек|стиль-переполнения|поворот|точка-поворота|цветовой-профиль|непрозрачность|намерение-отрисовки|метка-закладки|уровень-закладки|цель-закладки|плавающий-сдвиг|дефисный-после|дефисный-до|дефисный-символ|дефисный-строки|дифисный-ресурс|дефисы|разрешение-изображения|маркировка|набор-строк|высота|макс-высота|макс-ширина|мин-высота|мин-ширина|ширина|выравнивание-блока|направление-блока|флекс-блок|группа-флекс-блока|линии-блока|порядок-группы-бокса|ориентация-бокса|пак-бокса|шрифт|семейство-шрифта|размер-шрифта|стиль-шрифта|вид-шрифта|вес-шрифта|определение-шрифта|подгонка-размера-шрифта|разрядка-шрифта|содержимое|инкремент-счетчика|сброс-счетчика|кавычки|обрезка|сдвинуть-на|политика-страницы|колонки-сетки|ряды-сетки|цель|имя-цели|новая-цель|позиция-цели|подгонка-выравнивания|выравнивание-базовой|сдвиг-базовой|домининация-базовой|выравнивание-строчного-блока|высота-текста|стиль-списка|изображение-стиля-списка|позиция-стиля-списка|тип-стиля-списка|поле|поле-снизу|поле-слева|поле-справа|поле-сверху|направление-шатра|количество-повторов-шатра|скорость-шатра|стиль-шатра|количество-колонок|заполнение-колонок|зазор-колонок|направляющая-колонок|цвет-направляющей-колонок|стиль-направляющей-колонок|ширина-направляющей-колонок|охват-колонок|ширина-колонок|колонки|отбивка|отбивка-снизу|отбивка-слева|отбивка-справа|отбивка-сверху|ориентация-изображения|страница|размер|снизу|очистить|обрезать|курсор|отображение|обтекание|слева|переполнение|положение|справа|сверху|видимость|зед-индекс|сироты|разрыв-страницы-после|разрыв-страницы-до|разрыв-страницы-внутри|вдовы|схлопывание-границ|расстояние-границ|сторона-подписи|пустые-ячейки|макет-таблицы|цвет|направление|мужбуквенный-пробел|высота-строки|выравнивание-текста|оформление-текста|отступ-текста|трансформация-текста|уникод-биди|вертикальное-выравнивание|пробелы|межсловный-пробел|висячая-пунктуация|обрезка-пунктуации|выравнивание-последней-строки|выключка-текста|контур-текста|переполнение-текста|тень-текста|подгонка-размера-текста|обертка-текста|разрыв-слова|обертка-слова|трансформация|точка-трансформации|стиль-трансформации|перспектива|точка-перспективы|видимость-задника|переход|свойство-перехода|длительность-перехода|функция-вренеми-перехода|задержка-перехода|представление|калибровка-блока|иконка|нав-вниз|нав-индекс|нав-влево|нав-вправо|нав-вверх|смещение-контура|ресайз|зум|фильтр|выделение-пользователем|сглаживание-шрифта|осх-сглаживание-шрифта|переполнение-прокрутки|ист)\\b(?=\\:|\\s\\s*)',
      name: 'entity.name.type.property-name.postcss'
    },
    {
      match:
        '\\b(выше|абсолютный|абсолютная|абсолютное|после|псевдоним|все|всё|свободный-скролл|все-капителью|всё-капителью|позволить-конец|алфавитный|алфавитная|алфавитное|альтернативный|альтернативная|альтернативное|альтернативный-инвертированн|альтернативная-инвертированн|альтернативное-инвертированн|всегда|армянский|армянская|армянское|авто|избегать|избегать-колонку|избегать-страницу|назад|баланс|базоваялиния|перед|ниже|отменить-биди|мигать|блок|блокировать|блочное|жирный|более-жирный|по-границе|оба|нижний|перенос-всего|перенос-слов|капитализировать|ячейка|центр|круг|обрезать|клонировать|закрывающие-кавычки|ресайз-колонки|схлопнуть|колонка|инвертировать-колонки|насыщенный|содержать|содержит|по-содержимому|контекстное-меню|копия|копировать|покрыть|перекрестие|пунктирная|десятичный|десятичный-ведущий-ноль|обычный|потомки|диск|распространять|распространить|точка|точечный|двойной|двойной-круг|в-ресайз|легкость|легкость-в|легкость-в-из|легкость-из|края|эллипсис|вставленный|конец|зв-ресайз|расширен|экстра-конденсирован|экстра-расширен|заполнение|заполнен|первый|фиксирован|плоский|флекс|флекс-конец|флекс-старт|форсированный-конец|вперед|полной-ширины|грузинский|канавка|помощь|скрытый|спрятать|горизонтальный|горизонтальный-тб|иконка|бесконечный|бесконечная|бесконечное|наследовать|начальный|начальная|начальное|чернила|строчный|строчный-блок|строчный-флекс|строчная-таблица|вставка|внутри|между-кластером|между-иероглифом|между-словом|инвертированный|инвертированная|инвертированное|курсив|курсивный|выключитьстроку|кашида|сохранить-все|большое|больше|последний|последняя|последнее|слева|левый|легче|зачеркнуть|линейный|линейная|линейное|последний-пункт|локальный|локальная|локальное|свободный|свободная|свободное|нижний-буквенный|нижний-греческий|нижний-латинский|нижний-романский|нижний-регистр|лнп|ручной|соответствует-родителю|средний|средняя|среднее|посередине|смешенный-справа|двигать|с-ресайз|св-ресайз|свюз-ресайз|не-закрывать-кавычки|не-сбрасывать|не-открывать-кавычки|не-повторять|нет|ничего|нету|нормальный|не-разрешен|безобтекания|сю-ресайз|сз-ресайз|сзюв-ресайз|объекты|наклонный|наклонная|наклонное|открыт|открывающие-кавычки|начало|снаружи|оверлайн|по-отбивке|страница|пауза|указатель|пре|пре-линия|пре-обертка|прогресс|относительный|относительная|относительное|повтор|повтор-икс|повтор-игрек|обратный|обратная|обратное|хребет|справа|превый|правый|круглый|круглая|круглое|ряд|ряд-ресайз|обратный-ряд|пнл|бегущий|бегущяя|бегущее|ю-ресайз|уменьшить|уменьшать|скролл|юв-ресайз|полу-конденсирован|полу-расширен|отдельный|отдельная|отдельное|кунжут|показать|боком|боком-лева|боком-права|нарезать|маленький|маленький|капитель|меньше|сплошной|пробел|пробел-вокруг|пробел-между|пробелы|квадрат|старт|статический|шаг-конец|шаг-старт|растягивать|строгий|строгая|строгое|стиль|суб|над|юз-ресайз|таблица|заголовок-таблицы|ячейка-таблицы|колонка-таблицы|группа-колонок-талицы|группа-футера-таблицы|группа-заголовка-таблицы|ряд-таблицы|группа-ряда-таблицы|текст|текст-внизу|текст-наверху|толстый|тонкий|начертание-титров|верх|прозрачный|прозрачная|прозрачное|треугольный|треугольная|треугольное|сверх-конденсирован|сверх-расширен|под|подчеркнут|однорегистровый|однорегистровая|однорегистровое|отключенный|отключенная|отключенное|верхний-буквенный|верхний-латинский|верхний-романский|верхний-регистр|вертикально|использовать-ориентуцию-знака|вертикальный|вертикальная|вертикальное|вертикальный-лп|вертикальный-пл|вертикальный-текст|видимый|з-ресайз|ждать|волнистый|волнистая|волнистое|вес|обернуть|обернуть-обратный|оч-большой|оч-маленький|очоч-большой|очоч-маленький|призумить|отзумить)\\b',
      name: 'variable.property-value.postcss'
    },
    {match: '(\\b|\\s)(!важно)\\b', name: 'keyword.control.postcss'},
    {
      match:
        '\\b(красный|красная|красное|оранжевый|оранжевая|оранжевое|желтый|желтая|желтое|оливковый|оливковая|оливковое|пурпурный|пурпурное|пурпурная|фуксия|белый|белая|белое|лимонный|лимонная|лимонное|зеленый|зеленая|зеленое|темносиний|темносиняя|темносинее|синий|синяя|синее|водяной|водяная|водяное|бирюзовый|бирюзовая|бирюзовое|черный|черная|черное|серебряный|серебряная|серебряное|серый|серая|серое)\\b',
      name: 'support.constant.color.w3c-standard-color-name.postcss'
    },
    {
      match:
        '\\b(моноширинный|c-засечками|без-засечек|фантазийный|рукописный)\\b',
      name: 'string.constant.font-name.postcss'
    },
    {
      match: '\\b(кзс|вычс|кзсп|урл|аттр|от|до)\\b',
      name: 'storage.name.tag.postcss'
    },
    {
      match:
        '\\b(fondo|flota|ancho|alto|puntero|redondeado|izquierda|derecha|arriba|abajo|espaciado)\\b',
      name: 'entity.name.type.property-name.postcss(?=\\:|\\s\\s*)'
    },
    {
      match:
        '\\b(subrayado|manito|mayuscula|izquierda|derecha|arriba|abajo)\\b',
      name: 'variable.property-value.postcss'
    },
    {match: '(\\b|\\s)(!importantisimo)\\b', name: 'keyword.control.postcss'},
    {
      match:
        '\\b(animering-fördröjning|animering-riktning|animering-längd|animering-fyllnads-metod|animering-upprepning-antal|animering-namn|animering-spelning-status|animering-tajming-funktion|animering|bakgrund-bilaga|bakgrund-klipp|bakgrund-färg|bakgrund-bild|bakgrund-ursprung|bakgrund-position|bakgrund-upprepning|bakgrund-storlek|bakgrund|kant-botten-färg|kant-botten-vänster-radie|kant-botten-höger-radie|kant-botten-stil|kant-botten-bredd|kant-botten|kant-kollaps|kant-färg|kant-bild|kant-bild-början|kant-bild-upprepning|kant-bild-snitt|kant-bild-källa|kant-bild-bredd|kant-vänster-färg|kant-vänster-stil|kant-vänster-bredd|kant-vänster|kant-radie|kant-höger-färg|kant-höger-stil|kant-höger-bredd|kant-höger|kant-avstånd|kant-stil|kant-topp-färg|kant-topp-vänster-radie|kant-topp-höger-radie|kant-topp-stil|kant-topp-bredd|kant-topp|kant-bredd|kant|botten|låda-skugga|låda-kalibrering|bildtext-sida|rensa|klipp|färg|kolumn|kolumn-antal|kolumn-fyllning|kolumn-mellanrum|kolumn-linje|kolumn-linje-färg|kolumn-linje-stil|kolumn-linje-bredd|kolumn-spann|kolumn-bredd|innehåll|räknare-ökning|räknare-återställ|muspekare|visa|tomma-celler|filter|flex-grund|flex-rikting|flex-flöde|flex-ökning|flex-förminskning|flex-omslutning|flex|flyt|typsnitt-familj|typsnitt-särdrag-inställningar|typsnitt-storlek|typsnitt-storlek-justering|typsnitt-stil|typsnitt-variant|typsnitt-vikt|typsnitt|höjd|bindestreck|justera-innehåll|vänster|bokstav-mellanrum|linje-brytning|linje-höjd|lista-stil-bild|lista-stil-position|lista-stil-typ|lista-stil|marginal-botten|marginal-vänster|marginal-höger|marginal-topp|marginal|max-höjd|max-bredd|min-höjd|min-bredd|opacitet|ordning|föräldralösa|kontur-färg|kontur-abstand|kontur-stil|kontur-bredd|kontur|överflöde-x|överflöde-y|överflöde|stoppning-botten|stoppning-left|stoppning-höger|stoppning-topp|stoppning|perspektiv-ursprung|perspektiv|pekare-händelser|position|citat|storleksändra|höger|tabell-layout|tab-storlek|text-riktning|text-dekoration|text-indrag|text-inriktning|text-överflöde|text-rendering|text-skugga|text-omvanlda|topp|övergång-fördröjning|övergång-längd|övergång-egenskap|övergång-tajming-funktion|övergång|unicode-bidi|vertikal-riktning|synlighet|luftrum|änkor|bredd|ord-brytning|ord-avstånd|ord-omslutning|skriv-rikting|nivå)\\b(?=\\:|\\s\\s*)',
      name: 'entity.name.type.property-name.postcss'
    },
    {
      match:
        '\\b(absolut|automatisk|fet|fixerad|gömd|ärva|inledande|kursiv|vänster|ingen-upprepning|ingen|uppradad|uppradad-block|relativ|upprepning-x|upprepning-y|upprepning|höger|solid|statisk|urkoppla)\\b',
      name: 'variable.property-value.postcss'
    },
    {match: '(\\b|\\s)(!viktigt)\\b', name: 'keyword.control.postcss'},
    {
      match:
        '\\b(isfärg|antikvitt|vatten|marinblå|beige|kex|mandelvit|blålila|gulbrun|kadettenblå|choklad|kornblå|majs|crimson|mörkblå|mörkturkos|mörkgyllenröd|mörkgrön|mörkgrå|mörkkhaki|mörkrosa|mörkolivgrön|mörkorange|mörkorchidee|mörkröd|mörklaxrosa|mörkväxtgräs|mörkskifferblått|mörklila|djuprosa|djuphimmelblå|grummelgrå|skojarblå|tegelsten|vitsippa|skogsgrön|spökvit|gröngul|honungsmelon|hetrosa|indiskröd|elfenben|khaki|lavendelrosa|gräsgrön|chiffongul|himmelblå|ljuskorall|ljusturkos|ljusgrå|ljusgrön|ljusrosa|ljuselaxrosa|ljushavsgrön|ljushimmelblå|ljusskiffergrå|ljusstålblå|ljusgul|limegrön|linnen|kastanj|midnattsblå|mintkräm|gammelrosa|mokassin|navajovitt|marineblå|spets|olivgrönbrun|orangeröd|orchidee|blektgyllenröd|blektgrön|blektturkos|papayakräm|persikopuff|plommon|ljusblå|lila|skärbrun|royalblå|sadelbrun|laxrosa|sandbrun|havsgrön|snäcka|sienna|silver|skifferblå|skiffergrå|snövit|vårgrön|stålblå|hudfärg|blågrön|tistel|tomat|turkos|violett|vete|vitrök|gulgrön|himmelblå|svart|blå|koraller|cyan|grå|grön|rosa|lavendel|lime|orange|röd|vit|gul)\\b',
      name: 'support.constant.color.w3c-standard-color-name.postcss'
    }
  ],
  scopeName: 'source.css.postcss.sugarss'
}

export default grammar
