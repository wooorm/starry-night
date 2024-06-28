// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.monkey', '.monkey2'],
  names: ['monkey'],
  patterns: [
    {match: ';', name: 'punctuation.terminator.line.monkey'},
    {include: '#mnky_comment_quote'},
    {include: '#mnky_comment_block'},
    {include: '#mnky_global_variable'},
    {include: '#mnky_local_variable'},
    {include: '#mnky_constant'},
    {include: '#mnky_attributes'},
    {include: '#mnky_commands'},
    {include: '#mnky_function'},
    {include: '#mnky_method'},
    {
      captures: {
        1: {name: 'keyword.other.import.monkey'},
        2: {name: 'string.unquoted.module.monkey'}
      },
      match: '(?i)\\b(import)\\s+((?:[a-zA-Z_]\\w*\\.?)+)',
      name: 'import.module.monkey'
    },
    {
      begin: '(?i)\\b(import)\\s+(("))',
      beginCaptures: {
        1: {name: 'keyword.other.import.monkey'},
        2: {name: 'punctuation.definition.string.begin.monkey'},
        3: {name: 'string.quoted.double.monkey'}
      },
      contentName: 'string.quoted.double.monkey',
      end: '(")',
      endCaptures: {
        0: {name: 'punctuation.definition.string.end.monkey'},
        1: {name: 'string.quoted.double.monkey'}
      },
      name: 'import.file.monkey',
      patterns: [{include: '#mnky_string_content'}]
    },
    {
      begin:
        '(?i)\\b(class)\\s+([a-zA-Z_]\\w*)(?:\\s+(extends)\\s+([a-zA-Z_]\\w*))?(?:\\s+(final|abstract))?',
      beginCaptures: {
        1: {name: 'storage.type.class.monkey'},
        2: {name: 'entity.name.type.monkey'},
        3: {name: 'storage.modifier.extends.monkey'},
        4: {name: 'entity.other.inherited-class.monkey'},
        5: {name: 'storage.modifier.class.monkey'}
      },
      end: '(?i)\\b(end(\\s?class)?)\\b',
      endCaptures: {1: {name: 'storage.type.class.monkey'}},
      name: 'type.monkey',
      patterns: [
        {include: '#mnky_comment_quote'},
        {include: '#mnky_comment_block'},
        {include: '#mnky_constants'},
        {include: '#mnky_string_quoted'},
        {include: '#mnky_attributes'},
        {include: '#mnky_null'},
        {include: '#mnky_types'},
        {include: '#mnky_typename'},
        {include: '#mnky_global_variable'},
        {include: '#mnky_local_variable'},
        {include: '#mnky_constant'},
        {include: '#mnky_function'},
        {include: '#mnky_method'},
        {include: '#mnky_field'},
        {include: '#mnky_constructor'}
      ]
    },
    {
      match:
        '\\s*\\b(c(ase|ontinue)|do|e(lse(\\s?if)?|nd(class|for(each)?|function|if|method|select|while)|xit)|for(\\s?each)?|if|return|select|then|wend|while)\\b',
      name: 'control.keywords.monkey'
    },
    {include: '#mnky_control_keywords'},
    {
      begin: '(?i)\\b(while)\\b',
      beginCaptures: {1: {name: 'keyword.control.while.monkey'}},
      end: '(?i)\\b(end(\\s?while)?|wend)\\b',
      endCaptures: {1: {name: 'keyword.control.while.end.monkey'}},
      name: 'control.while.monkey',
      patterns: [{include: '$self'}]
    },
    {
      begin: '(?i)\\b(if|then|else|else(\\s?if)?)\\b',
      beginCaptures: {1: {name: 'keyword.control.if.monkey'}},
      end: '(?i)\\b(end(\\s?if)?)\\b',
      endCaptures: {1: {name: 'keyword.control.if.end.monkey'}},
      name: 'control.if.monkey',
      patterns: [
        {match: '(?i)\\b(then)\\b', name: 'keyword.control.then.monkey'},
        {
          match: '(?i)\\b(else(\\s?if)?)\\b',
          name: 'keyword.control.else-if.monkey'
        },
        {match: '(?i)\\b(else)\\b', name: 'keyword.control.else.monkey'},
        {include: '$self'}
      ]
    },
    {
      begin: '(?i)\\b(if)\\b',
      beginCaptures: {1: {name: 'keyword.control.if.monkey'}},
      end: '$',
      endCaptures: {1: {name: 'keyword.control.if.end.monkey'}},
      name: 'control.if-then.monkey',
      patterns: [
        {match: '(?i)\\b(then)\\b', name: 'keyword.control.then.monkey'},
        {include: '$self'}
      ]
    },
    {
      begin: '(?i)\\b(for)\\b',
      beginCaptures: {1: {name: 'keyword.control.for.monkey'}},
      end: '(?i)\\b(next)\\b',
      endCaptures: {1: {name: 'keyword.control.for.end.monkey'}},
      name: 'control.for.monkey',
      patterns: [
        {match: '(?i)\\beachin\\b', name: 'keyword.control.for.eachin.monkey'},
        {match: '(?i)\\bto\\b', name: 'keyword.control.for.to.monkey'},
        {match: '(?i)\\buntil\\b', name: 'keyword.control.for.until.monkey'},
        {match: '(?i)\\bstep\\b', name: 'keyword.control.for.step.monkey'},
        {include: '$self'}
      ]
    },
    {
      begin: '(?i)\\b(repeat)\\b',
      beginCaptures: {1: {name: 'keyword.control.repeat.monkey'}},
      end: '(?i)\\b(until|forever)\\b',
      endCaptures: {1: {name: 'keyword.control.repeat.end.monkey'}},
      name: 'control.repeat.monkey',
      patterns: [{include: '$self'}]
    },
    {
      begin: '(?i)\\b(select)\\b',
      beginCaptures: {1: {name: 'keyword.control.select.monkey'}},
      end: '(?i)\\b(end(\\s?select)?)\\b',
      endCaptures: {1: {name: 'keyword.control.select.end.monkey'}},
      name: 'control.select.monkey',
      patterns: [
        {
          captures: {1: {name: 'keyword.control.select.case.monkey'}},
          match: '(?i)\\b(case)\\b',
          name: 'control.select.case.monkey'
        },
        {
          captures: {1: {name: 'keyword.control.select.default.monkey'}},
          match: '(?i)\\b(default)\\b',
          name: 'control.select.default.monkey'
        },
        {include: '$self'}
      ]
    },
    {
      match: '(?i)\\b(mod|shl|shr|and|or|not)\\b',
      name: 'keyword.operator.monkey'
    },
    {match: ':?[\\^+\\-&~|=><]', name: 'keyword.operator.monkey'},
    {match: '(?i)\\b(private|public)\\b', name: 'keyword.other.scope.monkey'},
    {match: '(?i)\\b(strict)\\b', name: 'keyword.other.strictness.monkey'},
    {include: '#mnky_null'},
    {include: '#mnky_types'},
    {include: '#mnky_constants'},
    {include: '#mnky_string_quoted'},
    {match: '(?i)\\b(self)\\b', name: 'variable.language.self.monkey'},
    {match: '(?i)\\b(super)\\b', name: 'variable.language.super.monkey'},
    {include: '#mnky_constructor'},
    {include: '#mnky_array'},
    {include: '#mnky_typename'}
  ],
  repository: {
    mnky_array: {
      begin: '(\\[)',
      beginCaptures: {1: {name: 'keyword.operator.array.monkey'}},
      end: '(\\])',
      endCaptures: {1: {name: 'keyword.operator.array.monkey'}},
      name: 'array.monkey',
      patterns: [{include: '$self'}]
    },
    mnky_attributes: {
      begin: '(\\{)',
      beginCaptures: {1: {name: 'storage.modifier.attributes.braces.monkey'}},
      end: '(\\})',
      endCaptures: {1: {name: 'storage.modifier.attributes.braces.monkey'}},
      name: 'attributes.monkey',
      patterns: [
        {
          begin: '\\b([a-zA-Z_]\\w*)\\s*(=)\\s*',
          beginCaptures: {1: {name: 'entity.other.attribute-name.monkey'}},
          end: '(?=\\s|\\}|[a-zA-Z_])',
          name: 'attribute.monkey',
          patterns: [
            {include: '#mnky_string_quoted'},
            {include: '#mnky_numbers'}
          ]
        },
        {
          captures: {1: {name: 'entity.other.attribute-name.monkey'}},
          match: '\\b([a-zA-Z_]\\w*)(?:\\s*((?!=)|(?=\\})))',
          name: 'attribute.monkey'
        }
      ]
    },
    mnky_boolean: {
      match: '(?i)\\b(true|false)\\b',
      name: 'constant.language.boolean.monkey'
    },
    mnky_char: {
      match:
        '\\b(CHAR_(TAB|BACKSPACE|ENTER|ESCAPE|PAGE(UP|DOWN)|END|HOME|LEFT|UP|RIGHT|DOWN|INSERT|DELETE))\\b',
      name: 'constant.language.char.monkey'
    },
    mnky_commands: {
      match:
        '(?i)\\b(A(bstract|Cos|Sin|Tan|Tan2|bs|ccel(X|Y|Z)|dd(First|Last)|pp|rray)|B(ackwards|ool)|C(ase|eil|hannelState|l(amp|s)|o(mpare|nst|nt(ains|inue)|py|s|unt)|lear)|D(e(faultFlags|vice(Height|Width))|iscard|raw(Circle|Ellipse|Image|ImageRect|Line|Oval|Point|Poly|Rect|Text))|E(achin|xt(ends|ern)|nd|ndsWith|rror|xit)|F(alse|i(eld|nd|ndLast|rst)|loat(Map|Set)|loor|or(ever)|rames|romChar)|G(et|et(Alpha|Blend|Char|Color|Font|Matrix|Scissor)|lobal|rabImage)|H(andle(X|Y)|eight)|I(m(age|p(lements|ort))|n(clude|line|t(erface|Map|Set))|sEmpty)|Jo(in|y(Down|Hit|X|Y|Z))|Key|Key(Down|Hit|s)|L(ast|ength|ist|o(g|ad(Image|Sound|State|String)|cal))|M(ap|ax|ethod|i(llisecs|n)|o(d(ule)|use(Down|Hit|X|Y))|in)|N(ative|e(w|xt)|o(de)|ull)|O(bject(Enumerator)|n(Create|Loading|Render|Resume|Suspend|Update))|P(laySound|o(pMatrix|w)|r(i(nt|vate)|operty)|u(blic|shMatrix))|R(e(move|move(Each|First|Last)|p(eat|lace)|turn)|nd|otate)|S(aveState|cale|e(ed|lect|lf|t(Alpha|Blend|Channel(Pan|Rate|Volume)|Color|Font|Handle|Image|List|Matrix|Scissor|UpdateRate))|gn|h(l|r)|in|ound|plit|qrt|t(artsWith|ep|opChannel|ri(ct|ng(Map|Set)))|uper)|T(an|hen|o(Lower|Upper|uch(Down|Hit|X|Y))|r(ans(form|late)|im|ue))|Until|V(alue|alue(ForKey|s)|oid)|Width)\\b',
      name: 'keyword.other.commands.monkey'
    },
    mnky_comment_block: {
      begin: '(?i)(?<=\\s|^|;)\\#rem\\b',
      end: '(?i)(?<=\\s|^|;)\\#end\\b',
      name: 'comment.block.rem.monkey',
      patterns: [{include: '#mnky_url_content'}]
    },
    mnky_comment_quote: {
      begin: "'",
      end: '$',
      name: 'comment.line.apostrophe.monkey',
      patterns: [{include: '#mnky_url_content'}]
    },
    mnky_constant: {
      captures: {
        1: {name: 'keyword.other.new.monkey'},
        2: {name: 'constant.monkey'}
      },
      match: '(?i)\\b(const)\\s+([a-zA-Z_]\\w*)\\b',
      name: 'constant.monkey'
    },
    mnky_constants: {
      name: 'constants.monkey',
      patterns: [
        {include: '#mnky_pi'},
        {include: '#mnky_boolean'},
        {include: '#mnky_numbers'},
        {include: '#mnky_joy'},
        {include: '#mnky_key'},
        {include: '#mnky_mouse'},
        {include: '#mnky_char'},
        {include: '#mnky_env'}
      ]
    },
    mnky_constructor: {
      captures: {
        1: {name: 'keyword.other.new.monkey'},
        2: {name: 'storage.type.class.monkey'}
      },
      match: '(?i)\\b(new)\\s+([a-zA-Z_]\\w*)\\b',
      name: 'call.constructor.monkey'
    },
    mnky_control_keywords: {
      match: '(?i)\\b(throw|return|exit|continue)\\b',
      name: 'keyword.control.monkey'
    },
    mnky_env: {
      match: '\\b(TARGET|LANG)\\b',
      name: 'constant.language.env.monkey'
    },
    mnky_field: {
      captures: {1: {name: 'keyword.other.variable.field.monkey'}},
      match: '(?i)\\b(field)\\s+([a-zA-Z_]\\w*)+\\b',
      name: 'variable.field.monkey'
    },
    mnky_function: {
      begin: '(?i)\\b(function)\\s+([a-zA-Z_]\\w*)\\b',
      beginCaptures: {
        1: {name: 'storage.type.function.monkey'},
        2: {name: 'entity.name.function.monkey'}
      },
      end: '(?i)\\b(end(\\s?function)?)\\b',
      endCaptures: {1: {name: 'storage.type.function.monkey'}},
      name: 'function.monkey',
      patterns: [{include: '$self'}]
    },
    mnky_global_variable: {
      captures: {1: {name: 'storage.modifier.global.monkey'}},
      match: '(?i)\\b(global)\\s+([a-zA-Z_]\\w*)\\b',
      name: 'variable.monkey'
    },
    mnky_joy: {
      match: '\\bJOY_(A|B|X|Y|LB|RB|BACK|START|LEFT|UP|RIGHT|DOWN)\\b',
      name: 'constant.language.joy.monkey'
    },
    mnky_key: {
      match:
        '\\bKEY_(BACKSPACE|TAB|ENTER|ESCAPE|SPACE|SHIFT|CONTROL|PAGEUP|PAGEDOWN|END|HOME|LEFT|UP|RIGHT|DOWN|INSERT|DELETE|F([0-9]|1[0-2])|[0-9]|[A-Z]|TILDE|MINUS|EQUALS|OPENBRACKET|CLOSEBRACKET|BACKSLASH|SEMICOLON|QUOTES|COMMA|PERIOD|SLASH|(L|R|M)MB)|TOUCH([0-9]|[1-2][0-9]|3[0-2])\\b',
      name: 'constant.language.key.monkey'
    },
    mnky_local_variable: {
      captures: {1: {name: 'keyword.other.variable.local.monkey'}},
      match: '(?i)\\b(local)\\s+([a-zA-Z_]\\w*)\\b',
      name: 'variable.monkey'
    },
    mnky_method: {
      begin: '(?i)\\b(method)\\s+([a-zA-Z_]\\w*)\\b',
      beginCaptures: {
        1: {name: 'storage.type.method.monkey'},
        2: {name: 'entity.name.method.monkey'}
      },
      end: '(?i)\\b(end(\\s?method)?)\\b',
      endCaptures: {1: {name: 'storage.type.method.monkey'}},
      name: 'method.monkey',
      patterns: [{include: '$self'}]
    },
    mnky_mouse: {
      match: '\\bMOUSE_(LEFT|RIGHT|MIDDLE)\\b',
      name: 'constant.language.mouse.monkey'
    },
    mnky_null: {match: '(?i)\\bnull\\b', name: 'constant.language.null.monkey'},
    mnky_numbers: {
      patterns: [
        {
          match: '(\\$[0-9a-fA-F]{1,16})',
          name: 'constant.numeric.integer.hexadecimal.monkey'
        },
        {
          match:
            '(?x) (?<! \\$ ) (\n\t\t\t\t\t\t\t\\b ([0-9]+ \\. [0-9]+) |\n\t\t\t\t\t\t\t(\\. [0-9]+)\n\t\t\t\t\t\t)',
          name: 'constant.numeric.float.monkey'
        },
        {match: '(?x)\\b(([0-9]+))', name: 'constant.numeric.integer.monkey'}
      ]
    },
    mnky_pi: {match: '\\b(HALF|TWO)?PI\\b', name: 'constant.language.monkey'},
    mnky_string_content: {
      patterns: [
        {match: '\\~[^"]', name: 'constant.character.escape.monkey'},
        {include: '#mnky_url_content'}
      ]
    },
    mnky_string_quoted: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.monkey'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.monkey'}},
      name: 'string.quoted.double.monkey',
      patterns: [{include: '#mnky_string_content'}]
    },
    mnky_typename: {
      captures: {
        1: {name: 'storage.type.monkey'},
        2: {name: 'storage.type.monkey'}
      },
      match: '(?xi)(?: \\: \\s* ([a-zA-Z_]\\w*) | ([!#%]|@{1,2}|\\$[zw]?) )',
      name: 'typename.monkey'
    },
    mnky_types: {
      match: '(?i)\\b(array|bool|int|float|string)\\b',
      name: 'storage.type.monkey'
    },
    mnky_url_content: {
      match: '[a-zA-Z_]\\w*://[^ "\'()\\[\\]]*(?=$|\\b)',
      name: 'url.monkey'
    }
  },
  scopeName: 'source.monkey'
}

export default grammar
