// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Nessphoro/sublimeassembly>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.asm', '.a51', '.i', '.nas', '.nasm', '.s'],
  extensionsWithDot: ['.inc'],
  names: ['assembly', 'asm', 'nasm'],
  patterns: [
    {
      match:
        '\\b(?i)(aaa|aad|aam|aas|adc|adcx|add|addpd|addps|addsd|addss|addsubpd|addsubps|adox|aesdec|vaesdec|aesdec128kl|aesdec256kl|aesdeclast|vaesdeclast|aesdecwide128kl|aesdecwide256kl|aesenc|vaesenc|aesenc128kl|aesenc256kl|aesenclast|aesencwide128kl|aesencwide256kl|aesimc|vaesimc|aeskeygenassist|and|andn|andnpd|vandnpd|andnps|vandnps|andpd|andps|vandps|arpl|bextr|blendpd|vblendpd|blendps|blendvpd|vblendvpd|blendvps|vblendvps|blsi|blsmsk|blsr|bndcl|bndcu|bndcn|bndldx|bndmk|bndmov|bndstx|bound|bsf|bsr|bswap|bt|btc|btr|bts|bzhi|call|cbw|cwde|cdqe|cwd|cdq|cqo|clac|clc|cld|cldemote|clflush|clflushopt|cli|clrssbsy|clts|clui|clwb|cmc|cmova/cmovnbe|cmovae/cmovnb|cmovb/cmovc|cmovbe/cmovna|cmove/cmovz|cmovne/cmovnz|cmovg/cmovnle|cmovge/cmovnl|cmovl/cmovnge|cmovle/cmovng|cmovo|cmovno|cmovs|cmovns|cmovp/cmovpe|cmovnp/cmovpo|cmp|cmppd|cmpps|cmps|cmpsb|cmpsw|cmpsd|cmpsq|cmpss|cmpxchg|cmpxchg8b|cmpxchg16b|comisd|comiss|cpuid|crc32|cvtdq2pd|cvtdq2ps|cvtpd2dq|cvtpd2pi|cvtpd2ps|cvtpi2pd|cvtpi2ps|cvtps2dq|cvtps2pd|cvtps2pi|cvtsd2si|cvtsd2ss|cvtsi2sd|cvtsi2ss|cvtss2sd|cvtss2si|cvttpd2dq|cvttpd2pi|cvttps2dq|cvttps2pi|cvttsd2si|cvttss2si|daa|das|dec|div|divpd|vdivpd|divps|divsd|divss|dppd|vdppd|dpps|emms|encodekey128|encodekey256|endbr32|endbr64|enqcmd|enqcmds|enter|extractps|f2xm1|fabs|fadd|faddp|fiadd|fbld|fbstp|fchs|fclex|fnclex|fcmovb|fcmove|fcmovbe|fcmovu|fcmovnb|fcmovne|fcmovnbe|fcmovnu|fcom|fcomp|fcompp|fcomi|fcomip|fucomi|fucomip|fcos|fdecstp|fdiv|fdivp|fidiv|fdivr|fdivrp|fidivr|ffree|ficom|ficomp|fild|fmul|fmulp|fimul|fincstp|finit|fninit|fist|fistp|fisttp|fsub|fsubp|fisub|fsubr|fsubrp|fisubr|fld|fld1|fldl2t|fldl2e|fldpi|fldlg2|fldln2|fldz|fldcw|fldenv|fnop|fsave|fnsave|fstcw|fnstcw|fstenv|fnstenv|fstsw|fnstsw|fpatan|fprem|fprem1|fptan|frndint|frstor|fscale|fsin|fsincos|fsqrt|fst|fstp|ftst|fucom|fucomp|fucompp|wait|fwait|fxam|fxch|fxrstor|fxrstor64|fxsave|fxsave64|fxtract|fyl2x|fyl2xp1|gf2p8affineinvqb|vgfp8affineinvqb|gf2p8affineqb|vgfp8affineqb|gf2p8mulb|vgf2p8mulb|haddpd|vhaddpd|haddps|hlt|hreset|hsubpd|vhsubpd|hsubps|vhsubps|idiv|imul|in|inc|incsspd|incsspq|ins|insb|insw|insd|insertps|int|into|int3|int1|invd|invlpg|invpcid|iret|iretd|iretq|jmp|ja|jae|jb|jbe|jc|jcxz|jecxz|jrcxz|je|jg|jge|jl|jle|jna|jnae|jnb|jnbe|jnc|jne|jng|jnge|jnl|jnle|jno|jnp|jns|jnz|jo|jp|jpe|jpo|js|jz|kaddw|kaddb|kaddq|kaddd|kandw|kandb|kandq|kandd|kandnw|kandnb|kandnq|kandnd|kmovw|kmovb|kmovq|kmovd|knotw|knotb|knotq|knotd|korw|korb|korq|kord|kortestw|kortestb|kortestq|kortestd|kshiftlw|kshiftlb|kshiftlq|kshiftld|kshiftrw|kshiftrb|kshiftrq|kshiftrd|ktestw|ktestb|ktestq|ktestd|kunpckbw|kunpckwd|kunpckdq|kxnorw|kxnorb|kxnorq|kxnord|kxorw|kxorb|kxorq|kxord|lahf|lar|lddqu|vlddqu|ldmxcsr|vldmxcsr|lds|les|lfs|lgs|lss|ldtilecfg|lea|leave|lfence|lgdt|lidt|lldt|lmsw|loadiwkey|lock|lods|lodsb|lodsw|lodsd|lodsq|loop|loope|loopne|lsl|ltr|lzcnt|maskmovdqu|maskmovq|maxpd|maxps|maxsd|vmaxsd|maxss|vmaxss|mfence|minpd|minps|minsd|minss|monitor|mov|movapd|movaps|movbe|movd|movq|movddup|movdir64b|movdiri|movdq2q|movdqa|vmovdqa32|vmovdqa64|movdqu|vmovdqu8|vmovdqu16|vmovdqu32|vmovdqu64|movhlps|movhpd|movhps|movlhps|movlpd|movlps|movmskpd|movmskps|movntdq|movntdqa|vmovntdqa|movnti|movntpd|movntps|vmovntps|movntq|vmovq|movq2dq|movs|movsb|movsw|movsd|movsq|movshdup|movsldup|vmovsldup|movss|vmovss|movsx|movsxd|movupd|vmovupd|movups|vmovups|movzx|mpsadbw|mul|mulpd|mulps|mulsd|mulss|mulx|mwait|neg|nop|not|or|orpd|vorpd|orps|vorps|out|outs|outsb|outsw|outsd|pabsb|pabsw|pabsd|pabsq|vpabsb|vpabsw|vpabsd|vpabsq|packsswb|packssdw|packusdw|packuswb|paddb|paddw|paddd|paddq|vpaddb|vpaddw|vpaddd|vpaddq|paddsb|paddsw|paddusb|paddusw|palignr|pand|vpand|vpandd|vpandq|pandn|vpandn|vpandnd|vpandnq|pause|pavgb|pavgw|vpavgb|vpavgw|pblendvb|vpblendvb|pblendw|vpblendw|pclmulqdq|vpclmulqdq|pcmpeqb|pcmpeqw|pcmpeqd|pcmpeqq|vpcmpeqq|pcmpestri|pcmpestrm|pcmpgtb|pcmpgtw|pcmpgtd|vpcmpgtb|vpcmpgtw|vpcmpgtd|pcmpgtq|vpcmpgtq|pcmpistri|pcmpistrm|pconfig|pdep|pext|pextrb|pextrd|pextrq|pextrw|phaddw|phaddd|vphaddw|vphaddd|phaddsw|phminposuw|vphminposuw|phsubw|phsubd|phsubsw|pinsrb|pinsrd|pinsrq|pinsrw|pmaddubsw|vpmaddubsw|pmaddwd|pmaxsb|pmaxsw|pmaxsd|pmaxsq|pmaxub|pmaxuw|vpmaxub|vpmaxuw|pmaxud|vpmaxud|vpmaxuq|pminsb|pminsw|vpminsb|vpminsw|pminsd|pminsq|pminub|pminuw|vpminub|vpminuw|pminud|vpminud|vpminuq|pmovmskb|pmovsxbw|pmovsxbd|pmovsxbq|pmovsxwd|pmovsxwq|pmovsxdq|vpmovsxbw|vpmovsxbd|vpmovsxbq|vpmovsxwd|vpmovsxwq|vpmovsxdq|pmovzxbw|pmovzxbd|pmovzxbq|pmovzxwd|pmovzxwq|pmovzxdq|pmuldq|pmulhrsw|pmulhuw|pmulhw|pmulld|pmullq|pmullw|pmuludq|pop|popa|popad|popcnt|popf|popfd|popfq|por|vpor|vpord|vporq|prefetchw|prefetcht0|prefetcht1|prefetcht2|prefetchnta|psadbw|pshufb|vpshufb|pshufd|pshufhw|vpshufhw|pshuflw|vpshuflw|pshufw|psignb|psignw|psignd|psllw|pslld|psllq|vpsllw|vpslld|vpsllq|pslldq|psraw|psrad|vpsraw|vpsrad|vpsraq|psrlw|psrld|psrlq|psrldq|psubb|psubw|psubd|vpsubb|vpsubw|vpsubd|psubq|vpsubq|psubsb|psubsw|vpsubsb|vpsubsw|psubusb|psubusw|ptest|vptest|ptwrite|punpckhbw|punpckhwd|punpckhdq|punpckhqdq|punpcklbw|punpcklwd|punpckldq|punpcklqdq|push|pusha|pushad|pushf|pushfd|pushfq|pxor|vpxor|vpxord|vpxorq|rcl|rcr|rol|ror|rcpps|rcpss|rdfsbase|rdgsbase|rdmsr|rdpid|rdpkru|rdpmc|rdrand|rdseed|rdsspd|rdsspq|rdtsc|rdtscp|rep|repe/repz|repne/repnz|ret|rorx|roundpd|roundps|roundsd|roundss|rsm|rsqrtps|rsqrtss|rstorssp|sahf|sal|sar|shl|shr|sarx|shlx|shrx|saveprevssp|sbb|scas|scasb|scasw|scasd|scasq|senduipi|serialize|setssbsy|sfence|sgdt|sha1msg1|sha1msg2|sha1nexte|sha1rnds4|sha256msg1|sha256msg2|sha256rnds2|shld|shrd|shufpd|vshufpd|shufps|vshufps|sidt|sldt|smsw|sqrtpd|sqrtps|vsqrtps|sqrtsd|sqrtss|stac|stc|std|sti|stmxcsr|vstmxcsr|stos|stosb|stosw|stosd|stosq|str|sttilecfg|stui|sub|subpd|subps|subsd|subss|swapgs|syscall|sysenter|sysexit|sysret|tdpbf16ps|tdpbssd|tdpbsud|tdpbusd|tdpbuud|test|testui|tileloadd|tileloaddt1|tilerelease|tilestored|tilezero|tpause|tzcnt|ucomisd|ucomiss|ud0|ud1|ud2|uiret|umonitor|umwait|unpckhpd|unpckhps|vunpckhps|unpcklpd|vunpcklpd|unpcklps|vaddph|vaddsh|valignd|valignq|vblendmpd|vblendmps|vbroadcastss|vbroadcastsd|vbroadcastf128|vbroadcastf32x2|vbroadcastf32x4|vbroadcastf64x2|vbroadcastf32x8|vbroadcastf64x4|vcmpph|vcmpsh|vcomish|vcompresspd|vcompressps|vpcompressb|vpcompressw|vcvtdq2ph|vcvtne2ps2bf16|vcvtneps2bf16|vcvtpd2ph|vcvtpd2qq|vcvtpd2udq|vcvtpd2uqq|vcvtph2dq|vcvtph2pd|vcvtph2ps|vcvtph2psx|vcvtph2qq|vcvtph2udq|vcvtph2uqq|vcvtph2uw|vcvtph2w|vcvtps2ph|vcvtps2phx|vcvtps2qq|vcvtps2udq|vcvtps2uqq|vcvtqq2pd|vcvtqq2ph|vcvtqq2ps|vcvtsd2sh|vcvtsd2usi|vcvtsh2sd|vcvtsh2si|vcvtsh2ss|vcvtsh2usi|vcvtsi2sh|vcvtss2sh|vcvtss2usi|vcvttpd2qq|vcvttpd2udq|vcvttpd2uqq|vcvttph2dq|vcvttph2qq|vcvttph2udq|vcvttph2uqq|vcvttph2uw|vcvttph2w|vcvttps2qq|vcvttps2udq|vcvttps2uqq|vcvttsd2usi|vcvttsh2si|vcvttsh2usi|vcvttss2usi|vcvtudq2pd|vcvtudq2ph|vcvtudq2ps|vcvtuqq2pd|vcvtuqq2ph|vcvtuqq2ps|vcvtusi2sd|vcvtusi2sh|vcvtusi2ss|vcvtuw2ph|vcvtw2ph|vdbpsadbw|vdivph|vdivsh|vdpbf16ps|verr|verw|vexpandpd|vexpandps|vextractf128|vextractf32x4|vextractf64x2|vextractf32x8|vextractf64x4|vextracti128|vextracti32x4|vextracti64x2|vextracti32x8|vextracti64x4|vfcmaddcph|vfmaddcph|vfcmaddcsh|vfmaddcsh|vfcmulcph|vfmulcph|vfcmulcsh|vfmulcsh|vfixupimmpd|vfixupimmps|vfixupimmsd|vfixupimmss|vfmadd132pd|vfmadd213pd|vfmadd231pd|vfmadd132ph|vfnmadd132ph|vfmadd213ph|vfnmadd213ph|vfmadd231ph|vfnmadd231ph|vfmadd132ps|vfmadd213ps|vfmadd231ps|vfmadd132sd|vfmadd213sd|vfmadd231sd|vfmadd132sh|vfnmadd132sh|vfmadd213sh|vfnmadd213sh|vfmadd231sh|vfnmadd231sh|vfmadd132ss|vfmadd213ss|vfmadd231ss|vfmaddrnd231pd|vfmaddsub132pd|vfmaddsub213pd|vfmaddsub231pd|vfmaddsub132ph|vfmaddsub213ph|vfmaddsub231ph|vfmaddsub132ps|vfmaddsub213ps|vfmaddsub231ps|vfmsub132pd|vfmsub213pd|vfmsub231pd|vfmsub132ph|vfnmsub132ph|vfmsub213ph|vfnmsub213ph|vfmsub231ph|vfnmsub231ph|vfmsub132ps|vfmsub213ps|vfmsub231ps|vfmsub132sd|vfmsub213sd|vfmsub231sd|vfmsub132sh|vfnmsub132sh|vfmsub213sh|vfnmsub213sh|vfmsub231sh|vfnmsub231sh|vfmsub132ss|vfmsub213ss|vfmsub231ss|vfmsubadd132pd|vfmsubadd213pd|vfmsubadd231pd|vfmsubadd132ph|vfmsubadd213ph|vfmsubadd231ph|vfmsubadd132ps|vfmsubadd213ps|vfmsubadd231ps|vfnmadd132pd|vfnmadd213pd|vfnmadd231pd|vfnmadd132ps|vfnmadd213ps|vfnmadd231ps|vfnmadd132sd|vfnmadd213sd|vfnmadd231sd|vfnmadd132ss|vfnmadd213ss|vfnmadd231ss|vfnmsub132pd|vfnmsub213pd|vfnmsub231pd|vfnmsub132ps|vfnmsub213ps|vfnmsub231ps|vfnmsub132sd|vfnmsub213sd|vfnmsub231sd|vfnmsub132ss|vfnmsub213ss|vfnmsub231ss|vfpclasspd|vfpclassph|vfpclassps|vfpclasssd|vfpclasssh|vfpclassss|vgatherdpd|vgatherqpd|vgatherdps|vgatherqps|vgetexppd|vgetexpph|vgetexpps|vgetexpsd|vgetexpsh|vgetexpss|vgetmantpd|vgetmantph|vgetmantps|vgetmantsd|vgetmantsh|vgetmantss|vinsertf128|vinsertf32x4|vinsertf64x2|vinsertf32x8|vinsertf64x4|vinserti128|vinserti32x4|vinserti64x2|vinserti32x8|vinserti64x4|vmaskmovps|vmaskmovpd|vmaxph|vmaxsh|vminph|vminsh|vmovsh|vmovw|vmulph|vmulsh|vp2intersectd|vp2intersectq|vpblendd|vpblendmb|vpblendmw|vpblendmd|vpblendmq|vpbroadcastb|vpbroadcastw|vpbroadcastd|vpbroadcastq|vbroadcasti32x2|vbroadcasti128|vbroadcasti32x4|vbroadcasti64x2|vbroadcasti32x8|vbroadcasti64x4|vpbroadcastmb2q|vpbroadcastmw2d|vpcmpb|vpcmpub|vpcmpd|vpcmpud|vpcmpq|vpcmpuq|vpcmpw|vpcmpuw|vpcompressd|vpcompressq|vpconflictd|vpconflictq|vpdpbusd|vpdpbusds|vpdpwssd|vpdpwssds|vperm2f128|vperm2i128|vpermb|vpermd|vpermw|vpermi2b|vpermi2w|vpermi2d|vpermi2q|vpermi2ps|vpermi2pd|vpermilpd|vpermilps|vpermpd|vpermps|vpermq|vpermt2b|vpermt2w|vpermt2d|vpermt2q|vpermt2ps|vpermt2pd|vpexpandb|vpexpandw|vpexpandd|vpexpandq|vpgatherdd|vpgatherqd|vpgatherdq|vpgatherqq|vplzcntd|vplzcntq|vpmadd52huq|vpmadd52luq|vpmaskmovd|vpmaskmovq|vpmovb2m|vpmovw2m|vpmovd2m|vpmovq2m|vpmovdb|vpmovsdb|vpmovusdb|vpmovdw|vpmovsdw|vpmovusdw|vpmovm2b|vpmovm2w|vpmovm2d|vpmovm2q|vpmovqb|vpmovsqb|vpmovusqb|vpmovqd|vpmovsqd|vpmovusqd|vpmovqw|vpmovsqw|vpmovusqw|vpmovwb|vpmovswb|vpmovuswb|vpmultishiftqb|vpopcntb|vpopcntw|vpopcntd|vpopcntq|vprold|vprolvd|vprolq|vprolvq|vprord|vprorvd|vprorq|vprorvq|vpscatterdd|vpscatterdq|vpscatterqd|vpscatterqq|vpshldw|vpshldd|vpshldq|vpshldvw|vpshldvd|vpshldvq|vpshrdw|vpshrdd|vpshrdq|vpshrdvw|vpshrdvd|vpshrdvq|vpshufbitqmb|vpsllvw|vpsllvd|vpsllvq|vpsravw|vpsravd|vpsravq|vpsrlvw|vpsrlvd|vpsrlvq|vpternlogd|vpternlogq|vptestmb|vptestmw|vptestmd|vptestmq|vptestnmb|vptestnmw|vptestnmd|vptestnmq|vrangepd|vrangeps|vrangesd|vrangess|vrcp14pd|vrcp14ps|vrcp14sd|vrcp14ss|vrcpph|vrcpsh|vreducepd|vreduceph|vreduceps|vreducesd|vreducesh|vreducess|vrndscalepd|vrndscaleph|vrndscaleps|vrndscalesd|vrndscalesh|vrndscaless|vrsqrt14pd|vrsqrt14ps|vrsqrt14sd|vrsqrt14ss|vrsqrtph|vrsqrtsh|vscalefpd|vscalefph|vscalefps|vscalefsd|vscalefsh|vscalefss|vscatterdps|vscatterdpd|vscatterqps|vscatterqpd|vshuff32x4|vshuff64x2|vshufi32x4|vshufi64x2|vsqrtph|vsqrtsh|vsubph|vsubsh|vtestps|vtestpd|vucomish|vzeroall|vzeroupper|wbinvd|wbnoinvd|wrfsbase|wrgsbase|wrmsr|wrpkru|wrssd|wrssq|wrussd|wrussq|xabort|xacquire|xrelease|xadd|xbegin|xchg|xend|xgetbv|xlat|xlatb|xor|xorpd|xorps|xresldtrk|xrstor|xrstors|xrstors64|xsave|xsavec|xsaveopt|xsaves|xsetbv|xsusldtrk|xtest|encls|eadd|eaug|eblock|ecreate|edbgrd|edbgwr|eextend|einit|eldb|eldu|eldbc|elduc|emodpr|emodt|epa|erdinfo|eremove|etrackc|etrack|ewb|enclu|eacceptcopy|eaccept|edeccssa|eenter|eexit|egetkey|emodpe|ereport|eresume|enclv|edecvirtchild|eincvirtchild|esetcontext|getsec[capabilities]|getsec[enteraccs]|getsec[exitac]|getsec[parameters]|getsec[senter]|getsec[sexit]|getsec[smctrl]|getsec[wakeup]|invept|invvpid|vmcall|vmclear|vmfunc|vmlaunch|vmresume|vmptrld|vmptrst|vmread|vmwrite|vmxoff|vmxon|prefetchwt1|v4fmaddps|v4fnmaddps|v4fmaddss|v4fnmaddss|vexp2pd|vexp2ps|vgatherpf0dps|vgatherpf0qps|vgatherpf0dpd|vgatherpf0qpd|vgatherpf1dps|vgatherpf1qps|vgatherpf1dpd|vgatherpf1qpd|vp4dpwssd|vp4dpwssds|vrcp28pd|vrcp28ps|vrcp28sd|vrcp28ss|vrsqrt28pd|vrsqrt28ps|vrsqrt28sd|vrsqrt28ss|vscatterpf0dps|vscatterpf0qps|vscatterpf0dpd|vscatterpf0qpd|vscatterpf1dps|vscatterpf1qps|vscatterpf1dpd|vscatterpf1qpd)\\b',
      name: 'keyword.control.assembly'
    },
    {
      match:
        '\\b(?i)(RBP|EBP|BP|CS|DS|ES|FS|GS|SS|RAX|EAX|RBX|EBX|RCX|ECX|RDX|EDX|RIP|EIP|IP|RSP|ESP|SP|RSI|ESI|SI|RDI|EDI|DI|RFLAGS|EFLAGS|FLAGS|R(8|9|10|11|12|13|14|15)(d|w|b)?|(Z|Y|X)MM([0-9]|10|11|12|13|14|15)|(A|B|C|D)(X|H|L)|CR[0-4]|DR[0-7]|TR6|TR7|EFER)\\b',
      name: 'variable.parameter.register.assembly'
    },
    {match: '\\b[0-9]+\\b', name: 'constant.character.decimal.assembly'},
    {
      match: '\\b(0x)(?i)[A-F0-9]+\\b',
      name: 'constant.character.hexadecimal.assembly'
    },
    {
      match: '\\b(?i)[A-F0-9]+h\\b',
      name: 'constant.character.hexadecimal.assembly'
    },
    {match: '\\b(?i)(0|1)+b\\b', name: 'constant.character.binary.assembly'},
    {match: '("|\').*?("|\')', name: 'string.assembly'},
    {begin: '^\\[', end: '\\]', name: 'support.function.directive.assembly'},
    {
      captures: {2: {name: 'entity.name.function.assembly'}},
      match: '(^struc) ([_a-zA-Z][_a-zA-Z0-9]*)',
      name: 'support.function.directive.assembly'
    },
    {match: '^endstruc', name: 'support.function.directive.assembly'},
    {
      captures: {
        1: {name: 'entity.name.function.assembly'},
        2: {name: 'constant.character.assembly'}
      },
      match: '^%macro ([_a-zA-Z][_a-zA-Z0-9]*) ([0-9]+)',
      name: 'support.function.directive.assembly'
    },
    {match: '^%endmacro', name: 'support.function.directive.assembly'},
    {begin: '^%comment', end: '^%endcomment', name: 'comment.assembly'},
    {
      captures: {
        1: {name: 'support.function.directive.assembly'},
        13: {name: 'entity.name.function.assembly'}
      },
      match:
        '\\s*(?i)(%define|%ifndef|%xdefine|%idefine|%undef|%assign|%defstr|%strcat|%strlen|%substr|%00|%0|%rotate|%rep|%endrep|%include|\\$\\$|\\$|%unmacro|%if|%elif|%else|%endif|%(el)?ifdef|%(el)?ifmacro|%(el)?ifctx|%(el)?ifidn|%(el)?ifidni|%(el)?ifid|%(el)?ifnum|%(el)?ifstr|%(el)?iftoken|%(el)?ifempty|%(el)?ifenv|%pathsearch|%depend|%use|%push|%pop|%repl|%arg|%stacksize|%local|%error|%warning|%fatal|%line|%!|%comment|%endcomment|__NASM_VERSION_ID__|__NASM_VER__|__FILE__|__LINE__|__BITS__|__OUTPUT_FORMAT__|__DATE__|__TIME__|__DATE_NUM__|_TIME__NUM__|__UTC_DATE__|__UTC_TIME__|__UTC_DATE_NUM__|__UTC_TIME_NUM__|__POSIX_TIME__|__PASS__|ISTRUC|AT|IEND|BITS 16|BITS 32|BITS 64|USE16|USE32|__SECT__|ABSOLUTE|EXTERN|GLOBAL|COMMON|CPU|FLOAT)\\b ?([_a-zA-Z][_a-zA-Z0-9]*)?'
    },
    {
      match:
        '\\b(?i)(d(b|w|d|q|t|o|y)|res(b|w|d|q|t|o)|equ|times|align|alignb|sectalign|section|ptr|byte|word|dword|qword|incbin|)\\b',
      name: 'support.function.directive.assembly'
    },
    {match: '(\\s)*;.*$', name: 'comment.assembly'},
    {match: '(,|\\[|\\]|\\+|\\-|\\*)', name: 'source.assembly'},
    {match: '^\\s*%%(.-[;])+?:$', name: 'entity.name.function.assembly'},
    {match: '^\\s*%\\$(.-[;])+?:$', name: 'entity.name.function.assembly'},
    {match: '^\\.?(.-[;])+?:$', name: 'entity.name.function.assembly'},
    {match: '^\\.?(.-[;])+?\\b', name: 'entity.name.function.assembly'},
    {match: '.+?', name: 'entity.name.function.assembly'}
  ],
  scopeName: 'source.assembly'
}

export default grammar
