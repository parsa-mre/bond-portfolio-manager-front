import Api from "../utils/api";
import { BOND_ENDPOINTS } from "./endpoints";

export const createBond = async (bond: any) => {
    const response = await Api.post(BOND_ENDPOINTS.createBond(), bond);
    return response.data;
};

export const getBonds = async () => {
    const response = await Api.get(BOND_ENDPOINTS.getBonds());
    return response.data;
};

export const getBond = async (id: string) => {
    const response = await Api.get(BOND_ENDPOINTS.getBond(id));
    return response.data;
};

export const updateBond = async (id: string, bond: any) => {
    const response = await Api.put(BOND_ENDPOINTS.updateBond(id), bond);
    return response.data;
};

export const deleteBond = async (id: string) => {
    const response = await Api.delete(BOND_ENDPOINTS.deleteBond(id));
    return response.data;
};
