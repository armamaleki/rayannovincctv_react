import HomeLayout from "@/layouts/home/home-layout";
import { InfiniteScroll, Link, router } from "@inertiajs/react";
import { useState } from "react";

interface Subcategory {
    id: number;
    name: string;
    slug: string;
    image_url?: string | null;
    products_count: number;
}

interface Category {
    id: number;
    name: string;
    slug: string;
    description?: string | null;
    short_description?: string | null;
    image_url?: string | null;
    products_count: number;
    children: Subcategory[];
}

interface Stats {
    products_count: number;
    categories_count: number;
    subcategories_count: number;
}

interface Props {
    categories: {
        data: Category[];
        current_page: number;
        last_page: number;
        total: number;
    };
    stats: Stats;
    query: {
        q?: string;
    };
}

function CategoryCard({ category }: { category: Category }) {
    return (
        <article
            className="
                group relative overflow-hidden
                rounded-[28px]
                border border-[#dfe4e8]
                bg-white
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#cbd2d8]
                hover:shadow-[0_20px_50px_rgba(20,30,40,0.10)]
            "
        >
            {/* Image */}
            <Link
                href={`/store?category=${category.id}`}
                className="block"
            >
                <div
                    className="
                        relative flex h-[250px]
                        items-center justify-center
                        overflow-hidden
                        bg-[#f3f5f6]
                    "
                >
                    {/* Background */}
                    <div
                        className="
                            absolute -right-16 -top-16
                            h-40 w-40 rounded-full
                            bg-[#e7ebee]
                            transition-transform duration-500
                            group-hover:scale-125
                        "
                    />

                    <img
                        src={
                            category.image_url ||
                            "/assets/images/example.jpg"
                        }
                        alt={category.name}
                        loading="lazy"
                        className="
                            relative z-10
                            h-[190px] w-[80%]
                            object-contain
                            transition-transform duration-500
                            group-hover:scale-105
                        "
                    />

                    {/* Product Count */}
                    <div
                        className="
                            absolute right-4 top-4 z-20
                            rounded-full
                            bg-white
                            px-3 py-1.5
                            text-xs font-medium
                            text-[#66717c]
                            shadow-sm
                        "
                    >
                        {category.products_count.toLocaleString("fa-IR")} محصول
                    </div>
                </div>
            </Link>

            {/* Content */}
            <div className="p-6">
                <div className="mb-2 flex items-center justify-between gap-4">
                    <Link
                        href={`/store?category=${category.id}`}
                        className="min-w-0"
                    >
                        <h2
                            className="
                                text-xl font-black
                                tracking-tight
                                text-[#172331]
                            "
                        >
                            {category.name}
                        </h2>
                    </Link>

                    <Link
                        href={`/store?category=${category.id}`}
                        aria-label={`مشاهده محصولات ${category.name}`}
                        className="
                            flex h-9 w-9 shrink-0
                            items-center justify-center
                            rounded-full
                            bg-[#172331]
                            text-white
                            transition-transform duration-300
                            group-hover:-translate-x-1
                        "
                    >
                        ←
                    </Link>
                </div>

                <p className="mb-5 text-sm leading-7 text-[#7a858f]">
                    {category.short_description ||
                        category.description ||
                        `مشاهده محصولات دسته‌بندی ${category.name}`}
                </p>

                {/* Subcategories */}
                {category.children?.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2">
                        {category.children.map((item) => (
                            <Link
                                key={item.id}
                                href={`/store?category=${item.id}`}
                                className="
                                    rounded-xl
                                    bg-[#f6f7f8]
                                    px-3 py-2.5
                                    text-xs
                                    text-[#58636d]
                                    transition-colors
                                    hover:bg-[#e9edf0]
                                    hover:text-[#172331]
                                "
                            >
                                <span className="block truncate">
                                    {item.name}
                                </span>

                                <span className="mt-1 block text-[10px] text-[#98a1a9]">
                                    {item.products_count.toLocaleString("fa-IR")} محصول
                                </span>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="rounded-xl bg-[#f6f7f8] px-3 py-4 text-center text-xs text-[#98a1a9]">
                        زیر‌دسته‌ای ثبت نشده است.
                    </div>
                )}

                {/* Bottom */}
                <div
                    className="
                        mt-6 flex
                        items-center justify-between
                        border-t border-[#edf0f2]
                        pt-5
                    "
                >
                    <span className="text-xs text-[#98a1a9]">
                        مشاهده دسته‌بندی
                    </span>

                    <Link
                        href={`/store?category=${category.id}`}
                        className="
                            text-sm font-bold
                            text-[#172331]
                            transition-colors
                            hover:text-indigo-600
                        "
                    >
                        مشاهده محصولات
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default function Index({
                                  categories,
                                  stats,
                                  query,
                              }: Props) {
    const [search, setSearch] = useState(query?.q ?? "");

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        router.get(
            window.location.pathname,
            {
                q: search.trim() || undefined,
            },
            {
                preserveState: true,
                preserveScroll: false,
                replace: true,
            },
        );
    };

    const clearSearch = () => {
        setSearch("");

        router.get(
            window.location.pathname,
            {},
            {
                preserveState: true,
                preserveScroll: false,
                replace: true,
            },
        );
    };

    return (
        <HomeLayout>
            <main
                dir="rtl"
                className="
                    min-h-screen
                    bg-[#eef1f3]
                    text-[#172331]
                "
            >
                {/* Header */}
                <section className="mx-auto max-w-[1500px] px-6 pb-8 pt-12 lg:px-10">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-3xl">
                            <div
                                className="
                                    mb-4 inline-flex
                                    items-center gap-2
                                    text-xs font-bold
                                    tracking-[0.15em]
                                    text-[#697580]
                                "
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-[#172331]" />
                                PRODUCT CATEGORIES
                            </div>

                            <h1
                                className="
                                    text-4xl font-black
                                    tracking-tight
                                    text-[#152331]
                                    md:text-5xl
                                "
                            >
                                دسته‌بندی محصولات
                            </h1>

                            <p
                                className="
                                    mt-5 max-w-2xl
                                    text-base leading-8
                                    text-[#6d7882]
                                "
                            >
                                مجموعه کامل تجهیزات حفاظتی، نظارتی و
                                شبکه رایان نوین را بر اساس دسته‌بندی
                                موردنظر خود مشاهده کنید.
                            </p>
                        </div>

                        {/* Search */}
                        <form
                            onSubmit={handleSearch}
                            className="w-full lg:w-[360px]"
                        >
                            <div
                                className="
                                    flex h-14
                                    items-center gap-3
                                    rounded-2xl
                                    border border-[#dce1e5]
                                    bg-white px-4
                                    shadow-sm
                                "
                            >
                                <svg
                                    className="h-5 w-5 shrink-0 text-[#8a949d]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <circle cx="11" cy="11" r="7" />
                                    <path d="m20 20-3.5-3.5" />
                                </svg>

                                <input
                                    type="text"
                                    value={search}
                                    onChange={(event) =>
                                        setSearch(event.target.value)
                                    }
                                    placeholder="جستجو در دسته‌بندی‌ها..."
                                    className="
                                        h-full w-full
                                        bg-transparent
                                        text-sm
                                        outline-none
                                        placeholder:text-[#a1aab2]
                                    "
                                />

                                {search && (
                                    <button
                                        type="button"
                                        onClick={clearSearch}
                                        aria-label="پاک کردن جستجو"
                                        className="shrink-0 text-xs text-[#8a949d] hover:text-[#172331]"
                                    >
                                        پاک کردن
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </section>

                {/* Stats */}
                <section className="mx-auto max-w-[1500px] px-6 lg:px-10">
                    <div
                        className="
                            grid grid-cols-2
                            overflow-hidden
                            rounded-[24px]
                            border border-[#dce1e5]
                            bg-white
                            md:grid-cols-4
                        "
                    >
                        <div className="border-l border-[#edf0f2] p-6">
                            <div className="text-2xl font-black">
                                {stats.products_count.toLocaleString("fa-IR")}
                            </div>

                            <div className="mt-1 text-xs text-[#8a949d]">
                                محصول فعال
                            </div>
                        </div>

                        <div className="border-l border-[#edf0f2] p-6">
                            <div className="text-2xl font-black">
                                {stats.categories_count.toLocaleString("fa-IR")}
                            </div>

                            <div className="mt-1 text-xs text-[#8a949d]">
                                دسته اصلی
                            </div>
                        </div>

                        <div className="border-l border-[#edf0f2] p-6">
                            <div className="text-2xl font-black">
                                {stats.subcategories_count.toLocaleString("fa-IR")}
                            </div>

                            <div className="mt-1 text-xs text-[#8a949d]">
                                زیر‌دسته
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="text-2xl font-black">
                                24/7
                            </div>

                            <div className="mt-1 text-xs text-[#8a949d]">
                                پشتیبانی
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="mx-auto max-w-[1500px] px-6 py-10 lg:px-10">
                    {categories.data.length > 0 ? (
                        <InfiniteScroll
                            data="categories"
                            preserveUrl
                        >
                            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                                {categories.data.map((category) => (
                                    <CategoryCard
                                        key={category.id}
                                        category={category}
                                    />
                                ))}
                            </div>
                        </InfiniteScroll>
                    ) : (
                        <div className="rounded-[28px] border border-[#dce1e5] bg-white px-6 py-16 text-center">
                            <h2 className="text-xl font-black text-[#172331]">
                                دسته‌بندی‌ای پیدا نشد
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-[#7a858f]">
                                عبارت دیگری را برای جستجو وارد کنید.
                            </p>

                            {search && (
                                <button
                                    type="button"
                                    onClick={clearSearch}
                                    className="mt-6 rounded-xl bg-[#172331] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-indigo-600"
                                >
                                    نمایش همه دسته‌بندی‌ها
                                </button>
                            )}
                        </div>
                    )}
                </section>

                {/* Bottom CTA */}
                <section className="mx-auto max-w-[1500px] px-6 pb-16 lg:px-10">
                    <div
                        className="
                            flex flex-col
                            items-center justify-between
                            gap-6
                            rounded-[28px]
                            bg-[#172331]
                            px-8 py-10
                            text-white
                            md:flex-row
                            md:px-12
                        "
                    >
                        <div>
                            <h2 className="text-2xl font-black">
                                برای انتخاب تجهیزات نیاز به راهنمایی دارید؟
                            </h2>

                            <p className="mt-2 text-sm text-white/50">
                                کارشناسان رایان نوین برای انتخاب تجهیزات مناسب
                                پروژه شما آماده‌اند.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="
                                shrink-0
                                rounded-2xl
                                bg-white
                                px-7 py-3.5
                                text-sm font-bold
                                text-[#172331]
                                transition-transform
                                hover:-translate-y-0.5
                            "
                        >
                            دریافت مشاوره
                        </Link>
                    </div>
                </section>
            </main>
        </HomeLayout>
    );
}