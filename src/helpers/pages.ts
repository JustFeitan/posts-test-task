export const totalPagesCount = (totalCount: number, limit?: number) => {
    return Math.ceil(totalCount / (limit || 10));
};

export const getPagesArray = (totalPages: number) => {
    if (totalPages < 2) return null;
    return Array.from(Array(totalPages).keys());
};
