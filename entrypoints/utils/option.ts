export const services = {
    // 传统机器翻译
    microsoft: "microsoft",
    deepL: "deepL",
    deeplx: "deeplx",
    google: "google",
    xiaoniu: "xiaoniu",
    // 大模型翻译
    openai: "openai",
    gemini: "gemini",
    yiyan: "yiyan",
    tongyi: "tongyi",
    zhipu: "zhipu",
    moonshot: "moonshot",
    claude: "claude",
    custom: "custom",
    infini: "infini",
    // baidu: 'baidu',
    baichuan: "baichuan",
    lingyi: "lingyi",
    deepseek: "deepseek",
    minimax: "minimax",
    jieyue: "jieyue", // 阶跃星辰
    groq: "groq",
    cozecom: "cozecom", // coze 支持机器人不支持模型
    cozecn: "cozecn",
    huanYuan: "huanYuan", // 腾讯混元
    doubao: "doubao", // 字节豆包
    siliconCloud: "siliconCloud", // 硅流
    openrouter: "openrouter", // openrouter
    grok: "grok", // X.AI 的 Grok
    newapi: "newapi", // New API 接口
};

export const servicesType = {
    // 阵营划分
    machine: new Set([services.microsoft, services.deepL, services.deeplx, services.google, services.xiaoniu,]),
    AI: new Set([
        services.openai,
        services.gemini,
        services.yiyan,
        services.tongyi,
        services.zhipu,
        services.moonshot,
        services.claude, services.custom,
        services.infini,
        services.baichuan,
        services.deepseek,
        services.lingyi,
        services.minimax,
        services.jieyue,
        services.groq,
        services.cozecom,
        services.cozecn,
        services.huanYuan,
        services.doubao,
        services.siliconCloud,
        services.openrouter,
        services.grok,
        services.newapi,
    ]),
    // 需要 token
    useToken: new Set([
        services.openai,
        services.gemini,
        services.tongyi,
        services.zhipu,
        services.moonshot,
        services.claude,
        services.deepL,
        services.deeplx,
        services.xiaoniu,
        services.infini,
        services.baichuan,
        services.deepseek,
        services.lingyi,
        services.minimax,
        services.jieyue,
        services.groq,
        services.custom,
        services.cozecom,
        services.cozecn,
        services.huanYuan,
        services.doubao,
        services.siliconCloud,
        services.openrouter,
        services.grok,
        services.newapi,
    ]),
    // 需要 model
    useModel: new Set([
        services.openai,
        services.gemini,
        services.yiyan,
        services.tongyi,
        services.zhipu,
        services.moonshot,
        services.claude,
        services.custom,
        services.infini,
        services.baichuan,
        services.deepseek,
        services.lingyi,
        services.minimax,
        services.jieyue,
        services.groq,
        services.huanYuan,
        services.doubao,
        services.siliconCloud,
        services.openrouter,
        services.grok,
        services.newapi,
    ]),
    // 支持代理
    useProxy: new Set([
        services.openai,
        services.gemini,
        services.claude,
        services.google,
        services.deepL,
        services.deeplx,
        services.moonshot,
        services.tongyi,
        services.xiaoniu,
        services.baichuan,
        services.deepseek,
        services.lingyi,
        services.jieyue,
        services.groq,
        services.cozecom,
        services.cozecn,
        services.huanYuan,
        services.doubao,
        services.siliconCloud,
        services.openrouter,
        services.grok,
    ]),
    // 支持自定义 URL 的服务
    useCustomUrl: new Set([
        services.custom,
        services.deeplx,
        services.newapi,
    ]),

    isMachine: (service: string) => servicesType.machine.has(service),
    isAI: (service: string) => servicesType.AI.has(service),
    isUseToken: (service: string) => servicesType.useToken.has(service),
    isUseProxy: (service: string) => servicesType.useProxy.has(service),
    isUseModel: (service: string) => servicesType.useModel.has(service),
    isCustom: (service: string) => service === services.custom,
    isNewApi: (service: string) => service === services.newapi,
    isUseAkSk: (service: string) => service === services.yiyan,
    isCoze: (service: string) => service === services.cozecom || service === services.cozecn,
    isUseCustomUrl: (service: string) => servicesType.useCustomUrl.has(service),
};

