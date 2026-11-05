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

> Los talleres clásicos (1 a 7) usan el mismo alfabeto: el inglés de 26 letras (`A`–`Z`), definido en `src/utils/alfabeto.ts`. Antes de cifrar, el texto se pasa a mayúsculas, se le quitan las tildes (la `Ñ` pasa a `N`) y se descartan los espacios y cualquier otro carácter.

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

Implementación del cifrado de **libreta de un solo uso** (One-Time Pad): el mensaje se cifra con una llave aleatoria, tan larga como el mensaje, y el proceso inverso recupera el texto claro.

**Historia:** Gilbert Vernam patentó en 1917 el cifrado de teletipo con XOR y cinta de llave, y Joseph Mauborgne propuso que la llave fuera aleatoria y de un solo uso. En 1949 Claude Shannon demostró que, bajo esas condiciones, el sistema ofrece **secreto perfecto**.

**Funcionamiento:** se combina cada símbolo del mensaje con el símbolo correspondiente de la llave (XOR a nivel de bits, o suma módulo el tamaño del alfabeto). Para descifrar se aplica la misma operación con la misma llave. Es seguro solo si la llave es verdaderamente aleatoria, de longitud igual a la del mensaje, secreta y nunca reutilizada.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/1/)**

---

### 🔹 Ejercicio 2: Playfair

**Estado:** ✅ Completado

Implementación del **cifrado Playfair**, que cifra el texto en pares de letras (digramas) a partir de una matriz de 5×5 construida con una clave.

**Historia:** lo inventó Charles Wheatstone en 1854, pero lleva el nombre de Lord Playfair, quien lo promovió ante el gobierno británico. Se usó en el ejército británico durante la guerra de los Bóer y la Primera Guerra Mundial, y de nuevo en la Segunda.

**Funcionamiento:** se rellena la matriz con la clave (sin letras repetidas) y luego con el resto del alfabeto, agrupando I/J. El mensaje se divide en digramas. Si las dos letras están en la misma fila, se sustituyen por las de su derecha; si están en la misma columna, por las de abajo; si no, se toman las esquinas del rectángulo que forman. Las letras repetidas en un par se separan con una letra de relleno.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/2/)**

---

### 🔹 Ejercicio 3: Caesar

**Estado:** ✅ Completado

Implementación del **cifrado César**, un cifrado por sustitución monoalfabética basado en un desplazamiento fijo del alfabeto.

**Historia:** debe su nombre a Julio César, que según Suetonio lo usaba para sus comunicaciones militares con un desplazamiento de 3 posiciones. Es uno de los cifrados más antiguos conocidos y hoy solo tiene valor didáctico, ya que solo hay 25 claves posibles y se rompe por fuerza bruta o análisis de frecuencias.

**Funcionamiento:** cada letra se reemplaza por la que está *k* posiciones adelante en el alfabeto: `C = (P + k) mod n`. Para descifrar se resta el desplazamiento: `P = (C − k) mod n`.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/3/)**

---

### 🔹 Ejercicio 4: Vigenère

**Estado:** ✅ Completado

Implementación del **cifrado de Vigenère**, un cifrado por sustitución polialfabética que usa una palabra clave repetida.

**Historia:** lo describió Giovan Battista Bellaso en 1553, aunque se le atribuyó erróneamente a Blaise de Vigenère, que publicó una variante en 1586. Se le llamó «le chiffre indéchiffrable» durante siglos, hasta que Friedrich Kasiski publicó un método general para romperlo en 1863 (Charles Babbage ya lo había logrado antes sin publicarlo).

**Funcionamiento:** la clave se repite a lo largo del mensaje y cada letra se desplaza según la letra de la clave que le corresponde: `C = (P + K) mod 26`. Así, una misma letra del texto claro puede cifrarse de formas distintas, lo que oculta las frecuencias del idioma.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/4/)**

---

### 🔹 Ejercicio 5: Hill

**Estado:** ✅ Completado

Implementación del **cifrado de Hill**, un cifrado por bloques basado en álgebra lineal.

**Historia:** lo publicó el matemático Lester S. Hill en 1929. Fue el primer cifrado poligráfico que permitía operar con más de tres letras a la vez de forma práctica. Es vulnerable a ataques de texto claro conocido por ser completamente lineal, pero influyó en el diseño de cifrados modernos.

