const verifiedAt = "2026-05-13";

const companyColors = {
  OpenAI: "#2e6f5d",
  Anthropic: "#9c6a22",
  xAI: "#1f2528",
  Google: "#315f8f",
  豆包: "#a5483f",
  千问: "#6a4aa0",
  腾讯: "#246b7d",
  DeepSeek: "#184f62",
  MiniMax: "#b05d2a",
  智谱: "#5d6b2f",
};

const events = [
  {
    date: "2023-03-14",
    company: "OpenAI",
    model: "GPT-4",
    note: "多模态 GPT 里程碑，面向 ChatGPT Plus 和 API 开放。",
    source: "https://openai.com/index/gpt-4-research/",
  },
  {
    date: "2023-11-03",
    company: "xAI",
    model: "Grok",
    note: "xAI 发布早期 beta 版 Grok，强调接入 X 平台实时信息。",
    source: "https://x.ai/news/grok",
  },
  {
    date: "2023-12-06",
    company: "Google",
    model: "Gemini 1.0",
    note: "Gemini Ultra、Pro、Nano 三档模型亮相，原生多模态能力成为主轴。",
    source: "https://blog.google/innovation-and-ai/technology/ai/google-gemini-ai/",
  },
  {
    date: "2024-02-15",
    company: "Google",
    model: "Gemini 1.5",
    note: "Google 下一代模型，重点提升长上下文与多模态理解。",
    source: "https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/",
  },
  {
    date: "2024-03-04",
    company: "Anthropic",
    model: "Claude 3 Opus / Sonnet / Haiku",
    note: "Claude 3 家族发布，覆盖高智能、均衡、快速三类定位。",
    source: "https://www.anthropic.com/research/claude-3-family",
  },
  {
    date: "2024-03-28",
    company: "xAI",
    model: "Grok-1.5",
    note: "xAI 发布 Grok-1.5，强化推理能力并支持 128K 上下文。",
    source: "https://x.ai/news/grok-1.5",
  },
  {
    date: "2024-05-13",
    company: "OpenAI",
    model: "GPT-4o",
    note: "OpenAI 新旗舰模型，覆盖文本、语音、视觉的实时多模态交互。",
    source: "https://openai.com/index/gpt-4o-and-more-tools-to-chatgpt-free/",
  },
  {
    date: "2024-06-07",
    company: "千问",
    model: "Qwen2",
    note: "通义千问开源 Qwen2 系列，包含 0.5B 至 72B 等多个尺寸。",
    source: "https://qwenlm.github.io/blog/qwen2/",
  },
  {
    date: "2024-06-20",
    company: "Anthropic",
    model: "Claude 3.5 Sonnet",
    note: "Claude 3.5 家族首个模型，主打更强编码、推理与速度。",
    source: "https://www.anthropic.com/news/claude-3-5-sonnet",
  },
  {
    date: "2024-08-13",
    company: "xAI",
    model: "Grok-2 / Grok-2 mini",
    note: "Grok-2 beta 发布，同时推出更小的 Grok-2 mini。",
    source: "https://x.ai/news/grok-2",
  },
  {
    date: "2024-09-05",
    company: "腾讯",
    model: "Hunyuan Turbo",
    note: "腾讯混元新一代 MoE 大语言模型发布。",
    source: "https://cloud.tencent.com/product/events/detail/5934",
  },
  {
    date: "2024-09-19",
    company: "千问",
    model: "Qwen2.5",
    note: "Qwen2.5、Qwen2.5-Coder、Qwen2.5-Math 开源发布。",
    source: "https://qwenlm.github.io/blog/qwen2.5/",
  },
  {
    date: "2024-10-22",
    company: "Anthropic",
    model: "Claude 3.5 Sonnet v2 / Claude 3.5 Haiku",
    note: "Anthropic 更新 3.5 Sonnet，并推出 Haiku 3.5。",
    source: "https://docs.anthropic.com/en/docs/models-overview",
  },
  {
    date: "2024-12-11",
    company: "Google",
    model: "Gemini 2.0",
    note: "Google 发布面向 agentic era 的 Gemini 2.0。",
    source: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/google-gemini-ai-update-december-2024/",
  },
  {
    date: "2024-12-26",
    company: "DeepSeek",
    model: "DeepSeek-V3",
    note: "DeepSeek-V3 发布并开源，采用 671B 参数 MoE 架构、每 token 激活约 37B 参数。",
    source: "https://api-docs.deepseek.com/news/news1226",
  },
  {
    date: "2025-01-22",
    company: "豆包",
    model: "Doubao-1.5-pro",
    note: "豆包大模型 1.5 Pro 发布，并同步推出视觉理解与实时语音模型。",
    source: "https://www.cnfin.com/gs-lb/detail/20250122/4178274_1.html",
  },
  {
    date: "2025-01-20",
    company: "DeepSeek",
    model: "DeepSeek-R1",
    note: "DeepSeek-R1 发布，官方称推理表现对标 OpenAI o1，并开放模型、论文和蒸馏版本。",
    source: "https://api-docs.deepseek.com/news/news250120",
  },
  {
    date: "2025-02-19",
    company: "xAI",
    model: "Grok 3 Beta",
    note: "xAI 发布 Grok 3 与 Grok 3 mini，强调推理、数学与代码能力。",
    source: "https://x.ai/news/grok-3",
  },
  {
    date: "2025-02-24",
    company: "Anthropic",
    model: "Claude 3.7 Sonnet",
    note: "首个混合推理 Claude 模型，同时推出 Claude Code 研究预览。",
    source: "https://www.anthropic.com/news/claude-3-7-sonnet",
  },
  {
    date: "2025-02-27",
    company: "OpenAI",
    model: "GPT-4.5",
    note: "OpenAI 发布 GPT-4.5 研究预览，定位为更自然的通用聊天模型。",
    source: "https://openai.com/index/introducing-gpt-4-5/",
  },
  {
    date: "2025-03-13",
    company: "腾讯",
    model: "Hunyuan TurboS",
    note: "混元旗舰模型 TurboS 版本发布，增强思考、数学、逻辑与代码能力。",
    source: "https://cloud.tencent.com/product/events/detail/6705",
  },
  {
    date: "2025-03-21",
    company: "腾讯",
    model: "Hunyuan T1",
    note: "腾讯首个深度推理模型 Hunyuan T1 正式发布。",
    source: "https://cloud.tencent.com/product/events/detail/6703",
  },
  {
    date: "2025-03-25",
    company: "Google",
    model: "Gemini 2.5 Pro Experimental",
    note: "Google 发布首个 Gemini 2.5 thinking model。",
    source: "https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/",
  },
  {
    date: "2025-04-14",
    company: "OpenAI",
    model: "GPT-4.1 / mini / nano",
    note: "OpenAI 在 API 发布 GPT-4.1 系列，增强代码、指令跟随与长上下文。",
    source: "https://openai.com/index/gpt-4-1/",
  },
  {
    date: "2025-04-16",
    company: "OpenAI",
    model: "o3 / o4-mini",
    note: "OpenAI 发布新一代 o 系列推理模型。",
    source: "https://openai.com/index/introducing-o3-and-o4-mini/",
  },
  {
    date: "2025-04-29",
    company: "千问",
    model: "Qwen3",
    note: "Qwen3 开源发布，加入混合推理模式与 MoE 模型。",
    source: "https://qwenlm.github.io/blog/qwen3/",
  },
  {
    date: "2025-05-22",
    company: "Anthropic",
    model: "Claude Opus 4 / Sonnet 4",
    note: "Claude 4 家族发布，重点面向编码、推理与 AI agents。",
    source: "https://www.anthropic.com/news/claude-4",
  },
  {
    date: "2025-06-11",
    company: "豆包",
    model: "Doubao-Seed-1.6 系列",
    note: "豆包 1.6 系列发布，包含 Seed-1.6、thinking、flash 等模型。",
    source: "https://developer.volcengine.com/articles/7518983626017472553",
  },
  {
    date: "2025-07-09",
    company: "xAI",
    model: "Grok 4",
    note: "Grok 4 与 Grok 4 Heavy 发布，并通过 xAI API 提供。",
    source: "https://x.ai/news/grok-4",
  },
  {
    date: "2025-07-22",
    company: "千问",
    model: "Qwen3-Coder",
    note: "Qwen3-Coder-480B-A35B-Instruct 发布，面向 agentic coding。",
    source: "https://qwenlm.github.io/blog/qwen3-coder/",
  },
  {
    date: "2025-08-07",
    company: "OpenAI",
    model: "GPT-5 / GPT-5 pro",
    note: "OpenAI 发布 GPT-5，统一快速回答与深度思考路由，并开放开发者 API。",
    source: "https://openai.com/index/introducing-gpt-5/",
  },
  {
    date: "2025-09-29",
    company: "Anthropic",
    model: "Claude Sonnet 4.5",
    note: "Anthropic 发布 Sonnet 4.5，强调编码、复杂 agents 与 computer use。",
    source: "https://www.anthropic.com/news/claude-sonnet-4-5",
  },
  {
    date: "2025-09-22",
    company: "DeepSeek",
    model: "DeepSeek-V3.1-Terminus",
    note: "DeepSeek 将 deepseek-chat 与 deepseek-reasoner 升级到 V3.1-Terminus。",
    source: "https://api-docs.deepseek.com/updates",
  },
  {
    date: "2025-09-29",
    company: "DeepSeek",
    model: "DeepSeek-V3.2-Exp",
    note: "DeepSeek-V3.2-Exp 发布，引入 DeepSeek Sparse Attention，并同步下调 API 价格。",
    source: "https://api-docs.deepseek.com/news/news250929",
  },
  {
    date: "2025-10-15",
    company: "Anthropic",
    model: "Claude Haiku 4.5",
    note: "小模型 Haiku 4.5 发布，主打低延迟、低成本与接近前代旗舰的编码能力。",
    source: "https://www.anthropic.com/news/claude-haiku-4-5",
  },
  {
    date: "2025-11-09",
    company: "腾讯",
    model: "Tencent HY 2.0 Think",
    note: "Tencent HY 2.0 Think 适合超长文及复杂任务，是混元 2.0 系列的思考模型。",
    source: "https://cloud.tencent.com/product/tclm",
  },
  {
    date: "2025-11-11",
    company: "腾讯",
    model: "Tencent HY 2.0 Instruct",
    note: "Tencent HY 2.0 Instruct 面向快速响应场景，是混元 2.0 系列的指令模型。",
    source: "https://cloud.tencent.com/product/tclm",
  },
  {
    date: "2025-11-12",
    company: "OpenAI",
    model: "GPT-5.1 Instant / Thinking",
    note: "ChatGPT 升级到 GPT-5.1 Instant 与 GPT-5.1 Thinking，提升对话体验与自适应推理。",
    source: "https://openai.com/index/gpt-5-system-card-addendum-gpt-5-1/",
  },
  {
    date: "2025-11-13",
    company: "OpenAI",
    model: "GPT-5.1 API",
    note: "GPT-5.1 面向 API 发布，支持动态推理与 no reasoning 模式。",
    source: "https://openai.com/index/gpt-5-1-for-developers/",
  },
  {
    date: "2025-11-24",
    company: "Anthropic",
    model: "Claude Opus 4.5",
    note: "Opus 4.5 发布，面向编码、agents、computer use 与企业工作流。",
    source: "https://www.anthropic.com/news/claude-opus-4-5",
  },
  {
    date: "2025-12-11",
    company: "OpenAI",
    model: "GPT-5.2",
    note: "OpenAI 发布 GPT-5.2，面向专业知识工作与长时间运行 agents。",
    source: "https://openai.com/es-ES/index/introducing-gpt-5-2/",
  },
  {
    date: "2025-12-01",
    company: "DeepSeek",
    model: "DeepSeek-V3.2 / V3.2-Speciale",
    note: "DeepSeek-V3.2 正式版发布，网页端、App 和 API 均升级；Speciale 版本以临时 API 供评测研究。",
    source: "https://api-docs.deepseek.com/news/news251201",
  },
  {
    date: "2025-12-17",
    company: "Google",
    model: "Gemini 3 Flash",
    note: "Google 发布 Gemini 3 Flash，主打速度、成本与前沿推理能力。",
    source: "https://blog.google/products/gemini/gemini-3-flash/",
  },
  {
    date: "2026-01-30",
    company: "千问",
    model: "Qwen Code",
    note: "Qwen 发布编程 Agent 工具 Qwen Code，由 Qwen3-Coder 驱动。",
    source: "https://qwenlm.github.io/qwen-code-docs/en/blog/thinks-like-a-programmer/",
  },
  {
    date: "2026-02-05",
    company: "OpenAI",
    model: "GPT-5.3-Codex",
    note: "OpenAI 发布 GPT-5.3-Codex，用于更长程的 agentic coding 和电脑上的专业工作。",
    source: "https://openai.com/index/introducing-gpt-5-3-codex/",
  },
  {
    date: "2026-02-05",
    company: "Anthropic",
    model: "Claude Opus 4.6",
    note: "Anthropic 模型页列出 Opus 4.6，定位为 Opus 4.5 之后的可靠性与精度升级。",
    source: "https://www.anthropic.com/claude/opus",
  },
  {
    date: "2026-02-12",
    company: "OpenAI",
    model: "GPT-5.3-Codex-Spark",
    note: "OpenAI 发布实时编码研究预览 Codex-Spark，强调超低延迟。",
    source: "https://openai.com/index/introducing-gpt-5-3-codex-spark/",
  },
  {
    date: "2026-02-12",
    company: "Google",
    model: "Gemini 3 Deep Think 更新",
    note: "Google 更新 Gemini 3 Deep Think，面向科学、研究和工程难题。",
    source: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-deep-think/",
  },
  {
    date: "2026-02-14",
    company: "豆包",
    model: "Doubao-Seed-2.0 / 2.0-Code",
    note: "豆包大模型 2.0 系列正式发布，API 同步上线，并推出 Code 模型。",
    source: "https://developer.volcengine.com/articles/7610285824933445675",
  },
  {
    date: "2026-02-19",
    company: "Google",
    model: "Gemini 3.1 Pro",
    note: "Google 发布 Gemini 3.1 Pro，面向复杂任务与更强核心推理。",
    source: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/",
  },
  {
    date: "2026-03-03",
    company: "千问",
    model: "qwen3.5-plus",
    note: "Qwen Code 周报中将 OAuth 认证模型升级到 qwen3.5-plus。",
    source: "https://qwenlm.github.io/qwen-code-docs/en/blog/weekly-update-2026-03-03/",
  },
  {
    date: "2026-03-05",
    company: "OpenAI",
    model: "GPT-5.4 / GPT-5.4 Pro",
    note: "OpenAI 发布 GPT-5.4，面向专业工作、电脑使用、编码和工具调用。",
    source: "https://openai.com/index/introducing-gpt-5-4/",
  },
  {
    date: "2026-04-08",
    company: "千问",
    model: "Qwen 3.6 Plus",
    note: "Qwen Code 周报宣布 Qwen 3.6 Plus 正式上线。",
    source: "https://qwenlm.github.io/qwen-code-docs/en/blog/weekly-update-2026-04-09/",
  },
  {
    date: "2026-04-16",
    company: "Anthropic",
    model: "Claude Opus 4.7",
    note: "Anthropic 发布 Opus 4.7，提升编码、agents、视觉与复杂多步骤任务表现。",
    source: "https://www.anthropic.com/news/claude-opus-4-7",
  },
  {
    date: "2026-04-23",
    company: "OpenAI",
    model: "GPT-5.5 / GPT-5.5 Pro",
    note: "OpenAI 发布 GPT-5.5；4 月 24 日更新称 GPT-5.5 与 GPT-5.5 Pro 已可用于 API。",
    source: "https://openai.com/index/introducing-gpt-5-5/",
  },
  {
    date: "2026-04-23",
    company: "xAI",
    model: "Grok Voice Think Fast 1.0",
    note: "xAI 发布新的旗舰语音 agent 模型，面向复杂客服、销售和企业流程。",
    source: "https://x.ai/news/grok-voice-think-fast-1",
  },
  {
    date: "2026-04-23",
    company: "腾讯",
    model: "Hunyuan Hy3 Preview",
    note: "腾讯混元 Hy3 Preview 语言模型发布并同步开源，295B MoE 架构。",
    source: "https://developer.cloud.tencent.com/article/2660040",
  },
  {
    date: "2026-04-24",
    company: "DeepSeek",
    model: "DeepSeek-V4-Pro / V4-Flash",
    note: "DeepSeek-V4-Pro 与 V4-Flash 已上线，兼容 OpenAI ChatCompletions 和 Anthropic 接口。",
    source: "https://api-docs.deepseek.com/updates",
  },
  {
    date: "2026-05-06",
    company: "xAI",
    model: "Grok 4.3",
    note: "Grok 4.3 是 xAI 当前新模型；旧模型将于 5 月 15 日退役。",
    source: "https://docs.x.ai/developers/models/grok-4.3",
  },
  {
    date: "2026-05-07",
    company: "豆包",
    model: "Doubao-Seed-2.0-lite 全模态升级",
    note: "Doubao-Seed-2.0-lite 升级为豆包家族首款全模态理解模型，支持视频、图像、音频、文本统一理解。",
    source: "https://developer.volcengine.com/articles/7636596381943070763",
  },
  {
    date: "2023-09-20",
    company: "OpenAI",
    model: "DALL-E 3",
    type: "图像",
    note: "DALL-E 3 发布，显著提升文本到图像的提示词遵循能力，并原生接入 ChatGPT 辅助改写提示词。",
    source: "https://openai.com/index/dall-e-3/",
  },
  {
    date: "2024-02-15",
    company: "OpenAI",
    model: "Sora 研究预览",
    type: "视频",
    note: "Sora 作为文本生成视频模型亮相，展示了更强的物理世界模拟、镜头一致性和长视频生成潜力。",
    source: "https://openai.com/index/sora/",
  },
  {
    date: "2024-05-14",
    company: "Google",
    model: "Veo / Imagen 3",
    type: "图像/视频",
    note: "Google 发布 Veo 与 Imagen 3，分别面向高清视频生成和高质量文生图。",
    source: "https://blog.google/technology/ai/google-generative-ai-veo-imagen-3/",
  },
  {
    date: "2024-11-13",
    company: "DeepSeek",
    model: "JanusFlow",
    type: "图像",
    note: "JanusFlow 发布，把自回归语言模型和 rectified flow 结合到统一多模态理解与图像生成框架中。",
    source: "https://github.com/deepseek-ai/Janus",
  },
  {
    date: "2024-12-03",
    company: "腾讯",
    model: "HunyuanVideo",
    type: "视频",
    note: "HunyuanVideo 开源文本到视频基础模型，提供模型权重、推理代码和多 GPU 推理方案。",
    source: "https://github.com/Tencent-Hunyuan/HunyuanVideo",
  },
  {
    date: "2024-12-09",
    company: "OpenAI",
    model: "Sora Turbo",
    type: "视频",
    note: "Sora 从研究预览进入产品阶段，Sora Turbo 作为更快版本面向 Plus 和 Pro 用户开放。",
    source: "https://openai.com/blog/sora-is-here/",
  },
  {
    date: "2024-12-09",
    company: "xAI",
    model: "Grok Aurora",
    type: "图像",
    note: "Grok 图像生成能力升级到 Aurora，可在 X 平台生成和编辑图像。",
    source: "https://x.ai/news/grok-image-generation-release",
  },
  {
    date: "2024-12-16",
    company: "Google",
    model: "Veo 2 / Imagen 3 更新",
    type: "图像/视频",
    note: "Google 更新 Veo 2 和 Imagen 3，强化视频真实感、电影语言理解和图像构图质量。",
    source: "https://blog.google/technology/google-labs/video-image-generation-update-december-2024/",
  },
  {
    date: "2025-01-27",
    company: "DeepSeek",
    model: "Janus-Pro",
    type: "图像",
    note: "Janus-Pro 发布，在统一多模态理解与图像生成框架上提升视觉理解、指令遵循和生成稳定性。",
    source: "https://github.com/deepseek-ai/Janus",
  },
  {
    date: "2025-02-25",
    company: "千问",
    model: "Wan2.1",
    type: "视频",
    note: "阿里 Wan2.1 开源，提供文本生视频、图生视频和文生图能力，并支持 480P/720P 视频生成。",
    source: "https://github.com/Wan-Video/Wan2.1",
  },
  {
    date: "2025-03-06",
    company: "腾讯",
    model: "HunyuanVideo-I2V",
    type: "视频",
    note: "HunyuanVideo-I2V 发布，把混元视频能力扩展到图生视频场景。",
    source: "https://github.com/Tencent-Hunyuan/HunyuanVideo",
  },
  {
    date: "2025-04-23",
    company: "OpenAI",
    model: "GPT Image 1",
    type: "图像",
    note: "OpenAI 将 ChatGPT 图像生成背后的原生多模态模型开放到 API，模型名为 gpt-image-1。",
    source: "https://openai.com/index/image-generation-api/",
  },
  {
    date: "2025-05-13",
    company: "豆包",
    model: "Seedance 1.0 lite",
    type: "视频",
    note: "豆包发布视频生成模型 Seedance 1.0 lite，支持文生视频和图生视频。",
    source: "https://developer.volcengine.com/articles/7504284064976502823",
  },
  {
    date: "2025-05-20",
    company: "Google",
    model: "Veo 3 / Imagen 4",
    type: "图像/视频",
    note: "Google 发布 Veo 3 和 Imagen 4，并推出面向创作者的 AI 电影制作工具 Flow。",
    source: "https://blog.google/technology/ai/generative-media-models-io-2025/",
  },
  {
    date: "2025-05-28",
    company: "腾讯",
    model: "HunyuanVideo-Avatar",
    type: "视频",
    note: "HunyuanVideo-Avatar 发布并开源，用一张图和一段音频生成会说话或唱歌的数字人视频。",
    source: "https://developer.cloud.tencent.com/article/2530093",
  },
  {
    date: "2025-06-26",
    company: "千问",
    model: "Qwen VLo",
    type: "图像",
    note: "Qwen VLo 预览版发布，把多模态理解和图像生成合并到同一模型体验里。",
    source: "https://qwenlm.github.io/blog/qwen-vlo/",
  },
  {
    date: "2025-08-04",
    company: "千问",
    model: "Qwen-Image",
    type: "图像",
    note: "Qwen-Image 发布，20B 图像基础模型重点强化复杂文字渲染和精细图像编辑。",
    source: "https://qwenlm.github.io/blog/qwen-image/",
  },
  {
    date: "2025-08-26",
    company: "Google",
    model: "Gemini Image Editing 更新",
    type: "图像",
    note: "Gemini 图像编辑模型升级，重点提升人物和宠物在多次编辑中的一致性。",
    source: "https://blog.google/products-and-platforms/products/gemini/updated-image-editing-model/",
  },
  {
    date: "2025-09-09",
    company: "豆包",
    model: "Seedream 4.0",
    type: "图像",
    note: "豆包发布图像创作模型 Seedream 4.0，支持 4K 多模态生图、多图融合、参考生图和图像编辑。",
    source: "https://developer.volcengine.com/articles/7599494661565005870",
  },
  {
    date: "2025-09-30",
    company: "OpenAI",
    model: "Sora 2",
    type: "视频",
    note: "Sora 2 发布，视频生成更强调物理准确性、可控性和真实感，并加入同步对话与音效。",
    source: "https://openai.com/index/sora-2/",
  },
  {
    date: "2025-11-21",
    company: "腾讯",
    model: "HunyuanVideo-1.5",
    type: "视频",
    note: "HunyuanVideo-1.5 发布，作为更高效的视频生成基础模型升级版本。",
    source: "https://github.com/Tencent-Hunyuan/HunyuanVideo",
  },
  {
    date: "2025-12-16",
    company: "OpenAI",
    model: "GPT Image 1.5",
    type: "图像",
    note: "OpenAI 发布新的 ChatGPT Images 模型 GPT Image 1.5，增强精确编辑、文字渲染和生成速度。",
    source: "https://openai.com/index/new-chatgpt-images-is-here/",
  },
  {
    date: "2026-01-28",
    company: "xAI",
    model: "Grok Imagine API",
    type: "图像/视频",
    note: "xAI 发布 Grok Imagine API，覆盖视频生成、视频编辑和图像创作。",
    source: "https://x.ai/news/grok-imagine-api",
  },
  {
    date: "2026-02-10",
    company: "千问",
    model: "Qwen-Image-2.0",
    type: "图像",
    note: "Qwen-Image-2.0 发布，强化专业排版、2K 原生细节、语义遵循和更轻量的推理架构。",
    source: "https://github.com/QwenLM/Qwen-Image",
  },
  {
    date: "2026-02-14",
    company: "豆包",
    model: "Seedance 2.0",
    type: "视频",
    note: "Seedance 2.0 上线，支持文字、图片、音频、视频四种模态作为参考输入，可生成最长 15 秒视频。",
    source: "https://developer.volcengine.com/articles/7606009619928449070",
  },
  {
    date: "2026-04-03",
    company: "xAI",
    model: "Grok Imagine Image Quality",
    type: "图像",
    note: "Grok Imagine Image Quality 面向更高真实感、更强文字渲染和更好的创意控制。",
    source: "https://docs.x.ai/developers/models/grok-imagine-image-quality",
  },
].sort((a, b) => new Date(b.date) - new Date(a.date));

