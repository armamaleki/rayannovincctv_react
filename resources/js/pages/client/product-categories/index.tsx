import HomeLayout from "@/layouts/home/home-layout";

const categories = [
    {
        id: 1,
        title: "دوربین مداربسته",
        subtitle: "انواع دوربین‌های حفاظتی و نظارتی",
        count: 128,
        image: "/images/categories/cctv-camera.png",
        items: [
            "دوربین دام",
            "دوربین بولت",
            "دوربین PTZ",
            "دوربین تحت شبکه",
        ],
    },
    {
        id: 2,
        title: "دستگاه DVR",
        subtitle: "ضبط‌کننده‌های دیجیتال تصاویر",
        count: 42,
        image: "/images/categories/dvr.png",
        items: [
            "DVR چهار کانال",
            "DVR هشت کانال",
            "DVR شانزده کانال",
            "DVR حرفه‌ای",
        ],
    },
    {
        id: 3,
        title: "دستگاه NVR",
        subtitle: "ضبط‌کننده‌های تحت شبکه",
        count: 36,
        image: "/images/categories/nvr.png",
        items: [
            "NVR چهار کانال",
            "NVR هشت کانال",
            "NVR شانزده کانال",
            "NVR سی و دو کانال",
        ],
    },
    {
        id: 4,
        title: "تجهیزات شبکه",
        subtitle: "سوئیچ، روتر و تجهیزات انتقال",
        count: 74,
        image: "/images/categories/network.png",
        items: [
            "سوئیچ شبکه",
            "سوئیچ PoE",
            "روتر",
            "رک و متعلقات",
        ],
    },
    {
        id: 5,
        title: "دزدگیر اماکن",
        subtitle: "سیستم‌های حفاظتی و اعلام سرقت",
        count: 58,
        image: "/images/categories/alarm.png",
        items: [
            "مرکز کنترل",
            "چشمی",
            "آژیر",
            "سنسور",
        ],
    },
    {
        id: 6,
        title: "کنترل تردد",
        subtitle: "راهکارهای کنترل ورود و خروج",
        count: 31,
        image: "/images/categories/access-control.png",
        items: [
            "دستگاه حضور و غیاب",
            "اکسس کنترل",
            "کارتخوان",
            "تشخیص چهره",
        ],
    },
    {
        id: 7,
        title: "آیفون و سیستم درب",
        subtitle: "سیستم‌های ارتباطی و کنترل درب",
        count: 45,
        image: "/images/categories/intercom.png",
        items: [
            "آیفون تصویری",
            "پنل ورودی",
            "مانیتور",
            "قفل دیجیتال",
        ],
    },
    {
        id: 8,
        title: "تجهیزات جانبی",
        subtitle: "لوازم و تجهیزات مورد نیاز نصب",
        count: 96,
        image: "/images/categories/accessories.png",
        items: [
            "هارد دیسک",
            "کابل شبکه",
            "منبع تغذیه",
            "فیش و اتصالات",
        ],
    },
];

