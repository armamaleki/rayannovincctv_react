import HomeLayout from "@/layouts/home/home-layout";
import {
    Calculator,
    Camera,
    Check,
    Clock3,
    HardDrive,
    Info,
    Layers3,
    Minus,
    Plus,
    Save,
    ShieldCheck,
    Trash2,
    Video,
} from "lucide-react";
import { useMemo, useState } from "react";

type CameraItem = {
    id: number;
    count: number;
    resolution: string;
    bitrate: number;
};

const resolutions = [
    {
        value: "2mp",
        label: "2MP",
        bitrate: 2048,
    },
    {
        value: "4mp",
        label: "4MP",
        bitrate: 4096,
    },
    {
        value: "5mp",
        label: "5MP",
        bitrate: 5120,
    },
    {
        value: "8mp",
        label: "8MP / 4K",
        bitrate: 8192,
    },
];

const recordModes = [
    {
        value: "24",
        label: "24 ساعت",
        description: "ضبط مداوم",
        factor: 1,
    },
    {
        value: "12",
        label: "12 ساعت",
        description: "نیمه‌روز",
        factor: 0.5,
    },
    {
        value: "8",
        label: "8 ساعت",
        description: "ضبط محدود",
        factor: 8 / 24,
    },
];

const hardDrives = [
    1000,
    2000,
    4000,
    6000,
    8000,
    10000,
    12000,
];

