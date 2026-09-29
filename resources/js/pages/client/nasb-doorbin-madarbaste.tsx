import HomeLayout from "@/layouts/home/home-layout";
import {
    ArrowLeft,
    ArrowDown,
    BadgeCheck,
    Camera,
    Check,
    CheckCircle2,
    ChevronDown,
    CircleHelp,
    Clock3,
    Cpu,
    Eye,
    FileCheck2,
    HardDrive,
    Home,
    Layers3,
    MapPin,
    Network,
    Phone,
    PlugZap,
    ScanLine,
    Search,
    ShieldCheck,
    Settings2,
    Signal,
    Sparkles,
    Target,
    Wrench,
    Zap,
} from "lucide-react";
import { useState } from "react";

const installationSteps = [
    {
        number: "01",
        title: "بازدید و بررسی محل",
        description:
            "محل پروژه، ورودی‌ها، نقاط حساس، مسیر کابل‌کشی، شرایط نور و محل قرارگیری تجهیزات بررسی می‌شود.",
        icon: <MapPin />,
    },
    {
        number: "02",
        title: "طراحی محل دوربین‌ها",
        description:
            "با توجه به زاویه دید، ارتفاع، فاصله و هدف نظارتی، بهترین نقاط برای نصب دوربین مشخص می‌شود.",
        icon: <Target />,
    },
    {
        number: "03",
        title: "انتخاب تجهیزات",
        description:
            "دوربین، دستگاه ضبط، هارد، سوئیچ شبکه، تجهیزات PoE و سایر تجهیزات موردنیاز متناسب با پروژه انتخاب می‌شوند.",
        icon: <Cpu />,
    },
    {
        number: "04",
        title: "کابل‌کشی و زیرساخت",
        description:
            "کابل‌کشی شبکه و برق با رعایت مسیر مناسب، استانداردهای اجرایی و دسترسی مناسب برای تعمیرات انجام می‌شود.",
        icon: <Network />,
    },
    {
        number: "05",
        title: "نصب و راه‌اندازی",
        description:
            "دوربین‌ها، دستگاه ضبط و تجهیزات شبکه نصب شده و تنظیمات اولیه سیستم انجام می‌شود.",
        icon: <Wrench />,
    },
    {
        number: "06",
        title: "تنظیم و تست نهایی",
        description:
            "زاویه دوربین‌ها، کیفیت تصویر، ضبط، دید در شب، شبکه و دسترسی نرم‌افزاری بررسی و تست می‌شوند.",
        icon: <BadgeCheck />,
    },
];

const cameraTypes = [
    {
        title: "دوربین دام",
        description:
            "انتخابی مناسب برای محیط‌های داخلی، فروشگاه‌ها، ادارات و فضاهایی که ظاهر تجهیزات اهمیت دارد.",
        icon: <Camera />,
        tags: ["فضای داخلی", "فروشگاه", "اداری"],
    },
    {
        title: "دوربین بولت",
        description:
            "مناسب برای نصب در محیط‌های بیرونی و فضاهایی که نیاز به برد دید مناسب و مقاومت بیشتر دارند.",
        icon: <ScanLine />,
        tags: ["فضای بیرونی", "پارکینگ", "محوطه"],
    },
    {
        title: "دوربین PTZ",
        description:
            "برای پروژه‌هایی که نیاز به چرخش، زوم و کنترل از راه دور دارند، گزینه مناسبی محسوب می‌شود.",
        icon: <Eye />,
        tags: ["محوطه بزرگ", "زوم", "کنترل از راه دور"],
    },
    {
        title: "دوربین تحت شبکه",
        description:
            "دوربین‌های IP با انتقال تصویر روی شبکه که برای پروژه‌های مدرن و مقیاس‌پذیر استفاده می‌شوند.",
        icon: <Signal />,
        tags: ["IP", "شبکه", "PoE"],
    },
];

const projectTypes = [
    "خانه و ساختمان مسکونی",
    "دفتر و شرکت",
    "فروشگاه و مجتمع تجاری",
    "کارخانه و کارگاه",
    "انبار و سوله",
    "پارکینگ و محوطه",
];

