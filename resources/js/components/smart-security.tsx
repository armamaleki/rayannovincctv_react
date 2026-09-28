import {
    ArrowLeft,
    BrainCircuit,
    ScanFace,
    ShieldCheck,
    BellRing,
    Activity,
    Eye,
    Cpu,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { useState } from "react";

const smartFeatures = [
    {
        id: 1,
        title: "تشخیص چهره",
        english: "FACE RECOGNITION",
        description:
            "شناسایی افراد و کنترل ورود و خروج با استفاده از الگوریتم‌های هوش مصنوعی.",
        icon: ScanFace,
        image: "/images/smart-security/face-recognition.jpg",
        tag: "AI VISION",
    },
    {
        id: 2,
        title: "تشخیص انسان و خودرو",
        english: "AI DETECTION",
        description:
            "تفکیک هوشمند انسان و خودرو از سایر حرکات برای کاهش هشدارهای اشتباه.",
        icon: Eye,
        image: "/images/smart-security/ai-detection.jpg",
        tag: "SMART DETECTION",
    },
    {
        id: 3,
        title: "تشخیص نفوذ",
        english: "INTRUSION DETECTION",
        description:
            "تعریف محدوده‌های حساس و شناسایی ورود غیرمجاز به‌صورت لحظه‌ای.",
        icon: ShieldCheck,
        image: "/images/smart-security/intrusion.jpg",
        tag: "SECURITY AI",
    },
    {
        id: 4,
        title: "تحلیل رفتار",
        english: "BEHAVIOR ANALYTICS",
        description:
            "تحلیل هوشمند اتفاقات محیط و شناسایی رفتارهای غیرعادی.",
        icon: Activity,
        image: "/images/smart-security/behavior.jpg",
        tag: "AI ANALYTICS",
    },
];

export default function SmartSecurity() {
    const [active, setActive] = useState(0);
    const [isDark, setIsDark] = useState(true);

    const current = smartFeatures[active];
    const Icon = current.icon;

    const next = () => {
        setActive((value) =>
            value === smartFeatures.length - 1 ? 0 : value + 1
        );
    };

    const prev = () => {
        setActive((value) =>
            value === 0 ? smartFeatures.length - 1 : value - 1
        );
    };

    return (
        <section
            dir="rtl"
            className={`relative overflow-hidden py-28 transition-colors duration-500 ${
                isDark
                    ? "bg-[#070a0f] text-white"
                    : "bg-[#edf1f4] text-[#152434]"
            }`}
        >
            {/* Background Grid */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className={`absolute left-[25%] top-0 h-[600px] w-[600px] rounded-full blur-[180px] ${
                        isDark
                            ? "bg-violet-900/20"
                            : "bg-indigo-200/40"
                    }`}
                />

                <div
                    className={`absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full blur-[180px] ${
                        isDark
                            ? "bg-blue-900/15"
                            : "bg-blue-200/30"
                    }`}
                />

                <div
                    className={`absolute inset-0 opacity-[0.035] ${
                        isDark
                            ? "bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]"
                            : "bg-[linear-gradient(rgba(21,36,52,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(21,36,52,.7)_1px,transparent_1px)]"
                    } bg-[size:80px_80px]`}
                />
            </div>

            <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

                {/* Header */}
                <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

                    <div className="max-w-3xl">

                        <div className="mb-6 flex items-center gap-3">
                            <span
                                className={`h-px w-12 ${
                                    isDark
                                        ? "bg-violet-400"
                                        : "bg-indigo-500"
                                }`}
                            />

                            <span
                                className={`text-xs font-black tracking-[0.3em] ${
                                    isDark
                                        ? "text-violet-300"
                                        : "text-indigo-600"
                                }`}
                            >
                                AI / SMART SECURITY
                            </span>
                        </div>

                        <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                            امنیتی که
                            <br />

                            <span
                                className={
                                    isDark
                                        ? "text-violet-400"
                                        : "text-indigo-600"
                                }
                            >
                                هوشمند فکر می‌کند.
                            </span>
                        </h2>

                        <p
                            className={`mt-7 max-w-2xl text-base leading-8 sm:text-lg ${
                                isDark
                                    ? "text-slate-400"
                                    : "text-slate-600"
                            }`}
                        >
                            نسل جدید سیستم‌های نظارتی فقط تصویر را ثبت
                            نمی‌کنند؛ محیط را تحلیل می‌کنند، اتفاقات مهم را
                            تشخیص می‌دهند و در زمان مناسب به شما هشدار می‌دهند.
                        </p>
                    </div>

                    {/* AI Badge */}
                    <div
                        className={`hidden h-32 w-32 items-center justify-center rounded-full border lg:flex ${
                            isDark
                                ? "border-violet-400/20 bg-violet-500/5"
                                : "border-indigo-300 bg-indigo-50"
                        }`}
                    >
                        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-current">
                            <BrainCircuit
                                className={`h-9 w-9 ${
                                    isDark
                                        ? "text-violet-400"
                                        : "text-indigo-600"
                                }`}
                            />

                            <span
                                className={`absolute -right-1 top-1 h-2 w-2 rounded-full ${
                                    isDark
                                        ? "bg-violet-400"
                                        : "bg-indigo-500"
                                }`}
                            />
                        </div>
                    </div>
                </div>

                {/* Main Showcase */}
                <div className="grid gap-5 lg:grid-cols-[1.4fr_.6fr]">

                    {/* Main Visual */}
                    <div
                        className={`group relative min-h-[600px] overflow-hidden rounded-[36px] border ${
                            isDark
                                ? "border-white/10 bg-[#0e131a]"
                                : "border-slate-200 bg-white"
                        }`}
                    >

                        {/* Image */}
                        <img
                            src={current.image}
                            alt={current.title}
                            className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                        <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent" />

                        {/* Scan Line */}
                        <div className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-violet-400/50 opacity-60 shadow-[0_0_20px_rgba(167,139,250,.8)]" />

                        {/* AI Status */}
                        <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-xl">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>

                            AI SYSTEM ACTIVE
                        </div>

                        {/* Detection Box */}
                        <div className="absolute right-[30%] top-[25%] hidden h-40 w-32 border border-violet-400/80 sm:block">
                            <span className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-violet-300" />
                            <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-violet-300" />
                            <span className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-violet-300" />
                            <span className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-violet-300" />

                            <div className="absolute -top-7 right-0 rounded bg-violet-500 px-2 py-1 text-[9px] font-bold text-white">
                                HUMAN 98.7%
                            </div>
                        </div>

                        {/* Bottom Content */}
                        <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">

                            <div className="mb-5 flex items-center gap-3">
                                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-bold tracking-widest text-white/70 backdrop-blur">
                                    {current.tag}
                                </span>

                                <span className="text-xs text-white/40">
                                    0{active + 1} / 0{smartFeatures.length}
                                </span>
                            </div>

                            <div className="flex items-end justify-between gap-6">

                                <div className="max-w-xl">
                                    <div className="mb-3 flex items-center gap-3">
                                        <Icon className="h-5 w-5 text-violet-300" />

                                        <span className="text-xs font-bold tracking-widest text-white/50">
                                            {current.english}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-black sm:text-5xl">
                                        {current.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
                                        {current.description}
                                    </p>
                                </div>

                                <a
                                    href="/smart-security"
                                    className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform hover:-translate-x-1 sm:flex"
                                >
                                    <ArrowLeft className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-3">

                        {smartFeatures.map((feature, index) => {
                            const FeatureIcon = feature.icon;
                            const isActive = active === index;

                            return (
                                <button
                                    key={feature.id}
                                    type="button"
                                    onClick={() => setActive(index)}
                                    className={`group relative flex flex-1 items-center gap-5 overflow-hidden rounded-[24px] border p-5 text-right transition-all duration-300 ${
                                        isActive
                                            ? isDark
                                                ? "border-violet-400/30 bg-violet-500/10"
                                                : "border-indigo-300 bg-indigo-50"
                                            : isDark
                                                ? "border-white/10 bg-white/[0.025] hover:bg-white/[0.05]"
                                                : "border-slate-200 bg-white hover:bg-slate-50"
                                    }`}
                                >
                                    {/* Number */}
                                    <span
                                        className={`absolute left-5 top-4 text-[10px] font-black ${
                                            isActive
                                                ? isDark
                                                    ? "text-violet-300"
                                                    : "text-indigo-500"
                                                : isDark
                                                    ? "text-slate-700"
                                                    : "text-slate-300"
                                        }`}
                                    >
                                        0{index + 1}
                                    </span>

                                    {/* Icon */}
                                    <div
                                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                                            isActive
                                                ? isDark
                                                    ? "bg-violet-400 text-black"
                                                    : "bg-indigo-600 text-white"
                                                : isDark
                                                    ? "bg-white/5 text-slate-400"
                                                    : "bg-slate-100 text-slate-500"
                                        }`}
                                    >
                                        <FeatureIcon className="h-6 w-6" />
                                    </div>

                                    <div className="min-w-0">
                                        <div
                                            className={`mb-1 text-xs font-bold tracking-wider ${
                                                isDark
                                                    ? "text-slate-500"
                                                    : "text-slate-400"
                                            }`}
                                        >
                                            {feature.english}
                                        </div>

                                        <h3 className="text-base font-black">
                                            {feature.title}
                                        </h3>

                                        <p
                                            className={`mt-1 line-clamp-2 text-xs leading-6 ${
                                                isDark
                                                    ? "text-slate-500"
                                                    : "text-slate-500"
                                            }`}
                                        >
                                            {feature.description}
                                        </p>
                                    </div>

                                    <ChevronLeft
                                        className={`mr-auto h-4 w-4 shrink-0 transition-all ${
                                            isActive
                                                ? "translate-x-0 opacity-100"
                                                : "translate-x-2 opacity-0"
                                        } ${
                                            isDark
                                                ? "text-violet-300"
                                                : "text-indigo-600"
                                        }`}
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Metrics */}
                <div
                    className={`mt-5 grid grid-cols-2 overflow-hidden rounded-[28px] border sm:grid-cols-4 ${
                        isDark
                            ? "border-white/10 bg-white/[0.02]"
                            : "border-slate-200 bg-white"
                    }`}
                >
                    {[
                        {
                            icon: Cpu,
                            value: "AI",
                            label: "پردازش هوشمند",
                        },
                        {
                            icon: Eye,
                            value: "24/7",
                            label: "نظارت مداوم",
                        },
                        {
                            icon: BellRing,
                            value: "< 1s",
                            label: "تشخیص سریع",
                        },
                        {
                            icon: ShieldCheck,
                            value: "Smart",
                            label: "امنیت نسل جدید",
                        },
                    ].map((item, index) => {
                        const MetricIcon = item.icon;

                        return (
                            <div
                                key={item.label}
                                className={`flex items-center gap-4 p-6 ${
                                    index !== 0
                                        ? isDark
                                            ? "border-r border-white/10"
                                            : "border-r border-slate-200"
                                        : ""
                                }`}
                            >
                                <MetricIcon
                                    className={`h-5 w-5 ${
                                        isDark
                                            ? "text-violet-400"
                                            : "text-indigo-600"
                                    }`}
                                />

                                <div>
                                    <div className="text-lg font-black">
                                        {item.value}
                                    </div>

                                    <div
                                        className={`text-[10px] ${
                                            isDark
                                                ? "text-slate-500"
                                                : "text-slate-400"
                                        }`}
                                    >
                                        {item.label}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation */}
                <div className="mt-8 flex items-center justify-between">

                    <div className="flex gap-2">
                        {smartFeatures.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                aria-label={`نمایش قابلیت ${index + 1}`}
                                onClick={() => setActive(index)}
                                className={`h-1.5 rounded-full transition-all ${
                                    active === index
                                        ? `w-10 ${
                                            isDark
                                                ? "bg-violet-400"
                                                : "bg-indigo-600"
                                        }`
                                        : `w-2 ${
                                            isDark
                                                ? "bg-white/20"
                                                : "bg-slate-300"
                                        }`
                                }`}
                            />
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={prev}
                            aria-label="قابلیت قبلی"
                            className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                                isDark
                                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                                    : "border-slate-200 bg-white hover:bg-slate-50"
                            }`}
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>

                        <button
                            type="button"
                            onClick={next}
                            aria-label="قابلیت بعدی"
                            className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                                isDark
                                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                                    : "border-slate-200 bg-white hover:bg-slate-50"
                            }`}
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                @media (prefers-reduced-motion: reduce) {
                    *,
                    *::before,
                    *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>
        </section>
    );
}