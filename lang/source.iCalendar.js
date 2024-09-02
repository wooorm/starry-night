// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/kimsey0/iCalendar-sublime>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.ics', '.ical'],
  names: ['icalendar', 'ical'],
  patterns: [
    {match: '^(BEGIN|END)', name: 'keyword.command.icalObject'},
    {
      match: ':(VCALENDAR|VEVENT|VTODO|VJOURNAL|VFREEBUSY|VTIMEZONE|VALARM)$',
      name: 'constant.language.icalObjectType'
    },
    {match: ':(DAYLIGHT|STANDARD)$', name: 'constant.language.icalObjectType'},
    {
      match: '^(DTSTART|PRODID|VERSION|CALSCALE|METHOD)',
      name: 'keyword.other.icalProperty'
    },
    {
      match: '^(DTEND|DTSTAMP|ORGANIZER|UID|CLASS|CREATED)',
      name: 'keyword.other.icalProperty'
    },
    {
      match: '^(LOCATION|SEQUENCE|STATUS|SUMMARY|COMMENT)',
      name: 'keyword.other.icalProperty'
    },
    {
      match: '^(TRANSP|ATTENDEE|ATTACH|FREEBUSY|METHOD|CONTACT)',
      name: 'keyword.other.icalProperty'
    },
    {
      match: '^(DURATION|RRULE|EXDATE|EXRULE|URL|DESCRIPTION|ACTION)',
      name: 'keyword.other.icalProperty'
    },
    {
      match: '^(LAST-MODIFIED|RECURRENCE-ID|TRIGGER|RELATED-TO|RDATE)',
      name: 'keyword.other.icalProperty'
    },
    {
      match: '^(TZID|TZOFFSETFROM|TZOFFSETTO|TZNAME|TZURL)',
      name: 'keyword.other.icalProperty'
    },
    {
      match: '^(PRIORITY|DUE|COMPLETED|PERCENT-COMPLETE|CATEGORIES)',
      name: 'keyword.other.icalProperty'
    },
    {
      match: '^(RESOURCES|REPEAT|REQUEST-STATUS)',
      name: 'keyword.other.icalProperty'
    },
    {match: '^X-[A-Z-]+', name: 'keyword.other.icalCustom'},
    {match: '[0-9]{8}T[0-9]{6}Z?', name: 'string.interpolated.icalDate'},
    {match: '[A-Z0-9-]+=[^;:]+', name: 'variable.parameter.icalParameter'},
    {
      match: '(CONFIRMED|TENTATIVE|CANCELLED|DELEGATED|OPAQUE)',
      name: 'constant.other.icalSetValue'
    },
    {
      match: '(NEEDS-ACTION|ACCEPTED|DECLINED|IN-PROGRESS)',
      name: 'constant.other.icalSetValue'
    },
    {
      match: '(PRIVATE|PUBLIC|PUBLISH|GREGORIAN|DISPLAY)',
      name: 'constant.other.icalSetValue'
    },
    {match: ':COMPLETED$', name: 'constant.other.icalSetValue'}
  ],
  scopeName: 'source.iCalendar'
}

export default grammar