const timeline = document.querySelector("#timeline");
const searchInput = document.querySelector("#searchInput");
const eventCount = document.querySelector("#eventCount");
const chips = [...document.querySelectorAll(".chip")];
const topbar = document.querySelector(".topbar > div");
const tabButtons = [...document.querySelectorAll(".tab")];
const tabPanels = [...document.querySelectorAll(".tab-panel")];
const weeklyFeed = document.querySelector("#weeklyFeed");
const weeklyCount = document.querySelector("#weeklyCount");
const clearWeekly = document.querySelector("#clearWeekly");
const currencySelect = document.querySelector("#currencySelect");
const fxRate = document.querySelector("#fxRate");
const priceTableBody = document.querySelector("#priceTableBody");
const priceMetricInputs = [...document.querySelectorAll('input[name="priceMetric"]')];
const priceChart = document.querySelector("#priceChart");
const priceChartMeta = document.querySelector("#priceChartMeta");
const chartCompanyChips = document.querySelector("#chartCompanyChips");
const chartResetView = document.querySelector("#chartResetView");
const chartTooltip = document.querySelector("#chartTooltip");
const commercialChips = [...document.querySelectorAll(".commercial-chip")];
const commercialPanels = [...document.querySelectorAll("[data-commercial-panel]")];
const anthropicRevenueChart = document.querySelector("#anthropicRevenueChart");
const anthropicAnnualRevenueChart = document.querySelector("#anthropicAnnualRevenueChart");
const anthropicMarginChart = document.querySelector("#anthropicMarginChart");
const anthropicMarginLineChart = document.querySelector("#anthropicMarginLineChart");
const anthropicFundingChart = document.querySelector("#anthropicFundingChart");
const anthropicCostChart = document.querySelector("#anthropicCostChart");
const anthropicFundingTable = document.querySelector("#anthropicFundingTable");
const openaiRevenueChart = document.querySelector("#openaiRevenueChart");
const openaiAnnualRevenueChart = document.querySelector("#openaiAnnualRevenueChart");
const openaiCostChart = document.querySelector("#openaiCostChart");
const openaiMarginChart = document.querySelector("#openaiMarginChart");
const openaiValuationChart = document.querySelector("#openaiValuationChart");
const openaiValuationTable = document.querySelector("#openaiValuationTable");
const stProductChips = document.querySelector("#stProductChips");
const stCountryChips = document.querySelector("#stCountryChips");
const stOverallChart = document.querySelector("#stOverallChart");
const stExChatgptChart = document.querySelector("#stExChatgptChart");
const stIndexedChart = document.querySelector("#stIndexedChart");
const stCountryChart = document.querySelector("#stCountryChart");
const stPeakValue = document.querySelector("#stPeakValue");
const stPeakMeta = document.querySelector("#stPeakMeta");
const stActiveCountryLabel = document.querySelector("#stActiveCountry");
const weeklyStorageKey = "modelTimelineWeeklyPicks";
const commercialChartTooltip = document.createElement("article");
commercialChartTooltip.className = "commercial-chart-tooltip";
commercialChartTooltip.hidden = true;
document.body.appendChild(commercialChartTooltip);

let activeCompany = "all";
let selectedPriceCompanies = new Set();
let chartView = null;
let chartDrag = null;
let selectedChartPoint = null;
let activeCommercialCompany = "Anthropic";
let selectedCommercialPointId = null;
const commercialPointRegistry = new Map();
let activeStCountry = "PH";
let selectedStProducts = new Set();

const anthropicRevenueSeries = {
  actual: [
    { label: "2024-12", value: 1.0, short: "1.0", note: "2024 年末 run-rate 约 $1B（Anthropic Series F 官方）" },
    { label: "2025-03", value: 1.4, short: "1.4", note: "2025-03 run-rate $1.4B（The Information）" },
    { label: "2025-05", value: 3.0, short: "3.0", note: "2025-05 run-rate 约 $3B（Reuters/CNBC）" },
    { label: "2025-07", value: 5.0, short: "5.0", note: "2025-07 run-rate 约 $5B（The Information 摘要）" },
    { label: "2025-10", value: 7.0, short: "7.0", note: "2025-10 run-rate 接近 $7B（Reuters / The Information）" },
    { label: "2025-12", value: 9.0, short: "9.0", note: "2025 年末 internal goal $9B（Reuters）" },
    { label: "2026-02", value: 14.0, short: "14", note: "2026-02 run-rate $14B（Anthropic Series G 官方）" },
    { label: "2026-03", value: 19.0, short: "19", note: "2026-03 run-rate $19B（Bloomberg / Axios 转述）" },
    { label: "2026-04", value: 30.0, short: "30+", note: "2026-04 run-rate 超过 $30B（Anthropic 官方）" },
  ],
  target2025: [
    { label: "2025-12", value: 9.0, short: "9", note: "2025 年末 internal target（Reuters）" },
  ],
  base2026: [
    { label: "2025-12", value: 9.0 },
    { label: "2026-12E", value: 20.0, short: "20", note: "2026 年末 base case（Reuters）" },
  ],
  bull2026: [
    { label: "2025-12", value: 9.0 },
    { label: "2026-12E", value: 32.0, short: "32", note: "2026 年末 higher internal projection（The Information newsletter）" },
  ],
  extrapolated2027: [
    { label: "2026-04", value: 30.0 },
    { label: "2027-04E", value: 100.0, short: "100", note: "The Information 2026-04 基于近四个月增速的外推，不是公司 guidance" },
  ],
  labels: ["2024-12", "2025-03", "2025-05", "2025-07", "2025-10", "2025-12", "2026-02", "2026-03", "2026-04", "2026-12E", "2027-04E"],
};

const anthropicCostSeries = {
  years: ["2024", "2025", "2026", "2027", "2028"],
  anthropic: [2, 6, 13, 20, 27],
  openai: [4, 16, 40, 69, 111],
};

const anthropicAnnualForecastSeries = {
  labels: ["2024", "2025", "2026", "2027", "2028", "2029"],
  formerOptimistic2024: [
    { label: "2024", value: 0.3, short: "0.3" },
    { label: "2025", value: 3.4, short: "3.4" },
    { label: "2026", value: 11.5, short: "11.5" },
    { label: "2027", value: 34.0, short: "34" },
    { label: "2028", value: 35.0, short: "35" },
  ],
  base2025: [
    { label: "2024", value: 0.3, short: "0.3" },
    { label: "2025", value: 4.0, short: "4" },
    { label: "2026", value: 10.0, short: "10" },
    { label: "2027", value: 21.0, short: "21" },
    { label: "2028", value: 33.0, short: "33" },
  ],
  optimistic2025: [
    { label: "2024", value: 0.3, short: "0.3" },
    { label: "2025", value: 4.7, short: "4.7" },
    { label: "2026", value: 15.0, short: "15" },
    { label: "2027", value: 39.0, short: "39" },
    { label: "2028", value: 70.0, short: "70" },
  ],
  openaiProjection: [
    { label: "2024", value: 4.0, short: "4" },
    { label: "2025", value: 13.0, short: "13" },
    { label: "2026", value: 30.0, short: "30" },
    { label: "2027", value: 60.0, short: "60" },
    { label: "2028", value: 100.0, short: "100" },
  ],
  projectionDec2025: [
    { label: "2025", value: 9.0, short: "9" },
    { label: "2026", value: 32.0, short: "32" },
    { label: "2027", value: 77.0, short: "77" },
    { label: "2028", value: 126.0, short: "126" },
    { label: "2029", value: 174.0, short: "174" },
  ],
  apr2026Actual: [{ label: "2026", value: 30.0, short: "30", note: "Actual on April 6, 2026（用户提供图示）" }],
};

const anthropicMarginSeries = [
  {
    label: "2024",
    revenue: 0.21,
    inference: 0.58,
    margin: -94,
    marginLabel: "-94%",
  },
  {
    label: "2025 Projection\n(as of summer)",
    revenue: 4.5,
    inference: 2.05,
    margin: 50,
    marginLabel: "50%",
  },
  {
    label: "2025 Projection\n(as of mid-Dec.)",
    revenue: 4.35,
    inference: 2.6,
    margin: 40,
    marginLabel: "40%",
  },
];

const anthropicMarginPathSeries = {
  labels: ["2024", "2025", "2026", "2027", "2028"],
  optimistic: [-100, 33, 55, 62, 68],
  conservative: [-100, 33, 50, 60, 66],
  openai: [35, 38, 46, 55, 60],
};

const anthropicFundingRows = [
  {
    date: "2021-05-28",
    type: "Series A",
    amount: 0.124,
    amountLabel: "$124M",
    valuation: "未披露",
    note: "官方披露；Jaan Tallinn 领投。",
    source: "https://www.anthropic.com/news/anthropic-raises-124-million-to-build-more-reliable-general-ai-systems",
    kind: "equity",
  },
  {
    date: "2022-04-29",
    type: "Series B",
    amount: 0.58,
    amountLabel: "$580M",
    valuation: "未披露",
    note: "官方披露；安全与大规模实验基础设施扩张。",
    source: "https://www.anthropic.com/news/anthropic-raises-series-b-to-build-safe-reliable-ai",
    kind: "equity",
  },
  {
    date: "2023-05-23",
    type: "Series C",
    amount: 0.45,
    amountLabel: "$450M",
    valuation: "媒体多报 ~$4.1B",
    note: "官方披露融资额；估值通常见于外部媒体口径。",
    source: "https://www.anthropic.com/news/anthropic-series-c",
    kind: "equity",
  },
  {
    date: "2023-09-25",
    type: "Amazon 战略投资承诺",
    amount: 4.0,
    amountLabel: "Up to $4B",
    valuation: "未披露",
    note: "官方披露；AWS 成为关键基础设施伙伴。",
    source: "https://www.anthropic.com/news/anthropic-amazon",
    kind: "strategic",
  },
  {
    date: "2024-11-22",
    type: "Amazon 追加投资",
    amount: 4.0,
    amountLabel: "Additional $4B",
    valuation: "总投资达 $8B",
    note: "官方披露；总投资升至 $8B，仍为少数股东。",
    source: "https://www.anthropic.com/news/anthropic-amazon-trainium",
    kind: "strategic",
  },
  {
    date: "2025-03-03",
    type: "Series E",
    amount: 3.5,
    amountLabel: "$3.5B",
    valuation: "$61.5B post-money",
    note: "官方披露；Claude 3.7 Sonnet / Claude Code 发布后融资。",
    source: "https://www.anthropic.com/news/anthropic-raises-series-e-at-usd61-5b-post-money-valuation",
    kind: "equity",
  },
  {
    date: "2025-09-02",
    type: "Series F",
    amount: 13.0,
    amountLabel: "$13B",
    valuation: "$183B post-money",
    note: "官方披露；run-rate 从年初约 $1B 增长到 8 月超 $5B。",
    source: "https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation",
    kind: "equity",
  },
  {
    date: "2026-02-12",
    type: "Series G",
    amount: 30.0,
    amountLabel: "$30B",
    valuation: "$380B post-money",
    note: "官方披露；run-rate 达 $14B，刷新 AI 私募融资规模。",
    source: "https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation",
    kind: "equity",
  },
];

const anthropicValuationSeries = anthropicFundingRows
  .map((row) => {
    const match = row.valuation.match(/\$([\d.]+)B/);
    if (!match) {
      return null;
    }
    return {
      date: row.date,
      label: row.date.slice(0, 7),
      type: row.type,
      value: Number(match[1]),
      short: match[1].replace(/\.0$/, ""),
      valuation: row.valuation,
      note: row.note,
      source: row.source,
      kind: row.kind,
    };
  })
  .filter(Boolean);

const openaiRevenueSeries = {
  labels: ["2023", "2024", "2025-07", "2025", "2026-03"],
  actual: [
    { label: "2023", value: 2.0, short: "2", note: "2023 ARR $2B（OpenAI CFO 官方博文）" },
    { label: "2024", value: 6.0, short: "6", note: "2024 ARR $6B（OpenAI CFO 官方博文）" },
    { label: "2025-07", value: 12.0, short: "12", note: "2025-07 annualized revenue $12B（Reuters / The Information）" },
    { label: "2025", value: 20.0, short: "20+", note: "2025 ARR 超过 $20B（OpenAI CFO 官方博文，2026-01）" },
    { label: "2026-03", value: 24.0, short: "24+", note: "按 2026-03 官方“月收入 >$2B”折算，年化 run-rate 超过 $24B（基于官方数字推算）" },
  ],
};

const openaiAnnualForecastSeries = {
  labels: ["2024", "2025", "2026", "2027", "2028", "2029", "2030"],
  winter2025: [4, 13, 30, 54, 80, 125, 174],
  summer2025: [4, 13, 30, 63, 96, 145, 200],
  winter2026: [4, 13, 30, 63, 113, 185, 284],
};

const openaiCostProjectionSeries = {
  labels: ["2024", "2025", "2026", "2027", "2028", "2029", "2030"],
  winter2025: [2, 6, 14, 19, 28, 39, 50],
  summer2025: [2, 7, 14, 22, 33, 44, 56],
  winter2026: [2, 9, 14, 28, 44, 67, 94],
};

const openaiMarginProjectionSeries = {
  labels: ["2024", "2025", "2026", "2027", "2028", "2029", "2030"],
  winter2025: [40, 48, 54, 64, 67, 70, 72],
  summer2025: [40, 46, 54, 64, 67, 70, 72],
  winter2026: [40, 33, 52, 55, 61, 64, 67],
};

const openaiValuationRows = [
  {
    date: "2023-01-05",
    type: "Tender / 二级转让",
    valuation: "$29B",
    note: "Reuters / WSJ：ChatGPT 爆发初期，员工持股转让把估值推到约 $29B。",
    source: "https://www.euronews.com/next/2023/01/05/openai-tender",
    kind: "reported",
  },
  {
    date: "2024-02-16",
    type: "Tender offer",
    valuation: "$80B",
    note: "Reuters：Thrive 领投的 tender 把 OpenAI 估值推到约 $80B。",
    source: "https://www.investing.com/news/stock-market-news/openai-valued-at-80-billion-after-deal-nyt-reports-3306784",
    kind: "reported",
  },
  {
    date: "2024-10-02",
    type: "Funding round",
    valuation: "$157B post-money",
    note: "Reuters / CNBC：正式融资完成，OpenAI 进入 $150B+ 私营公司梯队。",
    source: "https://www.investing.com/news/stock-market-news/openai-closes-66-billion-funding-haul-at-valuation-of-157-billion-with-investment-from-microsoft-and-nvidia-3645659",
    kind: "closed",
  },
  {
    date: "2025-01-29",
    type: "SoftBank 领投谈判",
    valuation: "$300B incl. new money",
    note: "Reuters：新一轮融资谈判中的估值口径，属于媒体报道，并非最终关闭估值。",
    source: "https://www.tradingview.com/news/reuters.com%2C2025%3Anewsml_L3N3OQ1VN%3A0-softbank-in-talks-to-lead-openai-funding-round-at-300-billion-valuation-sources-say/",
    kind: "reported",
  },
  {
    date: "2026-03-31",
    type: "Latest funding round",
    valuation: "$852B post-money",
    note: "OpenAI 官方：关闭 $122B 融资，OpenAI 被市场按基础设施级平台重新定价。",
    source: "https://openai.com/index/accelerating-the-next-phase-ai/",
    kind: "closed",
  },
];

