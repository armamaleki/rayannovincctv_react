import React, { useState } from "react";
import {
    ArrowLeft,
    BadgeCheck,
    ChevronLeft,
    Sparkles,
} from "lucide-react";

const brands = [
    {
        name: "Hikvision",
        persianName: "هایک ویژن",
        logo: "/images/brands/hikvision.svg",
        description: "راهکارهای حرفه‌ای نظارت تصویری و امنیت هوشمند",
        category: "دوربین و سیستم‌های نظارتی",
    },
    {
        name: "Dahua",
        persianName: "داهوا",
        logo: "/images/brands/dahua.svg",
        description: "تجهیزات نظارت تصویری و راهکارهای امنیتی هوشمند",
        category: "نظارت تصویری",
    },
    {
        name: "TP-Link",
        persianName: "تی پی لینک",
        logo: "/images/brands/tplink.svg",
        description: "تجهیزات شبکه و زیرساخت ارتباطی",
        category: "شبکه",
    },
    {
        name: "Uniview",
        persianName: "یونی ویو",
        logo: "/images/brands/uniview.svg",
        description: "سیستم‌های نظارت تصویری حرفه‌ای",
        category: "نظارت تصویری",
    },
    {
        name: "Tiandy",
        persianName: "تیاندی",
        logo: "/images/brands/tiandy.svg",
        description: "دوربین‌های حرفه‌ای و راهکارهای امنیتی",
        category: "دوربین مداربسته",
    },
    {
        name: "Ezviz",
        persianName: "ایزوییز",
        logo: "/images/brands/ezviz.svg",
        description: "راهکارهای هوشمند امنیتی برای خانه و کسب‌وکار",
        category: "امنیت هوشمند",
    },
    {
        name: "HiLook",
        persianName: "هایلوک",
        logo: "/images/brands/hilook.svg",
        description: "تجهیزات امنیتی و نظارتی اقتصادی",
        category: "نظارت تصویری",
    },
    {
        name: "Ruijie",
        persianName: "روژیه",
        logo: "/images/brands/ruijie.svg",
        description: "راهکارهای حرفه‌ای شبکه و زیرساخت",
        category: "شبکه",
    },
];