import { i18n } from './i18n';
export const customModelString = i18n.getMessage('custom_model');
export const models = new Map<string, Array<string>>([
    [services.openai, ["gpt-5-nano", "gpt-5-mini", "gpt5", "gpt-5-chat-latest", "gpt-4.1", "gpt-4.1-mini", "gpt-4.1-nano", "gpt-4o-mini", "gpt-4o", "o3", "o3-mini", customModelString]],
    [services.gemini, ["gemini-2.5-flash-lite", "gemini-2.5-flash", "gemini-2.5-pro", customModelString]],
    [services.yiyan, ["ERNIE-Bot 4.0", "ERNIE-Bot", "ERNIE-Speed-8K"]],
    [services.tongyi, ["qwen-long", "qwen-turbo", "qwen-plus", "qwen3-8b", "qwen-mt-plus", "qwen-mt-turbo", customModelString]],
    [services.zhipu, ["glm-4.5", "GLM-4-Flash", "glm-4-plus", "glm-4", "glm-4v", customModelString]],
    [services.moonshot, ["kimi-k2-0711-preview", "kimi-k2-turbo-preview", "moonshot-v1-auto", "moonshot-v1-8k", "moonshot-v1-32k", customModelString]],
    [services.claude, ["claude-sonnet-4-0", "claude-opus-4-1", "claude-3-5-haiku-latest"]],
    [services.custom, ["gpt-5-nano", "gpt-5-mini", "gpt5", "gpt-4o", "gemma:7b", "llama2:7b", "mistral:7b", customModelString]],
    [services.infini, ["llama-2-13b-chat", "llama-3.3-70b-instruct", "qwen2.5-14b-instruct", "gemma-2-27b-it", "glm-4-9b-chat", customModelString]],
    [services.baichuan, ["Baichuan4-Air", "Baichuan4-Turbo", "Baichuan4", customModelString]],
    [services.lingyi, ["yi-lightning", customModelString]],
    [services.deepseek, ["deepseek-chat", "deepseek-reasoner", customModelString]],
    [services.minimax, ["chatcompletion_v2"]],
    [services.jieyue, ["step-1-8k", customModelString]],
    [services.huanYuan, ["hunyuan-turbos-latest", "hunyuan-t1-latest", "hunyuan-a13b", "hunyuan-lite", "hunyuan-standard", customModelString]],
    [services.newapi, ["gemini-2.5-flash-lite", "gemini-2.0-flash", "gpt-5-nano", "gpt-5-mini", "gpt5", "gpt-4.1-mini", "gpt-4.1-nano", "gpt-4o-mini", customModelString]],
    [services.grok, ["grok-4-0709","grok-3-mini", customModelString]],
    [services.doubao, [customModelString]],

    // mix model
    [services.siliconCloud, ["Qwen/Qwen3-Coder-30B-A3B-Instruct", "Qwen/Qwen3-8B", "THUDM/GLM-Z1-9B-0414", "THUDM/GLM-4-9B-0414",
        "deepseek-ai/DeepSeek-R1-Distill-Qwen-7B", "deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B",
        "Qwen/Qwen2.5-7B-Instruct", "internlm/internlm2_5-7b-chat", "THUDM/glm-4-9b-chat", customModelString]],

    [services.groq, ["llama-3.1-8b-instant", "llama3-8b-8192", "llama-3.3-70b-versatile", "gemma2-9b-it", "mixtral-8x7b-32768", "whisper-large-v3", customModelString]],
    [services.openrouter, ["meta-llama/llama-3.1-8b-instruct", "google/gemini-2.0-flash-exp", "qwen/qwen-2-7b-instruct", "huggingfaceh4/zephyr-7b-beta", customModelString]]
]);

