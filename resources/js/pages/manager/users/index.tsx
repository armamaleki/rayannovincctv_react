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
    Eye,
    Pencil,
    Plus,
    Users,
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

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import {ButtonGroup} from "@/components/ui/button-group";

import TableSearch from "@/components/table-search";
import manager from "@/routes/manager";

type User = {
    id: number;
    name: string | null;
    phone: string | null;
    email: string | null;
    avatar?: string | null;
    created_at?: string | null;
};

type PaginatedUsers = {
    data: User[];
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
    list_of_all_users: PaginatedUsers;
};

function getInitials(name: string | null): string {
    if (!name?.trim()) {
        return "؟";
    }

    return name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part.charAt(0))
        .join("");
}

export default function Index({
                                  list_of_all_users,
                              }: Props) {
    return (
        <ManagerLayout>
            <Card dir="rtl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Users className="size-5"/>
                        کاربران سایت باریز
                    </CardTitle>

                    <CardAction>
                        <div className="flex flex-wrap items-center gap-3">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button asChild>
                                        <Link href="#">
                                            <Plus className="size-4"/>
                                            <span className="mr-2">
                                                افزودن کاربر
                                            </span>
                                        </Link>
                                    </Button>
                                </TooltipTrigger>

                                <TooltipContent>
                                    <p>اضافه کردن کاربر جدید</p>
                                </TooltipContent>
                            </Tooltip>

                            <TableSearch action={manager.users.index()}/>
                        </div>
                    </CardAction>
                </CardHeader>

                <CardContent>
                    <div className="w-full overflow-x-auto">
                        <InfiniteScroll data="list_of_all_users">
                            <Table>
                                <TableCaption>
                                    فهرست کاربران سایت
                                </TableCaption>

                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="whitespace-nowrap text-right">
                                            ID
                                        </TableHead>
                                        <TableHead className="whitespace-nowrap text-right">
                                            کاربر
                                        </TableHead>
                                        <TableHead className="whitespace-nowrap text-right">
                                            شماره موبایل
                                        </TableHead>
                                        <TableHead className="whitespace-nowrap text-right">
                                            ایمیل
                                        </TableHead>
                                        <TableHead className="whitespace-nowrap text-right">
                                            تاریخ ثبت‌نام
                                        </TableHead>
                                        <TableHead className="whitespace-nowrap text-center">
                                            عملیات
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {list_of_all_users.data.length > 0 ? (
                                        list_of_all_users.data.map((user) => (
                                            <TableRow key={user.id}>
                                                <TableCell className="font-medium">
                                                    {user.id}
                                                </TableCell>

                                                <TableCell>
                                                    <div className="flex min-w-40 items-center gap-3">
                                                        <Avatar>
                                                            <AvatarImage
                                                                src={
                                                                    user.avatar ??
                                                                    undefined
                                                                }
                                                                alt={
                                                                    user.name ??
                                                                    "کاربر"
                                                                }
                                                            />

                                                            <AvatarFallback>
                                                                {getInitials(
                                                                    user.name
                                                                )}
                                                            </AvatarFallback>
                                                        </Avatar>

                                                        <div className="flex flex-col gap-1">
                                                            <span className="font-medium">
                                                                {user.name ||
                                                                    "بدون نام"}
                                                            </span>

                                                            <span className="text-xs text-muted-foreground">
                                                                کاربر سایت
                                                            </span>
                                                        </div>
                                                    </div>
                                                </TableCell>

                                                <TableCell dir="ltr" className="text-right">
                                                    {user.phone || "—"}
                                                </TableCell>

                                                <TableCell>
                                                    <span
                                                        dir="ltr"
                                                        className="inline-block text-right"
                                                    >
                                                        {user.email || "—"}
                                                    </span>
                                                </TableCell>

                                                <TableCell className="whitespace-nowrap">
                                                    {user.created_at
                                                        ? new Date(
                                                            user.created_at
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
                                                                    href={`/manager/users/${user.id}/edit`}
                                                                    aria-label={`ویرایش کاربر ${user.name ?? user.id}`}
                                                                >
                                                                    <Pencil className="size-4"/>
                                                                </Link>
                                                            </Button>

                                                            <Button
                                                                asChild
                                                                variant="outline"
                                                                size="icon"
                                                            >
                                                                <Link
                                                                    href={`/manager/users/${user.id}`}
                                                                    aria-label={`مشاهده کاربر ${user.name ?? user.id}`}
                                                                >
                                                                    <Eye className="size-4"/>
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
                                                کاربری برای نمایش وجود ندارد.
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
