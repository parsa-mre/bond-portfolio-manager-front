import { useQuery } from "@tanstack/react-query";
import { getIssuers } from "../services/issuerService";
import Issuer from "../types/issuer";

const useIssuers = () => {
    const fetchIssuers = async () => {
        return await getIssuers(1, 100).then((res) => res.data);
    };

    return useQuery<Issuer[], Error>({
        queryKey: ["issuers"],
        queryFn: fetchIssuers,
    });
};

export { useIssuers };
