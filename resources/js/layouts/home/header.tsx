import {Link, usePage} from '@inertiajs/react'
import {ChevronDown, Download, LucideIcon, Monitor, Moon, Pencil, Search, ShoppingCart, Store, Sun} from "lucide-react";
import {Appearance, useAppearance} from '@/hooks/use-appearance';
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import client from "@/routes/client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {login} from "@/routes";



export default function HomeHeader() {
    const tabs:
        { value: Appearance; icon: LucideIcon }[] = [
        {value: 'light', icon: Sun},
        {value: 'dark', icon: Moon},
        {value: 'system', icon: Monitor},
    ];

    const {appearance, updateAppearance} = useAppearance();

    const updateAppearanceChainge = (value) => {
        const nextMode = {
            dark: 'light',
            light: 'system',
            system: 'dark',
        };

        updateAppearance(nextMode[value]);
    };
    const navItems = [
        {
            label: 'فروشگاه',
            href: client.store.index(),
            icon: <Store/>,
        },
        {
            label: 'دسته بندی محصولات',
            href: client.productCategories.index(),
            icon: <Store/>,
        },
        {
            label: 'مرکز دانلود',
            icon: <Download/>,
            children: [
                {
                    label: 'دانلود نرم افزار',
                    href: client.applications(),
                },
                {
                    label: 'دانلود لیست قیمت',
                    href: client.priceList(),
                },
            ],
        },
        {
            label: 'مقالات',
            href: client.articles.index(),
            icon: <Pencil/>,
        },
        {
            label: 'کیفیت تصویر',
            href: client.cctvCameraImageQuality(),
            icon: <Store/>,
        },
        {
            label: 'محاسبه فضای هارد',
            href: client.calculator(),
            icon: <Store/>,
        },
    ]
    const {auth} = usePage().props;

    return (
        <header
            className="relative z-50 border-b border-slate-200/70 bg-sky-100 dark:bg-gray-900 transition-all  backdrop-blur-xl">
            <div className="mx-auto flex h-20  items-center px-6 lg:px-10 xl:px-12">
                <Link
                    href="/"
                    className="group flex shrink-0 items-center gap-3"
                    aria-label="رایان نوین"
                >
                    <div
                        className="
                            flex size-11 items-center justify-center
                            rounded-2xl bg-slate-950
                            shadow-[0_8px_30px_rgba(15,23,42,0.18)]
                            transition-transform duration-300
                            group-hover:-translate-y-0.5
                        "
                    >
                        <img src="/assets/images/logo-n.png" alt=""/>
                    </div>

                    <div className="leading-none">
                        <div className="text-[17px] font-black tracking-tight text-slate-400 dark:text-gray-200">
                            رایان نوین
                        </div>
                        <div className="mt-1 text-[9px] font-medium tracking-[0.22em] text-slate-400">
                            SECURITY SYSTEMS
                        </div>
                    </div>
                </Link>
                <nav
                    className="mx-auto hidden items-center gap-1 lg:flex"
                    aria-label="Main navigation"
                >
                    {navItems.map((item) => (
                        <div key={item.label} className="relative">
                            {item.children ? (
                                <DropdownMenu dir="rtl">
                                    <DropdownMenuTrigger asChild>
                                        <button
                                            className="
                            group relative flex items-center gap-2
                            rounded-xl px-4 py-3
                            text-[14px] font-medium
                            text-slate-600
                            transition-all duration-200
                            outline-none
                            hover:bg-slate-100
                            hover:text-slate-950
                            dark:text-gray-200
                            dark:hover:bg-white/10
                            dark:hover:text-white
                        "
                                        >
                                            {item.icon && (
                                                <span
                                                    className="
                                    flex size-5 shrink-0
                                    items-center justify-center
                                    text-slate-500
                                    transition-colors duration-200
                                    group-hover:text-slate-950
                                    dark:text-gray-400
                                    dark:group-hover:text-white
                                "
                                                >
                                {item.icon}
                            </span>
                                            )}

                                            <span className="whitespace-nowrap">
                            {item.label}
                        </span>

                                            <ChevronDown
                                                className="
                                size-4 text-slate-400
                                transition-transform duration-200
                                group-data-[state=open]:rotate-180
                            "
                                            />
                                        </button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent
                                        align="start"
                                        sideOffset={6}
                                        className="
                        min-w-[210px]
                        rounded-xl
                        border-slate-200
                        bg-white/95
                        p-1.5
                        shadow-xl
                        backdrop-blur-xl
                        dark:border-white/10
                        dark:bg-slate-900/95
                    "
                                    >
                                        {item.children.map((child) => (
                                            <DropdownMenuItem
                                                key={child.href}
                                                asChild
                                                className="
                                cursor-pointer
                                rounded-lg
                                px-3 py-2.5
                                text-sm
                                text-slate-600
                                outline-none
                                focus:bg-slate-100
                                focus:text-slate-950
                                dark:text-gray-300
                                dark:focus:bg-white/10
                                dark:focus:text-white
                            "
                                            >
                                                <Link href={child.href}>
                                                    {child.label}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="
                    group relative flex items-center gap-2
                    rounded-xl px-4 py-3
                    text-[14px] font-medium
                    text-slate-600
                    transition-all duration-200
                    hover:bg-slate-100
                    hover:text-slate-950
                    dark:text-gray-200
                    dark:hover:bg-white/10
                    dark:hover:text-white
                "
                                >
                                    {item.icon && (
                                        <span
                                            className="
                            flex size-5 shrink-0
                            items-center justify-center
                            text-slate-500
                            transition-colors duration-200
                            group-hover:text-slate-950
                            dark:text-gray-400
                            dark:group-hover:text-white
                        "
                                        >
                        {item.icon}
                    </span>
                                    )}

                                    <span className="whitespace-nowrap">
                    {item.label}
                </span>
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
                <div className="hidden items-center gap-3 lg:flex">
                    {tabs.map(({value, icon: Icon}) => (
                        <Button
                            key={value}
                            variant="outline"
                            size="icon"
                            className={cn(
                                '',
                                appearance != value ? 'hidden' : '',
                            )}
                            onClick={() =>
                                updateAppearanceChainge(value)
                            }
                        >
                            <Icon className="size-6"/>
                        </Button>
                    ))}

                    {/* Search */}
                    <Link
                        href="/search"
                        aria-label="جستجو"
                        className="
                            flex size-11 items-center justify-center
                            rounded-xl border border-slate-200
                            bg-white text-slate-600
                            transition-all
                            hover:border-slate-300
                            hover:bg-slate-50
                            hover:text-slate-950
                        "
                    >
                        <Search/>
                    </Link>

                    {/* Cart */}
                    <Link
                        href="/cart"
                        className="
                            relative flex size-11 items-center justify-center
                            rounded-xl border border-slate-200
                            bg-white text-slate-600
                            transition-all
                            hover:border-slate-300
                            hover:bg-slate-50
                            hover:text-slate-950
                        "
                        aria-label="سبد خرید"
                    >
                        <ShoppingCart/>

                        <span className="
                            absolute -right-1.5 -top-1.5
                            flex size-5 items-center justify-center
                            rounded-full bg-cyan-500
                            text-[10px] font-bold text-white
                        ">
                            0
                        </span>
                    </Link>

                    {auth.user
                        ?
                        <Button
                            variant={'outline'}
                            asChild>
                            <Link
                                href={''}>
                                حساب کاربری
                            </Link>
                        </Button>
                        :
                        <Button
                            variant={'outline'}
                            asChild>
                            <Link
                                href={login()}>
                                ورود/ثبت نام
                            </Link>
                        </Button>
                    }


                </div>
            </div>
        </header>
    )
}