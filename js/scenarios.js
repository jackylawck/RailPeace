/**
 * 專業調解員審定：地鐵通勤微情境與風險管理資料庫
 * priority 1-3: 核心首頁展示 (LOW RISK / 口語話術優先)
 * priority 4-6: 折疊擴展展示 (MEDIUM - HIGH RISK / 默認非語言或退避)
 */
export const SCENARIOS = Object.freeze({
  "zh-HK": [
    {
      id: "alight",
      priority: 1,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "想落車借過？",
      script: "「借借，我落車先，唔該。」",
      altScript: "「唔好意思，我落車，借借。」",
      silentOption: "🤐 唔出聲：眼神接觸 + 微微點頭 + 側身順流移動",
      maxAttempts: 1,
      exitRule: "對方戴耳機無反應時切勿催促，安靜退半步尋其他車門縫隙。"
    },
    {
      id: "board",
      priority: 2,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "想上車入走廊？",
      script: "「借借，我入中間，唔該。」",
      altScript: "「唔該借借，我入面，唔該晒。」",
      silentOption: "🤐 唔出聲：視線望向車廂內部空隙 + 側身順向微移",
      maxAttempts: 1,
      exitRule: "門口若完全卡死，切勿強推，等候下一班車或換車門。"
    },
    {
      id: "bump",
      priority: 3,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "急煞失平衡／被撞踩腳？",
      script: "「架車煞得好急，你冇事嘛？」",
      altScript: "自己撞人：「唔好意思，架車太晃，撞到你。」",
      silentOption: "🤐 唔出聲：立刻扶穩把手 + 雙手微收胸前點頭致意",
      maxAttempts: 1,
      exitRule: "外部歸因：將責任歸於車身晃動，若對方怒目則移開視線退後。"
    },
    {
      id: "space",
      priority: 4,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "被背囊頂住／無處扶手？",
      script: "「借借，我想扶一扶，唔該。」",
      altScript: "「唔好意思，借個位扶住，唔該。」",
      silentOption: "🤐 首選動作：將自己背囊轉向前揹抱胸示範 + 側身尋找吊環",
      maxAttempts: 1,
      exitRule: "切勿用身體反頂。若對方不理，退後一步抓其他支撐點。"
    },
    {
      id: "rush",
      priority: 5,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "未等落車搶先湧入？",
      script: "「借借，我落車先，唔該。」",
      altScript: "「唔該，等我落咗先。」",
      silentOption: "🤐 首選動作：單手微置腹前做低位阻擋姿態 + 步伐果斷直出",
      maxAttempts: 1,
      exitRule: "單純陳述物理順序，不指責人。若遇硬衝直接側身讓行免受傷。"
    },
    {
      id: "noise",
      priority: 6,
      riskLevel: "HIGH",
      defaultAction: "SILENT",
      tag: "開喇叭睇片／講電話太大聲？",
      script: "「唔好意思，可唔可以細聲少少？唔該。」",
      altScript: "極高風險！若無十足把握請勿開口，直接選擇唔出聲。",
      silentOption: "🤐 唯一推薦：戴上降噪耳機、閉目養神，或於下一站移步至鄰卡",
      maxAttempts: 1,
      exitRule: "若對方無視或反駁，嚴禁說第二句，視線即刻移開並走開。"
    }
  ],
  "en": [
    {
      id: "alight",
      priority: 1,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "Need to Alight?",
      script: "\"Excuse me, getting off first, thank you.\"",
      altScript: "\"Pardon me, stepping out here.\"",
      silentOption: "🤐 Silent: Eye contact + slight nod + turn shoulders sideways",
      maxAttempts: 1,
      exitRule: "If blocked by headphones, step back quietly without repeated tapping."
    },
    {
      id: "board",
      priority: 2,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "Boarding into Aisle?",
      script: "\"Excuse me, moving to the center, thank you.\"",
      altScript: "\"Pardon me, heading inside, thanks.\"",
      silentOption: "🤐 Silent: Look toward aisle opening + step steadily inward",
      maxAttempts: 1,
      exitRule: "If doorway is fully packed, wait for next train rather than forcing."
    },
    {
      id: "bump",
      priority: 3,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "Train Braking / Stepped On?",
      script: "\"Train braked hard, you okay?\"",
      altScript: "If you bumped: \"Sorry, the train rocked hard, apologies.\"",
      silentOption: "🤐 Silent: Grip rail firmly + place hands in front with slight nod",
      maxAttempts: 1,
      exitRule: "Blame train motion. If met with hostility, disengage and look away."
    },
    {
      id: "space",
      priority: 4,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "Crowded by Backpack / No Grip?",
      script: "\"Excuse me, could I hold on here? Thanks.\"",
      altScript: "\"Pardon me, need a grip here, thank you.\"",
      silentOption: "🤐 Preferred: Wear your own bag to front + reach for alternative strap",
      maxAttempts: 1,
      exitRule: "Never push back physically. Adjust your own footing safely."
    },
    {
      id: "rush",
      priority: 5,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "Passengers Rushing In Early?",
      script: "\"Excuse me, exiting first, thank you.\"",
      altScript: "\"Please let passengers alight first, thanks.\"",
      silentOption: "🤐 Preferred: Low defensive palm gesture + decisive exit stride",
      maxAttempts: 1,
      exitRule: "State physical rule of order. Yield sideways if they charge aggressively."
    },
    {
      id: "noise",
      priority: 6,
      riskLevel: "HIGH",
      defaultAction: "SILENT",
      tag: "Loud Speaker / Phone Call?",
      script: "\"Excuse me, could you turn it down a bit? Thank you.\"",
      altScript: "High conflict risk! Unless confident, do not speak.",
      silentOption: "🤐 Recommended: Put on headphones or change to next carriage at stop",
      maxAttempts: 1,
      exitRule: "Strictly max 1 attempt. If ignored, immediately turn away and exit scene."
    }
  ]
});
