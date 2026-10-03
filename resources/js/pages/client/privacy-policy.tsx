import { Head } from '@inertiajs/react';
import HomeLayout from "@/layouts/home/home-layout";
import { ShieldCheck, Lock, Eye, Database, Cookie, Share2, Baby, RefreshCw, Phone, Mail, FileText, ChevronLeft, Check } from "lucide-react";

const sections = [
  { id: "collect", icon: Database, title: "۱. چه اطلاعاتی جمع می‌کنیم", text: "فقط چیزی که برای ارائه خدمت لازم است: نام و موبایل شما موقع ثبت سفارش یا درخواست بازدید، آدرس برای ارسال و نصب، و تاریخچه سفارش‌ها. اطلاعات حساس بانکی (مثل رمز کارت) هرگز در سرور ما ذخیره نمی‌شود؛ پرداخت در درگاه امن بانکی انجام می‌شود." },
  { id: "use", icon: Eye, title: "۲. اطلاعات را چطور استفاده می‌کنیم", text: "برای ثبت و تحویل سفارش، هماهنگی نصب و بازدید، فعال‌سازی گارانتی، پشتیبانی فنی و در صورت رضایت شما، اطلاع‌رسانی تخفیف‌ها. هیچ‌وقت برای مقاصد نامرتبط یا فروش به دیگران استفاده نمی‌شود." },
  { id: "share", icon: Share2, title: "۳. با چه کسی به اشتراک می‌گذاریم", text: "فقط با حلقه اجرای خدمت: شرکت حمل‌ونقل (نام، تلفن و آدرس برای ارسال)، تکنسین نصب (برای هماهنگی بازدید) و درگاه پرداخت. هیچ اطلاعاتی را نمی‌فروشیم و به هیچ پلتفرم تبلیغاتی خارجی نمی‌دهیم." },
  { id: "security", icon: Lock, title: "۴. امنیت و نگهداری", text: "ارتباط سایت با SSL رمزنگاری می‌شود، دسترسی به پنل مدیریت محدود و لاگ‌برداری شده است، و بکاپ منظم داریم. تصاویر دوربین‌های شما (انتقال تصویر و بازپخش) روی سرور ما ذخیره نمی‌شود و کاملا در اختیار خودتان است." },
  { id: "cookie", icon: Cookie, title: "۵. کوکی‌ها", text: "برای سبد خرید، ورود به حساب و تحلیل ناشناس بازدید (مثل گوگل آنالیتیکس) از کوکی استفاده می‌کنیم. می‌توانید کوکی را در مرورگر ببندید؛ فقط ممکن است ورود به حساب و سبد خرید درست کار نکند." },
  { id: "rights", icon: ShieldCheck, title: "۶. حقوق شما", text: "هر وقت بخواهید می‌توانید: اطلاعات‌تان را ببینید و اصلاح کنید، عضویت پیامکی را لغو کنید، حساب‌تان را حذف کنید یا بخواهید داده‌تان پاک شود. کافی است به پشتیبانی پیام بدهید؛ حداکثر ظرف ۷۲ ساعت کاری انجام می‌شود." },
  { id: "children", icon: Baby, title: "۷. حریم کودکان", text: "خدمات ما مخصوص بزرگسالان و کسب‌وکار است. آگاهانه از افراد زیر ۱۸ سال اطلاعات نمی‌گیریم. اگر چنین موردی ببینیم، فورا حذف می‌کنیم." },
  { id: "changes", icon: RefreshCw, title: "۸. تغییرات این سیاست", text: "اگر این متن تغییر مهمی کند، ۷ روز قبل در همین صفحه با تاریخ جدید اعلام می‌کنیم و برای تغییرات مهم با پیامک یا ایمیل خبر می‌دهیم. ادامه استفاده از سایت یعنی پذیرش نسخه جدید." },
];

const promises = [
  "بدون فروش اطلاعات به هیچ‌کس",
  "بدون اسپم و تماس تبلیغاتی آزاردهنده",
  "پرداخت امن در درگاه بانکی",
  "امکان حذف کامل داده با یک پیام",
];

