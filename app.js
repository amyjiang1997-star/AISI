const products = [
  {
    name: "飞书 AI 同传",
    office: true,
    entry: "飞书 → 视频会议 → AI 同传",
    capability: "语音、字幕",
    pricing: "/",
    voicePairs: 2,
    captionPairs: 24,
    badge: "综合最佳",
    badgeClass: "green",
  },
  {
    name: "钉钉 AI 同传",
    office: true,
    entry: "钉钉 → 会议 → AI 同传 / 双语字幕",
    capability: "语音、字幕",
    pricing: "截至测试日（260420），限免中",
    voicePairs: 4,
    captionPairs: 79,
    badge: "字幕语种最多",
    badgeClass: "gold",
  },
  {
    name: "腾讯会议",
    office: true,
    entry: "腾讯会议 → 应用 → AI 同传",
    capability: "语音、字幕",
    pricing: "截至测试日（260522），应用内免费",
    voicePairs: 2,
    captionPairs: 2,
    note: "仅支持中英",
  },
  {
    name: "Teams Copilot",
    office: true,
    entry: "Teams → 开会 → 语音同传 / 显示实时字幕",
    capability: "语音、字幕",
    pricing: "语音同传：约合 14.7-23.1 元/小时",
    voicePairs: 9,
    captionPairs: 9,
    pricingImage: ["assets/docx-media/image1.jpeg", "Teams 授权与定价概览"],
  },
  {
    name: "Google Meet",
    office: true,
    entry: "Google Meet → Captions",
    capability: "字幕",
    pricing: "应用内免费",
    voicePairs: 5,
    captionPairs: 69,
    note: "语音同传目前仅支持英翻西法德意葡，不支持中文，因此语音同传不纳入本评测。",
  },
  {
    name: "讯飞同传",
    office: false,
    entry: "讯飞同传 → 同传（使用“星火同传大模型”）。实际测试时使用网页端：https://tongchuan.iflyrec.com/xinghuo.html",
    capability: "语音、字幕",
    pricing: "语音同传：40.8 元/小时、38.4 元/小时、36 元/小时、33.6 元/小时（按不同套餐）",
    voicePairs: 15,
    captionPairs: 15,
    badge: "语音语种最多",
    badgeClass: "coral",
    pricingImage: ["assets/docx-media/image2.png", "讯飞同传套餐概览"],
  },
  {
    name: "有道翻译官",
    office: false,
    entry: "有道翻译官（手机端 app） → 耳机同传 → 会议同传",
    capability: "语音、字幕",
    pricing: "AI 翻译 + 同传翻译 + 文档翻译：限免 10 分钟；0.43 元/小时（按一个月 35 元 80 小时计算）",
    voicePairs: 5,
    captionPairs: 5,
    badge: "性价比最高",
    badgeClass: "green",
    pricingImage: ["assets/docx-media/image3.png", "有道翻译官会员与同传定价"],
  },
  {
    name: "腾讯元宝",
    office: false,
    entry: "元宝 → 同传翻译",
    capability: "语音、字幕",
    pricing: "应用内免费",
    voicePairs: 2,
    captionPairs: 2,
    note: "语音同传实为交传，朗读字幕同传内容。",
  },
  {
    name: "百度 AI 同传",
    office: false,
    entry: "百度 AI 同传助手（桌面端 app）",
    capability: "字幕",
    pricing: "字幕同传：5 元/小时、13 元/小时、9.9 元/小时、8.95 元/小时（按不同套餐）",
    voicePairs: 2,
    captionPairs: 2,
    pricingImage: ["assets/docx-media/image4.png", "百度 AI 同传时长定价"],
  },
];

