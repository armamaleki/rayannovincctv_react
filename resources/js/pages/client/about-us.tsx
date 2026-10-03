import { Head } from '@inertiajs/react';
import HomeLayout from "@/layouts/home/home-layout";
import { ShieldCheck, Eye, Award, Users, Cpu, Headset, MapPin, Phone, ArrowLeft, Check, Target, HeartHandshake, Zap } from "lucide-react";

const stats = [
    { value: "14+", label: "سال تجربه تخصصی" },
    { value: "12K+", label: "پروژه موفق نصب" },
    { value: "98%", label: "رضایت مشتریان" },
    { value: "24/7", label: "پشتیبانی واقعی" },
];

const values = [
    {
        icon: Eye,
        title: "شفافیت در کیفیت",
        desc: "فقط برندهای اصلی با گارانتی واقعی. هیچ کالای فیک و استوک در فروشگاه ما جایی ندارد.",
    },
    {
        icon: ShieldCheck,
        title: "امنیت بدون مصالحه",
        desc: "از مشاوره تا نصب و پشتیبانی، امنیت شما را مثل دارایی خودمان جدی می‌گیریم.",
    },
    {
        icon: Zap,
        title: "تکنولوژی روز",
        desc: "هوش مصنوعی، تشخیص چهره، پلاک‌خوان و تحلیل هوشمند تصویر؛ همیشه یک قدم جلوتر.",
    },
    {
        icon: HeartHandshake,
        title: "تعهد به پشتیبانی",
        desc: "گارانتی معتبر، خدمات پس از فروش سریع و آموزش کامل استفاده از سیستم.",
    },
];

const timeline = [
    { year: "1390", title: "شروع رایان نوین", desc: "شروع فعالیت با فروش و نصب دوربین‌های آنالوگ در تهران." },
    { year: "1395", title: "ورود به دنیای تحت شبکه", desc: "تخصص در سیستم‌های IP، NVR و انتقال تصویر P2P و راه‌اندازی دفتر مرکزی." },
    { year: "1399", title: "نمایندگی برندهای معتبر", desc: "اخذ نمایندگی رسمی هایک‌ویژن، داهوا، تیاندی و توسعه به سراسر کشور." },
    { year: "1402", title: "امنیت هوشمند", desc: "توسعه راهکارهای AI، دزدگیر اماکن، کنترل تردد و خانه هوشمند." },
    { year: "1405", title: "امروز رایان نوین", desc: "بیش از ۱۲ هزار پروژه، فروشگاه آنلاین تخصصی و تیم ۲۵ نفره فنی و پشتیبانی." },
];

const team = [
    { name: "مهندس رضا محمدی", role: "بنیان‌گذار و مدیر فنی", img: "/assets/images/team-1.jpg" },
    { name: "مهندس سارا کریمی", role: "مدیر فروش سازمانی", img: "/assets/images/team-2.jpg" },
    { name: "مهندس امیر حسینی", role: "سرپرست تیم نصب", img: "/assets/images/team-3.jpg" },
];

