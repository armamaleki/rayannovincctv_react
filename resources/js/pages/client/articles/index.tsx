import HomeLayout from "@/layouts/home/home-layout";
import {
    Search,
    ArrowLeft,
    CalendarDays,
    Clock3,
    BookOpen,
    ChevronLeft,
    Tag,
} from "lucide-react";
import { useMemo, useState } from "react";

const categories = [
    "همه",
    "دوربین مداربسته",
    "شبکه",
    "ذخیره‌سازی",
    "امنیت",
    "آموزش",
];

const articles = [
    {
        id: 1,
        title: "راهنمای کامل انتخاب دوربین مداربسته برای محیط‌های مختلف",
        excerpt:
            "قبل از خرید دوربین مداربسته باید عواملی مانند محل نصب، میزان نور، رزولوشن، لنز و نوع کاربری را بررسی کنید.",
        category: "دوربین مداربسته",
        date: "۲۵ شهریور ۱۴۰۵",
        readTime: "۸ دقیقه",
        image: "/images/articles/cctv-guide.jpg",
        featured: true,
    },
    {
        id: 2,
        title: "تفاوت دوربین IP و آنالوگ چیست؟",
        excerpt:
            "بررسی تفاوت‌های فنی، مزایا، محدودیت‌ها و کاربردهای دوربین‌های تحت شبکه و آنالوگ.",
        category: "دوربین مداربسته",
        date: "۲۲ شهریور ۱۴۰۵",
        readTime: "۶ دقیقه",
        image: "/images/articles/ip-vs-analog.jpg",
    },
    {
        id: 3,
        title: "چگونه ظرفیت هارد مورد نیاز دوربین مداربسته را محاسبه کنیم؟",
        excerpt:
            "با شناخت رزولوشن، فریم‌ریت، کدک فشرده‌سازی و تعداد دوربین می‌توان ظرفیت ذخیره‌سازی مورد نیاز را محاسبه کرد.",
        category: "ذخیره‌سازی",
        date: "۱۹ شهریور ۱۴۰۵",
        readTime: "۷ دقیقه",
        image: "/images/articles/storage.jpg",
    },
    {
        id: 4,
        title: "راهنمای انتخاب سوئیچ شبکه برای دوربین‌های تحت شبکه",
        excerpt:
            "چه سوئیچی برای یک سیستم نظارتی مناسب است؟ بررسی PoE، پهنای باند و تعداد پورت‌ها.",
        category: "شبکه",
        date: "۱۵ شهریور ۱۴۰۵",
        readTime: "۵ دقیقه",
        image: "/images/articles/network-switch.jpg",
    },
    {
        id: 5,
        title: "PoE چیست و چه کاربردی در سیستم‌های نظارتی دارد؟",
        excerpt:
            "در این مقاله با مفهوم PoE و نحوه انتقال همزمان برق و داده از طریق کابل شبکه آشنا می‌شویم.",
        category: "شبکه",
        date: "۱۲ شهریور ۱۴۰۵",
        readTime: "۴ دقیقه",
        image: "/images/articles/poe.jpg",
    },
    {
        id: 6,
        title: "تفاوت NVR و DVR؛ کدام دستگاه برای شما مناسب است؟",
        excerpt:
            "مقایسه کامل NVR و DVR و بررسی اینکه هرکدام برای چه نوع سیستم نظارتی مناسب هستند.",
        category: "امنیت",
        date: "۱۰ شهریور ۱۴۰۵",
        readTime: "۶ دقیقه",
        image: "/images/articles/nvr-dvr.jpg",
    },
    {
        id: 7,
        title: "آموزش تنظیمات اولیه دوربین تحت شبکه",
        excerpt:
            "مراحل اتصال، تنظیم IP، ورود به پنل و انجام تنظیمات اولیه یک دوربین IP.",
        category: "آموزش",
        date: "۶ شهریور ۱۴۰۵",
        readTime: "۹ دقیقه",
        image: "/images/articles/ip-camera.jpg",
    },
    {
        id: 8,
        title: "چگونه امنیت سیستم دوربین مداربسته را افزایش دهیم؟",
        excerpt:
            "چند راهکار مهم برای جلوگیری از دسترسی غیرمجاز به دوربین‌ها و تجهیزات شبکه.",
        category: "امنیت",
        date: "۲ شهریور ۱۴۰۵",
        readTime: "۷ دقیقه",
        image: "/images/articles/security.jpg",
    },
];