const scores = [
  { product: "飞书 AI 同传", caption: 5, voice: 5, toneScore: 5, tone: "⭐️⭐️⭐️⭐️⭐️", clone: true, detail: "" },
  { product: "钉钉 AI 同传", caption: 4, voice: 4, toneScore: 3, tone: "⭐️⭐️⭐️", clone: false, detail: "" },
  { product: "腾讯会议", caption: 3, voice: 3, toneScore: 3, tone: "⭐️⭐️⭐️", clone: true, detail: "音色克隆效果较好，但音色自然度和流畅度略差" },
  { product: "Teams Copilot", caption: 2, voice: 2, toneScore: 3, tone: "音色克隆：⭐️⭐️\n机器声音：⭐️⭐️⭐️", clone: true, detail: "提供音色克隆和机器声音两种选项" },
  { product: "Google Meet", caption: 2, voice: null, toneScore: null, tone: "❌", clone: false, detail: "无语音同传，不涉及" },
  { product: "讯飞同传", caption: 2, voice: 2, toneScore: 3, tone: "⭐️⭐️⭐️", clone: false, detail: "" },
  { product: "有道翻译官", caption: 3, voice: 3, toneScore: 3, tone: "⭐️⭐️⭐️", clone: true, detail: "" },
  { product: "腾讯元宝", caption: 3, voice: 3, toneScore: 3, tone: "⭐️⭐️⭐️", clone: false, detail: "" },
  { product: "百度 AI 同传", caption: 2, voice: null, toneScore: null, tone: "❌", clone: false, detail: "无语音同传，不涉及" },
];

const latency = {
  caption: [
    ["飞书 AI 同传", 2.675, "#4d7de0"],
    ["钉钉 AI 同传", 4.025, "#52c0de"],
    ["腾讯会议", 4.75, "#8b5de5"],
    ["Teams Copilot", 3.175, "#edcf57"],
    ["Google Meet", 4.05, "#e86862"],
    ["讯飞同传", 4.83, "#f2a13e"],
    ["有道翻译官", 3.475, "#7d9ce8"],
    ["腾讯元宝", 2.87, "#77cbe4"],
    ["百度 AI 同传", 4.715, "#9a78de"],
  ],
  voice: [
    ["飞书 AI 同传", 3.215, "#4d7de0"],
    ["钉钉 AI 同传", 13.25, "#52c0de"],
    ["腾讯会议", 6.37, "#8b5de5"],
    ["Teams Copilot", 6.74, "#edcf57"],
    ["讯飞同传", 7.22, "#e86862"],
    ["有道翻译官", 3.655, "#f2a13e"],
  ],
};

const sceneInputs = {
  meeting: [
    {
      label: "中英测试",
      file: "中英测试.mp3",
      text: "各位，我这边简单对一下目前这个项目的整体节奏。\n 现在最大的瓶颈，其实不是资源不够，而是上下游协同的链路还没有完全跑通，所以在关键节点上会出现反复对齐、反复打回的情况。\n 从数据上看，我们的转化漏斗是断层式下滑的，说明前端埋点和后端归因口径其实不一致，这个如果不先拉齐，后面再怎么堆人、堆算力，其实都是在做无效内卷。\n接下来我的建议是：先冻结需求版本，用一周时间做全链路复盘，把核心指标拆到责任人，再同步给业务和技术两端，形成闭环，不要再做表面增长。",
    },
    {
      label: "英中测试",
      file: "英中测试.mp3",
      text: "Let me quickly align everyone on where we are with this initiative.\nRight now, the core blocker is not bandwidth or headcount, but the fact that our cross-team workflow is still highly fragmented, which means we keep re-litigating decisions and losing velocity at every milestone.\nIf you look at the dashboard, the funnel drop-off is clearly non-linear, and that tells us our front-end tracking logic and back-end attribution model are not speaking the same language.\nSo before we keep throwing resources at the problem, I strongly suggest we lock the scope, run a full end-to-end postmortem, and re-baseline our success metrics to actually drive impact instead of vanity growth.",
    },
  ],
  general: [
    {
      label: "中到英",
      file: "中到英 (zh-en).mp3",
      text: "你好，我想确认一下我刚刚提交的申请有没有成功。\n我不太确定需要准备哪些材料，也不知道大概多久能收到回复。\n如果还缺什么，请告诉我需要补交哪些内容，以及怎么补交更方便。\n另外，我希望把联系方式改成新的号码，\n这样后续如果有人需要联系我，会更及时。\n麻烦你帮我看一下，谢谢。",
    },
    {
      label: "英到中",
      file: "英到中 (en-zh).mp3",
      text: "Hi, excuse me. I'm trying to get to a nearby place, but I think I may be going the wrong way.\nCould you tell me which direction I should walk, and about how long it will take?\nIf there is an easier way, like fewer turns or less walking, that would be great.\nAlso, is there anything I should know, like a closed entrance or a temporary change?\nThank you for your help.",
    },
  ],
};

