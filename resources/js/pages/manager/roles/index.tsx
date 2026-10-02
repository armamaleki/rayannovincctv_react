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

import {InfiniteScroll, Link} from "@inertiajs/react";

import {Button} from "@/components/ui/button";

import {
    Pencil,
    Plus,
    ShieldCheck,
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

import {ButtonGroup} from "@/components/ui/button-group";

import TableSearch from "@/components/table-search";
import manager from "@/routes/manager";

type Role = {
    id: number;
    name: string | null;
    created_at?: string | null;
};

type PaginatedRoles = {
    data: Role[];
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
    list_of_all_roles: PaginatedRoles;
};


export default function Index({
                                  list_of_all_roles,
                              }: Props) {
    return (
        <ManagerLayout>
            <Card dir="rtl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ShieldCheck className="size-5"/>
                        دسترسی های رایان نوین
                    </CardTitle>

                    <CardAction>
                        <div className="flex flex-wrap items-center gap-3">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button asChild>
                                        <Link href="#">
                                            <Plus className="size-4"/>
                                            <span className="mr-2">
                                                افزودن دسترسی
                                            </span>
                                        </Link>
                                    </Button>
                                </TooltipTrigger>

                                <TooltipContent>
                                    <p>اضافه کردن دسترسی جدید</p>
                                </TooltipContent>
                            </Tooltip>

                            <TableSearch action={manager.role.index()}/>
                        </div>
                    </CardAction>
                </CardHeader>

                <CardContent>
                    <div className="w-full overflow-x-auto">
                        <InfiniteScroll data="list_of_all_roles">
                            <Table>
                                <TableCaption>
                                    فهرست دسترسی های سایت
                                </TableCaption>

                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="whitespace-nowrap text-right">
                                            ID
                                        </TableHead>
                                        <TableHead className="whitespace-nowrap text-right">
                                            نام
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
                                    {list_of_all_roles.data.length > 0 ? (
                                        list_of_all_roles.data.map((role) => (
                                            <TableRow key={role.id}>
                                                <TableCell className="font-medium">
                                                    {role.id}
                                                </TableCell>

                                                <TableCell>
                                                    <div className="flex min-w-40 items-center gap-3">
                                                        <div className="flex flex-col gap-1">
                                                            <span className="font-medium">
                                                                {role.name ||
                                                                    "بدون نام"}
                                                            </span>

                                                            <span className="text-xs text-muted-foreground">
                                                                دسترسی
                                                            </span>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="whitespace-nowrap">
                                                    {role.created_at
                                                        ? new Date(
                                                            role.created_at
                                                        ).toLocaleDateString(
                                                            "fa-IR"
                                                        )
                                                        : "—"}
                                                </TableCell>

                                                <TableCell>
                                                    <div
                                                        className="flex justify-center">
                                                        <ButtonGroup orientation="vertical">
                                                            <Button
                                                                asChild
                                                                variant="outline"
                                                                size="icon"
                                                            >
                                                                <Link
                                                                    href={manager.role.edit(role.id)}
                                                                >
                                                                    <Pencil className="size-4"/>
                                                                </Link>
                                                            </Button>
                                                        </ButtonGroup>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell
                                                colSpan={6}
                                                className="h-32 text-center text-muted-foreground"
                                            >
                                                دسترسی برای نمایش وجود ندارد.
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
