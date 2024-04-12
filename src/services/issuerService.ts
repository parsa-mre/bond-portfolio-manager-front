import Api from "../utils/api";
import { ISSUER_ENDPOINTS } from "./endpoints";

export const createIssuer = async (issuer: any) => {
    const response = await Api.post(ISSUER_ENDPOINTS.createIssuer(), issuer);
    return response.data;
};

export const getIssuers = async (page: number, page_size: number) => {
    const response = await Api.get(
        ISSUER_ENDPOINTS.getIssuers(page, page_size)
    );
    return response.data;
};

export const getIssuer = async (id: string) => {
    const response = await Api.get(ISSUER_ENDPOINTS.getIssuer(id));
    return response.data;
};

export const updateIssuer = async (id: string, issuer: any) => {
    const response = await Api.put(ISSUER_ENDPOINTS.updateIssuer(id), issuer);
    return response.data;
};

export const deleteIssuer = async (id: string) => {
    const response = await Api.delete(ISSUER_ENDPOINTS.deleteIssuer(id));
    return response.data;
};
