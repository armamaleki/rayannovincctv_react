import HomeLayout from "@/layouts/home/home-layout";
import {
    Download,
    Search,
    FileSpreadsheet,
    FileText,
    CalendarDays,
    Clock3,
    ArrowDownToLine,
    ChevronLeft,
    Package,
    RefreshCw,
} from "lucide-react";
import { useMemo, useState } from "react";

const priceLists = [
    {
        id: 1,
        brand: "Hikvision",
        title: "لیست قیمت محصولات هایک ویژن",
        description:
            "آخرین لیست قیمت دوربین، دستگاه‌های ضبط، تجهیزات شبکه و سایر محصولات هایک ویژن.",
        version: "شهریور ۱۴۰۵",
        date: "۱۴۰۵/۰۶/۲۵",
        updated: "۳ روز پیش",
        products: "۲۴۸ محصول",
        format: "Excel",
        size: "1.8 MB",
        featured: true,
    },
    {
        id: 2,
        brand: "Dahua",
        title: "لیست قیمت محصولات داهوا",
        description:
            "لیست قیمت به‌روز محصولات Dahua شامل دوربین‌های مداربسته، DVR، NVR و تجهیزات جانبی.",
        version: "شهریور ۱۴۰۵",
        date: "۱۴۰۵/۰۶/۲۲",
        updated: "۶ روز پیش",
        products: "۱۹۶ محصول",
        format: "Excel",
        size: "1.4 MB",
    },
    {
        id: 3,
        brand: "Tiandy",
        title: "لیست قیمت محصولات تیاندی",
        description:
            "جدیدترین لیست قیمت محصولات Tiandy شامل دوربین، دستگاه ضبط و تجهیزات نظارتی.",
        version: "شهریور ۱۴۰۵",
        date: "۱۴۰۵/۰۶/۲۰",
        updated: "۸ روز پیش",
        products: "۱۲۴ محصول",
        format: "Excel",
        size: "920 KB",
    },
    {
        id: 4,
        brand: "Uniview",
        title: "لیست قیمت محصولات یونی ویو",
        description:
            "لیست قیمت محصولات Uniview شامل دوربین‌های IP، NVR و تجهیزات سیستم‌های نظارتی.",
        version: "شهریور ۱۴۰۵",
        date: "۱۴۰۵/۰۶/۱۸",
        updated: "۱۰ روز پیش",
        products: "۱۱۲ محصول",
        format: "Excel",
        size: "840 KB",
    },
    {
        id: 5,
        brand: "Xmeye",
        title: "لیست قیمت محصولات Xmeye",
        description:
            "لیست قیمت تجهیزات و محصولات مرتبط با سیستم‌های نظارتی Xmeye.",
        version: "شهریور ۱۴۰۵",
        date: "۱۴۰۵/۰۶/۱۵",
        updated: "۱۳ روز پیش",
        products: "۸۷ محصول",
        format: "Excel",
        size: "670 KB",
    },
];

const brands = [
    "همه",
    "Hikvision",
    "Dahua",
    "Tiandy",
    "Uniview",
    "Xmeye",
];

export default function PriceList() {
    const [activeBrand, setActiveBrand] = useState("همه");
    const [search, setSearch] = useState("");

    const filteredLists = useMemo(() => {
        return priceLists.filter((item) => {
            const matchesBrand =
                activeBrand === "همه" || item.brand === activeBrand;

            const query = search.toLowerCase();

            const matchesSearch =
                !query ||
                item.brand.toLowerCase().includes(query) ||
                item.title.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query);

            return matchesBrand && matchesSearch;
        });
    }, [activeBrand, search]);

    return (
        <HomeLayout>
            <main
                dir="rtl"
                className="min-h-screen bg-[#050b14] text-white"
            >
                {/* Background */}
                <div className="pointer-events-none fixed inset-0 overflow-hidden">
                    <div className="absolute right-[-300px] top-[-250px] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px]" />
                    <div className="absolute left-[-300px] top-[35%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[160px]" />

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

                    {/* Hero */}
                    <section className="relative mb-10 overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-[#101d2d] via-[#0b1624] to-[#07111d] p-7 shadow-2xl shadow-cyan-950/20 md:p-10">

                        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

                        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                                        <FileSpreadsheet className="size-6" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-medium text-cyan-400">
                                            RAYAN NOVIN
                                        </p>

                                        <p className="text-xs text-slate-500">
                                            Price List Center
                                        </p>
                                    </div>
                                </div>

                                <h1 className="text-3xl font-black tracking-tight md:text-5xl">
                                    لیست قیمت محصولات
                                </h1>

                                <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-400 md:text-base">
                                    آخرین لیست قیمت محصولات و تجهیزات
                                    سیستم‌های نظارتی را بر اساس برند مشاهده
                                    و دریافت کنید.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-3">

                                <Stat
                                    value={priceLists.length}
                                    label="لیست قیمت"
                                />

                                <Stat
                                    value={brands.length - 1}
                                    label="برند"
                                />

                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center">
                                    <RefreshCw className="mx-auto size-6 text-cyan-400" />

                                    <div className="mt-2 text-[11px] text-slate-500">
                                        بروزرسانی دوره‌ای
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Search / Filters */}
                    <section className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                        <div className="relative w-full lg:max-w-[430px]">
                            <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-slate-500" />

                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="جستجوی برند یا لیست قیمت..."
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

                        <div className="flex flex-wrap items-center gap-2">
                            {brands.map((brand) => {
                                const active = activeBrand === brand;

                                return (
                                    <button
                                        key={brand}
                                        onClick={() => setActiveBrand(brand)}
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
                                        {brand}
                                    </button>
                                );
                            })}
                        </div>
                    </section>

                    {/* Price Lists */}
                    <section className="grid gap-4">

                        {filteredLists.map((item) => (
                            <PriceListCard
                                key={item.id}
                                item={item}
                            />
                        ))}

                        {!filteredLists.length && (
                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] py-20 text-center">
                                <FileText className="mx-auto size-10 text-slate-600" />

                                <h3 className="mt-4 text-lg font-bold">
                                    لیست قیمتی پیدا نشد
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    برند یا عبارت جستجو را تغییر دهید.
                                </p>
                            </div>
                        )}

                    </section>

                    {/* Bottom Info */}
                    <section className="mt-8 rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.06] to-blue-500/[0.03] p-6">

                        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                            <div className="flex items-start gap-4">
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                                    <Clock3 className="size-5" />
                                </div>

                                <div>
                                    <h3 className="font-bold">
                                        درباره لیست قیمت‌ها
                                    </h3>

                                    <p className="mt-1 text-xs leading-7 text-slate-500">
                                        قیمت‌ها ممکن است با توجه به موجودی،
                                        شرایط بازار و تغییرات تأمین‌کننده
                                        تغییر کنند. برای دریافت آخرین نسخه،
                                        فایل مربوط به هر برند را بررسی کنید.
                                    </p>
                                </div>
                            </div>

                            <div className="shrink-0 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-slate-400">
                                آخرین بروزرسانی:
                                <span className="mr-2 font-bold text-cyan-400">
                                    شهریور ۱۴۰۵
                                </span>
                            </div>

                        </div>
                    </section>
                </div>
            </main>
        </HomeLayout>
    );
}

