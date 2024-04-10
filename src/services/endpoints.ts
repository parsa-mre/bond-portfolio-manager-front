const BOND_ENDPOINTS = {
    createBond: () => "/bonds",
    getBonds: () => "/bonds",
    getBond: (id: string) => `/bonds/${id}`,
    updateBond: (id: string) => `/bonds/${id}`,
    deleteBond: (id: string) => `/bonds/${id}`,
};

const ISSUER_ENDPOINTS = {
    createIssuer: () => "/issuers",
    getIssuers: () => "/issuers",
    getIssuer: (id: string) => `/issuers/${id}`,
    updateIssuer: (id: string) => `/issuers/${id}`,
    deleteIssuer: (id: string) => `/issuers/${id}`,
};

export { BOND_ENDPOINTS, ISSUER_ENDPOINTS };
