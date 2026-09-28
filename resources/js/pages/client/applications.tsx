import HomeLayout from "@/layouts/home/home-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Download,
    Search,
    MonitorDown,
    FileDown,
    HardDriveDownload,
    ArrowDownToLine,
    ExternalLink,
    Package,
    ShieldCheck,
    Clock3,
    HardDrive,
} from "lucide-react";
import { useMemo, useState } from "react";

const applications = [
    {
        id: 1,
        name: "CMS-Central",
        title: "CMS-Central (Windows) Monitoring System",
        brand: "Other",
        brandLabel: "Other",
        category: "نرم افزار مدیریت مرکزی",
        description:
            "نرم‌افزار مدیریت و مشاهده همزمان چندین دوربین و سیستم نظارتی در یک محیط یکپارچه. امکاناتی مانند پخش زنده، بازپخش تصاویر، کنترل PTZ و مدیریت تجهیزات را فراهم می‌کند.",
        version: "4.2.1",
        size: "185 MB",
        os: "Windows 10 / 11",
        updated: "1404/05/12",
        featured: true,
    },
    {
        id: 2,
        name: "NVMS 1000",
        title: "NVMS 1000 (Windows)",
        brand: "Other",
        brandLabel: "Other",
        category: "Video Management Software",
        description:
            "نرم‌افزار مدیریت تجهیزات نظارتی برای مشاهده و کنترل چندین دوربین به صورت همزمان. مناسب برای مدیریت ساده و حرفه‌ای سیستم‌های نظارتی.",
        version: "3.5.0",
        size: "142 MB",
        os: "Windows 7 / 10 / 11",
        updated: "1404/04/28",
    },
    {
        id: 3,
        name: "Smart PSS Lite",
        title: "Smart PSS Lite",
        brand: "Dahua",
        brandLabel: "Dahua",
        category: "نرم افزار مدیریت دوربین",
        description:
            "نرم‌افزار مدیریت و مانیتورینگ سیستم‌های دوربین مداربسته شرکت Dahua که امکان مشاهده تصاویر، بازبینی ویدئوها و مدیریت تجهیزات تحت شبکه را فراهم می‌کند.",
        version: "1.003",
        size: "98 MB",
        os: "Windows 10 / 11",
        updated: "1404/05/03",
    },
    {
        id: 4,
        name: "Storage and Network Calculator",
        title: "Storage & Network Calculator",
        brand: "Hikvision",
        brandLabel: "Hikvision",
        category: "محاسبه فضای ذخیره‌سازی",
        description:
            "ابزار کاربردی برای محاسبه ظرفیت هارد و پهنای باند موردنیاز سیستم‌های دوربین مداربسته بر اساس تعداد دوربین، رزولوشن، فریم‌ریت و مدت زمان ضبط.",
        version: "2.1.0",
        size: "18 MB",
        os: "Windows",
        updated: "1404/03/18",
    },
    {
        id: 5,
        name: "iVMS-4200",
        title: "iVMS-4200 Client",
        brand: "Hikvision",
        brandLabel: "Hikvision",
        category: "Client Software",
        description:
            "نرم‌افزار کلاینت Hikvision برای مدیریت و مشاهده تجهیزات نظارتی، دوربین‌ها، دستگاه‌های ضبط و سیستم‌های امنیتی.",
        version: "3.12.0",
        size: "310 MB",
        os: "Windows 10 / 11",
        updated: "1404/06/01",
    },
    {
        id: 6,
        name: "Easy7",
        title: "Tiandy Easy7",
        brand: "Tiandy",
        brandLabel: "Tiandy",
        category: "Video Management",
        description:
            "نرم‌افزار مدیریت مرکزی تجهیزات Tiandy برای مشاهده زنده، بازپخش تصاویر و مدیریت چندین دستگاه نظارتی.",
        version: "2.8.4",
        size: "225 MB",
        os: "Windows",
        updated: "1404/04/10",
    },
];

const brands = [
    "همه",
    "Hikvision",
    "Dahua",
    "Tiandy",
    "Other",
];

