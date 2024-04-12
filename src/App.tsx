// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { MainPage } from "./pages/MainPage";
import DataTable from "./pages/datatable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
const queryClient = new QueryClient();

function App() {
    const [theme, colorMode] = useMode();
    return (
        <QueryClientProvider client={queryClient}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <MainPage />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </QueryClientProvider>
    );
}

export default App;
