import React, { useState } from "react";
import {
    ArrowLeft,
    BookOpen,
    CalendarDays,
    Clock3,
    Eye,
    FileText,
    Sparkles,
} from "lucide-react";

const articles = [
    {
        id: 1,
        title: "راهنمای انتخاب دوربین مداربسته برای خانه و محل کار",
        excerpt:
            "قبل از خرید دوربین مداربسته باید نوع محیط، میزان نور، زاویه دید، کیفیت تصویر و نحوه ذخیره‌سازی را بررسی کنید.",
        category: "راهنمای خرید",
        date: "۲۸ شهریور ۱۴۰۵",
        readTime: "۷ دقیقه",
        views: "۱.۲K",
        image: "/images/articles/cctv-buying-guide.jpg",
        featured: true,
    },
    {
        id: 2,
        title: "تفاوت دوربین IP و آنالوگ چیست؟",
        excerpt:
            "با تفاوت‌های فنی، مزایا و کاربردهای دوربین‌های IP و آنالوگ آشنا شوید.",
        category: "آموزش",
        date: "۲۵ شهریور ۱۴۰۵",
        readTime: "۵ دقیقه",
        views: "۸۴۰",
        image: "/images/articles/ip-vs-analog.jpg",
    },
    {
        id: 3,
        title: "دوربین 4K چه تفاوتی با دوربین‌های معمولی دارد؟",
        excerpt:
            "بررسی کیفیت تصویر، جزئیات، فضای ذخیره‌سازی و کاربرد واقعی دوربین‌های 4K.",
        category: "تکنولوژی",
        date: "۲۱ شهریور ۱۴۰۵",
        readTime: "۶ دقیقه",
        views: "۶۲۰",
        image: "/images/articles/4k-camera.jpg",
    },
    {
        id: 4,
        title: "چطور یک سیستم نظارتی مناسب برای فروشگاه طراحی کنیم؟",
        excerpt:
            "از انتخاب محل نصب دوربین تا دستگاه ضبط و تجهیزات شبکه؛ یک راهنمای کاربردی.",
        category: "راهکارها",
        date: "۱۸ شهریور ۱۴۰۵",
        readTime: "۸ دقیقه",
        views: "۵۳۰",
        image: "/images/articles/store-security.jpg",
    },
];

const categories = [
    "همه",
    "راهنمای خرید",
    "آموزش",
    "تکنولوژی",
    "راهکارها",
];

