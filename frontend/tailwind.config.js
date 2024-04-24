/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      backgroundImage: {
        fondocard: "url('./src/assets/img/Bannerpaciente.png')",
      },
      // Extiende los colores de fondo
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        primarygrey: "#757575",
        primaryazul: "#0D47A1",
        acento: "#F7931E",
        principal: "#0D47A1",
        secundariouno: "#1976D2",
        secundariodos: "#90CAF9",
        celestetreinta: "#DEEFFD",
        celestediez: "#E9F4FE",
        texto: "#514D4D",
        iconoinputs: "#838080",
        iconoayudainputs: "#C1C0C0", 
        textoinputs: "#9CA3AF",
        fondoclaro: "#E6E6E6",
        fondodiez: "#EEEDED",
        alertas: "#E54A1A",
        alertatreinta: "#F1C2B4",
        alertasdos: "#027A48",
        alertasdostreinta: "#ADD1C2",
        activo: "#D1FAE5",
        activoletra: "#065F46",
        inactivo: "#F1C2B4",

      },
      // Extiende los colores de texto
      textColor: {
        primary: "#FFFFFF",
        secondary: "#000000",
      },
      // Extiende las imágenes de fondo
      backgroundImage: {
        "hero-pattern": "url('/path/to/your/image.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      // Agrega los estilos de tipografía para Poppins
      fontSize: {
        "thin": "100",
        "extralight": "200",
        "light": "300",
        "regular": "400",
        "medium": "500",
        "semibold": "600",
        "bold": "700",
        "extrabold": "800",
        "black": "900",
      },
      // Puedes agregar más estilos de tipografía según lo necesites
      // Por ejemplo, para itálicas
      fontStyle: {
        "thin": "normal",
        "extralight": "normal",
        "light": "normal",
        "regular": "normal",
        "medium": "normal",
        "semibold": "normal",
        "bold": "normal",
        "extrabold": "normal",
        "black": "normal",
        "thin-italic": "italic",
        "extralight-italic": "italic",
        "light-italic": "italic",
        "regular-italic": "italic",
        "medium-italic": "italic",
        "semibold-italic": "italic",
        "bold-italic": "italic",
        "extrabold-italic": "italic",
        "black-italic": "italic",
      },
  
      // Extiende los espaciados
      spacing: {
        px: "1px",
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
      },
      //Extiende las alturas
      height: {
        18: "4.5rem", // Aproximadamente 70px
      },
      // Extiende los anchos de borde
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        4: "4px",
        8: "8px",
      },
      // Extiende los radios de borde
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
      },
      // Extiende las sombras
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
