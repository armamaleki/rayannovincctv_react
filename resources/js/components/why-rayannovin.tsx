import {
    ArrowLeft,
    BadgeCheck,
    Headphones,
    ShieldCheck,
    Truck,
    Wrench,
    Sparkles,
    Check,
} from "lucide-react";
import { useState } from "react";

const reasons = [
    {
        id: 1,
        number: "01",
        title: "اصالت کالا",
        description:
            "محصولات ارائه‌شده با تضمین اصالت و اطلاعات دقیق محصول عرضه می‌شوند.",
        icon: BadgeCheck,
    },
    {
        id: 2,
        number: "02",
        title: "مشاوره تخصصی",
        description:
            "قبل از خرید، برای انتخاب تجهیزات متناسب با نیاز و بودجه شما راهنمایی تخصصی ارائه می‌کنیم.",
        icon: Headphones,
    },
    {
        id: 3,
        number: "03",
        title: "راهکار کامل امنیتی",
        description:
            "از دوربین و دستگاه ضبط تا شبکه، کنترل تردد و تجهیزات جانبی، همه‌چیز را یکجا تهیه کنید.",
        icon: ShieldCheck,
    },
    {
        id: 4,
        number: "04",
        title: "ارسال سریع",
        description:
            "سفارش شما با بسته‌بندی مناسب و در سریع‌ترین زمان ممکن ارسال می‌شود.",
        icon: Truck,
    },
    {
        id: 5,
        number: "05",
        title: "پشتیبانی واقعی",
        description:
            "بعد از خرید هم تنها نیستید؛ تیم رایان نوین برای پاسخ‌گویی و راهنمایی در کنار شماست.",
        icon: Wrench,
    },
];