export default function Magazine() {
    const [isDark, setIsDark] = useState(false);
    const [activeCategory, setActiveCategory] = useState("همه");

    const filteredArticles =
        activeCategory === "همه"
            ? articles
            : articles.filter(
                (article) => article.category === activeCategory
            );

    const featured =
        filteredArticles.find((article) => article.featured) ||
        filteredArticles[0] ||
        articles[0];

    const secondary = filteredArticles
        .filter((article) => article.id !== featured.id)
        .slice(0, 3);

    return (
        <section
            dir="rtl"
            className={`relative overflow-hidden py-24 transition-colors duration-500 ${
                isDark
                    ? "bg-[#090c11] text-white"
                    : "bg-[#eef2f5] text-[#152434]"
            }`}
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className={`absolute right-[-150px] top-20 h-[400px] w-[400px] rounded-full blur-[140px] ${
                        isDark
                            ? "bg-violet-600/10"
                            : "bg-violet-400/10"
                    }`}
                />

                <div
                    className={`absolute bottom-0 left-[-120px] h-[350px] w-[350px] rounded-full blur-[140px] ${
                        isDark
                            ? "bg-blue-600/10"
                            : "bg-blue-400/10"
                    }`}
                />

                <div
                    className={`absolute inset-0 opacity-[0.03] ${
                        isDark ? "text-white" : "text-slate-900"
                    }`}
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)
                        `,
                        backgroundSize: "52px 52px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
                {/* Header */}
                <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
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
                                className={`text-sm font-bold ${
                                    isDark
                                        ? "text-violet-300"
                                        : "text-violet-600"
                                }`}
                            >
                                مجله رایان نوین
                            </span>
                        </div>

                        <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                            مقالات و{" "}
                            <span
                                className={`bg-gradient-to-l bg-clip-text text-transparent ${
                                    isDark
                                        ? "from-violet-300 via-fuchsia-300 to-blue-300"
                                        : "from-violet-600 via-fuchsia-600 to-blue-600"
                                }`}
                            >
                                دانش امنیت
                            </span>
                        </h2>

                        <p
                            className={`mt-5 text-base leading-8 ${
                                isDark
                                    ? "text-white/45"
                                    : "text-slate-500"
                            }`}
                        >
                            آموزش، راهنمای خرید، تکنولوژی و راهکارهای
                            کاربردی برای ساخت یک سیستم امنیتی مطمئن.
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

                {/* Categories */}
                <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
                    {categories.map((category) => {
                        const active = category === activeCategory;

                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() =>
                                    setActiveCategory(category)
                                }
                                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition-all ${
                                    active
                                        ? "border-violet-500 bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                                        : isDark
                                            ? "border-white/10 bg-white/[0.03] text-white/40 hover:bg-white/[0.07] hover:text-white/70"
                                            : "border-slate-200 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600"
                                }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Magazine layout */}
                <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
                    {/* Featured */}
                    <a
                        href={`/articles/${featured.id}`}
                        className={`group relative min-h-[570px] overflow-hidden rounded-[34px] border ${
                            isDark
                                ? "border-white/10 bg-[#0d1219]"
                                : "border-slate-200 bg-white"
                        }`}
                    >
                        <img
                            src={featured.image}
                            alt={featured.title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />

                        <div
                            className={`absolute inset-0 ${
                                isDark
                                    ? "bg-gradient-to-t from-[#070a0e] via-[#070a0e]/65 to-transparent"
                                    : "bg-gradient-to-t from-black/85 via-black/35 to-transparent"
                            }`}
                        />

                        {/* Featured badge */}
                        <div className="absolute right-6 top-6">
                            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs font-bold text-white backdrop-blur-xl">
                                <BookOpen size={14} />
                                مقاله منتخب
                            </span>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
                            <div className="mb-4 flex items-center gap-3">
                                <span className="rounded-full bg-violet-500 px-3 py-1.5 text-[11px] font-bold">
                                    {featured.category}
                                </span>

                                <span className="text-xs text-white/50">
                                    {featured.date}
                                </span>
                            </div>

                            <h3 className="max-w-3xl text-2xl font-black leading-tight sm:text-4xl">
                                {featured.title}
                            </h3>

                            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                                {featured.excerpt}
                            </p>

                            <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
                                <div className="flex items-center gap-5 text-xs text-white/45">
                                    <span className="flex items-center gap-2">
                                        <Clock3 size={14} />
                                        {featured.readTime}
                                    </span>

                                    <span className="flex items-center gap-2">
                                        <Eye size={14} />
                                        {featured.views}
                                    </span>
                                </div>

                                <span className="flex items-center gap-2 text-sm font-black">
                                    مطالعه مقاله

                                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-900 transition-transform group-hover:-translate-x-1">
                                        <ArrowLeft size={16} />
                                    </span>
                                </span>
                            </div>
                        </div>
                    </a>

                    {/* Secondary articles */}
                    <div className="flex flex-col gap-4">
                        {secondary.map((article) => (
                            <a
                                key={article.id}
                                href={`/articles/${article.id}`}
                                className={`group flex min-h-[175px] overflow-hidden rounded-[26px] border p-3 transition-all duration-300 ${
                                    isDark
                                        ? "border-white/10 bg-white/[0.025] hover:bg-white/[0.05]"
                                        : "border-slate-200 bg-white/70 hover:bg-white"
                                }`}
                            >
                                <div className="relative w-[38%] shrink-0 overflow-hidden rounded-[19px]">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
                                </div>

                                <div className="flex min-w-0 flex-1 flex-col justify-center px-4">
                                    <div className="mb-2 flex items-center gap-2">
                                        <span
                                            className={`text-[10px] font-bold ${
                                                isDark
                                                    ? "text-violet-300"
                                                    : "text-violet-600"
                                            }`}
                                        >
                                            {article.category}
                                        </span>

                                        <span
                                            className={`h-1 w-1 rounded-full ${
                                                isDark
                                                    ? "bg-white/20"
                                                    : "bg-slate-300"
                                            }`}
                                        />

                                        <span
                                            className={`text-[10px] ${
                                                isDark
                                                    ? "text-white/25"
                                                    : "text-slate-400"
                                            }`}
                                        >
                                            {article.date}
                                        </span>
                                    </div>

                                    <h3
                                        className={`line-clamp-2 text-sm font-black leading-6 transition-colors ${
                                            isDark
                                                ? "text-white/85 group-hover:text-white"
                                                : "text-slate-700 group-hover:text-slate-950"
                                        }`}
                                    >
                                        {article.title}
                                    </h3>

                                    <div
                                        className={`mt-3 flex items-center gap-4 text-[10px] ${
                                            isDark
                                                ? "text-white/25"
                                                : "text-slate-400"
                                        }`}
                                    >
                                        <span className="flex items-center gap-1.5">
                                            <Clock3 size={12} />
                                            {article.readTime}
                                        </span>

                                        <span className="flex items-center gap-1.5">
                                            <Eye size={12} />
                                            {article.views}
                                        </span>
                                    </div>
                                </div>

                                <div className="hidden items-center pl-2 sm:flex">
                                    <span
                                        className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all ${
                                            isDark
                                                ? "bg-white/[0.04] text-white/30 group-hover:bg-violet-500/10 group-hover:text-violet-300"
                                                : "bg-slate-100 text-slate-400 group-hover:bg-violet-50 group-hover:text-violet-600"
                                        }`}
                                    >
                                        <ArrowLeft size={15} />
                                    </span>
                                </div>
                            </a>
                        ))}

                        {/* More articles */}
                        <a
                            href="/articles"
                            className={`group flex flex-1 items-center justify-between rounded-[26px] border p-6 transition-all ${
                                isDark
                                    ? "border-violet-500/15 bg-violet-500/[0.035] hover:bg-violet-500/[0.07]"
                                    : "border-violet-100 bg-violet-50/60 hover:bg-violet-50"
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                                        isDark
                                            ? "bg-violet-500/10 text-violet-300"
                                            : "bg-violet-100 text-violet-600"
                                    }`}
                                >
                                    <FileText size={21} />
                                </div>

                                <div>
                                    <div className="text-sm font-black">
                                        آرشیو مجله
                                    </div>

                                    <div
                                        className={`mt-1 text-xs ${
                                            isDark
                                                ? "text-white/30"
                                                : "text-slate-400"
                                        }`}
                                    >
                                        همه مقالات و آموزش‌ها
                                    </div>
                                </div>
                            </div>

                            <span
                                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:-translate-x-1 ${
                                    isDark
                                        ? "bg-white/5 text-white/50"
                                        : "bg-white text-slate-500"
                                }`}
                            >
                                <ArrowLeft size={17} />
                            </span>
                        </a>
                    </div>
                </div>

                {/* Bottom trust strip */}
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                        {
                            icon: BookOpen,
                            title: "آموزش کاربردی",
                            text: "محتوای قابل استفاده برای پروژه‌های واقعی",
                        },
                        {
                            icon: CalendarDays,
                            title: "محتوای به‌روز",
                            text: "بررسی فناوری‌ها و تجهیزات جدید",
                        },
                        {
                            icon: FileText,
                            title: "راهنمای خرید",
                            text: "کمک به انتخاب درست تجهیزات امنیتی",
                        },
                    ].map((item) => {
                        const Icon = item.icon;

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
                                    <Icon size={19} />
                                </div>

                                <div>
                                    <div className="text-sm font-bold">
                                        {item.title}
                                    </div>

                                    <div
                                        className={`mt-1 text-xs ${
                                            isDark
                                                ? "text-white/30"
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