export default function Brands() {
    const [isDark, setIsDark] = useState(false);
    const [active, setActive] = useState(0);

    const brand = brands[active];

    return (
        <section
            dir="rtl"
            className={`relative overflow-hidden py-24 transition-colors duration-500 ${
                isDark
                    ? "bg-[#080b10] text-white"
                    : "bg-[#e8edf1] text-[#152434]"
            }`}
        >
            {/* Ambient */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className={`absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full blur-[150px] ${
                        isDark
                            ? "bg-violet-600/10"
                            : "bg-violet-400/10"
                    }`}
                />

                <div
                    className={`absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full blur-[140px] ${
                        isDark
                            ? "bg-blue-600/10"
                            : "bg-blue-400/10"
                    }`}
                />

                <div
                    className={`absolute inset-0 opacity-[0.035] ${
                        isDark ? "text-white" : "text-slate-900"
                    }`}
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)
                        `,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
                {/* Header */}
                <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <span
                                className={`h-px w-10 ${
                                    isDark
                                        ? "bg-violet-400"
                                        : "bg-violet-500"
                                }`}
                            />

                            <span
                                className={`text-sm font-bold ${
                                    isDark
                                        ? "text-violet-300"
                                        : "text-violet-600"
                                }`}
                            >
                                برندهای معتبر
                            </span>
                        </div>

                        <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                            بهترین‌ها را از{" "}
                            <span
                                className={`bg-gradient-to-l bg-clip-text text-transparent ${
                                    isDark
                                        ? "from-violet-300 via-fuchsia-300 to-blue-300"
                                        : "from-violet-600 via-fuchsia-600 to-blue-600"
                                }`}
                            >
                                بهترین برندها
                            </span>{" "}
                            انتخاب کنید
                        </h2>

                        <p
                            className={`mt-5 max-w-2xl text-base leading-8 ${
                                isDark
                                    ? "text-white/50"
                                    : "text-slate-500"
                            }`}
                        >
                            مجموعه‌ای از برندهای شناخته‌شده در حوزه
                            دوربین مداربسته، تجهیزات شبکه و سیستم‌های
                            امنیتی.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsDark((value) => !value)}
                        className={`flex h-11 w-fit items-center gap-2 rounded-full border px-4 text-sm font-bold ${
                            isDark
                                ? "border-white/10 bg-white/[0.04] text-white/70 hover:bg-white/[0.08]"
                                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                        }`}
                    >
                        <Sparkles size={16} />

                        {isDark ? "حالت روشن" : "حالت تاریک"}
                    </button>
                </div>

                {/* Brand showcase */}
                <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
                    {/* Brand wall */}
                    <div
                        className={`rounded-[34px] border p-4 sm:p-5 ${
                            isDark
                                ? "border-white/10 bg-white/[0.025]"
                                : "border-slate-200 bg-white/70"
                        }`}
                    >
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                            {brands.map((item, index) => {
                                const selected = index === active;

                                return (
                                    <button
                                        key={item.name}
                                        type="button"
                                        onClick={() => setActive(index)}
                                        className={`group relative flex aspect-[1.35/1] flex-col items-center justify-center overflow-hidden rounded-[24px] border p-5 transition-all duration-300 ${
                                            selected
                                                ? isDark
                                                    ? "border-violet-400/30 bg-violet-500/[0.08] shadow-xl shadow-violet-500/5"
                                                    : "border-violet-300 bg-violet-50 shadow-lg shadow-violet-500/5"
                                                : isDark
                                                    ? "border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.045]"
                                                    : "border-slate-200 bg-white hover:border-violet-200 hover:bg-slate-50"
                                        }`}
                                    >
                                        {/* Glow */}
                                        <div
                                            className={`pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${
                                                selected
                                                    ? "bg-violet-500/10 opacity-100"
                                                    : "bg-blue-500/5"
                                            }`}
                                        />

                                        <img
                                            src={item.logo}
                                            alt={item.name}
                                            className={`relative z-10 max-h-12 max-w-[125px] object-contain transition-all duration-300 ${
                                                isDark
                                                    ? "brightness-0 invert opacity-75 group-hover:opacity-100"
                                                    : "opacity-75 group-hover:opacity-100"
                                            }`}
                                        />

                                        <span
                                            className={`relative z-10 mt-4 text-xs font-bold ${
                                                selected
                                                    ? isDark
                                                        ? "text-violet-300"
                                                        : "text-violet-600"
                                                    : isDark
                                                        ? "text-white/35"
                                                        : "text-slate-400"
                                            }`}
                                        >
                                            {item.persianName}
                                        </span>

                                        {selected && (
                                            <span className="absolute right-3 top-3 flex h-2 w-2 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Active brand */}
                    <div
                        className={`relative overflow-hidden rounded-[34px] border p-7 sm:p-9 ${
                            isDark
                                ? "border-white/10 bg-[#0d1219]"
                                : "border-slate-200 bg-white"
                        }`}
                    >
                        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-[80px]" />

                        <div className="relative flex h-full flex-col">
                            {/* Verified */}
                            <div className="flex items-center justify-between">
                                <span
                                    className={`flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold ${
                                        isDark
                                            ? "border-emerald-400/15 bg-emerald-400/5 text-emerald-300"
                                            : "border-emerald-200 bg-emerald-50 text-emerald-600"
                                    }`}
                                >
                                    <BadgeCheck size={15} />
                                    برند منتخب
                                </span>

                                <span
                                    className={`text-xs ${
                                        isDark
                                            ? "text-white/25"
                                            : "text-slate-300"
                                    }`}
                                >
                                    {String(active + 1).padStart(2, "0")} /{" "}
                                    {String(brands.length).padStart(2, "0")}
                                </span>
                            </div>

                            {/* Logo */}
                            <div
                                className={`mt-8 flex h-32 items-center justify-center rounded-[28px] border ${
                                    isDark
                                        ? "border-white/10 bg-white/[0.035]"
                                        : "border-slate-100 bg-slate-50"
                                }`}
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className={`max-h-16 max-w-[190px] object-contain ${
                                        isDark
                                            ? "brightness-0 invert"
                                            : ""
                                    }`}
                                />
                            </div>

                            <div className="mt-7">
                                <div
                                    className={`text-sm font-bold ${
                                        isDark
                                            ? "text-violet-300"
                                            : "text-violet-600"
                                    }`}
                                >
                                    {brand.persianName}
                                </div>

                                <h3 className="mt-2 text-2xl font-black">
                                    {brand.name}
                                </h3>

                                <p
                                    className={`mt-4 text-sm leading-7 ${
                                        isDark
                                            ? "text-white/45"
                                            : "text-slate-500"
                                    }`}
                                >
                                    {brand.description}
                                </p>

                                <div
                                    className={`mt-5 inline-flex rounded-full border px-3 py-2 text-xs font-bold ${
                                        isDark
                                            ? "border-white/10 bg-white/[0.03] text-white/45"
                                            : "border-slate-200 bg-slate-50 text-slate-500"
                                    }`}
                                >
                                    {brand.category}
                                </div>
                            </div>

                            <div className="mt-auto pt-8">
                                <a
                                    href={`/brands/${brand.name.toLowerCase()}`}
                                    className={`group inline-flex items-center gap-3 text-sm font-black ${
                                        isDark
                                            ? "text-white"
                                            : "text-slate-800"
                                    }`}
                                >
                                    مشاهده محصولات برند

                                    <span
                                        className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                                            isDark
                                                ? "bg-white/5"
                                                : "bg-slate-100"
                                        }`}
                                    >
                                        <ArrowLeft
                                            size={16}
                                            className="transition-transform group-hover:-translate-x-1"
                                        />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom strip */}
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                        "برندهای شناخته‌شده جهانی",
                        "تنوع در رده‌های قیمتی",
                        "انتخاب متناسب با پروژه",
                    ].map((text, index) => (
                        <div
                            key={text}
                            className={`flex items-center gap-3 rounded-2xl border px-5 py-4 text-sm font-bold ${
                                isDark
                                    ? "border-white/10 bg-white/[0.025] text-white/55"
                                    : "border-slate-200 bg-white/60 text-slate-500"
                            }`}
                        >
                            <span
                                className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs ${
                                    isDark
                                        ? "bg-violet-500/10 text-violet-300"
                                        : "bg-violet-500/10 text-violet-600"
                                }`}
                            >
                                {index + 1}
                            </span>

                            {text}
                        </div>
                    ))}
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