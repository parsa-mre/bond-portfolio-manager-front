const BOND_ENDPOINTS = {
    createBond: () => "/bonds",
    getBonds: () => "/bonds",
    getBond: (id: string) => `/bonds/${id}`,
    updateBond: (id: string) => `/bonds/${id}`,
    deleteBond: (id: string) => `/bonds/${id}`,
};

const ISSUER_ENDPOINTS = {
    createIssuer: () => "issuers",
    getIssuers: (page: number, page_size: number) =>
        `issuers?page=${page}&page_size=${page_size}`,
    getIssuer: (id: string) => `issuers/${id}`,
    updateIssuer: (id: string) => `issuers/${id}`,
    deleteIssuer: (id: string) => `issuers/${id}`,
};

export { BOND_ENDPOINTS, ISSUER_ENDPOINTS };
