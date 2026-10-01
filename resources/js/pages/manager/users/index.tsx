import ManagerLayout from "@/layouts/manager/manager-layout";
import {Card, CardAction, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Link} from "@inertiajs/react";
import {Button} from "@/components/ui/button";
import {Eye, Pencil, Plus} from "lucide-react";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {ButtonGroup} from "@/components/ui/button-group";
import Paginate from "@/components/paginate";
import TableSearch from "@/components/table-search";

export default function Index() {
    return(
        <ManagerLayout>
            <Card>
                <CardHeader>
                    <CardTitle>کاربران سایت باریز</CardTitle>
                    <CardAction>
                        <div className={`flex items-center gap-4`}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button asChild>
                                        <Link href={''}>
                                            <Plus />
                                        </Link>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>اضافه کردن کاربر جدید</p>
                                </TooltipContent>
                            </Tooltip>
                            <TableSearch action={'/'} />
                        </div>
                    </CardAction>
                </CardHeader>
                <Table>
                    <TableCaption>کاربران</TableCaption>
                    <TableHeader>
                        <TableRow className={'text-right'}>
                            <TableHead className={'text-right'}>آواتار</TableHead>
                            <TableHead className={'text-right'}>نام</TableHead>
                            <TableHead className={'text-right'}>ایمیل</TableHead>
                            <TableHead className={'text-right'}>#</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                            <TableRow key={1}>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage src={''} />
                                        <AvatarFallback>
                                            name
                                        </AvatarFallback>
                                    </Avatar>
                                </TableCell>
                                <TableCell>name</TableCell>
                                <TableCell>email</TableCell>
                                <TableCell>
                                    <ButtonGroup>
                                        <Button asChild variant="outline">
                                            <Link
                                                href={''}
                                            >
                                                <Pencil />
                                            </Link>
                                        </Button>
                                        <Button variant="outline">
                                            <Link href={'/'}>
                                                <Eye />
                                            </Link>
                                        </Button>
                                    </ButtonGroup>
                                </TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
                <CardFooter>
                    <Paginate meta={''} />
                </CardFooter>
            </Card>
        </ManagerLayout>
    )
}