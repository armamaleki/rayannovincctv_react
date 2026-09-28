import type {BreadcrumbItem} from "@/types";
import HomeHeader from "@/layouts/home/header";
import Footer from "@/layouts/home/footer";

export default function HomeLayout({
                                       breadcrumbs = [],
                                       children,
                                   }: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    return (
        <>
            <HomeHeader/>
            {children}
            <Footer/>
        </>
    )
}