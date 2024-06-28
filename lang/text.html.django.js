// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.html.basic'],
  extensions: ['.jinja', '.j2', '.jinja2'],
  names: ['jinja', 'django', 'html+django', 'html+jinja', 'htmldjango'],
  patterns: [
    {include: 'text.html.basic'},
    {
      begin: '{% comment %}',
      end: '{% endcomment %}',
      name: 'comment.block.django.template'
    },
    {begin: '{#', end: '#}', name: 'comment.line.django.template'},
    {
      begin: '{{',
      end: '}}',
      name: 'meta.tag.template.variable.django.template',
      patterns: [
        {
          match: '[\\S&&[^}]]+',
          name: 'variable.other.readwrite.django.template'
        }
      ]
    },
    {
      begin: '({%)',
      captures: {1: {name: 'entity.other.django.tagbraces'}},
      end: '(%})',
      name: 'meta.scope.django.template.tag',
      patterns: [
        {
          match:
            '\\b(autoescape|endautoescape|block|endblock|trans|blocktrans|endblocktrans|plural|debug|extends|filter|firstof|for|endfor|if|include|else|endif|ifchanged|endifchanged|ifequal|endifequal|ifnotequal|endifnotequal|load|now|regroup|ssi|spaceless|templatetag|widthratio)\\b',
          name: 'keyword.control.django.template'
        },
        {
          match: '\\b(and|or|not|in|by|as)\\b',
          name: 'keyword.operator.django.template'
        },
        {
          match:
            '\\|(add|addslashes|capfirst|center|cut|date|default|default_if_none|dictsort|dictsortreversed|divisibleby|escape|filesizeformat|first|fix_ampersands|floatformat|get_digit|join|length|length_is|linebreaks|linebreaksbr|linenumbers|ljust|lower|make_list|phone2numeric|pluralize|pprint|random|removetags|rjust|safe|slice|slugify|stringformat|striptags|time|timesince|title|truncatewords|unordered_list|upper|urlencode|urlize|urlizetrunc|wordcount|wordwrap|yesno)\\b',
          name: 'support.function.filter.django'
        },
        {begin: '(\'|")', end: '\\1', name: 'string.other.django.template.tag'},
        {match: '[a-zA-Z_]+', name: 'string.unquoted.django.template.tag'}
      ]
    }
  ],
  scopeName: 'text.html.django'
}

export default grammar
