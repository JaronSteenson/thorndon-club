import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#64bb46',
                link: '#468430',
                secondary: colors.purple,
                neutral: colors.gray,
            },
            screens: {
                sm: '460px',
            },
        },
    },
    plugins: [],
};
export default config;
