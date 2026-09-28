import React, { useEffect, useRef, useState } from "react";
import {
    ArrowLeft,
    Aperture,
    Eye,
    Moon,
    Scan,
    ShieldCheck,
    Sparkles,
    Zap,
} from "lucide-react";

export default function CinematicCamera() {
    const [isDark, setIsDark] = useState(true);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();

            const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

            setMouse({
                x: Math.max(-1, Math.min(1, x)),
                y: Math.max(-1, Math.min(1, y)),
            });
        };

        const section = sectionRef.current;

        section?.addEventListener("mousemove", handleMouseMove);

        return () => {
            section?.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const cameraStyle = {
        transform: `
            perspective(1200px)
            rotateY(${mouse.x * 4}deg)
            rotateX(${mouse.y * -3}deg)
            translate3d(${mouse.x * 8}px, ${mouse.y * 5}px, 0)
        `,
    };

    return (
        <section
            ref={sectionRef}
            dir="rtl"
            className={`relative min-h-[760px] overflow-hidden transition-colors duration-700 ${
                isDark
                    ? "bg-[#05070a] text-white"
                    : "bg-[#dfe5e9] text-[#152434]"
            }`}
        >
            {/* Cinematic background */}
            <div className="absolute inset-0">
                <div
                    className={`absolute inset-0 ${
                        isDark
                            ? "bg-[radial-gradient(circle_at_50%_48%,rgba(89,49,180,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(45,111,255,0.08),transparent_30%)]"
                            : "bg-[radial-gradient(circle_at_50%_48%,rgba(115,70,220,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(45,111,255,0.08),transparent_30%)]"
                    }`}
                />

                {/* Grid */}
                <div
                    className={`absolute inset-0 opacity-[0.055] ${
                        isDark ? "text-white" : "text-slate-900"
                    }`}
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)
                        `,
                        backgroundSize: "70px 70px",
                    }}
                />

                {/* Horizon */}
                <div
                    className={`absolute left-1/2 top-[54%] h-px w-[90%] -translate-x-1/2 ${
                        isDark ? "bg-white/10" : "bg-slate-500/15"
                    }`}
                />

                {/* Floor glow */}
                <div
                    className={`absolute left-1/2 top-[60%] h-[250px] w-[700px] -translate-x-1/2 rounded-full blur-[100px] ${
                        isDark
                            ? "bg-violet-700/10"
                            : "bg-violet-500/10"
                    }`}
                />
            </div>

            {/* Top controls */}
            <div className="absolute left-0 right-0 top-0 z-30">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-7 sm:px-8">
                    <div
                        className={`flex items-center gap-3 text-xs font-bold tracking-[0.2em] ${
                            isDark ? "text-white/30" : "text-slate-500"
                        }`}
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
                        RAYANNOVIN / VISION
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsDark((value) => !value)}
                        className={`flex h-10 items-center gap-2 rounded-full border px-4 text-xs font-bold backdrop-blur-xl ${
                            isDark
                                ? "border-white/10 bg-white/[0.04] text-white/60 hover:bg-white/[0.08]"
                                : "border-slate-300 bg-white/50 text-slate-600 hover:bg-white"
                        }`}
                    >
                        <Sparkles size={14} />
                        {isDark ? "Light" : "Dark"}
                    </button>
                </div>
            </div>

            {/* Main content */}
            <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8">
                {/* Text */}
                <div className="relative z-20 w-full lg:w-[38%]">
                    <div className="mb-5 flex items-center gap-3">
                        <span
                            className={`rounded-full border px-3 py-1.5 text-[11px] font-bold ${
                                isDark
                                    ? "border-violet-400/20 bg-violet-400/5 text-violet-300"
                                    : "border-violet-300 bg-violet-100 text-violet-600"
                            }`}
                        >
                            AI SECURITY CAMERA
                        </span>

                        <span
                            className={`text-xs ${
                                isDark
                                    ? "text-white/25"
                                    : "text-slate-400"
                            }`}
                        >
                            SERIES X
                        </span>
                    </div>

                    <h2 className="max-w-xl text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
                        وقتی امنیت،
                        <br />
                        <span className="bg-gradient-to-l from-violet-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent">
                            هوشمند می‌شود.
                        </span>
                    </h2>

                    <p
                        className={`mt-6 max-w-md text-sm leading-8 sm:text-base ${
                            isDark ? "text-white/45" : "text-slate-500"
                        }`}
                    >
                        ترکیبی از تصویر باکیفیت، دید در شب، تحلیل هوشمند
                        و تشخیص دقیق برای نظارتی که فقط تصویر نمی‌بیند؛
                        اتفاقات را درک می‌کند.
                    </p>

                    {/* Specs */}
                    <div className="mt-8 grid max-w-md grid-cols-2 gap-2">
                        {[
                            {
                                icon: Eye,
                                value: "4K",
                                label: "رزولوشن تصویر",
                            },
                            {
                                icon: Moon,
                                value: "50m",
                                label: "دید در شب",
                            },
                            {
                                icon: Scan,
                                value: "AI",
                                label: "تحلیل هوشمند",
                            },
                            {
                                icon: Aperture,
                                value: "120°",
                                label: "زاویه دید",
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.label}
                                    className={`flex items-center gap-3 rounded-2xl border p-3.5 backdrop-blur-md ${
                                        isDark
                                            ? "border-white/10 bg-white/[0.035]"
                                            : "border-white/70 bg-white/50"
                                    }`}
                                >
                                    <div
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                                            isDark
                                                ? "bg-violet-500/10 text-violet-300"
                                                : "bg-violet-500/10 text-violet-600"
                                        }`}
                                    >
                                        <Icon size={17} />
                                    </div>

                                    <div>
                                        <div className="text-sm font-black">
                                            {item.value}
                                        </div>

                                        <div
                                            className={`mt-0.5 text-[10px] ${
                                                isDark
                                                    ? "text-white/30"
                                                    : "text-slate-400"
                                            }`}
                                        >
                                            {item.label}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="/products/cameras"
                            className="group inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 text-sm font-black text-slate-900 shadow-xl shadow-black/10 transition-all hover:-translate-y-0.5"
                        >
                            مشاهده دوربین‌ها

                            <ArrowLeft
                                size={17}
                                className="transition-transform group-hover:-translate-x-1"
                            />
                        </a>

                        <a
                            href="/contact"
                            className={`inline-flex items-center gap-2 rounded-2xl border px-5 py-3.5 text-sm font-bold ${
                                isDark
                                    ? "border-white/10 bg-white/[0.04] text-white/65 hover:bg-white/[0.08]"
                                    : "border-slate-300 bg-white/40 text-slate-600 hover:bg-white"
                            }`}
                        >
                            مشاوره خرید
                        </a>
                    </div>
                </div>

                {/* Camera */}
                <div className="absolute inset-y-0 left-0 right-0 hidden lg:block">
                    {/* Camera glow */}
                    <div
                        className={`absolute left-[53%] top-[51%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] ${
                            isDark
                                ? "bg-violet-600/15"
                                : "bg-violet-500/10"
                        }`}
                    />

                    {/* Camera */}
                    <div
                        className="absolute left-[56%] top-1/2 w-[620px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out"
                        style={cameraStyle}
                    >
                        <img
                            src="/images/cinematic/camera-main.png"
                            alt="دوربین مداربسته هوشمند"
                            className="relative z-10 w-full object-contain drop-shadow-[0_45px_70px_rgba(0,0,0,0.5)]"
                        />

                        {/* Scan line */}
                        <div className="pointer-events-none absolute left-[17%] right-[17%] top-[48%] z-20 h-px overflow-hidden bg-violet-400/30">
                            <div className="absolute inset-y-0 left-0 w-1/3 animate-[scan_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-violet-300 to-transparent shadow-[0_0_15px_rgba(167,139,250,0.9)]" />
                        </div>
                    </div>

                    {/* Floating info 1 */}
                    <div
                        className={`absolute left-[39%] top-[29%] z-30 rounded-2xl border px-4 py-3 backdrop-blur-xl ${
                            isDark
                                ? "border-white/10 bg-[#0a0d12]/70"
                                : "border-white/70 bg-white/70"
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                                <ShieldCheck size={17} />
                            </div>

                            <div>
                                <div className="text-xs font-black">
                                    AI Detection
                                </div>

                                <div
                                    className={`mt-1 text-[10px] ${
                                        isDark
                                            ? "text-emerald-300/60"
                                            : "text-emerald-600"
                                    }`}
                                >
                                    Active / Real-time
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating info 2 */}
                    <div
                        className={`absolute bottom-[27%] left-[35%] z-30 rounded-2xl border px-4 py-3 backdrop-blur-xl ${
                            isDark
                                ? "border-white/10 bg-[#0a0d12]/70"
                                : "border-white/70 bg-white/70"
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                <Zap size={17} />
                            </div>

                            <div>
                                <div className="text-xs font-black">
                                    Ultra HD
                                </div>

                                <div
                                    className={`mt-1 text-[10px] ${
                                        isDark
                                            ? "text-white/30"
                                            : "text-slate-400"
                                    }`}
                                >
                                    Crystal Clear Vision
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Corner markers */}
                    <div className="absolute left-[47%] top-[19%] h-10 w-10 border-l border-t border-violet-400/30" />
                    <div className="absolute bottom-[19%] left-[68%] h-10 w-10 border-b border-r border-violet-400/30" />

                    {/* Vertical data */}
                    <div
                        className={`absolute bottom-[31%] left-[73%] rotate-90 text-[9px] tracking-[0.4em] ${
                            isDark ? "text-white/15" : "text-slate-400/40"
                        }`}
                    >
                        RAYANNOVIN // OPTICAL SYSTEM
                    </div>
                </div>

                {/* Mobile camera */}
                <div className="absolute bottom-4 left-1/2 z-10 block w-[330px] -translate-x-1/2 lg:hidden">
                    <div
                        className={`absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] ${
                            isDark
                                ? "bg-violet-600/15"
                                : "bg-violet-500/10"
                        }`}
                    />

                    <img
                        src="/images/cinematic/camera-main.png"
                        alt="دوربین مداربسته هوشمند"
                        className="relative z-10 w-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)]"
                    />
                </div>
            </div>

            {/* Bottom label */}
            <div
                className={`absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-3 text-[10px] tracking-[0.25em] lg:flex ${
                    isDark ? "text-white/20" : "text-slate-400/50"
                }`}
            >
                <span className="h-px w-12 bg-current" />
                PRECISION / INTELLIGENCE / SECURITY
                <span className="h-px w-12 bg-current" />
            </div>

            <style>{`
                @keyframes scan {
                    0% {
                        transform: translateX(0);
                    }

                    50% {
                        transform: translateX(200%);
                    }

                    100% {
                        transform: translateX(0);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    *,
                    *::before,
                    *::after {
                        scroll-behavior: auto !important;
                        transition-duration: 0.01ms !important;
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                    }
                }
            `}</style>
        </section>
    );
}