import React, { useMemo, useState } from "react";
import {
    ArrowLeft,
    ArrowUpLeft,
    Building2,
    Car,
    Check,
    ChevronLeft,
    Home,
    Hotel,
    Shield,
    ShieldCheck,
    ShoppingBag,
    Store,
    Warehouse,
    Wifi,
    Zap,
} from "lucide-react";

const solutions = [
    {
        id: "home",
        title: "امنیت منزل",
        shortTitle: "منزل",
        description:
            "یک راهکار کامل برای محافظت از خانه، ورودی‌ها، پارکینگ و محیط اطراف با امکان مشاهده و کنترل از راه دور.",
        icon: Home,
        accent: "violet",
        image: "/images/solutions/home.jpg",
        devices: [
            "دوربین مداربسته",
            "دستگاه NVR",
            "سنسور حرکتی",
            "اعلام سرقت",
        ],
        features: [
            "مشاهده تصاویر از طریق موبایل",
            "تشخیص حرکت و ارسال هشدار",
            "پوشش ورودی و محیط اطراف",
        ],
    },
    {
        id: "business",
        title: "امنیت فروشگاه",
        shortTitle: "فروشگاه",
        description:
            "راهکاری برای کنترل فضای فروشگاه، صندوق، ورودی و مشتریان با تمرکز روی کاهش ریسک سرقت و افزایش کنترل.",
        icon: Store,
        accent: "blue",
        image: "/images/solutions/store.jpg",
        devices: [
            "دوربین ضدسرقت",
            "دوربین سقفی",
            "NVR",
            "سوئیچ شبکه",
        ],
        features: [
            "پوشش کامل سالن فروش",
            "کنترل صندوق و ورودی",
            "ضبط مداوم تصاویر",
        ],
    },
    {
        id: "office",
        title: "امنیت شرکت و دفتر",
        shortTitle: "شرکت",
        description:
            "راهکاری یکپارچه برای کنترل ورود و خروج، نظارت بر محیط کاری و مدیریت دسترسی کارکنان.",
        icon: Building2,
        accent: "cyan",
        image: "/images/solutions/office.jpg",
        devices: [
            "کنترل تردد",
            "دوربین IP",
            "NVR",
            "اکسس کنترل",
        ],
        features: [
            "مدیریت ورود و خروج",
            "کنترل دسترسی",
            "نظارت بر محیط کاری",
        ],
    },
    {
        id: "warehouse",
        title: "انبار و سوله",
        shortTitle: "انبار",
        description:
            "پوشش محیط‌های وسیع با دوربین‌های مناسب فضای باز، دید در شب و تجهیزات شبکه قدرتمند.",
        icon: Warehouse,
        accent: "amber",
        image: "/images/solutions/warehouse.jpg",
        devices: [
            "دوربین دید در شب",
            "دوربین PTZ",
            "NVR",
            "تجهیزات شبکه",
        ],
        features: [
            "پوشش محیط‌های وسیع",
            "دید در شب قدرتمند",
            "کنترل نقاط حساس",
        ],
    },
    {
        id: "parking",
        title: "پارکینگ و محوطه",
        shortTitle: "پارکینگ",
        description:
            "راهکاری برای نظارت بر خودروها، ورودی و خروجی، پلاک‌خوانی و کنترل محوطه.",
        icon: Car,
        accent: "emerald",
        image: "/images/solutions/parking.jpg",
        devices: [
            "دوربین پلاک‌خوان",
            "دوربین PTZ",
            "دوربین فضای باز",
            "NVR",
        ],
        features: [
            "پلاک‌خوانی خودروها",
            "نظارت شبانه‌روزی",
            "پوشش ورودی و خروجی",
        ],
    },
    {
        id: "hotel",
        title: "هتل و مجتمع",
        shortTitle: "هتل",
        description:
            "راهکاری یکپارچه برای افزایش امنیت مهمانان، کارکنان و فضاهای عمومی و اختصاصی.",
        icon: Hotel,
        accent: "pink",
        image: "/images/solutions/hotel.jpg",
        devices: [
            "دوربین IP",
            "کنترل تردد",
            "اکسس کنترل",
            "NVR",
        ],
        features: [
            "نظارت بر فضاهای عمومی",
            "کنترل دسترسی",
            "مدیریت چند نقطه‌ای",
        ],
    },
];