const faqs = [
    {
        question: "هزینه نصب دوربین مداربسته چقدر است؟",
        answer:
            "هزینه نصب به تعداد دوربین، نوع دوربین، متراژ کابل‌کشی، شرایط محل، نوع دستگاه ضبط و تجهیزات موردنیاز بستگی دارد. پس از بررسی پروژه می‌توان هزینه دقیق‌تری ارائه کرد.",
    },
    {
        question: "آیا قبل از نصب از محل پروژه بازدید می‌شود؟",
        answer:
            "بله. برای پروژه‌هایی که نیاز به طراحی و کابل‌کشی دارند، بررسی محل کمک می‌کند تعداد دوربین‌ها، نقاط نصب و مسیر اجرای زیرساخت با دقت بیشتری مشخص شود.",
    },
    {
        question: "نصب دوربین IP بهتر است یا آنالوگ؟",
        answer:
            "انتخاب بین IP و آنالوگ به بودجه، زیرساخت شبکه، کیفیت موردنیاز و ابعاد پروژه بستگی دارد. برای پروژه‌های جدید معمولاً سیستم‌های تحت شبکه انعطاف‌پذیری بیشتری در اختیار قرار می‌دهند.",
    },
    {
        question: "آیا امکان مشاهده تصاویر دوربین از موبایل وجود دارد؟",
        answer:
            "در صورت پشتیبانی تجهیزات و وجود اتصال مناسب به شبکه، امکان راه‌اندازی مشاهده تصاویر روی موبایل و سایر دستگاه‌های مجاز وجود دارد.",
    },
    {
        question: "کابل‌کشی دوربین‌ها هم توسط شما انجام می‌شود؟",
        answer:
            "بله، اجرای مسیر کابل‌کشی و اتصال تجهیزات می‌تواند به عنوان بخشی از فرآیند نصب و راه‌اندازی پروژه انجام شود.",
    },
    {
        question: "بعد از نصب، تنظیمات دوربین هم انجام می‌شود؟",
        answer:
            "بله. زاویه دوربین، کیفیت تصویر، ضبط، شبکه، دید در شب و سایر تنظیمات موردنیاز در مرحله راه‌اندازی و تست بررسی می‌شوند.",
    },
];

