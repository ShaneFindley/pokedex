interface IUsePaginationResponse {
    page: number;
    pages: number
    nextOffset: number | null;
    lastOffset: number | null;
}

export const usePagination = (dataSize: number, pageSize: number, page: number): IUsePaginationResponse => {

    const pages = Math.ceil((dataSize / pageSize));

    const currentOffset = pageSize * page;

    return {
        page,
        pages,
        nextOffset: currentOffset + pageSize < dataSize ? currentOffset + pageSize : null,
        lastOffset: currentOffset - pageSize >= 0 ? currentOffset - pageSize : null
    };
}