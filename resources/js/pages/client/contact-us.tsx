import { Head } from '@inertiajs/react';
import HomeLayout from "@/layouts/home/home-layout";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Headset, MessageCircle, Instagram, Linkedin, ChevronDown, CheckCircle2, Building2, Wrench, ShoppingCart } from "lucide-react";

const contactCards = [
    {
        icon: Phone,
        title: "تلفن فروش و مشاوره",
        value: "021-91000000",
        sub: "شنبه تا پنجشنبه 9 تا 18",
        action: "تماس بگیرید",
        href: "tel:02191000000",
    },
    {
        icon: Headset,
        title: "پشتیبانی فنی",
        value: "021-91000001",
        sub: "پاسخ‌گویی در کمتر از 2 ساعت",
        action: "درخواست پشتیبانی",
        href: "#form",
    },
    {
        icon: MessageCircle,
        title: "واتساپ و تلگرام",
        value: "09120000000",
        sub: "ارسال عکس محل برای مشاوره سریع",
        action: "چت کنید",
        href: "#form",
    },
];

const departments = [
    { icon: ShoppingCart, title: "فروش", desc: "مشاوره خرید، استعلام قیمت و ثبت سفارش", phone: "داخلی 1" },
    { icon: Wrench, title: "نصب و خدمات فنی", desc: "هماهنگی نصب، تعمیر و گارانتی", phone: "داخلی 2" },
    { icon: Building2, title: "پروژه‌های سازمانی", desc: "کارخانه، فروشگاه زنجیره‌ای و ارگان‌ها", phone: "داخلی 3" },
];

const faqs = [
    { q: "چطور برای نصب اعزام کارشناس بگیرم؟", a: "کافی است فرم روبه‌رو را پر کنید یا با شماره فروش تماس بگیرید. کارشناس ما برای بازدید و ارائه نقشه و پیش‌فاکتور رایگان هماهنگ می‌کند." },
    { q: "آیا خارج از تهران هم نصب دارید؟", a: "بله. در تهران نصب مستقیم توسط تیم خودمان انجام می‌شود و در شهرستان‌ها از طریق نصاب‌های تاییدشده رایان نوین با گارانتی نصب." },
    { q: "انتقال تصویر روی موبایل رایگان است؟", a: "بله، برای همه مشتریان فعال‌سازی انتقال تصویر و آموزش کامل آن کاملا رایگان انجام می‌شود." },
];

