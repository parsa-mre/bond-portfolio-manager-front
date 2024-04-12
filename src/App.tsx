// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { MainPage } from "./pages/MainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Theme } from "@mui/material/styles";

const queryClient = new QueryClient();

function App() {
    const [theme, colorMode] = useMode();
    return (
        <QueryClientProvider client={queryClient}>
            <ColorModeContext.Provider
                value={{ ...colorMode, toggleColorMode: () => {} }}
            >
                <ThemeProvider theme={theme as Partial<Theme>}>
                    <MainPage />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </QueryClientProvider>
    );
}

export default App;
