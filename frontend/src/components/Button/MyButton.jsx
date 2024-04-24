import React from "react";

const MyButton = ({ onClick, expanded }) => {
  const rotation = expanded ? "rotate-180" : ""; // Rotar el SVG 180 grados si está expandido

  return (
    <button
      className={`absolute top-10 h-6 w-6 transform -translate-y-1/2 right-[-12px] rounded-full ${rotation}`} // Aplicar la rotación si está expandido
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="24"
          width="24"
          height="24"
          rx="12"
          transform="rotate(90 24 0)"
          fill="#90CAF9"
        />
        <g opacity="0.8">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9478 11.9991L9.44998 16.5347C9.11707 16.8709 9.11707 17.413 9.44998 17.7491C9.60861 17.9097 9.82497 18 10.0506 18C10.2763 18 10.4927 17.9097 10.6513 17.7491L15.7498 12.6072C16.0837 12.2714 16.0837 11.7286 15.7498 11.3928L10.6515 6.25089C10.4927 6.09032 10.2763 6 10.0506 6C9.82497 6 9.60861 6.09032 9.45019 7.46527L13.9478 11.9991Z"
            fill="url(#paint0_radial_643_4852)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9478 11.9991L9.44998 16.5347C9.11707 16.8709 9.11707 17.413 9.44998 17.7491C9.60861 17.9097 9.82497 18 10.0506 18C10.2763 18 10.4927 17.9097 10.6513 17.7491L15.7498 12.6072C16.0837 12.2714 16.0837 11.7286 15.7498 11.3928L10.6515 6.25089C10.4927 6.09032 10.2763 6 10.0506 6C9.82497 6 9.60861 6.09032 9.45019 7.46527L13.9478 11.9991Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9478 11.9991L9.44998 16.5347C9.11707 16.8709 9.11707 17.413 9.44998 17.7491C9.60861 17.9097 9.82497 18 10.0506 18C10.2763 18 10.4927 17.9097 10.6513 17.7491L15.7498 12.6072C16.0837 12.2714 16.0837 11.7286 15.7498 11.3928L10.6515 6.25089C10.4927 6.09032 10.2763 6 10.0506 6C9.82497 6 9.60861 6.09032 9.45019 7.46527L13.9478 11.9991Z"
            fill="white"
            fillOpacity="0.24"
            style={{ mixBlendMode: "overlay" }}
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_643_4852"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(12.6002 12) scale(3.4 6)"
          >
            <stop stopColor="#CC8B8B" /> {/* Corregido */}
            <stop offset="1" stopColor="#A33B3B" />
          </radialGradient>
        </defs>
      </svg>
    </button>
  );
};

export default MyButton;
