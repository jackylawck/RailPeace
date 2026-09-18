/**
 * 地鐵通勤雙贏溝通與微調解心法庫
 * 原則：先以「唔好意思」卸力，陳述行動創造雙贏，保全彼此體面
 */
export const SCENARIOS = Object.freeze({
  "zh-HK": [
    {
      id: "alight",
      priority: 1,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "想落車借過？",
      script: "「唔好意思借借，我落車，出咗大家都有位企。」",
      altScript: "「唔好意思，麻煩借借落車，唔該晒。」",
      silentOption: "🤐 唔出聲：先有眼神接觸 + 微微點頭笑意 + 側身順流移動",
      maxAttempts: 1,
      exitRule: "對方若戴耳機或不便移動，切勿重複催促，側身尋找其他縫隙。"
    },
    {
      id: "door-jam",
      priority: 2,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "想上車但門口塞住（入面有位）？",
      script: "「唔好意思各位，中間仲有位，麻煩移一移等後面都上到，唔該晒！」",
      altScript: "自己帶頭入：「唔好意思借借，等我行入中間位，唔該晒！」",
      silentOption: "🤐 唔出聲：伸手指向走廊空位 + 微微側身主動帶頭向內走",
      maxAttempts: 1,
      exitRule: "若門口乘客依然完全唔郁且車門即將關閉，切勿硬推，退後等下一班車免被夾傷。"
    },
    {
      id: "board",
      priority: 3,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "已上車想入走廊？",
      script: "「唔好意思借借，我行入中間，唔塞住門口。」",
      altScript: "「唔該借借，我入面企，幫手騰番個位。」",
      silentOption: "🤐 唔出聲：眼神示意內部走廊空位 + 側身順向微移",
      maxAttempts: 1,
      exitRule: "門口若完全擠死，切勿強推，等候下一班車確保人身安全。"
    },
    {
      id: "bump",
      priority: 4,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "急煞失平衡／被撞踩腳？",
      script: "「唔好意思！架車突然急煞，大家冇事嘛？」",
      altScript: "「車太晃撞到你，真係唔好意思。」",
      silentOption: "🤐 唔出聲：立刻扶穩把手 + 雙手微收胸前示好點頭致歉",
      maxAttempts: 1,
      exitRule: "將責任歸咎於車身晃動；若對方仍有怒意，移開視線退後一步化解。"
    },
    {
      id: "space",
      priority: 5,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "被背囊頂住／無處扶手？",
      script: "「唔好意思，架車太晃，可唔可以借位一齊扶？唔該。」",
      altScript: "（主動將自己背囊轉向前揹抱胸，作為無聲示範）",
      silentOption: "🤐 唔出聲：側身將背囊抱胸 + 順向尋找上方橫桿或吊環",
      maxAttempts: 1,
      exitRule: "切勿用身體硬頂反抗。若對方無視，挪動腳步尋找其他受力點。"
    },
    {
      id: "rush",
      priority: 6,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "未等落車搶先湧入？",
      script: "「唔好意思，等出完先上大家都快啲，唔該晒。」",
      altScript: "「借借，落完先上，大家唔使逼。」",
      silentOption: "🤐 唔出聲：單手微置腹前保護軀幹 + 步伐果斷順勢移出車門",
      maxAttempts: 1,
      exitRule: "訴諸大家雙贏效率。若遇急躁狂衝者，側身禮讓免生推撞受傷。"
    },
    {
      id: "noise",
      priority: 7,
      riskLevel: "HIGH",
      defaultAction: "SILENT",
      tag: "開喇叭睇片／講電話太大聲？",
      script: "「唔好意思打擾，車廂有啲逼，可否稍微較細聲少少？唔該晒你。」",
      altScript: "極高衝突風險！非必要切勿正面開口，請優先採取唔出聲自保策略。",
      silentOption: "🤐 唯一推薦：戴上耳機閉目養神，或於下一站移步至鄰近車卡",
      maxAttempts: 1,
      exitRule: "嚴格只講一次。對方若有反駁或敵意，即刻閉口走開，絕不糾纏。"
    }
  ],
  "en": [
    {
      id: "alight",
      priority: 1,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "Need to Alight?",
      script: "\"Excuse me, getting off here—more room for everyone once I'm out, thanks!\"",
      altScript: "\"Pardon me, stepping out at this stop, thank you.\"",
      silentOption: "🤐 Silent: Friendly eye contact + slight nod + turn shoulders sideways",
      maxAttempts: 1,
      exitRule: "If blocked by headphones, do not tap repeatedly. Slide through gently."
    },
    {
      id: "door-jam",
      priority: 2,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "Door Jammed but Aisle is Empty?",
      script: "\"Excuse me everyone, there's space in the center—could we move down so folks behind can board? Thanks!\"",
      altScript: "Take the lead: \"Excuse me, let me slide through to the center aisle, thanks!\"",
      silentOption: "🤐 Silent: Point calmly toward open aisle + gently lead the way inward",
      maxAttempts: 1,
      exitRule: "If doorway passengers refuse to budge and chime rings, step back safely."
    },
    {
      id: "board",
      priority: 3,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "Boarding into Aisle?",
      script: "\"Excuse me, moving through to the aisle so we don't block the door.\"",
      altScript: "\"Pardon me, heading inside to free up door space, thanks.\"",
      silentOption: "🤐 Silent: Look toward aisle openings + step steadily and gently inward",
      maxAttempts: 1,
      exitRule: "If packed solid, wait for the next train rather than pushing."
    },
    {
      id: "bump",
      priority: 4,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "Train Braking / Stepped On?",
      script: "\"Sorry! The train lurched suddenly—is everyone okay?\"",
      altScript: "\"Apologies, the rocking threw me off balance. You alright?\"",
      silentOption: "🤐 Silent: Grip rail firmly + place hands close to chest with apologetic nod",
      maxAttempts: 1,
      exitRule: "Blame the motion of the train. If met with a glare, look away calmly."
    },
    {
      id: "space",
      priority: 5,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "Crowded by Backpack / No Grip?",
      script: "\"Excuse me, train's bumpy—mind if we share the pole for safety? Thanks.\"",
      altScript: "(Wear your own backpack to the front as a polite visual cue)",
      silentOption: "🤐 Silent: Hug your bag to chest + reach safely for overhead straps",
      maxAttempts: 1,
      exitRule: "Never lean back aggressively. Reposition your footing safely."
    },
    {
      id: "rush",
      priority: 6,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "Passengers Rushing Before Exit?",
      script: "\"Excuse me, letting passengers out first gets everyone in faster, thanks!\"",
      altScript: "\"Pardon me, out first then in—easier for all of us.\"",
      silentOption: "🤐 Silent: Low protective arm posture + purposeful, calm exit stride",
      maxAttempts: 1,
      exitRule: "Frame as mutual efficiency. Step aside if someone charges blindly."
    },
    {
      id: "noise",
      priority: 7,
      riskLevel: "HIGH",
      defaultAction: "SILENT",
      tag: "Loud Speaker / Phone Call?",
      script: "\"Pardon me, it's quite packed in here—would you mind lowering the volume a bit? Thank you.\"",
      altScript: "High conflict risk! Strongly recommend silent self-protection over confrontation.",
      silentOption: "🤐 Recommended: Put on headphones or change to adjacent carriage at next stop",
      maxAttempts: 1,
      exitRule: "Strictly max 1 try. If ignored or challenged, disengage immediately and walk away."
    }
  ]
});
