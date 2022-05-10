// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Dreae/sourcepawn-vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.sp', '.inc'],
  names: ['sourcepawn', 'sourcemod'],
  patterns: [
    {include: '#keywords'},
    {include: '#strings'},
    {include: '#comments'},
    {include: '#builtIns'},
    {
      captures: {
        1: {name: 'keyword.other.sourcepawn'},
        2: {name: 'string.sourcepawn'}
      },
      match: '(\\#include|\\#tryinclude)\\s([<"](.+)[>"])',
      name: 'meta.include.sourcepawn'
    },
    {
      captures: {
        1: {name: 'keyword.other.sourcepawn'},
        2: {name: 'support.constant.core.sourcepawn'}
      },
      match: '(\\#define)\\s(\\w+)',
      name: 'meta.define.sourcepawn'
    },
    {
      match:
        '#(if|else|endif|emit|pragma|deprecated|undef|endinput|endscript|assert|define|error|warning|file)',
      name: 'keyword.other.sourcepawn'
    },
    {
      match: '\\b(?:bool|char|const|float|int|void|any)\\b',
      name: 'support.type.core.sourcepawn'
    },
    {
      captures: {1: {name: 'entity.name.function.sourcepawn'}},
      match: '\\b([A-Za-z_][A-Za-z0-9_]*)\\s*\\('
    },
    {match: '\\b\\[.+]\\b', name: 'meta.brackets.sourcepawn'},
    {match: '\\b[0-9]+\\.[0-9]+\\b', name: 'constant.numeric.float.sourcepawn'},
    {match: '\\b[0-9]+\\b', name: 'constant.numeric.integer.sourcepawn'},
    {match: '\\b0b[0-1]+\\b', name: 'constant.numeric.sourcepawn'},
    {match: '\\b0o[0-7]+\\b', name: 'constant.numeric.sourcepawn'},
    {match: '\\b0x[0-9a-fA-F]+\\b', name: 'constant.numeric.sourcepawn'},
    {
      match: '\\b(?:true|false)\\b',
      name: 'constant.language.boolean.sourcepawn'
    }
  ],
  repository: {
    builtIns: {
      patterns: [
        {include: '#constants'},
        {
          match:
            '\\b(?:Action|AmbientSHook|NormalSHook|Timer|AdminId|GroupId|AdminFlag|OverrideType|OverrideRule|AdminCachePart|AdmAccessMode|CookieAccess|CookieMenu|CookieMenuAction|CookieMenuHandler|AuthIdType|NetFlow|QueryCookie|Extension|SharedPlugin|ReplySource|CommandListener|ConCmd|SrvCmd|ConVarBounds|ConVar_Bounds|ConVarQueryResult|ConVarChanged|ConVarQueryFinished|Identity|ImmunityType|PluginInfo|PluginStatus|CSRoundEndReason|CSWeaponID|EventHook|DataPackPos|DBBindType|DBPriority|DBResult|PropFieldType|PropType|MoveType|RenderFx|RenderMode|EventHookMode|FileTimeMode|FileType|PathType|ExecType|ParamType|ClientRangeType|DialogType|EngineVersion|FindMapResult|KvDataTypes|MapChange|NominateResult|MenuAction|MenuSource|SQLConnectCallback|SQLQueryCallback|SQLTCallback|SQLTxnFailure|SQLTxnSuccess|GameLogHook|EntityOutput|MenuStyle|SDKHookCB|MenuHandler|VoteHandler|MultiTargetFilter|PlVers|RegexError|SDKHookType|UseType|SDKCallType|SDKFuncConfSource|TEHook|SortFunc1D|SortFunc2D|SortFuncADTArray|SDKLibrary|TraceEntityFilter|SDKPassMethod|SDKType|RoundState|RayType|ListenOverride|SortOrder|SortType|Address|APLRes|FeatureStatus|FeatureType|NumberType|TopMenuHandler|MsgHook|MsgPostHook|NativeCall|RequestFrameCallback|SMC_EndSection|SMC_KeyValue|SMC_NewSection|SMC_ParseEnd|SMC_ParseStart|SMC_RawLine|SMCError|SMCResult|TFClassType|TFCond|TFHoliday|TFObjectMode|TFObjectType|TFTeam|TFResourceType|TopMenuAction|TopMenuObject|TopMenuObjectType|TopMenuPosition|UserMessageType|UserMsg)\\b',
          name: 'support.type.core.sourcepawn'
        },
        {
          match:
            '\\b(?:ArrayList|ArrayStack|StringMap|StringMapSnapshot|BfRead|BfWrite|DataPack)\\b',
          name: 'support.type.core.sourcepawn'
        },
        {
          match:
            '\\b(?:Plugin|Handle|ConVar|Cookie|Database|DBDriver|DBResultSet|DBStatement|GameData|Transaction|Event|File|DirectoryListing|KeyValues|Menu|Panel|Protobuf|Regex|SMCParser|TopMenu|Timer|FrameIterator|GlobalForward|PrivateForward|Profiler)\\b',
          name: 'support.type.core.sourcepawn'
        }
      ]
    },
    comments: {
      patterns: [
        {match: '\\/\\/.*', name: 'comment.sourcepawn'},
        {
          begin: '/\\*',
          captures: {0: {name: 'comment.sourcepawn'}},
          end: '\\*/',
          name: 'comment.block.sourcepawn'
        }
      ]
    },
    constants: {
      patterns: [
        {
          match:
            '\\b(?:MAXPLAYERS|MaxClients|REQUIRE_PLUGIN|REQUIRE_EXTENSIONS|MAX_NAME_LENGTH|MAX_TARGET_LENGTH|INVALID_FCVAR_FLAGS|NULL_VECTOR|NULL_STRING|AUTOLOAD_EXTENSIONS|PLATFORM_MAX_PATH|Path_SM|SP_PARAMFLAG_BYREF|INVALID_ENT_REFERENCE|INVALID_HANDLE|null|LANG_SERVER|PB_FIELD_NOT_REPEATED|MAX_LIGHTSTYLES|FEATURECAP_PLAYERRUNCMD_11PARAMS|INVALID_STRING_TABLE|INVALID_STRING_INDEX|INVALID_TOPMENUOBJECT|INVALID_MESSAGE_ID|QUERYCOOKIE_FAILED)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bADMFLAG_(?:RESERVATION|GENERIC|KICK|BAN|UNBAN|SLAY|CHANGEMAP|CONVARS|CONFIG|CHAT|VOTE|PASSWORD|RCON|CHEATS|ROOT|CUSTOM1|CUSTOM2|CUSTOM3|CUSTOM4|CUSTOM5|CUSTOM6)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bAUTHMETHOD_(?:STEAM|IP|NAME)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bINVALID_(?:GROUP_ID|ADMIN_ID)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bADMINMENU_(?:PLAYERCOMMANDS|SERVERCOMMANDS|VOTINGCOMMANDS)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bBANFLAG_(?:AUTO|IP|AUTHID|NOKICK)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bCOMMAND_FILTER_(?:ALIVE|DEAD|CONNECTED|NO_IMMUNITY|NO_MULTI|NO_BOTS)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bCOMMAND_TARGET_(?:NONE|NOT_ALIVE|NOT_DEAD|NOT_IN_GAME|IMMUNE|EMPTY_FILTER|NOT_HUMAN|AMBIGUOUS)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bFL_(?:EDICT_CHANGED|EDICT_FREE|EDICT_FULL|EDICT_FULLCHECK|EDICT_ALWAYS|EDICT_DONTSEND|EDICT_PVSCHECK|EDICT_PENDING_DORMANT_CHECK|EDICT_DIRTY_PVS_INFORMATION|FULL_EDICT_CHANGED)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\b(?:MOVETYPE_NONE|MOVETYPE_ISOMETRIC|MOVETYPE_WALK|MOVETYPE_STEP|MOVETYPE_FLY|MOVETYPE_FLYGRAVITY|MOVETYPE_VPHYSICS|MOVETYPE_PUSH|MOVETYPE_NOCLIP|MOVETYPE_LADDER|MOVETYPE_OBSERVER|MOVETYPE_CUSTOM)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bRENDER_(?:NORMAL|TRANSCOLOR|TRANSTEXTURE|GLOW|TRANSALPHA|TRANSADD|ENVIRONMENTAL|TRANSADDFRAMEBLEND|TRANSALPHAADD|WORLDGLOW|NONE)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bRENDERFX_(?:NONE|PULSE_SLOW|PULSE_FAST|PULSE_SLOW_WIDE|PULSE_FAST_WIDE|FADE_SLOW|FADE_FAST|SOLID_SLOW|SOLID_FAST|STROBE_SLOW|STROBE_FAST|STROBE_FASTER|FLICKER_SLOW|FLICKER_FAST|NO_DISSIPATION|DISTORT|HOLOGRAM|EXPLODE|GLOWSHELL|CLAMP_MIN_SCALE|ENV_RAIN|ENV_SNOW|SPOTLIGHT|RAGDOLL|PULSE_FAST_WIDER|MAX)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bIN_(?:ATTACK|JUMP|DUCK|FORWARD|BACK|USE|CANCEL|LEFT|RIGHT|MOVELEFT|MOVERIGHT|ATTACK2|RUN|RELOAD|ALT1|ALT2|SCORE|SPEED|WALK|ZOOM|WEAPON1|WEAPON2|BULLRUSH|GRENADE1|GRENADE2|ATTACK3)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bFL_(?:ONGROUND|DUCKING|WATERJUMP|ONTRAIN|INRAIN|FROZEN|ATCONTROLS|CLIENT|FAKECLIENT|PLAYER_FLAG_BITS|INWATER|FLY|SWIM|CONVEYOR|NPC|GODMODE|NOTARGET|AIMTARGET|PARTIALGROUND|STATICPROP|GRAPHED|GRENADE|STEPMOVEMENT|DONTTOUCH|BASEVELOCITY|WORLDBRUSH|OBJECT|KILLME|ONFIRE|DISSOLVING|TRANSRAGDOLL|UNBLOCKABLE_BY_PLAYER|FREEZING|EP2V_UNKNOWN1)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bSEEK_(?:SET|CUR|END)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bSM_PARAM_(?:COPYBACK|STRING_UTF8|STRING_COPY|STRING_BINARY)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bSP_ERROR_(?:NONE|FILE_FORMAT|DECOMPRESSOR|HEAPLOW|PARAM|INVALID_ADDRESS|NOT_FOUND|INDEX|STACKLOW|NOTDEBUGGING|INVALID_INSTRUCTION|MEMACCESS|STACKMIN|HEAPMIN|DIVIDE_BY_ZERO|ARRAY_BOUNDS|INSTRUCTION_PARAM|STACKLEAK|HEAPLEAK|ARRAY_TOO_BIG|TRACKER_BOUNDS|INVALID_NATIVE|PARAMS_MAX|NATIVE|NOT_RUNNABLE|ABORTED)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bSOURCE_SDK_(?:UNKNOWN|ORIGINAL|DARKMESSIAH|EPISODE1|EPISODE2|BLOODYGOODTIME|EYE|CSS|EPISODE2VALVE|LEFT4DEAD|LEFT4DEAD2|ALIENSWARM|CSGO|DOTA)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bMOTDPANEL_(?:TYPE_TEXT|TYPE_INDEX|TYPE_URL|TYPE_FILE)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bMENU_(?:ACTIONS_DEFAULT|ACTIONS_ALL|NO_PAGINATION|TIME_FOREVER)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bITEMDRAW_(?:DEFAULT|DISABLED|RAWLINE|NOTEXT|SPACER|IGNORE|CONTROL)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bMENUFLAG_(?:BUTTON_EXIT|BUTTON_EXITBACK|NO_SOUND|BUTTON_NOVOTE)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bVOTEINFO_(?:CLIENT_INDEX|CLIENT_ITEM|ITEM_INDEX|ITEM_VOTES)|VOTEFLAG_NO_REVOTES\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bPCRE_(?:CASELESS|MULTILINE|DOTALL|EXTENDED|ANCHORED|DOLLAR_ENDONLY|UNGREEDY|NOTEMPTY|UTF8|NO_UTF8_CHECK|UCP)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bVDECODE_FLAG_(?:ALLOWNULL|ALLOWNOTINGAME|ALLOWWORLD|BYREF)|VENCODE_FLAG_COPYBACK\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bSOUND_FROM_(?:PLAYER|LOCAL_PLAYER|WORLD)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bSNDCHAN_(?:REPLACE|AUTO|WEAPON|VOICE|ITEM|BODY|STREAM|STATIC|VOICE_BASE|USER_BASE)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bSND_(?:NOFLAGS|CHANGEVOL|CHANGEPITCH|STOP|SPAWNING|DELAY|STOPLOOPING|SPEAKER|SHOULDPAUSE)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bSNDLEVEL_(?:NONE|RUSTLE|WHISPER|LIBRARY|FRIDGE|HOME|CONVO|DRYER|DISHWASHER|CAR|NORMAL|TRAFFIC|MINIBIKE|SCREAMING|TRAIN|HELICOPTER|SNOWMOBILE|AIRCRAFT|RAIDSIREN|GUNFIRE|ROCKET)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\b(?:SNDVOL_NORMAL|SNDPITCH_NORMAL|SNDPITCH_LOW|SNDPITCH_HIGH|SNDATTN_NONE|SNDATTN_NORMAL|SNDATTN_STATIC|SNDATTN_RICOCHET|SNDATTN_IDLE)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bTE_EXPLFLAG_(?:NONE|NOADDITIVE|NODLIGHTS|NOSOUND|NOPARTICLES|DRAWALPHA|ROTATE|NOFIREBALL|NOFIREBALLSMOKE)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bFBEAM_(?:STARTENTITY|ENDENTITY|FADEIN|FADEOUT|SINENOISE|SOLID|SHADEIN|SHADEOUT|ONLYNOISEONCE|NOTILE|USE_HITBOXES|STARTVISIBLE|ENDVISIBLE|ISACTIVE|FOREVER|HALOBEAM)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bCONTENTS_(?:EMPTY|SOLID|WINDOW|AUX|GRATE|SLIME|WATER|MIST|OPAQUE|LAST_VISIBLE_CONTENTS|ALL_VISIBLE_CONTENTS|TESTFOGVOLUME|UNUSED5|UNUSED6|TEAM1|TEAM2|IGNORE_NODRAW_OPAQUE|MOVEABLE|AREAPORTAL|PLAYERCLIP|MONSTERCLIP|CURRENT_0|CURRENT_90|CURRENT_180|CURRENT_270|CURRENT_UP|CURRENT_DOWN|ORIGIN|MONSTER|DEBRIS|DETAIL|TRANSLUCENT|LADDER|HITBOX)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bMASK_(?:ALL|SOLID|PLAYERSOLID|NPCSOLID|WATER|OPAQUE|OPAQUE_AND_NPCS|VISIBLE|VISIBLE_AND_NPCS|SHOT|SHOT_HULL|SHOT_PORTAL|SOLID_BRUSHONLY|PLAYERSOLID_BRUSHONLY|NPCSOLID_BRUSHONLY|NPCWORLDSTATIC|SPLITAREAPORTAL)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bVOICE_(?:NORMAL|MUTED|SPEAKALL|LISTENALL|TEAM|LISTENTEAM)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bTF_STUNFLAG(?:_SLOWDOWN|_BONKSTUCK|_LIMITMOVEMENT|_CHEERSOUND|_NOSOUNDOREFFECT|_THIRDPERSON|_GHOSTEFFECT|S_LOSERSTATE|S_GHOSTSCARE|S_SMALLBONK|S_NORMALBONK|S_BIGBONK)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bTF_CONDFLAG_(?:NONE|SLOWED|ZOOMED|DISGUISING|DISGUISED|CLOAKED|UBERCHARGED|TELEPORTGLOW|TAUNTING|UBERCHARGEFADE|CLOAKFLICKER|TELEPORTING|KRITZKRIEGED|DEADRINGERED|BONKED|DAZED|BUFFED|CHARGING|DEMOBUFF|CRITCOLA|INHEALRADIUS|HEALING|ONFIRE|OVERHEALED|JARATED|BLEEDING|DEFENSEBUFFED|MILKED|MEGAHEAL|REGENBUFFED|MARKEDFORDEATH)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bTF_DEATHFLAG_(?:KILLERDOMINATION|ASSISTERDOMINATION|KILLERREVENGE|ASSISTERREVENGE|FIRSTBLOOD|DEADRINGER|INTERRUPTED|GIBBED|PURGATORY)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bUSERMSG_(?:RELIABLE|INITMSG|BLOCKHOOKS)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bSOURCEMOD_(?:V_TAG|V_REV|V_CSET|V_MAJOR|V_MINOR|V_RELEASE|VERSION)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bDBPrio_(?:High|Normal|Low)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\b(?:TIMER_REPEAT|TIMER_FLAG_NO_MAPCHANGE|TIMER_HNDL_CLOSE|TIMER_DATA_HNDL_CLOSE)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bDMG_(?:GENERIC|CRUSH|BULLET|SLASH|BURN|VEHICLE|FALL|BLAST|CLUB|SHOCK|SONIC|ENERGYBEAM|PREVENT_PHYSICS_FORCE|NEVERGIB|ALWAYSGIB|DROWN|PARALYZE|NERVEGAS|POISON|RADIATION|DROWNRECOVER|ACID|SLOWBURN|REMOVENORAGDOLL|PHYSGUN|PLASMA|AIRBOAT|DISSOLVE|BLAST_SURFACE|DIRECT|BUCKSHOT|CRIT)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bCS_(?:TEAM_NONE|TEAM_SPECTATOR|TEAM_T|TEAM_CT|SLOT_PRIMARY|SLOT_SECONDARY|SLOT_KNIFE|SLOT_GRENADE|SLOT_C4|DMG_HEADSHOT)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bFCVAR_(?:PLUGIN|LAUNCHER|NONE|UNREGISTERED|DEVELOPMENTONLY|GAMEDLL|CLIENTDLL|MATERIAL_SYSTEM|HIDDEN|PROTECTED|SPONLY|ARCHIVE|NOTIFY|USERINFO|PRINTABLEONLY|UNLOGGED|FCVAR_NEVER_AS_STRING|REPLICATED|CHEAT|SS|DEMO|DONTRECORD|SS_ADDED|RELEASE|RELOAD_MATERIALS|RELOAD_TEXTURES|NOT_CONNECTED|MATERIAL_SYSTEM_THREAD|ARCHIVE_XBOX|ARCHIVE_GAMECONSOLE|ACCESSIBLE_FROM_THREADS|SERVER_CAN_EXECUTE|SERVER_CANNOT_QUERY|CLIENTCMD_CAN_EXECUTE)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bPlugin_(?:Handled|Continue|Stop|Changed)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\b(?:Identity_Core|Identity_Extension|Identity_Plugin)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bPlugin_(?:Running|Paused|Error|Loaded|Failed|Created|Uncompiled|BadLoad|Evicted)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bAdmin_(?:Reservation|Generic|Kick|Ban|Unban|Slay|Changemap|Convars|Config|Chat|Vote|Password|RCON|Cheats|Root|Custom1|Custom2|Custom3|Custom4|Custom5|Custom6)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bAccess_(?:Real|Effective)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\b(?:AdminCache_Overrides|AdminCache_Groups|AdminCache_Admins)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\b(?:CookieAccess_Public|CookieAccess_Protected|CookieAccess_Private)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bCookieMenu_(?:YesNo|YesNo_Int|OnOff|OnOff_Int)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bCookieMenuAction_(?:DisplayOption|SelectOption)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bSM_REPLY_TO_(?:CONSOLE|CHAT)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bConVarBound_(?:Upper|Lower)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bConVarQuery_(?:Okay|NotFound|NotValid|Protected)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bPlInfo_(?:Name|Author|Description|Version|URL)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bDBVal_(?:Error|TypeMismatch|Null|Data)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bDBBind_(?:Int|Float|String)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bProp_(?:Send|Data)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bPropField_(?:Unsupported|Integer|Float|Entity|Vector|String|String_T)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bEventHookMode_(?:Pre|Post|PostNoCopy)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bFileType_(?:Unknown|Directory|File)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bFileTime_(?:LastAccess|Created|LastChange)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bParam_(?:Any|Cell|Float|String|Array|VarArgs|CellByRef|FloatByRef)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bET_(?:Ignore|Single|Event|Hook)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bDialogType_(?:Msg|Menu|Text|Entry|AskConnect)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bEngine_(?:Unknown|Original|SourceSDK2006|SourceSDK2007|Left4Dead|DarkMessiah|Left4Dead2|AlienSwarm|BloodyGoodTime|EYE|Portal2|CSGO|CSS|DOTA|HL2DM|DODS|TF2|NuclearDawn|SDK2013|Blade|Insurgency|Contagion|BlackMesa)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bFindMap_(?:Found|NotFound|FuzzyMatch|NonCanonical|PossiblyAvailable)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bKvData_(?:None|String|Int|Float|Ptr|WString|Color|UInt64|NUMTYPES)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bNominate_(?:Added|Replaced|AlreadyInVote|InvalidMap|VoteFull)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bMapChange_(?:Instant|RoundEnd|MapEnd)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bMenuStyle_(?:Default|Valve|Radio)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bMenuCancel_(?:Disconnected|Interrupted|Exit|NoDisplay|Timeout|ExitBack)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bVoteCancel_(?:Generic|NoVotes)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bMenuEnd_(?:Selected|VotingDone|VotingCancelled|Cancelled|Exit|ExitBack)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bMenuSource_(?:None|External|Normal|RawPanel)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bREGEX_ERROR_(?:NONE|NOMATCH|NULL|BADOPTION|BADMAGIC|UNKNOWN_OPCODE|NOMEMORY|NOSUBSTRING|MATCHLIMIT|CALLOUT|BADUTF8|BADUTF8_OFFSET|PARTIAL|BADPARTIAL|INTERNAL|BADCOUNT|DFA_UITEM|DFA_UCOND|DFA_UMLIMIT|DFA_WSSIZE|DFA_RECURSE|RECURSIONLIMIT|NULLWSLIMIT|BADNEWLINE|BADOFFSET|SHORTUTF8|RECURSELOOP|JIT_STACKLIMIT|BADMODE|BADENDIANNESS|DFA_BADRESTART|JIT_BADOPTION|BADLENGTH)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bUse_(?:Off|On|Set|Toggle)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bSDKCall_(?:Static|Entity|Player|GameRules|EntityList|Raw)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bSDKLibrary_(?:Server|Engine)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bSDKConf_(?:Virtual|Signature|Address)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bSDKType_(?:CBaseEntity|CBasePlayer|Vector|QAngle|PlainOldData|Float|Edict|String|Bool)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bSDKPass_(?:Pointer|Plain|ByValue|ByRef)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bRoundState_(?:Init|Pregame|StartGame|Preround|RoundRunning|TeamWin|Restart|Stalemate|GameOver|Bonus|BetweenRounds)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bSMCParse_(?:Continue|Halt|HaltFail)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bSMCError_(?:Okay|StreamOpen|StreamError|Custom|InvalidSection1|InvalidSection2|InvalidSection3|InvalidSection4|InvalidSection5|InvalidTokens|TokenOverflow|InvalidProperty1)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bTFHoliday_(?:Invalid|Birthday|Halloween|Christmas|EndOfTheLine|CommunityUpdate|ValentinesDay|MeetThePyro|SpyVsEngyWar|FullMoon|HalloweenOrFullMoon|HalloweenOrFullMoonOrValentines|AprilFools)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bTF_CUSTOM_(?:HEADSHOT|BACKSTAB|BURNING|WRENCH_FIX|MINIGUN|SUICIDE|TAUNT_HADOUKEN|BURNING_FLARE|TAUNT_HIGH_NOON|TAUNT_GRAND_SLAM|PENETRATE_MY_TEAM|PENETRATE_ALL_PLAYERS|TAUNT_FENCING|PENETRATE_HEADSHOT|TAUNT_ARROW_STAB|TELEFRAG|BURNING_ARROW|FLYINGBURN|PUMPKIN_BOMB|DECAPITATION|TAUNT_GRENADE|BASEBALL|CHARGE_IMPACT|TAUNT_BARBARIAN_SWING|AIR_STICKY_BURST|DEFENSIVE_STICKY|PICKAXE|ROCKET_DIRECTHIT|TAUNT_UBERSLICE|PLAYER_SENTRY|STANDARD_STICKY|SHOTGUN_REVENGE_CRIT|TAUNT_ENGINEER_SMASH|BLEEDING|GOLD_WRENCH|CARRIED_BUILDING|COMBO_PUNCH|TAUNT_ENGINEER_ARM|FISH_KILL|TRIGGER_HURT|DECAPITATION_BOSS|STICKBOMB_EXPLOSION|AEGIS_ROUND|FLARE_EXPLOSION|BOOTS_STOMP|PLASMA|PLASMA_CHARGED|PLASMA_GIB|PRACTICE_STICKY|EYEBALL_ROCKET|HEADSHOT_DECAPITATION|TAUNT_ARMAGEDDON|FLARE_PELLET|CLEAVER|CLEAVER_CRIT|SAPPER_RECORDER_DEATH|MERASMUS_PLAYER_BOMB|MERASMUS_GRENADE|MERASMUS_ZAP|MERASMUS_DECAPITATION|CANNONBALL_PUSH|TAUNT_ALLCLASS_GUITAR_RIFF|THROWABLE|THROWABLE_KILL|SPELL_TELEPORT|SPELL_SKELETON|SPELL_MIRV|SPELL_METEOR|SPELL_LIGHTNING|SPELL_FIREBALL|SPELL_MONOCULUS|SPELL_BLASTJUMP|SPELL_BATS|SPELL_TINY|KART|GIANT_HAMMER|RUNE_REFLECT)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bTF_WEAPON_(?:NONE|BAT|BAT_WOOD|BOTTLE|FIREAXE|CLUB|CROWBAR|KNIFE|FISTS|SHOVEL|WRENCH|BONESAW|SHOTGUN_PRIMARY|SHOTGUN_SOLDIER|SHOTGUN_HWG|SHOTGUN_PYRO|SCATTERGUN|SNIPERRIFLE|MINIGUN|SMG|SYRINGEGUN_MEDIC|TRANQ|ROCKETLAUNCHER|GRENADELAUNCHER|PIPEBOMBLAUNCHER|FLAMETHROWER|GRENADE_NORMAL|GRENADE_CONCUSSION|GRENADE_NAIL|GRENADE_MIRV|GRENADE_MIRV_DEMOMAN|GRENADE_NAPALM|GRENADE_GAS|GRENADE_EMP|GRENADE_CALTROP|GRENADE_PIPEBOMB|GRENADE_SMOKE_BOMB|GRENADE_HEAL|GRENADE_STUNBALL|GRENADE_JAR|GRENADE_JAR_MILK|PISTOL|PISTOL_SCOUT|REVOLVER|NAILGUN|PDA|PDA_ENGINEER_BUILD|PDA_ENGINEER_DESTROY|PDA_SPY|BUILDER|MEDIGUN|GRENADE_MIRVBOMB|FLAMETHROWER_ROCKET|GRENADE_DEMOMAN|SENTRY_BULLET|SENTRY_ROCKET|DISPENSER|INVIS|FLAREGUN|LUNCHBOX|JAR|COMPOUND_BOW|BUFF_ITEM|PUMPKIN_BOMB|SWORD|DIRECTHIT|LIFELINE|LASER_POINTER|DISPENSER_GUN|SENTRY_REVENGE|JAR_MILK|HANDGUN_SCOUT_PRIMARY|BAT_FISH|CROSSBOW|STICKBOMB|HANDGUN_SCOUT_SEC|SODA_POPPER|SNIPERRIFLE_DECAP|RAYGUN|PARTICLE_CANNON|MECHANICAL_ARM|DRG_POMSON|BAT_GIFTWRAP|GRENADE_ORNAMENT|RAYGUN_REVENGE|PEP_BRAWLER_BLASTER|CLEAVER|GRENADE_CLEAVER|STICKY_BALL_LAUNCHER|GRENADE_STICKY_BALL|SHOTGUN_BUILDING_RESCUE|CANNON|THROWABLE|GRENADE_THROWABLE|PDA_SPY_BUILD|GRENADE_WATERBALLOON|HARVESTER_SAW|SPELLBOOK|SPELLBOOK_PROJECTILE|SNIPERRIFLE_CLASSIC|PARACHUTE|GRAPPLINGHOOK|PASSTIME_GUN|CHARGED_SMG)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bTFWeaponSlot_(?:Primary|Secondary|Melee|Grenade|Building|PDA|Item1|Item2)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bTF_FLAGEVENT_(?:PICKEDUP|CAPTURED|DEFENDED|DROPPED|RETURNED)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bTFResource_(?:Ping|Score|Deaths|TotalScore|Captures|Defenses|Dominations|Revenge|BuildingsDestroyed|Headshots|Backstabs|HealPoints|Invulns|Teleports|ResupplyPoints|KillAssists|MaxHealth|PlayerClass)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bUM_(?:BitBuf|Protobuf)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bCommand_(?:Deny|Allow)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bOverride_(?:Command|CommandGroup)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bAPLRes_(?:Success|Failure|SilentFailure)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bAddress_(?:Null|MinimumValid)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bSort_(?:Ascending|Descending|Random)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bSort_(?:Integer|Float|String)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bListen_(?:Default|Yes|No)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bRayType_(?:Infinite|EndPoint)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bCSRoundEnd_(?:TargetBombed|VIPEscaped|VIPKilled|TerroristsEscaped|CTStoppedEscape|TerroristsStopped|BombDefused|CTWin|TerroristWin|Draw|HostagesRescued|TargetSaved|HostagesNotRescued|TerroristsNotEscaped|VIPNotEscaped|GameStart|TerroristsSurrender|CTSurrender|TerroristsPlanted|CTsReachedHostage)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bCSWeapon_(?:NONE|P228|GLOCK|SCOUT|HEGRENADE|XM1014|C4|MAC10|AUG|SMOKEGRENADE|ELITE|FIVESEVEN|UMP45|SG550|GALIL|FAMAS|USP|AWP|MP5NAVY|M249|M3|M4A1|TMP|G3SG1|FLASHBANG|DEAGLE|SG552|AK47|KNIFE|P90|SHIELD|KEVLAR|ASSAULTSUIT|NIGHTVISION|GALILAR|BIZON|MAG7|NEGEV|SAWEDOFF|TEC9|TASER|HKP2000|MP7|MP9|NOVA|P250|SCAR17|SCAR20|SG556|SSG08|KNIFE_GG|MOLOTOV|DECOY|INCGRENADE|DEFUSER|HEAVYASSAULTSUIT|CUTTERS|HEALTHSHOT|KNIFE_T|M4A1_SILENCER|USP_SILENCER|CZ75A|REVOLVER|TAGGRENADE|FISTS|BREACHCHARGE|TABLET|MELEE|AXE|HAMMER|SPANNER|KNIFE_GHOST|FIREBOMB|DIVERSION|FRAGGRENADE|SNOWBALL|MAX_WEAPONS_NO_KNIFES|BAYONET|KNIFE_FLIP|KNIFE_GUT|KNIFE_KARAMBIT|KNIFE_M9_BAYONET|KNIFE_TATICAL|KNIFE_FALCHION|KNIFE_SURVIVAL_BOWIE|KNIFE_BUTTERFLY|KNIFE_PUSH|KNIFE_URSUS|KNIFE_GYPSY_JACKKNIFE|KNIFE_STILETTO|KNIFE_WIDOWMAKER|MAX_WEAPONS)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bAuthId_(?:Engine|Steam2|Steam3|SteamID64)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bNetFlow_(?:Outgoing|Incoming|Both)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bMenuAction_(?:Start|Display|Select|Cancel|End|VoteEnd|VoteStart|VoteCancel|DrawItem|DisplayItem)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bTopMenuAction_(?:DisplayOption|DisplayTitle|SelectOption|DrawOption|RemoveObject)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bTopMenuObject_(?:Category|Item)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bTopMenuPosition_(?:Start|LastRoot|LastCategory)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bTFClass_(?:Unknown|Scout|Sniper|Soldier|DemoMan|Medic|Heavy|Pyro|Spy|Engineer)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bTFCond_(?:Slowed|Zoomed|Disguising|Disguised|Cloaked|Ubercharged|TeleportedGlow|Taunting|UberchargeFading|Unknown1|CloakFlicker|Teleporting|Kritzkrieged|Unknown2|TmpDamageBonus|DeadRingered|Bonked|Dazed|Buffed|Charging|DemoBuff|CritCola|InHealRadius|Healing|OnFire|Overhealed|Jarated|Bleeding|DefenseBuffed|Milked|MegaHeal|RegenBuffed|MarkedForDeath|NoHealingDamageBuff|SpeedBuffAlly|HalloweenCritCandy|CritCanteen|CritDemoCharge|CritHype|CritOnFirstBlood|CritOnWin|CritOnFlagCapture|CritOnKill|RestrictToMelee|DefenseBuffNoCritBlock|Reprogrammed|CritMmmph|DefenseBuffMmmph|FocusBuff|DisguiseRemoved|MarkedForDeathSilent|DisguisedAsDispenser|Sapped|UberchargedHidden|UberchargedCanteen|HalloweenBombHead|HalloweenThriller|RadiusHealOnDamage|CritOnDamage|UberchargedOnTakeDamage|UberBulletResist|UberBlastResist|UberFireResist|SmallBulletResist|SmallBlastResist|SmallFireResist|Stealthed|MedigunDebuff|StealthedUserBuffFade|BulletImmune|BlastImmune|FireImmune|PreventDeath|MVMBotRadiowave|HalloweenSpeedBoost|HalloweenQuickHeal|HalloweenGiant|HalloweenTiny|HalloweenInHell|HalloweenGhostMode|DodgeChance|Parachute|BlastJumping|HalloweenKart|HalloweenKartDash|BalloonHead|MeleeOnly|SwimmingCurse|HalloweenKartNoTurn|HalloweenKartCage|HasRune|RuneStrength|RuneHaste|RuneRegen|RuneResist|RuneVampire|RuneWarlock|RunePrecision|RuneAgility|MiniCritOnKill|ObscuredSmoke|FreezeInput|GrapplingHook|GrapplingHookSafeFall|GrapplingHookLatched|GrapplingHookBleeding|AfterburnImmune|RuneKnockout|RuneImbalance|CritRuneTemp|PasstimeInterception|SwimmingNoEffects|EyeaductUnderworld|KingRune|PlagueRune|SupernovaRune|Plague|KingAura|SpawnOutline|KnockedIntoAir|CompetitiveWinner|CompetitiveLoser|NoTaunting|TFCondDuration_Infinite)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bTFObjectMode_(?:None|Entrance|Exit)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bTFObject_(?:CartDispenser|Dispenser|Teleporter|Sentry|Sapper)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bTFTeam_(?:Unassigned|Spectator|Red|Blue)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bFeatureStatus_(?:Available|Unavailable|Unknown)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bNumberType_(?:Int8|Int16|Int32)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match: '\\bFeatureType_(?:Native|Capability)\\b',
          name: 'support.constant.core.sourcepawn'
        },
        {
          match:
            '\\bSDKHook_(?:EndTouch|FireBulletsPost|OnTakeDamage|OnTakeDamagePost|PreThink|PostThink|SetTransmit|Spawn|StartTouch|Think|Touch|TraceAttack|TraceAttackPost|WeaponCanSwitchTo|WeaponCanUse|WeaponDrop|WeaponEquip|WeaponSwitch|ShouldCollide|PreThinkPost|PostThinkPost|ThinkPost|EndTouchPost|GroundEntChangedPost|SpawnPost|StartTouchPost|TouchPost|VPhysicsUpdate|VPhysicsUpdatePost|WeaponCanSwitchToPost|WeaponCanUsePost|WeaponDropPost|WeaponEquipPost|WeaponSwitchPost|Use|UsePost|Reload|ReloadPost|GetMaxHealth|Blocked|BlockedPost|OnTakeDamageAlive|OnTakeDamageAlivePost|CanBeAutobalanced)\\b',
          name: 'support.constant.core.sourcepawn'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match: '%|&|\\*|/[^(?:\\*|/)]|\\-|\\+|~|=|<|>|!|\\||\\?|\\:|\\^',
          name: 'keyword.operator.sourcepawn'
        },
        {
          match: '\\b(?:if|else|for|while|do|switch|case|default)\\b',
          name: 'keyword.control.statement.sourcepawn'
        },
        {
          match:
            '\\b(?:return|break|continue|new|static|decl|delete|forward|native|property|public|stock|enum|funcenum|functag|methodmap|struct|typedef|typeset|this|view_as|sizeof)\\b',
          name: 'keyword.sourcepawn'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: "'",
          end: "'|\\n",
          name: 'string.quoted.single.sourcepawn',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.sourcepawn'}
          ]
        },
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.sourcepawn',
          patterns: [
            {
              match:
                '\\\\.|%(?:c|b|d|i|u|f|L|N|s|T|t|X|x|%|\\.\\d+(?:b|d|i|u|f|s|X|x))',
              name: 'constant.character.escape.sourcepawn'
            }
          ]
        }
      ]
    }
  },
  scopeName: 'source.sourcepawn'
}

export default grammar
