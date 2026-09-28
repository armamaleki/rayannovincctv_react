import { useEffect, useRef, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Camera,
    ChevronLeft,
    ChevronRight,
    Network,
    ShieldCheck,
    Smartphone,
    HardDrive,
    ScanFace,
} from "lucide-react";

const categories = [
    {
        id: 1,
        title: "دوربین مداربسته",
        subtitle: "نظارت دقیق، تصویر شفاف",
        description:
            "انواع دوربین‌های مداربسته برای فضاهای مسکونی، تجاری و صنعتی",
        icon: Camera,
        image: "/images/categories/cctv-camera.png",
        count: "128 محصول",
        className: "from-slate-900 via-slate-800 to-indigo-950",
    },
    {
        id: 2,
        title: "دستگاه‌های DVR و NVR",
        subtitle: "مرکز کنترل و ذخیره‌سازی",
        description:
            "دستگاه‌های ضبط حرفه‌ای برای مدیریت و ذخیره تصاویر دوربین‌ها",
        icon: HardDrive,
        image: "/images/categories/nvr.png",
        count: "42 محصول",
        className: "from-zinc-900 via-slate-800 to-purple-950",
    },
    {
        id: 3,
        title: "تجهیزات شبکه",
        subtitle: "زیرساخت مطمئن",
        description:
            "سوئیچ، تجهیزات شبکه و راهکارهای ارتباطی سیستم‌های امنیتی",
        icon: Network,
        image: "/images/categories/network.png",
        count: "76 محصول",
        className: "from-slate-950 via-blue-950 to-cyan-950",
    },
    {
        id: 4,
        title: "کنترل تردد",
        subtitle: "ورود و خروج هوشمند",
        description:
            "تجهیزات کنترل دسترسی، حضور و غیاب و مدیریت تردد",
        icon: ScanFace,
        image: "/images/categories/access-control.png",
        count: "35 محصول",
        className: "from-neutral-950 via-slate-900 to-violet-950",
    },
    {
        id: 5,
        title: "سیستم اعلام سرقت",
        subtitle: "امنیت فراتر از تصویر",
        description:
            "تجهیزات حرفه‌ای برای تشخیص و اعلام ورود غیرمجاز",
        icon: ShieldCheck,
        image: "/images/categories/alarm.png",
        count: "29 محصول",
        className: "from-slate-950 via-purple-950 to-fuchsia-950",
    },
    {
        id: 6,
        title: "لوازم جانبی",
        subtitle: "جزئیات مهم یک سیستم کامل",
        description:
            "هارد، کابل، آداپتور، پایه و سایر تجهیزات جانبی",
        icon: Smartphone,
        image: "/images/categories/accessories.png",
        count: "91 محصول",
        className: "from-neutral-950 via-slate-900 to-indigo-950",
    },
];