const stProductColors = {
  ChatGPT: "#2e6f5d",
  Gemini: "#3158b0",
  Claude: "#9c6a22",
  Grok: "#1f2528",
  Perplexity: "#8a4fdc",
  Dola: "#a5483f",
};

const stWeeklyData = {
  weeks: [
    "2026/01/04~2026/01/10",
    "2026/01/11~2026/01/17",
    "2026/01/18~2026/01/24",
    "2026/01/25~2026/01/31",
    "2026/02/01~2026/02/07",
    "2026/02/08~2026/02/14",
    "2026/02/15~2026/02/21",
    "2026/02/22~2026/02/28",
    "2026/03/01~2026/03/07",
    "2026/03/08~2026/03/14",
    "2026/03/15~2026/03/21",
    "2026/03/22~2026/03/28",
    "2026/03/29~2026/04/04",
  ],
  overall: {
    ChatGPT: [42269, 42982, 44013, 44009, 44654, 45449, 44557, 45607, 44639, 44361, 43381, 43254, 43443],
    Dola: [917, 1046, 1116, 1248, 1187, 1259, 1199, 1237, 1377, 1701, 1180, 1190, 1072],
    Claude: [262, 277, 302, 314, 364, 400, 466, 591, 843, 959, 1040, 1147, 1203],
    Gemini: [7162, 7414, 7619, 7807, 8081, 8201, 8381, 8678, 8810, 9027, 9034, 9412, 9489],
    Grok: [1159, 1171, 1196, 1148, 1189, 1163, 1208, 1224, 1258, 1272, 1235, 1182, 1137],
    Perplexity: [1058, 1023, 1014, 988, 984, 982, 960, 967, 958, 946, 924, 931, 899],
  },
  countries: {
    PH: {
      ChatGPT: [898, 917, 931, 912, 924, 951, 926, 931, 937, 905, 855, 795, 760],
      Dola: [272, 279, 310, 280, 344, 330, 316, 332, 320, 380, 263, 216, 166],
      Claude: [2, 2, 3, 2, 3, 3, 4, 5, 6, 7, 8, 9, 8],
      Gemini: [139, 149, 160, 155, 163, 175, 176, 186, 192, 190, 184, 175, 165],
      Grok: [12, 13, 10, 9, 10, 11, 11, 12, 12, 13, 11, 11, 10],
      Perplexity: [21, 22, 21, 16, 16, 21, 18, 19, 16, 14, 12, 12, 11],
    },
    ID: {
      ChatGPT: [1879, 2008, 2057, 2095, 2083, 2116, 1931, 2022, 2056, 1939, 1697, 1737, 1926],
      Dola: [266, 344, 373, 458, 398, 378, 334, 345, 436, 573, 319, 283, 295],
      Claude: [14, 14, 15, 17, 16, 18, 18, 22, 37, 41, 39, 44, 49],
      Gemini: [411, 435, 468, 484, 482, 485, 474, 499, 536, 521, 517, 534, 565],
      Grok: [55, 47, 40, 36, 35, 34, 39, 37, 38, 43, 40, 37, 34],
      Perplexity: [40, 40, 37, 38, 35, 34, 36, 37, 37, 36, 31, 36, 34],
    },
    MX: {
      ChatGPT: [1241, 1343, 1388, 1387, 1418, 1505, 1496, 1520, 1486, 1534, 1477, 1479, 1233],
      Dola: [194, 236, 226, 253, 235, 258, 257, 259, 276, 323, 250, 241, 146],
      Claude: [3, 3, 4, 3, 3, 4, 6, 6, 12, 13, 16, 17, 13],
      Gemini: [272, 299, 312, 319, 341, 362, 387, 365, 391, 405, 403, 417, 363],
      Grok: [24, 25, 30, 30, 32, 33, 33, 32, 35, 34, 38, 34, 29],
      Perplexity: [14, 14, 16, 12, 14, 15, 15, 17, 17, 17, 16, 15, 14],
    },
    GB: {
      ChatGPT: [812, 806, 814, 820, 820, 854, 816, 818, 802, 805, 812, 796, 800],
      Dola: [21, 25, 32, 33, 33, 37, 42, 39, 44, 39, 44, 45, 53],
      Claude: [10, 10, 9, 10, 11, 14, 15, 21, 25, 27, 29, 33, 34],
      Gemini: [102, 104, 109, 106, 114, 111, 116, 122, 117, 120, 128, 125, 128],
      Grok: [43, 49, 44, 43, 45, 44, 43, 39, 47, 40, 39, 38, 35],
      Perplexity: [18, 16, 17, 18, 18, 17, 16, 18, 17, 16, 16, 15, 15],
    },
    BR: {
      ChatGPT: [2413, 2478, 2486, 2546, 2566, 2893, 2700, 2769, 2777, 2788, 2851, 2823, 2831],
      Dola: [47, 46, 48, 48, 50, 55, 68, 70, 77, 86, 90, 100, 115],
      Claude: [7, 8, 8, 9, 10, 11, 12, 14, 20, 23, 26, 32, 31],
      Gemini: [437, 450, 462, 465, 472, 485, 483, 502, 515, 531, 546, 568, 558],
      Grok: [44, 47, 50, 52, 54, 52, 53, 60, 56, 58, 60, 53, 52],
      Perplexity: [58, 53, 55, 56, 53, 56, 53, 54, 54, 53, 53, 54, 50],
    },
  },
};

const priceRows = [
  {
    company: "OpenAI",
    model: "GPT-5.5",
    date: "2026-04-23",
    input: 5,
    cached: 0.5,
    output: 30,
    note: "旗舰专业工作与复杂编码模型；长上下文超过 272K 时另有阶梯价。",
    source: "https://openai.com/api/pricing/",
  },
  {
    company: "OpenAI",
    model: "GPT-5.5 pro",
    date: "2026-04-23",
    input: 30,
    cached: null,
    output: 180,
    note: "GPT-5.5 高推理版本，官方说明不提供缓存输入折扣。",
    source: "https://developers.openai.com/api/docs/models/gpt-5.5-pro",
  },
  {
    company: "OpenAI",
    model: "GPT-5.4 pro",
    date: "2026-03-05",
    input: 30,
    cached: null,
    output: 180,
    note: "GPT-5.4 系列的高推理版本，适合最复杂任务；官方模型页仅列输入/输出价。",
    source: "https://developers.openai.com/api/docs/models/gpt-5.4-pro",
  },
  {
    company: "OpenAI",
    model: "GPT-5.4",
    date: "2026-03-05",
    input: 2.5,
    cached: 0.25,
    output: 15,
    note: "更经济的专业工作模型，适合代码、工具调用和电脑使用场景。",
    source: "https://openai.com/api/pricing/",
  },
  {
    company: "OpenAI",
    model: "GPT-5.4 mini",
    date: "2026-03-05",
    input: 0.75,
    cached: 0.075,
    output: 4.5,
    note: "小模型版本，成本更低，适合高频 agent、子任务和批量调用。",
    source: "https://openai.com/api/pricing/",
  },
  {
    company: "OpenAI",
    model: "GPT-5.4 nano",
    date: "2026-03-17",
    input: 0.2,
    cached: 0.02,
    output: 1.25,
    note: "GPT-5.4 低成本版本，适合分类、抽取、排序和高频子任务。",
    source: "https://developers.openai.com/api/docs/models/gpt-5.4-nano/",
  },
  {
    company: "OpenAI",
    model: "GPT-5.2 pro",
    date: "2025-12-11",
    input: 21,
    cached: null,
    output: 168,
    note: "GPT-5.2 的高推理版本，官方模型页仅列输入/输出价。",
    source: "https://developers.openai.com/api/docs/models/gpt-5.2-pro",
  },
  {
    company: "OpenAI",
    model: "GPT-5.2",
    date: "2025-12-11",
    input: 1.75,
    cached: 0.175,
    output: 14,
    note: "上一代专业工作 frontier 模型，支持可配置 reasoning effort。",
    source: "https://developers.openai.com/api/docs/models/gpt-5.2",
  },
  {
    company: "OpenAI",
    model: "GPT-5.2-Codex",
    date: "2025-12-11",
    input: 1.75,
    cached: 0.175,
    output: 14,
    note: "面向长程 agentic coding 的 GPT-5.2 变体，价格与 GPT-5.2 相同。",
    source: "https://developers.openai.com/api/docs/models/gpt-5.2-codex",
  },
  {
    company: "OpenAI",
    model: "GPT-5.1",
    date: "2025-11-13",
    input: 1.25,
    cached: 0.125,
    output: 10,
    note: "面向编码和 agentic 任务的上一代主力模型，支持 none 到 high 推理强度。",
    source: "https://developers.openai.com/api/docs/models/gpt-5.1",
  },
  {
    company: "OpenAI",
    model: "GPT-5.1 Codex",
    date: "2025-11-13",
    input: 1.25,
    cached: 0.125,
    output: 10,
    note: "GPT-5.1 的编码专用版本，面向 Codex 和类似代码 agent 场景。",
    source: "https://developers.openai.com/api/docs/models/gpt-5.1-codex",
  },
  {
    company: "OpenAI",
    model: "GPT-5.1 Codex mini",
    date: "2025-11-13",
    input: 0.25,
    cached: 0.025,
    output: 2,
    note: "更低成本的 Codex 版本，适合高频代码子任务。",
    source: "https://developers.openai.com/api/docs/models/gpt-5.1-codex-mini",
  },
  {
    company: "OpenAI",
    model: "GPT-5",
    date: "2025-08-07",
    input: 1.25,
    cached: 0.125,
    output: 10,
    note: "GPT-5 主模型，统一快速回答与深度推理路由，是 GPT-5.1 之前的主力。",
    source: "https://developers.openai.com/api/docs/models/gpt-5",
  },
  {
    company: "OpenAI",
    model: "GPT-5 pro",
    date: "2025-10-06",
    input: 15,
    cached: null,
    output: 120,
    note: "GPT-5 高推理版本，官方模型页仅列输入/输出价。",
    source: "https://developers.openai.com/api/docs/models/gpt-5-pro",
  },
  {
    company: "OpenAI",
    model: "GPT-5 mini",
    date: "2025-08-07",
    input: 0.25,
    cached: 0.025,
    output: 2,
    note: "GPT-5 的高性价比版本，适合低延迟、高吞吐工作负载。",
    source: "https://developers.openai.com/api/docs/models/gpt-5-mini",
  },
  {
    company: "OpenAI",
    model: "GPT-5 nano",
    date: "2025-08-07",
    input: 0.05,
    cached: 0.005,
    output: 0.4,
    note: "GPT-5 系列最低成本版本，适合摘要、分类和简单抽取。",
    source: "https://developers.openai.com/api/docs/models/gpt-5-nano",
  },
  {
    company: "OpenAI",
    model: "o3",
    date: "2025-04-16",
    input: 2,
    cached: 0.5,
    output: 8,
    note: "上一代强推理模型，官方标注已由 GPT-5 接替。",
    source: "https://developers.openai.com/api/docs/models/o3",
  },
  {
    company: "OpenAI",
    model: "o4-mini",
    date: "2025-04-16",
    input: 1.1,
    cached: 0.275,
    output: 4.4,
    note: "小型 o 系列推理模型，官方标注已由 GPT-5 mini 接替。",
    source: "https://developers.openai.com/api/docs/models/o4-mini",
  },
  {
    company: "OpenAI",
    model: "GPT-4.1",
    date: "2025-04-14",
    input: 2,
    cached: 0.5,
    output: 8,
    note: "非 reasoning 的强指令跟随模型，支持 1M 上下文和工具调用。",
    source: "https://developers.openai.com/api/docs/models/gpt-4.1",
  },
  {
    company: "OpenAI",
    model: "GPT-4.1 mini",
    date: "2025-04-14",
    input: 0.4,
    cached: 0.1,
    output: 1.6,
    note: "GPT-4.1 的小模型版本，成本更低，适合稳定工具调用和轻量任务。",
    source: "https://developers.openai.com/api/docs/models/gpt-4.1-mini",
  },
  {
    company: "OpenAI",
    model: "GPT-4.1 nano",
    date: "2025-04-14",
    input: 0.1,
    cached: 0.025,
    output: 0.4,
    note: "GPT-4.1 系列最低成本版本，适合极高频简单任务。",
    source: "https://developers.openai.com/api/docs/models/gpt-4.1-nano",
  },
  {
    company: "OpenAI",
    model: "GPT-4o",
    date: "2024-05-13",
    input: 2.5,
    cached: 1.25,
    output: 10,
    note: "上一代 omni 旗舰文本/视觉模型，官方模型页仍列出价格。",
    source: "https://developers.openai.com/api/docs/models/gpt-4o",
  },
  {
    company: "OpenAI",
    model: "GPT-4o mini",
    date: "2024-07-18",
    input: 0.15,
    cached: 0.075,
    output: 0.6,
    note: "轻量 omni 模型，适合聚焦任务、蒸馏和低成本批量调用。",
    source: "https://developers.openai.com/api/docs/models/gpt-4o-mini",
  },
  {
    company: "OpenAI",
    model: "GPT-4",
    date: "2023-03-14",
    input: 30,
    cached: null,
    output: 60,
    note: "早期高智能 GPT 模型，官方模型页仍列出 Chat Completions 可用价格。",
    source: "https://developers.openai.com/api/docs/models/gpt-4",
  },
  {
    company: "Anthropic",
    model: "Claude Opus 4.7",
    date: "2026-04-16",
    input: 5,
    cached: 0.5,
    output: 25,
    note: "Anthropic 最新 Opus，面向复杂推理、编码、视觉和长程 agent。",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    company: "Anthropic",
    model: "Claude Opus 4.6",
    date: "2026-02-05",
    input: 5,
    cached: 0.5,
    output: 25,
    note: "Opus 4.7 前一代 Opus，Anthropic 价格页仍列标准与缓存价格。",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    company: "Anthropic",
    model: "Claude Opus 4.5",
    date: "2025-11-24",
    input: 5,
    cached: 0.5,
    output: 25,
    note: "面向编码、agents、computer use 和企业工作流的上一代 Opus。",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    company: "Anthropic",
    model: "Claude Opus 4.1",
    date: "2025-08-05",
    input: 15,
    cached: 1.5,
    output: 75,
    note: "早期 Opus 4 系列高端模型，价格明显高于 4.5 之后的 Opus。",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    company: "Anthropic",
    model: "Claude Opus 4",
    date: "2025-05-22",
    input: 15,
    cached: 1.5,
    output: 75,
    note: "Claude 4 家族首个 Opus，价格页仍保留历史价。",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    company: "Anthropic",
    model: "Claude Sonnet 4.6",
    date: "2026-02-05",
    input: 3,
    cached: 0.3,
    output: 15,
    note: "均衡型主力模型，成本和能力之间更适合生产级大规模调用。",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    company: "Anthropic",
    model: "Claude Sonnet 4.5",
    date: "2025-09-29",
    input: 3,
    cached: 0.3,
    output: 15,
    note: "上一代 Sonnet 主力，强调编码、复杂 agents 与 computer use。",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    company: "Anthropic",
    model: "Claude Sonnet 4",
    date: "2025-05-22",
    input: 3,
    cached: 0.3,
    output: 15,
    note: "Claude 4 家族的均衡模型，价格与后续 Sonnet 4.5/4.6 一致。",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    company: "Anthropic",
    model: "Claude Sonnet 3.7",
    date: "2025-02-24",
    input: 3,
    cached: 0.3,
    output: 15,
    note: "Anthropic 首个混合推理 Claude，价格页标注为 deprecated。",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    company: "Anthropic",
    model: "Claude Haiku 4.5",
    date: "2025-10-15",
    input: 1,
    cached: 0.1,
    output: 5,
    note: "低延迟、低成本模型，适合客服、分类、抽取和轻量编码任务。",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    company: "Anthropic",
    model: "Claude Haiku 3.5",
    date: "2024-10-22",
    input: 0.8,
    cached: 0.08,
    output: 4,
    note: "Haiku 4.5 前一代小模型，适合低延迟工作流。",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    company: "Anthropic",
    model: "Claude Haiku 3",
    date: "2024-03-07",
    input: 0.25,
    cached: 0.03,
    output: 1.25,
    note: "Claude 3 家族小模型，价格页仍保留历史价。",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    company: "Anthropic",
    model: "Claude Opus 3",
    date: "2024-03-04",
    input: 15,
    cached: 1.5,
    output: 75,
    note: "Claude 3 家族旗舰，价格页标注为 deprecated。",
    source: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    company: "Google",
    model: "Gemini 3 Pro Preview <=200K",
    date: "2025-11-18",
    input: 2,
    cached: 0.2,
    output: 12,
    note: "Gemini 3 Pro 标准上下文价格，覆盖文本、图像、视频和音频输入。",
    source: "https://cloud.google.com/vertex-ai/generative-ai/pricing",
  },
  {
    company: "Google",
    model: "Gemini 3 Pro Preview >200K",
    date: "2025-11-18",
    input: 4,
    cached: 0.4,
    output: 18,
    note: "超 200K 输入 token 的阶梯价格，适合长文档和长上下文任务估算。",
    source: "https://cloud.google.com/vertex-ai/generative-ai/pricing",
  },
  {
    company: "Google",
    model: "Gemini 3 Flash Preview",
    date: "2025-12-17",
    input: 0.5,
    cached: 0.05,
    output: 3,
    note: "轻量高速模型，文本/图像/视频输入同价；音频输入按 $1/1M tokens。",
    source: "https://cloud.google.com/vertex-ai/generative-ai/pricing",
  },
  {
    company: "Google",
    model: "Gemini 2.5 Pro <=200K",
    date: "2025-06-17",
    input: 1.25,
    cached: 0.125,
    output: 10,
    note: "Gemini 2.5 Pro 稳定版标准上下文价格，覆盖文本、图像、视频和音频输入。",
    source: "https://cloud.google.com/vertex-ai/generative-ai/pricing",
  },
  {
    company: "Google",
    model: "Gemini 2.5 Pro >200K",
    date: "2025-06-17",
    input: 2.5,
    cached: 0.25,
    output: 15,
    note: "Gemini 2.5 Pro 长上下文阶梯价，超过 200K 输入 token 时适用。",
    source: "https://cloud.google.com/vertex-ai/generative-ai/pricing",
  },
  {
    company: "Google",
    model: "Gemini 2.5 Flash",
    date: "2025-06-17",
    input: 0.3,
    cached: 0.03,
    output: 2.5,
    note: "Gemini 2.5 Flash 稳定版，主打价格、速度和性能平衡；音频输入另计。",
    source: "https://cloud.google.com/vertex-ai/generative-ai/pricing",
  },
  {
    company: "Google",
    model: "Gemini 2.5 Flash-Lite",
    date: "2025-07-22",
    input: 0.1,
    cached: 0.01,
    output: 0.4,
    note: "Gemini 2.5 家族最低成本版本，适合分类、翻译和智能路由。",
    source: "https://cloud.google.com/vertex-ai/generative-ai/pricing",
  },
  {
    company: "Google",
    model: "Gemini 2.0 Flash",
    date: "2024-12-11",
    input: 0.15,
    cached: null,
    output: 0.6,
    note: "Vertex AI token 价格；Google AI Studio/Gemini API 口径可能不同。",
    source: "https://cloud.google.com/vertex-ai/generative-ai/pricing",
  },
  {
    company: "Google",
    model: "Gemini 2.0 Flash-Lite",
    date: "2025-02-05",
    input: 0.075,
    cached: null,
    output: 0.3,
    note: "Gemini 2.0 系列最低成本版本，Vertex AI 价格页仍列出。",
    source: "https://cloud.google.com/vertex-ai/generative-ai/pricing",
  },
  {
    company: "DeepSeek",
    model: "deepseek-v4-flash",
    date: "2026-05-07",
    input: 0.14,
    cached: 0.028,
    output: 0.28,
    note: "DeepSeek 当前主力 Flash 模型，1M 上下文；官方价为 USD。",
    source: "https://api-docs.deepseek.com/quick_start/pricing",
  },
  {
    company: "DeepSeek",
    model: "deepseek-v4-pro",
    date: "2026-05-07",
    input: 1.74,
    cached: 0.145,
    output: 3.48,
    note: "DeepSeek V4 Pro，价格高于 Flash，面向更强复杂推理与长上下文任务。",
    source: "https://api-docs.deepseek.com/quick_start/pricing",
  },
  {
    company: "DeepSeek",
    model: "deepseek-chat",
    date: "2025-12-01",
    input: 0.28,
    cached: 0.028,
    output: 0.42,
    note: "兼容模型名，对应 DeepSeek-V3.2 非思考模式；官方说明后续会废弃旧别名。",
    source: "https://api-docs.deepseek.com/quick_start/pricing",
  },
  {
    company: "DeepSeek",
    model: "deepseek-reasoner",
    date: "2025-12-01",
    input: 0.28,
    cached: 0.028,
    output: 0.42,
    note: "兼容模型名，对应 DeepSeek-V3.2 思考模式；按官方当前兼容价展示。",
    source: "https://api-docs.deepseek.com/quick_start/pricing",
  },
  {
    company: "豆包",
    model: "Doubao-Seed-2.0-pro [0,32K]",
    date: "2026-02-14",
    input: 0.889,
    cached: null,
    output: 4.444,
    note: "官方人民币价：输入 ¥6.4、输出 ¥32；此处按汇率 7.20 折 USD。",
    source: "https://www.volcengine.com/docs/85010/2137658",
  },
  {
    company: "豆包",
    model: "Doubao-Seed-2.0-lite [0,32K]",
    date: "2026-02-14",
    input: 0.167,
    cached: null,
    output: 1,
    note: "官方人民币价：输入 ¥1.2、输出 ¥7.2；适合更高性价比的全模态理解任务。",
    source: "https://www.volcengine.com/docs/85010/2137658",
  },
  {
    company: "豆包",
    model: "Doubao-Seed-1.6 [0,32K]",
    date: "2025-06-11",
    input: 0.222,
    cached: null,
    output: 2.222,
    note: "官方人民币价：输入 ¥1.6、常规输出 ¥16；短输出档另有更低输出价。",
    source: "https://www.volcengine.com/docs/85010/2137658",
  },
  {
    company: "豆包",
    model: "doubao-seed-code [0,32K]",
    date: "2025-11-11",
    input: 0.167,
    cached: 0.033,
    output: 1.111,
    note: "官方人民币价：输入 ¥1.2、缓存命中 ¥0.24、输出 ¥8；面向编程任务。",
    source: "https://www.volcengine.com/docs/82379/1949118?lang=zh",
  },
  {
    company: "千问",
    model: "qwen3-max [0,32K]",
    date: "2026-01-23",
    input: 1.2,
    cached: null,
    output: 6,
    note: "阿里云 Model Studio 国际站价格；更长输入区间有阶梯价。",
    source: "https://www.alibabacloud.com/help/doc-detail/2987148.html",
  },
  {
    company: "千问",
    model: "qwen3-coder-plus [0,32K]",
    date: "2025-09-23",
    input: 1,
    cached: 0.2,
    output: 5,
    note: "官方国际站价格；隐式缓存为输入价 20%，显式缓存为输入价 10%。",
    source: "https://www.alibabacloud.com/help/doc-detail/2840914.html",
  },
  {
    company: "千问",
    model: "qwen3-coder-flash [0,32K]",
    date: "2025-07-28",
    input: 0.3,
    cached: 0.06,
    output: 1.5,
    note: "Coder Flash 基础档价格；更长输入区间会进入更高阶梯。",
    source: "https://www.alibabacloud.com/help/doc-detail/2840914.html",
  },
  {
    company: "千问",
    model: "qwen-plus non-thinking [0,128K]",
    dateLabel: "官方在售",
    input: 0.115,
    cached: null,
    output: 0.287,
    note: "阿里云 Model Studio 国际站 Global 价格；thinking 模式输出价更高。",
    source: "https://www.alibabacloud.com/help/en/model-studio/getting-started/models",
  },
  {
    company: "腾讯",
    model: "Tencent HY 2.0 Think [0,32K]",
    date: "2025-11-09",
    input: 0.552,
    cached: null,
    output: 2.208,
    note: "官方人民币价：输入 ¥3.975、输出 ¥15.9；长输入区间另有阶梯价。",
    source: "https://cloud.tencent.com/document/product/1729/97731",
  },
  {
    company: "腾讯",
    model: "Tencent HY 2.0 Instruct [0,32K]",
    date: "2025-11-11",
    input: 0.442,
    cached: null,
    output: 1.104,
    note: "官方人民币价：输入 ¥3.18、输出 ¥7.95；适合快速响应场景。",
    source: "https://cloud.tencent.com/document/product/1729/97731",
  },
  {
    company: "腾讯",
    model: "Hunyuan-T1",
    date: "2025-03-21",
    input: 0.139,
    cached: null,
    output: 0.556,
    note: "官方人民币价：输入 ¥1、输出 ¥4；混元推理模型。",
    source: "https://cloud.tencent.com/document/product/1729/97731",
  },
  {
    company: "腾讯",
    model: "Hunyuan-TurboS",
    date: "2025-03-13",
    input: 0.111,
    cached: null,
    output: 0.278,
    note: "官方人民币价：输入 ¥0.8、输出 ¥2；高性价比文本模型。",
    source: "https://cloud.tencent.com/document/product/1729/97731",
  },
  {
    company: "MiniMax",
    model: "MiniMax-M2.7",
    date: "2026-03-18",
    input: 0.3,
    cached: 0.06,
    output: 1.2,
    note: "MiniMax Pay as You Go 价格，支持 prompt caching read/write。",
    source: "https://platform.minimax.io/docs/guides/pricing-paygo",
  },
  {
    company: "MiniMax",
    model: "MiniMax-M2.7-highspeed",
    date: "2026-03-18",
    input: 0.6,
    cached: 0.06,
    output: 2.4,
    note: "高速版价格，输入/输出约为标准版两倍，缓存读取价与标准版一致。",
    source: "https://platform.minimax.io/docs/guides/pricing-paygo",
  },
  {
    company: "MiniMax",
    model: "MiniMax-M2.5",
    date: "2026-02-12",
    input: 0.3,
    cached: 0.03,
    output: 1.2,
    note: "M2.5 标准版，缓存读取价低于 M2.7。",
    source: "https://platform.minimax.io/docs/guides/pricing-paygo",
  },
  {
    company: "MiniMax",
    model: "MiniMax-M1",
    dateLabel: "历史模型",
    input: 0.4,
    cached: null,
    output: 2.2,
    note: "MiniMax 历史模型价格页仍可查；输入超过 200K 时另有高阶梯价。",
    source: "https://platform.minimax.io/docs/faq/history-modelinfo",
  },
  {
    company: "智谱",
    model: "GLM-4.6",
    date: "2025-09-30",
    input: 0.6,
    cached: 0.11,
    output: 2.2,
    note: "智谱模型文档列能力；价格采用公开 Z.ai/模型价格页口径，后续可再接官方价格页细项。",
    source: "https://docs.bigmodel.cn/cn/guide/models/text/glm-4.6",
  },
  {
    company: "智谱",
    model: "GLM-4.6V",
    date: "2025-12-08",
    input: 0.3,
    cached: null,
    output: 0.9,
    note: "多模态版本，支持图像、视频、文件输入；官网模型页提示价格见价格界面。",
    source: "https://docs.bigmodel.cn/cn/guide/models/vlm/glm-4.6v",
  },
  {
    company: "智谱",
    model: "GLM-4.5-Air",
    date: "2025-07-25",
    input: 0.5,
    cached: null,
    output: 1.5,
    note: "GLM-4.5 系列轻量版，作为历史价格对比项保留。",
    source: "https://docs.bigmodel.cn/cn/guide/start/migrate-to-glm-4.6",
  },
];

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function formatPrice(value) {
  if (value == null) {
    return "-";
  }

  const currency = currencySelect?.value || "USD";
  const rate = Number(fxRate?.value) || 7.2;
  const amount = currency === "RMB" ? value * rate : value;
  const symbol = currency === "RMB" ? "¥" : "$";
  const decimals = amount < 1 ? 3 : 2;
  const pretty = amount
    .toFixed(decimals)
    .replace(/\.?0+$/, "");

  return `${symbol}${pretty}`;
}