export default function Articles() {
    const [category, setCategory] = useState("همه");
    const [search, setSearch] = useState("");

    const filteredArticles = useMemo(() => {
        return articles.filter((article) => {
            const matchCategory =
                category === "همه" || article.category === category;

            const q = search.trim().toLowerCase();

            const matchSearch =
                !q ||
                article.title.toLowerCase().includes(q) ||
                article.excerpt.toLowerCase().includes(q);

            return matchCategory && matchSearch;
        });
    }, [category, search]);

    const featured = articles.find((article) => article.featured);

    return (
        <HomeLayout>
            <main
                dir="rtl"
                className="min-h-screen bg-[#050b14] text-white"
            >
                {/* Background */}
                <div className="pointer-events-none fixed inset-0 overflow-hidden">
                    <div className="absolute right-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />
                    <div className="absolute bottom-[-300px] left-[-250px] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[150px]" />

                    <div
                        className="absolute inset-0 opacity-[0.025]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                            backgroundSize: "50px 50px",
                        }}
                    />
                </div>

                <div className="relative mx-auto max-w-[1450px] px-5 py-12 lg:px-8">

                    {/* Header */}
                    <section className="mb-10">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                                <BookOpen className="size-6" />
                            </div>

                            <div>
                                <p className="text-xs font-semibold tracking-wider text-cyan-400">
                                    RAYAN NOVIN
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    Magazine & Knowledge
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <h1 className="text-4xl font-black tracking-tight md:text-5xl">
                                    مقالات و مجله
                                </h1>

                                <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-400 md:text-base">
                                    آموزش‌ها، راهنماها و مطالب تخصصی درباره
                                    دوربین مداربسته، شبکه، امنیت و تجهیزات
                                    نظارتی.
                                </p>
                            </div>

                            <div className="text-left text-xs text-slate-500">
                                <span className="text-2xl font-black text-white">
                                    {articles.length}
                                </span>
                                <br />
                                مقاله منتشر شده
                            </div>
                        </div>
                    </section>

                    {/* Featured */}
                    {featured && (
                        <section className="group relative mb-10 overflow-hidden rounded-[30px] border border-white/10 bg-[#0c1725]">
                            <div className="grid min-h-[390px] lg:grid-cols-[1.15fr_.85fr]">

                                {/* Image */}
                                <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-900/20">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{
                                            backgroundImage: `url(${featured.image})`,
                                        }}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111d] via-[#07111d]/30 to-transparent" />

                                    <div className="absolute right-6 top-6 rounded-xl border border-cyan-400/20 bg-[#06101c]/80 px-3 py-2 text-xs font-bold text-cyan-400 backdrop-blur">
                                        مقاله منتخب
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-center p-7 md:p-10">
                                    <div className="mb-5 flex items-center gap-3 text-xs">
                                        <span className="rounded-lg bg-cyan-400/10 px-3 py-1.5 text-cyan-400">
                                            {featured.category}
                                        </span>

                                        <span className="text-slate-600">
                                            •
                                        </span>

                                        <span className="text-slate-500">
                                            {featured.readTime}
                                        </span>
                                    </div>

                                    <h2 className="max-w-2xl text-2xl font-black leading-[1.8] md:text-3xl">
                                        {featured.title}
                                    </h2>

                                    <p className="mt-5 max-w-xl text-sm leading-8 text-slate-400">
                                        {featured.excerpt}
                                    </p>

                                    <div className="mt-7 flex flex-wrap items-center gap-4">
                                        <button
                                            className="
                                                flex h-11 items-center gap-2
                                                rounded-xl bg-cyan-400
                                                px-5 text-sm font-bold
                                                text-slate-950
                                                transition hover:bg-cyan-300
                                            "
                                        >
                                            مطالعه مقاله
                                            <ArrowLeft className="size-4" />
                                        </button>

                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <CalendarDays className="size-4" />
                                            {featured.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Search */}
                    <section className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                        <div className="relative w-full lg:max-w-[430px]">
                            <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-slate-500" />

                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="جستجو در مقالات..."
                                className="
                                    h-12 w-full rounded-2xl
                                    border border-white/10
                                    bg-[#0b1522]
                                    pr-12 pl-4
                                    text-sm text-white
                                    outline-none
                                    transition
                                    placeholder:text-slate-600
                                    focus:border-cyan-400/40
                                    focus:ring-4
                                    focus:ring-cyan-400/5
                                "
                            />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {categories.map((item) => {
                                const active = category === item;

                                return (
                                    <button
                                        key={item}
                                        onClick={() => setCategory(item)}
                                        className={`
                                            rounded-xl border px-4 py-2.5
                                            text-xs font-semibold
                                            transition-all duration-200
                                            ${
                                            active
                                                ? "border-cyan-400/40 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20"
                                                : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-cyan-400/20 hover:bg-white/[0.06] hover:text-white"
                                        }
                                        `}
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    {/* Result count */}
                    <div className="mb-5 flex items-center gap-2 text-xs text-slate-500">
                        <Tag className="size-3.5" />
                        {filteredArticles.length} مقاله
                    </div>

                    {/* Articles Grid */}
                    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {filteredArticles
                            .filter((article) => !article.featured)
                            .map((article) => (
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                />
                            ))}
                    </section>

                    {!filteredArticles.length && (
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] py-24 text-center">
                            <BookOpen className="mx-auto size-10 text-slate-600" />

                            <h3 className="mt-5 text-lg font-bold">
                                مقاله‌ای پیدا نشد
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                عبارت جستجو یا دسته‌بندی را تغییر دهید.
                            </p>
                        </div>
                    )}

                    {/* Bottom CTA */}
                    <section className="relative mt-10 overflow-hidden rounded-[28px] border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.07] via-blue-500/[0.04] to-transparent p-7 md:p-9">
                        <div className="absolute -left-20 -top-20 size-52 rounded-full bg-cyan-400/10 blur-[80px]" />

                        <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h2 className="text-xl font-black">
                                    دنبال آموزش خاصی هستید؟
                                </h2>

                                <p className="mt-2 text-sm leading-7 text-slate-500">
                                    مطالب آموزشی و تخصصی جدید را در مجله رایان
                                    نوین دنبال کنید.
                                </p>
                            </div>

                            <button className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-5 text-sm font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950">
                                مشاهده همه مقالات
                                <ChevronLeft className="size-4" />
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </HomeLayout>
    );
}

function ArticleCard({
                         article,
                     }: {
    article: (typeof articles)[number];
}) {
    return (
        <article
            className="
                group overflow-hidden rounded-[24px]
                border border-white/[0.08]
                bg-[#0c1725]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-cyan-400/20
                hover:shadow-2xl
                hover:shadow-cyan-950/30
            "
        >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-[#101d2d]">
                <div
                    className="
                        absolute inset-0 bg-cover bg-center
                        transition-transform duration-700
                        group-hover:scale-105
                    "
                    style={{
                        backgroundImage: `url(${article.image})`,
                    }}
                />

                {/* fallback dark layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1725] via-transparent to-transparent" />

                <div className="absolute right-4 top-4 rounded-lg border border-white/10 bg-[#07111d]/80 px-3 py-1.5 text-[10px] font-bold text-cyan-400 backdrop-blur">
                    {article.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h2 className="line-clamp-2 text-lg font-bold leading-8 text-white transition-colors group-hover:text-cyan-400">
                    {article.title}
                </h2>

                <p className="mt-3 line-clamp-2 text-xs leading-7 text-slate-500">
                    {article.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                    <div className="flex items-center gap-3 text-[10px] text-slate-600">
                        <span className="flex items-center gap-1.5">
                            <CalendarDays className="size-3.5" />
                            {article.date}
                        </span>

                        <span className="flex items-center gap-1.5">
                            <Clock3 className="size-3.5" />
                            {article.readTime}
                        </span>
                    </div>

                    <button
                        className="
                            flex size-8 items-center justify-center
                            rounded-lg border border-white/10
                            bg-white/[0.03]
                            text-slate-500
                            transition-all
                            group-hover:border-cyan-400/20
                            group-hover:bg-cyan-400/10
                            group-hover:text-cyan-400
                        "
                    >
                        <ArrowLeft className="size-4" />
                    </button>
                </div>
            </div>
        </article>
    );
}