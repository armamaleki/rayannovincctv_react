import { Head } from '@inertiajs/react';
import HomeLayout from "@/layouts/home/home-layout";
import { useState } from "react";
import { Check, Phone, MapPin, ShieldCheck, Eye, Wrench, ChevronDown, Star, ArrowLeft, Clock, FileCheck, Video } from "lucide-react";

const pains = [
    { emoji: "🏪", title: "سرقت از مغازه", desc: "آخر شب کرکره را پایین می‌کشی ولی استرس دخل ولت نمی‌کند. بدون مدرک تصویری، پیگیری هم بی‌فایده است." },
    { emoji: "👀", title: "بی‌خبری از محل کار", desc: "وقتی نیستی نمی‌دانی پرسنل چطور برخورد می‌کنند. فقط حدس می‌زنی، نمی‌بینی." },
    { emoji: "📦", title: "ناامنی انبار و سوله", desc: "نقطه کور زیاد، نگهبان هم ۲۴ ساعته چشم ندارد. یک سرقت کوچک، ضرر چند ماهت می‌شود." },
    { emoji: "🏠", title: "نگرانی از خانه", desc: "بچه، سالمند تنها یا خانه خالی در مسافرت. وقتی بیرونی، دلت پیش خانه است." },
];

const services = [
    { tag: "منزل و آپارتمان", title: "نظارت روی خانه، از راه دور", desc: "۲ تا ۴ دوربین برای ورودی، پارکینگ و راهرو + انتقال تصویر روی موبایل.", img: "/assets/images/home-cctv.jpeg" },
    { tag: "مغازه و رستوران", title: "کنترل دخل و تردد مشتری", desc: "پوشش صندوق، ویترین و انبار کوچک + مدل صدادار، بدون خرابی دکور.", img: "/assets/images/shop-cctv.jpg" },
    { tag: "کارخانه و انبار", title: "پوشش سوله بدون نقطه کور", desc: "۸ تا ۳۲+ دوربین تحت شبکه، دید در شب قوی، رک و سوئیچ استاندارد.", img: "/assets/images/factory-cctv.jpeg" },
    { tag: "اداره و سازمان", title: "پروژه سازمانی و بانکی", desc: "فاکتور رسمی، هایک‌ویژن و داهوا اصلی، قرارداد پشتیبانی.", img: "/assets/images/office-cctv.jpg" },
];

const projects = [
    { title: "فروشگاه موبایل ونوس", loc: "یافت‌آباد", spec: "۷ دوربین هایک‌ویژن", img: "/assets/images/venus.jpg" },
    { title: "انبار آهن مرکز", loc: "چهار دانگه", spec: "۱۴ دوربین تحت شبکه", img: "/assets/images/ahan.webp" },
    { title: "بانک دی", loc: "تهران · فاکتور رسمی", spec: "۳۲ دوربین سازمانی", img: "/assets/images/day-bank.jpg" },
    { title: "ویلای لواسان", loc: "لواسان · همراه دزدگیر", spec: "۵ دوربین + دزدگیر", img: "/assets/images/vila.jpg" },
];

const faqs = [
    { q: "هزینه نصب دوربین چقدر است؟", a: "به تعداد دوربین، مدل، متراژ کابل و هارد بستگی دارد. در بازدید رایگان پیش‌فاکتور کتبی با ریز مدل‌ها می‌گیرید. حدود قیمت را در بخش پکیج‌های همین صفحه ببینید." },
    { q: "هایک‌ویژن بهتر است یا داهوا؟", a: "هر دو برند اصلی و درجه‌یک‌اند. هایک‌ویژن تنوع و خدمات پس از فروش قوی‌تری دارد، داهوا در بعضی مدل‌ها به‌صرفه‌تر است. هر دو را با گارانتی اصلی و قابل استعلام می‌دهیم." },
    { q: "انتقال تصویر روی موبایل دارید؟", a: "بله، روی همه نصب‌ها فعال می‌کنیم. هرجا باشید زنده می‌بینید و بازپخش می‌کنید. نصب اپ و آموزش کامل موقع تحویل انجام می‌شود." },
    { q: "گارانتی بعد از نصب چطور است؟", a: "جنس اصلی با گارانتی شرکتی + ضمانت اجرایی نصب. پشتیبانی تلفنی و در صورت نیاز اعزام داریم. برای سازمان‌ها قرارداد سالانه می‌بندیم." },
    { q: "نصب چقدر طول می‌کشد؟ کثیف‌کاری دارد؟", a: "منزل و مغازه همان روز (۳ تا ۶ ساعت)، کارخانه ۲ تا ۵ روز. با داکت‌کشی مرتب، بدون تخریب و تحویل تمیز." },
];

