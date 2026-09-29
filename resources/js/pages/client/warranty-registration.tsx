import HomeLayout from "@/layouts/home/home-layout";
import {
    BadgeCheck,
    Check,
    FileText,
    ScanLine,
    ShieldCheck,
    UserRound,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function WarrantyRegistration() {
    const [form, setForm] = useState({
        name: "",
        serial: "",
        terms: false,
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!form.terms) return;

        setLoading(true);

        // TODO: submit warranty registration

        setTimeout(() => {
            setLoading(false);
        }, 800);
    };

    return (
        <HomeLayout>
            <main
                dir="rtl"
                className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#050b14] text-white"
            >
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
                    <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
                </div>

                <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center justify-center px-4 py-16">
                    <div className="grid w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur-xl lg:grid-cols-[.9fr_1.1fr]">

                        {/* Information */}
                        <div className="relative hidden overflow-hidden border-l border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 p-10 lg:block">

                            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

                            <div className="relative flex h-full flex-col justify-between">

                                <div>
                                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                                        <ShieldCheck className="h-7 w-7 text-cyan-400" />
                                    </div>

                                    <span className="text-sm font-medium text-cyan-400">
                                        خدمات پس از فروش رایان نوین
                                    </span>

                                    <h1 className="mt-4 text-3xl font-black leading-[1.5] text-white">
                                        ثبت و استعلام
                                        <br />
                                        <span className="text-cyan-400">
                                            گارانتی محصول
                                        </span>
                                    </h1>

                                    <p className="mt-6 max-w-sm text-sm leading-8 text-slate-400">
                                        با ثبت شماره سریال محصول، می‌توانید وضعیت
                                        گارانتی محصول خود را بررسی کرده و از
                                        خدمات پس از فروش رایان نوین استفاده کنید.
                                    </p>
                                </div>

                                <div className="mt-12 space-y-4">
                                    <Feature
                                        icon={<BadgeCheck />}
                                        title="ثبت سریع گارانتی"
                                        description="فرآیند ثبت در کوتاه‌ترین زمان"
                                    />

                                    <Feature
                                        icon={<ShieldCheck />}
                                        title="پشتیبانی معتبر"
                                        description="استفاده از خدمات پس از فروش"
                                    />

                                    <Feature
                                        icon={<FileText />}
                                        title="استعلام وضعیت"
                                        description="بررسی وضعیت گارانتی محصول"
                                    />
                                </div>

                            </div>
                        </div>

                        {/* Form */}
                        <div className="p-6 sm:p-8 lg:p-10">

                            {/* Mobile heading */}
                            <div className="mb-8 lg:hidden">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                                    <ShieldCheck className="h-6 w-6 text-cyan-400" />
                                </div>

                                <h1 className="text-2xl font-black">
                                    ثبت گارانتی محصول
                                </h1>

                                <p className="mt-2 text-sm leading-7 text-slate-400">
                                    اطلاعات محصول خود را وارد کنید.
                                </p>
                            </div>

                            <div className="mb-8">
                                <p className="text-sm text-slate-400">
                                    اطلاعات مورد نیاز
                                </p>

                                <h2 className="mt-2 text-xl font-bold">
                                    مشخصات محصول و مالک
                                </h2>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >

                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-medium text-slate-300"
                                    >
                                        نام و نام خانوادگی
                                    </label>

                                    <div className="relative">
                                        <UserRound
                                            className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                                        />

                                        <input
                                            id="name"
                                            type="text"
                                            value={form.name}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    name: e.target.value,
                                                })
                                            }
                                            placeholder="به طور مثال: رایان نوین"
                                            className="
                                                h-14 w-full rounded-xl
                                                border border-white/10
                                                bg-[#111a28]
                                                pr-12 pl-4
                                                text-sm text-white
                                                outline-none
                                                transition
                                                placeholder:text-slate-600
                                                focus:border-cyan-400/50
                                                focus:ring-4
                                                focus:ring-cyan-400/10
                                            "
                                        />
                                    </div>
                                </div>

                                {/* Serial */}
                                <div>
                                    <label
                                        htmlFor="serial"
                                        className="mb-2 block text-sm font-medium text-slate-300"
                                    >
                                        شماره سریال محصول
                                    </label>

                                    <div className="relative">
                                        <ScanLine
                                            className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                                        />

                                        <input
                                            id="serial"
                                            type="text"
                                            dir="ltr"
                                            value={form.serial}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    serial: e.target.value,
                                                })
                                            }
                                            placeholder="XXX-XXX-XXX-XXX"
                                            className="
                                                h-14 w-full rounded-xl
                                                border border-white/10
                                                bg-[#111a28]
                                                pl-4 pr-12
                                                text-center
                                                font-mono text-sm
                                                tracking-wider
                                                text-white
                                                outline-none
                                                transition
                                                placeholder:text-slate-600
                                                focus:border-cyan-400/50
                                                focus:ring-4
                                                focus:ring-cyan-400/10
                                            "
                                        />
                                    </div>
                                </div>

                                {/* Terms */}
                                <label
                                    className="
                                        group flex cursor-pointer
                                        items-center gap-3
                                        rounded-xl border border-transparent
                                        p-2
                                        transition
                                        hover:border-white/5
                                        hover:bg-white/[0.03]
                                    "
                                >
                                    <input
                                        type="checkbox"
                                        checked={form.terms}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                terms: e.target.checked,
                                            })
                                        }
                                        className="peer sr-only"
                                    />

                                    <span
                                        className="
                                            flex h-6 w-6 shrink-0
                                            items-center justify-center
                                            rounded-md
                                            border border-slate-500
                                            bg-[#111a28]
                                            transition
                                            peer-checked:border-cyan-400
                                            peer-checked:bg-cyan-400
                                        "
                                    >
                                        <Check
                                            className="
                                                h-4 w-4
                                                text-[#06101b]
                                                opacity-0
                                                transition
                                                peer-checked:opacity-100
                                            "
                                        />
                                    </span>

                                    <span className="text-sm text-slate-400">
                                        قوانین و مقررات سایت را می‌پذیرم
                                    </span>
                                </label>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={!form.terms || loading}
                                    className="
                                        group relative flex h-14 w-full
                                        items-center justify-center
                                        gap-2 overflow-hidden
                                        rounded-xl
                                        bg-gradient-to-l
                                        from-cyan-500
                                        to-blue-600
                                        text-sm font-bold text-white
                                        shadow-lg shadow-cyan-500/10
                                        transition-all
                                        hover:-translate-y-0.5
                                        hover:shadow-xl
                                        hover:shadow-cyan-500/20
                                        disabled:cursor-not-allowed
                                        disabled:opacity-40
                                        disabled:hover:translate-y-0
                                    "
                                >
                                    {loading ? (
                                        <>
                                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                            در حال بررسی...
                                        </>
                                    ) : (
                                        <>
                                            <ShieldCheck className="h-5 w-5 transition-transform group-hover:scale-110" />

                                            ثبت و یا استعلام گارانتی محصول
                                        </>
                                    )}
                                </button>

                            </form>

                            {/* Bottom note */}
                            <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.025] p-4">
                                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

                                <p className="text-xs leading-6 text-slate-500">
                                    شماره سریال درج‌شده روی محصول را با دقت وارد
                                    کنید. اطلاعات ثبت‌شده برای بررسی وضعیت
                                    گارانتی استفاده خواهد شد.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </HomeLayout>
    );
}

function Feature({
                     icon,
                     title,
                     description,
                 }: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-400">
                {icon}
            </div>

            <div>
                <h3 className="text-sm font-bold text-white">
                    {title}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                    {description}
                </p>
            </div>
        </div>
    );
}