// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/xDrivenDevelopment/atom-language-1c-bsl>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.sdbl'],
  extensions: ['.bsl', '.os'],
  names: ['1c-enterprise'],
  patterns: [
    {include: '#basic'},
    {include: '#miscellaneous'},
    {
      begin:
        '(?i:(?<=[^\\wа-яё\\.]|^)(Процедура|Procedure|Функция|Function)\\s+([a-zа-яё0-9_]+)\\s*(\\())',
      beginCaptures: {
        1: {name: 'storage.type.bsl'},
        2: {name: 'entity.name.function.bsl'},
        3: {name: 'punctuation.bracket.begin.bsl'}
      },
      end: '(?i:(\\))\\s*((Экспорт|Export)(?=[^\\wа-яё\\.]|$))?)',
      endCaptures: {
        1: {name: 'punctuation.bracket.end.bsl'},
        2: {name: 'storage.modifier.bsl'}
      },
      patterns: [
        {include: '#annotations'},
        {include: '#basic'},
        {match: '(=)', name: 'keyword.operator.assignment.bsl'},
        {
          match: '(?i:(?<=[^\\wа-яё\\.]|^)(Знач|Val)(?=[^\\wа-яё\\.]|$))',
          name: 'storage.modifier.bsl'
        },
        {
          match:
            '(?<=[^\\wа-яё\\.]|^)((?<==)(?i)[a-zа-яё0-9_]+)(?=[^\\wа-яё\\.]|$)',
          name: 'invalid.illegal.bsl'
        },
        {
          match:
            '(?<=[^\\wа-яё\\.]|^)((?<==\\s)\\s*(?i)[a-zа-яё0-9_]+)(?=[^\\wа-яё\\.]|$)',
          name: 'invalid.illegal.bsl'
        },
        {match: '(?i:[a-zа-яё0-9_]+)', name: 'variable.parameter.bsl'}
      ]
    },
    {
      begin: '(?i:(?<=[^\\wа-яё\\.]|^)(Перем|Var)\\s+([a-zа-яё0-9_]+)\\s*)',
      beginCaptures: {
        1: {name: 'storage.type.var.bsl'},
        2: {name: 'variable.bsl'}
      },
      end: '(;)',
      endCaptures: {1: {name: 'keyword.operator.bsl'}},
      patterns: [
        {match: '(,)', name: 'keyword.operator.bsl'},
        {
          match: '(?i:(?<=[^\\wа-яё\\.]|^)(Экспорт|Export)(?=[^\\wа-яё\\.]|$))',
          name: 'storage.modifier.bsl'
        },
        {match: '(?i:[a-zа-яё0-9_]+)', name: 'variable.bsl'}
      ]
    },
    {
      begin: '(?i:(?<=;|^)\\s*(Если|If))',
      beginCaptures: {1: {name: 'keyword.control.conditional.bsl'}},
      end: '(?i:(Тогда|Then))',
      endCaptures: {1: {name: 'keyword.control.conditional.bsl'}},
      name: 'meta.conditional.bsl',
      patterns: [{include: '#basic'}, {include: '#miscellaneous'}]
    },
    {
      begin: '(?i:(?<=;|^)\\s*([\\wа-яё]+))\\s*(=)',
      beginCaptures: {
        1: {name: 'variable.assignment.bsl'},
        2: {name: 'keyword.operator.assignment.bsl'}
      },
      end: '(?i:(?=(;|Иначе|Конец|Els|End)))',
      name: 'meta.var-single-variable.bsl',
      patterns: [{include: '#basic'}, {include: '#miscellaneous'}]
    },
    {
      match:
        '(?i:(?<=[^\\wа-яё\\.]|^)(КонецПроцедуры|EndProcedure|КонецФункции|EndFunction)(?=[^\\wа-яё\\.]|$))',
      name: 'storage.type.bsl'
    },
    {
      match: '(?i)#(Использовать|Use)(?=[^\\wа-яё\\.]|$)',
      name: 'keyword.control.import.bsl'
    },
    {match: '(?i)#native', name: 'keyword.control.native.bsl'},
    {
      match:
        '(?i:(?<=[^\\wа-яё\\.]|^)(Прервать|Break|Продолжить|Continue|Возврат|Return)(?=[^\\wа-яё\\.]|$))',
      name: 'keyword.control.bsl'
    },
    {
      match:
        '(?i:(?<=[^\\wа-яё\\.]|^)(Если|If|Иначе|Else|ИначеЕсли|ElsIf|Тогда|Then|КонецЕсли|EndIf)(?=[^\\wа-яё\\.]|$))',
      name: 'keyword.control.conditional.bsl'
    },
    {
      match:
        '(?i:(?<=[^\\wа-яё\\.]|^)(Попытка|Try|Исключение|Except|КонецПопытки|EndTry|ВызватьИсключение|Raise)(?=[^\\wа-яё\\.]|$))',
      name: 'keyword.control.exception.bsl'
    },
    {
      match:
        '(?i:(?<=[^\\wа-яё\\.]|^)(Пока|While|(Для|For)(\\s+(Каждого|Each))?|Из|In|По|To|Цикл|Do|КонецЦикла|EndDo)(?=[^\\wа-яё\\.]|$))',
      name: 'keyword.control.repeat.bsl'
    },
    {
      match:
        '(?i:&(НаКлиенте((НаСервере(БезКонтекста)?)?)|AtClient((AtServer(NoContext)?)?)|НаСервере(БезКонтекста)?|AtServer(NoContext)?))',
      name: 'storage.modifier.directive.bsl'
    },
    {include: '#annotations'},
    {
      match:
        '(?i:#(Если|If|ИначеЕсли|ElsIf|Иначе|Else|КонецЕсли|EndIf).*(Тогда|Then)?)',
      name: 'keyword.other.preprocessor.bsl'
    },
    {
      begin: '(?i)(#(Область|Region))(\\s+([\\wа-яё]+))?',
      beginCaptures: {
        1: {name: 'keyword.other.section.bsl'},
        4: {name: 'entity.name.section.bsl'}
      },
      end: '$'
    },
    {match: '(?i)#(КонецОбласти|EndRegion)', name: 'keyword.other.section.bsl'}
  ],
  repository: {
    annotations: {
      patterns: [
        {
          begin: '(?i)(&([a-zа-яё0-9_]+))\\s*(\\()',
          beginCaptures: {
            1: {name: 'storage.type.annotation.bsl'},
            3: {name: 'punctuation.bracket.begin.bsl'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.bracket.end.bsl'}},
          patterns: [
            {include: '#basic'},
            {match: '(=)', name: 'keyword.operator.assignment.bsl'},
            {
              match:
                '(?<=[^\\wа-яё\\.]|^)((?<==)(?i)[a-zа-яё0-9_]+)(?=[^\\wа-яё\\.]|$)',
              name: 'invalid.illegal.bsl'
            },
            {
              match:
                '(?<=[^\\wа-яё\\.]|^)((?<==\\s)\\s*(?i)[a-zа-яё0-9_]+)(?=[^\\wа-яё\\.]|$)',
              name: 'invalid.illegal.bsl'
            },
            {match: '(?i)[a-zа-яё0-9_]+', name: 'variable.annotation.bsl'}
          ]
        },
        {match: '(?i)(&([a-zа-яё0-9_]+))', name: 'storage.type.annotation.bsl'}
      ]
    },
    basic: {
      patterns: [
        {begin: '//', end: '$', name: 'comment.line.double-slash.bsl'},
        {
          begin: '\\"',
          end: '\\"(?![\\"])',
          name: 'string.quoted.double.bsl',
          patterns: [
            {include: '#query'},
            {match: '\\"\\"', name: 'constant.character.escape.bsl'},
            {match: '(^\\s*//.*$)', name: 'comment.line.double-slash.bsl'}
          ]
        },
        {
          match:
            '(?i:(?<=[^\\wа-яё\\.]|^)(Неопределено|Undefined|Истина|True|Ложь|False|NULL)(?=[^\\wа-яё\\.]|$))',
          name: 'constant.language.bsl'
        },
        {
          match: '(?<=[^\\wа-яё\\.]|^)(\\d+\\.?\\d*)(?=[^\\wа-яё\\.]|$)',
          name: 'constant.numeric.bsl'
        },
        {
          match:
            "\\'((\\d{4}[^\\d\\']*\\d{2}[^\\d\\']*\\d{2})([^\\d\\']*\\d{2}[^\\d\\']*\\d{2}([^\\d\\']*\\d{2})?)?)\\'",
          name: 'constant.other.date.bsl'
        },
        {match: '(,)', name: 'keyword.operator.bsl'},
        {match: '(\\()', name: 'punctuation.bracket.begin.bsl'},
        {match: '(\\))', name: 'punctuation.bracket.end.bsl'}
      ]
    },
    miscellaneous: {
      patterns: [
        {
          match:
            '(?i:(?<=[^\\wа-яё\\.]|^)(НЕ|NOT|И|AND|ИЛИ|OR)(?=[^\\wа-яё\\.]|$))',
          name: 'keyword.operator.logical.bsl'
        },
        {match: '<=|>=|=|<|>', name: 'keyword.operator.comparison.bsl'},
        {match: '(\\+|-|\\*|/|%)', name: 'keyword.operator.arithmetic.bsl'},
        {match: '(;|\\?)', name: 'keyword.operator.bsl'},
        {
          match: '(?i:(?<=[^\\wа-яё\\.]|^)(Новый|New)(?=[^\\wа-яё\\.]|$))',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nСтрДлина|StrLen|\nСокрЛ|TrimL|\nСокрП|TrimR|\nСокрЛП|TrimAll|\nЛев|Left|\nПрав|Right|\nСред|Mid|\nСтрНайти|StrFind|\nВРег|Upper|\nНРег|Lower|\nТРег|Title|\nСимвол|Char|\nКодСимвола|CharCode|\nПустаяСтрока|IsBlankString|\nСтрЗаменить|StrReplace|\nСтрЧислоСтрок|StrLineCount|\nСтрПолучитьСтроку|StrGetLine|\nСтрЧислоВхождений|StrOccurrenceCount|\nСтрСравнить|StrCompare|\nСтрНачинаетсяС|StrStartWith|\nСтрЗаканчиваетсяНа|StrEndsWith|\nСтрРазделить|StrSplit|\nСтрСоединить|StrConcat\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nЦел|Int|\nОкр|Round|\nACos|\nASin|\nATan|\nCos|\nExp|\nLog|\nLog10|\nPow|\nSin|\nSqrt|\nTan\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nГод|Year|\nМесяц|Month|\nДень|Day|\nЧас|Hour|\nМинута|Minute|\nСекунда|Second|\nНачалоГода|BegOfYear|\nНачалоДня|BegOfDay|\nНачалоКвартала|BegOfQuarter|\nНачалоМесяца|BegOfMonth|\nНачалоМинуты|BegOfMinute|\nНачалоНедели|BegOfWeek|\nНачалоЧаса|BegOfHour|\nКонецГода|EndOfYear|\nКонецДня|EndOfDay|\nКонецКвартала|EndOfQuarter|\nКонецМесяца|EndOfMonth|\nКонецМинуты|EndOfMinute|\nКонецНедели|EndOfWeek|\nКонецЧаса|EndOfHour|\nНеделяГода|WeekOfYear|\nДеньГода|DayOfYear|\nДеньНедели|WeekDay|\nТекущаяДата|CurrentDate|\nДобавитьМесяц|AddMonth\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match: '(?i:(?<=[^\\wа-яё\\.]|^)(Тип|Type|ТипЗнч|TypeOf)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?i:(?<=[^\\wа-яё\\.]|^)(Булево|Boolean|Число|Number|Строка|String|Дата|Date)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nПоказатьВопрос|ShowQueryBox|\nВопрос|DoQueryBox|\nПоказатьПредупреждение|ShowMessageBox|\nПредупреждение|DoMessageBox|\nСообщить|Message|\nОчиститьСообщения|ClearMessages|\nОповеститьОбИзменении|NotifyChanged|\nСостояние|Status|\nСигнал|Beep|\nПоказатьЗначение|ShowValue|\nОткрытьЗначение|OpenValue|\nОповестить|Notify|\nОбработкаПрерыванияПользователя|UserInterruptProcessing|\nОткрытьСодержаниеСправки|OpenHelpContent|\nОткрытьИндексСправки|OpenHelpIndex|\nОткрытьСправку|OpenHelp|\nПоказатьИнформациюОбОшибке|ShowErrorInfo|\nКраткоеПредставлениеОшибки|BriefErrorDescription|\nПодробноеПредставлениеОшибки|DetailErrorDescription|\nПолучитьФорму|GetForm|\nЗакрытьСправку|CloseHelp|\nПоказатьОповещениеПользователя|ShowUserNotification|\nОткрытьФорму|OpenForm|\nОткрытьФормуМодально|OpenFormModal|\nАктивноеОкно|ActiveWindow|\nВыполнитьОбработкуОповещения|ExecuteNotifyProcessing\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nПоказатьВводЗначения|ShowInputValue|\nВвестиЗначение|InputValue|\nПоказатьВводЧисла|ShowInputNumber|\nВвестиЧисло|InputNumber|\nПоказатьВводСтроки|ShowInputString|\nВвестиСтроку|InputString|\nПоказатьВводДаты|ShowInputDate|\nВвестиДату|InputDate\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nФормат|Format|\nЧислоПрописью|NumberInWords|\nНСтр|NStr|\nПредставлениеПериода|PeriodPresentation|\nСтрШаблон|StrTemplate\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nПолучитьОбщийМакет|GetCommonTemplate|\nПолучитьОбщуюФорму|GetCommonForm|\nПредопределенноеЗначение|PredefinedValue|\nПолучитьПолноеИмяПредопределенногоЗначения|GetPredefinedValueFullName\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nПолучитьЗаголовокСистемы|GetCaption|\nПолучитьСкоростьКлиентскогоСоединения|GetClientConnectionSpeed|\nПодключитьОбработчикОжидания|AttachIdleHandler|\nУстановитьЗаголовокСистемы|SetCaption|\nОтключитьОбработчикОжидания|DetachIdleHandler|\nИмяКомпьютера|ComputerName|\nЗавершитьРаботуСистемы|Exit|\nИмяПользователя|UserName|\nПрекратитьРаботуСистемы|Terminate|\nПолноеИмяПользователя|UserFullName|\nЗаблокироватьРаботуПользователя|LockApplication|\nКаталогПрограммы|BinDir|\nКаталогВременныхФайлов|TempFilesDir|\nПравоДоступа|AccessRight|\nРольДоступна|IsInRole|\nТекущийЯзык|CurrentLanguage|\nТекущийКодЛокализации|CurrentLocaleCode|\nСтрокаСоединенияИнформационнойБазы|InfoBaseConnectionString|\nПодключитьОбработчикОповещения|AttachNotificationHandler|\nОтключитьОбработчикОповещения|DetachNotificationHandler|\nПолучитьСообщенияПользователю|GetUserMessages|\nПараметрыДоступа|AccessParameters|\nПредставлениеПриложения|ApplicationPresentation|\nТекущийЯзыкСистемы|CurrentSystemLanguage|\nЗапуститьСистему|RunSystem|\nТекущийРежимЗапуска|CurrentRunMode|\nУстановитьЧасовойПоясСеанса|SetSessionTimeZone|\nЧасовойПоясСеанса|SessionTimeZone|\nТекущаяДатаСеанса|CurrentSessionDate|\nУстановитьКраткийЗаголовокПриложения|SetShortApplicationCaption|\nПолучитьКраткийЗаголовокПриложения|GetShortApplicationCaption|\nПредставлениеПрава|RightPresentation|\nВыполнитьПроверкуПравДоступа|VerifyAccessRights|\nРабочийКаталогДанныхПользователя|UserDataWorkDir|\nКаталогДокументов|DocumentsDir|\nПолучитьИнформациюЭкрановКлиента|GetClientDisplaysInformation|\nТекущийВариантОсновногоШрифтаКлиентскогоПриложения|ClientApplicationBaseFontCurrentVariant|\nТекущийВариантИнтерфейсаКлиентскогоПриложения|ClientApplicationInterfaceCurrentVariant|\nУстановитьЗаголовокКлиентскогоПриложения|SetClientApplicationCaption|\nПолучитьЗаголовокКлиентскогоПриложения|GetClientApplicationCaption|\nНачатьПолучениеКаталогаВременныхФайлов|BeginGettingTempFilesDir|\nНачатьПолучениеКаталогаДокументов|BeginGettingDocumentsDir|\nНачатьПолучениеРабочегоКаталогаДанныхПользователя|BeginGettingUserDataWorkDir|\nПодключитьОбработчикЗапросаНастроекКлиентаЛицензирования|AttachLicensingClientParametersRequestHandler|\nОтключитьОбработчикЗапросаНастроекКлиентаЛицензирования|DetachLicensingClientParametersRequestHandler|\nКаталогБиблиотекиМобильногоУстройства|MobileDeviceLibraryDir\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nЗначениеВСтрокуВнутр|ValueToStringInternal|\nЗначениеИзСтрокиВнутр|ValueFromStringInternal|\nЗначениеВФайл|ValueToFile|\nЗначениеИзФайла|ValueFromFile\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nКомандаСистемы|System|\nЗапуститьПриложение|RunApp|\nПолучитьCOMОбъект|GetCOMObject|\nПользователиОС|OSUsers|\nНачатьЗапускПриложения|BeginRunningApplication\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nПодключитьВнешнююКомпоненту|AttachAddIn|\nНачатьУстановкуВнешнейКомпоненты|BeginInstallAddIn|\nУстановитьВнешнююКомпоненту|InstallAddIn|\nНачатьПодключениеВнешнейКомпоненты|BeginAttachingAddIn\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nКопироватьФайл|FileCopy|\nПереместитьФайл|MoveFile|\nУдалитьФайлы|DeleteFiles|\nНайтиФайлы|FindFiles|\nСоздатьКаталог|CreateDirectory|\nПолучитьИмяВременногоФайла|GetTempFileName|\nРазделитьФайл|SplitFile|\nОбъединитьФайлы|MergeFiles|\nПолучитьФайл|GetFile|\nНачатьПомещениеФайла|BeginPutFile|\nПоместитьФайл|PutFile|\nЭтоАдресВременногоХранилища|IsTempStorageURL|\nУдалитьИзВременногоХранилища|DeleteFromTempStorage|\nПолучитьИзВременногоХранилища|GetFromTempStorage|\nПоместитьВоВременноеХранилище|PutToTempStorage|\nПодключитьРасширениеРаботыСФайлами|AttachFileSystemExtension|\nНачатьУстановкуРасширенияРаботыСФайлами|BeginInstallFileSystemExtension|\nУстановитьРасширениеРаботыСФайлами|InstallFileSystemExtension|\nПолучитьФайлы|GetFiles|\nПоместитьФайлы|PutFiles|\nЗапроситьРазрешениеПользователя|RequestUserPermission|\nПолучитьМаскуВсеФайлы|GetAllFilesMask|\nПолучитьМаскуВсеФайлыКлиента|GetClientAllFilesMask|\nПолучитьМаскуВсеФайлыСервера|GetServerAllFilesMask|\nПолучитьРазделительПути|GetPathSeparator|\nПолучитьРазделительПутиКлиента|GetClientPathSeparator|\nПолучитьРазделительПутиСервера|GetServerPathSeparator|\nНачатьПодключениеРасширенияРаботыСФайлами|BeginAttachingFileSystemExtension|\nНачатьЗапросРазрешенияПользователя|BeginRequestingUserPermission|\nНачатьПоискФайлов|BeginFindingFiles|\nНачатьСозданиеКаталога|BeginCreatingDirectory|\nНачатьКопированиеФайла|BeginCopyingFile|\nНачатьПеремещениеФайла|BeginMovingFile|\nНачатьУдалениеФайлов|BeginDeletingFiles|\nНачатьПолучениеФайлов|BeginGettingFiles|\nНачатьПомещениеФайлов|BeginPuttingFiles|\nНачатьСозданиеДвоичныхДанныхИзФайла|BeginCreateBinaryDataFromFile\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nНачатьТранзакцию|BeginTransaction|\nЗафиксироватьТранзакцию|CommitTransaction|\nОтменитьТранзакцию|RollbackTransaction|\nУстановитьМонопольныйРежим|SetExclusiveMode|\nМонопольныйРежим|ExclusiveMode|\nПолучитьОперативнуюОтметкуВремени|GetRealTimeTimestamp|\nПолучитьСоединенияИнформационнойБазы|GetInfoBaseConnections|\nНомерСоединенияИнформационнойБазы|InfoBaseConnectionNumber|\nКонфигурацияИзменена|ConfigurationChanged|\nКонфигурацияБазыДанныхИзмененаДинамически|DataBaseConfigurationChangedDynamically|\nУстановитьВремяОжиданияБлокировкиДанных|SetLockWaitTime|\nОбновитьНумерациюОбъектов|RefreshObjectsNumbering|\nПолучитьВремяОжиданияБлокировкиДанных|GetLockWaitTime|\nКодЛокализацииИнформационнойБазы|InfoBaseLocaleCode|\nУстановитьМинимальнуюДлинуПаролейПользователей|SetUserPasswordMinLength|\nПолучитьМинимальнуюДлинуПаролейПользователей|GetUserPasswordMinLength|\nИнициализироватьПредопределенныеДанные|InitializePredefinedData|\nУдалитьДанныеИнформационнойБазы|EraseInfoBaseData|\nУстановитьПроверкуСложностиПаролейПользователей|SetUserPasswordStrengthCheck|\nПолучитьПроверкуСложностиПаролейПользователей|GetUserPasswordStrengthCheck|\nПолучитьСтруктуруХраненияБазыДанных|GetDBStorageStructureInfo|\nУстановитьПривилегированныйРежим|SetPrivilegedMode|\nПривилегированныйРежим|PrivilegedMode|\nТранзакцияАктивна|TransactionActive|\nНеобходимостьЗавершенияСоединения|ConnectionStopRequest|\nНомерСеансаИнформационнойБазы|InfoBaseSessionNumber|\nПолучитьСеансыИнформационнойБазы|GetInfoBaseSessions|\nЗаблокироватьДанныеДляРедактирования|LockDataForEdit|\nУстановитьСоединениеСВнешнимИсточникомДанных|ConnectExternalDataSource|\nРазблокироватьДанныеДляРедактирования|UnlockDataForEdit|\nРазорватьСоединениеСВнешнимИсточникомДанных|DisconnectExternalDataSource|\nПолучитьБлокировкуСеансов|GetSessionsLock|\nУстановитьБлокировкуСеансов|SetSessionsLock|\nОбновитьПовторноИспользуемыеЗначения|RefreshReusableValues|\nУстановитьБезопасныйРежим|SetSafeMode|\nБезопасныйРежим|SafeMode|\nПолучитьДанныеВыбора|GetChoiceData|\nУстановитьЧасовойПоясИнформационнойБазы|SetInfoBaseTimeZone|\nПолучитьЧасовойПоясИнформационнойБазы|GetInfoBaseTimeZone|\nПолучитьОбновлениеКонфигурацииБазыДанных|GetDataBaseConfigurationUpdate|\nУстановитьБезопасныйРежимРазделенияДанных|SetDataSeparationSafeMode|\nБезопасныйРежимРазделенияДанных|DataSeparationSafeMode|\nУстановитьВремяЗасыпанияПассивногоСеанса|SetPassiveSessionHibernateTime|\nПолучитьВремяЗасыпанияПассивногоСеанса|GetPassiveSessionHibernateTime|\nУстановитьВремяЗавершенияСпящегоСеанса|SetHibernateSessionTerminateTime|\nПолучитьВремяЗавершенияСпящегоСеанса|GetHibernateSessionTerminateTime|\nПолучитьТекущийСеансИнформационнойБазы|GetCurrentInfoBaseSession|\nПолучитьИдентификаторКонфигурации|GetConfigurationID|\nУстановитьНастройкиКлиентаЛицензирования|SetLicensingClientParameters|\nПолучитьИмяКлиентаЛицензирования|GetLicensingClientName|\nПолучитьДополнительныйПараметрКлиентаЛицензирования|GetLicensingClientAdditionalParameter|\nПолучитьОтключениеБезопасногоРежима|GetSafeModeDisabled|\nУстановитьОтключениеБезопасногоРежима|SetSafeModeDisabled\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nНайтиПомеченныеНаУдаление|FindMarkedForDeletion|\nНайтиПоСсылкам|FindByRef|\nУдалитьОбъекты|DeleteObjects|\nУстановитьОбновлениеПредопределенныхДанныхИнформационнойБазы|SetInfoBasePredefinedDataUpdate|\nПолучитьОбновлениеПредопределенныхДанныхИнформационнойБазы|GetInfoBasePredefinedData\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nXMLСтрока|XMLString|\nXMLЗначение|XMLValue|\nXMLТип|XMLType|\nXMLТипЗнч|XMLTypeOf|\nИзXMLТипа|FromXMLType|\nВозможностьЧтенияXML|CanReadXML|\nПолучитьXMLТип|GetXMLType|\nПрочитатьXML|ReadXML|\nЗаписатьXML|WriteXML|\nНайтиНедопустимыеСимволыXML|FindDisallowedXMLCharacters|\nИмпортМоделиXDTO|ImportXDTOModel|\nСоздатьФабрикуXDTO|CreateXDTOFactory\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nЗаписатьJSON|WriteJSON|\nПрочитатьJSON|ReadJSON|\nПрочитатьДатуJSON|ReadJSONDate|\nЗаписатьДатуJSON|WriteJSONDate\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nЗаписьЖурналаРегистрации|WriteLogEvent|\nПолучитьИспользованиеЖурналаРегистрации|GetEventLogUsing|\nУстановитьИспользованиеЖурналаРегистрации|SetEventLogUsing|\nПредставлениеСобытияЖурналаРегистрации|EventLogEventPresentation|\nВыгрузитьЖурналРегистрации|UnloadEventLog|\nПолучитьЗначенияОтбораЖурналаРегистрации|GetEventLogFilterValues|\nУстановитьИспользованиеСобытияЖурналаРегистрации|SetEventLogEventUse|\nПолучитьИспользованиеСобытияЖурналаРегистрации|GetEventLogEventUse|\nСкопироватьЖурналРегистрации|CopyEventLog|\nОчиститьЖурналРегистрации|ClearEventLog\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nЗначениеВДанныеФормы|ValueToFormData|\nДанныеФормыВЗначение|FormDataToValue|\nКопироватьДанныеФормы|CopyFormData|\nУстановитьСоответствиеОбъектаИФормы|SetObjectAndFormConformity|\nПолучитьСоответствиеОбъектаИФормы|GetObjectAndFormConformity\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nПолучитьФункциональнуюОпцию|GetFunctionalOption|\nПолучитьФункциональнуюОпциюИнтерфейса|GetInterfaceFunctionalOption|\nУстановитьПараметрыФункциональныхОпцийИнтерфейса|SetInterfaceFunctionalOptionParameters|\nПолучитьПараметрыФункциональныхОпцийИнтерфейса|GetInterfaceFunctionalOptionParameters|\nОбновитьИнтерфейс|RefreshInterface\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nУстановитьРасширениеРаботыСКриптографией|InstallCryptoExtension|\nНачатьУстановкуРасширенияРаботыСКриптографией|BeginInstallCryptoExtension|\nПодключитьРасширениеРаботыСКриптографией|AttachCryptoExtension|\nНачатьПодключениеРасширенияРаботыСКриптографией|BeginAttachingCryptoExtension\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nУстановитьСоставСтандартногоИнтерфейсаOData|SetStandardODataInterfaceContent|\nПолучитьСоставСтандартногоИнтерфейсаOData|GetStandardODataInterfaceContent\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?i:(?<=[^\\wа-яё\\.]|^)(СоединитьБуферыДвоичныхДанных|ConcatBinaryDataBuffers)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nМин|Min|\nМакс|Max|\nОписаниеОшибки|ErrorDescription|\nВычислить|Eval|\nИнформацияОбОшибке|ErrorInfo|\nBase64Значение|Base64Value|\nBase64Строка|Base64String|\nЗаполнитьЗначенияСвойств|FillPropertyValues|\nЗначениеЗаполнено|ValueIsFilled|\nПолучитьПредставленияНавигационныхСсылок|GetURLsPresentations|\nНайтиОкноПоНавигационнойСсылке|FindWindowByURL|\nПолучитьОкна|GetWindows|\nПерейтиПоНавигационнойСсылке|GotoURL|\nПолучитьНавигационнуюСсылку|GetURL|\nПолучитьДопустимыеКодыЛокализации|GetAvailableLocaleCodes|\nПолучитьНавигационнуюСсылкуИнформационнойБазы|GetInfoBaseURL|\nПредставлениеКодаЛокализации|LocaleCodePresentation|\nПолучитьДопустимыеЧасовыеПояса|GetAvailableTimeZones|\nПредставлениеЧасовогоПояса|TimeZonePresentation|\nТекущаяУниверсальнаяДата|CurrentUniversalDate|\nТекущаяУниверсальнаяДатаВМиллисекундах|CurrentUniversalDateInMilliseconds|\nМестноеВремя|ToLocalTime|\nУниверсальноеВремя|ToUniversalTime|\nЧасовойПояс|TimeZone|\nСмещениеЛетнегоВремени|DaylightTimeOffset|\nСмещениеСтандартногоВремени|StandardTimeOffset|\nКодироватьСтроку|EncodeString|\nРаскодироватьСтроку|DecodeString|\nНайти|Find|\nПродолжитьВызов|ProceedWithCall\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nПередНачаломРаботыСистемы|BeforeStart|\nПриНачалеРаботыСистемы|OnStart|\nПередЗавершениемРаботыСистемы|BeforeExit|\nПриЗавершенииРаботыСистемы|OnExit|\nОбработкаВнешнегоСобытия|ExternEventProcessing|\nУстановкаПараметровСеанса|SessionParametersSetting|\nПриИзмененииПараметровЭкрана|OnChangeDisplaySettings\n)\\s*(?=\\())',
          name: 'support.function.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nWSСсылки|WSReferences|\nБиблиотекаКартинок|PictureLib|\nБиблиотекаМакетовОформленияКомпоновкиДанных|DataCompositionAppearanceTemplateLib|\nБиблиотекаСтилей|StyleLib|\nБизнесПроцессы|BusinessProcesses|\nВнешниеИсточникиДанных|ExternalDataSources|\nВнешниеОбработки|ExternalDataProcessors|\nВнешниеОтчеты|ExternalReports|\nДокументы|Documents|\nДоставляемыеУведомления|DeliverableNotifications|\nЖурналыДокументов|DocumentJournals|\nЗадачи|Tasks|\nИнформацияОбИнтернетСоединении|InternetConnectionInformation|\nИспользованиеРабочейДаты|WorkingDateUse|\nИсторияРаботыПользователя|UserWorkHistory|\nКонстанты|Constants|\nКритерииОтбора|FilterCriteria|\nМетаданные|Metadata|\nОбработки|DataProcessors|\nОтправкаДоставляемыхУведомлений|DeliverableNotificationSend|\nОтчеты|Reports|\nПараметрыСеанса|SessionParameters|\nПеречисления|Enums|\nПланыВидовРасчета|ChartsOfCalculationTypes|\nПланыВидовХарактеристик|ChartsOfCharacteristicTypes|\nПланыОбмена|ExchangePlans|\nПланыСчетов|ChartsOfAccounts|\nПолнотекстовыйПоиск|FullTextSearch|\nПользователиИнформационнойБазы|InfoBaseUsers|\nПоследовательности|Sequences|\nРасширенияКонфигурации|ConfigurationExtensions|\nРегистрыБухгалтерии|AccountingRegisters|\nРегистрыНакопления|AccumulationRegisters|\nРегистрыРасчета|CalculationRegisters|\nРегистрыСведений|InformationRegisters|\nРегламентныеЗадания|ScheduledJobs|\nСериализаторXDTO|XDTOSerializer|\nСправочники|Catalogs|\nСредстваГеопозиционирования|LocationTools|\nСредстваКриптографии|CryptoToolsManager|\nСредстваМультимедиа|MultimediaTools|\nСредстваОтображенияРекламы|AdvertisingPresentationTools|\nСредстваПочты|MailTools|\nСредстваТелефонии|TelephonyTools|\nФабрикаXDTO|XDTOFactory|\nФайловыеПотоки|FileStreams|\nФоновыеЗадания|BackgroundJobs|\nХранилищаНастроек|SettingsStorages|\nВстроенныеПокупки|InAppPurchases|\nОтображениеРекламы|AdRepresentation|\nПанельЗадачОС|OSTaskbar|\nПроверкаВстроенныхПокупок|InAppPurchasesValidation\n)(?=[^\\wа-яё]|$))',
          name: 'support.class.bsl'
        },
        {
          match:
            '(?x)(?i:(?<=[^\\wа-яё\\.]|^)(\nГлавныйИнтерфейс|MainInterface|\nГлавныйСтиль|MainStyle|\nПараметрЗапуска|LaunchParameter|\nРабочаяДата|WorkingDate|\nХранилищеВариантовОтчетов|ReportsVariantsStorage|\nХранилищеНастроекДанныхФорм|FormDataSettingsStorage|\nХранилищеОбщихНастроек|CommonSettingsStorage|\nХранилищеПользовательскихНастроекДинамическихСписков|DynamicListsUserSettingsStorage|\nХранилищеПользовательскихНастроекОтчетов|ReportsUserSettingsStorage|\nХранилищеСистемныхНастроек|SystemSettingsStorage\n)(?=[^\\wа-яё]|$))',
          name: 'support.variable.bsl'
        }
      ]
    },
    query: {
      begin:
        '(?i)(?<=[^\\wа-яё\\.]|^)(Выбрать|Select(\\s+Разрешенные|\\s+Allowed)?(\\s+Различные|\\s+Distinct)?(\\s+Первые|\\s+Top)?)(?=[^\\wа-яё\\.]|$)',
      beginCaptures: {1: {name: 'keyword.control.sdbl'}},
      end: '(?=\\"[^\\"])',
      patterns: [
        {begin: '^\\s*//', end: '$', name: 'comment.line.double-slash.bsl'},
        {
          match: '(//((\\"\\")|[^\\"])*)',
          name: 'comment.line.double-slash.sdbl'
        },
        {match: '\\"\\"[^"]*\\"\\"', name: 'string.quoted.double.sdbl'},
        {include: 'source.sdbl'}
      ]
    }
  },
  scopeName: 'source.bsl'
}

export default grammar
