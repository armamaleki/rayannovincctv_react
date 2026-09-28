import React from "react";
import {
    ArrowUpLeft,
    ChevronLeft,
    Instagram,
    Send,
    ShieldCheck,
    Phone,
    MapPin,
    Mail,
    Clock3,
    Linkedin,
    Youtube,
} from "lucide-react";

export default function Footer() {
    const [isDark, setIsDark] = React.useState(true);

    const productLinks = [
        { label: "دوربین مداربسته", href: "/products/cameras" },
        { label: "دستگاه DVR / NVR", href: "/products/recorders" },
        { label: "تجهیزات شبکه", href: "/products/network" },
        { label: "کنترل تردد", href: "/products/access-control" },
        { label: "سیستم اعلام سرقت", href: "/products/alarm" },
        { label: "لوازم جانبی", href: "/products/accessories" },
    ];

    const usefulLinks = [
        { label: "فروشگاه", href: "/products" },
        { label: "راهکارهای امنیتی", href: "/solutions" },
        { label: "مجله رایان نوین", href: "/articles" },
        { label: "درباره ما", href: "/about" },
        { label: "تماس با ما", href: "/contact" },
        { label: "سوالات متداول", href: "/faq" },
    ];

    return (
        <footer
            dir="rtl"
            className={`relative overflow-hidden border-t ${
                isDark
                    ? "border-white/10 bg-[#070a0f] text-white"
                    : "border-[#152434]/10 bg-[#e8edf1] text-[#152434]"
            }`}
        >
            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className={`absolute -right-40 top-20 h-[420px] w-[420px] rounded-full blur-[150px] ${
                        isDark ? "bg-violet-700/10" : "bg-violet-500/10"
                    }`}
                />

                <div
                    className={`absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full blur-[140px] ${
                        isDark ? "bg-blue-700/10" : "bg-blue-500/10"
                    }`}
                />

                {/* Grid */}
                <div
                    className={`absolute inset-0 opacity-[0.035] ${
                        isDark
                            ? "bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]"
                            : "bg-[linear-gradient(rgba(21,36,52,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(21,36,52,.5)_1px,transparent_1px)]"
                    } bg-[size:60px_60px]`}
                />
            </div>

            <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
                {/* Main footer */}
                <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-16 lg:py-20">
                    {/* Brand */}
                    <div>
                        <a
                            href="/"
                            className="group inline-flex items-center gap-3"
                        >
                            {/* Logo */}
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-blue-500/10">
                                <ShieldCheck className="h-6 w-6 text-violet-400" />

                                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,.8)]" />
                            </div>

                            <div>
                                <div className="text-lg font-black tracking-tight">
                                    رایان نوین
                                </div>

                                <div
                                    className={`mt-0.5 text-[9px] font-medium tracking-[0.22em] ${
                                        isDark
                                            ? "text-white/30"
                                            : "text-[#152434]/35"
                                    }`}
                                >
                                    RAYANNOVIN SECURITY
                                </div>
                            </div>
                        </a>

                        <p
                            className={`mt-6 max-w-sm text-sm leading-8 ${
                                isDark
                                    ? "text-white/45"
                                    : "text-[#152434]/55"
                            }`}
                        >
                            ارائه تجهیزات و راهکارهای تخصصی سیستم‌های
                            نظارتی، امنیتی و حفاظتی؛ از انتخاب محصول تا طراحی
                            یک راهکار کامل برای محیط شما.
                        </p>

                        {/* Trust */}
                        <div className="mt-7 flex items-center gap-3">
                            <div
                                className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                                    isDark
                                        ? "border-white/10 bg-white/[0.04]"
                                        : "border-[#152434]/10 bg-white/60"
                                }`}
                            >
                                <ShieldCheck className="h-4 w-4 text-violet-400" />
                            </div>

                            <div>
                                <div className="text-xs font-bold">
                                    امنیت با انتخاب درست شروع می‌شود
                                </div>

                                <div
                                    className={`mt-1 text-[10px] ${
                                        isDark
                                            ? "text-white/30"
                                            : "text-[#152434]/40"
                                    }`}
                                >
                                    Rayannovin Security Solutions
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-sm font-black">
                            محصولات
                        </h3>

                        <div
                            className={`mt-6 h-px w-8 ${
                                isDark ? "bg-violet-400/60" : "bg-violet-500/50"
                            }`}
                        />

                        <ul className="mt-5 space-y-3">
                            {productLinks.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={`group flex items-center gap-2 text-xs transition-colors ${
                                            isDark
                                                ? "text-white/40 hover:text-white"
                                                : "text-[#152434]/50 hover:text-[#152434]"
                                        }`}
                                    >
                                        <ChevronLeft className="h-3 w-3 opacity-0 transition-all group-hover:-translate-x-1 group-hover:opacity-100" />

                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Useful links */}
                    <div>
                        <h3 className="text-sm font-black">
                            دسترسی سریع
                        </h3>

                        <div
                            className={`mt-6 h-px w-8 ${
                                isDark ? "bg-violet-400/60" : "bg-violet-500/50"
                            }`}
                        />

                        <ul className="mt-5 space-y-3">
                            {usefulLinks.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={`group flex items-center gap-2 text-xs transition-colors ${
                                            isDark
                                                ? "text-white/40 hover:text-white"
                                                : "text-[#152434]/50 hover:text-[#152434]"
                                        }`}
                                    >
                                        <ChevronLeft className="h-3 w-3 opacity-0 transition-all group-hover:-translate-x-1 group-hover:opacity-100" />

                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-black">
                            ارتباط با ما
                        </h3>

                        <div
                            className={`mt-6 h-px w-8 ${
                                isDark ? "bg-violet-400/60" : "bg-violet-500/50"
                            }`}
                        />

                        <div className="mt-5 space-y-4">
                            {/* Phone */}
                            <a
                                href="tel:+982100000000"
                                className={`group flex gap-3 ${
                                    isDark
                                        ? "text-white/50 hover:text-white"
                                        : "text-[#152434]/50 hover:text-[#152434]"
                                }`}
                            >
                                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />

                                <div>
                                    <div className="text-[10px] opacity-50">
                                        تلفن تماس
                                    </div>

                                    <div className="mt-1 text-xs font-bold">
                                        ۰۲۱-XXXXXXXX
                                    </div>
                                </div>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:info@example.com"
                                className={`group flex gap-3 ${
                                    isDark
                                        ? "text-white/50 hover:text-white"
                                        : "text-[#152434]/50 hover:text-[#152434]"
                                }`}
                            >
                                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />

                                <div>
                                    <div className="text-[10px] opacity-50">
                                        ایمیل
                                    </div>

                                    <div className="mt-1 text-xs font-bold">
                                        info@example.com
                                    </div>
                                </div>
                            </a>

                            {/* Address */}
                            <div
                                className={`flex gap-3 ${
                                    isDark
                                        ? "text-white/50"
                                        : "text-[#152434]/50"
                                }`}
                            >
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />

                                <div>
                                    <div className="text-[10px] opacity-50">
                                        آدرس
                                    </div>

                                    <div className="mt-1 text-xs font-bold leading-6">
                                        تهران، ...
                                    </div>
                                </div>
                            </div>

                            {/* Working hours */}
                            <div
                                className={`flex gap-3 ${
                                    isDark
                                        ? "text-white/50"
                                        : "text-[#152434]/50"
                                }`}
                            >
                                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />

                                <div>
                                    <div className="text-[10px] opacity-50">
                                        ساعات پاسخگویی
                                    </div>

                                    <div className="mt-1 text-xs font-bold">
                                        شنبه تا پنجشنبه · ۹ تا ۱۸
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter / CTA strip */}
                <div
                    className={`relative overflow-hidden rounded-[24px] border p-5 sm:p-6 ${
                        isDark
                            ? "border-white/10 bg-white/[0.025]"
                            : "border-[#152434]/10 bg-white/50"
                    }`}
                >
                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

                    <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <Send className="h-4 w-4 text-violet-400" />

                                <span className="text-sm font-black">
                                    از جدیدترین محصولات و راهکارها باخبر شوید
                                </span>
                            </div>

                            <p
                                className={`mt-2 text-xs ${
                                    isDark
                                        ? "text-white/35"
                                        : "text-[#152434]/45"
                                }`}
                            >
                                اخبار، محصولات جدید و مطالب آموزشی امنیتی
                            </p>
                        </div>

                        <a
                            href="/articles"
                            className="group inline-flex w-fit items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-violet-500"
                        >
                            مشاهده مجله

                            <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div
                    className={`flex flex-col gap-5 border-t py-7 lg:flex-row lg:items-center lg:justify-between ${
                        isDark
                            ? "border-white/10"
                            : "border-[#152434]/10"
                    }`}
                >
                    {/* Copyright */}
                    <div
                        className={`text-[10px] ${
                            isDark
                                ? "text-white/25"
                                : "text-[#152434]/35"
                        }`}
                    >
                        © {new Date().getFullYear()} رایان نوین. تمامی حقوق
                        محفوظ است.
                    </div>

                    {/* Legal */}
                    <div className="flex flex-wrap gap-5">
                        <a
                            href="/privacy"
                            className={`text-[10px] transition-colors ${
                                isDark
                                    ? "text-white/30 hover:text-white"
                                    : "text-[#152434]/40 hover:text-[#152434]"
                            }`}
                        >
                            حریم خصوصی
                        </a>

                        <a
                            href="/terms"
                            className={`text-[10px] transition-colors ${
                                isDark
                                    ? "text-white/30 hover:text-white"
                                    : "text-[#152434]/40 hover:text-[#152434]"
                            }`}
                        >
                            قوانین و مقررات
                        </a>

                        <a
                            href="/shipping"
                            className={`text-[10px] transition-colors ${
                                isDark
                                    ? "text-white/30 hover:text-white"
                                    : "text-[#152434]/40 hover:text-[#152434]"
                            }`}
                        >
                            شرایط ارسال
                        </a>
                    </div>

                    {/* Social */}
                    <div className="flex items-center gap-2">
                        <a
                            href="#"
                            aria-label="Instagram"
                            className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all hover:-translate-y-0.5 ${
                                isDark
                                    ? "border-white/10 bg-white/[0.03] text-white/40 hover:bg-white/[0.08] hover:text-white"
                                    : "border-[#152434]/10 bg-white/50 text-[#152434]/40 hover:bg-white hover:text-[#152434]"
                            }`}
                        >
                            <Instagram className="h-4 w-4" />
                        </a>

                        <a
                            href="#"
                            aria-label="Telegram"
                            className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all hover:-translate-y-0.5 ${
                                isDark
                                    ? "border-white/10 bg-white/[0.03] text-white/40 hover:bg-white/[0.08] hover:text-white"
                                    : "border-[#152434]/10 bg-white/50 text-[#152434]/40 hover:bg-white hover:text-[#152434]"
                            }`}
                        >
                            <Send className="h-4 w-4" />
                        </a>

                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all hover:-translate-y-0.5 ${
                                isDark
                                    ? "border-white/10 bg-white/[0.03] text-white/40 hover:bg-white/[0.08] hover:text-white"
                                    : "border-[#152434]/10 bg-white/50 text-[#152434]/40 hover:bg-white hover:text-[#152434]"
                            }`}
                        >
                            <Linkedin className="h-4 w-4" />
                        </a>

                        <a
                            href="#"
                            aria-label="Youtube"
                            className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all hover:-translate-y-0.5 ${
                                isDark
                                    ? "border-white/10 bg-white/[0.03] text-white/40 hover:bg-white/[0.08] hover:text-white"
                                    : "border-[#152434]/10 bg-white/50 text-[#152434]/40 hover:bg-white hover:text-[#152434]"
                            }`}
                        >
                            <Youtube className="h-4 w-4" />
                        </a>

                        {/* Theme */}
                        <button
                            type="button"
                            onClick={() => setIsDark((prev) => !prev)}
                            className={`mr-2 rounded-xl border px-3 py-2 text-[10px] transition ${
                                isDark
                                    ? "border-white/10 bg-white/[0.03] text-white/40 hover:bg-white/[0.08]"
                                    : "border-[#152434]/10 bg-white/50 text-[#152434]/50 hover:bg-white"
                            }`}
                        >
                            {isDark ? "روشن" : "تاریک"}
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}