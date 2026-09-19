/**
 * 香港鐵路通勤「低摩擦」避火拆彈心法庫 (RailPeace Scenario Database)
 * 
 * 設計原則（去人稱化與共情升級）：
 * 1. 減少「你/我」，多用「大家」：消除個人對立邊界，將焦點轉化為車廂集體利益。
 * 2. 徹底客觀歸因：歸咎「好迫、車晃」，絕不指責個人。
 * 3. 肢體引導：嚴禁手指指人，統一採用「眼神引導 + 掌心微示意」。
 * 4. 絕對防線：遇挑釁/攻擊鎖定 script 為 null，落實「零開口 (SILENT) + 避開視線」。
 */
export const SCENARIOS = Object.freeze({
  "zh-HK": [
    {
      id: "door-jam",
      priority: 1,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "想上車但門口塞住（入面有位）？",
      script: "「唔好意思，中間仲有位，移入少少等後面都上到，唔該晒！」",
      silentOption: "🤐 眼神望向走廊 + 掌心向上微示意 + 側身順向帶頭移入",
      maxAttempts: 2,
      exitRule: "關門提示響起且人群完全不動時，切勿硬推，退後等下一班車免被夾傷。",
      abortConditions: ["車廂內部已完全擠死無任何空間"]
    },
    {
      id: "board",
      priority: 2,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "已上車想入走廊？",
      script: "「唔好意思借借，入中間企大家都鬆啲，唔該晒！」",
      silentOption: "🤐 視線望向車廂內部空隙 + 側身順向微移",
      maxAttempts: 2,
      exitRule: "門口若完全擠死，切勿強推，等候下一班車確保人身安全。",
      abortConditions: ["走廊已完全站滿無法再移入"]
    },
    {
      id: "bump",
      priority: 3,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "車廂人貼人時碰到／輕撞到人？",
      script: "「唔好意思！真係好迫，大家頂一頂，唔好意思。」",
      silentOption: "🤐 扶穩扶手 + 雙手收胸前點頭示好致歉",
      maxAttempts: 2,
      exitRule: "歸因於車廂擁擠晃動，給對方台階下。若對方怒視，移開視線退後半步化解。",
      abortConditions: ["對方已有推撞或攻擊動作"]
    },
    {
      id: "hostile",
      priority: 4,
      riskLevel: "HIGH",
      defaultAction: "SILENT",
      tag: "對方有攻擊性／挑釁？",
      script: null, // 安全紅線：嚴禁開口對罵
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
      priority: 5,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "想落車借過？",
      script: "「唔好意思借借落車，出咗大家都鬆啲，唔該晒！」",
      silentOption: "🤐 眼神接觸 + 微笑點頭 + 側身順流移動",
      maxAttempts: 2,
      exitRule: "兩次無反應代表戴耳機或無法移動，安靜退後尋找其他車門縫隙。",
      abortConditions: ["對方明顯醉酒或情緒失控", "車門已響起關門警號"]
    },
    {
      id: "space",
      priority: 6,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "被背囊頂／無扶手？",
      script: "「唔好意思，架車好晃，一齊就就位扶扶手，唔該晒。」",
      silentOption: "🤐 自行轉為前揹抱胸示範 + 尋找上方吊環",
      maxAttempts: 1,
      exitRule: "只可請求一次。對方若無視，切勿用背部反頂，側身換其他受力支撐點。",
      abortConditions: ["對方體型懸殊且態度強硬"]
    },
    {
      id: "rush",
      priority: 7,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "未等落車搶先湧入？",
      script: "「唔好意思，出晒先入大家仲快，唔該晒！」",
      silentOption: "🤐 單手微置腹前做低位防護 + 側身順流果斷步出",
      maxAttempts: 1,
      exitRule: "陳述物理秩序事實。若對方盲目硬衝，側身讓行以保自身骨骼安全。",
      abortConditions: ["月台發生推擠踩踏風險"]
    },
    {
      id: "noise",
      priority: 8,
      riskLevel: "HIGH",
      defaultAction: "SILENT",
      tag: "開喇叭睇片／講電話太大聲？",
      script: "「唔好意思，車廂好迫，大家細聲少少好嘛？唔該晒。」",
      silentOption: "🤐 戴上降噪耳機或於下一站移步至鄰近車卡",
      maxAttempts: 1,
      exitRule: "嚴格只准講一次。對方若反駁或無視，立即閉口走開，絕不在車廂對罵。",
      abortConditions: ["對方神態挑釁或結伴成群", "對方明顯醉酒或情緒不穩"]
    }
  ],
  "en": [
    {
      id: "door-jam",
      priority: 1,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "Door Blocked but Aisle Empty?",
      script: "\"Excuse me, space inside—moving in lets folks behind board, thanks!\"",
      silentOption: "🤐 Look toward aisle + open-palm motion + calmly lead inward",
      maxAttempts: 2,
      exitRule: "If door chimes ring and crowd is frozen, step back to avoid door traps.",
      abortConditions: ["Train carriage completely jammed with zero standing room"]
    },
    {
      id: "board",
      priority: 2,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "Boarding into Aisle?",
      script: "\"Excuse me, moving center gives everyone more room, thanks!\"",
      silentOption: "🤐 Look toward aisle openings + step steadily inward",
      maxAttempts: 2,
      exitRule: "If packed solid, wait for the next train rather than pushing.",
      abortConditions: ["Aisle completely blocked"]
    },
    {
      id: "bump",
      priority: 3,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "Packed Train Body Contact / Bumping?",
      script: "\"Sorry! Really packed in here—let's all hang in there, apologies!\"",
      silentOption: "🤐 Hold rail firmly + hands close with empathetic nod",
      maxAttempts: 2,
      exitRule: "Frame as shared spatial reality. If met with a glare, look away calmly.",
      abortConditions: ["Person has already reacted aggressively"]
    },
    {
      id: "hostile",
      priority: 4,
      riskLevel: "HIGH",
      defaultAction: "SILENT",
      tag: "Hostile or Aggressive Person?",
      script: null,
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
      priority: 5,
      riskLevel: "LOW",
      defaultAction: "SPEAK",
      tag: "Need to Alight?",
      script: "\"Excuse me, stepping out so everyone has more space, thanks!\"",
      silentOption: "🤐 Eye contact + nod + turn shoulders sideways",
      maxAttempts: 2,
      exitRule: "If no response after 2 tries, person has headphones. Slide through gently.",
      abortConditions: ["Active physical altercation in doorway"]
    },
    {
      id: "space",
      priority: 6,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "Crowded by Backpack / No Grip?",
      script: "\"Excuse me, bumpy ride—let's share the rail, thanks!\"",
      silentOption: "🤐 Front-pack your bag as visual cue + reach for overhead straps",
      maxAttempts: 1,
      exitRule: "Strictly max 1 request. Never push back. Reposition your footing safely.",
      abortConditions: ["Significant physical size disparity or overt hostility"]
    },
    {
      id: "rush",
      priority: 7,
      riskLevel: "MEDIUM",
      defaultAction: "SILENT",
      tag: "Boarding Before Passengers Alight?",
      script: "\"Excuse me, exit first then board, faster for everyone, thanks!\"",
      silentOption: "🤐 Low defensive arm posture + purposeful, calm exit stride",
      maxAttempts: 1,
      exitRule: "State physical rule of order. Yield sideways if they charge aggressively.",
      abortConditions: ["Crush conditions on platform"]
    },
    {
      id: "noise",
      priority: 8,
      riskLevel: "HIGH",
      defaultAction: "SILENT",
      tag: "Loud Speaker / Phone Call?",
      script: "\"Excuse me, train's crowded—could we keep it down a bit? Thanks.\"",
      silentOption: "🤐 Put on headphones or change to adjacent car at next stop",
      maxAttempts: 1,
      exitRule: "Strictly max 1 try. If challenged or ignored, walk away immediately.",
      abortConditions: ["Aggressive demeanor or traveling in group"]
    }
  ]
});