const sceneReviews = {
  meeting: [
    {
      product: "飞书 AI 同传",
      videos: ["录屏2026-04-20 11.21.13.mov", "录屏2026-04-20 11.31.23_副本.mov"],
      notes: ["信息准确度极高", "时延极低", "音色自然", "有音色克隆"],
      badge: "最佳",
    },
    {
      product: "钉钉 AI 同传",
      videos: ["录屏2026-04-20 14.34.04.mov", "录屏2026-04-20 14.42.35.mov"],
      notes: ["时延极高，语音同传时延长达十几秒", "音色相对自然，是系统提供的角色音", "无音色克隆"],
    },
    {
      product: "腾讯会议",
      videos: ["111.mov", "2222.mov"],
      notes: ["信息准确度低，中文源语断句不合理，导致译语句子不完整。英文源语识别有误，例如将“funnel”识别为“final”，导致译语意思偏差较大", "无论中英还是英中，S-T 都会在最后部分出现 bug，双语对照变成单语对照", "时延较高", "有音色克隆且音色自然，但是英语中式口音较重，男女音色变化不自然，例如男声转女声时，过渡句会变成奇怪的“中性音”", "同传音质不稳定，偶尔会出现卡顿"],
    },
    {
      product: "Teams Copilot",
      videos: ["会议 中翻英.mp4", "会议 英翻中.mp4"],
      notes: ["信息准确度较低（“对一下”错译为“compare”，“埋点”、“归因”、“堆人、对算力”等存在错译或漏译）", "时延略高，语音同传时延长达六七秒", "有音色克隆，但音色克隆的音质较差、音色还原度不高"],
    },
    {
      product: "Google Meet",
      videos: ["会议 中翻英.mp4", "会议 英翻中.mp4"],
      notes: ["信息准确度较低（“埋点”、“归因”点等词的翻译有误）", "同传时出现 bug：中翻英进行后，结果后面所有英文字幕变成中文", "字幕同传时延偏高"],
    },
    {
      product: "讯飞同传",
      videos: ["录屏2026-04-20 11.50.43.mov", "录屏2026-04-20 11.58.51.mov"],
      notes: ["信息准确度极低（整体信息非常不准确；“埋点”、“归因”等词无法准确译出）", "时延略高，且语音不连贯，断断续续", "音色较自然", "无音色克隆"],
    },
    {
      product: "有道翻译官",
      videos: ["录屏2026-04-27 14.07.42.mov", "录屏2026-04-27 14.12.06.mov"],
      notes: ["有音色克隆，但声音质量较差，音色还原度不高", "整体译文质量一般，中翻英、英翻中都存在源语信息提取错误，以及将完整句子拆分成两个部分导致意思产生偏差的情况", "时延较短，但是时延表现发挥不稳定"],
    },
    {
      product: "腾讯元宝",
      videos: ["1335593666.mp4", "1055636564.mp4"],
      notes: ["信息准确度偏低（“埋点”、“归因”等词无法准确译出）", "时延极低，字幕同传时延在两秒内", "音色较自然，但说话人结束发言后才开始语音同传", "无音色克隆"],
    },
    {
      product: "百度 AI 同传",
      videos: ["录屏2026-04-20 15.11.03.mov", "录屏2026-04-20 15.15.33.mov"],
      notes: ["源语识别有误，比如“瓶颈”识别为“平静”，“velocity”识别为“village”", "信息准确度较低（“埋点”、“归因”等词翻译有误）", "仅支持字幕同传，且时延较高，译文总体质量不高"],
    },
  ],
  general: [
    {
      product: "飞书 AI 同传",
      videos: ["录屏2026-04-20 11.26.23.mov", "录屏2026-04-20 11.34.09.mov"],
      notes: ["信息准确度极高", "时延极低", "音色自然", "有音色克隆"],
      badge: "最佳",
    },
    {
      product: "钉钉 AI 同传",
      videos: ["录屏2026-04-20 14.37.41.mov", "录屏2026-04-20 14.44.06.mov"],
      notes: ["信息准确度比较高", "时延极高，语音同传时延长达十几秒", "音色相对自然，机器感较弱，有起伏升降调和感情，是系统提供的角色音", "部分翻译过于字对字，没有结合语境分析", "无音色克隆"],
    },
    {
      product: "腾讯会议",
      videos: ["3333.mov", "4444.mov"],
      notes: ["信息准确度较高，但中翻英源语信息识别有遗漏，导致译语不完整，比如“更方便”没有翻译出来", "英翻中表现明显更好，并且将之前很多模型没有翻译出来的“更方便的路线”翻译出来了", "时延较高", "有音色克隆且音色自然，但同传音质不稳定，偶尔会出现卡顿"],
    },
    {
      product: "Teams Copilot",
      videos: ["General 中翻英.mp4", "General 英翻中.mp4"],
      notes: ["信息完整度较高", "信息准确度略差，比如“以及怎么补交更方便”错译为“And I can make it more convenient”，“temporary change”错译为“临时更换”", "字幕同传时延较低，但语音同传时延较高，长达六七秒", "有音色克隆，但音色克隆的音质较差、音色还原度不高"],
    },
    {
      product: "Google Meet",
      videos: ["通用 中翻英.mp4", "通用 英翻中.mp4"],
      notes: ["信息准确度较高", "译文整体风格较自然", "仅支持字幕同传时时延偏高"],
    },
    {
      product: "讯飞同传",
      videos: ["录屏2026-04-20 11.53.56.mov", "录屏2026-04-20 12.00.45.mov"],
      notes: ["信息准确度比较高", "时延略高，且语音不连贯，断断续续", "音色较自然", "无音色克隆"],
    },
    {
      product: "有道翻译官",
      videos: ["录屏2026-04-27 14.09.25.mov", "录屏2026-04-27 14.16.54.mov"],
      notes: ["信息准确度一般", "经常出现网络不稳定、重连的问题", "有音色克隆，但是声音不够自然，音质较差"],
    },
    {
      product: "腾讯元宝",
      videos: ["2122815758.mp4", "891537998.mp4"],
      notes: ["信息准确度较高", "时延极低，字幕同传时延在两秒内", "音色较自然，但说话人结束发言后才开始语音同传", "中翻英有部分源语输入错误导致整个译文意思偏离很多", "无音色克隆"],
    },
    {
      product: "百度 AI 同传",
      videos: ["录屏2026-04-20 15.13.06.mov", "录屏2026-04-20 15.16.48.mov"],
      notes: ["信息准确度偏低", "仅支持字幕同传时时延偏高，且译文整体质量不高", "部分翻译过于字对字，没有结合语境"],
    },
  ],
};