export default function DiskCalculator() {
    const [cameras, setCameras] = useState<CameraItem[]>([
        {
            id: 1,
            count: 4,
            resolution: "4mp",
            bitrate: 4096,
        },
    ]);

    const [recordHours, setRecordHours] = useState("24");
    const [days, setDays] = useState(15);
    const [selectedDisk, setSelectedDisk] = useState(4000);
    const [motionDetection, setMotionDetection] = useState(false);

    const addCameraGroup = () => {
        const newId =
            cameras.length > 0
                ? Math.max(...cameras.map((camera) => camera.id)) + 1
                : 1;

        setCameras([
            ...cameras,
            {
                id: newId,
                count: 1,
                resolution: "4mp",
                bitrate: 4096,
            },
        ]);
    };

    const removeCameraGroup = (id: number) => {
        if (cameras.length === 1) return;

        setCameras(cameras.filter((camera) => camera.id !== id));
    };

    const updateCamera = (
        id: number,
        field: keyof CameraItem,
        value: number | string
    ) => {
        setCameras(
            cameras.map((camera) => {
                if (camera.id !== id) return camera;

                if (field === "resolution") {
                    const resolution = resolutions.find(
                        (item) => item.value === value
                    );

                    return {
                        ...camera,
                        resolution: String(value),
                        bitrate: resolution?.bitrate ?? camera.bitrate,
                    };
                }

                return {
                    ...camera,
                    [field]: value,
                };
            })
        );
    };

    const calculation = useMemo(() => {
        const hours = Number(recordHours);

        let totalBitrate = cameras.reduce(
            (total, camera) =>
                total + camera.count * camera.bitrate,
            0
        );

        /*
         * Motion recording usually reduces required storage.
         * This is an estimation and should be configurable
         * according to the actual scene.
         */
        const motionFactor = motionDetection ? 0.45 : 1;

        totalBitrate *= motionFactor;

        // Mbps → MB/s
        const megabytesPerSecond = totalBitrate / 8;

        // MB/s → GB/day
        const gigabytesPerDay =
            (megabytesPerSecond * 60 * 60 * hours) / 1000;

        const requiredGB = gigabytesPerDay * days;

        const requiredTB = requiredGB / 1000;

        const totalCameras = cameras.reduce(
            (total, camera) => total + camera.count,
            0
        );

        const diskCoverage =
            selectedDisk / Math.max(requiredGB, 1);

        return {
            totalBitrate,
            gigabytesPerDay,
            requiredGB,
            requiredTB,
            totalCameras,
            diskCoverage,
        };
    }, [
        cameras,
        recordHours,
        days,
        motionDetection,
        selectedDisk,
    ]);

    const recommendedDisk = useMemo(() => {
        const required = calculation.requiredGB;

        return (
            hardDrives.find((size) => size >= required) ??
            Math.ceil(required / 1000) * 1000
        );
    }, [calculation.requiredGB]);

    const selectedDiskPercent = Math.min(
        100,
        (selectedDisk / calculation.requiredGB) * 100
    );

    return (
        <HomeLayout>
            <main
                dir="rtl"
                className="min-h-screen overflow-hidden bg-[#050b14] text-white"
            >
                {/* Background */}
                <div className="pointer-events-none fixed inset-0 overflow-hidden">
                    <div className="absolute right-[-250px] top-[-250px] size-[600px] rounded-full bg-cyan-500/[0.07] blur-[160px]" />

                    <div className="absolute bottom-[-250px] left-[-250px] size-[600px] rounded-full bg-blue-600/[0.07] blur-[160px]" />

                    <div
                        className="absolute inset-0 opacity-[0.025]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                            backgroundSize: "50px 50px",
                        }}
                    />
                </div>

                <div className="relative mx-auto max-w-[1400px] px-5 py-12 lg:px-8">

                    {/* ================================================= */}
                    {/* HEADER */}
                    {/* ================================================= */}

                    <section className="mb-10">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                                <Calculator className="size-6" />
                            </div>

                            <div>
                                <p className="text-xs font-bold tracking-widest text-cyan-400">
                                    RAYAN NOVIN
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    CCTV Storage Calculator
                                </p>
                            </div>
                        </div>

                        <h1 className="text-3xl font-black leading-[1.6] md:text-5xl">
                            محاسبه فضای هارد دوربین مداربسته
                        </h1>

                        <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-400 md:text-base">
                            تعداد دوربین، کیفیت تصویر، مدت زمان ضبط و تعداد
                            روزهای نگهداری را مشخص کنید تا فضای تقریبی موردنیاز
                            برای هارد دستگاه DVR یا NVR محاسبه شود.
                        </p>
                    </section>

                    {/* ================================================= */}
                    {/* MAIN GRID */}
                    {/* ================================================= */}

                    <div className="grid gap-5 xl:grid-cols-[1fr_390px]">

                        {/* ================================================= */}
                        {/* CONFIGURATION */}
                        {/* ================================================= */}

                        <section className="rounded-[28px] border border-white/[0.07] bg-[#0b1624] p-6 md:p-8">

                            {/* Camera Header */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-lg font-black">
                                        مشخصات دوربین‌ها
                                    </h2>

                                    <p className="mt-1 text-xs text-slate-500">
                                        دوربین‌های پروژه را اضافه و مشخصات
                                        هر گروه را انتخاب کنید.
                                    </p>
                                </div>

                                <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                                    <Camera className="size-5" />
                                </div>
                            </div>

                            {/* Camera Groups */}
                            <div className="mt-7 space-y-3">

                                {cameras.map((camera, index) => (
                                    <div
                                        key={camera.id}
                                        className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
                                    >
                                        <div className="mb-4 flex items-center justify-between">

                                            <div className="flex items-center gap-3">
                                                <div className="flex size-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                                                    <Video className="size-4" />
                                                </div>

                                                <div>
                                                    <p className="text-xs font-bold">
                                                        گروه دوربین {index + 1}
                                                    </p>

                                                    <p className="mt-0.5 text-[10px] text-slate-600">
                                                        {camera.count} دوربین
                                                    </p>
                                                </div>
                                            </div>

                                            {cameras.length > 1 && (
                                                <button
                                                    onClick={() =>
                                                        removeCameraGroup(
                                                            camera.id
                                                        )
                                                    }
                                                    className="flex size-8 items-center justify-center rounded-lg text-slate-600 transition hover:bg-red-400/10 hover:text-red-400"
                                                >
                                                    <Trash2 className="size-4" />
                                                </button>
                                            )}
                                        </div>

                                        <div className="grid gap-3 md:grid-cols-2">

                                            {/* Count */}
                                            <div>
                                                <label className="mb-2 block text-[11px] font-semibold text-slate-500">
                                                    تعداد دوربین
                                                </label>

                                                <div className="flex h-11 items-center overflow-hidden rounded-xl border border-white/[0.07] bg-[#08111c]">

                                                    <button
                                                        onClick={() =>
                                                            updateCamera(
                                                                camera.id,
                                                                "count",
                                                                Math.max(
                                                                    1,
                                                                    camera.count -
                                                                    1
                                                                )
                                                            )
                                                        }
                                                        className="flex h-full w-11 items-center justify-center text-slate-500 transition hover:bg-white/[0.04] hover:text-white"
                                                    >
                                                        <Minus className="size-4" />
                                                    </button>

                                                    <div className="flex-1 text-center text-sm font-bold">
                                                        {camera.count}
                                                    </div>

                                                    <button
                                                        onClick={() =>
                                                            updateCamera(
                                                                camera.id,
                                                                "count",
                                                                camera.count + 1
                                                            )
                                                        }
                                                        className="flex h-full w-11 items-center justify-center text-slate-500 transition hover:bg-white/[0.04] hover:text-white"
                                                    >
                                                        <Plus className="size-4" />
                                                    </button>

                                                </div>
                                            </div>

                                            {/* Resolution */}
                                            <div>
                                                <label className="mb-2 block text-[11px] font-semibold text-slate-500">
                                                    کیفیت تصویر
                                                </label>

                                                <div className="relative">
                                                    <select
                                                        value={
                                                            camera.resolution
                                                        }
                                                        onChange={(e) =>
                                                            updateCamera(
                                                                camera.id,
                                                                "resolution",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="h-11 w-full appearance-none rounded-xl border border-white/[0.07] bg-[#08111c] px-4 text-xs font-semibold text-white outline-none transition focus:border-cyan-400/40"
                                                    >
                                                        {resolutions.map(
                                                            (item) => (
                                                                <option
                                                                    key={
                                                                        item.value
                                                                    }
                                                                    value={
                                                                        item.value
                                                                    }
                                                                    className="bg-[#08111c]"
                                                                >
                                                                    {
                                                                        item.label
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </select>

                                                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-600">
                                                        <Layers3 className="size-4" />
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>

                            <button
                                onClick={addCameraGroup}
                                className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-dashed border-white/10 bg-white/[0.015] text-xs font-bold text-slate-500 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.03] hover:text-cyan-400"
                            >
                                <Plus className="size-4" />
                                افزودن گروه دوربین
                            </button>

                            {/* Recording */}
                            <div className="mt-10 border-t border-white/[0.06] pt-8">

                                <div className="mb-5">
                                    <h3 className="text-sm font-black">
                                        تنظیمات ضبط
                                    </h3>

                                    <p className="mt-1 text-[11px] text-slate-600">
                                        مشخص کنید روزانه چه مدت ضبط انجام می‌شود.
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    {recordModes.map((mode) => {
                                        const active =
                                            recordHours === mode.value;

                                        return (
                                            <button
                                                key={mode.value}
                                                onClick={() =>
                                                    setRecordHours(
                                                        mode.value
                                                    )
                                                }
                                                className={`
                                                    rounded-xl border p-3 text-center transition
                                                    ${
                                                    active
                                                        ? "border-cyan-400/30 bg-cyan-400/10"
                                                        : "border-white/[0.07] bg-white/[0.02] hover:border-white/15"
                                                }
                                                `}
                                            >
                                                <div
                                                    className={`text-sm font-black ${
                                                        active
                                                            ? "text-cyan-400"
                                                            : "text-white"
                                                    }`}
                                                >
                                                    {mode.label}
                                                </div>

                                                <div className="mt-1 text-[10px] text-slate-600">
                                                    {mode.description}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                            </div>

                            {/* Days */}
                            <div className="mt-8">

                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Clock3 className="size-4 text-cyan-400" />

                                        <label className="text-sm font-bold">
                                            مدت نگهداری تصاویر
                                        </label>
                                    </div>

                                    <span className="rounded-lg bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-400">
                                        {days} روز
                                    </span>
                                </div>

                                <input
                                    type="range"
                                    min="1"
                                    max="90"
                                    value={days}
                                    onChange={(e) =>
                                        setDays(Number(e.target.value))
                                    }
                                    className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-800 accent-cyan-400"
                                />

                                <div className="mt-3 flex justify-between text-[10px] text-slate-600">
                                    <span>۱ روز</span>
                                    <span>۳۰ روز</span>
                                    <span>۶۰ روز</span>
                                    <span>۹۰ روز</span>
                                </div>

                            </div>

                            {/* Motion */}
                            <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">

                                <div>
                                    <p className="text-xs font-bold">
                                        ضبط با تشخیص حرکت
                                    </p>

                                    <p className="mt-1 text-[10px] leading-5 text-slate-600">
                                        در صورت فعال بودن، مصرف فضای ذخیره‌سازی
                                        تقریبی کاهش پیدا می‌کند.
                                    </p>
                                </div>

                                <button
                                    onClick={() =>
                                        setMotionDetection(
                                            !motionDetection
                                        )
                                    }
                                    className={`relative h-7 w-12 rounded-full transition ${
                                        motionDetection
                                            ? "bg-cyan-400"
                                            : "bg-slate-700"
                                    }`}
                                >
                                    <span
                                        className={`absolute top-1 size-5 rounded-full bg-white shadow transition-all ${
                                            motionDetection
                                                ? "right-1"
                                                : "right-6"
                                        }`}
                                    />
                                </button>

                            </div>

                        </section>

                        {/* ================================================= */}
                        {/* RESULT */}
                        {/* ================================================= */}

                        <aside className="h-fit rounded-[28px] border border-cyan-400/10 bg-gradient-to-b from-[#102033] to-[#09131f] p-6 xl:sticky xl:top-6">

                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-[11px] text-slate-600">
                                        فضای محاسبه‌شده
                                    </p>

                                    <h2 className="mt-1 text-xl font-black">
                                        نتیجه
                                    </h2>
                                </div>

                                <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                                    <HardDrive className="size-5" />
                                </div>

                            </div>

                            {/* Main Result */}
                            <div className="my-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.035] p-6 text-center">

                                <p className="text-xs text-slate-500">
                                    فضای موردنیاز تقریبی
                                </p>

                                <div className="mt-3 flex items-end justify-center gap-2">
                                    <span className="text-5xl font-black tracking-tight text-white">
                                        {calculation.requiredTB < 1
                                            ? Math.ceil(
                                                calculation.requiredGB
                                            )
                                            : calculation.requiredTB.toFixed(
                                                1
                                            )}
                                    </span>

                                    <span className="mb-2 text-sm font-bold text-cyan-400">
                                        {calculation.requiredTB < 1
                                            ? "GB"
                                            : "TB"}
                                    </span>
                                </div>

                                <p className="mt-3 text-[10px] text-slate-600">
                                    بر اساس تنظیمات انتخاب‌شده
                                </p>

                            </div>

                            {/* Stats */}
                            <div className="space-y-2">

                                <ResultRow
                                    label="تعداد دوربین"
                                    value={`${calculation.totalCameras} دوربین`}
                                    icon={<Camera />}
                                />

                                <ResultRow
                                    label="نرخ بیت"
                                    value={`${Math.round(
                                        calculation.totalBitrate / 1000
                                    )} Mbps`}
                                    icon={<SignalIcon />}
                                />

                                <ResultRow
                                    label="مصرف روزانه"
                                    value={`${Math.ceil(
                                        calculation.gigabytesPerDay
                                    )} GB`}
                                    icon={<HardDrive />}
                                />

                                <ResultRow
                                    label="مدت نگهداری"
                                    value={`${days} روز`}
                                    icon={<Clock3 />}
                                />

                            </div>

                            {/* Recommended */}
                            <div className="mt-5 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-4">

                                <div className="flex items-center gap-3">
                                    <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                                        <ShieldCheck className="size-4" />
                                    </div>

                                    <div>
                                        <p className="text-[10px] text-slate-600">
                                            هارد پیشنهادی
                                        </p>

                                        <p className="mt-1 text-sm font-black text-emerald-400">
                                            {formatStorage(
                                                recommendedDisk
                                            )}
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Selected Disk */}
                            <div className="mt-6">

                                <div className="mb-3 flex items-center justify-between">
                                    <p className="text-xs font-bold">
                                        بررسی هارد انتخابی
                                    </p>

                                    <span className="text-[10px] text-slate-600">
                                        {formatStorage(selectedDisk)}
                                    </span>
                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                                    <div
                                        className={`h-full rounded-full transition-all ${
                                            selectedDiskPercent >= 100
                                                ? "bg-emerald-400"
                                                : "bg-amber-400"
                                        }`}
                                        style={{
                                            width: `${Math.min(
                                                selectedDiskPercent,
                                                100
                                            )}%`,
                                        }}
                                    />
                                </div>

                                <p className="mt-2 text-[10px] leading-5 text-slate-600">
                                    {selectedDiskPercent >= 100
                                        ? "این هارد فضای محاسبه‌شده را پوشش می‌دهد."
                                        : "این هارد برای مدت نگهداری انتخاب‌شده کافی نیست."}
                                </p>

                            </div>

                        </aside>
                    </div>

                    {/* ================================================= */}
                    {/* DISK SELECTOR */}
                    {/* ================================================= */}

                    <section className="mt-5 rounded-[28px] border border-white/[0.07] bg-[#0b1624] p-6 md:p-8">

                        <div className="flex items-center justify-between">

                            <div>
                                <h2 className="text-lg font-black">
                                    انتخاب ظرفیت هارد
                                </h2>

                                <p className="mt-1 text-xs text-slate-600">
                                    ظرفیت هارد موردنظر خود را انتخاب کنید و
                                    پوشش آن را نسبت به نیاز محاسبه‌شده ببینید.
                                </p>
                            </div>

                            <HardDrive className="hidden size-6 text-cyan-400 sm:block" />

                        </div>

                        <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">

                            {hardDrives.map((size) => {
                                const active = selectedDisk === size;
                                const enough =
                                    size >= calculation.requiredGB;

                                return (
                                    <button
                                        key={size}
                                        onClick={() =>
                                            setSelectedDisk(size)
                                        }
                                        className={`
                                            relative rounded-xl border p-4 text-center transition
                                            ${
                                            active
                                                ? "border-cyan-400/30 bg-cyan-400/10"
                                                : "border-white/[0.07] bg-white/[0.02] hover:border-white/15"
                                        }
                                        `}
                                    >
                                        {active && (
                                            <span className="absolute left-2 top-2 flex size-4 items-center justify-center rounded-full bg-cyan-400 text-slate-950">
                                                <Check className="size-2.5" />
                                            </span>
                                        )}

                                        <HardDrive
                                            className={`mx-auto size-5 ${
                                                active
                                                    ? "text-cyan-400"
                                                    : "text-slate-600"
                                            }`}
                                        />

                                        <p className="mt-2 text-xs font-black">
                                            {formatStorage(size)}
                                        </p>

                                        <p
                                            className={`mt-1 text-[9px] ${
                                                enough
                                                    ? "text-emerald-400/70"
                                                    : "text-slate-700"
                                            }`}
                                        >
                                            {enough
                                                ? "کافی"
                                                : "ناکافی"}
                                        </p>
                                    </button>
                                );
                            })}

                        </div>
                    </section>

                    {/* ================================================= */}
                    {/* INFO */}
                    {/* ================================================= */}

                    <section className="mt-5 grid gap-4 md:grid-cols-3">

                        <InfoCard
                            icon={<Video />}
                            title="رزولوشن بالاتر"
                            text="هرچه کیفیت و نرخ بیت تصویر بالاتر باشد، فضای بیشتری برای ذخیره تصاویر موردنیاز خواهد بود."
                        />

                        <InfoCard
                            icon={<Clock3 />}
                            title="مدت نگهداری"
                            text="افزایش تعداد روزهای نگهداری تصاویر مستقیماً ظرفیت موردنیاز هارد را افزایش می‌دهد."
                        />

                        <InfoCard
                            icon={<Save />}
                            title="ضبط حرکتی"
                            text="در حالت Motion Detection میزان مصرف فضای ذخیره‌سازی می‌تواند نسبت به ضبط مداوم کاهش پیدا کند."
                        />

                    </section>

                    {/* ================================================= */}
                    {/* NOTE */}
                    {/* ================================================= */}

                    <section className="mt-5 flex items-start gap-4 rounded-2xl border border-amber-400/10 bg-amber-400/[0.025] p-5">

                        <Info className="mt-0.5 size-5 shrink-0 text-amber-400" />

                        <div>
                            <h3 className="text-xs font-bold text-amber-300">
                                توجه
                            </h3>

                            <p className="mt-2 text-[11px] leading-7 text-slate-600">
                                نتیجه این ماشین‌حساب تقریبی است. مقدار واقعی
                                فضای موردنیاز می‌تواند با توجه به Codec، نرخ
                                بیت واقعی دوربین، فریم‌ریت، میزان حرکت در صحنه،
                                تنظیمات فشرده‌سازی و نوع ضبط متفاوت باشد.
                            </p>
                        </div>

                    </section>

                </div>
            </main>
        </HomeLayout>
    );
}

/* ========================================================= */
/* COMPONENTS */
/* ========================================================= */

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

            <span className="flex size-8 items-center justify-center rounded-lg bg-white/[0.03] text-cyan-400 [&>svg]:size-4">
                {icon}
            </span>

            <span className="text-[10px] text-slate-600">
                {label}
            </span>

            <span className="mr-auto text-[11px] font-bold text-slate-300">
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

            <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 [&>svg]:size-5">
                {icon}
            </div>

            <h3 className="mt-4 text-sm font-black">
                {title}
            </h3>

            <p className="mt-2 text-xs leading-7 text-slate-600">
                {text}
            </p>

        </div>
    );
}

function formatStorage(gb: number) {
    if (gb >= 1000) {
        return `${gb / 1000}TB`;
    }

    return `${gb}GB`;
}

function SignalIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="size-4"
        >
            <path d="M2 20h2" />
            <path d="M6 16h2" />
            <path d="M10 12h2" />
            <path d="M14 8h2" />
            <path d="M18 4h2" />
        </svg>
    );
}