export default function Applications() {
    const [activeBrand, setActiveBrand] = useState("همه");
    const [search, setSearch] = useState("");

    const filteredApplications = useMemo(() => {
        return applications.filter((app) => {
            const matchesBrand =
                activeBrand === "همه" || app.brand === activeBrand;

            const query = search.toLowerCase();

            const matchesSearch =
                !query ||
                app.name.toLowerCase().includes(query) ||
                app.title.toLowerCase().includes(query) ||
                app.description.toLowerCase().includes(query);

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
                        {/* Glow */}
                        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

                        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                                        <Package className="size-6" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-medium text-cyan-400">
                                            RAYAN NOVIN
                                        </p>

                                        <p className="text-xs text-slate-500">
                                            Software Center
                                        </p>
                                    </div>
                                </div>

                                <h1 className="text-3xl font-black tracking-tight md:text-5xl">
                                    مرکز دانلود
                                </h1>

                                <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-400 md:text-base">
                                    نرم‌افزارها و ابزارهای کاربردی سیستم‌های
                                    نظارتی، دوربین مداربسته و تجهیزات امنیتی را
                                    از این بخش دریافت کنید.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center">
                                    <div className="text-2xl font-black text-white">
                                        {applications.length}
                                    </div>

                                    <div className="mt-1 text-[11px] text-slate-500">
                                        نرم افزار
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center">
                                    <div className="text-2xl font-black text-white">
                                        {brands.length - 1}
                                    </div>

                                    <div className="mt-1 text-[11px] text-slate-500">
                                        برند
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center">
                                    <div className="flex justify-center">
                                        <ShieldCheck className="size-7 text-cyan-400" />
                                    </div>

                                    <div className="mt-2 text-[11px] text-slate-500">
                                        امن و معتبر
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Search + Filters */}
                    <section className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        {/* Search */}
                        <div className="relative w-full lg:max-w-[430px]">
                            <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-slate-500" />

                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="جستجوی نرم افزار..."
                                className="h-12 w-full rounded-2xl border border-white/10 bg-[#0b1522] pr-12 pl-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:ring-4 focus:ring-cyan-400/5"
                            />
                        </div>

                        {/* Brands */}
                        <div className="flex flex-wrap items-center gap-2">
                            {brands.map((brand) => {
                                const active = activeBrand === brand;

                                return (
                                    <button
                                        key={brand}
                                        onClick={() => setActiveBrand(brand)}
                                        className={`
                                            rounded-xl border px-4 py-2.5 text-xs font-semibold
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

                    {/* Results */}
                    <section className="space-y-4">
                        {filteredApplications.map((app) => (
                            <ApplicationCard
                                key={app.id}
                                application={app}
                            />
                        ))}

                        {!filteredApplications.length && (
                            <div className="rounded-3xl border border-white/10 bg-white/[0.03] py-20 text-center">
                                <Search className="mx-auto size-10 text-slate-600" />

                                <h3 className="mt-4 text-lg font-bold">
                                    نرم‌افزاری پیدا نشد
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    عبارت جستجو یا فیلتر برند را تغییر دهید.
                                </p>
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </HomeLayout>
    );
}

function ApplicationCard({
                             application,
                         }: {
    application: (typeof applications)[number];
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
            {/* Top glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="flex flex-col lg:flex-row">
                {/* App identity */}
                <div className="relative flex w-full shrink-0 flex-col justify-between border-b border-white/[0.06] p-6 lg:w-[290px] lg:border-b-0 lg:border-l">
                    <div>
                        <div className="mb-5 flex items-center justify-between">
                            <div className="flex size-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 to-blue-500/5 text-cyan-400">
                                <MonitorDown className="size-7" />
                            </div>

                            {application.featured && (
                                <Badge className="border-0 bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/10">
                                    پیشنهاد شده
                                </Badge>
                            )}
                        </div>

                        <h2 className="text-xl font-black leading-8 text-white">
                            {application.name}
                        </h2>

                        <p className="mt-2 text-xs leading-6 text-slate-500">
                            {application.category}
                        </p>
                    </div>

                    <div className="mt-7 flex items-center gap-2">
                        <span className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-slate-400">
                            {application.brandLabel}
                        </span>

                        <span className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-slate-400">
                            Windows
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                    <div className="flex flex-col justify-between gap-5 xl:flex-row">
                        <div>
                            <h3 className="text-lg font-bold text-cyan-400">
                                {application.title}
                            </h3>

                            <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-400">
                                {application.description}
                            </p>
                        </div>

                        <div className="hidden shrink-0 items-center xl:flex">
                            <div className="flex size-20 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.025]">
                                <HardDriveDownload className="size-8 text-cyan-400/50" />
                            </div>
                        </div>
                    </div>

                    {/* Meta */}
                    <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-5">
                        <InfoItem
                            icon={<Package />}
                            label="نسخه"
                            value={application.version}
                        />

                        <InfoItem
                            icon={<HardDrive />}
                            label="حجم"
                            value={application.size}
                        />

                        <InfoItem
                            icon={<MonitorDown />}
                            label="سیستم عامل"
                            value={application.os}
                        />

                        <InfoItem
                            icon={<Clock3 />}
                            label="بروزرسانی"
                            value={application.updated}
                        />
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Button
                            className="
                                h-11 flex-1 rounded-xl
                                bg-cyan-400 text-slate-950
                                font-bold
                                shadow-lg shadow-cyan-500/10
                                hover:bg-cyan-300
                            "
                        >
                            <Download className="ml-2 size-4" />
                            دانلود نرم افزار
                        </Button>

                        <Button
                            variant="outline"
                            className="
                                h-11 rounded-xl
                                border-white/10
                                bg-white/[0.03]
                                px-5
                                text-slate-300
                                hover:bg-white/[0.07]
                                hover:text-white
                            "
                        >
                            <ExternalLink className="ml-2 size-4" />
                            جزئیات
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    );
}

function InfoItem({
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