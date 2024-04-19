import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// Configurar el proxy middleware
const apiProxy = createProxyMiddleware({
  target: 'https://c17-56-t-java-server.onrender.com', // Cambia la URL a la del servidor remoto
  changeOrigin: true, // Necesario para sitios alojados virtualmente
});

// Montar el middleware de proxy en la aplicación
app.use('/api', apiProxy); // Todas las solicitudes a /api serán redirigidas al servidor remoto

// Otro middleware y rutas de la aplicación...

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor Express escuchando en el puerto 3000');
});