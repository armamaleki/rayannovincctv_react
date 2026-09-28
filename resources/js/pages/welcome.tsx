import {Head} from '@inertiajs/react';
import HomeLayout from "@/layouts/home/home-layout";
import ProductCategories from "@/components/product-categories";
import FeaturedProducts from "@/components/featured-products";
import SmartSecurity from "@/components/smart-security";
import WhyRayannovin from "@/components/why-rayannovin";
import SolutionsByNeed from "@/components/solutions-by-need";
import Brands from "@/components/brands";
import CinematicCamera from "@/components/cinematic-camera";
import Magazine from "@/components/Magazine";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/CTA";

export default function Welcome() {
    return (
        <>
            <HomeLayout>
                <Head title="Welcome"/>
                <main className="aegis-site min-h-screen overflow-hidden bg-[#e8edf1] text-[#152434] dark:bg-[#07111a] dark:text-white">
                    <section className="relative isolate min-h-screen">

                        <div
                            className="
                absolute inset-0 -z-10
                bg-[radial-gradient(circle_at_78%_18%,rgba(151,205,235,0.8),transparent_31%),linear-gradient(135deg,#eef2f4_0%,#d9e3e9_52%,#bad0dd_100%)]
                dark:bg-[radial-gradient(circle_at_78%_18%,rgba(28,105,140,0.35),transparent_31%),linear-gradient(135deg,#0b1822_0%,#0d202d_52%,#102d3c_100%)]
            "
                        />

                        <div
                            id="top"
                            className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 pb-12 pt-14 lg:grid-cols-[0.86fr_1.14fr] lg:px-12 lg:pb-20 lg:pt-20"
                        >
                            <div className="max-w-xl">

                                {/* Badge */}
                                <div
                                    className="
                        mb-7 inline-flex items-center gap-2 rounded-full
                        border border-[#67a5c7]/35
                        bg-white/45 px-3 py-1.5
                        text-[11px] font-semibold uppercase tracking-[0.18em]
                        text-[#347ca7] backdrop-blur-sm
                        dark:border-cyan-300/20
                        dark:bg-white/5
                        dark:text-cyan-300
                    "
                                >
                    <span
                        className="
                            size-1.5 rounded-full
                            bg-[#4fa9da]
                            shadow-[0_0_0_4px_rgba(79,169,218,0.16)]
                        "
                    />

                                    امنیت هوشمند، ساده و مطمئن
                                </div>

                                {/* Heading */}
                                <h1
                                    className="
                        max-w-2xl text-balance
                        text-5xl font-semibold leading-[0.98]
                        tracking-[-0.055em]
                        text-[#152434]
                        sm:text-6xl lg:text-[78px]
                        dark:text-white
                    "
                                >
                                    امنیت را ببینید.
                                    <br />
                                    <span className="text-[#438caf] dark:text-cyan-400">
                        از آنچه برایتان مهم است محافظت کنید.
                    </span>
                                </h1>

                                {/* Description */}
                                <p
                                    className="
                        mt-7 max-w-md
                        text-base leading-7
                        text-[#536a7b]
                        sm:text-lg
                        dark:text-slate-300
                    "
                                >
                                    دوربین‌های مداربسته حرفه‌ای و تجهیزات امنیتی
                                    برای نظارت دقیق و ۲۴ ساعته. رایان نوین کمک می‌کند
                                    با خیال آسوده از خانه، محل کار و دارایی‌های خود محافظت کنید.
                                </p>

                                {/* Buttons */}
                                <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                                    <a
                                        href="#products"
                                        className="
                            flex items-center justify-center gap-3
                            rounded-full bg-[#152434]
                            px-6 py-3.5
                            text-sm font-semibold text-white
                            shadow-xl shadow-[#152434]/15
                            transition-all
                            hover:-translate-y-1
                            hover:bg-[#20384e]
                            dark:bg-cyan-400
                            dark:text-[#06131c]
                            dark:shadow-cyan-400/10
                            dark:hover:bg-cyan-300
                        "
                                    >
                                        مشاهده محصولات
                                    </a>

                                    <a
                                        href="#story"
                                        className="
                            flex items-center justify-center gap-3
                            rounded-full
                            border border-[#152434]/20
                            bg-white/35
                            px-6 py-3.5
                            text-sm font-semibold
                            text-[#152434]
                            backdrop-blur-sm
                            transition-colors
                            hover:bg-white/70
                            dark:border-white/15
                            dark:bg-white/5
                            dark:text-white
                            dark:hover:bg-white/10
                        "
                                    >
                        <span
                            className="
                                grid size-6 place-items-center
                                rounded-full
                                bg-[#b5dff1]
                                text-[#152434]
                                dark:bg-cyan-400/20
                                dark:text-cyan-300
                            "
                        >
                            →
                        </span>

                                        چرا رایان نوین؟
                                    </a>

                                </div>

                                {/* Stats */}
                                <div
                                    className="
                        mt-14 flex items-center gap-8
                        border-t border-[#152434]/10
                        pt-5 text-sm
                        dark:border-white/10
                    "
                                >
                                    <div>
                                        <strong
                                            className="
                                block text-2xl tracking-tight
                                text-[#152434]
                                dark:text-white
                            "
                                        >
                                            4K
                                        </strong>

                                        <span className="text-[#657a89] dark:text-slate-400">
                            کیفیت تصویر فوق‌العاده
                        </span>
                                    </div>

                                    <div className="h-9 w-px bg-[#152434]/10 dark:bg-white/10" />

                                    <div>
                                        <strong
                                            className="
                                block text-2xl tracking-tight
                                text-[#152434]
                                dark:text-white
                            "
                                        >
                                            24/7
                                        </strong>

                                        <span className="text-[#657a89] dark:text-slate-400">
                            نظارت شبانه‌روزی
                        </span>
                                    </div>

                                    <div className="h-9 w-px bg-[#152434]/10 dark:bg-white/10" />

                                    <div>
                                        <strong
                                            className="
                                block text-2xl tracking-tight
                                text-[#152434]
                                dark:text-white
                            "
                                        >
                                            IP67
                                        </strong>

                                        <span className="text-[#657a89] dark:text-slate-400">
                            مقاوم در برابر شرایط جوی
                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Camera */}
                            <div className="relative mx-auto w-full max-w-2xl lg:translate-x-3">

                                <div
                                    className="
                        relative overflow-hidden
                        rounded-[2rem]
                        border border-white/80
                        bg-[#779aae]/20
                        p-2
                        shadow-2xl shadow-[#477186]/25
                        backdrop-blur-sm
                        sm:rounded-[2.6rem] sm:p-3
                        dark:border-white/10
                        dark:bg-white/5
                        dark:shadow-black/30
                    "
                                >
                                    <div
                                        className="
                            relative aspect-[1.08/1]
                            overflow-hidden
                            rounded-[1.6rem]
                            bg-[#89b9d2]
                            sm:rounded-[2rem]
                            dark:bg-[#183747]
                        "
                                    >
                                        <img
                                            src="/assets/images/download.png"
                                            alt="دوربین مداربسته رایان نوین"
                                            className="size-full object-cover object-center"
                                        />

                                        <div
                                            className="
                                absolute inset-0
                                bg-gradient-to-tr
                                from-[#152434]/25
                                via-transparent
                                to-white/10
                                dark:from-black/40
                                dark:to-cyan-300/5
                            "
                                        />

                                        {/* Online */}
                                        <div
                                            className="
                                absolute left-5 top-5
                                flex items-center gap-2
                                rounded-full
                                bg-[#152434]/75
                                px-3 py-2
                                text-[11px] font-medium text-white
                                backdrop-blur-md
                            "
                                        >
                                            <span className="size-1.5 animate-pulse rounded-full bg-[#83ddac]" />

                                            دوربین آنلاین
                                        </div>

                                        {/* Live View */}
                                        <div
                                            className="
                                absolute bottom-5 right-5
                                rounded-2xl
                                bg-white/80
                                px-4 py-3
                                shadow-lg
                                backdrop-blur-md
                                dark:bg-[#07111a]/80
                            "
                                        >
                                            <div
                                                className="
                                    mb-1 flex items-center gap-1.5
                                    text-[10px] font-semibold
                                    uppercase tracking-wider
                                    text-[#547080]
                                    dark:text-slate-400
                                "
                                            >
                                                <span className="size-1.5 rounded-full bg-[#4fa9da]" />

                                                نمای زنده
                                            </div>

                                            <div
                                                className="
                                    text-sm font-semibold
                                    text-[#152434]
                                    dark:text-white
                                "
                                            >
                                                ورودی اصلی

                                                <span className="ml-2 font-normal text-[#657a89] dark:text-slate-500">
                                    12:48:06
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Protection Score */}
                                <div
                                    className="
                        absolute -bottom-4 -left-3
                        hidden rounded-2xl
                        border border-white/80
                        bg-white/70
                        px-4 py-3
                        shadow-xl
                        backdrop-blur-md
                        sm:block
                        dark:border-white/10
                        dark:bg-[#0b1b26]/80
                    "
                                >
                                    <div
                                        className="
                            text-[10px] font-semibold
                            uppercase tracking-wider
                            text-[#547080]
                            dark:text-slate-400
                        "
                                    >
                                        امتیاز امنیت
                                    </div>

                                    <div className="mt-1 flex items-baseline gap-1">
                        <span
                            className="
                                text-2xl font-semibold
                                text-[#152434]
                                dark:text-white
                            "
                        >
                            98
                        </span>

                                        <span className="text-sm text-[#6e8491] dark:text-slate-500">
                            / 100
                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Bar */}
                        <div
                            id="products"
                            className="
                mx-auto flex max-w-[1440px]
                flex-col gap-4
                px-6 pb-8 pt-3
                sm:flex-row sm:items-center sm:justify-between
                lg:px-12
            "
                        >
                            <div>
                <span className="text-xs text-[#6a7e8d] dark:text-slate-400">
                    مورد اعتماد هزاران خانه و کسب‌وکار
                </span>

                                <p
                                    className="
                        mt-1 text-sm font-semibold
                        text-[#152434]
                        dark:text-white
                    "
                                >
                                    دوربین مداربسته 4K رایان نوین · مشاهده محصولات
                                </p>
                            </div>

                            <button
                                type="button"
                                className="
                    flex items-center justify-center gap-2
                    rounded-full
                    bg-[#4a9aca]
                    px-5 py-3
                    text-sm font-semibold text-white
                    shadow-lg shadow-[#4a9aca]/20
                    transition-transform
                    hover:-translate-y-0.5
                    dark:bg-cyan-500
                    dark:shadow-cyan-500/20
                    dark:hover:bg-cyan-400
                "
                            >
                                مشاهده دوربین‌ها
                                <span aria-hidden="true">+</span>
                            </button>
                        </div>

                    </section>
                </main>
                <ProductCategories />
                <FeaturedProducts/>
                <SmartSecurity/>
                <WhyRayannovin/>
                <SolutionsByNeed/>
                <Brands/>
                <CinematicCamera/>
                <Magazine/>
                <FAQ/>
                <FinalCTA/>
            </HomeLayout>
        </>
    );
}
