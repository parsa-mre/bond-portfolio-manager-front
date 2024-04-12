import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Issuers from "./pages/issuers";
import IssuerForm from "./pages/issuers/IssuerForm";
import Map from "./pages/statistics/Map";
import Bonds from "./pages/bonds";
import BondForm from "./pages/bonds/BondForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/issuers",
                element: <Issuers />,
            },
            {
                path: "/create-issuers",
                element: <IssuerForm />,
            },
            {
                path: "/stats",
                element: <Map />,
            },
            {
                path: "/bonds",
                element: <Bonds />,
            },
            {
                path: "/create-bonds",
                element: <BondForm />,
            },
        ],
    },
]);

export default router;