function renderPriceCell(value, maxValue) {
  if (value == null) {
    return '<span class="price-missing">-</span>';
  }

  const width = maxValue ? Math.max(4, Math.round((value / maxValue) * 100)) : 0;
  return `
    <div class="price-bar-cell">
      <span class="price-bar" style="width: ${width}%"></span>
      <span class="price-value">${formatPrice(value)}</span>
    </div>
  `;
}

function getPriceDate(row) {
  return row.dateLabel || formatDate(row.date);
}

function escapeText(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getPriceMetric() {
  return priceMetricInputs.find((input) => input.checked)?.value || "input";
}

function getFilteredPriceRows() {
  return priceRows.filter((row) => !selectedPriceCompanies.size || selectedPriceCompanies.has(row.company));
}

function setupPriceCompanyFilter() {
  if (!chartCompanyChips) {
    return;
  }

  const companies = [...new Set(priceRows.map((row) => row.company))].sort((a, b) => a.localeCompare(b, "zh-CN"));
  chartCompanyChips.innerHTML = [
    '<button class="chart-company-chip is-active" type="button" data-company="all" style="--chip-color: #5f6569">全部</button>',
    ...companies.map(
      (company) =>
        `<button class="chart-company-chip" type="button" data-company="${escapeText(company)}" style="--chip-color: ${companyColors[company] || "#5f6569"}">${escapeText(company)}</button>`,
    ),
  ].join("");

  chartCompanyChips.querySelectorAll(".chart-company-chip").forEach((button) => {
    button.addEventListener("click", () => {
      const company = button.dataset.company;
      if (company === "all") {
        selectedPriceCompanies.clear();
      } else if (selectedPriceCompanies.has(company)) {
        selectedPriceCompanies.delete(company);
      } else {
        selectedPriceCompanies.add(company);
      }
      chartView = null;
      hideChartTooltip();
      updatePriceCompanyChips();
      renderPriceChart();
      renderPriceTable();
    });
  });

  updatePriceCompanyChips();
}

function updatePriceCompanyChips() {
  chartCompanyChips?.querySelectorAll(".chart-company-chip").forEach((button) => {
    const company = button.dataset.company;
    const isAll = company === "all";
    const isActive = isAll ? !selectedPriceCompanies.size : selectedPriceCompanies.has(company);
    button.classList.toggle("is-active", isActive);
    button.classList.toggle("is-muted", !isAll && selectedPriceCompanies.size > 0 && !isActive);
  });
}

function getChartCoordinates(event) {
  const rect = priceChart.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * 860,
    y: ((event.clientY - rect.top) / rect.height) * 300,
  };
}

function getChartPointId(row) {
  return `${row.company}::${row.model}::${row.date || row.dateLabel || ""}`;
}

function formatUsdPrice(value) {
  return `$${value < 1 ? value.toFixed(3).replace(/\.?0+$/, "") : value.toFixed(2).replace(/\.?0+$/, "")}`;
}

function hideCommercialTooltip() {
  selectedCommercialPointId = null;
  commercialChartTooltip.hidden = true;
  commercialChartTooltip.innerHTML = "";
  document
    .querySelectorAll(".commercial-chart-point.is-active")
    .forEach((node) => node.classList.remove("is-active"));
}

function registerCommercialPoint({ chartKey, seriesLabel, label, valueText, note, color }) {
  const id = `${chartKey}::${seriesLabel}::${label}`;
  commercialPointRegistry.set(id, { seriesLabel, label, valueText, note, color });
  return id;
}

function setCommercialPointSelection(pointId) {
  selectedCommercialPointId = pointId;
  document.querySelectorAll(".commercial-chart-point").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.commercialPointId === pointId);
  });
}

function showCommercialTooltip(pointId, target) {
  const point = commercialPointRegistry.get(pointId);
  if (!point || !target) {
    return;
  }

  setCommercialPointSelection(pointId);
  commercialChartTooltip.hidden = false;
  commercialChartTooltip.style.setProperty("--tooltip-color", point.color || "#315f8f");
  commercialChartTooltip.innerHTML = `
    <div class="tooltip-head">
      <span class="tooltip-company">${escapeText(point.seriesLabel)}</span>
      <button class="tooltip-close" type="button" aria-label="关闭">×</button>
    </div>
    <div class="tooltip-model">${escapeText(point.label)}</div>
    <div class="tooltip-meta">
      <span>数值：<strong class="tooltip-price">${escapeText(point.valueText)}</strong></span>
      ${point.note ? `<span>${escapeText(point.note)}</span>` : ""}
    </div>
  `;

  const rect = target.getBoundingClientRect();
  const tooltipWidth = 280;
  const tooltipHeight = point.note ? 146 : 110;
  const maxLeft = window.innerWidth - tooltipWidth - 12;
  const maxTop = window.innerHeight - tooltipHeight - 12;
  const left = Math.min(maxLeft, Math.max(12, rect.left + rect.width / 2 - tooltipWidth / 2));
  const top = Math.min(maxTop, Math.max(12, rect.top - tooltipHeight - 10));
  commercialChartTooltip.style.left = `${left}px`;
  commercialChartTooltip.style.top = `${top}px`;
  commercialChartTooltip.querySelector(".tooltip-close")?.addEventListener("click", hideCommercialTooltip);
}

function showCommercialHtmlTooltip({ title, label, html, color = "#315f8f", width = 340 }, target) {
  if (!target) {
    return;
  }

  selectedCommercialPointId = null;
  document
    .querySelectorAll(".commercial-chart-point.is-active")
    .forEach((node) => node.classList.remove("is-active"));

  commercialChartTooltip.hidden = false;
  commercialChartTooltip.style.setProperty("--tooltip-color", color);
  commercialChartTooltip.innerHTML = `
    <div class="tooltip-head">
      <span class="tooltip-company">${escapeText(title)}</span>
      <button class="tooltip-close" type="button" aria-label="关闭">×</button>
    </div>
    <div class="tooltip-model">${escapeText(label)}</div>
    <div class="tooltip-meta tooltip-meta-rich">${html}</div>
  `;

  const rect = target.getBoundingClientRect();
  const tooltipHeight = 220;
  const maxLeft = window.innerWidth - width - 12;
  const maxTop = window.innerHeight - tooltipHeight - 12;
  const left = Math.min(maxLeft, Math.max(12, rect.left + rect.width / 2 - width / 2));
  const top = Math.min(maxTop, Math.max(12, rect.top - tooltipHeight - 10));
  commercialChartTooltip.style.left = `${left}px`;
  commercialChartTooltip.style.top = `${top}px`;
  commercialChartTooltip.querySelector(".tooltip-close")?.addEventListener("click", hideCommercialTooltip);
}

function attachCommercialPointInteractions(svg) {
  if (!svg) {
    return;
  }

  svg.querySelectorAll(".commercial-chart-point").forEach((node) => {
    node.addEventListener("click", (event) => {
      event.stopPropagation();
      showCommercialTooltip(node.dataset.commercialPointId, node);
    });
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showCommercialTooltip(node.dataset.commercialPointId, node);
      }
    });
  });
}

function hideChartTooltip() {
  selectedChartPoint = null;
  if (chartTooltip) {
    chartTooltip.hidden = true;
    chartTooltip.innerHTML = "";
  }
}

function showChartTooltip(row, x, y, metricLabel) {
  if (!chartTooltip) {
    return;
  }

  const color = companyColors[row.company] || "#5f6569";
  const price = row[getPriceMetric()];
  selectedChartPoint = { id: getChartPointId(row), x, y };
  chartTooltip.hidden = false;
  chartTooltip.style.setProperty("--tooltip-color", color);
  chartTooltip.innerHTML = `
    <div class="tooltip-head">
      <span class="tooltip-company">${escapeText(row.company)}</span>
      <button class="tooltip-close" type="button" aria-label="关闭">×</button>
    </div>
    <div class="tooltip-model">${escapeText(row.model)}</div>
    <div class="tooltip-meta">
      <span>发布时间：${escapeText(formatDate(row.date))}</span>
      <span>${metricLabel}：<strong class="tooltip-price">${formatUsdPrice(price)}</strong> / 1M tokens</span>
    </div>
  `;

  const card = chartTooltip.closest(".price-chart-card");
  const maxLeft = Math.max(12, (card?.clientWidth || 300) - 272);
  const maxTop = Math.max(12, (card?.clientHeight || 260) - 138);
  const left = Math.min(maxLeft, Math.max(12, (x / 860) * (card?.clientWidth || 860) + 12));
  const top = Math.min(maxTop, Math.max(12, (y / 300) * (card?.clientHeight || 300) - 18));
  chartTooltip.style.left = `${left}px`;
  chartTooltip.style.top = `${top}px`;
  chartTooltip.querySelector(".tooltip-close")?.addEventListener("click", hideChartTooltip);
}

