// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/cucumber/cucumber-tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.feature', '.story'],
  names: ['gherkin', 'cucumber'],
  patterns: [
    {include: '#feature_element_keyword'},
    {include: '#feature_keyword'},
    {include: '#step_keyword'},
    {include: '#strings_triple_quote'},
    {include: '#strings_single_quote'},
    {include: '#strings_double_quote'},
    {include: '#comments'},
    {include: '#tags'},
    {include: '#scenario_outline_variable'},
    {include: '#table'}
  ],
  repository: {
    comments: {
      captures: {0: {name: 'comment.line.number-sign'}},
      match: '\\s*(#.*)'
    },
    feature_element_keyword: {
      captures: {
        1: {name: 'keyword.language.gherkin.feature.scenario'},
        2: {name: 'string.language.gherkin.scenario.title.title'}
      },
      match:
        "^\\s*(예|시나리오 개요|시나리오|배경|背景|場景大綱|場景|场景大纲|场景|劇本大綱|劇本|例子|例|テンプレ|シナリオテンプレート|シナリオテンプレ|シナリオアウトライン|シナリオ|サンプル|سيناريو مخطط|سيناريو|امثلة|الخلفية|תרחיש|תבנית תרחיש|רקע|דוגמאות|Тарих|Сценарій|Сценарији|Сценарио|Сценарий структураси|Сценарий|Структура сценарію|Структура сценарија|Структура сценария|Скица|Рамка на сценарий|Примеры|Примери|Пример|Приклади|Предыстория|Предистория|Позадина|Передумова|Основа|Мисоллар|Концепт|Контекст|Örnekler|Założenia|Yo-ho-ho|Wharrimean is|Voorbeelden|Variantai|Tình huống|The thing of it is|Tausta|Taust|Tapausaihio|Tapaus|Tapaukset|Szenariogrundriss|Szenario|Szablon scenariusza|Stsenaarium|Struktura scenarija|Structură scenariu|Structura scenariu|Skica|Skenario konsep|Skenario|Situācija|Shiver me timbers|Senaryo taslağı|Senaryo|Scénář|Scénario|Schema dello scenario|Scenārijs pēc parauga|Scenārijs|Scenár|Scenaro|Scenariusz|Scenariu|Scenarios|Scenariomall|Scenariomal|Scenario Template|Scenario Outline|Scenario Amlinellol|Scenario|Scenarijus|Scenariji|Scenarijaus šablonas|Scenarijai|Scenarij|Scenarie|Rerefons|Raamstsenaarium|Příklady|Példák|Príklady|Przykłady|Primjeri|Primeri|Primer|Pozadí|Pozadina|Pozadie|Plang vum Szenario|Plan du scénario|Plan du Scénario|Piemēri|Pavyzdžiai|Paraugs|Osnova scénáře|Osnova|Náčrt Scénáře|Náčrt Scenáru|Mate|MISHUN SRSLY|MISHUN|Lýsing Dæma|Lýsing Atburðarásar|Kịch bản|Konturo de la scenaro|Kontext|Konteksts|Kontekstas|Kontekst|Koncept|Khung tình huống|Khung kịch bản|Juhtumid|Háttér|Heave to|Hannergrond|Grundlage|Geçmiş|Forgatókönyv vázlat|Forgatókönyv|Fono|Exemplos|Exemples|Exemple|Exempel|Examples|Esquema do Cenário|Esquema do Cenario|Esquema del escenario|Esquema de l'escenari|Esempi|Escenario|Escenari|Enghreifftiau|Ekzemploj|Eksempler|Ejemplos|EXAMPLZ|Dữ liệu|Dæmi|Dis is what went down|Dead men tell no tales|Dasar|Contoh|Contexto|Contexte|Context|Contesto|Cobber|Cenário|Cenario|Cefndir|Bối cảnh|Blokes|Beispiller|Beispiele|Bakgrunnur|Bakgrunn|Bakgrund|Baggrund|Background|B4|Atburðarásir|Atburðarás|Antecedents|Antecedentes|All y'all|Achtergrond|Abstrakt Scenario|Abstract Scenario):(.*)"
    },
    feature_keyword: {
      captures: {
        1: {name: 'keyword.language.gherkin.feature'},
        2: {name: 'string.language.gherkin.feature.title'}
      },
      match:
        '^\\s*(기능|機能|功能|フィーチャ|خاصية|תכונה|Функціонал|Функция|Функционалност|Функционал|Свойство|Особина|Могућност|Özellik|Właściwość|Tính năng|Trajto|Savybė|Požiadavka|Požadavek|Osobina|Ominaisuus|Omadus|OH HAI|Mogućnost|Mogucnost|Jellemző|Fīča|Funzionalità|Funktionalitéit|Funktionalität|Funkcionalnost|Funkcionalitāte|Funcționalitate|Funcţionalitate|Functionaliteit|Functionalitate|Funcionalitat|Funcionalidade|Fonctionnalité|Fitur|Feature|Eiginleiki|Egenskap|Egenskab|Crikey|Característica|Arwedd|Ahoy matey!):(.*)\\b'
    },
    scenario_outline_variable: {begin: '<', end: '>', name: 'variable.other'},
    step_keyword: {
      captures: {1: {name: 'keyword.language.gherkin.feature.step'}},
      match:
        "^\\s*(하지만|조건|먼저|만일|만약|단|그리고|그러면|那麼|那么|而且|當|当|前提|假設|假如|但是|但し|並且|もし|ならば|ただし|しかし|かつ|و |متى |لكن |عندما |ثم |بفرض |اذاً |כאשר |וגם |בהינתן |אזי |אז |אבל |Якщо |Унда |Тоді |Тогда |То |Та |Пусть |Припустимо, що |Припустимо |Онда |Но |Нехай |Лекин |Коли |Когда |Когато |Када |Кад |К тому же |И |Задато |Задати |Задате |Если |Допустим |Дано |Дадено |Ва |Бирок |Аммо |Али |Але |Агар |А також |А |І |Și |Şi |Þá |Þegar |Étant donnés |Étant données |Étant donnée |Étant donné |És |wann |ugeholl |mä |dann |awer |an |a |Zatati |Zakładając |Zadato |Zadate |Zadano |Zadani |Zadan |Youse know when youse got |Youse know like when |Yna |Ya know how |Ya gotta |Y |Wun |Wtedy |When y'all |When |Wenn |WEN |Và |Ve |Und |Un |Thì |Then y'all |Then |Tapi |Tak |Tada |Tad |Så |Stel |Soit |Siis |Si |Sed |Se |Quando |Quand |Quan |Pryd |Pokud |Pokiaľ |Però |Pero |Pak |Oraz |Onda |Ond |Oletetaan |Og |Och |O zaman |Når |När |Niin |Nhưng |N |Mutta |Men |Mas |Maka |Mając |Majd |Mais |Maar |Ma |Lorsque |Lorsqu'|Let go and haul |Kun |Kuid |Kui |Khi |Keď |Ketika |Když |Kaj |Kai |Kada |Kad |Jeżeli |Jeśli |Ja |Ir |I CAN HAZ |I |Ha |Givun |Givet |Given y'all |Given |Gitt |Gegeven |Gegeben sei |Gangway! |Fakat |Eğer ki |Etant donnés |Etant données |Etant donnée |Etant donné |Et |Então |Entonces |Entao |En |Ef |Eeldades |E |Duota |Dun |Donitaĵo |Donat |Donada |Do |Diyelim ki |Dengan |Den youse gotta |De |Dați fiind |Daţi fiind |Dato |Dati fiind |Dati |Date fiind |Date |Data |Dat fiind |Dar |Dann |Dan |Dados |Dado |Dadas |Dada |DEN |Când |Cuando |Cho |Cept |Cand |Cal |But y'all |But |Buh |Blimey! |Biết |Bet |BUT |Aye |Avast! |Atès |Atunci |Atesa |Anrhegedig a |Angenommen |And y'all |And |An |Amikor |Amennyiben |Ama |Als |Alors |Allora |Ali |Aleshores |Ale |Akkor |Adott |Aber |AN |A také |A |\\* )"
    },
    strings_double_quote: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.untitled'}]
    },
    strings_single_quote: {
      begin: '(?<![a-zA-Z"])\'',
      end: "'(?![a-zA-Z])",
      name: 'string.quoted.single',
      patterns: [{match: '\\\\.', name: 'constant.character.escape'}]
    },
    strings_triple_quote: {
      begin: '"""',
      end: '"""',
      name: 'string.quoted.single'
    },
    table: {
      begin: '^\\s*\\|',
      end: '\\|\\s*$',
      name: 'keyword.control.cucumber.table',
      patterns: [{match: '\\w', name: 'source'}]
    },
    tags: {
      captures: {0: {name: 'storage.type.tag.cucumber'}},
      match: '(@[^@\\r\\n\\t ]+)'
    }
  },
  scopeName: 'text.gherkin.feature'
}

export default grammar