const maxVoicePairs = Math.max(...products.map((product) => product.voicePairs));
const maxCaptionPairs = Math.max(...products.map((product) => product.captionPairs));

function stars(count) {
  if (count === null) return '<span class="not-applicable">不涉及</span>';
  return `<span class="stars">${"⭐️".repeat(count)}</span>`;
}

function latencyValue(productName, type) {
  const item = latency[type].find(([name]) => name === productName);
  return item ? item[1] : null;
}

function scoreLevel(value) {
  if (value === null) return "low";
  if (value >= 4) return "high";
  if (value >= 3) return "mid";
  return "low";
}

function latencyLevel(value, best, worst) {
  if (value === null) return "low";
  const range = worst - best || 1;
  const normalized = 1 - (value - best) / range;
  if (normalized >= 0.75) return "high";
  if (normalized >= 0.45) return "mid";
  return "low";
}

function levelText(level) {
  if (level === "high") return "强";
  if (level === "mid") return "中";
  return "弱";
}

function meterWidth(level) {
  if (level === "high") return 100;
  if (level === "mid") return 66;
  return 34;
}

function renderProducts() {
  const query = document.querySelector("#productSearch").value.trim().toLowerCase();
  const filter = document.querySelector("#capabilityFilter").value;
  const filtered = products.filter((product) => {
    const haystack = `${product.name} ${product.entry} ${product.pricing} ${product.capability}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesFilter =
      filter === "all" ||
      (filter === "voice" && product.capability.includes("语音")) ||
      (filter === "caption" && !product.capability.includes("语音"));
    return matchesQuery && matchesFilter;
  });

  const productGrid = document.querySelector("#productGrid");
  if (!filtered.length) {
    productGrid.innerHTML = '<p class="empty-state">没有找到匹配的产品，请调整搜索词或筛选条件。</p>';
    return;
  }

  productGrid.innerHTML = filtered
    .map(
      (product, index) => `
        <article class="product-card ${product.name === "飞书 AI 同传" ? "featured" : ""}">
          <div class="product-top">
            <div>
              <span class="product-index">${String(index + 1).padStart(2, "0")}</span>
              <div class="product-name">${product.name}</div>
              <small>${product.office ? "办公应用" : "通用 / 专用工具"}</small>
            </div>
            ${product.badge ? `<span class="badge ${product.badgeClass || ""}">${product.badge}</span>` : ""}
          </div>
          <div class="meta-list">
            <div class="meta-item"><span>产品入口</span>${product.entry}</div>
            <div class="meta-item"><span>同传能力</span>${product.capability}</div>
            <div class="meta-item"><span>产品定价</span>${product.pricing}</div>
          </div>
          <div class="language-bars" aria-label="${product.name} 语对覆盖">
            ${languageBar("语音", product.voicePairs, maxVoicePairs)}
            ${languageBar("字幕", product.captionPairs, maxCaptionPairs)}
          </div>
          <div class="product-stats" aria-label="${product.name} 语对数量">
            <span><strong>${product.voicePairs}</strong> 语音语对</span>
            <span><strong>${product.captionPairs}</strong> 字幕语对</span>
          </div>
          ${
            product.pricingImage
              ? `<details class="price-shot">
                  <summary>${product.pricingImage[1]}</summary>
                  <img src="${product.pricingImage[0]}" alt="${product.pricingImage[1]}" loading="lazy" />
                </details>`
              : ""
          }
          ${product.note ? `<p class="chart-note">${product.note}</p>` : ""}
        </article>
      `
    )
    .join("");
}

function languageBar(label, value, max) {
  const width = Math.max(4, (value / max) * 100);
  return `
    <div class="bar-line">
      <span>${label}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
      <strong>${value} 对</strong>
    </div>
  `;
}

function renderScores() {
  const captionLatencies = latency.caption.map((item) => item[1]);
  const voiceLatencies = latency.voice.map((item) => item[1]);
  const bestCaption = Math.min(...captionLatencies);
  const worstCaption = Math.max(...captionLatencies);
  const bestVoice = Math.min(...voiceLatencies);
  const worstVoice = Math.max(...voiceLatencies);
  const currentView = document.querySelector(".performance-tabs .active")?.dataset.performanceView || "overall";
  const rows = scores.map((row) => {
    const captionLatency = latencyValue(row.product, "caption");
    const voiceLatency = latencyValue(row.product, "voice");
    const coreTotal = (row.caption || 0) + (row.voice || 0) + (row.toneScore || 0);
    const accuracyTotal = (row.caption || 0) + (row.voice || 0);
    const latencyAverage =
      captionLatency !== null && voiceLatency !== null
        ? (captionLatency + voiceLatency) / 2
        : captionLatency || voiceLatency || 99;
    const hasBothLatencies = captionLatency !== null && voiceLatency !== null;
    return {
      ...row,
      captionLatency,
      voiceLatency,
      coreTotal,
      accuracyTotal,
      latencyAverage,
      hasBothLatencies,
      captionLatencyLevel: latencyLevel(captionLatency, bestCaption, worstCaption),
      voiceLatencyLevel: latencyLevel(voiceLatency, bestVoice, worstVoice),
    };
  });

  const sortedRows = [...rows].sort((a, b) => {
    if (currentView === "accuracy") return b.accuracyTotal - a.accuracyTotal || b.coreTotal - a.coreTotal;
    if (currentView === "latency") return Number(b.hasBothLatencies) - Number(a.hasBothLatencies) || a.latencyAverage - b.latencyAverage;
    if (currentView === "voice") return (b.toneScore || 0) - (a.toneScore || 0) || Number(b.clone) - Number(a.clone);
    return b.coreTotal - a.coreTotal || a.latencyAverage - b.latencyAverage;
  });

  const viewMeta = {
    overall: ["综合视图", "按核心评分优先排序，同时保留时延和音色克隆信息。"],
    accuracy: ["准确度视图", "优先看字幕和语音同传信息准确度，适合判断译文可靠性。"],
    latency: ["时延视图", "优先看同时具备字幕和语音时延数据的产品，秒数越低越适合实时会议。"],
    voice: ["音色视图", "优先看语音同传音色自然度和音色克隆能力。"],
  };

  document.querySelector("#performanceLead").innerHTML = sortedRows
    .slice(0, 3)
    .map(
      (row, index) => `
        <article class="lead-rank-card ${index === 0 ? "top" : ""}">
          <span class="rank-index">0${index + 1}</span>
          <div>
            <strong>${row.product}</strong>
            <p>${performanceSummary(row, currentView)}</p>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelector("#performanceMatrix").innerHTML = `
    <div class="performance-view-note">
      <strong>${viewMeta[currentView][0]}</strong>
      <span>${viewMeta[currentView][1]}</span>
    </div>
    ${sortedRows.map((row) => performanceCard(row, currentView)).join("")}
  `;
}

function performanceSummary(row, view) {
  if (view === "accuracy") return `字幕 ${valueOrNA(row.caption, "/5")} · 语音 ${valueOrNA(row.voice, "/5")}`;
  if (view === "latency") return `字幕 ${secondsOrNA(row.captionLatency)} · 语音 ${secondsOrNA(row.voiceLatency)}`;
  if (view === "voice") return `音色 ${valueOrNA(row.toneScore, "/5")} · 音色克隆${row.clone ? "支持" : "不支持"}`;
  return `核心评分 ${row.coreTotal}/15 · 字幕时延 ${secondsOrNA(row.captionLatency)}`;
}

function performanceCard(row, view) {
  return `
    <article class="performance-card ${row.product === "飞书 AI 同传" ? "featured" : ""}" data-view="${view}">
      <div class="performance-card-head">
        <div>
          <span>${view === "overall" ? "综合排序" : "当前维度排序"}</span>
          <h4>${row.product}</h4>
        </div>
        <strong>${row.coreTotal}<small>/15</small></strong>
      </div>
      <div class="metric-strip" aria-label="${row.product} 核心指标">
        ${scorePill("字幕准确", row.caption, scoreLevel(row.caption), "/5")}
        ${scorePill("语音准确", row.voice, scoreLevel(row.voice), "/5")}
        ${scorePill("音色", row.toneScore, scoreLevel(row.toneScore), "/5")}
        ${latencyPill("字幕时延", row.captionLatency, row.captionLatencyLevel)}
        ${latencyPill("语音时延", row.voiceLatency, row.voiceLatencyLevel)}
        ${clonePill(row.clone)}
      </div>
      ${row.detail ? `<p class="performance-detail">${row.detail}</p>` : ""}
    </article>
  `;
}

function scorePill(label, value, level, suffix) {
  return `
    <div class="metric-pill ${level}">
      <span>${label}</span>
      <strong>${valueOrNA(value, suffix)}</strong>
    </div>
  `;
}

function latencyPill(label, value, level) {
  return `
    <div class="metric-pill ${level}">
      <span>${label}</span>
      <strong>${secondsOrNA(value)}</strong>
    </div>
  `;
}

function clonePill(clone) {
  return `
    <div class="metric-pill ${clone ? "high" : "low"}">
      <span>音色克隆</span>
      <strong>${clone ? "支持" : "不支持"}</strong>
    </div>
  `;
}

function valueOrNA(value, suffix) {
  return value === null ? "不涉及" : `${value}${suffix}`;
}

function secondsOrNA(value) {
  return value === null ? "不涉及" : `${value}s`;
}

let currentScene = "meeting";

function renderScene() {
  document.querySelector("#sceneTitle").textContent = currentScene === "meeting" ? "会议场景输入" : "通用场景输入";
  document.querySelector("#sceneInput").innerHTML = sceneInputs[currentScene]
    .map(
      (source) => `
        <article class="source-card">
          <div class="audio-placeholder">
            <div>
              <strong>${source.label}</strong>
              <span>${source.file}</span>
            </div>
            <small>音频待上传</small>
          </div>
          <pre>${source.text}</pre>
        </article>
      `
    )
    .join("");
  document.querySelector("#sceneGrid").innerHTML = sceneReviews[currentScene]
    .map(
      (review) => `
        <article class="scene-card">
          <div class="scene-card-header">
            <h3>${review.product}</h3>
            ${review.badge ? `<span class="badge green">${review.badge}</span>` : ""}
          </div>
          <div class="scene-card-body">
            <div class="video-list">
              ${review.videos.map((video) => `<div class="video-placeholder"><span>${video}</span><small>视频待上传</small></div>`).join("")}
            </div>
            <ul class="note-list">
              ${review.notes.map((note) => `<li>${note}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");
}

document.querySelector("#productSearch").addEventListener("input", renderProducts);
document.querySelector("#capabilityFilter").addEventListener("change", renderProducts);

document.querySelectorAll("[data-scene]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-scene]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    currentScene = button.dataset.scene;
    renderScene();
  });
});

document.querySelectorAll("[data-performance-view]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-performance-view]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderScores();
  });
});

renderProducts();
renderScores();
renderScene();