function renderPriceChart() {
  if (!priceChart || !priceChartMeta) {
    return;
  }

  const metric = getPriceMetric();
  const metricLabel = metric === "input" ? "输入价格" : "输出价格";
  const chartRows = getFilteredPriceRows()
    .filter((row) => row.date && row[metric] > 0)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  if (!chartRows.length) {
    priceChart.innerHTML = '<text class="chart-empty" x="430" y="150" text-anchor="middle">暂无可用于绘图的发布时间数据</text>';
    priceChartMeta.textContent = "图表只展示有明确发布时间的模型；“官方在售”等无日期条目仍保留在下方表格。";
    return;
  }

  const width = 860;
  const height = 300;
  const margin = { top: 24, right: 24, bottom: 46, left: 62 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const dates = chartRows.map((row) => new Date(`${row.date}T00:00:00`).getTime());
  const values = chartRows.map((row) => row[metric]);
  const baseView = {
    minDate: Math.min(...dates),
    maxDate: Math.max(...dates),
    logMin: Math.log10(Math.max(0.001, Math.min(...values) * 0.8)),
    logMax: Math.log10(Math.max(...values) * 1.15),
  };
  if (!chartView) {
    chartView = { ...baseView };
  }
  const minDate = chartView.minDate;
  const maxDate = chartView.maxDate;
  const dateSpan = Math.max(1, maxDate - minDate);
  const logMin = chartView.logMin;
  const logMax = chartView.logMax;
  const logSpan = Math.max(0.001, logMax - logMin);
  const xFor = (date) => margin.left + ((date - minDate) / dateSpan) * plotWidth;
  const yFor = (value) => margin.top + (1 - (Math.log10(value) - logMin) / logSpan) * plotHeight;
  const yTicks = [10 ** logMin, 10 ** ((logMin + logMax) / 2), 10 ** logMax];
  const xTicks = [0, 0.33, 0.66, 1].map((ratio) => minDate + ratio * dateSpan);
  const formatUsd = (value) => `$${value < 1 ? value.toFixed(3).replace(/\.?0+$/, "") : value.toFixed(2).replace(/\.?0+$/, "")}`;
  const formatYearMonth = (time) => {
    const date = new Date(time);
    return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, "0")}`;
  };

  const grid = yTicks
    .map((value) => {
      const y = yFor(value);
      return `
        <line class="chart-grid" x1="${margin.left}" x2="${width - margin.right}" y1="${y}" y2="${y}"></line>
        <text class="chart-label" x="${margin.left - 10}" y="${y + 4}" text-anchor="end">${formatUsd(value)}</text>
      `;
    })
    .join("");

  const xLabels = xTicks
    .map((time) => {
      const x = xFor(time);
      return `
        <line class="chart-grid" x1="${x}" x2="${x}" y1="${margin.top}" y2="${height - margin.bottom}"></line>
        <text class="chart-label" x="${x}" y="${height - 18}" text-anchor="middle">${formatYearMonth(time)}</text>
      `;
    })
    .join("");

  const points = chartRows
    .map((row) => {
      const x = xFor(new Date(`${row.date}T00:00:00`).getTime());
      const y = yFor(row[metric]);
      const color = companyColors[row.company] || "#5f6569";
      const hidden = x < margin.left || x > width - margin.right || y < margin.top || y > height - margin.bottom;
      const pointId = getChartPointId(row);
      return `
        <circle class="chart-dot${hidden ? " is-dim" : ""}" cx="${x}" cy="${y}" r="5.2" fill="${color}" data-point-id="${escapeText(pointId)}">
          <title>${escapeText(`${row.company} · ${row.model} · ${formatDate(row.date)} · ${metricLabel} ${formatUsd(row[metric])}/1M tokens`)}</title>
        </circle>
      `;
    })
    .join("");

  priceChart.innerHTML = `
    ${grid}
    ${xLabels}
    <line class="chart-axis" x1="${margin.left}" x2="${margin.left}" y1="${margin.top}" y2="${height - margin.bottom}"></line>
    <line class="chart-axis" x1="${margin.left}" x2="${width - margin.right}" y1="${height - margin.bottom}" y2="${height - margin.bottom}"></line>
    <text class="chart-label" x="${margin.left}" y="${height - 4}">发布时间</text>
    <text class="chart-label" x="${margin.left - 48}" y="${margin.top - 8}">${metricLabel} USD</text>
    ${points}
  `;

  priceChartMeta.textContent = `${metricLabel}，单位 USD/1M tokens；纵轴为对数刻度。可在图内点击公司筛选，拖拽平移，滚轮缩放，双击或点“重置视图”回到全局。`;

  if (selectedChartPoint) {
    const activeRow = chartRows.find((row) => getChartPointId(row) === selectedChartPoint.id);
    if (activeRow) {
      showChartTooltip(
        activeRow,
        xFor(new Date(`${activeRow.date}T00:00:00`).getTime()),
        yFor(activeRow[metric]),
        metricLabel,
      );
    } else {
      hideChartTooltip();
    }
  }

  priceChart.querySelectorAll(".chart-dot").forEach((dot) => {
    dot.addEventListener("click", (event) => {
      event.stopPropagation();
      const pointId = dot.dataset.pointId;
      const row = getFilteredPriceRows().find((item) => getChartPointId(item) === pointId);
      if (!row) {
        hideChartTooltip();
        return;
      }

      showChartTooltip(row, Number(dot.getAttribute("cx")), Number(dot.getAttribute("cy")), metricLabel);
    });
  });
}

function renderPriceTable() {
  if (!priceTableBody) {
    return;
  }

  const rows = getFilteredPriceRows();
  const maxInput = Math.max(...rows.map((row) => row.input || 0));
  const maxOutput = Math.max(...rows.map((row) => row.output || 0));

  priceTableBody.innerHTML = rows
    .map(
      (row) => `
        <tr>
          <td><span class="company-pill">${row.company}</span></td>
          <td class="model-cell">${row.model}</td>
          <td>${getPriceDate(row)}</td>
          <td class="price-number">${renderPriceCell(row.input, maxInput)}</td>
          <td class="price-number">${formatPrice(row.cached)}</td>
          <td class="price-number">${renderPriceCell(row.output, maxOutput)}</td>
          <td class="price-note-cell">
            <span>${row.note}</span>
            <a href="${row.source}" target="_blank" rel="noreferrer">官方价格</a>
          </td>
        </tr>
      `,
    )
    .join("");
}

function resetPriceChartView() {
  chartView = null;
  hideChartTooltip();
  renderPriceChart();
}

function setupPriceChartInteractions() {
  if (!priceChart) {
    return;
  }

  priceChart.addEventListener("pointerdown", (event) => {
    if (event.target?.closest?.(".chart-dot")) {
      return;
    }

    if (!chartView) {
      renderPriceChart();
    }

    priceChart.setPointerCapture(event.pointerId);
    priceChart.classList.add("is-dragging");
    chartDrag = {
      x: event.clientX,
      y: event.clientY,
      view: { ...chartView },
    };
  });

  priceChart.addEventListener("pointermove", (event) => {
    if (!chartDrag) {
      return;
    }

    const rect = priceChart.getBoundingClientRect();
    const dx = ((event.clientX - chartDrag.x) / rect.width) * 860;
    const dy = ((event.clientY - chartDrag.y) / rect.height) * 300;
    const margin = { top: 24, right: 24, bottom: 46, left: 62 };
    const plotWidth = 860 - margin.left - margin.right;
    const plotHeight = 300 - margin.top - margin.bottom;
    const dateSpan = chartDrag.view.maxDate - chartDrag.view.minDate;
    const logSpan = chartDrag.view.logMax - chartDrag.view.logMin;
    const dateShift = -(dx / plotWidth) * dateSpan;
    const logShift = (dy / plotHeight) * logSpan;

    chartView = {
      minDate: chartDrag.view.minDate + dateShift,
      maxDate: chartDrag.view.maxDate + dateShift,
      logMin: chartDrag.view.logMin + logShift,
      logMax: chartDrag.view.logMax + logShift,
    };
    renderPriceChart();
  });

  priceChart.addEventListener("pointerup", () => {
    chartDrag = null;
    priceChart.classList.remove("is-dragging");
  });

  priceChart.addEventListener("pointercancel", () => {
    chartDrag = null;
    priceChart.classList.remove("is-dragging");
  });

  priceChart.addEventListener("wheel", (event) => {
    if (!event.ctrlKey && !event.metaKey) {
      return;
    }

    event.preventDefault();
    if (!chartView) {
      renderPriceChart();
    }

    const point = getChartCoordinates(event);
    const margin = { top: 24, right: 24, bottom: 46, left: 62 };
    const plotWidth = 860 - margin.left - margin.right;
    const plotHeight = 300 - margin.top - margin.bottom;
    const xRatio = Math.min(1, Math.max(0, (point.x - margin.left) / plotWidth));
    const yRatio = Math.min(1, Math.max(0, (point.y - margin.top) / plotHeight));
    const zoom = event.deltaY > 0 ? 1.18 : 0.84;
    const dateCenter = chartView.minDate + xRatio * (chartView.maxDate - chartView.minDate);
    const logCenter = chartView.logMax - yRatio * (chartView.logMax - chartView.logMin);
    const dateSpan = (chartView.maxDate - chartView.minDate) * zoom;
    const logSpan = (chartView.logMax - chartView.logMin) * zoom;

    chartView = {
      minDate: dateCenter - xRatio * dateSpan,
      maxDate: dateCenter + (1 - xRatio) * dateSpan,
      logMin: logCenter - (1 - yRatio) * logSpan,
      logMax: logCenter + yRatio * logSpan,
    };
    renderPriceChart();
  });

  priceChart.addEventListener("dblclick", resetPriceChartView);
  priceChart.addEventListener("click", (event) => {
    const target = event.target?.closest?.(".chart-dot");
    if (!target) {
      return;
    }

    const pointId = target.dataset.pointId;
    const metric = getPriceMetric();
    const metricLabel = metric === "input" ? "输入价格" : "输出价格";
    const row = getFilteredPriceRows().find((item) => getChartPointId(item) === pointId);
    if (!row) {
      hideChartTooltip();
      return;
    }

    showChartTooltip(row, Number(target.getAttribute("cx")), Number(target.getAttribute("cy")), metricLabel);
  });
  chartResetView?.addEventListener("click", resetPriceChartView);
}

function getModelTakeaway(event) {
  const model = event.model.toLowerCase();

  if (event.company === "OpenAI") {
    if (model.includes("dall")) {
      return "它的优势是和 ChatGPT 深度结合，用户可以用自然语言反复改提示词，而不是自己学习复杂的 prompt 工程。相比 DALL-E 2，它更能抓住长提示词里的细节和约束。";
    }
    if (model.includes("sora")) {
      return "Sora 系列面向视频生成和世界模拟，优势是镜头、动作和物理一致性更强。Sora 2 进一步加入音频和对话同步，更接近可直接用于短片和广告素材的创作流程。";
    }
    if (model.includes("image")) {
      return "GPT Image 系列适合从文本或参考图生成、编辑图片，优势是指令遵循、文字渲染和局部编辑更稳。它和 ChatGPT/Responses API 结合后，更适合电商、设计、教育和企业内容生产。";
    }
    if (model.includes("gpt-5.5")) {
      return "它的优势在于更强的长程任务稳定性和工具调用能力，适合复杂研究、代码工程和多步骤 agent 工作流。相较早期 GPT-5 系列，它更像面向专业场景的综合升级。";
    }
    if (model.includes("gpt-5.4")) {
      return "这个版本重点补强专业工作、电脑使用和编码任务，适合需要持续规划和调用工具的场景。相较 GPT-5.2，它更强调执行可靠性和复杂上下文中的控制力。";
    }
    if (model.includes("codex")) {
      return "Codex 系列偏向真实软件工程任务，优势是能在更长时间跨度内读代码、改代码、跑验证。它和通用 GPT 模型相比，更适合作为开发助手或代码 agent。";
    }
    if (model.includes("gpt-5")) {
      return "GPT-5 系列的核心特点是把快速回答和深度推理统一到一个体验里，减少用户手动选择模型的成本。它相对 GPT-4 系列在复杂指令、代码和 agent 任务上更有优势。";
    }
    if (model.includes("o3") || model.includes("o4")) {
      return "o 系列更偏推理模型，适合数学、代码、复杂规划和需要显式思考的问题。相比通用聊天模型，它通常牺牲一点响应速度来换更强的问题拆解能力。";
    }
    if (model.includes("4o")) {
      return "GPT-4o 的优势是实时多模态，文本、视觉和语音能力在同一模型中融合得更自然。它更适合语音助手、图像理解和低延迟交互，而不只是文本问答。";
    }
    return "OpenAI 这类旗舰模型通常强调通用能力、工具生态和产品化稳定性。它们的优势不是单点开源参数，而是 API、ChatGPT、工具调用和多模态体验的一体化。";
  }

  if (event.company === "Anthropic") {
    if (model.includes("opus")) {
      return "Opus 是 Claude 家族里更偏高智能和复杂任务的版本，适合长文推理、代码审查、agent 和高风险企业工作流。它的优势通常体现在稳健性、长上下文理解和更保守的指令遵循上。";
    }
    if (model.includes("sonnet")) {
      return "Sonnet 是 Anthropic 的主力均衡模型，通常在智能、速度和成本之间取中高位。相比 Opus 它更适合高频生产使用，相比 Haiku 则更适合复杂分析与编码。";
    }
    if (model.includes("haiku")) {
      return "Haiku 走的是低延迟和低成本路线，适合客服、批处理、摘要、分类等高吞吐任务。它的价值在于把 Claude 的安全和指令遵循能力压到更轻的成本档。";
    }
    return "Claude 系列的突出特点是长上下文、写作质量、代码任务和安全对齐。它相对很多竞品更强调可控、稳健和面向企业工作流的表现。";
  }

  if (event.company === "Google") {
    if (model.includes("veo") || model.includes("imagen") || model.includes("image editing")) {
      return "Imagen 更偏高质量图像生成和文字渲染，Veo 更偏高清视频、电影镜头和创作者控制。Google 的优势是把 Gemini、Imagen、Veo 和 Flow 组合成完整创作链路，适合从创意构思到成片的多模态工作流。";
    }
    if (model.includes("deep think")) {
      return "Deep Think 更偏慢思考和复杂问题求解，适合科学、数学、工程和多步骤研究。它的优势不在日常响应速度，而在更深入的推理轨迹和难题表现。";
    }
    if (model.includes("flash")) {
      return "Flash 是 Gemini 家族里的速度和成本优先版本，适合高并发、低延迟和大量调用。相比 Pro，它更适合产品化规模部署，而不是最难的单题推理。";
    }
    if (model.includes("3.1") || model.includes("2.5")) {
      return "Gemini Pro 系列强调原生多模态、长上下文和强推理，适合跨文本、图像、视频和代码的复杂任务。它的优势是和 Google 生态及多模态基础设施结合紧密。";
    }
    return "Gemini 系列从一开始就把多模态作为核心设计，长上下文和视频理解是它的重要差异点。相比纯文本模型，它更适合跨媒体信息处理和搜索增强体验。";
  }

  if (event.company === "xAI") {
    if (model.includes("imagine") || model.includes("aurora")) {
      return "Grok Imagine 面向图像和视频创作，优势是把生成、编辑、参考图和视频扩展放进同一套 API。它更适合需要速度、成本和社交传播素材的创作团队。";
    }
    if (model.includes("voice")) {
      return "Grok Voice 面向语音 agent，适合销售、客服和企业流程里的实时对话。它的优势是把语音交互和 Grok 的实时信息风格结合起来。";
    }
    return "Grok 系列的特点是和 X 平台及实时信息结合更紧，产品气质也更强调即时性和开放回答风格。相较传统助手，它更适合追热点、问实时事件和做社交语境下的分析。";
  }

  if (event.company === "豆包") {
    if (model.includes("seedream")) {
      return "Seedream 走一站式图像创作路线，覆盖文生图、参考图生成、多图融合和图像编辑。它的优势是中文内容、电商设计、海报和高分辨率输出，尤其适合国内内容生产场景。";
    }
    if (model.includes("seedance")) {
      return "Seedance 面向视频生成，优势是支持文生视频、图生视频和多模态参考素材。2.0 进一步把图片、视频、音频都纳入参考输入，更适合广告、短视频和工业级创作。";
    }
    if (model.includes("全模态") || model.includes("lite")) {
      return "这类全模态升级把文本、图像、音频和视频理解放到同一体系里，更适合内容平台、短视频理解和多媒体助手。它的优势是和火山引擎、抖音系场景结合紧密。";
    }
    if (model.includes("code")) {
      return "Code 版本偏向编程和开发者工具，适合代码生成、修复、解释和工程知识问答。相比通用模型，它更强调代码语料和开发链路里的可用性。";
    }
    return "豆包模型的优势在于中文场景、内容生产、多模态和国内云服务集成。它更适合中文应用落地、企业接入和和火山引擎生态联动的场景。";
  }

  if (event.company === "千问") {
    if (model.includes("qwen-image") || model.includes("vlo")) {
      return "Qwen 图像模型的突出优势是复杂文字渲染，尤其是中文排版、海报、信息图和图文混排。相比很多图像模型容易把字画错，它更适合需要可读文字的商业设计和内容生产。";
    }
    if (model.includes("wan")) {
      return "Wan 系列面向开放视频生成，支持文本生视频、图生视频和首尾帧控制。它的优势是开源、中文提示友好，并且能在研究和商业场景中灵活部署。";
    }
    if (model.includes("coder") || model.includes("code")) {
      return "Qwen Coder 系列专注代码和 agentic coding，适合仓库级理解、代码生成和开发工作流自动化。它的优势是开源生态活跃，方便企业和开发者私有化或微调。";
    }
    return "Qwen 系列的特点是开源覆盖完整、模型尺寸丰富，并且中文和代码能力都比较均衡。相比只提供闭源 API 的模型，它的优势是部署灵活、社区生态强、成本可控。";
  }

  if (event.company === "腾讯") {
    if (model.includes("video") || model.includes("avatar")) {
      return "HunyuanVideo 系列的优势是开源视频生成生态，覆盖文生视频、图生视频、定制主体和数字人动画。它对研究者和企业的价值在于可本地部署、可改造，并能接入腾讯混元应用生态。";
    }
    if (model.includes("think") || model.includes("t1")) {
      return "混元的思考模型更偏复杂推理、长文分析和企业知识处理。它的优势是和腾讯云、企业微信、腾讯文档等企业生态更容易整合。";
    }
    return "腾讯混元模型强调企业级部署、中文能力和腾讯云产品化接入。相比单纯模型发布，它的优势更多体现在云服务、应用生态和行业解决方案。";
  }

  if (event.company === "DeepSeek") {
    if (model.includes("janus")) {
      return "Janus 系列把图像理解和图像生成放进统一框架，优势是结构简洁、开源、适合研究和二次开发。Janus-Pro 进一步提升生成稳定性和指令遵循，是 DeepSeek 在视觉生成方向的重要分支。";
    }
    if (model.includes("v4")) {
      return "V4-Pro 和 V4-Flash 把高能力与高效率拆成两个档位，方便在复杂任务和高频调用之间做成本选择。兼容 OpenAI 与 Anthropic 接口也是它的优势，迁移成本更低。";
    }
    if (model.includes("v3.2")) {
      return "V3.2 系列强化了推理和工具使用，尤其强调把 thinking 融入 tool-use。它的优势是开源、低成本和 agent 场景效率，适合想自建或深度定制的团队。";
    }
    if (model.includes("r1")) {
      return "R1 的核心卖点是用强化学习拉高数学、代码和推理能力，并把模型和蒸馏版本开放出来。相比闭源推理模型，它最大的优势是可研究、可蒸馏、可商业化使用。";
    }
    return "DeepSeek 的整体特点是开源、价格激进和推理/代码能力突出。它对开发者和企业的吸引力在于可以用更低成本获得接近闭源旗舰的部分能力。";
  }

  return "这个节点代表该厂商模型能力的一次升级，通常会对应更强的推理、上下文、多模态、代码或成本效率。后续可以继续补充 benchmark、价格和实际体验结论。";
}

function getExpandedNote(event) {
  return `${event.note} ${getModelTakeaway(event)}`;
}

function getModelType(event) {
  if (event.type) {
    return event.type;
  }

  const text = `${event.company} ${event.model} ${event.note}`.toLowerCase();
  if (text.includes("video") || text.includes("sora") || text.includes("veo") || text.includes("seedance") || text.includes("视频") || text.includes("wan")) {
    return text.includes("image") || text.includes("imagen") || text.includes("图像") ? "图像/视频" : "视频";
  }
  if (text.includes("image") || text.includes("dall") || text.includes("imagen") || text.includes("seedream") || text.includes("janus") || text.includes("图像") || text.includes("生图")) {
    return "图像";
  }
  if (text.includes("voice") || text.includes("语音")) {
    return "语音";
  }
  if (text.includes("视觉") || text.includes("全模态") || text.includes("multimodal")) {
    return "多模态";
  }
  return "文本";
}

function getStoredWeeklyPicks() {
  try {
    return new Set(JSON.parse(localStorage.getItem(weeklyStorageKey) || "[]"));
  } catch {
    return new Set();
  }
}

function saveWeeklyPicks(picks) {
  localStorage.setItem(weeklyStorageKey, JSON.stringify([...picks]));
}

function getNewsDate(card) {
  let cursor = card.parentElement;
  while (cursor) {
    let previous = cursor.previousElementSibling;
    while (previous) {
      if (previous.classList.contains("news-date-card")) {
        return previous.querySelector("strong")?.textContent.trim() || "";
      }
      previous = previous.previousElementSibling;
    }
    cursor = cursor.parentElement;
  }
  return "";
}

function normalizeNewsId(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\u4e00-\u9fa5-]/g, "")
    .slice(0, 80);
}

function collectNewsCards() {
  return [...document.querySelectorAll("#news .news-card")].map((card) => {
    const title = card.querySelector("h3")?.textContent.trim() || "";
    const category = card.querySelector(".news-tag")?.textContent.trim() || "";
    const summary = [...card.querySelectorAll(":scope > p")]
      .map((item) => item.textContent.trim())
      .filter(Boolean)
      .slice(0, 2);
    const source = card.querySelector("a")?.href || "";
    const sourceText = card.querySelector("a")?.textContent.trim() || "查看来源";
    const date = getNewsDate(card);
    const id = normalizeNewsId(`${date}-${title}`);
    card.dataset.weeklyId = id;
    return { card, id, date, category, title, summary, source, sourceText };
  });
}

function renderWeeklyPicks() {
  if (!weeklyFeed || !weeklyCount) {
    return;
  }

  const picks = getStoredWeeklyPicks();
  const selectedItems = collectNewsCards().filter((item) => picks.has(item.id));
  weeklyCount.textContent = `${selectedItems.length} 条已入选`;

  if (!selectedItems.length) {
    weeklyFeed.innerHTML = '<p class="empty">还没有入选周度新闻。去“每日重点新闻”勾选几条试试。</p>';
    return;
  }

  weeklyFeed.innerHTML = selectedItems
    .map(
      (item) => `
        <article class="weekly-card">
          <div class="weekly-card-meta">
            <span>${item.date}</span>
            <span>${item.category}</span>
          </div>
          <h3>${item.title}</h3>
          ${item.summary.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          <a href="${item.source}" target="_blank" rel="noreferrer">${item.sourceText}</a>
        </article>
      `,
    )
    .join("");
}

function setupWeeklySelectors() {
  const picks = getStoredWeeklyPicks();
  collectNewsCards().forEach(({ card, id }) => {
    if (card.querySelector(".weekly-select")) {
      return;
    }

    const head = card.querySelector(".news-card-head");
    const existingLeft = document.createElement("div");
    existingLeft.className = "news-head-left";
    while (head.firstChild) {
      existingLeft.append(head.firstChild);
    }

    const label = document.createElement("label");
    label.className = "weekly-select";
    label.innerHTML = `<input type="checkbox" ${picks.has(id) ? "checked" : ""} />入选周报`;

    head.append(existingLeft, label);
    card.classList.toggle("is-selected", picks.has(id));

    label.querySelector("input").addEventListener("change", (event) => {
      const nextPicks = getStoredWeeklyPicks();
      if (event.target.checked) {
        nextPicks.add(id);
      } else {
        nextPicks.delete(id);
      }
      saveWeeklyPicks(nextPicks);
      card.classList.toggle("is-selected", event.target.checked);
      renderWeeklyPicks();
    });
  });

  renderWeeklyPicks();
}

function setupDailyNewsTimeline() {
  const board = document.querySelector("#news .news-board");
  if (!board || board.querySelector(".daily-timeline")) {
    return;
  }

  const timeline = document.createElement("div");
  timeline.className = "daily-timeline";
  const children = [...board.children];
  let currentDay = null;
  let currentContent = null;

  children.forEach((child) => {
    if (child.classList.contains("news-date-card")) {
      currentDay = document.createElement("section");
      currentDay.className = "daily-day";
      currentContent = document.createElement("div");
      currentContent.className = "daily-day-content";
      currentDay.append(child, currentContent);
      timeline.append(currentDay);
      return;
    }

    if (currentContent) {
      currentContent.append(child);
    } else {
      timeline.append(child);
    }
  });

  board.append(timeline);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildPolyline(points) {
  return points.map((point) => `${point.x},${point.y}`).join(" ");
}

function renderAnthropicCostChart() {
  if (!anthropicCostChart) {
    return;
  }

  const width = 520;
  const height = 320;
  const margin = { top: 26, right: 18, bottom: 46, left: 46 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const maxValue = 120;
  const ticks = [0, 20, 40, 60, 80, 100, 120];
  const groupWidth = chartWidth / anthropicCostSeries.years.length;
  const barWidth = 28;

  const yFor = (value) => margin.top + chartHeight - (value / maxValue) * chartHeight;

  anthropicCostChart.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" fill="#fffdf8" />
    ${ticks
      .map((tick) => {
        const y = yFor(tick);
        return `
          <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(40,48,52,0.1)" />
          <text x="${margin.left - 8}" y="${y + 4}" text-anchor="end" fill="#6f7478" font-size="11">${tick}</text>
        `;
      })
      .join("")}
    ${anthropicCostSeries.years
      .map((year, index) => {
        const groupX = margin.left + index * groupWidth + 16;
        const anthropicValue = anthropicCostSeries.anthropic[index];
        const openaiValue = anthropicCostSeries.openai[index];
        const anthropicY = yFor(anthropicValue);
        const openaiY = yFor(openaiValue);
        return `
          <rect x="${groupX}" y="${anthropicY}" width="${barWidth}" height="${margin.top + chartHeight - anthropicY}" rx="7" fill="#2e6f5d" />
          <rect x="${groupX + barWidth + 8}" y="${openaiY}" width="${barWidth}" height="${margin.top + chartHeight - openaiY}" rx="7" fill="#315f8f" />
          <text x="${groupX + barWidth / 2}" y="${anthropicY - 8}" text-anchor="middle" fill="#1f2528" font-size="10" font-weight="800">${anthropicValue}</text>
          <text x="${groupX + barWidth + 8 + barWidth / 2}" y="${openaiY - 8}" text-anchor="middle" fill="#1f2528" font-size="10" font-weight="800">${openaiValue}</text>
          <text x="${groupX + barWidth + 4}" y="${height - 16}" text-anchor="middle" fill="#6f7478" font-size="11">${year}</text>
        `;
      })
      .join("")}
    <g transform="translate(${margin.left}, 10)">
      <rect x="0" y="0" width="12" height="12" rx="3" fill="#2e6f5d" />
      <text x="18" y="10" fill="#1f2528" font-size="12">Anthropic</text>
      <rect x="110" y="0" width="12" height="12" rx="3" fill="#315f8f" />
      <text x="128" y="10" fill="#1f2528" font-size="12">OpenAI</text>
    </g>
  `;
}

function renderAnthropicFundingTable() {
  if (!anthropicFundingTable) {
    return;
  }

  anthropicFundingTable.innerHTML = anthropicFundingRows
    .map(
      (row) => `
        <tr>
          <td>${row.date}</td>
          <td>${row.type}</td>
          <td>${row.valuation}</td>
          <td><a href="${row.source}" target="_blank" rel="noreferrer">${row.note}</a></td>
        </tr>
      `,
    )
    .join("");
}

function renderAnthropicRevenueChart() {
  if (!anthropicRevenueChart) {
    return;
  }

  const width = 900;
  const height = 340;
  const margin = { top: 26, right: 32, bottom: 54, left: 56 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const labels = anthropicRevenueSeries.labels;
  const maxValue = 110;
  const ticks = [0, 20, 40, 60, 80, 100];

  const xFor = (label) =>
    margin.left + (labels.indexOf(label) / (labels.length - 1 || 1)) * chartWidth;
  const yFor = (value) => margin.top + chartHeight - (value / maxValue) * chartHeight;

  const actualPoints = anthropicRevenueSeries.actual.map((point) => ({
    ...point,
    x: xFor(point.label),
    y: yFor(point.value),
  }));
  const target2025Points = anthropicRevenueSeries.target2025.map((point) => ({
    ...point,
    x: xFor(point.label),
    y: yFor(point.value),
  }));
  const base2026Points = anthropicRevenueSeries.base2026.map((point) => ({
    ...point,
    x: xFor(point.label),
    y: yFor(point.value),
  }));
  const bull2026Points = anthropicRevenueSeries.bull2026.map((point) => ({
    ...point,
    x: xFor(point.label),
    y: yFor(point.value),
  }));
  const extrapolatedPoints = anthropicRevenueSeries.extrapolated2027.map((point) => ({
    ...point,
    x: xFor(point.label),
    y: yFor(point.value),
  }));

  const actualPointMarkup = actualPoints
    .map((point) => {
      const pointId = registerCommercialPoint({
        chartKey: "anthropic-revenue",
        seriesLabel: "Historical run-rate",
        label: point.label,
        valueText: `$${point.short}B`,
        note: point.note,
        color: "#2e6f5d",
      });
      return `
        <circle class="commercial-chart-point" tabindex="0" role="button" aria-label="${escapeText(`Historical run-rate ${point.label} ${point.short}B`)}" data-commercial-point-id="${escapeText(pointId)}" cx="${point.x}" cy="${point.y}" r="4.5" fill="#2e6f5d" />
        <text x="${point.x}" y="${point.y - 12}" text-anchor="middle" fill="#1f2528" font-size="11" font-weight="700">${point.short}</text>
      `;
    })
    .join("");

  const projectedPointMarkup = [
    ...target2025Points.slice(1).map((point) => ({ ...point, seriesLabel: "2025 年末内部目标", color: "#9c6a22" })),
    ...base2026Points.slice(1).map((point) => ({ ...point, seriesLabel: "2026 base", color: "#315f8f" })),
    ...bull2026Points.slice(1).map((point) => ({ ...point, seriesLabel: "2026 high case", color: "#8a4fdc" })),
    ...extrapolatedPoints.slice(1).map((point) => ({ ...point, seriesLabel: "TI 1-year extrapolation", color: "#a5483f" })),
  ]
    .map((point) => {
      const pointId = registerCommercialPoint({
        chartKey: "anthropic-revenue",
        seriesLabel: point.seriesLabel,
        label: point.label,
        valueText: `$${point.short}B`,
        note: point.note,
        color: point.color,
      });
      return `
        <circle class="commercial-chart-point" tabindex="0" role="button" aria-label="${escapeText(`${point.seriesLabel} ${point.label} ${point.short}B`)}" data-commercial-point-id="${escapeText(pointId)}" cx="${point.x}" cy="${point.y}" r="4.5" fill="#fffdf8" stroke="${point.color}" stroke-width="2" />
        <text x="${point.x}" y="${point.y - 12}" text-anchor="middle" fill="#1f2528" font-size="11" font-weight="700">${point.short}</text>
      `;
    })
    .join("");

  anthropicRevenueChart.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" fill="#fffdf8" />
    ${ticks
      .map((tick) => {
        const y = yFor(tick);
        return `
          <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(40,48,52,0.1)" />
          <text x="${margin.left - 10}" y="${y + 4}" text-anchor="end" fill="#6f7478" font-size="11">${tick}</text>
        `;
      })
      .join("")}
    <line x1="${margin.left}" y1="${margin.top + chartHeight}" x2="${width - margin.right}" y2="${margin.top + chartHeight}" stroke="#7d8286" />
    ${labels
      .map((label) => {
        const x = xFor(label);
        return `<text x="${x}" y="${height - 18}" text-anchor="middle" fill="#6f7478" font-size="11">${label}</text>`;
      })
      .join("")}
    <polyline fill="none" stroke="#2e6f5d" stroke-width="3.2" points="${buildPolyline(actualPoints)}" />
    <polyline fill="none" stroke="#9c6a22" stroke-width="2.6" stroke-dasharray="7 6" points="${buildPolyline(target2025Points)}" />
    <polyline fill="none" stroke="#315f8f" stroke-width="2.6" stroke-dasharray="7 6" points="${buildPolyline(base2026Points)}" />
    <polyline fill="none" stroke="#8a4fdc" stroke-width="2.6" stroke-dasharray="7 6" points="${buildPolyline(bull2026Points)}" />
    <polyline fill="none" stroke="#a5483f" stroke-width="2.6" stroke-dasharray="3 6" points="${buildPolyline(extrapolatedPoints)}" />
    ${actualPointMarkup}
    ${projectedPointMarkup}
    <g transform="translate(${margin.left}, 10)">
      <rect x="0" y="0" width="12" height="12" rx="6" fill="#2e6f5d" />
      <text x="18" y="10" fill="#1f2528" font-size="12">已公开 historical run-rate</text>
      <line x1="220" y1="6" x2="252" y2="6" stroke="#9c6a22" stroke-width="2.6" stroke-dasharray="7 6" />
      <text x="260" y="10" fill="#1f2528" font-size="12">2025 年末内部目标</text>
      <line x1="430" y1="6" x2="462" y2="6" stroke="#315f8f" stroke-width="2.6" stroke-dasharray="7 6" />
      <text x="470" y="10" fill="#1f2528" font-size="12">2026 base</text>
      <line x1="560" y1="6" x2="592" y2="6" stroke="#8a4fdc" stroke-width="2.6" stroke-dasharray="7 6" />
      <text x="600" y="10" fill="#1f2528" font-size="12">2026 high case</text>
      <line x1="700" y1="6" x2="732" y2="6" stroke="#a5483f" stroke-width="2.6" stroke-dasharray="3 6" />
      <text x="740" y="10" fill="#1f2528" font-size="12">TI 1-year extrapolation</text>
    </g>
  `;
  attachCommercialPointInteractions(anthropicRevenueChart);
}

function renderAnthropicMarginChart() {
  if (!anthropicMarginChart) {
    return;
  }

  const width = 420;
  const height = 260;
  const margin = { top: 24, right: 20, bottom: 62, left: 40 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const maxValue = 5;
  const groupWidth = chartWidth / anthropicMarginSeries.length;
  const barWidth = 42;

  const yFor = (value) => margin.top + chartHeight - (value / maxValue) * chartHeight;

  anthropicMarginChart.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" fill="#fffdf8" />
    ${[0, 1, 2, 3, 4, 5]
      .map((tick) => {
        const y = yFor(tick);
        return `
          <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(40,48,52,0.1)" />
          <text x="${margin.left - 8}" y="${y + 4}" text-anchor="end" fill="#6f7478" font-size="11">$${tick}B</text>
        `;
      })
      .join("")}
    ${anthropicMarginSeries
      .map((bar, index) => {
        const groupX = margin.left + index * groupWidth + (groupWidth - (barWidth * 2 + 10)) / 2;
        const revenueY = yFor(bar.revenue);
        const inferenceY = yFor(bar.inference);
        const revenueHeight = margin.top + chartHeight - revenueY;
        const inferenceHeight = margin.top + chartHeight - inferenceY;
        return `
          <rect x="${groupX}" y="${revenueY}" width="${barWidth}" height="${revenueHeight}" rx="8" fill="#5cc63b" />
          <rect x="${groupX + barWidth + 10}" y="${inferenceY}" width="${barWidth}" height="${inferenceHeight}" rx="8" fill="#f52656" />
          <text x="${groupX + barWidth / 2}" y="${revenueY - 8}" text-anchor="middle" fill="#1f2528" font-size="10" font-weight="800">${bar.revenue.toFixed(2).replace(/\.00$/, "")}</text>
          <text x="${groupX + barWidth + 10 + barWidth / 2}" y="${inferenceY - 8}" text-anchor="middle" fill="#1f2528" font-size="10" font-weight="800">${bar.inference.toFixed(2).replace(/\.00$/, "")}</text>
          <text x="${groupX + barWidth + 5}" y="${height - 28}" text-anchor="middle" fill="#6f7478" font-size="10">${bar.label.split("\n")[0]}</text>
          ${
            bar.label.split("\n")[1]
              ? `<text x="${groupX + barWidth + 5}" y="${height - 16}" text-anchor="middle" fill="#6f7478" font-size="10">${bar.label.split("\n")[1]}</text>`
              : ""
          }
          <text x="${groupX + barWidth + 5}" y="${height - 2}" text-anchor="middle" fill="#1f2528" font-size="10" font-weight="800">${bar.marginLabel} gross margin</text>
        `;
      })
      .join("")}
    <g transform="translate(${margin.left}, 8)">
      <rect x="0" y="0" width="12" height="12" rx="3" fill="#5cc63b" />
      <text x="18" y="10" fill="#1f2528" font-size="12">Revenue</text>
      <rect x="100" y="0" width="12" height="12" rx="3" fill="#f52656" />
      <text x="118" y="10" fill="#1f2528" font-size="12">Paid inference costs</text>
    </g>
  `;
}

function renderAnthropicMarginLineChart() {
  if (!anthropicMarginLineChart) {
    return;
  }

  const width = 420;
  const height = 260;
  const margin = { top: 28, right: 18, bottom: 44, left: 42 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const labels = anthropicMarginPathSeries.labels;
  const minValue = -125;
  const maxValue = 100;
  const ticks = [-125, -100, -75, -50, -25, 0, 25, 50, 75, 100];
  const xFor = (label) =>
    margin.left + (labels.indexOf(label) / (labels.length - 1 || 1)) * chartWidth;
  const yFor = (value) =>
    margin.top + chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight;
  const toPoints = (values) =>
    values.map((value, index) => ({
      x: xFor(labels[index]),
      y: yFor(value),
      value,
      label: labels[index],
    }));

  const optimistic = toPoints(anthropicMarginPathSeries.optimistic);
  const conservative = toPoints(anthropicMarginPathSeries.conservative);
  const openai = toPoints(anthropicMarginPathSeries.openai);

  const marginPointMarkup = [
    ...optimistic.map((point) => ({
      ...point,
      seriesLabel: "Anthropic optimistic Dec. 2025",
      color: "#f52656",
      note: "The Information / Meritech 图示中的 optimistic paid gross margin 路径。",
    })),
    ...conservative.map((point) => ({
      ...point,
      seriesLabel: "Anthropic conservative Dec. 2025",
      color: "#f8b8c5",
      note: "The Information / Meritech 图示中的 conservative paid gross margin 路径。",
    })),
    ...openai.map((point) => ({
      ...point,
      seriesLabel: "OpenAI outlook Q3 2025",
      color: "#3158b0",
      note: "作为同一张对比图中的 OpenAI 经营毛利展望参照。",
    })),
  ]
    .map((point) => {
      const pointId = registerCommercialPoint({
        chartKey: "anthropic-margin-line",
        seriesLabel: point.seriesLabel,
        label: point.label,
        valueText: `${point.value}%`,
        note: point.note,
        color: point.color,
      });
      return `<circle class="commercial-chart-point" tabindex="0" role="button" aria-label="${escapeText(`${point.seriesLabel} ${point.label} ${point.value}%`)}" data-commercial-point-id="${escapeText(pointId)}" cx="${point.x}" cy="${point.y}" r="4.2" fill="${point.color}" />`;
    })
    .join("");

  anthropicMarginLineChart.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" fill="#fffdf8" />
    ${ticks
      .map((tick) => {
        const y = yFor(tick);
        return `
          <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(40,48,52,0.1)" />
          <text x="${margin.left - 8}" y="${y + 4}" text-anchor="end" fill="#6f7478" font-size="10">${tick}%</text>
        `;
      })
      .join("")}
    ${labels
      .map((label) => {
        const x = xFor(label);
        return `<text x="${x}" y="${height - 16}" text-anchor="middle" fill="#6f7478" font-size="10">${label}</text>`;
      })
      .join("")}
    <line x1="${margin.left}" y1="${yFor(75)}" x2="${width - margin.right}" y2="${yFor(75)}" stroke="#c9c9c9" stroke-dasharray="5 4" />
    <text x="${margin.left + 6}" y="${yFor(75) - 8}" fill="#8f8f8f" font-size="10">Avg public software co. ~75%</text>
    <polyline fill="none" stroke="#f52656" stroke-width="3" points="${buildPolyline(optimistic)}" />
    <polyline fill="none" stroke="#f8b8c5" stroke-width="3" points="${buildPolyline(conservative)}" />
    <polyline fill="none" stroke="#3158b0" stroke-width="3" points="${buildPolyline(openai)}" />
    ${marginPointMarkup}
    <g transform="translate(${margin.left}, 10)">
      <line x1="0" y1="6" x2="24" y2="6" stroke="#f52656" stroke-width="3" />
      <text x="30" y="10" fill="#1f2528" font-size="11">Anthropic optimistic Dec. 2025</text>
      <line x1="210" y1="6" x2="234" y2="6" stroke="#f8b8c5" stroke-width="3" />
      <text x="240" y="10" fill="#1f2528" font-size="11">Anthropic conservative Dec. 2025</text>
    </g>
    <g transform="translate(${margin.left}, 26)">
      <line x1="0" y1="6" x2="24" y2="6" stroke="#3158b0" stroke-width="3" />
      <text x="30" y="10" fill="#1f2528" font-size="11">OpenAI outlook Q3 2025</text>
    </g>
  `;
  attachCommercialPointInteractions(anthropicMarginLineChart);
}

function renderAnthropicAnnualRevenueChart() {
  if (!anthropicAnnualRevenueChart) {
    return;
  }

  const width = 900;
  const height = 340;
  const margin = { top: 26, right: 32, bottom: 54, left: 56 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const labels = anthropicAnnualForecastSeries.labels;
  const maxValue = 180;
  const ticks = [0, 30, 60, 90, 120, 150, 180];
  const xFor = (label) =>
    margin.left + (labels.indexOf(label) / (labels.length - 1 || 1)) * chartWidth;
  const yFor = (value) => margin.top + chartHeight - (value / maxValue) * chartHeight;

  const toPoints = (series) =>
    series.map((point) => ({
      ...point,
      x: xFor(point.label),
      y: yFor(point.value),
    }));

  const formerOptimistic = toPoints(anthropicAnnualForecastSeries.formerOptimistic2024);
  const base2025 = toPoints(anthropicAnnualForecastSeries.base2025);
  const optimistic2025 = toPoints(anthropicAnnualForecastSeries.optimistic2025);
  const openaiProjection = toPoints(anthropicAnnualForecastSeries.openaiProjection);
  const projectionDec2025 = toPoints(anthropicAnnualForecastSeries.projectionDec2025);
  const aprActual = toPoints(anthropicAnnualForecastSeries.apr2026Actual);

  const annualForecastPointMarkup = [
    ...formerOptimistic.map((point) => ({ ...point, seriesLabel: "Anthropic former optimistic (2024)", color: "#b8b8b8" })),
    ...base2025.map((point) => ({ ...point, seriesLabel: "Anthropic base (2025)", color: "#8b000f" })),
    ...optimistic2025.map((point) => ({ ...point, seriesLabel: "Anthropic optimistic (2025)", color: "#f52656" })),
    ...openaiProjection.map((point) => ({ ...point, seriesLabel: "OpenAI projection", color: "#3158b0" })),
    ...projectionDec2025.map((point) => ({ ...point, seriesLabel: "Anthropic 2025-12 projection", color: "#8a4fdc" })),
  ]
    .map((point) => {
      const pointId = registerCommercialPoint({
        chartKey: "anthropic-annual-forecast",
        seriesLabel: point.seriesLabel,
        label: point.label,
        valueText: `$${point.short}B`,
        note: point.note,
        color: point.color,
      });
      return `
        <circle class="commercial-chart-point" tabindex="0" role="button" aria-label="${escapeText(`${point.seriesLabel} ${point.label} ${point.short}B`)}" data-commercial-point-id="${escapeText(pointId)}" cx="${point.x}" cy="${point.y}" r="4.2" fill="#fffdf8" stroke="${point.color}" stroke-width="2" />
        <text x="${point.x}" y="${point.y - 12}" text-anchor="middle" fill="#1f2528" font-size="10.5" font-weight="700">${point.short}</text>
      `;
    })
    .join("");

  const annualActualPointMarkup = aprActual
    .map((point) => {
      const pointId = registerCommercialPoint({
        chartKey: "anthropic-annual-forecast",
        seriesLabel: "2026-04 actual",
        label: point.label,
        valueText: `$${point.short}B`,
        note: point.note,
        color: "#5cc63b",
      });
      return `
        <circle class="commercial-chart-point" tabindex="0" role="button" aria-label="${escapeText(`2026-04 actual ${point.label} ${point.short}B`)}" data-commercial-point-id="${escapeText(pointId)}" cx="${point.x}" cy="${point.y}" r="6" fill="#5cc63b" stroke="#fffdf8" stroke-width="2" />
        <text x="${point.x}" y="${point.y - 12}" text-anchor="middle" fill="#1f2528" font-size="11" font-weight="700">${point.short}</text>
      `;
    })
    .join("");

  anthropicAnnualRevenueChart.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" fill="#fffdf8" />
    ${ticks
      .map((tick) => {
        const y = yFor(tick);
        return `
          <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(40,48,52,0.1)" />
          <text x="${margin.left - 10}" y="${y + 4}" text-anchor="end" fill="#6f7478" font-size="11">${tick}</text>
        `;
      })
      .join("")}
    <line x1="${margin.left}" y1="${margin.top + chartHeight}" x2="${width - margin.right}" y2="${margin.top + chartHeight}" stroke="#7d8286" />
    ${labels
      .map((label) => {
        const x = xFor(label);
        return `<text x="${x}" y="${height - 18}" text-anchor="middle" fill="#6f7478" font-size="11">${label}</text>`;
      })
      .join("")}
    <polyline fill="none" stroke="#b8b8b8" stroke-width="2.6" stroke-dasharray="7 6" points="${buildPolyline(formerOptimistic)}" />
    <polyline fill="none" stroke="#8b000f" stroke-width="2.8" stroke-dasharray="7 6" points="${buildPolyline(base2025)}" />
    <polyline fill="none" stroke="#f52656" stroke-width="3" stroke-dasharray="10 6" points="${buildPolyline(optimistic2025)}" />
    <polyline fill="none" stroke="#3158b0" stroke-width="3" stroke-dasharray="10 6" points="${buildPolyline(openaiProjection)}" />
    <polyline fill="none" stroke="#8a4fdc" stroke-width="3.2" points="${buildPolyline(projectionDec2025)}" />
    ${annualForecastPointMarkup}
    ${annualActualPointMarkup}
    <g transform="translate(${margin.left}, 10)">
      <line x1="0" y1="6" x2="28" y2="6" stroke="#b8b8b8" stroke-width="2.6" stroke-dasharray="7 6" />
      <text x="36" y="10" fill="#1f2528" font-size="12">Anthropic former optimistic (2024)</text>
      <line x1="286" y1="6" x2="314" y2="6" stroke="#8b000f" stroke-width="2.8" stroke-dasharray="7 6" />
      <text x="322" y="10" fill="#1f2528" font-size="12">Anthropic base (2025)</text>
      <line x1="500" y1="6" x2="528" y2="6" stroke="#f52656" stroke-width="3" stroke-dasharray="10 6" />
      <text x="536" y="10" fill="#1f2528" font-size="12">Anthropic optimistic (2025)</text>
    </g>
    <g transform="translate(${margin.left}, 28)">
      <line x1="0" y1="6" x2="28" y2="6" stroke="#3158b0" stroke-width="3" stroke-dasharray="10 6" />
      <text x="36" y="10" fill="#1f2528" font-size="12">OpenAI projection</text>
      <line x1="180" y1="6" x2="208" y2="6" stroke="#8a4fdc" stroke-width="3.2" />
      <text x="216" y="10" fill="#1f2528" font-size="12">Anthropic 2025-12 projection</text>
      <circle cx="470" cy="6" r="6" fill="#5cc63b" />
      <text x="484" y="10" fill="#1f2528" font-size="12">2026-04 actual</text>
    </g>
  `;
  attachCommercialPointInteractions(anthropicAnnualRevenueChart);
}

function renderAnthropicFundingChart() {
  if (!anthropicFundingChart) {
    return;
  }

  const width = 900;
  const height = 320;
  const margin = { top: 28, right: 28, bottom: 58, left: 54 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const maxValue = 400;
  const ticks = [0, 50, 100, 150, 200, 250, 300, 350, 400];
  const xFor = (index) =>
    margin.left + (index / (anthropicValuationSeries.length - 1 || 1)) * chartWidth;
  const yFor = (value) => margin.top + chartHeight - (value / maxValue) * chartHeight;

  const valuationPoints = anthropicValuationSeries.map((row, index) => ({
    ...row,
    x: xFor(index),
    y: yFor(row.value),
  }));

  const valuationPointMarkup = valuationPoints
    .map((point) => {
      const color = point.kind === "strategic" ? "#9c6a22" : "#315f8f";
      const pointId = registerCommercialPoint({
        chartKey: "anthropic-valuation",
        seriesLabel: "Anthropic valuation",
        label: `${point.label} · ${point.type}`,
        valueText: point.valuation,
        note: point.note,
        color,
      });
      return `
        <circle class="commercial-chart-point" tabindex="0" role="button" aria-label="${escapeText(`Anthropic valuation ${point.label} ${point.valuation}`)}" data-commercial-point-id="${escapeText(pointId)}" cx="${point.x}" cy="${point.y}" r="6" fill="#fffdf8" stroke="${color}" stroke-width="3" />
        <text x="${point.x}" y="${point.y - 14}" text-anchor="middle" fill="#1f2528" font-size="11" font-weight="800">${point.short}</text>
        <text x="${point.x}" y="${height - 22}" text-anchor="middle" fill="#6f7478" font-size="10">${point.label}</text>
      `;
    })
    .join("");

  anthropicFundingChart.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" fill="#fffdf8" />
    ${ticks
      .map((tick) => {
        const y = yFor(tick);
        return `
          <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(40,48,52,0.1)" />
          <text x="${margin.left - 10}" y="${y + 4}" text-anchor="end" fill="#6f7478" font-size="11">${tick}</text>
        `;
      })
      .join("")}
    <line x1="${margin.left}" y1="${margin.top + chartHeight}" x2="${width - margin.right}" y2="${margin.top + chartHeight}" stroke="#7d8286" />
    <polyline fill="none" stroke="#315f8f" stroke-width="3.2" points="${buildPolyline(valuationPoints)}" />
    ${valuationPointMarkup}
    <g transform="translate(${margin.left}, 10)">
      <line x1="0" y1="6" x2="28" y2="6" stroke="#315f8f" stroke-width="3.2" />
      <text x="36" y="10" fill="#1f2528" font-size="12">公开估值节点</text>
      <text x="160" y="10" fill="#6f7478" font-size="11">单位：USD bn</text>
    </g>
  `;
  attachCommercialPointInteractions(anthropicFundingChart);
}

function renderOpenAIRevenueChart() {
  if (!openaiRevenueChart) {
    return;
  }

  const width = 900;
  const height = 340;
  const margin = { top: 26, right: 32, bottom: 54, left: 56 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const labels = openaiRevenueSeries.labels;
  const maxValue = 28;
  const ticks = [0, 4, 8, 12, 16, 20, 24, 28];
  const xFor = (label) =>
    margin.left + (labels.indexOf(label) / (labels.length - 1 || 1)) * chartWidth;
  const yFor = (value) => margin.top + chartHeight - (value / maxValue) * chartHeight;

  const points = openaiRevenueSeries.actual.map((point) => ({
    ...point,
    x: xFor(point.label),
    y: yFor(point.value),
  }));

  const pointMarkup = points
    .map((point) => {
      const pointId = registerCommercialPoint({
        chartKey: "openai-revenue",
        seriesLabel: "OpenAI disclosed run-rate",
        label: point.label,
        valueText: `$${point.short}B`,
        note: point.note,
        color: "#2e6f5d",
      });
      return `
        <circle class="commercial-chart-point" tabindex="0" role="button" aria-label="${escapeText(`OpenAI run-rate ${point.label} ${point.short}B`)}" data-commercial-point-id="${escapeText(pointId)}" cx="${point.x}" cy="${point.y}" r="5" fill="#fffdf8" stroke="#2e6f5d" stroke-width="2.6" />
        <text x="${point.x}" y="${point.y - 12}" text-anchor="middle" fill="#1f2528" font-size="11" font-weight="700">${point.short}</text>
      `;
    })
    .join("");

  openaiRevenueChart.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" fill="#fffdf8" />
    ${ticks
      .map((tick) => {
        const y = yFor(tick);
        return `
          <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(40,48,52,0.1)" />
          <text x="${margin.left - 10}" y="${y + 4}" text-anchor="end" fill="#6f7478" font-size="11">${tick}</text>
        `;
      })
      .join("")}
    <line x1="${margin.left}" y1="${margin.top + chartHeight}" x2="${width - margin.right}" y2="${margin.top + chartHeight}" stroke="#7d8286" />
    ${labels
      .map((label) => {
        const x = xFor(label);
        return `<text x="${x}" y="${height - 18}" text-anchor="middle" fill="#6f7478" font-size="11">${label}</text>`;
      })
      .join("")}
    <polyline fill="none" stroke="#2e6f5d" stroke-width="3.2" points="${buildPolyline(points)}" />
    ${pointMarkup}
    <g transform="translate(${margin.left}, 10)">
      <line x1="0" y1="6" x2="28" y2="6" stroke="#2e6f5d" stroke-width="3.2" />
      <text x="36" y="10" fill="#1f2528" font-size="12">OpenAI 官方 / Reuters 已披露 run-rate 节点</text>
    </g>
  `;
  attachCommercialPointInteractions(openaiRevenueChart);
}

function renderOpenAIAnnualRevenueChart() {
  if (!openaiAnnualRevenueChart) {
    return;
  }

  const width = 900;
  const height = 340;
  const margin = { top: 26, right: 32, bottom: 54, left: 56 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const labels = openaiAnnualForecastSeries.labels;
  const maxValue = 300;
  const ticks = [0, 50, 100, 150, 200, 250, 300];
  const xFor = (label) =>
    margin.left + (labels.indexOf(label) / (labels.length - 1 || 1)) * chartWidth;
  const yFor = (value) => margin.top + chartHeight - (value / maxValue) * chartHeight;
  const toPoints = (values) =>
    values.map((value, index) => ({
      label: labels[index],
      value,
      short: String(value),
      x: xFor(labels[index]),
      y: yFor(value),
    }));

  const winter2025 = toPoints(openaiAnnualForecastSeries.winter2025);
  const summer2025 = toPoints(openaiAnnualForecastSeries.summer2025);
  const winter2026 = toPoints(openaiAnnualForecastSeries.winter2026);

  const pointMarkup = [
    ...winter2025.map((point) => ({ ...point, seriesLabel: "Winter 2025 projection", color: "#b8b8b8" })),
    ...summer2025.map((point) => ({ ...point, seriesLabel: "Summer 2025 projection", color: "#9c6a22" })),
    ...winter2026.map((point) => ({ ...point, seriesLabel: "Winter 2026 projection", color: "#3158b0" })),
  ]
    .map((point) => {
      const pointId = registerCommercialPoint({
        chartKey: "openai-annual-forecast",
        seriesLabel: point.seriesLabel,
        label: point.label,
        valueText: `$${point.short}B`,
        note: "用户提供的 The Information projection 图示，按 rounded values 整理。",
        color: point.color,
      });
      return `
        <circle class="commercial-chart-point" tabindex="0" role="button" aria-label="${escapeText(`${point.seriesLabel} ${point.label} ${point.short}B`)}" data-commercial-point-id="${escapeText(pointId)}" cx="${point.x}" cy="${point.y}" r="4.3" fill="#fffdf8" stroke="${point.color}" stroke-width="2" />
        <text x="${point.x}" y="${point.y - 12}" text-anchor="middle" fill="#1f2528" font-size="10.5" font-weight="700">${point.short}</text>
      `;
    })
    .join("");

  openaiAnnualRevenueChart.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" fill="#fffdf8" />
    ${ticks
      .map((tick) => {
        const y = yFor(tick);
        return `
          <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(40,48,52,0.1)" />
          <text x="${margin.left - 10}" y="${y + 4}" text-anchor="end" fill="#6f7478" font-size="11">${tick}</text>
        `;
      })
      .join("")}
    <line x1="${margin.left}" y1="${margin.top + chartHeight}" x2="${width - margin.right}" y2="${margin.top + chartHeight}" stroke="#7d8286" />
    ${labels
      .map((label) => `<text x="${xFor(label)}" y="${height - 18}" text-anchor="middle" fill="#6f7478" font-size="11">${label}</text>`)
      .join("")}
    <polyline fill="none" stroke="#b8b8b8" stroke-width="2.6" stroke-dasharray="7 6" points="${buildPolyline(winter2025)}" />
    <polyline fill="none" stroke="#9c6a22" stroke-width="2.8" stroke-dasharray="7 6" points="${buildPolyline(summer2025)}" />
    <polyline fill="none" stroke="#3158b0" stroke-width="3.2" points="${buildPolyline(winter2026)}" />
    ${pointMarkup}
    <g transform="translate(${margin.left}, 10)">
      <line x1="0" y1="6" x2="28" y2="6" stroke="#b8b8b8" stroke-width="2.6" stroke-dasharray="7 6" />
      <text x="36" y="10" fill="#1f2528" font-size="12">Winter 2025 projection</text>
      <line x1="250" y1="6" x2="278" y2="6" stroke="#9c6a22" stroke-width="2.8" stroke-dasharray="7 6" />
      <text x="286" y="10" fill="#1f2528" font-size="12">Summer 2025 projection</text>
      <line x1="520" y1="6" x2="548" y2="6" stroke="#3158b0" stroke-width="3.2" />
      <text x="556" y="10" fill="#1f2528" font-size="12">Winter 2026 projection</text>
    </g>
  `;
  attachCommercialPointInteractions(openaiAnnualRevenueChart);
}

function renderOpenAICostChart() {
  if (!openaiCostChart) {
    return;
  }

  const width = 420;
  const height = 260;
  const margin = { top: 28, right: 18, bottom: 44, left: 42 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const labels = openaiCostProjectionSeries.labels;
  const maxValue = 100;
  const ticks = [0, 20, 40, 60, 80, 100];
  const xFor = (label) =>
    margin.left + (labels.indexOf(label) / (labels.length - 1 || 1)) * chartWidth;
  const yFor = (value) => margin.top + chartHeight - (value / maxValue) * chartHeight;
  const toPoints = (values) =>
    values.map((value, index) => ({
      label: labels[index],
      value,
      short: String(value),
      x: xFor(labels[index]),
      y: yFor(value),
    }));

  const winter2025 = toPoints(openaiCostProjectionSeries.winter2025);
  const summer2025 = toPoints(openaiCostProjectionSeries.summer2025);
  const winter2026 = toPoints(openaiCostProjectionSeries.winter2026);

  const pointMarkup = [
    ...winter2025.map((point) => ({ ...point, seriesLabel: "Winter 2025 projection", color: "#b8b8b8" })),
    ...summer2025.map((point) => ({ ...point, seriesLabel: "Summer 2025 projection", color: "#9c6a22" })),
    ...winter2026.map((point) => ({ ...point, seriesLabel: "Winter 2026 projection", color: "#3158b0" })),
  ]
    .map((point) => {
      const pointId = registerCommercialPoint({
        chartKey: "openai-cost",
        seriesLabel: point.seriesLabel,
        label: point.label,
        valueText: `$${point.short}B`,
        note: "Inference costs projection，来自用户提供的 The Information 图示。",
        color: point.color,
      });
      return `<circle class="commercial-chart-point" tabindex="0" role="button" aria-label="${escapeText(`${point.seriesLabel} ${point.label} ${point.short}B`)}" data-commercial-point-id="${escapeText(pointId)}" cx="${point.x}" cy="${point.y}" r="4.1" fill="#fffdf8" stroke="${point.color}" stroke-width="2" />`;
    })
    .join("");

  openaiCostChart.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" fill="#fffdf8" />
    ${ticks
      .map((tick) => {
        const y = yFor(tick);
        return `
          <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(40,48,52,0.1)" />
          <text x="${margin.left - 8}" y="${y + 4}" text-anchor="end" fill="#6f7478" font-size="10">${tick}</text>
        `;
      })
      .join("")}
    ${labels.map((label) => `<text x="${xFor(label)}" y="${height - 16}" text-anchor="middle" fill="#6f7478" font-size="10">${label}</text>`).join("")}
    <polyline fill="none" stroke="#b8b8b8" stroke-width="2.4" stroke-dasharray="7 6" points="${buildPolyline(winter2025)}" />
    <polyline fill="none" stroke="#9c6a22" stroke-width="2.6" stroke-dasharray="7 6" points="${buildPolyline(summer2025)}" />
    <polyline fill="none" stroke="#3158b0" stroke-width="3" points="${buildPolyline(winter2026)}" />
    ${pointMarkup}
    <g transform="translate(${margin.left}, 10)">
      <line x1="0" y1="6" x2="24" y2="6" stroke="#b8b8b8" stroke-width="2.4" stroke-dasharray="7 6" />
      <text x="30" y="10" fill="#1f2528" font-size="10.5">Winter 2025</text>
      <line x1="118" y1="6" x2="142" y2="6" stroke="#9c6a22" stroke-width="2.6" stroke-dasharray="7 6" />
      <text x="148" y="10" fill="#1f2528" font-size="10.5">Summer 2025</text>
      <line x1="250" y1="6" x2="274" y2="6" stroke="#3158b0" stroke-width="3" />
      <text x="280" y="10" fill="#1f2528" font-size="10.5">Winter 2026</text>
    </g>
  `;
  attachCommercialPointInteractions(openaiCostChart);
}

function renderOpenAIMarginChart() {
  if (!openaiMarginChart) {
    return;
  }

  const width = 420;
  const height = 260;
  const margin = { top: 28, right: 18, bottom: 44, left: 42 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const labels = openaiMarginProjectionSeries.labels;
  const minValue = 25;
  const maxValue = 80;
  const ticks = [30, 40, 50, 60, 70, 80];
  const xFor = (label) =>
    margin.left + (labels.indexOf(label) / (labels.length - 1 || 1)) * chartWidth;
  const yFor = (value) =>
    margin.top + chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight;
  const toPoints = (values) =>
    values.map((value, index) => ({
      label: labels[index],
      value,
      x: xFor(labels[index]),
      y: yFor(value),
    }));

  const winter2025 = toPoints(openaiMarginProjectionSeries.winter2025);
  const summer2025 = toPoints(openaiMarginProjectionSeries.summer2025);
  const winter2026 = toPoints(openaiMarginProjectionSeries.winter2026);

  const pointMarkup = [
    ...winter2025.map((point) => ({ ...point, seriesLabel: "Winter 2025 projection", color: "#b8b8b8" })),
    ...summer2025.map((point) => ({ ...point, seriesLabel: "Summer 2025 projection", color: "#9c6a22" })),
    ...winter2026.map((point) => ({ ...point, seriesLabel: "Winter 2026 projection", color: "#3158b0" })),
  ]
    .map((point) => {
      const pointId = registerCommercialPoint({
        chartKey: "openai-margin",
        seriesLabel: point.seriesLabel,
        label: point.label,
        valueText: `${point.value}%`,
        note: "Adjusted gross profit margin projection，来自用户提供的 The Information 图示。",
        color: point.color,
      });
      return `<circle class="commercial-chart-point" tabindex="0" role="button" aria-label="${escapeText(`${point.seriesLabel} ${point.label} ${point.value}%`)}" data-commercial-point-id="${escapeText(pointId)}" cx="${point.x}" cy="${point.y}" r="4.1" fill="#fffdf8" stroke="${point.color}" stroke-width="2" />`;
    })
    .join("");

  openaiMarginChart.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" fill="#fffdf8" />
    ${ticks
      .map((tick) => {
        const y = yFor(tick);
        return `
          <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(40,48,52,0.1)" />
          <text x="${margin.left - 8}" y="${y + 4}" text-anchor="end" fill="#6f7478" font-size="10">${tick}%</text>
        `;
      })
      .join("")}
    ${labels.map((label) => `<text x="${xFor(label)}" y="${height - 16}" text-anchor="middle" fill="#6f7478" font-size="10">${label}</text>`).join("")}
    <line x1="${margin.left}" y1="${yFor(75)}" x2="${width - margin.right}" y2="${yFor(75)}" stroke="#c9c9c9" stroke-dasharray="5 4" />
    <text x="${margin.left + 6}" y="${yFor(75) - 8}" fill="#8f8f8f" font-size="10">Avg public software co. ~75%</text>
    <polyline fill="none" stroke="#b8b8b8" stroke-width="2.4" stroke-dasharray="7 6" points="${buildPolyline(winter2025)}" />
    <polyline fill="none" stroke="#9c6a22" stroke-width="2.6" stroke-dasharray="7 6" points="${buildPolyline(summer2025)}" />
    <polyline fill="none" stroke="#3158b0" stroke-width="3" points="${buildPolyline(winter2026)}" />
    ${pointMarkup}
    <g transform="translate(${margin.left}, 10)">
      <line x1="0" y1="6" x2="24" y2="6" stroke="#b8b8b8" stroke-width="2.4" stroke-dasharray="7 6" />
      <text x="30" y="10" fill="#1f2528" font-size="10.5">Winter 2025</text>
      <line x1="118" y1="6" x2="142" y2="6" stroke="#9c6a22" stroke-width="2.6" stroke-dasharray="7 6" />
      <text x="148" y="10" fill="#1f2528" font-size="10.5">Summer 2025</text>
      <line x1="250" y1="6" x2="274" y2="6" stroke="#3158b0" stroke-width="3" />
      <text x="280" y="10" fill="#1f2528" font-size="10.5">Winter 2026</text>
    </g>
  `;
  attachCommercialPointInteractions(openaiMarginChart);
}

function renderOpenAIValuationTable() {
  if (!openaiValuationTable) {
    return;
  }

  openaiValuationTable.innerHTML = openaiValuationRows
    .map(
      (row) => `
        <tr>
          <td>${row.date}</td>
          <td>${row.type}</td>
          <td>${row.valuation}</td>
          <td><a href="${row.source}" target="_blank" rel="noreferrer">${row.note}</a></td>
        </tr>
      `,
    )
    .join("");
}

function renderOpenAIValuationChart() {
  if (!openaiValuationChart) {
    return;
  }

  const width = 900;
  const height = 320;
  const margin = { top: 28, right: 28, bottom: 58, left: 54 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const maxValue = 900;
  const ticks = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const xFor = (index) =>
    margin.left + (index / (openaiValuationRows.length - 1 || 1)) * chartWidth;
  const yFor = (value) => margin.top + chartHeight - (value / maxValue) * chartHeight;
  const points = openaiValuationRows.map((row, index) => ({
    ...row,
    value: Number(row.valuation.match(/\$([\d.]+)/)?.[1] || 0),
    short: row.valuation.match(/\$([\d.]+)/)?.[1]?.replace(/\.0$/, "") || "",
    x: xFor(index),
    y: yFor(Number(row.valuation.match(/\$([\d.]+)/)?.[1] || 0)),
    label: row.date.slice(0, 7),
  }));

  const pointMarkup = points
    .map((point) => {
      const color = point.kind === "closed" ? "#3158b0" : "#9c6a22";
      const pointId = registerCommercialPoint({
        chartKey: "openai-valuation",
        seriesLabel: "OpenAI valuation",
        label: `${point.label} · ${point.type}`,
        valueText: point.valuation,
        note: point.note,
        color,
      });
      return `
        <circle class="commercial-chart-point" tabindex="0" role="button" aria-label="${escapeText(`OpenAI valuation ${point.label} ${point.valuation}`)}" data-commercial-point-id="${escapeText(pointId)}" cx="${point.x}" cy="${point.y}" r="6" fill="#fffdf8" stroke="${color}" stroke-width="3" />
        <text x="${point.x}" y="${point.y - 14}" text-anchor="middle" fill="#1f2528" font-size="11" font-weight="800">${point.short}</text>
        <text x="${point.x}" y="${height - 22}" text-anchor="middle" fill="#6f7478" font-size="10">${point.label}</text>
      `;
    })
    .join("");

  openaiValuationChart.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" fill="#fffdf8" />
    ${ticks
      .map((tick) => {
        const y = yFor(tick);
        return `
          <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(40,48,52,0.1)" />
          <text x="${margin.left - 10}" y="${y + 4}" text-anchor="end" fill="#6f7478" font-size="11">${tick}</text>
        `;
      })
      .join("")}
    <line x1="${margin.left}" y1="${margin.top + chartHeight}" x2="${width - margin.right}" y2="${margin.top + chartHeight}" stroke="#7d8286" />
    <polyline fill="none" stroke="#3158b0" stroke-width="3.2" points="${buildPolyline(points)}" />
    ${pointMarkup}
    <g transform="translate(${margin.left}, 10)">
      <line x1="0" y1="6" x2="28" y2="6" stroke="#3158b0" stroke-width="3.2" />
      <text x="36" y="10" fill="#1f2528" font-size="12">估值节点</text>
      <rect x="128" y="0" width="12" height="12" rx="3" fill="#3158b0" />
      <text x="146" y="10" fill="#1f2528" font-size="11">已完成 / 官方</text>
      <rect x="244" y="0" width="12" height="12" rx="3" fill="#9c6a22" />
      <text x="262" y="10" fill="#1f2528" font-size="11">媒体报道 / 融资谈判</text>
    </g>
  `;
  attachCommercialPointInteractions(openaiValuationChart);
}

function formatStValue(value) {
  return `${(value / 10000).toFixed(2).replace(/\.?0+$/, "")}亿`;
}

function formatStTick(value, mode = "absolute") {
  if (mode === "indexed") {
    return String(value);
  }
  return `${(value / 10000).toFixed(1).replace(/\.0$/, "")}亿`;
}

function getStSelectedProducts() {
  const products = Object.keys(stWeeklyData.overall);
  return selectedStProducts.size ? products.filter((product) => selectedStProducts.has(product)) : products;
}

function setupStProductChips() {
  if (!stProductChips) {
    return;
  }

  const products = Object.keys(stWeeklyData.overall);
  if (!selectedStProducts.size) {
    products.forEach((product) => selectedStProducts.add(product));
  }

  stProductChips.innerHTML = products
    .map(
      (product) =>
        `<button class="commercial-chip${selectedStProducts.has(product) ? " is-active" : ""}" type="button" data-st-product="${escapeText(product)}" style="--chip-color:${stProductColors[product] || "#5f6569"}">${escapeText(product)}</button>`,
    )
    .join("");

  stProductChips.querySelectorAll("[data-st-product]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.dataset.stProduct;
      if (selectedStProducts.has(product) && selectedStProducts.size > 1) {
        selectedStProducts.delete(product);
      } else {
        selectedStProducts.add(product);
      }
      setupStProductChips();
      renderStOverviewCards();
      renderStOverallChart();
      renderStCountryChart();
    });
  });
}

function setupStCountryChips() {
  if (!stCountryChips) {
    return;
  }

  const countries = Object.keys(stWeeklyData.countries);
  stCountryChips.innerHTML = countries
    .map(
      (country) =>
        `<button class="commercial-chip${activeStCountry === country ? " is-active" : ""}" type="button" data-st-country="${escapeText(country)}">${escapeText(country)}</button>`,
    )
    .join("");

  stCountryChips.querySelectorAll("[data-st-country]").forEach((button) => {
    button.addEventListener("click", () => {
      activeStCountry = button.dataset.stCountry;
      setupStCountryChips();
      renderStOverviewCards();
      renderStCountryChart();
    });
  });
}

function renderStOverviewCards() {
  const selectedProducts = getStSelectedProducts();
  let best = null;
  selectedProducts.forEach((product) => {
    stWeeklyData.overall[product].forEach((value, index) => {
      if (!best || value > best.value) {
        best = { product, value, week: stWeeklyData.weeks[index] };
      }
    });
  });

  if (stPeakValue && stPeakMeta && best) {
    stPeakValue.textContent = formatStValue(best.value);
    stPeakMeta.textContent = `${best.product} · ${best.week}`;
  }
  if (stActiveCountryLabel) {
    stActiveCountryLabel.textContent = activeStCountry;
  }
}

function renderStLineChart(svg, dataset, chartKey, title, options = {}) {
  if (!svg) {
    return;
  }

  const { mode = "absolute", excludeProducts = [] } = options;
  const width = 900;
  const height = 340;
  const margin = { top: 28, right: 92, bottom: 58, left: 62 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const labels = stWeeklyData.weeks;
  const selectedProducts = getStSelectedProducts().filter((product) => !excludeProducts.includes(product));
  if (!selectedProducts.length) {
    svg.innerHTML = `<text x="450" y="170" text-anchor="middle" fill="#6f7478" font-size="14">当前筛选下暂无可展示的产品</text>`;
    return;
  }

  const datasetForRender =
    mode === "indexed"
      ? Object.fromEntries(
          Object.entries(dataset).map(([product, values]) => [
            product,
            (values || []).map((value, index) => (index === 0 ? 100 : (value / (values[0] || 1)) * 100)),
          ]),
        )
      : dataset;
  const maxValue = Math.max(
    ...selectedProducts.flatMap((product) => datasetForRender[product] || [0]),
    0,
  );
  const niceMax =
    mode === "indexed"
      ? Math.ceil(maxValue / 20) * 20
      : maxValue > 10000
        ? Math.ceil(maxValue / 5000) * 5000
        : Math.ceil(maxValue / 500) * 500;
  const tickCount = 5;
  const ticks = Array.from({ length: tickCount + 1 }, (_, index) => Math.round((niceMax * index) / tickCount));
  const xFor = (index) => margin.left + (index / (labels.length - 1 || 1)) * chartWidth;
  const yFor = (value) => margin.top + chartHeight - (value / (niceMax || 1)) * chartHeight;

  const lineMarkup = selectedProducts
    .map((product) => {
      const color = stProductColors[product] || "#5f6569";
      const values = datasetForRender[product] || [];
      const rawValues = dataset[product] || [];
      const points = values.map((value, index) => ({
        label: labels[index],
        value,
        x: xFor(index),
        y: yFor(value),
      }));
      const lastPoint = points[points.length - 1];
      const pointMarkup = points
        .map((point) => {
          const pointIndex = points.indexOf(point);
          const pointId = registerCommercialPoint({
            chartKey,
            seriesLabel: product,
            label: point.label,
            valueText: mode === "indexed" ? `${point.value.toFixed(1)} (W1=100)` : `${rawValues[pointIndex]} 万`,
            note: `${title}；单位：万。`,
            color,
          });
          return `<circle class="commercial-chart-point" tabindex="0" role="button" aria-label="${escapeText(`${product} ${point.label} ${point.value}万`)}" data-commercial-point-id="${escapeText(pointId)}" cx="${point.x}" cy="${point.y}" r="4" fill="#fffdf8" stroke="${color}" stroke-width="2" />`;
        })
        .join("");
      return `
        <polyline fill="none" stroke="${color}" stroke-width="2.8" points="${buildPolyline(points)}" />
        ${pointMarkup}
        ${
          lastPoint
            ? `<text x="${Math.min(width - 18, lastPoint.x + 10)}" y="${lastPoint.y + 4}" fill="${color}" font-size="10.5" font-weight="700">${mode === "indexed" ? lastPoint.value.toFixed(0) : formatStValue(rawValues[rawValues.length - 1])}</text>`
            : ""
        }
      `;
    })
    .join("");

  const weekHitMarkup = labels
    .map((label, index) => {
      const x = xFor(index);
      const prevX = index === 0 ? margin.left : (xFor(index - 1) + x) / 2;
      const nextX = index === labels.length - 1 ? width - margin.right : (x + xFor(index + 1)) / 2;
      return `<rect class="st-week-hit" data-week-index="${index}" x="${prevX}" y="${margin.top}" width="${Math.max(8, nextX - prevX)}" height="${chartHeight}" fill="transparent" />`;
    })
    .join("");

  const legendMarkup = selectedProducts
    .map((product, index) => {
      const x = margin.left + (index % 3) * 180;
      const y = 10 + Math.floor(index / 3) * 18;
      const color = stProductColors[product] || "#5f6569";
      return `
        <g transform="translate(${x}, ${y})">
          <line x1="0" y1="6" x2="22" y2="6" stroke="${color}" stroke-width="2.8" />
          <text x="28" y="10" fill="#1f2528" font-size="11">${escapeHtml(product)}</text>
        </g>
      `;
    })
    .join("");

  svg.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" fill="#fffdf8" />
    ${ticks
      .map((tick) => {
        const y = yFor(tick);
        return `
          <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(40,48,52,0.1)" />
          <text x="${margin.left - 10}" y="${y + 4}" text-anchor="end" fill="#6f7478" font-size="11">${formatStTick(tick, mode)}</text>
        `;
      })
      .join("")}
    <line x1="${margin.left}" y1="${margin.top + chartHeight}" x2="${width - margin.right}" y2="${margin.top + chartHeight}" stroke="#7d8286" />
    ${labels
      .map((label, index) => `<text x="${xFor(index)}" y="${height - 18}" text-anchor="middle" fill="#6f7478" font-size="10">${label.slice(5, 10)}</text>`)
      .join("")}
    ${weekHitMarkup}
    ${lineMarkup}
    ${legendMarkup}
  `;
  attachCommercialPointInteractions(svg);
  svg.querySelectorAll(".st-week-hit").forEach((node) => {
    node.addEventListener("click", (event) => {
      event.stopPropagation();
      const weekIndex = Number(node.dataset.weekIndex);
      const rows = selectedProducts
        .map((product) => {
          const rawValue = dataset[product]?.[weekIndex] ?? 0;
          const indexedValue = dataset[product]?.[0] ? ((rawValue / dataset[product][0]) * 100).toFixed(0) : "-";
          return {
            product,
            rawValue,
            display: mode === "indexed" ? `${indexedValue}（${formatStValue(rawValue)}）` : formatStValue(rawValue),
          };
        })
        .sort((a, b) => b.rawValue - a.rawValue);
      const html = rows
        .map(
          (row) =>
            `<span><strong style="color:${stProductColors[row.product] || "#1f2528"}">${escapeHtml(row.product)}</strong>：${escapeHtml(row.display)}</span>`,
        )
        .join("");
      showCommercialHtmlTooltip(
        {
          title,
          label: labels[weekIndex],
          html,
          color: "#3158b0",
          width: 360,
        },
        node,
      );
    });
  });
}