export default function ContactUs() {
    const [sent, setSent] = useState(false);
    const [open, setOpen] = useState(0);

    return (
        <HomeLayout>
            <Head title="تماس با ما | رایان نوین" />
            <main dir="rtl" className="aegis-site min-h-screen overflow-hidden bg-[#e8edf1] text-[#152434] dark:bg-[#07111a] dark:text-white">

                {/* HERO */}
                <section className="relative isolate overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(151,205,235,0.8),transparent_31%),linear-gradient(135deg,#eef2f4_0%,#d9e3e9_52%,#bad0dd_100%)] dark:bg-[radial-gradient(circle_at_78%_18%,rgba(28,105,140,0.35),transparent_31%),linear-gradient(135deg,#0b1822_0%,#0d202d_52%,#102d3c_100%)]" />
                    <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-14 lg:px-12 lg:pt-20">
                        <div className="mx-auto max-w-2xl text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#67a5c7]/35 bg-white/45 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#347ca7] backdrop-blur-sm dark:border-cyan-300/20 dark:bg-white/5 dark:text-cyan-300">
                                <span className="size-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.16)]" />
                                آنلاین هستیم — همین حالا جواب می‌دهیم
                            </div>
                            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
                                حرف بزنیم؟
                                <span className="text-[#438caf] dark:text-cyan-400"> ما گوش می‌دهیم.</span>
                            </h1>
                            <p className="mx-auto mt-5 max-w-lg leading-8 text-[#536a7b] dark:text-slate-300">
                                برای مشاوره خرید، استعلام نصب یا پیگیری گارانتی؛ فرم را پر کنید یا مستقیم زنگ بزنید. میانگین زمان پاسخ‌گویی ما کمتر از 2 ساعت است.
                            </p>
                        </div>

                        {/* TOP CARDS */}
                        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
                            {contactCards.map((c) => (
                                <a key={c.title} href={c.href} className="group rounded-[1.6rem] border border-white/80 bg-white/70 p-6 shadow-xl shadow-[#477186]/10 backdrop-blur-md transition-all hover:-translate-y-1.5 hover:shadow-2xl dark:border-white/10 dark:bg-[#0b1b26]/80">
                                    <span className="grid size-12 place-items-center rounded-2xl bg-[#152434] text-white transition-colors group-hover:bg-[#4a9aca] dark:bg-cyan-400 dark:text-black"><c.icon className="size-6" /></span>
                                    <div className="mt-4 text-[13px] text-[#657a89] dark:text-slate-400">{c.title}</div>
                                    <div dir="ltr" className="mt-1 text-right text-2xl font-bold tracking-tight">{c.value}</div>
                                    <div className="mt-1 text-xs text-[#6a7e8d] dark:text-slate-500">{c.sub}</div>
                                    <div className="mt-4 text-sm font-bold text-[#438caf] dark:text-cyan-300">{c.action} ←</div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FORM + INFO */}
                <section id="form" className="mx-auto max-w-[1440px] px-6 py-12 lg:px-12">
                    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">

                        {/* RIGHT: INFO PANEL */}
                        <div className="overflow-hidden rounded-[2rem] bg-[#152434] p-8 text-white sm:p-10 dark:bg-[#0a1a26]">
                            <div className="absolute-none" />
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-cyan-300"><MapPin className="size-4" /> فروشگاه مرکزی تهران</span>
                            <h2 className="mt-5 text-3xl font-semibold leading-snug">بیایید حضوری ببینید، تست کنید، بعد بخرید.</h2>

                            <div className="mt-8 space-y-5 text-[15px]">
                                <div className="flex items-start gap-4 rounded-2xl bg-white/[0.06] p-4">
                                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cyan-400/15 text-cyan-300"><MapPin className="size-5" /></span>
                                    <div><div className="font-bold">آدرس</div><div className="mt-1 leading-7 text-slate-300">تهران، خیابان جمهوری، پاساژ امجد، طبقه همکف، پلاک 12 — رایان نوین</div></div>
                                </div>
                                <div className="flex items-start gap-4 rounded-2xl bg-white/[0.06] p-4">
                                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cyan-400/15 text-cyan-300"><Clock className="size-5" /></span>
                                    <div><div className="font-bold">ساعات کاری</div><div className="mt-1 text-slate-300">شنبه تا پنجشنبه 9 تا 18 — جمعه‌ها 10 تا 14</div></div>
                                </div>
                                <div className="flex items-start gap-4 rounded-2xl bg-white/[0.06] p-4">
                                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cyan-400/15 text-cyan-300"><Mail className="size-5" /></span>
                                    <div><div className="font-bold">ایمیل</div><div dir="ltr" className="mt-1 text-right text-slate-300">info@rayannovincctv.com</div></div>
                                </div>
                            </div>

                            {/* MAP PLACEHOLDER */}
                            <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10">
                                <img src="/assets/images/map.jpg" alt="نقشه" className="h-52 w-full object-cover opacity-90" />
                                <a href="#" className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 rounded-xl bg-white/90 py-3 text-sm font-bold text-[#152434] backdrop-blur-md">مسیریابی با نقشه ←</a>
                            </div>

                            <div className="mt-6 flex items-center gap-3">
                                <a href="#" className="grid size-11 place-items-center rounded-full bg-white/10 transition hover:bg-cyan-400 hover:text-black"><Instagram className="size-5" /></a>
                                <a href="#" className="grid size-11 place-items-center rounded-full bg-white/10 transition hover:bg-cyan-400 hover:text-black"><MessageCircle className="size-5" /></a>
                                <a href="#" className="grid size-11 place-items-center rounded-full bg-white/10 transition hover:bg-cyan-400 hover:text-black"><Linkedin className="size-5" /></a>
                                <span className="mr-2 text-xs text-slate-400">@rayannovin.cctv</span>
                            </div>
                        </div>

                        {/* LEFT: FORM */}
                        <div className="rounded-[2rem] border border-white/80 bg-white/75 p-8 shadow-2xl shadow-[#477186]/15 backdrop-blur-md sm:p-10 dark:border-white/10 dark:bg-white/5">
                            {!sent ? (
                                <>
                                    <h2 className="text-2xl font-bold">فرم درخواست مشاوره رایگان</h2>
                                    <p className="mt-2 text-sm text-[#657a89] dark:text-slate-400">پر کنید؛ کارشناس ما امروز با شما تماس می‌گیرد.</p>

                                    <div className="mt-6 flex gap-2 rounded-full bg-[#e8edf1] p-1.5 text-[13px] font-bold dark:bg-black/30">
                                        {["مشاوره خرید", "درخواست نصب", "پیگیری گارانتی"].map((t, i) => (
                                            <button key={t} className={`flex-1 rounded-full py-2.5 transition ${i === 0 ? "bg-[#152434] text-white shadow dark:bg-cyan-400 dark:text-black" : "text-[#657a89] hover:text-[#152434]"}`}>{t}</button>
                                        ))}
                                    </div>

                                    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 grid gap-4 sm:grid-cols-2">
                                        <label className="block">
                                            <span className="mb-1.5 block text-[13px] font-bold">نام و نام خانوادگی *</span>
                                            <input required placeholder="مثلا علی رضایی" className="w-full rounded-2xl border border-[#152434]/10 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#4a9aca] focus:ring-4 focus:ring-[#4a9aca]/10 dark:border-white/10 dark:bg-black/20" />
                                        </label>
                                        <label className="block">
                                            <span className="mb-1.5 block text-[13px] font-bold">شماره موبایل *</span>
                                            <input required dir="ltr" placeholder="0912 000 0000" className="w-full rounded-2xl border border-[#152434]/10 bg-white px-4 py-3.5 text-right text-sm outline-none transition focus:border-[#4a9aca] focus:ring-4 focus:ring-[#4a9aca]/10 dark:border-white/10 dark:bg-black/20" />
                                        </label>
                                        <label className="block">
                                            <span className="mb-1.5 block text-[13px] font-bold">نوع محل</span>
                                            <select className="w-full rounded-2xl border border-[#152434]/10 bg-white px-4 py-3.5 text-sm outline-none dark:border-white/10 dark:bg-black/20">
                                                <option>خانه / آپارتمان</option><option>فروشگاه</option><option>دفتر کار</option><option>کارخانه / انبار</option><option>سازمان / پروژه بزرگ</option>
                                            </select>
                                        </label>
                                        <label className="block">
                                            <span className="mb-1.5 block text-[13px] font-bold">شهر</span>
                                            <input placeholder="تهران" className="w-full rounded-2xl border border-[#152434]/10 bg-white px-4 py-3.5 text-sm outline-none dark:border-white/10 dark:bg-black/20" />
                                        </label>
                                        <label className="block sm:col-span-2">
                                            <span className="mb-1.5 block text-[13px] font-bold">توضیح نیازتان</span>
                                            <textarea rows={4} placeholder="مثلا: برای یک فروشگاه 80 متری 4 تا دوربین می‌خوام با انتقال تصویر..." className="w-full resize-none rounded-2xl border border-[#152434]/10 bg-white px-4 py-3.5 text-sm leading-7 outline-none dark:border-white/10 dark:bg-black/20" />
                                        </label>
                                        <button className="flex items-center justify-center gap-2 rounded-full bg-[#152434] py-4 text-sm font-bold text-white shadow-xl transition-all hover:-translate-y-0.5 sm:col-span-2 dark:bg-cyan-400 dark:text-black">
                                            ارسال درخواست <Send className="size-4 -scale-x-100" />
                                        </button>
                                        <p className="text-center text-[11px] text-[#6a7e8d] sm:col-span-2">با ارسال فرم، قوانین حریم خصوصی را می‌پذیرید. هیچ‌وقت اسپم نمی‌فرستیم.</p>
                                    </form>
                                </>
                            ) : (
                                <div className="grid min-h-[480px] place-items-center text-center">
                                    <div>
                                        <span className="mx-auto grid size-20 place-items-center rounded-full bg-emerald-500/10 text-emerald-500"><CheckCircle2 className="size-10" /></span>
                                        <h3 className="mt-6 text-2xl font-bold">درخواست شما ثبت شد!</h3>
                                        <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#536a7b] dark:text-slate-300">کارشناس رایان نوین تا پایان امروز کاری با شما تماس می‌گیرد. کد پیگیری شما: <b dir="ltr">RN-4821</b></p>
                                        <button onClick={() => setSent(false)} className="mt-6 rounded-full border px-6 py-3 text-sm font-bold">ثبت درخواست جدید</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* DEPARTMENTS */}
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        {departments.map((d) => (
                            <div key={d.title} className="flex items-center gap-4 rounded-3xl border border-[#152434]/10 bg-white/60 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#4fa9da]/15 text-[#438caf] dark:text-cyan-300"><d.icon className="size-6" /></span>
                                <div className="flex-1"><div className="font-bold">{d.title} <span className="mr-2 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-600">{d.phone}</span></div><div className="mt-0.5 text-[13px] text-[#657a89] dark:text-slate-400">{d.desc}</div></div>
                            </div>
                        ))}
                    </div>

                    {/* FAQ */}
                    <div className="mx-auto mt-16 max-w-3xl">
                        <h2 className="text-center text-3xl font-bold">سوال‌های پرتکرار قبل از تماس</h2>
                        <div className="mt-8 space-y-3">
                            {faqs.map((f, i) => (
                                <div key={i} className={`overflow-hidden rounded-2xl border backdrop-blur-sm transition ${open === i ? "border-[#4a9aca]/40 bg-white shadow-lg dark:bg-white/10" : "border-[#152434]/10 bg-white/60 dark:border-white/10 dark:bg-white/5"}`}>
                                    <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-5 text-right font-bold">
                                        {f.q}
                                        <ChevronDown className={`size-5 shrink-0 transition-transform ${open === i ? "rotate-180 text-[#438caf]" : ""}`} />
                                    </button>
                                    {open === i && <p className="px-5 pb-5 text-sm leading-8 text-[#536a7b] dark:text-slate-300">{f.a}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </HomeLayout>
    );
}