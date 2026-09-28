import React, { useState } from "react";
import {
    ArrowLeft,
    ArrowUpLeft,
    Phone,
    MessageCircle,
    ShieldCheck,
    Sparkles,
    ScanLine,
} from "lucide-react";

export default function FinalCTA() {
    const [isDark, setIsDark] = useState(true);

    return (
        <section
            dir="rtl"
            className={`relative overflow-hidden ${
                isDark ? "bg-[#080b10] text-white" : "bg-[#e8edf1] text-[#152434]"
            }`}
        >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className={`absolute right-[5%] top-[10%] h-[420px] w-[420px] rounded-full blur-[140px] ${
                        isDark ? "bg-violet-700/20" : "bg-violet-500/10"
                    }`}
                />

                <div
                    className={`absolute bottom-[-20%] left-[10%] h-[400px] w-[400px] rounded-full blur-[140px] ${
                        isDark ? "bg-blue-600/15" : "bg-blue-500/10"
                    }`}
                />

                {/* Grid */}
                <div
                    className={`absolute inset-0 opacity-[0.045] ${
                        isDark
                            ? "bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]"
                            : "bg-[linear-gradient(rgba(21,36,52,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(21,36,52,.5)_1px,transparent_1px)]"
                    } bg-[size:60px_60px]`}
                />
            </div>

            {/* Main */}
            <div className="relative mx-auto max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
                <div
                    className={`relative overflow-hidden rounded-[32px] border ${
                        isDark
                            ? "border-white/10 bg-white/[0.035]"
                            : "border-[#152434]/10 bg-white/50"
                    }`}
                >
                    {/* Scan line */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div
                            className={`absolute left-0 right-0 top-0 h-px ${
                                isDark ? "bg-violet-400/40" : "bg-violet-500/30"
                            }`}
                            style={{
                                boxShadow: isDark
                                    ? "0 0 30px rgba(167,139,250,.8)"
                                    : "0 0 25px rgba(124,58,237,.35)",
                            }}
                        />
                    </div>

                    {/* Decorative circles */}
                    <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full border border-violet-400/10" />
                    <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full border border-violet-400/10" />

                    <div className="grid min-h-[520px] lg:grid-cols-[1fr_0.8fr]">
                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-center p-7 sm:p-10 lg:p-16 xl:p-20">
                            {/* Badge */}
                            <div
                                className={`mb-7 flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold tracking-wide ${
                                    isDark
                                        ? "border-violet-400/20 bg-violet-400/10 text-violet-200"
                                        : "border-violet-500/20 bg-violet-500/10 text-violet-700"
                                }`}
                            >
                                <Sparkles className="h-3.5 w-3.5" />
                                <span>شروع یک امنیت مطمئن</span>
                            </div>

                            {/* Heading */}
                            <h2 className="max-w-3xl text-3xl font-black leading-[1.25] tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                                امنیت مجموعه‌تان را
                                <br />

                                <span
                                    className={
                                        isDark
                                            ? "bg-gradient-to-l from-violet-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent"
                                            : "bg-gradient-to-l from-violet-700 via-fuchsia-700 to-blue-700 bg-clip-text text-transparent"
                                    }
                                >
                                    به شانس واگذار نکنید.
                                </span>
                            </h2>

                            {/* Description */}
                            <p
                                className={`mt-6 max-w-2xl text-sm leading-8 sm:text-base ${
                                    isDark ? "text-white/55" : "text-[#152434]/60"
                                }`}
                            >
                                از انتخاب دوربین و دستگاه ضبط تا طراحی یک سیستم
                                امنیتی کامل، رایان نوین کنار شماست تا راهکاری
                                متناسب با محیط، نیاز و بودجه‌تان داشته باشید.
                            </p>

                            {/* Actions */}
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="/contact"
                                    className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#6d28d9] px-6 py-4 text-sm font-bold text-white shadow-[0_15px_45px_rgba(109,40,217,.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#7c3aed]"
                                >
                                    دریافت مشاوره تخصصی

                                    <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                </a>

                                <a
                                    href="/products"
                                    className={`inline-flex items-center justify-center gap-3 rounded-2xl border px-6 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 ${
                                        isDark
                                            ? "border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                                            : "border-[#152434]/10 bg-white/60 text-[#152434] hover:bg-white"
                                    }`}
                                >
                                    مشاهده محصولات

                                    <ArrowUpLeft className="h-4 w-4" />
                                </a>
                            </div>

                            {/* Trust points */}
                            <div
                                className={`mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t pt-6 text-xs ${
                                    isDark
                                        ? "border-white/10 text-white/45"
                                        : "border-[#152434]/10 text-[#152434]/50"
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4 text-violet-400" />
                                    اصالت کالا
                                </div>

                                <div className="flex items-center gap-2">
                                    <MessageCircle className="h-4 w-4 text-violet-400" />
                                    مشاوره تخصصی
                                </div>

                                <div className="flex items-center gap-2">
                                    <ScanLine className="h-4 w-4 text-violet-400" />
                                    راهکار متناسب با نیاز
                                </div>
                            </div>
                        </div>

                        {/* Visual */}
                        <div className="relative hidden min-h-[520px] lg:block">
                            {/* Big orb */}
                            <div className="absolute right-1/2 top-1/2 h-[380px] w-[380px] -translate-y-1/2 translate-x-1/2 rounded-full border border-violet-400/10" />

                            <div className="absolute right-1/2 top-1/2 h-[270px] w-[270px] -translate-y-1/2 translate-x-1/2 rounded-full border border-violet-400/15" />

                            <div className="absolute right-1/2 top-1/2 h-[170px] w-[170px] -translate-y-1/2 translate-x-1/2 rounded-full bg-violet-600/10 blur-2xl" />

                            {/* Shield */}
                            <div className="absolute right-1/2 top-1/2 flex h-36 w-36 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-[36px] border border-violet-300/20 bg-gradient-to-br from-violet-500/20 to-blue-500/10 shadow-[0_0_100px_rgba(124,58,237,.2)] backdrop-blur-xl">
                                <ShieldCheck className="h-16 w-16 text-violet-300" />
                            </div>

                            {/* Floating cards */}
                            <div
                                className={`absolute right-[8%] top-[22%] rounded-2xl border p-4 backdrop-blur-xl ${
                                    isDark
                                        ? "border-white/10 bg-white/[0.05]"
                                        : "border-[#152434]/10 bg-white/70"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10">
                                        <ShieldCheck className="h-4 w-4 text-emerald-400" />
                                    </div>

                                    <div>
                                        <div className="text-xs font-bold">
                                            سیستم امنیتی
                                        </div>
                                        <div
                                            className={`mt-1 text-[10px] ${
                                                isDark
                                                    ? "text-white/40"
                                                    : "text-[#152434]/40"
                                            }`}
                                        >
                                            فعال و پایدار
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`absolute bottom-[20%] left-[8%] rounded-2xl border p-4 backdrop-blur-xl ${
                                    isDark
                                        ? "border-white/10 bg-white/[0.05]"
                                        : "border-[#152434]/10 bg-white/70"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10">
                                        <ScanLine className="h-4 w-4 text-violet-400" />
                                    </div>

                                    <div>
                                        <div className="text-xs font-bold">
                                            تحلیل هوشمند
                                        </div>
                                        <div
                                            className={`mt-1 text-[10px] ${
                                                isDark
                                                    ? "text-white/40"
                                                    : "text-[#152434]/40"
                                            }`}
                                        >
                                            AI Detection
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Corner details */}
                            <div className="absolute right-7 top-7">
                                <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-violet-300/50">
                                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                                    RAYANNOVIN
                                </div>
                            </div>

                            <div className="absolute bottom-7 right-7 left-7 flex items-center justify-between">
                                <span
                                    className={`font-mono text-[10px] ${
                                        isDark
                                            ? "text-white/20"
                                            : "text-[#152434]/25"
                                    }`}
                                >
                                    SECURE / 2026
                                </span>

                                <span
                                    className={`font-mono text-[10px] ${
                                        isDark
                                            ? "text-white/20"
                                            : "text-[#152434]/25"
                                    }`}
                                >
                                    35.6892° N
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom contact strip */}
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <a
                        href="tel:+982100000000"
                        className={`group flex items-center justify-between rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 ${
                            isDark
                                ? "border-white/10 bg-white/[0.025] hover:bg-white/[0.05]"
                                : "border-[#152434]/10 bg-white/50 hover:bg-white"
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                                    isDark
                                        ? "bg-white/[0.06]"
                                        : "bg-[#152434]/5"
                                }`}
                            >
                                <Phone className="h-4 w-4" />
                            </div>

                            <div>
                                <div
                                    className={`text-[11px] ${
                                        isDark
                                            ? "text-white/35"
                                            : "text-[#152434]/40"
                                    }`}
                                >
                                    تماس با کارشناسان
                                </div>

                                <div className="mt-1 text-sm font-bold">
                                    ۰۲۱-XXXXXXXX
                                </div>
                            </div>
                        </div>

                        <ArrowLeft className="h-4 w-4 opacity-30 transition-transform group-hover:-translate-x-1" />
                    </a>

                    <a
                        href="/contact"
                        className={`group flex items-center justify-between rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 ${
                            isDark
                                ? "border-white/10 bg-white/[0.025] hover:bg-white/[0.05]"
                                : "border-[#152434]/10 bg-white/50 hover:bg-white"
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                                    isDark
                                        ? "bg-white/[0.06]"
                                        : "bg-[#152434]/5"
                                }`}
                            >
                                <MessageCircle className="h-4 w-4" />
                            </div>

                            <div>
                                <div
                                    className={`text-[11px] ${
                                        isDark
                                            ? "text-white/35"
                                            : "text-[#152434]/40"
                                    }`}
                                >
                                    نیاز به راهنمایی دارید؟
                                </div>

                                <div className="mt-1 text-sm font-bold">
                                    با ما صحبت کنید
                                </div>
                            </div>
                        </div>

                        <ArrowLeft className="h-4 w-4 opacity-30 transition-transform group-hover:-translate-x-1" />
                    </a>
                </div>

                {/* Theme toggle */}
                <button
                    type="button"
                    onClick={() => setIsDark((prev) => !prev)}
                    className={`absolute left-5 top-5 z-20 rounded-xl border px-3 py-2 text-xs transition ${
                        isDark
                            ? "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"
                            : "border-[#152434]/10 bg-white/60 text-[#152434]/60 hover:bg-white"
                    }`}
                >
                    {isDark ? "حالت روشن" : "حالت تاریک"}
                </button>
            </div>
        </section>
    );
}