import {
    ArrowLeft,
    Heart,
    GitCompareArrows,
    ShoppingCart,
    Star,
    Eye,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { useRef, useState } from "react";

const featuredProducts = [
    {
        id: 1,
        brand: "Hikvision",
        name: "دوربین مداربسته تحت شبکه 4 مگاپیکسل",
        model: "DS-2CD2043G2-I",
        image: "/images/products/camera-01.png",
        price: "۸,۹۵۰,۰۰۰",
        oldPrice: "۹,۴۰۰,۰۰۰",
        discount: "۵٪",
        rating: 4.8,
        reviews: 24,
        badge: "پرفروش",
        specs: ["4MP", "PoE", "IP67"],
    },
    {
        id: 2,
        brand: "Dahua",
        name: "دوربین دام تحت شبکه 5 مگاپیکسل",
        model: "IPC-HDW3541T-ZS",
        image: "/images/products/camera-02.png",
        price: "۷,۶۸۰,۰۰۰",
        oldPrice: "۸,۲۰۰,۰۰۰",
        discount: "۶٪",
        rating: 4.9,
        reviews: 18,
        badge: "منتخب",
        specs: ["5MP", "WDR", "IP67"],
    },
    {
        id: 3,
        brand: "Hikvision",
        name: "دستگاه NVR شانزده کانال",
        model: "DS-7616NI-K2",
        image: "/images/products/nvr-01.png",
        price: "۱۵,۴۰۰,۰۰۰",
        oldPrice: "۱۶,۲۰۰,۰۰۰",
        discount: "۵٪",
        rating: 4.7,
        reviews: 31,
        badge: "ویژه",
        specs: ["16CH", "4K", "H.265+"],
    },
    {
        id: 4,
        brand: "TP-Link",
        name: "سوئیچ شبکه 8 پورت PoE",
        model: "TL-SG1008MP",
        image: "/images/products/switch-01.png",
        price: "۱۲,۸۰۰,۰۰۰",
        oldPrice: null,
        discount: null,
        rating: 4.6,
        reviews: 12,
        badge: null,
        specs: ["8 Port", "PoE+", "120W"],
    },
    {
        id: 5,
        brand: "Hikvision",
        name: "دوربین بولت ColorVu هوشمند",
        model: "DS-2CD2T87G2-L",
        image: "/images/products/camera-03.png",
        price: "۱۸,۲۰۰,۰۰۰",
        oldPrice: "۱۹,۵۰۰,۰۰۰",
        discount: "۷٪",
        rating: 4.9,
        reviews: 16,
        badge: "جدید",
        specs: ["8MP", "ColorVu", "AI"],
    },
];

export default function FeaturedProducts() {
    const [isDark, setIsDark] = useState(true);
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: direction === "next" ? 390 : -390,
            behavior: "smooth",
        });
    };

    return (
        <section
            dir="rtl"
            className={`relative overflow-hidden py-24 transition-colors duration-500 ${
                isDark
                    ? "bg-[#0b0f14] text-white"
                    : "bg-[#f4f6f8] text-[#152434]"
            }`}
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className={`absolute left-[10%] top-20 h-96 w-96 rounded-full blur-[150px] ${
                        isDark
                            ? "bg-violet-950/20"
                            : "bg-indigo-200/30"
                    }`}
                />

                <div
                    className={`absolute bottom-0 right-[20%] h-72 w-72 rounded-full blur-[130px] ${
                        isDark
                            ? "bg-blue-950/20"
                            : "bg-blue-100/40"
                    }`}
                />
            </div>

            <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

                {/* Header */}
                <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                    <div>
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
                                Featured Products
                            </span>
                        </div>

                        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                            محصولات منتخب
                            <span
                                className={`mr-3 ${
                                    isDark
                                        ? "text-violet-400"
                                        : "text-indigo-600"
                                }`}
                            >
                                رایان نوین
                            </span>
                        </h2>

                        <p
                            className={`mt-5 max-w-2xl leading-8 ${
                                isDark
                                    ? "text-slate-400"
                                    : "text-slate-600"
                            }`}
                        >
                            مجموعه‌ای از محصولات پرفروش، جدید و منتخب
                            رایان نوین برای ساخت یک سیستم امنیتی مطمئن.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">

                        <button
                            type="button"
                            onClick={() => setIsDark((v) => !v)}
                            className={`flex h-11 items-center gap-2 rounded-full border px-4 text-xs font-bold ${
                                isDark
                                    ? "border-white/10 bg-white/5"
                                    : "border-slate-300 bg-white"
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
                                className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                                    isDark
                                        ? "border-white/10 bg-white/5"
                                        : "border-slate-300 bg-white"
                                }`}
                            >
                                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            </span>
                        </a>
                    </div>
                </div>

                {/* Products */}
                <div className="relative">

                    <div
                        ref={sliderRef}
                        className="flex gap-5 overflow-x-auto pb-5 scrollbar-hide"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {featuredProducts.map((product) => (
                            <article
                                key={product.id}
                                className={`group relative min-w-[300px] overflow-hidden rounded-[28px] border sm:min-w-[340px] lg:min-w-[365px] ${
                                    isDark
                                        ? "border-white/10 bg-[#11161d]"
                                        : "border-slate-200 bg-white"
                                }`}
                            >

                                {/* Image */}
                                <div
                                    className={`relative h-[330px] overflow-hidden ${
                                        isDark
                                            ? "bg-[#151b23]"
                                            : "bg-[#f1f4f6]"
                                    }`}
                                >

                                    {/* Discount */}
                                    {product.discount && (
                                        <span className="absolute right-5 top-5 z-10 rounded-full bg-violet-500 px-3 py-1.5 text-xs font-black text-white">
                                            {product.discount}
                                        </span>
                                    )}

                                    {/* Badge */}
                                    {product.badge && (
                                        <span
                                            className={`absolute left-5 top-5 z-10 rounded-full border px-3 py-1.5 text-xs font-bold ${
                                                isDark
                                                    ? "border-white/10 bg-black/30 text-white backdrop-blur"
                                                    : "border-slate-200 bg-white/80 text-slate-700 backdrop-blur"
                                            }`}
                                        >
                                            {product.badge}
                                        </span>
                                    )}

                                    {/* Actions */}
                                    <div className="absolute left-5 top-16 z-10 flex flex-col gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">

                                        <button
                                            type="button"
                                            aria-label="افزودن به علاقه‌مندی"
                                            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur ${
                                                isDark
                                                    ? "border-white/10 bg-black/40 text-white"
                                                    : "border-slate-200 bg-white/90 text-slate-700"
                                            }`}
                                        >
                                            <Heart className="h-4 w-4" />
                                        </button>

                                        <button
                                            type="button"
                                            aria-label="مقایسه محصول"
                                            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur ${
                                                isDark
                                                    ? "border-white/10 bg-black/40 text-white"
                                                    : "border-slate-200 bg-white/90 text-slate-700"
                                            }`}
                                        >
                                            <GitCompareArrows className="h-4 w-4" />
                                        </button>

                                        <button
                                            type="button"
                                            aria-label="مشاهده محصول"
                                            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur ${
                                                isDark
                                                    ? "border-white/10 bg-black/40 text-white"
                                                    : "border-slate-200 bg-white/90 text-slate-700"
                                            }`}
                                        >
                                            <Eye className="h-4 w-4" />
                                        </button>
                                    </div>

                                    {/* Product */}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        loading="lazy"
                                        className="h-full w-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Bottom Gradient */}
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>

                                {/* Info */}
                                <div className="p-6">

                                    {/* Brand */}
                                    <div className="mb-3 flex items-center justify-between">
                                        <span
                                            className={`text-xs font-bold uppercase tracking-wider ${
                                                isDark
                                                    ? "text-violet-300"
                                                    : "text-indigo-600"
                                            }`}
                                        >
                                            {product.brand}
                                        </span>

                                        <span
                                            className={`text-[11px] ${
                                                isDark
                                                    ? "text-slate-500"
                                                    : "text-slate-400"
                                            }`}
                                        >
                                            {product.model}
                                        </span>
                                    </div>

                                    {/* Name */}
                                    <h3
                                        className={`min-h-[56px] text-base font-black leading-7 ${
                                            isDark
                                                ? "text-white"
                                                : "text-[#152434]"
                                        }`}
                                    >
                                        {product.name}
                                    </h3>

                                    {/* Specs */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {product.specs.map((spec) => (
                                            <span
                                                key={spec}
                                                className={`rounded-lg px-2.5 py-1.5 text-[10px] font-bold ${
                                                    isDark
                                                        ? "bg-white/5 text-slate-400"
                                                        : "bg-slate-100 text-slate-500"
                                                }`}
                                            >
                                                {spec}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Rating */}
                                    <div
                                        className={`mt-5 flex items-center gap-2 border-b pb-5 ${
                                            isDark
                                                ? "border-white/10"
                                                : "border-slate-100"
                                        }`}
                                    >
                                        <div className="flex items-center gap-1">
                                            <Star className="h-3.5 w-3.5 fill-current text-amber-400" />

                                            <span className="text-xs font-bold">
                                                {product.rating}
                                            </span>
                                        </div>

                                        <span
                                            className={`text-[11px] ${
                                                isDark
                                                    ? "text-slate-500"
                                                    : "text-slate-400"
                                            }`}
                                        >
                                            ({product.reviews} نظر)
                                        </span>
                                    </div>

                                    {/* Price */}
                                    <div className="mt-5 flex items-end justify-between gap-3">

                                        <div>
                                            {product.oldPrice && (
                                                <div
                                                    className={`mb-1 text-xs line-through ${
                                                        isDark
                                                            ? "text-slate-600"
                                                            : "text-slate-400"
                                                    }`}
                                                >
                                                    {product.oldPrice} تومان
                                                </div>
                                            )}

                                            <div className="flex items-baseline gap-1">
                                                <strong className="text-xl font-black">
                                                    {product.price}
                                                </strong>

                                                <span
                                                    className={`text-[10px] ${
                                                        isDark
                                                            ? "text-slate-500"
                                                            : "text-slate-400"
                                                    }`}
                                                >
                                                    تومان
                                                </span>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            aria-label="افزودن به سبد خرید"
                                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all group-hover:-translate-y-1 ${
                                                isDark
                                                    ? "bg-white text-black hover:bg-violet-400"
                                                    : "bg-[#152434] text-white hover:bg-indigo-600"
                                            }`}
                                        >
                                            <ShoppingCart className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="mt-7 flex items-center justify-between">

                        <div
                            className={`text-xs ${
                                isDark
                                    ? "text-slate-500"
                                    : "text-slate-400"
                            }`}
                        >
                            <span className="font-bold">۰۵</span>
                            <span className="mx-2">محصول منتخب</span>
                        </div>

                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => scroll("next")}
                                aria-label="محصولات بعدی"
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
                                onClick={() => scroll("prev")}
                                aria-label="محصولات قبلی"
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

                {/* Bottom CTA */}
                <div
                    className={`mt-14 flex flex-col items-center justify-between gap-5 rounded-[24px] border p-6 sm:flex-row ${
                        isDark
                            ? "border-white/10 bg-white/[0.025]"
                            : "border-slate-200 bg-white"
                    }`}
                >
                    <div>
                        <h3 className="font-black">
                            به دنبال محصول خاصی هستید؟
                        </h3>

                        <p
                            className={`mt-1 text-sm ${
                                isDark
                                    ? "text-slate-500"
                                    : "text-slate-500"
                            }`}
                        >
                            در میان تمام محصولات رایان نوین جستجو کنید.
                        </p>
                    </div>

                    <a
                        href="/products"
                        className={`flex items-center gap-3 rounded-full px-6 py-3 text-sm font-bold ${
                            isDark
                                ? "bg-white text-black"
                                : "bg-[#152434] text-white"
                        }`}
                    >
                        مشاهده کاتالوگ محصولات

                        <ArrowLeft className="h-4 w-4" />
                    </a>
                </div>
            </div>

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