export default function WhyRayannovin() {
    const [isDark, setIsDark] = useState(true);
    const [active, setActive] = useState(0);

    const activeReason = reasons[active];
    const ActiveIcon = activeReason.icon;

    return (
        <section
            dir="rtl"
            className={`relative overflow-hidden py-28 transition-colors duration-500 ${
                isDark
                    ? "bg-[#0a0e13] text-white"
                    : "bg-[#e8edf1] text-[#152434]"
            }`}
        >
            {/* Ambient Light */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className={`absolute right-[15%] top-0 h-[500px] w-[500px] rounded-full blur-[180px] ${
                        isDark
                            ? "bg-violet-950/25"
                            : "bg-indigo-200/30"
                    }`}
                />

                <div
                    className={`absolute bottom-0 left-[10%] h-[400px] w-[400px] rounded-full blur-[160px] ${
                        isDark
                            ? "bg-blue-950/20"
                            : "bg-blue-200/20"
                    }`}
                />

                <div
                    className={`absolute inset-0 opacity-[0.025] ${
                        isDark
                            ? "bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]"
                            : "bg-[linear-gradient(rgba(21,36,52,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(21,36,52,.8)_1px,transparent_1px)]"
                    } bg-[size:70px_70px]`}
                />
            </div>

            <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

                {/* Header */}
                <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

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
                                WHY RAYANNOVIN
                            </span>
                        </div>

                        <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            چرا
                            <span
                                className={`mr-3 ${
                                    isDark
                                        ? "text-violet-400"
                                        : "text-indigo-600"
                                }`}
                            >
                                رایان نوین؟
                            </span>
                        </h2>

                        <p
                            className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${
                                isDark
                                    ? "text-slate-400"
                                    : "text-slate-600"
                            }`}
                        >
                            انتخاب تجهیزات امنیتی فقط خرید یک دوربین نیست.
                            ما تلاش می‌کنیم از انتخاب محصول تا راه‌اندازی و
                            پشتیبانی، یک تجربه مطمئن در اختیار شما قرار دهیم.
                        </p>
                    </div>

                    {/* Theme */}
                    <button
                        type="button"
                        onClick={() => setIsDark((value) => !value)}
                        className={`flex h-11 w-fit items-center gap-2 rounded-full border px-4 text-xs font-bold ${
                            isDark
                                ? "border-white/10 bg-white/5 text-slate-300"
                                : "border-slate-300 bg-white text-slate-700"
                        }`}
                    >
                        <span
                            className={`h-2 w-2 rounded-full ${
                                isDark
                                    ? "bg-violet-400"
                                    : "bg-indigo-500"
                            }`}
                        />

                        {isDark ? "Dark" : "Light"}
                    </button>
                </div>

                {/* Main */}
                <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">

                    {/* Brand Statement */}
                    <div
                        className={`relative min-h-[520px] overflow-hidden rounded-[36px] border p-8 sm:p-10 ${
                            isDark
                                ? "border-white/10 bg-[#10151c]"
                                : "border-slate-200 bg-white"
                        }`}
                    >
                        {/* Decorative */}
                        <div
                            className={`absolute -left-20 -top-20 h-72 w-72 rounded-full border ${
                                isDark
                                    ? "border-violet-400/10"
                                    : "border-indigo-200"
                            }`}
                        />

                        <div
                            className={`absolute -left-5 -top-5 h-40 w-40 rounded-full border ${
                                isDark
                                    ? "border-violet-400/10"
                                    : "border-indigo-200"
                            }`}
                        />

                        <Sparkles
                            className={`absolute left-10 top-10 h-5 w-5 ${
                                isDark
                                    ? "text-violet-400"
                                    : "text-indigo-500"
                            }`}
                        />

                        <div className="relative flex h-full flex-col justify-between">

                            <div>
                                <div
                                    className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${
                                        isDark
                                            ? "bg-violet-500/10 text-violet-400"
                                            : "bg-indigo-50 text-indigo-600"
                                    }`}
                                >
                                    <ShieldCheck className="h-8 w-8" />
                                </div>

                                <span
                                    className={`text-xs font-bold tracking-[0.25em] ${
                                        isDark
                                            ? "text-slate-500"
                                            : "text-slate-400"
                                    }`}
                                >
                                    SECURITY PARTNER
                                </span>

                                <h3 className="mt-5 text-3xl font-black leading-[1.4] sm:text-4xl">
                                    امنیت فقط
                                    <br />
                                    یک محصول نیست؛
                                    <br />

                                    <span
                                        className={
                                            isDark
                                                ? "text-violet-400"
                                                : "text-indigo-600"
                                        }
                                    >
                                        یک راهکار است.
                                    </span>
                                </h3>
                            </div>

                            <div>
                                <div
                                    className={`mb-6 h-px w-full ${
                                        isDark
                                            ? "bg-white/10"
                                            : "bg-slate-200"
                                    }`}
                                />

                                <div className="flex items-center justify-between">

                                    <div>
                                        <div className="text-2xl font-black">
                                            Rayannovin
                                        </div>

                                        <div
                                            className={`mt-1 text-xs ${
                                                isDark
                                                    ? "text-slate-500"
                                                    : "text-slate-400"
                                            }`}
                                        >
                                            Smart Security Solutions
                                        </div>
                                    </div>

                                    <a
                                        href="/about"
                                        className={`flex h-12 w-12 items-center justify-center rounded-full ${
                                            isDark
                                                ? "bg-white text-black"
                                                : "bg-[#152434] text-white"
                                        }`}
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reasons */}
                    <div className="flex flex-col gap-3">

                        {reasons.map((reason, index) => {
                            const ReasonIcon = reason.icon;
                            const isActive = active === index;

                            return (
                                <button
                                    key={reason.id}
                                    type="button"
                                    onClick={() => setActive(index)}
                                    className={`group relative overflow-hidden rounded-[26px] border p-5 text-right transition-all duration-300 sm:p-6 ${
                                        isActive
                                            ? isDark
                                                ? "border-violet-400/30 bg-violet-500/[0.08]"
                                                : "border-indigo-300 bg-white"
                                            : isDark
                                                ? "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
                                                : "border-slate-200 bg-white/60 hover:bg-white"
                                    }`}
                                >
                                    {/* Active line */}
                                    <span
                                        className={`absolute right-0 top-0 h-full w-1 transition-all ${
                                            isActive
                                                ? isDark
                                                    ? "bg-violet-400"
                                                    : "bg-indigo-600"
                                                : "bg-transparent"
                                        }`}
                                    />

                                    <div className="flex items-center gap-5">

                                        {/* Number */}
                                        <div
                                            className={`hidden w-8 shrink-0 text-xs font-black sm:block ${
                                                isActive
                                                    ? isDark
                                                        ? "text-violet-300"
                                                        : "text-indigo-600"
                                                    : isDark
                                                        ? "text-slate-700"
                                                        : "text-slate-300"
                                            }`}
                                        >
                                            {reason.number}
                                        </div>

                                        {/* Icon */}
                                        <div
                                            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all ${
                                                isActive
                                                    ? isDark
                                                        ? "bg-violet-400 text-black"
                                                        : "bg-indigo-600 text-white"
                                                    : isDark
                                                        ? "bg-white/5 text-slate-400"
                                                        : "bg-slate-100 text-slate-500"
                                            }`}
                                        >
                                            <ReasonIcon className="h-6 w-6" />
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1">
                                            <h3 className="text-base font-black sm:text-lg">
                                                {reason.title}
                                            </h3>

                                            <p
                                                className={`mt-1 text-xs leading-6 sm:text-sm ${
                                                    isDark
                                                        ? "text-slate-500"
                                                        : "text-slate-500"
                                                }`}
                                            >
                                                {reason.description}
                                            </p>
                                        </div>

                                        {/* Check */}
                                        <div
                                            className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded-full sm:flex ${
                                                isActive
                                                    ? isDark
                                                        ? "bg-violet-400/10 text-violet-300"
                                                        : "bg-indigo-50 text-indigo-600"
                                                    : isDark
                                                        ? "text-slate-700"
                                                        : "text-slate-300"
                                            }`}
                                        >
                                            <Check className="h-4 w-4" />
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Active Detail */}
                <div
                    className={`mt-5 overflow-hidden rounded-[30px] border ${
                        isDark
                            ? "border-white/10 bg-[#10151c]"
                            : "border-slate-200 bg-white"
                    }`}
                >
                    <div className="grid items-center gap-8 p-7 sm:p-9 lg:grid-cols-[auto_1fr_auto]">

                        <div
                            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                                isDark
                                    ? "bg-violet-400/10 text-violet-400"
                                    : "bg-indigo-50 text-indigo-600"
                            }`}
                        >
                            <ActiveIcon className="h-7 w-7" />
                        </div>

                        <div>
                            <div
                                className={`mb-2 text-xs font-bold tracking-widest ${
                                    isDark
                                        ? "text-violet-300"
                                        : "text-indigo-600"
                                }`}
                            >
                                {activeReason.number} / RAYANNOVIN
                            </div>

                            <h3 className="text-xl font-black">
                                {activeReason.title}
                            </h3>

                            <p
                                className={`mt-2 text-sm leading-7 ${
                                    isDark
                                        ? "text-slate-500"
                                        : "text-slate-500"
                                }`}
                            >
                                {activeReason.description}
                            </p>
                        </div>

                        <a
                            href="/contact"
                            className={`flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-bold ${
                                isDark
                                    ? "bg-white text-black"
                                    : "bg-[#152434] text-white"
                            }`}
                        >
                            مشاوره با کارشناسان

                            <ArrowLeft className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                {/* Trust Strip */}
                <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                        ["اصالت کالا", "ضمانت اصالت محصولات"],
                        ["مشاوره", "انتخاب متناسب با نیاز"],
                        ["پشتیبانی", "همراه شما پس از خرید"],
                        ["راهکار", "از محصول تا اجرا"],
                    ].map(([title, text]) => (
                        <div
                            key={title}
                            className={`rounded-2xl border p-5 ${
                                isDark
                                    ? "border-white/10 bg-white/[0.02]"
                                    : "border-slate-200 bg-white"
                            }`}
                        >
                            <div className="text-sm font-black">
                                {title}
                            </div>

                            <div
                                className={`mt-2 text-[11px] ${
                                    isDark
                                        ? "text-slate-500"
                                        : "text-slate-400"
                                }`}
                            >
                                {text}
                            </div>
                        </div>
                    ))}
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