
import HomeLayout from "@/layouts/home/home-layout";
import { Link } from "@inertiajs/react";
import { ArrowRight, ShoppingCart, ShieldCheck } from "lucide-react";

interface ProductCategory {
    id: number;
    name: string;
}

interface Granite {
    id: number;
    name: string;
    duration?: string | number;
}

interface Product {
    id: number;
    name: string;
    slug: string;
    price: number | null;
    description?: string | null;
    short_description?: string | null;
    image?: string | null;
    categories?: ProductCategory[];
    grantie?: Granite | null;
}

interface Props {
    product: Product;
}

export default function Show({ product }: Props) {
    const price = product.price
        ? new Intl.NumberFormat("fa-IR").format(product.price)
        : null;

    return (
        <HomeLayout>
            <div className="container mx-auto px-4 py-10">

                {/* Breadcrumb */}
                <div className="mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Link
                        href="/"
                        className="transition-colors hover:text-indigo-600"
                    >
                        خانه
                    </Link>

                    <ArrowRight className="h-4 w-4" />

                    <Link
                        href="/products"
                        className="transition-colors hover:text-indigo-600"
                    >
                        محصولات
                    </Link>

                    <ArrowRight className="h-4 w-4" />

                    <span className="font-bold text-slate-700 dark:text-slate-200">
                        {product.name}
                    </span>
                </div>

                {/* Product */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                    {/* Image */}
                    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white dark:border-white/10 dark:bg-[#11161d]">
                        <div className="relative aspect-square overflow-hidden bg-[#151b23]">
                            <img
                                src={
                                    product.image ??
                                    "/assets/images/example.jpg"
                                }
                                alt={product.name}
                                className="h-full w-full object-contain p-8"
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col rounded-[32px] border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-[#11161d]">

                        {/* Category */}
                        {product.categories?.[0] && (
                            <span className="mb-4 w-fit rounded-full bg-indigo-50 px-4 py-2 text-xs font-bold text-indigo-600 dark:bg-violet-500/10 dark:text-violet-300">
                                {product.categories[0].name}
                            </span>
                        )}

                        {/* Name */}
                        <h1 className="text-3xl font-black leading-[1.8] text-[#152434] dark:text-white">
                            {product.name}
                        </h1>

                        {/* Short Description */}
                        {product.short_description && (
                            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
                                {product.short_description}
                            </p>
                        )}

                        {/* Warranty */}
                        {product.grantie && (
                            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                                <ShieldCheck className="h-6 w-6 text-indigo-600 dark:text-violet-300" />

                                <div>
                                    <div className="text-sm font-bold text-slate-800 dark:text-white">
                                        {product.grantie.name}
                                    </div>

                                    {product.grantie.duration && (
                                        <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                            مدت گارانتی:{" "}
                                            {product.grantie.duration}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Price */}
                        <div className="mt-auto pt-8">
                            {price ? (
                                <div className="flex items-baseline gap-2">
                                    <strong className="text-3xl font-black text-[#152434] dark:text-white">
                                        {price}
                                    </strong>

                                    <span className="text-sm text-slate-500 dark:text-slate-400">
                                        تومان
                                    </span>
                                </div>
                            ) : (
                                <div className="text-lg font-bold text-slate-500 dark:text-slate-400">
                                    برای دریافت قیمت تماس بگیرید
                                </div>
                            )}

                            {/* Action */}
                            <button
                                type="button"
                                className="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#152434] font-bold text-white transition-all hover:bg-indigo-600 dark:bg-white dark:text-black dark:hover:bg-violet-400"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                افزودن به سبد خرید
                            </button>
                        </div>
                    </div>
                </div>

                {/* Description */}
                {product.description && (
                    <section className="mt-8 rounded-[32px] border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-[#11161d]">
                        <h2 className="mb-5 text-xl font-black text-[#152434] dark:text-white">
                            توضیحات محصول
                        </h2>

                        <div
                            className="prose prose-slate max-w-none leading-8 dark:prose-invert"
                            dangerouslySetInnerHTML={{
                                __html: product.description,
                            }}
                        />
                    </section>
                )}
            </div>
        </HomeLayout>
    );
}
