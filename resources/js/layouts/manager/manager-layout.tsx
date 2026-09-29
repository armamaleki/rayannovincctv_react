import {AppShell} from "@/components/app-shell";
import {AppContent} from "@/components/app-content";
import {AppSidebarHeader} from "@/components/app-sidebar-header";
import {ManagerSidebar} from "@/layouts/manager/manager-sidebar";
import {usePage} from "@inertiajs/react";
import {toast} from "sonner";
import {ToastContainer} from "react-toastify";
import { type ReactNode, useEffect } from 'react';

export default function ManagerLayout({breadcrumbs, children}) {
    const { props: pageProps } = usePage();
    // useEffect()(() => {
    //     if (pageProps.flash?.success) {
    //         toast.success(pageProps.flash.success, {
    //             position: "top-right",
    //             autoClose: 3000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             theme: "colored",
    //         });
    //     }
    //
    //     if (pageProps.flash?.error) {
    //         toast.error(pageProps.flash.error, {
    //             position: "top-right",
    //             autoClose: 3000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             theme: "colored",
    //         });
    //     }
    // }, [pageProps.flash]);
    return (
        <>
            <AppShell  variant="sidebar">
                <ManagerSidebar/>
                <ToastContainer/>
                <AppContent variant="sidebar" className="min-w-0 overflow-x-clip">
                    <AppSidebarHeader breadcrumbs={breadcrumbs}/>
                    {children}
                </AppContent>
            </AppShell>
        </>
    )
}