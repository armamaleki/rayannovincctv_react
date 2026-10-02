import ManagerLayout from "@/layouts/manager/manager-layout";

import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { InfiniteScroll, Link } from "@inertiajs/react";

import { Button } from "@/components/ui/button";

import {
    Eye,
    Pencil,
    Plus,
    ShoppingCart,
} from "lucide-react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { ButtonGroup } from "@/components/ui/button-group";

import TableSearch from "@/components/table-search";
import manager from "@/routes/manager";

type Order = {
    id: number;

    user_id: number | null;
    address_id: number | null;

    total_price: number | string | null;

    order_number: string | null;

    status: string | null;

    created_at?: string | null;
};

type PaginatedOrders = {
    data: Order[];

    links?: {
        first?: string | null;
        last?: string | null;
        prev?: string | null;
        next?: string | null;
    };

    meta?: {
        current_page?: number;
        last_page?: number;
        total?: number;
    };
};

type Props = {
    list_of_all_orders: PaginatedOrders;
};

export default function Index({
                                  list_of_all_orders,
                              }: Props) {
    /**
     * تبدیل وضعیت سفارش به متن فارسی
     */
    const getStatusLabel = (status: string | null) => {
        switch (status) {
            case "pending":
                return "در انتظار پرداخت";

            case "paid":
                return "پرداخت شده";

            case "processing":
                return "در حال پردازش";

            case "shipped":
                return "ارسال شده";

            case "completed":
                return "تکمیل شده";

            case "cancelled":
                return "لغو شده";

            case "failed":
                return "ناموفق";

            default:
                return status || "نامشخص";
        }
    };

    /**
     * کلاس وضعیت سفارش
     */
    const getStatusClass = (status: string | null) => {
        switch (status) {
            case "paid":
            case "completed":
                return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";

            case "pending":
                return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";

            case "processing":
                return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";

            case "shipped":
                return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";

            case "cancelled":
            case "failed":
                return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";

            default:
                return "bg-muted text-muted-foreground";
        }
    };

    /**
     * فرمت مبلغ
     */
    const formatPrice = (
        price: number | string | null
    ) => {
        if (price === null || price === undefined) {
            return "—";
        }

        return Number(price).toLocaleString("fa-IR");
    };

    return (
        <ManagerLayout>
            <Card dir="rtl">

                {/* Header */}
                <CardHeader>

                    <CardTitle className="flex items-center gap-2">
                        <ShoppingCart className="size-5" />

                        سفارشات رایان نوین
                    </CardTitle>


                </CardHeader>

                {/* Content */}
                <CardContent>

                    <div className="w-full overflow-x-auto">

                        <InfiniteScroll
                            data="list_of_all_orders"
                        >

                            <Table>

                                <TableCaption>
                                    فهرست سفارشات سایت
                                </TableCaption>

                                <TableHeader>

                                    <TableRow>

                                        {/* ID */}
                                        <TableHead className="whitespace-nowrap text-right">
                                            #
                                        </TableHead>

                                        {/* Order Number */}
                                        <TableHead className="whitespace-nowrap text-right">
                                            شماره سفارش
                                        </TableHead>

                                        {/* User */}
                                        <TableHead className="whitespace-nowrap text-right">
                                            کاربر
                                        </TableHead>

                                        {/* Address */}
                                        <TableHead className="whitespace-nowrap text-right">
                                            آدرس
                                        </TableHead>

                                        {/* Price */}
                                        <TableHead className="whitespace-nowrap text-right">
                                            مبلغ
                                        </TableHead>

                                        {/* Status */}
                                        <TableHead className="whitespace-nowrap text-right">
                                            وضعیت
                                        </TableHead>

                                        {/* Created */}
                                        <TableHead className="whitespace-nowrap text-right">
                                            تاریخ ثبت
                                        </TableHead>

                                        {/* Actions */}
                                        <TableHead className="whitespace-nowrap text-center">
                                            عملیات
                                        </TableHead>

                                    </TableRow>

                                </TableHeader>

                                <TableBody>

                                    {list_of_all_orders.data.length > 0 ? (

                                        list_of_all_orders.data.map(
                                            (order) => (

                                                <TableRow
                                                    key={order.id}
                                                >

                                                    {/* ID */}
                                                    <TableCell className="font-medium">
                                                        {order.id}
                                                    </TableCell>

                                                    {/* Order Number */}
                                                    <TableCell>

                                                        <div className="flex flex-col gap-1">

                                                            <span className="font-medium">
                                                                {order.order_number ||
                                                                    "بدون شماره"}
                                                            </span>

                                                            <span className="text-xs text-muted-foreground">
                                                                سفارش #{order.id}
                                                            </span>

                                                        </div>

                                                    </TableCell>

                                                    {/* User */}
                                                    <TableCell>

                                                        <span className="text-sm">
                                                            {order.user_id
                                                                ? `کاربر ${order.user_id}`
                                                                : "بدون کاربر"}
                                                        </span>

                                                    </TableCell>

                                                    {/* Address */}
                                                    <TableCell>

                                                        <span className="text-sm">
                                                            {order.address_id
                                                                ? `آدرس ${order.address_id}`
                                                                : "بدون آدرس"}
                                                        </span>

                                                    </TableCell>

                                                    {/* Price */}
                                                    <TableCell className="whitespace-nowrap">

                                                        <div className="flex items-center gap-1">

                                                            <span className="font-medium">
                                                                {formatPrice(
                                                                    order.total_price
                                                                )}
                                                            </span>

                                                            <span className="text-xs text-muted-foreground">
                                                                تومان
                                                            </span>

                                                        </div>

                                                    </TableCell>

                                                    {/* Status */}
                                                    <TableCell>

                                                        <span
                                                            className={`
                                                                inline-flex
                                                                items-center
                                                                rounded-full
                                                                px-3
                                                                py-1
                                                                text-xs
                                                                font-medium
                                                                ${getStatusClass(
                                                                order.status
                                                            )}
                                                            `}
                                                        >
                                                            {getStatusLabel(
                                                                order.status
                                                            )}
                                                        </span>
                                                    </TableCell>
                                                    <TableCell className="whitespace-nowrap">

                                                        {order.created_at
                                                            ? new Date(
                                                                order.created_at
                                                            ).toLocaleDateString(
                                                                "fa-IR"
                                                            )
                                                            : "—"}
                                                    </TableCell>
                                                </TableRow>

                                            )
                                        )

                                    ) : (

                                        <TableRow>

                                            <TableCell
                                                colSpan={8}
                                                className="h-32 text-center text-muted-foreground"
                                            >
                                                سفارشی برای نمایش وجود ندارد.
                                            </TableCell>

                                        </TableRow>

                                    )}

                                </TableBody>

                            </Table>

                        </InfiniteScroll>

                    </div>

                </CardContent>

            </Card>
        </ManagerLayout>
    );
}