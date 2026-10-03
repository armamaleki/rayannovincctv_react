import HomeLayout from "@/layouts/home/home-layout";
import {
    Search,
    ArrowLeft,
    CalendarDays,
    BookOpen,
    Loader2,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { router } from "@inertiajs/react";
import { InfiniteScroll } from '@inertiajs/react';
interface Article {
    id: number;
    name: string;
    slug: string;
    status: "deactivate" | "active" | "check";
    meta_title: string | null;
    meta_description: string | null;
    description: string | null;
    short_description: string | null;
    user_id: number | null;
    created_at: string;
    updated_at: string;
}

interface Articles {
    data: Article[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    next_page_url: string | null;
}

interface Props {
    articles: Articles;
    filters: {
        search?: string;
    };
}

export default function Articles({
                                     articles,
                                     filters,
                                 }: Props) {
    const [search, setSearch] = useState(filters?.search ?? "");

    const [articleList, setArticleList] = useState<Article[]>(
        articles.data,
    );

    const [nextPageUrl, setNextPageUrl] = useState<string | null>(
        articles.next_page_url,
    );

    const [loadingMore, setLoadingMore] = useState(false);


    /*
    |--------------------------------------------------------------------------
    | Sync articles when a new Inertia page is loaded
    |--------------------------------------------------------------------------
    */

    /*
    |--------------------------------------------------------------------------
    | Load More
    |--------------------------------------------------------------------------
    */



    /*
    |--------------------------------------------------------------------------
    | Search
    |--------------------------------------------------------------------------
    */

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();

        router.get(
            window.location.pathname,
            {
                search: search || undefined,
            },
            {
                preserveState: true,
                preserveScroll: false,
                replace: true,
                only: ["articles", "filters"],

            },
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Clear Search
    |--------------------------------------------------------------------------
    */

    const clearSearch = () => {
        setSearch("");

        router.get(
            window.location.pathname,
            {},
            {
                preserveState: true,
                preserveScroll: false,
                replace: true,
                only: ["articles", "filters"],
                onSuccess: (page) => {
                    const newArticles =
                        page.props.articles as ArticlesPagination;

                    setArticleList(newArticles.data);

                    setNextPageUrl(
                        newArticles.next_page_url,
                    );
                },
            },
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Date
    |--------------------------------------------------------------------------
    */

    const formatDate = (date: string) => {
        return new Intl.DateTimeFormat("fa-IR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(new Date(date));
    };

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
                                    {articles.total}
                                </span>

                                <br />

                                مقاله منتشر شده
                            </div>
                        </div>
                    </section>

                    {/* Search */}
                    <section className="mb-6">
                        <form
                            onSubmit={handleSearch}
                            className="flex flex-col gap-3 sm:flex-row"
                        >
                            <div className="relative w-full sm:max-w-[430px]">
                                <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-slate-500" />

                                <input
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(e.target.value)
                                    }
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

                            <button
                                type="submit"
                                className="
                                    h-12 rounded-2xl
                                    bg-cyan-400
                                    px-6
                                    text-sm font-bold
                                    text-slate-950
                                    transition
                                    hover:bg-cyan-300
                                "
                            >
                                جستجو
                            </button>

                            {filters?.search && (
                                <button
                                    type="button"
                                    onClick={clearSearch}
                                    className="
                                        h-12 rounded-2xl
                                        border border-white/10
                                        bg-white/[0.03]
                                        px-5
                                        text-sm font-medium
                                        text-slate-400
                                        transition
                                        hover:bg-white/[0.06]
                                        hover:text-white
                                    "
                                >
                                    پاک کردن
                                </button>
                            )}
                        </form>
                    </section>

                    {/* Result Count */}
                    <div className="mb-5 flex items-center gap-2 text-xs text-slate-500">
                        <BookOpen className="size-3.5" />

                        {articles.total} مقاله
                    </div>

                    {/* Articles */}
                    {articleList.length > 0 ? (
                        <InfiniteScroll
                            data="articles"
                            preserveUrl
                            loading={
                                <div className="flex items-center justify-center py-10">
                                    <div className="text-sm text-slate-400">
                                        در حال دریافت مقالات...
                                    </div>
                                </div>
                            }
                        >
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {articles.data.map((article) => (
                                    <ArticleCard
                                        key={article.id}
                                        article={article}
                                    />
                                ))}
                            </div>
                        </InfiniteScroll>
                    ) : (
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] py-24 text-center">
                            <BookOpen className="mx-auto size-10 text-slate-600" />

                            <h3 className="mt-5 text-lg font-bold">
                                مقاله‌ای پیدا نشد
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                عبارت جستجو را تغییر دهید.
                            </p>
                        </div>
                    )}
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
    article: Article;
}) {
    const formatDate = (date: string) => {
        return new Intl.DateTimeFormat("fa-IR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(new Date(date));
    };

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
            <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="size-14 text-cyan-400/20" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1725] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5">
                <h2 className="line-clamp-2 text-lg font-bold leading-8 text-white transition-colors group-hover:text-cyan-400">
                    {article.name}
                </h2>

                {article.short_description && (
                    <p className="mt-3 line-clamp-2 text-xs leading-7 text-slate-500">
                        {article.short_description}
                    </p>
                )}

                <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                    <div className="flex items-center gap-2 text-[10px] text-slate-600">
                        <span className="flex items-center gap-1.5">
                            <CalendarDays className="size-3.5" />

                            {formatDate(article.created_at)}
                        </span>
                    </div>

                    <a
                        href={`/articles/${article.slug}`}
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
                    </a>
                </div>
            </div>
        </article>
    );
}