function PriceListCard({
                           item,
                       }: {
    item: (typeof priceLists)[number];
}) {
    return (
        <article
            className="
                group relative overflow-hidden
                rounded-[24px]
                border border-white/[0.08]
                bg-[#0c1725]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-cyan-400/20
                hover:shadow-2xl
                hover:shadow-cyan-950/30
            "
        >
            {/* Glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="flex flex-col lg:flex-row">

                {/* Brand */}
                <div className="flex w-full shrink-0 flex-col justify-between border-b border-white/[0.06] p-6 lg:w-[290px] lg:border-b-0 lg:border-l">

                    <div>
                        <div className="mb-5 flex items-center justify-between">

                            <div className="flex size-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 to-blue-500/5 text-cyan-400">
                                <FileSpreadsheet className="size-7" />
                            </div>

                            {item.featured && (
                                <span className="rounded-lg bg-cyan-400/10 px-2.5 py-1.5 text-[10px] font-bold text-cyan-400">
                                    جدیدترین
                                </span>
                            )}

                        </div>

                        <p className="text-xs font-medium text-cyan-400">
                            PRICE LIST
                        </p>

                        <h2 className="mt-2 text-2xl font-black text-white">
                            {item.brand}
                        </h2>

                        <p className="mt-2 text-xs text-slate-500">
                            {item.products}
                        </p>
                    </div>

                    <div className="mt-7 flex items-center gap-2">

                        <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-slate-400">
                            <FileSpreadsheet className="size-3" />
                            {item.format}
                        </span>

                        <span className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-slate-400">
                            {item.size}
                        </span>

                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 lg:p-7">

                    <div className="flex flex-col gap-5 xl:flex-row xl:justify-between">

                        <div>
                            <h3 className="text-lg font-bold text-cyan-400">
                                {item.title}
                            </h3>

                            <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-400">
                                {item.description}
                            </p>
                        </div>

                        <div className="hidden shrink-0 xl:block">
                            <div className="flex size-20 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03]">
                                <FileSpreadsheet className="size-9 text-cyan-400/40" />
                            </div>
                        </div>

                    </div>

                    {/* Metadata */}
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">

                        <Info
                            icon={<CalendarDays />}
                            label="نسخه"
                            value={item.version}
                        />

                        <Info
                            icon={<CalendarDays />}
                            label="تاریخ"
                            value={item.date}
                        />

                        <Info
                            icon={<Package />}
                            label="محصولات"
                            value={item.products}
                        />

                        <Info
                            icon={<HardDriveIcon />}
                            label="حجم"
                            value={item.size}
                        />

                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                        <button
                            className="
                                flex h-11 flex-1 items-center
                                justify-center rounded-xl
                                bg-cyan-400
                                text-sm font-bold
                                text-slate-950
                                shadow-lg shadow-cyan-500/10
                                transition
                                hover:bg-cyan-300
                            "
                        >
                            <Download className="ml-2 size-4" />
                            دانلود لیست قیمت
                        </button>

                        <button
                            className="
                                flex h-11 items-center
                                justify-center gap-2
                                rounded-xl
                                border border-white/10
                                bg-white/[0.03]
                                px-5
                                text-sm font-medium
                                text-slate-300
                                transition
                                hover:bg-white/[0.07]
                                hover:text-white
                            "
                        >
                            مشاهده جزئیات
                            <ChevronLeft className="size-4" />
                        </button>

                    </div>

                </div>
            </div>
        </article>
    );
}

function Info({
                  icon,
                  label,
                  value,
              }: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2">

            <span className="text-cyan-400/70 [&>svg]:size-3.5">
                {icon}
            </span>

            <span className="text-[10px] text-slate-600">
                {label}
            </span>

            <span className="text-[11px] font-medium text-slate-300">
                {value}
            </span>

        </div>
    );
}

function Stat({
                  value,
                  label,
              }: {
    value: string | number;
    label: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center">
            <div className="text-2xl font-black text-white">
                {value}
            </div>

            <div className="mt-1 text-[11px] text-slate-500">
                {label}
            </div>
        </div>
    );
}

function HardDriveIcon() {
    return <ArrowDownToLine />;
}