export default function InstallCCTV() {
    const [open, setOpen] = useState(0);
    return (
        <HomeLayout>
            <Head title="نصب دوربین مداربسته | رایان نوین" />
            <main dir="rtl" className="aegis-site min-h-screen overflow-hidden bg-[#e8edf1] text-[#152434] dark:bg-[#07111a] dark:text-white">

                {/* HERO */}
                <section className="relative isolate overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(151,205,235,0.8),transparent_31%),linear-gradient(135deg,#eef2f4_0%,#d9e3e9_52%,#bad0dd_100%)] dark:bg-[radial-gradient(circle_at_78%_18%,rgba(28,105,140,0.35),transparent_31%),linear-gradient(135deg,#0b1822_0%,#0d202d_52%,#102d3c_100%)]" />
                    <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 pb-14 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:pt-20">
                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#67a5c7]/35 bg-white/45 px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#347ca7] backdrop-blur-sm dark:border-cyan-300/20 dark:bg-white/5 dark:text-cyan-300">
                                <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                                بازدید و مشاوره رایگان در تهران و کرج
                            </div>
                            <h1 className="text-4xl font-semibold leading-[1.2] tracking-tight sm:text-5xl lg:text-[58px] lg:leading-[1.15]">
                                نصب اصولی دوربین مداربسته
                                <br />
                                <span className="text-[#438caf] dark:text-cyan-400">با جنس اصلی و گارانتی معتبر</span>
                            </h1>
                            <p className="mt-6 max-w-lg leading-8 text-[#536a7b] dark:text-slate-300">
                                برای منزل، مغازه، انبار و کارخانه؛ اجرا با هایک‌ویژن و داهوا اصلی، کابل‌کشی تمیز، انتقال تصویر روی موبایل + پشتیبانی واقعی بعد از نصب.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold">
                                <span className="flex items-center gap-1.5"><Check className="size-4 text-emerald-500" /> ۱۲+ سال تجربه</span>
                                <span className="flex items-center gap-1.5"><Check className="size-4 text-emerald-500" /> ۱۴۰۰+ پروژه موفق</span>
                                <span className="flex items-center gap-1.5"><Check className="size-4 text-emerald-500" /> مجری بانک‌ها و سازمان‌ها</span>
                            </div>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <a href="#form-moshavere" className="flex items-center justify-center rounded-full bg-[#152434] px-8 py-4 text-sm font-bold text-white shadow-xl transition-all hover:-translate-y-1 dark:bg-cyan-400 dark:text-black">درخواست بازدید رایگان</a>
                                <a href="tel:09902706257" className="flex items-center justify-center gap-2 rounded-full border border-[#152434]/20 bg-white/40 px-8 py-4 text-sm font-bold backdrop-blur-sm hover:bg-white/70 dark:border-white/15 dark:bg-white/5">
                                    <Phone className="size-4" /><span dir="ltr">0990 270 6257</span>
                                </a>
                            </div>
                            <p className="mt-3 text-xs text-[#6a7e8d]">کارشناس ما تا ۲ ساعت کاری تماس می‌گیرد. بدون نیاز به پرداخت.</p>
                        </div>

                        <div className="relative mx-auto w-full max-w-2xl">
                            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/30 p-2.5 shadow-2xl backdrop-blur-sm sm:rounded-[2.5rem] dark:border-white/10 dark:bg-white/5">
                                <div className="relative aspect-[16/11] overflow-hidden rounded-[1.6rem]">
                                    <img src="/assets/images/nasb-dorbin.jpg" alt="نصب دوربین مداربسته" className="size-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#152434]/50 via-transparent to-transparent" />
                                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#152434]/75 px-3 py-2 text-[11px] text-white backdrop-blur-md">
                                        <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" /> در حال نصب در تهران
                                    </div>
                                    <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-2xl bg-white/85 px-4 py-2.5 text-sm font-bold backdrop-blur-md dark:bg-black/70">
                                        <Video className="size-4 text-[#438caf]" /> کابل‌کشی تمیز، بدون تخریب
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/85 px-5 py-3.5 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#0b1b26]/90">
                                <div className="flex text-amber-400">★★★★★</div>
                                <div><div className="text-sm font-bold">۴.۸ از ۵</div><div className="text-[11px] text-slate-500">رضایت ۱۴۰۰+ مشتری نصب</div></div>
                            </div>
                        </div>
                    </div>

                    {/* TRUST BAR */}
                    <div className="mx-auto max-w-[1440px] px-6 pb-10 lg:px-12">
                        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                            {[["12+", "سال تجربه نصب و اجرا"], ["1400+", "پروژه موفق تحویل‌شده"], ["100%", "جنس اصلی با گارانتی"], ["4.8★", "امتیاز رضایت مشتریان"]].map((s) => (
                                <div key={1} className="rounded-2xl border border-white/70 bg-white/70 py-4 text-center shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                                    <div className="text-2xl font-extrabold text-[#438caf] dark:text-cyan-300">{1}</div>
                                    <div className="mt-1 text-xs font-medium text-[#657a89] dark:text-slate-400">{0}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 rounded-2xl bg-white/40 px-6 py-4 text-sm font-extrabold tracking-wide backdrop-blur-sm dark:bg-white/5">
                            <span className="rounded-full bg-[#4a9aca]/15 px-3 py-1 text-xs text-[#438caf]">عامل رسمی فروش</span>
                            <span>HIKVISION</span><span>DAHUA</span><span>TIANDY</span><span>IMOU</span>
                        </div>
                    </div>
                </section>

                {/* PAINS */}
                <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="rounded-full bg-[#4fa9da]/12 px-4 py-1.5 text-xs font-bold text-[#438caf] dark:text-cyan-300">این مشکل برای شما هم آشناست؟</span>
                        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">بدون دوربین استاندارد، همیشه یک جای کار می‌لنگد</h2>
                    </div>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {pains.map((p) => (
                            <div key={p.title} className="rounded-3xl border border-[#152434]/10 bg-white/70 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
                                <div className="grid size-12 place-items-center rounded-2xl bg-[#152434] text-2xl text-white dark:bg-cyan-400">{p.emoji}</div>
                                <h3 className="mt-4 font-bold">{p.title}</h3>
                                <p className="mt-2 text-sm leading-7 text-[#536a7b] dark:text-slate-300">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-3xl bg-[#152434] px-7 py-6 text-white lg:flex-row dark:bg-[#0a1a26]">
                        <p className="text-center text-sm leading-7 lg:text-right">هر ۴ مورد با یک بازدید کارشناسی و اجرای درست حل می‌شود. <b className="text-cyan-300">بدون تخریب، بدون سیم‌کشی شلخته.</b></p>
                        <a href="#form-moshavere" className="shrink-0 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-bold text-black">حل مشکل من ← درخواست بازدید</a>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="bg-white/50 py-16 backdrop-blur-sm dark:bg-white/[0.02]">
                    <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
                        <div className="text-center"><h2 className="text-3xl font-semibold sm:text-4xl">برای ملک شما، راه‌حل اختصاصی داریم</h2></div>
                        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {services.map((s) => (
                                <div key={s.title} className="group overflow-hidden rounded-3xl border border-[#152434]/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#0b1b26]">
                                    <div className="relative h-44 overflow-hidden">
                                        <img src={s.img} alt={s.title} className="size-full object-cover transition duration-500 group-hover:scale-105" />
                                        <span className="absolute right-3 top-3 rounded-full bg-[#152434]/85 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">{s.tag}</span>
                                    </div>
                                    <div className="p-5"><h3 className="font-bold">{s.title}</h3><p className="mt-2 text-[13px] leading-7 text-[#536a7b] dark:text-slate-300">{s.desc}</p>
                                        <a href="#form-moshavere" className="mt-3 flex items-center gap-1 text-sm font-bold text-[#438caf]">استعلام <ArrowLeft className="size-4" /></a></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY US */}
                <section className="mx-auto grid max-w-[1440px] items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:px-12">
                    <div>
                        <span className="text-xs font-bold tracking-[0.2em] text-[#438caf] dark:text-cyan-300">چرا رایان نوین؟</span>
                        <h2 className="mt-3 text-3xl font-semibold leading-snug sm:text-4xl">نصاب معمولی نیستیم،<br />مجری پروژه‌ایم</h2>
                        <div className="mt-6 space-y-3">
                            {["۱۰۰٪ جنس اصلی با گارانتی معتبر و قابل استعلام", "مجری بانک‌ها و سازمان‌ها با فاکتور رسمی", "کابل‌کشی تمیز با داکت، بدون سیم آویزون", "انتقال تصویر روی موبایل + آموزش حضوری"].map((t) => (
                                <div key={t} className="flex items-center gap-3 rounded-2xl border border-[#152434]/10 bg-white/70 p-4 text-sm font-medium backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-600"><Check className="size-4" /></span>{t}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-[2rem] bg-[#152434] p-7 text-white dark:bg-[#0a1a26]">
                        <h3 className="font-bold">فرق ما با نصاب متفرقه چیست؟</h3>
                        <div className="mt-5 space-y-2.5 text-sm">
                            {[["دوربین اصلی + گارانتی", "✔ دارد", "✘ نامشخص"], ["فاکتور رسمی و قرارداد", "✔ دارد", "✘ ندارد"], ["پشتیبانی بعد از نصب", "✔ دارد", "✘ ندارد"], ["محاسبه نقطه کور و هارد", "✔ تخصصی", "✘ حدسی"]].map((r) => (
                                <div key={1} className="grid grid-cols-[1fr_90px_90px] items-center rounded-xl bg-white/5 px-3 py-3">
                                    <span>ی</span><span className="text-center font-bold text-cyan-300">{1}</span><span className="text-center text-slate-400">{1}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS */}
                <section className="mx-auto max-w-[1440px] px-6 pb-16 lg:px-12">
                    <h2 className="text-center text-3xl font-semibold">از تماس اول تا دیدن تصویر، فقط ۴ قدم</h2>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { n: "۱", t: "ثبت درخواست", d: "فرم را پر کن یا زنگ بزن. کارشناس مرتبط تماس می‌گیرد.", b: "۲ دقیقه" },
                            { n: "۲", t: "بازدید و برآورد", d: "نقطه کورها، تعداد دوربین و متراژ کابل دقیق مشخص می‌شود.", b: "رایگان" },
                            { n: "۳", t: "پیش‌فاکتور رسمی", d: "مدل دوربین، هارد و اجرت جدا نوشته می‌شود. بدون هزینه پنهان.", b: "کتبی و شفاف" },
                            { n: "۴", t: "نصب + آموزش", d: "نصب تمیز، انتقال تصویر و آموزش + تحویل گارانتی.", b: "همان روز" },
                        ].map((s) => (
                            <div key={s.n} className="rounded-3xl border border-[#152434]/10 bg-white/70 p-6 text-center backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                                <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#152434] text-xl font-extrabold text-white dark:bg-cyan-400 dark:text-black">{s.n}</div>
                                <span className="mt-3 inline-block rounded-full bg-[#4fa9da]/12 px-3 py-1 text-[11px] font-bold text-[#438caf]">{s.b}</span>
                                <h3 className="mt-2 font-bold">{s.t}</h3><p className="mt-2 text-[13px] leading-6 text-[#536a7b] dark:text-slate-300">{s.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PORTFOLIO */}
                <section className="bg-white/50 py-16 dark:bg-white/[0.02]">
                    <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
                        <h2 className="text-3xl font-semibold">حرف نمی‌زنیم، پروژه نشان می‌دهیم</h2>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {projects.map((p) => (
                                <div key={p.title} className="overflow-hidden rounded-3xl border border-[#152434]/10 bg-white transition hover:shadow-xl dark:border-white/10 dark:bg-[#0b1b26]">
                                    <img src={p.img} alt={p.title} className="h-44 w-full object-cover" />
                                    <div className="p-5"><h3 className="text-sm font-bold">{p.title}</h3><div className="mt-1 text-xs text-[#657a89]">📍 {p.loc}</div><div className="mt-2 text-[13px] font-bold text-[#438caf]">{p.spec}</div></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PRICING */}
                <section className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12">
                    <div className="text-center"><h2 className="text-3xl font-semibold sm:text-4xl">حدود قیمت نصب چقدر می‌شود؟</h2><p className="mt-3 text-sm text-[#536a7b]">قیمت نهایی بعد از بازدید مشخص می‌شود، ولی این ۳ پکیج دست‌تان می‌آید.</p></div>
                    <div className="mt-8 grid gap-4 lg:grid-cols-3">
                        <div className="rounded-[1.8rem] border border-[#152434]/10 bg-white/70 p-7 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">اقتصادی | منزل</span>
                            <h3 className="mt-3 text-lg font-bold">پکیج ۲ دوربینه</h3>
                            <ul className="mt-4 space-y-2 text-[13px] text-[#536a7b] dark:text-slate-300">
                                <li>✓ ۲ دوربین ۲ مگاپیکسل داهوا / آیمو</li><li>✓ دستگاه ۴ کانال + هارد ۱ ترا</li><li>✓ انتقال تصویر روی موبایل</li><li>✓ نصب + داکت‌کشی تمیز</li>
                            </ul>
                            <a href="#form-moshavere" className="mt-6 block rounded-full border border-[#438caf]/30 py-3.5 text-center text-sm font-bold text-[#438caf]">استعلام این پکیج</a>
                        </div>
                        <div className="relative overflow-hidden rounded-[1.8rem] bg-[#152434] p-7 text-white shadow-2xl dark:bg-[#0a1a26]">
                            <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black">★ پرفروش | مغازه</span>
                            <h3 className="mt-3 text-lg font-bold">پکیج ۴ دوربینه صدادار</h3>
                            <ul className="mt-4 space-y-2 text-[13px] text-slate-200">
                                <li>✓ ۴ دوربین داهوا / هایک‌ویژن صدادار</li><li>✓ دستگاه + هارد ۲ ترا (بازپخش یک‌ماهه)</li><li>✓ دید در شب قوی + آموزش حضوری</li><li>✓ گارانتی معتبر + فاکتور رسمی</li>
                            </ul>
                            <a href="#form-moshavere" className="mt-6 block rounded-full bg-cyan-400 py-4 text-center text-sm font-bold text-black">می‌خوام همین رو ←</a>
                        </div>
                        <div className="rounded-[1.8rem] border border-[#152434]/10 bg-white/70 p-7 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">حرفه‌ای | کارخانه</span>
                            <h3 className="mt-3 text-lg font-bold">پکیج ۸ دوربینه به بالا</h3>
                            <ul className="mt-4 space-y-2 text-[13px] text-[#536a7b] dark:text-slate-300">
                                <li>✓ ۸ تا ۳۲+ دوربین تحت شبکه IP</li><li>✓ رک، سوئیچ POE و کابل‌کشی صنعتی</li><li>✓ طراحی نقشه + نقطه کور صفر</li><li>✓ قرارداد + پشتیبانی سالانه</li>
                            </ul>
                            <a href="#form-moshavere" className="mt-6 block rounded-full border border-[#438caf]/30 py-3.5 text-center text-sm font-bold text-[#438caf]">درخواست بازدید و برآورد</a>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS + FAQ + FORM */}
                <section className="mx-auto max-w-[1440px] px-6 pb-8 lg:px-12">
                    <div className="grid gap-4 lg:grid-cols-3">
                        {[
                            { n: "محمد کریمی", r: "سوپرمارکت · نارمک", t: "کابل‌کشی‌شان انقدر تمیز بود که به چشم نمی‌آید. انتقال تصویر را همان‌جا روی گوشیم راه انداختند." },
                            { n: "رضا احمدی", r: "انبار قطعات · شمس‌آباد", t: "آمدند بازدید، نقشه کشیدند، نقطه‌کورها را درآوردند. سه روزه با فاکتور رسمی تحویل دادند." },
                            { n: "سارا موسوی", r: "ویلا · لواسان", t: "پشتیبانی‌شان واقعی است. یک‌بار اینترنت قطع شد تلفنی راهنمایی‌ام کردند وصل شد." },
                        ].map((c) => (
                            <div key={c.n} className="rounded-3xl border border-[#152434]/10 bg-white/70 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                                <div className="text-amber-400">★★★★★</div>
                                <p className="mt-3 text-sm leading-7 text-[#536a7b] dark:text-slate-300">«{c.t}»</p>
                                <div className="mt-4 border-t border-black/5 pt-4 text-sm font-bold dark:border-white/10">{c.n}<span className="block text-xs font-normal text-[#438caf]">{c.r}</span></div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-3xl px-6 py-10">
                    <h2 className="text-center text-3xl font-semibold">قبل از تماس، جواب سوالت اینجاست</h2>
                    <div className="mt-8 space-y-3">
                        {faqs.map((f, i) => (
                            <div key={i} className={`overflow-hidden rounded-2xl border backdrop-blur-sm ${open === i ? "border-[#4a9aca]/40 bg-white shadow-lg dark:bg-white/10" : "border-[#152434]/10 bg-white/60 dark:border-white/10 dark:bg-white/5"}`}>
                                <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-3 p-5 text-right text-[15px] font-bold">
                                    {f.q}<ChevronDown className={`size-5 shrink-0 transition ${open === i ? "rotate-180" : ""}`} />
                                </button>
                                {open === i && <p className="px-5 pb-5 text-sm leading-8 text-[#536a7b] dark:text-slate-300">{f.a}</p>}
                            </div>
                        ))}
                    </div>
                </section>

                {/* LEAD FORM */}
                <section id="form-moshavere" className="mx-auto max-w-[1200px] scroll-mt-20 px-6 pb-20 lg:px-12">
                    <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
                        <div className="rounded-[2rem] bg-[#152434] p-8 text-white dark:bg-[#0a1a26]">
                            <span className="rounded-full bg-cyan-400/15 px-4 py-1.5 text-xs font-bold text-cyan-300">بازدید کاملا رایگان</span>
                            <h2 className="mt-4 text-3xl font-semibold leading-snug">تا ۲ ساعت کاری زنگ می‌زنیم</h2>
                            <ul className="mt-6 space-y-3 text-sm">
                                {["بدون پیش‌پرداخت و بدون تعهد", "برآورد دقیق تعداد دوربین و هزینه", "جواب از کارشناس نصب، نه فروشنده"].map((t) => (
                                    <li key={t} className="flex items-center gap-2"><span className="grid size-6 place-items-center rounded-full bg-cyan-400/20 text-cyan-300"><Check className="size-4" /></span>{t}</li>
                                ))}
                            </ul>
                            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                                <span className="grid size-11 place-items-center rounded-full bg-cyan-400 text-black"><Phone className="size-5" /></span>
                                <div><div className="text-xs text-slate-400">ترجیح می‌دهی خودت زنگ بزنی؟</div>
                                    <div dir="ltr" className="text-right text-lg font-extrabold text-cyan-300">0912 949 4234</div></div>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400"><Clock className="size-4" /> شنبه تا پنجشنبه ۹ تا ۱۸</div>
                        </div>
                        <div className="rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-2xl backdrop-blur-md sm:p-10 dark:border-white/10 dark:bg-white/5">
                            <h3 className="text-xl font-bold">فرم درخواست بازدید رایگان</h3>
                            <p className="mt-1 text-sm text-[#657a89]">فقط ۳۰ ثانیه طول می‌کشد. بقیه‌ش با ما.</p>
                            <form className="mt-6 grid gap-4 sm:grid-cols-2">
                                <label className="block"><span className="mb-1.5 block text-[13px] font-bold">نام و نام خانوادگی *</span><input required placeholder="مثلا علی رضایی" className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none focus:border-[#4a9aca] dark:border-white/10 dark:bg-black/20" /></label>
                                <label className="block"><span className="mb-1.5 block text-[13px] font-bold">شماره موبایل *</span><input required placeholder="0912..." className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none focus:border-[#4a9aca] dark:border-white/10 dark:bg-black/20" /></label>
                                <label className="block"><span className="mb-1.5 block text-[13px] font-bold">نوع ملک *</span>
                                    <select className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm dark:border-white/10 dark:bg-black/20"><option>منزل / ویلا</option><option>مغازه / فروشگاه</option><option>کارخانه / انبار</option><option>اداره / سازمان</option></select></label>
                                <label className="block"><span className="mb-1.5 block text-[13px] font-bold">شهر *</span>
                                    <select className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm dark:border-white/10 dark:bg-black/20"><option>تهران</option><option>کرج</option><option>شهرهای اطراف</option></select></label>
                                <label className="block sm:col-span-2"><span className="mb-1.5 block text-[13px] font-bold">توضیح کوتاه</span><textarea rows={3} placeholder="مثلا: مغازه ۸۰ متری، ۲ ورودی، پوشش صندوق..." className="w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm leading-7 dark:border-white/10 dark:bg-black/20" /></label>
                                <button className="rounded-full bg-[#152434] py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 sm:col-span-2 dark:bg-cyan-400 dark:text-black">ثبت درخواست بازدید رایگان</button>
                            </form>
                        </div>
                    </div>
                </section>

            </main>
        </HomeLayout>
    );
}