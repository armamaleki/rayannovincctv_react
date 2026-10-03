import { Head } from '@inertiajs/react';
import HomeLayout from "@/layouts/home/home-layout";
import { useState, useMemo } from "react";
import { Search, ChevronDown, MessageCircle, Phone, Headset, Package, Wrench, ShieldCheck, CreditCard, Camera, Sparkles, ArrowLeft } from "lucide-react";

const categories = [
  { id: "all", label: "همه", icon: Sparkles },
  { id: "buy", label: "خرید و سفارش", icon: Package },
  { id: "install", label: "نصب و راه‌اندازی", icon: Wrench },
  { id: "tech", label: "فنی و انتقال تصویر", icon: Camera },
  { id: "warranty", label: "گارانتی و مرجوعی", icon: ShieldCheck },
  { id: "pay", label: "پرداخت و ارسال", icon: CreditCard },
];

const faqs = [
  { cat: "buy", q: "از کجا مطمئن شوم دوربین اصلی است؟", a: "همه کالاهای رایان نوین با گارانتی رسمی، هولوگرام شرکت واردکننده و فاکتور رسمی عرضه می‌شوند. سریال دستگاه را می‌توانید در سایت برند (هایک‌ویژن، داهوا و...) استعلام کنید. کالای فیک و ریفر هم در فروشگاه ما نداریم." },
  { cat: "buy", q: "برای خانه چند دوربین لازم دارم؟", a: "برای یک آپارتمان معمولی 2 تا 4 دوربین کافی است: ورودی، پذیرایی/راهرو و پارکینگ. برای ویلا معمولا 4 تا 8 دوربین. بهترین کار این است که عکس پلان یا فیلم از محل بفرستید تا کارشناس ما رایگان جانمایی کند." },
  { cat: "buy", q: "دوربین بی‌سیم بهتر است یا سیمی؟", a: "اگر برق و کابل‌کشی ممکن است، سیمی (تحت شبکه یا AHD) همیشه پایدارتر و باکیفیت‌تر است. دوربین بی‌سیم وای‌فای برای جاهایی که کابل‌کشی سخت است عالی است ولی به اینترنت و برق پایدار نیاز دارد." },
  { cat: "install", q: "هزینه نصب چقدر است؟", a: "نصب هر دوربین با کابل‌کشی استاندارد، داکت، سوکت و تنظیمات کامل معمولا بین 800 هزار تا 1.5 میلیون تومان است (بسته به متراژ کابل و سختی کار). بازدید و برآورد دقیق در تهران رایگان است." },
  { cat: "install", q: "نصب در شهرستان هم دارید؟", a: "بله. در تهران تیم خودمان نصب می‌کند و در شهرستان‌ها از طریق 40+ نصاب تاییدشده رایان نوین با همان گارانتی نصب و آموزش. هزینه اعزام را قبل از کار شفاف اعلام می‌کنیم." },
  { cat: "install", q: "نصب چقدر طول می‌کشد؟", a: "یک سیستم 4 دوربینه معمولا در یک روز (4 تا 6 ساعت) نصب و تحویل داده می‌شود. پروژه‌های 16 دوربین به بالا 1 تا 3 روز زمان می‌برد." },
  { cat: "tech", q: "انتقال تصویر روی موبایل چطور کار می‌کند؟", a: "همه دستگاه‌های جدید ما P2P و ابری هستند؛ بدون IP ثابت، فقط با اسکن QR کد دستگاه را به گوشی وصل می‌کنیم. هم روی اینترنت ایران و هم اینترنت خارج جواب می‌دهد. فعال‌سازی و آموزش آن رایگان است." },
  { cat: "tech", q: "اگر برق یا اینترنت قطع شود چه می‌شود؟", a: "ضبط روی هارد داخل دستگاه ادامه پیدا می‌کند (با UPS تا چند ساعت). فقط مشاهده از راه دور تا وصل شدن اینترنت قطع می‌شود. پیشنهاد می‌کنیم برای محل‌های حساس یک UPS کوچک بگیرید." },
  { cat: "tech", q: "هارد چند روز ضبط نگه می‌دارد؟", a: "با هارد 1 ترابایت و 4 دوربین 2 مگاپیکسلی حدود 10 تا 15 روز ضبط 24 ساعته دارید. با تشخیص حرکت (Motion) این زمان 2 تا 3 برابر می‌شود. موقع خرید، ظرفیت دقیق را حساب می‌کنیم." },
  { cat: "tech", q: "دید در شب دوربین‌ها چقدر است؟", a: "دوربین‌های معمولی 20 تا 30 متر دید در شب مادون قرمز دارند. مدل‌های ColorVu هایک‌ویژن حتی در تاریکی تصویر رنگی می‌دهند. برای فضای باز بزرگ، مدل با IR قوی‌تر پیشنهاد می‌دهیم." },
  { cat: "warranty", q: "گارانتی محصولات چند ماه است؟", a: "دوربین و NVR/DVR برندهای اصلی 24 ماه (2 سال) گارانتی تعویض و تعمیر دارند. هارد 24 ماه، آداپتور و لوازم جانبی 12 ماه. همه با کارت گارانتی و ثبت سریال." },
  { cat: "warranty", q: "شرایط 7 روز مهلت تست چیست؟", a: "تا 7 روز بعد از تحویل، اگر دستگاه ایراد فنی داشت یا با توضیحات سایت مغایرت داشت، بدون قید و شرط تعویض یا مرجوع می‌شود. فقط بسته‌بندی و لوازم کامل باشد." },
  { cat: "pay", q: "امکان خرید اقساطی هست؟", a: "بله، با اسنپ‌پی و دیجی‌پی تا 4 قسط بدون بهره، و با چک یا قرارداد برای پروژه‌های سازمانی با پیش‌پرداخت. برای مبالغ بالا با فروش سازمانی صحبت کنید." },
  { cat: "pay", q: "ارسال به شهرستان چقدر طول می‌کشد؟", a: "سفارش‌های قبل از ساعت 14 همان روز با تیپاکس/چاپار ارسال می‌شود. تهران 1 روزه، مراکز استان 2 تا 3 روزه. هزینه ارسال بالای 5 میلیون تومان رایگان است." },
];

