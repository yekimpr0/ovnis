# 🛸 Sistema de Análisis de Encuentros UAP / FANI

¡Bienvenido al sistema oficial desclasificado del **Departamento de Guerra**! Esta plataforma web interactiva y responsiva está diseñada para registrar, analizar y catalogar datos telemétricos de **Fenómenos Anómalos No Identificados (FANI / UAP)**, combinando una estética cinematográfica de ciencia ficción con un potente motor de evaluación algorítmica.

---

## 🎨 Características Visuales y Novedades

El proyecto cuenta con una interfaz premium basada en la estética **Cyberpunk / Sci-Fi**, diseñada minuciosamente para ofrecer un alto impacto visual:
* **Identidad Visual Eléctrica:** Paleta de colores de alto contraste basada en negros profundos (`#040712`), cian eléctrico (`#00f2fe`), fucsia vibrante (`#ff007f`) y violeta de energía (`#7000ff`).
* **Tipografía de Vanguardia:** Implementación integral de la fuente **Poppins** para una legibilidad moderna, limpia y profesional.
* **Integración Social Integrada:** Íconos de redes sociales estilizados y ubicados estratégicamente en la esquina superior derecha (X, Facebook, Instagram, YouTube) con efectos de iluminación flotante al pasar el cursor (*hover*).
* **Efecto de Escáner Láser:** Animación CSS de barrido de radar (`@keyframes sweep`) aplicada sobre capturas de imágenes para simular un sensor óptico militar en tiempo real.

---

## 📽️ Módulos y Funcionalidades

### 1. Repositorio Multimedia Enriquecido (Galería)
Una sección multimedia expandida que combina video interactivo e imágenes estáticas mediante un diseño asimétrico usando **CSS Grid**:
* **Videos Reales del Pentágono:** Incorporación de reproductores embebidos de YouTube que muestran material desclasificado real, incluyendo las misiones **FLIR1**, **GIMBAL** y **GOFAST**.
* **Capturas Multiespectrales:** Secciones de fotografía fija que simulan análisis de satélite y radar de superficie con descripciones detalladas de los vectores y anomalías.

### 2. Analizador / Simulador Interactivo de Evidencias
Una consola web inteligente que calcula la confiabilidad de un avistamiento OVNI en base a variables ponderadas introducidas por el usuario:
* **Formulario de Captura:** Permite ingresar el nombre del reporte, ubicación, volumen de testigos credenciales, tipo de instrumentación disponible (video, imagen fija, radar) y la existencia de explicaciones científicas ordinarias.
* **Algoritmo de Evaluación:** Un script de JavaScript procesa aritméticamente los inputs sumando o restando relevancia según el nivel de evidencia física e instrumental.
* **Consola de Diagnóstico:** Muestra dinámicamente un *Badge de Estado* y una caja de *Protocolo de Respuesta Estratégica*. Las tarjetas cambian de color de forma interactiva (Verde para evidencia fuerte, Amarillo para moderada y Rojo para baja confiabilidad) aplicando sombras de luz de neón reactivas.

---

## 🛠️ Tecnologías Utilizadas

Para el desarrollo de este sistema se utilizaron tecnologías web nativas estructuradas bajo buenas prácticas de maquetación:

1.  **HTML5:** Estructuración semántica del documento (`<header>`, `<nav>`, `<main>`, `<section>`, `<iframe>`, `<footer>`), garantizando un código limpio y legible para sistemas de auditoría web.
2.  **CSS3 (Flexbox & CSS Grid):** * **Flexbox:** Utilizado en la barra de navegación superior, distribución del logo y alineación de los botones de redes sociales en la cabecera.
    * **CSS Grid:** Utilizado para la distribución responsive de la galería multimedia (`wide-gallery-grid`) y para la disposición en dos columnas asimétricas de la consola del simulador.
    * **Efectos Avanzados:** Gradientes lineales de neón (`linear-gradient`), filtros de desenfoque de fondo (`backdrop-filter`) y animaciones nativas avanzadas.
3.  **JavaScript (ES6+):** Manipulación dinámica del Árbol de Documentos (**DOM**), captura de eventos (`submit`, `click`), lógica condicional para el algoritmo matemático de puntuación y gestión dinámica de clases CSS para las alertas de neón.
4.  **Font Awesome (v6.4.0):** Librería externa de vectores de iconos para redes sociales e indicadores de interfaz táctica.
5.  **Google Fonts:** Consumo de fuentes tipográficas en la nube (Familia *Poppins*).

---

## 🚀 Instrucciones de Despliegue

Para visualizar y ejecutar la plataforma de simulación en su estación de trabajo local:

1.  Descargue o clone los archivos del proyecto manteniendo la siguiente estructura de directorios:
    ```bash
    ├── index.html
    ├── css/
    │   └── estilos.css
    ├── js/
    │   └── script.js
    └── README.md
    ```
2.  Abra el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Microsoft Edge, Mozilla Firefox o Safari).
3.  Asegúrese de contar con una conexión activa a Internet para permitir la carga correcta de la fuente *Poppins*, los iconos de *Font Awesome* y la reproducción de los videos oficiales integrados desde los servidores de YouTube.

---
*Portal de desclasificación desarrollado con fines académicos y de simulación de sistemas de información.*
