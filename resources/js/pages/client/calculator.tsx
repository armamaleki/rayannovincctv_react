
import HomeLayout from "@/layouts/home/home-layout";
import {
    Camera,
    Check,
    HardDrive,
    Info,
    Mic,
    Minus,
    Plus,
    Trash2,
    Video,
} from "lucide-react";
import { useMemo, useState } from "react";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type CameraQuality =
    | "D1"
    | "1"
    | "1.3"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "8"
    | "12";

type CompressionFormat = "H264" | "H264+" | "H265" | "H265+";

type CameraGroup = {
    id: number;
    count: number;
    quality: CameraQuality;
};

/*
|--------------------------------------------------------------------------
| Camera Qualities
|--------------------------------------------------------------------------
*/

const cameraQualities: {
    value: CameraQuality;
    label: string;
    description: string;
}[] = [
    {
        value: "D1",
        label: "D1",
        description: "آنالوگ",
    },
    {
        value: "1",
        label: "1MP",
        description: "HD",
    },
    {
        value: "1.3",
        label: "1.3MP",
        description: "HD+",
    },
    {
        value: "2",
        label: "2MP",
        description: "Full HD",
    },
    {
        value: "3",
        label: "3MP",
        description: "2K",
    },
    {
        value: "4",
        label: "4MP",
        description: "2K+",
    },
    {
        value: "5",
        label: "5MP",
        description: "2.5K",
    },
    {
        value: "6",
        label: "6MP",
        description: "3K",
    },
    {
        value: "8",
        label: "8MP",
        description: "4K",
    },
    {
        value: "12",
        label: "12MP",
        description: "4K+",
    },
];

/*
|--------------------------------------------------------------------------
| Bitrate Table
|--------------------------------------------------------------------------
|
| مقدارها بر حسب Mbps هستند.
|
| نکته:
| این اعداد تقریبی هستند و Bitrate واقعی به سنسور، صحنه،
| حرکت تصویر، تنظیمات Encoding، I-Frame و NVR/DVR بستگی دارد.
|--------------------------------------------------------------------------
*/

const bitrateTable: Record<
    CompressionFormat,
    Partial<Record<CameraQuality, number>>
> = {
    H264: {
        D1: 0.6,
        "1": 1.8,
        "1.3": 2.5,
        "2": 4,
        "3": 5,
        "4": 6,
        "5": 7,
        "6": 8,
        "8": 12,
        "12": 16,
    },

    "H264+": {
        D1: 0.4,
        "1": 1.3,
        "1.3": 1.9,
        "2": 2.8,
        "3": 3.5,
        "4": 4.5,
        "5": 5,
        "6": 6,
        "8": 9,
        "12": 12,
    },

    H265: {
        D1: 0.35,
        "1": 1,
        "1.3": 1.5,
        "2": 2,
        "3": 2.8,
        "4": 3.5,
        "5": 4.5,
        "6": 5.5,
        "8": 8,
        "12": 10,
    },

    "H265+": {
        D1: 0.25,
        "1": 0.7,
        "1.3": 1,
        "2": 1.4,
        "3": 1.8,
        "4": 2.2,
        "5": 2.8,
        "6": 3.2,
        "8": 5,
        "12": 6.5,
    },
};

/*
|--------------------------------------------------------------------------
| Select Options
|--------------------------------------------------------------------------
*/

const frameRates = [
    1,
    5,
    10,
    15,
    20,
    25,
    30,
    45,
    60,
];

const compressionFormats: {
    value: CompressionFormat;
    label: string;
}[] = [
    {
        value: "H265+",
        label: "H.265+ (Smart 265)",
    },
    {
        value: "H265",
        label: "H.265",
    },
    {
        value: "H264+",
        label: "H.264+ (Smart 264)",
    },
    {
        value: "H264",
        label: "H.264",
    },
];

const storageDays = Array.from(
    { length: 180 },
    (_, index) => index + 1,
);

const microphoneOptions = Array.from(
    { length: 67 },
    (_, index) => index,
);

/*
|--------------------------------------------------------------------------
| Constants
|--------------------------------------------------------------------------
*/

const AUDIO_BITRATE_PER_MIC = 0.128;
const OVERHEAD_FACTOR = 0.1;
const SECONDS_PER_DAY = 86400;

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/