export const options = {
    on: [
        {value: true, label: i18n.getMessage('options_on')},
        {value: false, label: i18n.getMessage('options_off')},
    ],
    // 是否即时翻译
    autoTranslate: [
        {value: true, label: i18n.getMessage('options_on')},
        {value: false, label: i18n.getMessage('options_off')},
    ],
    // 是否使用缓存
    useCache: [
        {value: true, label: i18n.getMessage('options_on')},
        {value: false, label: i18n.getMessage('options_off')},
    ],
    form: [{value: "auto", label: i18n.getMessage('options_auto_detect')}],
    to: [
        {value: "zh-Hans", label: i18n.getMessage('options_chinese')},
        {value: "en", label: i18n.getMessage('options_english')},
        {value: "ja", label: i18n.getMessage('options_japanese')},
        {value: "ko", label: i18n.getMessage('options_korean')},
        {value: "fr", label: i18n.getMessage('options_french')},
        {value: "ru", label: i18n.getMessage('options_russian')},
    ],
    keys: [

        {value: "Computer", label: i18n.getMessage('options_keyboard'), disabled: true},
        {value: "Control", label: i18n.getMessage('options_ctrl')},
        {value: "Alt", label: i18n.getMessage('options_alt')},
        {value: "Shift", label: i18n.getMessage('options_shift')},
        {value: "`", label: i18n.getMessage('options_tilde')},

        {value: "mouse", label: i18n.getMessage('options_mouse'), disabled: true},
        {value: "DoubleClick", label: i18n.getMessage('options_double_click')},
        {value: "LongPress", label: i18n.getMessage('options_long_press')},
        {value: "MiddleClick", label: i18n.getMessage('options_middle_click')},

        {value: "touchscreen", label: i18n.getMessage('options_touchscreen'), disabled: true},
        {value: "TwoFinger", label: i18n.getMessage('options_two_finger')},
        {value: "ThreeFinger", label: i18n.getMessage('options_three_finger')},
        {value: "FourFinger", label: i18n.getMessage('options_four_finger')},
        {value: "DoubleClickScree", label: i18n.getMessage('options_double_click_screen')},
        {value: "TripleClickScree", label: i18n.getMessage('options_triple_click_screen')},
    ],
    services: [
        // 传统机器翻译
        {value: "machine", label: i18n.getMessage('options_machine_translation'), disabled: true},
        {value: services.microsoft, label: i18n.getMessage('options_microsoft_translator')},
        {value: services.google, label: i18n.getMessage('options_google_translate')},
        {value: services.deepL, label: i18n.getMessage('options_deepl')},
        {value: services.deeplx, label: i18n.getMessage('options_deeplx')},
        {value: services.xiaoniu, label: i18n.getMessage('options_niu_trans')},
        // 大模型翻译
        {value: "ai", label: i18n.getMessage('options_ai_translation'), disabled: true},
        {value: services.deepseek, label: i18n.getMessage('options_deepseek')},
        {value: services.siliconCloud, label: i18n.getMessage('options_siliconflow')},
        {value: services.huanYuan, label: i18n.getMessage('options_tencent_hunyuan')},
        {value: services.newapi, label: i18n.getMessage('options_new_api')},
        {value: services.grok, label: i18n.getMessage('options_grok')},
        {value: services.openrouter, label: i18n.getMessage('options_openrouter')},
        {value: services.groq, label: i18n.getMessage('options_groq')},
        {value: services.doubao, label: i18n.getMessage('options_bytedance_doubao')},
        {value: services.tongyi, label: i18n.getMessage('options_alibaba_tongyi')},
        {value: services.openai, label: i18n.getMessage('options_openai')},
        {value: services.moonshot, label: i18n.getMessage('options_kimi')},
        {value: services.zhipu, label: i18n.getMessage('options_zhipu_ai')},
        {value: services.baichuan, label: i18n.getMessage('options_baichuan')},
        {value: services.lingyi, label: i18n.getMessage('options_01ai')},
        {value: services.minimax, label: i18n.getMessage('options_minimax')},
        {value: services.jieyue, label: i18n.getMessage('options_step_star')},
        {value: services.infini, label: i18n.getMessage('options_infini_core')},
        {value: services.cozecom, label: i18n.getMessage('options_coze_international')},
        {value: services.cozecn, label: i18n.getMessage('options_coze_china')},
        {value: services.claude, label: i18n.getMessage('options_claude')},
        {value: services.gemini, label: i18n.getMessage('options_gemini')},
        {value: services.yiyan, label: i18n.getMessage('options_ernie_bot')},
        {value: services.custom, label: i18n.getMessage('options_custom')},
    ],
    display: [
        {value: 0, label: i18n.getMessage('options_translation_only_mode')},
        {value: 1, label: i18n.getMessage('options_bilingual_mode')},
    ],
    // 双语翻译样式
    styles: [
        // 基础样式
        {value: "basic", label: i18n.getMessage('options_basic_styles'), disabled: true},
        {value: 0, label: i18n.getMessage('options_simple_mode'), class: "fluent-display-default", group: "basic"},
        {value: 1, label: i18n.getMessage('options_bold'), class: "fluent-display-bold", group: "basic"},
        {value: 2, label: i18n.getMessage('options_elegant_italic'), class: "fluent-display-italic", group: "basic"},
        {value: 3, label: i18n.getMessage('options_text_shadow'), class: "fluent-display-text-shadow", group: "basic"},

        // 下划线系列
        {value: "underline", label: i18n.getMessage('options_underline_series'), disabled: true},
        {value: 4, label: i18n.getMessage('options_blue_solid_line'), class: "fluent-display-solid-underline", group: "underline"},
        {value: 5, label: i18n.getMessage('options_elegant_dotted_line'), class: "fluent-display-dot-underline", group: "underline"},
        {value: 6, label: i18n.getMessage('options_lively_wavy_line'), class: "fluent-display-wavy", group: "underline"},

        // 卡片系列
        {value: "card", label: i18n.getMessage('options_card_series'), disabled: true},
        {value: 7, label: i18n.getMessage('options_simple_card'), class: "fluent-display-card-mode", group: "card"},
        {value: 8, label: i18n.getMessage('options_gradient_card'), class: "fluent-display-modern-card", group: "card"},
        {value: 9, label: i18n.getMessage('options_paper_card'), class: "fluent-display-paper", group: "card"},

        // 高亮系列
        {value: "highlight", label: i18n.getMessage('options_highlight_series'), disabled: true},
        {value: 10, label: i18n.getMessage('options_study_marker'), class: "fluent-display-learning-mode", group: "highlight"},
        {value: 11, label: i18n.getMessage('options_fluorescent_marker'), class: "fluent-display-marker", group: "highlight"},
        {value: 12, label: i18n.getMessage('options_soft_gradient'), class: "fluent-display-highlight-fade", group: "highlight"},

        // 背景色系列
        {value: "background", label: i18n.getMessage('options_background_color_series'), disabled: true},
        {value: 13, label: i18n.getMessage('options_warm_yellow_background'), class: "fluent-display-lightyellow", group: "background"},
        {value: 14, label: i18n.getMessage('options_fresh_blue_background'), class: "fluent-display-lightblue", group: "background"},
        {value: 15, label: i18n.getMessage('options_plain_gray_background'), class: "fluent-display-lightgray", group: "background"},

        // 特殊效果
        {value: "special", label: i18n.getMessage('options_special_effects'), disabled: true},
        {value: 16, label: i18n.getMessage('options_elegant_quote'), class: "fluent-display-quote", group: "special"},
        {value: 17, label: i18n.getMessage('options_light_border'), class: "fluent-display-border", group: "special"},
        {value: 18, label: i18n.getMessage('options_reading_focus'), class: "fluent-display-focus", group: "special"},
        {value: 19, label: i18n.getMessage('options_simple_bottom_line'), class: "fluent-display-clean", group: "special"},

        // 专业样式
        {value: "pro", label: i18n.getMessage('options_professional_styles'), disabled: true},
        {value: 20, label: i18n.getMessage('options_code_style'), class: "fluent-display-tech", group: "pro"},
        {value: 21, label: i18n.getMessage('options_book_style'), class: "fluent-display-elegant", group: "pro"},

        // 透明度
        {value: "transparent", label: i18n.getMessage('options_transparent_effects'), disabled: true},
        {value: 22, label: i18n.getMessage('options_semi_transparent_dim'), class: "fluent-display-dimmed", group: "transparent"},
        {value: 23, label: i18n.getMessage('options_light_transparent_feel'), class: "fluent-display-transparent-mode", group: "transparent"},
    ],
    // 悬浮球快捷键选项
    floatingBallHotkeys: [
        {value: "Alt+T", label: i18n.getMessage('options_alt_t_default')},
        {value: "Alt+A", label: i18n.getMessage('options_alt_a')},
        {value: "Alt+S", label: i18n.getMessage('options_alt_s')},
        {value: "Ctrl+T", label: i18n.getMessage('options_ctrl_t')},
        {value: "Ctrl+Alt+T", label: i18n.getMessage('options_ctrl_alt_t')},
        {value: "Ctrl+Shift+T", label: i18n.getMessage('options_ctrl_shift_t')},
        {value: "none", label: i18n.getMessage('options_disable_hotkey')},
    ],
    theme: [
        {value: "auto", label: i18n.getMessage('options_follow_os')},
        {value: "light", label: i18n.getMessage('options_light_theme')},
        {value: "dark", label: i18n.getMessage('options_dark_theme')},
    ],
};

export const defaultOption = {
    on: true,
    from: "auto",
    to: "ja",
    style: 1,
    display: 1,
    hotkey: "Control",
    service: services.microsoft,
    custom: "http://localhost:11434/v1/chat/completions",
    deeplx: "http://localhost:1188/translate",
    system_role:
        "You are a professional, authentic machine translation engine.",
    user_role: `Translate the following text into {{to}}, If translation is unnecessary (e.g. proper nouns, codes, etc.), return the original text. NO explanations. NO notes:

{{origin}}`,
    count: 0,
    useCache: true,
    floatingBallHotkey: "Alt+T", // 默认悬浮球快捷键
};

