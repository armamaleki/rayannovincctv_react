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
};

type AttributeValue = {
    id: number;
    value: string | null;
    sort_order: number | null;
    attribute_id: number | null;
    attribute?: Attribute | null;
    created_at?: string | null;
};

type PaginatedAttributeValues = {
    data: AttributeValue[];
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
    list_of_all_attribute_values: PaginatedAttributeValues;
};

export default function Index({
                                  list_of_all_attribute_values,
                              }: Props) {
    return (
        <ManagerLayout>
            <div className="space-y-6" dir="rtl">
                <Card>
                    <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <CardTitle className="flex items-center gap-2">
                            <Tags className="size-5" />
                            مقادیر ویژگی
                        </CardTitle>

                        <div className="flex items-center gap-2">
                            <TableSearch
                                action={'manager.attributeValue.index()'}
                            />

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button asChild>
                                        <Link
                                            href={'manager.attributeValue.create()'}
                                        >
                                            <Plus className="size-4" />
                                            افزودن مقدار
                                        </Link>
                                    </Button>
                                </TooltipTrigger>

                                <TooltipContent>
                                    افزودن مقدار ویژگی
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <InfiniteScroll
                            data="list_of_all_attribute_values"
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
                                                مقدار
                                            </TableHead>

                                            <TableHead className="text-right">
                                                ویژگی
                                            </TableHead>

                                            <TableHead className="text-right">
                                                ترتیب
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
                                        {list_of_all_attribute_values.data
                                            .length > 0 ? (
                                            list_of_all_attribute_values.data.map(
                                                (attributeValue) => (
                                                    <TableRow
                                                        key={
                                                            attributeValue.id
                                                        }
                                                    >
                                                        <TableCell>
                                                            {
                                                                attributeValue.id
                                                            }
                                                        </TableCell>

                                                        <TableCell className="font-medium">
                                                            {
                                                                attributeValue.value
                                                            }
                                                        </TableCell>

                                                        <TableCell>
                                                            {
                                                                attributeValue
                                                                    .attribute
                                                                    ?.name ?? "-"
                                                            }
                                                        </TableCell>

                                                        <TableCell>
                                                            {
                                                                attributeValue.sort_order ??
                                                                "-"
                                                            }
                                                        </TableCell>

                                                        <TableCell>
                                                            {attributeValue.created_at
                                                                ? new Date(
                                                                    attributeValue.created_at
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
                                                                                <Pencil className="size-4" />
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
                                                )
                                            )
                                        ) : (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={6}
                                                    className="h-32 text-center"
                                                >
                                                    مقداری پیدا نشد.
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