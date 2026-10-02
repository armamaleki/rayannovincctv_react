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
    FileText,
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

type Article = {
    id: number;
    name: string | null;
    slug: string | null;
    status: string | null;
    meta_title: string | null;
    meta_description: string | null;
    short_description: string | null;
    user_id: number | null;
    created_at?: string | null;
};

type PaginatedArticles = {
    data: Article[];

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
    list_of_all_articles: PaginatedArticles;
};

export default function Index({
                                  list_of_all_articles,
                              }: Props) {

    const getStatusLabel = (
        status: string | null
    ) => {
        switch (status) {
            case "published":
                return "منتشر شده";

            case "draft":
                return "پیش‌نویس";

            case "pending":
                return "در انتظار بررسی";

            case "inactive":
                return "غیرفعال";

            default:
                return status || "نامشخص";
        }
    };

    const getStatusClass = (
        status: string | null
    ) => {
        switch (status) {
            case "published":
                return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";

            case "draft":
                return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";

            case "pending":
                return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";

            case "inactive":
                return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";

            default:
                return "bg-muted text-muted-foreground";
        }
    };

    return (
        <ManagerLayout>

            <Card >

                {/* Header */}
                <CardHeader>

                    <CardTitle className="flex items-center gap-2">

                        <FileText className="size-5" />

                        مقالات رایان نوین

                    </CardTitle>

                    <CardAction>

                        <div className="flex flex-wrap items-center gap-3">

                            {/* Add Article */}
                            <Tooltip>

                                <TooltipTrigger asChild>

                                    <Button asChild>

                                        <Link
                                            href={
                                                manager.article.create()
                                            }
                                        >

                                            <Plus className="size-4" />

                                            <span className="mr-2">
                                                افزودن مقاله
                                            </span>

                                        </Link>

                                    </Button>

                                </TooltipTrigger>

                                <TooltipContent>

                                    <p>
                                        اضافه کردن مقاله جدید
                                    </p>

                                </TooltipContent>

                            </Tooltip>

                            {/* Search */}
                            <TableSearch
                                action={
                                    manager.article.index()
                                }
                            />

                        </div>

                    </CardAction>

                </CardHeader>

                {/* Table */}
                <CardContent>

                    <div className="w-full overflow-x-auto">

                        <InfiniteScroll
                            data="list_of_all_articles"
                            buffer={300}
                            preserveUrl
                        >

                            <Table>

                                <TableCaption>
                                    فهرست مقالات سایت
                                </TableCaption>

                                <TableHeader>

                                    <TableRow>

                                        <TableHead className="whitespace-nowrap text-right">
                                            #
                                        </TableHead>

                                        <TableHead className="whitespace-nowrap text-right">
                                            عنوان مقاله
                                        </TableHead>

                                        <TableHead className="whitespace-nowrap text-right">
                                            Slug
                                        </TableHead>

                                        <TableHead className="whitespace-nowrap text-right">
                                            وضعیت
                                        </TableHead>

                                        <TableHead className="whitespace-nowrap text-right">
                                            نویسنده
                                        </TableHead>

                                        <TableHead className="whitespace-nowrap text-right">
                                            تاریخ ثبت
                                        </TableHead>

                                        <TableHead className="whitespace-nowrap text-center">
                                            عملیات
                                        </TableHead>

                                    </TableRow>

                                </TableHeader>

                                <TableBody>

                                    {list_of_all_articles.data.length > 0 ? (

                                        list_of_all_articles.data.map(
                                            (article) => (

                                                <TableRow
                                                    key={article.id}
                                                >

                                                    {/* ID */}
                                                    <TableCell className="font-medium">
                                                        {article.id}
                                                    </TableCell>

                                                    {/* Name */}
                                                    <TableCell>

                                                        <div className="flex min-w-64 flex-col gap-1">

                                                            <span className="font-medium">
                                                                {article.name ||
                                                                    "بدون عنوان"}
                                                            </span>

                                                            {article.short_description && (
                                                                <span className="line-clamp-1 text-xs text-muted-foreground">
                                                                    {
                                                                        article.short_description
                                                                    }
                                                                </span>
                                                            )}

                                                        </div>

                                                    </TableCell>

                                                    {/* Slug */}
                                                    <TableCell>

                                                        <span className="max-w-48 truncate text-sm text-muted-foreground">
                                                            {article.slug ||
                                                                "—"}
                                                        </span>

                                                    </TableCell>

                                                    {/* Status */}
                                                    <TableCell>

                                                        <span
                                                            className={`
                                                                inline-flex
                                                                rounded-full
                                                                px-3
                                                                py-1
                                                                text-xs
                                                                font-medium
                                                                ${getStatusClass(
                                                                article.status
                                                            )}
                                                            `}
                                                        >
                                                            {getStatusLabel(
                                                                article.status
                                                            )}
                                                        </span>

                                                    </TableCell>

                                                    {/* User */}
                                                    <TableCell>

                                                        {article.user_id
                                                            ? `کاربر ${article.user_id}`
                                                            : "—"}

                                                    </TableCell>

                                                    {/* Created */}
                                                    <TableCell className="whitespace-nowrap">

                                                        {article.created_at
                                                            ? new Date(
                                                                article.created_at
                                                            ).toLocaleDateString(
                                                                "fa-IR"
                                                            )
                                                            : "—"}

                                                    </TableCell>

                                                    {/* Actions */}
                                                    <TableCell>

                                                        <div className="flex justify-center">

                                                            <ButtonGroup
                                                                orientation="vertical"
                                                            >

                                                                {/* View */}
                                                                <Button
                                                                    asChild
                                                                    variant="outline"
                                                                    size="icon"
                                                                >

                                                                    <Link
                                                                        href={''}
                                                                    >

                                                                        <Eye className="size-4" />

                                                                    </Link>

                                                                </Button>

                                                                {/* Edit */}
                                                                <Button
                                                                    asChild
                                                                    variant="outline"
                                                                    size="icon"
                                                                >

                                                                    <Link
                                                                        href={
                                                                            manager.article.edit(
                                                                                article.id
                                                                            )
                                                                        }
                                                                    >

                                                                        <Pencil className="size-4" />

                                                                    </Link>

                                                                </Button>

                                                            </ButtonGroup>

                                                        </div>

                                                    </TableCell>

                                                </TableRow>

                                            )
                                        )

                                    ) : (

                                        <TableRow>

                                            <TableCell
                                                colSpan={7}
                                                className="h-32 text-center text-muted-foreground"
                                            >
                                                مقاله‌ای برای نمایش وجود ندارد.
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