/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        100: "30rem",
        128: "33rem",
        132: "34rem",
      },
      colors: {
        charcoal: "#1D1F21", // Background color
        gunmetal: "#2E3239", // Secondary background
        darkNavy: "#101820", // Darker navy for background
        lightGray: "#E0E0E0", // Primary text color
        silver: "#D3D3D3", // Secondary text color
        vibrantPurple: "#8B5CF6", // Accent color
        cyanBlue: "#06B6D4", // Accent color for interactive elements
        electricBlue: "#3B82F6", // Strong accent for buttons/links
        neonGreen: "#10B981", // Highlights, success messages
        crimsonRed: "#EF4444", // Error messages
        amberYellow: "#F59E0B", // Warning messages
        slateGray: "#374151", // Note dividers, sections
        steelBlue: "#4B5563", // Section backgrounds/dividers
        royalPurple: "#6D28D9", // Primary button color
        teal: "#14B8A6", // Secondary button color

        // light theme
        lightGray: "#F7F7F7",        // Background color
        darkGray: "#333333",         // Primary text color
        mediumGray: "#555555",       // Secondary text color

        brightBlue: "#4A90E2",       // Primary accent color
        turquoise: "#50E3C2",        // Secondary accent color

        royalBlue: "#007BFF",        // Button background
        darkBlue: "#0056b3",         // Button hover
        linkBlue: "#007BFF",         // Link color
      },
    },
  },
  plugins: [],
};
