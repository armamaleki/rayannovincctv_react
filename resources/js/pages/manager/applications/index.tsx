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
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import ManagerLayout from "@/layouts/manager/manager-layout";
import { InfiniteScroll, Link, router } from "@inertiajs/react";
import { Edit, Eye, Plus, Trash2 } from "lucide-react";
import TableSearch from "@/components/table-search";

interface Application {
    id: number;
    name: string;
    link: string;
    status: "deactivate" | "active" | "check";
    description: string | null;
    user_id: number;
    tags_count: number;
    created_at: string;
    user?: {
        id: number;
        name: string;
    } | null;
}

interface Props {
    list_of_all_applications: {
        data: Application[];
        current_page: number;
        last_page: number;
        total: number;
    };
}

export default function Index({
                                  list_of_all_applications,
                              }: Props) {
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
                            نرم‌افزارها
                        </h1>

                        <p className="mt-1 text-sm text-muted-foreground">
                            مدیریت نرم‌افزارهای سایت
                        </p>
                    </div>

                    <Button asChild>
                        <Link href={'manager.application.create()'}>
                            <Plus className="ml-2 h-4 w-4" />
                            افزودن نرم‌افزار
                        </Link>
                    </Button>
                </div>

                {/* Search */}
                <TableSearch
                    action={'manager.application.index()'}
                />

                {/* Table */}
                <Card>
                    <CardContent className="p-0">
                        <InfiniteScroll
                            data="list_of_all_applications"
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
                                            نام نرم‌افزار
                                        </TableHead>

                                        <TableHead className="text-right">
                                            لینک
                                        </TableHead>

                                        <TableHead className="text-right">
                                            کاربر
                                        </TableHead>

                                        <TableHead className="text-right">
                                            تگ‌ها
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
                                    {list_of_all_applications.data.map(
                                        (application) => {
                                            const status =
                                                statusMap[
                                                    application.status
                                                    ];

                                            return (
                                                <TableRow
                                                    key={application.id}
                                                >
                                                    <TableCell>
                                                        {application.id}
                                                    </TableCell>

                                                    <TableCell className="font-medium">
                                                        {application.name}
                                                    </TableCell>

                                                    <TableCell
                                                        dir="ltr"
                                                        className="max-w-[300px] truncate text-left"
                                                    >
                                                        {application.link}
                                                    </TableCell>

                                                    <TableCell>
                                                        {application.user
                                                            ?.name ?? "—"}
                                                    </TableCell>

                                                    <TableCell>
                                                        {application.tags_count}
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
                                                            application.created_at
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
                                                                            href={''}
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
                                                                            href={''}
                                                                        >
                                                                            <Edit className="h-4 w-4" />
                                                                        </Link>
                                                                    </Button>
                                                                </TooltipTrigger>

                                                                <TooltipContent>
                                                                    ویرایش
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