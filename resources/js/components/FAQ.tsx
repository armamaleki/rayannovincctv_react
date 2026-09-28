import React, { useState } from "react";
import {
    ArrowLeft,
    ChevronDown,
    CircleHelp,
    Headphones,
    MessageCircle,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const faqs = [
    {
        question: "چطور دوربین مناسب برای محیط خودم انتخاب کنم؟",
        answer:
            "انتخاب دوربین به عواملی مثل نوع محیط، میزان نور، فاصله تا سوژه، زاویه دید، کیفیت تصویر و نحوه ذخیره‌سازی بستگی دارد. اگر مشخصات محیط را در اختیار رایان نوین قرار دهید، می‌توانید بر اساس نیاز واقعی، تجهیزات مناسب را انتخاب کنید.",
    },
    {
        question: "دوربین IP بهتر است یا دوربین آنالوگ؟",
        answer:
            "هر دو فناوری کاربردهای خودشان را دارند. دوربین‌های IP برای پروژه‌هایی که به کیفیت تصویر بالاتر، شبکه‌سازی و امکانات هوشمند نیاز دارند گزینه مناسبی هستند؛ در مقابل، سیستم‌های آنالوگ می‌توانند برای بعضی پروژه‌ها راهکار اقتصادی‌تری باشند.",
    },
    {
        question: "آیا امکان مشاهده دوربین‌ها با موبایل وجود دارد؟",
        answer:
            "بله. بسیاری از سیستم‌های جدید امکان مشاهده تصاویر، دریافت هشدار و مدیریت سیستم از طریق موبایل را فراهم می‌کنند. نوع اتصال و امکانات دقیق به مدل دوربین و دستگاه ضبط بستگی دارد.",
    },
    {
        question: "برای یک فروشگاه چند دوربین نیاز است؟",
        answer:
            "تعداد دوربین به متراژ، شکل محیط، ورودی‌ها، صندوق، انبار، نقاط حساس و میزان پوشش موردنیاز بستگی دارد. بهتر است قبل از خرید، نقاط کور و محل نصب دوربین‌ها بررسی شوند.",
    },
    {
        question: "آیا رایان نوین مشاوره خرید هم ارائه می‌دهد؟",
        answer:
            "بله. اگر برای انتخاب دوربین، دستگاه ضبط، تجهیزات شبکه یا طراحی یک سیستم امنیتی کامل نیاز به راهنمایی داشته باشید، می‌توانید با کارشناسان رایان نوین در ارتباط باشید.",
    },
    {
        question: "آیا محصولات دارای گارانتی هستند؟",
        answer:
            "شرایط گارانتی و خدمات پس از فروش بر اساس برند و محصول متفاوت است. اطلاعات مربوط به گارانتی هر محصول در صفحه همان محصول درج می‌شود.",
    },
    {
        question: "آیا می‌توان یک سیستم امنیتی را در آینده ارتقا داد؟",
        answer:
            "در بسیاری از پروژه‌ها امکان توسعه وجود دارد؛ اما ظرفیت NVR یا DVR، تعداد کانال‌ها، پهنای باند شبکه، فضای ذخیره‌سازی و زیرساخت پروژه باید از ابتدا در نظر گرفته شود.",
    },
];

export default function FAQ() {
    const [isDark, setIsDark] = useState(false);
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex((current) => (current === index ? -1 : index));
    };

    return (
        <section
            dir="rtl"
            className={`relative overflow-hidden py-24 transition-colors duration-500 ${
                isDark
                    ? "bg-[#080b10] text-white"
                    : "bg-[#e8edf1] text-[#152434]"
            }`}
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className={`absolute right-[-150px] top-20 h-[400px] w-[400px] rounded-full blur-[150px] ${
                        isDark
                            ? "bg-violet-600/10"
                            : "bg-violet-400/10"
                    }`}
                />

                <div
                    className={`absolute bottom-[-100px] left-[-100px] h-[350px] w-[350px] rounded-full blur-[130px] ${
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
                                className={`text-sm font-bold ${
                                    isDark
                                        ? "text-violet-300"
                                        : "text-violet-600"
                                }`}
                            >
                                سوالات متداول
                            </span>
                        </div>

                        <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                            پاسخ{" "}
                            <span
                                className={`bg-gradient-to-l from-violet-600 via-fuchsia-600 to-blue-600 bg-clip-text text-transparent ${
                                    isDark
                                        ? "from-violet-300 via-fuchsia-300 to-blue-300"
                                        : ""
                                }`}
                            >
                                سوالات شما
                            </span>
                        </h2>

                        <p
                            className={`mt-5 text-base leading-8 ${
                                isDark
                                    ? "text-white/45"
                                    : "text-slate-500"
                            }`}
                        >
                            جواب سوالات رایج درباره انتخاب، خرید و استفاده
                            از تجهیزات امنیتی را اینجا پیدا کنید.
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

                {/* Main */}
                <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
                    {/* Support panel */}
                    <div
                        className={`relative overflow-hidden rounded-[32px] border p-7 sm:p-9 lg:min-h-[620px] ${
                            isDark
                                ? "border-white/10 bg-[#0d1219]"
                                : "border-slate-200 bg-white"
                        }`}
                    >
                        {/* Glow */}
                        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-violet-500/10 blur-[90px]" />

                        <div className="relative flex h-full flex-col">
                            {/* Icon */}
                            <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-violet-500/10 text-violet-500">
                                <CircleHelp size={30} />
                            </div>

                            <div className="mt-8">
                                <span
                                    className={`text-xs font-bold ${
                                        isDark
                                            ? "text-violet-300"
                                            : "text-violet-600"
                                    }`}
                                >
                                    هنوز سوالی دارید؟
                                </span>

                                <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                                    پاسخ سوال شما ممکن است اینجا نباشد.
                                </h3>

                                <p
                                    className={`mt-5 text-sm leading-8 ${
                                        isDark
                                            ? "text-white/40"
                                            : "text-slate-500"
                                    }`}
                                >
                                    اگر درباره انتخاب محصول، طراحی سیستم
                                    امنیتی یا مشخصات تجهیزات سوالی دارید،
                                    مستقیماً با کارشناسان رایان نوین در
                                    ارتباط باشید.
                                </p>
                            </div>

                            {/* Support */}
                            <div className="mt-auto pt-10">
                                <div
                                    className={`mb-4 flex items-center gap-3 rounded-2xl border p-4 ${
                                        isDark
                                            ? "border-emerald-400/10 bg-emerald-400/[0.04]"
                                            : "border-emerald-100 bg-emerald-50"
                                    }`}
                                >
                                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                                        <Headphones size={19} />

                                        <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-[#0d1219] bg-emerald-500" />
                                    </div>

                                    <div>
                                        <div className="text-sm font-bold">
                                            کارشناسان آماده پاسخگویی هستند
                                        </div>

                                        <div
                                            className={`mt-1 text-[11px] ${
                                                isDark
                                                    ? "text-emerald-300/50"
                                                    : "text-emerald-600/70"
                                            }`}
                                        >
                                            مشاوره قبل از خرید
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href="/contact"
                                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-violet-600 px-5 py-4 text-sm font-black text-white shadow-xl shadow-violet-500/20 transition-all hover:-translate-y-0.5 hover:bg-violet-500"
                                >
                                    دریافت مشاوره

                                    <ArrowLeft
                                        size={17}
                                        className="transition-transform group-hover:-translate-x-1"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={faq.question}
                                    className={`overflow-hidden rounded-[24px] border transition-all duration-300 ${
                                        isOpen
                                            ? isDark
                                                ? "border-violet-400/20 bg-violet-500/[0.045]"
                                                : "border-violet-200 bg-white"
                                            : isDark
                                                ? "border-white/10 bg-white/[0.025]"
                                                : "border-slate-200 bg-white/70"
                                    }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggle(index)}
                                        aria-expanded={isOpen}
                                        className="flex w-full items-center gap-4 p-5 text-right sm:p-6"
                                    >
                                        <span
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-black ${
                                                isOpen
                                                    ? "bg-violet-600 text-white"
                                                    : isDark
                                                        ? "bg-white/[0.05] text-white/30"
                                                        : "bg-slate-100 text-slate-400"
                                            }`}
                                        >
                                            {String(index + 1).padStart(
                                                2,
                                                "0"
                                            )}
                                        </span>

                                        <span
                                            className={`flex-1 text-sm font-black leading-6 sm:text-base ${
                                                isDark
                                                    ? isOpen
                                                        ? "text-white"
                                                        : "text-white/65"
                                                    : isOpen
                                                        ? "text-slate-900"
                                                        : "text-slate-600"
                                            }`}
                                        >
                                            {faq.question}
                                        </span>

                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                                                isOpen
                                                    ? "rotate-180 bg-violet-500/10 text-violet-500"
                                                    : isDark
                                                        ? "bg-white/[0.04] text-white/30"
                                                        : "bg-slate-100 text-slate-400"
                                            }`}
                                        >
                                            <ChevronDown size={17} />
                                        </span>
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ${
                                            isOpen
                                                ? "grid-rows-[1fr]"
                                                : "grid-rows-[0fr]"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div
                                                className={`border-t px-5 pb-6 pt-5 pr-[76px] text-sm leading-8 sm:px-6 sm:pb-7 sm:pr-[84px] ${
                                                    isDark
                                                        ? "border-white/10 text-white/40"
                                                        : "border-slate-100 text-slate-500"
                                                }`}
                                            >
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Chat CTA */}
                        <div
                            className={`mt-5 flex items-center gap-4 rounded-[24px] border p-5 ${
                                isDark
                                    ? "border-blue-400/10 bg-blue-400/[0.03]"
                                    : "border-blue-100 bg-blue-50/50"
                            }`}
                        >
                            <div
                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                                    isDark
                                        ? "bg-blue-500/10 text-blue-300"
                                        : "bg-blue-100 text-blue-600"
                                }`}
                            >
                                <MessageCircle size={20} />
                            </div>

                            <div className="flex-1">
                                <div className="text-sm font-bold">
                                    سوال تخصصی دارید؟
                                </div>

                                <div
                                    className={`mt-1 text-xs ${
                                        isDark
                                            ? "text-white/30"
                                            : "text-slate-400"
                                    }`}
                                >
                                    کارشناسان رایان نوین آماده راهنمایی شما
                                    هستند.
                                </div>
                            </div>

                            <a
                                href="/contact"
                                className={`hidden items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-black sm:flex ${
                                    isDark
                                        ? "bg-white/[0.05] text-white/70 hover:bg-white/[0.08]"
                                        : "bg-white text-slate-600 shadow-sm hover:bg-slate-50"
                                }`}
                            >
                                ارتباط با ما
                                <ArrowLeft size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom trust */}
                <div className="mt-6 flex items-center justify-center gap-3 text-xs">
                    <ShieldCheck
                        size={15}
                        className={
                            isDark
                                ? "text-emerald-400/70"
                                : "text-emerald-500"
                        }
                    />

                    <span
                        className={
                            isDark ? "text-white/25" : "text-slate-400"
                        }
                    >
                        راهنمایی برای انتخاب آگاهانه تجهیزات امنیتی
                    </span>
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