function formatNumber(value: number, maximumFractionDigits = 2) {
    return new Intl.NumberFormat("fa-IR", {
        maximumFractionDigits,
        minimumFractionDigits: 0,
    }).format(value);
}

function getQualityLabel(quality: CameraQuality) {
    if (quality === "D1") {
        return "D1";
    }

    return `${quality}MP`;
}

function getBitrate(
    format: CompressionFormat,
    quality: CameraQuality,
) {
    return bitrateTable[format][quality] ?? 0;
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

export default function CctvStorageCalculator() {
    /*
    |--------------------------------------------------------------------------
    | State
    |--------------------------------------------------------------------------
    */

    const [cameraGroups, setCameraGroups] = useState<CameraGroup[]>([
        {
            id: Date.now(),
            count: 4,
            quality: "2",
        },
    ]);

    const [microphones, setMicrophones] = useState(0);

    const [frameRate, setFrameRate] = useState(20);

    const [compressionFormat, setCompressionFormat] =
        useState<CompressionFormat>("H264");

    const [days, setDays] = useState(30);

    /*
    |--------------------------------------------------------------------------
    | Add Camera Group
    |--------------------------------------------------------------------------
    */

    const addCameraGroup = () => {
        setCameraGroups((previous) => [
            ...previous,
            {
                id: Date.now() + Math.random(),
                count: 1,
                quality: "2",
            },
        ]);
    };

    /*
    |--------------------------------------------------------------------------
    | Remove Camera Group
    |--------------------------------------------------------------------------
    */

    const removeCameraGroup = (id: number) => {
        setCameraGroups((previous) =>
            previous.filter((group) => group.id !== id),
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Update Camera Count
    |--------------------------------------------------------------------------
    */

    const updateCameraCount = (
        id: number,
        value: number,
    ) => {
        const count = Math.max(0, Number(value) || 0);

        setCameraGroups((previous) =>
            previous.map((group) =>
                group.id === id
                    ? {
                          ...group,
                          count,
                      }
                    : group,
            ),
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Update Camera Quality
    |--------------------------------------------------------------------------
    */

    const updateCameraQuality = (
        id: number,
        quality: CameraQuality,
    ) => {
        setCameraGroups((previous) =>
            previous.map((group) =>
                group.id === id
                    ? {
                          ...group,
                          quality,
                      }
                    : group,
            ),
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Calculations
    |--------------------------------------------------------------------------
    */

    const calculation = useMemo(() => {
        let totalVideoBitrate = 0;

        cameraGroups.forEach((group) => {
            if (group.count <= 0) {
                return;
            }

            const baseBitrate = getBitrate(
                compressionFormat,
                group.quality,
            );

            if (!baseBitrate) {
                return;
            }

            /*
            | Bitrate table is based on 25 FPS.
            | Therefore bitrate is adjusted according to selected FPS.
            */

            const bitratePerCamera =
                baseBitrate * (frameRate / 25);

            totalVideoBitrate +=
                bitratePerCamera * group.count;
        });

        /*
        |--------------------------------------------------------------------------
        | Audio
        |--------------------------------------------------------------------------
        */

        const totalAudioBitrate =
            microphones * AUDIO_BITRATE_PER_MIC;

        /*
        |--------------------------------------------------------------------------
        | Total Bitrate + Overhead
        |--------------------------------------------------------------------------
        */

        const rawBitrate =
            totalVideoBitrate + totalAudioBitrate;

        const totalBitrate =
            rawBitrate * (1 + OVERHEAD_FACTOR);

        /*
        |--------------------------------------------------------------------------
        | Convert Mbps -> Bytes Per Second
        |--------------------------------------------------------------------------
        */

        const bytesPerSecond =
            (totalBitrate * 1_000_000) / 8;

        /*
        |--------------------------------------------------------------------------
        | Total Storage
        |--------------------------------------------------------------------------
        */

        const totalBytes =
            bytesPerSecond *
            SECONDS_PER_DAY *
            days;

        const totalGB =
            totalBytes / 1_000_000_000;

        const totalTB =
            totalGB / 1000;

        /*
        |--------------------------------------------------------------------------
        | Total Cameras
        |--------------------------------------------------------------------------
        */

        const totalCameras = cameraGroups.reduce(
            (sum, group) => sum + group.count,
            0,
        );

        /*
        |--------------------------------------------------------------------------
        | Quality Summary
        |--------------------------------------------------------------------------
        */

        const qualitySummary = cameraGroups
            .filter((group) => group.count > 0)
            .map(
                (group) =>
                    `${formatNumber(group.count)} × ${getQualityLabel(
    group.quality,
)}`,
            )
            .join(" ، ");

        return {
            totalCameras,
            qualitySummary,
            totalVideoBitrate,
            totalAudioBitrate,
            totalBitrate,
            totalBytes,
            totalGB,
            totalTB,
        };
    }, [
        cameraGroups,
        microphones,
        frameRate,
        compressionFormat,
        days,
    ]);

    /*
    |--------------------------------------------------------------------------
    | Result Text
    |--------------------------------------------------------------------------
    */

    const storageResult =
        calculation.totalTB >= 1
            ? `${formatNumber(calculation.totalTB)} ترابایت`
            : `${formatNumber(calculation.totalGB)} گیگابایت`;

    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

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
                                <HardDrive className="size-6" />
                            </div>

                            <div>
                                <p className="text-xs font-semibold tracking-wider text-cyan-400">
                                    RAYAN NOVIN
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    CCTV Storage Calculator
                                </p>
                            </div>
                        </div>

                        <h1 className="text-3xl font-black tracking-tight md:text-5xl">
                            محاسبه حجم هارد مورد نیاز دوربین مداربسته
                        </h1>

                        <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-400 md:text-base">
                            تعداد دوربین، کیفیت تصویر، نرخ فریم، فرمت
                            فشرده‌سازی و تعداد روزهای نگهداری را مشخص کنید تا
                            حجم تقریبی هارد مورد نیاز برای ذخیره تصاویر
                            محاسبه شود.
                        </p>
                    </section>

                    {/* Main Grid */}
                    <section className="grid gap-5 xl:grid-cols-[1fr_390px]">

                        {/* Calculator */}
                        <div className="rounded-[28px] border border-white/10 bg-[#0b1624] p-6 md:p-8">

                            {/* Section Header */}
                            <div className="mb-8 flex items-center justify-between">
                                <div>
                                    <h2 className="text-lg font-black">
                                        مشخصات سیستم دوربین
                                    </h2>

                                    <p className="mt-1 text-xs text-slate-500">
                                        مشخصات دوربین‌ها و شرایط ذخیره‌سازی را
                                        انتخاب کنید.
                                    </p>
                                </div>

                                <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                                    <Camera className="size-5" />
                                </div>
                            </div>

                            {/* Camera Groups */}
                            <div>

                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <div>
                                        <h3 className="text-sm font-bold">
                                            دوربین‌ها
                                        </h3>

                                        <p className="mt-1 text-[11px] text-slate-600">
                                            برای دوربین‌های با کیفیت متفاوت،
                                            گروه جداگانه ایجاد کنید.
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={addCameraGroup}
                                        className="flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-300"
                                    >
                                        <Plus className="size-4" />
                                        افزودن گروه دوربین
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {cameraGroups.map(
                                        (group, index) => (
                                            <div
                                                key={group.id}
                                                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
                                            >
                                                <div className="mb-3 flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex size-7 items-center justify-center rounded-lg bg-cyan-400/10 text-xs font-bold text-cyan-400">
                                                            {index + 1}
                                                        </div>

                                                        <span className="text-xs font-bold">
                                                            گروه دوربین{" "}
                                                            {index + 1}
                                                        </span>
                                                    </div>

                                                    {cameraGroups.length >
                                                        1 && (
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                removeCameraGroup(
                                                                    group.id,
                                                                )
                                                            }
                                                            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] text-red-400 transition hover:bg-red-400/10"
                                                        >
                                                            <Trash2 className="size-3.5" />
                                                            حذف
                                                        </button>
                                                    )}
                                                </div>

                                                <div className="grid gap-3 md:grid-cols-2">

                                                    {/* Count */}
                                                    <div>
                                                        <label className="mb-2 block text-[11px] font-semibold text-slate-400">
                                                            تعداد دوربین
                                                        </label>

                                                        <div className="flex overflow-hidden rounded-xl border border-white/[0.07] bg-[#07111d]">
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    updateCameraCount(
                                                                        group.id,
                                                                        Math.max(
                                                                            0,
                                                                            group.count -
                                                                                1,
                                                                        ),
                                                                    )
                                                                }
                                                                className="flex w-11 items-center justify-center text-slate-500 transition hover:bg-white/[0.05] hover:text-white"
                                                            >
                                                                <Minus className="size-4" />
                                                            </button>

                                                            <input
                                                                type="number"
                                                                min="0"
                                                                value={
                                                                    group.count
                                                                }
                                                                onChange={(
                                                                    e,
                                                                ) =>
                                                                    updateCameraCount(
                                                                        group.id,
                                                                        Number(
                                                                            e
                                                                                .target
                                                                                .value,
                                                                        ),
                                                                    )
                                                                }
                                                                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-center text-sm font-bold text-white outline-none"
                                                            />

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    updateCameraCount(
                                                                        group.id,
                                                                        group.count +
                                                                            1,
                                                                    )
                                                                }
                                                                className="flex w-11 items-center justify-center text-slate-500 transition hover:bg-white/[0.05] hover:text-white"
                                                            >
                                                                <Plus className="size-4" />
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Quality */}
                                                    <div>
                                                        <label className="mb-2 block text-[11px] font-semibold text-slate-400">
                                                            کیفیت دوربین
                                                        </label>

                                                        <div className="relative">
                                                            <select
                                                                value={
                                                                    group.quality
                                                                }
                                                                onChange={(
                                                                    e,
                                                                ) =>
                                                                    updateCameraQuality(
                                                                        group.id,
                                                                        e
                                                                            .target
                                                                            .value as CameraQuality,
                                                                    )
                                                                }
                                                                className="w-full appearance-none rounded-xl border border-white/[0.07] bg-[#07111d] px-4 py-3 text-sm font-bold text-white outline-none transition focus:border-cyan-400/40"
                                                            >
                                                                {cameraQualities.map(
                                                                    (
                                                                        quality,
                                                                    ) => (
                                                                        <option
                                                                            key={
                                                                                quality.value
                                                                            }
                                                                            value={
                                                                                quality.value
                                                                            }
                                                                            className="bg-[#0b1624]"
                                                                        >
                                                                            {
                                                                                quality.label
                                                                            }{" "}
                                                                            —{" "}
                                                                            {
                                                                                quality.description
                                                                            }
                                                                        </option>
                                                                    ),
                                                                )}
                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>

                                                {/* Group Bitrate */}
                                                <div className="mt-3 flex items-center justify-between rounded-xl border border-cyan-400/[0.07] bg-cyan-400/[0.02] px-3 py-2.5">
                                                    <span className="text-[10px] text-slate-600">
                                                        Bitrate تقریبی هر
                                                        دوربین
                                                    </span>

                                                    <span className="text-xs font-bold text-cyan-400">
                                                        {formatNumber(
                                                            getBitrate(
                                                                compressionFormat,
                                                                group.quality,
                                                            ) *
                                                                (frameRate /
                                                                    25),
                                                            2,
                                                        )}{" "}
                                                        Mbps
                                                    </span>
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>

                            {/* Other Settings */}
                            <div className="mt-8 grid gap-4 md:grid-cols-2">

                                {/* Microphone */}
                                <div>
                                    <label className="mb-2 flex items-center gap-2 text-xs font-bold">
                                        <Mic className="size-4 text-cyan-400" />
                                        تعداد میکروفون
                                    </label>

                                    <div className="relative">
                                        <select
                                            value={microphones}
                                            onChange={(e) =>
                                                setMicrophones(
                                                    Number(
                                                        e.target.value,
                                                    ),
                                                )
                                            }
                                            className="w-full appearance-none rounded-xl border border-white/[0.07] bg-[#07111d] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40"
                                        >
                                            {microphoneOptions.map(
                                                (value) => (
                                                    <option
                                                        key={value}
                                                        value={value}
                                                        className="bg-[#0b1624]"
                                                    >
                                                        {value === 0
                                                            ? "بدون میکروفون"
                                                            : `${value} میکروفون`}
                                                    </option>
                                                ),
                                            )}
                                        </select>
                                    </div>
                                </div>

                                {/* FPS */}
                                <div>
                                    <label className="mb-2 flex items-center gap-2 text-xs font-bold">
                                        <Video className="size-4 text-cyan-400" />
                                        فریم بر ثانیه
                                    </label>

                                    <select
                                        value={frameRate}
                                        onChange={(e) =>
                                            setFrameRate(
                                                Number(
                                                    e.target.value,
                                                ),
                                            )
                                        }
                                        className="w-full appearance-none rounded-xl border border-white/[0.07] bg-[#07111d] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40"
                                    >
                                        {frameRates.map((fps) => (
                                            <option
                                                key={fps}
                                                value={fps}
                                                className="bg-[#0b1624]"
                                            >
                                                {fps} FPS
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Compression */}
                                <div>
                                    <label className="mb-2 block text-xs font-bold">
                                        فرمت فشرده‌سازی
                                    </label>

                                    <select
                                        value={compressionFormat}
                                        onChange={(e) =>
                                            setCompressionFormat(
                                                e.target
                                                    .value as CompressionFormat,
                                            )
                                        }
                                        className="w-full appearance-none rounded-xl border border-white/[0.07] bg-[#07111d] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40"
                                    >
                                        {compressionFormats.map(
                                            (format) => (
                                                <option
                                                    key={format.value}
                                                    value={
                                                        format.value
                                                    }
                                                    className="bg-[#0b1624]"
                                                >
                                                    {format.label}
                                                </option>
                                            ),
                                        )}
                                    </select>
                                </div>

                                {/* Days */}
                                <div>
                                    <label className="mb-2 block text-xs font-bold">
                                        مدت نگهداری تصاویر
                                    </label>

                                    <select
                                        value={days}
                                        onChange={(e) =>
                                            setDays(
                                                Number(
                                                    e.target.value,
                                                ),
                                            )
                                        }
                                        className="w-full appearance-none rounded-xl border border-white/[0.07] bg-[#07111d] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40"
                                    >
                                        {storageDays.map((day) => (
                                            <option
                                                key={day}
                                                value={day}
                                                className="bg-[#0b1624]"
                                            >
                                                {day} روز
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            </div>

                            {/* Formula Notice */}
                            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-400/10 bg-amber-400/[0.03] p-4">
                                <Info className="mt-0.5 size-4 shrink-0 text-amber-400" />

                                <p className="text-[11px] leading-6 text-slate-500">
                                    حجم نهایی تقریبی است. Bitrate واقعی
                                    دوربین بسته به صحنه، میزان حرکت، نور،
                                    سنسور، تنظیمات Encoding و دستگاه
                                    ضبط می‌تواند متفاوت باشد.
                                </p>
                            </div>
                        </div>

                        {/* Result */}
                        <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/10 bg-gradient-to-b from-[#102033] to-[#09131f] p-6">

                            <div className="absolute -left-20 -top-20 size-64 rounded-full bg-cyan-400/10 blur-[100px]" />

                            <div className="relative">

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-slate-500">
                                            نتیجه محاسبه
                                        </p>

                                        <h2 className="mt-1 text-xl font-black">
                                            حجم هارد مورد نیاز
                                        </h2>
                                    </div>

                                    <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                                        <HardDrive className="size-5" />
                                    </div>
                                </div>

                                {/* Main Result */}
                                <div className="my-10 text-center">
                                    <div className="text-4xl font-black tracking-tight text-cyan-400 md:text-5xl">
                                        {storageResult}
                                    </div>

                                    <p className="mt-3 text-xs text-slate-500">
                                        حجم تقریبی برای{" "}
                                        {formatNumber(days)} روز
                                        نگهداری
                                    </p>
                                </div>

                                {/* Selected Values */}
                                <div className="space-y-2">

                                    <SummaryRow
                                        label="تعداد دوربین"
                                        value={
                                            calculation.totalCameras
                                                ? `${formatNumber(
    calculation.totalCameras,
)} دوربین`
                                                : "انتخاب نشده"
                                        }
                                    />

                                    <SummaryRow
                                        label="کیفیت دوربین‌ها"
                                        value={
                                            calculation.qualitySummary ||
                                            "انتخاب نشده"
                                        }
                                    />

                                    <SummaryRow
                                        label="میکروفون"
                                        value={
                                            microphones === 0
                                                ? "بدون میکروفون"
                                                : `${formatNumber(
    microphones,
)} میکروفون`
                                        }
                                    />

                                    <SummaryRow
                                        label="فریم بر ثانیه"
                                        value={`${formatNumber(
    frameRate,
)} FPS`}
                                    />

                                    <SummaryRow
                                        label="فشرده‌سازی"
                                        value={
                                            compressionFormat
                                        }
                                    />

                                    <SummaryRow
                                        label="مدت نگهداری"
                                        value={`${formatNumber(
    days,
)} روز`}
                                    />

                                </div>

                                {/* Bitrate Details */}
                                <div className="mt-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">

                                    <p className="mb-3 text-xs font-bold text-slate-300">
                                        جزئیات محاسبه
                                    </p>

                                    <div className="space-y-3">

                                        <div className="flex justify-between text-[11px]">
                                            <span className="text-slate-600">
                                                Bitrate تصویر
                                            </span>

                                            <span className="font-bold text-slate-400">
                                                {formatNumber(
                                                    calculation.totalVideoBitrate,
                                                    2,
                                                )}{" "}
                                                Mbps
                                            </span>
                                        </div>

                                        <div className="flex justify-between text-[11px]">
                                            <span className="text-slate-600">
                                                Bitrate صدا
                                            </span>

                                            <span className="font-bold text-slate-400">
                                                {formatNumber(
                                                    calculation.totalAudioBitrate,
                                                    2,
                                                )}{" "}
                                                Mbps
                                            </span>
                                        </div>

                                        <div className="flex justify-between border-t border-white/[0.05] pt-3 text-[11px]">
                                            <span className="text-slate-500">
                                                Bitrate نهایی
                                            </span>

                                            <span className="font-bold text-cyan-400">
                                                {formatNumber(
                                                    calculation.totalBitrate,
                                                    2,
                                                )}{" "}
                                                Mbps
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Information Cards */}
                    <section className="mt-5 grid gap-4 md:grid-cols-3">

                        <InfoCard
                            icon={<Camera />}
                            title="کیفیت تصویر"
                            text="هرچه رزولوشن دوربین بالاتر باشد، معمولاً برای ذخیره تصویر با کیفیت مشابه به Bitrate بیشتری نیاز خواهید داشت."
                        />

                        <InfoCard
                            icon={<Video />}
                            title="فریم بر ثانیه"
                            text="افزایش FPS باعث افزایش تعداد فریم‌های ثبت‌شده و در نتیجه افزایش Bitrate و حجم ذخیره‌سازی می‌شود."
                        />

                        <InfoCard
                            icon={<HardDrive />}
                            title="فرمت فشرده‌سازی"
                            text="فرمت‌های جدیدتر مانند H.265 و H.265+ می‌توانند با Bitrate کمتر، حجم ذخیره‌سازی را کاهش دهند."
                        />

                    </section>

                    {/* Important Notice */}
                    <section className="mt-5 rounded-2xl border border-amber-400/10 bg-amber-400/[0.03] p-5">

                        <div className="flex items-start gap-4">

                            <Info className="mt-0.5 size-5 shrink-0 text-amber-400" />

                            <div>
                                <h3 className="text-sm font-bold text-amber-300">
                                    توجه درباره نتیجه محاسبه
                                </h3>

                                <p className="mt-2 text-xs leading-7 text-slate-500">
                                    عدد نمایش داده‌شده یک برآورد تقریبی
                                    است. در شرایط واقعی، Bitrate دوربین
                                    می‌تواند بر اساس میزان حرکت در تصویر،
                                    نور محیط، جزئیات صحنه، تنظیمات دوربین،
                                    نوع Encoder، I-Frame و تنظیمات دستگاه
                                    ضبط تغییر کند. برای انتخاب هارد، بهتر
                                    است مقداری فضای ذخیره‌سازی اضافه نیز
                                    در نظر گرفته شود.
                                </p>
                            </div>

                        </div>
                    </section>

                </div>
            </main>
        </HomeLayout>
    );
}

/*
|--------------------------------------------------------------------------
| Summary Row
|--------------------------------------------------------------------------
*/

function SummaryRow({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-3">

            <span className="text-[11px] text-slate-500">
                {label}
            </span>

            <span className="text-left text-[11px] font-bold text-slate-300">
                {value}
            </span>

        </div>
    );
}

/*
|--------------------------------------------------------------------------
| Information Card
|--------------------------------------------------------------------------
*/

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

            <h3 className="mt-4 text-sm font-bold">
                {title}
            </h3>

            <p className="mt-2 text-xs leading-7 text-slate-500">
                {text}
            </p>

        </div>
    );
}
