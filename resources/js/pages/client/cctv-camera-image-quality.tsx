import HomeLayout from "@/layouts/home/home-layout";
import {
    Camera,
    Check,
    ChevronDown,
    CircleHelp,
    Eye,
    Focus,
    Gauge,
    Info,
    Maximize2,
    Moon,
    Ruler,
    ScanLine,
    Sun,
    Target,
} from "lucide-react";
import { useMemo, useState } from "react";

const resolutions = [
    {
        value: "2mp",
        label: "2MP",
        title: "Full HD",
        width: 1920,
        height: 1080,
        pixels: "2.1 میلیون پیکسل",
        level: 40,
    },
    {
        value: "4mp",
        label: "4MP",
        title: "2K",
        width: 2560,
        height: 1440,
        pixels: "3.7 میلیون پیکسل",
        level: 58,
    },
    {
        value: "5mp",
        label: "5MP",
        title: "2.5K",
        width: 2880,
        height: 1620,
        pixels: "4.7 میلیون پیکسل",
        level: 70,
    },
    {
        value: "8mp",
        label: "8MP",
        title: "4K",
        width: 3840,
        height: 2160,
        pixels: "8.3 میلیون پیکسل",
        level: 88,
    },
    {
        value: "12mp",
        label: "12MP",
        title: "4K+",
        width: 4000,
        height: 3000,
        pixels: "12 میلیون پیکسل",
        level: 96,
    },
];

const distances = [
    { value: 5, label: "۵ متر" },
    { value: 10, label: "۱۰ متر" },
    { value: 15, label: "۱۵ متر" },
    { value: 20, label: "۲۰ متر" },
    { value: 30, label: "۳۰ متر" },
    { value: 50, label: "۵۰ متر" },
];

const lenses = [
    { value: "2.8", label: "2.8mm", angle: "حدود ۱۰۲°" },
    { value: "3.6", label: "3.6mm", angle: "حدود ۸۷°" },
    { value: "6", label: "6mm", angle: "حدود ۵۳°" },
    { value: "8", label: "8mm", angle: "حدود ۴۰°" },
    { value: "12", label: "12mm", angle: "حدود ۲۷°" },
];

