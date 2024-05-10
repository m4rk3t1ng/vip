My Vip Experience Page (solucionado problema google fonts)

- Para que funcione con la última versión de node, ejecutar primero este comando:
  export NODE_OPTIONS=--openssl-legacy-provider

- La libería de “gatsby-plugin-prefetch-google-fonts” no funciona, así que se reemplaza por "gatsby-plugin-google-fonts”. Hay que tocar gatsby-conf.js para cambiar el ajuste de una librería por el de la otra.

- Iniciar con:
  npm run develop