function CategoryCard({ category }) {
    return (
        <article
            className="
                group relative overflow-hidden
                rounded-[28px]
                border border-[#dfe4e8]
                bg-white
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#cbd2d8]
                hover:shadow-[0_20px_50px_rgba(20,30,40,0.10)]
            "
        >
            {/* Image */}
            <div
                className="
                    relative flex h-[250px]
                    items-center justify-center
                    overflow-hidden
                    bg-[#f3f5f6]
                "
            >
                {/* subtle background */}
                <div
                    className="
                        absolute -right-16 -top-16
                        h-40 w-40 rounded-full
                        bg-[#e7ebee]
                        transition-transform duration-500
                        group-hover:scale-125
                    "
                />

                <img
                    src={category.image}
                    alt={category.title}
                    className="
                        relative z-10
                        h-[190px] w-[80%]
                        object-contain
                        transition-transform duration-500
                        group-hover:scale-105
                    "
                />

                {/* Product count */}
                <div
                    className="
                        absolute right-4 top-4 z-20
                        rounded-full
                        bg-white
                        px-3 py-1.5
                        text-xs font-medium
                        text-[#66717c]
                        shadow-sm
                    "
                >
                    {category.count} محصول
                </div>
            </div>

            {/* Content */}
            <div className="p-6">

                <div className="mb-2 flex items-center justify-between gap-4">
                    <h2
                        className="
                            text-xl font-black
                            tracking-tight
                            text-[#172331]
                        "
                    >
                        {category.title}
                    </h2>

                    <span
                        className="
                            flex h-9 w-9 shrink-0
                            items-center justify-center
                            rounded-full
                            bg-[#172331]
                            text-white
                            transition-transform duration-300
                            group-hover:-translate-x-1
                        "
                    >
                        ←
                    </span>
                </div>

                <p className="mb-5 text-sm leading-7 text-[#7a858f]">
                    {category.subtitle}
                </p>

                {/* Sub categories */}
                <div className="grid grid-cols-2 gap-2">
                    {category.items.map((item) => (
                        <div
                            key={item}
                            className="
                                rounded-xl
                                bg-[#f6f7f8]
                                px-3 py-2.5
                                text-xs
                                text-[#58636d]
                                transition-colors
                                group-hover:bg-[#f0f2f4]
                            "
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div
                    className="
                        mt-6 flex
                        items-center justify-between
                        border-t border-[#edf0f2]
                        pt-5
                    "
                >
                    <span className="text-xs text-[#98a1a9]">
                        مشاهده دسته‌بندی
                    </span>

                    <span
                        className="
                            text-sm font-bold
                            text-[#172331]
                        "
                    >
                        مشاهده محصولات
                    </span>
                </div>

            </div>
        </article>
    );
}

export default function Index() {
    return (
        <HomeLayout>

            <main
                dir="rtl"
                className="
                    min-h-screen
                    bg-[#eef1f3]
                    text-[#172331]
                "
            >

                {/* Header */}
                <section className="mx-auto max-w-[1500px] px-6 pb-8 pt-12 lg:px-10">

                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                        <div className="max-w-3xl">

                            <div
                                className="
                                    mb-4 inline-flex
                                    items-center gap-2
                                    text-xs font-bold
                                    tracking-[0.15em]
                                    text-[#697580]
                                "
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-[#172331]" />
                                PRODUCT CATEGORIES
                            </div>

                            <h1
                                className="
                                    text-4xl font-black
                                    tracking-tight
                                    text-[#152331]
                                    md:text-5xl
                                "
                            >
                                دسته‌بندی محصولات
                            </h1>

                            <p
                                className="
                                    mt-5 max-w-2xl
                                    text-base leading-8
                                    text-[#6d7882]
                                "
                            >
                                مجموعه کامل تجهیزات حفاظتی، نظارتی و
                                شبکه رایان نوین را بر اساس دسته‌بندی
                                موردنظر خود مشاهده کنید.
                            </p>

                        </div>

                        {/* Search */}
                        <div className="w-full lg:w-[360px]">

                            <div
                                className="
                                    flex h-14
                                    items-center
                                    gap-3
                                    rounded-2xl
                                    border border-[#dce1e5]
                                    bg-white
                                    px-4
                                    shadow-sm
                                "
                            >

                                <svg
                                    className="h-5 w-5 text-[#8a949d]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <circle cx="11" cy="11" r="7" />
                                    <path d="m20 20-3.5-3.5" />
                                </svg>

                                <input
                                    type="text"
                                    placeholder="جستجو در دسته‌بندی‌ها..."
                                    className="
                                        h-full w-full
                                        bg-transparent
                                        text-sm
                                        outline-none
                                        placeholder:text-[#a1aab2]
                                    "
                                />

                            </div>

                        </div>

                    </div>

                </section>


                {/* Stats */}
                <section className="mx-auto max-w-[1500px] px-6 lg:px-10">

                    <div
                        className="
                            grid grid-cols-2
                            overflow-hidden
                            rounded-[24px]
                            border border-[#dce1e5]
                            bg-white
                            md:grid-cols-4
                        "
                    >

                        <div className="border-l border-[#edf0f2] p-6">
                            <div className="text-2xl font-black">
                                +500
                            </div>
                            <div className="mt-1 text-xs text-[#8a949d]">
                                محصول
                            </div>
                        </div>

                        <div className="border-l border-[#edf0f2] p-6">
                            <div className="text-2xl font-black">
                                8
                            </div>
                            <div className="mt-1 text-xs text-[#8a949d]">
                                دسته اصلی
                            </div>
                        </div>

                        <div className="border-l border-[#edf0f2] p-6">
                            <div className="text-2xl font-black">
                                +30
                            </div>
                            <div className="mt-1 text-xs text-[#8a949d]">
                                برند
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="text-2xl font-black">
                                24/7
                            </div>
                            <div className="mt-1 text-xs text-[#8a949d]">
                                پشتیبانی
                            </div>
                        </div>

                    </div>

                </section>


                {/* Categories */}
                <section className="mx-auto max-w-[1500px] px-6 py-10 lg:px-10">

                    <div
                        className="
                            grid gap-6
                            md:grid-cols-2
                            xl:grid-cols-3
                        "
                    >

                        {categories.map((category) => (
                            <CategoryCard
                                key={category.id}
                                category={category}
                            />
                        ))}

                    </div>

                </section>


                {/* Bottom CTA */}
                <section className="mx-auto max-w-[1500px] px-6 pb-16 lg:px-10">

                    <div
                        className="
                            flex flex-col
                            items-center
                            justify-between
                            gap-6
                            rounded-[28px]
                            bg-[#172331]
                            px-8 py-10
                            text-white
                            md:flex-row
                            md:px-12
                        "
                    >

                        <div>

                            <h2 className="text-2xl font-black">
                                برای انتخاب تجهیزات نیاز به راهنمایی دارید؟
                            </h2>

                            <p className="mt-2 text-sm text-white/50">
                                کارشناسان رایان نوین برای انتخاب تجهیزات مناسب
                                پروژه شما آماده‌اند.
                            </p>

                        </div>

                        <button
                            className="
                                shrink-0
                                rounded-2xl
                                bg-white
                                px-7 py-3.5
                                text-sm font-bold
                                text-[#172331]
                                transition-transform
                                hover:-translate-y-0.5
                            "
                        >
                            دریافت مشاوره
                        </button>

                    </div>

                </section>

            </main>

        </HomeLayout>
    );
}