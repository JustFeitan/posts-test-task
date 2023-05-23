export const totalPagesCount = (totalCount: number, limit?: number) => {
    return Math.ceil(totalCount / limit || 10);
}

export const getPagesArray = (totalPages: number) => {
    return Array.from(Array(totalPages).keys())
}
