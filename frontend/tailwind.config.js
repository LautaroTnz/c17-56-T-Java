/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     // Extiende los colores de fondo
     colors: {
      'primary': '#FFFFFF',
      'secondary': '#000000',
      'primarygrey': '#757575',
    },
    // Extiende los colores de texto
    textColor: {
      'primary': '#FFFFFF',
      'secondary': '#000000', 
    },
    // Extiende las imágenes de fondo
    backgroundImage: {
      'hero-pattern': "url('/path/to/your/image.jpg')",
    },
    // Extiende las fuentes
    fontFamily: {
      sans: ['Arial', 'Helvetica', 'sans-serif'],
      serif: ['Georgia', 'serif'],
    },
    // Extiende los tamaños de fuente
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
    // Extiende los espaciados
    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
    },
    // Extiende los anchos de borde
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    // Extiende los radios de borde
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
    },
    // Extiende las sombras
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    },
  },
},
  plugins: [],
}