export default function PrivacyPolicy() {
  return (
    <HomeLayout>
      <Head title="حریم خصوصی | رایان نوین" />
      <main dir="rtl" className="aegis-site min-h-screen overflow-hidden bg-[#e8edf1] text-[#152434] dark:bg-[#07111a] dark:text-white">

        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(151,205,235,0.8),transparent_31%),linear-gradient(135deg,#eef2f4_0%,#d9e3e9_52%,#bad0dd_100%)] dark:bg-[radial-gradient(circle_at_78%_18%,rgba(28,105,140,0.35),transparent_31%),linear-gradient(135deg,#0b1822_0%,#0d202d_52%,#102d3c_100%)]" />
          <div className="mx-auto max-w-4xl px-6 pb-10 pt-14 text-center lg:pt-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#67a5c7]/35 bg-white/45 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-[#347ca7] backdrop-blur-sm dark:border-cyan-300/20 dark:bg-white/5 dark:text-cyan-300">
              <span className="size-1.5 rounded-full bg-[#4fa9da]" />
              آخرین به‌روزرسانی: ۱ مهر ۱۴۰۵
            </div>
            <span className="mx-auto grid size-16 place-items-center rounded-3xl bg-[#152434] text-white shadow-xl dark:bg-cyan-400 dark:text-black">
              <ShieldCheck className="size-8" />
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.1] sm:text-6xl">
              حریم خصوصی شما،
              <span className="text-[#438caf] dark:text-cyan-400"> خط قرمز ماست.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl leading-8 text-[#536a7b] dark:text-slate-300">
              ما دوربین می‌فروشیم تا از شما محافظت شود؛ نه اینکه خودمان ناقض حریم‌تان باشیم.
              این صفحه به زبان ساده می‌گوید چه داده‌ای می‌گیریم، چرا، و چه حق‌هایی دارید.
            </p>
            <div className="mx-auto mt-7 flex max-w-lg flex-wrap justify-center gap-2">
              {promises.map((p) => (
                <span key={p} className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                  <Check className="size-3.5" />{p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="mx-auto max-w-[1200px] px-6 pb-20 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">

            {/* SIDEBAR */}
            <aside className="h-fit rounded-[1.8rem] border border-white/80 bg-white/70 p-6 backdrop-blur-md lg:sticky lg:top-6 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-2 font-bold"><FileText className="size-5 text-[#438caf] dark:text-cyan-300" /> فهرست سریع</div>
              <nav className="mt-4 space-y-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[13px] font-medium text-[#536a7b] transition hover:bg-[#4fa9da]/10 hover:text-[#152434] dark:text-slate-300 dark:hover:text-white">
                    {s.title}<ChevronLeft className="size-4 opacity-50" />
                  </a>
                ))}
              </nav>
              <div className="mt-6 rounded-2xl bg-[#152434] p-5 text-white dark:bg-black/40">
                <div className="text-sm font-bold">سوالی درباره داده‌تان دارید؟</div>
                <p className="mt-1 text-xs leading-6 text-slate-300">درخواست مشاهده یا حذف اطلاعات، بدون فرم‌بازی.</p>
                <a href="/contact" className="mt-3 block rounded-full bg-cyan-400 py-2.5 text-center text-[13px] font-bold text-black">گفت‌وگو با پشتیبانی</a>
              </div>
            </aside>

            {/* ARTICLES */}
            <div className="space-y-4">
              {/* INTRO CARD */}
              <div className="rounded-[1.8rem] border border-white/80 bg-white/70 p-7 backdrop-blur-md sm:p-9 dark:border-white/10 dark:bg-white/5">
                <h2 className="text-xl font-bold">این سیاست برای چه کسانی است؟</h2>
                <p className="mt-3 text-[15px] leading-8 text-[#536a7b] dark:text-slate-300">
                  برای همه بازدیدکنندگان سایت <b dir="ltr">rayannovincctv.com</b>، خریداران فروشگاه آنلاین و
                  مشتریان نصب و پروژه. مسئول این داده‌ها شرکت رایان نوین است و راه تماسش پایین همین صفحه آمده.
                  مبنای ما ساده است: <b>حداقل داده، حداکثر شفافیت.</b>
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    ["ذخیره امن", "رمزنگاری + دسترسی محدود"],
                    ["بدون فروش داده", "هرگز، تحت هیچ شرایطی"],
                    ["کنترل با شما", "مشاهده، اصلاح و حذف"],
                  ].map((x) => (
                    <div key={x[0]} className="rounded-2xl bg-[#e8edf1]/70 p-4 text-center dark:bg-black/30">
                      <div className="text-sm font-bold">{x[0]}</div>
                      <div className="mt-1 text-xs text-[#657a89] dark:text-slate-400">{x[1]}</div>
                    </div>
                  ))}
                </div>
              </div>

              {sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-6 rounded-[1.8rem] border border-[#152434]/10 bg-white/70 p-7 backdrop-blur-sm transition hover:shadow-lg sm:p-8 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-2xl bg-[#152434] text-white dark:bg-cyan-400 dark:text-black"><s.icon className="size-5" /></span>
                    <h2 className="text-lg font-bold">{s.title}</h2>
                  </div>
                  <p className="mt-4 text-[15px] leading-8 text-[#536a7b] dark:text-slate-300">{s.text}</p>
                </article>
              ))}

              {/* RETENTION */}
              <div className="rounded-[1.8rem] bg-[#152434] p-7 text-white sm:p-9 dark:bg-[#0a1a26]">
                <h2 className="text-lg font-bold">مدت نگهداری داده‌ها</h2>
                <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/5 p-4"><div className="font-bold text-cyan-300">سفارش‌ها و فاکتورها</div><div className="mt-1 leading-7 text-slate-300">تا ۵ سال (الزام مالیاتی و گارانتی)</div></div>
                  <div className="rounded-2xl bg-white/5 p-4"><div className="font-bold text-cyan-300">درخواست‌های مشاوره</div><div className="mt-1 leading-7 text-slate-300">تا ۱ سال، بعد ناشناس‌سازی</div></div>
                  <div className="rounded-2xl bg-white/5 p-4"><div className="font-bold text-cyan-300">لاگ امنیتی سایت</div><div className="mt-1 leading-7 text-slate-300">حداکثر ۶ ماه</div></div>
                </div>
              </div>

              {/* CONTACT */}
              <div className="flex flex-col items-center justify-between gap-5 rounded-[1.8rem] border border-white/80 bg-white/70 p-7 backdrop-blur-md sm:flex-row dark:border-white/10 dark:bg-white/5">
                <div>
                  <h3 className="font-bold">مسئول حریم خصوصی رایان نوین</h3>
                  <div className="mt-2 flex flex-col gap-1.5 text-sm text-[#536a7b] dark:text-slate-300">
                    <span className="flex items-center gap-2"><Mail className="size-4" /><span dir="ltr">privacy@rayannovincctv.com</span></span>
                    <span className="flex items-center gap-2"><Phone className="size-4" /><span dir="ltr">021-91000000</span></span>
                  </div>
                </div>
                <a href="/contact" className="rounded-full bg-[#152434] px-7 py-3.5 text-sm font-bold text-white dark:bg-cyan-400 dark:text-black">ثبت درخواست حریم خصوصی</a>
              </div>

            </div>
          </div>
        </section>

      </main>
    </HomeLayout>
  );
}