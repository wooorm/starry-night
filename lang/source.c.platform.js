// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/textmate/c.tmbundle>
// and licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: [],
  patterns: [
    {
      match: '\\bkAudioUnitSubType_3DMixer\\b',
      name: 'invalid.deprecated.10.10.support.constant.c'
    },
    {
      match:
        '\\bkCF(?:CalendarUnitWeek|Gregorian(?:AllUnits|Units(?:Days|Hours|M(?:inutes|onths)|Seconds|Years)))\\b',
      name: 'invalid.deprecated.10.10.support.constant.cf.c'
    },
    {
      match: '\\bLS(?:ApplicationParameters|LaunchFSRefSpec)\\b',
      name: 'invalid.deprecated.10.10.support.type.c'
    },
    {
      match: '\\bCFGregorian(?:Date|Units)\\b',
      name: 'invalid.deprecated.10.10.support.type.cf.c'
    },
    {
      match:
        '\\bkLSItem(?:ContentType|Display(?:Kind|Name)|Extension(?:IsHidden)?|File(?:Creator|Type)|IsInvisible|QuarantineProperties|RoleHandlerDisplayName)\\b',
      name: 'invalid.deprecated.10.10.support.variable.c'
    },
    {
      match:
        '\\bk(?:AudioUnitProperty_(?:3DMixer(?:AttenuationCurve|Distance(?:Atten|Params)|RenderingFlags)|D(?:istanceAttenuationData|opplerShift)|ReverbPreset)|CT(?:Adobe(?:CNS1CharacterCollection|GB1CharacterCollection|Japan(?:1CharacterCollection|2CharacterCollection)|Korea1CharacterCollection)|CenterTextAlignment|Font(?:A(?:lertHeaderFontType|pplicationFontType)|ControlContentFontType|DefaultOrientation|EmphasizedSystem(?:DetailFontType|FontType)|HorizontalOrientation|LabelFontType|M(?:e(?:nu(?:Item(?:CmdKeyFontType|FontType|MarkFontType)|TitleFontType)|ssageFontType)|ini(?:EmphasizedSystemFontType|SystemFontType))|NoFontType|P(?:aletteFontType|ushButtonFontType)|S(?:mall(?:EmphasizedSystemFontType|SystemFontType|ToolbarFontType)|ystem(?:DetailFontType|FontType))|Tool(?:TipFontType|barFontType)|U(?:serF(?:ixedPitchFontType|ontType)|tilityWindowTitleFontType)|V(?:erticalOrientation|iewsFontType)|WindowTitleFontType)|IdentityMappingCharacterCollection|JustifiedTextAlignment|LeftTextAlignment|NaturalTextAlignment|RightTextAlignment)|LS(?:HandlerOptions(?:Default|IgnoreCreator)|ItemInfo(?:App(?:IsScriptable|Prefers(?:Classic|Native))|ExtensionIsHidden|Is(?:A(?:liasFile|pplication)|C(?:lassicApp|ontainer)|Invisible|NativeApp|P(?:ackage|lainFile)|Symlink|Volume))|Launch(?:InClassic|StartClassic)|Request(?:A(?:ll(?:Flags|Info)|ppTypeFlags)|BasicFlagsOnly|Extension(?:FlagsOnly)?|IconAndKind|TypeCreator)))\\b',
      name: 'invalid.deprecated.10.11.support.constant.c'
    },
    {
      match: '\\b(?:AUDistanceAttenuationData|LSItemInfoRecord)\\b',
      name: 'invalid.deprecated.10.11.support.type.c'
    },
    {
      match:
        '\\bk(?:C(?:F(?:FTPResource(?:Group|Link|Mod(?:Date|e)|Name|Owner|Size|Type)|Stream(?:NetworkServiceTypeVoIP|Property(?:FTP(?:AttemptPersistentConnection|F(?:etchResourceInfo|ileTransferOffset)|P(?:assword|roxy(?:Host|P(?:assword|ort)|User)?)|ResourceSize|Use(?:PassiveMode|rName))|HTTP(?:AttemptPersistentConnection|Final(?:Request|URL)|Proxy(?:Host|Port)?|Re(?:questBytesWrittenCount|sponseHeader)|S(?:Proxy(?:Host|Port)|houldAutoredirect)))))|GImagePropertyExifSubsecTimeOrginal|TCharacterShapeAttributeName)|IOSurfaceIsGlobal|LSSharedFileList(?:Favorite(?:Items|Volumes)|Item(?:BeforeFirst|Hidden|Last)|LoginItemHidden|Recent(?:ApplicationItems|DocumentItems|ItemsMaxAmount|ServerItems)|SessionLoginItems|Volumes(?:ComputerVisible|NetworkVisible))|SecUseNoAuthenticationUI)\\b',
      name: 'invalid.deprecated.10.11.support.variable.c'
    },
    {
      match: '\\bkLSLaunch(?:HasUntrustedContents|InhibitBGOnly|NoParams)\\b',
      name: 'invalid.deprecated.10.12.support.constant.c'
    },
    {
      match: '\\bOSSpinLock\\b',
      name: 'invalid.deprecated.10.12.support.type.c'
    },
    {
      match:
        '\\bkSC(?:EntNetPPTP|NetworkInterfaceTypePPTP|ValNetInterfaceSubTypePPTP)\\b',
      name: 'invalid.deprecated.10.12.support.variable.c'
    },
    {
      match:
        '\\bkCF(?:StreamSocketSecurityLevelSSLv(?:2|3)|URL(?:CustomIconKey|EffectiveIconKey|LabelColorKey))\\b',
      name: 'invalid.deprecated.10.12.support.variable.cf.c'
    },
    {
      match:
        '\\bk(?:C(?:FNetDiagnostic(?:Connection(?:Down|Indeterminate|Up)|Err|NoErr)|TFontManagerAutoActivationPromptUser)|SecAccessControlTouchID(?:Any|CurrentSet))\\b',
      name: 'invalid.deprecated.10.13.support.constant.c'
    },
    {
      match: '\\bCFNetDiagnosticStatus\\b',
      name: 'invalid.deprecated.10.13.support.type.c'
    },
    {
      match:
        '\\bkS(?:CPropNetInterfaceSupportsModemOnHold|SLSessionConfig_(?:3DES_fallback|RC4_fallback|TLSv1_(?:3DES_fallback|RC4_fallback)|default)|ecTrustCertificateTransparencyWhiteList)\\b',
      name: 'invalid.deprecated.10.13.support.variable.c'
    },
    {
      match:
        '\\bk(?:CVOpenGL(?:Buffer(?:Height|InternalFormat|MaximumMipmapLevel|PoolM(?:aximumBufferAgeKey|inimumBufferCountKey)|Target|Width)|TextureCacheChromaSamplingMode(?:Automatic|BestPerformance|HighestQuality|Key))|SecAttrAccessibleAlways(?:ThisDeviceOnly)?)\\b',
      name: 'invalid.deprecated.10.14.support.variable.c'
    },
    {
      match:
        '\\bk(?:DTLSProtocol1(?:2)?|S(?:SL(?:Aborted|C(?:l(?:ient(?:Cert(?:None|Re(?:jected|quested)|Sent)|Side)|osed)|onnected)|DatagramType|Handshake|Idle|Protocol(?:2|3(?:Only)?|All|Unknown)|S(?:e(?:rverSide|ssionOption(?:Allow(?:Renegotiation|ServerIdentityChange)|BreakOn(?:C(?:ertRequested|lient(?:Auth|Hello))|ServerAuth)|EnableSessionTickets|Fal(?:lback|seStart)|SendOneByteRecord))|treamType))|ecDataAccessEvent(?:Mask)?)|TLSProtocol(?:1(?:1|2|3|Only)?|MaxSupported))\\b',
      name: 'invalid.deprecated.10.15.support.constant.c'
    },
    {
      match:
        '\\bk(?:MIDIPropertyNameConfiguration|S(?:CPropNetPPP(?:AuthEAPPlugins|Plugins)|SLSessionConfig_(?:ATSv1(?:_noPFS)?|TLSv1_fallback|anonymous|legacy(?:_DHE)?|standard)))\\b',
      name: 'invalid.deprecated.10.15.support.variable.c'
    },
    {
      match: '\\bkCGColorSpace(?:DisplayP3_PQ_EOTF|ITUR_2020_PQ_EOTF)\\b',
      name: 'invalid.deprecated.10.16.support.variable.quartz.c'
    },
    {
      match: '\\bkMIDIProperty(?:FactoryPatchNameFile|UserPatchNameFile)\\b',
      name: 'invalid.deprecated.10.2.support.variable.c'
    },
    {
      match: '\\bkCFNetServiceFlagIsRegistrationDomain\\b',
      name: 'invalid.deprecated.10.4.support.constant.c'
    },
    {
      match:
        '\\bk(?:MDItemFS(?:Exists|Is(?:Readable|Writeable))|S(?:CPropUsersConsoleUser(?:GID|Name|UID)|KLanguageTypes))\\b',
      name: 'invalid.deprecated.10.4.support.variable.c'
    },
    {
      match: '\\bkMDItemSupportFileType\\b',
      name: 'invalid.deprecated.10.5.support.variable.c'
    },
    {
      match:
        '\\b(?:CM(?:2(?:Header|ProfileHandle)|4Header|A(?:daptationMatrixType|ppleProfileHeader)|B(?:itmap(?:C(?:allBack(?:ProcPtr|UPP)|olorSpace))?|ufferLocation)|C(?:MY(?:Color|KColor)|hromaticAdaptation|o(?:lor|ncat(?:CallBack(?:ProcPtr|UPP)|ProfileSet))|urveType)|D(?:at(?:aType|eTime(?:Type)?)|evice(?:I(?:D|nfoPtr)|Profile(?:ArrayPtr|I(?:D|nfo)|Scope)|State)|isplayIDType)|F(?:ixedXY(?:Color|ZColor)|loatBitmap)|GrayColor|H(?:LSColor|SVColor|andleLocation)|I(?:ntentCRDVMSize|terateDevice(?:InfoProcPtr|ProfileProcPtr))|L(?:ab(?:Color|ToLabProcPtr)|u(?:t(?:16Type|8Type)|vColor))|M(?:I(?:nfo|terate(?:ProcPtr|UPP))|akeAndModel(?:Type)?|easurementType|ulti(?:Funct(?:CLUTType|LutB2AType)|LocalizedUniCode(?:EntryRec|Type)|channel(?:5Color|6Color|7Color|8Color)))|Na(?:medColor(?:2(?:EntryType|Type)|Type)?|tiveDisplayInfo(?:Type)?)|P(?:S2CRDVMSizeType|a(?:rametricCurveType|thLocation)|rof(?:Loc|ile(?:Iterate(?:Data|ProcPtr|UPP)|Location|MD5(?:Ptr)?|Ref|SequenceDescType)))|RGBColor|S(?:15Fixed16ArrayType|creening(?:ChannelRec|Type)|ignatureType)|T(?:ag(?:ElemTable|Record)|ext(?:DescriptionType|Type))|U(?:16Fixed16ArrayType|Int(?:16ArrayType|32ArrayType|64ArrayType|8ArrayType)|crBgType|nicodeTextType)|Vi(?:deoCardGamma(?:Formula|T(?:able|ype))?|ewingConditionsType)|WorldRef|XYZType|YxyColor)|NCM(?:ConcatProfileS(?:et|pec)|DeviceProfileInfo))\\b',
      name: 'invalid.deprecated.10.6.support.type.c'
    },
    {
      match:
        '\\bkC(?:FStream(?:PropertySSLPeerCertificates|SSLAllows(?:AnyRoot|Expired(?:Certificates|Roots)))|VImageBufferTransferFunction_(?:EBU_3213|SMPTE_C))\\b',
      name: 'invalid.deprecated.10.6.support.variable.c'
    },
    {
      match:
        '\\b(?:AudioFileFDFTable(?:Extended)?|C(?:E_(?:A(?:ccessDescription|uthority(?:InfoAccess|KeyID))|BasicConstraints|C(?:RLDist(?:PointsSyntax|ributionPoint)|ertPolicies|rl(?:Dist(?:ReasonFlags|ributionPointNameType)|Reason))|D(?:ata(?:AndType)?|istributionPointName)|General(?:Name(?:s)?|Subtree(?:s)?)|I(?:nhibitAnyPolicy|ssuingDistributionPoint)|KeyUsage|N(?:ame(?:Constraints|RegistrationAuthorities)|etscapeCertType)|OtherName|Policy(?:Constraints|Information|Mapping(?:s)?|QualifierInfo)|QC_Statement(?:s)?|S(?:emanticsInformation|ubjectKeyID))|SSM_(?:A(?:C(?:CESS_CREDENTIALS(?:_PTR)?|L_(?:E(?:DIT(?:_PTR)?|NTRY_(?:IN(?:FO(?:_PTR)?|PUT(?:_PTR)?)|PROTOTYPE(?:_PTR)?))|OWNER_PROTOTYPE(?:_PTR)?|SUBJECT_CALLBACK|VALIDITY_PERIOD(?:_PTR)?))|PI_M(?:EMORY_FUNCS(?:_PTR)?|oduleEventHandler)|UTHORIZATIONGROUP(?:_PTR)?)|BASE_CERTS(?:_PTR)?|C(?:ALLBACK|ERT(?:GROUP(?:_PTR)?|_(?:BUNDLE(?:_(?:HEADER(?:_PTR)?|PTR))?|PAIR(?:_PTR)?))|HALLENGE_CALLBACK|ONTEXT(?:_(?:ATTRIBUTE(?:_PTR)?|PTR))?|R(?:L(?:GROUP(?:_PTR)?|_PAIR(?:_PTR)?)|YPTO_DATA(?:_PTR)?)|SP_OPERATIONAL_STATISTICS(?:_PTR)?)|D(?:AT(?:A_PTR|E(?:_PTR)?)|B(?:INFO(?:_PTR)?|_(?:ATTRIBUTE_(?:DATA(?:_PTR)?|INFO(?:_PTR)?)|INDEX_INFO(?:_PTR)?|PARSING_MODULE_INFO(?:_PTR)?|RECORD_(?:ATTRIBUTE_(?:DATA(?:_PTR)?|INFO(?:_PTR)?)|INDEX_INFO(?:_PTR)?)|SCHEMA_(?:ATTRIBUTE_INFO(?:_PTR)?|INDEX_INFO(?:_PTR)?)|UNIQUE_RECORD(?:_PTR)?))|L_DB_(?:HANDLE(?:_PTR)?|LIST(?:_PTR)?))|E(?:NCODED_C(?:ERT(?:_PTR)?|RL(?:_PTR)?)|VIDENCE(?:_PTR)?)|F(?:IELD(?:GROUP(?:_PTR)?|_PTR)?|UNC_NAME_ADDR(?:_PTR)?)|GUID(?:_PTR)?|K(?:E(?:A_DERIVE_PARAMS(?:_PTR)?|Y(?:HEADER(?:_PTR)?|_(?:PTR|SIZE(?:_PTR)?))?)|R(?:SUBSERVICE(?:_PTR)?|_(?:NAME|P(?:OLICY_(?:INFO(?:_PTR)?|LIST_ITEM(?:_PTR)?)|ROFILE(?:_PTR)?)|WRAPPEDPRODUCT_INFO(?:_PTR)?)))|LIST(?:_(?:ELEMENT|PTR))?|M(?:ANAGER_(?:EVENT_NOTIFICATION(?:_PTR)?|REGISTRATION_INFO(?:_PTR)?)|EMORY_FUNCS(?:_PTR)?|ODULE_FUNCS(?:_PTR)?)|N(?:AME_LIST(?:_PTR)?|ET_ADDRESS(?:_PTR)?)|OID_PTR|P(?:ARSED_C(?:ERT(?:_PTR)?|RL(?:_PTR)?)|KCS(?:1_OAEP_PARAMS(?:_PTR)?|5_PBKDF(?:1_PARAMS(?:_PTR)?|2_PARAMS(?:_PTR)?)))|QUERY(?:_(?:LIMITS(?:_PTR)?|PTR|SIZE_DATA(?:_PTR)?))?|R(?:ANGE(?:_PTR)?|ESOURCE_CONTROL_CONTEXT(?:_PTR)?)|S(?:AMPLE(?:GROUP(?:_PTR)?|_PTR)?|ELECTION_PREDICATE(?:_PTR)?|PI_(?:AC_FUNCS(?:_PTR)?|C(?:L_FUNCS(?:_PTR)?|SP_FUNCS(?:_PTR)?)|DL_FUNCS(?:_PTR)?|KR_FUNCS(?:_PTR)?|ModuleEventHandler|TP_FUNCS(?:_PTR)?)|TATE_FUNCS(?:_PTR)?|UBSERVICE_UID(?:_PTR)?)|T(?:P_(?:A(?:PPLE_EVIDENCE_INFO|UTHORITY_ID(?:_PTR)?)|C(?:ALLERAUTH_CONTEXT(?:_PTR)?|ERT(?:CHANGE_(?:INPUT(?:_PTR)?|OUTPUT(?:_PTR)?)|ISSUE_(?:INPUT(?:_PTR)?|OUTPUT(?:_PTR)?)|NOTARIZE_(?:INPUT(?:_PTR)?|OUTPUT(?:_PTR)?)|RECLAIM_(?:INPUT(?:_PTR)?|OUTPUT(?:_PTR)?)|VERIFY_(?:INPUT(?:_PTR)?|OUTPUT(?:_PTR)?))|ONFIRM_RESPONSE(?:_PTR)?|RLISSUE_(?:INPUT(?:_PTR)?|OUTPUT(?:_PTR)?))|POLICYINFO(?:_PTR)?|RE(?:QUEST_SET(?:_PTR)?|SULT_SET(?:_PTR)?)|VERIF(?:ICATION_RESULTS_CALLBACK|Y_CONTEXT(?:_(?:PTR|RESULT(?:_PTR)?))?))|UPLE(?:GROUP(?:_PTR)?|_PTR)?)|UPCALLS(?:_(?:CALLOC|FREE|MALLOC|PTR|REALLOC))?|VERSION(?:_PTR)?|WRAP_KEY(?:_PTR)?|X509(?:EXT_(?:BASICCONSTRAINTS(?:_PTR)?|P(?:AIR(?:_PTR)?|OLICY(?:INFO(?:_PTR)?|QUALIFIER(?:INFO(?:_PTR)?|S(?:_PTR)?)))|TAGandVALUE(?:_PTR)?)|_(?:ALGORITHM_IDENTIFIER_PTR|EXTENSION(?:S(?:_PTR)?|_PTR)?|NAME(?:_PTR)?|R(?:DN(?:_PTR)?|EVOKED_CERT_(?:ENTRY(?:_PTR)?|LIST(?:_PTR)?))|S(?:IGN(?:ATURE(?:_PTR)?|ED_C(?:ERTIFICATE(?:_PTR)?|RL(?:_PTR)?))|UBJECT_PUBLIC_KEY_INFO_PTR)|T(?:BS_CERT(?:IFICATE(?:_PTR)?|LIST(?:_PTR)?)|IME(?:_PTR)?|YPE_VALUE_PAIR(?:_PTR)?)|VALIDITY(?:_PTR)?))))|MDS_(?:DB_HANDLE|FUNCS(?:_PTR)?)|cssm_(?:ac(?:cess_credentials|l_(?:e(?:dit|ntry_(?:in(?:fo|put)|prototype))|owner_prototype|validity_period))|base_certs|c(?:ert(?:_(?:bundle(?:_header)?|pair)|group)|ontext(?:_attribute)?|r(?:l(?:_pair|group)|ypto_data))|d(?:b(?:_(?:attribute_(?:data|info)|index_info|parsing_module_info|record_(?:attribute_(?:data|info)|index_info)|schema_attribute_info|unique_record)|info)|l_db_list)|e(?:ncoded_c(?:ert|rl)|vidence)|field(?:group)?|k(?:e(?:a_derive_params|y(?:header)?)|r(?:_(?:p(?:olicy_(?:info|list_item)|rofile)|wrappedproductinfo)|subservice))|list_element|m(?:anager_(?:event_notification|registration_info)|odule_funcs)|net_address|pkcs(?:1_oaep_params|5_pbkdf(?:1_params|2_params))|query(?:_limits)?|resource_control_context|s(?:ample(?:group)?|election_predicate|pi_(?:ac_funcs|c(?:l_funcs|sp_funcs)|dl_funcs|kr_funcs|tp_funcs)|tate_funcs|ubservice_uid)|t(?:p_(?:authority_id|c(?:allerauth_context|ert(?:change_(?:input|output)|issue_(?:input|output)|notarize_(?:input|output)|reclaim_(?:input|output)|verify_(?:input|output))|onfirm_response|rlissue_(?:input|output))|policyinfo|request_set|verify_context(?:_result)?)|uplegroup)|upcalls|x509(?:_(?:extension(?:TagAndValue|s)?|name|r(?:dn|evoked_cert_(?:entry|list))|sign(?:ature|ed_c(?:ertificate|rl))|t(?:bs_cert(?:ificate|list)|ime|ype_value_pair))|ext_(?:basicConstraints|p(?:air|olicy(?:Info|Qualifier(?:Info|s))))))|mds_funcs|x509_validity)\\b',
      name: 'invalid.deprecated.10.7.support.type.c'
    },
    {
      match:
        '\\b(?:CSSMOID_(?:A(?:D(?:C_CERT_POLICY|_(?:CA_(?:ISSUERS|REPOSITORY)|OCSP|TIME_STAMPING))|NSI_(?:DH_(?:EPHEM(?:_SHA1)?|HYBRID(?:1(?:_SHA1)?|2(?:_SHA1)?|_ONEFLOW)|ONE_FLOW(?:_SHA1)?|PUB_NUMBER|STATIC(?:_SHA1)?)|MQV(?:1(?:_SHA1)?|2(?:_SHA1)?))|PPLE(?:ID_(?:CERT_POLICY|SHARING_CERT_POLICY)|_(?:ASC|CERT_POLICY|E(?:CDSA|KU_(?:CODE_SIGNING(?:_DEV)?|ICHAT_(?:ENCRYPTION|SIGNING)|P(?:ASSBOOK_SIGNING|ROFILE_SIGNING)|QA_PROFILE_SIGNING|RESOURCE_SIGNING|SYSTEM_IDENTITY)|XTENSION(?:_(?:A(?:AI_INTERMEDIATE|DC_(?:APPLE_SIGNING|DEV_SIGNING)|PPLE(?:ID_(?:INTERMEDIATE|SHARING)|_SIGNING))|CODE_SIGNING|DEVELOPER_AUTHENTICATION|ESCROW_SERVICE|I(?:NTERMEDIATE_MARKER|TMS_INTERMEDIATE)|MACAPPSTORE_RECEIPT|P(?:ASSBOOK_SIGNING|ROVISIONING_PROFILE_SIGNING)|S(?:ERVER_AUTHENTICATION|YSINT2_INTERMEDIATE)|WWDR_INTERMEDIATE))?)|FEE(?:D(?:EXP)?|_(?:MD5|SHA1))?|ISIGN|TP_(?:APPLEID_SHARING|C(?:ODE_SIGN(?:ING)?|SR_GEN)|E(?:AP|SCROW_SERVICE)|I(?:CHAT|P_SEC)|LOCAL_CERT_GEN|M(?:ACAPPSTORE_RECEIPT|OBILE_STORE)|P(?:A(?:CKAGE_SIGNING|SSBOOK_SIGNING)|CS_ESCROW_SERVICE|KINIT_(?:CLIENT|SERVER)|RO(?:FILE_SIGNING|VISIONING_PROFILE_SIGNING))|QA_PROFILE_SIGNING|RE(?:SOURCE_SIGN|VOCATION(?:_(?:CRL|OCSP))?)|S(?:MIME|SL|W_UPDATE_SIGNING)|T(?:EST_MOBILE_STORE|IMESTAMPING))|X509_BASIC))|liasedEntryName|uthority(?:InfoAccess|KeyIdentifier|RevocationList))|B(?:asicConstraints|iometricInfo|usinessCategory)|C(?:ACertificate|SSMKeyStruct|ert(?:Issuer|i(?:com(?:EllCurve)?|ficate(?:Policies|RevocationList)))|hallengePassword|lientAuth|o(?:llective(?:FacsimileTelephoneNumber|InternationalISDNNumber|Organization(?:Name|alUnitName)|P(?:hysicalDeliveryOfficeName|ost(?:OfficeBox|al(?:Address|Code)))|St(?:ateProvinceName|reetAddress)|Tele(?:phoneNumber|x(?:Number|TerminalIdentifier)))|mmonName|ntentType|unt(?:erSignature|ryName))|r(?:l(?:DistributionPoints|Number|Reason)|ossCertificatePair))|D(?:ES_CBC|H|NQualifier|OTMAC_CERT(?:_(?:E(?:MAIL_(?:ENCRYPT|SIGN)|XTENSION)|IDENTITY|POLICY|REQ(?:_(?:ARCHIVE_(?:FETCH|LIST|REMOVE|STORE)|EMAIL_(?:ENCRYPT|SIGN)|IDENTITY|SHARED_SERVICES|VALUE_(?:ASYNC|HOSTNAME|IS_PENDING|PASSWORD|RENEW|USERNAME)))?))?|SA(?:_(?:CMS|JDK))?|e(?:ltaCrlIndicator|s(?:cription|tinationIndicator))|istinguishedName|omainComponent)|E(?:CDSA_WithS(?:HA(?:1|2(?:24|56)|384|512)|pecified)|KU_IPSec|TSI_QCS_QC_(?:COMPLIANCE|LIMIT_VALUE|RETENTION|SSCD)|mail(?:Address|Protection)|nhancedSearchGuide|xtended(?:CertificateAttributes|KeyUsage(?:Any)?|UseCodeSigning))|FacsimileTelephoneNumber|G(?:enerationQualifier|ivenName)|Ho(?:ldInstructionCode|useIdentifier)|I(?:n(?:hibitAnyPolicy|itials|ternationalISDNNumber|validityDate)|ssu(?:erAltName|ingDistributionPoint(?:s)?))|K(?:ERBv5_PKINIT_(?:AUTH_DATA|DH_KEY_DATA|KP_(?:CLIENT_AUTH|KDC)|RKEY_DATA)|eyUsage|nowledgeInformation)|LocalityName|M(?:ACAPPSTORE_(?:CERT_POLICY|RECEIPT_CERT_POLICY)|D(?:2(?:WithRSA)?|4(?:WithRSA)?|5(?:WithRSA)?)|OBILE_STORE_SIGNING_POLICY|e(?:mber|ssageDigest)|icrosoftSGC)|N(?:ame(?:Constraints)?|etscape(?:Cert(?:Sequence|Type)|SGC))|O(?:AEP_(?:ID_PSPECIFIED|MGF1)|CSPSigning|ID_QCS_SYNTAX_V(?:1|2)|bjectClass|rganization(?:Name|alUnitName)|wner)|P(?:DA_(?:COUNTRY_(?:CITIZEN|RESIDENCE)|DATE_OF_BIRTH|GENDER|PLACE_OF_BIRTH)|K(?:CS(?:12_(?:c(?:ertBag|rlBag)|keyBag|pbe(?:WithSHAAnd(?:128BitRC(?:2CBC|4)|2Key3DESCBC|3Key3DESCBC|40BitRC4)|withSHAAnd40BitRC2CBC)|s(?:afeContentsBag|ecretBag|hroudedKeyBag))|3|5_(?:D(?:ES_EDE3_CBC|IGEST_ALG)|ENCRYPT_ALG|HMAC_SHA1|PB(?:ES2|KDF2|MAC1)|RC(?:2_CBC|5_CBC)|pbeWith(?:MD(?:2And(?:DES|RC2)|5And(?:DES|RC2))|SHA1And(?:DES|RC2)))|7_(?:D(?:ata(?:WithAttributes)?|igestedData)|En(?:crypted(?:Data|PrivateKeyInfo)|velopedData)|Signed(?:AndEnvelopedData|Data))|9_(?:C(?:ertTypes|rlTypes)|FriendlyName|Id_Ct_TSTInfo|LocalKeyId|SdsiCertificate|TimeStampToken|X509C(?:ertificate|rl)))|IX_OCSP(?:_(?:ARCHIVE_CUTOFF|BASIC|CRL|NO(?:CHECK|NCE)|RESPONSE|SERVICE_LOCATOR))?)|hysicalDeliveryOfficeName|o(?:licy(?:Constraints|Mappings)|st(?:OfficeBox|al(?:Address|Code)))|r(?:e(?:ferredDeliveryMethod|sentationAddress)|ivateKeyUsagePeriod|otocolInformation))|Q(?:C_Statements|T_(?:CPS|UNOTICE))|R(?:SA(?:WithOAEP)?|egisteredAddress|oleOccupant)|S(?:HA(?:1(?:With(?:DSA(?:_(?:CMS|JDK))?|RSA(?:_OIW)?))?|2(?:24(?:WithRSA)?|56(?:WithRSA)?)|384(?:WithRSA)?|512(?:WithRSA)?)|e(?:archGuide|eAlso|r(?:ialNumber|verAuth))|igningTime|t(?:ateProvinceName|reetAddress)|u(?:bject(?:AltName|DirectoryAttributes|EmailAddress|InfoAccess|KeyIdentifier|Picture|SignatureBitmap)|pportedApplicationContext|rname))|T(?:EST_MOBILE_STORE_SIGNING_POLICY|ele(?:phoneNumber|x(?:Number|TerminalIdentifier))|i(?:meStamping|tle))|U(?:n(?:ique(?:Identifier|Member)|structured(?:Address|Name))|se(?:Exemptions|r(?:Certificate|ID|Password)))|X(?:509V(?:1(?:C(?:RL(?:Issuer(?:Name(?:CStruct|LDAP)|Struct)|N(?:extUpdate|umberOfRevokedCertEntries)|Revoked(?:Certificates(?:CStruct|Struct)|Entry(?:CStruct|RevocationDate|S(?:erialNumber|truct)))|ThisUpdate)|ertificate(?:IssuerUniqueId|SubjectUniqueId))|IssuerName(?:CStruct|LDAP|Std)?|S(?:erialNumber|ignature(?:Algorithm(?:Parameters|TBS)?|CStruct|Struct)?|ubject(?:Name(?:CStruct|LDAP|Std)?|PublicKey(?:Algorithm(?:Parameters)?|CStruct)?))|V(?:alidityNot(?:After|Before)|ersion))|2CRL(?:AllExtensions(?:CStruct|Struct)|Extension(?:Critical|Id|Type)|NumberOfExtensions|RevokedEntry(?:AllExtensions(?:CStruct|Struct)|Extension(?:Critical|Id|Type|Value)|NumberOfExtensions|SingleExtension(?:CStruct|Struct))|Si(?:gnedCrl(?:CStruct|Struct)|ngleExtension(?:CStruct|Struct))|TbsCertList(?:CStruct|Struct)|Version)|3(?:Certificate(?:CStruct|Extension(?:C(?:Struct|ritical)|Id|Struct|Type|Value|s(?:CStruct|Struct))|NumberOfExtensions)?|SignedCertificate(?:CStruct)?))|9_62(?:_(?:C_TwoCurve|EllCurve|FieldType|P(?:rimeCurve|ubKeyType)|SigType))?|_121Address)|ecPublicKey|sec(?:p(?:1(?:12r(?:1|2)|28r(?:1|2)|60(?:k1|r(?:1|2))|92(?:k1|r1))|2(?:24(?:k1|r1)|56(?:k1|r1))|384r1|521r1)|t(?:1(?:13r(?:1|2)|31r(?:1|2)|63(?:k1|r(?:1|2))|93r(?:1|2))|2(?:3(?:3(?:k1|r1)|9k1)|83(?:k1|r1))|409(?:k1|r1)|571(?:k1|r1))))|k(?:MDItemLabel(?:I(?:D|con)|Kind|UUID)|SCPropNetSMBNetBIOSScope))\\b',
      name: 'invalid.deprecated.10.7.support.variable.c'
    },
    {
      match:
        '\\b(?:false32b|gestaltSystemVersion(?:BugFix|M(?:ajor|inor))?|kCT(?:FontTableOptionExcludeSynthetic|ParagraphStyleSpecifierLineSpacing)|true32b)\\b',
      name: 'invalid.deprecated.10.8.support.constant.c'
    },
    {
      match:
        '\\bWSMethodInvocation(?:CallBackProcPtr|DeserializationProcPtr|SerializationProcPtr)\\b',
      name: 'invalid.deprecated.10.8.support.type.c'
    },
    {
      match:
        '\\b(?:k(?:CTTypesetterOptionDisableBidiProcessing|FSOperation(?:Bytes(?:CompleteKey|RemainingKey)|Objects(?:CompleteKey|RemainingKey)|T(?:hroughputKey|otal(?:BytesKey|ObjectsKey|UserVisibleObjectsKey))|UserVisibleObjects(?:CompleteKey|RemainingKey))|LSSharedFileListVolumesIDiskVisible|WS(?:Debug(?:Incoming(?:Body|Headers)|Outgoing(?:Body|Headers))|Fault(?:Code|Extra|String)|HTTP(?:ExtraHeaders|FollowsRedirects|Message|Proxy|ResponseMessage|Version)|MethodInvocation(?:Result(?:ParameterName)?|TimeoutValue)|NetworkStreamFaultString|Record(?:NamespaceURI|ParameterOrder|Type)|S(?:OAP(?:1999Protocol|2001Protocol|BodyEncodingStyle|Me(?:ssageHeaders|thodNamespaceURI)|Style(?:Doc|RPC))|treamError(?:Domain|Error|Message))|XMLRPCProtocol))|pi)\\b',
      name: 'invalid.deprecated.10.8.support.variable.c'
    },
    {
      match: '\\bkCFURLUbiquitousItemPercent(?:DownloadedKey|UploadedKey)\\b',
      name: 'invalid.deprecated.10.8.support.variable.cf.c'
    },
    {
      match: '\\bkCGWindowWorkspace\\b',
      name: 'invalid.deprecated.10.8.support.variable.quartz.c'
    },
    {
      match:
        '\\bk(?:AUVoiceIOProperty_VoiceProcessingQuality|Sec(?:AppleSharePasswordItemClass|TrustResultConfirm))\\b',
      name: 'invalid.deprecated.10.9.support.constant.c'
    },
    {
      match:
        '\\bkCFURL(?:BookmarkCreationPreferFileIDResolutionMask|HFSPathStyle|ImproperArgumentsError|PropertyKeyUnavailableError|Re(?:moteHostUnavailableError|source(?:AccessViolationError|NotFoundError))|TimeoutError|Unknown(?:Error|PropertyKeyError|SchemeError))\\b',
      name: 'invalid.deprecated.10.9.support.constant.cf.c'
    },
    {
      match: '\\bkCGEncoding(?:FontSpecific|MacRoman)\\b',
      name: 'invalid.deprecated.10.9.support.constant.quartz.c'
    },
    {
      match: '\\bSecTrustUserSetting\\b',
      name: 'invalid.deprecated.10.9.support.type.c'
    },
    {
      match:
        '\\b(?:XPC_ACTIVITY_REQUIRE_(?:BATTERY_LEVEL|HDD_SPINNING)|k(?:LSSharedFileListGlobalLoginItems|S(?:C(?:PropNetAirPort(?:A(?:llowNetCreation|uthPassword(?:Encryption)?)|JoinMode|P(?:owerEnabled|referredNetwork)|SavePasswords)|ValNetAirPort(?:AuthPasswordEncryptionKeychain|JoinMode(?:Automatic|Preferred|R(?:anked|ecent)|Strongest)))|ecPolicyAppleiChat)))\\b',
      name: 'invalid.deprecated.10.9.support.variable.c'
    },
    {
      match:
        '\\bkCFURL(?:File(?:DirectoryContents|Exists|L(?:astModificationTime|ength)|OwnerID|POSIXMode)|HTTPStatus(?:Code|Line)|UbiquitousItemIsDownloadedKey)\\b',
      name: 'invalid.deprecated.10.9.support.variable.cf.c'
    },
    {
      match:
        '\\bk3DMixerParam_(?:GlobalReverbGain|M(?:axGain|inGain)|O(?:bstructionAttenuation|cclusionAttenuation)|ReverbBlend)\\b',
      name: 'invalid.deprecated.tba.support.constant.c'
    },
    {
      match:
        '\\bkQL(?:Preview(?:ContentIDScheme|OptionCursorKey|Property(?:Attachment(?:DataKey|sKey)|BaseBundlePathKey|CursorKey|DisplayNameKey|HeightKey|MIMETypeKey|PDFStyleKey|StringEncodingKey|WidthKey))|ThumbnailProperty(?:Ba(?:dgeImageKey|seBundlePathKey)|ExtensionKey))\\b',
      name: 'invalid.deprecated.tba.support.variable.c'
    },
    {
      match:
        '\\b(?:QOS_CLASS_(?:BACKGROUND|DEFAULT|U(?:NSPECIFIED|SER_IN(?:ITIATED|TERACTIVE)|TILITY))|k(?:C(?:GLCP(?:AbortOnGPURestartStatusBlacklisted|ContextPriorityRequest|GPURestartStatus|Support(?:GPURestart|SeparateAddressSpace))|TRuby(?:Alignment(?:Auto|Center|Distribute(?:Letter|Space)|End|Invalid|LineEdge|Start)|Overhang(?:Auto|End|Invalid|None|Start)|Position(?:After|Before|Count|In(?:line|terCharacter))))|FSEventStreamEventFlagItemIs(?:Hardlink|LastHardlink)|SecAccessControlUserPresence))\\b',
      name: 'support.constant.10.10.c'
    },
    {
      match:
        '\\bk(?:A(?:XValueType(?:AXError|C(?:FRange|G(?:Point|Rect|Size))|Illegal)|udioComponent(?:Flag_(?:CanLoadInProcess|IsV3AudioUnit|RequiresAsyncInstantiation)|Instantiation_Load(?:InProcess|OutOfProcess)))|SecAccessControlDevicePasscode)\\b',
      name: 'support.constant.10.11.c'
    },
    {
      match:
        '\\bkSec(?:AccessControl(?:A(?:nd|pplicationPassword)|Or|PrivateKeyUsage)|KeyOperationType(?:Decrypt|Encrypt|KeyExchange|Sign|Verify))\\b',
      name: 'support.constant.10.12.c'
    },
    {
      match:
        '\\bk(?:CGLRPRe(?:gistryID(?:High|Low)|movable)|FSEventStream(?:CreateFlagUseExtendedData|EventFlagItemCloned)|SecAccessControlBiometry(?:Any|CurrentSet))\\b',
      name: 'support.constant.10.13.c'
    },
    {
      match:
        '\\bk(?:3DMixerParam_(?:BusEnable|DryWetReverbBlend|GlobalReverbGainInDecibels|M(?:axGainInDecibels|inGainInDecibels)|O(?:bstructionAttenuationInDecibels|cclusionAttenuationInDecibels))|AudioQueueProperty_ChannelAssignments|JSTypeSymbol|SecAccessControlWatch)\\b',
      name: 'support.constant.10.15.c'
    },
    {
      match:
        '\\bk(?:AudioComponentFlag_SandboxSafe|CGL(?:PFASupportsAutomaticGraphicsSwitching|Renderer(?:ATIRadeonX4000ID|IntelHD5000ID)))\\b',
      name: 'support.constant.10.8.c'
    },
    {
      match:
        '\\bk(?:AXPriority(?:High|Low|Medium)|CGL(?:OGLPVersion_GL4_Core|R(?:PMajorGLVersion|endererGeForceID))|FSEventStream(?:CreateFlagMarkSelf|EventFlagOwnEvent))\\b',
      name: 'support.constant.10.9.c'
    },
    {name: 'support.constant.c'},
    {
      match:
        '\\bkCFNumberFormatter(?:Currency(?:AccountingStyle|ISOCodeStyle|PluralStyle)|OrdinalStyle)\\b',
      name: 'support.constant.cf.10.11.c'
    },
    {
      match:
        '\\bkCFISO8601DateFormatWith(?:ColonSeparatorInTime(?:Zone)?|Da(?:shSeparatorInDate|y)|Full(?:Date|Time)|InternetDateTime|Month|SpaceBetweenDateAndTime|Time(?:Zone)?|WeekOfYear|Year)\\b',
      name: 'support.constant.cf.10.12.c'
    },
    {
      match: '\\bkCFISO8601DateFormatWithFractionalSeconds\\b',
      name: 'support.constant.cf.10.13.c'
    },
    {
      match: '\\bkCFURLEnumeratorGenerateRelativePathURLs\\b',
      name: 'support.constant.cf.10.15.c'
    },
    {
      match:
        '\\bkCFFileSecurityClear(?:AccessControlList|Group(?:UUID)?|Mode|Owner(?:UUID)?)\\b',
      name: 'support.constant.cf.10.8.c'
    },
    {
      match:
        '\\b(?:CF(?:ByteOrder(?:BigEndian|LittleEndian|Unknown)|NotificationSuspensionBehavior(?:Coalesce|D(?:eliverImmediately|rop)|Hold))|kCF(?:B(?:ookmarkResolutionWithout(?:MountingMask|UIMask)|undleExecutableArchitecture(?:I386|PPC(?:64)?|X86_64))|C(?:alendar(?:ComponentsWrap|Unit(?:Day|Era|Hour|M(?:inute|onth)|Quarter|Second|Week(?:Of(?:Month|Year)|day(?:Ordinal)?)|Year(?:ForWeekOfYear)?))|haracterSet(?:AlphaNumeric|C(?:apitalizedLetter|ontrol)|Dec(?:imalDigit|omposable)|Illegal|L(?:etter|owercaseLetter)|N(?:ewline|onBase)|Punctuation|Symbol|UppercaseLetter|Whitespace(?:AndNewline)?)|ompare(?:Anchored|Backwards|CaseInsensitive|DiacriticInsensitive|EqualTo|ForcedOrdering|GreaterThan|L(?:essThan|ocalized)|N(?:onliteral|umerically)|WidthInsensitive))|Dat(?:aSearch(?:Anchored|Backwards)|eFormatter(?:FullStyle|LongStyle|MediumStyle|NoStyle|ShortStyle))|FileDescriptor(?:ReadCallBack|WriteCallBack)|LocaleLanguageDirection(?:BottomToTop|LeftToRight|RightToLeft|TopToBottom|Unknown)|MessagePort(?:BecameInvalidError|IsInvalid|ReceiveTimeout|S(?:endTimeout|uccess)|TransportError)|N(?:otification(?:DeliverImmediately|PostToAllSessions)|umber(?:C(?:FIndexType|GFloatType|harType)|DoubleType|F(?:loat(?:32Type|64Type|Type)|ormatter(?:CurrencyStyle|DecimalStyle|NoStyle|P(?:a(?:d(?:After(?:Prefix|Suffix)|Before(?:Prefix|Suffix))|rseIntegersOnly)|ercentStyle)|Round(?:Ceiling|Down|Floor|Half(?:Down|Even|Up)|Up)|S(?:cientificStyle|pellOutStyle)))|IntType|Long(?:LongType|Type)|MaxType|NSIntegerType|S(?:Int(?:16Type|32Type|64Type|8Type)|hortType)))|PropertyList(?:BinaryFormat_v1_0|Immutable|MutableContainers(?:AndLeaves)?|OpenStepFormat|Read(?:CorruptError|StreamError|UnknownVersionError)|WriteStreamError|XMLFormat_v1_0)|RunLoop(?:A(?:fterWaiting|llActivities)|Before(?:Sources|Timers|Waiting)|E(?:ntry|xit)|Run(?:Finished|HandledSource|Stopped|TimedOut))|S(?:ocket(?:A(?:cceptCallBack|utomaticallyReenable(?:AcceptCallBack|DataCallBack|ReadCallBack|WriteCallBack))|C(?:loseOnInvalidate|onnectCallBack)|DataCallBack|Error|LeaveErrors|NoCallBack|ReadCallBack|Success|Timeout|WriteCallBack)|tr(?:eam(?:E(?:rrorDomain(?:Custom|MacOSStatus|POSIX)|vent(?:CanAcceptBytes|E(?:ndEncountered|rrorOccurred)|HasBytesAvailable|None|OpenCompleted))|Status(?:AtEnd|Closed|Error|NotOpen|Open(?:ing)?|Reading|Writing))|ing(?:Encoding(?:A(?:NSEL|SCII)|Big5(?:_(?:E|HKSCS_1999))?|CNS_11643_92_P(?:1|2|3)|DOS(?:Arabic|BalticRim|C(?:anadianFrench|hinese(?:Simplif|Trad)|yrillic)|Greek(?:1|2)?|Hebrew|Icelandic|Japanese|Korean|Latin(?:1|2|US)|Nordic|Portuguese|Russian|T(?:hai|urkish))|E(?:BCDIC_(?:CP037|US)|UC_(?:CN|JP|KR|TW))|GB(?:K_95|_(?:18030_2000|2312_80))|HZ_GB_2312|ISO(?:Latin(?:1(?:0)?|2|3|4|5|6|7|8|9|Arabic|Cyrillic|Greek|Hebrew|Thai)|_2022_(?:CN(?:_EXT)?|JP(?:_(?:1|2|3))?|KR))|JIS_(?:C6226_78|X02(?:0(?:1_76|8_(?:83|90))|12_90))|K(?:OI8_(?:R|U)|SC_5601_(?:87|92_Johab))|Mac(?:Ar(?:abic|menian)|B(?:engali|urmese)|C(?:e(?:ltic|ntralEurRoman)|hinese(?:Simp|Trad)|roatian|yrillic)|D(?:evanagari|ingbats)|E(?:thiopic|xtArabic)|Farsi|G(?:aelic|eorgian|reek|u(?:jarati|rmukhi))|H(?:FS|ebrew)|I(?:celandic|nuit)|Japanese|K(?:annada|hmer|orean)|Laotian|M(?:alayalam|ongolian)|Oriya|Roman(?:Latin1|ian)?|S(?:inhalese|ymbol)|T(?:amil|elugu|hai|ibetan|urkish)|Ukrainian|V(?:T100|ietnamese))|N(?:extStep(?:Japanese|Latin)|onLossyASCII)|ShiftJIS(?:_X0213(?:_(?:00|MenKuTen))?)?|U(?:TF(?:16(?:BE|LE)?|32(?:BE|LE)?|7(?:_IMAP)?|8)|nicode)|VISCII|Windows(?:Arabic|BalticRim|Cyrillic|Greek|Hebrew|KoreanJohab|Latin(?:1|2|5)|Vietnamese))|NormalizationForm(?:C|D|K(?:C|D))|Tokenizer(?:AttributeLa(?:nguage|tinTranscription)|Token(?:Has(?:DerivedSubTokensMask|HasNumbersMask|NonLettersMask|SubTokensMask)|IsCJWordMask|No(?:ne|rmal))|Unit(?:LineBreak|Paragraph|Sentence|Word(?:Boundary)?)))))|TimeZoneNameStyle(?:DaylightSaving|Generic|S(?:hort(?:DaylightSaving|Generic|Standard)|tandard))|U(?:RL(?:Bookmark(?:Creation(?:MinimalBookmarkMask|S(?:ecurityScopeAllowOnlyReadAccess|uitableForBookmarkFile)|WithSecurityScope)|ResolutionWith(?:SecurityScope|out(?:MountingMask|UIMask)))|Component(?:Fragment|Host|NetLocation|P(?:a(?:rameterString|ssword|th)|ort)|Query|ResourceSpecifier|Scheme|User(?:Info)?)|Enumerator(?:D(?:e(?:faultBehavior|scendRecursively)|irectoryPostOrderSuccess)|E(?:nd|rror)|GenerateFileReferenceURLs|IncludeDirectoriesP(?:ostOrder|reOrder)|S(?:kip(?:Invisibles|PackageContents)|uccess))|POSIXPathStyle|WindowsPathStyle)|serNotification(?:AlternateResponse|Ca(?:ncelResponse|utionAlertLevel)|DefaultResponse|No(?:DefaultButtonFlag|teAlertLevel)|OtherResponse|PlainAlertLevel|StopAlertLevel|UseRadioButtonsFlag))|XML(?:E(?:ntityType(?:Character|Par(?:ameter|sed(?:External|Internal))|Unparsed)|rror(?:E(?:lementlessDocument|ncodingConversionFailure)|Malformed(?:C(?:DSect|haracterReference|loseTag|omment)|D(?:TD|ocument)|Name|P(?:arsedCharacterData|rocessingInstruction)|StartTag)|NoData|Un(?:expectedEOF|knownEncoding)))|Node(?:CurrentVersion|Type(?:Attribute(?:ListDeclaration)?|C(?:DATASection|omment)|Document(?:Fragment|Type)?|E(?:lement(?:TypeDeclaration)?|ntity(?:Reference)?)|Notation|ProcessingInstruction|Text|Whitespace))|Parser(?:A(?:ddImpliedAttributes|llOptions)|NoOptions|Re(?:placePhysicalEntities|solveExternalEntities)|Skip(?:MetaData|Whitespace)|ValidateDocument)|StatusParse(?:InProgress|NotBegun|Successful))))\\b',
      name: 'support.constant.cf.c'
    },
    {
      match: '\\bDISPATCH_WALLTIME_NOW\\b',
      name: 'support.constant.clib.10.14.c'
    },
    {
      match:
        '\\b(?:FILESEC_(?:ACL(?:_(?:ALLOCSIZE|RAW))?|GR(?:OUP|PUUID)|MODE|OWNER|UUID)|P_(?:ALL|P(?:GID|ID)))\\b',
      name: 'support.constant.clib.c'
    },
    {
      match:
        '\\bDISPATCH_BLOCK_(?:ASSIGN_CURRENT|BARRIER|DETACHED|ENFORCE_QOS_CLASS|INHERIT_QOS_CLASS|NO_QOS_CLASS)\\b',
      name: 'support.constant.dispatch.10.10.c'
    },
    {
      match: '\\bDISPATCH_AUTORELEASE_FREQUENCY_(?:INHERIT|NEVER|WORK_ITEM)\\b',
      name: 'support.constant.dispatch.10.12.c'
    },
    {
      match:
        '\\b(?:alphaStage|b(?:etaStage|old)|condense|developStage|extend|finalStage|italic|k(?:NilOptions|UnknownType|VariableLengthArray)|no(?:Err|rmal)|outline|shadow|underline)\\b',
      name: 'support.constant.mac-classic.c'
    },
    {
      match: '\\bOS(?:BigEndian|LittleEndian|UnknownByteOrder)\\b',
      name: 'support.constant.os.c'
    },
    {
      match:
        '\\bkCGImagePixelFormat(?:Mask|Packed|RGB(?:101010|5(?:55|65)|CIF10))\\b',
      name: 'support.constant.quartz.10.14.c'
    },
    {
      match:
        '\\bCGPDFTagType(?:A(?:nnotation|rt)|B(?:ibliography|lockQuote)|C(?:aption|ode)|D(?:iv|ocument)|F(?:igure|orm(?:ula)?)|Header(?:1|2|3|4|5|6)?|Index|L(?:abel|i(?:nk|st(?:Body|Item)?))|No(?:nStructure|te)|P(?:ar(?:agraph|t)|rivate)|Quote|R(?:eference|uby(?:AnnotationText|BaseText|Punctuation)?)|S(?:ection|pan)|T(?:OC(?:I)?|able(?:Body|DataCell|Footer|Header(?:Cell)?|Row)?)|Warichu(?:Punctiation|Text)?)\\b',
      name: 'support.constant.quartz.10.15.c'
    },
    {
      match:
        '\\b(?:CG(?:GlyphM(?:ax|in)|PDFDataFormat(?:JPEG(?:2000|Encoded)|Raw)|RectM(?:ax(?:XEdge|YEdge)|in(?:XEdge|YEdge)))|kCG(?:A(?:nnotatedSessionEventTap|ssistiveTechHighWindowLevelKey)|B(?:a(?:ck(?:ingStore(?:Buffered|Nonretained|Retained)|stopMenuLevelKey)|seWindowLevelKey)|itmap(?:AlphaInfoMask|ByteOrder(?:16(?:Big|Little)|32(?:Big|Little)|Default|Mask)|Float(?:Components|InfoMask))|lendMode(?:C(?:lear|o(?:lor(?:Burn|Dodge)?|py))|D(?:arken|estination(?:Atop|In|O(?:ut|ver))|ifference)|Exclusion|H(?:ardLight|ue)|L(?:ighten|uminosity)|Multiply|Normal|Overlay|Plus(?:Darker|Lighter)|S(?:aturation|creen|o(?:ftLight|urce(?:Atop|In|Out)))|XOR))|C(?:aptureNo(?:Fill|Options)|o(?:lor(?:ConversionTransform(?:ApplySpace|FromSpace|ToSpace)|SpaceModel(?:CMYK|DeviceN|Indexed|Lab|Monochrome|Pattern|RGB|Unknown|XYZ))|nfigure(?:For(?:AppOnly|Session)|Permanently))|ursorWindowLevelKey)|D(?:esktop(?:IconWindowLevelKey|WindowLevelKey)|isplay(?:AddFlag|BeginConfigurationFlag|D(?:esktopShapeChangedFlag|isabledFlag)|EnabledFlag|M(?:irrorFlag|ovedFlag)|RemoveFlag|S(?:etM(?:ainFlag|odeFlag)|tream(?:FrameStatus(?:Frame(?:Blank|Complete|Idle)|Stopped)|Update(?:DirtyRects|MovedRects|Re(?:ducedDirtyRects|freshedRects))))|UnMirrorFlag)|ockWindowLevelKey|raggingWindowLevelKey)|E(?:rror(?:CannotComplete|Failure|I(?:llegalArgument|nvalid(?:Con(?:nection|text)|Operation))|No(?:neAvailable|tImplemented)|RangeCheck|Success|TypeCheck)|vent(?:F(?:ilterMaskPermit(?:Local(?:KeyboardEvents|MouseEvents)|SystemDefinedEvents)|lag(?:Mask(?:Al(?:phaShift|ternate)|Co(?:mmand|ntrol)|Help|N(?:onCoalesced|umericPad)|S(?:econdaryFn|hift))|sChanged))|Key(?:Down|Up)|LeftMouse(?:D(?:own|ragged)|Up)|Mouse(?:Moved|Subtype(?:Default|TabletP(?:oint|roximity)))|Null|OtherMouse(?:D(?:own|ragged)|Up)|RightMouse(?:D(?:own|ragged)|Up)|S(?:crollWheel|ource(?:GroupID|State(?:CombinedSessionState|HIDSystemState|ID|Private)|U(?:nixProcessID|ser(?:Data|ID)))|uppressionState(?:RemoteMouseDrag|SuppressionInterval))|Ta(?:bletP(?:ointer|roximity)|p(?:DisabledBy(?:Timeout|UserInput)|Option(?:Default|ListenOnly))|rget(?:ProcessSerialNumber|UnixProcessID))|UnacceleratedPointerMovement(?:X|Y)))|F(?:loatingWindowLevelKey|ontPostScriptFormatType(?:1|3|42))|G(?:esturePhase(?:Began|C(?:ancelled|hanged)|Ended|MayBegin|None)|radientDraws(?:AfterEndLocation|BeforeStartLocation))|H(?:IDEventTap|e(?:adInsertEventTap|lpWindowLevelKey))|I(?:mage(?:Alpha(?:First|Last|None(?:Skip(?:First|Last))?|Only|Premultiplied(?:First|Last))|ByteOrder(?:16(?:Big|Little)|32(?:Big|Little)|Default|Mask))|nterpolation(?:Default|High|Low|Medium|None))|KeyboardEvent(?:Autorepeat|Key(?:boardType|code))|Line(?:Cap(?:Butt|Round|Square)|Join(?:Bevel|Miter|Round))|M(?:a(?:inMenuWindowLevelKey|ximumWindowLevelKey)|inimumWindowLevelKey|o(?:dalPanelWindowLevelKey|mentumScrollPhase(?:Begin|Continue|End|None)|use(?:Button(?:Center|Left|Right)|Event(?:ButtonNumber|ClickState|Delta(?:X|Y)|InstantMouser|Number|Pressure|Subtype|WindowUnderMousePointer(?:ThatCanHandleThisEvent)?))))|N(?:ormalWindowLevelKey|umberOf(?:EventSuppressionStates|WindowLevelKeys))|OverlayWindowLevelKey|P(?:DF(?:A(?:llows(?:Co(?:mmenting|ntent(?:Accessibility|Copying))|Document(?:Assembly|Changes)|FormFieldEntry|HighQualityPrinting|LowQualityPrinting)|rtBox)|BleedBox|CropBox|MediaBox|ObjectType(?:Array|Boolean|Dictionary|Integer|N(?:ame|ull)|Real|Str(?:eam|ing))|TrimBox)|at(?:h(?:E(?:OFill(?:Stroke)?|lement(?:Add(?:CurveToPoint|LineToPoint|QuadCurveToPoint)|CloseSubpath|MoveToPoint))|Fill(?:Stroke)?|Stroke)|ternTiling(?:ConstantSpacing(?:MinimalDistortion)?|NoDistortion))|opUpMenuWindowLevelKey)|RenderingIntent(?:AbsoluteColorimetric|Default|Perceptual|RelativeColorimetric|Saturation)|S(?:cr(?:een(?:SaverWindowLevelKey|UpdateOperation(?:Move|Re(?:ducedDirtyRectangleCount|fresh)))|oll(?:EventUnit(?:Line|Pixel)|Phase(?:Began|C(?:ancelled|hanged)|Ended|MayBegin)|WheelEvent(?:DeltaAxis(?:1|2|3)|FixedPtDeltaAxis(?:1|2|3)|I(?:nstantMouser|sContinuous)|MomentumPhase|PointDeltaAxis(?:1|2|3)|Scroll(?:Count|Phase))))|essionEventTap|tatusWindowLevelKey)|T(?:a(?:blet(?:Event(?:DeviceID|Point(?:Buttons|Pressure|X|Y|Z)|Rotation|T(?:angentialPressure|ilt(?:X|Y))|Vendor(?:1|2|3))|ProximityEvent(?:CapabilityMask|DeviceID|EnterProximity|Pointer(?:ID|Type)|SystemTabletID|TabletID|Vendor(?:ID|Pointer(?:SerialNumber|Type)|UniqueID)))|ilAppendEventTap)|ext(?:Clip|Fill(?:Clip|Stroke(?:Clip)?)?|Invisible|Stroke(?:Clip)?)|ornOffMenuWindowLevelKey)|UtilityWindowLevelKey|Window(?:Image(?:B(?:estResolution|oundsIgnoreFraming)|Default|NominalResolution|OnlyShadows|ShouldBeOpaque)|List(?:ExcludeDesktopElements|Option(?:All|IncludingWindow|OnScreen(?:AboveWindow|BelowWindow|Only)))|Sharing(?:None|Read(?:Only|Write)))))\\b',
      name: 'support.constant.quartz.c'
    },
    {match: '\\bcl_device_id\\b', name: 'support.type.10.10.c'},
    {
      match:
        '\\b(?:JSTypedArrayType|SecKey(?:Algorithm|KeyExchangeParameter)|os_unfair_lock(?:_t)?)\\b',
      name: 'support.type.10.12.c'
    },
    {name: 'support.type.c'},
    {
      match:
        '\\b(?:CF(?:A(?:bsoluteTime|llocator(?:AllocateCallBack|Co(?:ntext|pyDescriptionCallBack)|DeallocateCallBack|PreferredSizeCallBack|Re(?:allocateCallBack|f|leaseCallBack|tainCallBack))|rray(?:ApplierFunction|C(?:allBacks|opyDescriptionCallBack)|EqualCallBack|Re(?:f|leaseCallBack|tainCallBack))|ttributedStringRef)|B(?:ag(?:ApplierFunction|C(?:allBacks|opyDescriptionCallBack)|EqualCallBack|HashCallBack|Re(?:f|leaseCallBack|tainCallBack))|i(?:naryHeap(?:ApplierFunction|C(?:allBacks|ompareContext)|Ref)|t(?:VectorRef)?)|ooleanRef|undleRef(?:Num)?|yteOrder)|C(?:alendar(?:Identifier|Ref|Unit)|haracterSet(?:PredefinedSet|Ref)|ompar(?:atorFunction|isonResult))|D(?:at(?:a(?:Ref|SearchFlags)|e(?:Formatter(?:Key|Ref|Style)|Ref))|ictionary(?:ApplierFunction|CopyDescriptionCallBack|EqualCallBack|HashCallBack|KeyCallBacks|Re(?:f|leaseCallBack|tainCallBack)|ValueCallBacks))|Error(?:Domain|Ref)|File(?:Descriptor(?:C(?:allBack|ontext)|NativeDescriptor|Ref)|Security(?:ClearOptions|Ref))|GregorianUnitFlags|HashCode|I(?:SO8601DateFormatOptions|ndex)|Locale(?:Identifier|Key|LanguageDirection|Ref)|M(?:achPort(?:C(?:allBack|ontext)|InvalidationCallBack|Ref)|essagePort(?:C(?:allBack|ontext)|InvalidationCallBack|Ref)|utable(?:A(?:rrayRef|ttributedStringRef)|B(?:agRef|itVectorRef)|CharacterSetRef|D(?:ataRef|ictionaryRef)|S(?:etRef|tringRef)))|N(?:otification(?:C(?:allback|enterRef)|Name|SuspensionBehavior)|u(?:llRef|mber(?:Formatter(?:Key|OptionFlags|PadPosition|R(?:ef|oundingMode)|Style)|Ref|Type)))|OptionFlags|P(?:lugIn(?:DynamicRegisterFunction|FactoryFunction|Instance(?:DeallocateInstanceDataFunction|GetInterfaceFunction|Ref)|Ref|UnloadFunction)|ropertyList(?:Format|MutabilityOptions|Ref))|R(?:ange|eadStream(?:ClientCallBack|Ref)|unLoop(?:Activity|Mode|Observer(?:C(?:allBack|ontext)|Ref)|R(?:ef|unResult)|Source(?:Context(?:1)?|Ref)|Timer(?:C(?:allBack|ontext)|Ref)))|S(?:et(?:ApplierFunction|C(?:allBacks|opyDescriptionCallBack)|EqualCallBack|HashCallBack|Re(?:f|leaseCallBack|tainCallBack))|ocket(?:C(?:allBack(?:Type)?|ontext)|Error|NativeHandle|Ref|Signature)|tr(?:eam(?:ClientContext|E(?:rror(?:Domain)?|ventType)|PropertyKey|Status)|ing(?:BuiltInEncodings|CompareFlags|Encoding(?:s)?|InlineBuffer|NormalizationForm|Ref|Tokenizer(?:Ref|TokenType)))|wappedFloat(?:32|64))|T(?:ime(?:Interval|Zone(?:NameStyle|Ref))|ree(?:ApplierFunction|Co(?:ntext|pyDescriptionCallBack)|Re(?:f|leaseCallBack|tainCallBack))|ype(?:ID|Ref))|U(?:RL(?:Bookmark(?:CreationOptions|FileCreationOptions|ResolutionOptions)|ComponentType|E(?:numerator(?:Options|Re(?:f|sult))|rror)|PathStyle|Ref)|UID(?:Bytes|Ref)|serNotification(?:CallBack|Ref))|WriteStream(?:ClientCallBack|Ref)|XML(?:Attribute(?:DeclarationInfo|ListDeclarationInfo)|Document(?:Info|TypeInfo)|E(?:lement(?:Info|TypeDeclarationInfo)|ntity(?:Info|ReferenceInfo|TypeCode)|xternalID)|No(?:de(?:Ref|TypeCode)|tationInfo)|P(?:arser(?:AddChildCallBack|C(?:allBacks|o(?:ntext|pyDescriptionCallBack)|reateXMLStructureCallBack)|EndXMLStructureCallBack|HandleErrorCallBack|Options|Re(?:f|leaseCallBack|solveExternalEntityCallBack|tainCallBack)|StatusCode)|rocessingInstructionInfo)|TreeRef))|FSRef)\\b',
      name: 'support.type.cf.c'
    },
    {
      match:
        '\\b(?:accessx_descriptor|blk(?:cnt_t|size_t)|c(?:addr_t|lock(?:_t|i(?:d_t|nfo))|t_rune_t)|d(?:addr_t|ev_t|i(?:spatch_time_t|v_t)|ouble_t)|e(?:rrno_t|xception)|f(?:bootstraptransfer(?:_t)?|c(?:hecklv(?:_t)?|odeblobs(?:_t)?)|d_(?:mask|set)|i(?:lesec_(?:property_t|t)|xpt_t)|lo(?:at_t|ck(?:timeout)?)|punchhole(?:_t)?|s(?:blkcnt_t|filcnt_t|i(?:d(?:_t)?|gnatures(?:_t)?)|obj_id(?:_t)?|pecread(?:_t)?|searchblock|tore(?:_t)?)|trimactivefile(?:_t)?)|g(?:id_t|uid_t)|i(?:d(?:_t|type_t)|n(?:_(?:addr_t|port_t)|o(?:64_t|_t)|t(?:16_t|32_t|64_t|8_t|_(?:fast(?:16_t|32_t|64_t|8_t)|least(?:16_t|32_t|64_t|8_t))|max_t|ptr_t))|ovec|timerval)|jmp_buf|key_t|l(?:conv|div_t|ldiv_t|og2phys)|m(?:a(?:ch_port_t|x_align_t)|ode_t)|nlink_t|off_t|p(?:id_t|roc_rlimit_control_wakeupmon|trdiff_t)|q(?:addr_t|uad_t)|r(?:advisory|egister_t|lim(?:_t|it)|size_t|u(?:ne_t|sage(?:_info_(?:current|t|v(?:0|1|2|3|4)))?))|s(?:a_family_t|e(?:archstate|gsz_t)|i(?:g(?:_(?:atomic_t|t)|action|event|info_t|jmp_buf|s(?:et_t|tack)|vec)|md_(?:double(?:2x(?:2|3|4)|3x(?:2|3|4)|4x(?:2|3|4))|float(?:2x(?:2|3|4)|3x(?:2|3|4)|4x(?:2|3|4))|quat(?:d|f))|ze_t)|ocklen_t|size_t|tack_t|useconds_t|wblk_t|yscall_arg_t)|t(?:ime(?:_t|spec|val(?:64)?|zone)|m)|u(?:_(?:char|int(?:16_t|32_t|64_t|8_t)?|long|quad_t|short)|context_t|i(?:d_t|nt(?:16_t|32_t|64_t|8_t|_(?:fast(?:16_t|32_t|64_t|8_t)|least(?:16_t|32_t|64_t|8_t))|max_t|ptr_t)?)|s(?:e(?:conds_t|r_(?:addr_t|long_t|off_t|s(?:ize_t|size_t)|time_t|ulong_t))|hort)|uid_t)|va_list|w(?:char_t|int_t))\\b',
      name: 'support.type.clib.c'
    },
    {
      match:
        '\\bdispatch_(?:autorelease_frequency_t|block_(?:flags_t|t)|channel_s|data_(?:s|t)|f(?:d_t|unction_t)|group_(?:s|t)|io_(?:close_flags_t|handler_t|interval_flags_t|s|t(?:ype_t)?)|mach_(?:msg_s|s)|o(?:bject_(?:s|t)|nce_t)|q(?:os_class_t|ueue_(?:attr_(?:s|t)|concurrent_t|global_t|main_t|priority_t|s(?:erial_t)?|t))|s(?:emaphore_(?:s|t)|ource_(?:m(?:ach_(?:recv_flags_t|send_flags_t)|emorypressure_flags_t)|proc_flags_t|s|t(?:imer_flags_t|ype_(?:s|t))?|vnode_flags_t))|workloop_t)\\b',
      name: 'support.type.dispatch.c'
    },
    {
      match:
        '\\b(?:AbsoluteTime|B(?:oolean|yte(?:Count|Offset|Ptr)?)|C(?:harParameter|o(?:mpTimeValue|nst(?:LogicalAddress|Str(?:15Param|2(?:55Param|7Param)|3(?:1Param|2Param)|63Param|FileNameParam|ingPtr))))|Duration|F(?:ixed(?:P(?:oint|tr)|Rect)?|loat(?:32(?:Point)?|64|80|96)|ourCharCode|ract(?:Ptr)?)|Handle|ItemCount|L(?:angCode|ogicalAddress)|NumVersion(?:Variant(?:Handle|Ptr)?)?|O(?:S(?:Err|Status|Type(?:Ptr)?)|ptionBits)|P(?:BVersion|RefCon|hysicalAddress|oint(?:Ptr)?|roc(?:Handle|Ptr|essSerialNumber(?:Ptr)?)|tr)|Re(?:ct(?:Ptr)?|gi(?:onCode|ster68kProcPtr)|sType(?:Ptr)?)|S(?:Int(?:16|32|64|8)|RefCon|criptCode|hortFixed(?:Ptr)?|i(?:gnedByte|ze)|t(?:r(?:15|2(?:55|7)|3(?:1|2(?:Field)?)|63|FileName|ing(?:Handle|Ptr))|yle(?:Field|Parameter)?))|Time(?:Base(?:Record)?|Record|Scale|Value(?:64)?)|U(?:Int(?:16|32|64|8)|RefCon|TF(?:16Char|32Char|8Char)|n(?:i(?:Char(?:Count(?:Ptr)?|Ptr)?|codeScalarValue|versalProc(?:Handle|Ptr))|signed(?:Fixed(?:Ptr)?|Wide(?:Ptr)?)))|V(?:HSelect|ersRec(?:Hndl|Ptr)?)|WidePtr|extended(?:80|96)|wide)\\b',
      name: 'support.type.mac-classic.c'
    },
    {
      match:
        '\\bpthread_(?:attr_t|cond(?:_t|attr_t)|key_t|mutex(?:_t|attr_t)|once_t|rwlock(?:_t|attr_t)|t)\\b',
      name: 'support.type.pthread.c'
    },
    {
      match:
        '\\b(?:CG(?:AffineTransform|B(?:itmap(?:ContextReleaseDataCallback|Info)|lendMode|uttonCount)|C(?:aptureOptions|harCode|o(?:lor(?:ConversionInfo(?:Ref|TransformType)?|Re(?:f|nderingIntent)|Space(?:Model|Ref)?)?|n(?:figureOption|text(?:Ref)?)))|D(?:ata(?:Consumer(?:Callbacks|PutBytesCallback|Re(?:f|leaseInfoCallback))?|Provider(?:DirectCallbacks|GetByte(?:PointerCallback|s(?:AtPositionCallback|Callback))|Re(?:f|lease(?:BytePointerCallback|DataCallback|InfoCallback)|windCallback)|S(?:equentialCallbacks|kipForwardCallback))?)|eviceColor|i(?:rectDisplayID|splay(?:BlendFraction|C(?:hangeSummaryFlags|o(?:nfigRef|unt))|Err|Fade(?:Interval|ReservationToken)|Mode(?:Ref)?|Re(?:configurationCallBack|servationInterval)|Stream(?:Frame(?:AvailableHandler|Status)|Ref|Update(?:Re(?:ctType|f))?)?)))|E(?:rror|vent(?:Err|F(?:i(?:eld|lterMask)|lags)|M(?:ask|ouseSubtype)|Ref|S(?:ource(?:KeyboardType|Ref|StateID)|uppressionState)|T(?:ap(?:CallBack|Information|Location|Options|P(?:lacement|roxy))|imestamp|ype)))|F(?:loat|ont(?:Index|PostScriptFormat|Ref)?|unction(?:Callbacks|EvaluateCallback|Re(?:f|leaseInfoCallback))?)|G(?:ammaValue|esturePhase|lyph(?:DeprecatedEnum)?|radient(?:DrawingOptions|Ref)?)|I(?:mage(?:AlphaInfo|ByteOrderInfo|PixelFormatInfo|Ref)?|nterpolationQuality)|KeyCode|L(?:ayer(?:Ref)?|ine(?:Cap|Join))|M(?:o(?:mentumScrollPhase|useButton)|utablePathRef)|OpenGLDisplayMask|P(?:DF(?:A(?:ccessPermissions|rray(?:Ref)?)|Bo(?:olean|x)|ContentStream(?:Ref)?|D(?:ataFormat|ictionary(?:ApplierFunction|Ref)?|ocument(?:Ref)?)|Integer|O(?:bject(?:Ref|Type)?|perator(?:Callback|Table(?:Ref)?))|Page(?:Ref)?|Real|S(?:canner(?:Ref)?|tr(?:eam(?:Ref)?|ing(?:Ref)?))|Tag(?:Property|Type))|SConverter(?:Begin(?:DocumentCallback|PageCallback)|Callbacks|End(?:DocumentCallback|PageCallback)|MessageCallback|ProgressCallback|Re(?:f|leaseInfoCallback))?|at(?:h(?:Appl(?:ierFunction|yBlock)|DrawingMode|Element(?:Type)?|Ref)?|tern(?:Callbacks|DrawPatternCallback|Re(?:f|leaseInfoCallback)|Tiling)?)|oint)|Re(?:ct(?:Count|Edge)?|freshRate)|S(?:cr(?:een(?:RefreshCallback|Update(?:Move(?:Callback|Delta)|Operation))|oll(?:EventUnit|Phase))|hading(?:Ref)?|ize)|Text(?:DrawingMode|Encoding)|Vector|W(?:heelCount|indow(?:BackingType|I(?:D|mageOption)|L(?:evel(?:Key)?|istOption)|SharingType)))|IOSurfaceRef)\\b',
      name: 'support.type.quartz.c'
    },
    {
      match:
        '\\b(?:k(?:C(?:FHTTPVersion2_0|GImage(?:Destination(?:EmbedThumbnail|ImageMaxPixelSize)|MetadataShouldExcludeGPS|Property(?:8BIMVersion|APNG(?:DelayTime|LoopCount|UnclampedDelayTime)|GPSHPositioningError|MakerAppleDictionary))|T(?:FontOpenTypeFeature(?:Tag|Value)|RubyAnnotationAttributeName)|V(?:ImageBufferAlphaChannelIsOpaque|PixelFormatCo(?:mponentRange(?:_(?:FullRange|VideoRange|WideRange))?|ntains(?:RGB|YCbCr))))|Sec(?:AttrAccess(?:Control|ibleWhenPasscodeSetThisDeviceOnly)|UseOperationPrompt)|UTType(?:3DContent|A(?:VIMovie|pple(?:ProtectedMPEG4Video|Script)|ssemblyLanguageSource|udioInterchangeFileFormat)|B(?:inaryPropertyList|ookmark|zip2Archive)|C(?:alendarEvent|ommaSeparatedText)|DelimitedText|E(?:lectronicPublication|mailMessage)|Font|GNUZipArchive|InternetLocation|J(?:SON|ava(?:Archive|Class|Script))|Log|M(?:3UPlaylist|IDIAudio|PEG2(?:TransportStream|Video))|OSAScript(?:Bundle)?|P(?:HPScript|KCS12|erlScript|l(?:aylist|uginBundle)|r(?:esentation|opertyList)|ythonScript)|QuickLookGenerator|R(?:awImage|ubyScript)|S(?:c(?:alableVectorGraphics|ript)|hellScript|p(?:otlightImporter|readsheet)|ystemPreferencesPane)|T(?:abSeparatedText|oDoItem)|U(?:RLBookmarkData|TF8TabSeparatedText|nixExecutable)|W(?:aveformAudio|indowsExecutable)|X(?:509Certificate|MLPropertyList|PCService)|ZipArchive))|matrix_identity_(?:double(?:2x2|3x3|4x4)|float(?:2x2|3x3|4x4)))\\b',
      name: 'support.variable.10.10.c'
    },
    {
      match:
        '\\bk(?:A(?:XListItem(?:IndexTextAttribute|LevelTextAttribute|PrefixTextAttribute)|udioComponent(?:InstanceInvalidationNotification|RegistrationsChangedNotification))|C(?:FStreamPropertySocketExtendedBackgroundIdleMode|GImage(?:Property(?:ExifSubsecTimeOriginal|PNGCompressionFilter|TIFFTile(?:Length|Width))|SourceSubsampleFactor)|V(?:ImageBuffer(?:ColorPrimaries_(?:DCI_P3|ITU_R_2020|P3_D65)|TransferFunction_ITU_R_2020|YCbCrMatrix_(?:DCI_P3|ITU_R_2020|P3_D65))|MetalTextureCacheMaximumTextureAgeKey|PixelBuffer(?:MetalCompatibilityKey|OpenGLTextureCacheCompatibilityKey)))|MDItemHTMLContent|Sec(?:A(?:CLAuthorization(?:Integrity|PartitionID)|ttrSyncViewHint)|PolicyApplePayIssuerEncryption|TrustCertificateTransparency|UseAuthentication(?:Context|UI(?:Allow|Fail|Skip)?))|UTTypeSwiftSource)\\b',
      name: 'support.variable.10.11.c'
    },
    {
      match:
        '\\bk(?:C(?:FStreamNetworkServiceTypeCallSignaling|GImage(?:DestinationOptimizeColorForSharing|PropertyDNG(?:AsShot(?:Neutral|WhiteXY)|B(?:aseline(?:Exposure|Noise|Sharpness)|lackLevel)|C(?:a(?:librationIlluminant(?:1|2)|meraCalibration(?:1|2|Signature))|olorMatrix(?:1|2))|FixVignetteRadial|NoiseProfile|Pr(?:ivateData|ofileCalibrationSignature)|W(?:arp(?:Fisheye|Rectilinear)|hiteLevel)))|T(?:BackgroundColorAttributeName|FontDownloadedAttribute|HorizontalInVerticalFormsAttributeName|RubyAnnotationS(?:caleToFitAttributeName|izeFactorAttributeName)|TrackingAttributeName)|VImageBufferTransferFunction_SMPTE_ST_428_1)|IOSurfacePixelSizeCastingAllowed|Sec(?:Attr(?:AccessGroupToken|KeyTypeECSECPrimeRandom|TokenID(?:SecureEnclave)?)|Key(?:Algorithm(?:EC(?:D(?:HKeyExchange(?:Cofactor(?:X963SHA(?:1|2(?:24|56)|384|512))?|Standard(?:X963SHA(?:1|2(?:24|56)|384|512))?)|SASignature(?:DigestX962(?:SHA(?:1|2(?:24|56)|384|512))?|MessageX962SHA(?:1|2(?:24|56)|384|512)|RFC4754))|IESEncryption(?:CofactorX963SHA(?:1AESGCM|2(?:24AESGCM|56AESGCM)|384AESGCM|512AESGCM)|StandardX963SHA(?:1AESGCM|2(?:24AESGCM|56AESGCM)|384AESGCM|512AESGCM)))|RSA(?:Encryption(?:OAEPSHA(?:1(?:AESGCM)?|2(?:24(?:AESGCM)?|56(?:AESGCM)?)|384(?:AESGCM)?|512(?:AESGCM)?)|PKCS1|Raw)|Signature(?:DigestPKCS1v15(?:Raw|SHA(?:1|2(?:24|56)|384|512))|MessagePKCS1v15SHA(?:1|2(?:24|56)|384|512)|Raw)))|KeyExchangeParameter(?:RequestedSize|SharedInfo)))|UTTypeLivePhoto)\\b',
      name: 'support.variable.10.12.c'
    },
    {
      match:
        '\\bk(?:C(?:GImage(?:AuxiliaryData(?:Info(?:Data(?:Description)?|Metadata)|TypeD(?:epth|isparity))|Metadata(?:NamespaceIPTCExtension|PrefixIPTCExtension)|Property(?:AuxiliaryData(?:Type)?|BytesPerRow|FileContentsDictionary|Height|I(?:PTCExt(?:A(?:boutCvTerm(?:CvId|Id|Name|RefinedAbout)?|ddlModelInfo|rtwork(?:C(?:ircaDateCreated|o(?:nt(?:entDescription|ributionDescription)|pyright(?:Notice|Owner(?:ID|Name)))|reator(?:ID)?)|DateCreated|Licensor(?:ID|Name)|OrObject|PhysicalDescription|S(?:ource(?:Inv(?:URL|entoryNo))?|tylePeriod)|Title)|udio(?:Bitrate(?:Mode)?|ChannelCount))|C(?:ircaDateCreated|o(?:nt(?:ainerFormat(?:Identifier|Name)?|r(?:ibutor(?:Identifier|Name|Role)?|olledVocabularyTerm))|pyrightYear)|reator(?:Identifier|Name|Role)?)|D(?:ataOnScreen(?:Region(?:D|H|Text|Unit|W|X|Y)?)?|igital(?:ImageGUID|Source(?:FileType|Type))|opesheet(?:Link(?:Link(?:Qualifier)?)?)?)|E(?:mb(?:dEncRightsExpr|eddedEncodedRightsExpr(?:LangID|Type)?)|pisode(?:Identifier|N(?:ame|umber))?|vent|xternalMetadataLink)|FeedIdentifier|Genre(?:Cv(?:Id|Term(?:Id|Name|RefinedAbout)))?|Headline|IPTCLastEdited|L(?:inkedEnc(?:RightsExpr|odedRightsExpr(?:LangID|Type)?)|ocation(?:C(?:ity|ountry(?:Code|Name)|reated)|GPS(?:Altitude|L(?:atitude|ongitude))|Identifier|Location(?:Id|Name)|ProvinceState|S(?:hown|ublocation)|WorldRegion))|M(?:axAvail(?:Height|Width)|odelAge)|OrganisationInImage(?:Code|Name)|P(?:erson(?:Heard(?:Identifier|Name)?|InImage(?:C(?:haracteristic|vTerm(?:CvId|Id|Name|RefinedAbout))|Description|Id|Name|WDetails)?)|roductInImage(?:Description|GTIN|Name)?|ublicationEvent(?:Date|Identifier|Name)?)|R(?:ating(?:R(?:atingRegion|egion(?:C(?:ity|ountry(?:Code|Name))|GPS(?:Altitude|L(?:atitude|ongitude))|Identifier|Location(?:Id|Name)|ProvinceState|Sublocation|WorldRegion))|S(?:caleM(?:axValue|inValue)|ourceLink)|Value(?:LogoLink)?)?|e(?:gistry(?:EntryRole|I(?:D|temID)|OrganisationID)|leaseReady))|S(?:e(?:ason(?:Identifier|N(?:ame|umber))?|ries(?:Identifier|Name)?)|hownEvent(?:Identifier|Name)?|t(?:orylineIdentifier|reamReady|ylePeriod)|upplyChainSource(?:Identifier|Name)?)|T(?:emporalCoverage(?:From|To)?|ranscript(?:Link(?:Link(?:Qualifier)?)?)?)|Vi(?:deo(?:Bitrate(?:Mode)?|DisplayAspectRatio|EncodingProfile|S(?:hotType(?:Identifier|Name)?|treamsCount))|sualColor)|WorkflowTag(?:Cv(?:Id|Term(?:Id|Name|RefinedAbout)))?)|mage(?:Count|s))|NamedColorSpace|P(?:ixelFormat|rimaryImage)|ThumbnailImages|Width))|T(?:BaselineOffsetAttributeName|FontVariationAxisHiddenKey)|V(?:ImageBuffer(?:ContentLightLevelInfoKey|MasteringDisplayColorVolumeKey|TransferFunction_(?:ITU_R_2100_HLG|SMPTE_ST_2084_PQ|sRGB))|MetalTextureUsage))|IOSurface(?:Plane(?:BitsPerElement|Component(?:Bit(?:Depths|Offsets)|Names|Ranges|Types))|Subsampling)|Sec(?:A(?:CLAuthorizationChange(?:ACL|Owner)|ttrPersist(?:antReference|entReference))|KeyAlgorithm(?:ECIESEncryption(?:CofactorVariableIVX963SHA(?:2(?:24AESGCM|56AESGCM)|384AESGCM|512AESGCM)|StandardVariableIVX963SHA(?:2(?:24AESGCM|56AESGCM)|384AESGCM|512AESGCM))|RSASignature(?:DigestPSSSHA(?:1|2(?:24|56)|384|512)|MessagePSSSHA(?:1|2(?:24|56)|384|512)))))\\b',
      name: 'support.variable.10.13.c'
    },
    {
      match:
        '\\bkC(?:GImage(?:AuxiliaryDataTypePortraitEffectsMatte|Property(?:DNG(?:A(?:ctiveArea|n(?:alogBalance|tiAliasStrength)|sShot(?:ICCProfile|Pr(?:eProfileMatrix|ofileName)))|B(?:a(?:selineExposureOffset|yerGreenSplit)|estQualityScale|lackLevel(?:Delta(?:H|V)|RepeatDim))|C(?:FA(?:Layout|PlaneColor)|hromaBlurRadius|olorimetricReference|urrent(?:ICCProfile|PreProfileMatrix))|Default(?:BlackRender|Crop(?:Origin|Size)|Scale|UserCrop)|ExtraCameraProfiles|ForwardMatrix(?:1|2)|Linear(?:ResponseLimit|izationTable)|Ma(?:kerNoteSafety|skedAreas)|N(?:ewRawImageDigest|oiseReductionApplied)|O(?:pcodeList(?:1|2|3)|riginal(?:BestQualityFinalSize|Default(?:CropSize|FinalSize)|RawFile(?:D(?:ata|igest)|Name)))|Pr(?:eview(?:Application(?:Name|Version)|ColorSpace|DateTime|Settings(?:Digest|Name))|ofile(?:Copyright|EmbedPolicy|HueSatMap(?:D(?:ata(?:1|2)|ims)|Encoding)|LookTable(?:D(?:ata|ims)|Encoding)|Name|ToneCurve))|R(?:aw(?:DataUniqueID|ImageDigest|ToPreviewGain)|eductionMatrix(?:1|2)|owInterleaveFactor)|S(?:hadowScale|ubTileBlockSize))|PNG(?:Comment|Disclaimer|Source|Warning)))|TTypesetterOptionAllowUnboundedLayout|V(?:ImageBufferTransferFunction_Linear|PixelFormatContainsGrayscale))\\b',
      name: 'support.variable.10.14.c'
    },
    {
      match:
        '\\bk(?:C(?:FStreamProperty(?:Allow(?:ConstrainedNetworkAccess|ExpensiveNetworkAccess)|ConnectionIsExpensive)|GImage(?:A(?:nimation(?:DelayTime|LoopCount|StartIndex)|uxiliaryDataTypeSemanticSegmentation(?:HairMatte|SkinMatte|TeethMatte))|Property(?:APNG(?:CanvasPixel(?:Height|Width)|FrameInfoArray)|Exif(?:CompositeImage|OffsetTime(?:Digitized|Original)?|Source(?:ExposureTimesOfCompositeImage|ImageNumberOfCompositeImage))|GIF(?:CanvasPixel(?:Height|Width)|FrameInfoArray)|HEICS(?:CanvasPixel(?:Height|Width)|D(?:elayTime|ictionary)|FrameInfoArray|LoopCount|UnclampedDelayTime)))|TFontFeature(?:SampleTextKey|TooltipTextKey)|V(?:ImageBufferAlphaChannelMode(?:Key|_(?:PremultipliedAlpha|StraightAlpha))|MetalTextureStorageMode))|MIDIPropertyNameConfigurationDictionary|Sec(?:PropertyType(?:Array|Number)|UseDataProtectionKeychain))\\b',
      name: 'support.variable.10.15.c'
    },
    {match: '\\bkColorSyncExtendedRange\\b', name: 'support.variable.10.16.c'},
    {
      match:
        '\\bk(?:C(?:FStream(?:NetworkServiceType(?:AVStreaming|Responsive(?:AV|Data))|Property(?:ConnectionIsCellular|NoCellular))|GImage(?:Destination(?:DateTime|Me(?:rgeMetadata|tadata)|Orientation)|Metadata(?:EnumerateRecursively|Namespace(?:DublinCore|Exif(?:Aux)?|IPTCCore|Photoshop|TIFF|XMP(?:Basic|Rights))|Prefix(?:DublinCore|Exif(?:Aux)?|IPTCCore|Photoshop|TIFF|XMP(?:Basic|Rights))|ShouldExcludeXMP))|T(?:Baseline(?:Class(?:AttributeName|Hanging|Ideographic(?:Centered|High|Low)|Math|Roman)|InfoAttributeName|OriginalFont|Reference(?:Font|InfoAttributeName))|FontD(?:escriptorMatching(?:CurrentAssetSize|Descriptors|Error|Percentage|Result|SourceDescriptor|Total(?:AssetSize|DownloadedSize))|ownloadableAttribute)|WritingDirectionAttributeName)|VImageBufferColorPrimaries_P22)|Sec(?:O(?:AEP(?:EncodingParametersAttributeName|M(?:GF1DigestAlgorithmAttributeName|essageLengthAttributeName))|IDSRVName)|P(?:addingOAEPKey|olicyAppleTimeStamping|rivateKeyAttrs|ublicKeyAttrs)))\\b',
      name: 'support.variable.10.8.c'
    },
    {
      match:
        '\\b(?:XPC_ACTIVITY_(?:ALLOW_BATTERY|CHECK_IN|DELAY|GRACE_PERIOD|INTERVAL(?:_(?:1(?:5_MIN|_(?:DAY|HOUR|MIN))|30_MIN|4_HOURS|5_MIN|7_DAYS|8_HOURS))?|PRIORITY(?:_(?:MAINTENANCE|UTILITY))?|RE(?:PEATING|QUIRE_SCREEN_SLEEP))|k(?:AX(?:MarkedMisspelledTextAttribute|TrustedCheckOptionPrompt)|C(?:FStreamPropertySSLContext|GImage(?:Metadata(?:NamespaceExifEX|PrefixExifEX)|Property(?:Exif(?:ISOSpeed(?:Latitude(?:yyy|zzz))?|RecommendedExposureIndex|S(?:ensitivityType|tandardOutputSensitivity))|OpenEXR(?:AspectRatio|Dictionary))|SourceShouldCacheImmediately)|TLanguageAttributeName)|S(?:ec(?:Attr(?:Access(?:Group|ible(?:AfterFirstUnlock(?:ThisDeviceOnly)?|WhenUnlocked(?:ThisDeviceOnly)?)?)|KeyTypeEC|Synchronizable(?:Any)?)|Policy(?:Apple(?:PassbookSigning|Revocation)|RevocationFlags|TeamIdentifier)|Trust(?:E(?:valuationDate|xtendedValidation)|OrganizationName|Re(?:sultValue|vocation(?:Checked|ValidUntilDate))))|peech(?:AudioOutputFormatProperty|Output(?:ChannelMapProperty|ToFileDescriptorProperty)|SynthExtensionProperty)))|vm_kernel_page_(?:mask|s(?:hift|ize)))\\b',
      name: 'support.variable.10.9.c'
    },
    {name: 'support.variable.c'},
    {
      match:
        '\\bkCF(?:Islamic(?:TabularCalendar|UmmAlQuraCalendar)|URL(?:AddedToDirectoryDateKey|DocumentIdentifierKey|GenerationIdentifierKey|QuarantinePropertiesKey))\\b',
      name: 'support.variable.cf.10.10.c'
    },
    {
      match: '\\bkCFURL(?:ApplicationIsScriptableKey|IsApplicationKey)\\b',
      name: 'support.variable.cf.10.11.c'
    },
    {
      match:
        '\\bkCFURL(?:CanonicalPathKey|Volume(?:Is(?:EncryptedKey|RootFileSystemKey)|Supports(?:CompressionKey|ExclusiveRenamingKey|FileCloningKey|SwapRenamingKey)))\\b',
      name: 'support.variable.cf.10.12.c'
    },
    {
      match:
        '\\bkCF(?:ErrorLocalizedFailureKey|URLVolume(?:AvailableCapacityFor(?:ImportantUsageKey|OpportunisticUsageKey)|Supports(?:AccessPermissionsKey|ImmutableFilesKey)))\\b',
      name: 'support.variable.cf.10.13.c'
    },
    {
      match: '\\bkCFURL(?:IsExcludedFromBackupKey|PathKey)\\b',
      name: 'support.variable.cf.10.8.c'
    },
    {
      match:
        '\\bkCFURL(?:TagNamesKey|UbiquitousItem(?:Downloading(?:ErrorKey|Status(?:Current|Downloaded|Key|NotDownloaded))|UploadingErrorKey))\\b',
      name: 'support.variable.cf.10.9.c'
    },
    {
      match:
        '\\bkCF(?:A(?:bsoluteTimeIntervalSince19(?:04|70)|llocator(?:Default|Malloc(?:Zone)?|Null|SystemDefault|UseContext))|B(?:oolean(?:False|True)|u(?:ddhistCalendar|ndle(?:DevelopmentRegionKey|ExecutableKey|I(?:dentifierKey|nfoDictionaryVersionKey)|LocalizationsKey|NameKey|VersionKey)))|C(?:hineseCalendar|o(?:pyString(?:BagCallBacks|DictionaryKeyCallBacks|SetCallBacks)|reFoundationVersionNumber))|DateFormatter(?:AMSymbol|Calendar(?:Name)?|D(?:efault(?:Date|Format)|oesRelativeDateFormattingKey)|EraSymbols|GregorianStartDate|IsLenient|LongEraSymbols|MonthSymbols|PMSymbol|QuarterSymbols|S(?:hort(?:MonthSymbols|QuarterSymbols|Standalone(?:MonthSymbols|QuarterSymbols|WeekdaySymbols)|WeekdaySymbols)|tandalone(?:MonthSymbols|QuarterSymbols|WeekdaySymbols))|T(?:imeZone|woDigitStartDate)|VeryShort(?:MonthSymbols|Standalone(?:MonthSymbols|WeekdaySymbols)|WeekdaySymbols)|WeekdaySymbols)|Error(?:D(?:escriptionKey|omain(?:Cocoa|Mach|OSStatus|POSIX))|FilePathKey|Localized(?:DescriptionKey|FailureReasonKey|RecoverySuggestionKey)|U(?:RLKey|nderlyingErrorKey))|GregorianCalendar|HebrewCalendar|I(?:SO8601Calendar|ndianCalendar|slamicC(?:alendar|ivilCalendar))|JapaneseCalendar|Locale(?:AlternateQuotation(?:BeginDelimiterKey|EndDelimiterKey)|C(?:alendar(?:Identifier)?|o(?:llat(?:ionIdentifier|orIdentifier)|untryCode)|urren(?:cy(?:Code|Symbol)|tLocaleDidChangeNotification))|DecimalSeparator|ExemplarCharacterSet|GroupingSeparator|Identifier|LanguageCode|MeasurementSystem|Quotation(?:BeginDelimiterKey|EndDelimiterKey)|ScriptCode|UsesMetricSystem|VariantCode)|N(?:otFound|u(?:ll|mber(?:Formatter(?:AlwaysShowDecimalSeparator|Currency(?:Code|DecimalSeparator|GroupingSeparator|Symbol)|De(?:cimalSeparator|faultFormat)|ExponentSymbol|FormatWidth|GroupingS(?:eparator|ize)|I(?:n(?:finitySymbol|ternationalCurrencySymbol)|sLenient)|M(?:ax(?:FractionDigits|IntegerDigits|SignificantDigits)|in(?:FractionDigits|IntegerDigits|SignificantDigits|usSign)|ultiplier)|N(?:aNSymbol|egative(?:Prefix|Suffix))|P(?:adding(?:Character|Position)|er(?:MillSymbol|centSymbol)|lusSign|ositive(?:Prefix|Suffix))|Rounding(?:Increment|Mode)|SecondaryGroupingSize|Use(?:GroupingSeparator|SignificantDigits)|ZeroSymbol)|N(?:aN|egativeInfinity)|PositiveInfinity)))|P(?:ersianCalendar|lugIn(?:DynamicRegist(?:erFunctionKey|rationKey)|FactoriesKey|TypesKey|UnloadFunctionKey)|references(?:Any(?:Application|Host|User)|Current(?:Application|Host|User)))|R(?:epublicOfChinaCalendar|unLoop(?:CommonModes|DefaultMode))|S(?:ocket(?:CommandKey|ErrorKey|NameKey|Re(?:gisterCommand|sultKey|trieveCommand)|ValueKey)|tr(?:eam(?:ErrorDomainS(?:OCKS|SL)|Property(?:AppendToFile|DataWritten|FileCurrentOffset|S(?:OCKS(?:P(?:assword|roxy(?:Host|Port)?)|User|Version)|houldCloseNativeSocket|ocket(?:NativeHandle|Remote(?:HostName|PortNumber)|SecurityLevel)))|SocketS(?:OCKSVersion(?:4|5)|ecurityLevel(?:N(?:egotiatedSSL|one)|TLSv1)))|ing(?:BinaryHeapCallBacks|Transform(?:FullwidthHalfwidth|HiraganaKatakana|Latin(?:Arabic|Cyrillic|Greek|H(?:angul|ebrew|iragana)|Katakana|Thai)|MandarinLatin|Strip(?:CombiningMarks|Diacritics)|To(?:Latin|UnicodeName|XMLHex)))))|T(?:imeZoneSystemTimeZoneDidChangeNotification|ype(?:ArrayCallBacks|BagCallBacks|Dictionary(?:KeyCallBacks|ValueCallBacks)|SetCallBacks))|U(?:RL(?:AttributeModificationDateKey|C(?:ontent(?:AccessDateKey|ModificationDateKey)|reationDateKey)|File(?:AllocatedSizeKey|Protection(?:Complete(?:Un(?:lessOpen|tilFirstUserAuthentication))?|Key|None)|Resource(?:IdentifierKey|Type(?:BlockSpecial|CharacterSpecial|Directory|Key|NamedPipe|Regular|S(?:ocket|ymbolicLink)|Unknown))|S(?:ecurityKey|izeKey))|HasHiddenExtensionKey|Is(?:AliasFileKey|DirectoryKey|ExecutableKey|HiddenKey|MountTriggerKey|PackageKey|Re(?:adableKey|gularFileKey)|Sy(?:mbolicLinkKey|stemImmutableKey)|U(?:biquitousItemKey|serImmutableKey)|VolumeKey|WritableKey)|KeysOfUnsetValuesKey|L(?:abelNumberKey|inkCountKey|ocalized(?:LabelKey|NameKey|TypeDescriptionKey))|NameKey|P(?:arentDirectoryURLKey|referredIOBlockSizeKey)|T(?:otalFile(?:AllocatedSizeKey|SizeKey)|ypeIdentifierKey)|UbiquitousItem(?:HasUnresolvedConflictsKey|Is(?:DownloadingKey|Upload(?:edKey|ingKey)))|Volume(?:AvailableCapacityKey|CreationDateKey|I(?:dentifierKey|s(?:AutomountedKey|BrowsableKey|EjectableKey|InternalKey|JournalingKey|LocalKey|Re(?:adOnlyKey|movableKey)))|Localized(?:FormatDescriptionKey|NameKey)|MaximumFileSizeKey|NameKey|ResourceCountKey|Supports(?:AdvisoryFileLockingKey|Case(?:PreservedNamesKey|SensitiveNamesKey)|ExtendedSecurityKey|HardLinksKey|JournalingKey|PersistentIDsKey|R(?:enamingKey|ootDirectoryDatesKey)|S(?:parseFilesKey|ymbolicLinksKey)|VolumeSizesKey|ZeroRunsKey)|TotalCapacityKey|U(?:RL(?:ForRemountingKey|Key)|UIDStringKey)))|serNotification(?:Al(?:ert(?:HeaderKey|MessageKey|TopMostKey)|ternateButtonTitleKey)|CheckBoxTitlesKey|DefaultButtonTitleKey|IconURLKey|KeyboardTypesKey|LocalizationURLKey|OtherButtonTitleKey|P(?:opUp(?:SelectionKey|TitlesKey)|rogressIndicatorValueKey)|SoundURLKey|TextField(?:TitlesKey|ValuesKey)))|XMLTreeError(?:Description|L(?:ineNumber|ocation)|StatusCode))\\b',
      name: 'support.variable.cf.c'
    },
    {
      match:
        '\\b(?:daylight|getdate_err|opt(?:arg|err|ind|opt|reset)|s(?:igngam|uboptarg|ys_(?:errlist|nerr|sig(?:list|name)))|t(?:imezone|zname))\\b',
      name: 'support.variable.clib.c'
    },
    {
      match:
        '\\bkCGColorSpace(?:ACESCGLinear|D(?:CIP3|isplayP3)|GenericXYZ|ITUR_(?:2020|709)|ROMMRGB)\\b',
      name: 'support.variable.quartz.10.11.c'
    },
    {
      match:
        '\\bkCGColor(?:ConversionBlackPointCompensation|Space(?:Extended(?:Gray|Linear(?:Gray|SRGB)|SRGB)|Linear(?:Gray|SRGB)))\\b',
      name: 'support.variable.quartz.10.12.c'
    },
    {
      match:
        '\\bkCG(?:Color(?:ConversionTRCSize|SpaceGenericLab)|PDF(?:ContextAccessPermissions|Outline(?:Children|Destination(?:Rect)?|Title)))\\b',
      name: 'support.variable.quartz.10.13.c'
    },
    {
      match:
        '\\bkCGColorSpace(?:DisplayP3_HLG|ExtendedLinear(?:DisplayP3|ITUR_2020)|ITUR_2020_HLG)\\b',
      name: 'support.variable.quartz.10.14.c'
    },
    {
      match:
        '\\bkCGPDFTagProperty(?:A(?:ctualText|lternativeText)|LanguageText|TitleText)\\b',
      name: 'support.variable.quartz.10.15.c'
    },
    {
      match: '\\bkCGColorSpace(?:DisplayP3_PQ|ITUR_2020_PQ)\\b',
      name: 'support.variable.quartz.10.16.c'
    },
    {
      match:
        '\\bkCGDisplayS(?:howDuplicateLowResolutionModes|tream(?:ColorSpace|DestinationRect|MinimumFrameTime|PreserveAspectRatio|QueueDepth|S(?:howCursor|ourceRect)|YCbCrMatrix(?:_(?:ITU_R_(?:601_4|709_2)|SMPTE_240M_1995))?))\\b',
      name: 'support.variable.quartz.10.8.c'
    },
    {
      match:
        '\\b(?:CG(?:AffineTransformIdentity|PointZero|Rect(?:Infinite|Null|Zero)|SizeZero)|kCG(?:Color(?:Black|Clear|Space(?:AdobeRGB1998|Generic(?:CMYK|Gray(?:Gamma2_2)?|RGB(?:Linear)?)|SRGB)|White)|Font(?:Index(?:Invalid|Max)|VariationAxis(?:DefaultValue|M(?:axValue|inValue)|Name))|GlyphMax|PDF(?:Context(?:A(?:llows(?:Copying|Printing)|rtBox|uthor)|BleedBox|Cr(?:eator|opBox)|EncryptionKeyLength|Keywords|MediaBox|O(?:utputIntent(?:s)?|wnerPassword)|Subject|T(?:itle|rimBox)|UserPassword)|X(?:DestinationOutputProfile|Info|Output(?:Condition(?:Identifier)?|IntentSubtype)|RegistryName))|Window(?:Alpha|B(?:ackingLocationVideoMemory|ounds)|IsOnscreen|Layer|MemoryUsage|N(?:ame|umber)|Owner(?:Name|PID)|S(?:haringState|toreType))))\\b',
      name: 'support.variable.quartz.c'
    }
  ],
  repository: {
    functions: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.10.support.function.c'}
          },
          match:
            '(\\s*)(\\b(?:AudioFileReadPackets|LS(?:C(?:anRefAcceptItem|opy(?:ApplicationForMIMEType|DisplayNameForRef|Item(?:Attribute(?:s)?|InfoForRef)|KindStringFor(?:MIMEType|Ref|TypeInfo)))|FindApplicationForInfo|GetApplicationFor(?:I(?:nfo|tem)|URL)|Open(?:Application|F(?:SRef|romRefSpec)|ItemsWithRole|URLsWithRole)|RegisterFSRef|S(?:et(?:ExtensionHiddenForRef|ItemAttribute)|haredFileListI(?:nsertItemFSRef|temResolve)))|launch_(?:data_(?:a(?:lloc|rray_(?:get_(?:count|index)|set_index))|copy|dict_(?:get_count|i(?:nsert|terate)|lookup|remove)|free|get_(?:bool|errno|fd|integer|machport|opaque(?:_size)?|real|string|type)|new_(?:bool|fd|integer|machport|opaque|real|string)|set_(?:bool|fd|integer|machport|opaque|real|string))|get_fd|msg))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.10.support.function.cf.c'}
          },
          match:
            '(\\s*)(\\bCF(?:AbsoluteTime(?:AddGregorianUnits|Get(?:D(?:ayOf(?:Week|Year)|ifferenceAsGregorianUnits)|GregorianDate|WeekOfYear))|GregorianDate(?:GetAbsoluteTime|IsValid)|PropertyList(?:Create(?:From(?:Stream|XMLData)|XMLData)|WriteToStream))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.11.support.function.c'}
          },
          match:
            '(\\s*)(\\b(?:AudioHardwareService(?:AddPropertyListener|GetPropertyData(?:Size)?|HasProperty|IsPropertySettable|RemovePropertyListener|SetPropertyData)|CF(?:FTPCreateParsedResourceListing|ReadStreamCreate(?:For(?:HTTPRequest|StreamedHTTPRequest)|WithFTPURL)|WriteStreamCreateWithFTPURL)|LS(?:Copy(?:DisplayNameForURL|ItemInfoForURL|KindStringForURL)|Get(?:ExtensionInfo|HandlerOptionsForContentType)|S(?:et(?:ExtensionHiddenForURL|HandlerOptionsForContentType)|haredFileList(?:AddObserver|C(?:opy(?:Property|Snapshot)|reate)|Get(?:SeedValue|TypeID)|I(?:nsertItemURL|tem(?:Copy(?:DisplayName|IconRef|Property|ResolvedURL)|Get(?:ID|TypeID)|Move|Remove|SetProperty))|Remove(?:AllItems|Observer)|Set(?:Authorization|Property))))|SSLSetEncryptionCertificate)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.11.support.function.cf.c'}
          },
          match:
            '(\\s*)(\\bCFURLCreateStringBy(?:AddingPercentEscapes|ReplacingPercentEscapesUsingEncoding)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.11.support.function.quartz.c'}
          },
          match: '(\\s*)(\\bCGDisplayModeCopyPixelEncoding\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.12.support.function.c'}
          },
          match:
            '(\\s*)(\\b(?:OS(?:Atomic(?:A(?:dd(?:32(?:Barrier)?|64(?:Barrier)?)|nd32(?:Barrier|Orig(?:Barrier)?)?)|CompareAndSwap(?:32(?:Barrier)?|64(?:Barrier)?|Int(?:Barrier)?|Long(?:Barrier)?|Ptr(?:Barrier)?)|Decrement(?:32(?:Barrier)?|64(?:Barrier)?)|Increment(?:32(?:Barrier)?|64(?:Barrier)?)|Or32(?:Barrier|Orig(?:Barrier)?)?|TestAnd(?:Clear(?:Barrier)?|Set(?:Barrier)?)|Xor32(?:Barrier|Orig(?:Barrier)?)?)|MemoryBarrier|SpinLock(?:Lock|Try|Unlock))|SecCertificateCopyNormalized(?:IssuerContent|SubjectContent)|os_log_is_(?:debug_enabled|enabled))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.12.support.function.clib.c'}
          },
          match: '(\\s*)(\\b(?:arc4random_addrandom|syscall)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.13.support.function.c'}
          },
          match:
            '(\\s*)(\\b(?:C(?:FNetDiagnostic(?:C(?:opyNetworkStatusPassively|reateWith(?:Streams|URL))|DiagnoseProblemInteractively|SetName)|MSDecoderSetSearchKeychain)|DisposeSRCallBackUPP|GetIconRefFromFileInfo|InvokeSRCallBackUPP|NewSRCallBackUPP|Re(?:adIconFromFSRef|gisterIconRefFromFSRef)|S(?:R(?:Add(?:LanguageObject|Text)|C(?:ancelRecognition|hangeLanguageObject|loseRecognitionSystem|o(?:ntinueRecognition|untItems))|Draw(?:RecognizedText|Text)|EmptyLanguageObject|Get(?:IndexedItem|LanguageModel|Property|Reference)|Idle|New(?:Language(?:Model|ObjectFrom(?:DataFile|Handle))|P(?:ath|hrase)|Recognizer|Word)|OpenRecognitionSystem|P(?:rocess(?:Begin|End)|utLanguageObjectInto(?:DataFile|Handle))|Re(?:leaseObject|move(?:IndexedItem|LanguageObject))|S(?:et(?:IndexedItem|LanguageModel|Property)|pe(?:ak(?:AndDrawText|Text)|echBusy)|t(?:artListening|op(?:Listening|Speech))))|ec(?:CertificateCopySerialNumber|Keychain(?:CopyAccess|SetAccess)|TrustSetKeychains))|UnregisterIconRef|os_trace_(?:debug_enabled|info_enabled|type_enabled))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.13.support.function.quartz.c'}
          },
          match:
            '(\\s*)(\\bCGColorSpaceC(?:opyICCProfile|reateWithICCProfile)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.14.support.function.c'}
          },
          match:
            '(\\s*)(\\b(?:CVOpenGL(?:Buffer(?:Attach|Create|Get(?:Attributes|TypeID)|Pool(?:Create(?:OpenGLBuffer)?|Get(?:Attributes|OpenGLBufferAttributes|TypeID)|Re(?:lease|tain))|Re(?:lease|tain))|Texture(?:Cache(?:Create(?:TextureFromImage)?|Flush|GetTypeID|Re(?:lease|tain))|Get(?:CleanTexCoords|Name|T(?:arget|ypeID))|IsFlipped|Re(?:lease|tain)))|DR(?:AudioTrackCreate|F(?:SObjectGetRealFSRef|ileCreateReal|olderCreateReal))|SecCertificateCopyPublicKey)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.15.support.function.c'}
          },
          match:
            '(\\s*)(\\b(?:AcquireIconRef|C(?:C_MD(?:2(?:_(?:Final|Init|Update))?|4(?:_(?:Final|Init|Update))?|5(?:_(?:Final|Init|Update))?)|TFont(?:CreateWithQuickdrawInstance|Manager(?:RegisterFontsForURLs|UnregisterFontsForURLs))|ompositeIconRef)|Get(?:CustomIconsEnabled|IconRef(?:From(?:Component|Folder|IconFamilyPtr|TypeInfo)|Owners)?)|Is(?:DataAvailableInIconRef|IconRefComposite|ValidIconRef)|LSCopy(?:AllHandlersForURLScheme|DefaultHandlerForURLScheme)|OverrideIconRef|Re(?:gisterIconRefFromIconFamily|leaseIconRef|moveIconRefOverride)|S(?:SL(?:AddDistinguishedName|C(?:lose|o(?:ntextGetTypeID|py(?:ALPNProtocols|CertificateAuthorities|DistinguishedNames|PeerTrust|RequestedPeerName(?:Length)?))|reateContext)|Get(?:BufferedReadSize|C(?:lientCertificateState|onnection)|D(?:atagramWriteSize|iffieHellmanParams)|EnabledCiphers|MaxDatagramRecordSize|N(?:egotiated(?:Cipher|ProtocolVersion)|umber(?:EnabledCiphers|SupportedCiphers))|P(?:eer(?:DomainName(?:Length)?|ID)|rotocolVersionM(?:ax|in))|S(?:ession(?:Option|State)|upportedCiphers))|Handshake|Re(?:Handshake|ad)|Set(?:ALPNProtocols|C(?:ertificate(?:Authorities)?|lientSideAuthenticate|onnection)|D(?:atagramHelloCookie|iffieHellmanParams)|E(?:nabledCiphers|rror)|IOFuncs|MaxDatagramRecordSize|OCSPResponse|P(?:eer(?:DomainName|ID)|rotocolVersionM(?:ax|in))|Session(?:Config|Option|TicketsEnabled))|Write)|e(?:cTrust(?:Evaluate(?:Async)?|edApplication(?:C(?:opyData|reateFromPath)|SetData))|tCustomIconsEnabled))|UpdateIconRef|sec_protocol_(?:metadata_get_negotiated_(?:ciphersuite|protocol_version)|options_(?:add_tls_ciphersuite(?:_group)?|set_tls_(?:diffie_hellman_parameters|m(?:ax_version|in_version)))))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.15.support.function.cf.c'}
          },
          match:
            '(\\s*)(\\bCF(?:Bundle(?:CloseBundleResourceMap|OpenBundleResource(?:Files|Map))|URLCopyParameterString)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.15.support.function.quartz.c'}
          },
          match: '(\\s*)(\\bCGColorSpaceIsHDR\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.3.support.function.c'}
          },
          match:
            '(\\s*)(\\b(?:DisposeGetScrapDataUPP|InvokeGetScrapDataUPP|NewGetScrapDataUPP|ReleaseFolder)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.4.support.function.c'}
          },
          match:
            '(\\s*)(\\b(?:AH(?:GotoMainTOC|RegisterHelpBook)|CFNetServiceRe(?:gister|solve)|Dispose(?:CaretHookUPP|DrawHookUPP|EOLHookUPP|Hi(?:ghHookUPP|tTestHookUPP)|NWidthHookUPP|T(?:E(?:ClickLoopUPP|DoTextUPP|FindWordUPP|RecalcUPP)|XNActionKeyMapperUPP|extWidthHookUPP)|URL(?:NotifyUPP|SystemEventUPP)|WidthHookUPP)|In(?:s(?:Time|XTime|tall(?:TimeTask|XTimeTask))|voke(?:CaretHookUPP|DrawHookUPP|EOLHookUPP|Hi(?:ghHookUPP|tTestHookUPP)|NWidthHookUPP|T(?:E(?:ClickLoopUPP|DoTextUPP|FindWordUPP|RecalcUPP)|XNActionKeyMapperUPP|extWidthHookUPP)|URL(?:NotifyUPP|SystemEventUPP)|WidthHookUPP))|LM(?:Get(?:ApFontID|SysFontSize)|Set(?:ApFontID|SysFontFam))|New(?:CaretHookUPP|DrawHookUPP|EOLHookUPP|Hi(?:ghHookUPP|tTestHookUPP)|NWidthHookUPP|T(?:E(?:ClickLoopUPP|DoTextUPP|FindWordUPP|RecalcUPP)|XNActionKeyMapperUPP|extWidthHookUPP)|URL(?:NotifyUPP|SystemEventUPP)|WidthHookUPP)|P(?:L(?:pos|str(?:c(?:at|hr|mp|py)|len|nc(?:at|mp|py)|pbrk|rchr|s(?:pn|tr)))|rimeTime(?:Task)?)|R(?:emoveTimeTask|mvTime)|SKSearch(?:Group(?:C(?:opyIndexes|reate)|GetTypeID)|Results(?:C(?:opyMatchingTerms|reateWith(?:Documents|Query))|Get(?:Count|InfoInRange|TypeID))))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.5.support.function.c'}
          },
          match:
            '(\\s*)(\\b(?:A(?:S(?:GetSourceStyles|SetSourceStyles)|UGraph(?:CountNodeConnections|Get(?:ConnectionInfo|N(?:ode(?:Connections|Info)|umberOfConnections))|NewNode)|udio(?:ConverterFillBuffer|Device(?:AddIOProc|Re(?:ad|moveIOProc))|FileComponent(?:DataIsThisFormat|FileIsThisFormat)))|Dispose(?:AVL(?:CompareItemsUPP|DisposeItemUPP|ItemSizeUPP|WalkUPP)|Drag(?:DrawingUPP|ReceiveHandlerUPP|SendDataUPP|TrackingHandlerUPP)|List(?:ClickLoopUPP|DefUPP|SearchUPP)|Menu(?:ItemDrawingUPP|TitleDrawingUPP)|S(?:crapPromiseKeeperUPP|leepQUPP)|Theme(?:ButtonDrawUPP|EraseUPP|IteratorUPP|TabTitleDrawUPP)|Window(?:PaintUPP|TitleDrawingUPP))|Get(?:NameFromSoundBank|ScriptManagerVariable)|Invoke(?:AVL(?:CompareItemsUPP|DisposeItemUPP|ItemSizeUPP|WalkUPP)|Drag(?:DrawingUPP|ReceiveHandlerUPP|SendDataUPP|TrackingHandlerUPP)|List(?:ClickLoopUPP|DefUPP|SearchUPP)|Menu(?:ItemDrawingUPP|TitleDrawingUPP)|S(?:crapPromiseKeeperUPP|leepQUPP)|Theme(?:ButtonDrawUPP|EraseUPP|IteratorUPP|TabTitleDrawUPP)|Window(?:PaintUPP|TitleDrawingUPP))|Music(?:Device(?:PrepareInstrument|ReleaseInstrument)|Sequence(?:LoadSMF(?:DataWithFlags|WithFlags)|Save(?:MIDIFile|SMFData)))|New(?:AVL(?:CompareItemsUPP|DisposeItemUPP|ItemSizeUPP|WalkUPP)|Drag(?:DrawingUPP|ReceiveHandlerUPP|SendDataUPP|TrackingHandlerUPP)|List(?:ClickLoopUPP|DefUPP|SearchUPP)|Menu(?:ItemDrawingUPP|TitleDrawingUPP)|S(?:crapPromiseKeeperUPP|leepQUPP)|Theme(?:ButtonDrawUPP|EraseUPP|IteratorUPP|TabTitleDrawUPP)|Window(?:PaintUPP|TitleDrawingUPP))|S(?:CNetworkInterfaceRefreshConfiguration|etScriptManagerVariable))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.5.support.function.clib.c'}
          },
          match: '(\\s*)(\\bdaemon\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.5.support.function.quartz.c'}
          },
          match:
            '(\\s*)(\\bCG(?:ContextDrawPDFDocument|PDFDocumentGet(?:ArtBox|BleedBox|CropBox|MediaBox|RotationAngle|TrimBox))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.6.support.function.c'}
          },
          match:
            '(\\s*)(\\b(?:Audio(?:Device(?:AddPropertyListener|GetProperty(?:Info)?|RemovePropertyListener|SetProperty)|File(?:C(?:omponent(?:Create|Initialize|OpenFile)|reate)|Initialize|Open)|Hardware(?:AddPropertyListener|GetProperty(?:Info)?|RemovePropertyListener|SetProperty)|Stream(?:AddPropertyListener|GetProperty(?:Info)?|RemovePropertyListener|SetProperty))|Button|DisposeKCCallbackUPP|ExtAudioFile(?:CreateNew|Open)|FlushEvents|I(?:nvokeKCCallbackUPP|sCmdChar)|KC(?:Add(?:AppleSharePassword|Callback|GenericPassword|I(?:nternetPassword(?:WithPath)?|tem))|C(?:hangeSettings|o(?:pyItem|untKeychains)|reateKeychain)|DeleteItem|Find(?:AppleSharePassword|FirstItem|GenericPassword|InternetPassword(?:WithPath)?|NextItem)|Get(?:Attribute|D(?:ata|efaultKeychain)|IndKeychain|Keychain(?:ManagerVersion|Name)?|Status)|IsInteractionAllowed|Lock|Make(?:AliasFromKCRef|KCRefFrom(?:Alias|FSRef))|NewItem|Re(?:lease(?:Item|Keychain|Search)|moveCallback)|Set(?:Attribute|D(?:ata|efaultKeychain)|InteractionAllowed)|U(?:nlock|pdateItem))|Munger|New(?:KCCallbackUPP|MusicTrackFrom)|S(?:CNetworkCheckReachabilityBy(?:Address|Name)|ecHost(?:CreateGuest|RemoveGuest|Se(?:lect(?:Guest|edGuest)|t(?:GuestStatus|HostingPort))))|UC(?:CreateTextBreakLocator|DisposeTextBreakLocator|FindTextBreak)|kc(?:add(?:applesharepassword|genericpassword|internetpassword(?:withpath)?)|createkeychain|find(?:applesharepassword|genericpassword|internetpassword(?:withpath)?)|getkeychainname|unlock))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.6.support.function.quartz.c'}
          },
          match:
            '(\\s*)(\\bCG(?:ConfigureDisplayMode|Display(?:AvailableModes|BestModeForParameters(?:AndRefreshRate)?|CurrentMode|SwitchToMode)|EnableEventStateCombining|FontCreateWithPlatformFont|InhibitLocalEvents|Post(?:KeyboardEvent|MouseEvent|ScrollWheelEvent)|SetLocalEvents(?:FilterDuringSuppressionState|SuppressionInterval))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.7.support.function.c'}
          },
          match:
            '(\\s*)(\\b(?:Au(?:dioHardware(?:AddRunLoopSource|RemoveRunLoopSource)|thorization(?:CopyPrivilegedReference|ExecuteWithPrivileges))|C(?:MSEncode(?:rSetEncapsulatedContentType)?|SSM_(?:AC_(?:AuthCompute|PassThrough)|C(?:L_(?:C(?:ert(?:Abort(?:Cache|Query)|C(?:ache|reateTemplate)|DescribeFormat|G(?:et(?:All(?:Fields|TemplateFields)|First(?:CachedFieldValue|FieldValue)|KeyInfo|Next(?:CachedFieldValue|FieldValue))|roup(?:FromVerifiedBundle|ToSignedBundle))|Sign|Verify(?:WithKey)?)|rl(?:A(?:bort(?:Cache|Query)|ddCert)|C(?:ache|reateTemplate)|DescribeFormat|Get(?:All(?:CachedRecordFields|Fields)|First(?:CachedFieldValue|FieldValue)|Next(?:CachedFieldValue|FieldValue))|RemoveCert|S(?:etFields|ign)|Verify(?:WithKey)?))|FreeField(?:Value|s)|IsCertInC(?:achedCrl|rl)|PassThrough)|SP_(?:C(?:hangeLogin(?:Acl|Owner)|reate(?:AsymmetricContext|D(?:eriveKeyContext|igestContext)|KeyGenContext|MacContext|PassThroughContext|RandomGenContext|S(?:ignatureContext|ymmetricContext)))|Get(?:Login(?:Acl|Owner)|OperationalStatistics)|Log(?:in|out)|ObtainPrivateKeyFromPublicKey|PassThrough)|hangeKey(?:Acl|Owner))|D(?:L_(?:Authenticate|C(?:hangeDb(?:Acl|Owner)|reateRelation)|D(?:ata(?:AbortQuery|Delete|Get(?:F(?:irst|romUniqueRecordId)|Next)|Insert|Modify)|b(?:C(?:lose|reate)|Delete|Open)|estroyRelation)|Free(?:NameList|UniqueRecord)|GetDb(?:Acl|Name(?:FromHandle|s)|Owner)|PassThrough)|e(?:cryptData(?:Final|Init(?:P)?|P|Update)?|leteContext(?:Attributes)?|riveKey)|igestData(?:Clone|Final|Init|Update)?)|EncryptData(?:Final|Init(?:P)?|P|Update)?|Free(?:Context|Key)|Ge(?:nerate(?:AlgorithmParams|Key(?:P(?:air(?:P)?)?)?|Mac(?:Final|Init|Update)?|Random)|t(?:APIMemoryFunctions|Context(?:Attribute)?|Key(?:Acl|Owner)|ModuleGUIDFromHandle|Privilege|SubserviceUIDFromHandle|TimeValue))|In(?:it|troduce)|ListAttachedModuleManagers|Module(?:Attach|Detach|Load|Unload)|Query(?:KeySizeInBits|Size)|Retrieve(?:Counter|UniqueId)|S(?:et(?:Context|Privilege)|ignData(?:Final|Init|Update)?)|T(?:P_(?:ApplyCrlToDb|C(?:ert(?:CreateTemplate|G(?:etAllTemplateFields|roup(?:Construct|Prune|ToTupleGroup|Verify))|Re(?:claim(?:Abort|Key)|moveFromCrlTemplate|voke)|Sign)|onfirmCredResult|rl(?:CreateTemplate|Sign|Verify))|Form(?:Request|Submit)|PassThrough|Re(?:ceiveConfirmation|trieveCredResult)|SubmitCredRequest|TupleGroupToCertGroup)|erminate)|U(?:n(?:introduce|wrapKey(?:P)?)|pdateContextAttributes)|Verify(?:D(?:ata(?:Final|Init|Update)?|evice)|Mac(?:Final|Init|Update)?)|WrapKey(?:P)?)|reateThreadPool)|Dispose(?:Debugger(?:DisposeThreadUPP|NewThreadUPP|ThreadSchedulerUPP)|Thread(?:EntryUPP|S(?:chedulerUPP|witchUPP)|TerminationUPP)?)|Get(?:CurrentThread|DefaultThreadStackSize|Thread(?:CurrentTaskRef|State(?:GivenTaskRef)?))|I(?:C(?:Add(?:MapEntry|Profile)|Begin|C(?:ount(?:MapEntries|Pr(?:ef|ofiles))|reateGURLEvent)|Delete(?:MapEntry|Pr(?:ef|ofile))|E(?:ditPreferences|nd)|FindPrefHandle|Get(?:C(?:onfigName|urrentProfile)|DefaultPref|Ind(?:MapEntry|Pr(?:ef|ofile))|MapEntry|P(?:erm|r(?:ef(?:Handle)?|ofileName))|Seed|Version)|LaunchURL|Map(?:Entries(?:Filename|TypeCreator)|Filename|TypeCreator)|ParseURL|S(?:e(?:ndGURLEvent|t(?:CurrentProfile|MapEntry|Pr(?:ef(?:Handle)?|ofileName)))|t(?:art|op)))|nvoke(?:Debugger(?:DisposeThreadUPP|NewThreadUPP|ThreadSchedulerUPP)|Thread(?:EntryUPP|S(?:chedulerUPP|witchUPP)|TerminationUPP))|sMetric)|M(?:DS_(?:In(?:itialize|stall)|Terminate|Uninstall)|P(?:A(?:llocate(?:Aligned|TaskStorageIndex)?|rmTimer)|BlockC(?:lear|opy)|C(?:a(?:ncelTimer|useNotification)|reate(?:CriticalRegion|Event|Notification|Queue|Semaphore|T(?:ask|imer))|urrentTaskID)|D(?:e(?:allocateTaskStorageIndex|l(?:ayUntil|ete(?:CriticalRegion|Event|Notification|Queue|Semaphore|Timer)))|isposeTaskException)|E(?:nterCriticalRegion|x(?:it(?:CriticalRegion)?|tractTaskState))|Free|Get(?:AllocatedBlockSize|Next(?:CpuID|TaskID)|TaskStorageValue)|ModifyNotification(?:Parameters)?|NotifyQueue|Processors(?:Scheduled)?|Re(?:gisterDebugger|moteCall(?:CFM)?)|S(?:et(?:E(?:vent|xceptionHandler)|QueueReserve|T(?:ask(?:St(?:ate|orageValue)|Weight)|imerNotify))|ignalSemaphore)|T(?:askIsPreemptive|erminateTask|hrowException)|UnregisterDebugger|Wait(?:ForEvent|On(?:Queue|Semaphore))|Yield)|usicTrackNewExtendedControlEvent)|New(?:Debugger(?:DisposeThreadUPP|NewThreadUPP|ThreadSchedulerUPP)|Thread(?:EntryUPP|S(?:chedulerUPP|witchUPP)|TerminationUPP)?)|Se(?:c(?:A(?:CL(?:C(?:opySimpleContents|reateFromSimpleContents)|GetAuthorizations|Set(?:Authorizations|SimpleContents))|ccess(?:C(?:opySelectedACLList|reateFromOwnerAndACL)|GetOwnerAndACL))|Certificate(?:C(?:opyPreference|reateFromData)|Get(?:AlgorithmID|CLHandle|Data|Issuer|Subject|Type)|SetPreference)|Identity(?:CopyPreference|Se(?:arch(?:C(?:opyNext|reate)|GetTypeID)|tPreference))|Key(?:CreatePair|Ge(?:nerate|tC(?:S(?:PHandle|SMKey)|redentials))|chain(?:Get(?:CSPHandle|DLDBHandle)|Item(?:Export|Get(?:DLDBHandle|UniqueRecordID)|Import)|Search(?:C(?:opyNext|reateFromAttributes)|GetTypeID)))|Policy(?:Get(?:OID|TPHandle|Value)|Se(?:arch(?:C(?:opyNext|reate)|GetTypeID)|tValue))|Trust(?:Get(?:CssmResult(?:Code)?|Result|TPHandle)|SetParameters))|t(?:DebuggerNotificationProcs|Thread(?:ReadyGivenTaskRef|S(?:cheduler|tate(?:EndCritical)?|witcher)|Terminator)))|Thread(?:BeginCritical|CurrentStackSpace|EndCritical)|YieldTo(?:AnyThread|Thread))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.7.support.function.cf.c'}
          },
          match: '(\\s*)(\\bCFURLEnumeratorGetSourceDidChange\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.8.support.function.c'}
          },
          match:
            '(\\s*)(\\b(?:A(?:TS(?:CreateFontQueryRunLoopSource|Font(?:A(?:ctivateFrom(?:FileReference|Memory)|pplyFunction)|Deactivate|F(?:amily(?:ApplyFunction|FindFrom(?:Name|QuickDrawName)|Get(?:Encoding|Generation|Name|QuickDrawName)|Iterator(?:Create|Next|Re(?:lease|set)))|indFrom(?:Container|Name|PostScriptName))|Get(?:AutoActivationSettingForApplication|Container(?:FromFileReference)?|F(?:ileReference|ontFamilyResource)|G(?:eneration|lobalAutoActivationSetting)|HorizontalMetrics|Name|PostScriptName|Table(?:Directory)?|VerticalMetrics)|I(?:sEnabled|terator(?:Create|Next|Re(?:lease|set)))|Notif(?:ication(?:Subscribe|Unsubscribe)|y)|Set(?:AutoActivationSettingForApplication|Enabled|GlobalAutoActivationSetting))|GetGeneration)|bsolute(?:DeltaTo(?:Duration|Nanoseconds)|To(?:Duration|Nanoseconds))|dd(?:A(?:bsoluteToAbsolute|tomic(?:16|8)?)|CollectionItem(?:Hdl)?|DurationToAbsolute|FolderDescriptor|NanosecondsToAbsolute|Resource))|B(?:atteryCount|it(?:And(?:Atomic(?:16|8)?)?|Clr|Not|Or(?:Atomic(?:16|8)?)?|S(?:et|hift)|Tst|Xor(?:Atomic(?:16|8)?)?))|C(?:S(?:Copy(?:MachineName|UserName)|GetComponentsThreadMode|SetComponentsThreadMode)|a(?:llComponent(?:C(?:anDo|lose)|Dispatch|Function(?:WithStorage(?:ProcInfo)?)?|Get(?:MPWorkFunction|PublicResource)|Open|Register|Target|Unregister|Version)|ptureComponent)|hangedResource|lo(?:neCollection|se(?:Component(?:ResFile)?|ResFile))|o(?:llectionTagExists|mpareAndSwap|pyCollection|reEndian(?:FlipData|GetFlipper|InstallFlipper)|unt(?:1(?:Resources|Types)|Co(?:llection(?:Items|Owners|Tags)|mponent(?:Instances|s))|Resources|T(?:aggedCollectionItems|ypes)))|ur(?:ResFile|rentProcessorSpeed))|D(?:e(?:bugAssert|crementAtomic(?:16|8)?|l(?:ay|e(?:gateComponentCall|teGestaltValue))|queue|t(?:achResource(?:File)?|ermineIfPathIsEnclosedByFolder))|ispose(?:Co(?:llection(?:ExceptionUPP|FlattenUPP)?|mponent(?:FunctionUPP|MPWorkFunctionUPP|RoutineUPP))|De(?:bug(?:AssertOutputHandlerUPP|Component(?:CallbackUPP)?)|ferredTaskUPP)|ExceptionHandlerUPP|F(?:NSubscriptionUPP|SVolume(?:EjectUPP|MountUPP|UnmountUPP)|olderManagerNotificationUPP)|GetMissingComponentResourceUPP|Handle|IOCompletionUPP|Ptr|ResErrUPP|S(?:electorFunctionUPP|peech(?:DoneUPP|ErrorUPP|PhonemeUPP|SyncUPP|TextDoneUPP|WordUPP))|TimerUPP)|urationTo(?:Absolute|Nanoseconds))|E(?:mpty(?:Collection|Handle)|nqueue)|F(?:N(?:GetDirectoryForSubscription|Notify(?:All|ByPath)?|Subscribe(?:ByPath)?|Unsubscribe)|S(?:AllocateFork|C(?:a(?:ncelVolumeOperation|talogSearch)|lose(?:Fork|Iterator)|o(?:mpareFSRefs|py(?:AliasInfo|D(?:ADiskForVolume|iskIDForVolume)|Object(?:Async|Sync)|URLForVolume))|reate(?:DirectoryUnicode|F(?:ile(?:AndOpenForkUnicode|Unicode)|ork)|Res(?:File|ourceF(?:ile|ork))|StringFromHFSUniStr|VolumeOperation))|D(?:e(?:lete(?:Fork|Object)|termineIfRefIsEnclosedByFolder)|isposeVolumeOperation)|E(?:jectVolume(?:Async|Sync)|xchangeObjects)|F(?:i(?:le(?:Operation(?:C(?:ancel|opyStatus|reate)|GetTypeID|ScheduleWithRunLoop|UnscheduleFromRunLoop)|Security(?:C(?:opyAccessControlList|reate(?:WithFSPermissionInfo)?)|Get(?:Group(?:UUID)?|Mode|Owner(?:UUID)?|TypeID)|RefCreateCopy|Set(?:AccessControlList|Group(?:UUID)?|Mode|Owner(?:UUID)?)))|ndFolder)|lush(?:Fork|Volume)|ollowFinderAlias)|Get(?:Async(?:EjectStatus|MountStatus|UnmountStatus)|CatalogInfo(?:Bulk)?|DataForkName|Fork(?:CBInfo|Position|Size)|HFSUniStrFromString|ResourceForkName|TemporaryDirectoryForReplaceObject|Volume(?:ForD(?:ADisk|iskID)|Info|MountInfo(?:Size)?|Parms))|I(?:s(?:AliasFile|FSRefValid)|terateForks)|LockRange|M(?:a(?:keFSRefUnicode|tchAliasBulk)|o(?:unt(?:LocalVolume(?:Async|Sync)|ServerVolume(?:Async|Sync))|veObject(?:Async|Sync|ToTrash(?:Async|Sync))?))|NewAlias(?:FromPath|Minimal(?:Unicode)?|Unicode)?|Open(?:Fork|Iterator|OrphanResFile|Res(?:File|ourceFile))|Path(?:CopyObject(?:Async|Sync)|FileOperationCopyStatus|GetTemporaryDirectoryForReplaceObject|M(?:akeRef(?:WithOptions)?|oveObject(?:Async|Sync|ToTrash(?:Async|Sync)))|ReplaceObject)|Re(?:adFork|fMakePath|nameUnicode|placeObject|so(?:lve(?:Alias(?:File(?:WithMountFlags)?|WithMountFlags)?|NodeID)|urceFileAlreadyOpen))|Set(?:CatalogInfo|Fork(?:Position|Size)|VolumeInfo)|U(?:n(?:l(?:inkObject|ockRange)|mountVolume(?:Async|Sync))|pdateAlias)|VolumeMount|WriteFork)|i(?:nd(?:Folder|NextComponent)|x(?:2(?:Frac|Long|X)|ATan2|Div|Mul|R(?:atio|ound)))|latten(?:Collection(?:ToHdl)?|PartialCollection)|rac(?:2(?:Fix|X)|Cos|Div|Mul|S(?:in|qrt)))|Ge(?:stalt|t(?:1(?:Ind(?:Resource|Type)|NamedResource|Resource)|Alias(?:Size(?:FromPtr)?|UserType(?:FromPtr)?)|C(?:PUSpeed|o(?:llection(?:DefaultAttributes|ExceptionProc|Item(?:Hdl|Info)?|RetainCount)|mponent(?:In(?:dString|fo|stance(?:Error|Storage))|ListModSeed|Public(?:IndString|Resource(?:List)?)|Re(?:fcon|source)|TypeModSeed)))|Debug(?:ComponentInfo|OptionInfo)|Folder(?:NameUnicode|Types)|HandleSize|Ind(?:Resource|Type|exedCollection(?:Item(?:Hdl|Info)?|Tag))|Ma(?:cOSStatus(?:CommentString|ErrorString)|xResourceSize)|N(?:amedResource|e(?:wCollection|xt(?:FOND|ResourceFile)))|PtrSize|Res(?:Attrs|FileAttrs|Info|ource(?:SizeOnDisk)?)|SpeechInfo|T(?:aggedCollectionItem(?:Info)?|opResourceFile)))|H(?:ClrRBit|GetState|Lock(?:Hi)?|Set(?:RBit|State)|Unlock|and(?:AndHand|ToHand)|omeResFile)|I(?:dentifyFolder|n(?:crementAtomic(?:16|8)?|s(?:ertResourceFile|tall(?:DebugAssertOutputHandler|ExceptionHandler))|v(?:alidateFolderDescriptorCache|oke(?:Co(?:llection(?:ExceptionUPP|FlattenUPP)|mponent(?:MPWorkFunctionUPP|RoutineUPP))|De(?:bug(?:AssertOutputHandlerUPP|ComponentCallbackUPP)|ferredTaskUPP)|ExceptionHandlerUPP|F(?:NSubscriptionUPP|SVolume(?:EjectUPP|MountUPP|UnmountUPP)|olderManagerNotificationUPP)|GetMissingComponentResourceUPP|IOCompletionUPP|ResErrUPP|S(?:electorFunctionUPP|peech(?:DoneUPP|ErrorUPP|PhonemeUPP|SyncUPP|TextDoneUPP|WordUPP))|TimerUPP)))|s(?:H(?:andleValid|eapValid)|PointerValid))|L(?:M(?:Get(?:BootDrive|IntlSpec|MemErr|Res(?:Err|Load)|SysMap|TmpResLoad)|Set(?:BootDrive|IntlSpec|MemErr|Res(?:Err|Load)|Sys(?:FontSize|Map)|TmpResLoad))|o(?:adResource|cale(?:CountNames|Get(?:IndName|Name)|Operation(?:CountLocales|GetLocales))|ng2Fix))|M(?:PSetTaskType|aximumProcessorSpeed|emError|i(?:croseconds|nimumProcessorSpeed))|N(?:anosecondsTo(?:Absolute|Duration)|ew(?:Co(?:llection(?:ExceptionUPP|FlattenUPP)?|mponent(?:FunctionUPP|MPWorkFunctionUPP|RoutineUPP))|De(?:bug(?:AssertOutputHandlerUPP|Component(?:CallbackUPP)?|Option)|ferredTaskUPP)|E(?:mptyHandle|xceptionHandlerUPP)|F(?:NSubscriptionUPP|SVolume(?:EjectUPP|MountUPP|UnmountUPP)|olderManagerNotificationUPP)|Ge(?:staltValue|tMissingComponentResourceUPP)|Handle(?:Clear)?|IOCompletionUPP|Ptr(?:Clear)?|ResErrUPP|S(?:electorFunctionUPP|peech(?:DoneUPP|ErrorUPP|PhonemeUPP|SyncUPP|TextDoneUPP|WordUPP))|TimerUPP))|Open(?:A(?:Component(?:ResFile)?|DefaultComponent)|Component(?:ResFile)?|DefaultComponent)|P(?:B(?:AllocateFork(?:Async|Sync)|C(?:atalogSearch(?:Async|Sync)|lose(?:Fork(?:Async|Sync)|Iterator(?:Async|Sync))|ompareFSRefs(?:Async|Sync)|reate(?:DirectoryUnicode(?:Async|Sync)|F(?:ile(?:AndOpenForkUnicode(?:Async|Sync)|Unicode(?:Async|Sync))|ork(?:Async|Sync))))|Delete(?:Fork(?:Async|Sync)|Object(?:Async|Sync))|ExchangeObjects(?:Async|Sync)|F(?:S(?:CopyFile(?:Async|Sync)|ResolveNodeID(?:Async|Sync))|lush(?:Fork(?:Async|Sync)|Volume(?:Async|Sync)))|Get(?:CatalogInfo(?:Async|Bulk(?:Async|Sync)|Sync)|Fork(?:CBInfo(?:Async|Sync)|Position(?:Async|Sync)|Size(?:Async|Sync))|VolumeInfo(?:Async|Sync))|IterateForks(?:Async|Sync)|M(?:akeFSRefUnicode(?:Async|Sync)|oveObject(?:Async|Sync))|Open(?:Fork(?:Async|Sync)|Iterator(?:Async|Sync))|Re(?:adFork(?:Async|Sync)|nameUnicode(?:Async|Sync))|Set(?:CatalogInfo(?:Async|Sync)|Fork(?:Position(?:Async|Sync)|Size(?:Async|Sync))|VolumeInfo(?:Async|Sync))|UnlinkObject(?:Async|Sync)|WriteFork(?:Async|Sync)|X(?:LockRange(?:Async|Sync)|UnlockRange(?:Async|Sync)))|tr(?:AndHand|To(?:Hand|XHand))|urgeCollection(?:Tag)?)|Re(?:a(?:d(?:Location|PartialResource)|llocateHandle)|coverHandle|gisterComponent(?:FileRef(?:Entries)?|Resource(?:File)?)?|lease(?:Collection|Resource)|move(?:CollectionItem|FolderDescriptor|IndexedCollectionItem|Resource)|place(?:GestaltValue|IndexedCollectionItem(?:Hdl)?)|s(?:Error|olveComponentAlias)|tainCollection)|S(?:64Compare|SL(?:GetProtocolVersion|SetProtocolVersion)|e(?:cTranformCustomGetAttribute|t(?:AliasUserType(?:WithPtr)?|Co(?:llection(?:DefaultAttributes|ExceptionProc|ItemInfo)|mponent(?:Instance(?:Error|Storage)|Refcon))|De(?:bugOptionValue|faultComponent)|GestaltValue|HandleSize|IndexedCollectionItemInfo|PtrSize|Res(?:Attrs|FileAttrs|Info|Load|Purge|ourceSize)|SpeechInfo))|leepQ(?:Install|Remove)|peak(?:Buffer|String|Text)|ub(?:AbsoluteFromAbsolute|DurationFromAbsolute|NanosecondsFromAbsolute)|ysError)|T(?:askLevel|e(?:mpNewHandle|stAnd(?:Clear|Set)|xtToPhonemes)|ickCount)|U(?:64Compare|n(?:captureComponent|flattenCollection(?:FromHdl)?|ique(?:1ID|ID)|registerComponent|signedFixedMulDiv)|p(?:Time|date(?:ResFile|SystemActivity))|se(?:Dictionary|ResFile))|W(?:S(?:Get(?:CFTypeIDFromWSTypeID|WSTypeIDFromCFType)|Method(?:Invocation(?:Add(?:DeserializationOverride|SerializationOverride)|C(?:opy(?:P(?:arameters|roperty)|Serialization)|reate(?:FromSerialization)?)|GetTypeID|Invoke|S(?:cheduleWithRunLoop|et(?:CallBack|P(?:arameters|roperty)))|UnscheduleFromRunLoop)|ResultIsFault)|ProtocolHandler(?:C(?:opy(?:FaultDocument|Property|Re(?:plyD(?:ictionary|ocument)|questD(?:ictionary|ocument)))|reate)|GetTypeID|Set(?:DeserializationOverride|Property|SerializationOverride)))|ide(?:Add|BitShift|Compare|Divide|Multiply|Negate|S(?:hift|quareRoot|ubtract)|WideDivide)|rite(?:PartialResource|Resource))|X2F(?:ix|rac)|annuity|compound|d(?:ec2(?:f|l|num|s(?:tr)?)|tox80)|getaudit|num(?:2dec|tostring)|r(?:andomx|elation)|s(?:etaudit|tr2dec)|x80tod)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.8.support.function.cf.c'}
          },
          match:
            '(\\s*)(\\bCFXML(?:Node(?:Create(?:Copy)?|Get(?:InfoPtr|String|Type(?:Code|ID)|Version))|Parser(?:Abort|C(?:opyErrorDescription|reate(?:WithDataFromURL)?)|Get(?:C(?:allBacks|ontext)|Document|L(?:ineNumber|ocation)|S(?:ourceURL|tatusCode)|TypeID)|Parse)|Tree(?:Create(?:FromData(?:WithError)?|With(?:DataFromURL|Node)|XMLData)|GetNode))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.8.support.function.mac-classic.c'}
          },
          match: '(\\s*)(\\b(?:Debug(?:Str|ger)|SysBreak(?:Func|Str)?)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.8.support.function.quartz.c'}
          },
          match:
            '(\\s*)(\\bCG(?:Re(?:gisterScreenRefreshCallback|leaseScreenRefreshRects)|Screen(?:RegisterMoveCallback|UnregisterMoveCallback)|UnregisterScreenRefreshCallback|W(?:aitForScreen(?:RefreshRects|UpdateRects)|indowServerCFMachPort))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.9.support.function.c'}
          },
          match:
            '(\\s*)(\\b(?:AX(?:APIEnabled|MakeProcessTrusted|UIElementPostKeyboardEvent)|CopyProcessName|ExitToShell|Get(?:CurrentProcess|FrontProcess|NextProcess|Process(?:BundleLocation|ForPID|Information|PID))|IsProcessVisible|KillProcess|LaunchApplication|ProcessInformationCopyDictionary|S(?:SL(?:Copy(?:PeerCertificates|TrustedRoots)|DisposeContext|Get(?:Allows(?:AnyRoot|Expired(?:Certs|Roots))|EnableCertVerify|ProtocolVersionEnabled|RsaBlinding)|NewContext|Set(?:Allows(?:AnyRoot|Expired(?:Certs|Roots))|EnableCertVerify|ProtocolVersionEnabled|RsaBlinding|TrustedRoots))|ameProcess|e(?:c(?:ChooseIdentity(?:AsSheet)?|DisplayCertificate(?:Group)?|EditTrust(?:AsSheet)?|Policy(?:CreateWithOID|SetProperties))|tFrontProcess(?:WithOptions)?)|howHideProcess)|WakeUpProcess)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.9.support.function.cf.c'}
          },
          match:
            '(\\s*)(\\bCF(?:PreferencesCopyApplicationList|URL(?:Create(?:DataAndPropertiesFromResource|FromFSRef|PropertyFromResource)|DestroyResource|GetFSRef|WriteDataAndPropertiesToResource))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.9.support.function.clib.c'}
          },
          match:
            '(\\s*)(\\b(?:drem|finite|gamma|r(?:inttol|oundtol)|significand)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.9.support.function.dispatch.c'}
          },
          match: '(\\s*)(\\bdispatch_(?:debug(?:v)?|get_current_queue)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.10.9.support.function.quartz.c'}
          },
          match:
            '(\\s*)(\\bCG(?:C(?:ontextS(?:electFont|how(?:Glyphs(?:AtPoint|WithAdvances)?|Text(?:AtPoint)?))|ursorIs(?:DrawnInFramebuffer|Visible))|Display(?:FadeOperationInProgress|I(?:OServicePort|sCaptured)))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'invalid.deprecated.tba.support.function.c'}
          },
          match:
            '(\\s*)(\\b(?:AUGraph(?:Add(?:Node|RenderNotify)|C(?:l(?:earConnections|ose)|o(?:nnectNodeInput|untNodeInteractions))|DisconnectNodeInput|Get(?:CPULoad|In(?:dNode|teractionInfo)|MaxCPULoad|N(?:ode(?:Count|In(?:foSubGraph|teractions))|umberOfInteractions))|I(?:nitialize|s(?:Initialized|NodeSubGraph|Open|Running))|N(?:ewNodeSubGraph|odeInfo)|Open|Remove(?:Node|RenderNotify)|S(?:etNodeInputCallback|t(?:art|op))|U(?:ninitialize|pdate))|DisposeAUGraph|NewAUGraph|QL(?:PreviewRequest(?:C(?:opy(?:ContentUTI|Options|URL)|reate(?:Context|PDFContext))|FlushContext|Get(?:DocumentObject|GeneratorBundle|TypeID)|IsCancelled|Set(?:D(?:ataRepresentation|ocumentObject)|URLRepresentation))|Thumbnail(?:C(?:ancel|opy(?:DocumentURL|Image|Options)|reate)|DispatchAsync|Get(?:ContentRect|MaximumSize|TypeID)|IsCancelled|Request(?:C(?:opy(?:ContentUTI|Options|URL)|reateContext)|FlushContext|Get(?:DocumentObject|GeneratorBundle|MaximumSize|TypeID)|IsCancelled|Set(?:DocumentObject|Image(?:AtURL|WithData)?|ThumbnailWith(?:DataRepresentation|URLRepresentation))))))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.10.10.c'}
          },
          match:
            '(\\s*)(\\b(?:C(?:GLGetDeviceFromGLRenderer|MS(?:DecoderCopySignerTimestampWithPolicy|EncoderCopySignerTimestampWithPolicy)|TRubyAnnotation(?:Create(?:Copy)?|Get(?:Alignment|Overhang|SizeFactor|T(?:extForPosition|ypeID))))|JSGlobalContext(?:CopyName|SetName)|LSCopy(?:ApplicationURLsForBundleIdentifier|DefaultApplicationURLFor(?:ContentType|URL))|SecAccessControl(?:CreateWithFlags|GetTypeID)|UTType(?:CopyAllTagsWithClass|IsD(?:eclared|ynamic))|launch_activate_socket|os_re(?:lease|tain)|qos_class_(?:main|self)|simd_inverse)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.10.11.c'}
          },
          match:
            '(\\s*)(\\b(?:Audio(?:ComponentInstantiate|ServicesPlay(?:AlertSoundWithCompletion|SystemSoundWithCompletion))|C(?:MSEncoderSetSignerAlgorithm|T(?:LineEnumerateCaretOffsets|RunGetBaseAdvancesAndOrigins))|IORegistryEntryCopy(?:FromPath|Path)|JSValueIs(?:Array|Date)|MIDI(?:ClientCreateWithBlock|DestinationCreateWithBlock|InputPortCreateWithBlock)|connectx|disconnectx|xpc_(?:array_get_(?:array|dictionary)|dictionary_get_(?:array|dictionary)))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.10.12.c'}
          },
          match:
            '(\\s*)(\\b(?:CTRubyAnnotationCreateWithAttributes|IOSurface(?:AllowsPixelSizeCasting|SetPurgeable)|JS(?:Object(?:Get(?:ArrayBufferByte(?:Length|sPtr)|TypedArray(?:B(?:uffer|yte(?:Length|Offset|sPtr))|Length))|Make(?:ArrayBufferWithBytesNoCopy|TypedArray(?:With(?:ArrayBuffer(?:AndOffset)?|BytesNoCopy))?))|ValueGetTypedArrayType)|MDItemsCopyAttributes|Sec(?:CertificateCopyNormalized(?:IssuerSequence|SubjectSequence)|Key(?:C(?:opy(?:Attributes|ExternalRepresentation|KeyExchangeResult|PublicKey)|reate(?:DecryptedData|EncryptedData|RandomKey|Signature|WithData))|IsAlgorithmSupported|VerifySignature))|os_(?:log_(?:create|type_enabled)|unfair_lock_(?:assert_(?:not_owner|owner)|lock|trylock|unlock))|xpc_connection_activate)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.10.13.c'}
          },
          match:
            '(\\s*)(\\b(?:AudioUnitExtension(?:CopyComponentList|SetComponentList)|C(?:GImage(?:DestinationAddAuxiliaryDataInfo|SourceCopyAuxiliaryDataInfoAtIndex)|TFontManagerCreateFontDescriptorsFromData|V(?:ColorPrimariesGet(?:IntegerCodePointForString|StringForIntegerCodePoint)|TransferFunctionGet(?:IntegerCodePointForString|StringForIntegerCodePoint)|YCbCrMatrixGet(?:IntegerCodePointForString|StringForIntegerCodePoint)))|IOSurfaceGet(?:Bit(?:DepthOfComponentOfPlane|OffsetOfComponentOfPlane)|N(?:ameOfComponentOfPlane|umberOfComponentsOfPlane)|RangeOfComponentOfPlane|Subsampling|TypeOfComponentOfPlane)|SecCertificateCopySerialNumberData)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.10.14.c'}
          },
          match:
            '(\\s*)(\\b(?:AEDeterminePermissionToAutomateTarget|C(?:GImageSourceGetPrimaryImageIndex|TFramesetterCreateWithTypesetter)|Sec(?:CertificateCopyKey|Trust(?:EvaluateWithError|SetSignedCertificateTimestamps))|sec_(?:certificate_c(?:opy_ref|reate)|identity_c(?:opy_(?:certificates_ref|ref)|reate(?:_with_certificates)?)|protocol_(?:metadata_(?:access_(?:distinguished_names|ocsp_response|peer_certificate_chain|supported_signature_algorithms)|c(?:hallenge_parameters_are_equal|opy_peer_public_key|reate_secret(?:_with_context)?)|get_(?:early_data_accepted|negotiated_(?:protocol|tls_ciphersuite)|server_name)|peers_are_equal)|options_(?:add_(?:pre_shared_key|tls_application_protocol)|set_(?:challenge_block|key_update_block|local_identity|peer_authentication_required|tls_(?:false_start_enabled|is_fallback_attempt|ocsp_enabled|re(?:negotiation_enabled|sumption_enabled)|s(?:ct_enabled|erver_name)|tickets_enabled)|verify_block)))|trust_c(?:opy_ref|reate)))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.10.15.c'}
          },
          match:
            '(\\s*)(\\b(?:C(?:GAnimateImage(?:AtURLWithBlock|DataWithBlock)|T(?:FontManager(?:RegisterFont(?:Descriptors|URLs)|UnregisterFont(?:Descriptors|URLs))|GlyphInfoGetGlyph))|JS(?:Object(?:DeletePropertyForKey|GetPropertyForKey|HasPropertyForKey|MakeDeferredPromise|SetPropertyForKey)|Value(?:IsSymbol|MakeSymbol))|SecTrustEvaluateAsyncWithError|aligned_alloc|sec_(?:identity_access_certificates|protocol_(?:metadata_(?:access_pre_shared_keys|get_negotiated_tls_protocol_version)|options_(?:a(?:ppend_tls_ciphersuite(?:_group)?|re_equal)|get_default_m(?:ax_(?:dtls_protocol_version|tls_protocol_version)|in_(?:dtls_protocol_version|tls_protocol_version))|set_(?:m(?:ax_tls_protocol_version|in_tls_protocol_version)|pre_shared_key_selection_block|tls_pre_shared_key_identity_hint))))|xpc_type_get_name)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.10.8.c'}
          },
          match:
            '(\\s*)(\\b(?:A(?:ECompareDesc|udioQueueProcessingTapGetQueueTime)|C(?:GImage(?:Destination(?:AddImageAndMetadata|CopyImageSource)|Metadata(?:C(?:opy(?:StringValueWithPath|Tag(?:MatchingImageProperty|WithPath|s))|reate(?:FromXMPData|Mutable(?:Copy)?|XMPData))|EnumerateTagsUsingBlock|Re(?:gisterNamespaceForPrefix|moveTagWithPath)|Set(?:TagWithPath|Value(?:MatchingImageProperty|WithPath))|Tag(?:C(?:opy(?:Name(?:space)?|Prefix|Qualifiers|Value)|reate)|GetType(?:ID)?))|SourceCopyMetadataAtIndex)|MS(?:DecoderCopySigner(?:SigningTime|Timestamp(?:Certificates)?)|EncoderCopySignerTimestamp)|T(?:Font(?:CopyDefaultCascadeListForLanguages|GetOpticalBoundsForGlyphs|Manager(?:RegisterGraphicsFont|UnregisterGraphicsFont))|LineGetBoundsWithOptions)|VImageBufferCreateColorSpaceFromAttachments|opyInstrumentInfoFromSoundBank))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.10.9.c'}
          },
          match:
            '(\\s*)(\\b(?:A(?:XIsProcessTrustedWithOptions|udioHardware(?:CreateAggregateDevice|DestroyAggregateDevice))|C(?:GImageSourceRemoveCacheAtIndex|TFont(?:CreateForStringWithLanguage|Descriptor(?:CreateCopyWith(?:Family|SymbolicTraits)|MatchFontDescriptorsWithProgressHandler)))|FSEventStreamSetExclusionPaths|Sec(?:PolicyCreate(?:Revocation|WithProperties)|Trust(?:Copy(?:Exceptions|Result)|GetNetworkFetchAllowed|Set(?:Exceptions|NetworkFetchAllowed|OCSPResponse)))|xpc_activity_(?:copy_criteria|get_state|register|s(?:et_(?:criteria|state)|hould_defer)|unregister))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.c'}
          }
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.cf.10.12.c'}
          },
          match: '(\\s*)(\\bCFDateFormatterCreateISO8601Formatter\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.cf.10.8.c'}
          },
          match: '(\\s*)(\\bCFFileSecurityClearProperties\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.cf.10.9.c'}
          },
          match:
            '(\\s*)(\\bCF(?:Autorelease|R(?:eadStream(?:CopyDispatchQueue|SetDispatchQueue)|unLoopTimer(?:GetTolerance|SetTolerance))|URLIsFileReferenceURL|WriteStream(?:CopyDispatchQueue|SetDispatchQueue))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.cf.c'}
          },
          match:
            '(\\s*)(\\bCF(?:A(?:bsoluteTimeGetCurrent|llocator(?:Allocate|Create|Deallocate|Get(?:Context|Default|PreferredSizeForSize|TypeID)|Reallocate|SetDefault)|rray(?:App(?:end(?:Array|Value)|lyFunction)|BSearchValues|C(?:ontainsValue|reate(?:Copy|Mutable(?:Copy)?)?)|ExchangeValuesAtIndices|Get(?:Count(?:OfValue)?|FirstIndexOfValue|LastIndexOfValue|TypeID|Value(?:AtIndex|s))|InsertValueAtIndex|Re(?:move(?:AllValues|ValueAtIndex)|placeValues)|S(?:etValueAtIndex|ortValues))|ttributedString(?:BeginEditing|Create(?:Copy|Mutable(?:Copy)?|WithSubstring)?|EndEditing|Get(?:Attribute(?:AndLongestEffectiveRange|s(?:AndLongestEffectiveRange)?)?|Length|MutableString|String|TypeID)|Re(?:moveAttribute|place(?:AttributedString|String))|SetAttribute(?:s)?))|B(?:ag(?:A(?:ddValue|pplyFunction)|C(?:ontainsValue|reate(?:Copy|Mutable(?:Copy)?)?)|Get(?:Count(?:OfValue)?|TypeID|Value(?:IfPresent|s)?)|Re(?:move(?:AllValues|Value)|placeValue)|SetValue)|i(?:naryHeap(?:A(?:ddValue|pplyFunction)|C(?:ontainsValue|reate(?:Copy)?)|Get(?:Count(?:OfValue)?|Minimum(?:IfPresent)?|TypeID|Values)|Remove(?:AllValues|MinimumValue))|tVector(?:C(?:ontainsBit|reate(?:Copy|Mutable(?:Copy)?)?)|FlipBit(?:AtIndex|s)|Get(?:Bit(?:AtIndex|s)|Count(?:OfBit)?|FirstIndexOfBit|LastIndexOfBit|TypeID)|Set(?:AllBits|Bit(?:AtIndex|s)|Count)))|ooleanGet(?:TypeID|Value)|undle(?:C(?:opy(?:AuxiliaryExecutableURL|Bu(?:iltInPlugInsURL|ndle(?:Localizations|URL))|Executable(?:Architectures(?:ForURL)?|URL)|InfoDictionary(?:ForURL|InDirectory)|Localiz(?:ationsFor(?:Preferences|URL)|edString)|Pr(?:eferredLocalizationsFromArray|ivateFrameworksURL)|Resource(?:URL(?:ForLocalization|InDirectory|sOfType(?:ForLocalization|InDirectory)?)?|sDirectoryURL)|S(?:hared(?:FrameworksURL|SupportURL)|upportFilesDirectoryURL))|reate(?:BundlesFromDirectory)?)|Get(?:AllBundles|BundleWithIdentifier|D(?:ataPointer(?:ForName|sForNames)|evelopmentRegion)|FunctionPointer(?:ForName|sForNames)|I(?:dentifier|nfoDictionary)|LocalInfoDictionary|MainBundle|P(?:ackageInfo(?:InDirectory)?|lugIn)|TypeID|V(?:alueForInfoDictionaryKey|ersionNumber))|IsExecutableLoaded|LoadExecutable(?:AndReturnError)?|PreflightExecutable|UnloadExecutable)|yteOrderGetCurrent)|C(?:alendar(?:AddComponents|C(?:o(?:mposeAbsoluteTime|py(?:Current|Locale|TimeZone))|reateWithIdentifier)|DecomposeAbsoluteTime|Get(?:ComponentDifference|FirstWeekday|Identifier|M(?:aximumRangeOfUnit|inimum(?:DaysInFirstWeek|RangeOfUnit))|OrdinalityOfUnit|RangeOfUnit|T(?:imeRangeOfUnit|ypeID))|Set(?:FirstWeekday|Locale|MinimumDaysInFirstWeek|TimeZone))|haracterSet(?:AddCharactersIn(?:Range|String)|Create(?:BitmapRepresentation|Copy|InvertedSet|Mutable(?:Copy)?|With(?:BitmapRepresentation|CharactersIn(?:Range|String)))|Get(?:Predefined|TypeID)|HasMemberInPlane|I(?:n(?:tersect|vert)|s(?:CharacterMember|LongCharacterMember|SupersetOfSet))|RemoveCharactersIn(?:Range|String)|Union)|o(?:nvert(?:Double(?:HostToSwapped|SwappedToHost)|Float(?:32(?:HostToSwapped|SwappedToHost)|64(?:HostToSwapped|SwappedToHost)|HostToSwapped|SwappedToHost))|py(?:Description|HomeDirectoryURL|TypeIDDescription)))|D(?:at(?:a(?:AppendBytes|Create(?:Copy|Mutable(?:Copy)?|WithBytesNoCopy)?|DeleteBytes|Find|Get(?:Byte(?:Ptr|s)|Length|MutableBytePtr|TypeID)|IncreaseLength|ReplaceBytes|SetLength)|e(?:C(?:ompare|reate)|Formatter(?:C(?:opyProperty|reate(?:DateF(?:ormatFromTemplate|romString)|StringWith(?:AbsoluteTime|Date))?)|Get(?:AbsoluteTimeFromString|DateStyle|Format|Locale|T(?:imeStyle|ypeID))|Set(?:Format|Property))|Get(?:AbsoluteTime|T(?:imeIntervalSinceDate|ypeID))))|ictionary(?:A(?:ddValue|pplyFunction)|C(?:ontains(?:Key|Value)|reate(?:Copy|Mutable(?:Copy)?)?)|Get(?:Count(?:Of(?:Key|Value))?|KeysAndValues|TypeID|Value(?:IfPresent)?)|Re(?:move(?:AllValues|Value)|placeValue)|SetValue))|E(?:qual|rror(?:C(?:opy(?:Description|FailureReason|RecoverySuggestion|UserInfo)|reate(?:WithUserInfoKeysAndValues)?)|Get(?:Code|Domain|TypeID)))|File(?:Descriptor(?:Create(?:RunLoopSource)?|DisableCallBacks|EnableCallBacks|Get(?:Context|NativeDescriptor|TypeID)|I(?:nvalidate|sValid))|Security(?:C(?:opy(?:AccessControlList|GroupUUID|OwnerUUID)|reate(?:Copy)?)|Get(?:Group|Mode|Owner|TypeID)|Set(?:AccessControlList|Group(?:UUID)?|Mode|Owner(?:UUID)?)))|Get(?:Allocator|RetainCount|TypeID)|Hash|Locale(?:C(?:opy(?:AvailableLocaleIdentifiers|C(?:ommonISOCurrencyCodes|urrent)|DisplayNameForPropertyValue|ISO(?:C(?:ountryCodes|urrencyCodes)|LanguageCodes)|PreferredLanguages)|reate(?:C(?:anonicalL(?:anguageIdentifierFromString|ocaleIdentifierFromS(?:criptManagerCodes|tring))|o(?:mponentsFromLocaleIdentifier|py))|LocaleIdentifierFrom(?:Components|WindowsLocaleCode))?)|Get(?:Identifier|Language(?:CharacterDirection|LineDirection)|System|TypeID|Value|WindowsLocaleCodeFromLocaleIdentifier))|M(?:a(?:chPort(?:Create(?:RunLoopSource|WithPort)?|Get(?:Context|InvalidationCallBack|Port|TypeID)|I(?:nvalidate|sValid)|SetInvalidationCallBack)|keCollectable)|essagePort(?:Create(?:Local|R(?:emote|unLoopSource))|Get(?:Context|InvalidationCallBack|Name|TypeID)|I(?:nvalidate|s(?:Remote|Valid))|Se(?:ndRequest|t(?:DispatchQueue|InvalidationCallBack|Name))))|N(?:otificationCenter(?:AddObserver|Get(?:D(?:arwinNotifyCenter|istributedCenter)|LocalCenter|TypeID)|PostNotification(?:WithOptions)?|Remove(?:EveryObserver|Observer))|u(?:llGetTypeID|mber(?:C(?:ompare|reate)|Formatter(?:C(?:opyProperty|reate(?:NumberFromString|StringWith(?:Number|Value))?)|Get(?:DecimalInfoForCurrencyCode|Format|Locale|Style|TypeID|ValueFromString)|Set(?:Format|Property))|Get(?:ByteSize|Type(?:ID)?|Value)|IsFloatType)))|P(?:lugIn(?:AddInstanceForFactory|Create|FindFactoriesForPlugInType(?:InPlugIn)?|Get(?:Bundle|TypeID)|I(?:nstance(?:Create(?:WithInstanceDataSize)?|Get(?:FactoryName|In(?:stanceData|terfaceFunctionTable)|TypeID))|sLoadOnDemand)|Re(?:gister(?:FactoryFunction(?:ByName)?|PlugInType)|moveInstanceForFactory)|SetLoadOnDemand|Unregister(?:Factory|PlugInType))|r(?:eferences(?:A(?:ddSuitePreferencesToApp|pp(?:Synchronize|ValueIsForced))|Copy(?:AppValue|KeyList|Multiple|Value)|GetApp(?:BooleanValue|IntegerValue)|RemoveSuitePreferencesFromApp|S(?:et(?:AppValue|Multiple|Value)|ynchronize))|opertyList(?:Create(?:D(?:ata|eepCopy)|With(?:Data|Stream))|IsValid|Write)))|R(?:angeMake|e(?:adStream(?:C(?:lose|opy(?:Error|Property)|reateWith(?:BytesNoCopy|File))|Get(?:Buffer|Error|Status|TypeID)|HasBytesAvailable|Open|Read|S(?:cheduleWithRunLoop|et(?:Client|Property))|UnscheduleFromRunLoop)|lease|tain)|unLoop(?:Add(?:CommonMode|Observer|Source|Timer)|Co(?:ntains(?:Observer|Source|Timer)|py(?:AllModes|CurrentMode))|Get(?:Current|Main|NextTimerFireDate|TypeID)|IsWaiting|Observer(?:Create(?:WithHandler)?|DoesRepeat|Get(?:Activities|Context|Order|TypeID)|I(?:nvalidate|sValid))|PerformBlock|R(?:emove(?:Observer|Source|Timer)|un(?:InMode)?)|S(?:ource(?:Create|Get(?:Context|Order|TypeID)|I(?:nvalidate|sValid)|Signal)|top)|Timer(?:Create(?:WithHandler)?|DoesRepeat|Get(?:Context|Interval|NextFireDate|Order|TypeID)|I(?:nvalidate|sValid)|SetNextFireDate)|WakeUp))|S(?:et(?:A(?:ddValue|pplyFunction)|C(?:ontainsValue|reate(?:Copy|Mutable(?:Copy)?)?)|Get(?:Count(?:OfValue)?|TypeID|Value(?:IfPresent|s)?)|Re(?:move(?:AllValues|Value)|placeValue)|SetValue)|how(?:Str)?|ocket(?:C(?:o(?:nnectToAddress|py(?:Address|PeerAddress|Registered(?:SocketSignature|Value)))|reate(?:ConnectedToSocketSignature|RunLoopSource|With(?:Native|SocketSignature))?)|DisableCallBacks|EnableCallBacks|Get(?:Context|DefaultNameRegistryPortNumber|Native|SocketFlags|TypeID)|I(?:nvalidate|sValid)|Register(?:SocketSignature|Value)|Se(?:ndData|t(?:Address|DefaultNameRegistryPortNumber|SocketFlags))|Unregister)|tr(?:eamCreate(?:BoundPair|PairWith(?:PeerSocketSignature|Socket(?:ToHost)?))|ing(?:Append(?:C(?:String|haracters)|Format(?:AndArguments)?|PascalString)?|C(?:apitalize|o(?:mpare(?:WithOptions(?:AndLocale)?)?|nvert(?:EncodingTo(?:IANACharSetName|NSStringEncoding|WindowsCodepage)|IANACharSetNameToEncoding|NSStringEncodingToEncoding|WindowsCodepageToEncoding))|reate(?:Array(?:BySeparatingStrings|WithFindResults)|ByCombiningStrings|Copy|ExternalRepresentation|FromExternalRepresentation|Mutable(?:Copy|WithExternalCharactersNoCopy)?|With(?:Bytes(?:NoCopy)?|C(?:String(?:NoCopy)?|haracters(?:NoCopy)?)|F(?:ileSystemRepresentation|ormat(?:AndArguments)?)|PascalString(?:NoCopy)?|Substring)))|Delete|F(?:ind(?:AndReplace|CharacterFromSet|WithOptions(?:AndLocale)?)?|old)|Get(?:Bytes|C(?:String(?:Ptr)?|haracter(?:AtIndex|FromInlineBuffer|s(?:Ptr)?))|DoubleValue|F(?:astestEncoding|ileSystemRepresentation)|HyphenationLocationBeforeIndex|IntValue|L(?:ength|i(?:neBounds|stOfAvailableEncodings)|ongCharacterForSurrogatePair)|M(?:aximumSize(?:ForEncoding|OfFileSystemRepresentation)|ostCompatibleMacStringEncoding)|NameOfEncoding|Pa(?:ragraphBounds|scalString(?:Ptr)?)|RangeOfComposedCharactersAtIndex|S(?:mallestEncoding|urrogatePairForLongCharacter|ystemEncoding)|TypeID)|Has(?:Prefix|Suffix)|I(?:n(?:itInlineBuffer|sert)|s(?:EncodingAvailable|HyphenationAvailableForLocale|Surrogate(?:HighCharacter|LowCharacter)))|Lowercase|Normalize|Pad|Replace(?:All)?|SetExternalCharactersNoCopy|T(?:okenizer(?:AdvanceToNextToken|C(?:opy(?:BestStringLanguage|CurrentTokenAttribute)|reate)|G(?:et(?:Current(?:SubTokens|TokenRange)|TypeID)|oToTokenAtIndex)|SetString)|r(?:ansform|im(?:Whitespace)?))|Uppercase))|wapInt(?:16(?:BigToHost|HostTo(?:Big|Little)|LittleToHost)?|32(?:BigToHost|HostTo(?:Big|Little)|LittleToHost)?|64(?:BigToHost|HostTo(?:Big|Little)|LittleToHost)?))|T(?:imeZone(?:C(?:opy(?:Abbreviation(?:Dictionary)?|Default|KnownNames|LocalizedName|System)|reate(?:With(?:Name|TimeIntervalFromGMT))?)|Get(?:Da(?:ta|ylightSavingTimeOffset)|N(?:ame|extDaylightSavingTimeTransition)|SecondsFromGMT|TypeID)|IsDaylightSavingTime|ResetSystem|Set(?:AbbreviationDictionary|Default))|ree(?:App(?:endChild|lyFunctionToChildren)|Create|FindRoot|Get(?:C(?:hild(?:AtIndex|Count|ren)|ontext)|FirstChild|NextSibling|Parent|TypeID)|InsertSibling|PrependChild|Remove(?:AllChildren)?|S(?:etContext|ortChildren)))|U(?:RL(?:C(?:anBeDecomposed|learResourcePropertyCache(?:ForKey)?|opy(?:AbsoluteURL|F(?:ileSystemPath|ragment)|HostName|LastPathComponent|NetLocation|Pa(?:ssword|th(?:Extension)?)|QueryString|Resource(?:Propert(?:iesForKeys|yForKey)|Specifier)|S(?:cheme|trictPath)|UserName)|reate(?:AbsoluteURLWithBytes|B(?:ookmarkData(?:From(?:AliasRecord|File))?|yResolvingBookmarkData)|Copy(?:AppendingPath(?:Component|Extension)|Deleting(?:LastPathComponent|PathExtension))|Data|F(?:ile(?:PathURL|ReferenceURL)|romFileSystemRepresentation(?:RelativeToBase)?)|ResourcePropert(?:iesForKeysFromBookmarkData|yForKeyFromBookmarkData)|StringByReplacingPercentEscapes|With(?:Bytes|FileSystemPath(?:RelativeToBase)?|String)))|Enumerator(?:CreateFor(?:DirectoryURL|MountedVolumes)|Get(?:DescendentLevel|NextURL|TypeID)|SkipDescendents)|Get(?:B(?:aseURL|yte(?:RangeForComponent|s))|FileSystemRepresentation|PortNumber|String|TypeID)|HasDirectoryPath|ResourceIsReachable|S(?:et(?:ResourcePropert(?:iesForKeys|yForKey)|TemporaryResourcePropertyForKey)|t(?:artAccessingSecurityScopedResource|opAccessingSecurityScopedResource))|WriteBookmarkDataToFile)|UID(?:Create(?:From(?:String|UUIDBytes)|String|WithBytes)?|Get(?:ConstantUUIDWithBytes|TypeID|UUIDBytes))|serNotification(?:C(?:ancel|heckBoxChecked|reate(?:RunLoopSource)?)|Display(?:Alert|Notice)|Get(?:Response(?:Dictionary|Value)|TypeID)|PopUpSelection|ReceiveResponse|SecureTextField|Update))|WriteStream(?:C(?:anAcceptBytes|lose|opy(?:Error|Property)|reateWith(?:AllocatedBuffers|Buffer|File))|Get(?:Error|Status|TypeID)|Open|S(?:cheduleWithRunLoop|et(?:Client|Property))|UnscheduleFromRunLoop|Write)|XMLCreateStringBy(?:EscapingEntities|UnescapingEntities))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.clib.10.10.c'}
          },
          match:
            '(\\s*)(\\b(?:f(?:accessat|chownat)|getattrlist(?:at|bulk)|linkat|openat|re(?:adlinkat|nameat)|symlinkat|unlinkat)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.clib.10.12.c'}
          },
          match:
            '(\\s*)(\\b(?:clock_(?:get(?:res|time(?:_nsec_np)?)|settime)|mk(?:ostemp(?:s)?|pathat_np)|rename(?:atx_np|x_np)|timingsafe_bcmp)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.clib.10.13.c'}
          },
          match:
            '(\\s*)(\\b(?:fmemopen|mk(?:dtempat_np|ostempsat_np|stempsat_np)|open_memstream|ptsname_r|setattrlistat)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.clib.10.15.c'}
          },
          match: '(\\s*)(\\b(?:rpmatch|timespec_get)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.clib.10.8.c'}
          },
          match: '(\\s*)(\\b(?:fsync_volume_np|mkpath_np|sync_volume_np)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.clib.10.9.c'}
          },
          match: '(\\s*)(\\b(?:f(?:fsll|lsll)|memset_s)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.clib.c'}
          },
          match:
            '(\\s*)(\\b(?:a(?:64l|b(?:ort|s)|c(?:c(?:ess(?:x_np)?|t)|os(?:f|h(?:f|l)?|l)?)|d(?:d_profil|jtime)|l(?:arm|loca)|rc4random(?:_(?:buf|stir|uniform))?|s(?:ctime(?:_r)?|in(?:f|h(?:f|l)?|l)?|printf)|t(?:an(?:2(?:f|l)?|f|h(?:f|l)?|l)?|exit(?:_b)?|o(?:f|i|l(?:l)?)))|b(?:c(?:mp|opy)|rk|s(?:d_signal|earch(?:_b)?)|zero)|c(?:brt(?:f|l)?|eil(?:f|l)?|get(?:c(?:ap|lose)|ent|first|match|n(?:ext|um)|s(?:et|tr)|ustr)|h(?:dir|own|root)|l(?:earerr|o(?:ck|se))|o(?:nfstr|pysign(?:f|l)?|s(?:f|h(?:f|l)?|l)?)|r(?:eat|ypt)|t(?:ermid_r|ime(?:_r)?))|d(?:evname(?:_r)?|i(?:fftime|spatch_(?:time|walltime)|v)|printf|rand48|up(?:2)?)|e(?:cvt|n(?:crypt|dusershell)|r(?:and48|f(?:c(?:f|l)?|f|l)?)|x(?:changedata|ec(?:l(?:e|p)?|v(?:P|e|p)?)|it|p(?:2(?:f|l)?|f|l|m1(?:f|l)?)?))|f(?:abs(?:f|l)?|c(?:h(?:dir|own)|lose|ntl|vt)|d(?:im(?:f|l)?|open)|e(?:of|rror)|f(?:l(?:agstostr|ush)|s(?:ctl|l)?)|get(?:attrlist|c|ln|pos|s)|ile(?:no|sec_(?:dup|free|get_property|init|query_property|set_property|unset_property))|l(?:o(?:ck(?:file)?|or(?:f|l)?)|s(?:l)?)|m(?:a(?:f|l|x(?:f|l)?)?|in(?:f|l)?|od(?:f|l)?|tcheck)|o(?:pen|rk)|p(?:athconf|rintf|u(?:rge|t(?:c|s)))|re(?:ad|open|xp(?:f|l)?)|s(?:c(?:anf|tl)|e(?:ek(?:o)?|t(?:attrlist|pos))|ync)|t(?:ell(?:o)?|r(?:uncate|ylockfile))|u(?:n(?:lockfile|open)|times)|write)|g(?:cvt|et(?:attrlist|bsize|c(?:_unlocked|har(?:_unlocked)?|wd)?|d(?:ate|elim|irentriesattr|omainname|tablesize)|e(?:gid|nv|uid)|g(?:id|roup(?:list|s))|host(?:id|name)|i(?:opolicy_np|timer)|l(?:ine|o(?:adavg|gin(?:_r)?))|mode|opt|p(?:a(?:gesize|ss)|eereid|g(?:id|rp)|id|pid|r(?:iority|ogname))|r(?:limit|usage)|s(?:groups_np|id|ubopt)?|timeofday|u(?:id|sershell)|w(?:d|groups_np)?)|mtime(?:_r)?|rantpt)|h(?:eapsort(?:_b)?|ypot(?:f|l)?)|i(?:logb(?:f|l)?|n(?:dex|it(?:groups|state))|ruserok(?:_sa)?|s(?:atty|setugid))|j(?:0|1|n|rand48)|kill(?:pg)?|l(?:64a|abs|c(?:hown|ong48)|d(?:exp(?:f|l)?|iv)|gamma(?:f|l)?|ink|l(?:abs|div|r(?:int(?:f|l)?|ound(?:f|l)?))|o(?:c(?:al(?:econv|time(?:_r)?)|kf)|g(?:1(?:0(?:f|l)?|p(?:f|l)?)|2(?:f|l)?|b(?:f|l)?|f|l)?|ngjmp(?:error)?)|r(?:and48|int(?:f|l)?|ound(?:f|l)?)|seek|utimes)|m(?:b(?:len|stowcs|towc)|e(?:m(?:c(?:cpy|hr|mp|py)|m(?:em|ove)|set(?:_pattern(?:16|4|8))?)|rgesort(?:_b)?)|k(?:dtemp|nod|stemp(?:_dprotected_np|s)?|t(?:emp|ime))|odf(?:f|l)?|rand48)|n(?:an(?:f|l|osleep)?|e(?:arbyint(?:f|l)?|xt(?:after(?:f|l)?|toward(?:f|l)?))|fssvc|ice|rand48)|open(?:_dprotected_np|x_np)?|p(?:a(?:thconf|use)|close|error|ipe|o(?:pen|six(?:2time|_openpt)|w(?:f|l)?)|r(?:ead|intf|ofil)|s(?:elect|ignal|ort(?:_(?:b|r))?)|t(?:hread_(?:getugid_np|kill|s(?:etugid_np|igmask))|sname)|ut(?:c(?:_unlocked|har(?:_unlocked)?)?|env|s|w)|write)|qsort(?:_(?:b|r))?|r(?:a(?:dixsort|ise|nd(?:_r|om)?)|cmd(?:_af)?|e(?:a(?:d(?:link)?|l(?:locf|path))|boot|m(?:ainder(?:f|l)?|ove|quo(?:f|l)?)|name|voke|wind)|in(?:dex|t(?:f|l)?)|mdir|ound(?:f|l)?|resvport(?:_af)?|userok)|s(?:brk|ca(?:lb(?:ln(?:f|l)?|n(?:f|l)?)?|nf)|e(?:archfs|ed48|lect|t(?:attrlist|buf(?:fer)?|domainname|e(?:gid|nv|uid)|g(?:id|roups)|host(?:id|name)|i(?:opolicy_np|timer)|jmp|key|l(?:inebuf|o(?:cale|gin))|mode|p(?:g(?:id|rp)|r(?:iority|ogname))|r(?:e(?:gid|uid)|gid|limit|uid)|s(?:groups_np|id|tate)|timeofday|u(?:id|sershell)|vbuf|wgroups_np))|i(?:g(?:a(?:ction|ddset|ltstack)|block|delset|emptyset|fillset|hold|i(?:gnore|nterrupt|smember)|longjmp|nal|p(?:ause|ending|rocmask)|relse|s(?:et(?:jmp|mask)?|uspend)|vec|wait)|md_muladd|n(?:f|h(?:f|l)?|l)?)|leep|nprintf|printf|qrt(?:f|l)?|ra(?:dixsort|nd(?:48|dev|om(?:dev)?)?)|scanf|t(?:p(?:cpy|ncpy)|r(?:c(?:a(?:se(?:cmp|str)|t)|hr|mp|oll|py|spn)|dup|error(?:_r)?|ftime|l(?:c(?:at|py)|en)|mode|n(?:c(?:a(?:secmp|t)|mp|py)|dup|len|str)|p(?:brk|time)|rchr|s(?:ep|ignal|pn|tr)|to(?:d|f(?:flags)?|k(?:_r)?|l(?:d|l)?|q|u(?:l(?:l)?|q))|xfrm))|wa(?:b|pon)|y(?:mlink|nc|s(?:conf|tem)))|t(?:an(?:f|h(?:f|l)?|l)?|c(?:getpgrp|setpgrp)|empnam|gamma(?:f|l)?|ime(?:2posix|gm|local)?|mp(?:file|nam)|runc(?:ate|f|l)?|ty(?:name(?:_r)?|slot)|zset(?:wall)?)|u(?:alarm|n(?:delete|getc|l(?:ink|ockpt)|setenv|whiteout)|sleep|times)|v(?:a(?:lloc|sprintf)|dprintf|f(?:ork|printf|scanf)|printf|s(?:canf|nprintf|printf|scanf))|w(?:ait(?:3|4|id|pid)?|c(?:stombs|tomb)|rite)|y(?:0|1|n)|zopen)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.dispatch.10.10.c'}
          },
          match:
            '(\\s*)(\\bdispatch_(?:block_(?:c(?:ancel|reate(?:_with_qos_class)?)|notify|perform|testcancel|wait)|queue_(?:attr_make_with_qos_class|get_qos_class))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.dispatch.10.12.c'}
          },
          match:
            '(\\s*)(\\bdispatch_(?:a(?:ctivate|ssert_queue(?:_(?:barrier|not))?)|queue_(?:attr_make_(?:initially_inactive|with_autorelease_frequency)|create_with_target))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.dispatch.10.14.c'}
          },
          match:
            '(\\s*)(\\bdispatch_(?:async_and_wait(?:_f)?|barrier_async_and_wait(?:_f)?|set_qos_class_floor|workloop_(?:create(?:_inactive)?|set_autorelease_frequency))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.dispatch.c'}
          },
          match:
            '(\\s*)(\\bdispatch_(?:a(?:fter(?:_f)?|pply(?:_f)?|sync(?:_f)?)|barrier_(?:async(?:_f)?|sync(?:_f)?)|cancel|data_(?:apply|c(?:opy_region|reate(?:_(?:concat|map|subrange))?)|get_size)|g(?:et_(?:context|global_queue|main_queue|specific)|roup_(?:async(?:_f)?|create|enter|leave|notify(?:_f)?|wait))|io_(?:barrier|c(?:lose|reate(?:_with_(?:io|path))?)|get_descriptor|read|set_(?:high_water|interval|low_water)|write)|main|notify|once(?:_f)?|queue_(?:create|get_(?:label|specific)|set_specific)|re(?:ad|lease|sume|tain)|s(?:e(?:maphore_(?:create|signal|wait)|t_(?:context|finalizer_f|target_queue))|ource_(?:c(?:ancel|reate)|get_(?:data|handle|mask)|merge_data|set_(?:cancel_handler(?:_f)?|event_handler(?:_f)?|registration_handler(?:_f)?|timer)|testcancel)|uspend|ync(?:_f)?)|testcancel|w(?:ait|rite))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.os.c'}
          },
          match:
            '(\\s*)(\\b(?:OS(?:HostByteOrder|ReadSwapInt(?:16|32|64)|WriteSwapInt(?:16|32|64))|gethostuuid)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.quartz.10.11.c'}
          },
          match:
            '(\\s*)(\\bCG(?:ColorCreateCopyByMatchingToColorSpace|Event(?:PostToPid|TapCreateForPid)|ImageGetUTType)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.quartz.10.12.c'}
          },
          match:
            '(\\s*)(\\bCGColor(?:ConversionInfoCreate(?:FromList)?|Space(?:C(?:opy(?:ICCData|PropertyList)|reateWith(?:ICCData|PropertyList))|IsWideGamutRGB|SupportsOutput))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.quartz.10.13.c'}
          },
          match:
            '(\\s*)(\\bCG(?:Color(?:ConversionInfoCreateFromListWithArguments|SpaceGetName)|DataProviderGetInfo|EventCreateScrollWheelEvent2|P(?:DF(?:ContextSetOutline|DocumentGet(?:AccessPermissions|Outline))|athApplyWithBlock))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.quartz.10.14.c'}
          },
          match:
            '(\\s*)(\\bCG(?:ColorConversionInfoCreateWithOptions|ImageGet(?:ByteOrderInfo|PixelFormatInfo)|PDF(?:ArrayApplyBlock|DictionaryApplyBlock))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.quartz.10.15.c'}
          },
          match:
            '(\\s*)(\\bCG(?:ColorCreate(?:GenericGrayGamma2_2|SRGB)|PDF(?:Context(?:BeginTag|EndTag)|TagTypeGetName))\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.quartz.10.8.c'}
          },
          match:
            '(\\s*)(\\bCG(?:Display(?:ModeGetPixel(?:Height|Width)|Stream(?:Create(?:WithDispatchQueue)?|Get(?:RunLoopSource|TypeID)|St(?:art|op)|Update(?:CreateMergedUpdate|Get(?:DropCount|MovedRectsDelta|Rects|TypeID))))|WindowServerCreateServerPort)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.quartz.10.9.c'}
          },
          match: '(\\s*)(\\bCGPath(?:AddRoundedRect|CreateWithRoundedRect)\\b)'
        },
        {
          captures: {
            1: {name: 'punctuation.whitespace.support.function.leading'},
            2: {name: 'support.function.quartz.c'}
          },
          match:
            '(\\s*)(\\bCG(?:A(?:cquireDisplayFadeReservation|ffineTransform(?:Concat|EqualToTransform|I(?:nvert|sIdentity)|Make(?:Rotation|Scale|Translation)?|Rotate|Scale|Translate)|ssociateMouseAndMouseCursorPosition)|B(?:eginDisplayConfiguration|itmapContext(?:Create(?:Image|WithData)?|Get(?:AlphaInfo|B(?:it(?:mapInfo|sPer(?:Component|Pixel))|ytesPerRow)|ColorSpace|Data|Height|Width)))|C(?:a(?:ncelDisplayConfiguration|ptureAllDisplays(?:WithOptions)?)|o(?:lor(?:C(?:onversionInfoGetTypeID|reate(?:Copy(?:WithAlpha)?|Generic(?:CMYK|Gray|RGB)|WithPattern)?)|EqualToColor|Get(?:Alpha|Co(?:lorSpace|mponents|nstantColor)|NumberOfComponents|Pattern|TypeID)|Re(?:lease|tain)|Space(?:C(?:opyName|reate(?:Calibrated(?:Gray|RGB)|Device(?:CMYK|Gray|RGB)|I(?:CCBased|ndexed)|Lab|Pattern|With(?:Name|PlatformColorSpace)))|Get(?:BaseColorSpace|ColorTable(?:Count)?|Model|NumberOfComponents|TypeID)|Re(?:lease|tain)))|mpleteDisplayConfiguration|n(?:figureDisplay(?:FadeEffect|MirrorOfDisplay|Origin|StereoOperation|WithDisplayMode)|text(?:Add(?:Arc(?:ToPoint)?|CurveToPoint|EllipseInRect|Line(?:ToPoint|s)|Path|QuadCurveToPoint|Rect(?:s)?)|Begin(?:Pa(?:ge|th)|TransparencyLayer(?:WithRect)?)|C(?:l(?:earRect|ip(?:To(?:Mask|Rect(?:s)?))?|osePath)|o(?:n(?:catCTM|vert(?:PointTo(?:DeviceSpace|UserSpace)|RectTo(?:DeviceSpace|UserSpace)|SizeTo(?:DeviceSpace|UserSpace)))|pyPath))|Draw(?:Image|L(?:ayer(?:AtPoint|InRect)|inearGradient)|P(?:DFPage|ath)|RadialGradient|Shading|TiledImage)|E(?:O(?:Clip|FillPath)|nd(?:Page|TransparencyLayer))|F(?:ill(?:EllipseInRect|Path|Rect(?:s)?)|lush)|Get(?:C(?:TM|lipBoundingBox)|InterpolationQuality|Path(?:BoundingBox|CurrentPoint)|T(?:ext(?:Matrix|Position)|ypeID)|UserSpaceToDeviceSpaceTransform)|IsPathEmpty|MoveToPoint|PathContainsPoint|R(?:e(?:lease|placePathWithStrokedPath|s(?:etClip|toreGState)|tain)|otateCTM)|S(?:aveGState|caleCTM|et(?:Al(?:lows(?:Antialiasing|FontS(?:moothing|ubpixel(?:Positioning|Quantization)))|pha)|BlendMode|C(?:MYK(?:FillColor|StrokeColor)|haracterSpacing)|F(?:ill(?:Color(?:Space|WithColor)?|Pattern)|latness|ont(?:Size)?)|Gray(?:FillColor|StrokeColor)|InterpolationQuality|Line(?:Cap|Dash|Join|Width)|MiterLimit|PatternPhase|R(?:GB(?:FillColor|StrokeColor)|enderingIntent)|S(?:h(?:adow(?:WithColor)?|ould(?:Antialias|S(?:moothFonts|ubpixel(?:PositionFonts|QuantizeFonts))))|troke(?:Color(?:Space|WithColor)?|Pattern))|Text(?:DrawingMode|Matrix|Position))|howGlyphsAtPositions|troke(?:EllipseInRect|LineSegments|Path|Rect(?:WithWidth)?)|ynchronize)|TranslateCTM))))|D(?:ata(?:Consumer(?:Create(?:With(?:CFData|URL))?|GetTypeID|Re(?:lease|tain))|Provider(?:C(?:opyData|reate(?:Direct|Sequential|With(?:CFData|Data|Filename|URL)))|GetTypeID|Re(?:lease|tain)))|isplay(?:Bounds|C(?:apture(?:WithOptions)?|opy(?:AllDisplayModes|ColorSpace|DisplayMode)|reateImage(?:ForRect)?)|Fade|G(?:ammaTableCapacity|etDrawingContext)|HideCursor|I(?:DToOpenGLDisplayMask|s(?:A(?:ctive|lwaysInMirrorSet|sleep)|Builtin|In(?:HWMirrorSet|MirrorSet)|Main|Online|Stereo))|M(?:irrorsDisplay|o(?:de(?:Get(?:Height|IO(?:DisplayModeID|Flags)|RefreshRate|TypeID|Width)|IsUsableForDesktopGUI|Re(?:lease|tain)|lNumber)|veCursorToPoint))|P(?:ixels(?:High|Wide)|rimaryDisplay)|R(?:e(?:gisterReconfigurationCallback|lease|moveReconfigurationCallback|storeColorSyncSettings)|otation)|S(?:creenSize|e(?:rialNumber|t(?:DisplayMode|StereoOperation))|howCursor)|U(?:nitNumber|sesOpenGLAcceleration)|VendorNumber))|Event(?:Create(?:Copy|Data|FromData|KeyboardEvent|MouseEvent|S(?:crollWheelEvent|ourceFromEvent))?|Get(?:DoubleValueField|Flags|IntegerValueField|Location|T(?:imestamp|ype(?:ID)?)|UnflippedLocation)|Keyboard(?:GetUnicodeString|SetUnicodeString)|Post(?:ToPSN)?|S(?:et(?:DoubleValueField|Flags|IntegerValueField|Location|Source|T(?:imestamp|ype))|ource(?:ButtonState|C(?:ounterForEventType|reate)|FlagsState|Get(?:KeyboardType|LocalEvents(?:FilterDuringSuppressionState|SuppressionInterval)|PixelsPerLine|SourceStateID|TypeID|UserData)|KeyState|Se(?:condsSinceLastEventType|t(?:KeyboardType|LocalEvents(?:FilterDuringSuppressionState|SuppressionInterval)|PixelsPerLine|UserData))))|Tap(?:Create(?:ForPSN)?|Enable|IsEnabled|PostEvent))|F(?:ont(?:C(?:anCreatePostScriptSubset|opy(?:FullName|GlyphNameForGlyph|PostScriptName|Table(?:ForTag|Tags)|Variation(?:Axes|s))|reate(?:CopyWithVariations|PostScript(?:Encoding|Subset)|With(?:DataProvider|FontName)))|Get(?:Ascent|CapHeight|Descent|FontBBox|Glyph(?:Advances|BBoxes|WithGlyphName)|ItalicAngle|Leading|NumberOfGlyphs|StemV|TypeID|UnitsPerEm|XHeight)|Re(?:lease|tain))|unction(?:Create|GetTypeID|Re(?:lease|tain)))|G(?:et(?:ActiveDisplayList|Display(?:TransferBy(?:Formula|Table)|sWith(?:OpenGLDisplayMask|Point|Rect))|EventTapList|LastMouseDelta|OnlineDisplayList)|radient(?:CreateWithColor(?:Components|s)|GetTypeID|Re(?:lease|tain)))|Image(?:Create(?:Copy(?:WithColorSpace)?|With(?:ImageInRect|JPEGDataProvider|Mask(?:ingColors)?|PNGDataProvider))?|Get(?:AlphaInfo|B(?:it(?:mapInfo|sPer(?:Component|Pixel))|ytesPerRow)|ColorSpace|D(?:ataProvider|ecode)|Height|RenderingIntent|ShouldInterpolate|TypeID|Width)|IsMask|MaskCreate|Re(?:lease|tain))|Layer(?:CreateWithContext|Get(?:Context|Size|TypeID)|Re(?:lease|tain))|MainDisplayID|OpenGLDisplayMaskToDisplayID|P(?:DF(?:ArrayGet(?:Array|Boolean|Count|Dictionary|Integer|N(?:ame|u(?:ll|mber))|Object|Str(?:eam|ing))|Conte(?:ntStream(?:CreateWith(?:Page|Stream)|Get(?:Resource|Streams)|Re(?:lease|tain))|xt(?:AddD(?:estinationAtPoint|ocumentMetadata)|BeginPage|C(?:lose|reate(?:WithURL)?)|EndPage|Set(?:DestinationForRect|URLForRect)))|D(?:ictionary(?:ApplyFunction|Get(?:Array|Boolean|Count|Dictionary|Integer|N(?:ame|umber)|Object|Str(?:eam|ing)))|ocument(?:Allows(?:Copying|Printing)|CreateWith(?:Provider|URL)|Get(?:Catalog|I(?:D|nfo)|NumberOfPages|Page|TypeID|Version)|Is(?:Encrypted|Unlocked)|Re(?:lease|tain)|UnlockWithPassword))|O(?:bjectGet(?:Type|Value)|peratorTable(?:Create|Re(?:lease|tain)|SetCallback))|Page(?:Get(?:BoxRect|D(?:ictionary|ocument|rawingTransform)|PageNumber|RotationAngle|TypeID)|Re(?:lease|tain))|S(?:canner(?:Create|GetContentStream|Pop(?:Array|Boolean|Dictionary|Integer|N(?:ame|umber)|Object|Str(?:eam|ing))|Re(?:lease|tain)|Scan)|tr(?:eam(?:CopyData|GetDictionary)|ing(?:Copy(?:Date|TextString)|Get(?:BytePtr|Length)))))|SConverter(?:Abort|C(?:onvert|reate)|GetTypeID|IsConverting)|at(?:h(?:A(?:dd(?:Arc(?:ToPoint)?|CurveToPoint|EllipseInRect|Line(?:ToPoint|s)|Path|QuadCurveToPoint|Re(?:ct(?:s)?|lativeArc))|pply)|C(?:loseSubpath|ontainsPoint|reate(?:Copy(?:By(?:DashingPath|StrokingPath|TransformingPath))?|Mutable(?:Copy(?:ByTransformingPath)?)?|With(?:EllipseInRect|Rect)))|EqualToPath|Get(?:BoundingBox|CurrentPoint|PathBoundingBox|TypeID)|Is(?:Empty|Rect)|MoveToPoint|Re(?:lease|tain))|tern(?:Create|GetTypeID|Re(?:lease|tain)))|oint(?:ApplyAffineTransform|CreateDictionaryRepresentation|EqualToPoint|Make(?:WithDictionaryRepresentation)?))|Re(?:ct(?:ApplyAffineTransform|C(?:ontains(?:Point|Rect)|reateDictionaryRepresentation)|Divide|EqualToRect|Get(?:Height|M(?:ax(?:X|Y)|i(?:d(?:X|Y)|n(?:X|Y)))|Width)|I(?:n(?:set|te(?:gral|rsect(?:ion|sRect)))|s(?:Empty|Infinite|Null))|Make(?:WithDictionaryRepresentation)?|Offset|Standardize|Union)|lease(?:AllDisplays|DisplayFadeReservation)|storePermanentDisplayConfiguration)|S(?:e(?:ssionCopyCurrentDictionary|tDisplayTransferBy(?:ByteTable|Formula|Table))|h(?:ading(?:Create(?:Axial|Radial)|GetTypeID|Re(?:lease|tain))|ieldingWindow(?:ID|Level))|ize(?:ApplyAffineTransform|CreateDictionaryRepresentation|EqualToSize|Make(?:WithDictionaryRepresentation)?))|VectorMake|W(?:arpMouseCursorPosition|indowL(?:evelForKey|istC(?:opyWindowInfo|reate(?:DescriptionFromArray|Image(?:FromArray)?)?))))\\b)'
        }
      ]
    }
  },
  scopeName: 'source.c.platform'
}

export default grammar