export default function ProductCategories() {
    const [active, setActive] = useState(0);
    const [isDark, setIsDark] = useState(true);

    const sliderRef = useRef(null);

    const next = () => {
        setActive((current) =>
            current === categories.length - 1 ? 0 : current + 1
        );
    };

    const previous = () => {
        setActive((current) =>
            current === 0 ? categories.length - 1 : current - 1
        );
    };

    useEffect(() => {
        const slider = sliderRef.current;

        if (!slider) return;

        const card = slider.children[active];

        if (!card) return;

        card.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }, [active]);

    return (
        <section
            dir="rtl"
            className={`relative overflow-hidden py-24 transition-colors duration-500 ${
                isDark
                    ? "bg-[#080b10] text-white"
                    : "bg-[#e8edf1] text-[#152434]"
            }`}
        >
            {/* Ambient Background */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className={`absolute right-[10%] top-20 h-96 w-96 rounded-full blur-[140px] ${
                        isDark
                            ? "bg-violet-950/30"
                            : "bg-indigo-300/20"
                    }`}
                />

                <div
                    className={`absolute bottom-0 left-[20%] h-80 w-80 rounded-full blur-[130px] ${
                        isDark
                            ? "bg-blue-950/20"
                            : "bg-blue-200/20"
                    }`}
                />

                <div
                    className={`absolute inset-0 opacity-[0.035] ${
                        isDark
                            ? "bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]"
                            : "bg-[linear-gradient(rgba(21,36,52,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(21,36,52,.8)_1px,transparent_1px)]"
                    } bg-[size:70px_70px]`}
                />
            </div>

            <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <div className="mb-5 flex items-center gap-3">
                            <span
                                className={`h-px w-10 ${
                                    isDark
                                        ? "bg-violet-400"
                                        : "bg-indigo-500"
                                }`}
                            />

                            <span
                                className={`text-xs font-bold uppercase tracking-[0.25em] ${
                                    isDark
                                        ? "text-violet-300"
                                        : "text-indigo-600"
                                }`}
                            >
                                Rayannovin Products
                            </span>
                        </div>

                        <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                            دسته‌بندی
                            <span
                                className={`mr-3 ${
                                    isDark
                                        ? "text-violet-400"
                                        : "text-indigo-600"
                                }`}
                            >
                                محصولات
                            </span>
                        </h2>

                        <p
                            className={`mt-5 max-w-xl text-base leading-8 sm:text-lg ${
                                isDark
                                    ? "text-slate-400"
                                    : "text-slate-600"
                            }`}
                        >
                            راهکارهای امنیتی حرفه‌ای برای خانه، فروشگاه،
                            سازمان و محیط‌های صنعتی.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Theme */}
                        <button
                            type="button"
                            onClick={() => setIsDark((value) => !value)}
                            className={`flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-all ${
                                isDark
                                    ? "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                                    : "border-slate-300 bg-white/70 text-slate-700 hover:bg-white"
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

                        <a
                            href="/products"
                            className={`group flex items-center gap-3 text-sm font-bold ${
                                isDark
                                    ? "text-white"
                                    : "text-[#152434]"
                            }`}
                        >
                            مشاهده همه محصولات

                            <span
                                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all group-hover:-translate-x-1 ${
                                    isDark
                                        ? "border-white/10 bg-white/5 group-hover:bg-white/10"
                                        : "border-slate-300 bg-white group-hover:bg-slate-50"
                                }`}
                            >
                                <ArrowLeft className="h-4 w-4" />
                            </span>
                        </a>
                    </div>
                </div>

                {/* Slider */}
                <div className="relative">
                    <div
                        ref={sliderRef}
                        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 scrollbar-hide"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                        onKeyDown={(event) => {
                            if (event.key === "ArrowLeft") {
                                next();
                            }

                            if (event.key === "ArrowRight") {
                                previous();
                            }
                        }}
                        tabIndex={0}
                        aria-label="دسته‌بندی محصولات"
                    >
                        {categories.map((category, index) => {
                            const Icon = category.icon;
                            const isActive = index === active;

                            return (
                                <article
                                    key={category.id}
                                    onClick={() => setActive(index)}
                                    className={`group relative min-w-[82%] cursor-pointer snap-center overflow-hidden rounded-[30px] border transition-all duration-500 sm:min-w-[52%] lg:min-w-[38%] xl:min-w-[34%] ${
                                        isActive
                                            ? "scale-[1]"
                                            : "scale-[0.97] opacity-80"
                                    } ${
                                        isDark
                                            ? "border-white/10"
                                            : "border-slate-300"
                                    }`}
                                >
                                    {/* Background */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${category.className}`}
                                    />

                                    {/* Glow */}
                                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-[90px] transition-all duration-700 group-hover:bg-violet-400/20" />

                                    {/* Product Image */}
                                    <div className="relative h-[420px] overflow-hidden">
                                        <img
                                            src={category.image}
                                            alt={category.title}
                                            loading={
                                                index < 2
                                                    ? "eager"
                                                    : "lazy"
                                            }
                                            className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-105"
                                        />

                                        {/* Image Overlay */}
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                        {/* Number */}
                                        <div className="absolute right-6 top-6 flex items-center gap-2">
                                            <span className="text-xs font-bold tracking-[0.2em] text-white/50">
                                                0{index + 1}
                                            </span>

                                            <span className="h-px w-8 bg-white/20" />
                                        </div>

                                        {/* Icon */}
                                        <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-xl">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        {/* Content */}
                                        <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                                            <div className="mb-2 text-xs font-medium text-white/50">
                                                {category.count}
                                            </div>

                                            <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
                                                {category.title}
                                            </h3>

                                            <p className="mt-2 text-sm font-medium text-white/60">
                                                {category.subtitle}
                                            </p>

                                            <div className="mt-5 flex items-center justify-between">
                                                <span className="max-w-[75%] text-xs leading-6 text-white/50">
                                                    {category.description}
                                                </span>

                                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:-translate-x-1">
                                                    <ArrowLeft className="h-4 w-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {/* Controls */}
                    <div className="mt-5 flex items-center justify-between">
                        {/* Pagination */}
                        <div className="flex items-center gap-2">
                            {categories.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    aria-label={`رفتن به دسته ${index + 1}`}
                                    onClick={() => setActive(index)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                        active === index
                                            ? `w-10 ${
                                                isDark
                                                    ? "bg-violet-400"
                                                    : "bg-indigo-600"
                                            }`
                                            : `w-2 ${
                                                isDark
                                                    ? "bg-white/20"
                                                    : "bg-slate-400"
                                            }`
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Slider Controls */}
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={previous}
                                aria-label="دسته قبلی"
                                className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all ${
                                    isDark
                                        ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                                        : "border-slate-300 bg-white text-[#152434] hover:bg-slate-50"
                                }`}
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>

                            <button
                                type="button"
                                onClick={next}
                                aria-label="دسته بعدی"
                                className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all ${
                                    isDark
                                        ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                                        : "border-slate-300 bg-white text-[#152434] hover:bg-slate-50"
                                }`}
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom info */}
                <div
                    className={`mt-10 flex flex-col gap-4 border-t pt-7 sm:flex-row sm:items-center sm:justify-between ${
                        isDark
                            ? "border-white/10"
                            : "border-slate-300"
                    }`}
                >
                    <p
                        className={`text-xs ${
                            isDark
                                ? "text-slate-500"
                                : "text-slate-500"
                        }`}
                    >
                        تجهیزات اصلی و تخصصی سیستم‌های حفاظتی و نظارتی
                    </p>

                    <div
                        className={`flex items-center gap-2 text-xs ${
                            isDark
                                ? "text-slate-500"
                                : "text-slate-500"
                        }`}
                    >
                        <span
                            className={`h-1.5 w-1.5 rounded-full ${
                                isDark
                                    ? "bg-emerald-400"
                                    : "bg-emerald-500"
                            }`}
                        />
                        محصولات با ضمانت و اصالت کالا
                    </div>
                </div>
            </div>

            {/* Reduced Motion */}
            <style>{`
                @media (prefers-reduced-motion: reduce) {
                    *,
                    *::before,
                    *::after {
                        scroll-behavior: auto !important;
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }

                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}