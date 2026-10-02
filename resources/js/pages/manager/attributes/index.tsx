import ManagerLayout from "@/layouts/manager/manager-layout";
import {
    Card,
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
    Tags,
} from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ButtonGroup } from "@/components/ui/button-group";
import TableSearch from "@/components/table-search";
import manager from "@/routes/manager";

type Attribute = {
    id: number;
    name: string | null;
    icon: string | null;
    user_id: number | null;
    values_count?: number;
    created_at?: string | null;
};

type PaginatedAttributes = {
    data: Attribute[];
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
    list_of_all_attributes: PaginatedAttributes;
};

export default function Index({
                                  list_of_all_attributes,
                              }: Props) {
    return (
        <ManagerLayout>
            <div className="space-y-6" dir="rtl">
                <Card>
                    <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <CardTitle className="flex items-center gap-2">
                            <Tags className="size-5" />
                            ویژگی‌ها
                        </CardTitle>

                        <div className="flex items-center gap-2">
                            <TableSearch
                                action={manager.attribute.index()}
                            />

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button asChild>
                                        <Link
                                            href={manager.attribute.create()}
                                        >
                                            <Plus className="size-4" />
                                            افزودن ویژگی
                                        </Link>
                                    </Button>
                                </TooltipTrigger>

                                <TooltipContent>
                                    افزودن ویژگی جدید
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <InfiniteScroll
                            data="list_of_all_attributes"
                            buffer={300}
                            preserveUrl
                        >
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="text-right">
                                                #
                                            </TableHead>

                                            <TableHead className="text-right">
                                                نام ویژگی
                                            </TableHead>

                                            <TableHead className="text-right">
                                                تعداد مقادیر
                                            </TableHead>

                                            <TableHead className="text-right">
                                                شناسه کاربر
                                            </TableHead>

                                            <TableHead className="text-right">
                                                تاریخ ایجاد
                                            </TableHead>

                                            <TableHead className="text-center">
                                                عملیات
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {list_of_all_attributes.data.length > 0 ? (
                                            list_of_all_attributes.data.map(
                                                (attribute) => (
                                                    <TableRow key={attribute.id}>
                                                        <TableCell>
                                                            {attribute.id}
                                                        </TableCell>

                                                        <TableCell className="font-medium">
                                                            <div className="flex items-center gap-2">
                                                                {attribute.icon && (
                                                                    <img
                                                                        src={
                                                                            attribute.icon
                                                                        }
                                                                        alt={
                                                                            attribute.name ??
                                                                            "attribute"
                                                                        }
                                                                        className="size-8 rounded-md object-cover"
                                                                    />
                                                                )}

                                                                <span>
                                                                    {attribute.name ??
                                                                        "-"}
                                                                </span>
                                                            </div>
                                                        </TableCell>

                                                        <TableCell>
                                                            <span className="font-medium">
                                                                {
                                                                    attribute.values_count
                                                                }
                                                            </span>
                                                        </TableCell>

                                                        <TableCell>
                                                            {attribute.user_id ??
                                                                "-"}
                                                        </TableCell>

                                                        <TableCell>
                                                            {attribute.created_at
                                                                ? new Date(
                                                                    attribute.created_at
                                                                ).toLocaleDateString(
                                                                    "fa-IR"
                                                                )
                                                                : "-"}
                                                        </TableCell>

                                                        <TableCell className="text-center">
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
                                                                                <Eye className="size-4" />
                                                                            </Link>
                                                                        </Button>
                                                                    </TooltipTrigger>

                                                                    <TooltipContent>
                                                                        مشاهده ویژگی
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
                                                                                href={manager.attribute.edit(
                                                                                    attribute.id
                                                                                )}
                                                                            >
                                                                                <Pencil className="size-4" />
                                                                            </Link>
                                                                        </Button>
                                                                    </TooltipTrigger>

                                                                    <TooltipContent>
                                                                        ویرایش ویژگی
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </ButtonGroup>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            )
                                        ) : (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={6}
                                                    className="h-32 text-center"
                                                >
                                                    ویژگی‌ای پیدا نشد.
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </InfiniteScroll>
                    </CardContent>
                </Card>
            </div>
        </ManagerLayout>
    );
}