export default function NasbDoorbinMadarbaste() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <HomeLayout>
            <main
                dir="rtl"
                className="min-h-screen overflow-hidden bg-[#050b14] text-white"
            >
                {/* Background */}
                <div className="pointer-events-none fixed inset-0 overflow-hidden">
                    <div className="absolute right-[-300px] top-[-250px] size-[650px] rounded-full bg-cyan-500/10 blur-[160px]" />
                    <div className="absolute bottom-[-300px] left-[-250px] size-[650px] rounded-full bg-blue-600/10 blur-[170px]" />

                    <div
                        className="absolute inset-0 opacity-[0.025]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                            backgroundSize: "50px 50px",
                        }}
                    />
                </div>

                <div className="relative">

                    {/* ================================================= */}
                    {/* HERO */}
                    {/* ================================================= */}

                    <section className="relative min-h-[680px] overflow-hidden border-b border-white/[0.06]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(34,211,238,.10),transparent_30%)]" />

                        <div className="mx-auto grid min-h-[680px] max-w-[1450px] items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_.85fr] lg:px-8">

                            {/* Text */}
                            <div>
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-semibold text-cyan-400">
                                    <ShieldCheck className="size-4" />
                                    اجرای تخصصی سیستم‌های نظارتی
                                </div>

                                <h1 className="max-w-3xl text-4xl font-black leading-[1.5] tracking-tight md:text-6xl">
                                    نصب دوربین مداربسته
                                    <span className="block text-cyan-400">
                                        اصولی، دقیق و حرفه‌ای
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-2xl text-sm leading-9 text-slate-400 md:text-base">
                                    از طراحی محل نصب و انتخاب تجهیزات تا
                                    کابل‌کشی، نصب، تنظیم و تست نهایی سیستم
                                    نظارتی؛ اجرای پروژه دوربین مداربسته را
                                    متناسب با نیاز محیط شما انجام می‌دهیم.
                                </p>

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                    <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/10 transition hover:bg-cyan-300">
                                        درخواست مشاوره و بازدید
                                        <ArrowLeft className="size-4" />
                                    </button>

                                    <button className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.07] hover:text-white">
                                        <Phone className="size-4" />
                                        تماس با کارشناسان
                                    </button>
                                </div>

                                <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                                    <HeroStat
                                        icon={<BadgeCheck />}
                                        value="تخصصی"
                                        label="اجرای پروژه"
                                    />

                                    <HeroStat
                                        icon={<Wrench />}
                                        value="کامل"
                                        label="نصب تا راه‌اندازی"
                                    />

                                    <HeroStat
                                        icon={<ShieldCheck />}
                                        value="تست شده"
                                        label="تحویل نهایی"
                                    />
                                </div>
                            </div>

                            {/* Visual */}
                            <div className="relative hidden lg:block">
                                <div className="relative mx-auto aspect-square max-w-[560px]">

                                    <div className="absolute inset-[12%] rounded-full border border-cyan-400/10" />
                                    <div className="absolute inset-[22%] rounded-full border border-cyan-400/10" />
                                    <div className="absolute inset-[32%] rounded-full border border-cyan-400/10" />

                                    <div className="absolute inset-0 rounded-full bg-cyan-400/[0.025] blur-2xl" />

                                    <div className="absolute left-1/2 top-1/2 flex size-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[40px] border border-cyan-400/20 bg-gradient-to-br from-[#172b40] to-[#091522] shadow-2xl shadow-cyan-950/60">
                                        <Camera className="size-28 text-cyan-400" strokeWidth={1} />
                                    </div>

                                    <TechPoint
                                        className="right-[7%] top-[22%]"
                                        icon={<Eye />}
                                        title="کیفیت تصویر"
                                    />

                                    <TechPoint
                                        className="bottom-[18%] left-[5%]"
                                        icon={<Network />}
                                        title="شبکه و PoE"
                                    />

                                    <TechPoint
                                        className="bottom-[4%] right-[28%]"
                                        icon={<ShieldCheck />}
                                        title="امنیت"
                                    />

                                    <TechPoint
                                        className="left-[5%] top-[25%]"
                                        icon={<Target />}
                                        title="زاویه دید"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-slate-600">
                            <ArrowDown className="size-5 animate-bounce" />
                        </div>
                    </section>

                    {/* ================================================= */}
                    {/* INTRO */}
                    {/* ================================================= */}

                    <section className="mx-auto max-w-[1200px] px-5 py-24 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">

                            <div>
                                <p className="text-xs font-bold tracking-widest text-cyan-400">
                                    WHY PROFESSIONAL INSTALLATION?
                                </p>

                                <h2 className="mt-4 text-3xl font-black leading-[1.7] md:text-4xl">
                                    نصب دوربین فقط
                                    <span className="text-cyan-400">
                                        {" "}پیچاندن چند کابل{" "}
                                    </span>
                                    نیست
                                </h2>
                            </div>

                            <div className="text-sm leading-9 text-slate-400">
                                <p>
                                    کیفیت یک سیستم نظارتی فقط به مدل دوربین
                                    وابسته نیست. محل قرارگیری دوربین، ارتفاع
                                    نصب، زاویه دید، نور محیط، مسیر کابل‌کشی،
                                    شبکه، تنظیمات ضبط و حتی انتخاب هارد می‌تواند
                                    روی عملکرد نهایی سیستم تأثیر بگذارد.
                                </p>

                                <p className="mt-5">
                                    به همین دلیل نصب باید از مرحله طراحی شروع
                                    شود و تا تست نهایی و تحویل سیستم ادامه
                                    پیدا کند.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ================================================= */}
                    {/* PROCESS */}
                    {/* ================================================= */}

                    <section className="border-y border-white/[0.05] bg-[#07111d] py-24">
                        <div className="mx-auto max-w-[1250px] px-5 lg:px-8">

                            <SectionHeading
                                eyebrow="INSTALLATION PROCESS"
                                title="فرآیند نصب دوربین مداربسته"
                                description="پروژه از بررسی اولیه شروع می‌شود و پس از تست کامل سیستم تحویل داده می‌شود."
                            />

                            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {installationSteps.map((step) => (
                                    <ProcessCard
                                        key={step.number}
                                        {...step}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ================================================= */}
                    {/* CAMERA TYPES */}
                    {/* ================================================= */}

                    <section className="mx-auto max-w-[1250px] px-5 py-24 lg:px-8">
                        <SectionHeading
                            eyebrow="CAMERA TYPES"
                            title="نصب انواع دوربین مداربسته"
                            description="نوع دوربین باید با محیط، هدف نظارتی و شرایط نصب هماهنگ باشد."
                        />

                        <div className="mt-14 grid gap-4 md:grid-cols-2">
                            {cameraTypes.map((item) => (
                                <CameraTypeCard
                                    key={item.title}
                                    {...item}
                                />
                            ))}
                        </div>
                    </section>

                    {/* ================================================= */}
                    {/* PROJECT TYPES */}
                    {/* ================================================= */}

                    <section className="border-y border-white/[0.05] bg-[#07111d] py-24">
                        <div className="mx-auto max-w-[1250px] px-5 lg:px-8">

                            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">

                                <div>
                                    <p className="text-xs font-bold tracking-widest text-cyan-400">
                                        FOR EVERY ENVIRONMENT
                                    </p>

                                    <h2 className="mt-4 text-3xl font-black leading-[1.7] md:text-4xl">
                                        برای چه مکان‌هایی
                                        <span className="text-cyan-400">
                                            {" "}نصب انجام می‌شود؟
                                        </span>
                                    </h2>

                                    <p className="mt-5 text-sm leading-8 text-slate-500">
                                        طراحی و اجرای سیستم نظارتی باید با
                                        کاربری و شرایط محیط هماهنگ باشد.
                                    </p>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    {projectTypes.map((item, index) => (
                                        <div
                                            key={item}
                                            className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]"
                                        >
                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                                                <Home className="size-5" />
                                            </div>

                                            <div>
                                                <p className="text-sm font-bold">
                                                    {item}
                                                </p>

                                                <p className="mt-1 text-[10px] text-slate-600">
                                                    پروژه {String(index + 1).padStart(2, "0")}
                                                </p>
                                            </div>

                                            <ArrowLeft className="mr-auto size-4 text-slate-700 transition group-hover:text-cyan-400" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================================================= */}
                    {/* DESIGN PRINCIPLES */}
                    {/* ================================================= */}

                    <section className="mx-auto max-w-[1250px] px-5 py-24 lg:px-8">

                        <SectionHeading
                            eyebrow="INSTALLATION QUALITY"
                            title="در اجرای پروژه به چه چیزهایی توجه می‌کنیم؟"
                            description="هدف فقط نصب دوربین نیست؛ هدف ساخت یک سیستم نظارتی قابل استفاده و قابل اطمینان است."
                        />

                        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <QualityCard
                                icon={<Target />}
                                title="زاویه مناسب"
                                text="دوربین در نقطه‌ای قرار می‌گیرد که بیشترین پوشش مفید را داشته باشد."
                            />

                            <QualityCard
                                icon={<Signal />}
                                title="کیفیت تصویر"
                                text="رزولوشن، نور محیط، لنز و شرایط دید برای رسیدن به تصویر مناسب بررسی می‌شود."
                            />

                            <QualityCard
                                icon={<Network />}
                                title="زیرساخت شبکه"
                                text="مسیر کابل، سوئیچ، PoE و ارتباط تجهیزات پیش از اجرا بررسی می‌شود."
                            />

                            <QualityCard
                                icon={<HardDrive />}
                                title="ضبط مطمئن"
                                text="ظرفیت هارد و تنظیمات ضبط متناسب با تعداد دوربین و نیاز پروژه انتخاب می‌شود."
                            />
                        </div>
                    </section>

                    {/* ================================================= */}
                    {/* POE / NETWORK */}
                    {/* ================================================= */}

                    <section className="border-y border-white/[0.05] bg-[#07111d] py-24">
                        <div className="mx-auto max-w-[1250px] px-5 lg:px-8">

                            <div className="overflow-hidden rounded-[30px] border border-white/[0.07] bg-gradient-to-br from-[#102033] to-[#09131f]">

                                <div className="grid lg:grid-cols-2">

                                    <div className="p-7 md:p-10 lg:p-14">
                                        <div className="flex size-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                                            <PlugZap className="size-6" />
                                        </div>

                                        <h2 className="mt-6 text-3xl font-black leading-[1.6]">
                                            کابل‌کشی، شبکه و
                                            <span className="text-cyan-400">
                                                {" "}PoE
                                            </span>
                                        </h2>

                                        <p className="mt-5 text-sm leading-9 text-slate-400">
                                            در سیستم‌های تحت شبکه، کیفیت اجرای
                                            زیرساخت اهمیت زیادی دارد. انتخاب
                                            مسیر مناسب، کابل استاندارد، سوئیچ
                                            مناسب و تأمین برق دوربین‌ها باید
                                            متناسب با پروژه انجام شود.
                                        </p>

                                        <div className="mt-7 space-y-3">
                                            <Feature text="بررسی مسیر کابل‌کشی" />
                                            <Feature text="انتخاب تجهیزات شبکه مناسب" />
                                            <Feature text="بررسی توان PoE" />
                                            <Feature text="تست ارتباط دوربین‌ها" />
                                        </div>
                                    </div>

                                    <div className="relative min-h-[360px] overflow-hidden border-t border-white/[0.06] lg:border-r lg:border-t-0">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.12),transparent_45%)]" />

                                        <div className="absolute left-1/2 top-1/2 flex size-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-cyan-400/20 bg-[#0a1725] shadow-2xl shadow-cyan-950">
                                            <Network className="size-16 text-cyan-400" />
                                        </div>

                                        <div className="absolute right-[15%] top-[28%] flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-400">
                                            <Camera className="size-5" />
                                        </div>

                                        <div className="absolute right-[15%] bottom-[28%] flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-400">
                                            <Camera className="size-5" />
                                        </div>

                                        <div className="absolute left-[15%] top-1/2 h-px w-[28%] bg-gradient-to-l from-cyan-400/60 to-transparent" />

                                        <div className="absolute right-[15%] top-[31%] h-px w-[22%] bg-gradient-to-r from-cyan-400/60 to-transparent" />

                                        <div className="absolute right-[15%] bottom-[31%] h-px w-[22%] bg-gradient-to-r from-cyan-400/60 to-transparent" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================================================= */}
                    {/* INSTALLATION CHECKLIST */}
                    {/* ================================================= */}

                    <section className="mx-auto max-w-[1000px] px-5 py-24 lg:px-8">

                        <SectionHeading
                            eyebrow="FINAL CHECK"
                            title="قبل از تحویل چه چیزهایی بررسی می‌شود؟"
                            description="پس از نصب، سیستم به صورت کامل بررسی و تست می‌شود."
                            center
                        />

                        <div className="mt-12 grid gap-3 sm:grid-cols-2">
                            <CheckItem text="تصویر تمام دوربین‌ها" />
                            <CheckItem text="زاویه و پوشش تصویر" />
                            <CheckItem text="کیفیت تصویر روز" />
                            <CheckItem text="عملکرد دید در شب" />
                            <CheckItem text="ضبط تصاویر" />
                            <CheckItem text="ظرفیت و سلامت هارد" />
                            <CheckItem text="ارتباط شبکه" />
                            <CheckItem text="دسترسی از موبایل" />
                            <CheckItem text="تنظیمات دستگاه ضبط" />
                            <CheckItem text="بررسی کابل و اتصالات" />
                        </div>
                    </section>

                    {/* ================================================= */}
                    {/* SERVICE FEATURES */}
                    {/* ================================================= */}

                    <section className="border-y border-white/[0.05] bg-[#07111d] py-24">
                        <div className="mx-auto max-w-[1250px] px-5 lg:px-8">

                            <SectionHeading
                                eyebrow="WHY RAYAN NOVIN"
                                title="چرا نصب را به رایان نوین بسپاریم؟"
                                description="اجرای سیستم نظارتی زمانی ارزشمند است که نتیجه نهایی با نیاز واقعی پروژه هماهنگ باشد."
                            />

                            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                                <ReasonCard
                                    icon={<Layers3 />}
                                    title="طراحی متناسب با پروژه"
                                    text="تعداد و محل دوربین‌ها بر اساس شرایط واقعی محیط انتخاب می‌شود."
                                />

                                <ReasonCard
                                    icon={<Settings2 />}
                                    title="تنظیمات کامل"
                                    text="تنظیمات دوربین، دستگاه ضبط، شبکه و دسترسی نرم‌افزاری انجام می‌شود."
                                />

                                <ReasonCard
                                    icon={<Zap />}
                                    title="اجرای زیرساخت"
                                    text="کابل‌کشی و تجهیزات شبکه متناسب با سیستم اجرا می‌شوند."
                                />

                                <ReasonCard
                                    icon={<Eye />}
                                    title="تمرکز روی تصویر"
                                    text="زاویه، نور و فاصله سوژه برای دستیابی به تصویر کاربردی بررسی می‌شوند."
                                />

                                <ReasonCard
                                    icon={<FileCheck2 />}
                                    title="تست پیش از تحویل"
                                    text="سیستم قبل از تحویل از نظر عملکرد و ارتباط تجهیزات بررسی می‌شود."
                                />

                                <ReasonCard
                                    icon={<Clock3 />}
                                    title="پشتیبانی"
                                    text="در صورت نیاز، خدمات پشتیبانی و بررسی سیستم پس از اجرا نیز قابل ارائه است."
                                />
                            </div>
                        </div>
                    </section>

                    {/* ================================================= */}
                    {/* FAQ */}
                    {/* ================================================= */}

                    <section className="mx-auto max-w-[1000px] px-5 py-24 lg:px-8">

                        <SectionHeading
                            eyebrow="FAQ"
                            title="سوالات متداول نصب دوربین مداربسته"
                            description="پاسخ چند سوال رایج درباره نصب و راه‌اندازی سیستم‌های نظارتی."
                            center
                        />

                        <div className="mt-12 space-y-3">
                            {faqs.map((faq, index) => {
                                const open = openFaq === index;

                                return (
                                    <div
                                        key={faq.question}
                                        className={`overflow-hidden rounded-2xl border transition ${
                                            open
                                                ? "border-cyan-400/20 bg-cyan-400/[0.03]"
                                                : "border-white/[0.07] bg-white/[0.02]"
                                        }`}
                                    >
                                        <button
                                            onClick={() =>
                                                setOpenFaq(
                                                    open ? null : index
                                                )
                                            }
                                            className="flex w-full items-center gap-4 p-5 text-right"
                                        >
                                            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                                                <CircleHelp className="size-4" />
                                            </div>

                                            <span className="flex-1 text-sm font-bold">
                                                {faq.question}
                                            </span>

                                            <ChevronDown
                                                className={`size-5 shrink-0 text-slate-500 transition-transform ${
                                                    open ? "rotate-180" : ""
                                                }`}
                                            />
                                        </button>

                                        {open && (
                                            <div className="border-t border-white/[0.06] px-5 pb-5 pr-[4.5rem]">
                                                <p className="text-xs leading-8 text-slate-500">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* ================================================= */}
                    {/* CTA */}
                    {/* ================================================= */}

                    <section className="mx-auto max-w-[1250px] px-5 pb-24 lg:px-8">

                        <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-[#102b3d] via-[#0b1c2c] to-[#08121e] p-8 md:p-12 lg:p-16">

                            <div className="absolute -left-20 -top-20 size-72 rounded-full bg-cyan-400/10 blur-[100px]" />
                            <div className="absolute -bottom-32 right-1/3 size-72 rounded-full bg-blue-500/10 blur-[110px]" />

                            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                                <div>
                                    <div className="mb-4 flex items-center gap-2 text-xs font-bold text-cyan-400">
                                        <Sparkles className="size-4" />
                                        اجرای پروژه جدید
                                    </div>

                                    <h2 className="max-w-2xl text-3xl font-black leading-[1.7] md:text-4xl">
                                        برای پروژه‌تان به یک سیستم نظارتی
                                        مطمئن نیاز دارید؟
                                    </h2>

                                    <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-400">
                                        مشخصات پروژه را با کارشناسان رایان نوین
                                        در میان بگذارید تا درباره تعداد دوربین،
                                        تجهیزات و نحوه اجرای سیستم راهنمایی
                                        دریافت کنید.
                                    </p>
                                </div>

                                <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                                    <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">
                                        درخواست مشاوره
                                        <ArrowLeft className="size-4" />
                                    </button>

                                    <button className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 text-sm font-semibold text-white transition hover:bg-white/[0.08]">
                                        <Phone className="size-4" />
                                        تماس با ما
                                    </button>
                                </div>

                            </div>
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

function SectionHeading({
                            eyebrow,
                            title,
                            description,
                            center = false,
                        }: {
    eyebrow: string;
    title: string;
    description: string;
    center?: boolean;
}) {
    return (
        <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
            <p className="text-xs font-bold tracking-widest text-cyan-400">
                {eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-black leading-[1.7] md:text-4xl">
                {title}
            </h2>

            <p className="mt-4 text-sm leading-8 text-slate-500">
                {description}
            </p>
        </div>
    );
}

function HeroStat({
                      icon,
                      value,
                      label,
                  }: {
    icon: React.ReactNode;
    value: string;
    label: string;
}) {
    return (
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
            <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 [&>svg]:size-4">
                {icon}
            </div>

            <p className="text-sm font-black text-white">
                {value}
            </p>

            <p className="mt-1 text-[10px] text-slate-600">
                {label}
            </p>
        </div>
    );
}

function TechPoint({
                       icon,
                       title,
                       className,
                   }: {
    icon: React.ReactNode;
    title: string;
    className: string;
}) {
    return (
        <div
            className={`absolute flex items-center gap-2 rounded-xl border border-white/10 bg-[#091522]/90 px-3 py-2 text-[10px] font-semibold text-slate-300 shadow-xl backdrop-blur ${className}`}
        >
            <span className="text-cyan-400 [&>svg]:size-4">
                {icon}
            </span>

            {title}
        </div>
    );
}

function ProcessCard({
                         number,
                         title,
                         description,
                         icon,
                     }: {
    number: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}) {
    return (
        <div className="group relative rounded-[24px] border border-white/[0.07] bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.025]">

            <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 [&>svg]:size-5">
                    {icon}
                </div>

                <span className="text-4xl font-black text-white/[0.05]">
                    {number}
                </span>
            </div>

            <h3 className="mt-6 text-base font-black">
                {title}
            </h3>

            <p className="mt-3 text-xs leading-8 text-slate-500">
                {description}
            </p>
        </div>
    );
}

function CameraTypeCard({
                            title,
                            description,
                            icon,
                            tags,
                        }: {
    title: string;
    description: string;
    icon: React.ReactNode;
    tags: string[];
}) {
    return (
        <div className="group rounded-[24px] border border-white/[0.07] bg-[#0b1624] p-6 transition duration-300 hover:border-cyan-400/20 hover:shadow-xl hover:shadow-cyan-950/20">

            <div className="flex items-start justify-between">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 [&>svg]:size-6">
                    {icon}
                </div>

                <ArrowLeft className="size-5 text-slate-700 transition group-hover:text-cyan-400" />
            </div>

            <h3 className="mt-6 text-lg font-black">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-8 text-slate-500">
                {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] text-slate-500"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

function QualityCard({
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

            <h3 className="mt-5 text-sm font-black">
                {title}
            </h3>

            <p className="mt-2 text-xs leading-7 text-slate-500">
                {text}
            </p>
        </div>
    );
}

function Feature({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex size-5 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                <Check className="size-3" />
            </span>

            {text}
        </div>
    );
}

function CheckItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                <CheckCircle2 className="size-4" />
            </div>

            <span className="text-sm font-medium text-slate-300">
                {text}
            </span>
        </div>
    );
}

function ReasonCard({
                        icon,
                        title,
                        text,
                    }: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <div className="rounded-[22px] border border-white/[0.07] bg-white/[0.02] p-6 transition hover:border-cyan-400/15">
            <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 [&>svg]:size-5">
                {icon}
            </div>

            <h3 className="mt-5 text-sm font-black">
                {title}
            </h3>

            <p className="mt-2 text-xs leading-8 text-slate-500">
                {text}
            </p>
        </div>
    );
}