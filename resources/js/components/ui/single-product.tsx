import {Link} from "@inertiajs/react";
import {Eye, GitCompareArrows, Heart, ShoppingCart, Star} from "lucide-react";
import store from "@/routes/client/store";

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
    categories?: ProductCategory[];
    grantie?: Granite | null;
    image?: string | null;
}

interface Props {
    product: Product;
}

export default function SingleProduct({product}: Props) {

    const category = product.categories?.[0]?.name ?? 'دسته بندی محصول';

    const price = product.price
        ? new Intl.NumberFormat('fa-IR').format(product.price)
        : null;

    return (
        <div
            key={product.id}
            className={`group overflow-hidden rounded-[28px] border dark:border-white/10 dark:bg-[#11161d] border-slate-200 bg-white`}
        >

            {/* Image */}
            <Link href={store.show(product.slug)}>
                <div
                    className={`relative overflow-hidden bg-[#151b23]`}
                >
                    <span
                        className={`absolute left-5 top-5 z-10 rounded-full border px-3 py-1.5 text-xs font-bold border-white/10 bg-black/30 text-white backdrop-blur dark:border-slate-200 dark:bg-white/80 dark:text-slate-700 dark:backdrop-blur`}
                    >
                        {category}
                    </span>

                    <img
                        src={product.image ?? '/assets/images/example.jpg'}
                        alt={product.name}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Bottom Gradient */}
                    <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-sky-300/20 to-transparent"
                    />
                </div>
            </Link>

            {/* Info */}
            <div className="p-6">

                {/* Brand */}
                <div className="mb-3 flex items-center justify-between">
                    <span
                        className={`text-xs font-bold uppercase tracking-wider dark:text-violet-300 text-indigo-600`}
                    >
                        برند
                    </span>

                    <span
                        className={`text-[11px] text-slate-500 dark:text-slate-400`}
                    >
                        مدل محصول
                    </span>
                </div>

                {/* Name */}
                <Link href={store.show(product.slug)}>
                    <h3
                        className={`min-h-[56px] text-base font-black leading-7 dark:text-white text-[#152434]`}
                    >
                        {product.name}
                    </h3>
                </Link>

                <div className="flex items-end justify-between gap-3">
                    <div className="flex items-baseline gap-1">
                        {price ? (
                            <>
                                <strong
                                    className="text-xl font-black dark:text-slate-500 text-slate-400"
                                >
                                    {price}
                                </strong>

                                <span className="text-[10px]">
                                    تومان
                                </span>
                            </>
                        ) : (
                            <strong
                                className="text-sm font-black dark:text-slate-400 text-slate-500"
                            >
                                تماس بگیرید
                            </strong>
                        )}
                    </div>

                    <Link
                        href={store.show(product.slug)}
                        aria-label="مشاهده محصول"
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all group-hover:-translate-y-1 dark:bg-white dark:text-black dark:hover:bg-violet-400 bg-[#152434] text-white hover:bg-indigo-600`}
                    >
                        <ShoppingCart className="h-5 w-5"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
