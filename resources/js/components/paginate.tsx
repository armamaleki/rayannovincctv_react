import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

interface PaginationLinkData {
    url: string | null;
    label: string;
    page: number | null;
    active: boolean;
}

interface PaginationMeta {
    current_page: number;
    last_page: number;
    links: PaginationLinkData[];
    per_page: number;
    total: number;
}

interface PaginateProps {
    meta?: PaginationMeta | null;
}

export default function Paginate({ meta }: PaginateProps) {
    if (!meta?.links?.length || meta.last_page <= 1) {
        return null;
    }

    return (
        <Pagination>
            <PaginationContent className="flex flex-wrap justify-center gap-1">
                {meta.links.map((link, index) => {
                    // Ellipsis
                    if (!link.url && link.label.includes('...')) {
                        return (
                            <PaginationItem key={index}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        );
                    }

                    // Previous
                    if (
                        link.label.toLowerCase().includes('previous') ||
                        link.label.includes('قبلی')
                    ) {
                        return (
                            <PaginationItem key={index}>
                                <PaginationPrevious
                                    href={link.url || '#'}
                                    className={
                                        !link.url
                                            ? 'pointer-events-none opacity-50'
                                            : ''
                                    }
                                />
                            </PaginationItem>
                        );
                    }

                    // Next
                    if (
                        link.label.toLowerCase().includes('next') ||
                        link.label.includes('بعدی')
                    ) {
                        return (
                            <PaginationItem key={index}>
                                <PaginationNext
                                    href={link.url || '#'}
                                    className={
                                        !link.url
                                            ? 'pointer-events-none opacity-50'
                                            : ''
                                    }
                                />
                            </PaginationItem>
                        );
                    }

                    // Page number
                    return (
                        <PaginationItem key={index}>
                            <PaginationLink
                                href={link.url || '#'}
                                isActive={link.active}
                                className={
                                    link.active
                                        ? 'bg-pink-500 text-white hover:bg-pink-600'
                                        : 'hover:bg-gray-200 dark:hover:bg-gray-800'
                                }
                            >
                                {link.label}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}
            </PaginationContent>
        </Pagination>
    );
}