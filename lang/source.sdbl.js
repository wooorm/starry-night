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
  extensions: [],
  names: [],
  patterns: [
    {match: '(^\\s*//.*$)', name: 'comment.line.double-slash.sdbl'},
    {begin: '//', end: '$', name: 'comment.line.double-slash.sdbl'},
    {
      begin: '\\"',
      end: '\\"(?![\\"])',
      name: 'string.quoted.double.sdbl',
      patterns: [
        {match: '\\"\\"', name: 'constant.character.escape.sdbl'},
        {match: '(^\\s*//.*$)', name: 'comment.line.double-slash.sdbl'}
      ]
    },
    {
      match:
        '(?i)(?<=[^\\wа-яё\\.]|^)(Неопределено|Undefined|Истина|True|Ложь|False|NULL)(?=[^\\wа-яё\\.]|$)',
      name: 'constant.language.sdbl'
    },
    {
      match: '(?<=[^\\wа-яё\\.]|^)(\\d+\\.?\\d*)(?=[^\\wа-яё\\.]|$)',
      name: 'constant.numeric.sdbl'
    },
    {
      match:
        '(?i)(?<=[^\\wа-яё\\.]|^)(Выбор|Case|Когда|When|Тогда|Then|Иначе|Else|Конец|End)(?=[^\\wа-яё\\.]|$)',
      name: 'keyword.control.conditional.sdbl'
    },
    {
      match:
        '(?i)(?<!КАК\\s|AS\\s)(?<=[^\\wа-яё\\.]|^)(НЕ|NOT|И|AND|ИЛИ|OR|В\\s+ИЕРАРХИИ|IN\\s+HIERARCHY|В|In|Между|Between|Есть(\\s+НЕ)?\\s+NULL|Is(\\s+NOT)?\\s+NULL|Ссылка|Refs|Подобно|Like)(?=[^\\wа-яё\\.]|$)',
      name: 'keyword.operator.logical.sdbl'
    },
    {match: '<=|>=|=|<|>', name: 'keyword.operator.comparison.sdbl'},
    {match: '(\\+|-|\\*|/|%)', name: 'keyword.operator.arithmetic.sdbl'},
    {match: '(,|;)', name: 'keyword.operator.sdbl'},
    {
      match:
        '(?i)(?<=[^\\wа-яё\\.]|^)(Выбрать|Select|Разрешенные|Allowed|Различные|Distinct|Первые|Top|Как|As|ПустаяТаблица|EpmtyTable|Поместить|Into|Уничтожить|Drop|Из|From|((Левое|Left|Правое|Right|Полное|Full)\\s+(Внешнее\\s+|Outer\\s+)?Соединение|Join)|((Внутреннее|Inner)\\s+Соединение|Join)|Где|Where|(Сгруппировать\\s+По)|(Group\\s+By)|Имеющие|Having|Объединить(\\s+Все)?|Union(\\s+All)?|(Упорядочить\\s+По)|(Order\\s+By)|Автоупорядочивание|Autoorder|Итоги|Totals|По(\\s+Общие)?|By(\\s+Overall)?|(Только\\s+)?Иерархия|(Only\\s+)?Hierarchy|Периодами|Periods|Индексировать|Index|Выразить|Cast|Возр|Asc|Убыв|Desc|Для\\s+Изменения|(For\\s+Update(\\s+Of)?)|Спецсимвол|Escape)(?=[^\\wа-яё\\.]|$)',
      name: 'keyword.control.sdbl'
    },
    {
      match:
        '(?i)(?<=[^\\wа-яё\\.]|^)(Значение|Value|ДатаВремя|DateTime|Тип|Type)(?=\\()',
      name: 'support.function.sdbl'
    },
    {
      match: '(?i)(?<=[^\\wа-яё\\.]|^)(Подстрока|Substring)(?=\\()',
      name: 'support.function.sdbl'
    },
    {
      match:
        '(?i)(?<=[^\\wа-яё\\.]|^)(Год|Year|Квартал|Quarter|Месяц|Month|ДеньГода|DayOfYear|День|Day|Неделя|Week|ДеньНедели|Weekday|Час|Hour|Минута|Minute|Секунда|Second|НачалоПериода|BeginOfPeriod|КонецПериода|EndOfPeriod|ДобавитьКДате|DateAdd|РазностьДат|DateDiff)(?=\\()',
      name: 'support.function.sdbl'
    },
    {
      match:
        '(?i)(?<=[^\\wа-яё\\.]|^)(Сумма|Sum|Среднее|Avg|Минимум|Min|Максимум|Max|Количество|Count)(?=\\()',
      name: 'support.function.sdbl'
    },
    {
      match:
        '(?i)(?<=[^\\wа-яё\\.]|^)(ЕстьNULL|IsNULL|Представление|Presentation|ПредставлениеСсылки|RefPresentation|ТипЗначения|ValueType)(?=\\()',
      name: 'support.function.sdbl'
    },
    {
      match:
        '(?i)(?<=[^\\wа-яё\\.])(Число|Number|Строка|String|Дата|Date)(?=[^\\wа-яё\\.]|$)',
      name: 'support.type.sdbl'
    },
    {match: '(&[\\wа-яё]+)', name: 'variable.parameter.sdbl'}
  ],
  scopeName: 'source.sdbl'
}

export default grammar