const accentClasses = {
    violet: {
        soft: "bg-violet-500/10",
        text: "text-violet-500",
        border: "border-violet-500/20",
        glow: "shadow-violet-500/10",
    },
    blue: {
        soft: "bg-blue-500/10",
        text: "text-blue-500",
        border: "border-blue-500/20",
        glow: "shadow-blue-500/10",
    },
    cyan: {
        soft: "bg-cyan-500/10",
        text: "text-cyan-500",
        border: "border-cyan-500/20",
        glow: "shadow-cyan-500/10",
    },
    amber: {
        soft: "bg-amber-500/10",
        text: "text-amber-500",
        border: "border-amber-500/20",
        glow: "shadow-amber-500/10",
    },
    emerald: {
        soft: "bg-emerald-500/10",
        text: "text-emerald-500",
        border: "border-emerald-500/20",
        glow: "shadow-emerald-500/10",
    },
    pink: {
        soft: "bg-pink-500/10",
        text: "text-pink-500",
        border: "border-pink-500/20",
        glow: "shadow-pink-500/10",
    },
};

export default function SolutionsByNeed() {
    const [isDark, setIsDark] = useState(false);
    const [activeId, setActiveId] = useState("home");

    const activeSolution = useMemo(
        () => solutions.find((item) => item.id === activeId) ?? solutions[0],
        [activeId]
    );

    const Icon = activeSolution.icon;
    const accent = accentClasses[activeSolution.accent];

    return (
        <section
            dir="rtl"
            className={`relative overflow-hidden py-24 transition-colors duration-500 ${
                isDark
                    ? "bg-[#080b10] text-white"
                    : "bg-[#eef2f5] text-[#152434]"
            }`}
        >
            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className={`absolute -right-40 top-20 h-[420px] w-[420px] rounded-full blur-[140px] ${
                        isDark
                            ? "bg-violet-600/10"
                            : "bg-violet-400/15"
                    }`}
                />

                <div
                    className={`absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full blur-[140px] ${
                        isDark
                            ? "bg-blue-600/10"
                            : "bg-blue-400/10"
                    }`}
                />

                <div
                    className={`absolute inset-0 opacity-[0.035] ${
                        isDark ? "bg-white" : "bg-slate-900"
                    }`}
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)
                        `,
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
                {/* Header */}
                <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <div className="mb-4 flex items-center gap-3">
                            <span
                                className={`h-px w-10 ${
                                    isDark
                                        ? "bg-violet-400"
                                        : "bg-violet-500"
                                }`}
                            />

                            <span
                                className={`text-sm font-bold tracking-wide ${
                                    isDark
                                        ? "text-violet-300"
                                        : "text-violet-600"
                                }`}
                            >
                                راهکارهای امنیتی
                            </span>
                        </div>

                        <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                            راهکارها بر اساس{" "}
                            <span
                                className={`bg-gradient-to-l bg-clip-text text-transparent ${
                                    isDark
                                        ? "from-violet-300 via-fuchsia-300 to-blue-300"
                                        : "from-violet-600 via-fuchsia-600 to-blue-600"
                                }`}
                            >
                                نیاز شما
                            </span>
                        </h2>

                        <p
                            className={`mt-5 max-w-xl text-base leading-8 sm:text-lg ${
                                isDark
                                    ? "text-white/55"
                                    : "text-slate-500"
                            }`}
                        >
                            فرقی نمی‌کند برای خانه، فروشگاه، شرکت یا یک
                            مجموعه بزرگ به سیستم امنیتی نیاز داشته باشید؛
                            راهکار مناسب باید متناسب با محیط و نیاز شما
                            طراحی شود.
                        </p>
                    </div>

                    {/* Theme */}
                    <button
                        type="button"
                        onClick={() => setIsDark((value) => !value)}
                        className={`flex h-11 w-fit items-center gap-2 rounded-full border px-4 text-sm font-bold transition-all ${
                            isDark
                                ? "border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/[0.08]"
                                : "border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50"
                        }`}
                    >
                        <Zap size={16} />
                        {isDark ? "حالت روشن" : "حالت تاریک"}
                    </button>
                </div>

                {/* Main */}
                <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
                    {/* Needs */}
                    <div
                        className={`rounded-[32px] border p-3 ${
                            isDark
                                ? "border-white/10 bg-white/[0.025]"
                                : "border-slate-200 bg-white/70"
                        }`}
                    >
                        <div className="mb-3 px-4 pt-3">
                            <span
                                className={`text-xs font-bold ${
                                    isDark
                                        ? "text-white/35"
                                        : "text-slate-400"
                                }`}
                            >
                                نیاز خود را انتخاب کنید
                            </span>
                        </div>

                        <div className="space-y-2">
                            {solutions.map((solution) => {
                                const SolutionIcon = solution.icon;
                                const active =
                                    solution.id === activeSolution.id;
                                const solutionAccent =
                                    accentClasses[solution.accent];

                                return (
                                    <button
                                        key={solution.id}
                                        type="button"
                                        onClick={() =>
                                            setActiveId(solution.id)
                                        }
                                        className={`group flex w-full items-center gap-4 rounded-[22px] p-4 text-right transition-all duration-300 ${
                                            active
                                                ? isDark
                                                    ? "bg-white/[0.07] shadow-lg"
                                                    : "bg-slate-50 shadow-md"
                                                : isDark
                                                    ? "hover:bg-white/[0.04]"
                                                    : "hover:bg-slate-50/80"
                                        }`}
                                    >
                                        <span
                                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all ${
                                                active
                                                    ? `${solutionAccent.soft} ${solutionAccent.text}`
                                                    : isDark
                                                        ? "bg-white/[0.04] text-white/40"
                                                        : "bg-slate-100 text-slate-400"
                                            }`}
                                        >
                                            <SolutionIcon size={22} />
                                        </span>

                                        <span className="min-w-0 flex-1">
                                            <span
                                                className={`block font-bold ${
                                                    active
                                                        ? isDark
                                                            ? "text-white"
                                                            : "text-slate-900"
                                                        : isDark
                                                            ? "text-white/55"
                                                            : "text-slate-500"
                                                }`}
                                            >
                                                {solution.title}
                                            </span>

                                            <span
                                                className={`mt-1 block text-xs ${
                                                    isDark
                                                        ? "text-white/30"
                                                        : "text-slate-400"
                                                }`}
                                            >
                                                {solution.devices
                                                    .slice(0, 2)
                                                    .join(" • ")}
                                            </span>
                                        </span>

                                        <ChevronLeft
                                            size={18}
                                            className={`shrink-0 transition-all ${
                                                active
                                                    ? `${solutionAccent.text} -translate-x-1`
                                                    : isDark
                                                        ? "text-white/20"
                                                        : "text-slate-300"
                                            }`}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Solution showcase */}
                    <div
                        className={`group relative min-h-[560px] overflow-hidden rounded-[34px] border ${
                            isDark
                                ? "border-white/10 bg-[#0d1219]"
                                : "border-slate-200 bg-white"
                        }`}
                    >
                        {/* Image */}
                        <div className="absolute inset-0">
                            <img
                                src={activeSolution.image}
                                alt={activeSolution.title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                            />

                            <div
                                className={`absolute inset-0 ${
                                    isDark
                                        ? "bg-gradient-to-l from-[#080b10] via-[#080b10]/75 to-[#080b10]/20"
                                        : "bg-gradient-to-l from-white via-white/85 to-white/20"
                                }`}
                            />

                            <div
                                className={`absolute inset-0 ${
                                    isDark
                                        ? "bg-gradient-to-t from-[#080b10] via-transparent to-transparent"
                                        : "bg-gradient-to-t from-white/95 via-transparent to-transparent"
                                }`}
                            />
                        </div>

                        {/* Top badge */}
                        <div className="absolute right-6 top-6 flex items-center gap-2">
                            <span
                                className={`flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold backdrop-blur-xl ${
                                    isDark
                                        ? "border-white/10 bg-black/25 text-white/70"
                                        : "border-white/70 bg-white/70 text-slate-600"
                                }`}
                            >
                                <span className="relative flex h-2 w-2">
                                    <span
                                        className={`absolute inline-flex h-full w-full animate-ping rounded-full ${accent.text.replace(
                                            "text-",
                                            "bg-"
                                        )} opacity-60`}
                                    />
                                    <span
                                        className={`relative inline-flex h-2 w-2 rounded-full ${accent.text.replace(
                                            "text-",
                                            "bg-"
                                        )}`}
                                    />
                                </span>

                                راهکار اختصاصی
                            </span>
                        </div>

                        {/* Floating icon */}
                        <div
                            className={`absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border backdrop-blur-xl ${accent.soft} ${accent.border} ${accent.text}`}
                        >
                            <Icon size={25} />
                        </div>

                        {/* Content */}
                        <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                            <div className="max-w-2xl">
                                <div
                                    className={`mb-3 text-sm font-bold ${accent.text}`}
                                >
                                    راهکار برای {activeSolution.shortTitle}
                                </div>

                                <h3 className="text-3xl font-black sm:text-4xl">
                                    {activeSolution.title}
                                </h3>

                                <p
                                    className={`mt-4 max-w-xl text-sm leading-7 sm:text-base ${
                                        isDark
                                            ? "text-white/60"
                                            : "text-slate-500"
                                    }`}
                                >
                                    {activeSolution.description}
                                </p>

                                {/* Features */}
                                <div className="mt-6 grid gap-2 sm:grid-cols-3">
                                    {activeSolution.features.map(
                                        (feature) => (
                                            <div
                                                key={feature}
                                                className={`flex items-center gap-2 rounded-xl border px-3 py-3 text-xs font-bold backdrop-blur-md ${
                                                    isDark
                                                        ? "border-white/10 bg-black/20 text-white/70"
                                                        : "border-slate-200 bg-white/70 text-slate-600"
                                                }`}
                                            >
                                                <Check
                                                    size={14}
                                                    className={accent.text}
                                                />
                                                <span>{feature}</span>
                                            </div>
                                        )
                                    )}
                                </div>

                                {/* Devices */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {activeSolution.devices.map((device) => (
                                        <span
                                            key={device}
                                            className={`rounded-full border px-3 py-1.5 text-xs ${
                                                isDark
                                                    ? "border-white/10 bg-white/[0.04] text-white/45"
                                                    : "border-slate-200 bg-slate-50 text-slate-500"
                                            }`}
                                        >
                                            {device}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="mt-7 flex flex-wrap items-center gap-3">
                                    <a
                                        href="/solutions"
                                        className={`group/btn inline-flex items-center gap-3 rounded-2xl px-5 py-3.5 text-sm font-black text-white shadow-xl transition-all hover:-translate-y-0.5 ${
                                            activeSolution.accent === "violet"
                                                ? "bg-violet-600 shadow-violet-500/20 hover:bg-violet-500"
                                                : activeSolution.accent === "blue"
                                                    ? "bg-blue-600 shadow-blue-500/20 hover:bg-blue-500"
                                                    : activeSolution.accent ===
                                                    "cyan"
                                                        ? "bg-cyan-600 shadow-cyan-500/20 hover:bg-cyan-500"
                                                        : activeSolution.accent ===
                                                        "amber"
                                                            ? "bg-amber-600 shadow-amber-500/20 hover:bg-amber-500"
                                                            : activeSolution.accent ===
                                                            "emerald"
                                                                ? "bg-emerald-600 shadow-emerald-500/20 hover:bg-emerald-500"
                                                                : "bg-pink-600 shadow-pink-500/20 hover:bg-pink-500"
                                        }`}
                                    >
                                        مشاهده راهکار
                                        <ArrowLeft
                                            size={17}
                                            className="transition-transform group-hover/btn:-translate-x-1"
                                        />
                                    </a>

                                    <a
                                        href="/contact"
                                        className={`inline-flex items-center gap-2 rounded-2xl border px-5 py-3.5 text-sm font-bold transition-colors ${
                                            isDark
                                                ? "border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/[0.08]"
                                                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                                        }`}
                                    >
                                        مشاوره تخصصی
                                        <ArrowUpLeft size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom trust line */}
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                        {
                            icon: ShieldCheck,
                            title: "طراحی متناسب با محیط",
                            text: "تجهیزات بر اساس شرایط واقعی محل انتخاب می‌شوند.",
                        },
                        {
                            icon: Wifi,
                            title: "اتصال و کنترل هوشمند",
                            text: "امکان مشاهده و مدیریت سیستم از راه دور.",
                        },
                        {
                            icon: Shield,
                            title: "راهکار یکپارچه",
                            text: "از دوربین تا شبکه و کنترل دسترسی در یک راهکار.",
                        },
                    ].map((item) => {
                        const ItemIcon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className={`flex items-center gap-4 rounded-2xl border p-4 ${
                                    isDark
                                        ? "border-white/10 bg-white/[0.025]"
                                        : "border-slate-200 bg-white/60"
                                }`}
                            >
                                <div
                                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                                        isDark
                                            ? "bg-violet-500/10 text-violet-300"
                                            : "bg-violet-500/10 text-violet-600"
                                    }`}
                                >
                                    <ItemIcon size={20} />
                                </div>

                                <div>
                                    <div className="text-sm font-bold">
                                        {item.title}
                                    </div>

                                    <div
                                        className={`mt-1 text-xs leading-5 ${
                                            isDark
                                                ? "text-white/35"
                                                : "text-slate-400"
                                        }`}
                                    >
                                        {item.text}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                @media (prefers-reduced-motion: reduce) {
                    *,
                    *::before,
                    *::after {
                        scroll-behavior: auto !important;
                        transition-duration: 0.01ms !important;
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                    }
                }
            `}</style>
        </section>
    );
}