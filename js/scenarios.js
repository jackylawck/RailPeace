/**
 * 香港專業調解專家審定：高壓車廂雙贏微調解心法庫
 * 原則：
 * 1. 保留「唔好意思」禮貌卸力，主句嚴格壓於 15 字內
 * 2. 明確區分 primaryScript（首選）與 fallbackScript（二次嘗試）
 * 3. 納入 hostile 最高優先級與實質 abortConditions
 */
export const SCENARIOS = Object.freeze({
  "zh-HK": [
    {
      id: "hostile",
      priority: 0,
      riskLevel: "HIGH",
      defaultAction: "SILENT",
      tag: "對方有攻擊性／挑釁？",
      primaryScript: null, // 專業紅線：嚴禁開口
      fallbackScript: null,
      silentOption: "🤐 移開視線 · 安靜退後一步 · 側身避開對峙",
      maxAttempts: 0,
      exitRule: "切勿眼神挑釁或反駁。若受實質威脅，移步鄰卡或按緊急通話器求助。",
      abortConditions: [
        "對方明顯醉酒或精神狀態不穩",
        "對方帶有粗言恐嚇或攻擊性肢體動作",
        "自己處於明顯人數或權力弱勢"
      ]
    },
    {
      id: "alight",
      priority: 1,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "想落車借過？",
      primaryScript: "「唔好意思借借，我落車，唔該。」",
      fallbackScript: "「唔好意思，麻煩借借落車，唔該晒。」",
      silentOption: "🤐 眼神接觸 + 微笑點頭 + 側身順流移動",
      maxAttempts: 2,
      exitRule: "兩次無反應代表戴耳機或無法移動，安靜退後尋找其他車門縫隙。",
      abortConditions: ["對方明顯醉酒或情緒失控", "車門已響起關門警號"]
    },
    {
      id: "door-jam",
      priority: 2,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "想上車但門口塞住（入面有位）？",
      primaryScript: "「唔好意思，中間有位，入一入唔該晒。」",
      fallbackScript: "「唔好意思借借，等我入中間位，唔該。」",
      silentOption: "🤐 手指指向內部走廊 + 順向側身帶頭移入",
      maxAttempts: 2,
      exitRule: "關門提示響起且人群完全不動時，切勿硬推，退後等下一班車免被夾傷。",
      abortConditions: ["車廂內部已完全擠死無任何空間"]
    },
    {
      id: "board",
      priority: 3,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "已上車想入走廊？",
      primaryScript: "「唔好意思借借，我入中間，唔該。」",
      fallbackScript: "「借借，等我入面企騰番個位，唔該。」",
      silentOption: "🤐 眼神示意內部走廊空位 + 順向微移",
      maxAttempts: 2,
      exitRule: "門口若完全擠死，切勿強推，等候下一班車確保人身安全。",
      abortConditions: ["走廊已完全站滿無法再移入"]
    },
    {
      id: "bump",
      priority: 4,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "急煞失平衡／踩腳？",
      primaryScript: "「唔好意思！架車煞得急，你冇事嘛？」",
      fallbackScript: "「唔好意思，啱啱架車太晃，撞到你。」",
      silentOption: "🤐 扶穩扶手 + 雙手收胸前點頭示好致歉",
      maxAttempts: 2,
      exitRule: "責任歸咎於車速晃動。若對方仍投以怒視，即刻移開視線退後半步。",
      abortConditions: ["對方已有推撞或攻擊動作"]
    },
    {
      id: "space",
      priority: 5,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "被背囊頂／無扶手？",
      primaryScript: "「唔好意思，借個位扶扶，唔該。」",
      fallbackScript: "「唔好意思，架車太晃，一齊扶扶？唔該。」",
      silentOption: "🤐 自行轉為前揹抱胸示範 + 尋找上方吊環",
      maxAttempts: 1,
      exitRule: "只可請求一次。對方若無視，切勿用背部反頂，側身換其他受力支撐點。",
      abortConditions: ["對方體型懸殊且態度強硬"]
    },
    {
      id: "rush",
      priority: 6,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "未等落車搶先湧入？",
      primaryScript: "「唔好意思，等出完先入，大家都快。」",
      fallbackScript: "「借借，等我落咗先，唔該晒。」",
      silentOption: "🤐 單手微置腹前做低位防護 + 果斷邁步直出",
      maxAttempts: 1,
      exitRule: "陳述物理秩序事實。若對方盲目硬衝，側身讓行以保自身骨骼安全。",
      abortConditions: ["月台發生推擠踩踏風險"]
    },
    {
      id: "noise",
      priority: 7,
      riskLevel: "HIGH",
      defaultAction: "SILENT",
      tag: "開喇叭睇片／講電話太大聲？",
      primaryScript: "「唔好意思，可否細聲少少？唔該。」",
      fallbackScript: null, // 高風險情境絕不提供第二句糾纏話術
      silentOption: "🤐 戴上降噪耳機或於下一站移步至鄰近車卡",
      maxAttempts: 1,
      exitRule: "嚴格只准講一次。對方若反駁或無視，立即閉口走開，絕不在車廂對罵。",
      abortConditions: ["對方神態挑釁或結伴成群", "對方明顯醉酒或情緒不穩"]
    }
  ],
  "en": [
    {
      id: "hostile",
      priority: 0,
      riskLevel: "HIGH",
      defaultAction: "SILENT",
      tag: "Hostile or Aggressive Person?",
      primaryScript: null,
      fallbackScript: null,
      silentOption: "🤐 Break eye contact · Step back calmly · Avoid confrontation",
      maxAttempts: 0,
      exitRule: "Never argue or stare. Move to adjacent car or use emergency intercom if threatened.",
      abortConditions: [
        "Person appears intoxicated or unstable",
        "Verbal threats or physical posturing",
        "You are outnumbered or physically vulnerable"
      ]
    },
    {
      id: "alight",
      priority: 1,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "Need to Alight?",
      primaryScript: "\"Excuse me, getting off here, thank you.\"",
      fallbackScript: "\"Pardon me, stepping out at this stop, thanks.\"",
      silentOption: "🤐 Eye contact + nod + turn shoulders sideways",
      maxAttempts: 2,
      exitRule: "If no response after 2 tries, person has headphones. Slide through gently.",
      abortConditions: ["Active physical altercation in doorway"]
    },
    {
      id: "door-jam",
      priority: 2,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "Door Blocked but Aisle Empty?",
      primaryScript: "\"Excuse me, space inside, moving in thanks.\"",
      fallbackScript: "\"Pardon me, heading inside to free up door, thanks.\"",
      silentOption: "🤐 Gesture to open aisle + calmly lead way inward",
      maxAttempts: 2,
      exitRule: "If door chimes ring and crowd is frozen, step back to avoid door traps.",
      abortConditions: ["Train carriage completely jammed with zero standing room"]
    },
    {
      id: "board",
      priority: 3,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "Boarding into Aisle?",
      primaryScript: "\"Excuse me, moving to the center, thanks.\"",
      fallbackScript: "\"Pardon me, heading inside to free up space, thanks.\"",
      silentOption: "🤐 Look toward aisle openings + step steadily inward",
      maxAttempts: 2,
      exitRule: "If packed solid, wait for the next train rather than pushing.",
      abortConditions: ["Aisle completely blocked"]
    },
    {
      id: "bump",
      priority: 4,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "Sudden Brake / Stepped On?",
      primaryScript: "\"Sorry! Train braked hard, you okay?\"",
      fallbackScript: "\"Apologies, train rocked hard and bumped you.\"",
      silentOption: "🤐 Hold rail firmly + hands close with apologetic nod",
      maxAttempts: 2,
      exitRule: "Blame train motion. If met with a glare, look away and step back.",
      abortConditions: ["Person has already reacted aggressively"]
    },
    {
      id: "space",
      priority: 5,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "Crowded by Backpack / No Grip?",
      primaryScript: "\"Excuse me, could I hold on here? Thanks.\"",
      fallbackScript: "\"Pardon me, train's bumpy, mind sharing pole? Thanks.\"",
      silentOption: "🤐 Front-pack your bag as visual cue + reach for overhead straps",
      maxAttempts: 1,
      exitRule: "Strictly max 1 request. Never push back. Reposition your footing safely.",
      abortConditions: ["Significant physical size disparity or overt hostility"]
    },
    {
      id: "rush",
      priority: 6,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "Boarding Before Passengers Alight?",
      primaryScript: "\"Excuse me, let passengers out first, thanks.\"",
      fallbackScript: "\"Out first, then in—faster for all of us.\"",
      silentOption: "🤐 Low defensive arm posture + purposeful, calm exit stride",
      maxAttempts: 1,
      exitRule: "State physical rule of order. Yield sideways if they charge aggressively.",
      abortConditions: ["Crush conditions on platform"]
    },
    {
      id: "noise",
      priority: 7,
      riskLevel: "HIGH",
      defaultAction: "SILENT",
      tag: "Loud Speaker / Phone Call?",
      primaryScript: "\"Excuse me, could you turn it down? Thanks.\"",
      fallbackScript: null,
      silentOption: "🤐 Put on headphones or change to adjacent car at next stop",
      maxAttempts: 1,
      exitRule: "Strictly max 1 try. If challenged or ignored, walk away immediately.",
      abortConditions: ["Aggressive demeanor or traveling in group"]
    }
  ]
});