function renderStOverallChart() {
  renderStLineChart(stOverallChart, stWeeklyData.overall, "st-overall", "整体峰值 DAU 周度走势");
}

function renderStExChatgptChart() {
  renderStLineChart(
    stExChatgptChart,
    stWeeklyData.overall,
    "st-overall-ex-chatgpt",
    "不含 ChatGPT / Gemini 的峰值 DAU 周度走势",
    { excludeProducts: ["ChatGPT", "Gemini"] },
  );
}

function renderStIndexedChart() {
  renderStLineChart(
    stIndexedChart,
    stWeeklyData.overall,
    "st-indexed",
    "指数化增长走势",
    { mode: "indexed" },
  );
}

function renderStCountryChart() {
  renderStLineChart(
    stCountryChart,
    stWeeklyData.countries[activeStCountry] || {},
    `st-country-${activeStCountry}`,
    `${activeStCountry} 峰值 DAU 周度走势`,
  );
}

function renderStPanel() {
  setupStProductChips();
  setupStCountryChips();
  renderStOverviewCards();
  renderStOverallChart();
  renderStExChatgptChart();
  renderStIndexedChart();
  renderStCountryChart();
}

function renderCommercialPanel() {
  hideCommercialTooltip();
  renderAnthropicCostChart();
  renderAnthropicRevenueChart();
  renderAnthropicAnnualRevenueChart();
  renderAnthropicMarginChart();
  renderAnthropicMarginLineChart();
  renderAnthropicFundingChart();
  renderAnthropicFundingTable();
  renderOpenAIRevenueChart();
  renderOpenAIAnnualRevenueChart();
  renderOpenAICostChart();
  renderOpenAIMarginChart();
  renderOpenAIValuationChart();
  renderOpenAIValuationTable();
}