export default function CctvCameraImageQuality() {
    const [resolution, setResolution] = useState("8mp");
    const [distance, setDistance] = useState(15);
    const [lens, setLens] = useState("3.6");
    const [nightVision, setNightVision] = useState(true);

    const selectedResolution = resolutions.find(
        (item) => item.value === resolution
    )!;

    const selectedLens = lenses.find((item) => item.value === lens)!;

    const quality = useMemo(() => {
        let score = selectedResolution.level;

        if (distance <= 10) {
            score += 5;
        } else if (distance >= 30) {
            score -= 12;
        } else if (distance >= 20) {
            score -= 6;
        }

        if (lens === "6" || lens === "8") {
            score += 4;
        }

        if (lens === "2.8") {
            score -= 3;
        }

        if (nightVision) {
            score += 2;
        }

        return Math.max(20, Math.min(98, score));
    }, [selectedResolution, distance, lens, nightVision]);

    const qualityLabel =
        quality >= 85
            ? "بسیار عالی"
            : quality >= 70
                ? "عالی"
                : quality >= 55
                    ? "خوب"
                    : "متوسط";

    return (
        <HomeLayout>
            <main
                dir="rtl"
                className="min-h-screen bg-[#050b14] text-white"
            >
                {/* Background */}
                <div className="pointer-events-none fixed inset-0 overflow-hidden">
                    <div className="absolute right-[-250px] top-[-200px] size-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />

                    <div className="absolute bottom-[-300px] left-[-250px] size-[600px] rounded-full bg-blue-600/10 blur-[160px]" />

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
                    <section className="mb-8">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                                <ScanLine className="size-6" />
                            </div>

                            <div>
                                <p className="text-xs font-semibold tracking-wider text-cyan-400">
                                    RAYAN NOVIN
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    CCTV Image Quality Analyzer
                                </p>
                            </div>
                        </div>

                        <h1 className="text-3xl font-black tracking-tight md:text-5xl">
                            بررسی کیفیت تصویر دوربین مداربسته
                        </h1>

                        <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-400 md:text-base">
                            رزولوشن، فاصله دوربین، لنز و شرایط دید در شب را
                            مشخص کنید تا دید بهتری نسبت به کیفیت تصویر و جزئیات
                            قابل ثبت توسط دوربین داشته باشید.
                        </p>
                    </section>

                    {/* Main */}
                    <section className="grid gap-5 xl:grid-cols-[1fr_390px]">

                        {/* Configuration */}
                        <div className="rounded-[28px] border border-white/10 bg-[#0b1624] p-6 md:p-8">

                            <div className="mb-8 flex items-center justify-between">
                                <div>
                                    <h2 className="text-lg font-black">
                                        تنظیمات دوربین
                                    </h2>

                                    <p className="mt-1 text-xs text-slate-500">
                                        مشخصات دوربین و محل نصب را وارد کنید.
                                    </p>
                                </div>

                                <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                                    <Camera className="size-5" />
                                </div>
                            </div>

                            {/* Resolution */}
                            <div>
                                <div className="mb-4 flex items-center justify-between">
                                    <label className="text-sm font-bold">
                                        رزولوشن دوربین
                                    </label>

                                    <span className="text-xs text-cyan-400">
                                        {selectedResolution.title}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                                    {resolutions.map((item) => {
                                        const active =
                                            resolution === item.value;

                                        return (
                                            <button
                                                key={item.value}
                                                onClick={() =>
                                                    setResolution(item.value)
                                                }
                                                className={`
                                                    relative rounded-2xl border p-4 text-center
                                                    transition-all duration-200
                                                    ${
                                                    active
                                                        ? "border-cyan-400/40 bg-cyan-400/10 text-white shadow-lg shadow-cyan-500/5"
                                                        : "border-white/[0.07] bg-white/[0.02] text-slate-500 hover:border-white/15 hover:text-slate-300"
                                                }
                                                `}
                                            >
                                                {active && (
                                                    <span className="absolute left-2 top-2 flex size-4 items-center justify-center rounded-full bg-cyan-400 text-slate-950">
                                                        <Check className="size-2.5" />
                                                    </span>
                                                )}

                                                <div className="text-lg font-black">
                                                    {item.label}
                                                </div>

                                                <div className="mt-1 text-[10px]">
                                                    {item.width} ×{" "}
                                                    {item.height}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Distance */}
                            <div className="mt-8">
                                <div className="mb-4 flex items-center justify-between">
                                    <label className="flex items-center gap-2 text-sm font-bold">
                                        <Ruler className="size-4 text-cyan-400" />
                                        فاصله سوژه تا دوربین
                                    </label>

                                    <span className="rounded-lg bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-400">
                                        {distance} متر
                                    </span>
                                </div>

                                <input
                                    type="range"
                                    min="5"
                                    max="50"
                                    step="5"
                                    value={distance}
                                    onChange={(e) =>
                                        setDistance(Number(e.target.value))
                                    }
                                    className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-800 accent-cyan-400"
                                />

                                <div className="mt-3 flex justify-between text-[10px] text-slate-600">
                                    <span>۵ متر</span>
                                    <span>۱۵ متر</span>
                                    <span>۳۰ متر</span>
                                    <span>۵۰ متر</span>
                                </div>
                            </div>

                            {/* Lens */}
                            <div className="mt-8">
                                <div className="mb-4 flex items-center justify-between">
                                    <label className="flex items-center gap-2 text-sm font-bold">
                                        <Focus className="size-4 text-cyan-400" />
                                        فاصله کانونی لنز
                                    </label>

                                    <span className="text-xs text-slate-500">
                                        {selectedLens.angle}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                                    {lenses.map((item) => {
                                        const active = lens === item.value;

                                        return (
                                            <button
                                                key={item.value}
                                                onClick={() =>
                                                    setLens(item.value)
                                                }
                                                className={`
                                                    rounded-xl border px-3 py-3
                                                    text-sm font-bold
                                                    transition-all
                                                    ${
                                                    active
                                                        ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                                                        : "border-white/[0.07] bg-white/[0.02] text-slate-500 hover:text-white"
                                                }
                                                `}
                                            >
                                                {item.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Night */}
                            <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-400">
                                        {nightVision ? (
                                            <Moon className="size-5" />
                                        ) : (
                                            <Sun className="size-5" />
                                        )}
                                    </div>

                                    <div>
                                        <p className="text-sm font-bold">
                                            دید در شب فعال است
                                        </p>

                                        <p className="mt-1 text-[11px] text-slate-500">
                                            شرایط نور محیط در ارزیابی لحاظ شود
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() =>
                                        setNightVision(!nightVision)
                                    }
                                    className={`
                                        relative h-7 w-12 rounded-full
                                        transition-colors
                                        ${
                                        nightVision
                                            ? "bg-cyan-400"
                                            : "bg-slate-700"
                                    }
                                    `}
                                >
                                    <span
                                        className={`
                                            absolute top-1 size-5 rounded-full
                                            bg-white shadow
                                            transition-all
                                            ${
                                            nightVision
                                                ? "right-1"
                                                : "right-6"
                                        }
                                        `}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Result */}
                        <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/10 bg-gradient-to-b from-[#102033] to-[#09131f] p-6">

                            <div className="absolute -left-20 -top-20 size-64 rounded-full bg-cyan-400/10 blur-[100px]" />

                            <div className="relative">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-slate-500">
                                            نتیجه بررسی
                                        </p>

                                        <h2 className="mt-1 text-xl font-black">
                                            کیفیت تصویر
                                        </h2>
                                    </div>

                                    <Gauge className="size-6 text-cyan-400" />
                                </div>

                                {/* Gauge */}
                                <div className="my-10 flex justify-center">
                                    <div
                                        className="relative flex size-52 items-center justify-center rounded-full"
                                        style={{
                                            background: `conic-gradient(#22d3ee ${quality * 3.6}deg, rgba(255,255,255,.06) 0deg)`,
                                        }}
                                    >
                                        <div className="flex size-40 flex-col items-center justify-center rounded-full bg-[#0a1522]">
                                            <span className="text-5xl font-black text-white">
                                                {quality}
                                            </span>

                                            <span className="mt-1 text-xs text-slate-500">
                                                از ۱۰۰
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <span className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-400">
                                        {qualityLabel}
                                    </span>

                                    <p className="mt-5 text-xs leading-7 text-slate-500">
                                        کیفیت واقعی تصویر به عوامل دیگری
                                        مانند سنسور، نور، کدک و تنظیمات
                                        دوربین نیز وابسته است.
                                    </p>
                                </div>

                                {/* Summary */}
                                <div className="mt-8 space-y-2">
                                    <ResultRow
                                        icon={<Maximize2 />}
                                        label="رزولوشن"
                                        value={`${selectedResolution.label} — ${selectedResolution.width}×${selectedResolution.height}`}
                                    />

                                    <ResultRow
                                        icon={<Target />}
                                        label="فاصله"
                                        value={`${distance} متر`}
                                    />

                                    <ResultRow
                                        icon={<Focus />}
                                        label="لنز"
                                        value={`${selectedLens.label} — ${selectedLens.angle}`}
                                    />

                                    <ResultRow
                                        icon={<Eye />}
                                        label="دید در شب"
                                        value={nightVision ? "فعال" : "غیرفعال"}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Resolution comparison */}
                    <section className="mt-5 rounded-[28px] border border-white/10 bg-[#0b1624] p-6 md:p-8">

                        <div className="mb-7">
                            <h2 className="text-lg font-black">
                                مقایسه رزولوشن دوربین‌ها
                            </h2>

                            <p className="mt-2 text-xs leading-7 text-slate-500">
                                هرچه تعداد پیکسل بیشتر باشد، امکان ثبت جزئیات
                                بیشتری در تصویر وجود دارد؛ اما رزولوشن به
                                تنهایی تعیین‌کننده کیفیت نهایی نیست.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {resolutions.map((item) => (
                                <div
                                    key={item.value}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-14 shrink-0 text-sm font-black text-white">
                                        {item.label}
                                    </div>

                                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.05]">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-l from-cyan-300 to-cyan-500 transition-all duration-500"
                                            style={{
                                                width: `${item.level}%`,
                                            }}
                                        />
                                    </div>

                                    <div className="w-32 shrink-0 text-left text-xs text-slate-500">
                                        {item.pixels}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Information */}
                    <section className="mt-5 grid gap-4 md:grid-cols-3">

                        <InfoCard
                            icon={<ScanLine />}
                            title="رزولوشن"
                            text="تعداد پیکسل‌های تصویر، میزان جزئیاتی که دوربین می‌تواند ثبت کند را مشخص می‌کند."
                        />

                        <InfoCard
                            icon={<Focus />}
                            title="لنز"
                            text="فاصله کانونی روی زاویه دید و میزان بزرگنمایی سوژه تأثیر مستقیم دارد."
                        />

                        <InfoCard
                            icon={<Moon />}
                            title="نور محیط"
                            text="حتی دوربین با رزولوشن بالا در شرایط نوری نامناسب ممکن است تصویر مطلوبی تولید نکند."
                        />

                    </section>

                    {/* Notice */}
                    <section className="mt-5 flex items-start gap-4 rounded-2xl border border-amber-400/10 bg-amber-400/[0.03] p-5">
                        <CircleHelp className="mt-0.5 size-5 shrink-0 text-amber-400" />

                        <div>
                            <h3 className="text-sm font-bold text-amber-300">
                                یک نکته مهم
                            </h3>

                            <p className="mt-2 text-xs leading-7 text-slate-500">
                                نتیجه این ابزار یک ارزیابی تقریبی برای انتخاب
                                دوربین است و جایگزین بررسی مشخصات فنی واقعی
                                سنسور، لنز، WDR، حداقل نور، Bitrate و شرایط
                                محیط نصب نیست.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </HomeLayout>
    );
}

function ResultRow({
                       icon,
                       label,
                       value,
                   }: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-3">
            <span className="text-cyan-400/70 [&>svg]:size-4">
                {icon}
            </span>

            <span className="text-[11px] text-slate-500">
                {label}
            </span>

            <span className="mr-auto text-[11px] font-semibold text-slate-300">
                {value}
            </span>
        </div>
    );
}

function InfoCard({
                      icon,
                      title,
                      text,
                  }: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <div className="rounded-[22px] border border-white/[0.07] bg-[#0b1624] p-5">
            <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                {icon}
            </div>

            <h3 className="mt-4 text-sm font-bold">
                {title}
            </h3>

            <p className="mt-2 text-xs leading-7 text-slate-500">
                {text}
            </p>
        </div>
    );
}