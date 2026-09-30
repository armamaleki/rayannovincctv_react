import {Link, usePage} from '@inertiajs/react';
import {
    AppleIcon,
    BadgeIcon, BadgeXIcon,
    BatteryFullIcon,
    BatteryIcon,
    BookOpen, ChartBarIncreasingIcon,
    FolderGit2, GitPullRequestIcon,
    LayoutGrid,
    ListOrdered,
    PaperclipIcon,
    PhoneCallIcon,
    Shield,
    ShoppingBagIcon,
    Users
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import {NavFooter} from '@/components/nav-footer';
import {NavMain} from '@/components/nav-main';
import {NavUser} from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import type {NavItem} from '@/types';
import manager from "@/routes/manager";
import {Value} from "@radix-ui/react-select";

export function ManagerSidebar() {
    const mainNavItems: NavItem[] = [
        {
            title: 'مدیریت',
            href: manager.index(),
            icon: LayoutGrid,
        },
        {
            title: 'کاربران',
            href: manager.users.index(),
            icon: Users,
        },
        {
            title: 'دسترسی ها',
            href: manager.index(),
            icon: Shield,
        },
        {
            title: 'سفارش ها',
            href: manager.index(),
            icon: ListOrdered,
        },
        {
            title: 'مقالات',
            href: manager.index(),
            icon: PaperclipIcon,
        },
        {
            title: 'محصولات',
            href: manager.index(),
            icon: ShoppingBagIcon,
        },
        {
            title: 'ویژگی محصولات',
            href: manager.index(),
            icon: BatteryIcon,
        },
        {
            title: 'مقدار های ویژگی',
            href: manager.index(),
            icon: BatteryFullIcon,
        },
        {
            title: 'دسته بندی محصولات',
            href: manager.index(),
            icon: BadgeIcon,
        },
        {
            title: 'درخواست های پروژه',
            href: manager.index(),
            icon: GitPullRequestIcon,
        },
        {
            title: 'دانلود نرم افزار',
            href: manager.index(),
            icon: AppleIcon,
        },
        {
            title: 'لیست قیمت',
            href: manager.index(),
            icon: ListOrdered,
        },
        {
            title: 'تگ ها',
            href: manager.index(),
            icon: BadgeXIcon,
        },
        {
            title: 'گارانتی',
            href: manager.index(),
            icon: ChartBarIncreasingIcon,
        },
    ];

    const footerNavItems: NavItem[] = [
        {
            title: 'تماس با پشتیبانی',
            href: 'https://bariz.tech/fa/contact-us',
            icon: PhoneCallIcon,
        },
    ];

    return (
        <Sidebar side={'right'} dir={'rtl'} collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>

                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={manager.index()} prefetch>
                                <AppLogo/>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={mainNavItems}/>

            </SidebarContent>
            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto"/>
                {/*<NavUser />*/}
            </SidebarFooter>
        </Sidebar>
    );
}