export default function FAQPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [open, setOpen] = useState(0);

  const filtered = useMemo(() => {
    return faqs.filter((f) => {
      const matchCat = cat === "all" || f.cat === cat;
      const matchQ = !query || f.q.includes(query) || f.a.includes(query);
      return matchCat && matchQ;
    });
  }, [query, cat]);

  return (
    <HomeLayout>
      <Head title="سوالات متداول | رایان نوین" />
      <main dir="rtl" className="aegis-site min-h-screen overflow-hidden bg-[#e8edf1] text-[#152434] dark:bg-[#07111a] dark:text-white">

        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(151,205,235,0.7),transparent_45%),linear-gradient(135deg,#eef2f4_0%,#d9e3e9_55%,#bad0dd_100%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(28,105,140,0.4),transparent_45%),linear-gradient(135deg,#0b1822_0%,#0d202d_55%,#102d3c_100%)]" />
          <div className="mx-auto max-w-4xl px-6 pb-10 pt-14 text-center lg:pt-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#67a5c7]/35 bg-white/45 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#347ca7] backdrop-blur-sm dark:border-cyan-300/20 dark:bg-white/5 dark:text-cyan-300">
              <span className="size-1.5 rounded-full bg-[#4fa9da]" />
              مرکز راهنما — {faqs.length} پاسخ آماده
            </div>
            <h1 className="text-5xl font-semibold leading-[1.05] sm:text-6xl">
              سوالت را بپرس،
              <span className="text-[#438caf] dark:text-cyan-400"> جوابش اینجاست.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg leading-8 text-[#536a7b] dark:text-slate-300">
              قبل از تماس، اینجا را بگرد؛ 90٪ سوال‌ها را همین‌جا جواب داده‌ایم.
            </p>

            {/* SEARCH */}
            <div className="relative mx-auto mt-8 max-w-xl">
              <Search className="absolute right-5 top-1/2 size-5 -translate-y-1/2 text-[#6a7e8d]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو... مثلا: انتقال تصویر، گارانتی، نصب"
                className="w-full rounded-full border border-white/80 bg-white/80 py-4 pl-6 pr-13 text-[15px] shadow-xl shadow-[#477186]/10 outline-none backdrop-blur-md transition focus:border-[#4a9aca] focus:ring-4 focus:ring-[#4a9aca]/15 dark:border-white/10 dark:bg-[#0b1b26]/90"
                style={{ paddingRight: "3.2rem" }}
              />
              {query && (
                <button onClick={() => setQuery("")} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/5 px-3 py-1 text-xs font-bold">پاک کن</button>
              )}
            </div>

            {/* CATS */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCat(c.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-bold transition-all ${cat === c.id ? "bg-[#152434] text-white shadow-lg dark:bg-cyan-400 dark:text-black" : "border border-[#152434]/10 bg-white/60 text-[#536a7b] hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300"}`}
                >
                  <c.icon className="size-4" />{c.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* LIST */}
        <section className="mx-auto max-w-3xl px-6 pb-20">
          <div className="mb-4 text-sm text-[#6a7e8d] dark:text-slate-400">
            {filtered.length} نتیجه {query && <>برای <b>«{query}»</b></>}
          </div>
          <div className="space-y-3">
            {filtered.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={`overflow-hidden rounded-2xl border backdrop-blur-sm transition-all ${isOpen ? "border-[#4a9aca]/40 bg-white shadow-xl shadow-[#4a9aca]/10 dark:bg-white/[0.08]" : "border-[#152434]/10 bg-white/65 hover:bg-white/90 dark:border-white/10 dark:bg-white/5"}`}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center gap-4 p-5 text-right">
                    <span className={`grid size-9 shrink-0 place-items-center rounded-xl font-bold transition ${isOpen ? "bg-[#152434] text-white dark:bg-cyan-400 dark:text-black" : "bg-[#4fa9da]/12 text-[#438caf] dark:text-cyan-300"}`}>
                      {isOpen ? "−" : "+"}
                    </span>
                    <span className="flex-1 text-[15px] font-bold leading-7">{f.q}</span>
                    <ChevronDown className={`size-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 pr-[4.2rem]">
                      <p className="text-sm leading-8 text-[#536a7b] dark:text-slate-300">{f.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
            {filtered.length === 0 && (
              <div className="rounded-3xl border border-dashed border-[#152434]/20 p-12 text-center dark:border-white/15">
                <div className="mx-auto grid size-14 place-items-center rounded-full bg-[#4fa9da]/12 text-[#438caf]"><Search className="size-6" /></div>
                <h3 className="mt-4 font-bold">چیزی پیدا نشد</h3>
                <p className="mt-2 text-sm text-[#657a89]">عبارت دیگری را امتحان کن یا مستقیم از ما بپرس.</p>
              </div>
            )}
          </div>

          {/* STILL NEED HELP */}
          <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#152434] p-8 text-white sm:p-10 dark:bg-[#0a1a26]">
            <div className="flex flex-col items-center gap-6 text-center">
              <span className="grid size-14 place-items-center rounded-2xl bg-cyan-400/15 text-cyan-300"><Headset className="size-7" /></span>
              <div>
                <h3 className="text-2xl font-bold">هنوز جوابت را نگرفتی؟</h3>
                <p className="mt-2 text-sm text-slate-300">کارشناس ما کمتر از 2 ساعت جواب می‌دهد — رایگان.</p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a href="/contact" className="flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-bold text-black transition hover:-translate-y-0.5">
                  <MessageCircle className="size-4" /> پرسیدن از کارشناس
                </a>
                <a href="tel:02191000000" dir="ltr" className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold">
                  <Phone className="size-4" /> 021-91000000
                </a>
              </div>
            </div>
          </div>

          <a href="/contact" className="mt-6 flex items-center justify-center gap-2 text-sm font-bold text-[#438caf] dark:text-cyan-300">
            رفتن به صفحه تماس با ما <ArrowLeft className="size-4" />
          </a>
        </section>

      </main>
    </HomeLayout>
  );
}