export default function AboutUs() {
    return (
        <HomeLayout>
            <Head title="درباره ما | رایان نوین" />
            <main dir="rtl" className="aegis-site min-h-screen overflow-hidden bg-[#e8edf1] text-[#152434] dark:bg-[#07111a] dark:text-white">

                {/* HERO */}
                <section className="relative isolate overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(151,205,235,0.8),transparent_32%),linear-gradient(135deg,#eef2f4_0%,#d9e3e9_52%,#bad0dd_100%)] dark:bg-[radial-gradient(circle_at_20%_15%,rgba(28,105,140,0.35),transparent_32%),linear-gradient(135deg,#0b1822_0%,#0d202d_52%,#102d3c_100%)]" />
                    <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 pb-16 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pt-24">
                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#67a5c7]/35 bg-white/45 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#347ca7] backdrop-blur-sm dark:border-cyan-300/20 dark:bg-white/5 dark:text-cyan-300">
                                <span className="size-1.5 rounded-full bg-[#4fa9da] shadow-[0_0_0_4px_rgba(79,169,218,0.16)]" />
                                از 1390 کنار شما هستیم
                            </div>
                            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[72px]">
                                ما فقط دوربین
                                <br />
                                نمی‌فروشیم؛
                                <br />
                                <span className="text-[#438caf] dark:text-cyan-400">خیال راحت می‌سازیم.</span>
                            </h1>
                            <p className="mt-6 max-w-lg text-base leading-8 text-[#536a7b] sm:text-lg dark:text-slate-300">
                                رایان نوین مرجع تخصصی سیستم‌های نظارت تصویری و امنیت هوشمند در ایران است.
                                از یک دوربین برای خانه تا صدها دوربین برای کارخانه و سازمان؛ طراحی، فروش، نصب و پشتیبانی همه با یک تیم است.
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <a href="/contact" className="flex items-center justify-center gap-2 rounded-full bg-[#152434] px-7 py-3.5 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-1 dark:bg-cyan-400 dark:text-[#06131c]">
                                    مشاوره رایگان <ArrowLeft className="size-4" />
                                </a>
                                <a href="#story" className="flex items-center justify-center rounded-full border border-[#152434]/20 bg-white/40 px-7 py-3.5 text-sm font-semibold backdrop-blur-sm hover:bg-white/70 dark:border-white/15 dark:bg-white/5">
                                    داستان ما
                                </a>
                            </div>
                            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#152434]/10 pt-6 sm:grid-cols-4 dark:border-white/10">
                                {stats.map((s) => (
                                    <div key={s.label}>
                                        <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
                                        <div className="mt-1 text-[13px] text-[#657a89] dark:text-slate-400">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative mx-auto w-full max-w-xl">
                            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/30 p-3 shadow-2xl backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                                <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2rem]">
                                    <img src="/assets/images/about-hero.jpg" alt="تیم رایان نوین" className="size-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#152434]/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/85 px-5 py-4 backdrop-blur-md dark:bg-[#07111a]/85">
                                        <div>
                                            <div className="text-xs text-[#547080] dark:text-slate-400">دفتر مرکزی تهران</div>
                                            <div className="mt-0.5 text-sm font-bold">پاسخ‌گویی در کمتر از 2 ساعت</div>
                                        </div>
                                        <span className="grid size-11 place-items-center rounded-full bg-[#152434] text-white dark:bg-cyan-400 dark:text-black"><Headset className="size-5" /></span>
                                    </div>
                                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#152434]/75 px-3 py-2 text-[11px] text-white backdrop-blur-md">
                                        <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" /> 25 متخصص فعال
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-5 -right-4 rounded-2xl border border-white/80 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#0b1b26]/90">
                                <div className="flex items-center gap-2 text-amber-500">★★★★★ <span className="text-xs text-slate-500">4.9 از 5</span></div>
                                <div className="mt-1 text-sm font-bold">+2,400 نظر ثبت‌شده مشتریان</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MARQUEE TRUST */}
                <section className="border-y border-[#152434]/10 bg-white/50 py-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                    <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 text-sm font-bold text-[#6a7e8d] dark:text-slate-400">
                        <span>HIKVISION</span><span>DAHUA</span><span>TIANDY</span><span>UNIVIEW</span><span>HILOOK</span><span>EZVIZ</span>
                    </div>
                </section>

                {/* STORY */}
                <section id="story" className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-28">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="relative order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="/assets/images/about-1.jpg" className="h-64 w-full rounded-3xl object-cover shadow-lg" alt="نصب دوربین" />
                                <img src="/assets/images/about-2.jpg" className="mt-10 h-64 w-full rounded-3xl object-cover shadow-lg" alt="اتاق مانیتورینگ" />
                            </div>
                            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-[#152434] px-6 py-4 text-white shadow-2xl dark:bg-cyan-400 dark:text-black">
                                <Award className="size-6" />
                                <div><div className="text-2xl font-bold leading-none">14</div><div className="text-[11px] opacity-80">سال تجربه</div></div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-xs font-bold tracking-[0.2em] text-[#438caf] dark:text-cyan-400">داستان رایان نوین</span>
                            <h2 className="mt-3 text-4xl font-semibold leading-[1.15] sm:text-5xl">از یک مغازه کوچک تا مرجع امنیت ایران</h2>
                            <p className="mt-6 leading-8 text-[#536a7b] dark:text-slate-300">
                                ما سال 1390 با یک باور ساده شروع کردیم: امنیت حق همه است، نه یک کالای لوکس.
                                امروز رایان نوین هم فروشگاه تخصصی است، هم مجری پروژه‌های بزرگ صنعتی و سازمانی و هم تیم پشتیبانی که بعد از فروش تنها‌تان نمی‌گذارد.
                            </p>
                            <ul className="mt-7 space-y-4">
                                {["گارانتی کتبی و فاکتور رسمی برای همه کالاها", "طراحی نقشه جانمایی دوربین قبل از خرید، کاملا رایگان", "نصب تمیز، استاندارد و با کابل‌کشی حرفه‌ای", "آموزش و انتقال تصویر روی موبایل برای همه مشتریان"].map((t) => (
                                    <li key={t} className="flex items-start gap-3 text-[15px] font-medium">
                                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#4fa9da]/15 text-[#438caf] dark:text-cyan-300"><Check className="size-4" /></span>{t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* VALUES */}
                <section className="relative bg-[#152434] py-20 text-white lg:py-28 dark:bg-[#0a1a26]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(79,169,218,0.25),transparent_40%)]" />
                    <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
                        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                            <div>
                                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-cyan-300"><Target className="size-4" /> ارزش‌های ما</span>
                                <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">چرا هزاران نفر به رایان نوین اعتماد کردند؟</h2>
                            </div>
                            <p className="max-w-md text-slate-300">ما فروشنده نیستیم؛ مشاور امنیت شما هستیم. اگر محصولی به دردتان نخورد، صادقانه می‌گوییم نخرید.</p>
                        </div>
                        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {values.map((v) => (
                                <div key={v.title} className="group rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm transition-all hover:-translate-y-2 hover:bg-white/[0.1]">
                                    <span className="grid size-12 place-items-center rounded-2xl bg-cyan-400/15 text-cyan-300"><v.icon className="size-6" /></span>
                                    <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                                    <p className="mt-2 text-sm leading-7 text-slate-300">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TIMELINE */}
                <section className="mx-auto max-w-[1100px] px-6 py-20 lg:py-28">
                    <div className="text-center">
                        <span className="text-xs font-bold tracking-[0.2em] text-[#438caf] dark:text-cyan-400">مسیر رشد</span>
                        <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">14 سال در یک نگاه</h2>
                    </div>
                    <div className="relative mt-14 space-y-8 before:absolute before:bottom-2 before:right-[19px] before:top-2 before:w-px before:bg-[#438caf]/25">
                        {timeline.map((t, i) => (
                            <div key={t.year} className="relative flex gap-6">
                                <div className="z-10 grid size-10 shrink-0 place-items-center rounded-full bg-[#152434] text-xs font-bold text-white shadow-lg dark:bg-cyan-400 dark:text-black">{i + 1}</div>
                                <div className="flex-1 rounded-3xl border border-[#152434]/10 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all hover:shadow-xl dark:border-white/10 dark:bg-white/5">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold">{t.title}</h3>
                                        <span className="rounded-full bg-[#4fa9da]/15 px-3 py-1 text-xs font-bold text-[#438caf] dark:text-cyan-300">{t.year}</span>
                                    </div>
                                    <p className="mt-2 text-sm leading-7 text-[#536a7b] dark:text-slate-300">{t.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TEAM + CTA */}
                <section className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-12">
                    <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#4a9aca] to-[#152434] p-8 text-white sm:p-10">
                            <Cpu className="size-10 opacity-80" />
                            <h3 className="mt-6 text-3xl font-semibold leading-snug">برای خانه، فروشگاه یا کارخانه‌تان نیاز به مشاوره دارید؟</h3>
                            <p className="mt-3 text-sm leading-7 text-white/80">کارشناسان ما رایگان نقشه، تعداد دوربین و هزینه دقیق را برایتان مشخص می‌کنند.</p>
                            <div className="mt-8 flex flex-col gap-3">
                                <a href="tel:02100000000" className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#152434]"><Phone className="size-4" /> 021-00000000</a>
                                <a href="#" className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold"><MapPin className="size-4" /> آدرس فروشگاه مرکزی</a>
                            </div>
                        </div>
                        <div className="rounded-[2rem] border border-[#152434]/10 bg-white/70 p-8 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 sm:p-10">
                            <div className="flex items-center gap-3"><Users className="text-[#438caf] dark:text-cyan-300" /><h3 className="text-2xl font-bold">تیم اصلی رایان نوین</h3></div>
                            <div className="mt-8 grid gap-6 sm:grid-cols-3">
                                {team.map((m) => (
                                    <div key={m.name} className="text-center">
                                        <img src={m.img} alt={m.name} className="mx-auto size-24 rounded-full border-4 border-[#e8edf1] object-cover shadow-lg dark:border-white/10" />
                                        <div className="mt-3 text-[15px] font-bold">{m.name}</div>
                                        <div className="text-xs text-[#657a89] dark:text-slate-400">{m.role}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 flex flex-wrap gap-3 border-t border-[#152434]/10 pt-6 text-xs dark:border-white/10">
                                <span className="rounded-full bg-emerald-500/10 px-3 py-1.5 font-bold text-emerald-600">✓ ضمانت اصالت کالا</span>
                                <span className="rounded-full bg-sky-500/10 px-3 py-1.5 font-bold text-sky-600">✓ فاکتور رسمی</span>
                                <span className="rounded-full bg-amber-500/10 px-3 py-1.5 font-bold text-amber-600">✓ 7 روز مهلت تست</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </HomeLayout>
    );
}