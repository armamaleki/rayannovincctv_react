import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardContent } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import ManagerLayout from "@/layouts/manager/manager-layout";
import { Link, InfiniteScroll, router } from "@inertiajs/react";
import { Edit, Eye, Plus, Trash2 } from "lucide-react";
import TableSearch from "@/components/table-search";

interface ProductCategory {
    id: number;
    name: string;
    slug: string;
    status: "deactivate" | "active" | "check";
    parent_id: number | null;
    parent?: {
        id: number;
        name: string;
        slug: string;
    } | null;
    products_count: number;
    menu: boolean;
    created_at: string;
}

interface Props {
    list_of_all_product_categories: {
        data: ProductCategory[];
        current_page: number;
        last_page: number;
        total: number;
    };
}

export default function Index({ list_of_all_product_categories }: Props) {
    const statusMap = {
        active: {
            label: "فعال",
            className:
                "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        },
        deactivate: {
            label: "غیرفعال",
            className:
                "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
        },
        check: {
            label: "در انتظار بررسی",
            className:
                "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
        },
    };

    return (
        <ManagerLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">
                            دسته‌بندی محصولات
                        </h1>

                        <p className="mt-1 text-sm text-muted-foreground">
                            مدیریت دسته‌بندی‌های محصولات
                        </p>
                    </div>

                    <Button asChild>
                        <Link href={''}>
                            <Plus className="ml-2 h-4 w-4" />
                            افزودن دسته‌بندی
                        </Link>
                    </Button>
                </div>

                {/* Search */}
                <TableSearch
                    action={'manager.productCategory.index()'}
                />

                {/* Table */}
                <Card>
                    <CardContent className="p-0">
                        <InfiniteScroll
                            data="list_of_all_product_categories"
                            preserveUrl
                            className="w-full"
                        >
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-right">
                                            #
                                        </TableHead>

                                        <TableHead className="text-right">
                                            نام
                                        </TableHead>

                                        <TableHead className="text-right">
                                            Slug
                                        </TableHead>

                                        <TableHead className="text-right">
                                            دسته والد
                                        </TableHead>

                                        <TableHead className="text-right">
                                            محصولات
                                        </TableHead>

                                        <TableHead className="text-right">
                                            منو
                                        </TableHead>

                                        <TableHead className="text-right">
                                            وضعیت
                                        </TableHead>

                                        <TableHead className="text-right">
                                            تاریخ ایجاد
                                        </TableHead>

                                        <TableHead className="text-right">
                                            عملیات
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {list_of_all_product_categories.data.map(
                                        (productCategory) => {
                                            const status =
                                                statusMap[
                                                    productCategory.status
                                                    ];

                                            return (
                                                <TableRow
                                                    key={productCategory.id}
                                                >
                                                    <TableCell>
                                                        {productCategory.id}
                                                    </TableCell>

                                                    <TableCell className="font-medium">
                                                        {productCategory.name}
                                                    </TableCell>

                                                    <TableCell
                                                        dir="ltr"
                                                        className="text-left"
                                                    >
                                                        {productCategory.slug}
                                                    </TableCell>

                                                    <TableCell>
                                                        {productCategory.parent
                                                            ?.name ?? "—"}
                                                    </TableCell>

                                                    <TableCell>
                                                        {productCategory.products_count}
                                                    </TableCell>

                                                    <TableCell>
                                                        <span
                                                            className={
                                                                productCategory.menu
                                                                    ? "text-green-600 dark:text-green-400"
                                                                    : "text-muted-foreground"
                                                            }
                                                        >
                                                            {productCategory.menu
                                                                ? "بله"
                                                                : "خیر"}
                                                        </span>
                                                    </TableCell>

                                                    <TableCell>
                                                        <span
                                                            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${status.className}`}
                                                        >
                                                            {status.label}
                                                        </span>
                                                    </TableCell>

                                                    <TableCell>
                                                        {new Date(
                                                            productCategory.created_at
                                                        ).toLocaleDateString(
                                                            "fa-IR"
                                                        )}
                                                    </TableCell>

                                                    <TableCell>
                                                        <ButtonGroup>
                                                            <Tooltip>
                                                                <TooltipTrigger
                                                                    asChild
                                                                >
                                                                    <Button
                                                                        variant="outline"
                                                                        size="icon"
                                                                        asChild
                                                                    >
                                                                        <Link
                                                                            href={'d'}
                                                                        >
                                                                            <Eye className="h-4 w-4" />
                                                                        </Link>
                                                                    </Button>
                                                                </TooltipTrigger>

                                                                <TooltipContent>
                                                                    مشاهده
                                                                </TooltipContent>
                                                            </Tooltip>

                                                            <Tooltip>
                                                                <TooltipTrigger
                                                                    asChild
                                                                >
                                                                    <Button
                                                                        variant="outline"
                                                                        size="icon"
                                                                        asChild
                                                                    >
                                                                        <Link
                                                                            href={'d'}
                                                                        >
                                                                            <Edit className="h-4 w-4" />
                                                                        </Link>
                                                                    </Button>
                                                                </TooltipTrigger>

                                                                <TooltipContent>
                                                                    ویرایش
                                                                </TooltipContent>
                                                            </Tooltip>

                                                            <Tooltip>
                                                                <TooltipTrigger
                                                                    asChild
                                                                >
                                                                    <Button
                                                                        variant="destructive"
                                                                        size="icon"
                                                                        // onClick={() =>
                                                                        //     router.delete(
                                                                        //         manager.productCategory.destroy(
                                                                        //             productCategory.slug
                                                                        //         )
                                                                        //     )
                                                                        // }
                                                                    >
                                                                        <Trash2 className="h-4 w-4" />
                                                                    </Button>
                                                                </TooltipTrigger>

                                                                <TooltipContent>
                                                                    حذف
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </ButtonGroup>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </InfiniteScroll>
                    </CardContent>
                </Card>
            </div>
        </ManagerLayout>
    );
}