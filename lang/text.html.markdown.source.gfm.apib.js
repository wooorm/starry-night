// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/apiaryio/api-blueprint-sublime-plugin>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.js', 'text.html.markdown.source.gfm.mson'],
  extensions: ['.apib'],
  names: ['api-blueprint'],
  patterns: [
    {include: '#blueprint_group'},
    {include: '#blueprint_data_structures'},
    {include: '#blueprint_action'},
    {include: '#blueprint_resource'},
    {include: '#blueprint_shorthand'},
    {
      begin:
        '([-+*]) (?:([Rr]equest)|([Rr]esponse)) (?:(\\d+)|([^\\(]+))?(?: (\\(.*\\/+json(?:[ ;\\/]+.*)?\\)))+',
      beginCaptures: {
        1: {name: 'variable.unordered.list.gfm'},
        2: {
          name: 'markup.heading.markdown punctuation.definition.heading.bold'
        },
        3: {name: 'markup.italic.markdown'},
        4: {name: 'constant.numeric'},
        5: {name: 'keyword.other'},
        6: {name: 'variable.language.fenced.markdown'}
      },
      end: '^(?=\\S)',
      name: 'blueprint.response.json',
      patterns: [
        {include: '#http-headers'},
        {include: '#mson-block'},
        {
          begin: '([-+*]) [Bb]ody',
          beginCaptures: {1: {name: 'variable.unordered.list.gfm'}},
          end: '^(?=(?=\\S)|(?=\\s+\\+))',
          patterns: [{include: 'source.js'}]
        },
        {include: '#response-unstyled-section'},
        {include: 'source.js'}
      ]
    },
    {
      begin:
        '([-+*]) ([Rr]equest|[Rr]esponse) (\\d+)?(?: (\\(.*\\/+xml(?:[ ;\\/]+.*)?\\)))+',
      beginCaptures: {
        1: {name: 'variable.unordered.list.gfm'},
        3: {name: 'constant.numeric'},
        4: {name: 'variable.language.fenced.markdown'}
      },
      end: '^(?=\\S)',
      name: 'blueprint.response.xml',
      patterns: [
        {include: '#http-headers'},
        {include: '#mson-block'},
        {
          begin: '([-+*]) [Bb]ody',
          beginCaptures: {1: {name: 'variable.unordered.list.gfm'}},
          end: '^(?=(?=\\S)|(?=\\s+\\+))',
          patterns: [{include: 'text.xml'}]
        },
        {include: '#response-unstyled-section'},
        {include: 'text.xml'}
      ]
    },
    {
      begin: '([-+*]) ([Rr]equest|[Rr]esponse) ?(\\d+)?(?: (\\(.*\\))+)?',
      beginCaptures: {
        1: {name: 'variable.unordered.list.gfm'},
        3: {name: 'constant.numeric'},
        4: {name: 'variable.language.fenced.markdown'}
      },
      end: '^(?=\\S)',
      name: 'blueprint.response',
      patterns: [
        {include: '#http-headers'},
        {include: '#mson-block'},
        {include: '#response-unstyled-section'}
      ]
    },
    {include: '#mson-block'},
    {include: '#gfm'}
  ],
  repository: {
    blueprint_action: {
      captures: {
        1: {name: 'markup.quote'},
        2: {name: 'meta.link.inet.markdown markup.underline.link.markdown'}
      },
      match: '^#{1,6} .*\\[(HEAD|GET|PUT|POST|PATCH|DELETE)(.*)\\]\\n?',
      name: 'markup.heading.markdown punctuation.definition.heading.markdown'
    },
    blueprint_data_structures: {
      begin: '^(#{1,6} [Dd]ata [Ss]tructures)',
      captures: {
        1: {
          name: 'markup.heading.markdown punctuation.definition.heading.markdown'
        }
      },
      end: '^(?=#\\s)',
      patterns: [{include: 'text.html.markdown.source.gfm.mson'}]
    },
    blueprint_group: {
      match: '^#{1,6} [Gg]roup.*\\n?',
      name: 'markup.heading.markdown punctuation.definition.heading.markdown'
    },
    blueprint_resource: {
      captures: {
        1: {name: 'meta.link.inet.markdown markup.underline.link.markdown'}
      },
      match: '^#{1,6} .*\\[(.*)\\]\\n?',
      name: 'markup.heading.markdown punctuation.definition.heading.markdown'
    },
    blueprint_shorthand: {
      captures: {
        2: {name: 'meta.link.inet.markdown markup.underline.link.markdown'}
      },
      match: '^#{1,6} (HEAD|GET|PUT|POST|PATCH|DELETE) (.*)\\n?',
      name: 'markup.heading.markdown punctuation.definition.heading.markdown'
    },
    gfm: {
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.gfm'},
        {
          begin: '(?<=^|[^\\w\\d\\*])\\*\\*\\*(?!$|\\*|\\s)',
          end: '(?<!^|\\s)\\*\\*\\**\\*(?=$|[^\\w|\\d])',
          name: 'markup.bold.italic.gfm'
        },
        {
          begin: '(?<=^|[^\\w\\d_])___(?!$|_|\\s)',
          end: '(?<!^|\\s)___*_(?=$|[^\\w|\\d])',
          name: 'markup.bold.italic.gfm'
        },
        {
          begin: '(?<=^|[^\\w\\d\\*])\\*\\*(?!$|\\*|\\s)',
          end: '(?<!^|\\s)\\*\\**\\*(?=$|[^\\w|\\d])',
          name: 'markup.bold.gfm'
        },
        {
          begin: '(?<=^|[^\\w\\d_])__(?!$|_|\\s)',
          end: '(?<!^|\\s)__*_(?=$|[^\\w|\\d])',
          name: 'markup.bold.gfm'
        },
        {
          begin: '(?<=^|[^\\w\\d\\*])\\*(?!$|\\*|\\s)',
          end: '(?<!^|\\s)\\**\\*(?=$|[^\\w|\\d])',
          name: 'markup.italic.gfm'
        },
        {
          begin: '(?<=^|[^\\w\\d_\\{\\}])_(?!$|_|\\s)',
          end: '(?<!^|\\s)_*_(?=$|[^\\w|\\d])',
          name: 'markup.italic.gfm'
        },
        {
          begin: '(?<=^|[^\\w\\d~])~~(?!$|~|\\s)',
          end: '(?<!^|\\s)~~*~(?=$|[^\\w|\\d])',
          name: 'markup.strike.gfm'
        },
        {
          begin: '^(#{6})(\\s*)',
          captures: {
            1: {name: 'markup.heading.marker.gfm'},
            2: {name: 'markup.heading.space.gfm'}
          },
          end: '$',
          name: 'markup.heading.heading-6.gfm',
          patterns: [{include: '$self'}]
        },
        {
          begin: '^(#{5})(\\s*)',
          captures: {
            1: {name: 'markup.heading.marker.gfm'},
            2: {name: 'markup.heading.space.gfm'}
          },
          end: '$',
          name: 'markup.heading.heading-5.gfm',
          patterns: [{include: '$self'}]
        },
        {
          begin: '^(#{4})(\\s*)',
          captures: {
            1: {name: 'markup.heading.marker.gfm'},
            2: {name: 'markup.heading.space.gfm'}
          },
          end: '$',
          name: 'markup.heading.heading-4.gfm',
          patterns: [{include: '$self'}]
        },
        {
          begin: '^(#{3})(\\s*)',
          captures: {
            1: {name: 'markup.heading.marker.gfm'},
            2: {name: 'markup.heading.space.gfm'}
          },
          end: '$',
          name: 'markup.heading.heading-3.gfm',
          patterns: [{include: '$self'}]
        },
        {
          begin: '^(#{2})(\\s*)',
          captures: {
            1: {name: 'markup.heading.marker.gfm'},
            2: {name: 'markup.heading.space.gfm'}
          },
          end: '$',
          name: 'markup.heading.heading-2.gfm',
          patterns: [{include: '$self'}]
        },
        {
          begin: '^(#{1})(\\s*)',
          captures: {
            1: {name: 'markup.heading.marker.gfm'},
            2: {name: 'markup.heading.space.gfm'}
          },
          end: '$',
          name: 'markup.heading.heading-1.gfm',
          patterns: [{include: '$self'}]
        },
        {
          captures: {
            1: {name: 'string.emoji.start.gfm'},
            2: {name: 'string.emoji.word.gfm'},
            3: {name: 'string.emoji.end.gfm'}
          },
          match:
            '(:)(\\+1|\\-1|100|1234|8ball|a|ab|abc|abcd|accept|aerial_tramway|airplane|alarm_clock|alien|ambulance|anchor|angel|anger|angry|anguished|ant|apple|aquarius|aries|arrow_backward|arrow_double_down|arrow_double_up|arrow_down|arrow_down_small|arrow_forward|arrow_heading_down|arrow_heading_up|arrow_left|arrow_lower_left|arrow_lower_right|arrow_right|arrow_right_hook|arrow_up|arrow_up_down|arrow_up_small|arrow_upper_left|arrow_upper_right|arrows_clockwise|arrows_counterclockwise|art|articulated_lorry|astonished|atm|b|baby|baby_bottle|baby_chick|baby_symbol|back|baggage_claim|balloon|ballot_box_with_check|bamboo|banana|bangbang|bank|bar_chart|barber|baseball|basketball|bath|bathtub|battery|bear|bee|beer|beers|beetle|beginner|bell|bento|bicyclist|bike|bikini|bird|birthday|black_circle|black_joker|black_medium_small_square|black_medium_square|black_nib|black_small_square|black_square|black_square_button|blossom|blowfish|blue_book|blue_car|blue_heart|blush|boar|boat|bomb|book|bookmark|bookmark_tabs|books|boom|boot|bouquet|bow|bowling|bowtie|boy|bread|bride_with_veil|bridge_at_night|briefcase|broken_heart|bug|bulb|bullettrain_front|bullettrain_side|bus|busstop|bust_in_silhouette|busts_in_silhouette|cactus|cake|calendar|calling|camel|camera|cancer|candy|capital_abcd|capricorn|car|card_index|carousel_horse|cat|cat2|cd|chart|chart_with_downwards_trend|chart_with_upwards_trend|checkered_flag|cherries|cherry_blossom|chestnut|chicken|children_crossing|chocolate_bar|christmas_tree|church|cinema|circus_tent|city_sunrise|city_sunset|cl|clap|clapper|clipboard|clock1|clock10|clock1030|clock11|clock1130|clock12|clock1230|clock130|clock2|clock230|clock3|clock330|clock4|clock430|clock5|clock530|clock6|clock630|clock7|clock730|clock8|clock830|clock9|clock930|closed_book|closed_lock_with_key|closed_umbrella|cloud|clubs|cn|cocktail|coffee|cold_sweat|collision|computer|confetti_ball|confounded|confused|congratulations|construction|construction_worker|convenience_store|cookie|cool|cop|copyright|corn|couple|couple_with_heart|couplekiss|cow|cow2|credit_card|crocodile|crossed_flags|crown|cry|crying_cat_face|crystal_ball|cupid|curly_loop|currency_exchange|curry|custard|customs|cyclone|dancer|dancers|dango|dart|dash|date|de|deciduous_tree|department_store|diamond_shape_with_a_dot_inside|diamonds|disappointed|disappointed_relieved|dizzy|dizzy_face|do_not_litter|dog|dog2|dollar|dolls|dolphin|donut|door|doughnut|dragon|dragon_face|dress|dromedary_camel|droplet|dvd|e\\-mail|ear|ear_of_rice|earth_africa|earth_americas|earth_asia|egg|eggplant|eight|eight_pointed_black_star|eight_spoked_asterisk|electric_plug|elephant|email|end|envelope|es|euro|european_castle|european_post_office|evergreen_tree|exclamation|expressionless|eyeglasses|eyes|facepunch|factory|fallen_leaf|family|fast_forward|fax|fearful|feelsgood|feet|ferris_wheel|file_folder|finnadie|fire|fire_engine|fireworks|first_quarter_moon|first_quarter_moon_with_face|fish|fish_cake|fishing_pole_and_fish|fist|five|flags|flashlight|floppy_disk|flower_playing_cards|flushed|foggy|football|fork_and_knife|fountain|four|four_leaf_clover|fr|free|fried_shrimp|fries|frog|frowning|fu|fuelpump|full_moon|full_moon_with_face|game_die|gb|gem|gemini|ghost|gift|gift_heart|girl|globe_with_meridians|goat|goberserk|godmode|golf|grapes|green_apple|green_book|green_heart|grey_exclamation|grey_question|grimacing|grin|grinning|guardsman|guitar|gun|haircut|hamburger|hammer|hamster|hand|handbag|hankey|hash|hatched_chick|hatching_chick|headphones|hear_no_evil|heart|heart_decoration|heart_eyes|heart_eyes_cat|heartbeat|heartpulse|hearts|heavy_check_mark|heavy_division_sign|heavy_dollar_sign|heavy_exclamation_mark|heavy_minus_sign|heavy_multiplication_x|heavy_plus_sign|helicopter|herb|hibiscus|high_brightness|high_heel|hocho|honey_pot|honeybee|horse|horse_racing|hospital|hotel|hotsprings|hourglass|hourglass_flowing_sand|house|house_with_garden|hurtrealbad|hushed|ice_cream|icecream|id|ideograph_advantage|imp|inbox_tray|incoming_envelope|information_desk_person|information_source|innocent|interrobang|iphone|it|izakaya_lantern|jack_o_lantern|japan|japanese_castle|japanese_goblin|japanese_ogre|jeans|joy|joy_cat|jp|key|keycap_ten|kimono|kiss|kissing|kissing_cat|kissing_closed_eyes|kissing_face|kissing_heart|kissing_smiling_eyes|koala|koko|kr|large_blue_circle|large_blue_diamond|large_orange_diamond|last_quarter_moon|last_quarter_moon_with_face|laughing|leaves|ledger|left_luggage|left_right_arrow|leftwards_arrow_with_hook|lemon|leo|leopard|libra|light_rail|link|lips|lipstick|lock|lock_with_ink_pen|lollipop|loop|loudspeaker|love_hotel|love_letter|low_brightness|m|mag|mag_right|mahjong|mailbox|mailbox_closed|mailbox_with_mail|mailbox_with_no_mail|man|man_with_gua_pi_mao|man_with_turban|mans_shoe|maple_leaf|mask|massage|meat_on_bone|mega|melon|memo|mens|metal|metro|microphone|microscope|milky_way|minibus|minidisc|mobile_phone_off|money_with_wings|moneybag|monkey|monkey_face|monorail|moon|mortar_board|mount_fuji|mountain_bicyclist|mountain_cableway|mountain_railway|mouse|mouse2|movie_camera|moyai|muscle|mushroom|musical_keyboard|musical_note|musical_score|mute|nail_care|name_badge|neckbeard|necktie|negative_squared_cross_mark|neutral_face|new|new_moon|new_moon_with_face|newspaper|ng|nine|no_bell|no_bicycles|no_entry|no_entry_sign|no_good|no_mobile_phones|no_mouth|no_pedestrians|no_smoking|non\\-potable_water|nose|notebook|notebook_with_decorative_cover|notes|nut_and_bolt|o|o2|ocean|octocat|octopus|oden|office|ok|ok_hand|ok_woman|older_man|older_woman|on|oncoming_automobile|oncoming_bus|oncoming_police_car|oncoming_taxi|one|open_file_folder|open_hands|open_mouth|ophiuchus|orange_book|outbox_tray|ox|package|page_facing_up|page_with_curl|pager|palm_tree|panda_face|paperclip|parking|part_alternation_mark|partly_sunny|passport_control|paw_prints|peach|pear|pencil|pencil2|penguin|pensive|performing_arts|persevere|person_frowning|person_with_blond_hair|person_with_pouting_face|phone|pig|pig2|pig_nose|pill|pineapple|pisces|pizza|plus1|point_down|point_left|point_right|point_up|point_up_2|police_car|poodle|poop|post_office|postal_horn|postbox|potable_water|pouch|poultry_leg|pound|pouting_cat|pray|princess|punch|purple_heart|purse|pushpin|put_litter_in_its_place|question|rabbit|rabbit2|racehorse|radio|radio_button|rage|rage1|rage2|rage3|rage4|railway_car|rainbow|raised_hand|raised_hands|raising_hand|ram|ramen|rat|recycle|red_car|red_circle|registered|relaxed|relieved|repeat|repeat_one|restroom|revolving_hearts|rewind|ribbon|rice|rice_ball|rice_cracker|rice_scene|ring|rocket|roller_coaster|rooster|rose|rotating_light|round_pushpin|rowboat|ru|rugby_football|runner|running|running_shirt_with_sash|sa|sagittarius|sailboat|sake|sandal|santa|satellite|satisfied|saxophone|school|school_satchel|scissors|scorpius|scream|scream_cat|scroll|seat|secret|see_no_evil|seedling|seven|shaved_ice|sheep|shell|ship|shipit|shirt|shit|shoe|shower|signal_strength|six|six_pointed_star|ski|skull|sleeping|sleepy|slot_machine|small_blue_diamond|small_orange_diamond|small_red_triangle|small_red_triangle_down|smile|smile_cat|smiley|smiley_cat|smiling_imp|smirk|smirk_cat|smoking|snail|snake|snowboarder|snowflake|snowman|sob|soccer|soon|sos|sound|space_invader|spades|spaghetti|sparkle|sparkler|sparkles|sparkling_heart|speak_no_evil|speaker|speech_balloon|speedboat|squirrel|star|star2|stars|station|statue_of_liberty|steam_locomotive|stew|straight_ruler|strawberry|stuck_out_tongue|stuck_out_tongue_closed_eyes|stuck_out_tongue_winking_eye|sun_with_face|sunflower|sunglasses|sunny|sunrise|sunrise_over_mountains|surfer|sushi|suspect|suspension_railway|sweat|sweat_drops|sweat_smile|sweet_potato|swimmer|symbols|syringe|tada|tanabata_tree|tangerine|taurus|taxi|tea|telephone|telephone_receiver|telescope|tennis|tent|thought_balloon|three|thumbsdown|thumbsup|ticket|tiger|tiger2|tired_face|tm|toilet|tokyo_tower|tomato|tongue|top|tophat|tractor|traffic_light|train|train2|tram|triangular_flag_on_post|triangular_ruler|trident|triumph|trolleybus|trollface|trophy|tropical_drink|tropical_fish|truck|trumpet|tshirt|tulip|turtle|tv|twisted_rightwards_arrows|two|two_hearts|two_men_holding_hands|two_women_holding_hands|u5272|u5408|u55b6|u6307|u6708|u6709|u6e80|u7121|u7533|u7981|u7a7a|uk|umbrella|unamused|underage|unlock|up|us|v|vertical_traffic_light|vhs|vibration_mode|video_camera|video_game|violin|virgo|volcano|vs|walking|waning_crescent_moon|waning_gibbous_moon|warning|watch|water_buffalo|watermelon|wave|wavy_dash|waxing_crescent_moon|waxing_gibbous_moon|wc|weary|wedding|whale|whale2|wheelchair|white_check_mark|white_circle|white_flower|white_large_square|white_medium_small_square|white_medium_square|white_small_square|white_square_button|wind_chime|wine_glass|wink|wolf|woman|womans_clothes|womans_hat|womens|worried|wrench|x|yellow_heart|yen|yum|zap|zero|zzz)(:)',
          name: 'string.emoji.gfm'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.entity.gfm'},
            2: {name: 'punctuation.definition.entity.gfm'}
          },
          match: '(&)[a-zA-Z0-9]+(;)',
          name: 'constant.character.entity.gfm'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.entity.gfm'},
            2: {name: 'punctuation.definition.entity.gfm'}
          },
          match: '(&)#[0-9]+(;)',
          name: 'constant.character.entity.gfm'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.entity.gfm'},
            2: {name: 'punctuation.definition.entity.gfm'}
          },
          match: '(&)#x[0-9a-fA-F]+(;)',
          name: 'constant.character.entity.gfm'
        },
        {
          begin: '\\A---$',
          captures: {0: {name: 'comment.hr.gfm'}},
          end: '^(---|\\.\\.\\.)$',
          name: 'front-matter.yaml.gfm',
          patterns: [{include: 'source.yaml'}]
        },
        {match: '^\\s*[*]{3,}\\s*$', name: 'comment.hr.gfm'},
        {match: '^\\s*[-]{3,}\\s*$', name: 'comment.hr.gfm'},
        {
          begin: '^\\s*[`~]{3,}\\s*coffee-?(script)?\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.coffee',
          end: '^\\s*[`~]{3,}$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.coffee.gfm',
          patterns: [{include: 'source.coffee'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*(javascript|js)\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.js',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.js.gfm',
          patterns: [{include: 'source.js'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*(markdown|mdown|md)\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.gfm',
          patterns: [{include: '$self'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*json\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.json',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.json.gfm',
          patterns: [{include: 'source.json'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*css\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.css',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.css.gfm',
          patterns: [{include: 'source.css'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*less\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.css.less',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.less.gfm',
          patterns: [{include: 'source.css.less'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*xml\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'text.xml',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.xml.gfm',
          patterns: [{include: 'text.xml'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*(ruby|rb)\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.ruby',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.ruby.gfm',
          patterns: [{include: 'source.ruby'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*java\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.java',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.java.gfm',
          patterns: [{include: 'source.java'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*erlang\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.erlang',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.erlang.gfm',
          patterns: [{include: 'source.erlang'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*go(lang)?\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.go',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.go.gfm',
          patterns: [{include: 'source.go'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*cs(harp)?\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.cs',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.cs.gfm',
          patterns: [{include: 'source.cs'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*php\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.php',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.php.gfm',
          patterns: [{include: 'text.html.php'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*(sh|bash)\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.shell',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.shell.gfm',
          patterns: [{include: 'source.shell'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*py(thon)?\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.python',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.python.gfm',
          patterns: [{include: 'source.python'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*c\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.c',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.c.gfm',
          patterns: [{include: 'source.c'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*c(pp|\\+\\+)\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.cpp',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.cpp.gfm',
          patterns: [{include: 'source.c++'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*(objc|objective-c)\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.objc',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.objc.gfm',
          patterns: [{include: 'source.objc'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*html\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.html.basic',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.html.gfm',
          patterns: [{include: 'text.html.basic'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*ya?ml\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.yaml',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.yaml.gfm',
          patterns: [{include: 'source.yaml'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*elixir\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.elixir',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.elixir.gfm',
          patterns: [{include: 'source.elixir'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*(diff|patch|rej)\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.diff',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.diff.gfm',
          patterns: [{include: 'source.diff'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*julia\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.julia',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.julia.gfm',
          patterns: [{include: 'source.julia'}]
        },
        {
          begin: '^\\s*([`~]{3,})\\s*r\\s*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          contentName: 'source.r',
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.code.r.gfm',
          patterns: [{include: 'source.r'}]
        },
        {
          begin: '^\\s*([`~]{3,}).*$',
          beginCaptures: {0: {name: 'support.gfm'}},
          end: '^\\s*\\1$',
          endCaptures: {0: {name: 'support.gfm'}},
          name: 'markup.raw.gfm'
        },
        {
          begin: '(`+)(?!$)',
          end: '\\1',
          name: 'markup.raw.gfm markup.raw.inline'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.begin.gfm'},
            10: {name: 'markup.underline.link.gfm'},
            11: {name: 'punctuation.definition.begin.gfm'},
            12: {name: 'punctuation.definition.end.gfm'},
            13: {name: 'markup.underline.link.gfm'},
            14: {name: 'punctuation.definition.begin.gfm'},
            15: {name: 'punctuation.definition.end.gfm'},
            2: {name: 'punctuation.definition.begin.gfm'},
            3: {name: 'entity.gfm'},
            4: {name: 'punctuation.definition.end.gfm'},
            5: {name: 'markup.underline.link.gfm'},
            6: {name: 'punctuation.definition.begin.gfm'},
            7: {name: 'punctuation.definition.end.gfm'},
            8: {name: 'punctuation.definition.end.gfm'}
          },
          match:
            '(\\[!)(\\[)([^\\]]*)(\\])((\\()[^\\)]+(\\)))(\\])(((\\()[^\\)]+(\\)))|((\\[)[^\\]]+(\\])))',
          name: 'link'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.begin.gfm'},
            10: {name: 'markup.underline.link.gfm'},
            11: {name: 'punctuation.definition.begin.gfm'},
            12: {name: 'punctuation.definition.end.gfm'},
            13: {name: 'markup.underline.link.gfm'},
            14: {name: 'punctuation.definition.begin.gfm'},
            15: {name: 'punctuation.definition.end.gfm'},
            2: {name: 'punctuation.definition.begin.gfm'},
            3: {name: 'entity.gfm'},
            4: {name: 'punctuation.definition.end.gfm'},
            5: {name: 'markup.underline.link.gfm'},
            6: {name: 'punctuation.definition.begin.gfm'},
            7: {name: 'punctuation.definition.end.gfm'},
            8: {name: 'punctuation.definition.end.gfm'}
          },
          match:
            '(\\[!)(\\[)([^\\]]*)(\\])((\\[)[^\\)]+(\\]))(\\])(((\\()[^\\)]+(\\)))|((\\[)[^\\]]+(\\])))',
          name: 'link'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.begin.gfm'},
            2: {name: 'entity.gfm'},
            3: {name: 'punctuation.definition.end.gfm'},
            4: {name: 'markup.underline.link.gfm'},
            5: {name: 'punctuation.definition.begin.gfm'},
            6: {name: 'punctuation.definition.end.gfm'}
          },
          match: '!?(\\[)([^\\]]*)(\\])((\\()[^\\)]+(\\)))',
          name: 'link'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.begin.gfm'},
            2: {name: 'entity.gfm'},
            3: {name: 'punctuation.definition.end.gfm'},
            4: {name: 'markup.underline.link.gfm'},
            5: {name: 'punctuation.definition.begin.gfm'},
            6: {name: 'punctuation.definition.end.gfm'}
          },
          match: '!?(\\[)([^\\]]*)(\\])((\\[)[^\\]]*(\\]))',
          name: 'link'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.begin.gfm'},
            2: {name: 'entity.gfm'},
            3: {name: 'punctuation.definition.end.gfm'},
            4: {name: 'markup.underline.link.gfm'}
          },
          match: '^\\s*(\\[)([^\\]]+)(\\])\\s*:\\s*<([^>]+)>',
          name: 'link'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.begin.gfm'},
            2: {name: 'entity.gfm'},
            3: {name: 'punctuation.definition.end.gfm'},
            4: {name: 'punctuation.separator.key-value.gfm'},
            5: {name: 'markup.underline.link.gfm'}
          },
          match: '^\\s*(\\[)([^\\]]+)(\\])\\s*(:)\\s*(\\S+)',
          name: 'link'
        },
        {
          captures: {1: {name: 'variable.unordered.list.gfm'}},
          match: '^\\s*([*+-])[ \\t]+'
        },
        {
          captures: {1: {name: 'variable.ordered.list.gfm'}},
          match: '^\\s*(\\d+\\.)[ \\t]+'
        },
        {
          begin: '^\\s*(>)',
          beginCaptures: {1: {name: 'support.quote.gfm'}},
          end: '^\\s*?$',
          name: 'comment.quote.gfm',
          patterns: [{include: '$self'}]
        },
        {
          captures: {
            1: {name: 'variable.mention.gfm'},
            2: {name: 'string.username.gfm'}
          },
          match: '(?<=^|\\s|"|\'|\\(|\\[)(@)(\\w[-\\w:]*)(?=[\\s"\'.,;\\)\\]])'
        },
        {
          captures: {
            1: {name: 'variable.issue.tag.gfm'},
            2: {name: 'string.issue.number.gfm'}
          },
          match: '(?<=^|\\s|"|\'|\\(|\\[)(#)(\\d+)(?=[\\s"\'\\.,;\\)\\]])'
        },
        {captures: {1: {name: 'linebreak.gfm'}}, match: '(  )$'},
        {
          begin: '<!--',
          captures: {0: {name: 'punctuation.definition.comment.gfm'}},
          end: '--\\s*>',
          name: 'comment.block.gfm'
        },
        {
          begin: '^\\|',
          captures: {0: {name: 'border.pipe.outer'}},
          end: '\\|$',
          name: 'table.gfm',
          patterns: [
            {
              captures: {
                1: {name: 'border.alignment'},
                2: {name: 'border.header'},
                3: {name: 'border.alignment'}
              },
              match: '(:?)(-+)(:?)'
            },
            {match: '\\|', name: 'border.pipe.inner'}
          ]
        }
      ]
    },
    'http-headers': {
      begin: '([-+*]) [Hh]eaders',
      beginCaptures: {1: {name: 'variable.unordered.list.gfm'}},
      end: '^(?=(?=\\S)|(?=\\s+\\+))',
      patterns: [
        {
          captures: {1: {name: 'keyword'}, 2: {name: 'header-value'}},
          match: '(.*?):(.*)'
        }
      ]
    },
    'mson-block': {
      patterns: [
        {
          begin: '^([-+*]) ([Aa]ttributes|[Pp]arameters)',
          beginCaptures: {1: {name: 'variable.unordered.list.gfm'}},
          end: '^(?=\\S)',
          name: 'mson-block',
          patterns: [{include: 'text.html.markdown.source.gfm.mson'}]
        },
        {
          begin: '^(\\s+)([-+*]) ([Aa]ttributes|[Pp]arameters)',
          beginCaptures: {2: {name: 'variable.unordered.list.gfm'}},
          end: '^(?!\\1|\\n)|(?=\\1[-+*])',
          name: 'mson-block',
          patterns: [{include: 'text.html.markdown.source.gfm.mson'}]
        }
      ]
    },
    'response-unstyled-section': {
      begin: '([-+*])',
      beginCaptures: {1: {name: 'variable.unordered.list.gfm'}},
      end: '^(?=(?=\\S)|(?=\\s+[-+*]))'
    }
  },
  scopeName: 'text.html.markdown.source.gfm.apib'
}

export default grammar
