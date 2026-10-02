import HomeLayout from "@/layouts/home/home-layout";
import SingleProduct from "@/components/ui/single-product";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
    SlidersHorizontal,
    X,
    Search,
} from "lucide-react";
import { InfiniteScroll, router } from "@inertiajs/react";
import { useState } from "react";

interface Product {
    id: number;
    name: string;
    price: number | null;
    slug?: string;
    categories?: {
        id: number;
        name: string;
    }[];
    grantie?: {
        id: number;
        name: string;
        duration: string | number;
    } | null;
}

interface Category {
    id: number;
    name: string;
    products_count: number;
}

interface Granite {
    id: number;
    name: string;
    duration: string | number;
    products_count: number;
}

interface Filters {
    categories: Category[];
    granites: Granite[];
}

interface Props {
    products: {
        data: Product[];
        current_page: number;
        last_page: number;
        total: number;
    };

    filters: Filters;

    query: {
        q?: string;
        category?: string;
        grantie?: string;
        min_price?: string;
        max_price?: string;
    };
}

export default function Index({
                                  products,
                                  filters,
                                  query,
                              }: Props) {
    const [search, setSearch] = useState(query?.q ?? "");
    const [minPrice, setMinPrice] = useState(
        query?.min_price ?? ""
    );
    const [maxPrice, setMaxPrice] = useState(
        query?.max_price ?? ""
    );

    const selectedCategory = query?.category
        ? String(query.category)
        : "";

    const selectedGrantie = query?.grantie
        ? String(query.grantie)
        : "";

    const applyFilters = (
        extra: Record<string, string | undefined> = {}
    ) => {
        const params: Record<string, string> = {};

        const q = extra.q ?? search;
        const category =
            extra.category ?? selectedCategory;
        const grantie =
            extra.grantie ?? selectedGrantie;
        const min_price =
            extra.min_price ?? minPrice;
        const max_price =
            extra.max_price ?? maxPrice;

        if (q) {
            params.q = q;
        }

        if (category) {
            params.category = category;
        }

        if (grantie) {
            params.grantie = grantie;
        }

        if (min_price) {
            params.min_price = min_price;
        }

        if (max_price) {
            params.max_price = max_price;
        }

        router.get(
            window.location.pathname,
            params,
            {
                preserveState: true,
                preserveScroll: false,
                replace: true,
            }
        );
    };

    const toggleCategory = (id: number) => {
        applyFilters({
            category:
                selectedCategory === String(id)
                    ? undefined
                    : String(id),
        });
    };

    const toggleGrantie = (id: number) => {
        applyFilters({
            grantie:
                selectedGrantie === String(id)
                    ? undefined
                    : String(id),
        });
    };

    const clearFilters = () => {
        setSearch("");
        setMinPrice("");
        setMaxPrice("");

        router.get(
            window.location.pathname,
            {},
            {
                preserveState: true,
                preserveScroll: false,
                replace: true,
            }
        );
    };

    return (
        <HomeLayout>
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold">
                        فروشگاه محصولات
                    </h1>

                    <p className="mt-2 text-sm text-muted-foreground">
                        محصولات مورد نیاز خود را جستجو و انتخاب کنید.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
                    {/* Filters */}
                    <aside className="order-1 lg:order-none">
                        <Card className="sticky top-24">
                            <CardHeader>
                                <div className="flex items-center justify-between gap-2">
                                    <CardTitle className="flex items-center gap-2 text-base">
                                        <SlidersHorizontal className="h-4 w-4" />

                                        فیلتر محصولات
                                    </CardTitle>

                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="text-xs text-muted-foreground"
                                        onClick={clearFilters}
                                    >
                                        <X className="ml-1 h-3.5 w-3.5" />

                                        حذف فیلترها
                                    </Button>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-6">
                                {/* Search */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium">
                                        جستجوی محصول
                                    </label>

                                    <div className="relative">
                                        <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                                        <Input
                                            value={search}
                                            onChange={(event) =>
                                                setSearch(
                                                    event.target.value
                                                )
                                            }
                                            onKeyDown={(event) => {
                                                if (
                                                    event.key ===
                                                    "Enter"
                                                ) {
                                                    applyFilters({
                                                        q: search,
                                                    });
                                                }
                                            }}
                                            placeholder="نام محصول..."
                                            className="pr-9"
                                        />
                                    </div>

                                    <Button
                                        type="button"
                                        variant="secondary"
                                        className="mt-2 w-full"
                                        onClick={() =>
                                            applyFilters({
                                                q: search,
                                            })
                                        }
                                    >
                                        جستجو
                                    </Button>
                                </div>

                                <Separator />

                                {/* Categories */}
                                <div>
                                    <h3 className="mb-3 text-sm font-semibold">
                                        دسته‌بندی
                                    </h3>

                                    <div className="space-y-3">
                                        {filters.categories.map(
                                            (category) => (
                                                <label
                                                    key={category.id}
                                                    className="flex cursor-pointer items-center justify-between gap-3 text-sm"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <Checkbox
                                                            checked={
                                                                selectedCategory ===
                                                                String(
                                                                    category.id
                                                                )
                                                            }
                                                            onCheckedChange={() =>
                                                                toggleCategory(
                                                                    category.id
                                                                )
                                                            }
                                                        />

                                                        <span>
                                                            {
                                                                category.name
                                                            }
                                                        </span>
                                                    </div>

                                                    <span className="text-xs text-muted-foreground">
                                                        {
                                                            category.products_count
                                                        }
                                                    </span>
                                                </label>
                                            )
                                        )}

                                        {filters.categories.length ===
                                            0 && (
                                                <p className="text-xs text-muted-foreground">
                                                    دسته‌بندی‌ای برای نمایش وجود
                                                    ندارد.
                                                </p>
                                            )}
                                    </div>
                                </div>

                                <Separator />

                                {/* Warranty */}
                                <div>
                                    <h3 className="mb-3 text-sm font-semibold">
                                        گارانتی
                                    </h3>

                                    <div className="space-y-3">
                                        {filters.granites.map(
                                            (grantie) => (
                                                <label
                                                    key={grantie.id}
                                                    className="flex cursor-pointer items-center justify-between gap-3 text-sm"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <Checkbox
                                                            checked={
                                                                selectedGrantie ===
                                                                String(
                                                                    grantie.id
                                                                )
                                                            }
                                                            onCheckedChange={() =>
                                                                toggleGrantie(
                                                                    grantie.id
                                                                )
                                                            }
                                                        />

                                                        <span>
                                                            {
                                                                grantie.name
                                                            }
                                                        </span>
                                                    </div>

                                                    <span className="text-xs text-muted-foreground">
                                                        {
                                                            grantie.products_count
                                                        }
                                                    </span>
                                                </label>
                                            )
                                        )}

                                        {filters.granites.length ===
                                            0 && (
                                                <p className="text-xs text-muted-foreground">
                                                    گارانتی‌ای برای نمایش وجود
                                                    ندارد.
                                                </p>
                                            )}
                                    </div>
                                </div>

                                <Separator />

                                {/* Price */}
                                <div>
                                    <h3 className="mb-3 text-sm font-semibold">
                                        محدوده قیمت
                                    </h3>

                                    <div className="grid grid-cols-2 gap-2">
                                        <Input
                                            type="number"
                                            value={minPrice}
                                            onChange={(event) =>
                                                setMinPrice(
                                                    event.target.value
                                                )
                                            }
                                            placeholder="حداقل"
                                        />

                                        <Input
                                            type="number"
                                            value={maxPrice}
                                            onChange={(event) =>
                                                setMaxPrice(
                                                    event.target.value
                                                )
                                            }
                                            placeholder="حداکثر"
                                        />
                                    </div>

                                    <Button
                                        type="button"
                                        className="mt-3 w-full"
                                        onClick={() =>
                                            applyFilters()
                                        }
                                    >
                                        اعمال فیلتر
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </aside>

                    {/* Products */}
                    <main className="min-w-0">
                        {/* Toolbar */}
                        <div className="mb-5 flex flex-col gap-3 rounded-lg border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <span className="text-sm text-muted-foreground">
                                    تعداد محصولات:
                                </span>

                                <span className="mx-1 font-semibold">
                                    {products.total}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">
                                    مرتب‌سازی:
                                </span>

                                <select
                                    className="h-9 rounded-md border bg-background px-3 text-sm outline-none"
                                    defaultValue="latest"
                                    onChange={(event) => {
                                        router.get(
                                            window.location.pathname,
                                            {
                                                ...query,
                                                sort: event.target.value,
                                            },
                                            {
                                                preserveState: true,
                                                preserveScroll: true,
                                                replace: true,
                                            }
                                        );
                                    }}
                                >
                                    <option value="latest">
                                        جدیدترین
                                    </option>

                                    <option value="cheap">
                                        ارزان‌ترین
                                    </option>

                                    <option value="expensive">
                                        گران‌ترین
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Products */}
                        {products.data.length > 0 ? (
                            <InfiniteScroll
                                data="products"
                                preserveUrl
                                className="w-full"
                            >
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                    {products.data.map(
                                        (product) => (
                                            <SingleProduct
                                                key={product.id}
                                                product={product}
                                            />
                                        )
                                    )}
                                </div>
                            </InfiniteScroll>
                        ) : (
                            <Card>
                                <CardContent className="flex min-h-80 flex-col items-center justify-center text-center">
                                    <div className="mb-4 rounded-full bg-muted p-4">
                                        <Search className="h-6 w-6 text-muted-foreground" />
                                    </div>

                                    <h2 className="font-semibold">
                                        محصولی پیدا نشد
                                    </h2>

                                    <p className="mt-2 text-sm text-muted-foreground">
                                        فیلترها یا عبارت جستجو را تغییر
                                        دهید.
                                    </p>

                                    <Button
                                        variant="outline"
                                        className="mt-4"
                                        onClick={clearFilters}
                                    >
                                        حذف فیلترها
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                    </main>
                </div>
            </div>
        </HomeLayout>
    );
}