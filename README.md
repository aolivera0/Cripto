# 🔐 Cripto

![Status](https://img.shields.io/badge/status-en%20desarrollo-yellow)
![Astro](https://img.shields.io/badge/Astro-7.x-orange?logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green)

Repositorio dedicado al desarrollo y documentación de los ejercicios prácticos de la asignatura **Introducción a la Criptografía y Seguridad de la Información**.

El proyecto reúne diferentes implementaciones relacionadas con conceptos fundamentales de **criptografía, seguridad informática y protección de la información**, desarrolladas progresivamente durante el semestre **2026-2**.

🌐 **Aplicación:** https://cripto-2026-2.netlify.app/

📦 **Repositorio:** https://github.com/aolivera0/Cripto

---

## 📚 Contenido

| # | Ejercicio | Tema | Estado |
|---|-----------|------|--------|
| 01 | OTP | One-Time Pad | ✅ Completado |
| 02 | Playfair | Cifrado por digramas | ✅ Completado |
| 03 | Caesar | Cifrado por desplazamiento | ✅ Completado |
| 04 | Vigenère | Cifrado polialfabético | ✅ Completado |
| 05 | Hill | Cifrado matricial | ✅ Completado |
| 06 | Homofónico | Cifrado homofónico | ✅ Completado |
| 07 | Turning Grille | Cifrado por transposición con rejilla | ✅ Completado |
| 08 | DES | Cifrado de imágenes con DES | ✅ Completado |
| 09 | AES | Cifrado de imágenes con AES (128/192/256 bits) | ✅ Completado |

> Esta tabla se irá actualizando a medida que se desarrollen nuevos ejercicios.

---

## 🎯 Objetivos

Este proyecto tiene como objetivos:

- Aplicar conceptos fundamentales de criptografía.
- Comprender los principios de seguridad de la información.
- Implementar algoritmos y técnicas criptográficas mediante código.
- Analizar las ventajas, limitaciones y posibles vulnerabilidades de diferentes mecanismos de seguridad.
- Experimentar con conceptos de **confidencialidad, integridad, autenticación y no repudio**.
- Documentar de forma clara el proceso y los resultados de cada ejercicio.
- Consolidar los conocimientos adquiridos durante la asignatura mediante implementaciones prácticas.

---

## 🧩 Ejercicios

### 🔹 Ejercicio 1: OTP

**Estado:** ✅ Completado

One-Time Pad.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/1/)**

---

### 🔹 Ejercicio 2: Playfair

**Estado:** ✅ Completado

Cifrado por digramas.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/2/)**

---

### 🔹 Ejercicio 3: Caesar

**Estado:** ✅ Completado

Cifrado por desplazamiento.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/3/)**

---

### 🔹 Ejercicio 4: Vigenère

**Estado:** ✅ Completado

Cifrado polialfabético.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/4/)**

---

### 🔹 Ejercicio 5: Hill

**Estado:** ✅ Completado

Cifrado matricial.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/5/)**

---

### 🔹 Ejercicio 6: Homofónico

**Estado:** ✅ Completado

Cifrado homofónico.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/6/)**

---

### 🔹 Ejercicio 7: Turning Grille

**Estado:** ✅ Completado

Cifrado por transposición con rejilla.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/7/)**

---

### 🔹 Ejercicio 8: DES

**Estado:** ✅ Completado

Cifrado de imágenes con DES.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/8/)**

---

### 🔹 Ejercicio 9: AES

**Estado:** ✅ Completado

Cifrado de imágenes con AES. Recibe una imagen en cualquier formato y una clave, permite elegir el nivel de seguridad (128, 192 o 256 bits), muestra el resultado en Base64 (también en consola) y permite descifrarlo para recuperar la imagen original.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/9/)**

---

## 🛠️ Tecnologías

El proyecto está construido utilizando principalmente:

- **[Astro](https://astro.build/)** — Framework utilizado para la construcción de la aplicación web.
- **TypeScript** — Lenguaje utilizado para el desarrollo.
- **[crypto-js](https://github.com/brix/crypto-js)** — Implementación de DES y AES usada en los talleres 8 y 9.
- **Tailwind CSS** — Estilos de la interfaz.
- **HTML / CSS** — Estructura y estilos de la interfaz.
- **JavaScript** — Lógica de la aplicación.

A medida que se incorporen nuevos ejercicios, podrán añadirse nuevas tecnologías o librerías cuando sean necesarias.

---

## 📁 Estructura del proyecto

```text
Cripto/
├── public/
│   └── ...
│
├── src/
│   ├── components/
│   │   └── ...
│   │
│   ├── layouts/
│   │   └── ...
│   │
│   └── pages/
│       └── ...
│
├── .gitignore
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

La estructura podrá evolucionar a medida que aumente el número de ejercicios.

---

## 🚀 Instalación y ejecución

### Requisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/)
- npm

### Clonar el repositorio

```bash
git clone https://github.com/aolivera0/Cripto.git
cd Cripto
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible normalmente en:

```text
http://localhost:4321
```

### Crear una versión de producción

```bash
npm run build
```

### Previsualizar la versión de producción

```bash
npm run preview
```

---

## 🔬 Enfoque académico

Este repositorio no busca únicamente presentar las soluciones finales de los ejercicios. La intención es utilizarlo como un **registro del proceso de aprendizaje**, mostrando cómo los conceptos teóricos de criptografía y seguridad pueden transformarse en implementaciones funcionales. De esta manera, el repositorio sirve tanto como evidencia del trabajo realizado durante la asignatura como material de consulta posterior.

---

## 👨‍💻 Autor

**Angel Olivera**

Estudiante de Ingeniería de Sistemas de la Universidad Nacional de Colombia.

Este proyecto fue desarrollado como parte de la asignatura:

> **Introducción a la Criptografía y Seguridad de la Información — 2026-2**

---
