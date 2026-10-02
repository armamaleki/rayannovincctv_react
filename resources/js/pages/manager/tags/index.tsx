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
import { manager } from "@/routes";
import { InfiniteScroll, Link, router } from "@inertiajs/react";
import { Edit, Eye, Plus, Trash2 } from "lucide-react";
import TableSearch from "@/components/table-search";

interface Tag {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    list_of_all_tags: {
        data: Tag[];
        current_page: number;
        last_page: number;
        total: number;
    };
}

export default function Index({ list_of_all_tags }: Props) {
    return (
        <ManagerLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">
                            تگ‌ها
                        </h1>

                        <p className="mt-1 text-sm text-muted-foreground">
                            مدیریت تگ‌های سایت
                        </p>
                    </div>

                    <Button asChild>
                        <Link href={''}>
                            <Plus className="ml-2 h-4 w-4" />
                            افزودن تگ
                        </Link>
                    </Button>
                </div>

                {/* Search */}
                <TableSearch
                    action={''}
                />

                {/* Table */}
                <Card>
                    <CardContent className="p-0">
                        <InfiniteScroll
                            data="list_of_all_tags"
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
                                            نام تگ
                                        </TableHead>

                                        <TableHead className="text-right">
                                            تاریخ ایجاد
                                        </TableHead>

                                        <TableHead className="text-right">
                                            آخرین بروزرسانی
                                        </TableHead>

                                        <TableHead className="text-right">
                                            عملیات
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {list_of_all_tags.data.map((tag) => (
                                        <TableRow key={tag.id}>
                                            <TableCell>
                                                {tag.id}
                                            </TableCell>

                                            <TableCell className="font-medium">
                                                {tag.name}
                                            </TableCell>

                                            <TableCell>
                                                {new Date(
                                                    tag.created_at
                                                ).toLocaleDateString(
                                                    "fa-IR"
                                                )}
                                            </TableCell>

                                            <TableCell>
                                                {new Date(
                                                    tag.updated_at
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
                                    ))}
                                </TableBody>
                            </Table>
                        </InfiniteScroll>
                    </CardContent>
                </Card>
            </div>
        </ManagerLayout>
    );
}