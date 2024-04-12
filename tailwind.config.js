/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                main: "#151718",
                paragraph: "#848484",
                heading: "#303031",
                bgcolor: "#F9F9F9",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