**Funcionamiento:** el mensaje se convierte en números y se divide en bloques de tamaño *n*. La clave es una matriz *K* de *n×n* invertible módulo 26. Cada bloque se cifra como `C = K · P mod 26`, y se descifra con la matriz inversa: `P = K⁻¹ · C mod 26`.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/5/)**

---

### 🔹 Ejercicio 6: Homofónico

**Estado:** ✅ Completado

Implementación del **cifrado homofónico**, una sustitución en la que cada letra puede representarse con varios símbolos distintos.

**Historia:** su origen se remonta al siglo XV; uno de los primeros usos documentados es el del duque de Mantua hacia 1401. Se creó para contrarrestar el análisis de frecuencias, que rompía las sustituciones simples, y se usó en la diplomacia europea durante siglos.

**Funcionamiento:** a las letras más frecuentes se les asignan más símbolos, en proporción a su frecuencia en el idioma. Al cifrar, se elige uno de los homófonos disponibles de cada letra (de forma aleatoria o rotativa). Esto aplana la distribución de frecuencias del texto cifrado, y para descifrar basta con invertir la tabla, pues cada símbolo corresponde a una sola letra.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/6/)**

---

### 🔹 Ejercicio 7: Turning Grille

**Estado:** ✅ Completado

Implementación del **cifrado de rejilla giratoria** (Turning Grille), un cifrado por transposición.

**Historia:** la idea se atribuye a Girolamo Cardano en el siglo XVI. La versión giratoria fue propuesta por el coronel austriaco Eduard Fleissner von Wostrowitz en 1881 y la usó el ejército alemán en la Primera Guerra Mundial.

**Funcionamiento:** se usa una plantilla cuadrada con algunos huecos, colocados de modo que, al girarla 90° tres veces, cada celda de la cuadrícula quede descubierta exactamente una vez. Se escriben las letras del mensaje en los huecos, se gira la plantilla y se continúa hasta llenar la cuadrícula. El texto cifrado se lee fila por fila. Para descifrar se coloca la misma plantilla y se leen las letras en el orden en que se escribieron.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/7/)**

---

### 🔹 Ejercicio 8: DES

**Estado:** ✅ Completado

Cifrado de imágenes con el **Data Encryption Standard (DES)**.

**Historia:** deriva del cifrado *Lucifer* de IBM, diseñado por Horst Feistel. El NBS (hoy NIST) lo adoptó como estándar federal en 1977. Su clave efectiva de 56 bits se volvió insuficiente: en 1998 la EFF construyó una máquina capaz de romperlo en días. Fue reemplazado por AES, aunque su variante Triple DES se usó durante años más.

**Funcionamiento:** es un cifrado de bloque de 64 bits con una red de Feistel de 16 rondas. Tras una permutación inicial, el bloque se divide en dos mitades; en cada ronda la función F expande la mitad derecha, la combina con una subclave de 48 bits mediante XOR, aplica ocho cajas de sustitución (S-boxes) y una permutación. Al final se aplica la permutación inversa. Descifrar es el mismo proceso con las subclaves en orden inverso.

👉 **[Ver ejercicio](https://cripto-2026-2.netlify.app/8/)**

---

### 🔹 Ejercicio 9: AES

**Estado:** ✅ Completado

Cifrado de imágenes con el **Advanced Encryption Standard (AES)**. Recibe una imagen en cualquier formato y una clave, permite elegir el nivel de seguridad (128, 192 o 256 bits), muestra el resultado en Base64 (también en consola) y permite descifrarlo para recuperar la imagen original.

**Historia:** en 1997 el NIST convocó un concurso público para sustituir a DES. Ganó el algoritmo *Rijndael*, de los belgas Joan Daemen y Vincent Rijmen, y se publicó como estándar (FIPS 197) en 2001. Hoy es el cifrado simétrico más extendido y no se conocen ataques prácticos contra él.

**Funcionamiento:** es un cifrado de bloque de 128 bits con claves de 128, 192 o 256 bits, que realiza 10, 12 o 14 rondas respectivamente. El bloque se organiza como una matriz de 4×4 bytes y cada ronda aplica `SubBytes` (sustitución con una S-box), `ShiftRows` (desplazamiento de filas), `MixColumns` (mezcla de columnas) y `AddRoundKey` (XOR con la subclave); la última ronda omite `MixColumns`. En este taller la clave se deriva de la contraseña con SHA-256 y se usa el modo CBC con un IV aleatorio, que se guarda al inicio del Base64.

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