function render() {
  const keyword = searchInput.value.trim().toLowerCase();
  const filtered = events.filter((event) => {
    const byCompany = activeCompany === "all" || event.company === activeCompany;
    const text = `${event.date} ${event.company} ${event.model} ${getModelType(event)} ${getExpandedNote(event)}`.toLowerCase();
    return byCompany && (!keyword || text.includes(keyword));
  });

  eventCount.textContent = filtered.length;

  if (!filtered.length) {
    timeline.innerHTML = '<p class="empty">没有匹配的模型发布记录</p>';
    return;
  }

  timeline.innerHTML = `
    <div class="timeline">
      ${filtered
        .map(
          (event) => `
            <article class="event-card" style="--company-color: ${companyColors[event.company]}">
              <div class="event-head">
                <time class="date" datetime="${event.date}">${formatDate(event.date)}</time>
                <div class="event-tags">
                  <span class="kind">${getModelType(event)}</span>
                  <span class="company">${event.company}</span>
                </div>
              </div>
              <div class="model">${event.model}</div>
              <p class="note">${getExpandedNote(event)}</p>
              <a class="source" href="${event.source}" target="_blank" rel="noreferrer">查看来源</a>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function setVerifiedText() {
  const meta = document.createElement("p");
  meta.className = "verified";
  meta.textContent = `数据核验至 ${verifiedAt}，优先采用官方发布页、模型文档和产品公告。`;
  topbar.append(meta);
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    activeCompany = chip.dataset.company;
    chips.forEach((item) => item.classList.toggle("is-active", item === chip));
    render();
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;
    tabButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    tabPanels.forEach((panel) => panel.classList.toggle("is-active", panel.id === target));
    if (target === "price-chart") {
      renderPriceChart();
    }
    if (target === "weekly") {
      renderWeeklyPicks();
    }
    if (target === "commercial") {
      renderCommercialPanel();
    }
    if (target === "overseas-st") {
      renderStPanel();
    }
  });
});

commercialChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    activeCommercialCompany = chip.dataset.commercialCompany;
    commercialChips.forEach((item) => item.classList.toggle("is-active", item === chip));
    commercialPanels.forEach((panel) =>
      panel.classList.toggle("is-active", panel.dataset.commercialPanel === activeCommercialCompany),
    );
    renderCommercialPanel();
  });
});

clearWeekly?.addEventListener("click", () => {
  saveWeeklyPicks(new Set());
  document.querySelectorAll(".weekly-select input").forEach((input) => {
    input.checked = false;
    input.closest(".news-card")?.classList.remove("is-selected");
  });
  renderWeeklyPicks();
});

searchInput.addEventListener("input", render);
currencySelect?.addEventListener("change", renderPriceTable);
fxRate?.addEventListener("input", renderPriceTable);
priceMetricInputs.forEach((input) =>
  input.addEventListener("change", () => {
    chartView = null;
    hideChartTooltip();
    renderPriceChart();
  }),
);

setVerifiedText();
setupDailyNewsTimeline();
setupWeeklySelectors();
setupPriceCompanyFilter();
setupPriceChartInteractions();
renderPriceChart();
renderPriceTable();
renderCommercialPanel();
renderStPanel();
render();

document.addEventListener("click", (event) => {
  if (
    !commercialChartTooltip.hidden &&
    !commercialChartTooltip.contains(event.target) &&
    !event.target.closest(".commercial-chart-point")
  ) {
    hideCommercialTooltip();
  }
});
