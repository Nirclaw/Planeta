# PlanetaIP - Solución a la Prueba Técnica

## Descripción del Proyecto

Esta aplicación web es la solución a la prueba técnica enviada por la empresa **PlanetaIP**. El objetivo de la prueba era desarrollar una aplicación utilizando **React** y **Next.js** que interactuara con una API de red social. Dado que la API recomendada no funcionaba correctamente, se utilizó una API alternativa para cumplir con los requisitos de la prueba.

## Requerimientos

### Funcionalidades Implementadas

- **Autenticación**: Iniciar sesión utilizando un autenticador externo (Google).

- Visualización de Posts

  : Mostrar en el home los posts de los usuarios, incluyendo:

  - Foto y nombre del usuario que hizo el post.S
  - Imagen y texto del post.
  - Tags del post.

- Modales

  - Modal con toda la información del usuario que hizo el post.

- **Filtrado de Posts**: Filtrar los posts por tags.

- **Información del Usuario**: Mostrar la información del usuario autenticado en el header.

## Tecnologías Utilizadas

- **React** (v18)
- **Next.js** (v14)
- **TypeScript**
- **Autenticación con Google**
- **API para Posts y Usuarios**: Se utilizó una API alternativa debido a problemas con la API recomendada.

## Instalación y Ejecución

### Ejecución en Vercel

La aplicación está desplegada en Vercel y se puede acceder de manera virtual sin necesidad de instalación local.

https://planeta-zfkc.vercel.app

### Ejecución Local

1. **Clonar el Repositorio**:

   ```bash


   git clone https://github.com/Nirclaw/Planeta.git

   ```

2. **Instalar Dependencias**:Navega al directorio del proyecto y ejecuta:

   ```bash


   npm install

   ```

3. **Configuración del Entorno**:

   - La aplicación utiliza un archivo `.env` para la configuración de las credenciales de Google.
   - Estas credenciales están preconfiguradas y funcionarán hasta que sean desactivadas.

4. **Ejecutar la Aplicación**:

   - Para iniciar la aplicación en un entorno de desarrollo, ejecuta:

   ```bash

   npm run dev

   ```

## Funcionalidades de la Página

- **Autenticación con Google**: Para acceder a la aplicación y visualizar la información, es necesario iniciar sesión con una cuenta de Google.
- **Filtrado de Personajes**: La aplicación permite filtrar personajes de la serie "Rick and Morty" según su estado:
  - **Vivos**
  - **Muertos**
  - **Desaparecidos**

Estas funcionalidades permiten una experiencia interactiva y personalizada al usuario, enfocada en la temática de "Rick and Morty".

## Notas Adicionales

- Se hizo el uso de **hooks**,  **atomic design** y **TypeScript** para el desarrollo de esta aplicación.
- La API recomendada no funcionaba correctamente, por lo que se utilizó una alternativa que permitió cumplir con los requisitos de la prueba.